import { clearSessionCookie, requireCsrf, requireUser } from '../../_shared/auth.js';
import { errorResponse, json, methodNotAllowed } from '../../_shared/http.js';

export async function onRequestPost({ request, env }) {
  try {
    const user = await requireUser(request, env);
    requireCsrf(request, user);
    return json({ ok: true }, 200, { 'Set-Cookie': clearSessionCookie(request) });
  } catch (error) {
    return errorResponse(error);
  }
}

export function onRequest() {
  return methodNotAllowed(['POST']);
}
