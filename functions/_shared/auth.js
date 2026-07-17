import { HttpError } from './http.js';

export const SESSION_SECONDS = 24 * 60 * 60;
export const PASSWORD_ITERATIONS = 210_000;
export const SESSION_COOKIE = 'aptiskey_session';

const encoder = new TextEncoder();
const JWT_ISSUER = 'aptiskey-pages';
const JWT_AUDIENCE = 'aptiskey-app';

function bytesToBase64Url(bytes) {
  let binary = '';
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replaceAll('+', '-').replaceAll('/', '_').replace(/=+$/g, '');
}

function base64UrlToBytes(value) {
  const padded = value.replaceAll('-', '+').replaceAll('_', '/') + '='.repeat((4 - (value.length % 4)) % 4);
  const binary = atob(padded);
  return Uint8Array.from(binary, (character) => character.charCodeAt(0));
}

function encodeJson(value) {
  return bytesToBase64Url(encoder.encode(JSON.stringify(value)));
}

function decodeJson(value) {
  return JSON.parse(new TextDecoder().decode(base64UrlToBytes(value)));
}

function requireSecret(env) {
  const secret = env.JWT_SECRET;
  if (typeof secret !== 'string' || secret.length < 32) {
    throw new HttpError(500, 'auth_not_configured', 'JWT_SECRET chưa được cấu hình đúng.');
  }
  return secret;
}

function requireDatabase(env) {
  if (!env.DB || typeof env.DB.prepare !== 'function') {
    throw new HttpError(500, 'database_not_configured', 'D1 binding DB chưa được cấu hình.');
  }
  return env.DB;
}

async function hmacKey(secret) {
  return crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign', 'verify'],
  );
}

export async function createSessionToken(user, env) {
  const now = Math.floor(Date.now() / 1000);
  const header = encodeJson({ alg: 'HS256', typ: 'JWT' });
  const payload = encodeJson({
    iss: JWT_ISSUER,
    aud: JWT_AUDIENCE,
    sub: user.id,
    username: user.username,
    role: user.role,
    ver: Number(user.token_version),
    csrf: randomToken(24),
    jti: crypto.randomUUID(),
    iat: now,
    exp: now + SESSION_SECONDS,
  });
  const content = `${header}.${payload}`;
  const signature = await crypto.subtle.sign('HMAC', await hmacKey(requireSecret(env)), encoder.encode(content));
  return `${content}.${bytesToBase64Url(new Uint8Array(signature))}`;
}

export async function verifySessionToken(token, env) {
  if (!token || typeof token !== 'string') return null;
  const parts = token.split('.');
  if (parts.length !== 3) return null;

  try {
    const header = decodeJson(parts[0]);
    if (header.alg !== 'HS256' || header.typ !== 'JWT') return null;

    const content = `${parts[0]}.${parts[1]}`;
    const valid = await crypto.subtle.verify(
      'HMAC',
      await hmacKey(requireSecret(env)),
      base64UrlToBytes(parts[2]),
      encoder.encode(content),
    );
    if (!valid) return null;

    const payload = decodeJson(parts[1]);
    const now = Math.floor(Date.now() / 1000);
    if (
      payload.iss !== JWT_ISSUER ||
      payload.aud !== JWT_AUDIENCE ||
      typeof payload.sub !== 'string' ||
      typeof payload.exp !== 'number' ||
      payload.exp <= now ||
      payload.iat > now + 60
    ) return null;
    return payload;
  } catch (error) {
    if (error instanceof HttpError) throw error;
    return null;
  }
}

export function getCookie(request, name) {
  const cookie = request.headers.get('cookie') || '';
  for (const entry of cookie.split(';')) {
    const separator = entry.indexOf('=');
    if (separator === -1) continue;
    if (entry.slice(0, separator).trim() === name) return entry.slice(separator + 1).trim();
  }
  return null;
}

export function sessionCookie(token, request) {
  const secure = new URL(request.url).protocol === 'https:' ? '; Secure' : '';
  return `${SESSION_COOKIE}=${token}; Path=/; HttpOnly${secure}; SameSite=Lax; Max-Age=${SESSION_SECONDS}`;
}

