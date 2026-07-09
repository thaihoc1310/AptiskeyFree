// Simple hash-based router
const routes = {};
let currentRoute = null;

export function route(path, handler) {
  routes[path] = handler;
}

export function navigate(path) {
  window.location.href = `/#${path}`;
}

export function getCurrentPath() {
  return window.location.hash.slice(1) || '/';
}

function normalizeAppRouteUrl() {
  if (!window.location.pathname.startsWith('/crawled_data/html/')) return false;
  if (!window.location.hash.startsWith('#/')) return false;
  window.history.replaceState(null, '', `/${window.location.hash}`);
  return true;
}

function handleRoute() {
  normalizeAppRouteUrl();
  const path = getCurrentPath();
  if (path === currentRoute) return;
  currentRoute = path;

  // Try exact match first
  if (routes[path]) {
    routes[path]();
    return;
  }

  // Try pattern match (e.g., /reading/:id)
  for (const [pattern, handler] of Object.entries(routes)) {
    const regex = new RegExp('^' + pattern.replace(/:[^/]+/g, '([^/]+)') + '$');
    const match = path.match(regex);
    if (match) {
      handler(...match.slice(1));
      return;
    }
  }

  // 404 fallback
  if (routes['*']) routes['*']();
}

export function startRouter() {
  normalizeAppRouteUrl();
  document.addEventListener('click', (event) => {
    const anchor = event.target.closest?.('a[href]');
    if (!anchor) return;
    const href = anchor.getAttribute('href');
    if (!href?.startsWith('#/')) return;
    event.preventDefault();
    window.location.href = `/${href}`;
  });
  window.addEventListener('hashchange', handleRoute);
  handleRoute();
}

// Helper to set page content
export function setContent(html) {
  const el = document.getElementById('app-content');
  if (el) {
    el.innerHTML = html;
    el.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    window.requestAnimationFrame(() => {
      el.scrollTop = 0;
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    });
    // Trigger animations
    el.querySelectorAll('.animate-fade-in').forEach((el, i) => {
      el.style.animationDelay = `${i * 0.05}s`;
    });
  }
}
