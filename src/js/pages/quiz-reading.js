import { loadReadingQuestions } from '../data-loader.js';

export async function renderReadingQuiz(part) {
  return `
    <div class="quiz-page animate-fade-in">
      <div class="quiz-header">
        <a href="#/reading/question" class="quiz-back"><i class="bi bi-arrow-left"></i> Reading</a>
        <div class="quiz-timer">
          <i class="bi bi-clock"></i>
          <span id="countdownTimer">34:00</span>
        </div>
        <div class="quiz-step" id="question_step">Reading Question ${part}</div>
      </div>

      <div class="quiz-body">
        <div class="quiz-title-row">
          <h2>Reading Question
            <input id="questionJumpInput" type="number" min="1" value="1"
              class="quiz-jump-input" />
            of <span id="question1_total">--</span>
          </h2>
        </div>
        <p class="quiz-instruction">Choose the word that fits in the gap.</p>
        <form id="questionForm">
          <div id="questions-container" class="quiz-questions"></div>
        </form>
      </div>

      <div class="quiz-footer">
        <button class="btn btn-secondary" id="backButton" disabled>
          <i class="bi bi-chevron-left"></i> Back
        </button>
        <button class="btn btn-primary" id="checkResultButton">
          <i class="bi bi-check-circle"></i> Check result
        </button>
        <button class="btn btn-secondary" id="nextButton">
          Next <i class="bi bi-chevron-right"></i>
        </button>
      </div>
    </div>

    <!-- Result Modal -->
    <div class="modal-overlay" id="resultModal" style="display:none;">
      <div class="modal-box">
        <div class="modal-header">
          <h3 id="resultModalLabel">Kết quả</h3>
          <button class="modal-close" id="closeResultModal">&times;</button>
        </div>
        <div class="modal-body text-center">
          <h4 id="totalScore"></h4>
          <h4 id="scoreClassification"></h4>
          <table class="result-table">
            <thead><tr><th>Your Answer</th><th>Correct Answer</th></tr></thead>
            <tbody id="comparisonTableBody"></tbody>
          </table>
        </div>
      </div>
    </div>`;
}

export async function initReadingQuiz(part) {
  const data = await loadReadingQuestions(part);
  if (!data || !data.questions.length) {
    document.getElementById('questions-container').innerHTML =
      '<p style="color:var(--error)">Không thể tải dữ liệu bài thi.</p>';
    return;
  }

  // Build questionsArrays from extracted data
  const questionsArrays = data.questions.map(q => q.data);
  let currentArrayIndex = 0;
  const userAnswers = [];

  // Countdown timer (34 minutes)
  let totalSeconds = 34 * 60;
  const timerEl = document.getElementById('countdownTimer');
  const timerInterval = setInterval(() => {
    totalSeconds--;
    if (totalSeconds <= 0) { clearInterval(timerInterval); return; }
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;
    timerEl.textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
    if (totalSeconds <= 60) timerEl.style.color = 'var(--error)';
  }, 1000);

  function renderQuestions() {
    const container = document.getElementById('questions-container');
    if (!container) return;
    container.innerHTML = '';
    const questions = questionsArrays[currentArrayIndex];
    if (!questions) return;

    questions.forEach((q, i) => {
      const div = document.createElement('div');
      div.className = 'quiz-question-row';
      div.innerHTML = `
        <span class="q-text">${q.questionStart}</span>
        <select class="q-select" id="gap${i}" data-index="${i}">
          <option value="">---</option>
          ${q.answerOptions.map(o => `<option value="${o}">${o}</option>`).join('')}
        </select>
        <span class="q-text">${q.questionEnd}</span>`;
      container.appendChild(div);

      div.querySelector('select').addEventListener('change', (e) => {
        userAnswers[i] = e.target.value;
      });
    });

    // Update navigation state
    const jumpEl = document.getElementById('questionJumpInput');
    if (jumpEl) { jumpEl.value = currentArrayIndex + 1; jumpEl.max = questionsArrays.length; }
    const totalEl = document.getElementById('question1_total');
    if (totalEl) totalEl.textContent = questionsArrays.length;

    const backBtn = document.getElementById('backButton');
    const nextBtn = document.getElementById('nextButton');
    if (backBtn) backBtn.disabled = currentArrayIndex === 0;
    if (nextBtn) {
      const isLast = currentArrayIndex === questionsArrays.length - 1;
      nextBtn.disabled = isLast;
      nextBtn.innerHTML = isLast ? 'The end' : 'Next <i class="bi bi-chevron-right"></i>';
    }
  }

  renderQuestions();

  // Jump input
  document.getElementById('questionJumpInput')?.addEventListener('input', (e) => {
    const val = parseInt(e.target.value, 10);
    if (val >= 1 && val <= questionsArrays.length) {
      currentArrayIndex = val - 1;
      userAnswers.length = 0;
      renderQuestions();
    }
  });

  // Next / Back buttons
  document.getElementById('nextButton')?.addEventListener('click', () => {
    if (currentArrayIndex < questionsArrays.length - 1) {
      currentArrayIndex++;
      userAnswers.length = 0;
      renderQuestions();
    }
  });
  document.getElementById('backButton')?.addEventListener('click', () => {
    if (currentArrayIndex > 0) {
      currentArrayIndex--;
      userAnswers.length = 0;
      renderQuestions();
    }
  });

  // Check result
  document.getElementById('checkResultButton')?.addEventListener('click', () => {
    const questions = questionsArrays[currentArrayIndex];
    const tbody = document.getElementById('comparisonTableBody');
    tbody.innerHTML = '';

    let score = 0;
    questions.forEach((q, i) => {
      const userAns = userAnswers[i] || '(không chọn)';
      const correct = q.correctAnswer;
      if (userAns === correct) score += 2;

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td class="${userAns === correct ? 'text-correct' : 'text-wrong'}">${userAns}</td>
        <td class="text-correct">${correct}</td>`;
      tbody.appendChild(tr);
    });

    document.getElementById('totalScore').textContent = `Your Score: ${score}/10`;
    const cls = score >= 10 ? 'Excellent' : score >= 5 ? 'Good' : 'Cố gắng thêm nhé!';
    document.getElementById('scoreClassification').textContent = cls;

    document.getElementById('resultModal').style.display = 'flex';
  });

  // Close modal
  document.getElementById('closeResultModal')?.addEventListener('click', () => {
    document.getElementById('resultModal').style.display = 'none';
  });
  document.getElementById('resultModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'resultModal') e.target.style.display = 'none';
  });
}
