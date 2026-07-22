# Cloudflare Pages + D1 setup

The application uses Pages Functions, a D1 binding named `DB`, and an encrypted
secret named `JWT_SECRET`. Public registration is intentionally not implemented.

## Production setup

1. Create the database from an authenticated terminal:

   ```bash
   npx wrangler d1 create aptiskey-auth
   ```

2. Apply the schema and the initial admin + 20 student accounts:

   ```bash
   npx wrangler d1 execute aptiskey-auth --remote --file=migrations/0001_auth.sql
   npx wrangler d1 execute aptiskey-auth --remote --file=migrations/0002_cloudflare_pbkdf2.sql
   ```

3. In **Cloudflare Dashboard → Workers & Pages → your Pages project → Settings →
   Bindings**, add a D1 binding:

   - Variable name: `DB`
   - D1 database: `aptiskey-auth`
   - Add it to both Production and Preview if preview deployments need login.

4. In **Settings → Variables and Secrets**, add an encrypted secret named
   `JWT_SECRET` to Production (and Preview when applicable). Generate a strong
   value locally, for example:

   ```bash
   openssl rand -base64 48
   ```

   Never commit that value to Git.

5. Keep the Pages build settings as:

   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: the repository root

6. Redeploy the Pages project. Requests without a valid session will then be
   redirected to `/login`.

Cloudflare allows bindings to be managed either in the dashboard or in a Wrangler
configuration file. The dashboard route above is safer for an existing Pages
project because adding a Wrangler file makes it the source of truth. If this
project already uses Wrangler configuration, download the live project config
first and merge the `d1_databases` block from `wrangler.example.jsonc`.

## Local full-stack testing

1. Copy `wrangler.example.jsonc` to `wrangler.jsonc`, then replace the project
   name and D1 database ID.
2. Create `.dev.vars` with a local-only secret:

   ```text
   JWT_SECRET=replace-with-at-least-32-random-characters
   ```

3. Prepare and run the local D1-backed Pages app:

   ```bash
   npm run db:migrate:local
   npm run dev:pages
   ```

The normal `npm run dev` command only starts Vite. It does not emulate Pages
Functions or D1, so authentication must be tested through `npm run dev:pages`.

## Security behavior

- Session JWT: HMAC-SHA256; users expire after 24 hours, admins after one year.
- Cookie: HttpOnly, SameSite=Lax, Secure on HTTPS.
- Passwords: PBKDF2-SHA256 with a unique random salt and 100,000 iterations
  (the maximum accepted by the Cloudflare Workers runtime).
- Five failed logins for the same username/IP cause a 15-minute lockout.
- User disable, role change, password reset, and deletion invalidate existing
  sessions on the next document/API request.
- Only an authenticated admin may create accounts; there is no sign-up endpoint.
