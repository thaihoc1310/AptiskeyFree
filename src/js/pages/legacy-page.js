const CRAWLED_BASE = '/crawled_data';

const routeMap = [
  [/^\/home(?:\.html)?$/, '#/'],
  [/^\/reading_bode(?:\.html)?$/, '#/reading/bode'],
  [/^\/reading_question(?:\.html)?$/, '#/reading/question'],
  [/^\/listening_bode(?:\.html)?$/, '#/listening/bode'],
  [/^\/listening_question(?:\.html)?$/, '#/listening/question'],
  [/^\/speaking_question(?:\.html)?$/, '#/speaking/question'],
  [/^\/writing_bode(?:\.html)?$/, '#/writing/bode'],
  [/^\/writing_meo(?:\.html)?$/, '#/writing/meo'],
  [/^\/grammar_bode(?:\.html)?$/, '#/grammar/bode'],
  [/^\/exam-review(?:\.html)?$/, '#/exam-review'],
  [/^\/reading(\d{3})(?:\.html)?$/, (_m, id) => `#/reading/key/${id}`],
  [/^\/listeningkey(\d{3})(?:\.html)?$/, (_m, id) => `#/listening/key/${id}`],
  [/^\/writingkey(\d{3})(?:\.html)?$/, (_m, id) => `#/writing/key/${id}`],
  [/^\/grammar_key(\d{3})(?:\.html)?$/, (_m, id) => `#/grammar/key/${id}`],
  [/^\/reading_question([1245])(?:\.html)?$/, (_m, part) => `#/reading/question/${part}`],
  [/^\/reading_question5_meo(?:\.html)?$/, '#/reading/question/5-meo'],
  [/^\/listening_question(1_13|14|15|16_17)(?:\.html)?$/, (_m, part) => `#/listening/question/${part}`],
  [/^\/listening_meo_cau15(?:\.html)?$/, '#/listening/meo/cau15'],
  [/^\/listening_meo_cau15_method2(?:\.html)?$/, '#/listening/meo/cau15-method2'],
  [/^\/speaking_question([1-4])(?:\.html)?$/, (_m, part) => `#/speaking/question/${part}`],
  [/^\/speaking_question([1-4])_practice(?:\.html)?$/, (_m, part) => `#/speaking/practice/${part}`],
  [/^\/speaking_question([1-4])_total(?:\.html)?$/, (_m, part) => `#/speaking/question/${part}/total`],
  [/^\/speaking_question2_meo(?:\.html)?$/, '#/speaking/meo/question2'],
];

const globalsToClear = [
  'showAnswer',
  'showMeo',
  'switchQuestion',
  'toggleRead',
  'toggleSampleAnswer',
  'scoreAnswer',
  'renderQuestions',
  'showCurrentQuestion',
  'populateQuestions',
  'questions',
];

let activeCleanups = [];

export function detailConfig(kind, value) {
  const id = String(value).padStart(3, '0');
  const configs = {
    readingQuestion: {
      title: `Reading Question ${value}`,
      backPath: '/reading/question',
      htmlPath: `/crawled_data/html/reading_question${value}.html`,
      scripts: [`/crawled_data/js/js_reading_question_reading_question${value}.js`],
      focusMode: true,
      timerMinutes: 35,
      timeSetup: true,
    },
    readingKey: {
      title: `Reading Bộ đề #${id}`,
      backPath: '/reading/bode',
      htmlPath: `/crawled_data/html/reading${id}.html`,
      scripts: [`/crawled_data/js/js_reading_readingkey${id}.js`],
      focusMode: true,
      timerMinutes: 35,
    },
    listeningQuestion: {
      title: `Listening Question ${String(value).replace('_', '-')}`,
      backPath: '/listening/question',
      htmlPath: `/crawled_data/html/listening_question${value}.html`,
      scripts: [`/crawled_data/js/js_listening_question_listening_question${value}.js`],
      focusMode: true,
      timerMinutes: 40,
      timeSetup: true,
    },
    listeningKey: {
      title: `Listening Bộ đề #${id}`,
      backPath: '/listening/bode',
      htmlPath: `/crawled_data/html/listeningkey${id}.html`,
      scripts: [`/crawled_data/js/js_listening_listeningkey${id}.js`],
      focusMode: true,
      timerMinutes: 40,
    },
    writingKey: {
      title: `Writing Bộ đề #${id}`,
      backPath: '/writing/bode',
      htmlPath: `/crawled_data/html/writingkey${id}.html`,
      scripts: [`/crawled_data/js/js_writing_writingkey${id}.js`],
      focusMode: true,
      timerMinutes: 50,
    },
    speakingQuestion: {
      title: `Speaking Part ${value}`,
      backPath: '/speaking/question',
      htmlPath: `/crawled_data/html/speaking_question${value}.html`,
      scripts: [`/crawled_data/js/js_speaking_speaking_question${value}.js`],
      focusMode: true,
    },
    speakingPractice: {
      title: `Speaking Part ${value} Practice`,
      backPath: '/speaking/question',
      htmlPath: `/crawled_data/html/speaking_question${value}_practice.html`,
      scripts: [`/crawled_data/js/js_speaking_speaking_question${value}_practice.js`],
      focusMode: true,
    },
    speakingQuestionTotal: {
      title: `Speaking Part ${value} - Tổng hợp`,
      backPath: `/speaking/question/${value}`,
      htmlPath: `/crawled_data/html/speaking_question${value}_total.html`,
      scripts: value === '4' ? [
        `/crawled_data/js/js_speaking_speaking_question${value}_practice.js`,
        `/crawled_data/js/js_speaking_speaking_question${value}_total.js`
      ] : [
        `/crawled_data/js/js_speaking_speaking_question${value}_total.js`
      ],
      focusMode: true,
    },
    grammarKey: {
      title: `Grammar Bộ đề #${id}`,
      backPath: '/grammar/bode',
      htmlPath: `/crawled_data/html/grammar_key${id}.html`,
      scripts: [`/crawled_data/js/js_grammar_grammar_key${id}.js`],
      focusMode: true,
    },
  };
  return configs[kind];
}

