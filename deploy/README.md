# LINE Developers Docs Builder

`docs/ko` (및 다른 언어) 디렉토리의 마크다운 파일들을 HTML로 렌더링하여 `html/ko`에 생성하는 빌드 도구입니다.

## 설치

```bash
cd deploy
npm install
```

## 사용법

### 기본 빌드 (한국어)

```bash
npm run build:ko
# 또는
npm run build  # 기본값: ko
```

### 특정 언어 빌드

```bash
node build.js en
node build.js ja
```

### 변경 감시 모드

파일이 변경될 때마다 자동으로 빌드합니다.

```bash
npm run build:watch
# 또는
node build.js ko --watch
```

## 기능

✨ **마크다운 → HTML 변환**
- `markdown-it` 기반의 완전한 마크다운 파싱
- `highlight.js`를 사용한 코드 하이라이팅

📁 **파일 구조 유지**
- `docs/ko/docs/messaging-api/overview/index.html.md`
- → `html/ko/docs/messaging-api/overview/index.html`

🎨 **자동 스타일링**
- 반응형 디자인
- 라이트/다크 모드 지원
- 전문적인 문서 레이아웃

🔗 **스마트 링크 처리**
- 외부 링크에 자동으로 `target="_blank"` 추가
- 상대 경로 유지

📸 **이미지 처리**
- Figure 태그로 래핑
- 반응형 이미지 크기 조정
- 이미지 캡션 표시

## 출력 구조

```
html/
├── ko/
│   ├── docs/
│   │   ├── messaging-api/
│   │   │   ├── overview/
│   │   │   │   └── index.html
│   │   │   ├── getting-started/
│   │   │   │   └── index.html
│   │   │   └── ...
│   │   ├── line-login/
│   │   │   └── ...
│   │   └── ...
│   └── reference/
│       └── ...
└── ...
```

## 빌드 결과

빌드 완료 후 다음과 같은 출력을 볼 수 있습니다:

```
📚 KO 문서 빌드 시작...
✅ docs/messaging-api/overview/index.html.md
✅ docs/messaging-api/getting-started/index.html.md
...

📊 빌드 완료:
   ✅ 성공: 250개
   ❌ 실패: 0개
   📁 출력: /path/to/html/ko
```

## 마크다운 포맷

### 기본 문서 구조

```markdown
# 문서 제목

문서 소개 텍스트

## 섹션 1

내용...

### 하위 섹션

더 자세한 내용...
```

### 팁 박스 (강조)

```markdown
<!-- tip start -->

**중요한 정보**

팁 내용...

<!-- tip end -->
```

### 코드 예제

````markdown
```javascript
const message = { type: 'text', text: 'Hello' };
```
````

## 의존성

- `markdown-it`: 마크다운 파싱
- `front-matter`: YAML 메타데이터 추출
- `highlight.js`: 문법 강조

## 라이선스

Apache-2.0
