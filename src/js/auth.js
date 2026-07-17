let session = null;

export async function loadSession() {
  const response = await fetch('/api/auth/me', {
    credentials: 'same-origin',
    headers: { Accept: 'application/json' },
  });
  if (!response.ok) {
    const error = new Error('Không thể xác thực phiên đăng nhập.');
    if (response.status === 401) {
      error.isAuthRedirect = true;
      redirectToLogin();
    }
    throw error;
  }
  session = await response.json();
  return session;
}

export function getSession() {
  return session;
}

export function redirectToLogin() {
  const next = `${window.location.pathname}${window.location.search}${window.location.hash}`;
  window.location.replace(`/login?next=${encodeURIComponent(next)}`);
}

export async function logout() {
  if (!session?.csrfToken) return redirectToLogin();
  try {
    await fetch('/api/auth/logout', {
      method: 'POST',
      credentials: 'same-origin',
      headers: { 'X-CSRF-Token': session.csrfToken },
    });
  } finally {
    session = null;
    redirectToLogin();
  }
}

export async function authenticatedFetch(url, options = {}) {
  const headers = new Headers(options.headers || {});
  if (session?.csrfToken && options.method && options.method !== 'GET') {
    headers.set('X-CSRF-Token', session.csrfToken);
  }
  if (options.body && !headers.has('Content-Type')) headers.set('Content-Type', 'application/json');
  const response = await fetch(url, { ...options, headers, credentials: 'same-origin' });
  if (response.status === 401) redirectToLogin();
  return response;
}
