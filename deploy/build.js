#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const MarkdownIt = require('markdown-it');
const hljs = require('highlight.js');
const fm = require('front-matter');

const ROOT = path.resolve(__dirname, '..');
const DOCS_DIR = path.join(ROOT, 'docs');
const OUTPUT_DIR = path.join(ROOT, 'html');
const posix = path.posix;

const SECTION_LABELS = { docs: '문서', reference: '레퍼런스' };
const FOLDER_LABELS = {
  'docs/basics': '기본',
  'docs/liff': 'LIFF',
  'docs/line-ads-api': 'LINE Ads API',
  'docs/line-conversion-api': 'LINE Conversion API',
  'docs/line-developers-console': 'LINE Developers 콘솔',
  'docs/line-login': 'LINE 로그인',
  'docs/line-login-sdks': 'LINE 로그인 SDK',
  'docs/line-login-sdks/android-sdk': 'Android SDK',
  'docs/line-login-sdks/ios-sdk': 'iOS SDK',
  'docs/line-login-sdks/ios-sdk/swift': 'Swift',
  'docs/line-login-sdks/unity-sdk': 'Unity SDK',
  'docs/line-login-sdks/flutter-sdk': 'Flutter SDK',
  'docs/line-mini-app': 'LINE 미니앱',
  'docs/messaging-api': 'Messaging API',
  'docs/partner-docs': '파트너 문서',
};
const FIRST = ['overview', 'getting-started', 'quickstart', 'introduction'];

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight: (str, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value;
      } catch (__) {}
    }
    return '';
  },
});

function relUrl(fromDir, toDir) {
  const r = posix.relative(fromDir || '.', toDir || '.');
  return (r === '' ? '.' : r) + '/';
}

md.renderer.rules.image = function (tokens, idx) {
  const token = tokens[idx];
  let src = token.attrGet('src');
  if (src && src.startsWith('/media/')) src = 'https://developers.line.biz' + src;
  const alt = escapeHtml(token.content);
  return `<figure class="doc-figure"><img src="${src}" alt="${alt}" loading="lazy"><figcaption>${alt}</figcaption></figure>`;
};

