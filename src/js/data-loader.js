// Data loader — extracts question arrays from crawled JS files
// The crawled JS files define questions as global constants (questions1_1, questions1_2, etc.)
// We eval them in a sandboxed way to extract the data

const dataCache = {};

export async function loadQuestionData(jsPath) {
  if (dataCache[jsPath]) return dataCache[jsPath];
  
  try {
    const resp = await fetch(jsPath);
    if (!resp.ok) throw new Error(`Failed to load: ${jsPath}`);
    const code = await resp.text();
    
    // Extract all const/var/let arrays from the code
    const data = extractData(code);
    dataCache[jsPath] = data;
    return data;
  } catch (err) {
    console.error('Data load error:', err);
    return null;
  }
}

function extractData(code) {
  const result = { questions: [], meta: {} };
  
  // Match all question array definitions: const questions1_X = [...]
  const arrayRegex = /(?:const|let|var)\s+(questions?\d*_?\d*)\s*=\s*(\[[\s\S]*?\]);/g;
  let match;
  while ((match = arrayRegex.exec(code)) !== null) {
    try {
      const name = match[1];
      const arrStr = match[2];
      const arr = eval(`(${arrStr})`);
      result.questions.push({ name, data: arr });
    } catch (e) {
      console.warn('Failed to parse array:', e);
    }
  }

  // Match questionsArrays = [questions1_1, questions1_2, ...]
  const arraysRegex = /questionsArrays\s*=\s*\[([\s\S]*?)\]/;
  const arraysMatch = code.match(arraysRegex);
  if (arraysMatch) {
    const names = arraysMatch[1].split(',').map(s => s.trim()).filter(Boolean);
    result.questionOrder = names;
  }

  // Match other metadata
  const keyIdMatch = code.match(/key_id\s*=\s*["']([^"']+)["']/);
  if (keyIdMatch) result.meta.keyId = keyIdMatch[1];

  const clubMatch = code.match(/club_name\s*=\s*["']([^"']+)["']/);
  if (clubMatch) result.meta.clubName = clubMatch[1];

  return result;
}

// Load reading question data for a specific part
export async function loadReadingQuestions(part) {
  const path = `/crawled_data/js/js_reading_question_reading_question${part}.js`;
  return loadQuestionData(path);
}

// Load reading key (bode) data
export async function loadReadingKey(id) {
  const path = `/crawled_data/js/js_reading_readingkey${id}.js`;
  return loadQuestionData(path);
}

// Load listening question data
export async function loadListeningQuestions(part) {
  const path = `/crawled_data/js/js_listening_question_listening_question${part}.js`;
  return loadQuestionData(path);
}

// Load listening key data
export async function loadListeningKey(id) {
  const path = `/crawled_data/js/js_listening_listeningkey${id}.js`;
  return loadQuestionData(path);
}

// Load writing key data
export async function loadWritingKey(id) {
  const path = `/crawled_data/js/js_writing_writingkey${id}.js`;
  return loadQuestionData(path);
}

// Load grammar key data
export async function loadGrammarKey(id) {
  const path = `/crawled_data/js/js_grammar_grammar_key${id}.js`;
  return loadQuestionData(path);
}
