# LINE Login 보안 체크리스트

LINE Login을 사용하여 애플리케이션을 개발할 때는 제3자의 잠재적인 공격에 대비하고 보안 결함 없이 로그인 기능을 구현해야 합니다.

LINE Login을 애플리케이션에 연동할 때 보안 결함이 없는지 확인할 수 있도록 체크리스트를 제공합니다. 게시하기 전에 이 체크리스트를 사용하여 애플리케이션을 검증하십시오.

또한 LINE DEVELOPER DAY 2020의 세션 "Implementing safe and secure LINE Login"([슬라이드](https://speakerdeck.com/line_devday2020/implementing-safe-and-secure-line-login)/[영상](https://www.youtube.com/watch?v=mWtuq6eQtWY))을 확인하는 것도 권장합니다.

<!-- tip start -->

**체크리스트의 목적을 이해하고 안전한 시스템을 구축하십시오**

이 체크리스트에는 LINE Login을 사용할 때 특별히 주의해야 할 사항의 일부가 담겨 있습니다. 체크리스트의 내용을 준수한다고 해서 보안이 보장되는 것은 아닙니다. 위험을 충분히 이해하고 안전한 시스템을 구축하십시오.

<!-- tip end -->

<!-- table of contents -->

## 인증 URL에 전달하는 쿼리 파라미터 체크리스트 

다음 체크리스트는 인증 및 승인 프로세스를 시작할 때 인증 URL에 전달하는 쿼리 파라미터에 대한 것입니다. 인증 URL에 대한 자세한 내용은 [사용자를 인증하고 인증 요청하기](https://developers.line.biz/en/docs/line-login/integrate-line-login/#making-an-authorization-request)를 참고하십시오.

<!-- tip start -->

**콜백 URL**

**콜백 URL**은 [LINE Developers Console](https://developers.line.biz/console/)에서 LINE Login 채널의 **LINE Login 탭**에 있는 **Callback URL**을 의미합니다. **Callback URL**을 설정하는 방법에 대한 자세한 내용은 [LINE Login 시작하기](https://developers.line.biz/en/docs/line-login/getting-started/)를 참고하십시오.

<!-- tip end -->

| 확인 내용 | 관련 페이지 |
| --- | --- |
| `redirect_uri`에 지정한 URL 스키마가 HTTPS입니까? (특별한 이유가 없는 한 HTTPS를 사용하십시오.) | <ul><li>[RFC6749 3.1.2.1.](https://datatracker.ietf.org/doc/html/rfc6749#section-3.1.2.1)</li></ul> |
| `redirect_uri`로 유효한 URL이 다음 중 하나임을 이해하고 있습니까?<ul><li>**Callback URL**에 등록된 URL과 정확히 일치하는 URL</li><li>**Callback URL**에 등록된 URL에 선택적인 쿼리 파라미터가 추가된 URL</li></ul> | <ul><li>[RFC6749 3.1.2.](https://datatracker.ietf.org/doc/html/rfc6749#section-3.1.2)</li><li>[사용자를 인증하고 인증 요청하기](https://developers.line.biz/en/docs/line-login/integrate-line-login/#making-an-authorization-request)</li></ul> |
| 임의의 URL을 받아 **Callback URL**에 등록된 URL이 받는 쿼리 파라미터에서 리디렉션하는 쿼리 파라미터가 있습니까? 이러한 파라미터가 있다면 Open Redirector 취약점이 없는지 확인했습니까? | <ul><li>[RFC6749 10.15](https://datatracker.ietf.org/doc/html/rfc6749#section-10.15)</li></ul> |
| `state`에 지정하는 값은 SecureRandom 등 암호학적으로 안전하고 예측 불가능한 방식으로 무작위 생성되어 고유하며, 제3자가 예측할 수 없습니까? | <ul><li>[RFC6749 10.12.](https://datatracker.ietf.org/doc/html/rfc6749#section-10.12)</li><li>[사용자를 인증하고 인증 요청하기](https://developers.line.biz/en/docs/line-login/integrate-line-login/#making-an-authorization-request)</li></ul> |
| `state`에 지정하는 값을 다음과 같이 제3자가 접근할 수 없는 위치에 저장합니까?<ul><li>서버 세션 정보</li><li>동일 출처 정책(same-origin policy) 등으로 보호되는 쿠키</li></ul> | <ul><li>[RFC6749 10.12.](https://datatracker.ietf.org/doc/html/rfc6749#section-10.12)</li></ul> |
| 같은 사용자가 로그인을 시도하더라도 로그인을 시도할 때마다 `state`에 서로 다른 값을 지정합니까? | <ul><li>[RFC6749 10.12.](https://datatracker.ietf.org/doc/html/rfc6749#section-10.12)</li></ul> |

## 콜백 URL로 전달되는 쿼리 파라미터 체크리스트 

다음 체크리스트는 콜백 URL로 반환되는 쿼리 파라미터에 대한 것입니다. 콜백 URL로 반환되는 쿼리 파라미터에 대한 자세한 내용은 [웹 앱에서 인증 응답 또는 오류 응답 받기](https://developers.line.biz/en/docs/line-login/integrate-line-login/#receiving-the-authorization-code-or-error-response-with-a-web-app)를 참고하십시오.

| 확인 내용 | 관련 페이지 |
| --- | --- |
| `state`의 값이 인증 URL에 지정한 `state`와 일치하는지 확인했습니까? | <ul><li>[RFC6749 10.12.](https://datatracker.ietf.org/doc/html/rfc6749#section-10.12)</li><li>[웹 앱에서 인증 응답 또는 오류 응답 받기](https://developers.line.biz/en/docs/line-login/integrate-line-login/#receiving-the-authorization-code-or-error-response-with-a-web-app)</li></ul> |

## 액세스 토큰 발급 체크리스트 

다음 체크리스트는 [LINE Login API](https://developers.line.biz/en/reference/line-login/)를 사용하여 액세스 토큰을 발급하는 것에 대한 것입니다. 액세스 토큰 발급에 대한 자세한 내용은 [Issue access token](https://developers.line.biz/en/reference/line-login/#issue-access-token)과 [승인된 앱 관리하기](https://developers.line.biz/en/docs/line-login/managing-access-tokens/)를 참고하십시오.

| 확인 내용 | 관련 페이지 |
| --- | --- |
| `client_secret`에 지정하는 채널 시크릿이 기밀 정보이며 제3자가 알 수 없다는 점을 이해하고 있습니까? | <ul><li>[OpenID Connect 1.0 16.19](https://openid.net/specs/openid-connect-core-1_0.html#rfc.section.16.19)</li></ul> |

## ID 토큰과 액세스 토큰 사용 체크리스트 

다음 체크리스트는 LINE Platform이 발급한 ID 토큰과 액세스 토큰을 사용하는 것에 대한 것입니다. ID 토큰과 액세스 토큰 발급에 대한 자세한 내용은 [ID 토큰에서 프로필 정보 가져오기](https://developers.line.biz/en/docs/line-login/verify-id-token/)와 [승인된 앱 관리하기](https://developers.line.biz/en/docs/line-login/managing-access-tokens/)를 참고하십시오.

| 확인 내용 | 관련 페이지 |
| --- | --- |
| ID 토큰과 액세스 토큰을 검증했습니까? | <ul><li>[액세스 토큰 유효성 검증](https://developers.line.biz/en/reference/line-login/#verify-access-token)</li><li>[ID 토큰 검증](https://developers.line.biz/en/reference/line-login/#verify-id-token)</li></ul> |
| 액세스 토큰 검증에 성공한 후 `client_id`와 `expires_in` 속성의 값이 다음 조건을 충족하는지 확인했습니까?<ul><li>`client_id`: 네이티브 앱에 연결된 LINE Login 채널의 채널 ID와 같은 값</li><li>`expires_in`: 양수 값</li></ul> | <ul><li>[새 사용자 등록에 액세스 토큰 사용하기](https://developers.line.biz/en/docs/line-login/secure-login-process/#using-access-tokens)</li></ul> |

## 처리를 위해 백엔드 서버로 ID 토큰과 액세스 토큰 보내기 체크리스트 

다음 체크리스트는 LINE Platform에서 얻은 사용자 정보를 사용하기 위한 사용자 등록 및 로그인에 대한 것입니다. 안전한 사용자 등록과 로그인 프로세스의 개념에 대한 자세한 내용은 [앱과 서버 간의 안전한 로그인 프로세스 만들기](https://developers.line.biz/en/docs/line-login/secure-login-process/)를 참고하십시오.

| 확인 내용 | 관련 페이지 |
| --- | --- |
| 클라이언트에서 백엔드 서버로 사용자 ID나 다른 정보 대신 원본 ID 토큰 또는 액세스 토큰을 보냈습니까?<br>\* ID 토큰과 액세스 토큰을 검증하는 API를 사용한 후에는 백엔드 서버가 사용자 ID와 다른 정보를 가져올 수 있습니다. | <ul><li>[새 사용자 등록에 액세스 토큰 사용하기](https://developers.line.biz/en/docs/line-login/secure-login-process/#using-access-tokens)</li><li>[액세스 토큰 유효성 검증](https://developers.line.biz/en/reference/line-login/#verify-access-token)</li><li>[ID 토큰 검증](https://developers.line.biz/en/reference/line-login/#verify-id-token)</li></ul> |
| 클라이언트에서 백엔드 서버로 보낸 ID 토큰과 액세스 토큰을 검증했습니까? | <ul><li>[새 사용자 등록에 액세스 토큰 사용하기](https://developers.line.biz/en/docs/line-login/secure-login-process/#using-access-tokens)</li></ul> |
