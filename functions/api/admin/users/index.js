import {
  hashPassword,
  normalizeUsername,
  publicUser,
  requireAdmin,
  requireCsrf,
  validateUsername,
} from '../../../_shared/auth.js';
import { errorResponse, HttpError, json, methodNotAllowed, readJson } from '../../../_shared/http.js';

function validateRole(value) {
  if (value !== 'user' && value !== 'admin') {
    throw new HttpError(400, 'invalid_role', 'Vai trò không hợp lệ.');
  }
  return value;
}

export async function onRequestGet({ request, env }) {
  try {
    await requireAdmin(request, env);
    const url = new URL(request.url);
    const search = String(url.searchParams.get('search') || '').trim().slice(0, 64);
    const query = search
      ? env.DB.prepare(`SELECT id, username, role, is_active, created_at, updated_at, last_login_at
                        FROM users WHERE username LIKE ? ESCAPE '\\'
                        ORDER BY CASE role WHEN 'admin' THEN 0 ELSE 1 END, created_at DESC LIMIT 200`)
        .bind(`%${search.replaceAll('\\', '\\\\').replaceAll('%', '\\%').replaceAll('_', '\\_')}%`)
      : env.DB.prepare(`SELECT id, username, role, is_active, created_at, updated_at, last_login_at
                        FROM users
                        ORDER BY CASE role WHEN 'admin' THEN 0 ELSE 1 END, created_at DESC LIMIT 200`);
    const result = await query.all();
    return json({ users: (result.results || []).map(publicUser) });
  } catch (error) {
    return errorResponse(error);
  }
}

export async function onRequestPost({ request, env }) {
  try {
    const admin = await requireAdmin(request, env);
    requireCsrf(request, admin);
    const body = await readJson(request);
    const username = normalizeUsername(body.username);
    validateUsername(username);
    const role = validateRole(body.role || 'user');
    const password = await hashPassword(body.password);
    const now = new Date().toISOString();
    const id = crypto.randomUUID();

    try {
      await env.DB.prepare(`INSERT INTO users
        (id, username, password_hash, password_salt, password_iterations, role, is_active,
         token_version, created_at, updated_at, created_by)
        VALUES (?, ?, ?, ?, ?, ?, 1, 1, ?, ?, ?)`)
        .bind(id, username, password.hash, password.salt, password.iterations, role, now, now, admin.id)
        .run();
    } catch (error) {
      if (String(error.message || '').toLowerCase().includes('unique')) {
        throw new HttpError(409, 'username_exists', 'Tên đăng nhập này đã tồn tại.');
      }
      throw error;
    }

    const created = await env.DB.prepare(`SELECT id, username, role, is_active, created_at, updated_at, last_login_at
                                           FROM users WHERE id = ?`).bind(id).first();
    return json({ user: publicUser(created) }, 201);
  } catch (error) {
    return errorResponse(error);
  }
}

export function onRequest() {
  return methodNotAllowed(['GET', 'POST']);
}
