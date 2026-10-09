# 문서 빌드와 로컬 서버

`docs/<lang>`의 마크다운(`index.html.md`)을 HTML로 렌더링해 `html/<lang>`에 생성합니다.
모든 페이지에 폴더 구조 기반 사이드바 트리가 들어갑니다.

## 빌드

```bash
cd deploy
npm install          # 최초 1회
npm run build:ko     # docs/ko -> html/ko
node build.js ja     # 다른 언어
npm run build:watch  # 마크다운 변경 시 자동 재빌드
```

## 로컬 서버

```bash
python3 scripts/serve.py                 # http://127.0.0.1:8000 (html/ko), 브라우저 자동 열기
python3 scripts/serve.py 3000            # 포트 지정 (사용 중이면 다음 포트로 이동)
python3 scripts/serve.py --no-open       # 브라우저 열지 않음
python3 scripts/serve.py --host 0.0.0.0  # 외부 접속 허용
```

Python 3 표준 라이브러리만 사용하며, 응답은 `charset=utf-8`로 전송하고 캐시를 끕니다.

## 파일 구성

| 파일 | 역할 |
|------|------|
| `deploy/build.js` | 마크다운 변환, 사이드바 트리, 페이지 레이아웃 |
| `deploy/home.html` | 시작 페이지(`html/ko/index.html`) 본문 |
| `scripts/serve.py` | 로컬 개발 서버 |

## 빌드 규칙

- 출력 경로: `docs/ko/docs/messaging-api/overview/index.html.md` → `html/ko/docs/messaging-api/overview/index.html`
- 제목: 본문 첫 `# 제목`을 페이지 제목으로 사용하고 본문에서는 제거
- 사이드바 라벨: 폴더 이름은 `build.js`의 `FOLDER_LABELS`, 문서는 첫 `# 제목`
- 링크: `developers.line.biz` 문서 링크는 로컬 페이지가 있으면 상대 경로로 변환, 없으면 새 탭으로 열기
- 이미지: `/media/...`는 `https://developers.line.biz/media/...`로 변환
- 팁 박스: `<!-- tip start -->` ~ `<!-- tip end -->` 구간을 강조 박스로 렌더링
- 시작 페이지를 바꾸려면 `deploy/home.html`을 수정하고 다시 빌드
