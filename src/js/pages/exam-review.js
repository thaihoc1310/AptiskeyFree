const DATA_URL = '/crawled_data/exam-reviews.json';
const SOURCE_URL = 'https://aptiskey.com/exam-review.html';
const PAGE_SIZE = 12;

let allReviews = [];
let visibleCount = PAGE_SIZE;

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function formatDate(value, withTime = false) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value || 'Không rõ ngày';
  return new Intl.DateTimeFormat('vi-VN', withTime
    ? { dateStyle: 'short', timeStyle: 'short' }
    : { day: '2-digit', month: '2-digit', year: 'numeric' }).format(date);
}

function dateKey(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function reviewCard(review) {
  const preview = review.content.split(/\r?\n/).find(Boolean) || review.content;
  return `
    <article class="exam-review-card" data-review-id="${review.id}">
      <button class="exam-review-summary" type="button" aria-expanded="false">
        <span class="exam-review-index">#${review.dailyIndex || review.id}</span>
        <span class="exam-review-title">
          <strong>Review ngày ${formatDate(review.createdAt)}</strong>
          <small>${escapeHtml(preview)}</small>
        </span>
        <span class="exam-review-meta">
          <span><i class="bi bi-clock"></i>${formatDate(review.createdAt, true)}</span>
        </span>
        <i class="bi bi-chevron-down exam-review-chevron"></i>
      </button>
      <div class="exam-review-detail" hidden>
        <div class="exam-review-content">${escapeHtml(review.content)}</div>
      </div>
    </article>`;
}

function filteredReviews() {
  const selectedDate = document.getElementById('reviewDateFilter')?.value || '';
  if (!selectedDate) return allReviews;
  return allReviews.filter((review) => dateKey(review.createdAt) === selectedDate);
}

function renderList() {
  const container = document.getElementById('examReviewList');
  const count = document.getElementById('examReviewCount');
  const loadMore = document.getElementById('reviewLoadMore');
  if (!container) return;

  const filtered = filteredReviews();
  const visible = filtered.slice(0, visibleCount);
  if (count) count.textContent = `${filtered.length} review`;

  if (!visible.length) {
    container.innerHTML = `
      <div class="exam-review-empty">
        <i class="bi bi-calendar2-x"></i>
        <strong>Không có review trong ngày này</strong>
        <p>Thử chọn một ngày khác hoặc xóa bộ lọc.</p>
      </div>`;
  } else {
    container.innerHTML = visible.map(reviewCard).join('');
  }

  if (loadMore) loadMore.hidden = visible.length >= filtered.length;
}

function renderError(message) {
  const container = document.getElementById('examReviewList');
  if (!container) return;
  container.innerHTML = `
    <div class="exam-review-empty is-warning">
      <i class="bi bi-cloud-slash"></i>
      <strong>Chưa có dữ liệu review</strong>
      <p>${escapeHtml(message)}</p>
      <a href="${SOURCE_URL}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
        Xem tại Aptiskey.com <i class="bi bi-box-arrow-up-right"></i>
      </a>
    </div>`;
}

export function renderExamReview() {
  return `
    <section class="exam-review-page animate-fade-in">
      <div class="page-header exam-review-header">
        <div class="page-header-icon exam-review-header-icon"><i class="bi bi-chat-square-quote"></i></div>
        <div>
          <span class="exam-review-eyebrow">Góc chia sẻ cộng đồng</span>
          <h1>Review đề thi gần đây</h1>
          <p>Tham khảo trải nghiệm thi thật được cộng đồng chia sẻ và đã duyệt.</p>
        </div>
        <a href="${SOURCE_URL}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary exam-review-source">
          Nguồn Aptiskey.com <i class="bi bi-box-arrow-up-right"></i>
        </a>
      </div>

      <div class="exam-review-toolbar animate-fade-in">
        <div class="exam-review-toolbar-copy">
          <span class="exam-review-live"><i></i>Cập nhật hằng ngày</span>
          <strong id="examReviewCount">Đang tải…</strong>
          <small id="examReviewUpdated"></small>
        </div>
        <div class="exam-review-filter">
          <label for="reviewDateFilter"><i class="bi bi-calendar3"></i>Ngày review</label>
          <input id="reviewDateFilter" type="date">
          <button id="clearReviewFilter" type="button" class="btn btn-secondary" hidden>Xóa lọc</button>
        </div>
      </div>

      <div id="examReviewList" class="exam-review-list" aria-live="polite">
        <div class="exam-review-loading"><span></span><span></span><span></span></div>
      </div>
      <div class="exam-review-more">
        <button id="reviewLoadMore" class="btn btn-secondary" type="button" hidden>
          Xem thêm review <i class="bi bi-arrow-down"></i>
        </button>
      </div>
    </section>`;
}

export async function initExamReview() {
  const dateFilter = document.getElementById('reviewDateFilter');
  const clearFilter = document.getElementById('clearReviewFilter');
  const loadMore = document.getElementById('reviewLoadMore');
  const list = document.getElementById('examReviewList');

  dateFilter?.addEventListener('change', () => {
    visibleCount = PAGE_SIZE;
    if (clearFilter) clearFilter.hidden = !dateFilter.value;
    renderList();
  });
  clearFilter?.addEventListener('click', () => {
    dateFilter.value = '';
    clearFilter.hidden = true;
    visibleCount = PAGE_SIZE;
    renderList();
  });
  loadMore?.addEventListener('click', () => {
    visibleCount += PAGE_SIZE;
    renderList();
  });
  list?.addEventListener('click', (event) => {
    const summary = event.target.closest('.exam-review-summary');
    if (!summary) return;
    const detail = summary.nextElementSibling;
    const expanded = summary.getAttribute('aria-expanded') === 'true';
    summary.setAttribute('aria-expanded', String(!expanded));
    if (detail) detail.hidden = expanded;
  });

  try {
    const response = await fetch(DATA_URL, { cache: 'no-cache' });
    if (!response.ok) throw new Error('Snapshot chưa được tạo. Hãy cấu hình GitHub Secrets và chạy workflow cập nhật.');
    const snapshot = await response.json();
    allReviews = Array.isArray(snapshot.posts) ? snapshot.posts : [];
    visibleCount = PAGE_SIZE;
    const updated = document.getElementById('examReviewUpdated');
    if (updated && snapshot.fetchedAt) updated.textContent = `Dữ liệu lúc ${formatDate(snapshot.fetchedAt, true)}`;
    renderList();
  } catch (error) {
    renderError(error.message);
    const count = document.getElementById('examReviewCount');
    if (count) count.textContent = 'Không có dữ liệu';
  }
}