export function staticConfig(htmlName, title, backPath, scripts = [], focusMode = false) {
  return {
    title,
    backPath,
    htmlPath: `/crawled_data/html/${htmlName}.html`,
    scripts,
    focusMode,
  };
}

export function timerStorageKey(config) {
  return `aptis_timer:${config.htmlPath}`;
}

export function renderTimeSetup(config) {
  const minutes = Number(config.timerMinutes || 35);
  return `
    <div class="time-setup-page animate-fade-in">
      <a href="${appHref(config.backPath)}" class="quiz-back time-setup-back"><i class="bi bi-arrow-left"></i> Quay lại</a>
      <div class="time-setup-card">
        <div class="time-setup-icon"><i class="bi bi-clock-history"></i></div>
        <h1>Chọn thời gian luyện tập</h1>
        <p>${escapeHtml(config.title)} sẽ dùng bộ câu hỏi gốc. Bạn có thể chỉnh thời gian trước khi bắt đầu.</p>
        <label class="time-setup-label" for="practiceMinutes">Thời gian (phút)</label>
        <div class="time-setup-control">
          <button type="button" class="time-step" data-step="-5" aria-label="Giảm 5 phút"><i class="bi bi-dash"></i></button>
          <input id="practiceMinutes" type="number" min="5" max="120" step="5" value="${minutes}" />
          <button type="button" class="time-step" data-step="5" aria-label="Tăng 5 phút"><i class="bi bi-plus"></i></button>
        </div>
        <button class="btn btn-primary btn-lg" id="startPracticeButton"><i class="bi bi-play-fill"></i> Bắt đầu luyện tập</button>
      </div>
    </div>`;
}

export function initTimeSetup(config, onStart) {
  const input = document.getElementById('practiceMinutes');
  document.querySelectorAll('.time-step').forEach((button) => {
    button.addEventListener('click', () => {
      const next = Math.max(5, Math.min(120, Number(input.value || config.timerMinutes || 35) + Number(button.dataset.step)));
      input.value = next;
    });
  });
  document.getElementById('startPracticeButton')?.addEventListener('click', () => {
    const minutes = Math.max(5, Math.min(120, Number(input.value || config.timerMinutes || 35)));
    sessionStorage.setItem(timerStorageKey(config), String(minutes));
    onStart(minutes);
  });
}

export async function renderLegacyPage(config) {
  teardownLegacyPage();

  try {
    const resp = await fetch(config.htmlPath);
    if (!resp.ok) throw new Error(`Cannot load ${config.htmlPath}`);
    const html = await resp.text();
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const styles = [...doc.querySelectorAll('style')].map((style) => style.textContent).join('\n');
    doc.querySelectorAll('script, link[rel="stylesheet"], link[rel="icon"]').forEach((el) => el.remove());

    const contentRoot = doc.body.querySelector('main.app-main') || doc.body;
    contentRoot.querySelector('.app-content-header')?.remove();
    contentRoot.querySelector('.app-footer')?.remove();

    const oldHeader = contentRoot.querySelector('.header');
    if (oldHeader) oldHeader.remove();
    cleanLegacyDocument(contentRoot, config);

    let content = contentRoot.innerHTML;
    content = rewriteMarkup(content);

    return `
      <div class="legacy-page animate-fade-in">
        <div class="legacy-shell-header">
          <a href="${appHref(config.backPath)}" class="quiz-back legacy-shell-box legacy-back-box"><i class="bi bi-arrow-left"></i> Quay lại</a>
          <div class="legacy-shell-box legacy-info-box">
            ${config.timerMinutes ? '<div class="legacy-timer" id="legacyTimer"><i class="bi bi-clock"></i><span>--:--</span></div>' : ''}
            <div class="quiz-step">${escapeHtml(config.title || 'Aptis Keys')}</div>
          </div>
        </div>
        <div class="legacy-runtime-hooks" aria-hidden="true">
          <span id="countdownTimer"></span>
          <span id="question_step"></span>
        </div>
        ${styles ? `<style>${rewriteCss(styles)}</style>` : ''}
        <div class="legacy-content" id="legacyContent">${content}</div>
      </div>`;
  } catch (err) {
    console.error(err);
    return `
      <div class="card">
        <div class="card-body">
          <h3>Không thể tải nội dung</h3>
          <p>File gốc chưa sẵn sàng hoặc đường dẫn không đúng: ${escapeHtml(config.htmlPath)}</p>
          <a href="${appHref(config.backPath || '/')}" class="btn btn-primary">Quay lại</a>
        </div>
      </div>`;
  }
}

