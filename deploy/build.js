#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const MarkdownIt = require('markdown-it');
const hljs = require('highlight.js');
const fm = require('front-matter');

const ROOT = path.resolve(__dirname, '..');
const DOCS_DIR = path.join(ROOT, 'docs');
const OUTPUT_DIR = path.join(ROOT, 'html');

// 마크다운 렌더러 설정
const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight: (str, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).highlighted;
      } catch (__) {}
    }
    return '';
  }
});

// 커스텀 렌더러
const originalImage = md.renderer.rules.image;
md.renderer.rules.image = function(tokens, idx, options, env, self) {
  const token = tokens[idx];
  let src = token.attrGet('src');

  // 상대 경로 처리
  if (src && !src.startsWith('http') && !src.startsWith('/')) {
    // 상대 경로 유지
  }

  return `<figure class="doc-figure">
    <img src="${src}" alt="${token.content}" loading="lazy">
    <figcaption>${token.content}</figcaption>
  </figure>`;
};

// 링크 처리
const originalLink = md.renderer.rules.link_open;
md.renderer.rules.link_open = function(tokens, idx, options, env, self) {
  const token = tokens[idx];
  const href = token.attrGet('href');

  // 외부 링크에 target="_blank" 추가
  if (href && href.startsWith('http')) {
    token.attrSet('target', '_blank');
    token.attrSet('rel', 'noopener noreferrer');
  }

  return self.renderToken(tokens, idx, options);
};

/**
 * HTML 템플릿 생성
 */
function generateHtmlTemplate(title, content, lang = 'ko') {
  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(title)} | LINE Developers</title>
  <style>
    * {
      box-sizing: border-box;
    }

    :root {
      --bg: #FFFFFF;
      --fg: #1A1A1A;
      --fg-secondary: #595959;
      --border: #E5E5E5;
      --bg-secondary: #F5F5F7;
      --accent: #0066FF;
      --code-bg: #F3F4F6;
    }

    @media (prefers-color-scheme: dark) {
      :root:not([data-theme="light"]) {
        --bg: #0F0F0F;
        --fg: #F5F5F5;
        --fg-secondary: #A6A6A6;
        --border: #2D2D2D;
        --bg-secondary: #1A1A1A;
        --accent: #4D94FF;
        --code-bg: #1E1E1E;
        color-scheme: dark;
      }
    }

    :root[data-theme="dark"] {
      --bg: #0F0F0F;
      --fg: #F5F5F5;
      --fg-secondary: #A6A6A6;
      --border: #2D2D2D;
      --bg-secondary: #1A1A1A;
      --accent: #4D94FF;
      --code-bg: #1E1E1E;
      color-scheme: dark;
    }

    body {
      background: var(--bg);
      color: var(--fg);
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      margin: 0;
      padding: 1.5rem;
    }

    .doc-container {
      max-width: 900px;
      margin: 0 auto;
    }

    h1, h2, h3, h4, h5, h6 {
      font-weight: 600;
      line-height: 1.3;
      margin: 2rem 0 1rem 0;
      color: var(--fg);
    }

    h1 {
      font-size: 2.5rem;
      margin-top: 0;
    }

    h2 {
      font-size: 1.75rem;
      border-bottom: 2px solid var(--border);
      padding-bottom: 0.5rem;
    }

    h3 {
      font-size: 1.25rem;
    }

    p {
      margin: 1rem 0;
      color: var(--fg-secondary);
      line-height: 1.7;
    }

    a {
      color: var(--accent);
      text-decoration: none;
      border-bottom: 1px solid transparent;
      transition: border-color 0.2s;
    }

    a:hover {
      border-bottom-color: var(--accent);
    }

    code {
      background: var(--code-bg);
      padding: 0.2em 0.4em;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
      font-size: 0.9em;
    }

    pre {
      background: var(--code-bg);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 1rem;
      overflow-x: auto;
      line-height: 1.5;
      margin: 1.5rem 0;
    }

    pre code {
      background: none;
      padding: 0;
      border-radius: 0;
      color: var(--fg);
    }

    blockquote {
      border-left: 4px solid var(--accent);
      padding: 1rem 1.5rem;
      margin: 1.5rem 0;
      background: var(--bg-secondary);
      border-radius: 4px;
    }

    blockquote p {
      margin: 0;
    }

    ul, ol {
      margin: 1rem 0;
      padding-left: 2rem;
      color: var(--fg-secondary);
    }

    li {
      margin: 0.5rem 0;
      line-height: 1.7;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin: 1.5rem 0;
      border: 1px solid var(--border);
    }

    th, td {
      padding: 0.75rem 1rem;
      border: 1px solid var(--border);
      text-align: left;
    }

    th {
      background: var(--bg-secondary);
      font-weight: 600;
      color: var(--fg);
    }

    .doc-figure {
      margin: 1.5rem 0;
      text-align: center;
    }

    .doc-figure img {
      max-width: 100%;
      height: auto;
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 0;
    }

    .doc-figure figcaption {
      margin-top: 0.5rem;
      font-size: 0.875rem;
      color: var(--fg-secondary);
      font-style: italic;
    }

    .tip {
      background: var(--bg-secondary);
      border-left: 4px solid var(--accent);
      padding: 1rem;
      margin: 1.5rem 0;
      border-radius: 4px;
    }

    .tip strong {
      color: var(--accent);
    }

    hr {
      border: none;
      border-top: 1px solid var(--border);
      margin: 2rem 0;
    }

    @media (max-width: 768px) {
      body {
        padding: 1rem;
      }

      h1 {
        font-size: 1.75rem;
      }

      h2 {
        font-size: 1.25rem;
      }
    }
  </style>
