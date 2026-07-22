import test from 'node:test';
import assert from 'node:assert/strict';
import {
  createSessionToken,
  getAuthenticatedUser,
  hashPassword,
  verifyPassword,
  verifySessionToken,
} from '../functions/_shared/auth.js';
import { onRequestPost } from '../functions/api/auth/password.js';

const env = { JWT_SECRET: 'test-secret-that-is-longer-than-thirty-two-characters' };

async function fixture() {
  const password = await hashPassword('OldPass!123');
  const user = {
    id: 'user-1',
    username: 'aptis-test',
    password_hash: password.hash,
    password_salt: password.salt,
    password_iterations: password.iterations,
    role: 'user',
    is_active: 1,
    token_version: 1,
    created_at: '2026-07-17T00:00:00.000Z',
    updated_at: '2026-07-17T00:00:00.000Z',
    last_login_at: null,
  };

  const db = {
    prepare(sql) {
      return {
        bind(...values) {
          return {
            async first() {
              if (sql.includes('FROM users WHERE id = ?')) return { ...user };
              return null;
            },
            async run() {
              if (!sql.includes('UPDATE users')) return { meta: { changes: 0 } };
              const [hash, salt, iterations, updatedAt, id, tokenVersion] = values;
              if (id !== user.id || Number(tokenVersion) !== Number(user.token_version)) {
                return { meta: { changes: 0 } };
              }
              Object.assign(user, {
                password_hash: hash,
                password_salt: salt,
                password_iterations: iterations,
                updated_at: updatedAt,
                token_version: Number(user.token_version) + 1,
              });
              return { meta: { changes: 1 } };
            },
          };
        },
      };
    },
  };
  const testEnv = { ...env, DB: db };
  const oldToken = await createSessionToken(user, testEnv);
  const payload = await verifySessionToken(oldToken, testEnv);
  return { db, oldToken, payload, testEnv, user };
}

function passwordRequest(token, csrf, body) {
  return new Request('https://example.com/api/auth/password', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      cookie: `aptiskey_session=${token}`,
      'x-csrf-token': csrf,
    },
    body: JSON.stringify(body),
  });
}

test('rejects an incorrect current password without changing the account', async () => {
  const state = await fixture();
  const response = await onRequestPost({
    request: passwordRequest(state.oldToken, state.payload.csrf, {
      currentPassword: 'WrongPass!123',
      newPassword: 'NewPass!456',
    }),
    env: state.testEnv,
  });

  assert.equal(response.status, 400);
  assert.equal((await response.json()).error, 'invalid_current_password');
  assert.equal(state.user.token_version, 1);
  assert.equal(await verifyPassword('OldPass!123', state.user), true);
});

test('changes the password, revokes the old JWT, and issues a fresh 24-hour session', async () => {
  const state = await fixture();
  const response = await onRequestPost({
    request: passwordRequest(state.oldToken, state.payload.csrf, {
      currentPassword: 'OldPass!123',
      newPassword: 'NewPass!456',
    }),
    env: state.testEnv,
  });

  assert.equal(response.status, 200);
  assert.equal(state.user.token_version, 2);
  assert.equal(await verifyPassword('OldPass!123', state.user), false);
  assert.equal(await verifyPassword('NewPass!456', state.user), true);
  assert.equal(await getAuthenticatedUser(passwordRequest(state.oldToken, state.payload.csrf, {}), state.testEnv), null);

  const setCookie = response.headers.get('set-cookie') || '';
  const newToken = setCookie.match(/aptiskey_session=([^;]+)/)?.[1];
  assert.ok(newToken);
  assert.match(setCookie, /Max-Age=86400/);
  assert.equal((await getAuthenticatedUser(passwordRequest(newToken, 'unused', {}), state.testEnv))?.username, 'aptis-test');
});
