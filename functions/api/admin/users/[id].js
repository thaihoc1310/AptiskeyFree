import {
  hashPassword,
  publicUser,
  requireAdmin,
  requireCsrf,
} from '../../../_shared/auth.js';
import { errorResponse, HttpError, json, methodNotAllowed, readJson } from '../../../_shared/http.js';

async function findUser(env, id) {
  const user = await env.DB.prepare(`SELECT id, username, role, is_active, token_version,
                                            created_at, updated_at, last_login_at
                                     FROM users WHERE id = ? LIMIT 1`).bind(id).first();
  if (!user) throw new HttpError(404, 'user_not_found', 'Không tìm thấy tài khoản.');
  return user;
}

async function guardLastAdmin(env, user, nextRole, nextActive) {
  const removesActiveAdmin = user.role === 'admin' && Number(user.is_active) &&
    (nextRole !== 'admin' || !nextActive);
  if (!removesActiveAdmin) return;
  const row = await env.DB.prepare("SELECT COUNT(*) AS total FROM users WHERE role = 'admin' AND is_active = 1").first();
  if (Number(row.total) <= 1) {
    throw new HttpError(409, 'last_admin', 'Không thể khóa hoặc hạ quyền quản trị viên cuối cùng.');
  }
}

export async function onRequestPatch({ request, env, params }) {
  try {
    const admin = await requireAdmin(request, env);
    requireCsrf(request, admin);
    const user = await findUser(env, params.id);
    const body = await readJson(request);
    const hasRole = Object.hasOwn(body, 'role');
    const hasActive = Object.hasOwn(body, 'isActive');
    const hasPassword = Object.hasOwn(body, 'password') && body.password !== '';
    if (!hasRole && !hasActive && !hasPassword) {
      throw new HttpError(400, 'no_changes', 'Không có thay đổi nào để lưu.');
    }

    if (hasActive && typeof body.isActive !== 'boolean') {
      throw new HttpError(400, 'invalid_status', 'Trạng thái tài khoản không hợp lệ.');
    }
    const role = hasRole ? body.role : user.role;
    if (role !== 'user' && role !== 'admin') throw new HttpError(400, 'invalid_role', 'Vai trò không hợp lệ.');
    const isActive = hasActive ? Boolean(body.isActive) : Boolean(user.is_active);
    if (user.id === admin.id && (!isActive || role !== 'admin')) {
      throw new HttpError(409, 'cannot_change_self', 'Bạn không thể tự khóa hoặc hạ quyền tài khoản đang dùng.');
    }
    await guardLastAdmin(env, user, role, isActive);

    const now = new Date().toISOString();
    let password = null;
    if (hasPassword) password = await hashPassword(body.password);
    const invalidatesSession = role !== user.role || isActive !== Boolean(user.is_active) || Boolean(password);

    if (password) {
      await env.DB.prepare(`UPDATE users SET role = ?, is_active = ?, password_hash = ?, password_salt = ?,
                            password_iterations = ?, token_version = token_version + 1, updated_at = ? WHERE id = ?`)
        .bind(role, isActive ? 1 : 0, password.hash, password.salt, password.iterations, now, user.id)
        .run();
    } else {
      await env.DB.prepare(`UPDATE users SET role = ?, is_active = ?,
                            token_version = token_version + ?, updated_at = ? WHERE id = ?`)
        .bind(role, isActive ? 1 : 0, invalidatesSession ? 1 : 0, now, user.id)
        .run();
    }

    const updated = await findUser(env, user.id);
    return json({ user: publicUser(updated) });
  } catch (error) {
    return errorResponse(error);
  }
}

export async function onRequestDelete({ request, env, params }) {
  try {
    const admin = await requireAdmin(request, env);
    requireCsrf(request, admin);
    const user = await findUser(env, params.id);
    if (user.id === admin.id) throw new HttpError(409, 'cannot_delete_self', 'Bạn không thể xóa tài khoản đang dùng.');
    await guardLastAdmin(env, user, 'user', false);
    await env.DB.prepare('DELETE FROM users WHERE id = ?').bind(user.id).run();
    return json({ ok: true });
  } catch (error) {
    return errorResponse(error);
  }
}

export function onRequest() {
  return methodNotAllowed(['PATCH', 'DELETE']);
}