export function clearSessionCookie(request) {
  const secure = new URL(request.url).protocol === 'https:' ? '; Secure' : '';
  return `${SESSION_COOKIE}=; Path=/; HttpOnly${secure}; SameSite=Lax; Max-Age=0`;
}

export async function getTokenPayload(request, env) {
  return verifySessionToken(getCookie(request, SESSION_COOKIE), env);
}

export async function getAuthenticatedUser(request, env) {
  const payload = await getTokenPayload(request, env);
  if (!payload) return null;

  const user = await requireDatabase(env)
    .prepare(`SELECT id, username, role, is_active, token_version, created_at, updated_at, last_login_at
              FROM users WHERE id = ? LIMIT 1`)
    .bind(payload.sub)
    .first();
  if (!user || !Number(user.is_active) || Number(user.token_version) !== Number(payload.ver)) return null;
  return { ...user, is_active: Boolean(user.is_active), csrfToken: payload.csrf };
}

export async function requireUser(request, env) {
  const user = await getAuthenticatedUser(request, env);
  if (!user) throw new HttpError(401, 'unauthorized', 'Phiên đăng nhập không hợp lệ hoặc đã hết hạn.');
  return user;
}

export async function requireAdmin(request, env) {
  const user = await requireUser(request, env);
  if (user.role !== 'admin') throw new HttpError(403, 'forbidden', 'Bạn không có quyền quản trị.');
  return user;
}

export function requireCsrf(request, user) {
  const supplied = request.headers.get('x-csrf-token');
  if (!supplied || !user.csrfToken || supplied !== user.csrfToken) {
    throw new HttpError(403, 'invalid_csrf', 'Yêu cầu bảo mật không hợp lệ. Hãy tải lại trang.');
  }
}

export function normalizeUsername(value) {
  return String(value || '').trim().toLowerCase();
}

export function validateUsername(username) {
  if (!/^[a-z0-9][a-z0-9._-]{2,31}$/.test(username)) {
    throw new HttpError(400, 'invalid_username', 'Tên đăng nhập phải có 3–32 ký tự: chữ thường, số, dấu chấm, gạch dưới hoặc gạch ngang.');
  }
}

export function validatePassword(password) {
  if (typeof password !== 'string' || password.length < 10 || password.length > 128) {
    throw new HttpError(400, 'invalid_password', 'Mật khẩu phải có từ 10 đến 128 ký tự.');
  }
}

async function derivePassword(password, salt, iterations) {
  const material = await crypto.subtle.importKey('raw', encoder.encode(password), 'PBKDF2', false, ['deriveBits']);
  const bits = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', hash: 'SHA-256', salt: encoder.encode(salt), iterations },
    material,
    256,
  );
  return bytesToBase64Url(new Uint8Array(bits));
}

export async function hashPassword(password, salt = randomToken(24), iterations = PASSWORD_ITERATIONS) {
  validatePassword(password);
  return { hash: await derivePassword(password, salt, iterations), salt, iterations };
}

export async function verifyPassword(password, user) {
  if (typeof password !== 'string' || password.length > 128) return false;
  const candidate = await derivePassword(password, user.password_salt, Number(user.password_iterations));
  const left = encoder.encode(candidate);
  const right = encoder.encode(user.password_hash);
  if (left.length !== right.length) return false;
  let mismatch = 0;
  for (let index = 0; index < left.length; index += 1) mismatch |= left[index] ^ right[index];
  return mismatch === 0;
}

export function randomToken(byteLength = 24) {
  return bytesToBase64Url(crypto.getRandomValues(new Uint8Array(byteLength)));
}

export function publicUser(user) {
  return {
    id: user.id,
    username: user.username,
    role: user.role,
    isActive: Boolean(user.is_active),
    createdAt: user.created_at,
    updatedAt: user.updated_at,
    lastLoginAt: user.last_login_at || null,
  };
}
