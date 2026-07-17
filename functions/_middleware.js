import { clearSessionCookie, getAuthenticatedUser, getTokenPayload } from './_shared/auth.js';
import { errorResponse, json } from './_shared/http.js';

const PUBLIC_PATHS = new Set(['/login', '/api/auth/login']);

function isDocumentRequest(request) {
  const pathname = new URL(request.url).pathname;
  return pathname === '/' || pathname.endsWith('.html') ||
    request.headers.get('sec-fetch-dest') === 'document' ||
    (request.method === 'GET' && (request.headers.get('accept') || '').includes('text/html'));
}

function loginRedirect(request) {
  const current = new URL(request.url);
  const login = new URL('/login', current.origin);
  login.searchParams.set('next', `${current.pathname}${current.search}`);
  return new Response(null, { status: 302, headers: { Location: login.toString() } });
}

export async function onRequest(context) {
  const { request, env } = context;
  const pathname = new URL(request.url).pathname;
  if (PUBLIC_PATHS.has(pathname)) return context.next();

  try {
    // Validate against D1 for documents so disabled/deleted users are revoked
    // immediately. API handlers do their own D1 authorization; static assets
    // only need the signed, 24-hour JWT.
    const authenticated = isDocumentRequest(request)
      ? await getAuthenticatedUser(request, env)
      : await getTokenPayload(request, env);

    if (!authenticated) {
      if (isDocumentRequest(request)) {
        const response = loginRedirect(request);
        response.headers.append('Set-Cookie', clearSessionCookie(request));
        response.headers.set('Cache-Control', 'no-store');
        return response;
      }
      return json(
        { error: 'unauthorized', message: 'Bạn cần đăng nhập để tiếp tục.' },
        401,
        { 'Set-Cookie': clearSessionCookie(request) },
      );
    }

    context.data.auth = authenticated;
    const response = await context.next();
    if (isDocumentRequest(request)) response.headers.set('Cache-Control', 'private, no-store');
    return response;
  } catch (error) {
    return errorResponse(error);
  }
}
