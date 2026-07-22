import { getCurrentPath } from './router.js';
import heroImage from '../assets/hero.png';

const NAV_ITEMS = [
  { section: 'HỌC TẬP' },
  {
    icon: 'bi-book', label: 'Học Reading', color: 'var(--accent-reading)',
    children: [
      { icon: 'bi-question-circle', label: 'Học theo câu hỏi', path: '/reading/question' },
      { icon: 'bi-stack', label: 'Học theo bộ đề', path: '/reading/bode' },
      { icon: 'bi-lightbulb', label: 'Mẹo học nhanh', path: '/reading/meo' },
    ]
  },
  {
    icon: 'bi-headphones', label: 'Học Listening', color: 'var(--accent-listening)',
    children: [
      { icon: 'bi-question-circle', label: 'Học theo câu hỏi', path: '/listening/question' },
      { icon: 'bi-stack', label: 'Học theo bộ đề', path: '/listening/bode' },
      { icon: 'bi-lightbulb', label: 'Mẹo học nhanh', path: '/listening/meo' },
    ]
  },
  {
    icon: 'bi-pencil-square', label: 'Học Writing', color: 'var(--accent-writing)',
    children: [
      { icon: 'bi-stack', label: 'Học câu lạc bộ', path: '/writing/bode' },
      { icon: 'bi-lightbulb', label: 'Mẹo viết thư', path: '/writing/meo' },
    ]
  },
  {
    icon: 'bi-mic', label: 'Học Speaking', color: 'var(--accent-speaking)',
    children: [
      { icon: 'bi-question-circle', label: 'Học theo câu hỏi', path: '/speaking/question' },
      { icon: 'bi-lightbulb', label: 'Mẹo học nhanh', path: '/speaking/meo' },
    ]
  },
  {
    icon: 'bi-translate', label: 'Học Grammar', color: 'var(--accent-grammar)',
    children: [
      { icon: 'bi-stack', label: 'Học theo bộ đề', path: '/grammar/bode' },
      { icon: 'bi-lightbulb', label: 'Mẹo ngữ pháp', path: '/grammar/meo' },
    ]
  },
  { section: 'KHÁC' },
  { icon: 'bi-calculator', label: 'Tính điểm Overall', path: '/score-logic', color: 'var(--accent-grammar)' },
];

export function renderSidebar(user) {
  const currentPath = getCurrentPath();
  let html = `
    <aside class="sidebar" id="sidebar">
      <a href="#/" class="sidebar-brand" aria-label="Về trang chủ">
        <div class="sidebar-brand-logo"><img src="${heroImage}" alt="" /></div>
        <span class="sidebar-brand-text">AptiskeyFree</span>
      </a>
      <nav class="sidebar-nav">`;

  for (const item of NAV_ITEMS) {
    if (item.section) {
      html += `<div class="sidebar-section-title">${item.section}</div>`;
      continue;
    }
    if (item.children) {
      const isOpen = item.children.some(c => isPathActive(currentPath, c.path));
      html += `<div class="nav-item${isOpen ? ' open' : ''}">
        <a href="#" class="nav-parent" style="--item-color:${item.color}">
          <i class="bi ${item.icon}" style="color:${item.color}"></i>
          <span class="sidebar-text">${item.label}</span>
          <i class="bi bi-chevron-right nav-arrow"></i>
        </a>
        <div class="nav-sub">`;
      for (const child of item.children) {
        const active = isPathActive(currentPath, child.path) ? ' active' : '';
        html += `<div class="nav-item">
          <a href="#${child.path}" class="nav-link${active}">
            <i class="bi ${child.icon}"></i>
            <span class="sidebar-text">${child.label}</span>
          </a>
        </div>`;
      }
      html += `</div></div>`;
    } else if (item.external) {
      html += `<div class="nav-item">
        <a href="${item.external}" target="_blank" rel="noopener">
          <i class="bi ${item.icon}"></i>
          <span class="sidebar-text">${item.label}</span>
        </a>
      </div>`;
    } else {
      const active = isPathActive(currentPath, item.path) ? ' active' : '';
      html += `<div class="nav-item">
        <a href="#${item.path}" class="nav-link${active}">
          <i class="bi ${item.icon}"></i>
          <span class="sidebar-text">${item.label}</span>
        </a>
      </div>`;
    }
  }

  if (user?.role === 'admin') {
    const active = isPathActive(currentPath, '/admin') ? ' active' : '';
    html += `<div class="sidebar-section-title">QUẢN TRỊ</div>
      <div class="nav-item">
        <a href="#/admin" class="nav-link${active}">
          <i class="bi bi-people"></i>
          <span class="sidebar-text">Quản lý tài khoản</span>
        </a>
      </div>`;
  }

  html += `</nav></aside><div class="sidebar-overlay" id="sidebarOverlay"></div>`;
  return html;
}