export async function initLegacyPage(config) {
  installBootstrapShim();
  installJqueryShim();
  installSortableShim();
  installAskShim();
  lockLegacyModalBackdrops();
  interceptLegacyNavigation();

  for (const scriptPath of config.scripts || []) {
    await executeLegacyScript(scriptPath);
  }
  prepareLegacyDom(config);
  startLegacyTimer(config);
}

export function teardownLegacyPage() {
  activeCleanups.forEach((cleanup) => cleanup());
  activeCleanups = [];
  globalsToClear.forEach((key) => {
    try { delete window[key]; } catch (_err) { window[key] = undefined; }
  });
  if (window.speechSynthesis) window.speechSynthesis.cancel();
  document.body.classList.remove('modal-open');
}

async function executeLegacyScript(scriptPath) {
  const resp = await fetch(scriptPath);
  if (!resp.ok) {
    console.warn(`Skip missing legacy script: ${scriptPath}`);
    return;
  }

  const originalAddEventListener = document.addEventListener.bind(document);
  const exported = new Set();
  let code = await resp.text();
  code = rewriteScript(code, exported);
  installOnloadReplay();

  document.addEventListener = function patchedAddEventListener(type, listener, options) {
    if (type === 'DOMContentLoaded' && typeof listener === 'function') {
      window.setTimeout(() => listener.call(document, new Event('DOMContentLoaded')), 0);
      return undefined;
    }
    return originalAddEventListener(type, listener, options);
  };

  try {
    new Function(`${code}\n${buildExportFooter(exported)}`)();
  } catch (err) {
    console.error(`Failed to execute ${scriptPath}`, err);
  } finally {
    document.addEventListener = originalAddEventListener;
  }
}

function installOnloadReplay() {
  const descriptor = Object.getOwnPropertyDescriptor(window, 'onload');
  let value = window.onload;

  Object.defineProperty(window, 'onload', {
    configurable: true,
    get() {
      return value;
    },
    set(next) {
      value = next;
      if (typeof next === 'function') {
        window.setTimeout(() => {
          try { next.call(window, new Event('load')); } catch (err) { console.error(err); }
        }, 0);
      }
    },
  });

  activeCleanups.push(() => {
    if (descriptor) Object.defineProperty(window, 'onload', descriptor);
    else {
      delete window.onload;
      window.onload = null;
    }
  });
}

