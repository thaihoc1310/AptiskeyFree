import { authenticatedFetch } from '../auth.js';

let users = [];

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function formatDate(value) {
  if (!value) return 'Chưa đăng nhập';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat('vi-VN', { dateStyle: 'short', timeStyle: 'short' }).format(date);
}

function randomPassword() {
  const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789';
  const bytes = crypto.getRandomValues(new Uint8Array(12));
  return `Ak!${[...bytes].map((byte) => alphabet[byte % alphabet.length]).join('')}`;
}

async function responseData(response) {
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.message || 'Không thể hoàn tất yêu cầu.');
  return data;
}

function notify(message, kind = 'success') {
  const element = document.getElementById('adminNotice');
  if (!element) return;
  element.textContent = message;
  element.className = `admin-notice is-${kind}`;
  window.clearTimeout(notify.timeout);
  notify.timeout = window.setTimeout(() => { element.className = 'admin-notice'; }, 4200);
}

function renderRows() {
  const container = document.getElementById('adminUserRows');
  const count = document.getElementById('adminUserCount');
  if (!container) return;
  if (count) count.textContent = `${users.length} tài khoản`;
  if (!users.length) {
    container.innerHTML = '<div class="admin-empty"><i class="bi bi-person-x"></i><p>Không tìm thấy tài khoản.</p></div>';
    return;
  }

  container.innerHTML = users.map((user) => `
    <article class="admin-user-row${user.isActive ? '' : ' is-disabled'}" data-user-id="${escapeHtml(user.id)}">
      <div class="admin-user-main">
        <span class="admin-user-avatar">${escapeHtml(user.username.slice(0, 1).toUpperCase())}</span>
        <div><strong>${escapeHtml(user.username)}</strong><small>Đăng nhập: ${escapeHtml(formatDate(user.lastLoginAt))}</small></div>
      </div>
      <div class="admin-user-meta">
        <span class="admin-role is-${user.role}">${user.role === 'admin' ? 'Quản trị' : 'Học viên'}</span>
        <span class="admin-status ${user.isActive ? 'is-active' : 'is-locked'}"><i></i>${user.isActive ? 'Hoạt động' : 'Đã khóa'}</span>
      </div>
      <div class="admin-user-date"><small>Ngày tạo</small><span>${escapeHtml(formatDate(user.createdAt))}</span></div>
      <div class="admin-user-actions">
        <button type="button" data-action="role" title="Đổi vai trò"><i class="bi bi-shield-check"></i></button>
        <button type="button" data-action="password" title="Đặt lại mật khẩu"><i class="bi bi-key"></i></button>
        <button type="button" data-action="active" title="${user.isActive ? 'Khóa' : 'Mở khóa'}"><i class="bi ${user.isActive ? 'bi-lock' : 'bi-unlock'}"></i></button>
        <button type="button" data-action="delete" class="is-danger" title="Xóa tài khoản"><i class="bi bi-trash3"></i></button>
      </div>
    </article>`).join('');
}

async function loadUsers(search = '') {
  const container = document.getElementById('adminUserRows');
  if (container) container.innerHTML = '<div class="admin-loading"><i class="bi bi-arrow-repeat"></i>Đang tải tài khoản…</div>';
  try {
    const query = search ? `?search=${encodeURIComponent(search)}` : '';
    const data = await responseData(await authenticatedFetch(`/api/admin/users${query}`));
    users = data.users;
    renderRows();
  } catch (error) {
    if (container) container.innerHTML = `<div class="admin-empty is-error"><p>${escapeHtml(error.message)}</p></div>`;
  }
}

async function updateUser(user, changes, successMessage) {
  const data = await responseData(await authenticatedFetch(`/api/admin/users/${encodeURIComponent(user.id)}`, {
    method: 'PATCH',
    body: JSON.stringify(changes),
  }));
  users = users.map((entry) => entry.id === user.id ? data.user : entry);
  renderRows();
  notify(successMessage);
}

async function handleAction(button) {
  const row = button.closest('[data-user-id]');
  const user = users.find((entry) => entry.id === row?.dataset.userId);
  if (!user) return;
  const action = button.dataset.action;
  button.disabled = true;
  try {
    if (action === 'active') {
      if (!window.confirm(`${user.isActive ? 'Khóa' : 'Mở khóa'} tài khoản “${user.username}”?`)) return;
      await updateUser(user, { isActive: !user.isActive }, `Đã ${user.isActive ? 'khóa' : 'mở khóa'} ${user.username}.`);
    } else if (action === 'role') {
      const nextRole = user.role === 'admin' ? 'user' : 'admin';
      if (!window.confirm(`Đổi “${user.username}” thành ${nextRole === 'admin' ? 'quản trị viên' : 'học viên'}?`)) return;
      await updateUser(user, { role: nextRole }, `Đã cập nhật vai trò của ${user.username}.`);
    } else if (action === 'password') {
      const suggested = randomPassword();
      const password = window.prompt(`Mật khẩu mới cho “${user.username}” (ít nhất 10 ký tự):`, suggested);
      if (password === null) return;
      await updateUser(user, { password }, `Đã đặt lại mật khẩu cho ${user.username}. Mật khẩu mới: ${password}`);
    } else if (action === 'delete') {
      if (!window.confirm(`Xóa vĩnh viễn tài khoản “${user.username}”? Thao tác này không thể hoàn tác.`)) return;
      await responseData(await authenticatedFetch(`/api/admin/users/${encodeURIComponent(user.id)}`, { method: 'DELETE' }));
      users = users.filter((entry) => entry.id !== user.id);
      renderRows();
      notify(`Đã xóa ${user.username}.`);
    }
  } catch (error) {
    notify(error.message, 'error');
  } finally {
    button.disabled = false;
  }
}

