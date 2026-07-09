import heroImage from '../../assets/hero.png';

export function renderHome() {
  return `
<div class="home-hero animate-fade-in">
  <div class="hero-content">
    <h1 class="hero-title">Ôn luyện <span class="gradient-text">Aptis</span></h1>
    <p class="hero-subtitle">Một không gian luyện Reading, Listening, Speaking, Writing và Grammar với bộ đề, mẹo học và bài thực hành được gom lại thật dễ dùng.</p>
    <div class="hero-actions">
      <a href="#/reading/question" class="btn btn-primary"><i class="bi bi-play-fill"></i>Bắt đầu luyện</a>
      <a href="#/listening/bode" class="btn btn-secondary"><i class="bi bi-soundwave"></i>Nghe bộ đề</a>
    </div>
    <div class="hero-stats">
      <div><strong>90+</strong><span>Bộ luyện tập</span></div>
      <div><strong>5</strong><span>Kỹ năng chính</span></div>
      <div><strong>2026</strong><span>Nội dung cập nhật</span></div>
    </div>
  </div>
  <div class="hero-visual" aria-hidden="true">
    <div class="hero-orbit">
      <img src="${heroImage}" alt="" />
      <div class="hero-panel hero-panel-top">
        <span>Mock test</span>
        <strong>Reading Part 5</strong>
      </div>
      <div class="hero-panel hero-panel-bottom">
        <i class="bi bi-check2-circle"></i>
        <span>Progress synced</span>
      </div>
    </div>
  </div>
</div>

<div class="grid grid-4 home-skills">
  <a href="#/reading/question" class="skill-card animate-fade-in" style="--accent: var(--accent-reading); --accent-light: var(--accent-reading-light);">
    <div class="skill-icon"><i class="bi bi-book"></i></div>
    <h3>Reading</h3>
    <p>Luyện đọc hiểu với 12+ bộ đề</p>
    <div class="skill-actions">
      <span class="skill-tag">Câu hỏi</span>
      <span class="skill-tag">Bộ đề</span>
      <span class="skill-tag">Mẹo</span>
    </div>
  </a>

  <a href="#/listening/question" class="skill-card animate-fade-in" style="--accent: var(--accent-listening); --accent-light: var(--accent-listening-light);">
    <div class="skill-icon"><i class="bi bi-headphones"></i></div>
    <h3>Listening</h3>
    <p>Nghe hiểu với 15+ bộ đề & audio</p>
    <div class="skill-actions">
      <span class="skill-tag">Câu hỏi</span>
      <span class="skill-tag">Bộ đề</span>
      <span class="skill-tag">Mẹo</span>
    </div>
  </a>

  <a href="#/speaking/question" class="skill-card animate-fade-in" style="--accent: var(--accent-speaking); --accent-light: var(--accent-speaking-light);">
    <div class="skill-icon"><i class="bi bi-mic"></i></div>
    <h3>Speaking</h3>
    <p>Luyện nói với 4 phần thi chi tiết</p>
    <div class="skill-actions">
      <span class="skill-tag">Câu hỏi</span>
      <span class="skill-tag">Practice</span>
      <span class="skill-tag">Mẹo</span>
    </div>
  </a>

  <a href="#/writing/bode" class="skill-card animate-fade-in" style="--accent: var(--accent-writing); --accent-light: var(--accent-writing-light);">
    <div class="skill-icon"><i class="bi bi-pencil-square"></i></div>
    <h3>Writing</h3>
    <p>Viết thư & essay với 40+ bộ đề</p>
    <div class="skill-actions">
      <span class="skill-tag">Câu lạc bộ</span>
      <span class="skill-tag">Mẹo</span>
    </div>
  </a>
</div>

<div class="grid grid-3 home-extras">
  <a href="#/grammar/bode" class="extra-card animate-fade-in">
    <i class="bi bi-translate"></i>
    <div>
      <h4>Học Grammar</h4>
      <p>9 bộ đề ngữ pháp</p>
    </div>
  </a>
  <a href="https://www.facebook.com/groups/1028046979512219" target="_blank" class="extra-card animate-fade-in">
    <i class="bi bi-facebook" style="color:#1877F2"></i>
    <div>
      <h4>Nhóm Facebook</h4>
      <p>Cộng đồng học Aptis</p>
    </div>
  </a>
  <a href="https://aptisweb.com/aptis-exam-library/aptis-general" target="_blank" class="extra-card animate-fade-in">
    <i class="bi bi-mortarboard"></i>
    <div>
      <h4>Thi thử Aptis</h4>
      <p>Trang thi mẫu chính thức</p>
    </div>
  </a>
</div>`;
}
