# LINE MINI App 개발 가이드라인

LIFF를 사용하여 웹 애플리케이션을 개발할 때는 다음 개발 가이드라인을 따라 주십시오.

- [LINE Platform에 대한 대량 요청 금지](https://developers.line.biz/en/docs/line-mini-app/development-guidelines/#prohibiting-mass-requests-to-line-platform)
- [로그 저장](https://developers.line.biz/en/docs/line-mini-app/development-guidelines/#save-logs)
- [사용자가 앱을 해지할 때 앱 권한 해제](https://developers.line.biz/en/docs/line-mini-app/development-guidelines/#deauthorize)

LINE MINI App은 LIFF가 제공하는 시스템을 사용합니다. 따라서 LIFF 문서의 [LIFF 앱 개발 가이드라인](https://developers.line.biz/en/docs/liff/development-guidelines/)을 준수해 주십시오.

<!-- note start -->

**참고**

LINE MINI App 개발의 기본 규칙은 [약관 및 정책](https://developers.line.biz/en/terms-and-policies/)에 기술된 내용을 바탕으로 합니다.

<!-- note end -->

## LINE Platform에 대한 대량 요청 금지 

부하 테스트를 목적으로 [LIFF 스킴](https://developers.line.biz/en/docs/line-login/using-line-url-scheme/#opening-a-liff-app)(`https://miniapp.line.me/{liffId}`)을 통해 LINE MINI App에 과도하게 접근하거나, [LIFF API](https://developers.line.biz/en/reference/liff/) 또는 [Service message API](https://developers.line.biz/en/reference/line-mini-app/)에 대량의 요청을 보내지 마십시오. LINE MINI App의 부하 테스트를 하려면 LINE Platform에 대량의 요청을 발생시키지 않는 테스트 환경을 준비해 주십시오.

<!-- note start -->

**참고**

요청 빈도 제한을 초과하면 `429 Too Many Requests`가 반환되며 오류가 발생합니다.

<!-- note end -->

## 로그 저장 

문제가 발생했을 때 개발자가 원인과 영향 범위를 원활하게 조사할 수 있도록, [Service message API](https://developers.line.biz/en/reference/line-mini-app/) 요청에 대한 로그를 일정 기간 저장하는 것을 권장합니다.

### Service message API 요청 로그 

[Service message API](https://developers.line.biz/en/reference/line-mini-app/)에 요청할 때 응답에 포함된 [서비스 알림 토큰](https://developers.line.biz/en/reference/line-mini-app/#issue-notification-token-response) `notificationToken`과 함께 다음 정보를 로그에 저장하는 것을 권장합니다.

- API 요청 시각
- 요청 메서드
- API 엔드포인트
- LINE Platform이 반환한 [상태 코드](https://developers.line.biz/en/reference/line-mini-app/)

구체적으로는 다음 형식으로 로그 파일에 저장합니다.

| API 요청 시각 | 요청 메서드 | API 엔드포인트 | 상태 코드 |
| --- | --- | --- | --- |
| Mon, 16 Jul 2021 10:20:23 GMT | POST | `https://api.line.me/message/v3/notifier/send?target=service` | 200 |

<!-- tip start -->

**로그에 남기면 유용한 추가 정보**

실행 중인 LINE MINI App의 요구 사항에 따라서는, 위 정보에 더해 다음 정보를 문제 조사를 위해 저장할 수 있습니다.

- Service message API 요청 본문
- API 요청 후 LINE Platform이 반환한 응답 본문(서비스 알림 토큰 `notificationToken`은 제외)

<!-- tip end -->

<!-- note start -->

**로그는 제공하지 않습니다**

Service message API 요청 등의 로그는 문의가 있어도 제공하지 않습니다. 로그는 LINE MINI App을 개발하는 개발자가 직접 저장해야 합니다.

<!-- note end -->

## 사용자가 앱을 해지할 때 앱 권한 해제 

사용자가 LINE MINI App을 해지하거나, 사용자가 앱과 LINE 앱의 연결을 끊는 경우에는 다음을 수행해야 합니다.

1. 사용자가 승인한 권한은 사용자를 대신하여 [사용자가 권한을 부여한 앱 권한 해제](https://developers.line.biz/en/reference/line-login/#deauthorize) 엔드포인트를 사용해 해제해야 합니다.
1. 사용자가 앱을 해지하거나 앱과 LINE 앱의 연결을 끊을 때 어떤 일이 일어나는지를, 기능 근처 또는 사용자가 등록이나 승인 시 동의하는 이용약관에 다음과 같이 기재해야 합니다.
   - 예: 서비스를 해지하면 LY Corporation에 해지 사실이 통지되고, 서비스와 LINE 앱의 연결이 끊어집니다.
   - 예: 이 기능을 실행하면 LY Corporation에 통지되고, 서비스와 LINE 앱의 연결이 끊어집니다.

다음과 같은 사용 사례에서는 권한 해제가 필요합니다.

![계정 연결부터 앱 권한 해제까지의 단계](https://developers.line.biz/media/line-login/development-guidelines/deauthorize-your-app-en.webp)

LINE 로그인을 연동한 앱에 사용자가 LINE 계정으로 로그인하고 채널 동의 화면에서 [앱을 승인](https://developers.line.biz/en/docs/line-login/integrate-line-login/#authorization-process)하면, 해당 앱이 LINE 앱의 **Settings** > **Account** > **Authorized apps**에 표시됩니다. 사용자가 앱을 해지한 후에도 권한이 남아 있지 않도록 앱 권한을 해제해 주십시오.

사용자가 앱에 부여한 권한을 해제하는 방법에 대한 자세한 내용은 LINE 로그인 문서의 [승인된 앱 관리](https://developers.line.biz/en/docs/line-login/managing-authorized-apps/)를 참고해 주십시오.
