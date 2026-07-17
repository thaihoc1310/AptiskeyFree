import { getAuthenticatedUser } from './_shared/auth.js';

function safeNext(value) {
  if (!value || typeof value !== 'string') return '/';
  try {
    const base = new URL('https://aptiskey.invalid/');
    const target = new URL(value, base);
    if (target.origin !== base.origin) return '/';
    return `${target.pathname}${target.search}${target.hash}`;
  } catch {
    return '/';
  }
}

function html(value, nonce) {
  const next = JSON.stringify(value).replaceAll('<', '\\u003c');
  return `<!doctype html>
<html lang="vi" data-theme="dark">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#050506">
  <title>Đăng nhập — AptiskeyFree</title>
  <style nonce="${nonce}">
    :root{color-scheme:dark;font-family:"Be Vietnam Pro",Inter,system-ui,sans-serif;background:#050506;color:#ededf0}
    *{box-sizing:border-box}body{min-height:100vh;margin:0;display:grid;place-items:center;padding:24px;background:radial-gradient(circle at 18% 15%,rgba(94,106,210,.22),transparent 30%),radial-gradient(circle at 85% 80%,rgba(85,214,190,.12),transparent 28%),#050506}
    body:before{content:"";position:fixed;inset:0;pointer-events:none;background-image:linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px);background-size:64px 64px;mask-image:linear-gradient(to bottom,#000,transparent)}
    .shell{width:min(100%,980px);display:grid;grid-template-columns:1.05fr .95fr;overflow:hidden;border:1px solid rgba(255,255,255,.1);border-radius:24px;background:rgba(13,14,20,.82);box-shadow:0 32px 90px rgba(0,0,0,.55);backdrop-filter:blur(28px)}
    .intro{padding:58px;display:flex;flex-direction:column;justify-content:space-between;min-height:590px;background:linear-gradient(145deg,rgba(94,106,210,.2),rgba(13,14,20,.25) 60%,rgba(85,214,190,.08));border-right:1px solid rgba(255,255,255,.08)}
    .brand{display:flex;align-items:center;gap:12px;font-weight:800;font-size:18px}.mark{width:42px;height:42px;display:grid;place-items:center;border-radius:12px;background:linear-gradient(135deg,#5e6ad2,#8b92ea);box-shadow:0 10px 30px rgba(94,106,210,.3)}
    .intro h1{font-size:clamp(34px,5vw,54px);line-height:1.06;margin:38px 0 20px;letter-spacing:-.04em}.intro h1 span{color:#8b92ea}.intro p{color:#a8adb7;line-height:1.7;margin:0;max-width:440px}.status{display:flex;align-items:center;gap:10px;color:#8d94a3;font-size:13px}.dot{width:8px;height:8px;border-radius:50%;background:#55d6be;box-shadow:0 0 16px #55d6be}
    .panel{padding:58px 52px;display:flex;flex-direction:column;justify-content:center}.eyebrow{font-size:12px;font-weight:700;color:#8b92ea;letter-spacing:.12em;text-transform:uppercase}.panel h2{font-size:30px;margin:10px 0 8px}.hint{color:#8d94a3;line-height:1.55;margin:0 0 30px;font-size:14px}
    label{display:block;color:#c8cad1;font-size:13px;font-weight:650;margin-bottom:9px}.field{margin-bottom:18px;position:relative}.field input{width:100%;height:50px;border-radius:10px;border:1px solid rgba(255,255,255,.11);background:rgba(255,255,255,.055);color:#fff;padding:0 46px 0 15px;font:inherit;outline:none;transition:.18s}.field input:focus{border-color:#7c84e1;box-shadow:0 0 0 3px rgba(94,106,210,.16)}
    .toggle{position:absolute;right:8px;bottom:7px;width:36px;height:36px;border:0;border-radius:8px;background:transparent;color:#969ba7;cursor:pointer;font-size:17px}.toggle:hover{background:rgba(255,255,255,.07);color:#fff}
    .submit{width:100%;height:50px;margin-top:6px;border:0;border-radius:10px;background:linear-gradient(135deg,#5e6ad2,#747ee4);color:#fff;font:700 14px inherit;cursor:pointer;box-shadow:0 12px 28px rgba(94,106,210,.25);transition:.18s}.submit:hover{transform:translateY(-1px);filter:brightness(1.08)}.submit:disabled{cursor:wait;opacity:.65;transform:none}
    .error{min-height:42px;margin:18px 0 0;padding:10px 12px;border-radius:9px;background:rgba(255,107,122,.12);border:1px solid rgba(255,107,122,.22);color:#ff9ca6;font-size:13px;line-height:1.5;display:none}.error.show{display:block}.private{display:flex;gap:9px;align-items:flex-start;margin-top:24px;color:#747a87;font-size:12px;line-height:1.5}.private b{color:#9ca1ac}
    @media(max-width:760px){.shell{grid-template-columns:1fr}.intro{display:none}.panel{padding:42px 28px;min-height:560px}}
  </style>
</head>
<body>
  <main class="shell">
    <section class="intro">
      <div>
        <div class="brand"><span class="mark">AK</span>AptiskeyFree</div>
        <h1>Học Aptis<br><span>có hệ thống.</span></h1>
        <p>Truy cập bộ đề, đáp án và công cụ luyện thi trong không gian học tập dành riêng cho thành viên.</p>
      </div>
      <div class="status"><span class="dot"></span>Kết nối bảo mật · Phiên đăng nhập 24 giờ</div>
    </section>
    <section class="panel">
      <span class="eyebrow">Member access</span>
      <h2>Chào mừng trở lại</h2>
      <p class="hint">Nhập tài khoản được quản trị viên cấp để tiếp tục.</p>
      <form id="loginForm" autocomplete="on">
        <div class="field">
          <label for="username">Tên đăng nhập</label>
          <input id="username" name="username" autocomplete="username" minlength="3" maxlength="32" required autofocus>
        </div>
        <div class="field">
          <label for="password">Mật khẩu</label>
          <input id="password" name="password" type="password" autocomplete="current-password" maxlength="128" required>
          <button class="toggle" id="togglePassword" type="button" aria-label="Hiện mật khẩu">◉</button>
        </div>
        <button class="submit" id="submitButton" type="submit">Đăng nhập</button>
        <div class="error" id="loginError" role="alert"></div>
      </form>
      <div class="private"><span>⌁</span><span><b>Không hỗ trợ đăng ký công khai.</b><br>Tài khoản chỉ được tạo bởi quản trị viên.</span></div>
    </section>
  </main>
  <script nonce="${nonce}">
    const nextUrl=${next};
    const form=document.getElementById('loginForm');
    const submit=document.getElementById('submitButton');
    const error=document.getElementById('loginError');
    document.getElementById('togglePassword').addEventListener('click',()=>{
      const input=document.getElementById('password');
      input.type=input.type==='password'?'text':'password';
    });
    form.addEventListener('submit',async(event)=>{
      event.preventDefault();error.classList.remove('show');submit.disabled=true;submit.textContent='Đang xác thực…';
      try{
        const response=await fetch('/api/auth/login',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({username:form.username.value,password:form.password.value})});
        const data=await response.json().catch(()=>({}));
        if(!response.ok)throw new Error(data.message||'Không thể đăng nhập. Vui lòng thử lại.');
        window.location.replace(nextUrl);
      }catch(reason){error.textContent=reason.message;error.classList.add('show');submit.disabled=false;submit.textContent='Đăng nhập';}
    });
  </script>
</body>
</html>`;
}

export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  const next = safeNext(url.searchParams.get('next'));
  try {
    if (await getAuthenticatedUser(request, env)) return Response.redirect(new URL(next, url.origin), 302);
  } catch {
    // The login screen remains available while bindings are being configured.
  }

  const nonce = crypto.randomUUID().replaceAll('-', '');
  return new Response(html(next, nonce), {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-store',
      'Content-Security-Policy': `default-src 'none'; style-src 'nonce-${nonce}'; script-src 'nonce-${nonce}'; connect-src 'self'; form-action 'self'; base-uri 'none'; frame-ancestors 'none'`,
      'Referrer-Policy': 'no-referrer',
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
    },
  });
}