export function initSidebar() {
  // Toggle parent menus
  document.querySelectorAll('.nav-parent').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      el.closest('.nav-item').classList.toggle('open');
    });
  });

  // Mobile toggle
  const overlay = document.getElementById('sidebarOverlay');
  if (overlay) {
    overlay.addEventListener('click', () => {
      document.getElementById('sidebar')?.classList.remove('mobile-open');
    });
  }

  syncActiveNav();
  window.addEventListener('hashchange', syncActiveNav);
}

function isPathActive(currentPath, itemPath) {
  if (!itemPath) return false;
  return currentPath === itemPath || currentPath.startsWith(`${itemPath}/`);
}

function syncActiveNav() {
  const currentPath = getCurrentPath();
  document.querySelectorAll('.sidebar .nav-link').forEach((link) => {
    const href = link.getAttribute('href') || '';
    const itemPath = href.startsWith('#') ? href.slice(1) : href;
    link.classList.toggle('active', isPathActive(currentPath, itemPath));
  });

  document.querySelectorAll('.sidebar .nav-item.open').forEach((item) => {
    item.classList.remove('open');
  });

  document.querySelectorAll('.sidebar .nav-link.active').forEach((link) => {
    link.closest('.nav-sub')?.closest('.nav-item')?.classList.add('open');
  });
}

export function renderHeader(user, title = 'Trang chủ', breadcrumbs = []) {
  let bc = '';
  const isAdmin = user?.role === 'admin';
  for (const b of breadcrumbs) {
    if (bc) bc += `<span class="sep">/</span>`;
    if (b.path) bc += `<a href="#${b.path}">${b.label}</a>`;
    else bc += `<span>${b.label}</span>`;
  }

  return `
    <header class="header" id="header">
      <div class="header-left">
        <button class="header-toggle" id="sidebarToggle" aria-label="Toggle sidebar">
          <i class="bi bi-list"></i>
        </button>
        <div class="breadcrumb">${bc}</div>
      </div>
      <div class="header-right">
        <button class="theme-toggle" id="themeToggle" aria-label="Toggle theme">
          <i class="bi bi-moon-stars"></i>
        </button>
        <div class="avatar-container">
          <button class="header-avatar" id="userAvatar" type="button" aria-label="Mở menu tài khoản">${(user?.username || 'K').slice(0, 1).toUpperCase()}</button>
          <div class="avatar-dropdown" id="avatarDropdown">
            <div class="dropdown-user">
              <span>${(user?.username || '').replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')}</span>
              <small>${user?.role === 'admin' ? 'Quản trị viên' : 'Học viên'}</small>
            </div>
            <button type="button" class="dropdown-account-link" id="changePasswordBtn"><i class="bi bi-key"></i>Đổi mật khẩu</button>
            ${isAdmin ? '<a href="#/admin" class="dropdown-admin-link"><i class="bi bi-people"></i>Quản lý tài khoản</a>' : ''}
            <div class="dropdown-header">Lịch sử cập nhật đề</div>
            <div class="dropdown-body" id="dropdownUpdateLogs">
              <div class="dropdown-loading">
                <i class="bi bi-arrow-repeat spin"></i> Đang tải cập nhật...
              </div>
            </div>
            <div class="dropdown-footer">
              <button id="viewAllUpdatesBtn" class="view-all-btn">Xem tất cả</button>
              <button id="logoutBtn" class="logout-btn" type="button"><i class="bi bi-box-arrow-right"></i>Đăng xuất</button>
            </div>
          </div>
        </div>
      </div>
    </header>`;
}

export function initHeader({ onLogout, onChangePassword } = {}) {
  document.getElementById('sidebarToggle')?.addEventListener('click', () => {
    const sidebar = document.getElementById('sidebar');
    // Mobile: toggle mobile-open
    if (window.innerWidth <= 992) {
      sidebar?.classList.toggle('mobile-open');
    } else {
      sidebar?.classList.toggle('collapsed');
      document.getElementById('header')?.classList.toggle('sidebar-collapsed');
      document.querySelector('.app-main')?.classList.toggle('sidebar-collapsed');
    }
  });

  document.getElementById('themeToggle')?.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
    const icon = document.querySelector('#themeToggle i');
    if (icon) icon.className = isDark ? 'bi bi-moon-stars' : 'bi bi-sun';
  });

  const avatar = document.getElementById('userAvatar');
  const dropdown = document.getElementById('avatarDropdown');

  if (avatar && dropdown) {
    document.getElementById('logoutBtn')?.addEventListener('click', () => onLogout?.());
    document.getElementById('changePasswordBtn')?.addEventListener('click', () => {
      dropdown.classList.remove('show');
      dropdown.style.display = 'none';
      onChangePassword?.();
    });
    avatar.addEventListener('click', async (e) => {
      e.stopPropagation();
      const isOpen = dropdown.classList.contains('show');

      if (isOpen) {
        dropdown.classList.remove('show');
        dropdown.style.display = 'none';
      } else {
        dropdown.classList.add('show');
        dropdown.style.display = 'flex';

        try {
          const { updates, isLive } = await getLatestUpdates();
          renderDropdownLogs(updates);

          // Click handler for log items to open modal
          document.querySelectorAll('.dropdown-log-item').forEach(el => {
            el.addEventListener('click', () => {
              dropdown.classList.remove('show');
              dropdown.style.display = 'none';
              showUpdatesModal(updates, isLive);
            });
          });

          // Click handler for "Xem tất cả" button
          const viewAllBtn = document.getElementById('viewAllUpdatesBtn');
          if (viewAllBtn) {
            viewAllBtn.onclick = () => {
              dropdown.classList.remove('show');
              dropdown.style.display = 'none';
              showUpdatesModal(updates, isLive);
            };
          }
        } catch (err) {
          console.error(err);
        }
      }
    });

    // Close dropdown on click outside
    document.addEventListener('click', (e) => {
      if (!avatar.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove('show');
        dropdown.style.display = 'none';
      }
    });
  }
}

