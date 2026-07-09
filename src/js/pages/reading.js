// Reading question navigation page
export function renderReadingQuestion() {
  const parts = [
    {
      num: 1, title: 'Part 1 — Fill in the Gap',
      desc: 'Chọn từ phù hợp điền vào chỗ trống trong đoạn văn ngắn.',
      icon: 'bi-pencil', color: 'var(--accent-reading)', count: '35+ bộ đề', time: '~6 phút',
      path: '/reading/question/1'
    },
    {
      num: 2, title: 'Part 2 & 3 — Matching & Ordering',
      desc: 'Nối tiêu đề với đoạn văn và sắp xếp câu theo thứ tự.',
      icon: 'bi-sort-down', color: 'var(--accent-speaking)', count: '30+ bộ', time: '~8 phút',
      path: '/reading/question/2'
    },
    {
      num: 4, title: 'Part 4 — Comprehension',
      desc: 'Đọc hiểu đoạn văn dài và trả lời câu hỏi.',
      icon: 'bi-file-text', color: 'var(--accent-listening)', count: '25+ bộ', time: '~10 phút',
      path: '/reading/question/4'
    },
    {
      num: 5, title: 'Part 5 — Extended Reading',
      desc: 'Đọc hiểu mở rộng với nhiều đoạn văn liên kết.',
      icon: 'bi-journal-text', color: 'var(--accent-writing)', count: '20+ bộ', time: '~10 phút',
      path: '/reading/question/5'
    },
  ];

  let html = `
    <div class="page-header animate-fade-in">
      <div class="page-header-icon" style="background: linear-gradient(135deg, var(--accent-reading), var(--accent-reading-light));">
        <i class="bi bi-book"></i>
      </div>
      <div>
        <h1>Reading — Học theo câu hỏi</h1>
        <p>Chọn phần thi bạn muốn luyện tập</p>
      </div>
    </div>
    <div class="grid grid-2 part-grid">`;

  for (const p of parts) {
    html += `
      <a href="#${p.path}" class="part-card animate-fade-in" style="--part-color: ${p.color}">
        <div class="part-card-top">
          <div class="part-num">Part ${p.num}</div>
          <div class="part-meta">
            <span><i class="bi bi-collection"></i> ${p.count}</span>
            <span><i class="bi bi-clock"></i> ${p.time}</span>
          </div>
        </div>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="part-card-action">
          <span>Bắt đầu luyện tập</span>
          <i class="bi bi-arrow-right"></i>
        </div>
      </a>`;
  }
  html += `</div>`;
  return html;
}

// Reading bode navigation page
export function renderReadingBode() {
  let html = `
    <div class="page-header animate-fade-in">
      <div class="page-header-icon" style="background: linear-gradient(135deg, var(--accent-reading), var(--accent-reading-light));">
        <i class="bi bi-stack"></i>
      </div>
      <div>
        <h1>Reading — Học theo bộ đề</h1>
        <p>12 bộ đề đầy đủ 5 phần thi</p>
      </div>
    </div>
    <div class="grid grid-3 bode-grid">`;

  for (let i = 1; i <= 12; i++) {
    const num = String(i).padStart(3, '0');
    html += `
      <a href="#/reading/key/${num}" class="bode-card animate-fade-in">
        <div class="bode-number">${num}</div>
        <div class="bode-info">
          <h4>Bộ đề #${num}</h4>
          <p>5 phần thi đầy đủ</p>
        </div>
        <i class="bi bi-chevron-right bode-arrow"></i>
      </a>`;
  }
  html += `</div>`;
  return html;
}
