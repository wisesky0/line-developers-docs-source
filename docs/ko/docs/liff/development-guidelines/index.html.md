# LIFF 앱 개발 가이드라인

LIFF를 사용하여 웹 앱을 개발할 때는 다음 개발 가이드라인을 따르세요.

- [사용자 데이터를 안전하게 처리하세요](https://developers.line.biz/en/docs/liff/development-guidelines/#liff-development-rules1)
- [LIFF 앱 초기화 시 주의 사항](https://developers.line.biz/en/docs/liff/development-guidelines/#liff-development-rules2)
- [LIFF 앱 개발 규칙](https://developers.line.biz/en/docs/liff/development-guidelines/#liff-development-rules3)
- [LINE Platform에 대량 요청 금지](https://developers.line.biz/en/docs/liff/development-guidelines/#prohibiting-mass-requests-to-line-platform)
- [사용자가 앱 등록을 해지하면 앱 인증을 취소하세요](https://developers.line.biz/en/docs/liff/development-guidelines/#deauthorize)

LIFF는 LINE Login이 제공하는 시스템을 사용합니다. 따라서 LINE Login 문서의 [LINE Login 개발 가이드라인](https://developers.line.biz/en/docs/line-login/development-guidelines/)을 준수하세요.

<!-- note start -->

**참고**

LIFF 개발의 기본 규칙은 [약관 및 정책](https://developers.line.biz/en/terms-and-policies/)에 기술된 내용을 기반으로 합니다.

<!-- note end -->

## 사용자 데이터를 안전하게 처리하세요 

- LIFF 앱과 서버에서 사용자 데이터를 사용할 때 사용자 데이터를 제대로 처리하지 않으면 LIFF 앱은 스푸핑 등 여러 유형의 공격에 취약해집니다. LIFF 앱과 서버가 LIFF 앱에서 얻은 사용자 데이터를 안전하게 사용하는 방법에 대한 자세한 내용은 [LIFF 앱 및 서버에서 사용자 데이터 사용하기](https://developers.line.biz/en/docs/liff/using-user-profile/)를 참조하세요.
- LIFF 엔드포인트 URL과 LIFF URL의 URL 프래그먼트에는 액세스 토큰이나 사용자 ID 같은 민감한 정보가 포함되므로 데이터가 유출되지 않도록 주의하세요.

## LIFF 앱 초기화 시 주의 사항 

[LIFF 앱을 초기화할 때 고려해야 할 중요 사항](https://developers.line.biz/en/docs/liff/developing-liff-apps/#initializing-liff-app-notes)을 참조하세요.

## LIFF 앱 개발 규칙 

- LIFF 앱을 SPA(단일 페이지 애플리케이션)로 구현하려면 [History API](https://html.spec.whatwg.org/multipage/nav-history-apis.html#the-history-interface)를 사용하세요. LIFF는 fragment를 사용한 라우팅과의 호환성이 제한적입니다.
- 아래 나열된 기기 또는 OS 기능을 사용하는 API를 구현하는 경우 사용자 동작에 의해 API 호출이 발생하도록 구현하세요.
  - 위치 정보 가져오기
  - 카메라 접근
  - 마이크 접근
- 사용자의 동의를 얻지 않고 쿠키, localStorage 또는 sessionStorage로 사용자를 추적하거나 LINE 사용자 데이터를 외부 세션 정보와 연결하지 마세요.
- 애플리케이션의 테스트 단계에서는 웹 앱을 통한 LIFF 앱의 접근 권한을 제한하세요.
- LIFF 앱의 URL 스킴과 LIFF 앱에서 열리는 모든 콘텐츠는 **https**여야 합니다. URL 스킴이 http이면 콘텐츠가 [LINE 인앱 브라우저](https://developers.line.biz/en/glossary/#line-iab)에 표시됩니다. 이 경우 웹 앱을 LIFF 앱으로 등록하더라도 LIFF 앱으로 동작하지 않습니다.

<!-- note start -->

**LIFF 앱에서 쿠키, localStorage 또는 sessionStorage 사용**

LIFF 앱에서 쿠키, localStorage 또는 sessionStorage를 사용할 수 있습니다. 다만 향후 OS 변경에 따라 사용이 제한될 수 있습니다.

<!-- note end -->

## LINE Platform에 대량 요청 금지 

[LIFF 스킴](https://developers.line.biz/en/docs/line-login/using-line-url-scheme/#opening-a-liff-app)(`https://liff.line.me/{liffId}`)으로 LIFF 앱에 접근하거나 부하 테스트를 목적으로 많은 양의 [LIFF API](https://developers.line.biz/en/reference/liff/)를 요청하지 마세요. LIFF 앱의 부하 테스트를 하려면 LINE Platform에 대량의 요청을 발생시키지 않는 테스트 환경을 준비하세요.

<!-- note start -->

**참고**

요청 한도(rate limit)를 초과하면 `429 Too Many Requests`가 반환되며 오류가 발생합니다.

<!-- note end -->

## 사용자가 앱 등록을 해지하면 앱 인증을 취소하세요 

사용자가 LIFF 앱 등록을 해지하거나 사용자가 앱과 LINE 앱 간의 연결을 끊는 경우 다음 작업을 수행해야 합니다.

1. 사용자를 대신하여 [사용자가 권한을 부여한 앱 인증 취소](https://developers.line.biz/en/reference/line-login/#deauthorize) 엔드포인트를 사용하여 사용자가 승인한 권한을 취소해야 합니다.
1. 사용자가 앱 등록을 해지하거나 앱과 LINE 앱 간의 연결을 끊을 때 어떤 일이 일어나는지를 해당 기능 근처나 사용자가 등록 또는 인증 시 동의하는 이용 약관에 다음과 같이 기재하세요.
   - 예: 서비스를 구독 해지하면 LY Corporation에 구독 해지가 통지되고 서비스와 LINE 앱 간의 연결이 끊어집니다.
   - 예: 이 작업을 수행하면 LY Corporation에 통지되고 서비스와 LINE 앱 간의 연결이 끊어집니다.

다음 사용 사례에서는 인증 취소가 필요합니다.

![Steps from linking your account to deauthorize app](https://developers.line.biz/media/line-login/development-guidelines/deauthorize-your-app-en.webp)

사용자가 LINE Login을 통합한 앱에 LINE 계정으로 로그인하고 채널 동의 화면에서 [앱을 인증](https://developers.line.biz/en/docs/line-login/integrate-line-login/#authorization-process)하면, 해당 앱이 LINE 앱의 **Settings** > **Account** > **Authorized apps**에 표시됩니다. 사용자가 앱 등록을 해지한 후에도 권한이 남아 있지 않도록 앱 인증을 취소하세요.

사용자가 앱에 부여한 권한을 취소하는 방법에 대한 자세한 내용은 LINE Login 문서의 [인증된 앱 관리](https://developers.line.biz/en/docs/line-login/managing-authorized-apps/)를 참조하세요.
