# 웹 앱에 LINE Login 연동하기

[LINE Login v2.1](https://developers.line.biz/en/docs/line-login/overview/)은 [OpenID Connect](https://openid.net/developers/how-connect-works/) 프로토콜을 지원하며, ID 토큰으로 사용자 데이터를 가져올 수 있습니다. 이 가이드에서는 웹 앱에 LINE Login을 구현하는 방법을 설명합니다.

LINE Login을 지원하도록 업데이트할 기존 앱이 없다면 샘플 앱을 사용하여 따라 할 수 있습니다. 자세한 내용은 [LINE Login 시작하기](https://developers.line.biz/en/docs/line-login/getting-started/)를 참고하십시오.

<!-- note start -->

**Note**

- LINE Login v2.0을 웹 앱에 연동하는 경우에는 [웹 앱에 LINE Login(v2.0) 연동하기](https://developers.line.biz/en/docs/line-login/integrate-line-login-v2/)를 참고하십시오.
- 개발 환경에서 LINE SDK를 사용할 수 있다면 LINE SDK로 LINE Login을 연동하는 것을 강력히 권장합니다. 네이티브 앱에는 이 페이지의 절차를 사용하지 않는 것을 권장합니다. LINE SDK 사용에 대한 자세한 내용은 [네이티브 앱과 연동하기](https://developers.line.biz/en/docs/line-login/overview/#native-app)를 참고하십시오.

<!-- note end -->

## 로그인 흐름 

웹 앱의 LINE Login 프로세스(웹 로그인)는 [OAuth 2.0 authorization code grant flow](https://datatracker.ietf.org/doc/html/rfc6749)와 [OpenID Connect](https://openid.net/developers/how-connect-works/) 프로토콜을 기반으로 합니다. 웹 로그인 흐름의 개요는 아래와 같습니다.

웹 앱은 순서도에서 자신에게 해당하는 로그인 흐름 부분을 구현해야 합니다.

![Web login flow](https://developers.line.biz/media/line-login/web-login-flow.svg)

## 채널 만들기 

[LINE Login 채널을 만들고](https://developers.line.biz/en/docs/line-login/getting-started/#step-1-create-channel) 웹 앱에서 사용할 수 있도록 설정합니다.

- [콜백 URL 설정하기](https://developers.line.biz/en/docs/line-login/integrate-line-login/#setting-callback-url)
- [사용자의 이메일 주소 접근 권한 신청하기](https://developers.line.biz/en/docs/line-login/integrate-line-login/#applying-for-email-permission)

### 콜백 URL 설정하기 

사용자가 인증되고 웹 앱을 승인하면 인증 코드와 `state`가 콜백 URL로 전송됩니다.

[LINE Developers Console](https://developers.line.biz/console/)에서 채널 설정의 **LINE Login** 탭으로 이동하여 콜백 URL을 설정하십시오. 줄을 추가하여 채널마다 여러 개의 콜백 URL을 지정할 수 있습니다.

![Redirect settings](https://developers.line.biz/media/line-login/integrate-login-web/redirect-settings-en.png)

### 사용자의 이메일 주소 접근 권한 신청하기 

LINE Login v2.1을 사용하면 LINE Login으로 앱에 로그인한 모든 사용자의 이메일 주소를 가져올 수 있습니다.

웹 앱으로 사용자의 이메일 주소를 가져오려면 먼저 [LINE Developers Console](https://developers.line.biz/console/)에서 해당 권한을 신청해야 합니다.

1. **Basic settings** 탭의 **OpenID Connect**에서 **Apply**를 클릭합니다.

   ![Requesting permission to access the user's email address](https://developers.line.biz/media/line-login/integrate-login-web/apply-email.png)

1. 약관에 동의하고, 사용자의 이메일 주소를 수집한다는 사실과 그 용도를 설명하는 화면의 스크린샷을 업로드합니다.

   신청서가 승인되면 **Email address permission** 아래에 "Applied"가 표시됩니다.

## 사용자 인증 및 인증 요청하기 

LINE Platform을 통해 사용자를 인증하고 앱을 승인받는 과정을 시작합니다. 사용자가 LINE Login 버튼을 클릭하면 아래 예시와 같이 필요한 쿼리 파라미터를 포함한 인증 URL로 리디렉션합니다.

```
https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1234567890&redirect_uri=https%3A%2F%2Fexample.com%2Fauth%3Fkey%3Dvalue&state=12345abcde&scope=profile%20openid&nonce=09876xyz
```

인증 URL에는 다음 쿼리 파라미터를 전달할 수 있습니다.

| 파라미터 | 타입 | 필수 여부 | 설명 |
| --- | --- | --- | --- |
| `response_type` | String | 필수 | `code` |
| `client_id` | String | 필수 | LINE Login 채널 ID입니다. [LINE Developers Console](https://developers.line.biz/console/)에서 확인할 수 있습니다. |
| `redirect_uri` | String | 필수 | [LINE Developers Console](https://developers.line.biz/console/)에 등록된 콜백 URL을 URL 인코딩한 문자열입니다. 임의의 쿼리 파라미터를 추가할 수 있습니다. |
| `state` | String | 필수 | [사이트 간 요청 위조(cross-site request forgery)](https://wikipedia.org/wiki/Cross-site_request_forgery)를 방지하기 위해 사용하는 고유한 영숫자 문자열입니다. **웹 앱은 로그인 세션마다 무작위 값을 생성해야 합니다.** URL 인코딩된 문자열이어서는 안 됩니다. |
| `scope` | String | 필수 | 사용자에게 요청하는 권한입니다. 자세한 내용은 [Scopes](https://developers.line.biz/en/docs/line-login/integrate-line-login/#scopes)를 참고하십시오. |
| `nonce` | String | 선택 | [재전송 공격(replay attack)](https://en.wikipedia.org/wiki/Replay_attack)을 방지하기 위해 사용하는 문자열입니다. 이 값은 [ID 토큰](https://developers.line.biz/en/docs/line-login/verify-id-token/#id-tokens)에 포함되어 반환됩니다. |
| `prompt` | String | 선택 | 인증 또는 승인 화면을 표시할지 여부를 결정하는 설정입니다. 다음 값 중 하나를 설정할 수 있습니다.<ul><li>`consent`: 사용자가 요청된 권한을 이미 모두 부여했더라도 동의 화면을 강제로 표시할 때 사용합니다.</li><li>`none`: [자동 로그인](https://developers.line.biz/en/docs/line-login/integrate-line-login/#line-auto-login)이 활성화되어 있고 사용자가 이미 로그인되어 있으며 대상 채널에 권한 부여에 동의한 상태라면, [Single Sign On(SSO)](https://developers.line.biz/en/docs/line-login/integrate-line-login/#line-sso-login) 인증 화면을 건너뛸 때 사용합니다.</li><li>`login`: 사용자가 이미 로그인되어 있거나 Single Sign On 로그인 세션이 남아 있더라도 인증 화면을 표시할 때 사용합니다. `login`을 설정하면 자동 로그인이 비활성화됩니다. 응답으로 반환되는 [ID 토큰](https://developers.line.biz/en/docs/line-login/verify-id-token/#id-tokens)의 `amr`에서 사용된 인증 방법을 확인할 수도 있습니다.</li></ul> |
| `max_age` | Number | 선택 | 사용자가 마지막으로 인증된 시점 이후 허용되는 경과 시간(초)입니다. [OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html)의 "Authentication Request" 섹션에 정의된 `max_age` 파라미터에 해당합니다. |
| `ui_locales` | String | 선택 | LINE Login 화면의 표시 언어입니다. [RFC 5646(BCP 47)](https://datatracker.ietf.org/doc/html/rfc5646) 언어 태그를 하나 이상 공백으로 구분하여 우선순위 순으로 지정합니다. [OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html)의 "Authentication Request" 섹션에 정의된 `ui_locales` 파라미터에 해당합니다. |
| `bot_prompt` | String | 선택 | 로그인하는 동안 LINE 공식 계정을 친구로 추가하는 옵션을 표시합니다. `normal` 또는 `aggressive` 중 하나로 설정합니다. 자세한 내용은 [로그인 시 LINE 공식 계정을 친구로 추가하기(친구 추가 옵션)](https://developers.line.biz/en/docs/line-login/link-a-bot/)를 참고하십시오. |
| `initial_amr_display` | String | 선택 | `lineqr`을 지정하면 [이메일 주소로 로그인](https://developers.line.biz/en/docs/line-login/integrate-line-login/#mail-or-qrcode-login) 대신 [QR 코드로 로그인](https://developers.line.biz/en/docs/line-login/integrate-line-login/#mail-or-qrcode-login)이 기본으로 표시됩니다. |
| `switch_amr` | Boolean | 선택 | `false`로 설정하면 "Log in with email"이나 "QR code login" 등 로그인 방법을 변경하는 버튼을 숨깁니다. 기본값은 `true`입니다. |
| `disable_auto_login` | Boolean | 선택 | `true`로 설정하면 [자동 로그인](https://developers.line.biz/en/docs/line-login/integrate-line-login/#line-auto-login)이 비활성화됩니다. 기본값은 `false`입니다.<br>이 값이 `true`이면 SSO를 사용할 수 있는 경우 [Single Sign On(SSO) 로그인](https://developers.line.biz/en/docs/line-login/integrate-line-login/#line-sso-login)이 표시되고, 사용할 수 없는 경우 [이메일 주소로 로그인](https://developers.line.biz/en/docs/line-login/integrate-line-login/#mail-or-qrcode-login)이 표시됩니다. |
| `disable_ios_auto_login` | Boolean | 선택 | `true`로 설정하면 iOS에서 [자동 로그인](https://developers.line.biz/en/docs/line-login/integrate-line-login/#line-auto-login)이 비활성화됩니다. 기본값은 `false`입니다. 나중에 추가된 `disable_auto_login` 파라미터를 사용하는 것을 권장합니다. |
| `code_challenge` | String | 선택 | LINE Login에서 PKCE를 지원하는 데 필요한 파라미터입니다. 고유한 `code_verifier`를 SHA256으로 해시한 다음 Base64URL 형식으로 인코딩한 값입니다. 기본값은 `null`입니다. 값을 지정하지 않으면 해당 요청은 PKCE를 지원하지 않습니다.<br>PKCE 구현 방법은 LINE Login 문서의 [LINE Login에 PKCE 구현하기](https://developers.line.biz/en/docs/line-login/integrate-pkce/#how-to-integrate-pkce)를 참고하십시오. |
| `code_challenge_method` | String | 선택 | `S256`(해시 함수 `SHA256`을 나타냅니다.)<br>`code_verifier`의 변환 방식을 지정합니다. 보안상의 이유로 LINE Login은 `S256`만 지원합니다.<br>PKCE 구현 방법은 LINE Login 문서의 [LINE Login에 PKCE 구현하기](https://developers.line.biz/en/docs/line-login/integrate-pkce/#how-to-integrate-pkce)를 참고하십시오. |
| `response_mode` | String | 선택 | 인증 응답 파라미터를 웹 앱으로 반환하는 방식을 결정하는 설정입니다. 다음 값 중 하나를 설정할 수 있습니다. 기본값은 `query`입니다.<ul><li>`query`: 인증 응답 파라미터를 콜백 URL의 쿼리 파라미터로 반환합니다. \*1</li><li>`form_post`: 인증 응답 파라미터를 HTTP POST 요청의 본문에 담아 반환합니다. \*2</li><li>`query.jwt`: 인증 응답 파라미터를 JWT에 담아 콜백 URL의 쿼리 파라미터로 반환합니다. `jwt`를 설정했을 때와 같습니다. \*3</li><li>`form_post.jwt`: 인증 응답 파라미터를 JWT에 담아 HTTP POST 요청의 본문에 담아 반환합니다. \*3</li><li>`jwt`: 인증 응답 파라미터를 JWT에 담아 콜백 URL의 쿼리 파라미터로 반환합니다. `query.jwt`를 설정했을 때와 같습니다. \*3</li></ul>\*1 [OAuth 2.0 Multiple Response Type Encoding Practices](https://openid.net/specs/oauth-v2-multiple-response-types-1_0.html)의 [2.1. Response Modes](https://openid.net/specs/oauth-v2-multiple-response-types-1_0.html#ResponseModes) 섹션에 정의된 `query`에 해당합니다.<br>\*2 [OAuth 2.0 Form Post Response Mode](https://openid.net/specs/oauth-v2-form-post-response-mode-1_0.html)의 [2. Form Post Response Mode](https://openid.net/specs/oauth-v2-form-post-response-mode-1_0.html#FormPostResponseMode) 섹션에 정의된 `form_post`에 해당합니다.<br>\*3 [Financial-grade API: JWT Secured Authorization Response Mode for OAuth 2.0(JARM)](https://openid.net/specs/openid-financial-api-jarm.html)의 [4.3. Response Encoding](https://openid.net/specs/openid-financial-api-jarm.html#response-encoding) 섹션에 정의된 `query.jwt`, `form_post.jwt`, `jwt`에 해당합니다. |

<!-- tip start -->

**Tip**

- 웹 앱에 LINE Login 버튼을 추가할 때는 [LINE Login 버튼 디자인 가이드라인](https://developers.line.biz/en/docs/line-login/login-button/)을 따르십시오.
- LINE Login 버튼을 표시하지 않고 인증 URL로 직접 링크를 연결할 수도 있습니다.
- 사용자의 인증 정보는 웹 앱으로 전송되지 않습니다.

<!-- tip end -->

<!-- note start -->

**LIFF 브라우저 내의 인증 요청**

LIFF 브라우저 내에서 LINE Login 인증 요청의 동작은 보장되지 않습니다. 또한 외부 브라우저에서 LIFF 앱을 열 때는 LINE Login을 통한 인증 요청 대신 [liff.login()](https://developers.line.biz/en/reference/liff/#login)을 사용하십시오.

<!-- note end -->

### Scopes 

`scope` 파라미터로 다음 scope를 지정할 수 있습니다. 여러 scope를 지정하려면 URL 인코딩된 공백 문자(%20)로 구분하십시오.

| Scope | 프로필<br>정보 | [ID 토큰](https://developers.line.biz/en/docs/line-login/verify-id-token/#id-tokens)<br>(사용자 ID 포함) | [ID 토큰](https://developers.line.biz/en/docs/line-login/verify-id-token/#id-tokens)의<br>표시 이름 | [ID 토큰](https://developers.line.biz/en/docs/line-login/verify-id-token/#id-tokens)의<br>프로필 이미지 URL | [ID 토큰](https://developers.line.biz/en/docs/line-login/verify-id-token/#id-tokens)의<br>이메일 주소 |
| --- | --- | --- | --- | --- | --- |
| `profile` | ✓ | - | - | - | - |
| `profile%20openid` | ✓ | ✓ | ✓ | ✓ | - |
| `profile%20openid%20email` | ✓ | ✓ | ✓ | ✓ | ✓ (참고 참조) |
| `openid` | - | ✓ | - | - | - |
| `openid%20email` | - | ✓ | - | - | ✓ (참고 참조) |

사용자는 동의 화면에서 지정한 scope를 승인합니다. `profile` 또는 `openid` scope를 지정하면 해당 권한이 필수로 표시됩니다. 자세한 내용은 [사용자 승인](https://developers.line.biz/en/docs/line-login/integrate-line-login/#authorization-process)을 참고하십시오.

**참고:** `email` scope를 지정하고 사용자에게 이메일 주소 접근 권한을 요청하려면 먼저 [사용자 이메일 주소 접근에 대한 신청서](https://developers.line.biz/en/docs/line-login/integrate-line-login/#applying-for-email-permission)를 제출해야 합니다.

<!-- tip start -->

**위에 나열되지 않은 scope 요청하기**

- LINE Profile+에 사용자가 등록한 정보(이름, 성별, 생년월일, 전화번호, 주소)를 가져오려면 신청 절차를 거쳐야 합니다. 자세한 내용은 법인 고객용 옵션 문서의 [LINE Profile+](https://developers.line.biz/en/docs/partner-docs/line-profile-plus/)를 참고하십시오.
- 사용자가 LINE 공식 계정을 친구로 추가했는지 [확인하려면](https://developers.line.biz/en/docs/line-login/link-a-bot/#use-line-login-api) `profile` scope가 포함된 액세스 토큰이 필요합니다.

<!-- tip end -->

### 사용자 인증 

<!-- tip start -->

**사용자 인증은 LINE Platform에서 직접 처리합니다**

LINE Login을 지원하는 웹 앱은 인증 과정을 직접 구현할 필요가 없습니다.

<!-- tip end -->

사용자는 인증 URL로 리디렉션된 후 다음 인증 방법 중 하나를 사용하여 로그인할 수 있습니다.

| 인증 방법 | 설명 |
| --- | --- |
| [자동 로그인](https://developers.line.biz/en/docs/line-login/integrate-line-login/#line-auto-login) | 사용자 조작 없이 로그인합니다. LINE Login 화면이나 확인 화면이 표시되지 않습니다. |
| [이메일 주소로 로그인](https://developers.line.biz/en/docs/line-login/integrate-line-login/#mail-or-qrcode-login) | LINE Login 화면에서 이메일 주소와 비밀번호를 입력하여 로그인합니다. |
| [QR 코드로 로그인](https://developers.line.biz/en/docs/line-login/integrate-line-login/#mail-or-qrcode-login) | LINE Login 화면에 표시된 QR 코드를 스마트폰의 LINE 앱에 있는 QR 코드 리더로 스캔하여 로그인합니다. |
| [SSO(Single Sign On) 로그인](https://developers.line.biz/en/docs/line-login/integrate-line-login/#line-sso-login) | "Continue as"가 표시된 확인 화면에서 로그인 버튼을 클릭하여 로그인합니다. |

자동 로그인을 사용할 수 있는 환경에서는 자동 로그인이 우선 적용됩니다. 자동 로그인을 사용할 수 없는 경우, SSO를 사용할 수 있다면 [Single Sign On(SSO) 로그인](https://developers.line.biz/en/docs/line-login/integrate-line-login/#line-sso-login)이 표시되고, 사용할 수 없다면 [이메일 주소로 로그인](https://developers.line.biz/en/docs/line-login/integrate-line-login/#mail-or-qrcode-login)이 표시됩니다.

<!-- note start -->

**자동 로그인이 SSO 로그인보다 우선합니다**

자동 로그인과 SSO 로그인이 모두 활성화된 환경에서는 자동 로그인이 우선 적용됩니다. 자세한 내용은 2021년 7월 12일에 게시된 소식 "[Auto login will take precedence over SSO login for LINE Login](https://developers.line.biz/en/news/2021/07/12/auto-login-takes-precedence-over-sso/)"을 참고하십시오.

[인증 요청하기](https://developers.line.biz/en/docs/line-login/integrate-line-login/#making-an-authorization-request) 시 인증 URL에 특정 쿼리 파라미터(`disable_auto_login`)를 추가하면 자동 로그인을 비활성화하여, 사용자가 자동 로그인 대신 SSO 로그인을 사용하도록 할 수 있습니다.

<!-- note end -->

<!-- note start -->

**로그인 알림**

로그인한 후에는 LINE 공식 계정에서 로그인 알림이 전송됩니다. 로그인 알림에 대한 자세한 내용은 Help Center의 [I got a notification about a detected login](https://help.line.me/line/android/pc?lang=en&contentId=20014794)을 참고하십시오.

<!-- note end -->

<!-- tip start -->

**사용자가 선택한 인증 방법**

ID 토큰을 확인하면 사용자가 선택한 인증 방법을 알 수 있습니다. ID 토큰에 대한 자세한 내용은 [액세스 토큰 가져오기](https://developers.line.biz/en/docs/line-login/integrate-line-login/#get-access-token)의 "Response" 섹션을 참고하십시오.

<!-- tip end -->

#### 자동 로그인 

사용자 조작 없이 로그인이 활성화됩니다. LINE Login 화면이나 확인 화면은 표시되지 않습니다.

스마트폰 LINE 앱에 로그인된 상태에서 다음 브라우저 중 하나로 인증 URL에 접속하면 사용자는 자동으로 로그인됩니다.

- LINE의 인앱 브라우저
- LINE 로그인에 사용되는 외부 브라우저

아래와 같이 로그인하면 LINE 앱이 자동으로 실행되며, 사용자는 아무 조작 없이 로그인됩니다.

![](https://developers.line.biz/media/line-login/integrate-login-web/auto-login-animation.webp)

<!-- note start -->

**LINE for PC에서는 자동 로그인이 동작하지 않습니다**

자동 로그인을 사용할 수 있는 환경에 대한 자세한 내용은 FAQ의 [자동 로그인은 어떻게 동작하나요?](https://developers.line.biz/en/faq/#how-does-auto-login-work)를 참고하십시오.

<!-- note end -->

<!-- note start -->

**자동 로그인이 실패할 수 있습니다**

사용자가 시크릿 브라우징이 활성화된 상태에서 웹 앱에 접속하면 자동 로그인이 실패할 수 있습니다.

그 밖에도 사용자 OS의 사양에 따라 자동 로그인이 실패할 수 있습니다. OS의 사양이 완전히 공개되어 있지 않으므로, LINE Platform이 자동 로그인이 실패하는 조건을 완전히 피하기는 어려울 수 있습니다.

자세한 내용은 [자동 로그인 실패 처리 방법](https://developers.line.biz/en/docs/line-login/how-to-handle-auto-login-failure/)을 참고하십시오.

<!-- note end -->

<!-- tip start -->

**Yahoo! JAPAN 앱에서의 자동 로그인에 대하여**

PKCE를 구현한 LINE Login을 연동한 웹 앱에 Yahoo! JAPAN 앱에서 접속하면 자동 로그인이 활성화됩니다. LINE Login의 PKCE 지원에 대한 자세한 내용은 LINE Login 문서의 [LINE Login의 PKCE 지원](https://developers.line.biz/en/docs/line-login/integrate-pkce/)을 참고하십시오.

<!-- tip end -->

#### 이메일 주소 또는 QR 코드로 로그인 

사용자는 다음 인증 방법 중 하나로 로그인할 수 있습니다.

- 이메일 주소로 로그인
- QR 코드로 로그인

![Login dialog](https://developers.line.biz/media/line-login/integrate-login-web/login-with-new-session.png)

이 로그인 방법은 스마트폰 LINE 앱에 로그인하지 않은 상태에서 외부 브라우저로 인증 URL에 처음 접속할 때 사용할 수 있습니다.

#### Single Sign On(SSO) 로그인 

사용자는 로그인 버튼을 클릭하기만 하면 로그인할 수 있습니다.

![Confirmation Screen](https://developers.line.biz/media/line-login/integrate-login-web/sso.png)

사용자가 이전에 LINE에 로그인할 때 사용했던 외부 브라우저에서 인증 URL에 접속하면 SSO를 사용할 수 있습니다.

<!-- note start -->

**SSO는 쿠키를 사용하는 기능입니다**

웹 애플리케이션에서 LINE Login을 실행하면 쿠키가 `access.line.me` 도메인 이름으로 저장됩니다. 쿠키가 유효한 동안에는 같은 브라우저에서 로그인할 때 SSO 화면이 표시됩니다.

<!-- note end -->

<!-- note start -->

**자동 로그인이 SSO 로그인보다 우선합니다**

자동 로그인과 SSO 로그인이 모두 활성화된 환경에서는 자동 로그인이 우선 적용됩니다. 자세한 내용은 2021년 7월 12일에 게시된 소식 "[Auto login will take precedence over SSO login for LINE Login](https://developers.line.biz/en/news/2021/07/12/auto-login-takes-precedence-over-sso/)"을 참고하십시오.

[인증 요청하기](https://developers.line.biz/en/docs/line-login/integrate-line-login/#making-an-authorization-request) 시 인증 URL에 특정 쿼리 파라미터(`disable_auto_login`)를 추가하면 자동 로그인을 비활성화하여, 사용자가 자동 로그인 대신 SSO 로그인을 사용하도록 할 수 있습니다.

<!-- note end -->

### 사용자 승인 

<!-- tip start -->

**사용자 승인은 LINE Platform에서 직접 처리합니다**

LINE Login을 지원하는 웹 앱은 승인 과정을 직접 구현할 필요가 없습니다.

<!-- tip end -->

개발자는 `scope` 파라미터에 필요한 정보를 지정하고, 사용자는 해당 요청을 승인하도록 요청받습니다.

사용자가 요청된 권한의 일부 또는 전부를 부여하지 않고 웹 앱에 접속할 수도 있습니다. 웹 앱을 만들 때는 사용자가 인증 URL에 지정한 권한을 부여하지 않을 가능성을 고려해야 합니다.

| 동의 화면 | `scope` 파라미터와 표시 항목 |
| --- | --- |
| ![Consent screen](https://developers.line.biz/media/line-login/integrate-login-web/consent-screen-en.webp) | <ul><li>`profile`: 기본 프로필 정보(필수)</li><li>`openid`: 내부 식별자(필수)</li><li>`email`: 이메일 주소</li></ul> |

#### 동의 화면을 다시 표시하는 조건 

사용자가 한 번 동의한 후에도 다음 조건 중 하나에 해당하면 LINE Login으로 로그인할 때 동의 화면이 다시 표시됩니다.

- `scope` 파라미터가 사용자가 마지막으로 동의했을 때 부여되지 않았던 권한을 요청하는 경우
- 사용자가 [승인된 앱의 동의를 철회한](https://developers.line.biz/en/docs/line-login/managing-authorized-apps/) 후 LINE Login으로 로그인하는 경우
- `prompt` 파라미터가 `consent`로 설정된 경우
- `scope` 파라미터에 `email`이 포함되어 있고, 사용자가 마지막으로 동의한 후 일정 기간이 지났거나 사용자의 이메일 주소가 변경된 경우

위 조건이 모두 해당하지 않으면 사용자 인증이 완료된 후 동의 화면이 표시되지 않고 웹 앱으로 바로 리디렉션됩니다.

## 웹 앱에서 인증 응답 또는 오류 응답 받기 

사용자가 인증과 승인 과정을 마치면 콜백 URL로 리디렉션됩니다.

사용자가 앱에 접근 권한을 부여했다면 인증 코드가 포함된 인증 응답이 반환됩니다. 사용자가 앱에 접근 권한을 부여하지 않았다면 오류 응답이 반환됩니다.

### 인증 코드 받기 

사용자가 인증되고 승인 단계를 마치면 콜백 URL로 리디렉션됩니다. 인증 코드를 포함한 인증 응답 파라미터를 받는 방식은 인증 요청의 `response_mode` 파라미터 값에 따라 달라집니다. 자세한 내용은 [사용자를 인증하고 인증 요청하기](https://developers.line.biz/en/docs/line-login/integrate-line-login/#making-an-authorization-request)를 참고하십시오.

인증 응답 파라미터는 다음과 같습니다.

| 파라미터 | 타입 | 설명 |
| --- | --- | --- |
| `code` | String | 액세스 토큰을 가져오는 데 사용하는 인증 코드입니다. 10분 동안 유효합니다. 이 인증 코드는 한 번만 사용할 수 있습니다. |
| `state` | String | [사이트 간 요청 위조](https://wikipedia.org/wiki/Cross-site_request_forgery)를 방지하기 위해 사용하는 고유한 영숫자 문자열입니다. 인증 URL에 지정한 `state` 파라미터의 값과 일치하는지 확인하십시오. |
| `friendship_status_changed` | Boolean | 로그인하는 동안 사용자와 채널에 연결된 LINE 공식 계정 간의 친구 관계 상태가 변경되었으면 `true`입니다. 그렇지 않으면 `false`입니다. 이 파라미터는 [사용자를 인증하고 인증 요청을 할 때](https://developers.line.biz/en/docs/line-login/integrate-line-login/#making-an-authorization-request) `bot_prompt` 쿼리 파라미터를 지정했고, 사용자가 로그인할 때 LINE 공식 계정을 친구로 추가하는 옵션을 받은 경우에만 반환됩니다. 자세한 내용은 [로그인 시 LINE 공식 계정을 친구로 추가하기(친구 추가 옵션)](https://developers.line.biz/en/docs/line-login/link-a-bot/)를 참고하십시오. |
| `liffClientId` | String | LINE Login 채널 ID입니다. LIFF 앱에서 [`liff.login()`](https://developers.line.biz/en/reference/liff/#login) 메서드를 사용하여 로그인 과정을 수행한 경우에만 반환됩니다. LIFF 앱이 올바르게 동작하도록 이 파라미터를 변경하지 마십시오. |
| `liffRedirectUri` | String | 로그인 후 LIFF 앱에 표시되는 URL입니다. [`liff.login()`](https://developers.line.biz/en/reference/liff/#login) 메서드의 `redirectUri` 속성에 지정한 값입니다. LIFF 앱에서 [`liff.login()`](https://developers.line.biz/en/reference/liff/#login) 메서드를 사용하여 로그인 과정을 수행한 경우에만 반환됩니다. LIFF 앱이 올바르게 동작하도록 이 파라미터를 변경하지 마십시오. |

인증 요청의 `query` 파라미터를 `query.jwt`로 설정했을 때 리디렉션 대상 URL 예시:

```
https://example.com/callback?code=abcd1234&state=0987poi&friendship_status_changed=true
```

인증 요청의 `response_mode` 파라미터를 `query.jwt` 또는 `jwt`로 설정했을 때 리디렉션 대상 URL 예시:

```
https://example.com/callback?response=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...
```

### 오류 응답 받기 

사용자가 앱에 권한 부여를 거부하거나 요청이 실패하면(`client_id` 또는 `redirect_uri` 쿼리 파라미터의 값이 잘못된 경우는 제외) 다음 쿼리 파라미터와 함께 콜백 URL로 리디렉션됩니다.

| 파라미터 | 타입 | 필수 여부 | 설명 |
| --- | --- | --- | --- |
| `error` | String | 필수 | [오류 코드](https://developers.line.biz/en/docs/line-login/integrate-line-login/#error-codes)입니다. |
| `error_description` | String | 선택 | 오류에 대한 설명입니다. |
| `state` | String | 선택 | 인증 URL에 포함된 `state` 파라미터입니다. 이 값을 사용하여 거부된 프로세스가 무엇인지 확인할 수 있습니다. |

리디렉션 대상 URL 예시:

```
https://example.com/callback?error=ACCESS_DENIED&error_description=The+resource+owner+denied+the+request.&state=0987poi
```

#### 오류 코드 

| 오류 코드 | 설명 |
| --- | --- |
| `INVALID_REQUEST` | 요청에 문제가 있습니다. 인증 URL의 쿼리 파라미터를 확인하십시오. |
| `ACCESS_DENIED` | 사용자가 동의 화면에서 취소하고 앱에 권한 부여를 거부했습니다. |
| `UNSUPPORTED_RESPONSE_TYPE` | `response_type` 쿼리 파라미터 값에 문제가 있습니다. LINE Login은 `code`만 지원합니다. |
| `INVALID_SCOPE` | <p>`scope` 쿼리 파라미터 값에 문제가 있습니다. 올바른 값을 지정했는지 확인하십시오.</p><ul><li>`profile` 또는 `openid`가 필요합니다.</li><li>`email`을 지정하는 경우 `openid`도 함께 지정해야 합니다.</li></ul> |
| `SERVER_ERROR` | LINE Login 서버에서 예기치 않은 오류가 발생했습니다. |
| `LOGIN_REQUIRED` | `prompt` 파라미터에 `none`을 지정했지만, 사용자의 기기에서 자동 로그인을 사용할 수 없거나 사용자가 로그인되어 있지 않습니다. |
| `INTERACTION_REQUIRED` | `prompt` 파라미터에 `none`을 지정했지만, 사용자의 기기에서 자동 로그인을 사용할 수 없습니다. |

## 웹 앱에서 액세스 토큰 가져오기 

LINE Platform에서 인증 코드와 함께 받은 `state` 파라미터가 [사용자를 인증하고 인증 요청을 할 때](https://developers.line.biz/en/docs/line-login/integrate-line-login/#making-an-authorization-request) 지정한 `state` 파라미터와 일치하면 액세스 토큰을 얻을 수 있습니다.

액세스 토큰을 가져오는 방법에 대한 자세한 내용은 LINE Login v2.1 API 레퍼런스의 [issue access token](https://developers.line.biz/en/reference/line-login/#issue-access-token)을 참고하십시오.

요청 예시:

```sh
curl -v -X POST https://api.line.me/oauth2/v2.1/token \
-H 'Content-Type: application/x-www-form-urlencoded' \
-d 'grant_type=authorization_code' \
-d 'code=1234567890abcde' \
--data-urlencode 'redirect_uri=https://example.com/auth?key=value' \
-d 'client_id=1234567890' \
-d 'client_secret=1234567890abcdefghij1234567890ab'
```

### 응답 

LINE Platform은 요청을 검증한 후 아래 표와 같이 액세스 토큰과 기타 데이터를 반환합니다.

<!-- note start -->

**Note**

새로운 LINE Login 기능이나 변경된 기능으로 인해 페이로드 JSON 객체의 구조가 바뀔 수 있습니다. 이러한 변경에는 속성 추가, 속성 순서 변경, 공백 및 줄바꿈의 추가/삭제가 포함될 수 있습니다. 예상치 못한 구조의 페이로드 데이터 객체도 처리할 수 있도록 백엔드를 설계하십시오.

<!-- note end -->

| 속성 | 타입 | 설명 |
| --- | --- | --- |
| `access_token` | String | 액세스 토큰입니다. 30일 동안 유효합니다. |
| `expires_in` | Number | 액세스 토큰이 만료되기까지 남은 시간(초)입니다. |
| `id_token` | String | 사용자 정보를 포함하는 [JSON Web Token(JWT)](https://datatracker.ietf.org/doc/html/rfc7519)입니다. scope에 openid를 지정한 경우에만 반환됩니다. 자세한 내용은 [ID 토큰에서 프로필 정보 가져오기](https://developers.line.biz/en/docs/line-login/verify-id-token/)를 참고하십시오. |
| `refresh_token` | String | 새 액세스 토큰을 가져오는 데 사용하는 토큰입니다. 액세스 토큰이 발급된 후 90일까지 유효합니다. |
| `scope` | String | 사용자가 부여한 권한입니다. 다만 `email` scope는 권한을 부여받았더라도 `scope` 속성의 값으로 반환되지 않습니다. |
| `token_type` | String | `Bearer` |

응답 예시:

```json
{
  "access_token": "bNl4YEFPI/hjFWhTqexp4MuEw5YPs...",
  "expires_in": 2592000,
  "id_token": "eyJhbGciOiJIUzI1NiJ9...",
  "refresh_token": "Aa1FdeggRhTnPNNpxr8p",
  "scope": "profile",
  "token_type": "Bearer"
}
```

자세한 내용은 LINE Login v2.1 API 레퍼런스의 [액세스 토큰 발급](https://developers.line.biz/en/reference/line-login/#issue-access-token)을 참고하십시오.

## ID 토큰에서 프로필 정보 가져오기 

LINE Platform은 [OpenID Connect](https://openid.net/developers/how-connect-works/) 사양을 준수하는 ID 토큰을 발급하므로, LINE Platform에서 사용자의 [프로필 정보](https://developers.line.biz/en/glossary/#profile-information)(사용자 ID, 표시 이름, 프로필 사진, 이메일 주소)를 안전하게 가져올 수 있습니다.

자세한 내용은 [ID 토큰에서 프로필 정보 가져오기](https://developers.line.biz/en/docs/line-login/verify-id-token/)를 참고하십시오.

## 다음 단계 

액세스 토큰을 얻은 후에는 다음 작업에 사용할 수 있습니다.

- [사용자의 LINE 공식 계정 친구 관계 상태 가져오기](https://developers.line.biz/en/docs/line-login/link-a-bot/#use-line-login-api)
- [액세스 토큰 관리](https://developers.line.biz/en/docs/line-login/managing-access-tokens/)
- [사용자 관리](https://developers.line.biz/en/docs/line-login/managing-users/)