const LINE_URL = /^https:\/\/developers\.line\.biz\/(?:en|ko|ja)\/((?:docs|reference)\/[^#?]*?)\/?(#.*)?$/;
md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
  const token = tokens[idx];
  const href = token.attrGet('href');
  if (href && href.startsWith('http')) {
    const m = href.match(LINE_URL);
    if (m && env.known && env.known.has(m[1])) {
      token.attrSet('href', relUrl(env.pageDir, m[1]) + (m[2] || ''));
    } else {
      token.attrSet('target', '_blank');
      token.attrSet('rel', 'noopener noreferrer');
    }
  }
  return self.renderToken(tokens, idx, options);
};

function escapeHtml(text) {
  const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
  return String(text).replace(/[&<>"']/g, (m) => map[m]);
}

function findMarkdownFiles(dir) {
  const files = [];
  (function scan(p) {
    for (const e of fs.readdirSync(p, { withFileTypes: true })) {
      const full = path.join(p, e.name);
      if (e.isDirectory()) scan(full);
      else if (e.name === 'index.html.md') files.push(full);
    }
  })(dir);
  return files;
}

function prettify(slug) {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

function loadPages(lang) {
  const base = path.join(DOCS_DIR, lang);
  return findMarkdownFiles(base)
    .map((file) => {
      const rel = path.relative(base, path.dirname(file)).split(path.sep).join('/');
      const parsed = fm(fs.readFileSync(file, 'utf-8'));
      const m = parsed.body.match(/^#\s+(.+)$/m);
      return { file, rel, body: parsed.body, title: m ? m[1].trim() : parsed.attributes.title || prettify(posix.basename(rel)) };
    })
    .sort((a, b) => a.rel.localeCompare(b.rel));
}

function buildTree(pages) {
  const root = { children: new Map(), page: null, rel: '' };
  for (const page of pages) {
    let node = root;
    const parts = page.rel.split('/');
    parts.forEach((part, i) => {
      if (!node.children.has(part)) {
        node.children.set(part, { children: new Map(), page: null, rel: parts.slice(0, i + 1).join('/'), name: part });
      }
      node = node.children.get(part);
    });
    node.page = page;
  }
  return root;
}

function sortedChildren(node) {
  return [...node.children.values()].sort((a, b) => {
    const ia = FIRST.indexOf(a.name);
    const ib = FIRST.indexOf(b.name);
    if (ia !== -1 || ib !== -1) return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
    return a.name.localeCompare(b.name);
  });
}

function renderNode(node, current, pageDir) {
  const isCurrent = node.rel === current;
  const label = escapeHtml(FOLDER_LABELS[node.rel] || (node.page && node.page.title) || prettify(node.name));
  const link = node.page
    ? `<a href="${relUrl(pageDir, node.rel)}"${isCurrent ? ' class="active" aria-current="page"' : ''}>${label}</a>`
    : `<span>${label}</span>`;
  if (node.children.size === 0) return `<li>${link}</li>`;
  const open = current === node.rel || current.startsWith(node.rel + '/');
  const kids = sortedChildren(node).map((c) => renderNode(c, current, pageDir)).join('');
  return `<li><details${open ? ' open' : ''}><summary>${link}</summary><ul>${kids}</ul></details></li>`;
}

function renderNav(tree, current, pageDir) {
  return sortedChildren(tree)
    .map((section) => {
      const items = sortedChildren(section).map((c) => renderNode(c, current, pageDir)).join('');
      return `<div class="nav-section"><div class="nav-title">${escapeHtml(SECTION_LABELS[section.name] || section.name)}</div><ul>${items}</ul></div>`;
    })
    .join('');
}

const CSS = `
*{box-sizing:border-box}
:root{--bg:#fff;--fg:#1a1a1a;--fg2:#595959;--border:#e5e5e5;--bg2:#f5f5f7;--accent:#0066ff;--code-bg:#f3f4f6;--hover:rgba(0,102,255,.07);--header-h:57px}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){--bg:#0f0f0f;--fg:#f5f5f5;--fg2:#a6a6a6;--border:#2d2d2d;--bg2:#1a1a1a;--accent:#4d94ff;--code-bg:#1e1e1e;--hover:rgba(77,148,255,.12);color-scheme:dark}}
:root[data-theme="dark"]{--bg:#0f0f0f;--fg:#f5f5f5;--fg2:#a6a6a6;--border:#2d2d2d;--bg2:#1a1a1a;--accent:#4d94ff;--code-bg:#1e1e1e;--hover:rgba(77,148,255,.12);color-scheme:dark}
body{background:var(--bg);color:var(--fg);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Apple SD Gothic Neo','Noto Sans KR',Roboto,sans-serif;line-height:1.6;margin:0}
header{position:sticky;top:0;z-index:20;height:var(--header-h);background:var(--bg);border-bottom:1px solid var(--border);display:flex;align-items:center;gap:1rem;padding:0 1.25rem}
.logo{font-weight:700;font-size:1.2rem;color:var(--fg);text-decoration:none;white-space:nowrap}
.search{flex:1;max-width:320px;margin-left:auto}
.search input{width:100%;padding:.45rem .75rem;border:1px solid var(--border);border-radius:6px;background:var(--bg2);color:var(--fg);font-size:.875rem}
.search input:focus{outline:2px solid var(--accent);outline-offset:-1px;background:var(--bg)}
.nav-btn{display:none;cursor:pointer;font-size:1.3rem;line-height:1;padding:.25rem .4rem;border:1px solid var(--border);border-radius:6px}
#nav-toggle{position:absolute;opacity:0;pointer-events:none}
.layout{display:grid;grid-template-columns:300px minmax(0,1fr)}
.sidebar{position:sticky;top:var(--header-h);height:calc(100vh - var(--header-h));overflow-y:auto;border-right:1px solid var(--border);background:var(--bg2);padding:.75rem 0 2rem;font-size:.875rem}
.sidebar ul{list-style:none;margin:0;padding:0}
.sidebar ul ul{padding-left:.9rem;border-left:1px solid var(--border);margin-left:1.1rem}
.nav-title{padding:.9rem 1.25rem .35rem;font-size:.72rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--fg2)}
.sidebar a,.sidebar summary>span{display:inline-block;padding:.28rem .5rem;color:var(--fg2);text-decoration:none;border-radius:4px}
.sidebar li>a{display:block;margin:0 .5rem 0 1rem}
.sidebar a:hover{color:var(--accent);background:var(--hover)}
.sidebar a.active{color:var(--accent);background:var(--hover);font-weight:600}
.sidebar summary{cursor:pointer;padding:.1rem .75rem .1rem 1rem;list-style-position:inside}
.sidebar summary>span{font-weight:600;color:var(--fg)}
.sidebar summary a{padding-left:.2rem}
.sidebar li.hidden{display:none}
.content{min-width:0;padding:2rem 2.5rem 4rem}
article{max-width:880px;margin:0 auto}
h1,h2,h3,h4{line-height:1.3;color:var(--fg);text-wrap:balance}
h1{font-size:2.1rem;margin:0 0 1rem}
h2{font-size:1.5rem;margin:2.2rem 0 1rem;padding-bottom:.4rem;border-bottom:1px solid var(--border)}
h3{font-size:1.2rem;margin:1.6rem 0 .6rem}
p,li{color:var(--fg2);line-height:1.75}
a{color:var(--accent)}
code{background:var(--code-bg);padding:.15em .4em;border-radius:3px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:.9em}
pre{background:var(--code-bg);border:1px solid var(--border);border-radius:8px;padding:1rem;overflow-x:auto;line-height:1.5}
pre code{background:none;padding:0;color:var(--fg)}
blockquote{border-left:4px solid var(--accent);padding:.6rem 1.2rem;margin:1.2rem 0;background:var(--bg2);border-radius:4px}
.table-wrap{overflow-x:auto}
table{width:100%;border-collapse:collapse;margin:1.2rem 0}
th,td{padding:.6rem .8rem;border:1px solid var(--border);text-align:left;vertical-align:top}
th{background:var(--bg2);color:var(--fg)}
.doc-figure{margin:1.5rem 0;text-align:center}
.doc-figure img{max-width:100%;height:auto;border:1px solid var(--border);border-radius:8px}
.doc-figure figcaption{margin-top:.4rem;font-size:.85rem;color:var(--fg2)}
.tip{background:var(--bg2);border-left:4px solid var(--accent);padding:.8rem 1.2rem;margin:1.2rem 0;border-radius:4px}
.feature-box{background:var(--bg2);border-left:4px solid var(--accent);border-radius:6px;padding:1rem 1.4rem;margin:1.2rem 0}
.feature-box h4{margin:0 0 .4rem;color:var(--accent)}
.feature-box p{margin:0}
@media (max-width:860px){
  .nav-btn{display:block}
  .layout{grid-template-columns:minmax(0,1fr)}
  .sidebar{display:none;position:fixed;inset:var(--header-h) 0 0 0;height:auto;z-index:15;width:100%}
  #nav-toggle:checked~.layout .sidebar{display:block}
  .content{padding:1.25rem 1rem 3rem}
  h1{font-size:1.6rem}
  .search{max-width:none}
}
`;

const SCRIPT = `
(function(){
  var a=document.querySelector('.sidebar a.active');
  if(a)a.scrollIntoView({block:'center'});
  var input=document.getElementById('nav-search');
  if(!input)return;
  var items=[].slice.call(document.querySelectorAll('.sidebar li'));
  input.addEventListener('input',function(){
    var q=input.value.trim().toLowerCase();
    items.forEach(function(li){
      if(!q){li.classList.remove('hidden');return;}
      var own=(li.querySelector(':scope > a, :scope > details > summary')||li).textContent.toLowerCase();
      var hit=own.indexOf(q)!==-1||li.textContent.toLowerCase().indexOf(q)!==-1;
      li.classList.toggle('hidden',!hit);
      if(hit){var d=li.querySelector(':scope > details');if(d)d.open=true;}
    });
  });
})();
`;

function layout({ title, heading, content, nav, homeHref, lang }) {
  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${escapeHtml(title)}</title>
<link rel="icon" href="data:,">
<style>${CSS}</style>
</head>
<body>
<input type="checkbox" id="nav-toggle">
<header>
  <label for="nav-toggle" class="nav-btn" aria-label="메뉴">☰</label>
  <a href="${homeHref}" class="logo">LINE Developers</a>
  <div class="search"><input id="nav-search" type="search" placeholder="문서 검색..." aria-label="문서 검색"></div>
</header>
<div class="layout">
  <nav class="sidebar" aria-label="문서 목차">${nav}</nav>
  <main class="content"><article>${heading ? `<h1>${escapeHtml(heading)}</h1>` : '<h1>LINE Developers 문서</h1>'}${content}</article></main>
</div>
<script>${SCRIPT}</script>
</body>
</html>`;
}

function build(lang = 'ko') {
  const docsPath = path.join(DOCS_DIR, lang);
  if (!fs.existsSync(docsPath)) {
    console.error(`문서 디렉토리를 찾을 수 없습니다: ${docsPath}`);
    process.exit(1);
  }

  const pages = loadPages(lang);
  const tree = buildTree(pages);
  const known = new Set(pages.map((p) => p.rel));
  const outRoot = path.join(OUTPUT_DIR, lang);
  let ok = 0;
  let fail = 0;

  for (const page of pages) {
    try {
      let body = md.render(page.body.replace(/^#\s+.+\n?/m, ''), { pageDir: page.rel, known });
      body = body
        .replace(/<!-- tip start -->([\s\S]*?)<!-- tip end -->/g, '<div class="tip">$1</div>')
        .replace(/<table>/g, '<div class="table-wrap"><table>')
        .replace(/<\/table>/g, '</table></div>');
      const html = layout({
        title: `${page.title} | LINE Developers`,
        heading: page.title,
        content: body,
        nav: renderNav(tree, page.rel, page.rel),
        homeHref: relUrl(page.rel, ''),
        lang,
      });
      const out = path.join(outRoot, page.rel, 'index.html');
      fs.mkdirSync(path.dirname(out), { recursive: true });
      fs.writeFileSync(out, html);
      ok++;
    } catch (err) {
      console.error(`변환 실패 ${page.rel}: ${err.message}`);
      fail++;
    }
  }

  const home = fs.readFileSync(path.join(__dirname, 'home.html'), 'utf-8');
  fs.writeFileSync(
    path.join(outRoot, 'index.html'),
    layout({ title: 'LINE Developers 문서', heading: '', content: home, nav: renderNav(tree, '', ''), homeHref: './', lang })
  );

  console.log(`빌드 완료 (${lang}): 성공 ${ok}, 실패 ${fail}, 출력 ${outRoot}`);
}

const args = process.argv.slice(2);
const lang = args.find((a) => !a.startsWith('--')) || 'ko';

if (args.includes('--watch')) {
  build(lang);
  console.log(`변경 감시 중 (${lang})...`);
  let timer;
  fs.watch(DOCS_DIR, { recursive: true }, (_, filename) => {
    if (filename && filename.endsWith('index.html.md')) {
      clearTimeout(timer);
      timer = setTimeout(() => build(lang), 200);
    }
  });
} else {
  build(lang);
}