function rewriteScript(code, exported) {
  let out = code;
  out = out
    .replaceAll('"./images/', '"/crawled_data/images/')
    .replaceAll("'./images/", "'/crawled_data/images/")
    .replaceAll('"/images/', '"/crawled_data/images/')
    .replaceAll("'/images/", "'/crawled_data/images/")
    .replaceAll('"images/', '"/crawled_data/images/')
    .replaceAll("'images/", "'/crawled_data/images/")
    .replaceAll('"./audio/', '"/crawled_data/audio/audio/')
    .replaceAll("'./audio/", "'/crawled_data/audio/audio/")
    .replaceAll('"audio/', '"/crawled_data/audio/audio/')
    .replaceAll("'audio/", "'/crawled_data/audio/audio/")
    .replaceAll('"/audio/', '"/crawled_data/audio/audio/')
    .replaceAll("'/audio/", "'/crawled_data/audio/audio/");

  const functionRegex = /\bfunction\s+([A-Za-z_$][\w$]*)\s*\(/g;
  let match;
  while ((match = functionRegex.exec(out)) !== null) exported.add(match[1]);

  if (/\b(const|let|var)\s+questions\b/.test(out)) {
    exported.add('questions');
  }

  return out;
}

function buildExportFooter(names) {
  return [...names]
    .map((name) => `try { if (typeof ${name} !== 'undefined') window.${name} = ${name}; } catch (_err) {}`)
    .join('\n');
}

function rewriteMarkup(html) {
  return html
    .replace(/\s(?:src|href)=["'](https?:\/\/[^"']+)["']/g, (m) => m)
    .replace(/\ssrc=["']\/?images\//g, ' src="/crawled_data/images/')
    .replace(/\ssrc=["']images\//g, ' src="/crawled_data/images/')
    .replace(/\ssrc=["']\/?audio\//g, ' src="/crawled_data/audio/audio/')
    .replace(/\ssrc=["']audio\//g, ' src="/crawled_data/audio/audio/')
    .replace(/\shref=["']\/?images\//g, ' href="/crawled_data/images/')
    .replace(/\shref=["']images\//g, ' href="/crawled_data/images/')
    .replace(/\shref=["']\/([^"']+)["']/g, (_m, path) => ` href="${mapLegacyPath('/' + path)}"`)
    .replace(/\shref=["']\.\/([^"']+)["']/g, (_m, path) => ` href="${mapLegacyPath('/' + path)}"`)
    .replace(/window\.location\.href\s*=\s*['"]([^'"]+)['"]/g, (_m, path) => `window.location.href='${mapLegacyPath(path)}'`);
}

function cleanLegacyDocument(root, config) {
  const isCleanMeoPage = /\/(?:writing|grammar)_meo\.html$/.test(config.htmlPath || '');
  if (!isCleanMeoPage) return;

  root.querySelector('nav.navbar')?.remove();
  root.querySelector('aside')?.remove();
  root.querySelector('footer')?.remove();
  root.querySelector('#backToTop')?.remove();

  const content = root.querySelector('#content');
  if (content) {
    content.classList.remove('col-lg-9');
    content.classList.add('col-12', 'legacy-meo-content');
    if (/\/writing_meo\.html$/.test(config.htmlPath || '')) content.classList.add('writing-meo-content');
    if (/\/grammar_meo\.html$/.test(config.htmlPath || '')) content.classList.add('grammar-meo-content');
  }

  const main = root.querySelector('main.container');
  main?.classList.add('legacy-meo-clean');
  if (/\/writing_meo\.html$/.test(config.htmlPath || '')) main?.classList.add('writing-meo-clean');
  if (/\/grammar_meo\.html$/.test(config.htmlPath || '')) main?.classList.add('grammar-meo-clean');
}

function rewriteCss(css) {
  return css.replace(/url\((['"]?)\/?images\//g, `url($1${CRAWLED_BASE}/images/`);
}

export function mapLegacyPath(path) {
  if (path.startsWith('#/') || path.startsWith('/#/')) {
    return path;
  }
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  for (const [regex, target] of routeMap) {
    const match = normalizedPath.match(regex);
    if (match) {
      const resolved = typeof target === 'function' ? target(...match) : target;
      return resolved.startsWith('#/') ? `/${resolved}` : resolved;
    }
  }
  return path.startsWith('#/') ? `/${path}` : path.startsWith('#') ? path : `${CRAWLED_BASE}/html/${path.replace(/^\//, '')}`;
}

function appHref(path) {
  return `/#${path || '/'}`;
}

function interceptLegacyNavigation() {
  const handler = (event) => {
    const anchor = event.target.closest?.('a[href]');
    if (!anchor) return;
    const href = anchor.getAttribute('href');
    if (!href || href.startsWith('http') || href.startsWith('mailto:')) return;
    if (href.startsWith('#/') || href.startsWith('/#/')) {
      event.preventDefault();
      window.location.hash = href.replace(/^\/?#/, '');
      return;
    }
    if (href.startsWith('#')) return;
    const mapped = mapLegacyPath(href);
    if (mapped !== href) {
      event.preventDefault();
      if (mapped.startsWith('/#') || mapped.startsWith('#')) {
        window.location.hash = mapped.replace(/^\/?#/, '');
      } else {
        window.location.href = mapped;
      }
    }
  };
  document.addEventListener('click', handler);
  activeCleanups.push(() => document.removeEventListener('click', handler));
}

function prepareLegacyDom(config) {
  const isListeningKey = /\/listeningkey\d{3}\.html$/.test(config.htmlPath || '');
  if (isListeningKey) {
    const contentEl = document.getElementById('legacyContent');
    contentEl?.classList.add('listening-test-mode');
  }

  const normalize = () => {
    lockJumpInputs();
    wireAudioRanges();
    wireResultFeedback();
    normalizeWritingKeyWizard(config);
    normalizeReadingQuestionFive(config);
    if (!config?.htmlPath?.includes('_total')) {
      colorResultRows();
    }
    if (isListeningKey) {
      document.querySelectorAll('.legacy-content .top-bar').forEach(setupListeningPlays);
    }
  };
  normalize();
  const observer = new MutationObserver(normalize);
  const root = document.getElementById('legacyContent');
  if (root) observer.observe(root, { childList: true, subtree: true });
  activeCleanups.push(() => observer.disconnect());

  if (config.timerMinutes) {
    document.querySelectorAll('.legacy-content #countdownTimer').forEach((el) => {
      el.style.display = 'none';
    });
  }
}

function normalizeWritingKeyWizard(config) {
  if (!/\/writingkey\d{3}\.html$/.test(config.htmlPath || '')) return;

  const root = document.getElementById('legacyContent');
  if (!root || root.dataset.writingWizardReady) return;
  root.dataset.writingWizardReady = 'pending';
  window.setTimeout(() => setupWritingKeyWizard(root), 0);
}

function setupWritingKeyWizard(root) {
  if (!root || root.dataset.writingWizardReady === 'true') return;
  root.dataset.writingWizardReady = 'true';
  root.classList.add('writing-key-page');

  const questionIds = ['question1', 'question2', 'question3', 'question4'];
  const questions = questionIds
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  questions.forEach((question, index) => {
    question.classList.add('writing-step');
    question.dataset.step = String(index + 1);
  });

  const header = document.createElement('div');
  header.className = 'writing-wizard-header';
  header.innerHTML = `
    <div>
      <span class="writing-wizard-kicker">Writing practice</span>
      <h2 id="writingWizardTitle">Question 1 of 4</h2>
    </div>`;
  questions[0]?.before(header);

  const footer = root.querySelector('.footer');
  const backButton = document.getElementById('backButton');
  const nextButton = document.getElementById('nextButton');
  const checkButton = document.getElementById('btn_checkallquestions');

  if (backButton) backButton.textContent = 'Back';
  if (nextButton) nextButton.textContent = 'Next';
  if (checkButton) {
    checkButton.textContent = 'Check result';
    checkButton.classList.remove('d-none');
  }
  footer?.classList.add('writing-wizard-nav');

  const cleanBackButton = backButton?.cloneNode(true);
  const cleanNextButton = nextButton?.cloneNode(true);
  const cleanCheckButton = checkButton?.cloneNode(true);
  if (backButton && cleanBackButton) backButton.replaceWith(cleanBackButton);
  if (nextButton && cleanNextButton) nextButton.replaceWith(cleanNextButton);
  if (checkButton && cleanCheckButton) checkButton.replaceWith(cleanCheckButton);

  let activeIndex = 0;

  const refresh = () => {
    questions.forEach((question, index) => {
      question.classList.toggle('is-active', index === activeIndex);
      question.style.display = index === activeIndex ? 'block' : 'none';
    });

    const title = document.getElementById('writingWizardTitle');
    if (title) title.textContent = `Question ${activeIndex + 1} of ${questions.length}`;

    if (cleanBackButton) cleanBackButton.disabled = activeIndex === 0;
    if (cleanNextButton) cleanNextButton.disabled = activeIndex === questions.length - 1;
    cleanCheckButton?.classList.remove('d-none');
  };

  cleanBackButton?.addEventListener('click', () => {
    activeIndex = Math.max(0, activeIndex - 1);
    refresh();
  });
  cleanNextButton?.addEventListener('click', () => {
    activeIndex = Math.min(questions.length - 1, activeIndex + 1);
    refresh();
  });
  cleanCheckButton?.addEventListener('click', () => {
    showWritingQuestionAnswer(activeIndex);
  });
  refresh();
}

function showWritingQuestionAnswer(index) {
  const answerButton = document.getElementById(`question${index + 1}_showanswer`);
  if (answerButton) {
    answerButton.click();
    return;
  }

  const modalBody = document.getElementById('modal-body-ai');
  const modal = document.getElementById('resultModal');
  if (modalBody) modalBody.textContent = 'Chưa có đáp án mẫu cho phần này.';
  if (modal) new bootstrap.Modal(modal).show();
}

function normalizeReadingQuestionFive(config) {
  if (!/\/reading_question5\.html$/.test(config.htmlPath || '') && !/\/reading\d{3}\.html$/.test(config.htmlPath || '')) return;

  const root = document.getElementById('legacyContent');
  const container = document.getElementById('question5-container');
  if (!root || !container) return;

  root.classList.add('reading-part5-page');
  document.getElementById('showParagraphButton')?.classList.add('legacy-hidden-control');
  document.getElementById('showAnswerButton')?.classList.add('legacy-hidden-control');

  if (container.querySelector('.reading-part5-shell')) return;

  const items = [...container.children].filter((item) => (
    item.classList?.contains('mb-3')
    && item.querySelector('select')
    && item.querySelector('p.mt-2')
  ));
  if (!items.length) return;

  const shell = document.createElement('div');
  shell.className = 'reading-part5-shell';

  const passages = document.createElement('section');
  passages.className = 'reading-part5-passages';
  passages.setAttribute('aria-label', 'Reading passages');

  const questions = document.createElement('section');
  questions.className = 'reading-part5-questions';
  questions.setAttribute('aria-label', 'Reading questions');

  items.forEach((item, index) => {
    const row = item.querySelector(':scope > div');
    const paragraph = item.querySelector('p.mt-2');

    const passageCard = document.createElement('article');
    passageCard.className = 'reading-part5-passage';

    const passageTitle = document.createElement('h3');
    passageTitle.textContent = `Passage ${index + 1}`;
    passageCard.appendChild(passageTitle);

    if (paragraph) {
      paragraph.style.display = 'block';
      paragraph.classList.remove('mt-2');
      paragraph.classList.add('reading-part5-passage-text');
      passageCard.appendChild(paragraph);
    }

    const questionCard = document.createElement('div');
    questionCard.className = 'reading-part5-question';
    if (row) {
      row.classList.add('reading-part5-question-row');
      questionCard.appendChild(row);
    }

    passages.appendChild(passageCard);
    questions.appendChild(questionCard);
    item.remove();
  });

  shell.append(passages, questions);
  container.appendChild(shell);
}

function lockJumpInputs() {
  document.querySelectorAll('#questionInput, #setInput, #questionJumpInput, #jumpToListening, input[id*="Jump"], input[id*="jump"]').forEach((input) => {
    if (input.dataset.jumpLocked) return;
    input.dataset.jumpLocked = 'true';
    input.readOnly = true;
    input.tabIndex = -1;
    input.setAttribute('aria-readonly', 'true');
    input.classList.add('legacy-jump-text');
    input.addEventListener('keydown', (event) => event.preventDefault());
    input.addEventListener('beforeinput', (event) => event.preventDefault());
  });
}

function wireAudioRanges() {
  document.querySelectorAll('.legacy-content .top-bar').forEach((bar) => {
    const audio = bar.querySelector('audio');
    const range = bar.querySelector('input[type="range"]');
    if (!audio || !range || range.dataset.volumeBound) return;
    range.dataset.volumeBound = 'true';
    range.min = '0';
    range.max = '1';
    range.step = '0.01';
    range.value = String(audio.volume || 1);
    range.setAttribute('aria-label', 'Âm lượng');
    range.addEventListener('input', () => {
      audio.volume = Math.max(0, Math.min(1, Number(range.value)));
    });
    audio.addEventListener('volumechange', () => {
      if (document.activeElement !== range) range.value = String(audio.volume);
    });
  });
}

function wireResultFeedback() {
  document.querySelectorAll('#checkResultButton, #confirmSubmitBtn, [id*="checkResult"], [id*="submitTest"]').forEach((button) => {
    if (button.dataset.feedbackBound) return;
    button.dataset.feedbackBound = 'true';
    button.addEventListener('click', () => {
      window.setTimeout(() => {
        colorResultRows();
        centerOpenLegacyModal();
      }, 120);
    });
  });
}

const playsRemainingMap = new Map();

function setupListeningPlays(bar) {
  const audio = bar.querySelector('audio');
  const label = bar.querySelector('small');
  const playBtn = bar.querySelector('button[id^="playButton"]') || bar.querySelector('button');
  if (!audio || !label || !playBtn) return;
  if (audio.dataset.playsBound) return;
  audio.dataset.playsBound = 'true';

  const getState = (url) => {
    if (!url) return { remaining: 2, isNewPlay: true };
    if (!playsRemainingMap.has(url)) {
      playsRemainingMap.set(url, { remaining: 2, isNewPlay: true });
    }
    return playsRemainingMap.get(url);
  };

  const updateUI = (url) => {
    const state = getState(url);
    label.textContent = `${state.remaining} of 2 plays remaining`;
    if (state.remaining <= 0) {
      playBtn.disabled = true;
      playBtn.style.opacity = '0.5';
      playBtn.style.cursor = 'not-allowed';
      const playIcon = playBtn.querySelector('i');
      if (playIcon) {
        playIcon.classList.remove('bi-pause-fill');
        playIcon.classList.add('bi-play-fill');
      }
    } else {
      playBtn.disabled = false;
      playBtn.style.opacity = '1';
      playBtn.style.cursor = 'pointer';
      const playIcon = playBtn.querySelector('i');
      if (playIcon) {
        if (!audio.paused && !audio.ended) {
          playIcon.classList.remove('bi-play-fill');
          playIcon.classList.add('bi-pause-fill');
        } else {
          playIcon.classList.remove('bi-pause-fill');
          playIcon.classList.add('bi-play-fill');
        }
      }
    }
  };

  // Listen for audio source changes instantly
  const srcObserver = new MutationObserver(() => {
    updateUI(audio.src);
  });
  srcObserver.observe(audio, { attributes: true, attributeFilter: ['src'] });
  activeCleanups.push(() => srcObserver.disconnect());

  audio.addEventListener('emptied', () => {
    updateUI(audio.src);
  });

  audio.addEventListener('loadstart', () => {
    updateUI(audio.src);
  });

  // Prevent user from pausing the audio by clicking the play button
  playBtn.addEventListener('click', (event) => {
    if (!audio.paused && !audio.ended) {
      event.stopPropagation();
      event.preventDefault();
    }
  }, true);

  audio.addEventListener('play', () => {
    const url = audio.src;
    const state = getState(url);

    if (state.remaining <= 0) {
      audio.pause();
      audio.currentTime = 0;
      return;
    }

    if (state.isNewPlay) {
      state.remaining--;
      state.isNewPlay = false;
      updateUI(url);
    }
  });

  const finalizePlay = () => {
    const url = audio.src;
    const state = getState(url);
    state.isNewPlay = true;
    if (audio.currentTime > 0) {
      audio.currentTime = 0;
    }
    updateUI(url);
  };

  audio.addEventListener('ended', finalizePlay);
  audio.addEventListener('pause', finalizePlay);

  // Initial UI sync
  updateUI(audio.src);
}

function colorResultRows() {
  document.querySelectorAll('.legacy-content tbody tr').forEach((row) => {
    const cells = [...row.querySelectorAll('td')];
    if (cells.length < 2) return;

    // Detect column indexes using headers if available
    const table = row.closest('table');
    let userIndex = -1;
    let correctIndex = -1;

    if (table) {
      const headers = [...table.querySelectorAll('thead th')].map(th => th.textContent.toLowerCase());
      userIndex = headers.findIndex(h => h.includes('your answer') || h.includes('user answer') || h.includes('bạn chọn') || h.includes('câu trả lời'));
      correctIndex = headers.findIndex(h => h.includes('correct') || h.includes('đáp án đúng'));
    }

    // Fallbacks if headers are missing or not matching
    if (userIndex === -1 || correctIndex === -1) {
      if (cells.length === 2) {
        userIndex = 0;
        correctIndex = 1;
      } else if (cells.length === 3) {
        userIndex = 1;
        correctIndex = 2;
      } else if (cells.length === 5) {
        userIndex = 2;
        correctIndex = 3;
      } else {
        userIndex = cells.length >= 3 ? cells.length - 2 : 0;
        correctIndex = cells.length - 1;
      }
    }

    const userCell = cells[userIndex];
    const correctCell = cells[correctIndex];
    if (!userCell || !correctCell) return;

    const user = normalizeAnswer(userCell.textContent);
    const correct = normalizeAnswer(correctCell.textContent);
    if (!correct || correct === 'correct answer') return;

    row.classList.remove('result-correct', 'result-wrong');
    
    userCell.classList.remove('answer-ok', 'answer-bad');
    userCell.classList.add(user && user === correct ? 'answer-ok' : 'answer-bad');
    userCell.classList.add('legacy-user-cell');
    
    correctCell.classList.remove('answer-ok', 'answer-bad');
    correctCell.classList.add('legacy-correct-cell');
  });
}

function normalizeAnswer(text) {
  return String(text || '')
    .replace(/your answer|correct answer|question no\.?/gi, '')
    .replace(/[✓✗]/g, '')
    .trim()
    .toLowerCase();
}

function startLegacyTimer(config) {
  if (!config.timerMinutes) return;
  const timer = document.querySelector('#legacyTimer span');
  if (!timer) return;
  let totalSeconds = Number(config.selectedMinutes || config.timerMinutes) * 60;
  const render = () => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    timer.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    document.getElementById('legacyTimer')?.classList.toggle('is-low', totalSeconds <= 60);
  };
  render();
  const interval = window.setInterval(() => {
    if (totalSeconds > 0) totalSeconds -= 1;
    render();
  }, 1000);
  activeCleanups.push(() => window.clearInterval(interval));
}

function installAskShim() {
  if (window.__legacyAskShimInstalled) return;
  const originalFetch = window.fetch.bind(window);
  window.__legacyAskShimInstalled = true;
  window.fetch = async function patchedFetch(input, init) {
    const url = typeof input === 'string' ? input : input?.url;
    if (url === '/ask' || url?.endsWith('/ask')) {
      return new Response(JSON.stringify({
        answer: 'Tính năng AI chấm điểm đang được tạm ẩn trong bản static. Bạn vẫn có thể luyện đề, xem đáp án mẫu và dùng transcript/ghi âm.',
      }), { headers: { 'Content-Type': 'application/json' } });
    }
    return originalFetch(input, init);
  };
  activeCleanups.push(() => {
    window.fetch = originalFetch;
    window.__legacyAskShimInstalled = false;
  });
}

function installJqueryShim() {
  const previousDollar = window.$;
  const previousJQuery = window.jQuery;

  const toElements = (selector) => {
    if (typeof selector === 'string') return [...document.querySelectorAll(selector)];
    if (!selector) return [];
    if (selector === window || selector === document || selector instanceof Element) return [selector];
    if (selector instanceof NodeList || Array.isArray(selector)) return [...selector];
    return [];
  };

  const createApi = (elements) => {
    const api = {
      elements,
      length: elements.length,
      each(callback) {
        elements.forEach((element, index) => callback.call(element, index, element));
        return api;
      },
      ready(callback) {
        if (typeof callback === 'function') window.setTimeout(callback, 0);
        return api;
      },
      on(type, handler) {
        elements.forEach((element) => element.addEventListener(type, handler));
        return api;
      },
      modal(action = 'show') {
        elements.forEach((element) => {
          const modal = bootstrap.Modal.getInstance(element) || new bootstrap.Modal(element, { backdrop: 'static' });
          if (action === 'hide') modal.hide();
          else if (action === 'toggle') element.classList.contains('show') ? modal.hide() : modal.show();
          else modal.show();
        });
        return api;
      },
      show() {
        elements.forEach((element) => { element.style.display = ''; });
        return api;
      },
      hide() {
        elements.forEach((element) => { element.style.display = 'none'; });
        return api;
      },
      html(value) {
        if (value === undefined) return elements[0]?.innerHTML;
        elements.forEach((element) => { element.innerHTML = value; });
        return api;
      },
      text(value) {
        if (value === undefined) return elements[0]?.textContent;
        elements.forEach((element) => { element.textContent = value; });
        return api;
      },
      addClass(value) {
        elements.forEach((element) => element.classList.add(...String(value).split(/\s+/).filter(Boolean)));
        return api;
      },
      removeClass(value) {
        elements.forEach((element) => element.classList.remove(...String(value).split(/\s+/).filter(Boolean)));
        return api;
      },
      css(property, value) {
        if (typeof property === 'string' && value === undefined) return elements[0] ? getComputedStyle(elements[0])[property] : undefined;
        elements.forEach((element) => {
          if (typeof property === 'string') element.style[property] = value;
          else Object.assign(element.style, property);
        });
        return api;
      },
    };

    elements.forEach((element, index) => { api[index] = element; });
    return api;
  };

  const shim = (selector) => {
    if (typeof selector === 'function') {
      window.setTimeout(selector, 0);
      return createApi([]);
    }
    return createApi(toElements(selector));
  };

  window.$ = shim;
  window.jQuery = shim;

  activeCleanups.push(() => {
    window.$ = previousDollar;
    window.jQuery = previousJQuery;
  });
}

function lockLegacyModalBackdrops() {
  const handler = (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    if (!target.classList.contains('modal') || !target.classList.contains('show')) return;
    event.preventDefault();
    event.stopPropagation();
    bootstrap.Modal.getInstance(target)?.hide();
  };

  document.addEventListener('click', handler, true);
  activeCleanups.push(() => {
    document.removeEventListener('click', handler, true);
  });
}

function installBootstrapShim() {
  if (window.bootstrap?.Modal) {
    installBootstrapModalDataApi(window.bootstrap.Modal);
    return;
  }

  class Modal {
    constructor(element) {
      this.element = element;
      if (element) element.__legacyModal = this;
    }

    show() {
      if (!this.element) return;
      ensureLegacyModalPlacement(this.element);
      this.element.style.display = 'block';
      this.element.classList.add('show');
      this.element.removeAttribute('aria-hidden');
      document.body.classList.add('modal-open');
      centerLegacyModal(this.element);
    }

    hide() {
      if (!this.element) return;
      this.element.style.display = 'none';
      this.element.classList.remove('show');
      this.element.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('modal-open');
    }

    static getInstance(element) {
      return element?.__legacyModal || new Modal(element);
    }

    static getOrCreateInstance(element) {
      return Modal.getInstance(element);
    }
  }

  window.bootstrap = { ...(window.bootstrap || {}), Modal };
  installBootstrapModalDataApi(Modal);
}

function installBootstrapModalDataApi(Modal) {
  if (!window.__legacyModalDismissInstalled) {
    const dismissHandler = (event) => {
      const trigger = event.target.closest?.('[data-bs-dismiss="modal"]');
      if (!trigger) return;
      const modal = trigger.closest('.modal');
      if (modal) Modal.getInstance(modal).hide();
    };
    document.addEventListener('click', dismissHandler);
    window.__legacyModalDismissInstalled = true;
  }

  if (!window.__legacyModalToggleInstalled) {
    const toggleHandler = (event) => {
      const trigger = event.target.closest?.('[data-bs-toggle="modal"][data-bs-target], [data-toggle="modal"][data-target]');
      if (!trigger) return;

      const selector = trigger.getAttribute('data-bs-target') || trigger.getAttribute('data-target');
      const modal = selector ? document.querySelector(selector) : null;
      if (!modal) return;

      event.preventDefault();
      Modal.getInstance(modal).show();
    };
    document.addEventListener('click', toggleHandler);
    window.__legacyModalToggleInstalled = true;
  }
}

function centerOpenLegacyModal() {
  const modal = document.querySelector('.legacy-content .modal.show');
  if (modal) centerLegacyModal(modal);
}

function centerLegacyModal(modal) {
  ensureLegacyModalPlacement(modal);
  window.requestAnimationFrame(() => {
    const target = modal.querySelector('.modal-dialog') || modal.querySelector('.modal-content') || modal;
    const rect = target.getBoundingClientRect();
    const viewportHeight = window.visualViewport?.height || window.innerHeight;
    const viewportOffsetTop = window.visualViewport?.offsetTop || 0;
    const targetCenter = window.scrollY + rect.top + (rect.height / 2);
    const scrollTop = Math.max(0, targetCenter - (viewportHeight / 2) + viewportOffsetTop);

    window.scrollTo({ top: scrollTop, left: 0, behavior: 'smooth' });
    modal.scrollTop = 0;
  });
}

function ensureLegacyModalPlacement(modal) {
  const root = document.getElementById('legacyContent');
  if (!root || !modal || !root.contains(modal)) return;
  syncLegacyModalBounds(root);
  if (modal.parentElement === root) return;
  root.appendChild(modal);
}

function syncLegacyModalBounds(root = document.getElementById('legacyContent')) {
  if (!root) return;
  const height = Math.max(240, root.getBoundingClientRect().height || window.innerHeight);
  root.style.setProperty('--legacy-modal-max-height', `${height}px`);
}

function installSortableShim() {
  if (window.Sortable) return;

  window.Sortable = class Sortable {
    constructor(element, options = {}) {
      if (!element) return;
      this.element = element;
      this.options = options;
      this.enable();
    }

    enable() {
      let dragged = null;

      const setupChild = (child) => {
        if (child._sortableActive) return;
        child._sortableActive = true;
        child.draggable = true;
        child.addEventListener('dragstart', () => {
          dragged = child;
          child.classList.add('is-dragging');
        });
        child.addEventListener('dragend', () => {
          child.classList.remove('is-dragging');
          this.options.onEnd?.({ item: child, to: this.element });
        });
      };

      // Set up initial children
      this.element.querySelectorAll(':scope > *').forEach(setupChild);

      // Watch for dynamically added children
      const observer = new MutationObserver(() => {
        this.element.querySelectorAll(':scope > *').forEach(setupChild);
      });
      observer.observe(this.element, { childList: true });

      this.element.addEventListener('dragover', (event) => {
        event.preventDefault();
        const after = getDragAfterElement(this.element, event.clientY);
        if (!dragged) return;
        if (after == null) this.element.appendChild(dragged);
        else this.element.insertBefore(dragged, after);
      });
      this.element.addEventListener('drop', () => {
        if (dragged) this.options.onAdd?.({ item: dragged, to: this.element });
      });
    }
  };
}

function getDragAfterElement(container, y) {
  const elements = [...container.querySelectorAll(':scope > *:not(.is-dragging)')];
  return elements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;
    if (offset < 0 && offset > closest.offset) return { offset, element: child };
    return closest;
  }, { offset: Number.NEGATIVE_INFINITY }).element;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}
