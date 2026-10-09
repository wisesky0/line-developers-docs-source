# LINE Login API v2.0 reference

<!-- warning start -->

**LINE Login v2.0 is deprecated**

이 페이지에는 LINE Login의 이전 버전인 v2.0 문서가 포함되어 있습니다. LINE Login v2.0은 [deprecated](https://developers.line.biz/en/glossary/#deprecated) 상태이며 [end-of-life](https://developers.line.biz/en/glossary/#end-of-life) 날짜는 아직 정해지지 않았습니다. 따라서 현재 버전인 LINE Login v2.1을 사용하시기를 권장합니다. End-of-life 공지와 실제 end-of-life 사이에는 일정한 유예 기간이 있습니다. 자세한 내용은 [LINE Login versions](https://developers.line.biz/en/docs/line-login/overview/#versions)를 참조하십시오.

<!-- warning end -->

## Common specifications

### Rate limits 

짧은 시간 안에 LINE Login API에 대량의 요청을 보내 LINE Platform의 운영에 영향을 준다고 판단되면 요청이 일시적으로 제한될 수 있습니다. 부하 테스트를 포함하여 어떤 목적으로도 대량의 요청을 보내지 마십시오.

<!-- tip start -->

**On rate limit thresholds**

LINE Login API의 rate limit 임계값은 공개되어 있지 않습니다.

<!-- tip end -->

### Status codes 

API 호출 후 다음 HTTP 상태 코드가 반환됩니다. 별도로 명시되지 않은 경우 [HTTP status code specification](https://datatracker.ietf.org/doc/html/rfc7231#section-6)을 따릅니다.

Status code | Description
---- | ----
200 OK | 요청 성공
400 Bad Request | 요청에 문제가 있습니다. 요청 파라미터와 JSON 형식을 확인하십시오.
401 Unauthorized | Authorization 헤더가 올바른지 확인하십시오.
403 Forbidden | API를 사용할 권한이 없습니다. 계정 또는 플랜이 API 사용 권한을 가지고 있는지 확인하십시오.
413 Payload Too Large | 요청이 최대 크기인 2MB를 초과합니다. 요청 크기를 2MB 미만으로 줄인 후 다시 시도하십시오.
429 Too Many Requests | 대량의 요청으로 [rate-limit](https://developers.line.biz/en/reference/line-login-v2/#rate-limits)을 초과하여 요청이 일시적으로 제한되었습니다.
500 Internal Server Error | API 서버에서 일시적인 오류가 발생했습니다.

## OAuth

### Issue access token 

Access token을 발급합니다.

LINE Login API를 통해 관리되는 access token은 앱이 LINE Platform에 저장된 사용자 데이터(사용자 ID, 표시 이름, 프로필 이미지, 상태 메시지 등)에 접근할 수 있는 권한을 부여받았음을 나타냅니다.

LINE Login API를 호출할 때는 이전 응답에서 전달받은 access token 또는 refresh token을 제공해야 합니다.

<!-- note start -->

**Note**

이 항목은 LINE Login v2.0 endpoint에 대한 설명입니다. v2.1 endpoint에 대한 내용은 v2.1 API reference의 [Issue access token](https://developers.line.biz/en/reference/line-login/#issue-access-token)을 참조하십시오.

<!-- note end -->

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X POST https://api.line.me/v2/oauth/accessToken \
-H 'Content-Type: application/x-www-form-urlencoded' \
-d 'grant_type=authorization_code' \
-d 'code=b5fd32eacc791df' \
-d 'redirect_uri=https%3A%2F%2Fexample.com%2Fauth' \
-d 'client_id=12345' \
-d 'client_secret=d6524edacc8742aeedf98f'
```

<!-- tab end -->

#### HTTP request 

`POST https://api.line.me/v2/oauth/accessToken`

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

LINE Platform에서 받은 [Authorization code](https://developers.line.biz/en/docs/line-login/integrate-line-login-v2/#receiving-the-authorization-code)

<!-- parameter end -->
<!-- parameter start (props: required) -->
redirect_uri
String

Callback URL

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
refresh_token
String

새로운 access token을 얻는 데 사용되는 토큰(refresh token)입니다. Access token이 만료된 후 최대 10일 동안 유효합니다.

자세한 내용은 [Refresh access token](https://developers.line.biz/en/reference/line-login-v2/#refresh-access-token)을 참조하십시오.

<!-- parameter end -->
<!-- parameter start -->
scope
String

Access token에 부여된 권한입니다.

- `P`: 사용자의 프로필 정보에 접근할 권한이 있습니다.

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
    "access_token": "bNl4YEFPI/hjFWhTqexp4MuEw5YPs7qhr6dJDXKwNPuLka...",
    "expires_in": 2591977,
    "refresh_token": "8iFFRdyxNVNLWYeteMMJ",
    "scope": "P",
    "token_type": "Bearer"
}
```

<!-- tab end -->

### Verify access token validity 

Access token이 유효한지 확인합니다.

Access token으로 사용자를 등록하고 로그인하는 방법에 대한 보안 권장 사항은 LINE Login 문서의 [Verify access tokens](https://developers.line.biz/en/docs/line-login/managing-access-tokens-v2/#verify-access-token)을 참조하십시오.

<!-- note start -->

**Note**

이 항목은 LINE Login v2.0 endpoint에 대한 참조입니다. v2.1 endpoint에 대한 내용은 LINE Login v2.1 API reference의 [Verify access token validity](https://developers.line.biz/en/reference/line-login/#verify-access-token)를 참조하십시오.

<!-- note end -->

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X POST https://api.line.me/v2/oauth/verify \
-H 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'access_token=bNl4YEFPI/hjFWhTqexp4MuEw5YPs7qhr6dJDXKwNPuLka...'
```

<!-- tab end -->

#### HTTP request 

`POST https://api.line.me/v2/oauth/verify`

#### Request headers 

<!-- parameter start (props: required) -->
Content-Type

application/x-www-form-urlencoded

<!-- parameter end -->

#### Request body 

<!-- parameter start -->
access_token
String

Access token

<!-- parameter end -->

#### Response 

Access token이 유효하면 다음 정보를 담은 JSON 객체와 함께 `200 OK` 상태 코드가 반환됩니다.

<!-- parameter start -->
scope
String

Access token에 부여된 권한입니다.

- `P`: 사용자의 프로필 정보에 접근할 권한이 있습니다.

<!-- parameter end -->
<!-- parameter start -->
client_id
String

Access token이 발급된 channel ID입니다.

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
   "scope":"P",
   "client_id":"1350031035",
   "expires_in":2591965
}
```

<!-- tab end -->

#### Error response 

Access token이 만료된 경우 JSON 객체와 함께 `400 Bad Request` 상태 코드가 반환됩니다.

_Example error response_

<!-- tab start `json` -->

```json
{
    "error": "invalid_request",
    "error_description": "access_token invalid"
}
```

<!-- tab end -->

### Refresh access token 

Refresh token을 사용하여 새로운 access token을 얻습니다. Refresh token은 사용자가 앱을 승인할 때 access token과 함께 반환됩니다.

<!-- note start -->

**Note**

- 이 항목은 LINE Login v2.0 endpoint에 대한 참조입니다. v2.1 endpoint에 대한 내용은 LINE Login v2.1 API reference의 [Refresh access token](https://developers.line.biz/en/reference/line-login/#refresh-access-token)을 참조하십시오.
- 이 방법으로 Messaging API의 channel access token을 갱신할 수 없습니다.

<!-- note end -->

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X POST https://api.line.me/v2/oauth/accessToken \
-H 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'grant_type=refresh_token' \
--data-urlencode 'client_id={channel ID}' \
--data-urlencode 'client_secret={channel secret}' \
--data-urlencode 'refresh_token={refresh token}'
```

<!-- tab end -->

#### HTTP request 

`POST https://api.line.me/v2/oauth/accessToken`

#### Request headers 

<!-- parameter start (props: required) -->
Content-Type

application/x-www-form-urlencoded

<!-- parameter end -->

#### Request body 

<!-- parameter start -->
grant_type
String

`refresh_token`

<!-- parameter end -->
<!-- parameter start -->
refresh_token
String

재발급할 access token에 해당하는 refresh token입니다. Access token이 만료된 후 최대 10일 동안 유효합니다. Refresh token이 만료되면 사용자에게 다시 로그인하도록 안내하여 새로운 access token을 생성해야 합니다.

<!-- parameter end -->
<!-- parameter start -->
client_id
String

Channel ID입니다. [LINE Developers Console](https://developers.line.biz/console/)에서 확인할 수 있습니다.

<!-- parameter end -->
<!-- parameter start -->
client_secret
String

Channel secret입니다. [LINE Developers Console](https://developers.line.biz/console/)에서 확인할 수 있습니다.

<!-- parameter end -->

#### Response 

Access token이 성공적으로 갱신되면 새로운 access token과 refresh token이 반환됩니다.

<!-- parameter start -->
token_type
String

`Bearer`

<!-- parameter end -->
<!-- parameter start -->
scope
String

Access token에 부여된 권한입니다.

- `P`: 사용자의 프로필 정보에 접근할 권한이 있습니다.

<!-- parameter end -->
<!-- parameter start -->
access_token
String

Access token

<!-- parameter end -->
<!-- parameter start -->
expires_in
Number

Access token이 만료되기까지 남은 시간(초)입니다.

<!-- parameter end -->
<!-- parameter start -->
refresh_token
String

새로운 access token을 얻는 데 사용되는 토큰(refresh token)입니다. Access token이 만료된 후 최대 10일 동안 유효합니다.

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

```json
{
   "token_type":"Bearer",
   "scope":"P",
   "access_token":"bNl4YEFPI/hjFWhTqexp4MuEw...",
   "expires_in":2591977,
   "refresh_token":"8iFFRdyxNVNLWYeteMMJ"
}
```

<!-- tab end -->

#### Error response 

Refresh token이 만료된 경우 JSON 객체와 함께 `400 Bad Request` 상태 코드가 반환됩니다.

_Example error response_

<!-- tab start `json` -->

```json
{
    "error": "invalid_grant",
    "error_description": "invalid refresh_token"
}
```

<!-- tab end -->

### Revoke access token 

사용자의 access token을 무효화합니다.

<!-- note start -->

**Note**

- 이 항목은 LINE Login v2.0 endpoint에 대한 참조입니다. v2.1 endpoint에 대한 내용은 LINE Login v2.1 API reference의 [Revoke access token](https://developers.line.biz/en/reference/line-login/#revoke-access-token)을 참조하십시오.
- 이 방법으로 Messaging API의 channel access token을 무효화할 수 없습니다.

<!-- note end -->

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X POST https://api.line.me/v2/oauth/revoke \
-H 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'refresh_token={refresh token}'
```

<!-- tab end -->

#### HTTP request 

`POST https://api.line.me/v2/oauth/revoke`

#### Request headers 

<!-- parameter start (props: required) -->
Content-Type

application/x-www-form-urlencoded

<!-- parameter end -->

#### Request body 

<!-- parameter start -->
refresh_token
String

무효화할 access token에 해당하는 refresh token입니다.

<!-- parameter end -->

#### Response 

상태 코드 `200`과 빈 응답 본문이 반환됩니다.

## Profile

### Get user profile 

사용자의 ID, 표시 이름, 프로필 이미지, 상태 메시지를 가져옵니다.

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

사용자 ID

<!-- parameter end -->
<!-- parameter start -->
displayName
String

사용자의 표시 이름

<!-- parameter end -->
<!-- parameter start -->
pictureUrl
String

프로필 이미지 URL입니다. HTTPS URL입니다. 사용자가 프로필 이미지를 설정하지 않은 경우 응답에 포함되지 않습니다.

프로필 이미지 썸네일:

URL 끝에 다음 접미사 중 하나를 추가하면 사용자 프로필 이미지의 썸네일 버전을 가져올 수 있습니다.

Suffix | Thumbnail size
-------- | ------
`/large` | 200 x 200
`/small` | 51 x 51

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
  "userId":"U4af4980629...",
  "displayName":"Brown",
  "pictureUrl":"https://profile.line-scdn.net/abcdefghijklmn",
  "statusMessage":"Hello, LINE!"
}
```

<!-- tab end -->
