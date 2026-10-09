# LINE notification messages API reference

<!-- note start -->

**Use of optional functions requires an application**

이 문서에 설명된 기능은 필요한 신청서를 제출한 법인 사용자만 사용할 수 있습니다. LINE Official Account에서 이 기능을 사용하려면 담당 영업 대표에게 문의하거나 [영업 파트너](https://www.lycbiz.com/jp/partner/sales/)에게 문의하십시오.

<!-- note end -->

<!-- table of contents -->

## Common specifications 

### Status codes 

자세한 내용은 Messaging API reference의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)를 참조하십시오.

### Response headers 

LINE notification messages API 응답에는 다음 HTTP 헤더가 포함됩니다.

| Response header   | Description                                   |
| ----------------- | --------------------------------------------- |
| x-line-request-id | 요청 ID입니다. 요청마다 ID가 발급됩니다. |

## LINE notification messages (template) 

- [Send a LINE notification message (template)](https://developers.line.biz/en/reference/line-notification-messages/#send-line-notification-message-template)
- [Get number of sent LINE notification messages (template)](https://developers.line.biz/en/reference/line-notification-messages/#get-number-of-sent-line-notification-messages-template)

### Send a LINE notification message (template) 

사용자의 전화번호를 지정하여 LINE notification message(template)를 보내는 API입니다.

자세한 내용은 LINE notification messages 문서의 [LINE notification messages (template)](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/template/)를 참조하십시오.

<!-- warning start -->

**Don't restrict the request source IP addresses**

LINE notification message를 보낼 때는 LINE Platform API를 호출할 수 있는 서버 IP 주소를 Messaging API 채널의 **[Security Settings]** 탭에 등록하지 마십시오. 요청 출처 IP 주소를 제한한 상태에서 LINE notification message를 보내면 전송에 실패할 수 있습니다.

요청 IP 주소를 제한하고 있는지 확인하는 방법은 Messaging API 문서의 [Restrict who can call the API when using a long-lived channel access token (optional)](https://developers.line.biz/en/docs/messaging-api/building-bot/#configure-security-settings)을 참조하십시오.

<!-- warning end -->

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X POST https://api.line.me/v2/bot/message/pnp/templated/push \
-H 'Authorization: Bearer {channel_access_token}' \
-H 'Content-Type:application/json' \
-H 'X-Line-Delivery-Tag:15034552939884E28681A7D668CEA94C147C716C0EC9DFE8B80B44EF3B57F6BD0602366BC3menu01' \
-d '{
    "to": "c9fb9ae95bff879cbcdfc9edf6716640bc40841f3b7352140daa1431af4c319e",
    "templateKey": "shipment_completed_ja",
    "body": {
        "emphasizedItem": {
            "itemKey": "date_002_ja",
            "content": "Saturday, August 10, 2024"
        },
        "items": [
            {
                "itemKey": "time_range_001_ja",
                "content": "A.M."
            },
            {
                "itemKey": "number_001_ja",
                "content": "1234567"
            },
            {
                "itemKey": "price_001_ja",
                "content": "120 USD"
            },
            {
                "itemKey": "name_010_ja",
                "content": "Frozen Soup Set"
            }
        ],
        "buttons": [
            {
                "buttonKey": "check_delivery_status_ja",
                "url": "https://example.com/CheckDeliveryStatus/"
            },
            {
                "buttonKey": "contact_ja",
                "url": "https://example.com/ContactUs/"
            }
        ]
    },
    "customAggregationUnits": [
        "shipping"
    ]
}'
```

<!-- tab end -->

#### HTTP request 

`POST https://api.line.me/v2/bot/message/pnp/templated/push`

#### Rate limit 

초당 2,000건의 요청

#### Request headers 

<!-- note start -->

**Unsupported features**

LINE notification messages API는 [retry keys](https://developers.line.biz/en/reference/messaging-api/#retry-api-request)(`X-Line-Retry-Key`)를 사용한 API 요청 재시도를 허용하지 않습니다.

<!-- note end -->

<!-- parameter start (props: required) -->

Content-Type

application/json

<!-- parameter end -->
<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->
<!-- parameter start (props: optional) -->

X-Line-Delivery-Tag

[delivery completion event](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/message-sending-complete-webhook-event/#receive-delivery-event)의 `delivery.data` 속성을 통해 webhook으로 반환되는 문자열입니다. 자세한 내용은 [Get message delivery notifications](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/technical-specs/#receive-delivery-event)를 참조하십시오.\
최소 문자 수: 16\
최대 문자 수: 100

<!-- parameter end -->

_Example X-Line-Delivery-Tag_

<!-- tab start `shell` -->

```sh
15034552939884E28681A7D668CEA94C147C716C0EC9DFE8B80B44EF3B57F6BD0602366BC3menu01
```

<!-- tab end -->

#### Request body 

<!-- parameter start (props: required) -->

to

String

메시지 수신 대상입니다. [E.164](https://developers.line.biz/en/glossary/#e164) 형식으로 정규화하고 [SHA256으로 해시](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/technical-specs/#phone-number-hashed)한 전화번호를 지정하십시오.

메시지 전송 조건에 대한 자세한 내용은 [Conditions for sending LINE notification messages](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/technical-specs/#conditions-for-sending-line-notification-messages)를 참조하십시오.

<!-- note start -->

**Note**

- [그룹 채팅 또는 다인 채팅](https://developers.line.biz/en/docs/messaging-api/group-chats/#group-chat-types)은 지정할 수 없습니다.
- 전송 대상으로 여러 전화번호를 지정할 수 없습니다.

<!-- note end -->

<!-- parameter end -->
<!-- parameter start (props: required) -->

templateKey

String

보낼 템플릿의 `Key`를 지정하십시오.

사용 가능한 `Key`는 [Templates](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/template/#templates)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

body

Object

보낼 템플릿의 body 객체입니다. 메시지 내용은 세 개의 객체로 지정합니다. 하나의 메시지에서 같은 항목을 두 번 이상 지정할 수 없습니다.

- `emphasizedItem`: 강조할 [항목](https://developers.line.biz/en/reference/line-notification-messages/#send-line-notification-message-template-items)입니다.
- `items`: [항목](https://developers.line.biz/en/reference/line-notification-messages/#send-line-notification-message-template-items)의 배열입니다.
- `buttons`: [버튼](https://developers.line.biz/en/reference/line-notification-messages/#send-line-notification-message-template-buttons)의 배열입니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

customAggregationUnits

Array of strings

Aggregation unit의 이름입니다. 대소문자를 구분합니다. 예를 들어 `Promotion_a`와 `Promotion_A`는 서로 다른 unit 이름으로 취급됩니다.\
최대 unit 개수: 1\
최대 문자 수: 30\
지원 문자 유형: 반각 영숫자(`a-z`, `A-Z`, `0-9`)와 밑줄(`_`)

Unit 이름 지정에 대한 자세한 내용은 Messaging API 문서의 [Assign a unit name](https://developers.line.biz/en/docs/messaging-api/unit-based-statistics-aggregation/#assign-names-to-units-when-sending-messages)을 참조하십시오.

<!-- note start -->

**Unit names may not be assigned**

이번 달(1일부터 말일까지) 동안 push 메시지, multicast 메시지, LINE notification message에 지정할 수 있는 unit 이름 유형은 최대 1,000개입니다. Unit 이름 유형의 개수는 모든 메시지 유형을 합산하여 계산합니다. 1,001번째 이후의 unit 이름 유형을 포함하여 메시지를 보내면 메시지는 전송되지만 해당 unit 이름은 메시지에 지정되지 않습니다.

Unit 이름 유형이 많은 경우 다음 방법 중 하나를 사용하여 unit 이름이 지정될 수 있는지, 또는 이미 지정되었는지 확인하십시오.

- 메시지를 보내기 전에 [Get the number of unit name types assigned during this month](https://developers.line.biz/en/reference/messaging-api/#get-the-number-of-unit-name-types-assigned-during-this-month) endpoint를 사용하여 이번 달 unit 이름의 개수가 아직 1,000개에 도달하지 않았는지 확인하십시오.
- 메시지를 보낸 후 [Get a list of unit names assigned during this month](https://developers.line.biz/en/reference/messaging-api/#get-a-list-of-unit-names-assigned-during-this-month) endpoint를 사용하여 지정한 unit 이름이 존재하는지 확인하십시오.

<!-- note end -->

<!-- parameter end -->
<!-- parameter start (props: optional) -->

body.emphasizedItem

Object

메시지에서 강조할 [항목](https://developers.line.biz/en/reference/line-notification-messages/#send-line-notification-message-template-items)을 지정하십시오.\
최대 객체 수: 1

<!-- parameter end -->
<!-- parameter start (props: optional) -->

body.items

Array of objects

메시지에 포함할 [항목](https://developers.line.biz/en/reference/line-notification-messages/#send-line-notification-message-template-items)의 배열을 지정하십시오.\
최소 객체 수: 0\
최대 객체 수: 15

<!-- parameter end -->
<!-- parameter start (props: optional) -->

body.buttons

Array of objects

메시지에 포함할 [버튼](https://developers.line.biz/en/reference/line-notification-messages/#send-line-notification-message-template-buttons)의 배열을 지정하십시오.\
최소 객체 수: 0\
최대 객체 수: 2

<!-- parameter end -->

##### Items 

<!-- parameter start (props: required) -->

itemKey

String

포함할 항목의 `Key`를 지정하십시오.

사용 가능한 `Key`는 [Items](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/template/#items)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: required) -->

content

String

항목의 값으로 표시할 문자열을 지정하십시오.\
최대 문자 수: `body.emphasizedItem`은 15, `body.items`는 300

<!-- parameter end -->

_Example item_

<!-- tab start `json` -->

```json
{
  "itemKey": "time_range_001_ja",
  "content": "A.M."
}
```

<!-- tab end -->

##### Buttons 

<!-- parameter start (props: required) -->

buttonKey

String

포함할 버튼의 `Key`를 지정하십시오.

사용 가능한 `Key`는 [Buttons](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/template/#buttons)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: required) -->

url

String

사용자가 버튼을 누르면 열리는 페이지의 URL을 지정하십시오.\
최대 문자 수: 1000

<!-- parameter end -->

_Example button_

<!-- tab start `json` -->

```json
{
  "buttonKey": "contact_ja",
  "url": "https://example.com/ContactUs/"
}
```

<!-- tab end -->

#### Response 

상태 코드 `202`와 빈 JSON 객체가 반환됩니다.

_Example response_

<!-- tab start `json` -->

```json
{}
```

<!-- tab end -->

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code | Description |
| --- | --- |
| `400` | 요청에 문제가 있습니다. 다음 원인을 확인하십시오.<ul><li>잘못된 메시지 수신 대상을 지정했습니다.</li><li>잘못된 메시지 객체를 지정했습니다.</li><li>`customAggregationUnits` 속성에 최대 문자 수(30)를 초과하는 unit 이름을 지정했습니다.</li><li>`customAggregationUnits` 속성에 잘못된 문자가 포함된 unit 이름을 지정했습니다.</li><li>LINE Official Account가 지정한 템플릿을 사용할 수 없습니다.</li></ul> |
| `403` | 이 endpoint를 사용할 권한이 없습니다. |
| `422` | LINE notification messages API를 사용하여 LINE notification message를 보내지 못했습니다. 다음 원인을 확인하십시오.<ul><li>메시지 전송 대상으로 지정한 전화번호와 연결된 LINE 사용자가 없습니다.</li><li>메시지 전송 대상으로 지정한 전화번호가 LINE notification message 서비스 대상 국가에서 발급되지 않았습니다. 자세한 내용은 [Conditions for sending LINE notification messages](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/technical-specs/#conditions-for-sending-line-notification-messages)를 참조하십시오.</li><li>메시지 전송 대상으로 지정한 전화번호와 연결된 LINE 사용자가 [LINE notification message 수신을 거부](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/technical-specs/#how-to-consent-for-line-notification-messages)했습니다.</li><li>메시지 전송 대상으로 지정한 전화번호와 연결된 LINE 사용자가 LINE의 개인정보 처리방침(2022년 3월 이후 개정본)에 동의하지 않았습니다.</li></ul> |

자세한 내용은 Messaging API reference의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Example error response_

<!-- tab start `json` -->

```json
// If you specify a template that doesn't exist or that you aren't authorized to use (400 Bad Request)
{
  "message": "Invalid templateKey: reserve_004",
  "details": [
    {
      "message": "The specified template doesn't exist, or you don't have the permission",
      "property": "templateKey"
    }
  ]
}

// If you specify a non-existent item (400 Bad Request)
{
  "message": "The request body has 1 invalid key(s).",
  "details": [
    {
      "message": "The specified item key does not exist: datetime_000",
      "property": "body.items[0].itemKey"
    }
  ]
}

// If you specify the duplicate items (400 Bad Request)
{
  "message": "The request body has 1 error(s)",
  "details": [
    {
      "message": "Duplicate itemKey in items or between emphasizedItem and items are not allowed: date_002_ja",
      "property": "body.emphasizedItem.itemKey"
    }
  ]
}

// If you specify an invalid message destination (400 Bad Request)
{
  "message": "The request body has 1 error(s)",
  "details": [
    {
      "message": "The value must be a valid SHA-256 digest.",
      "property": "to"
    }
  ]
}

// If the unit name contains invalid characters (400 Bad Request)
{
  "message": "The request body has 1 error(s)",
  "details": [
    {
      "message": "Invalid characters are included in custom aggregation unit",
      "property": "customAggregationUnits[0]"
    }
  ]
}

// If you don't have permission to send LINE notification messages (template) (403 Forbidden)
{
  "message": "Access to this API is not available for your account"
}

// If sending a LINE notification message fails (422 Unprocessable Entity)
{
  "message": "Failed to send messages"
}
```

<!-- tab end -->

### Get number of sent LINE notification messages (template) 

[Send a LINE notification message (template)](https://developers.line.biz/en/reference/line-notification-messages/#send-line-notification-message-template) endpoint를 사용하여 보낸 LINE notification message(template)의 개수를 가져옵니다.

자세한 내용은 LINE notification messages 문서의 [Get the number of sent LINE notification messages](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/technical-specs/#get-number-of-sent-line-notification-messages)를 참조하십시오.

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X GET 'https://api.line.me/v2/bot/message/delivery/pnp/templated?date=20240916' \
-H 'Authorization: Bearer {channel_access_token}'
```

<!-- tab end -->

#### HTTP request 

`GET https://api.line.me/v2/bot/message/delivery/pnp/templated`

#### Rate limit 

초당 2,000건의 요청

#### Request header 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->

#### Query parameter 

<!-- parameter start (props: required) -->

date

메시지를 보낸 날짜

- 형식: `yyyyMMdd` (예: `20240916`)
- 시간대: UTC+9

<!-- parameter end -->

#### Response 

상태 코드 `200`과 다음 정보를 담은 JSON 객체가 반환됩니다.

<!-- parameter start -->

status

String

Aggregation 처리 상태입니다. 다음 중 하나입니다.

- `ready`: 메시지 개수를 가져올 수 있습니다.
- `unready`: `date`에 지정한 날짜의 전체 메시지 개수 집계가 아직 완료되지 않았습니다. 잠시 후 다시 요청하십시오. Aggregation 처리는 보통 다음 날까지 완료됩니다.
- `out_of_service`: `date`에 지정한 날짜가 aggregation 시스템 운영 시작일(2018/03/31)보다 이전입니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

success

Number

`date`에 지정한 날짜에 LINE notification messages API를 사용하여 보낸 메시지의 개수입니다. `status` 값이 `ready`인 경우에만 응답에 포함됩니다.

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

```json
{
  "status": "ready",
  "success": 3
}
```

<!-- tab end -->

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code | Description |
| --- | --- |
| `400` | 요청에 문제가 있습니다. 다음 원인을 확인하십시오.<ul><li>잘못된 날짜를 지정했습니다.</li><li>날짜를 지정하지 않았습니다.</li></ul> |

자세한 내용은 Messaging API reference의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Example error response_

<!-- tab start `json` -->

```json
// If you specify an invalid date (400 Bad Request)
{
  "message": "The value for the 'date' parameter is invalid"
}
```

<!-- tab end -->

## LINE notification messages (flexible) 

- [Send a LINE notification message (flexible)](https://developers.line.biz/en/reference/line-notification-messages/#send-line-notification-message-flexible)
- [Get number of sent LINE notification messages (flexible)](https://developers.line.biz/en/reference/line-notification-messages/#get-number-of-sent-line-notification-messages-flexible)

### Send a LINE notification message (flexible) 

사용자의 전화번호를 지정하여 LINE notification message(flexible)를 보내는 API입니다.

<!-- tip start -->

**The name of the existing &quot;LINE notification messages&quot; has been changed to &quot;LINE notification messages (flexible)&quot;**

기존 메시지 템플릿, 항목 등을 조합하여 쉽게 메시지를 만들 수 있는 [LINE notification messages (template)](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/template/)라는 새로운 기능이 추가되었습니다.

이에 따라 UX 심사가 필요했던 기존 "LINE notification messages"의 이름이 "LINE notification messages (flexible)"로 변경되었습니다.

자세한 내용은 2025년 6월 2일에 법인 고객에게 공지한 [LINE notification messages (template) now available](https://developers.line.biz/en/docs/partner-docs/notice/#partner-news-20250602)을 참조하십시오.

<!-- tip end -->

<!-- warning start -->

**Don't restrict the request source IP addresses**

LINE notification message를 보낼 때는 LINE Platform API를 호출할 수 있는 서버 IP 주소를 Messaging API 채널의 **[Security Settings]** 탭에 등록하지 마십시오. 요청 출처 IP 주소를 제한한 상태에서 LINE notification message를 보내면 전송에 실패할 수 있습니다.

요청 IP 주소를 제한하고 있는지 확인하는 방법은 Messaging API 문서의 [Restrict who can call the API when using a long-lived channel access token (optional)](https://developers.line.biz/en/docs/messaging-api/building-bot/#configure-security-settings)을 참조하십시오.

<!-- warning end -->

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X POST https://api.line.me/bot/pnp/push \
-H 'Authorization: Bearer {channel_access_token}' \
-H 'Content-Type:application/json' \
-d '{
    "to": "{hashed_phone_number}",
    "messages":[
        {
            "type":"text",
            "text":"Hello, world1"
        },
        {
            "type":"text",
            "text":"Hello, world2"
        }
    ],
    "customAggregationUnits": [
        "shipping"
    ]
}'

#Example request (with X-Line-Delivery-Tag)
curl -v -X POST https://api.line.me/bot/pnp/push \
-H 'Authorization: Bearer {channel_access_token}' \
-H 'Content-Type:application/json' \
-H 'X-Line-Delivery-Tag:{delivery_tag}' \
-d '{
    "to": "{hashed_phone_number}",
    "messages":[
        {
            "type":"text",
            "text":"Hello, world1"
        },
        {
            "type":"text",
            "text":"Hello, world2"
        }
    ],
    "customAggregationUnits": [
        "shipping"
    ]
}'
```

<!-- tab end -->

#### HTTP request 

`POST https://api.line.me/bot/pnp/push`

#### Rate limit 

초당 2,000건의 요청

#### Request header 

<!-- note start -->

**Unsupported features**

LINE notification messages API는 [retry keys](https://developers.line.biz/en/reference/messaging-api/#retry-api-request)(`X-Line-Retry-Key`)를 사용한 API 요청 재시도를 허용하지 않습니다.

<!-- note end -->

<!-- parameter start (props: required) -->

Content-Type

application/json

<!-- parameter end -->
<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->
<!-- parameter start (props: optional) -->

X-Line-Delivery-Tag

Webhook을 통해 [delivery completion event](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/message-sending-complete-webhook-event/#receive-delivery-event)의 `delivery.data` 속성으로 반환되는 문자열입니다. 자세한 내용은 [Get message delivery notifications](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/technical-specs/#receive-delivery-event)를 참조하십시오.\
최소 문자 수: 16\
최대 문자 수: 100

<!-- parameter end -->

_Example X-Line-Delivery-Tag_

<!-- tab start `shell` -->

```sh
15034552939884E28681A7D668CEA94C147C716C0EC9DFE8B80B44EF3B57F6BD0602366BC3menu01
```

<!-- tab end -->

#### Request body 

<!-- parameter start (props: required) -->

to

String

메시지 수신 대상입니다. [E.164](https://developers.line.biz/en/glossary/#e164) 형식으로 정규화하고 [SHA256으로 해시](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/technical-specs/#phone-number-hashed)한 전화번호를 지정하십시오.

메시지 전송 조건에 대한 자세한 내용은 [Conditions for sending LINE notification messages](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/technical-specs/#conditions-for-sending-line-notification-messages)를 참조하십시오.

<!-- note start -->

**Note**

- [그룹 채팅 및 여러 사용자와의 채팅](https://developers.line.biz/en/docs/messaging-api/group-chats/#group-chat-types)은 지정할 수 없습니다.
- 전송 대상으로 여러 전화번호를 지정할 수 없습니다.

<!-- note end -->

<!-- parameter end -->

<!-- parameter start (props: required) -->

messages

Array of [message objects](https://developers.line.biz/en/reference/messaging-api/#message-objects)

보낼 메시지입니다. 최대 5개입니다.

자세한 내용은 [Message types that can be sent in LINE notification messages](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/technical-specs/#message-types-that-can-be-sent)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

customAggregationUnits

Array of strings

Aggregation unit의 이름입니다. 대소문자를 구분합니다. 예를 들어 `Promotion_a`와 `Promotion_A`는 서로 다른 unit 이름으로 취급됩니다.\
최대 unit 개수: 1\
최대 문자 수: 30\
지원 문자 유형: 반각 영숫자(`a-z`, `A-Z`, `0-9`)와 밑줄(`_`)

Unit 이름 지정에 대한 자세한 내용은 Messaging API 문서의 [Assign a unit name](https://developers.line.biz/en/docs/messaging-api/unit-based-statistics-aggregation/#assign-names-to-units-when-sending-messages)을 참조하십시오.

<!-- note start -->

**Unit names may not be assigned**

이번 달(1일부터 말일까지) 동안 push 메시지, multicast 메시지, LINE notification message에 지정할 수 있는 unit 이름 유형은 최대 1,000개입니다. Unit 이름 유형의 개수는 모든 메시지 유형을 합산하여 계산합니다. 1,001번째 이후의 unit 이름 유형을 포함하여 메시지를 보내면 메시지는 전송되지만 해당 unit 이름은 메시지에 지정되지 않습니다.

Unit 이름 유형이 많은 경우 다음 방법 중 하나를 사용하여 unit 이름이 지정될 수 있는지, 또는 이미 지정되었는지 확인하십시오.

- 메시지를 보내기 전에 [Get the number of unit name types assigned during this month](https://developers.line.biz/en/reference/messaging-api/#get-the-number-of-unit-name-types-assigned-during-this-month) endpoint를 사용하여 이번 달 unit 이름의 개수가 아직 1,000개에 도달하지 않았는지 확인하십시오.
- 메시지를 보낸 후 [Get a list of unit names assigned during this month](https://developers.line.biz/en/reference/messaging-api/#get-a-list-of-unit-names-assigned-during-this-month) endpoint를 사용하여 지정한 unit 이름이 존재하는지 확인하십시오.

<!-- note end -->

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

| Code | Description |
| --- | --- |
| `400` | 요청에 문제가 있습니다. 다음 원인을 확인하십시오.<ul><li>잘못된 메시지 수신 대상을 지정했습니다.</li><li>잘못된 메시지 객체를 지정했습니다.</li><li>`customAggregationUnits` 속성에 최대 문자 수(30)를 초과하는 unit 이름을 지정했습니다.</li><li>`customAggregationUnits` 속성에 잘못된 문자가 포함된 unit 이름을 지정했습니다.</li></ul> |
| `422` | LINE notification messages API를 사용하여 LINE notification message를 보내지 못했습니다. 다음 원인을 확인하십시오.<ul><li>메시지 전송 대상으로 지정한 전화번호와 연결된 LINE 사용자가 없습니다.</li><li>메시지 전송 대상으로 지정한 전화번호가 LINE notification message 서비스 대상 국가에서 발급되지 않았습니다. 자세한 내용은 [Conditions for sending LINE notification messages](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/technical-specs/#conditions-for-sending-line-notification-messages)를 참조하십시오.</li><li>메시지 전송 대상으로 지정한 전화번호와 연결된 LINE 사용자가 [LINE notification message 수신을 거부](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/technical-specs/#how-to-consent-for-line-notification-messages)했습니다.</li><li>메시지 전송 대상으로 지정한 전화번호와 연결된 LINE 사용자가 LINE의 개인정보 처리방침(2022년 3월 이후 개정본)에 동의하지 않았습니다.</li></ul> |

자세한 내용은 Messaging API reference의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Example error response_

<!-- tab start `json` -->

```json
// If you specify an invalid message destination (400 Bad Request)
{
  "message": "The request body has 1 error(s)",
  "details": [
    {
      "message": "The value must be a valid SHA-256 digest.",
      "property": "to"
    }
  ]
}

// If the unit name contains invalid characters (400 Bad Request)
{
  "message": "The request body has 1 error(s)",
  "details": [
    {
      "message": "Invalid characters are included in custom aggregation unit",
      "property": "customAggregationUnits[0]"
    }
  ]
}

// When sending a LINE notification message fails (422 Unprocessable Entity)
{
  "message": "Failed to send messages"
}
```

<!-- tab end -->

### Get number of sent LINE notification messages (flexible) 

[Send a LINE notification message (flexible)](https://developers.line.biz/en/reference/line-notification-messages/#send-line-notification-message-flexible) endpoint를 사용하여 보낸 LINE notification message(flexible)의 개수를 가져옵니다.

자세한 내용은 LINE notification messages 문서의 [Get the number of sent LINE notification messages](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/technical-specs/#get-number-of-sent-line-notification-messages)를 참조하십시오.

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X GET 'https://api.line.me/v2/bot/message/delivery/pnp?date=20211231' \
-H 'Authorization: Bearer {channel_access_token}'
```

<!-- tab end -->

#### HTTP request 

`GET https://api.line.me/v2/bot/message/delivery/pnp`

#### Rate limit 

초당 2,000건의 요청

#### Request header 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->

#### Query parameter 

<!-- parameter start (props: required) -->

date

메시지를 보낸 날짜

- 형식: `yyyyMMdd` (예: `20211231`)
- 시간대: UTC+9

<!-- parameter end -->

#### Response 

상태 코드 `200`과 다음 정보를 담은 JSON 객체가 반환됩니다.

<!-- parameter start -->

status

String

Aggregation 처리 상태입니다. 다음 중 하나입니다.

- `ready`: 메시지 개수를 가져올 수 있습니다.
- `unready`: `date`에 지정한 날짜의 전체 메시지 개수 집계가 아직 완료되지 않았습니다. 잠시 후 다시 요청하십시오. Aggregation 처리는 보통 다음 날까지 완료됩니다.
- `out_of_service`: `date`에 지정한 날짜가 aggregation 시스템 운영 시작일(2018/03/31)보다 이전입니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

success

Number

`date`에 지정한 날짜에 LINE notification messages API를 사용하여 보낸 메시지의 개수입니다. `status` 값이 `ready`인 경우에만 응답에 포함됩니다.

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

```json
{
  "status": "ready",
  "success": 3
}
```

<!-- tab end -->

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code | Description |
| --- | --- |
| `400` | 요청에 문제가 있습니다. 다음 원인을 확인하십시오.<ul><li>잘못된 날짜를 지정했습니다.</li><li>날짜를 지정하지 않았습니다.</li></ul> |

자세한 내용은 Messaging API reference의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Example error response_

<!-- tab start `json` -->

```json
// If you specify an invalid date (400 Bad Request)
{
  "message": "The value for the 'date' parameter is invalid"
}
```

<!-- tab end -->
