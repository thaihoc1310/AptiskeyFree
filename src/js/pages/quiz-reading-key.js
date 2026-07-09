// Reading Key (Bộ đề) — loads original JS which handles all 5 parts
// The original JS expects specific DOM element IDs, so we provide them

export async function renderReadingKey(id) {
  // Fetch the original HTML template to get the structure
  try {
    const resp = await fetch(`/crawled_data/html/reading${id}.html`);
    const html = await resp.text();
    
    // Extract body content (between <body> and </body>)
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (!bodyMatch) return '<p>Không thể tải bộ đề.</p>';
    
    let bodyContent = bodyMatch[1];
    
    // Remove old script tags (we'll load them ourselves)
    bodyContent = bodyContent.replace(/<script[\s\S]*?<\/script>/gi, '');
    
    // Wrap in our quiz layout
    return `
      <div class="reading-key-page animate-fade-in">
        <div class="quiz-header">
          <a href="#/reading/bode" class="quiz-back"><i class="bi bi-arrow-left"></i> Về danh sách bộ đề</a>
          <div class="quiz-timer"><i class="bi bi-clock"></i> <span id="countdownTimer">35:00</span></div>
          <div class="quiz-step" id="question_step">Bộ đề #${id}</div>
        </div>
        <div class="quiz-body original-content" id="originalContent">
          ${bodyContent}
        </div>
      </div>`;
  } catch (err) {
    console.error(err);
    return '<p>Không thể tải bộ đề.</p>';
  }
}

export async function initReadingKey(id) {
  // Load SortableJS for drag-drop questions
  if (!window.Sortable) {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/sortablejs@1.15.6/Sortable.min.js';
    document.head.appendChild(script);
    await new Promise(r => script.onload = r);
  }

  // Load Bootstrap JS for modals
  if (!window.bootstrap) {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js';
    document.head.appendChild(script);
    await new Promise(r => script.onload = r);
  }

  // Load the original JS for this reading key
  try {
    const resp = await fetch(`/crawled_data/js/js_reading_readingkey${id}.js`);
    const code = await resp.text();
    
    // Remove the DOMContentLoaded wrapper and execute
    let cleanCode = code
      .replace(/document\.addEventListener\s*\(\s*['"]DOMContentLoaded['"]\s*,\s*function\s*\(\)\s*\{/, '')
      .replace(/\}\s*\)\s*;\s*$/, '');
    
    // Execute in global scope
    const fn = new Function(cleanCode);
    fn();
  } catch (err) {
    console.error('Failed to load reading key JS:', err);
  }
}
