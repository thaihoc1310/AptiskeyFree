// Speaking question navigation
export function renderSpeakingQuestion() {
  const parts = [
    { num: 1, title: 'Part 1 — Personal Information', desc: 'Trả lời câu hỏi về bản thân.', color: 'var(--accent-speaking)', path: '/speaking/question/1', practice: '/speaking/practice/1' },
    { num: 2, title: 'Part 2 — Describe a Photo', desc: 'Mô tả hình ảnh chi tiết.', color: 'var(--primary-light)', path: '/speaking/question/2', practice: '/speaking/practice/2' },
    { num: 3, title: 'Part 3 — Compare & Contrast', desc: 'So sánh hai hình ảnh.', color: 'var(--accent-listening)', path: '/speaking/question/3', practice: '/speaking/practice/3' },
    { num: 4, title: 'Part 4 — Discussion', desc: 'Thảo luận chủ đề phức tạp.', color: 'var(--accent-writing)', path: '/speaking/question/4', practice: '/speaking/practice/4' },
  ];

  let html = `
    <div class="page-header animate-fade-in">
      <div class="page-header-icon" style="background: linear-gradient(135deg, var(--accent-speaking), var(--accent-speaking-light));"><i class="bi bi-mic"></i></div>
      <div><h1>Speaking — Học theo câu hỏi</h1><p>Luyện nói với 4 phần thi</p></div>
    </div>
    <div class="grid grid-2 part-grid">`;
  for (const p of parts) {
    html += `
      <a href="#${p.path}" class="part-card animate-fade-in" style="--part-color: ${p.color}">
        <div class="part-card-top"><div class="part-num">Part ${p.num}</div></div>
        <h3>${p.title}</h3><p>${p.desc}</p>
        <div class="part-card-action">
          <span>Bắt đầu</span>
          <i class="bi bi-arrow-right"></i>
        </div>
      </a>`;
  }
  html += `</div>`;
  return html;
}

// Writing bode navigation
const WRITING_CLUBS = {
  '001': 'Art club',
  '002': 'Beautiful homes club',
  '003': 'Book club',
  '004': 'Business club',
  '005': 'Car club',
  '006': 'Cinema club',
  '007': 'College club',
  '008': 'Community club',
  '009': 'Computer club',
  '010': 'Cooking club',
  '011': 'Debate club',
  '012': 'English club',
  '013': 'Film club',
  '014': 'Fitness club',
  '015': 'Food club',
  '016': 'Garden club',
  '017': 'Healthy club',
  '018': 'Home living club',
  '019': 'Language club',
  '020': 'Language club 2',
  '021': 'Movie club',
  '022': 'Museum club',
  '023': 'Music club',
  '024': 'Nature club',
  '025': 'Outdoor club',
  '026': 'Photography club',
  '027': 'Reading club',
  '028': 'Science club',
  '029': 'Social club',
  '030': 'Sports club',
  '031': 'Technology club',
  '032': 'Television club',
  '033': 'Travel club',
  '034': 'Travel club 2',
  '035': 'Walking club',
  '036': 'Writing club',
  '037': 'Fashion club',
  '038': 'English club 2',
  '039': 'English club 3',
  '040': 'Nature club 2',
};

function getWritingClubIcon(clubName) {
  const name = clubName.toLowerCase();
  if (name.includes('art')) return 'bi-palette';
  if (name.includes('home')) return 'bi-house-heart';
  if (name.includes('book') || name.includes('reading')) return 'bi-book';
  if (name.includes('business')) return 'bi-briefcase';
  if (name.includes('car')) return 'bi-car-front';
  if (name.includes('cinema') || name.includes('film') || name.includes('movie') || name.includes('television')) return 'bi-film';
  if (name.includes('college')) return 'bi-mortarboard';
  if (name.includes('community') || name.includes('social')) return 'bi-people';
  if (name.includes('computer') || name.includes('technology')) return 'bi-pc-display-horizontal';
  if (name.includes('cooking') || name.includes('food')) return 'bi-cup-hot';
  if (name.includes('debate') || name.includes('english') || name.includes('language') || name.includes('writing')) return 'bi-chat-quote';
  if (name.includes('fitness') || name.includes('healthy') || name.includes('sports') || name.includes('walking')) return 'bi-activity';
  if (name.includes('garden') || name.includes('nature') || name.includes('outdoor')) return 'bi-flower1';
  if (name.includes('museum')) return 'bi-bank';
  if (name.includes('music')) return 'bi-music-note-beamed';
  if (name.includes('photography') || name.includes('fashion')) return 'bi-camera';
  if (name.includes('science')) return 'bi-beaker';
  if (name.includes('travel')) return 'bi-airplane';
  return 'bi-pencil-square';
}

export function renderWritingBode() {
  let html = `
    <div class="page-header animate-fade-in">
      <div class="page-header-icon" style="background: linear-gradient(135deg, var(--accent-writing), var(--accent-writing-light));"><i class="bi bi-pencil-square"></i></div>
      <div><h1>Writing — Học câu lạc bộ</h1><p>40 bộ đề viết thư & essay</p></div>
    </div>
    <div class="grid grid-4 bode-grid">`;
  for (let i = 1; i <= 40; i++) {
    const num = String(i).padStart(3, '0');
    const clubName = WRITING_CLUBS[num] || `Bộ đề #${num}`;
    const icon = getWritingClubIcon(clubName);
    html += `
      <a href="#/writing/key/${num}" class="bode-card animate-fade-in">
        <div class="bode-number bode-icon"><i class="bi ${icon}"></i></div>
        <div class="bode-info"><h4>${clubName}</h4><p>4 câu hỏi Writing</p></div>
        <i class="bi bi-chevron-right bode-arrow"></i>
      </a>`;
  }
  html += `</div>`;
  return html;
}

// Grammar bode navigation
export function renderGrammarBode() {
  let html = `
    <div class="page-header animate-fade-in">
      <div class="page-header-icon" style="background: linear-gradient(135deg, var(--accent-grammar), var(--accent-grammar-light));"><i class="bi bi-translate"></i></div>
      <div><h1>Grammar — Học theo bộ đề</h1><p>9 bộ đề ngữ pháp</p></div>
    </div>
    <div class="grid grid-3 bode-grid">`;
  for (let i = 1; i <= 9; i++) {
    const num = String(i).padStart(3, '0');
    html += `
      <a href="#/grammar/key/${num}" class="bode-card animate-fade-in">
        <div class="bode-number">${num}</div>
        <div class="bode-info"><h4>Bộ đề #${num}</h4><p>Ngữ pháp tổng hợp</p></div>
        <i class="bi bi-chevron-right bode-arrow"></i>
      </a>`;
  }
  html += `</div>`;
  return html;
}
