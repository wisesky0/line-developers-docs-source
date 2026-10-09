# Options for corporate customers API reference

<!-- note start -->

**Use of optional functions requires an application**

이 문서에 설명된 기능은 필요한 신청서를 제출한 법인 사용자만 사용할 수 있습니다. LINE Official Account에서 이 기능을 사용하려면 담당 영업 대표에게 문의하거나 [영업 파트너](https://www.lycbiz.com/jp/partner/sales/)에게 문의하십시오.

<!-- note end -->

<!-- table of contents -->

## Common specifications 

### Status codes 

자세한 내용은 Messaging API reference의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)를 참조하십시오.

### Response headers 

Options for corporate customers API 응답에는 다음 HTTP 헤더가 포함됩니다.

| Response header   | Description                                   |
| ----------------- | --------------------------------------------- |
| x-line-request-id | 요청 ID입니다. 요청마다 ID가 발급됩니다. |

## Mission Sticker API 

Mission sticker는 특정 목표를 달성한 사용자에게 제공됩니다. 스티커를 보상으로 제공하여 사용자가 "ID 정보 연동", "회원 등록", "설문조사 응답"을 하도록 유도할 수 있습니다.

### Provide mission stickers to the users 

특정 목표를 달성한 사용자가 mission sticker를 다운로드할 수 있도록 권한을 부여합니다.

_Example request_

<!-- tab start `shell` -->

```sh
curl -X POST https://api.line.me/shop/v3/mission \
-H "Content-Type: application/json" \
-H "Authorization: Bearer {channel access token}" \
-d '{
    "to": "U4af4980629...",
    "productType": "STICKER",
    "productId": "0000",
    "sendPresentMessage": false
}'
```

<!-- tab end -->

#### HTTP request 

`POST https://api.line.me/shop/v3/mission`

#### Request headers 

<!-- parameter start (props: required) -->

Content-Type

application/json

<!-- parameter end -->
<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->

#### Request body 

<!-- parameter start (props: required) -->

to

String

다운로드 권한을 부여할 사용자의 사용자 ID

<!-- parameter end -->
<!-- parameter start (props: required) -->

productType

String

`STICKER`

<!-- parameter end -->
<!-- parameter start (props: required) -->

productId

String

스티커 세트의 패키지 ID

<!-- parameter end -->
<!-- parameter start (props: required) -->

sendPresentMessage

Boolean

`false`

<!-- parameter end -->

#### Response 

상태 코드 `200`과 빈 응답 본문이 반환됩니다.

#### Error response 

오류가 발생하면 오류에 해당하는 HTTP 상태 코드와 다음 JSON 데이터가 응답 본문에 반환됩니다.

<!-- parameter start -->

message

String