</head>
<body>
  <div class="doc-container">
    <article>
      <h1>${escapeHtml(title)}</h1>
      ${content}
    </article>
  </div>
</body>
</html>`;
}

/**
 * HTML 특수문자 이스케이프
 */
function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

/**
 * 마크다운 파일을 HTML로 변환
 */
function convertMarkdownToHtml(filePath, outputPath, lang = 'ko') {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const parsed = fm(content);

    // 마크다운 렌더링
    let htmlContent = md.render(parsed.body);

    // <!-- tip start -->와 <!-- tip end --> 처리
    htmlContent = htmlContent.replace(
      /<!-- tip start -->([\s\S]*?)<!-- tip end -->/g,
      '<div class="tip">$1</div>'
    );

    // 제목 추출 (첫 번째 h1 또는 attributes에서)
    const titleMatch = parsed.body.match(/^#\s+(.+)$/m);
    const title = titleMatch ? titleMatch[1] : parsed.attributes.title || 'LINE Developers';

    const html = generateHtmlTemplate(title, htmlContent, lang);

    // 출력 디렉토리 생성
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // 파일 저장
    fs.writeFileSync(outputPath, html);
    return true;
  } catch (err) {
    console.error(`❌ Error converting ${filePath}:`, err.message);
    return false;
  }
}

/**
 * 디렉토리 재귀적 스캔
 */
function findMarkdownFiles(dir) {
  const files = [];

  function scan(currentPath) {
    const entries = fs.readdirSync(currentPath, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(currentPath, entry.name);

      if (entry.isDirectory()) {
        scan(fullPath);
      } else if (entry.name === 'index.html.md') {
        files.push(fullPath);
      }
    }
  }

  scan(dir);
  return files;
}

/**
 * 메인 빌드 함수
 */
function build(lang = 'ko') {
  const docsPath = path.join(DOCS_DIR, lang);

  if (!fs.existsSync(docsPath)) {
    console.error(`❌ 문서 디렉토리를 찾을 수 없습니다: ${docsPath}`);
    process.exit(1);
  }

  console.log(`📚 ${lang.toUpperCase()} 문서 빌드 시작...`);

  const files = findMarkdownFiles(docsPath);

  if (files.length === 0) {
    console.warn(`⚠️  마크다운 파일을 찾을 수 없습니다: ${docsPath}`);
    return;
  }

  let successCount = 0;
  let failureCount = 0;

  for (const filePath of files) {
    // 상대 경로 계산
    const relativePath = path.relative(docsPath, filePath);
    const dirPath = path.dirname(relativePath);

    // 출력 경로 (index.html.md -> index.html)
    const outputPath = path.join(OUTPUT_DIR, lang, dirPath, 'index.html');

    if (convertMarkdownToHtml(filePath, outputPath, lang)) {
      console.log(`✅ ${relativePath}`);
      successCount++;
    } else {
      failureCount++;
    }
  }

  console.log(`\n📊 빌드 완료:`);
  console.log(`   ✅ 성공: ${successCount}개`);
  console.log(`   ❌ 실패: ${failureCount}개`);
  console.log(`   📁 출력: ${path.join(OUTPUT_DIR, lang)}`);
}

// CLI 인터페이스
const args = process.argv.slice(2);
const lang = args[0] || 'ko';
const watch = args.includes('--watch');

if (watch) {
  console.log(`👀 변경 감시 모드 (${lang})...`);
  fs.watch(DOCS_DIR, { recursive: true }, (eventType, filename) => {
    if (filename && filename.endsWith('index.html.md')) {
      console.log(`📝 파일 변경 감지: ${filename}`);
      build(lang);
    }
  });
} else {
  build(lang);
}
