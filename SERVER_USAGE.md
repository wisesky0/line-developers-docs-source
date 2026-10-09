# 🚀 Python 서버 스크립트 사용 설명서

## 📍 위치
```
프로젝트 루트/serve.py
```

## ⚡ 빠른 시작

### 기본 실행
```bash
python serve.py
```

또는 Python 3 명시적으로:
```bash
python3 serve.py
```

**결과:**
- 포트 8000에서 서버 시작
- 자동으로 브라우저에서 `http://127.0.0.1:8000` 열기

### 브라우저 자동 열지 않기
```bash
python serve.py --no-open
```

### 포트 변경
```bash
python serve.py 3000        # 포트 3000 사용
python serve.py 9000        # 포트 9000 사용
```

### 호스트 변경
```bash
python serve.py --host 0.0.0.0              # 모든 인터페이스
python serve.py 8000 --host 192.168.1.100   # 특정 IP
```

## 🎯 주요 기능

### ✅ 자동 포트 감지
포트가 이미 사용 중이면 자동으로 다음 사용 가능한 포트로 변경

### ✅ 색상 로깅
- 🟢 200-299: 초록색 (성공)
- 🔵 300-399: 파란색 (리다이렉트)
- 🟡 400-499: 노란색 (클라이언트 오류)
- 🔴 500-599: 빨간색 (서버 오류)

### ✅ 브라우저 자동 열기
서버 시작 후 자동으로 기본 브라우저 열기

### ✅ 캐시 비활성화
개발 중 항상 최신 버전을 로드하도록 설정

### ✅ CORS 준비
필요시 CORS 헤더 추가 가능

## 📊 출력 예시

```
╔════════════════════════════════════════════════════════════════════╗
║                                                                    ║
║           📚 LINE Developers 문서 서버                             ║
║                                                                    ║
╠════════════════════════════════════════════════════════════════════╣
║ 📁 경로:   /Users/h2seo/codespace/line-developers-docs/html/ko   ║
║ 🌐 주소:   http://127.0.0.1:8000                                  ║
║ 🎨 기능:   반응형 디자인 + 라이트/다크 모드                        ║
║ ⌨️  종료:   Ctrl+C                                                 ║
║                                                                    ║
╚════════════════════════════════════════════════════════════════════╝

🔗 주요 페이지:

   홈                   http://127.0.0.1:8000/
   메시징 API           http://127.0.0.1:8000/docs/messaging-api/overview/
   LINE Login           http://127.0.0.1:8000/docs/line-login/overview/
   LIFF                 http://127.0.0.1:8000/docs/liff/overview/
   API 참조             http://127.0.0.1:8000/reference/messaging-api/

✅ 서버 시작...

💡 팁:
   - Ctrl+C를 누르면 서버가 중지됩니다
   - 페이지를 새로고침해도 캐시를 사용하지 않습니다

00:00:00 - 127.0.0.1     GET / 200 1234 "GET / HTTP/1.1"
00:00:01 - 127.0.0.1     GET /docs/messaging-api/overview/ 200 5678 "GET /docs/messaging-api/overview/ HTTP/1.1"
```

## 🔧 고급 사용법

### 모든 옵션 조합
```bash
# 포트 9000, 모든 인터페이스, 브라우저 자동 열지 않음
python serve.py 9000 --host 0.0.0.0 --no-open
```

### 백그라운드 실행 (Mac/Linux)
```bash
python serve.py &
# 또는
nohup python serve.py > server.log 2>&1 &
```

### 다른 프로세스와 공존
포트가 충돌하면 자동으로 다음 포트 사용:
```bash
python serve.py 8000   # 8000이 사용 중이면 8001, 8002... 시도
```

## 🌐 액세스 방법

### 로컬 액세스
```
http://127.0.0.1:8000      (현재 컴퓨터)
http://localhost:8000      (현재 컴퓨터)
```

### 네트워크 액세스 (호스트 변경 필요)
```bash
python serve.py --host 0.0.0.0
```

그 후 다른 컴퓨터에서:
```
http://<YOUR_IP>:8000
```

## 📋 시스템 요구사항

- Python 3.6 이상
- 추가 패키지 없음 (표준 라이브러리만 사용)

## 🛠 문제 해결

### "주소가 이미 사용 중입니다" 오류
```bash
python serve.py 8001  # 다른 포트 사용
```

### 브라우저가 자동으로 열리지 않는 경우
```bash
python serve.py --no-open
# 수동으로 http://127.0.0.1:8000 접속
```

### 권한 오류
```bash
chmod +x serve.py
python serve.py
```

## 📖 관련 문서

- [배포 가이드](DEPLOYMENT_GUIDE.md)
- [프로젝트 요약](PROJECT_SUMMARY.md)
- [빌드 도구](deploy/README.md)

## 🎯 다음 단계

### 1. 초기 빌드 (첫 실행 시)
```bash
cd deploy
npm install
npm run build:ko
```

### 2. 서버 시작
```bash
python serve.py
```

### 3. 문서 개발/수정
```bash
# 별도 터미널에서
cd deploy
npm run build:watch
```

마크다운 수정 시 자동으로 HTML 재생성 → 브라우저 새로고침하면 반영

## 💡 팁

### 포트를 고정하고 싶으면
```bash
# 항상 8000 포트 사용하려면
alias docs-server='python /path/to/serve.py'
```

### 여러 프로젝트에서 사용하려면
```bash
# 스크립트를 ~/bin에 복사
cp serve.py ~/bin/docs-serve
chmod +x ~/bin/docs-serve

# 어디서나 사용 가능
docs-serve
```

---

**최종 업데이트:** 2026-10-09
