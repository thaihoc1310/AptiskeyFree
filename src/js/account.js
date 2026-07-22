import { authenticatedFetch, loadSession } from './auth.js';

async function responseData(response) {
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.message || 'Không thể đổi mật khẩu.');
  return data;
}

export function openChangePasswordModal() {
  document.getElementById('changePasswordModal')?.remove();
  document.body.classList.add('account-modal-open');
  document.body.insertAdjacentHTML('beforeend', `
    <div class="account-modal" id="changePasswordModal">
      <section class="account-dialog" role="dialog" aria-modal="true" aria-labelledby="changePasswordTitle">
        <header class="account-dialog-header">
          <div class="account-dialog-heading">
            <span class="account-dialog-icon"><i class="bi bi-shield-lock"></i></span>
            <div>
              <h2 id="changePasswordTitle">Đổi mật khẩu</h2>
              <p>Các thiết bị khác sẽ phải đăng nhập lại.</p>
            </div>
          </div>
          <button type="button" class="account-dialog-close" data-close-password aria-label="Đóng">
            <i class="bi bi-x-lg"></i>
          </button>
        </header>
        <form class="account-password-form" id="changePasswordForm">
          <label class="account-field">
            <span>Mật khẩu hiện tại</span>
            <input type="password" name="currentPassword" autocomplete="current-password" maxlength="128" required>
          </label>
          <label class="account-field">
            <span>Mật khẩu mới</span>
            <input type="password" name="newPassword" autocomplete="new-password" minlength="10" maxlength="128" required>
          </label>
          <label class="account-field">
            <span>Nhập lại mật khẩu mới</span>
            <input type="password" name="confirmPassword" autocomplete="new-password" minlength="10" maxlength="128" required>
          </label>
          <p class="account-password-hint"><i class="bi bi-info-circle"></i>Dùng ít nhất 10 ký tự.</p>
          <div class="account-password-feedback" id="changePasswordFeedback" role="status" aria-live="polite"></div>
          <div class="account-dialog-actions">
            <button type="button" class="btn btn-secondary" data-close-password>Hủy</button>
            <button type="submit" class="btn btn-primary" id="changePasswordSubmit">
              <i class="bi bi-check2-circle"></i>Đổi mật khẩu
            </button>
          </div>
        </form>
      </section>
    </div>`);

  const modal = document.getElementById('changePasswordModal');
  const form = document.getElementById('changePasswordForm');
  const feedback = document.getElementById('changePasswordFeedback');
  const submit = document.getElementById('changePasswordSubmit');
  let closeTimer = null;

  const close = () => {
    window.clearTimeout(closeTimer);
    document.removeEventListener('keydown', onKeydown);
    modal?.remove();
    document.body.classList.remove('account-modal-open');
  };
  const onKeydown = (event) => {
    if (event.key === 'Escape') close();
  };

  modal?.querySelectorAll('[data-close-password]').forEach((button) => {
    button.addEventListener('click', close);
  });
  modal?.addEventListener('click', (event) => {
    if (event.target === modal) close();
  });
  document.addEventListener('keydown', onKeydown);

  form?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const currentPassword = form.elements.currentPassword.value;
    const newPassword = form.elements.newPassword.value;
    const confirmPassword = form.elements.confirmPassword.value;
    feedback.className = 'account-password-feedback';
    feedback.textContent = '';

    if (newPassword !== confirmPassword) {
      feedback.className = 'account-password-feedback is-error';
      feedback.textContent = 'Mật khẩu nhập lại chưa khớp.';
      form.elements.confirmPassword.focus();
      return;
    }
    if (currentPassword === newPassword) {
      feedback.className = 'account-password-feedback is-error';
      feedback.textContent = 'Mật khẩu mới phải khác mật khẩu hiện tại.';
      form.elements.newPassword.focus();
      return;
    }

    submit.disabled = true;
    submit.innerHTML = '<i class="bi bi-arrow-repeat spin"></i>Đang đổi…';
    try {
      await responseData(await authenticatedFetch('/api/auth/password', {
        method: 'POST',
        body: JSON.stringify({ currentPassword, newPassword }),
      }));
      await loadSession();
      form.reset();
      feedback.className = 'account-password-feedback is-success';
      feedback.textContent = 'Đổi mật khẩu thành công. Phiên trên thiết bị này vẫn được giữ.';
      submit.innerHTML = '<i class="bi bi-check2"></i>Đã đổi';
      closeTimer = window.setTimeout(close, 1600);
    } catch (error) {
      feedback.className = 'account-password-feedback is-error';
      feedback.textContent = error.message;
      submit.disabled = false;
      submit.innerHTML = '<i class="bi bi-check2-circle"></i>Đổi mật khẩu';
    }
  });

  window.requestAnimationFrame(() => form?.elements.currentPassword.focus());
}
