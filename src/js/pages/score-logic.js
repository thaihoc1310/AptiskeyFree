const SOURCE_URL = 'https://aptiskey.com/logic-diem_aptis.html';
const LEVELS = [
  { level: 'A0', points: 0, tone: 'a0' },
  { level: 'A1', points: 1, tone: 'a1' },
  { level: 'A2', points: 2, tone: 'a2' },
  { level: 'B1', points: 3, tone: 'b1' },
  { level: 'B2', points: 4, tone: 'b2' },
  { level: 'C1', points: 5, tone: 'c1' },
];

const SKILLS = [
  { id: 'listening', label: 'Nghe', english: 'Listening', icon: 'bi-headphones', color: 'var(--accent-listening)', initial: 'B2' },
  { id: 'speaking', label: 'Nói', english: 'Speaking', icon: 'bi-mic', color: 'var(--accent-speaking)', initial: 'B2' },
  { id: 'reading', label: 'Đọc', english: 'Reading', icon: 'bi-book', color: 'var(--accent-reading)', initial: 'B1' },
  { id: 'writing', label: 'Viết', english: 'Writing', icon: 'bi-pencil-square', color: 'var(--accent-writing)', initial: 'B1' },
];

function overallLevel(total) {
  if (total >= 18) return 'C1';
  if (total >= 14) return 'B2';
  if (total >= 10) return 'B1';
  if (total >= 6) return 'A2';
  if (total >= 2) return 'A1';
  return 'A0';
}

function levelOptions(initial) {
  return LEVELS.map(({ level, points }) =>
    `<option value="${points}"${level === initial ? ' selected' : ''}>${level} — ${points} điểm</option>`).join('');
}

function skillSelector(skill) {
  return `
    <label class="score-skill" style="--skill-color:${skill.color}">
      <span class="score-skill-icon"><i class="bi ${skill.icon}"></i></span>
      <span class="score-skill-name"><strong>${skill.label}</strong><small>${skill.english}</small></span>
      <select id="score-${skill.id}" data-score-skill="${skill.id}" aria-label="Bậc ${skill.label}">
        ${levelOptions(skill.initial)}
      </select>
    </label>`;
}

function exampleCard(number, rows, total, overall) {
  return `
    <article class="score-example">
      <div class="score-example-head"><span>Ví dụ ${number}</span><strong>${overall}</strong></div>
      <div class="score-example-skills">
        ${rows.map(([skill, level, points]) => `<span><small>${skill}</small><b>${level}</b><em>${points}</em></span>`).join('')}
      </div>
      <div class="score-example-result">${rows.map(([, , points]) => points).join(' + ')} = <strong>${total}</strong> → Overall <b>${overall}</b></div>
    </article>`;
}