// Fallback static updates in case fetch fails
const FALLBACK_UPDATES = [
  { date: "8/7/2026", text: "Reading part1 (học theo câu hỏi): thêm bộ đề 33-35." },
  { date: "7/7/2026", text: "Reading part1 (học theo câu hỏi): thêm bộ đề 26-32." },
  { date: "6/7/2026", text: "Reading part1 (học theo câu hỏi): thêm bộ đề 21-25." },
  { date: "5/7/2026", text: "Reading part1 (học theo câu hỏi): thêm bộ đề 14-20." },
  { date: "1/7/2026", text: "Thêm 3 bộ đề listening mới (013, 014, 015) với Q14: New museum, Q15: Children & Tech / Environmental / Local Culture!." },
  { date: "1/7/2026", text: "Thêm chủ đề mẹo listening câu 15: Work Business / Business and Cultural!." },
  { date: "25/6/2026", text: "Thêm đề listening question 14: New museum in town!." },
  { date: "25/6/2026", text: "Thêm đề listening question 15: Local Culture diffirent!." },
  { date: "18/6/2026", text: "Thêm đề listening question 15: Environmental volunteer program!." },
  { date: "12/6/2026", text: "Thêm đề mới lis question 15 đề 13!." }
];

let cachedUpdates = null;
let isCachedLive = false;

async function getLatestUpdates() {
  if (cachedUpdates) {
    return { updates: cachedUpdates, isLive: isCachedLive };
  }

  // Try fetching from local crawled data first (works on both localhost and production)
  const sources = ['/crawled_data/js/js_home.js'];

  // On localhost, also try the live proxy as fallback
  const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  if (isLocal) {
    sources.push('/aptiskey-live/js/home.js');
  }

  for (const url of sources) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4000);

      const res = await fetch(url, { signal: controller.signal });
      clearTimeout(timeoutId);

      if (!res.ok) continue;

      const jsText = await res.text();

      const match = jsText.match(/const\s+updates\s*=\s*(\[[\s\S]*?\])\s*;/);
      if (match) {
        const parsed = new Function(`return ${match[1]}`)();
        if (Array.isArray(parsed) && parsed.length > 0) {
          cachedUpdates = parsed;
          isCachedLive = true;
          return { updates: parsed, isLive: true };
        }
      }
    } catch (err) {
      console.warn(`Failed to fetch updates from ${url}:`, err.message);
    }
  }

  return { updates: FALLBACK_UPDATES, isLive: false };
}

function renderDropdownLogs(updates) {
  const container = document.getElementById('dropdownUpdateLogs');
  if (!container) return;

  const recent = updates.slice(0, 5);
  container.innerHTML = recent.map(item => {
    // Strip HTML tags for clean text display inside dropdown
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = item.text;
    const cleanText = tempDiv.textContent || tempDiv.innerText || '';

    return `
      <div class="dropdown-log-item" style="cursor: pointer;">
        <span class="log-date">${item.date}</span>
        <span class="log-text">${cleanText}</span>
      </div>
    `;
  }).join('');
}

function showUpdatesModal(updates, isLive = true) {
  document.getElementById('updatesModal')?.remove();

  const modalHtml = `
    <div class="updates-modal-overlay" id="updatesModal">
      <div class="updates-modal-container">
        <div class="updates-modal-header">
          <div class="updates-modal-title">
            <i class="bi bi-journal-text" style="color: var(--primary-light);"></i>
            <span>Lịch sử cập nhật đề</span>
          </div>
          <button class="updates-close-btn" id="closeUpdatesModal">&times;</button>
        </div>
        <div class="updates-modal-body">
          <div class="updates-timeline">
            ${updates.map(item => `
              <div class="timeline-item">
                <div class="timeline-date">${item.date}</div>
                <div class="timeline-content">${item.text}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHtml);

  // Close event listeners
  const modal = document.getElementById('updatesModal');
  const closeBtn = document.getElementById('closeUpdatesModal');
  closeBtn?.addEventListener('click', () => modal?.remove());
  modal?.addEventListener('click', (e) => {
    if (e.target === modal || e.target.closest('a')) {
      modal.remove();
    }
  });
}
