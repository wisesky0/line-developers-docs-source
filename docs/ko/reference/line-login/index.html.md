# LINE Login v2.1 API reference

## Common specifications 

### Rate limits 

짧은 시간 안에 LINE Login API에 대량의 요청을 보내 LINE Platform의 운영에 영향을 준다고 판단되면 요청이 일시적으로 제한될 수 있습니다. 부하 테스트를 포함하여 어떤 목적으로도 대량의 요청을 보내지 마십시오.

<!-- tip start -->

**On rate limit thresholds**

LINE Login API의 rate limit 임계값은 공개되어 있지 않습니다.

<!-- tip end -->

### Status codes 

API 호출 후 다음 HTTP 상태 코드가 반환됩니다. 별도로 명시되지 않은 경우 [HTTP status code specification](https://datatracker.ietf.org/doc/html/rfc7231#section-6)을 따릅니다.

| Status code | Description |
| --- | --- |
| 200 OK | 요청이 성공했습니다. |
| 400 Bad Request | 요청에 문제가 있습니다. 요청 파라미터와 JSON 형식을 확인하십시오. |
| 401 Unauthorized | Authorization 헤더가 올바른지 확인하십시오. |
| 403 Forbidden | API를 사용할 권한이 없습니다. 계정 또는 플랜이 API 사용 권한을 가지고 있는지 확인하십시오. |
| 413 Payload Too Large | 요청이 최대 크기인 2MB를 초과합니다. 요청 크기를 2MB 미만으로 줄인 후 다시 시도하십시오. |
| 429 Too Many Requests | 대량의 요청으로 [rate-limit](https://developers.line.biz/en/reference/line-login/#rate-limits)을 초과하여 요청이 일시적으로 제한되었습니다. |
| 500 Internal Server Error | API 서버에서 일시적인 오류가 발생했습니다. |

### Response headers 

LINE Login API 응답에는 다음 HTTP 헤더가 포함됩니다.

| Response header | Description |
| --- | --- |
| x-line-request-id | 요청 ID입니다. 요청마다 ID가 발급됩니다. |

## OAuth 

### Issue access token 

Endpoint: `POST` `https://api.line.me/oauth2/v2.1/token`

Access token을 발급합니다.

LINE Login API를 통해 관리되는 access token은 앱이 LINE Platform에 저장된 사용자 데이터(사용자 ID, 표시 이름, 프로필 이미지, 상태 메시지 등)에 접근할 수 있는 권한을 부여받았음을 증명합니다.

LINE Login API를 호출할 때는 이전 응답에서 전달받은 access token 또는 refresh token을 제공해야 합니다.

<!-- note start -->

**Note**

- 이 항목은 LINE Login v2.1 endpoint에 대한 참조입니다. v2.0 endpoint에 대한 내용은 v2.0 API reference의 [Issue access token](https://developers.line.biz/en/reference/line-login-v2/#issue-access-token)을 참조하십시오.
- LINE Login에 새로운 기능이 추가되거나 기존 기능이 변경되면 응답의 JSON 객체 및 ID token의 구조가 바뀔 수 있습니다. 이러한 변경으로 속성이 추가되거나 순서가 달라질 수 있고, 요소 사이의 공백이나 줄바꿈이 추가 또는 제거될 수 있으며, 데이터 크기가 달라질 수 있습니다. 앞으로 다른 구조의 페이로드가 와도 처리할 수 있도록 백엔드를 설계하십시오.

<!-- note end -->

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X POST https://api.line.me/oauth2/v2.1/token \
-H 'Content-Type: application/x-www-form-urlencoded' \
-d 'grant_type=authorization_code' \
-d 'code=1234567890abcde' \
--data-urlencode 'redirect_uri=https://example.com/auth?key=value' \
-d 'client_id=1234567890' \
-d 'client_secret=1234567890abcdefghij1234567890ab' \
-d 'code_verifier=wJKN8qz5t8SSI9lMFhBB6qwNkQBkuPZoCxzRhwLRUo1'
```

<!-- tab end -->

#### Request headers 

<!-- parameter start (props: required) -->

Content-Type

application/x-www-form-urlencoded

<!-- parameter end -->

#### Request body 

<!-- parameter start (props: required) -->

grant_type

String

`authorization_code`

<!-- parameter end -->
<!-- parameter start (props: required) -->

code

String

LINE Platform에서 받은 [Authorization code](https://developers.line.biz/en/docs/line-login/integrate-line-login/#receiving-the-authorization-code)

<!-- parameter end -->
<!-- parameter start (props: required) -->

redirect_uri

String

[Authorization request](https://developers.line.biz/en/docs/line-login/integrate-line-login/#making-an-authorization-request)에서 지정한 `redirect_uri`와 같은 값입니다.

<!-- parameter end -->
<!-- parameter start (props: required) -->

client_id

String

Channel ID입니다. [LINE Developers Console](https://developers.line.biz/console/)에서 확인할 수 있습니다.

<!-- parameter end -->
<!-- parameter start (props: required) -->

client_secret

String

Channel secret입니다. [LINE Developers Console](https://developers.line.biz/console/)에서 확인할 수 있습니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

code_verifier

String

단일 바이트 영숫자와 기호로 구성된 43~128자의 임의 문자열입니다(예: `wJKN8qz5t8SSI9lMFhBB6qwNkQBkuPZoCxzRhwLRUo1`).<br><br>LINE Login에 PKCE를 구현한 경우, 이 파라미터를 추가하면 access token을 반환하기 전에 LINE Platform에서 `code_verifier`의 유효성을 확인할 수 있습니다.<br><br>PKCE 구현 방법에 대한 자세한 내용은 LINE Login 문서의 [Implement PKCE for LINE Login](https://developers.line.biz/en/docs/line-login/integrate-pkce/#how-to-integrate-pkce)을 참조하십시오.

<!-- parameter end -->

#### Response 

`200` 상태 코드와 다음 정보를 담은 JSON 객체가 반환됩니다.

<!-- parameter start -->

access_token

String

Access token입니다. 30일 동안 유효합니다.

<!-- parameter end -->
<!-- parameter start -->

expires_in

Number

Access token이 만료되기까지 남은 시간(초)입니다.

<!-- parameter end -->
<!-- parameter start -->

id_token

String

사용자에 대한 정보를 담은 [JSON Web Token (JWT)](https://datatracker.ietf.org/doc/html/rfc7519)입니다. `openid` scope를 요청한 경우에만 반환됩니다. ID token에 대한 자세한 내용은 [Get profile information from ID tokens](https://developers.line.biz/en/docs/line-login/verify-id-token/)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start -->

refresh_token

String

새로운 access token을 얻는 데 사용되는 토큰(refresh token)입니다. Access token이 발급된 후 90일 동안 유효합니다.

자세한 내용은 [Refresh access token](https://developers.line.biz/en/reference/line-login/#refresh-access-token)을 참조하십시오.

<!-- parameter end -->
<!-- parameter start -->

scope

String

Access token에 부여된 권한입니다. Scope에 대한 자세한 내용은 [Scopes](https://developers.line.biz/en/docs/line-login/integrate-line-login/#scopes)를 참조하십시오.

`email` 권한이 부여되더라도 `scope` 속성에는 `email`이 포함되지 않습니다.

<!-- parameter end -->
<!-- parameter start -->

token_type

String

`Bearer`

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

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

<!-- tab end -->

### Verify access token validity 

Access token이 유효한지 확인합니다.

Access token으로 사용자를 등록하고 로그인하는 방법에 대한 보안 권장 사항은 LINE Login 문서의 [Creating a secure login process between your app and server](https://developers.line.biz/en/docs/line-login/secure-login-process/)를 참조하십시오.

<!-- note start -->

**Note**

이 항목은 LINE Login v2.1 endpoint에 대한 참조입니다. v2.0 endpoint에 대한 내용은 LINE Login v2.0 API reference의 [Verify access token validity](https://developers.line.biz/en/reference/line-login-v2/#verify-access-token)를 참조하십시오.

<!-- note end -->

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X GET \
'https://api.line.me/oauth2/v2.1/verify?access_token=eyJhbGciOiJIUzI1NiJ9.UnQ_o-GP0VtnwDjbK0C8E_NvK...'
```

<!-- tab end -->

#### HTTP request 

`GET https://api.line.me/oauth2/v2.1/verify`

#### Query parameters 

<!-- parameter start (props: required) -->

access_token

Access token

<!-- parameter end -->

#### Response 

Access token이 유효하면 다음 정보를 담은 JSON 객체와 함께 `200 OK` 상태 코드가 반환됩니다.

<!-- parameter start -->

scope

String

Access token에 부여된 권한입니다. Scope에 대한 자세한 내용은 [Scopes](https://developers.line.biz/en/docs/line-login/integrate-line-login/#scopes)를 참조하십시오.

`email` 권한이 부여되더라도 `scope` 속성에는 `email`이 포함되지 않습니다.

<!-- parameter end -->
<!-- parameter start -->

client_id

String

Access token이 발급된 channel ID

<!-- parameter end -->
<!-- parameter start -->

expires_in

Number

Access token이 만료되기까지 남은 시간(초)입니다.

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

```json
{
  "scope": "profile",
  "client_id": "1440057261",
  "expires_in": 2591659
}
```

<!-- tab end -->

#### Error response 

[Common specifications](https://developers.line.biz/en/reference/line-login/#common-specifications)의 [Status codes](https://developers.line.biz/en/reference/line-login/#status-codes)에 설명된 공통 오류 외에 다음 오류가 발생할 수 있습니다.

| Status code | Description |
| --- | --- |
| 400 Bad Request | 요청에 문제가 있습니다. 다음 원인을 확인하십시오.<ul><li>잘못된 형식의 access token이 지정되었습니다.</li><li>Access token이 만료되었습니다.</li><li>Access token이 무효화되었습니다(예: [Revoke access token](https://developers.line.biz/en/reference/line-login/#revoke-access-token) endpoint 사용).</li></ul> |

_Example error response_

<!-- tab start `json` -->

```json
// If an access token with an invalid format is specified
{
  "error": "invalid_request",
  "error_description": "The access token not JWS"
}

// If the access token has expired
{
  "error": "invalid_request",
  "error_description": "The access token expired"
}

// If the access token has been invalidated (e.g., by using the "revoke access token" endpoint)
{
  "error": "invalid_request",
  "error_description": "The access token revoked"
}
```

<!-- tab end -->

### Refresh access token 

Refresh token을 사용하여 새로운 access token을 얻습니다.

사용자 인증이 완료되면 access token과 함께 refresh token이 반환됩니다.

<!-- note start -->

**Note**

- 이 항목은 LINE Login v2.1 endpoint에 대한 참조입니다. v2.0 endpoint에 대한 내용은 LINE Login v2.0 API reference의 [Refresh access token](https://developers.line.biz/en/reference/line-login-v2/#refresh-access-token)을 참조하십시오.
- 이 방법으로 Messaging API의 channel access token을 갱신할 수 없습니다.

<!-- note end -->

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X POST https://api.line.me/oauth2/v2.1/token \
-H 'Content-Type: application/x-www-form-urlencoded' \
-d 'grant_type=refresh_token&refresh_token={your_refresh_token}&client_id={your_channel_id}&client_secret={your_channel_secret}'
```

<!-- tab end -->

#### HTTP request 

`POST https://api.line.me/oauth2/v2.1/token`

#### Request headers 

<!-- parameter start (props: required) -->

Content-Type

application/x-www-form-urlencoded

<!-- parameter end -->

#### Request body 

<!-- parameter start (props: required) -->

grant_type

String

`refresh_token`

<!-- parameter end -->
<!-- parameter start (props: required) -->

refresh_token

String

재발급할 access token에 해당하는 refresh token입니다. Access token이 발급된 후 최대 90일 동안 유효합니다. Refresh token이 만료되면 사용자에게 다시 로그인하도록 안내하여 새로운 access token을 생성해야 합니다.

<!-- parameter end -->
<!-- parameter start (props: required) -->

client_id

String

Channel ID입니다. [LINE Developers Console](https://developers.line.biz/console/)에서 확인할 수 있습니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="See description") -->

client_secret

String

Channel secret입니다. [LINE Developers Console](https://developers.line.biz/console/)에서 확인할 수 있습니다.

- **App types**가 **Web app**만 있는 채널에는 필수입니다.
- **App types**가 **Mobile app**과 **Web app**인 채널에는 무시됩니다.
- **App types**가 **Mobile app**만 있는 채널에는 무시됩니다.

<!-- parameter end -->

#### Response 

Access token이 성공적으로 갱신되면 새로운 access token과 refresh token이 반환됩니다.

<!-- parameter start -->

access_token

String

Access token입니다. 30일 동안 유효합니다.

<!-- parameter end -->
<!-- parameter start -->

token_type

String

`Bearer`

<!-- parameter end -->
<!-- parameter start -->

refresh_token

String

Access token을 재발급할 때 `refresh_token` 속성에 지정한 refresh token입니다. 새로운 access token을 얻어도 refresh token의 유효 기간은 연장되지 않습니다.

<!-- parameter end -->
<!-- parameter start -->

expires_in

Number

Access token의 유효 기간입니다. API를 호출한 시점부터 만료까지 남은 시간(초)으로 표시됩니다.

<!-- parameter end -->
<!-- parameter start -->

scope

String

Access token을 통해 얻은 권한입니다. Scope에 대한 자세한 내용은 [Scopes](https://developers.line.biz/en/docs/line-login/integrate-line-login/#scopes)를 참조하십시오.

`email` 권한이 부여되더라도 `scope` 속성에는 `email`이 포함되지 않습니다.

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

```json
{
  "token_type": "Bearer",
  "scope": "profile",
  "access_token": "bNl4YEFPI/hjFWhTqexp4MuEw...",
  "expires_in": 2591977,
  "refresh_token": "8iFFRdyxNVNLWYeteMMJ"
}
```

<!-- tab end -->

#### Error response 

Refresh token이 만료된 경우 `400 Bad Request` HTTP 상태 코드와 JSON 응답이 반환됩니다.

_Example error response_

<!-- tab start `json` -->

```json
{
  "error": "invalid_grant",
  "error_description": "invalid refresh token"
}
```

<!-- tab end -->

### Revoke access token 

사용자의 access token을 무효화합니다.

<!-- note start -->

**Note**

- 이 항목은 LINE Login v2.1 endpoint에 대한 참조입니다. v2.0 endpoint에 대한 내용은 LINE Login v2.0 API reference의 [Revoke access token](https://developers.line.biz/en/reference/line-login-v2/#revoke-access-token)을 참조하십시오.
- 이 방법으로 Messaging API의 channel access token을 무효화할 수 없습니다.

<!-- note end -->

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X POST https://api.line.me/oauth2/v2.1/revoke \
-H "Content-Type: application/x-www-form-urlencoded" \
-d "client_id={channel id}&client_secret={channel secret}&access_token={access token}"
```

<!-- tab end -->

#### HTTP request 

`POST https://api.line.me/oauth2/v2.1/revoke`

#### Request headers 

<!-- parameter start (props: required) -->

Content-Type

application/x-www-form-urlencoded

<!-- parameter end -->

#### Request body 

<!-- parameter start (props: required) -->

access_token

String

Access token

<!-- parameter end -->
<!-- parameter start (props: required) -->

client_id

String

Channel ID입니다. [LINE Developers Console](https://developers.line.biz/console/)에서 확인할 수 있습니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="See description") -->

client_secret

String

Channel secret입니다. [LINE Developers Console](https://developers.line.biz/console/)에서 확인할 수 있습니다.

- **App types**가 **Web app**만 있는 채널에는 필수입니다.
- **App types**가 **Mobile app**과 **Web app**인 채널에는 무시됩니다.
- **App types**가 **Mobile app**만 있는 채널에는 무시됩니다.

<!-- parameter end -->

#### Response 

상태 코드 `200`과 빈 응답 본문이 반환됩니다.

### Deauthorize your app to which the user has granted permissions 

사용자를 대신하여 앱의 승인을 해제하고, 사용자가 이전에 부여한 권한을 취소합니다. 자세한 내용은 [LINE Login development guidelines](https://developers.line.biz/en/docs/line-login/development-guidelines/)의 필수 사항인 "[Deauthorize your app when a user unregisters from your app](https://developers.line.biz/en/docs/line-login/development-guidelines/#deauthorize)"를 참조하십시오.

이 endpoint를 사용하여 LIFF 앱과 LINE MINI App의 권한도 취소할 수 있습니다.

사용자가 권한을 부여한 앱의 승인을 직접 해제하는 방법에 대한 자세한 내용은 LINE Login 문서의 [Managing authorized apps](https://developers.line.biz/en/docs/line-login/managing-authorized-apps/)를 참조하십시오.

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X POST https://api.line.me/user/v1/deauthorize \
-H 'Authorization: Bearer {channel access token}' \
-H 'Content-Type: application/json' \
-d '{
    "userAccessToken": "{user access token}"
}'
```

<!-- tab end -->

#### HTTP request 

`POST https://api.line.me/user/v1/deauthorize`

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

다음 유형의 channel access token을 사용할 수 있습니다.

- [Channel access token with a user-specified expiration (Channel access token v2.1)](https://developers.line.biz/en/docs/basics/channel-access-token/#user-specified-expiration)
- [Stateless channel access token](https://developers.line.biz/en/docs/basics/channel-access-token/#stateless-channel-access-token)

Channel access token 발급 방법에 대한 자세한 내용은 LINE Platform 기본 문서의 [Channel access token](https://developers.line.biz/en/docs/basics/channel-access-token/)을 참조하십시오.

<!-- parameter end -->

#### Request body 

<!-- parameter start (props: required) -->

userAccessToken

String

대상 사용자의 access token

<!-- parameter end -->

#### Response 

상태 코드 `204`와 빈 응답 본문이 반환됩니다.

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code | Description |
| --- | --- |
| `400` | 대상 사용자의 access token이 유효하지 않습니다. 다음 원인을 확인하십시오.<ul><li>사용자가 이미 앱의 승인을 해제했습니다.</li><li>API를 통해 이미 사용자를 대신하여 앱의 승인을 해제했습니다.</li></ul> |

_Error response example_

<!-- tab start `json` -->

```json
// If the access token for the target user is invalid (400 Bad Request)
{
  "message": "invalid token"
}
```

<!-- tab end -->

### Verify ID token 

ID token은 사용자에 대한 정보를 담은 JSON web token(JWT)입니다. 공격자가 [ID token](https://developers.line.biz/en/docs/line-login/verify-id-token/#id-tokens)을 위조할 수 있습니다. 이 호출을 사용하여 수신한 ID token이 진짜인지 확인하십시오. 확인된 ID token으로 사용자의 프로필 정보와 이메일을 가져올 수 있습니다.

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X POST 'https://api.line.me/oauth2/v2.1/verify' \
-H 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'id_token=eyJraWQiOiIxNmUwNGQ0ZTU2NzgzYTc5MmRjYjQ2ODRkOD...' \
--data-urlencode 'client_id=1234567890'
```

<!-- tab end -->

#### HTTP request 

`POST https://api.line.me/oauth2/v2.1/verify`

#### Request headers 

<!-- parameter start (props: required) -->

Content-Type

application/x-www-form-urlencoded

<!-- parameter end -->

#### Request body 

<!-- parameter start (props: required) -->

id_token

String

ID token

<!-- parameter end -->
<!-- parameter start (props: required) -->

client_id

String

예상되는 channel ID입니다. LINE Platform이 발급한 채널의 고유 식별자입니다. [LINE Developers Console](https://developers.line.biz/console/)에서 확인할 수 있습니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

nonce

String

예상되는 `nonce` 값입니다. Authorization request에서 제공한 `nonce` 값을 사용하십시오. Authorization request에 `nonce` 값을 지정하지 않았다면 생략하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

user_id

String

예상되는 사용자 ID입니다. 사용자 ID를 가져오는 방법은 [Get user profile](https://developers.line.biz/en/reference/line-login/#get-user-profile)을 참조하십시오.

<!-- parameter end -->

#### Response 

지정한 ID token의 검증에 성공하면 ID token payload가 반환됩니다.

<!-- parameter start -->

iss

String

ID token을 생성한 URL입니다.

<!-- parameter end -->
<!-- parameter start -->

sub

String

ID token이 생성된 사용자 ID입니다.

<!-- parameter end -->
<!-- parameter start -->

aud

String

Channel ID

<!-- parameter end -->
<!-- parameter start -->

exp

Number

ID token의 만료 시간입니다(UNIX time, 초 단위).

<!-- parameter end -->
<!-- parameter start -->

iat

Number

ID token이 생성된 시간입니다(UNIX time, 초 단위).

<!-- parameter end -->
<!-- parameter start -->

auth_time

Number

사용자가 인증된 시간입니다(UNIX time, 초 단위). Authorization request에 `max_age` 값을 지정하지 않은 경우 포함되지 않습니다.

<!-- parameter end -->
<!-- parameter start -->

nonce

String

Authorization URL에 지정된 `nonce` 값입니다. Authorization request에 `nonce` 값을 지정하지 않은 경우 포함되지 않습니다.

<!-- parameter end -->
<!-- parameter start -->

amr

Array of strings

사용자가 사용한 인증 방법의 목록입니다. 특정 조건에서는 payload에 포함되지 않습니다.

다음 중 하나 이상입니다.

- `pwd`: 이메일과 비밀번호로 로그인
- `lineautologin`: LINE 자동 로그인(LINE SDK 사용 포함)
- `lineqr`: QR 코드로 로그인
- `linesso`: 싱글 사인온으로 로그인
- `mfa`: 2단계 인증으로 로그인

<!-- parameter end -->
<!-- parameter start -->

name

String

사용자의 표시 이름입니다. Authorization request에 `profile` scope를 지정하지 않은 경우 포함되지 않습니다.

<!-- parameter end -->
<!-- parameter start -->

picture

String

사용자 프로필 이미지의 URL입니다. Authorization request에 `profile` scope를 지정하지 않은 경우 포함되지 않습니다.

<!-- parameter end -->
<!-- parameter start -->

email

String

사용자의 이메일 주소입니다. Authorization request에 `email` scope를 지정하지 않은 경우 포함되지 않습니다.

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

```json
{
  "iss": "https://access.line.me",
  "sub": "U1234567890abcdef1234567890abcdef",
  "aud": "1234567890",
  "exp": 1504169092,
  "iat": 1504263657,
  "nonce": "0987654asdf",
  "amr": ["pwd"],
  "name": "Taro Line",
  "picture": "https://sample_line.me/aBcdefg123456",
  "email": "taro.line@example.com"
}
```

<!-- tab end -->

#### Error response 

지정한 ID token의 검증에 실패하면 JSON 객체가 반환됩니다.

| error_description | Description |
| --- | --- |
| Invalid IdToken. | ID token의 형식이 잘못되었거나 서명이 유효하지 않습니다. |
| Invalid IdToken Issuer. | ID token이 "https://access.line.me"가 아닌 다른 사이트에서 생성되었습니다. |
| IdToken expired. | ID token이 만료되었습니다. |
| Invalid IdToken Audience. | ID token의 Audience 값이 요청에 지정한 `client_id`와 다릅니다. |
| Invalid IdToken Nonce. | ID token의 Nonce 값이 요청에 지정한 `nonce`와 다릅니다. |
| Invalid IdToken Subject Identifier. | ID token의 SubjectIdentifier 값이 요청에 지정한 `user_id`와 다릅니다. |

_Example error response_

<!-- tab start `json` -->

```json
{
  "error": "invalid_request",
  "error_description": "Invalid IdToken."
}
```

<!-- tab end -->

### Get user information 

사용자의 ID, 표시 이름, 프로필 이미지를 가져옵니다. 이 endpoint에 필요한 access token의 scope는 [Get user profile](https://developers.line.biz/en/reference/line-login/#get-user-profile) endpoint와 다릅니다.

기본 프로필 정보만 가져올 수 있습니다. 사용자의 [subprofile](https://developers.line.biz/en/glossary/#subprofile)은 가져올 수 없습니다.

<!-- note start -->

**Note**

`openid` scope가 포함된 access token이 필요합니다. 자세한 내용은 LINE Login 문서의 [Authenticating users and making authorization requests](https://developers.line.biz/en/docs/line-login/integrate-line-login/#making-an-authorization-request)와 [Scopes](https://developers.line.biz/en/docs/line-login/integrate-line-login/#scopes)를 참조하십시오.

<!-- note end -->

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X GET https://api.line.me/oauth2/v2.1/userinfo \
-H 'Authorization: Bearer {access token}'
```

<!-- tab end -->

#### HTTP request 

`GET https://api.line.me/oauth2/v2.1/userinfo`

`POST https://api.line.me/oauth2/v2.1/userinfo`

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{access token}`

<!-- parameter end -->

#### Response 

<!-- parameter start -->

sub

String

User ID

<!-- parameter end -->
<!-- parameter start -->

name

String

사용자의 표시 이름입니다. Authorization request에 `profile` scope를 지정하지 않은 경우 포함되지 않습니다.

<!-- parameter end -->
<!-- parameter start -->

picture

String

사용자 프로필 이미지의 URL입니다. Authorization request에 `profile` scope를 지정하지 않은 경우 포함되지 않습니다.

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

```json
{
  "sub": "U1234567890abcdef1234567890abcdef",
  "name": "Taro Line",
  "picture": "https://profile.line-scdn.net/0h8pWWElvzZ19qLk3ywQYYCFZraTIdAGEXEhx9ak56MDxDHiUIVEEsPBspMG1EGSEPAk4uP01t0m5G"
}
```

<!-- tab end -->

## Profile 

### Get user profile 

사용자의 ID, 표시 이름, 프로필 이미지, 상태 메시지를 가져옵니다. 이 endpoint에 필요한 access token의 scope는 [Get user information](https://developers.line.biz/en/reference/line-login/#userinfo) endpoint와 다릅니다.

기본 프로필 정보만 가져올 수 있습니다. 사용자의 [subprofile](https://developers.line.biz/en/glossary/#subprofile)은 가져올 수 없습니다.

<!-- note start -->

**Note**

`profile` scope가 포함된 access token이 필요합니다. 자세한 내용은 LINE Login 문서의 [Authenticating users and making authorization requests](https://developers.line.biz/en/docs/line-login/integrate-line-login/#making-an-authorization-request)와 [Scopes](https://developers.line.biz/en/docs/line-login/integrate-line-login/#scopes)를 참조하십시오.

<!-- note end -->

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X GET https://api.line.me/v2/profile \
-H 'Authorization: Bearer {access token}'
```

<!-- tab end -->

#### HTTP request 

`GET https://api.line.me/v2/profile`

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{access token}`

<!-- parameter end -->

#### Response 

<!-- parameter start -->

userId

String

User ID

<!-- parameter end -->
<!-- parameter start -->

displayName

String

사용자의 표시 이름

<!-- parameter end -->
<!-- parameter start -->

pictureUrl

String

프로필 이미지 URL입니다. HTTPS URL입니다. 사용자가 프로필 이미지를 설정한 경우에만 응답에 포함됩니다.

프로필 이미지 썸네일:

URL 끝에 다음 접미사 중 하나를 추가하면 사용자 프로필 이미지의 썸네일 버전을 가져올 수 있습니다.

| Suffix   | Thumbnail size |
| -------- | -------------- |
| `/large` | 200 x 200      |
| `/small` | 51 x 51        |

예: `https://profile.line-scdn.net/abcdefghijklmn/large`

<!-- parameter end -->
<!-- parameter start -->

statusMessage

String

사용자의 상태 메시지입니다. 사용자가 상태 메시지를 설정하지 않은 경우 응답에 포함되지 않습니다.

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

```json
{
  "userId": "U4af4980629...",
  "displayName": "Brown",
  "pictureUrl": "https://profile.line-scdn.net/abcdefghijklmn",
  "statusMessage": "Hello, LINE!"
}
```

<!-- tab end -->

## Friendship status 

### Get friendship status 

사용자와 LINE Login 채널에 연결된 LINE Official Account 간의 친구 상태를 가져옵니다.

Add friend option 사용 방법에 대한 자세한 내용은 LINE Login 문서의 [Add a LINE Official Account as a friend when logged in (add friend option)](https://developers.line.biz/en/docs/line-login/link-a-bot/)을 참조하십시오.

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X GET https://api.line.me/friendship/v1/status \
-H 'Authorization: Bearer {access token}'
```

<!-- tab end -->

#### HTTP request 

`GET https://api.line.me/friendship/v1/status`

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{access token}`

<!-- parameter end -->

<!-- note start -->

**Note**

`profile` scope가 포함된 access token이 필요합니다. 자세한 내용은 LINE Login 문서의 [Authenticating users and making authorization requests](https://developers.line.biz/en/docs/line-login/integrate-line-login/#making-an-authorization-request)와 [Scopes](https://developers.line.biz/en/docs/line-login/integrate-line-login/#scopes)를 참조하십시오.

<!-- note end -->

#### Response 

<!-- parameter start -->

friendFlag

Boolean

- `true`: 사용자가 LINE Official Account를 친구로 추가했고 차단하지 않았습니다.
- 그 외의 경우 `false`입니다.

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

```json
{
  "friendFlag": true
}
```

<!-- tab end -->
