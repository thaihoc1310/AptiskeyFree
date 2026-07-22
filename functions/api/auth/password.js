import {
  createSessionToken,
  hashPassword,
  publicUser,
  requireCsrf,
  requireUser,
  sessionCookie,
  validatePassword,
  verifyPassword,
} from '../../_shared/auth.js';
import { errorResponse, HttpError, json, methodNotAllowed, readJson } from '../../_shared/http.js';

export async function onRequestPost({ request, env }) {
  try {
    const sessionUser = await requireUser(request, env);
    requireCsrf(request, sessionUser);
    const body = await readJson(request);

    if (typeof body.currentPassword !== 'string' || body.currentPassword.length > 128) {
      throw new HttpError(400, 'invalid_current_password', 'Mật khẩu hiện tại không đúng.');
    }
    validatePassword(body.newPassword);
    if (body.currentPassword === body.newPassword) {
      throw new HttpError(400, 'password_unchanged', 'Mật khẩu mới phải khác mật khẩu hiện tại.');
    }

    const user = await env.DB.prepare(`SELECT id, username, password_hash, password_salt, password_iterations,
                                              role, is_active, token_version, created_at, updated_at, last_login_at
                                       FROM users WHERE id = ? LIMIT 1`)
      .bind(sessionUser.id)
      .first();
    if (!user || !Number(user.is_active)) {
      throw new HttpError(401, 'unauthorized', 'Phiên đăng nhập không hợp lệ hoặc đã hết hạn.');
    }

    if (!await verifyPassword(body.currentPassword, user)) {
      throw new HttpError(400, 'invalid_current_password', 'Mật khẩu hiện tại không đúng.');
    }

    const password = await hashPassword(body.newPassword);
    const now = new Date().toISOString();
    const result = await env.DB.prepare(`UPDATE users
      SET password_hash = ?, password_salt = ?, password_iterations = ?,
          token_version = token_version + 1, updated_at = ?
      WHERE id = ? AND token_version = ?`)
      .bind(password.hash, password.salt, password.iterations, now, user.id, user.token_version)
      .run();

    if (Number(result.meta?.changes) !== 1) {
      throw new HttpError(409, 'session_changed', 'Tài khoản vừa được cập nhật ở nơi khác. Hãy đăng nhập lại.');
    }

    const updatedUser = {
      ...user,
      password_hash: password.hash,
      password_salt: password.salt,
      password_iterations: password.iterations,
      token_version: Number(user.token_version) + 1,
      updated_at: now,
    };
    const token = await createSessionToken(updatedUser, env);
    return json(
      { ok: true, user: publicUser(updatedUser) },
      200,
      { 'Set-Cookie': sessionCookie(token, request, updatedUser.role) },
    );
  } catch (error) {
    return errorResponse(error);
  }
}

export function onRequest() {
  return methodNotAllowed(['POST']);
}