export function renderScoreLogic() {
  return `
    <section class="score-page animate-fade-in">
      <div class="page-header score-page-header">
        <div class="page-header-icon score-page-header-icon"><i class="bi bi-calculator"></i></div>
        <div>
          <span class="score-page-eyebrow">Công cụ Aptis</span>
          <h1>Cách tính điểm Overall</h1>
          <p>Quy đổi bậc từng kỹ năng và ước tính kết quả Overall Aptis.</p>
        </div>
        <a href="${SOURCE_URL}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary score-source-link">
          Nguồn tham khảo <i class="bi bi-box-arrow-up-right"></i>
        </a>
      </div>

      <div class="score-calculator animate-fade-in">
        <div class="score-calculator-intro">
          <div><span>Máy tính nhanh</span><h2>Chọn bậc của 4 kỹ năng</h2></div>
          <p>Grammar & Vocabulary không được cộng vào công thức Overall bên dưới.</p>
        </div>
        <div class="score-calculator-grid">
          <div class="score-skill-list">${SKILLS.map(skillSelector).join('')}</div>
          <div class="score-result-card" id="scoreResultCard" data-level="B2">
            <span class="score-result-label">Overall dự kiến</span>
            <strong id="scoreOverall">B2</strong>
            <div><b id="scoreTotal">14</b><span>/ 20 điểm</span></div>
            <small id="scoreFormula">4 + 4 + 3 + 3</small>
          </div>
        </div>
        <div class="score-scale" aria-label="Thang điểm Overall từ A0 đến C1">
          <span class="is-active" data-score-threshold="0"><b>A0</b><small>0–1</small></span>
          <span data-score-threshold="2"><b>A1</b><small>2–5</small></span>
          <span data-score-threshold="6"><b>A2</b><small>6–9</small></span>
          <span data-score-threshold="10"><b>B1</b><small>10–13</small></span>
          <span data-score-threshold="14"><b>B2</b><small>14–17</small></span>
          <span data-score-threshold="18"><b>C1</b><small>18–20</small></span>
        </div>
      </div>

      <div class="score-reference-grid">
        <article class="score-reference-card animate-fade-in">
          <div class="score-section-title"><span>01</span><div><h2>Quy đổi bậc sang điểm</h2><p>Mỗi kỹ năng được chuyển thành điểm từ 0 đến 5.</p></div></div>
          <div class="score-level-grid">
            ${LEVELS.map(({ level, points, tone }) => `<div class="score-level-pill is-${tone}"><strong>${level}</strong><span>${points} điểm</span></div>`).join('')}
          </div>
        </article>

        <article class="score-reference-card animate-fade-in">
          <div class="score-section-title"><span>02</span><div><h2>Ngưỡng điểm Overall</h2><p>Cộng điểm Nghe, Nói, Đọc và Viết rồi đối chiếu.</p></div></div>
          <div class="score-threshold-list">
            <span><b>0–1</b><strong>A0</strong></span>
            <span><b>2–5</b><strong>A1</strong></span>
            <span><b>6–9</b><strong>A2</strong></span>
            <span><b>10–13</b><strong>B1</strong></span>
            <span><b>14–17</b><strong>B2</strong></span>
            <span><b>18–20</b><strong>C1</strong></span>
          </div>
        </article>
      </div>

      <div class="score-formula animate-fade-in">
        <span><i class="bi bi-plus-slash-minus"></i>Công thức</span>
        <strong>Tổng điểm = Nghe + Nói + Đọc + Viết</strong>
        <small>Tối đa 20 điểm</small>
      </div>

      <div class="score-examples-section animate-fade-in">
        <div class="score-section-heading"><span>03</span><div><h2>Ví dụ quy đổi</h2><p>Ba trường hợp từ trang tham khảo.</p></div></div>
        <div class="score-examples-grid">
          ${exampleCard(1, [['Nghe', 'B2', 4], ['Nói', 'B2', 4], ['Đọc', 'B1', 3], ['Viết', 'B1', 3]], 14, 'B2')}
          ${exampleCard(2, [['Nghe', 'C1', 5], ['Nói', 'B1', 3], ['Đọc', 'A2', 2], ['Viết', 'B2', 4]], 14, 'B2')}
          ${exampleCard(3, [['Nghe', 'C1', 5], ['Nói', 'A2', 2], ['Đọc', 'A2', 2], ['Viết', 'A1', 1]], 10, 'B1')}
        </div>
      </div>
    </section>`;
}

export function initScoreLogic() {
  const selects = [...document.querySelectorAll('[data-score-skill]')];
  const update = () => {
    const points = selects.map((select) => Number(select.value));
    const total = points.reduce((sum, value) => sum + value, 0);
    const level = overallLevel(total);
    const totalElement = document.getElementById('scoreTotal');
    const overallElement = document.getElementById('scoreOverall');
    const formulaElement = document.getElementById('scoreFormula');
    const resultCard = document.getElementById('scoreResultCard');

    if (totalElement) totalElement.textContent = total;
    if (overallElement) overallElement.textContent = level;
    if (formulaElement) formulaElement.textContent = points.join(' + ');
    if (resultCard) resultCard.dataset.level = level;

    document.querySelectorAll('[data-score-threshold]').forEach((item) => {
      item.classList.toggle('is-active', item.querySelector('b')?.textContent === level);
    });
  };

  selects.forEach((select) => select.addEventListener('change', update));
  update();
}