export function renderAdmin() {
  return `
    <section class="admin-page animate-fade-in">
      <div class="admin-heading">
        <div><span class="admin-eyebrow">Quản trị hệ thống</span><h1>Quản lý tài khoản</h1><p>Tạo, phân quyền, khóa và đặt lại mật khẩu người dùng.</p></div>
        <button class="btn btn-primary" id="adminOpenCreate" type="button"><i class="bi bi-person-plus"></i>Thêm tài khoản</button>
      </div>
      <div class="admin-stats">
        <article><span><i class="bi bi-people"></i></span><div><small>Tổng hiển thị</small><strong id="adminUserCount">—</strong></div></article>
        <article><span class="is-secure"><i class="bi bi-shield-lock"></i></span><div><small>Bảo mật</small><strong>JWT · 24 giờ</strong></div></article>
        <article><span class="is-database"><i class="bi bi-database-check"></i></span><div><small>Dữ liệu</small><strong>Cloudflare D1</strong></div></article>
      </div>
      <div class="admin-create" id="adminCreatePanel" hidden>
        <div class="admin-section-title"><div><h2>Tạo tài khoản mới</h2><p>Tài khoản có thể đăng nhập ngay sau khi tạo.</p></div><button type="button" id="adminCloseCreate" aria-label="Đóng">×</button></div>
        <form id="adminCreateForm">
          <label><span>Tên đăng nhập</span><input name="username" pattern="[a-z0-9._-]{3,32}" minlength="3" maxlength="32" autocomplete="off" required placeholder="ví dụ: hocvien21"></label>
          <label><span>Mật khẩu</span><div class="admin-password-field"><input name="password" minlength="10" maxlength="128" autocomplete="new-password" required><button type="button" id="adminGeneratePassword">Tạo mới</button></div></label>
          <label><span>Vai trò</span><select name="role"><option value="user">Học viên</option><option value="admin">Quản trị viên</option></select></label>
          <button class="btn btn-primary" type="submit"><i class="bi bi-plus-lg"></i>Tạo tài khoản</button>
        </form>
        <div class="admin-created-result" id="adminCreatedResult" hidden></div>
      </div>
      <div class="admin-list-panel">
        <div class="admin-list-toolbar"><div><h2>Danh sách tài khoản</h2><p>Tối đa 200 tài khoản gần nhất.</p></div><label class="admin-search"><i class="bi bi-search"></i><input id="adminSearch" type="search" placeholder="Tìm tên đăng nhập…"></label></div>
        <div id="adminUserRows"></div>
      </div>
      <div class="admin-notice" id="adminNotice" role="status"></div>
    </section>`;
}

export function initAdmin() {
  const panel = document.getElementById('adminCreatePanel');
  const form = document.getElementById('adminCreateForm');
  document.getElementById('adminOpenCreate')?.addEventListener('click', () => {
    panel.hidden = false;
    form.username.focus();
  });
  document.getElementById('adminCloseCreate')?.addEventListener('click', () => { panel.hidden = true; });
  document.getElementById('adminGeneratePassword')?.addEventListener('click', () => { form.password.value = randomPassword(); });
  form.password.value = randomPassword();

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const submit = form.querySelector('[type="submit"]');
    const credentials = { username: form.username.value.trim().toLowerCase(), password: form.password.value, role: form.role.value };
    submit.disabled = true;
    try {
      await responseData(await authenticatedFetch('/api/admin/users', { method: 'POST', body: JSON.stringify(credentials) }));
      const result = document.getElementById('adminCreatedResult');
      result.hidden = false;
      result.innerHTML = `<div><strong>Đã tạo tài khoản</strong><code>${escapeHtml(credentials.username)} / ${escapeHtml(credentials.password)}</code></div><button type="button">Sao chép</button>`;
      result.querySelector('button').addEventListener('click', async () => {
        await navigator.clipboard.writeText(`${credentials.username}\t${credentials.password}`);
        notify('Đã sao chép tài khoản và mật khẩu.');
      });
      form.reset();
      form.password.value = randomPassword();
      await loadUsers();
    } catch (error) {
      notify(error.message, 'error');
    } finally {
      submit.disabled = false;
    }
  });

  document.getElementById('adminUserRows')?.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-action]');
    if (button) handleAction(button);
  });
  let searchTimer;
  document.getElementById('adminSearch')?.addEventListener('input', (event) => {
    window.clearTimeout(searchTimer);
    searchTimer = window.setTimeout(() => loadUsers(event.target.value.trim()), 250);
  });
  loadUsers();
}
