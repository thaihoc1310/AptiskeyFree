import { mkdir, rename, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const email = process.env.APTISKEY_EMAIL;
const password = process.env.APTISKEY_PASSWORD;
const baseUrl = (process.env.APTISKEY_BASE_URL || 'https://aptiskey.com').replace(/\/$/, '');

if (!email || !password) {
  console.log('  Exam reviews skipped: APTISKEY_EMAIL/APTISKEY_PASSWORD are not configured');
  process.exit(0);
}

const scriptDir = dirname(fileURLToPath(import.meta.url));
const outputPath = resolve(scriptDir, '../public/crawled_data/exam-reviews.json');
const tempPath = `${outputPath}.tmp`;

function cookieHeader(response) {
  const setCookies = typeof response.headers.getSetCookie === 'function'
    ? response.headers.getSetCookie()
    : [response.headers.get('set-cookie')].filter(Boolean);

  return setCookies
    .map((cookie) => cookie.split(';', 1)[0])
    .filter(Boolean)
    .join('; ');
}

function isApproved(post) {
  return post?.approved === true || post?.approved === 1 || post?.approved === '1';
}

function cleanPost(post) {
  return {
    id: Number(post.id),
    dailyIndex: Number(post.daily_index ?? post.id),
    content: String(post.content || '').trim(),
    createdAt: String(post.created_at || ''),
  };
}

try {
  const loginBody = new URLSearchParams({ email, password });
  const loginResponse = await fetch(`${baseUrl}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
    },
    body: loginBody,
    redirect: 'manual',
  });

  const loginData = await loginResponse.json().catch(() => null);
  const cookie = cookieHeader(loginResponse);
  if (!loginResponse.ok || !loginData?.success || !cookie) {
    throw new Error(loginData?.message || `Login failed (${loginResponse.status})`);
  }

  const postsResponse = await fetch(`${baseUrl}/api/posts`, {
    headers: { Accept: 'application/json', Cookie: cookie },
    redirect: 'manual',
  });
  const contentType = postsResponse.headers.get('content-type') || '';
  if (!postsResponse.ok || !contentType.includes('application/json')) {
    throw new Error(`Posts API returned ${postsResponse.status} ${contentType || 'without content-type'}`);
  }

  const result = await postsResponse.json();
  const sourcePosts = Array.isArray(result?.data) ? result.data : [];
  const posts = sourcePosts
    .filter(isApproved)
    .map(cleanPost)
    .filter((post) => post.id && post.content && post.createdAt)
    .sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))
    .slice(0, 200);

  const snapshot = {
    source: `${baseUrl}/exam-review.html`,
    fetchedAt: new Date().toISOString(),
    total: posts.length,
    posts,
  };

  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(tempPath, `${JSON.stringify(snapshot, null, 2)}\n`, 'utf8');
  await rename(tempPath, outputPath);
  console.log(`  Exam reviews: saved ${posts.length} approved posts`);
} catch (error) {
  console.error(`  WARNING: failed to update exam reviews: ${error.message}`);
  process.exitCode = 0;
}
