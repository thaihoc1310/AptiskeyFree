import './css/base.css';
import './css/layout.css';
import './css/home.css';
import './css/pages.css';
import './css/quiz.css';
import './css/legacy.css';
import { route, startRouter, setContent } from './js/router.js';
import { renderSidebar, renderHeader, initSidebar, initHeader } from './js/layout.js';
import { renderHome } from './js/pages/home.js';
import { renderReadingQuestion, renderReadingBode } from './js/pages/reading.js';
import { renderListeningQuestion, renderListeningBode } from './js/pages/listening.js';
import { renderSpeakingQuestion, renderWritingBode, renderGrammarBode } from './js/pages/other-nav.js';
import { initExamReview, renderExamReview } from './js/pages/exam-review.js';
import { initScoreLogic, renderScoreLogic } from './js/pages/score-logic.js';
import { detailConfig, initLegacyPage, initTimeSetup, renderLegacyPage, renderTimeSetup, staticConfig, teardownLegacyPage, timerStorageKey } from './js/pages/legacy-page.js';

// Apply saved theme
const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);

function initApp() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="app">
      ${renderSidebar()}
      <div class="app-main" id="appMain">
        ${renderHeader()}
        <main class="app-content" id="app-content"></main>
        <footer class="app-footer">© 2026 AptiskeyFree — Ôn luyện Aptis hiệu quả</footer>
      </div>
    </div>`;
  initSidebar();
  initHeader();
  if (savedTheme === 'dark') {
    const icon = document.querySelector('#themeToggle i');
    if (icon) icon.className = 'bi bi-sun';
  }
}

// Navigation routes
function mountPage(html) {
  teardownLegacyPage();
  document.body.classList.remove('focus-mode');
  setContent(html);
}

route('/', () => mountPage(renderHome()));
route('/reading/question', () => mountPage(renderReadingQuestion()));
route('/reading/bode', () => mountPage(renderReadingBode()));
route('/listening/question', () => mountPage(renderListeningQuestion()));
route('/listening/bode', () => mountPage(renderListeningBode()));
route('/speaking/question', () => mountPage(renderSpeakingQuestion()));
route('/writing/bode', () => mountPage(renderWritingBode()));
route('/grammar/bode', () => mountPage(renderGrammarBode()));
route('/exam-review', () => {
  mountPage(renderExamReview());
  initExamReview();
});
route('/score-logic', () => {
  mountPage(renderScoreLogic());
  initScoreLogic();
});

async function mountLegacy(config) {
  document.body.classList.toggle('focus-mode', Boolean(config.focusMode));
  if (config.timeSetup && !config.selectedMinutes) {
    const savedMinutes = sessionStorage.getItem(timerStorageKey(config));
    if (!savedMinutes) {
      setContent(renderTimeSetup(config));
      initTimeSetup(config, (minutes) => mountLegacy({ ...config, selectedMinutes: minutes }));
      return;
    }
    config = { ...config, selectedMinutes: Number(savedMinutes) };
  }
  setContent(await renderLegacyPage(config));
  await initLegacyPage(config);
}

route('/reading/meo', () => mountLegacy(staticConfig('reading_meo', 'Reading — Mẹo học nhanh', '/reading/question')));
route('/listening/meo', () => mountLegacy(staticConfig('listening_meo', 'Listening — Mẹo học nhanh', '/listening/question')));
route('/speaking/meo', () => mountLegacy(staticConfig('speaking_meo', 'Speaking — Mẹo học nhanh', '/speaking/question')));
route('/writing/meo', () => mountLegacy(staticConfig('writing_meo', 'Writing — Mẹo học nhanh', '/writing/bode')));
route('/grammar/meo', () => mountLegacy(staticConfig('grammar_meo', 'Grammar — Mẹo học nhanh', '/grammar/bode')));
route('/reading/question/5-meo', () => mountLegacy(staticConfig('reading_question5_meo', 'Reading Part 5 — Mẹo', '/reading/meo', ['/crawled_data/js/js_reading_question_reading_question5_meo.js'], true)));
route('/listening/meo/cau15', () => mountLegacy(staticConfig('listening_meo_cau15', 'Listening Câu 15 — Mẹo', '/listening/meo')));
route('/listening/meo/cau15-method2', () => mountLegacy(staticConfig('listening_meo_cau15_method2', 'Listening Câu 15 — Mẹo cách 2', '/listening/meo', ['/crawled_data/js/js_listening_question_listening_meo_cau15_method2.js'])));
route('/speaking/meo/question2', () => mountLegacy(staticConfig('speaking_question2_meo', 'Speaking Part 2 — Mẹo', '/speaking/meo', ['/crawled_data/js/js_speaking_speaking_question2_meo.js'])));

// Quiz page routes (dynamic - will load data from crawled JS)
route('/reading/question/:part', async (part) => {
  await mountLegacy(detailConfig('readingQuestion', part));
});

route('/reading/key/:id', async (id) => {
  await mountLegacy(detailConfig('readingKey', id));
});

route('/listening/question/:part', async (part) => {
  await mountLegacy(detailConfig('listeningQuestion', part));
});

route('/listening/key/:id', async (id) => {
  await mountLegacy(detailConfig('listeningKey', id));
});

route('/writing/key/:id', async (id) => {
  await mountLegacy(detailConfig('writingKey', id));
});

route('/speaking/question/:part', async (part) => {
  await mountLegacy(detailConfig('speakingQuestion', part));
});

route('/speaking/practice/:part', async (part) => {
  await mountLegacy(detailConfig('speakingPractice', part));
});

route('/speaking/question/:part/total', async (part) => {
  await mountLegacy(detailConfig('speakingQuestionTotal', part));
});

route('/grammar/key/:id', async (id) => {
  await mountLegacy(detailConfig('grammarKey', id));
});

// Other pages
route('/donate', () => mountLegacy(staticConfig('donate', 'Ủng hộ AptiskeyFree', '/')));
route('/guide', () => mountLegacy(staticConfig('guidevideo', 'Hướng dẫn học', '/')));

// 404 fallback
route('*', () => {
  mountPage(`
    <div class="text-center" style="padding: 4rem 0;">
      <h2 style="font-size:4rem; margin-bottom:1rem;">🚧</h2>
      <h3>Trang đang được xây dựng</h3>
      <p>Chức năng này sẽ sớm được cập nhật</p>
      <a href="#/" class="btn btn-primary" style="margin-top:1rem;">Về trang chủ</a>
    </div>`);
});

// Boot
initApp();
startRouter();
