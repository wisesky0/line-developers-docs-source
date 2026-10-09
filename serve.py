#!/usr/bin/env python3
"""
LINE Developers 문서 로컬 서버
html/ko/ 디렉토리를 간편하게 서빙합니다.
"""

import os
import sys
import http.server
import socketserver
import socket
import webbrowser
from pathlib import Path
from urllib.parse import urljoin

# 설정
DEFAULT_PORT = 8000
DEFAULT_HOST = '127.0.0.1'
DOCS_DIR = Path(__file__).parent / 'html' / 'ko'

class ColoredFormatter(http.server.SimpleHTTPRequestHandler):
    """로그를 색상으로 표시하는 HTTP 요청 핸들러"""

    # ANSI 색상 코드
    GREEN = '\033[92m'
    BLUE = '\033[94m'
    YELLOW = '\033[93m'
    RED = '\033[91m'
    RESET = '\033[0m'
    BOLD = '\033[1m'

    def log_message(self, format, *args):
        """요청 로그를 색상으로 표시"""
        # 상태 코드 확인
        status_code = args[1] if len(args) > 1 else '?'

        # 상태 코드별 색상
        if str(status_code).startswith('2'):  # 2xx
            color = self.GREEN
        elif str(status_code).startswith('3'):  # 3xx
            color = self.BLUE
        elif str(status_code).startswith('4'):  # 4xx
            color = self.YELLOW
        else:  # 5xx
            color = self.RED

        # 로그 포맷
        client_ip = self.client_address[0]
        timestamp = self.log_date_time_string()

        message = f"{timestamp} - {client_ip:15} {color}{format % args}{self.RESET}"
        print(message, flush=True)

    def end_headers(self):
        """CORS 헤더 추가"""
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()


def find_free_port(host=DEFAULT_HOST, start_port=DEFAULT_PORT):
    """사용 가능한 포트 찾기"""
    port = start_port
    while port < start_port + 100:
        try:
            sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            sock.bind((host, port))
            sock.close()
            return port
        except OSError:
            port += 1
    return None


def print_banner(host, port):
    """시작 배너 출력"""
    print()
    print("╔" + "═" * 68 + "╗")
    print("║" + " " * 68 + "║")
    print("║" + "  📚 LINE Developers 문서 서버".center(68) + "║")
    print("║" + " " * 68 + "║")
    print("╠" + "═" * 68 + "╣")
    print(f"║ 📁 경로:   {str(DOCS_DIR):50} ║")
    print(f"║ 🌐 주소:   http://{host}:{port}".ljust(69) + "║")
    print("║ 🎨 기능:   반응형 디자인 + 라이트/다크 모드".ljust(69) + "║")
    print("║ ⌨️  종료:   Ctrl+C".ljust(69) + "║")
    print("║" + " " * 68 + "║")
    print("╚" + "═" * 68 + "╝")
    print()


def print_endpoints(host, port):
    """주요 엔드포인트 출력"""
    endpoints = [
        ("홈", f"http://{host}:{port}/"),
        ("메시징 API", f"http://{host}:{port}/docs/messaging-api/overview/"),
        ("LINE Login", f"http://{host}:{port}/docs/line-login/overview/"),
        ("LIFF", f"http://{host}:{port}/docs/liff/overview/"),
        ("API 참조", f"http://{host}:{port}/reference/messaging-api/"),
    ]

    print("🔗 주요 페이지:")
    print()
    for label, url in endpoints:
        print(f"   {label:20} {url}")
    print()


def main():
    """메인 함수"""
    # 디렉토리 존재 확인
    if not DOCS_DIR.exists():
        print(f"❌ 오류: 문서 디렉토리를 찾을 수 없습니다: {DOCS_DIR}")
        print("먼저 'cd deploy && npm run build:ko'를 실행해주세요.")
        sys.exit(1)

    # 인자 파싱
    port = DEFAULT_PORT
    host = DEFAULT_HOST
    auto_open = True

    # 플래그 처리
    if '--no-open' in sys.argv:
        auto_open = False
        sys.argv.remove('--no-open')

    if '--host' in sys.argv:
        idx = sys.argv.index('--host')
        if idx + 1 < len(sys.argv):
            host = sys.argv[idx + 1]
            # 역순으로 제거 (인덱스 변경 방지)
            sys.argv.pop(idx + 1)
            sys.argv.pop(idx)

    # 포트 인자 처리
    if len(sys.argv) > 1:
        try:
            port = int(sys.argv[1])
        except (ValueError, IndexError):
            pass  # 포트 지정 없으면 기본값 사용

    # 포트 사용 가능 확인
    available_port = find_free_port(host, port)
    if available_port is None:
        print(f"❌ 오류: 사용 가능한 포트를 찾을 수 없습니다 ({port}~{port+99})")
        sys.exit(1)

    if available_port != port:
        print(f"⚠️  포트 {port}가 사용 중입니다. {available_port}번 포트를 사용합니다.\n")
        port = available_port

    # 작업 디렉토리 변경
    os.chdir(DOCS_DIR)

    # 서버 설정
    handler = ColoredFormatter
    server = socketserver.TCPServer((host, port), handler)

    # 배너 출력
    print_banner(host, port)
    print_endpoints(host, port)

    # 브라우저 자동 열기
    if auto_open:
        import time
        def open_browser():
            time.sleep(1)  # 서버 시작 대기
            try:
                webbrowser.open(f'http://{host}:{port}')
                print("✅ 브라우저에서 페이지를 열었습니다.\n")
            except Exception as e:
                print(f"⚠️  브라우저를 자동으로 열 수 없습니다: {e}\n")

        import threading
        thread = threading.Thread(target=open_browser, daemon=True)
        thread.start()

    # 서버 시작
    print("✅ 서버 시작...\n")
    print("💡 팁:")
    print("   - Ctrl+C를 누르면 서버가 중지됩니다")
    print("   - 페이지를 새로고침해도 캐시를 사용하지 않습니다")
    print()

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\n")
        print("╔" + "═" * 68 + "╗")
        print("║" + " " * 68 + "║")
        print("║" + "  ✅ 서버가 정상적으로 종료되었습니다".center(68) + "║")
        print("║" + " " * 68 + "║")
        print("╚" + "═" * 68 + "╝")
        print()
        sys.exit(0)
    finally:
        server.server_close()


if __name__ == '__main__':
    main()
