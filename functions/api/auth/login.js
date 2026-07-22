import {
  createSessionToken,
  normalizeUsername,
  sessionCookie,
  validateUsername,
  verifyPassword,
} from '../../_shared/auth.js';
import { errorResponse, HttpError, json, methodNotAllowed, readJson } from '../../_shared/http.js';

const MAX_FAILURES = 5;
const LOCK_SECONDS = 15 * 60;
const DUMMY_USER = {
  password_hash: '1Fg97Y5lqU7wZ6roRk9Yz8yN-LorLClwzE9QzF7buzU',
  password_salt: 'aptiskey-dummy-auth-salt',
  password_iterations: 100_000,
};

function clientIp(request) {
  return request.headers.get('cf-connecting-ip') || 'local';
}

export async function onRequestPost(context) {
  const { request, env } = context;
  try {
    if (!env.DB) throw new HttpError(500, 'database_not_configured', 'D1 binding DB chưa được cấu hình.');
    const body = await readJson(request);
    const username = normalizeUsername(body.username);
    validateUsername(username);
    if (typeof body.password !== 'string' || body.password.length > 128) {
      throw new HttpError(401, 'invalid_credentials', 'Tên đăng nhập hoặc mật khẩu không đúng.');
    }

    const now = Math.floor(Date.now() / 1000);
    const attemptKey = `${clientIp(request)}:${username}`;
    const attempt = await env.DB.prepare('SELECT failures, locked_until FROM login_attempts WHERE attempt_key = ?')
      .bind(attemptKey)
      .first();
    if (attempt && Number(attempt.locked_until) > now) {
      throw new HttpError(429, 'login_locked', 'Bạn đã thử quá nhiều lần. Vui lòng thử lại sau 15 phút.');
    }

    const user = await env.DB.prepare(`SELECT id, username, password_hash, password_salt, password_iterations,
                                              role, is_active, token_version
                                       FROM users WHERE username = ? COLLATE NOCASE LIMIT 1`)
      .bind(username)
      .first();
    const passwordValid = await verifyPassword(body.password, user || DUMMY_USER);

    if (!user || !passwordValid) {
      const previousFailures = attempt && Number(attempt.locked_until) === 0 ? Number(attempt.failures) : 0;
      const failures = previousFailures + 1;
      const lockedUntil = failures >= MAX_FAILURES ? now + LOCK_SECONDS : 0;
      await env.DB.prepare(`INSERT INTO login_attempts (attempt_key, failures, locked_until, updated_at)
                            VALUES (?, ?, ?, ?)
                            ON CONFLICT(attempt_key) DO UPDATE SET
                              failures = excluded.failures,
                              locked_until = excluded.locked_until,
                              updated_at = excluded.updated_at`)
        .bind(attemptKey, failures, lockedUntil, new Date().toISOString())
        .run();
      throw new HttpError(401, 'invalid_credentials', 'Tên đăng nhập hoặc mật khẩu không đúng.');
    }

    if (!Number(user.is_active)) {
      throw new HttpError(403, 'account_disabled', 'Tài khoản đã bị khóa. Vui lòng liên hệ quản trị viên.');
    }

    await env.DB.batch([
      env.DB.prepare('DELETE FROM login_attempts WHERE attempt_key = ?').bind(attemptKey),
      env.DB.prepare('UPDATE users SET last_login_at = ?, updated_at = ? WHERE id = ?')
        .bind(new Date().toISOString(), new Date().toISOString(), user.id),
    ]);

    const token = await createSessionToken(user, env);
    return json(
      { ok: true, user: { id: user.id, username: user.username, role: user.role } },
      200,
      { 'Set-Cookie': sessionCookie(token, request, user.role) },
    );
  } catch (error) {
    return errorResponse(error);
  }
}

export function onRequest() {
  return methodNotAllowed(['POST']);
}
