// Listening question navigation
export function renderListeningQuestion() {
  const parts = [
    { num: '1-13', title: 'Part 1 — Multiple Choice (Q1-13)', desc: 'Nghe audio ngắn và chọn đáp án đúng.', icon: 'bi-headphones', color: 'var(--accent-listening)', path: '/listening/question/1_13' },
    { num: '14', title: 'Part 2 — Matching Opinions (Q14)', desc: '4 người thảo luận, ghép ý kiến đúng người.', icon: 'bi-people', color: 'var(--accent-speaking)', path: '/listening/question/14' },
    { num: '15', title: 'Part 3 — Man/Woman/Both (Q15)', desc: 'Phân biệt ý kiến của nam, nữ hoặc cả hai.', icon: 'bi-gender-ambiguous', color: 'var(--primary-light)', path: '/listening/question/15' },
    { num: '16-17', title: 'Part 4 — Extended Listening (Q16-17)', desc: 'Nghe bài giảng dài, trả lời câu hỏi phức tạp.', icon: 'bi-broadcast', color: 'var(--accent-writing)', path: '/listening/question/16_17' },
  ];

  let html = `
    <div class="page-header animate-fade-in">
      <div class="page-header-icon" style="background: linear-gradient(135deg, var(--accent-listening), var(--accent-listening-light));"><i class="bi bi-headphones"></i></div>
      <div><h1>Listening — Học theo câu hỏi</h1><p>Chọn phần thi bạn muốn luyện tập</p></div>
    </div>
    <div class="grid grid-2 part-grid">`;
  for (const p of parts) {
    html += `
      <a href="#${p.path}" class="part-card animate-fade-in" style="--part-color: ${p.color}">
        <div class="part-card-top"><div class="part-num">Q${p.num}</div></div>
        <h3>${p.title}</h3><p>${p.desc}</p>
        <div class="part-card-action"><span>Bắt đầu</span><i class="bi bi-arrow-right"></i></div>
      </a>`;
  }
  html += `</div>`;
  return html;
}

// Listening bode navigation
export function renderListeningBode() {
  let html = `
    <div class="page-header animate-fade-in">
      <div class="page-header-icon" style="background: linear-gradient(135deg, var(--accent-listening), var(--accent-listening-light));"><i class="bi bi-stack"></i></div>
      <div><h1>Listening — Học theo bộ đề</h1><p>15 bộ đề đầy đủ 4 phần thi với audio</p></div>
    </div>
    <div class="grid grid-3 bode-grid">`;
  for (let i = 1; i <= 15; i++) {
    const num = String(i).padStart(3, '0');
    html += `
      <a href="#/listening/key/${num}" class="bode-card animate-fade-in">
        <div class="bode-number">${num}</div>
        <div class="bode-info"><h4>Bộ đề #${num}</h4><p>4 phần thi + audio</p></div>
        <i class="bi bi-chevron-right bode-arrow"></i>
      </a>`;
  }
  html += `</div>`;
  return html;
}