오류 정보를 담은 메시지입니다. 자세한 내용은 [Error messages](https://developers.line.biz/en/reference/partner-docs/#send-mission-stickers-v3-error-messages)를 참조하십시오.

<!-- parameter end -->

_Error response example_

<!-- tab start `json` -->

```json
// If you specify an invalid user ID (400 Bad Request)
{
  "message": "invalid request"
}
```

<!-- tab end -->

##### Error messages 

주요 오류의 HTTP 상태 코드와 JSON 데이터의 `message` 속성에 포함되는 오류 메시지는 다음과 같습니다.

| Code | Message | Description |
| --- | --- | --- |
| `400` | invalid request | `to`에 지정한 대상 사용자 ID가 올바르지 않습니다. |
| `400` | illegal argument | `productId`에 지정한 스티커 세트가 mission sticker로 설정되어 있지 않습니다. |
| `400` | not in sales period | `productId`에 지정한 스티커 세트가 유효 기간을 벗어났습니다. |
| `400` | sticker set not available for channel | 채널에 `productId`에 지정한 스티커 세트를 사용할 권한이 없습니다. |
| `400` | not available | 다음 중 하나의 이유로 스티커를 부여할 수 없습니다. <ul><li>`productId`에 지정한 스티커 세트를 `to`에 지정한 대상 사용자의 국가 또는 지역에서 구매할 수 없습니다.</li><li>`to`에 지정한 대상 사용자의 기기가 `productId`에 지정한 스티커 세트를 지원하지 않습니다.</li><li>`to`에 지정한 대상 사용자가 사용하는 LINE 앱의 버전이 `productId`에 지정한 스티커 세트를 지원하지 않습니다.</li></ul> |
| `403` | not allowed to use the API | 채널에 mission sticker API에 필요한 권한이 부여되지 않았습니다. |
| `404` | not found | `productId`에 지정한 스티커 세트가 존재하지 않습니다. |
| `500` | internal error | 내부 서버 오류가 발생했습니다. 잠시 기다린 후 다시 시도하십시오. |
| `502` | upstream error | 내부 네트워크 오류가 발생했습니다. 잠시 기다린 후 다시 시도하십시오. |

## Mark as read API (old) 

### Mark messages from users as read 

특정 사용자가 보낸 모든 메시지에 "Read"를 표시할 수 있습니다.

<!-- tip start -->

**Use the new endpoint to mark as read**

Mark as read API(old)는 계속 사용할 수 있습니다. 하지만 앞으로 사용자의 메시지를 읽음으로 표시하는 기능을 새로 구현한다면 Messaging API의 [Mark messages as read](https://developers.line.biz/en/reference/messaging-api/#mark-as-read) endpoint를 사용하십시오. "Mark messages as read" endpoint는 신청이 필요하지 않으며 chat 기능과 함께 사용할 수 있습니다.

<!-- tip end -->

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X POST https://api.line.me/v2/bot/message/markAsRead \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer {channel_access_token}' \
-d '{
    "chat": {
        "userId": "Uxxxxxxxxxxxxxxxxxx"
    }
}'
```

<!-- tab end -->

#### HTTP request 

`POST https://api.line.me/v2/bot/message/markAsRead`

#### Rate limit 

초당 2,000건의 요청

#### Request headers 

<!-- parameter start (props: required) -->

Content-Type

application/json

<!-- parameter end -->
<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->

#### Request body 

<!-- parameter start (props: required) -->

chat.userId

String

대상 사용자의 사용자 ID

<!-- parameter end -->

#### Response 

상태 코드 `200`과 빈 JSON 객체가 반환됩니다.

_Example response_

<!-- tab start `json` -->

```json
{}
```

<!-- tab end -->

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code  | Description                      |
| ----- | -------------------------------- |
| `400` | 잘못된 사용자 ID를 지정했습니다. |

자세한 내용은 Messaging API reference의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Example error response_

<!-- tab start `json` -->

```json
// If you specify an invalid user ID (400 Bad Request)
{
  "message": "The property, 'chat.chatId', in the request body is invalid (line: -, column: -)"
}
```

<!-- tab end -->

## Module 

### Attach by operation of the module channel provider 

Module channel을 LINE Official Account에 연결(attach)합니다. 연결하려면 LINE Official Account 관리자에게 인증을 요청하여 authorization code를 얻어야 합니다. Module 인증 흐름에 대한 자세한 내용은 module 문서의 [Attach Module Channel](https://developers.line.biz/en/docs/partner-docs/module-technical-attach-channel/)을 참조하십시오.

이 API를 사용할 때는 `Authorization` 헤더 또는 요청 본문을 사용하여 module channel의 channel ID와 channel secret을 지정해야 합니다.

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X POST https://manager.line.biz/module/auth/v1/token \
-H 'Content-Type: application/x-www-form-urlencoded' \
-d 'grant_type=authorization_code' \
-d 'code=1234567890abcde' \
--data-urlencode 'redirect_uri=https://example.com/auth?key=value' \
-d 'code_verifier=ayjtZgTunh96nHCvgLEiXzqVQOOC0SwMRs39bh1l5dx' \
-d 'client_id=1234567890' \
-d 'client_secret=1234567890abcdefghij1234567890ab' \
-d 'region=JP' \
-d 'basic_search_id=@linedevelopers' \
-d 'scope=message%3Asend%20message%3Areceive' \
-d 'brand_type=premium'
```

<!-- tab end -->

#### HTTP request 

`POST https://manager.line.biz/module/auth/v1/token`

#### Request headers 

<!-- parameter start (props: required) -->

Content-Type

`application/x-www-form-urlencoded`

<!-- parameter end -->
<!-- parameter start (props: optional) -->

Authorization

`Basic {base64({Channel ID}:{Channel Secret})}`

`{base64({Channel ID}:{Channel Secret})}`에는 "Module Channel ID"와 "Module Channel Secret"을 `:`로 연결한 후 Base64로 인코딩한 문자열을 지정하십시오. Module channel의 channel ID와 channel secret은 [LINE Developers Console](https://developers.line.biz/console/)에서 확인할 수 있습니다.

요청 본문에서 `client_id`와 `client_secret`을 사용하는 대신 이 헤더를 사용하여 module channel의 channel ID와 channel secret을 지정할 수 있습니다.

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

LINE Platform에서 받은 [Authorization code](https://developers.line.biz/en/docs/partner-docs/module-technical-attach-channel/#receive-authorization-code)입니다.

<!-- parameter end -->
<!-- parameter start (props: required) -->

redirect_uri

String

[인증 및 권한 부여를 위한 URL](https://developers.line.biz/en/docs/partner-docs/module-technical-attach-channel/#request-auth-from-line-oa-admin-query-parameters)에 지정한 `redirect_uri`를 지정하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

code_verifier

String

Authorization code 가로채기 공격에 대응하기 위해 OAuth 2.0 확장 사양에 정의된 PKCE(Proof Key for Code Exchange)를 사용하는 경우 지정하십시오.

[RFC 7636](https://datatracker.ietf.org/doc/html/rfc7636)을 준수합니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

client_id

String

`Authorization` 헤더를 사용하는 대신 이 파라미터로 module channel의 channel ID를 지정할 수 있습니다. Module channel의 channel ID는 [LINE Developers Console](https://developers.line.biz/console/)에서 확인할 수 있습니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

client_secret

String

`Authorization` 헤더를 사용하는 대신 이 파라미터로 module channel의 channel secret을 지정할 수 있습니다. Module channel의 channel secret은 [LINE Developers Console](https://developers.line.biz/console/)에서 확인할 수 있습니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

region

String

[인증 및 권한 부여를 위한 URL](https://developers.line.biz/en/docs/partner-docs/module-technical-attach-channel/#request-auth-from-line-oa-admin-query-parameters)에서 `region` 값을 지정했다면 같은 값을 지정하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

basic_search_id

String

인증 및 권한 부여를 위한 URL에서 `basic_search_id` 값을 지정했다면 같은 값을 지정하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

scope

String

인증 및 권한 부여를 위한 URL에서 `scope` 값을 지정했다면 같은 값을 지정하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

brand_type

String

인증 및 권한 부여를 위한 URL에서 `brand_type` 값을 지정했다면 같은 값을 지정하십시오.

<!-- parameter end -->

#### Response 

성공하면 상태 코드 `200`과 다음 정보를 담은 JSON 객체가 반환됩니다.

<!-- parameter start -->

bot_id

String

LINE Official Account bot의 사용자 ID입니다.

Bot의 사용자 ID는 [Messaging API](https://developers.line.biz/en/reference/messaging-api/)나 [Acquire Control API](https://developers.line.biz/en/reference/partner-docs/#acquire-control-api)를 호출할 때 사용됩니다.

<!-- note start -->

**Note**

Bot의 사용자 ID는 Messaging API 채널의 [LINE Developers Console](https://developers.line.biz/console/)에서 **Basic Settings** 탭에 표시되는 **Your user ID**와 다릅니다.

<!-- note end -->

<!-- parameter end -->
<!-- parameter start -->

scope

String

LINE Official Account 관리자가 부여한 권한(scope)입니다.

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

```json
{
  "bot_id": "U45c5c51f0050ef0f0ee7261d57fd3c56",
  "scopes": [
    "message:send",
    "message:receive"
  ]
}
```

<!-- tab end -->

#### Error response 

다음 HTTP 상태 코드가 반환됩니다.

- `400 Bad Request`
- `403 Forbidden`

### Unlink (detach) the module channel by the operation of the module channel administrator 

Module channel 관리자가 Detach API를 호출하여 module channel을 LINE Official Account에서 분리(detach)합니다.

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X POST https://api.line.me/v2/bot/channel/detach \
-H 'Content-Type:application/json' \
-H 'Authorization: Bearer {channel access token}' \
-d '{"botId":"U45c5c51f0050ef0f0ee7261d57fd3c56"}'
```

<!-- tab end -->

#### HTTP request 

`POST https://api.line.me/v2/bot/channel/detach`

#### Rate limit 

초당 2,000건의 요청

#### Request headers 

<!-- parameter start (props: required) -->

Content-Type

`application/json`

<!-- parameter end -->
<!-- parameter start (props: required) -->

Authorization

`Bearer {channel access token}`

`{channel access token}`에는 module channel의 channel access token을 지정하십시오.

<!-- parameter end -->

#### Request body 

<!-- parameter start (props: required) -->

botId

String

Module channel에 연결된 LINE Official Account bot의 사용자 ID입니다.

Bot의 사용자 ID는 [Attach by operation of the module channel provider](https://developers.line.biz/en/reference/partner-docs/#link-attach-by-operation-module-channel-provider) 응답 또는 [Attached event](https://developers.line.biz/en/reference/partner-docs/#attached-event)에서 얻을 수 있습니다.

<!-- parameter end -->

#### Response 

성공하면 `200` 상태 코드가 반환됩니다.

#### Error Response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code | Description |
| --- | --- |
| `400` | Module channel의 연결을 해제(detach)할 수 없습니다. 다음 원인을 확인하십시오.<ul><li>잘못된 LINE Official Account bot의 사용자 ID를 지정했습니다.</li><li>존재하지 않는 LINE Official Account bot을 지정했습니다.</li><li>Module channel이 연결(attach)되어 있지 않습니다.</li><li>Module channel이 아닌 채널에 channel access token을 지정했습니다.</li></ul> |

자세한 내용은 Messaging API reference의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Example error response_

<!-- tab start `json` -->

```json
// If you specify an invalid user ID of the LINE Official Account bot (400 Bad Request)
{
  "message": "user/group/room Id is not available."
}

// If the module channel isn't linked (attached) (400 Bad Request)
{
  "message": "Specified channel is not detachable"
}
```

<!-- tab end -->

### Acquire Control API 

Standby Channel이 주도권(Chat Control)을 가져가려면 Acquire Control API를 호출합니다.

이전에 Active Channel이었던 채널은 자동으로 Standby Channel로 전환됩니다.

<!-- warning start -->

**Warning**

현재 제공되는 module 구조에서는 이 API를 호출할 필요가 없습니다. 따라서 이 API의 구현은 선택 사항입니다.

이 API는 예기치 않은 문제로 chat 주도권이 전환될 때만 사용됩니다.

<!-- warning end -->

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X POST https://api.line.me/v2/bot/chat/{chatId}/control/acquire \
-H 'Content-Type:application/json' \
-H 'Authorization: Bearer {channel access token}' \
-H 'Header specifying the bot user ID:xxxxxx' \
-d '{"expired":true,"ttl":3600}'
```

<!-- tab end -->

#### HTTP request 

`POST https://api.line.me/v2/bot/chat/{chatId}/control/acquire`

#### Rate limit 

초당 2,000건의 요청

#### Request headers 

<!-- parameter start (props: required) -->

Content-Type

`application/json`

<!-- parameter end -->
<!-- parameter start (props: required) -->

Authorization

`Bearer {channel access token}`

`{channel access token}`에는 module channel의 channel access token을 지정하십시오.

<!-- parameter end -->
<!-- parameter start (props: required) -->

Header specifying the bot's user ID

Module channel에 연결된 LINE Official Account bot의 사용자 ID입니다.

Bot의 사용자 ID는 [Attach by operation of the module channel provider](https://developers.line.biz/en/reference/partner-docs/#link-attach-by-operation-module-channel-provider) 응답 또는 [Attached event](https://developers.line.biz/en/reference/partner-docs/#attached-event)에서 얻을 수 있습니다.

<!-- note start -->

**The specific header will be provided when after participation**

이 헤더의 이름(파라미터 이름)은 [LINE Marketplace](https://line-marketplace.com/jp/inquiry)에 참여한 고객에게만 공개됩니다(일본어만 제공).

<!-- note end -->

<!-- parameter end -->

#### Path parameter 

<!-- parameter start (props: required) -->

chatId

`userId`, `roomId` 또는 `groupId`

<!-- parameter end -->

#### Request body 

<!-- parameter start (props: optional) -->

expired

Boolean

- `True`: 제한 시간(ttl)이 지나면 주도권(Chat Control)이 Primary Channel로 돌아갑니다. (기본값)
- `False`: 제한 시간이 없으며 주도권(Chat Control)은 시간이 지나도 변경되지 않습니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

ttl

Number

주도권(Chat Control)이 Primary Channel로 돌아가기까지의 시간(module channel이 Active Channel 상태를 유지하는 시간)입니다. 단위는 초입니다. 최대값은 1년(3600 \* 24 \* 365)입니다. 기본값은 `3600`(1시간)입니다.

\* `expired` 값이 `false`이면 무시됩니다.

<!-- parameter end -->

#### Response 

성공하면 200 상태 코드가 반환됩니다.

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code | Description |
| --- | --- |
| `400` | `chatId` 파라미터에 잘못된 ID를 지정했습니다. |
| `404` | 주도권(Chat Control)을 가져올 수 없습니다. 다음 원인을 확인하십시오.<ul><li>Module에 연결된 LINE Official Account를 친구로 추가하지 않은 사용자를 지정했습니다.</li><li>Module에 연결된 LINE Official Account가 참여하지 않은 그룹을 지정했습니다.</li><li>Module에 연결된 LINE Official Account가 참여하지 않은 다인 채팅을 지정했습니다.</li></ul> |
| `423` | 다른 채널이 일정 시간(몇 초 정도) 동안 주도권(Chat Control)을 이미 가져갔습니다. |

자세한 내용은 Messaging API reference의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Example error response_

<!-- tab start `json` -->

```json
// If you specfy an invalid ID is specified in the chatId parameter (400 Bad Request)
{
  "message": "The value for the 'chatId' parameter is invalid"
}
```

<!-- tab end -->

### Release Control API 

Active Channel의 주도권(Chat Control)을 Primary Channel로 되돌리려면 Release Control API를 호출합니다.

<!-- warning start -->

**Warning**

현재 제공되는 module 구조에서는 이 API를 호출할 필요가 없습니다. 따라서 이 API의 구현은 선택 사항입니다.

이 API는 예기치 않은 문제로 chat 주도권이 전환될 때만 사용됩니다.

<!-- warning end -->

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X POST https://api.line.me/v2/bot/chat/{chatId}/control/release \
-H 'Content-Type:application/json' \
-H 'Authorization: Bearer {channel access token}' \
-H 'Header specifying the bot user ID:xxxxxx'
```

<!-- tab end -->

#### HTTP request 

`POST https://api.line.me/v2/bot/chat/{chatId}/control/release`

#### Rate limit 

초당 2,000건의 요청

#### Request headers 

<!-- parameter start (props: required) -->

Content-Type

`application/json`

<!-- parameter end -->
<!-- parameter start (props: required) -->

Authorization

`Bearer {channel access token}`

`{channel access token}`에는 module channel의 channel access token을 지정하십시오.

<!-- parameter end -->
<!-- parameter start (props: required) -->

Header specifying the bot's user ID

Module channel에 연결된 LINE Official Account bot의 사용자 ID입니다.

Bot의 사용자 ID는 [Attach by operation of the module channel provider](https://developers.line.biz/en/reference/partner-docs/#link-attach-by-operation-module-channel-provider) 응답 또는 [Attached event](https://developers.line.biz/en/reference/partner-docs/#attached-event)에서 얻을 수 있습니다.

<!-- note start -->

**The specific header will be provided when after participation**

이 헤더의 이름(파라미터 이름)은 [LINE Marketplace](https://line-marketplace.com/jp/inquiry)에 참여한 고객에게만 공개됩니다(일본어만 제공).

<!-- note end -->

<!-- parameter end -->

#### Path parameter 

<!-- parameter start (props: required) -->

chatId

`userId`, `roomId` 또는 `groupId`

<!-- parameter end -->

#### Response 

성공하면 `200` 상태 코드가 반환됩니다.

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code  | Description                                           |
| ----- | ----------------------------------------------------- |
| `400` | `chatId` 파라미터에 잘못된 ID를 지정했습니다. |

자세한 내용은 Messaging API reference의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Example error response_

<!-- tab start `json` -->

```json
// If you specfy an invalid ID is specified in the chatId parameter (400 Bad Request)
{
  "message": "The value for the 'chatId' parameter is invalid"
}
```

<!-- tab end -->

### Module channel-specific webhook events 

#### Attached event 

이 이벤트는 module channel이 LINE Official Account에 연결(attach)되었음을 나타냅니다. Module channel의 webhook URL 서버로 전송됩니다.

<!-- parameter start -->

timestamp 등

[Common properties](https://developers.line.biz/en/reference/messaging-api/#common-properties)를 참조하십시오.

다만 `mode`는 `active`로 고정됩니다.

<!-- parameter end -->
<!-- parameter start -->

type

String

`module`

<!-- parameter end -->
<!-- parameter start -->

module.type

String

`attached`

<!-- parameter end -->
<!-- parameter start -->

module.botId

String

연결된 LINE Official Account bot의 사용자 ID

<!-- parameter end -->
<!-- parameter start -->

module.scopes

Array of strings

LINE Official Account 관리자가 허용한 scope를 나타내는 문자열의 배열입니다.

<!-- parameter end -->

_Example Attached event_

<!-- tab start `json` -->

```sh
{
  "destination": "U53387d54817...",
  "events": [
    {
      "type": "module",
      "module": {
        "type": "attached",
        "botId": "U53387d54817...",
        "scopes": [
          "message:send",
          "message:receive"
        ]
      },
      "webhookEventId": "01G3GCEEXNWREGSSFVTPYH8465",
      "deliveryContext": {
        "isRedelivery": false
      },
      "timestamp": 1653038594997,
      "mode": "active"
    }
  ]
}
```

<!-- tab end -->

#### Detached event 

이 이벤트는 module channel이 LINE Official Account에서 분리(detach)되었음을 나타냅니다. Module channel의 webhook URL 서버로 전송됩니다.

<!-- note start -->

**Detach isn't done when you delete the LINE Official Account**

LINE Official Account Manager를 사용하여 LINE Official Account를 삭제해도 module channel은 분리되지 않습니다.

계정 삭제 작업 후 3개월이 지나 LINE Official Account의 분석 데이터를 포함한 모든 정보가 완전히 삭제되면 계정은 자동으로 분리됩니다.

<!-- note end -->

<!-- parameter start -->

timestamp 등

[Common properties](https://developers.line.biz/en/reference/messaging-api/#common-properties)를 참조하십시오.

다만 `mode`는 `active`로 고정됩니다.

<!-- parameter end -->
<!-- parameter start -->

type

String

`module`

<!-- parameter end -->
<!-- parameter start -->

module.type

String

`detached`

<!-- parameter end -->
<!-- parameter start -->

module.botId

String

분리된 LINE Official Account bot의 사용자 ID

<!-- parameter end -->
<!-- parameter start -->

module.reason

String

분리 사유

`bot_deleted`: LINE Official Account의 분석 데이터를 포함한 모든 정보가 완전히 삭제되었습니다.

<!-- parameter end -->

_Example Detached event_

<!-- tab start `json` -->

```sh
{
  "destination": "U5fac33f633e72c192759f09afc41fa28",
  "events": [
    {
      "type": "module",
      "module": {
        "type": "detached",
        "botId": "U5fac33f633e72c192759f09afc41fa28"
      },
      "webhookEventId": "01G4CPSV08QGNT1DWFC4DSWDNP",
      "deliveryContext": {
        "isRedelivery": false
      },
      "timestamp": 1653988977672,
      "mode": "active"
    }
  ]
}
```

<!-- tab end -->

#### Activated event 

이 이벤트는 Acquire Control API를 호출하여 module channel이 Active Channel로 전환되었음을 나타냅니다. Module channel의 webhook URL 서버로 전송됩니다.

<!-- note start -->

**Note**

Acquire Control API에서 지정한 유효 기간이 만료되어 주도권(Chat Control)이 전환된 경우에는 activated 이벤트가 전송되지 않습니다.

<!-- note end -->

<!-- parameter start -->

timestamp 등

[Common properties](https://developers.line.biz/en/reference/messaging-api/#common-properties)를 참조하십시오.

다만 `mode`는 `active`로 고정됩니다.

<!-- parameter end -->
<!-- parameter start -->

type

String

`activated`

<!-- parameter end -->
<!-- parameter start -->

chatControl.expireAt

Number

"active" 상태를 유지하는 제한 시간입니다.

<!-- parameter end -->

_Example Activated event_

<!-- tab start `json` -->

```sh
  {
  "destination": "U5fac33f633e72c192759f09afc41fa28",
  "events": [
    {
      "type": "activated",
      "chatControl": {
        "expireAt": 1653994422933
      },
      "webhookEventId": "01G4CRJ54J7TT4WN190KKHBXXT",
      "deliveryContext": {
        "isRedelivery": false
      },
      "timestamp": 1653990823058,
      "source": {
        "type": "user",
        "userId": "LUb577ef3cbe..."
      },
      "mode": "active"
    }
  ]
}
```

<!-- tab end -->

#### Deactivated event 

이 이벤트는 Acquire Control API 또는 Release Control API를 호출하여 module channel이 Standby Channel로 전환되었음을 나타냅니다. Module channel의 webhook URL 서버로 전송됩니다.

<!-- note start -->

**Note**

Acquire Control API에서 지정한 유효 기간이 만료되어 주도권(Chat Control)이 전환된 경우에는 deactivated 이벤트가 전송되지 않습니다.

<!-- note end -->

<!-- parameter start -->

timestamp 등

[Common properties](https://developers.line.biz/en/reference/messaging-api/#common-properties)를 참조하십시오.

다만 `mode`는 `active`로 고정됩니다.

<!-- parameter end -->
<!-- parameter start -->

type

String

`deactivated`

<!-- parameter end -->

_Example Deactivated event_

<!-- tab start `json` -->

```sh
{
  "destination": "U5fac33f633e72c192759f09afc41fa28",
  "events": [
    {
      "type": "deactivated",
      "webhookEventId": "01G4CRJ51100K1D1791KC9J4G4",
      "deliveryContext": {
        "isRedelivery": false
      },
      "timestamp": 1653990822945,
      "source": {
        "type": "user",
        "userId": "LUb577ef3cbe..."
      },
      "mode": "active"
    }
  ]
}
```

<!-- tab end -->

#### botSuspend event 

이 이벤트는 LINE Official Account가 정지(Suspend)되었음을 나타냅니다. Module channel의 webhook URL 서버로 전송됩니다.

이 이벤트를 받으면 다음 조치를 권장합니다.

- Module channel 관리자 화면에 "LINE Official Account를 사용할 수 없으므로 이 관리자 화면을 사용할 수 없습니다"와 같은 메시지를 표시하고 관리자 화면 사용을 중단하십시오.
- 일시 정지 상태가 되더라도 정지 상태에서 복귀할 수 있습니다(botResume 이벤트를 받을 수 있습니다). 따라서 모든 정보를 보관하는 것을 권장합니다.

<!-- note start -->

**Note**

botSuspend 이벤트는 Primary Channel로 전송되지 않습니다.

botSuspend 이벤트를 받은 후 Detached 이벤트를 받으면 LINE Official Account가 module channel 사용을 중단하고 계약을 해지했음을 의미합니다.

<!-- note end -->

<!-- parameter start -->

timestamp 등

[Common properties](https://developers.line.biz/en/reference/messaging-api/#common-properties)를 참조하십시오.

다만 `mode`는 `active`로 고정됩니다.

<!-- parameter end -->
<!-- parameter start -->

type

String

`botSuspended`

<!-- parameter end -->

_Example botSuspend event_

<!-- tab start `json` -->

```sh
{
  "destination": "U53387d548170020e6cedef5f41d1e01d",
  "events": [
    {
      "type": "botSuspended",
      "webhookEventId": "01G4CRJ54J7TT4WN190KKHBXXT",
      "deliveryContext": {
        "isRedelivery": false
      },
      "timestamp": 1616390574119,
      "mode": "active"
    }
  ]
}
```

<!-- tab end -->

#### botResumed event 

이 이벤트는 LINE Official Account가 정지 상태에서 복귀했음을 나타냅니다. Module channel의 webhook URL 서버로 전송됩니다.

이 이벤트를 받으면 module channel 관리자 화면에서 "LINE Official Account를 사용할 수 없어 이 관리자 페이지를 사용할 수 없습니다"라는 메시지를 숨기고 관리자 페이지 사용을 재개하는 것을 권장합니다.

<!-- note start -->

**Note**

botResumed 이벤트는 Primary Channel로 전송되지 않습니다.

<!-- note end -->

<!-- parameter start -->

timestamp 등

[Common properties](https://developers.line.biz/en/reference/messaging-api/#common-properties)를 참조하십시오.

다만 `mode`는 `active`로 고정됩니다.

<!-- parameter end -->
<!-- parameter start -->

type

String

`botResumed`

<!-- parameter end -->

_Example botResumed event_

<!-- tab start `json` -->

```sh
{
  "destination": "U5fac33f633e72c192759f09afc41fa28",
  "events": [
    {
      "type": "botResumed",
      "webhookEventId": "01G4CS8T91R1V1JCE0G43DQND8",
      "deliveryContext": {
        "isRedelivery": false
      },
      "timestamp": 1653991565601,
      "mode": "active"
    }
  ]
}
```

<!-- tab end -->

### Get a list of bots to which the module is attached 

Module channel이 연결된 여러 LINE Official Account bot의 기본 정보 목록을 가져옵니다.

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X GET "https://api.line.me/v2/bot/list?limit={limit}&start={continuationToken}" \
-H 'Authorization: Bearer {channel access token}'
```

<!-- tab end -->

#### HTTP request 

`GET https://api.line.me/v2/bot/list?limit={limit}&start={continuationToken}`

#### Rate limit 

초당 2,000건의 요청

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

`Bearer {channel access token}`

`{channel access token}`에는 module channel의 channel access token을 지정하십시오.

<!-- parameter end -->

#### Query parameters 

<!-- parameter start (props: optional) -->

limit

기본 정보를 가져올 bot의 최대 개수입니다. 기본값은 `100`입니다.\
최대값: `100`

<!-- parameter end -->
<!-- parameter start (props: optional) -->

start

응답으로 반환된 JSON 객체의 `next` 속성에 있는 continuation token 값입니다. 한 번의 요청으로 모든 bot의 기본 정보를 가져올 수 없으면 이 파라미터를 포함하여 나머지 배열을 가져오십시오.

<!-- parameter end -->

#### Response 

성공하면 상태 코드 `200`과 다음 정보를 담은 JSON 객체가 반환됩니다.

<!-- parameter start -->

bots

Array

Bot의 기본 정보를 나타내는 bot 목록 항목 객체의 배열입니다.

<!-- parameter end -->
<!-- parameter start -->

bots\[].userId

String

Bot의 사용자 ID

<!-- parameter end -->
<!-- parameter start -->

bots\[].basicId

String

Bot의 basic ID

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

bots\[].premiumId

String

Bot의 [premium ID](https://developers.line.biz/en/glossary/#premium-id)입니다. Premium ID가 설정되지 않은 경우 응답에 포함되지 않습니다.

<!-- parameter end -->
<!-- parameter start -->

bots\[].displayName

String

Bot의 표시 이름

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

bots\[].pictureUrl

String

프로필 이미지 URL입니다. "https://"로 시작하는 이미지 URL입니다. Bot이 프로필 이미지를 가지고 있지 않은 경우 응답에 포함되지 않습니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

next

String

Continuation token입니다. 다음 bot 기본 정보 배열을 가져오는 데 사용됩니다. 반환되지 않은 결과가 더 있을 때만 이 속성이 반환됩니다.

Continuation token은 24시간(86,400초) 후에 만료됩니다.

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

```json
{
  "bots": [
    {
      "userId": "Uf2dd6e8b081d2ff9c05c98a8a8b269c9",
      "basicId": "@628...",
      "displayName": "Test01",
      "pictureUrl": "https://profile.line-scdn.net/0hyxytJNAlJldEDQzlatVZAHhIKDoz..."
    },
    {
      "userId": "Ua831d37bfe8232808202b85127663f70",
      "basicId": "@076lu...",
      "displayName": "Test02",
      "pictureUrl": "https://profile.line-scdn.net/0hohnizdyzMEdTECbnVo9PEG9VPiok..."
    },
    {
      "userId": "Ub77ea431fba86f7c159a0c0f5be43d9f",
      "basicId": "@290n...",
      "displayName": "Test03"
    },
    {
      "userId": "Ub8ec80a14e879e9c6833fb4cee0e632b",
      "basicId": "@793j...",
      "displayName": "Test04"
    }
  ]
}
```

<!-- tab end -->

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code  | Description                                 |
| ----- | ------------------------------------------- |
| `400` | 잘못된 continuation token을 지정했습니다. |

자세한 내용은 Messaging API reference의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Error response example_

<!-- tab start `json` -->

```json
// If you specify an invalid continuation token, such as expired (400 Bad Request)
{
  "message": "Invalid start param"
}
```

<!-- tab end -->
