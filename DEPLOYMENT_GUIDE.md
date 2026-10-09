# 📚 LINE Developers 문서 배포 가이드

## 📁 최종 구조

```
html/ko/
├── index.html              # 🎯 시작 페이지 (웹뷰)
├── docs/
│   ├── basics/
│   ├── messaging-api/      # ✅ 207개 마크다운 변환
│   ├── line-login/
│   ├── liff/
│   ├── line-mini-app/
│   └── ...
└── reference/
    ├── messaging-api/
    ├── line-login/
    └── ...
```

## 🚀 빌드 프로세스

### 1단계: 마크다운 → HTML 변환

```bash
cd deploy
npm install
npm run build:ko
```

**결과:**
- ✅ 207개 마크다운 파일 성공
- ❌ 0개 실패
- 📁 생성 위치: `html/ko/`

### 2단계: 시작 페이지 자동 배치

빌드 후 `html/ko/index.html`이 자동으로 시작 페이지로 배치됩니다.

## 🌐 액세스 방법

### 로컬 개발 서버 실행

```bash
# Python
python -m http.server 8000 --directory html/ko

# Node.js (http-server 설치 필요)
npx http-server html/ko -p 8000

# PHP
php -S localhost:8000 -t html/ko
```

**주소:** `http://localhost:8000`

## 📖 페이지 구조

### 시작 페이지 (`index.html`)
- 좌측 사이드바: 전체 문서 네비게이션
- 메인 영역: 서비스 개요 및 시작 가이드
- 모든 링크가 실제 빌드된 문서를 가리킴

### 개별 문서 페이지
- 예: `docs/messaging-api/overview/index.html`
- 마크다운에서 자동 변환
- 반응형 디자인 + 라이트/다크 모드 지원

## 🔄 반복 빌드 (개발 중)

변경사항을 실시간으로 반영하려면:

```bash
cd deploy
npm run build:watch
```

파일이 변경될 때마다 자동으로 HTML로 변환됩니다.

## ✨ 주요 기능

### 📱 반응형 웹 디자인
- 데스크톱: 좌측 사이드바 + 메인 콘텐츠
- 태블릿: 폴드 가능한 네비게이션
- 모바일: 반응형 메뉴

### 🎨 테마 지원
- **라이트 모드** (기본)
- **다크 모드** (자동 감지 또는 수동 선택)

### 🔍 검색 기능
- 상단 검색창에서 문서 필터링
- 메뉴 항목 실시간 검색

### 💡 전문적인 스타일
- 코드 하이라이팅
- 테이블 지원
- 이미지 반응형 처리
- 팁/주의 박스

## 📝 마크다운 작성 가이드

### 문서 포맷

```markdown
# 문서 제목

문서 소개...

## 섹션 1

내용...

### 하위 섹션

더 자세한 내용...
```

### 팁 박스 강조

```markdown
<!-- tip start -->

**중요 정보**

팁 내용...

<!-- tip end -->
```

### 코드 예제

````markdown
```javascript
const message = { type: 'text', text: 'Hello' };
```
````

## 🛠 빌드 도구 상세

**위치:** `deploy/`

**파일:**
- `build.js` - Node.js 빌드 스크립트
- `package.json` - 의존성 정의
- `README.md` - 자세한 사용법

**의존성:**
- `markdown-it` - 마크다운 파싱
- `highlight.js` - 코드 하이라이팅
- `front-matter` - 메타데이터 추출

## 📊 배포 체크리스트

- [ ] `npm run build:ko` 실행하여 HTML 생성
- [ ] `html/ko/index.html` 접근 가능 확인
- [ ] 좌측 메뉴 링크들이 정상 작동하는지 확인
- [ ] 반응형 디자인 (모바일/태블릿) 테스트
- [ ] 다크 모드 확인
- [ ] 웹 서버에 배포

## 🔗 관련 파일

- 웹뷰 페이지: `html/ko/index.html`
- 빌드 설정: `deploy/package.json`
- 빌드 스크립트: `deploy/build.js`
- 원본 마크다운: `docs/ko/`

## 💬 지원

문제가 발생하면:

1. `deploy/README.md`에서 빌드 도구 문서 확인
2. `npm run build:ko` 실행 시 출력되는 에러 메시지 확인
3. 마크다운 파일 포맷이 올바른지 확인

---

**최종 업데이트:** 2026-10-09
