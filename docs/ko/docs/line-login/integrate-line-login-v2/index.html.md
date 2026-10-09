# 웹 앱에 LINE Login(v2.0) 연동하기

<!-- warning start -->

**LINE Login v2.0은 더 이상 권장되지 않습니다(deprecated)**

이 페이지는 이전 버전인 LINE Login v2.0의 문서입니다. LINE Login v2.0은 [deprecated](https://developers.line.biz/en/glossary/#deprecated) 상태이며, [end-of-life](https://developers.line.biz/en/glossary/#end-of-life) 날짜는 아직 정해지지 않았습니다. 따라서 현재 버전인 LINE Login v2.1을 사용하는 것을 권장합니다. 종료(end-of-life)가 공지된 후 실제 종료되기까지는 일정한 유예 기간이 있습니다. 자세한 내용은 [LINE Login 버전](https://developers.line.biz/en/docs/line-login/overview/#versions)을 참고하십시오.

<!-- warning end -->

이 페이지에서는 웹 앱에 LINE Login을 연동하는 방법을 설명합니다. LINE Login을 연동할 앱이 없다면 샘플 앱을 사용할 수 있습니다. [LINE Login 시작하기](https://developers.line.biz/en/docs/line-login/getting-started/)를 참고하십시오.

## 로그인 흐름 

웹 앱의 LINE Login 프로세스(웹 로그인)는 [OAuth 2.0 authorization code flow](https://datatracker.ietf.org/doc/html/rfc6749)를 기반으로 합니다.

웹 로그인 흐름의 개요는 아래와 같습니다. 웹 앱은 순서도에서 자신에게 해당하는 로그인 흐름 부분을 구현해야 합니다.

![Web login flow](https://developers.line.biz/media/line-login/web-login-flow.svg)

## 채널 만들기 

[LINE Login 채널을 만들고](https://developers.line.biz/en/docs/line-login/getting-started/#step-1-create-channel) 웹 앱에서 사용할 수 있도록 설정합니다.

- [콜백 URL 설정하기](https://developers.line.biz/en/docs/line-login/integrate-line-login-v2/#setting-callback-url)

### 콜백 URL 설정하기 

사용자가 인증 및 승인을 마치면 인증 코드와 `state`가 콜백 URL로 전송됩니다.

[LINE Developers Console](https://developers.line.biz/console/)에서 채널 설정의 **LINE Login** 탭으로 이동하여 콜백 URL을 설정하십시오.

채널 하나당 콜백 URL을 여러 개 설정할 수 있습니다.

![Redirect settings](https://developers.line.biz/media/line-login/integrate-login-web/redirect-settings.png)

<!-- note start -->

**이메일 주소 접근 권한**

LINE Login v2.0을 사용하여 앱에 로그인한 사용자의 이메일 주소는 가져올 수 없습니다.

<!-- note end -->

## 사용자 인증 및 인증 요청하기 

LINE Platform을 통해 사용자를 인증하고 앱을 승인받는 과정을 시작합니다.

사용자가 LINE Login 버튼을 클릭하면 인증 URL로 리디렉션합니다.

<!-- tip start -->

**팁**

- 웹 앱에 LINE Login 버튼을 추가할 때는 [LINE Login 버튼 디자인 가이드라인](https://developers.line.biz/en/docs/line-login/login-button/)을 따르십시오.
- LINE Login 버튼을 표시하지 않고 인증 URL로 직접 링크를 연결할 수도 있습니다.
- 사용자의 인증 정보는 웹 앱으로 전송되지 않습니다.

<!-- tip end -->

인증 URL 예시:

```
https://access.line.me/dialog/oauth/weblogin?response_type=code&client_id=1234567890&redirect_uri=https%3A%2F%2Fexample.com%2Fauth&state=123abc
```

인증 URL에는 다음 쿼리 파라미터를 전달할 수 있습니다.

| 파라미터 | 타입 | 필수 여부 | 설명 |
| --- | --- | --- | --- |
| `response_type` | String | 필수 | `code` |
| `client_id` | String | 필수 | LINE Login 채널 ID입니다. [LINE Developers Console](https://developers.line.biz/console/)에서 확인할 수 있습니다. |
| `redirect_uri` | String | 필수 | [LINE Developers Console](https://developers.line.biz/console/)에 등록된 콜백 URL |
| `state` | String | 필수 | [사이트 간 요청 위조(cross-site request forgery)](https://wikipedia.org/wiki/Cross-site_request_forgery)를 방지하기 위해 사용하는 고유한 영숫자 문자열입니다. **웹 앱은 로그인 세션마다 무작위 값을 생성해야 합니다.** URL 인코딩된 문자열이어서는 안 됩니다. |

### 사용자 인증 및 승인 

<!-- tip start -->

**사용자 인증과 승인은 LINE Platform에서 직접 처리합니다**

LINE Login을 지원하는 웹 앱은 승인 과정을 직접 구현할 필요가 없습니다.

<!-- tip end -->

인증 URL로 리디렉션되면 사용자는 LINE 인증 정보로 로그인하고, 웹 앱이 요청한 접근 권한을 부여할지 결정합니다.

동의 화면 예시:

![Consent screen](https://developers.line.biz/media/line-login/integrate-login-web/consent-screen.png)

## 웹 앱에서 인증 코드 또는 오류 응답 받기 

사용자가 인증과 승인 과정을 마치면 콜백 URL로 리디렉션됩니다.

사용자가 앱에 접근 권한을 부여했다면 인증 코드가 반환됩니다.

사용자가 앱에 접근 권한을 부여하지 _않았다면_ 오류 응답이 반환됩니다.

### 인증 코드 받기 

사용자가 인증되고 승인 단계를 마치면 다음 쿼리 파라미터와 함께 콜백 URL로 리디렉션됩니다.

| 파라미터 | 타입 | 설명 |
| --- | --- | --- |
| `code` | String | 액세스 토큰을 가져오는 데 사용하는 인증 코드입니다. 10분 동안 유효합니다. 이 인증 코드는 한 번만 사용할 수 있습니다. |
| `state` | String | [사이트 간 요청 위조](https://wikipedia.org/wiki/Cross-site_request_forgery)를 방지하기 위해 사용하는 고유한 영숫자 문자열입니다. 인증 URL에 전달한 `state` 파라미터의 값과 일치하는지 확인하십시오. |

리디렉션 대상 URL 예시:

```
https://example.com/callback?code=b5fd32eacc791df&state=123abc
```

### 오류 응답 받기 

사용자가 앱이 요청한 권한 부여를 거부하면 다음 쿼리 파라미터와 함께 콜백 URL로 리디렉션됩니다.

| 파라미터 | 타입 | 설명 |
| --- | --- | --- |
| `error_description` | String | `The+user+has+denied+the+approval` <br>**참고:** 이 파라미터는 iOS 및 Android 앱의 인앱 브라우저에서는 나타나지 않습니다. 현재 이 문제를 해결하기 위해 노력하고 있습니다. |
| `errorMessage` | String | `DISALLOWED` |
| `errorCode` | Number | `417` |
| `state` | String | 인증 URL에 포함된 `state` 파라미터입니다. 이 값을 사용하여 거부된 프로세스가 무엇인지 확인할 수 있습니다. |
| `error` | String | `access_denied` |

리디렉션 대상 URL 예시:

```
https://example.com/callback?error_description=The+user+has+denied+the+approval&errorMessage=DISALLOWED&errorCode=417&state=123abc&error=access_denied
```

## 웹 앱에서 액세스 토큰 가져오기 

LINE Platform에서 인증 코드와 함께 받은 `state` 파라미터가 [사용자를 인증하고 인증 요청을 할 때](https://developers.line.biz/en/docs/line-login/integrate-line-login-v2/#making-an-authorization-request) 지정한 `state` 파라미터와 일치하면 액세스 토큰을 얻을 수 있습니다.

요청 예시:

```sh
curl -v -X POST https://api.line.me/v2/oauth/accessToken \
-H 'Content-Type: application/x-www-form-urlencoded' \
-d 'grant_type=authorization_code' \
-d 'code=b5fd32eacc791df' \
-d 'redirect_uri=https%3A%2F%2Fexample.com%2Fauth' \
-d 'client_id=12345' \
-d 'client_secret=d6524edacc8742aeedf98f'
```

응답 예시:

```json
{
  "access_token": "bNl4YEFPI/hjFWhTqexp4MuEw5YPs7qhr6dJDXKwNPuLka...",
  "expires_in": 2591977,
  "refresh_token": "8iFFRdyxNVNLWYeteMMJ",
  "scope": "P",
  "token_type": "Bearer"
}
```

자세한 내용은 LINE Login v2.0 API 레퍼런스의 [액세스 토큰 발급](https://developers.line.biz/en/reference/line-login-v2/#issue-access-token)을 참고하십시오.

## 다음 단계 

액세스 토큰을 얻은 후에는 다음 작업에 사용할 수 있습니다.

- [액세스 토큰 관리(LINE Login v2.0)](https://developers.line.biz/en/docs/line-login/managing-access-tokens-v2/)
- [사용자 관리(LINE Login v2.0)](https://developers.line.biz/en/docs/line-login/managing-users-v2/)
