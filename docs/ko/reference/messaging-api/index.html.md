# Messaging API reference

## Common specifications 

Messaging API의 공통 사양입니다. 엔드포인트의 도메인 이름, 요청 성공 또는 실패 시의 응답, rate limit 등을 설명합니다.

- [Domain name](https://developers.line.biz/en/reference/messaging-api/#domain-name)
- [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)
- [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)
- [Response headers](https://developers.line.biz/en/reference/messaging-api/#response-headers)
- [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)
- [Other common specifications](https://developers.line.biz/en/reference/messaging-api/#other-common-specifications)

### Domain name 

Messaging API는 엔드포인트에 따라 도메인 이름이 다릅니다. 각 엔드포인트에 올바른 도메인 이름을 사용하도록 주의하십시오.

| Domain name | Endpoint |
| --- | --- |
| `api-data.line.me`  | <ul><li>[Get content](https://developers.line.biz/en/reference/messaging-api/#get-content)</li><li>[Create audience for uploading user IDs (by file)](https://developers.line.biz/en/reference/messaging-api/#create-upload-audience-group-by-file)</li><li>[Add user IDs or Identifiers for Advertisers (IFAs) to an audience for uploading user IDs (by file)](https://developers.line.biz/en/reference/messaging-api/#update-upload-audience-group-by-file)</li><li>[Upload rich menu image](https://developers.line.biz/en/reference/messaging-api/#upload-rich-menu-image)</li><li>[Download rich menu image](https://developers.line.biz/en/reference/messaging-api/#download-rich-menu-image)</li></ul> |
| `api.line.me` | 그 밖의 API 엔드포인트 |

### Rate limits 

Messaging API는 채널 단위로 각 API 기능(엔드포인트)에 다음 rate limit을 적용합니다. Rate limit이 적용되는 범위에 대한 자세한 내용은 [Scope of rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits-scope)를 참조하십시오.

<!-- note start -->

**Don't submit requests exceeding the rate limit**

Rate limit을 초과하는 요청을 보내면 `429 Too Many Requests` 오류 메시지가 반환됩니다. Messaging API로 LINE 봇을 개발할 때는 rate limit에 관한 가이드라인을 포함한 [Messaging API development guidelines](https://developers.line.biz/en/docs/messaging-api/development-guidelines/)를 따르십시오.

<!-- note end -->

| Endpoint | Rate limit |
| --- | --- |
| <ul><li>[Send a narrowcast message](https://developers.line.biz/en/reference/messaging-api/#send-narrowcast-message)</li><li>[Send a broadcast message](https://developers.line.biz/en/reference/messaging-api/#send-broadcast-message)</li><li>[Get number of message deliveries](https://developers.line.biz/en/reference/messaging-api/#get-number-of-delivery-messages)</li><li>[Get number of friends](https://developers.line.biz/en/reference/messaging-api/#get-number-of-followers)</li><li>[Get friend demographics](https://developers.line.biz/en/reference/messaging-api/#get-demographic)</li><li>[Get user interaction statistics](https://developers.line.biz/en/reference/messaging-api/#get-message-event)</li><li>[Get statistics per unit](https://developers.line.biz/en/reference/messaging-api/#get-statistics-per-unit)</li><li>[Get rich menu insight totals](https://developers.line.biz/en/reference/messaging-api/#get-rich-menu-insight-summary)</li><li>[Get rich menu insight by day](https://developers.line.biz/en/reference/messaging-api/#get-rich-menu-insight-daily)</li><li>[Test webhook endpoint](https://developers.line.biz/en/reference/messaging-api/#test-webhook-endpoint)</li></ul> | 시간당 60회 요청 |
| <ul><li>[Create audience for uploading user IDs (by JSON)](https://developers.line.biz/en/reference/messaging-api/#create-upload-audience-group)</li><li>[Create audience for uploading user IDs (by file)](https://developers.line.biz/en/reference/messaging-api/#create-upload-audience-group-by-file)</li><li>[Add user IDs or Identifiers for Advertisers (IFAs) to an audience for uploading user IDs (by JSON)](https://developers.line.biz/en/reference/messaging-api/#update-upload-audience-group)</li><li>[Add user IDs or Identifiers for Advertisers (IFAs) to an audience for uploading user IDs (by file)](https://developers.line.biz/en/reference/messaging-api/#update-upload-audience-group-by-file)</li><li>[Create message click audience](https://developers.line.biz/en/reference/messaging-api/#create-click-audience-group)</li><li>[Create message impression audience](https://developers.line.biz/en/reference/messaging-api/#create-imp-audience-group)</li><li>[Rename an audience](https://developers.line.biz/en/reference/messaging-api/#set-description-audience-group)</li><li>[Delete audience](https://developers.line.biz/en/reference/messaging-api/#delete-audience-group)</li><li>[Get audience data](https://developers.line.biz/en/reference/messaging-api/#get-audience-group)</li><li>[Get data for multiple audiences](https://developers.line.biz/en/reference/messaging-api/#get-audience-groups)</li><li>[Get shared audience data in Business Manager](https://developers.line.biz/en/reference/messaging-api/#get-shared-audience)</li><li>[Get a list of shared audiences in Business Manager](https://developers.line.biz/en/reference/messaging-api/#get-shared-audience-list)</li></ul> | 분당 60회 요청 |
| <ul><li>[Set webhook endpoint URL](https://developers.line.biz/en/reference/messaging-api/#set-webhook-endpoint-url)</li><li>[Get webhook endpoint information](https://developers.line.biz/en/reference/messaging-api/#get-webhook-endpoint-information)</li></ul> | 분당 1,000회 요청 |
| <ul><li>[Create rich menu](https://developers.line.biz/en/reference/messaging-api/#create-rich-menu)</li><li>[Delete rich menu](https://developers.line.biz/en/reference/messaging-api/#delete-rich-menu)</li><li>[Delete rich menu alias](https://developers.line.biz/en/reference/messaging-api/#delete-rich-menu-alias)</li><li>[Get the status of rich menu batch control](https://developers.line.biz/en/reference/messaging-api/#get-batch-control-rich-menus-progress-status)</li></ul> | 시간당 100회 요청 \* |
| <ul><li>[Replace or unlink the linked rich menus in batches](https://developers.line.biz/en/reference/messaging-api/#batch-control-rich-menus-of-users)</li></ul> | 시간당 3회 요청 |
| <ul><li>[Get rich menu list](https://developers.line.biz/en/reference/messaging-api/#get-rich-menu-list)</li></ul> | 초당 10회 요청 |
| <ul><li>[Send multicast message](https://developers.line.biz/en/reference/messaging-api/#send-multicast-message)</li><li>[Get a user's membership subscription status](https://developers.line.biz/en/reference/messaging-api/#get-a-users-membership-subscription-status)</li><li>[Get membership plans being offered](https://developers.line.biz/en/reference/messaging-api/#get-membership-plans)</li><li>[Create a coupon](https://developers.line.biz/en/reference/messaging-api/#create-coupon)</li><li>[Discontinue a coupon](https://developers.line.biz/en/reference/messaging-api/#discontinue-coupon)</li><li>[Get a list of coupons](https://developers.line.biz/en/reference/messaging-api/#get-coupons-list)</li><li>[Get details of a coupon](https://developers.line.biz/en/reference/messaging-api/#get-coupon)</li></ul> | 초당 200회 요청 |
| <ul><li>[Display a loading animation](https://developers.line.biz/en/reference/messaging-api/#display-a-loading-indicator)</li></ul> | 초당 100회 요청 |
| <ul><li>[Issue short-lived channel access token](https://developers.line.biz/en/reference/messaging-api/#issue-shortlived-channel-access-token)</li></ul> | 초당 370회 요청 |
| 그 밖의 API 엔드포인트 | 초당 2,000회 요청 |

\* [LINE Official Account Manager](https://developers.line.biz/en/glossary/#line-oa-manager)를 사용하여 리치 메뉴를 만들고 삭제하는 경우에는 이 제한이 적용되지 않습니다.

#### How rate limits work 

Messaging API는 고정된 간격마다 요청 횟수를 한꺼번에 초기화하는 대신 [token bucket algorithm](https://en.wikipedia.org/wiki/Token_bucket)을 기반으로 rate limit을 적용합니다.

Token bucket algorithm에서는 요청을 보내는 데 필요한 토큰이 고정된 용량의 bucket에 저장됩니다. 각 요청은 토큰을 소비하며, 소비된 토큰은 시간이 지나면서 bucket에 점차 다시 채워집니다.

요청이 bucket에 토큰이 채워지는 속도보다 빠르게 토큰을 계속 소비하면 결국 bucket의 사용 가능한 토큰이 소진됩니다. 이 상태에서 보낸 요청은 rate limit의 적용을 받으며, API는 `429 Too Many Requests` 응답을 반환합니다. 시간이 지나 bucket에 토큰이 다시 채워지면 보낼 수 있는 요청 수도 점차 다시 늘어납니다.

#### Scope of rate limits 

Messaging API는 채널 단위로 각 API 기능(엔드포인트)에 rate limit을 적용합니다. Rate limit의 적용 범위와 관련하여 다음 사항도 유의하십시오.

- 엔드포인트 URL이 같더라도 HTTP 메서드가 다르면 다른 엔드포인트입니다.
- URL의 파라미터 값이나 요청 본문의 내용과 관계없이 rate limit을 적용합니다.
- 다른 IP 주소에서 엔드포인트를 사용하더라도 구분하지 않고 rate limit을 적용합니다.
- 서로 다른 채널에서 같은 LINE Official Account의 엔드포인트를 사용하는 경우, 각 채널마다 rate limit을 독립적으로 적용합니다.

#### Limit on the number of concurrent operations 

Audience 업로드 생성 및 audience에 사용자 ID를 추가하기 위해 audience ID(`audienceGroupId`)별 엔드포인트의 동시 작업 수 제한이 설정되어 있습니다.

다음 엔드포인트가 동시에 처리하는 요청의 총 수가 동시 작업 수로 계산됩니다.

| Endpoint | 최대 동시 작업 수 |
| --- | --- |
| <ul><li>[Create audience for uploading user IDs (by JSON)](https://developers.line.biz/en/reference/messaging-api/#create-upload-audience-group)</li><li>[Create audience for uploading user IDs (by file)](https://developers.line.biz/en/reference/messaging-api/#create-upload-audience-group-by-file)</li><li>[Add user IDs or Identifiers for Advertisers (IFAs) to an audience for uploading user IDs (by JSON)](https://developers.line.biz/en/reference/messaging-api/#update-upload-audience-group)</li><li>[Add user IDs or Identifiers for Advertisers (IFAs) to an audience for uploading user IDs (by file)](https://developers.line.biz/en/reference/messaging-api/#update-upload-audience-group-by-file)</li></ul> | 10 |

동시 작업 수 제한을 초과하는 요청은 [status code](https://developers.line.biz/en/reference/messaging-api/#status-codes) `429 Too Many Requests`와 함께 오류를 반환합니다. 오류를 받았다면 잠시 기다린 후 다시 요청하십시오.

다음 엔드포인트의 응답에 있는 `jobs` 속성으로 처리 중인 요청 수를 확인할 수 있습니다. 작업의 상태(`jobs[].jobStatus` 속성)가 실행 대기 중(`QUEUED`) 또는 실행 중(`WORKING`)이면 작업으로 계산됩니다.

- [Get audience data](https://developers.line.biz/en/reference/messaging-api/#get-audience-group)

### Status codes 

API를 호출한 후 다음 HTTP 상태 코드가 반환됩니다. 별도로 명시되지 않은 경우 [HTTP status code specification](https://datatracker.ietf.org/doc/html/rfc7231#section-6)을 따릅니다.

| Status code | Description |
| --- | --- |
| 200 OK | 요청이 성공했습니다. |
| 400 Bad Request | 요청에 문제가 있습니다. |
| 401 Unauthorized | 유효한 channel access token이 지정되지 않았습니다. |
| 403 Forbidden | 리소스에 접근할 권한이 없습니다. 계정 또는 플랜이 해당 리소스에 접근할 권한이 있는지 확인하십시오. |
| 404 Not Found | 프로필 정보를 가져올 수 없습니다. 다음 원인을 확인하십시오.<ul><li>대상 사용자 ID가 존재하지 않습니다.</li><li>사용자가 프로필 정보를 가져오는 것에 동의하지 않았습니다.</li><li>사용자가 대상 LINE Official Account를 친구로 추가하지 않았습니다.</li><li>사용자가 대상 LINE Official Account를 친구로 추가한 후 차단했습니다.</li></ul>자세한 내용은 Messaging API 문서의 [Consent on getting user profile information](https://developers.line.biz/en/docs/messaging-api/user-consent/)을 참조하십시오. |
| 409 Conflict | 같은 retry key를 가진 API 요청이 이미 수락되었습니다. 자세한 내용은 [Retry failed API request](https://developers.line.biz/en/docs/messaging-api/retrying-api-request/)를 참조하십시오. |
| 410 Gone | 더 이상 사용할 수 없는 리소스에 접근했습니다. |
| 413 Payload Too Large | 요청이 최대 크기인 2MB를 초과합니다. 요청 크기를 2MB 미만으로 줄인 후 다시 시도하십시오. |
| 415 Unsupported Media Type | 업로드한 파일의 미디어 타입이 지원되지 않습니다. |
| 429 Too Many Requests | <ul><li>요청에 대한 [rate limit](https://developers.line.biz/en/reference/messaging-api/#rate-limits)을 초과했습니다.</li><li>요청에 대한 [동시 작업 수 제한](https://developers.line.biz/en/reference/messaging-api/#limit-on-the-number-of-concurrent-operations)을 초과했습니다.</li><li>무료 메시지 수를 초과했습니다.</li><li>보낼 수 있는 추가 메시지의 최대 개수를 초과했습니다.</li></ul><p>무료 메시지 수와 보낼 수 있는 추가 메시지의 최대 개수에 대한 자세한 내용은 Messaging API 문서의 [Messaging API pricing](https://developers.line.biz/en/docs/messaging-api/pricing/)을 참조하십시오.</p><p>이번 달에 보낼 수 있는 메시지가 아직 남아 있더라도 이 오류가 발생할 수 있습니다. 자세한 내용은 FAQ의 [Why do I get a 429 Too Many Requests error (You have reached your monthly limit.) even though I still have messages available to send for the current month?](https://developers.line.biz/en/faq/#why-do-i-get-429-error-during-message-delivery)를 참조하십시오.</p> |
| 500 Internal Server Error | 내부 서버에서 오류가 발생했습니다. |

### Response headers 

Messaging API 응답에는 다음 HTTP 헤더가 포함됩니다.

| Response headers | Description |
| --- | --- |
| X-Line-Request-Id | 요청 ID입니다. 요청마다 ID가 발급됩니다. |
| X-Line-Accepted-Request-Id Not always included  | 같은 retry key를 사용하여 요청이 이미 수락된 경우, 수락된 요청의 `x-line-request-id`가 표시됩니다. 자세한 내용은 [Retrying an API request](https://developers.line.biz/en/reference/messaging-api/#retry-api-request)를 참조하십시오. |

### Error responses 

오류가 발생하면 응답 본문에 다음 JSON 데이터가 반환됩니다.

<!-- parameter start -->

message

String

오류에 대한 정보를 담은 메시지입니다. 자세한 내용은 [Error messages](https://developers.line.biz/en/reference/messaging-api/#error-messages)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

details

Array

오류 세부 정보의 배열입니다. 배열이 비어 있으면 이 속성은 응답에 포함되지 않습니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

details\[].message

String

오류의 세부 내용입니다. 특정 상황에서는 응답에 포함되지 않습니다.

Audience 관리 endpoint의 오류 세부 내용에 대한 자세한 내용은 [Details of the error related to audience management](https://developers.line.biz/en/reference/messaging-api/#manage-audience-error)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

details\[].property

String

오류가 발생한 위치입니다. 요청의 JSON 필드 이름 또는 쿼리 파라미터 이름을 반환합니다. 특정 상황에서는 응답에 포함되지 않습니다.

<!-- parameter end -->

_Example error response_

<!-- tab start `json` -->

```json
{
  "message": "The request body has 2 error(s)",
  "details": [
    {
      "message": "May not be empty",
      "property": "messages[0].text"
    },
    {
      "message": "Must be one of the following values: [text, image, video, audio, location, sticker, template, imagemap]",
      "property": "messages[1].type"
    }
  ]
}
```

<!-- tab end -->

#### Error messages 

JSON 오류 응답의 `message` 속성에 포함되는 주요 오류 메시지는 다음과 같습니다.

| Message | Description |
| --- | --- |
| The request body has X error(s) | 요청 본문의 JSON 데이터에서 오류가 발견되었습니다. "X"에는 오류 개수가 표시됩니다. 자세한 내용은 `details[].message` 및 `details[].property` 속성에 표시됩니다. |
| Invalid reply token | [send reply message](https://developers.line.biz/en/reference/messaging-api/#send-reply-message)의 `replyToken`에 지정한 reply token이 올바르지 않습니다. 다음 원인을 확인하십시오.<ul><li>만료된 reply token으로 reply message를 보냈습니다.</li><li>이미 사용한 reply token으로 reply message를 보냈습니다.</li></ul> |
| The property, XXX, in the request body is invalid (line: XXX, column: XXX) | 요청 본문에 잘못된 속성이 지정되었습니다. "XXX"에는 해당 속성이 표시됩니다. |
| The request body could not be parsed as JSON (line: XXX, column: XXX) | 요청 본문의 JSON을 파싱할 수 없습니다. 해당 줄과 열이 표시됩니다. |
| The content type, XXX, is not supported | API가 지원하지 않는 content type을 요청했습니다. |
| Authentication failed due to the following reason: XXX | API를 호출할 때 인증에 실패했습니다. 이유는 "XXX"에 표시됩니다. |
| Access to this API is not available for your account | 사용 권한이 없는 API를 호출하면 표시됩니다. |
| Failed to send messages | 메시지 전송에 실패하면 표시됩니다. 지정한 사용자 ID가 존재하지 않는 경우 등이 원인일 수 있습니다. |
| You have reached your monthly limit. | <ul><li>무료 메시지 수를 초과했습니다.</li><li>보낼 수 있는 추가 메시지의 최대 개수를 초과했습니다.</li></ul><p>무료 메시지 수와 보낼 수 있는 추가 메시지의 최대 개수에 대한 자세한 내용은 Messaging API 문서의 [Messaging API pricing](https://developers.line.biz/en/docs/messaging-api/pricing/)을 참조하십시오.</p><p>이번 달에 보낼 수 있는 메시지가 아직 남아 있더라도 이 오류가 발생할 수 있습니다. 자세한 내용은 FAQ의 [Why do I get a 429 Too Many Requests error (You have reached your monthly limit.) even though I still have messages available to send for the current month?](https://developers.line.biz/en/faq/#why-do-i-get-429-error-during-message-delivery)를 참조하십시오.</p> |
| The API rate limit has been exceeded. Try again later. | 요청에 대한 [rate limit](https://developers.line.biz/en/reference/messaging-api/#rate-limits)을 초과했습니다. |
| Not found | 프로필 정보를 가져올 수 없습니다. 다음 원인을 확인하십시오.<ul><li>대상 사용자 ID가 존재하지 않습니다.</li><li>사용자가 프로필 정보를 가져오는 것에 동의하지 않았습니다.</li><li>사용자가 대상 LINE Official Account를 친구로 추가하지 않았습니다.</li><li>사용자가 대상 LINE Official Account를 친구로 추가한 후 차단했습니다.</li></ul>자세한 내용은 Messaging API 문서의 [Consent on getting user profile information](https://developers.line.biz/en/docs/messaging-api/user-consent/)을 참조하십시오. |

### Other common specifications 

#### About the encoding of a URL specified in a request body property 

요청 본문 속성에 지정하는 도메인 이름, 경로, 쿼리 파라미터, 프래그먼트는 UTF-8로 [percent-encoded](https://en.wikipedia.org/wiki/Percent-encoding)되어야 합니다.

예를 들어 다음 구성 요소로 URI를 지정하는 경우 `https://example.com/path?q=Good%20morning#Good%20afternoon`이 되어야 합니다.

| Scheme | Domain name | Path  | Query parameter | Fragment       |
| ------ | ----------- | ----- | --------------- | -------------- |
| https  | example.com | /path | q=Good morning  | Good afternoon |

#### Specify the endpoint path accurately 

Messaging API 엔드포인트에 요청을 보낼 때는 Messaging API reference에 나와 있는 올바른 엔드포인트를 지정하십시오. 예를 들어 엔드포인트 경로 끝에 불필요한 슬래시(`/`)를 추가하는 등 올바른 엔드포인트를 지정하지 않으면 동작이 보장되지 않습니다.

| ✅️ 올바른 엔드포인트의 예 | ❌️ 잘못된 엔드포인트의 예 |
| --- | --- |
| `https://api.line.me/v2/bot/message/push` | `https://api.line.me/v2/bot/message/push/` |

<!-- tip start -->

**Use the Messaging API official SDKs**

Messaging API [공식 SDK](https://developers.line.biz/en/docs/messaging-api/line-bot-sdk/#official-sdks)를 사용하여 연동을 구현하면 엔드포인트 URL이나 경로를 신경 쓸 필요가 없으며, 항상 올바르게 설정됩니다.

<!-- tip end -->

## Webhooks 

사용자가 LINE Official Account를 친구로 추가하거나 메시지를 보내는 등의 이벤트가 발생하면, LINE Platform은 webhook URL(봇 서버)로 HTTPS POST 요청을 보냅니다.

Webhook URL은 [LINE Developers Console](https://developers.line.biz/console/)에서 채널마다 설정합니다.

<!-- tip start -->

**We recommend that you make the event processing asynchronous**

HTTP POST 요청의 처리가 이후 이벤트의 처리를 지연시키지 않도록 이벤트 처리를 비동기로 구현할 것을 권장합니다.

<!-- tip end -->

<!-- note start -->

**The IP address of the LINE Platform isn't disclosed**

Webhook 요청을 보내는 LINE Platform의 IP 주소는 공개되어 있지 않습니다. 보안을 강화하려면 IP 주소 기반 접근 제어 대신 [signature validation](https://developers.line.biz/en/reference/messaging-api/#signature-validation)을 사용하십시오.

<!-- note end -->

### Request headers 

<!-- parameter start -->

x-line-signature

[signature validation](https://developers.line.biz/en/reference/messaging-api/#signature-validation)에 사용됩니다.

<!-- parameter end -->

<!-- note start -->

**Request header field names are case insensitive**

[Request headers](https://developers.line.biz/en/reference/messaging-api/#request-headers) 필드 이름의 대문자와 소문자는 예고 없이 변경될 수 있습니다. Webhook을 받는 봇 서버는 헤더 필드 이름을 대소문자를 구분하지 않고 처리해야 합니다. \*1

|                           | 변경 전            | 변경 후            |
| ------------------------- | ------------------ | ------------------ |
| Header field name example | `X-Line-Signature` | `x-line-signature` |

\*1 [https://datatracker.ietf.org/doc/html/rfc7230#section-3.2](https://datatracker.ietf.org/doc/html/rfc7230#section-3.2)

<!-- note end -->

### Request body 

요청 본문에는 webhook 이벤트를 받아야 하는 봇의 사용자 ID와 [webhook event object](https://developers.line.biz/en/reference/messaging-api/#webhook-event-objects)의 배열이 담긴 JSON 객체가 포함됩니다.

<!-- parameter start -->

destination

String

Webhook 이벤트를 받아야 하는 봇의 사용자 ID입니다. 이 사용자 ID 값은 정규 표현식 `U[0-9a-f]{32}`와 일치하는 문자열입니다.

<!-- parameter end -->
<!-- parameter start -->

events

Array

[webhook event object](https://developers.line.biz/en/reference/messaging-api/#webhook-event-objects)의 배열입니다. LINE Platform은 통신을 확인하기 위해 webhook 이벤트 객체를 포함하지 않는 빈 배열을 보낼 수 있습니다.

<!-- parameter end -->

### Response 

봇 서버는 LINE Platform에서 보낸 HTTP POST 요청을 받은 후 상태 코드 `200`을 반환해야 합니다.

<!-- note start -->

**Note**

- 봇 서버가 LINE Platform에서 보낸 HTTP POST 요청을 받지 못하더라도 봇 서버는 이 요청을 다시 받을 수 있습니다. 자세한 내용은 [Redeliver a webhook that failed to be received](https://developers.line.biz/en/docs/messaging-api/receiving-messages/#webhook-redelivery)를 참조하십시오.
- LINE Platform은 통신을 확인하기 위해 webhook 이벤트가 포함되지 않은 HTTP POST 요청을 보낼 수 있습니다. 이 경우 `200` 상태 코드를 반환하십시오.

  Webhook 이벤트가 없는 HTTP POST 요청의 예:

  ```json
  {
    "destination": "xxxxxxxxxx",
    "events": []
  }
  ```

<!-- note end -->

### Signature validation 

봇 서버가 webhook 이벤트를 받으면, [webhook event object](https://developers.line.biz/en/reference/messaging-api/#webhook-event-objects)를 처리하기 전에 요청 헤더에 포함된 서명을 검증하십시오. 이 검증 단계는 webhook이 LINE Platform에서 보낸 것이며 전송 중에 변조되지 않았음을 확인하는 데 중요합니다.

자세한 내용은 [Verify webhook signature](https://developers.line.biz/en/docs/messaging-api/verify-webhook-signature/)를 참조하십시오.

_Example of signature validation_

<!-- tab start `java` -->

```java
String channelSecret = '...'; // Channel secret string
String httpRequestBody = '...'; // Request body string
SecretKeySpec key = new SecretKeySpec(channelSecret.getBytes(), "HmacSHA256");
Mac mac = Mac.getInstance("HmacSHA256");
mac.init(key);
byte[] source = httpRequestBody.getBytes("UTF-8");
String signature = Base64.encodeBase64String(mac.doFinal(source));
// Compare x-line-signature request header string and the signature
```

<!-- tab end -->
<!-- tab start `ruby` -->

```ruby
CHANNEL_SECRET = '...' # Channel secret string
http_request_body = request.raw_post # Request body string
hash = OpenSSL::HMAC::digest(OpenSSL::Digest::SHA256.new, CHANNEL_SECRET, http_request_body)
signature = Base64.strict_encode64(hash)
# Compare x-line-signature request header string and the signature
```

<!-- tab end -->
<!-- tab start `go` -->

```go
defer req.Body.Close()
body, err := ioutil.ReadAll(req.Body)
if err != nil {
  // ...
}
decoded, err := base64.StdEncoding.DecodeString(req.Header.Get("x-line-signature"))
if err != nil {
  // ...
}
hash := hmac.New(sha256.New, []byte("<channel secret>"))
hash.Write(body)
// Compare decoded signature and `hash.Sum(nil)` by using `hmac.Equal`
```

<!-- tab end -->
<!-- tab start `php` -->

```php
$channelSecret = '...'; // Channel secret string
$httpRequestBody = '...'; // Request body string
$hash = hash_hmac('sha256', $httpRequestBody, $channelSecret, true);
$signature = base64_encode($hash);
// Compare x-line-signature request header string and the signature
```

<!-- tab end -->
<!-- tab start `perl` -->

```perl
use Digest::SHA 'hmac_sha256';
use MIME::Base64 'encode_base64';

my $channel_secret= '...'; # Channel secret string
my $http_body = '...'; # Request body string
my $signature = encode_base64(hmac_sha256($http_body, $channel_secret));
# Compare x-line-signature request header string and the signature
```

<!-- tab end -->
<!-- tab start `python` -->

```python
import base64
import hashlib
import hmac

channel_secret = '...' # Channel secret string
body = '...' # Request body string
hash = hmac.new(channel_secret.encode('utf-8'),
    body.encode('utf-8'), hashlib.sha256).digest()
signature = base64.b64encode(hash)
# Compare x-line-signature request header and the signature
```

<!-- tab end -->
<!-- tab start `nodejs` -->

```javascript
const crypto = require("crypto");

const channelSecret = "..."; // Channel secret string
const body = "..."; // Request body string
const signature = crypto
  .createHmac("SHA256", channelSecret)
  .update(body)
  .digest("base64");
// Compare x-line-signature request header and the signature
```

<!-- tab end -->

## Webhook Event Objects 

LINE Platform에서 발생한 이벤트를 담고 있는 JSON 객체입니다.

이러한 이벤트 객체의 일부 속성에는 값이 없을 수 있습니다. 생성된 이벤트 객체에는 값이 없는 속성이 포함되지 않습니다.

<!-- tip start -->

**A single webhook may contain multiple webhook event objects**

LINE Platform에서 보낸 webhook에는 여러 개의 webhook event object가 포함될 수 있습니다. Webhook 하나에 반드시 사용자 한 명의 이벤트만 있는 것은 아닙니다. 예를 들어 A 사용자의 [message event](https://developers.line.biz/en/reference/messaging-api/#message-event)와 B 사용자의 [follow event](https://developers.line.biz/en/reference/messaging-api/#follow-event)가 같은 webhook에 포함될 수 있습니다.

여러 이벤트 객체가 포함된 webhook을 받더라도 봇 서버가 그 내용에 따라 적절히 처리할 수 있도록 구현하십시오. 자세한 내용은 Webhook의 [request body](https://developers.line.biz/en/reference/messaging-api/#request-body)를 참조하십시오.

<!-- tip end -->

_Example webhook event object_

<!-- tab start `json` -->

```json
{
  "destination": "xxxxxxxxxx",
  "events": [
    {
      "type": "message",
      "message": {
        "type": "text",
        "id": "14353798921116",
        "text": "Hello, world"
      },
      "timestamp": 1625665242211,
      "source": {
        "type": "user",
        "userId": "U80696558e1aa831..."
      },
      "replyToken": "757913772c4646b784d4b7ce46d12671",
      "mode": "active",
      "webhookEventId": "01FZ74A0TDDPYRVKNK77XKC3ZR",
      "deliveryContext": {
        "isRedelivery": false
      }
    },
    {
      "type": "follow",
      "timestamp": 1625665242214,
      "source": {
        "type": "user",
        "userId": "Ufc729a925b3abef..."
      },
      "replyToken": "bb173f4d9cf64aed9d408ab4e36339ad",
      "mode": "active",
      "webhookEventId": "01FZ74ASS536FW97EX38NKCZQK",
      "deliveryContext": {
        "isRedelivery": false
      }
    },
    {
      "type": "unfollow",
      "timestamp": 1625665242215,
      "source": {
        "type": "user",
        "userId": "Ubbd4f124aee5113..."
      },
      "mode": "active",
      "webhookEventId": "01FZ74B5Y0F4TNKA5SCAVKPEDM",
      "deliveryContext": {
        "isRedelivery": false
      }
    }
  ]
}
```

<!-- tab end -->

### Common properties 

다음 속성은 webhook event object의 공통 속성입니다.

<!-- parameter start -->

type

String

이벤트 유형을 나타내는 식별자

<!-- parameter end -->
<!-- parameter start -->

mode

String

채널 상태입니다.

- `active`: 채널이 활성 상태입니다. 이 webhook 이벤트를 받은 봇 서버에서 reply message 또는 push message 등을 보낼 수 있습니다.
- `standby`: 채널이 대기 상태입니다. 채널 상태가 `standby`이면 webhook 이벤트에는 [send reply message](https://developers.line.biz/en/reference/messaging-api/#send-reply-message)에 사용할 reply token이 포함되지 않습니다. 채널 상태가 `standby`로 설정되는 시점에 대한 자세한 내용은 module 문서의 [Get webhook event](https://developers.line.biz/en/docs/partner-docs/module/#bot-module-channel-receive-webhook)를 참조하십시오.

<!-- note start -->

**When the channel state is standby, the bot server shouldn't send any messages**

채널 상태가 `standby`이면 [module](https://developers.line.biz/en/docs/partner-docs/module/)이 받은 webhook 이벤트의 내용에 응답하거나 다른 방식으로 반응하고 있을 수 있습니다. 사용자와 module이 상호작용하는 동안 봇이 메시지를 보내면 사용자가 혼란스러워질 수 있습니다. 따라서 `mode` 속성이 `standby`인 webhook 이벤트를 받은 봇 서버는 어떤 메시지도 보내지 않아야 합니다.

<!-- note end -->

<!-- parameter end -->
<!-- parameter start -->

timestamp

Number

이벤트가 발생한 UNIX time(밀리초 단위)입니다. 재전송된 webhook의 경우에도 재전송된 시간이 아니라 이벤트가 발생한 시간을 나타냅니다.

<!-- note start -->

**Check timestamp if webhook redelivery is enabled**

[webhook 재전송](https://developers.line.biz/en/docs/messaging-api/receiving-messages/#webhook-redelivery)이 활성화되어 있으면 webhook 이벤트가 발생한 순서와 봇 서버에 도달한 순서가 크게 다를 수 있습니다. 이것이 문제가 된다면 `timestamp`를 확인하여 상황을 파악하십시오.

<!-- note end -->

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

source

Object

이벤트의 출처에 대한 정보를 담은 [user](https://developers.line.biz/en/reference/messaging-api/#source-user), [group chat](https://developers.line.biz/en/reference/messaging-api/#source-group) 또는 [multi-person chat](https://developers.line.biz/en/reference/messaging-api/#source-room) 객체입니다.

계정 연결에 실패한 경우 [account link event](https://developers.line.biz/en/reference/messaging-api/#account-link-event)에는 이 속성이 포함되지 않습니다.

<!-- parameter end -->
<!-- parameter start -->

webhookEventId

String

Webhook 이벤트 ID입니다. Webhook 이벤트를 고유하게 식별하는 ID입니다. ULID 형식의 문자열입니다.

<!-- parameter end -->
<!-- parameter start -->

deliveryContext.isRedelivery

Boolean

Webhook 이벤트가 재전송된 것인지 여부입니다. 자세한 내용은 [Redelivered webhooks](https://developers.line.biz/en/docs/messaging-api/receiving-messages/#redelivered-webhooks)를 참조하십시오.

- `true`: 재전송된 webhook 이벤트입니다.
- `false`: 처음 전송된 webhook 이벤트입니다.

<!-- parameter end -->

#### Source user 

<!-- parameter start -->

type

String

`user`

<!-- parameter end -->
<!-- parameter start -->

userId

String

출처 사용자의 ID

<!-- parameter end -->

_Source user example_

<!-- tab start `json` -->

```json
  "source": {
    "type": "user",
    "userId": "U4af4980629..."
  }
```

<!-- tab end -->

#### Source group chat 

<!-- parameter start -->

type

String

`group`

<!-- parameter end -->
<!-- parameter start -->

groupId

String

출처 그룹 채팅의 그룹 ID

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

userId

String

출처 사용자의 ID입니다. [message event](https://developers.line.biz/en/reference/messaging-api/#message-event)에만 포함됩니다. `userId`에는 LINE for iOS와 LINE for Android 사용자만 포함됩니다. 자세한 내용은 [Consent on getting user profile information](https://developers.line.biz/en/docs/messaging-api/user-consent/)을 참조하십시오.

<!-- parameter end -->

_Source group chat example_

<!-- tab start `json` -->

```json
  "source": {
    "type": "group",
    "groupId": "Ca56f94637c...",
    "userId": "U4af4980629..."
  }
```

<!-- tab end -->

#### Source multi-person chat 

<!-- parameter start -->

type

String

`room`

<!-- parameter end -->
<!-- parameter start -->

roomId

String

출처 다인 채팅의 룸 ID

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

userId

String

출처 사용자의 ID입니다. [message event](https://developers.line.biz/en/reference/messaging-api/#message-event)에만 포함됩니다. `userId`에는 LINE for iOS와 LINE for Android 사용자만 포함됩니다. 자세한 내용은 [Consent on getting user profile information](https://developers.line.biz/en/docs/messaging-api/user-consent/)을 참조하십시오.

<!-- parameter end -->

_Source multi-person chat example_

<!-- tab start `json` -->

```json
  "source": {
    "type": "room",
    "roomId": "Ra8dbf4673c...",
    "userId": "U4af4980629..."
  }
```

<!-- tab end -->

### Message event 

사용자가 보낸 메시지를 담은 webhook event object입니다. `message` 속성에는 메시지 유형에 해당하는 message 객체가 포함됩니다. Message event에는 답장할 수 있습니다.

<!-- parameter start -->

timestamp, source 등

[Common Properties](https://developers.line.biz/en/reference/messaging-api/#common-properties)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start -->

type

String

`message`

<!-- parameter end -->
<!-- parameter start -->

replyToken

String

이 이벤트에 [reply message를 보내는](https://developers.line.biz/en/reference/messaging-api/#send-reply-message) 데 사용되는 reply token

<!-- parameter end -->
<!-- parameter start -->

message

Object

메시지의 내용을 담은 객체입니다. 메시지 유형은 다음과 같습니다.

- [Text](https://developers.line.biz/en/reference/messaging-api/#wh-text)
- [Image](https://developers.line.biz/en/reference/messaging-api/#wh-image)
- [Video](https://developers.line.biz/en/reference/messaging-api/#wh-video)
- [Audio](https://developers.line.biz/en/reference/messaging-api/#wh-audio)
- [File](https://developers.line.biz/en/reference/messaging-api/#wh-file)
- [Location](https://developers.line.biz/en/reference/messaging-api/#wh-location)
- [Sticker](https://developers.line.biz/en/reference/messaging-api/#wh-sticker)

<!-- parameter end -->

#### Text 

출처에서 보낸 텍스트를 담은 message 객체입니다.

<!-- parameter start -->

id

String

메시지 ID입니다.

이벤트가 편집 이벤트인 경우 메시지 ID는 원래 message event의 메시지 ID와 같습니다.

<!-- parameter end -->
<!-- parameter start -->

type

String

`text`

<!-- parameter end -->
<!-- parameter start -->

quoteToken

String

메시지의 quote token입니다. 자세한 내용은 Messaging API 문서의 [Get quote tokens](https://developers.line.biz/en/docs/messaging-api/get-quote-tokens/)를 참조하십시오.

편집 이벤트의 quote token은 원래 message event의 quote token과 값이 다릅니다. 편집된 메시지를 인용할 때는 두 quote token 중 어느 것을 사용해도 됩니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

markAsReadToken

String

Read token입니다. 이 token으로 메시지를 읽음으로 표시할 수 있습니다. 만료 기한이 없습니다. 자세한 내용은 Messaging API 문서의 [Mark messages as read](https://developers.line.biz/en/docs/messaging-api/mark-as-read/)를 참조하십시오.

편집 이벤트에는 read token이 포함되지 않습니다.

<!-- parameter end -->
<!-- parameter start -->

text

String

메시지 텍스트입니다.

- 최종 사용자가 LINE 이모지를 보내면 `(hello)` 또는 `(love)`와 같은 문자열로 LINE 이모지가 포함됩니다. LINE 이모지의 세부 정보는 `emojis` 속성에서 확인할 수 있습니다.
- 최종 사용자가 누군가를 멘션하면 `@example`과 같은 문자열로 수신자 LINE 계정의 표시 이름이 포함됩니다. 멘션의 세부 정보는 `mention` 속성에서 확인할 수 있습니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

emojis

Array

하나 이상의 LINE 이모지 객체의 배열입니다. `text` 속성에 LINE 이모지가 포함된 경우에만 message event에 포함됩니다.

<!-- note start -->

**Sent LINE emoji may not be included in the emojis property**

- LINE for Android에서 보낸 기본 LINE 이모지는 포함되지 않습니다.
- 유니코드로 정의된 이모지와 이전 버전의 LINE 이모지는 올바르게 가져오지 못할 수 있습니다.

<!-- note end -->

<!-- parameter end -->
<!-- parameter start -->

emojis\[].index

Number

`text`에서 문자의 인덱스 위치입니다. 첫 번째 문자의 위치는 `0`입니다.

<!-- parameter end -->
<!-- parameter start -->

emojis\[].length

Number

LINE 이모지 문자열의 길이입니다. LINE 이모지 `(hello)`의 길이는 `7`입니다.

<!-- parameter end -->
<!-- parameter start -->

emojis\[].productId

String

LINE 이모지 세트의 product ID입니다. Product ID의 예는 [LINE emoji](https://developers.line.biz/en/docs/messaging-api/emoji-list/)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start -->

emojis\[].emojiId

String

세트 안에 있는 LINE 이모지의 ID입니다. Emoji ID의 예는 [LINE emoji](https://developers.line.biz/en/docs/messaging-api/emoji-list/)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

mention

Object

멘션된 사용자의 내용을 담은 객체입니다. `text` 속성에 멘션이 포함된 경우에만 message event에 포함됩니다.

<!-- parameter end -->
<!-- parameter start -->

mention.mentionees[]

Array of objects

하나 이상의 mention 객체의 배열입니다.

최대: 20개의 멘션

<!-- parameter end -->
<!-- parameter start -->

mention.mentionees[].index

Number

`text`에서 사용자 멘션의 문자 인덱스 위치입니다. 첫 번째 문자의 위치는 `0`입니다.

<!-- parameter end -->
<!-- parameter start -->

mention.mentionees[].length

Number

멘션된 사용자 텍스트의 길이입니다. `@example` 멘션의 길이는 8입니다.

<!-- parameter end -->
<!-- parameter start -->

mention.mentionees[].type

String

멘션 대상입니다.

- `user`: 사용자 또는 봇입니다.
- `all`: 그룹 전체입니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

mention.mentionees[].userId

String

멘션된 사용자 또는 봇의 사용자 ID입니다. `mention.mentions[].type`이 `user`인 경우에만 포함됩니다. 멘션 대상이 사용자이면 LINE Official Account가 사용자 프로필 정보를 가져오는 것에 [사용자가 동의한](https://developers.line.biz/en/docs/messaging-api/user-consent/) 경우에만 포함됩니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

mention.mentionees[].isSelf

Boolean

멘션이 webhook 이벤트를 받은 봇(`destination`)을 대상으로 하는지 여부입니다. `mention.mentionees[].type` 속성 값이 `user`인 경우에만 포함됩니다.

- `true`: webhook 이벤트를 받은 봇을 대상으로 한 멘션입니다.
- `false`: 다른 사용자를 대상으로 한 멘션입니다.

자세한 내용은 Messaging API 문서의 [Webhook when a message including a mention to a bot is sent](https://developers.line.biz/en/docs/messaging-api/receiving-messages/#webhook-message-with-mention-to-bot)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

quotedMessageId

String

인용된 메시지의 메시지 ID입니다. 받은 메시지가 과거 메시지를 인용한 경우에만 포함됩니다.

<!-- parameter end -->

_Text message example_

<!-- tab start `json` -->

```json
// When a user sends a text message containing mention and an emoji in a group chat
{
  "destination": "xxxxxxxxxx",
  "events": [
    {
      "replyToken": "nHuyWiB7yP5Zw52FIkcQobQuGDXCTA",
      "type": "message",
      "mode": "active",
      "timestamp": 1462629479859,
      "source": {
        "type": "group",
        "groupId": "Ca56f94637c...",
        "userId": "U4af4980629..."
      },
      "webhookEventId": "01FZ74A0TDDPYRVKNK77XKC3ZR",
      "deliveryContext": {
        "isRedelivery": false
      },
      "message": {
        "id": "444573844083572737",
        "type": "text",
        "quoteToken": "q3Plxr4AgKd...",
        "markAsReadToken": "30yhdy232...",
        "text": "@All @example Good Morning!! (love)",
        "emojis": [
          {
            "index": 29,
            "length": 6,
            "productId": "5ac1bfd5040ab15980c9b435",
            "emojiId": "001"
          }
        ],
        "mention": {
          "mentionees": [
            {
              "index": 0,
              "length": 4,
              "type": "all"
            },
            {
              "index": 5,
              "length": 8,
              "userId": "U49585cd0d5...",
              "type": "user",
              "isSelf": false
            }
          ]
        }
      }
    }
  ]
}
```

<!-- tab end -->

#### Image 

출처에서 보낸 이미지 콘텐츠를 담은 message 객체입니다.

<!-- parameter start -->

id

String

메시지 ID

<!-- parameter end -->
<!-- parameter start -->

type

String

`image`

<!-- parameter end -->
<!-- parameter start -->

quoteToken

String

메시지의 quote token입니다. 자세한 내용은 Messaging API 문서의 [Get quote tokens](https://developers.line.biz/en/docs/messaging-api/get-quote-tokens/)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start -->

markAsReadToken

String

Read token입니다. 이 token으로 메시지를 읽음으로 표시할 수 있습니다. 만료 기한이 없습니다. 자세한 내용은 Messaging API 문서의 [Mark messages as read](https://developers.line.biz/en/docs/messaging-api/mark-as-read/)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start -->

contentProvider.type

String

이미지 파일의 제공자입니다.

- `line`: LINE 사용자가 이미지를 보냈습니다. 메시지 ID를 지정하여 [Get content](https://developers.line.biz/en/reference/messaging-api/#get-content) endpoint를 호출하면 이미지 파일의 바이너리 데이터를 가져올 수 있습니다.
- `external`: 이미지 파일의 URL은 `contentProvider.originalContentUrl` 속성에 포함됩니다. 이미지 파일의 제공자가 `external`이면 [Get content](https://developers.line.biz/en/reference/messaging-api/#get-content) endpoint를 사용하여 이미지 파일의 바이너리 데이터를 가져올 수 없습니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

contentProvider.originalContentUrl

String

이미지 파일의 URL입니다. `contentProvider.type`이 `external`인 경우에만 포함됩니다. 이미지 파일이 있는 서버는 LY Corporation이 제공하지 않습니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

contentProvider.previewImageUrl

String

미리보기 이미지의 URL입니다. `contentProvider.type`이 `external`인 경우에만 포함됩니다. 미리보기 이미지 파일이 있는 서버는 LY Corporation이 제공하지 않습니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

imageSet.id

String

이미지 세트 ID입니다. 여러 이미지를 동시에 보낸 경우에만 포함됩니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

imageSet.index

Number

동시에 보낸 이미지 세트에서 이미지의 번호를 나타내는, `1`부터 시작하는 인덱스입니다. 여러 이미지를 동시에 보낸 경우에만 포함됩니다. 다만 보낸 사람이 Android에서 LINE 11.15 이하를 사용하는 경우에는 포함되지 않습니다.

<!-- tip start -->

**The order in which webhooks are delivered is undefined**

사용자가 여러 이미지를 동시에 보내면 LINE Platform은 봇 서버로 여러 webhook 이벤트를 보냅니다. Webhook은 `imageSet.index` 값의 순서가 아니라 정해지지 않은 순서로 전달됩니다.

<!-- tip end -->

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

imageSet.total

Number

동시에 보낸 이미지의 총 개수입니다. 이미지 두 개를 동시에 보낸 경우 값은 `2`입니다. 여러 이미지를 동시에 보낸 경우에만 포함됩니다. 다만 보낸 사람이 Android에서 LINE 11.15 이하를 사용하는 경우에는 포함되지 않습니다.

<!-- parameter end -->

_Image message example_

<!-- tab start `json` -->

```json
// When two images are sent simultaneously (First image)
{
    "destination": "xxxxxxxxxx",
    "events": [
        {
            "type": "message",
            "message": {
                "type": "image",
                "id": "354718705033693859",
                "quoteToken": "q3Plxr4AgKd...",
                "markAsReadToken": "30yhdy232...",
                "contentProvider": {
                    "type": "line"
                },
                "imageSet": {
                    "id": "E005D41A7288F41B65593ED38FF6E9834B046AB36A37921A56BC236F13A91855",
                    "index": 1,
                    "total": 2
                }
            },
            "timestamp": 1627356924513,
            "source": {
                "type": "user",
                "userId": "U4af4980629..."
            },
            "webhookEventId": "01FZ74A0TDDPYRVKNK77XKC3ZR",
            "deliveryContext": {
                "isRedelivery": false
            },
            "replyToken": "7840b71058e24a5d91f9b5726c7512c9",
            "mode": "active"
        }
    ]
}

// When two images are sent simultaneously (Second image)
{
    "destination": "xxxxxxxxxx",
    "events": [
        {
            "type": "message",
            "message": {
                "type": "image",
                "id": "354718705033693861",
                "quoteToken": "yHAz4Ua2wx7...",
                "markAsReadToken": "30yhdy232...",
                "contentProvider": {
                    "type": "line"
                },
                "imageSet": {
                    "id": "E005D41A7288F41B65593ED38FF6E9834B046AB36A37921A56BC236F13A91855",
                    "index": 2,
                    "total": 2
                }
            },
            "timestamp": 1627356924722,
            "source": {
                "type": "user",
                "userId": "U4af4980629..."
            },
            "webhookEventId": "01FZ74A0TDDPYRVKNK77XKC3ZR",
            "deliveryContext": {
                "isRedelivery": false
            },
            "replyToken": "fbf94e269485410da6b7e3a5e33283e8",
            "mode": "active"
        }
    ]
}
```

<!-- tab end -->

#### Video 

출처에서 보낸 동영상 콘텐츠를 담은 message 객체입니다. 채팅에는 미리보기 이미지가 표시되며, 이미지를 탭하면 동영상이 재생됩니다.

<!-- parameter start -->

id

String

메시지 ID

<!-- parameter end -->
<!-- parameter start -->

type

String

`video`

<!-- parameter end -->
<!-- parameter start -->

quoteToken

String

메시지의 quote token입니다. 자세한 내용은 Messaging API 문서의 [Get quote tokens](https://developers.line.biz/en/docs/messaging-api/get-quote-tokens/)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start -->

markAsReadToken

String

Read token입니다. 이 token으로 메시지를 읽음으로 표시할 수 있습니다. 만료 기한이 없습니다. 자세한 내용은 Messaging API 문서의 [Mark messages as read](https://developers.line.biz/en/docs/messaging-api/mark-as-read/)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

duration

Number

동영상 파일의 길이(밀리초)입니다.

<!-- parameter end -->
<!-- parameter start -->

contentProvider.type

String

동영상 파일의 제공자입니다.

- `line`: LINE 사용자가 동영상을 보냈습니다. 메시지 ID를 지정하여 [Get content](https://developers.line.biz/en/reference/messaging-api/#get-content) endpoint를 호출하면 동영상 파일의 바이너리 데이터를 가져올 수 있습니다.
- `external`: 동영상 파일의 URL은 `contentProvider.originalContentUrl` 속성에 포함됩니다. 동영상 파일의 제공자가 `external`이면 [Get content](https://developers.line.biz/en/reference/messaging-api/#get-content) endpoint를 사용하여 동영상 파일의 바이너리 데이터를 가져올 수 없습니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

contentProvider.originalContentUrl

String

동영상 파일의 URL입니다. `contentProvider.type`이 `external`인 경우에만 포함됩니다. 동영상 파일이 있는 서버는 LY Corporation이 제공하지 않습니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

contentProvider.previewImageUrl

String

미리보기 이미지의 URL입니다. `contentProvider.type`이 `external`인 경우에만 포함됩니다. 미리보기 이미지 파일이 있는 서버는 LY Corporation이 제공하지 않습니다.

<!-- parameter end -->

_Video message example_

<!-- tab start `json` -->

```json
{
  "destination": "xxxxxxxxxx",
  "events": [
    {
      "replyToken": "nHuyWiB7yP5Zw52FIkcQobQuGDXCTA",
      "type": "message",
      "mode": "active",
      "timestamp": 1462629479859,
      "source": {
        "type": "user",
        "userId": "U4af4980629..."
      },
      "webhookEventId": "01FZ74A0TDDPYRVKNK77XKC3ZR",
      "deliveryContext": {
        "isRedelivery": false
      },
      "message": {
        "id": "325708",
        "type": "video",
        "quoteToken": "q3Plxr4AgKd...",
        "markAsReadToken": "30yhdy232...",
        "duration": 60000,
        "contentProvider": {
          "type": "external",
          "originalContentUrl": "https://example.com/original.mp4",
          "previewImageUrl": "https://example.com/preview.jpg"
        }
      }
    }
  ]
}
```

<!-- tab end -->

#### Audio 

출처에서 보낸 오디오 콘텐츠를 담은 message 객체입니다.

<!-- parameter start -->

id

String

메시지 ID

<!-- parameter end -->
<!-- parameter start -->

type

String

`audio`

<!-- parameter end -->
<!-- parameter start -->

markAsReadToken

String

Read token입니다. 이 token으로 메시지를 읽음으로 표시할 수 있습니다. 만료 기한이 없습니다. 자세한 내용은 Messaging API 문서의 [Mark messages as read](https://developers.line.biz/en/docs/messaging-api/mark-as-read/)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

duration

Number

오디오 파일의 길이(밀리초)입니다.

<!-- parameter end -->
<!-- parameter start -->

contentProvider.type

String

오디오 파일의 제공자입니다.

- `line`: LINE 사용자가 오디오를 보냈습니다. 메시지 ID를 지정하여 [Get content](https://developers.line.biz/en/reference/messaging-api/#get-content) endpoint를 호출하면 오디오 파일의 바이너리 데이터를 가져올 수 있습니다.
- `external`: 오디오 파일의 URL은 `contentProvider.originalContentUrl` 속성에 포함됩니다. 오디오 파일의 제공자가 `external`이면 [Get content](https://developers.line.biz/en/reference/messaging-api/#get-content) endpoint를 사용하여 오디오 파일의 바이너리 데이터를 가져올 수 없습니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

contentProvider.originalContentUrl

String

오디오 파일의 URL입니다. `contentProvider.type`이 `external`인 경우에만 포함됩니다. 오디오 파일이 있는 서버는 LY Corporation이 제공하지 않습니다.

<!-- parameter end -->

_Audio message example_

<!-- tab start `json` -->

```json
{
  "destination": "xxxxxxxxxx",
  "events": [
    {
      "replyToken": "nHuyWiB7yP5Zw52FIkcQobQuGDXCTA",
      "type": "message",
      "mode": "active",
      "timestamp": 1462629479859,
      "source": {
        "type": "user",
        "userId": "U4af4980629..."
      },
      "webhookEventId": "01FZ74A0TDDPYRVKNK77XKC3ZR",
      "deliveryContext": {
        "isRedelivery": false
      },
      "message": {
        "id": "325708",
        "type": "audio",
        "markAsReadToken": "30yhdy232...",
        "duration": 60000,
        "contentProvider": {
          "type": "line"
        }
      }
    }
  ]
}
```

<!-- tab end -->

#### File 

출처에서 보낸 파일을 담은 message 객체입니다. 메시지 ID를 지정하여 API를 호출하면 파일의 바이너리 데이터를 가져올 수 있습니다. 자세한 내용은 [Get content](https://developers.line.biz/en/reference/messaging-api/#get-content)를 참조하십시오.

<!-- parameter start -->

id

String

메시지 ID

<!-- parameter end -->
<!-- parameter start -->

type

String

`file`

<!-- parameter end -->
<!-- parameter start -->

markAsReadToken

String

Read token입니다. 이 token으로 메시지를 읽음으로 표시할 수 있습니다. 만료 기한이 없습니다. 자세한 내용은 Messaging API 문서의 [Mark messages as read](https://developers.line.biz/en/docs/messaging-api/mark-as-read/)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start -->

fileName

String

파일 이름

<!-- parameter end -->
<!-- parameter start -->

fileSize

Number

파일 크기(바이트)

<!-- parameter end -->

_File message example_

<!-- tab start `json` -->

```json
{
  "destination": "xxxxxxxxxx",
  "events": [
    {
      "replyToken": "nHuyWiB7yP5Zw52FIkcQobQuGDXCTA",
      "type": "message",
      "mode": "active",
      "timestamp": 1462629479859,
      "source": {
        "type": "user",
        "userId": "U4af4980629..."
      },
      "webhookEventId": "01FZ74A0TDDPYRVKNK77XKC3ZR",
      "deliveryContext": {
        "isRedelivery": false
      },
      "message": {
        "id": "325708",
        "type": "file",
        "markAsReadToken": "30yhdy232...",
        "fileName": "file.txt",
        "fileSize": 2138
      }
    }
  ]
}
```

<!-- tab end -->

#### Location 

출처에서 보낸 위치 데이터를 담은 message 객체입니다.

<!-- parameter start -->

id

String

메시지 ID

<!-- parameter end -->
<!-- parameter start -->

type

String

`location`

<!-- parameter end -->
<!-- parameter start -->

markAsReadToken

String

Read token입니다. 이 token으로 메시지를 읽음으로 표시할 수 있습니다. 만료 기한이 없습니다. 자세한 내용은 Messaging API 문서의 [Mark messages as read](https://developers.line.biz/en/docs/messaging-api/mark-as-read/)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

title

String

제목

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

address

String

주소

<!-- parameter end -->
<!-- parameter start -->

latitude

Decimal

위도

<!-- parameter end -->
<!-- parameter start -->

longitude

Decimal

경도

<!-- parameter end -->

_Location message example_

<!-- tab start `json` -->

```json
{
  "destination": "xxxxxxxxxx",
  "events": [
    {
      "replyToken": "nHuyWiB7yP5Zw52FIkcQobQuGDXCTA",
      "type": "message",
      "mode": "active",
      "timestamp": 1462629479859,
      "source": {
        "type": "user",
        "userId": "U4af4980629..."
      },
      "webhookEventId": "01FZ74A0TDDPYRVKNK77XKC3ZR",
      "deliveryContext": {
        "isRedelivery": false
      },
      "message": {
        "id": "325708",
        "type": "location",
        "markAsReadToken": "30yhdy232...",
        "title": "my location",
        "address": "1-3 Kioicho, Chiyoda-ku, Tokyo, 102-8282 Japan",
        "latitude": 35.67966,
        "longitude": 139.73669
      }
    }
  ]
}
```

<!-- tab end -->

#### Sticker 

출처에서 보낸 스티커 데이터를 담은 message 객체입니다. LINE 기본 스티커의 목록과 스티커 ID는 [Stickers](https://developers.line.biz/en/docs/messaging-api/sticker-list/)를 참조하십시오.

<!-- tip start -->

**You can't retrieve the sticker image**

사용자가 보낸 스티커의 패키지 ID와 스티커 ID는 webhook으로 가져올 수 있지만, 스티커 이미지 자체는 가져올 수 없습니다.

<!-- tip end -->

<!-- tip start -->

**The Sticker Arranging feature isn't supported**

Messaging API는 현재 Sticker Arranging 기능을 지원하지 않으므로 어떤 스티커를 조합했는지에 대한 정보를 가져올 수 없습니다. 사용자가 Sticker Arranging 기능을 사용하여 스티커 메시지를 보내면 webhook으로 다음 스티커 정보가 항상 수신됩니다.

- 패키지 ID: `30563`
- 스티커 ID: `651698630`
- 스티커 리소스 유형: `STATIC`

<!-- tip end -->

<!-- parameter start -->

id

String

메시지 ID

<!-- parameter end -->
<!-- parameter start -->

type

String

`sticker`

<!-- parameter end -->
<!-- parameter start -->

quoteToken

String

메시지의 quote token입니다. 자세한 내용은 Messaging API 문서의 [Get quote tokens](https://developers.line.biz/en/docs/messaging-api/get-quote-tokens/)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start -->

markAsReadToken

String

Read token입니다. 이 token으로 메시지를 읽음으로 표시할 수 있습니다. 만료 기한이 없습니다. 자세한 내용은 Messaging API 문서의 [Mark messages as read](https://developers.line.biz/en/docs/messaging-api/mark-as-read/)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start -->

packageId

String

패키지 ID

<!-- parameter end -->
<!-- parameter start -->

stickerId

String

스티커 ID

<!-- parameter end -->
<!-- parameter start -->

stickerResourceType

String

스티커 리소스 유형입니다. 다음 중 하나입니다.

- `STATIC`: 정지 이미지
- `ANIMATION`: 애니메이션 스티커
- `SOUND`: 사운드가 있는 스티커
- `ANIMATION_SOUND`: 사운드가 있는 애니메이션 스티커
- `POPUP`: 팝업 스티커 또는 Effect 스티커
- `POPUP_SOUND`: 사운드가 있는 팝업 스티커 또는 사운드가 있는 Effect 스티커
- `CUSTOM`: 커스텀 스티커입니다. 사용자가 입력한 텍스트는 가져올 수 없습니다.
- `MESSAGE`: 메시지 스티커
- `NAME_TEXT`: 커스텀 스티커(중단됨)
- `PER_STICKER_TEXT`: 메시지 스티커(중단됨)

<!-- note start -->

**About stickerResourceType**

앞으로 예고 없이 새로운 리소스 유형이 추가될 수 있습니다. 구현이 현재 및 향후의 스티커 리소스 유형을 모두 처리할 수 있도록 하십시오.

<!-- note end -->

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

keywords

Array of strings

스티커를 설명하는 최대 15개 키워드의 배열입니다. 스티커에 키워드가 16개 이상 있으면 그중 무작위로 선택된 15개 키워드가 반환됩니다. 키워드 선택은 이벤트마다 무작위이므로 같은 스티커라도 다른 키워드가 반환될 수 있습니다.

<!-- note start -->

**About keywords**

`keywords` 속성은 현재 실험 단계에 있으며, 앞으로 중단되거나 사양이 변경될 수 있습니다.

<!-- note end -->

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

text

String

사용자가 입력한 텍스트입니다. 메시지 스티커에만 포함됩니다.\
최대 문자 수: 100

<!-- tip start -->

**You can't retrieve the text of custom stickers**

커스텀 스티커의 경우 사용자가 입력한 텍스트를 가져올 수 없습니다.

<!-- tip end -->

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

quotedMessageId

String

인용된 메시지의 메시지 ID입니다. 받은 메시지가 과거 메시지를 인용한 경우에만 포함됩니다.

<!-- parameter end -->

_Sticker message example_

<!-- tab start `json` -->

```json
// Example of animated sticker
{
    "destination": "xxxxxxxxxx",
    "events": [
        {
            "replyToken": "nHuyWiB7yP5Zw52FIkcQobQuGDXCTA",
            "type": "message",
            "mode": "active",
            "timestamp": 1462629479859,
            "source": {
                "type": "user",
                "userId": "U4af4980629..."
            },
            "webhookEventId": "01FZ74A0TDDPYRVKNK77XKC3ZR",
            "deliveryContext": {
                "isRedelivery": false
            },
            "message": {
                "type": "sticker",
                "id": "1501597916",
                "quoteToken": "q3Plxr4AgKd...",
                "markAsReadToken": "30yhdy232...",
                "stickerId": "52002738",
                "packageId": "11537",
                "stickerResourceType": "ANIMATION",
                "keywords": [
                    "cony",
                    "sally",
                    "Staring",
                    "hi",
                    "whatsup",
                    "line",
                    "howdy",
                    "HEY",
                    "Peeking",
                    "wave",
                    "peek",
                    "Hello",
                    "yo",
                    "greetings"
                ]
            }
        }
    ]
}

// Example of message sticker
{
    "destination": "xxxxxxxxxx",
    "events": [
        {
            "type": "message",
            "message": {
                "type": "sticker",
                "id": "123456789012345678",
                "quoteToken": "q3Plxr4AgKd...",
                "markAsReadToken": "30yhdy232...",
                "stickerId": "738839",
                "packageId": "12287",
                "stickerResourceType": "MESSAGE",
                "keywords": [
                    "Anticipation",
                    "Sparkle",
                    "Straight face",
                    "Staring",
                    "Thinking"
                ],
                "text": "Let's\nhang out\nthis weekend!"
            },
            "timestamp": 1635756190879,
            "source": {
                "type": "group",
                "groupId": "C99ae82bcd...",
                "userId": "Ub82c8fd9b..."
            },
            "webhookEventId": "01FZ74A0TDDPYRVKNK77XKC3ZR",
            "deliveryContext": {
                "isRedelivery": false
            },
            "replyToken": "ce8c57ec18374a4b94f40abab97145f8",
            "mode": "active"
        }
    ]
}
```

<!-- tab end -->

### Edit event 

사용자가 메시지를 수정했을 때의 이벤트 객체입니다. `message` 속성에는 수정된 메시지가 포함됩니다. Edit event에는 답장할 수 있습니다.

<!-- parameter start -->

timestamp, source 등

[Common properties](https://developers.line.biz/en/reference/messaging-api/#common-properties)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start -->

type

String

`messageEdited`

<!-- parameter end -->
<!-- parameter start -->

replyToken

String

이 이벤트에 [reply message를 보내는](https://developers.line.biz/en/reference/messaging-api/#send-reply-message) 데 사용되는 reply token입니다.

Edit event의 reply token은 원래 message event의 reply token과 값이 다릅니다.

<!-- parameter end -->
<!-- parameter start -->

message

Object

메시지의 내용을 담은 객체입니다. 메시지 유형은 다음과 같습니다.

- [Text](https://developers.line.biz/en/reference/messaging-api/#wh-text)

<!-- parameter end -->

_Edit event example_

<!-- tab start `json` -->

```json
{
  "destination": "xxxxxxxxxx",
  "events": [
    {
      "type": "messageEdited",
      "replyToken": "950e63e8f46542ab89f645b4c2a1180a",
      "message": {
        "type": "text",
        "id": "610830548529053697",
        "quoteToken": "XyiyoB3R1BA...",
        "text": "Edited message"
      },
      "webhookEventId": "01KPW6071XGPXPAF4XCN96XEAN",
      "deliveryContext": {
        "isRedelivery": false
      },
      "timestamp": 1776914799524,
      "source": {
        "type": "group",
        "groupId": "Ca56f94637c...",
        "userId": "U4af4980629..."
      },
      "mode": "active"
    }
  ]
}
```

<!-- tab end -->

### Unsend event 

사용자가 메시지 전송을 취소(unsend)했을 때의 이벤트 객체입니다.

사용자가 보낸 메시지의 전송을 취소하면 unsend 이벤트가 봇 서버로 전송됩니다. Unsend 이벤트를 받으면, 서비스 제공자는 사용자가 보낸 메시지를 취소하려는 의도를 존중하고, 대상 메시지를 앞으로 볼 수도 사용할 수도 없도록 각별히 주의하여 적절히 처리하는 것을 권장합니다. 자세한 내용은 Messaging API 문서의 [Processing on receipt of unsend event](https://developers.line.biz/en/docs/messaging-api/receiving-messages/#webhook-unsend-message)를 참조하십시오.

<!-- parameter start -->

timestamp, source 등

[Common Properties](https://developers.line.biz/en/reference/messaging-api/#common-properties)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start -->

type

String

`unsend`

<!-- parameter end -->
<!-- parameter start -->

unsend.messageId

String

전송이 취소된 메시지의 메시지 ID

<!-- parameter end -->

_Unsend event example_

<!-- tab start `json` -->

```json
{
  "destination": "xxxxxxxxxx",
  "events": [
    {
      "type": "unsend",
      "mode": "active",
      "timestamp": 1462629479859,
      "source": {
        "type": "group",
        "groupId": "Ca56f94637c...",
        "userId": "U4af4980629..."
      },
      "webhookEventId": "01FZ74A0TDDPYRVKNK77XKC3ZR",
      "deliveryContext": {
        "isRedelivery": false
      },
      "unsend": {
        "messageId": "325708"
      }
    }
  ]
}
```

<!-- tab end -->

### Follow event 

LINE Official Account가 친구로 추가(또는 차단 해제)되었을 때의 이벤트 객체입니다. Follow event에는 답장할 수 있습니다.

<!-- parameter start -->

timestamp, source 등

[Common Properties](https://developers.line.biz/en/reference/messaging-api/#common-properties)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start -->

type

String

`follow`

<!-- parameter end -->
<!-- parameter start -->

replyToken

String

이 이벤트에 [reply message를 보내는](https://developers.line.biz/en/reference/messaging-api/#send-reply-message) 데 사용되는 reply token

<!-- parameter end -->
<!-- parameter start -->

follow.isUnblocked

Boolean

- `true`: 사용자가 LINE Official Account의 차단을 해제했습니다.
- `false`: 사용자가 LINE Official Account를 친구로 추가했습니다.

<!-- note start -->

**Accuracy of follow.isUnblocked**

`follow.isUnblocked` 속성으로 "친구 추가"와 "차단 해제"를 완전히 정확하게 구분할 수 있다고 보장하지는 않습니다.

<!-- note end -->

<!-- parameter end -->

_Follow event example_

<!-- tab start `json` -->

```json
// When the user has added the LINE Official Account as a friend
{
  "destination": "xxxxxxxxxx",
  "events": [
    {
      "replyToken": "85cbe770fa8b4f45bbe077b1d4be4a36",
      "type": "follow",
      "mode": "active",
      "timestamp": 1705891467176,
      "source": {
        "type": "user",
        "userId": "U3d3edab4f36c6292e6d8a8131f141b8b"
      },
      "webhookEventId": "01HMQGW40RZJPJM3RAJP7BHC2Q",
      "deliveryContext": {
        "isRedelivery": false
      },
      "follow": {
        "isUnblocked": false
      }
    }
  ]
}

// When the user has unblocked the LINE Official Account
{
  "destination": "xxxxxxxxxx",
  "events": [
    {
      "replyToken": "nHuyWiB7yP5Zw52FIkcQobQuGDXCTA",
      "type": "follow",
      "mode": "active",
      "timestamp": 1462629479859,
      "source": {
        "type": "user",
        "userId": "U4af4980629..."
      },
      "webhookEventId": "01FZ74A0TDDPYRVKNK77XKC3ZR",
      "deliveryContext": {
        "isRedelivery": false
      },
      "follow": {
        "isUnblocked": true
      }
    }
  ]
}
```

<!-- tab end -->

### Unfollow event 

LINE Official Account가 차단되었을 때의 이벤트 객체입니다.

<!-- parameter start -->

timestamp, source 등

[Common Properties](https://developers.line.biz/en/reference/messaging-api/#common-properties)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start -->

type

String

`unfollow`

<!-- parameter end -->

_Unfollow event example_

<!-- tab start `json` -->

```json
{
  "destination": "xxxxxxxxxx",
  "events": [
    {
      "type": "unfollow",
      "mode": "active",
      "timestamp": 1462629479859,
      "source": {
        "type": "user",
        "userId": "U4af4980629..."
      },
      "webhookEventId": "01FZ74A0TDDPYRVKNK77XKC3ZR",
      "deliveryContext": {
        "isRedelivery": false
      }
    }
  ]
}
```

<!-- tab end -->

### Join event 

LINE Official Account가 [그룹 채팅](https://developers.line.biz/en/docs/messaging-api/group-chats/#group) 또는 [다인 채팅](https://developers.line.biz/en/docs/messaging-api/group-chats/#room)에 참여했을 때의 이벤트 객체입니다. Join event에는 답장할 수 있습니다.

Join 이벤트가 발생하는 시점은 그룹 채팅과 다인 채팅이 서로 다릅니다.

- 그룹 채팅의 경우: 사용자가 LINE Official Account를 초대하면 join 이벤트가 전송됩니다.
- 다인 채팅의 경우: LINE Official Account가 추가된 후 처음 발생하는 이벤트(예: 사용자가 메시지를 보내거나 다인 채팅에 추가되는 경우)가 발생하면 join 이벤트가 전송됩니다.

<!-- parameter start -->

timestamp, source 등

[Common Properties](https://developers.line.biz/en/reference/messaging-api/#common-properties)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start -->

type

String

`join`

<!-- parameter end -->
<!-- parameter start -->

replyToken

String

이 이벤트에 [reply message를 보내는](https://developers.line.biz/en/reference/messaging-api/#send-reply-message) 데 사용되는 reply token

<!-- parameter end -->

_Join event example_

<!-- tab start `json` -->

```json
{
  "destination": "xxxxxxxxxx",
  "events": [
    {
      "replyToken": "nHuyWiB7yP5Zw52FIkcQobQuGDXCTA",
      "type": "join",
      "mode": "active",
      "timestamp": 1462629479859,
      "source": {
        "type": "group",
        "groupId": "C4af4980629..."
      },
      "webhookEventId": "01FZ74A0TDDPYRVKNK77XKC3ZR",
      "deliveryContext": {
        "isRedelivery": false
      }
    }
  ]
}
```

<!-- tab end -->

### Leave event 

사용자가 [그룹 채팅](https://developers.line.biz/en/docs/messaging-api/group-chats/#group)에서 LINE Official Account를 제거했거나, LINE Official Account가 [그룹 채팅](https://developers.line.biz/en/docs/messaging-api/group-chats/#group) 또는 [다인 채팅](https://developers.line.biz/en/docs/messaging-api/group-chats/#room)에서 나갔을 때의 이벤트 객체입니다.

<!-- parameter start -->

timestamp, source 등

[Common Properties](https://developers.line.biz/en/reference/messaging-api/#common-properties)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start -->

type

String

`leave`

<!-- parameter end -->

_Leave event example_

<!-- tab start `json` -->

```json
{
  "destination": "xxxxxxxxxx",
  "events": [
    {
      "type": "leave",
      "mode": "active",
      "timestamp": 1462629479859,
      "source": {
        "type": "group",
        "groupId": "C4af4980629..."
      },
      "webhookEventId": "01FZ74A0TDDPYRVKNK77XKC3ZR",
      "deliveryContext": {
        "isRedelivery": false
      }
    }
  ]
}
```

<!-- tab end -->

### Member join event 

사용자가 LINE Official Account가 참여하고 있는 [그룹 채팅](https://developers.line.biz/en/docs/messaging-api/group-chats/#group) 또는 [다인 채팅](https://developers.line.biz/en/docs/messaging-api/group-chats/#room)에 참여했을 때의 이벤트 객체입니다.

<!-- parameter start -->

timestamp, source 등

[Common Properties](https://developers.line.biz/en/reference/messaging-api/#common-properties)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start -->

type

String

`memberJoined`

<!-- parameter end -->
<!-- parameter start -->

joined.members

Array

참여한 사용자입니다. [source user](https://developers.line.biz/en/reference/messaging-api/#source-user) 객체의 배열입니다.

<!-- parameter end -->
<!-- parameter start -->

replyToken

String

이 이벤트에 [reply message를 보내는](https://developers.line.biz/en/reference/messaging-api/#send-reply-message) 데 사용되는 reply token

<!-- parameter end -->

_Member join event example_

<!-- tab start `json` -->

```json
{
  "destination": "xxxxxxxxxx",
  "events": [
    {
      "replyToken": "0f3779fba3b349968c5d07db31eabf65",
      "type": "memberJoined",
      "mode": "active",
      "timestamp": 1462629479859,
      "source": {
        "type": "group",
        "groupId": "C4af4980629..."
      },
      "webhookEventId": "01FZ74A0TDDPYRVKNK77XKC3ZR",
      "deliveryContext": {
        "isRedelivery": false
      },
      "joined": {
        "members": [
          {
            "type": "user",
            "userId": "U4af4980629..."
          },
          {
            "type": "user",
            "userId": "U91eeaf62d9..."
          }
        ]
      }
    }
  ]
}
```

<!-- tab end -->

### Member leave event 

사용자가 LINE Official Account가 참여하고 있는 [그룹 채팅](https://developers.line.biz/en/docs/messaging-api/group-chats/#group) 또는 [다인 채팅](https://developers.line.biz/en/docs/messaging-api/group-chats/#room)에서 나갔을 때의 이벤트 객체입니다.

<!-- parameter start -->

timestamp, source 등

[Common Properties](https://developers.line.biz/en/reference/messaging-api/#common-properties)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start -->

type

String

`memberLeft`

<!-- parameter end -->
<!-- parameter start -->

left.members

Array

나간 사용자입니다. [source user](https://developers.line.biz/en/reference/messaging-api/#source-user) 객체의 배열입니다.

<!-- parameter end -->

_Member leave event example_

<!-- tab start `json` -->

```json
{
  "destination": "xxxxxxxxxx",
  "events": [
    {
      "type": "memberLeft",
      "mode": "active",
      "timestamp": 1462629479960,
      "source": {
        "type": "group",
        "groupId": "C4af4980629..."
      },
      "webhookEventId": "01FZ74A0TDDPYRVKNK77XKC3ZR",
      "deliveryContext": {
        "isRedelivery": false
      },
      "left": {
        "members": [
          {
            "type": "user",
            "userId": "U4af4980629..."
          },
          {
            "type": "user",
            "userId": "U91eeaf62d9..."
          }
        ]
      }
    }
  ]
}
```

<!-- tab end -->

### Postback event 

사용자가 [postback action](https://developers.line.biz/en/reference/messaging-api/#postback-action)을 실행하여 postback이 시작되었을 때의 이벤트 객체입니다. Postback event에는 답장할 수 있습니다.

<!-- parameter start -->

timestamp, source 등

[Common Properties](https://developers.line.biz/en/reference/messaging-api/#common-properties)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start -->

type

String

`postback`

<!-- parameter end -->
<!-- parameter start -->

replyToken

String

이 이벤트에 [reply message를 보내는](https://developers.line.biz/en/reference/messaging-api/#send-reply-message) 데 사용되는 reply token

<!-- parameter end -->
<!-- parameter start -->

postback.data

String

Postback 데이터

<!-- parameter end -->
<!-- parameter start -->

[postback.params](https://developers.line.biz/en/reference/messaging-api/#postback-params-object)

Object

다음 JSON 객체 중 하나입니다.

- [날짜와 시간 선택 action용 `postback.params` 객체](https://developers.line.biz/en/reference/messaging-api/#postback-params-object).
  - [Datetime picker action](https://developers.line.biz/en/reference/messaging-api/#datetime-picker-action)으로 사용자가 선택한 날짜와 시간이 담긴 JSON 객체입니다.
  - [Datetime picker action](https://developers.line.biz/en/reference/messaging-api/#datetime-picker-action)에 의한 postback action에서만 반환됩니다.
- [리치 메뉴 전환 action용 `postback.params` 객체](https://developers.line.biz/en/reference/messaging-api/#postback-params-object-for-richmenu-switch-action).
  - [Rich menu switch action](https://developers.line.biz/en/reference/messaging-api/#richmenu-switch-action)으로 사용자가 선택한 리치 메뉴 alias ID가 담긴 JSON 객체입니다.
  - [Rich menu switch action](https://developers.line.biz/en/reference/messaging-api/#richmenu-switch-action)에 의한 postback action에서만 반환됩니다.

<!-- parameter end -->

_Postback event example_

<!-- tab start `json` -->

```json
// Postback event for date-time selection action
{
    "destination": "xxxxxxxxxx",
    "events": [
        {
            "replyToken": "b60d432864f44d079f6d8efe86cf404b",
            "type": "postback",
            "mode": "active",
            "source": {
                "userId": "U91eeaf62d...",
                "type": "user"
            },
            "timestamp": 1513669370317,
            "webhookEventId": "01FZ74A0TDDPYRVKNK77XKC3ZR",
            "deliveryContext": {
                "isRedelivery": false
            },
            "postback": {
                "data": "storeId=12345",
                "params": {
                    "datetime": "2017-12-25T01:00"
                }
            }
        }
    ]
}

// Postback event for rich menu switch action
{
    "destination": "xxxxxxxxxx",
    "events": [
        {
            "replyToken": "b60d432864f44d079f6d8efe86cf404b",
            "type": "postback",
            "mode": "active",
            "source": {
                "userId": "U91eeaf62d...",
                "type": "user"
            },
            "timestamp": 1619754620404,
            "webhookEventId": "01FZ74A0TDDPYRVKNK77XKC3ZR",
            "deliveryContext": {
                "isRedelivery": false
            },
            "postback": {
                "data": "richmenu-changed-to-b",
                "params": {
                    "newRichMenuAliasId": "richmenu-alias-b",
                    "status": "SUCCESS"
                }
            }
        }
    ]
}
```

<!-- tab end -->

#### `postback.params` object for date-time selection action 

[datetime picker action](https://developers.line.biz/en/reference/messaging-api/#datetime-picker-action)으로 사용자가 선택한 날짜와 시간을 담은 객체입니다. `full-date`, `time-hour`, `time-minute` 형식은 [RFC3339 protocol](https://www.rfc-editor.org/rfc/rfc3339.txt)을 따릅니다.

| Property | Format | Description |
| --- | --- | --- |
| date | full-date | 사용자가 선택한 날짜입니다. `date` 모드에서만 포함됩니다. |
| time | time-hour ":" time-minute | 사용자가 선택한 시간입니다. `time` 모드에서만 포함됩니다. |
| datetime | full-date "T" time-hour ":" time-minute | 사용자가 선택한 날짜와 시간입니다. `datetime` 모드에서만 포함됩니다. |

_postback.params object for date-time selection action example_

<!-- tab start `json` -->

```json
{
  "datetime": "2017-12-25T01:00"
}
```

<!-- tab end -->

#### `postback.params`object for rich menu switch action 

사용자가 [rich menu switch action](https://developers.line.biz/en/reference/messaging-api/#richmenu-switch-action)으로 선택한 리치 메뉴 alias ID를 담은 객체입니다.

| Property | Format | Description |
| --- | --- | --- |
| newRichMenuAliasId Not always included | String | 전환할 리치 메뉴 alias ID입니다. 리치 메뉴 전환에 실패하면 이 속성은 포함되지 않습니다. |
| status | String | `SUCCESS`: 리치 메뉴가 성공적으로 변경되었습니다.<br/> `RICHMENU_ALIAS_ID_NOTFOUND`: 지정한 리치 메뉴 alias ID를 찾을 수 없습니다.<br/>`RICHMENU_NOTFOUND`: 지정한 리치 메뉴 alias ID에 연결된 리치 메뉴 ID를 찾을 수 없습니다.<br/>`FAILED`: 리치 메뉴 전환에 실패했습니다. |

_postback.params object for rich menu switch action example_

<!-- tab start `json` -->

```json
{
  "newRichMenuAliasId": "richmenu-alias-b",
  "status": "SUCCESS"
}
```

<!-- tab end -->

### Video viewing complete event 

사용자가 LINE Official Account가 보낸 지정된 `trackingId`의 동영상을 최소 한 번 끝까지 시청했을 때의 이벤트입니다.

<!-- note start -->

**The number of video views**

Video viewing complete 이벤트가 사용자가 동영상을 시청한 횟수를 반드시 나타내는 것은 아닙니다.

채팅방에서 한 세션 안에 동영상을 여러 번 시청하더라도 이벤트가 중복으로 발생하지는 않습니다. 하지만 채팅방을 닫았다가 다시 열어 동영상을 다시 시청하면 이벤트가 다시 발생할 수 있습니다.

<!-- note end -->

<!-- note start -->

**Video in imagemap messages and flex messages is not supported by the video viewing complete event**

[imagemap 메시지](https://developers.line.biz/en/reference/messaging-api/#imagemap-message)와 [flex 메시지](https://developers.line.biz/en/reference/messaging-api/#flex-message)의 동영상에는 `trackingId`를 지정할 수 없습니다.

<!-- note end -->

<!-- parameter start -->

timestamp, source 등

[Common Properties](https://developers.line.biz/en/reference/messaging-api/#common-properties)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start -->

type

String

`videoPlayComplete`

<!-- parameter end -->
<!-- parameter start -->

replyToken

String

이 이벤트에 [reply message를 보내는](https://developers.line.biz/en/reference/messaging-api/#send-reply-message) 데 사용되는 reply token

<!-- parameter end -->
<!-- parameter start -->

videoPlayComplete.trackingId

String

[video message](https://developers.line.biz/en/reference/messaging-api/#video-message)에 할당된 `trackingId`와 같은 값을 반환하는, 동영상을 식별하는 ID입니다.

<!-- parameter end -->

_Video viewing complete event example_

<!-- tab start `json` -->

```json
{
  "destination": "xxxxxxxxxx",
  "events": [
    {
      "replyToken": "nHuyWiB7yP5Zw52FIkcQobQuGDXCTA",
      "type": "videoPlayComplete",
      "mode": "active",
      "timestamp": 1462629479859,
      "source": {
        "type": "user",
        "userId": "U4af4980629..."
      },
      "webhookEventId": "01FZ74A0TDDPYRVKNK77XKC3ZR",
      "deliveryContext": {
        "isRedelivery": false
      },
      "videoPlayComplete": {
        "trackingId": "track-id"
      }
    }
  ]
}
```

<!-- tab end -->

### Beacon event 

사용자가 [LINE Beacon](https://developers.line.biz/en/docs/messaging-api/using-beacons/)의 범위에 들어갔을 때의 이벤트 객체입니다. Beacon event에는 답장할 수 있습니다.

<!-- parameter start -->

timestamp, source 등

[Common Properties](https://developers.line.biz/en/reference/messaging-api/#common-properties)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start -->

type

String

`beacon`

<!-- parameter end -->
<!-- parameter start -->

replyToken

String

이 이벤트에 [reply message를 보내는](https://developers.line.biz/en/reference/messaging-api/#send-reply-message) 데 사용되는 reply token

<!-- parameter end -->
<!-- parameter start -->

beacon.hwid

String

감지된 beacon의 하드웨어 ID

<!-- parameter end -->
<!-- parameter start -->

beacon.type

String

Beacon 이벤트의 유형입니다. [Beacon event types](https://developers.line.biz/en/reference/messaging-api/#beacon-event-types)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

beacon.dm

String

감지된 beacon의 device message입니다. 이 메시지는 beacon이 봇 서버에 알림을 보내기 위해 생성하는 데이터로 구성됩니다. "device message" 속성을 지원하는 기기에서 보낸 webhook 이벤트에만 포함됩니다.\
자세한 내용은 [LINE Simple Beacon specification](https://github.com/line/line-simple-beacon/blob/master/README.en.md#line-simple-beacon-frame)을 참조하십시오.

<!-- parameter end -->

_Beacon event example_

<!-- tab start `json` -->

```json
{
  "destination": "xxxxxxxxxx",
  "events": [
    {
      "replyToken": "nHuyWiB7yP5Zw52FIkcQobQuGDXCTA",
      "type": "beacon",
      "mode": "active",
      "timestamp": 1462629479859,
      "source": {
        "type": "user",
        "userId": "U4af4980629..."
      },
      "webhookEventId": "01FZ74A0TDDPYRVKNK77XKC3ZR",
      "deliveryContext": {
        "isRedelivery": false
      },
      "beacon": {
        "hwid": "d41d8cd98f",
        "type": "enter"
      }
    }
  ]
}
```

<!-- tab end -->

#### Beacon event types 

| beacon.type | Description |
| --- | --- |
| `enter` | Beacon의 수신 범위에 들어갔습니다. |
| `banner` | [beacon banner](https://developers.line.biz/en/docs/messaging-api/using-beacons/#beacon-banner)를 탭했습니다. |
| `stay` | 사용자가 beacon의 수신 범위 안에 있습니다.<br />이 이벤트는 최소 10초 간격으로 반복해서 전송됩니다. |

<!-- note start -->

**Registration has been suspended in Japan**

2021년 1월부터 일본에서는 `banner` 및 `stay` 이벤트에 대한 신규 신청을 더 이상 받지 않습니다. 일본을 제외한 다른 지역에서는 여전히 신규 신청을 받고 있습니다.

<!-- note end -->

### Account link event 

사용자가 LINE 계정을 제공자의 서비스 계정과 연결했을 때의 이벤트 객체입니다. Account link 이벤트에는 답장할 수 있습니다.

Link token이 만료되었거나 이미 사용된 경우 webhook 이벤트가 전송되지 않으며 사용자에게 오류가 표시됩니다.

<!-- parameter start -->

timestamp, source 등

[Common Properties](https://developers.line.biz/en/reference/messaging-api/#common-properties)를 참조하십시오.

계정 연결에 실패한 경우 account link 이벤트에는 `source` 속성이 포함되지 않습니다.

<!-- parameter end -->
<!-- parameter start -->

type

String

`accountLink`

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

replyToken

String

이 이벤트에 [reply message를 보내는](https://developers.line.biz/en/reference/messaging-api/#send-reply-message) 데 사용되는 reply token입니다. 계정 연결에 실패한 경우 이 속성은 포함되지 않습니다.

<!-- parameter end -->
<!-- parameter start -->

link.result

String

계정 연결 성공 여부를 나타내는 다음 값 중 하나입니다.

- `ok`: 계정 연결에 성공했음을 나타냅니다.
- `failed`: 사용자 사칭 등 어떤 이유로든 계정 연결에 실패했음을 나타냅니다.

<!-- parameter end -->
<!-- parameter start -->

link.nonce

String

사용자 ID를 검증할 때 지정한 nonce(한 번만 사용하는 숫자)입니다. 자세한 내용은 Messaging API 문서의 [Generate a nonce and redirect the user to the LINE Platform](https://developers.line.biz/en/docs/messaging-api/linking-accounts/#step-four-verifying-user-id)을 참조하십시오.

<!-- parameter end -->

_Account link event example_

<!-- tab start `json` -->

```json
{
  "destination": "xxxxxxxxxx",
  "events": [
    {
      "replyToken": "b60d432864f44d079f6d8efe86cf404b",
      "type": "accountLink",
      "mode": "active",
      "source": {
        "userId": "U91eeaf62d...",
        "type": "user"
      },
      "timestamp": 1513669370317,
      "webhookEventId": "01FZ74A0TDDPYRVKNK77XKC3ZR",
      "deliveryContext": {
        "isRedelivery": false
      },
      "link": {
        "result": "ok",
        "nonce": "xxxxxxxxxxxxxxx"
      }
    }
  ]
}
```

<!-- tab end -->

### Membership event 

사용자가 LINE Official Account의 멤버십에 가입, 갱신 또는 탈퇴했음을 나타내는 이벤트입니다.

LINE Official Account가 여러 멤버십 플랜을 제공하고 현재 한 플랜에 가입한 사용자가 같은 달 안에 다른 플랜으로 변경하는 경우, 탈퇴와 가입에 대한 webhook 이벤트가 모두 전송됩니다. 사용자가 프로필 정보에 대한 접근을 허용하는 데 동의하지 않은 경우에는 webhook 이벤트가 전송되지 않습니다. 자세한 내용은 Messaging API 문서의 [Consent on getting user profile information](https://developers.line.biz/en/docs/messaging-api/user-consent/)을 참조하십시오.

<!-- parameter start -->

timestamp, source 등

[Common properties](https://developers.line.biz/en/reference/messaging-api/#common-properties)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start -->

type

String

`membership`

<!-- parameter end -->
<!-- parameter start -->

replyToken

String

이 이벤트에 [reply message를 보내는](https://developers.line.biz/en/reference/messaging-api/#send-reply-message) 데 사용되는 reply token

<!-- parameter end -->
<!-- parameter start -->

membership.type

String

멤버십 이벤트의 유형입니다. 다음 값 중 하나입니다.

- `joined`: 사용자가 멤버십에 가입했습니다.
- `left`: 사용자가 멤버십에서 탈퇴했습니다.
- `renewed`: 사용자가 멤버십을 갱신했습니다.

<!-- parameter end -->
<!-- parameter start -->

membership.membershipId

Number

사용자가 가입, 탈퇴 또는 갱신한 멤버십 ID입니다.

<!-- parameter end -->

_Membership event example_

<!-- tab start `json` -->

```json
{
  "destination": "xxxxxxxxxx",
  "events": [
    {
      "type": "membership",
      "source": {
        "type": "user",
        "userId": "U4af4980629..."
      },
      "replyToken": "nHuyWiB7yP5Zw52FIkcQobQuGDXCTA",
      "membership": {
        "type": "joined",
        "membershipId": 3189
      },
      "timestamp": 1462629479859,
      "mode": "active",
      "webhookEventId": "01FZ74A0TDDPYRVKNK77XKC3ZR",
      "deliveryContext": {
        "isRedelivery": false
      }
    }
  ]
}
```

<!-- tab end -->

## Webhook settings 

Channel의 webhook 엔드포인트를 설정, 테스트하고 정보를 가져올 수 있습니다.

### Set webhook endpoint URL 

Endpoint: `PUT` `https://api.line.me/v2/bot/channel/webhook/endpoint`

Webhook 엔드포인트 URL을 설정합니다. 캐싱 때문에 변경 사항이 반영되는 데 최대 1분이 걸릴 수 있습니다.

<!-- note start -->

**Webhook URL validation rules**

다음 webhook URL 검증 규칙을 충족하십시오.

- 올바른 HTTPS URL을 입력하십시오.
- 500자 이하여야 합니다.

<!-- note end -->

_Example request_

<!-- tab start `shell` -->

```sh
curl -X PUT \
-H 'Authorization: Bearer {CHANNEL_ACCESS_TOKEN}' \
-H 'Content-Type:application/json' \
-d '{"endpoint":"https://example.com/hoge"}' \
https://api.line.me/v2/bot/channel/webhook/endpoint
```

<!-- tab end -->

#### Rate limit 

분당 1,000회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->
<!-- parameter start (props: required) -->

Content-Type

`application/json`

<!-- parameter end -->

#### Request body 

<!-- parameter start (props: required) -->

endpoint

String

유효한 webhook URL입니다.

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
| `400` | 잘못된 webhook 엔드포인트 URL을 지정했습니다. |

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Example error response_

<!-- tab start `json` -->

```json
// If you specify an invalid webhook endpoint URL (400 Bad Request)
{
  "message": "Invalid webhook endpoint URL"
}
```

<!-- tab end -->

### Get webhook endpoint information 

Endpoint: `GET` `https://api.line.me/v2/bot/channel/webhook/endpoint`

Webhook 엔드포인트의 정보를 가져옵니다.

_Example request_

<!-- tab start `shell` -->

```sh
curl -X GET \
-H 'Authorization: Bearer {CHANNEL_ACCESS_TOKEN}' \
-H 'Content-Type:application/json' \
https://api.line.me/v2/bot/channel/webhook/endpoint
```

<!-- tab end -->

#### Rate limit 

분당 1,000회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->
<!-- parameter start (props: required) -->

Content-Type

`application/json`

<!-- parameter end -->

#### Response 

다음 정보를 담은 JSON 객체와 함께 상태 코드 `200`이 반환됩니다.

<!-- parameter start -->

endpoint

String

Webhook URL

<!-- parameter end -->
<!-- parameter start -->

active

Boolean

Webhook 사용 상태입니다. 활성화된 경우에만 LINE Platform이 webhook URL로 webhook 이벤트를 보냅니다.

- `true`: Webhook 사용이 활성화되어 있습니다.
- `false`: Webhook 사용이 비활성화되어 있습니다.

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

```json
// If the webhook URL was set and the webhook usage is enabled
{
  "endpoint": "https://example.com/test",
  "active": true
}

// If the webhook URL was set and the webhook usage is disabled
{
  "endpoint": "https://example.com/test",
  "active": false
}
```

<!-- tab end -->

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code | Description |
| --- | --- |
| `404` | 채널에 webhook URL이 설정되어 있지 않습니다. |

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Error response example_

<!-- tab start `json` -->

```json
// If the webhook URL isn't set (404 Not Found)
{
  "message": "Webhook endpoint not found"
}
```

<!-- tab end -->

### Test webhook endpoint 

Endpoint: `POST` `https://api.line.me/v2/bot/channel/webhook/test`

설정된 webhook 엔드포인트가 테스트 webhook 이벤트를 받을 수 있는지 확인합니다.

<!-- note start -->

**Webhook URL validation rules**

다음 webhook URL 검증 규칙을 충족하십시오.

- 올바른 HTTPS URL을 입력하십시오.
- 500자 이하여야 합니다.

<!-- note end -->

_Example request_

<!-- tab start `shell` -->

```sh
# To verify a specified URL
curl -X POST \
-H 'Authorization: Bearer {CHANNEL_ACCESS_TOKEN}' \
-H 'Content-Type:application/json' \
-d '{"endpoint":"https://example.com/webhook"}' \
https://api.line.me/v2/bot/channel/webhook/test

# To verify the URL set in the "Webhook URL" section of the LINE Developers Console
curl -X POST \
-H 'Authorization: Bearer {CHANNEL_ACCESS_TOKEN}' \
-H 'Content-Type:application/json' \
-d '{}' \
https://api.line.me/v2/bot/channel/webhook/test
```

<!-- tab end -->

#### Rate limit 

시간당 60회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->
<!-- parameter start (props: required) -->

Content-Type

`application/json`

<!-- parameter end -->

#### Request body 

<!-- parameter start (props: optional) -->

endpoint

String

검증할 webhook URL입니다.

<!-- note start -->

**Behaviors with/without endpoint parameter**

이 API 엔드포인트의 동작은 **Request body**에 `endpoint` 파라미터가 포함되어 있는지 여부에 따라 달라집니다.

**With endpoint parameter**

`endpoint` 파라미터에 지정한 엔드포인트 URL이 유효한지 확인하고, 유효하면 지정한 엔드포인트 URL로 테스트 webhook 이벤트를 보냅니다.

**Without endpoint parameter**

채널에 이미 설정된 webhook 엔드포인트로 테스트 webhook 이벤트를 보냅니다. 채널에 webhook 엔드포인트가 설정되어 있지 않으면 `404`가 반환됩니다.

<!-- note end -->

<!-- parameter end -->

#### Response 

다음 정보를 담은 JSON 객체와 함께 상태 코드 `200`이 반환됩니다.

<!-- note start -->

**Return status code 200 for the communication request**

- LINE Platform은 통신을 확인하기 위해 webhook 이벤트를 포함하지 않는 HTTP POST 요청을 webhook URL(봇 서버)로 보냅니다. 봇 서버가 상태 코드 `200`을 반환하도록 설계하십시오.

  Webhook 이벤트가 없는 HTTP POST 요청의 예:

  ```json
  {
    "destination": "xxxxxxxxxx",
    "events": []
  }
  ```

<!-- note end -->

<!-- parameter start -->

success

Boolean

LINE Platform에서 webhook URL로 통신한 결과입니다.

- `true`: 성공
- `false`: 실패

`false`인 경우 Messaging API 문서의 [Check the reason for errors](https://developers.line.biz/en/docs/messaging-api/check-webhook-error-statistics/#check-error-reason)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start -->

timestamp

String

[Common Properties](https://developers.line.biz/en/reference/messaging-api/#common-properties)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start -->

statusCode

Number

HTTP 상태 코드입니다. Webhook 응답을 받지 못한 경우 상태 코드는 0 또는 음수로 설정됩니다.

<!-- parameter end -->
<!-- parameter start -->

reason

String

응답의 사유입니다. 자세한 내용은 아래 표를 참조하십시오.

<!-- parameter end -->
<!-- parameter start -->

detail

String

응답의 세부 정보입니다. 자세한 내용은 아래 표를 참조하십시오.

<!-- parameter end -->

| `reason` | `detail` | Description |
| --- | --- | --- |
| OK | HTTP 상태 코드(예: `200`) | Webhook을 성공적으로 보냈습니다. |
| [COULD_NOT_CONNECT](https://developers.line.biz/en/docs/messaging-api/check-webhook-error-statistics/#reason-could-not-connect) | 연결 실패 | Webhook 엔드포인트에 연결하지 못했습니다. 자세한 내용은 Messaging API 문서의 [The reason is could_not_connect](https://developers.line.biz/en/docs/messaging-api/check-webhook-error-statistics/#reason-could-not-connect)를 참조하십시오. |
| [REQUEST_TIMEOUT](https://developers.line.biz/en/docs/messaging-api/check-webhook-error-statistics/#reason-request-timeout) | 요청 시간 초과 | 요청 시간이 초과되었습니다. 자세한 내용은 Messaging API 문서의 [The reason is request_timeout](https://developers.line.biz/en/docs/messaging-api/check-webhook-error-statistics/#reason-request-timeout)을 참조하십시오. |
| [ERROR_STATUS_CODE](https://developers.line.biz/en/docs/messaging-api/check-webhook-error-statistics/#reason-status-code) | HTTP 상태 코드(예: `400`) | HTTP 상태 코드 오류 응답입니다. 자세한 내용은 Messaging API 문서의 [The reason is error_status_code](https://developers.line.biz/en/docs/messaging-api/check-webhook-error-statistics/#reason-status-code)를 참조하십시오. |
| [UNCLASSIFIED](https://developers.line.biz/en/docs/messaging-api/check-webhook-error-statistics/#reason-unclassified) | N/A | 알 수 없는 오류입니다. 자세한 내용은 Messaging API 문서의 [The reason is unclassified](https://developers.line.biz/en/docs/messaging-api/check-webhook-error-statistics/#reason-unclassified)를 참조하십시오. |

_Response example (If the webhook is successfully sent)_

<!-- tab start `json` -->

```json
{
  "success": true,
  "timestamp": "2020-09-30T05:38:20.031Z",
  "statusCode": 200,
  "reason": "OK",
  "detail": "200"
}
```

<!-- tab end -->

_Response example (If communication to the webhook URL fails due to the bot server's SSL/TLS settings)_

<!-- tab start `json` -->

```json
{
  "success": false,
  "timestamp": "2023-07-07T04:29:51.043124Z",
  "statusCode": 0,
  "reason": "COULD_NOT_CONNECT",
  "detail": "TLS handshake failure: https://example.com/webhook"
}
```

<!-- tab end -->

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code  | Description                               |
| ----- | ----------------------------------------- |
| `400` | 잘못된 webhook URL을 지정했습니다.        |
| `404` | 채널에 webhook URL이 설정되어 있지 않습니다. |

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Example error response_

<!-- tab start `json` -->

```json
// If the domain name specified in the Webhook URL can't be resolved (400 Bad Request)
{
  "message": "Invalid webhook endpoint URL"
}

// If the webhook URL isn't set (404 Not Found)
{
  "message": "Webhook endpoint not found"
}
```

<!-- tab end -->

## Getting content 

[webhook](https://developers.line.biz/en/reference/messaging-api/#webhooks)으로 받은 메시지 ID를 사용하여 사용자가 LINE Official Account에 보낸 콘텐츠를 가져올 수 있습니다.

### Get content 

Endpoint: `GET` `https://api-data.line.me/v2/bot/message/{messageId}/content`

<!-- note start -->

**This domain name is different from that of other endpoints**

이 endpoint의 도메인 이름(`api-data.line.me`)은 Messaging API용 LINE Platform에서 대량의 데이터를 송수신하기 위한 것입니다. 이 도메인 이름은 다른 endpoint(`api.line.me`)와 다릅니다.

<!-- note end -->

Webhook으로 받은 메시지 ID를 사용하여 사용자가 보낸 [이미지](https://developers.line.biz/en/reference/messaging-api/#wh-image), [동영상](https://developers.line.biz/en/reference/messaging-api/#wh-video), [오디오](https://developers.line.biz/en/reference/messaging-api/#wh-audio), [파일](https://developers.line.biz/en/reference/messaging-api/#wh-file)을 가져옵니다.

이 endpoint는 [webhook event object](https://developers.line.biz/en/reference/messaging-api/#webhook-event-objects)의 `contentProvider.type` 속성이 `line`인 경우에만 사용할 수 있습니다.

사용자가 용량이 큰 동영상이나 오디오 파일을 보내면 콘텐츠의 바이너리 데이터를 가져올 준비가 완료되기까지 시간이 걸릴 수 있습니다. 바이너리 데이터를 준비하는 중에 콘텐츠를 가져오려고 하면 상태 코드 `202`가 반환되며 바이너리 데이터를 가져올 수 없습니다. 바이너리 데이터를 가져올 수 있는지 확인하려면 [Verify the preparation status of a video or audio for getting](https://developers.line.biz/en/reference/messaging-api/#verify-video-or-audio-preparation-status) endpoint를 사용하십시오.

사용자가 보낸 콘텐츠는 축소 등의 방식으로 내부에서 변환될 수 있습니다.

<!-- note start -->

**No API for retrieving text**

사용자가 보낸 텍스트는 webhook의 [text](https://developers.line.biz/en/reference/messaging-api/#wh-text) message 객체로 가져올 수 있습니다. Webhook을 받은 후 사용자가 보낸 텍스트를 다시 가져오는 API는 없습니다.

<!-- note end -->

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X GET https://api-data.line.me/v2/bot/message/{messageId}/content \
-H 'Authorization: Bearer {channel access token}'
```

<!-- tab end -->

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->

#### Path parameters 

<!-- parameter start (props: required) -->

messageId

메시지 ID

<!-- parameter end -->

#### Response 

상태 코드 `200`과 바이너리 형식의 콘텐츠가 반환됩니다. 바이너리 데이터의 파일 형식은 응답의 [`Content-Type`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Type) 헤더에 표시됩니다.

콘텐츠는 메시지가 전송된 후 일정 기간이 지나면 자동으로 삭제됩니다. 콘텐츠가 저장되는 기간은 보장되지 않습니다.

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

- `404 Not Found`
- `410 Gone`

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Example error response_

<!-- tab start `json` -->

```json
// If you specify a non-existent message ID (404 Not Found)
{
  "message": "not found"
}

// If the user unsends a message (410 Gone)
{
  "message": "The content is gone"
}
```

<!-- tab end -->

### Verify the preparation status of a video or audio for getting 

Endpoint: `GET` `https://api-data.line.me/v2/bot/message/{messageId}/content/transcoding`

<!-- note start -->

**This domain name is different from that of other endpoints**

이 endpoint의 도메인 이름(`api-data.line.me`)은 Messaging API용 LINE Platform에서 대량의 데이터를 송수신하기 위한 것입니다. 이 도메인 이름은 다른 endpoint(`api.line.me`)와 다릅니다.

<!-- note end -->

Webhook으로 받은 메시지 ID를 사용하여 사용자가 보낸 [동영상](https://developers.line.biz/en/reference/messaging-api/#wh-video) 또는 [오디오](https://developers.line.biz/en/reference/messaging-api/#wh-audio)를 가져올 준비 상태를 확인합니다.

이 endpoint는 [webhook event object](https://developers.line.biz/en/reference/messaging-api/#webhook-event-objects)의 `contentProvider.type` 속성이 `line`인 경우에만 사용할 수 있습니다.

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X GET https://api-data.line.me/v2/bot/message/{messageId}/content/transcoding \
-H 'Authorization: Bearer {channel access token}'
```

<!-- tab end -->

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->

#### Path parameters 

<!-- parameter start (props: required) -->

messageId

[동영상](https://developers.line.biz/en/reference/messaging-api/#wh-video) 또는 [오디오](https://developers.line.biz/en/reference/messaging-api/#wh-audio)의 메시지 ID

<!-- parameter end -->

#### Response 

다음 정보를 담은 JSON 객체와 함께 상태 코드 `200`이 반환됩니다.

<!-- parameter start -->

status

String

준비 상태입니다. 다음 중 하나입니다.

- `processing`: 콘텐츠를 가져올 준비 중입니다.
- `succeeded`: 콘텐츠를 가져올 준비가 되었습니다. 사용자가 보낸 [콘텐츠를 가져올](https://developers.line.biz/en/reference/messaging-api/#get-content) 수 있습니다.
- `failed`: 콘텐츠를 가져올 준비에 실패했습니다.

<!-- parameter end -->

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

- `400 Bad Request`
- `404 Not Found`
- `410 Gone`

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Example error response_

<!-- tab start `json` -->

```json
// If you specify a message ID other than video or audio (400 Bad Request)
{
  "message": "Transcoding status doesn't support this type of content"
}

// If you specify a non-existent message ID (404 Not Found)
{
  "message": "not found"
}

// If the user unsends a message (410 Gone)
{
  "message": "The content is gone"
}
```

<!-- tab end -->

### Get a preview image of the image or video 

Endpoint: `GET` `https://api-data.line.me/v2/bot/message/{messageId}/content/preview`

<!-- note start -->

**This domain name is different from that of other endpoints**

이 endpoint의 도메인 이름(`api-data.line.me`)은 Messaging API용 LINE Platform에서 대량의 데이터를 송수신하기 위한 것입니다. 이 도메인 이름은 다른 endpoint(`api.line.me`)와 다릅니다.

<!-- note end -->

Webhook으로 받은 메시지 ID를 사용하여 사용자가 보낸 [이미지](https://developers.line.biz/en/reference/messaging-api/#wh-image) 또는 [동영상](https://developers.line.biz/en/reference/messaging-api/#wh-video)의 미리보기 이미지를 가져옵니다. 미리보기 이미지는 원본 콘텐츠보다 데이터 크기를 줄인 이미지 데이터입니다.

이 endpoint는 [webhook event object](https://developers.line.biz/en/reference/messaging-api/#webhook-event-objects)의 `contentProvider.type` 속성이 `line`인 경우에만 사용할 수 있습니다.

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X GET https://api-data.line.me/v2/bot/message/{messageId}/content/preview \
-H 'Authorization: Bearer {channel access token}'
```

<!-- tab end -->

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->

#### Path parameters 

<!-- parameter start (props: required) -->

messageId

[이미지](https://developers.line.biz/en/reference/messaging-api/#wh-image) 또는 [동영상](https://developers.line.biz/en/reference/messaging-api/#wh-video)의 메시지 ID

<!-- parameter end -->

#### Response 

상태 코드 `200`과 바이너리 형식의 미리보기 이미지가 반환됩니다.

미리보기 이미지는 메시지가 전송된 후 일정 기간이 지나면 자동으로 삭제됩니다. 미리보기 이미지가 저장되는 기간은 보장되지 않습니다.

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

- `400 Bad Request`
- `404 Not Found`
- `410 Gone`

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Example error response_

<!-- tab start `json` -->

```json
// If you specify a message ID other than image or video (400 Bad Request)
{
  "message": "The content can not be previewed"
}

// If you specify a non-existent message ID (404 Not Found)
{
  "message": "not found"
}

// If the user unsends a message (410 Gone)
{
  "message": "The content is gone"
}
```

<!-- tab end -->

## Channel access token 

앱에서 Messaging API를 호출할 때 필요한 channel access token을 발급, 조회 또는 폐기할 수 있습니다. 자세한 내용은 LINE Platform 기본 문서의 [Channel access token](https://developers.line.biz/en/docs/basics/channel-access-token/)을 참조하십시오.

### Issue channel access token v2.1 

Endpoint: `POST` `https://api.line.me/oauth2/v2.1/token`

원하는 유효 기간을 지정할 수 있는 channel access token을 발급합니다. 이 방법으로 인증에 JWT assertion을 사용할 수 있습니다.

Channel access token v2.1은 채널당 최대 30개까지 발급할 수 있습니다. 최대 개수에 도달하면 추가로 channel access token을 발급하는 요청이 차단됩니다. 만료된 channel access token은 발급된 것으로 계산되지 않습니다.

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X POST https://api.line.me/oauth2/v2.1/token \
-H 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'grant_type=client_credentials' \
--data-urlencode 'client_assertion_type=urn:ietf:params:oauth:client-assertion-type:jwt-bearer' \
--data-urlencode 'client_assertion={JWT}'
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

`client_credentials`

<!-- parameter end -->
<!-- parameter start (props: required) -->

client_assertion_type

String

`urn:ietf:params:oauth:client-assertion-type:jwt-bearer`를 URL 인코딩한 값입니다.

<!-- parameter end -->
<!-- parameter start (props: required) -->

client_assertion

String

클라이언트가 생성하고 assertion 서명 키의 개인 키로 서명해야 하는 JSON Web Token assertion을 지정하십시오.

JWT assertion은 생성 후 30분 이내에 만료되도록 설정해야 합니다. JWT assertion 생성에 대한 자세한 내용은 [Generate a JWT](https://developers.line.biz/en/docs/messaging-api/generate-json-web-token/#generate-jwt)를 참조하십시오.

<!-- parameter end -->

#### Response 

`200` HTTP 상태 코드와 다음 정보를 담은 JSON 객체가 반환됩니다.

<!-- parameter start -->

access_token

String

Channel access token입니다.

<!-- parameter end -->
<!-- parameter start -->

expires_in

Number

Channel access token이 발급된 시점부터 만료되기까지 남은 시간(초)입니다.

<!-- parameter end -->
<!-- parameter start -->

token_type

String

`Bearer`

<!-- parameter end -->
<!-- parameter start -->

key_id

String

Channel access token을 식별하는 고유 키 ID입니다.

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

```json
{
  "access_token": "eyJhbGciOiJIUz.....",
  "token_type": "Bearer",
  "expires_in": 2592000,
  "key_id": "sDTOzw5wIfxxxxPEzcmeQA"
}
```

<!-- tab end -->

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code | Description |
| --- | --- |
| `400` | 요청에 문제가 있습니다. 다음 원인을 확인하십시오.<ul><li>JWT assertion 검증에 실패했습니다.</li><li>JWT assertion이 만료되었습니다.</li><li>발급할 수 있는 channel access token의 최대 개수에 도달했습니다.</li></ul> |
| `404` | JWT assertion과 연결된 서명 키가 채널에 등록되어 있지 않습니다. |

_Example error response_

<!-- tab start `json` -->

```json
// When the maximum number of channel access tokens that can be issued is reached (400 Bad Request)
{
  "message": "The maximum number of access tokens has already been issued"
}

// If the JWT assertion verification fails (400 Bad Request)
{
  "error": "invalid_client",
  "error_description": "iss and clientId of key do not match"
}

// If the signature key associated with the JWT assertion isn't registered in the channel (404 Not Found)
{
  "message": "Cannot find channel key that satisfies the conditions"
}
```

<!-- tab end -->

### Verify the validity of the channel access token v2.1 

Endpoint: `GET` `https://api.line.me/oauth2/v2.1/verify`

[사용자가 유효 기간을 지정한 channel access token(Channel Access Token v2.1)](https://developers.line.biz/en/docs/basics/channel-access-token/#user-specified-expiration)이 유효한지 확인할 수 있습니다.

_Request example_

<!-- tab start `shell` -->

```sh
curl -v -X GET https://api.line.me/oauth2/v2.1/verify \
-H 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'access_token=eyJhbGciOiJIUzI1NiJ9.UnQ_o-GP0VtnwDjbK0C8E_NvK...' \
-G
```

<!-- tab end -->

#### Query parameter 

<!-- parameter start (props: required) -->

access_token

사용자가 유효 기간을 지정한 channel access token(Channel Access Token v2.1)입니다.

<!-- parameter end -->

#### Response 

Channel access token이 유효하면 다음 정보를 담은 JSON 객체와 함께 `200` HTTP 상태 코드가 반환됩니다.

<!-- parameter start -->

client_id

String

Channel access token이 발급된 channel ID입니다.

<!-- parameter end -->
<!-- parameter start -->

expires_in

Number

Channel access token이 만료되기까지 남은 시간(초)입니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

scope

String

Channel access token에 부여된 권한입니다.

<!-- parameter end -->

_Response example_

<!-- tab start `json` -->

```json
{
  "client_id": "1573163733",
  "expires_in": 2591659,
  "scope": "profile chat_message.write"
}
```

<!-- tab end -->

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code | Description |
| --- | --- |
| `400` | 요청에 문제가 있습니다. 다음 원인을 확인하십시오.<ul><li>형식이 잘못된 channel access token을 지정했습니다.</li><li>Channel access token이 만료되었습니다.</li><li>존재하지 않는 channel access token을 지정했습니다.</li></ul> |

_Error response example_

<!-- tab start `json` -->

```json
// If the channel access token has expired (400 Bad Request)
{
    "error": "invalid_request",
    "error_description": "The access token expired"
}

// If you specify an invalidly formatted channel access token (400 Bad Request)
{
    "error": "invalid_request",
    "error_description": "The access token not JWS"
}
```

<!-- tab end -->

### Get all valid channel access token key IDs v2.1 

Endpoint: `GET` `https://api.line.me/oauth2/v2.1/tokens/kid`

유효한 모든 channel access token의 key ID를 가져옵니다.

_Example request_

<!-- tab start `shell` -->

```sh
curl -X GET https://api.line.me/oauth2/v2.1/tokens/kid \
--data-urlencode 'client_assertion_type=urn:ietf:params:oauth:client-assertion-type:jwt-bearer' \
--data-urlencode 'client_assertion={JWT}' \
-G
```

<!-- tab end -->

#### Query parameters 

<!-- parameter start (props: required) -->

client_assertion_type

String

`urn:ietf:params:oauth:client-assertion-type:jwt-bearer`를 URL 인코딩한 값입니다.

<!-- parameter end -->
<!-- parameter start (props: required) -->

client_assertion

String

클라이언트가 생성하고 개인 키로 서명해야 하는 [JSON Web Token (JWT)](https://datatracker.ietf.org/doc/html/rfc7519)입니다.

<!-- parameter end -->

#### Response 

`200` HTTP 상태 코드와 다음 정보를 담은 JSON 객체가 반환됩니다.

<!-- parameter start -->

kids

Array of strings

Channel access token key ID의 배열입니다.

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

```json
{
  "kids": [
    "U_gdnFYKTWRxxxxDVZexGg",
    "sDTOzw5wIfWxxxxzcmeQA",
    "73hDyp3PxGfxxxxD6U5qYA",
    "FHGanaP79smDxxxxyPrVw",
    "CguB-0kxxxxdSM3A5Q_UtQ",
    "G82YP96jhHwyKSxxxx7IFA"
  ]
}
```

<!-- tab end -->

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code | Description |
| --- | --- |
| `400` | 요청에 문제가 있습니다. 다음 원인을 확인하십시오.<ul><li>JWT assertion 검증에 실패했습니다.</li><li>JWT assertion이 만료되었습니다.</li></ul> |
| `404` | JWT assertion과 연결된 서명 키가 채널에 등록되어 있지 않습니다. |

_Example error response_

<!-- tab start `json` -->

```json
// If the JWT assertion has expired (400 Bad Request)
{
  "error": "invalid_client",
  "error_description": "Invalid exp"
}

// If the signature key associated with the JWT assertion isn't registered in the channel (404 Not Found)
{
  "message": "Cannot find channel key that satisfies the conditions"
}
```

<!-- tab end -->

### Revoke channel access token v2.1 

Endpoint: `POST` `https://api.line.me/oauth2/v2.1/revoke`

Channel access token v2.1을 폐기합니다.

다음과 같은 경우에 channel access token을 폐기합니다.

- Channel access token을 재발급하여 이전 channel access token이 더 이상 필요하지 않은 경우
- Channel access token이 유출된 것으로 의심되는 경우

이미 만료된 channel access token은 폐기할 필요가 없습니다.

_Example request_

<!-- tab start `shell` -->

```sh
curl -X POST https://api.line.me/oauth2/v2.1/revoke \
--data-urlencode 'client_id={channel ID}' \
--data-urlencode 'client_secret={channel secret}' \
--data-urlencode 'access_token={access token}'
```

<!-- tab end -->

#### Request body 

<!-- parameter start (props: required) -->

client_id

String

Channel ID

<!-- parameter end -->
<!-- parameter start (props: required) -->

client_secret

String

Channel secret

<!-- parameter end -->
<!-- parameter start (props: required) -->

access_token

String

Channel access token

<!-- parameter end -->

#### Response 

상태 코드 `200`과 빈 응답 본문이 반환됩니다.

<!-- note start -->

**Note**

잘못된 channel access token을 지정해도 오류가 발생하지 않습니다.

<!-- note end -->

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code | Description |
| --- | --- |
| `400` | 요청에 문제가 있습니다. 다음 원인을 확인하십시오.<ul><li>형식이 잘못된 channel access token을 지정했습니다.</li><li>존재하지 않는 channel access token을 지정했습니다.</li><li>잘못된 형식의 channel access token을 지정했습니다.</li></ul> |

_Example error response_

<!-- tab start `json` -->

```json
// If you specify an invalidly formatted channel access token (400 Bad Request)
{
  "error": "invalid_request",
  "error_description": "The access token not JWS"
}

// If you specify a malformed channel access (400 Bad Request)
{
  "error": "invalid_request",
  "error_description": "The access token malformed"
}
```

<!-- tab end -->

### Issue stateless channel access token 

Endpoint: `POST` `https://api.line.me/oauth2/v3/token`

15분 동안만 유효한 channel access token을 발급합니다. 발급 횟수에는 제한이 없습니다. Stateless channel access token이 발급되면 폐기할 수 없습니다.

_Example of a request to issue from channel ID and channel secret_

<code-tabs class="mb-8">
<!-- tab start `shell` -->

```sh
curl -v -X POST https://api.line.me/oauth2/v3/token \
-H 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'grant_type=client_credentials' \
--data-urlencode 'client_id={channel ID}' \
--data-urlencode 'client_secret={channel secret}'
```

<!-- tab end -->

_Example of a request to issue from JWT assertion_

<!-- tab start `shell` -->

```sh
curl -v -X POST https://api.line.me/oauth2/v3/token \
-H 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'grant_type=client_credentials' \
--data-urlencode 'client_assertion_type=urn:ietf:params:oauth:client-assertion-type:jwt-bearer' \
--data-urlencode 'client_assertion={JWT assertion}'
```

<!-- tab end -->

#### Request headers 

<!-- parameter start (props: required) -->

Content-Type

application/x-www-form-urlencoded

<!-- parameter end -->

#### Request body 

Stateless channel access token을 발급하는 방법은 두 가지입니다. 어떤 방법을 사용하더라도 응답 본문의 형식은 같습니다.

- [Channel ID와 channel secret으로 발급](https://developers.line.biz/en/reference/messaging-api/#issue-stateless-channel-access-token-request-body-channel-id)
- [JWT assertion으로 발급](https://developers.line.biz/en/reference/messaging-api/#issue-stateless-channel-access-token-request-body-jwt)

##### Issue from channel ID and channel secret 

<!-- parameter start (props: required) -->

grant_type

String

`client_credentials`

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

##### Issue from JWT assertion 

<!-- parameter start (props: required) -->

grant_type

String

`client_credentials`

<!-- parameter end -->
<!-- parameter start (props: required) -->

client_assertion_type

String

`urn:ietf:params:oauth:client-assertion-type:jwt-bearer`를 URL 인코딩한 값입니다.

<!-- parameter end -->
<!-- parameter start (props: required) -->

client_assertion

String

클라이언트가 생성하고 assertion 서명 키의 개인 키로 서명해야 하는 JSON Web Token assertion을 지정하십시오.

JWT assertion은 생성 후 30분 이내에 만료되도록 설정해야 합니다. JWT assertion 생성에 대한 자세한 내용은 [Generate a JWT](https://developers.line.biz/en/docs/messaging-api/generate-json-web-token/#generate-jwt)를 참조하십시오.

<!-- parameter end -->

#### Response 

`200` HTTP 상태 코드와 다음 정보를 담은 JSON 객체가 반환됩니다.

<!-- parameter start -->

token_type

String

`Bearer`

<!-- parameter end -->
<!-- parameter start -->

access_token

String

Channel access token

<!-- parameter end -->
<!-- parameter start -->

expires_in

Number

Channel access token이 발급된 시점부터 만료될 때까지의 시간(초)입니다.

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

```json
{
  "token_type": "Bearer",
  "access_token": "ey....",
  "expires_in": 900
}
```

<!-- tab end -->

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code | Description |
| --- | --- |
| `400` | 요청에 문제가 있습니다. 다음 원인을 확인하십시오.<ul><li>잘못된 channel ID를 지정했습니다.</li><li>잘못된 channel secret을 지정했습니다.</li><li>JWT assertion 검증에 실패했습니다.</li><li>JWT assertion이 만료되었습니다.</li></ul> |
| `404` | JWT assertion과 연결된 서명 키가 채널에 등록되어 있지 않습니다. |

_Example error response_

<!-- tab start `json` -->

```json
// If you specify an invalid channel secret (400 Bad Request)
{
  "error": "invalid_request",
  "error_description": "Invalid 'client_credentials'."
}

// If the signature key associated with the JWT assertion isn't registered in the channel (404 Not Found)
{
  "message": "Cannot find channel key that satisfies the conditions"
}
```

<!-- tab end -->

### Issue short-lived channel access token 

Endpoint: `POST` `https://api.line.me/v2/oauth/accessToken`

30일 동안 유효한 short-lived channel access token을 발급합니다.

Short-lived channel access token은 채널당 최대 30개까지 발급할 수 있습니다. 최대 개수를 초과하면 기존에 발급된 channel access token 중 가장 오래된 것이 폐기됩니다. 만료된 channel access token은 발급된 것으로 계산되지 않습니다.

<!-- tip start -->

**Tip**

- Messaging API 채널의 경우 장기 channel access token, 사용자가 유효 기간을 지정한 channel access token(channel access token v2.1), 또는 stateless channel access token을 발급할 수 있습니다. 자세한 내용은 LINE Platform 기본 문서의 [Channel access token](https://developers.line.biz/en/docs/basics/channel-access-token/)을 참조하십시오.
- LINE Login 채널의 channel access token도 이 API로 발급할 수 있습니다. LINE Login 채널의 channel access token은 [LIFF Server API](https://developers.line.biz/en/reference/liff-server/)에서 사용할 수 있습니다.

<!-- tip end -->

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X POST https://api.line.me/v2/oauth/accessToken \
-H "Content-Type: application/x-www-form-urlencoded" \
--data-urlencode 'grant_type=client_credentials' \
--data-urlencode 'client_id={channel ID}' \
--data-urlencode 'client_secret={channel secret}'
```

<!-- tab end -->

#### Rate limit 

초당 370회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Content-Type

application/x-www-form-urlencoded

<!-- parameter end -->

#### Request body 

<!-- parameter start (props: required) -->

grant_type

String

`client_credentials`

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

`200` HTTP 상태 코드와 다음 정보를 담은 JSON 객체가 반환됩니다.

<!-- parameter start -->

access_token

String

Short-lived channel access token입니다. 30일 동안 유효합니다.

<!-- note start -->

**Note**

Channel access token은 갱신할 수 없습니다.

<!-- note end -->

<!-- parameter end -->
<!-- parameter start -->

expires_in

Number

Token이 발급된 시점부터 만료될 때까지 남은 시간(초)입니다.

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
  "access_token": "W1TeHCgfH2Liwa.....",
  "expires_in": 2592000,
  "token_type": "Bearer"
}
```

<!-- tab end -->

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code | Description |
| --- | --- |
| `400` | 요청에 문제가 있습니다. 다음 원인을 확인하십시오.<ul><li>잘못된 channel ID를 지정했습니다.</li><li>잘못된 channel secret을 지정했습니다.</li><li>요청 파라미터의 형식이 잘못되었습니다.</li></ul> |
| `429` | [rate limit](https://developers.line.biz/en/reference/messaging-api/#issue-channel-access-token-rate-limit)을 초과했습니다. |

_Example error response_

<!-- tab start `json` -->

```json
// If you specify an invalid channel ID (400 Bad Request)
{
  "error": "invalid_client",
  "error_description": "invalid client_id"
}

// If you specify an invalid channel secret (400 Bad Request)
{
  "error": "invalid_client",
  "error_description": "invalid client_secret"
}
```

<!-- tab end -->

### Verify the validity of short-lived and long-lived channel access tokens 

Endpoint: `POST` `https://api.line.me/v2/oauth/verify`

[short-lived channel access token](https://developers.line.biz/en/docs/basics/channel-access-token/#short-lived-channel-access-token) 또는 [long-lived channel access token](https://developers.line.biz/en/docs/basics/channel-access-token/#long-lived-channel-access-token)이 유효한지 확인할 수 있습니다.

_Request example_

<!-- tab start `shell` -->

```sh
curl -v -X POST https://api.line.me/v2/oauth/verify \
-H 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'access_token=bNl4YEFPI/hjFWhTqexp4MuEw5YPs7qhr6dJDXKwNPuLka...'
```

<!-- tab end -->

#### Request header 

<!-- parameter start (props: required) -->

Content-Type

application/x-www-form-urlencoded

<!-- parameter end -->

#### Request body 

<!-- parameter start (props: required) -->

access_token

String

Short-lived 또는 long-lived channel access token입니다.

<!-- parameter end -->

#### Response 

Channel access token이 유효하면 다음 정보를 담은 JSON 객체와 함께 `200` HTTP 상태 코드가 반환됩니다.

<!-- parameter start -->

client_id

String

Channel access token이 발급된 channel ID입니다.

<!-- parameter end -->
<!-- parameter start -->

expires_in

Number

Channel access token이 만료되기까지 남은 시간(초)입니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

scope

String

Channel access token에 부여된 권한입니다.

<!-- parameter end -->

_Response example_

<!-- tab start `json` -->

```json
{
  "client_id": "1350031035",
  "expires_in": 3138007490,
  "scope": "P CM"
}
```

<!-- tab end -->

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code | Description |
| --- | --- |
| `400` | 요청에 문제가 있습니다. 다음 원인을 확인하십시오.<ul><li>잘못된 channel access token을 지정했습니다.</li><li>형식이 잘못된 channel access token을 지정했습니다.</li><li>Channel access token이 만료되었습니다.</li></ul> |

_Error response example_

<!-- tab start `json` -->

```json
// If you specify an invalid channel access (400 Bad Request)
{
    "error": "invalid_request",
    "error_description": "access_token invalid"
}

// If you specify an invalidly formatted channel access token (400 Bad Request)
{
    "error": "invalid_request",
    "error_description": "access_token in invalid format"
}
```

<!-- tab end -->

### Revoke short-lived or long-lived channel access token 

Endpoint: `POST` `https://api.line.me/v2/oauth/revoke`

Short-lived 또는 long-lived channel access token을 폐기합니다.

다음과 같은 경우에 channel access token을 폐기합니다.

- Channel access token을 재발급하여 이전 channel access token이 더 이상 필요하지 않은 경우
- Channel access token이 유출된 것으로 의심되는 경우

이미 만료된 channel access token은 폐기할 필요가 없습니다.

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X POST https://api.line.me/v2/oauth/revoke \
-H "Content-Type: application/x-www-form-urlencoded" \
--data-urlencode 'access_token={channel access token}'
```

<!-- tab end -->

#### Request headers 

<!-- parameter start (props: required) -->

Content-Type

application/x-www-form-urlencoded

<!-- parameter end -->

#### Request body 

<!-- parameter start (props: required) -->

access_token

String

Channel access token

<!-- parameter end -->

#### Response 

상태 코드 `200`과 빈 응답 본문이 반환됩니다. 잘못된 channel access token을 지정해도 오류가 발생하지 않습니다.

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code  | Description                                               |
| ----- | --------------------------------------------------------- |
| `400` | 형식이 잘못된 channel access token을 지정했습니다. |

_Example error response_

<!-- tab start `json` -->

```json
// If you specify an invalidly formatted channel access token (400 Bad Request)
{
  "error": "invalid_request"
}
```

<!-- tab end -->

## Message 

메시지를 보내고 보낸 메시지에 대한 정보를 가져올 수 있습니다.

### Send reply message 

Endpoint: `POST` `https://api.line.me/v2/bot/message/reply`

사용자, 그룹 채팅 또는 다인 채팅에서 발생한 이벤트에 대한 응답으로 reply message를 보냅니다. Reply message를 보내려면 webhook event object에 포함된 reply token이 필요합니다.

이벤트가 발생하면 [webhook](https://developers.line.biz/en/reference/messaging-api/#webhooks)을 통해 알림을 받습니다. 이벤트에 응답할 수 있는 경우 reply token이 발급됩니다.

<!-- tip start -->

**You can display loading animations while preparing a reply message**

LINE Official Account가 사용자로부터 메시지를 받은 후 메시지 준비나 예약 처리 때문에 응답에 시간이 걸릴 수 있습니다. 이런 경우 로딩 애니메이션을 표시하여 사용자에게 기다려 달라는 것을 시각적으로 알릴 수 있습니다. 자세한 내용은 Messaging API 문서의 [Display a loading animation](https://developers.line.biz/en/docs/messaging-api/use-loading-indicator/)을 참조하십시오.

<!-- tip end -->

#### Reply token 

Reply token을 사용할 때는 다음 사항을 확인하십시오.

- Reply token은 한 번만 사용할 수 있습니다.
- Reply token은 webhook을 받은 후 1분 이내에 사용해야 합니다. 1분을 초과하여 사용하는 경우 동작이 보장되지 않습니다.
- 재전송된 webhook에 포함된 reply token도 재전송된 webhook을 받은 후 1분 이내에 사용할 수 있습니다. 다만 다음의 경우에는 reply token을 사용할 수 없습니다.
  - 원래 webhook에 포함된 reply token이 이미 사용된 경우
  - 이벤트가 발생한 후 20분이 지난 경우

<!-- note start -->

**Reply tokens should be used as soon as possible**

Reply token의 제한 시간은 예고 없이 변경될 수 있습니다. 또한 네트워크 지연 등의 요인으로 실제 사용 가능 시간은 달라질 수 있습니다.

따라서 구현할 때 제한 시간에 의존하지 마십시오. 또한 reply token은 가능한 한 빨리 사용하십시오.

<!-- note end -->

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X POST https://api.line.me/v2/bot/message/reply \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer {channel access token}' \
-d '{
    "replyToken":"nHuyWiB7yP5Zw52FIkcQobQuGDXCTA",
    "messages":[
        {
            "type":"text",
            "text":"Hello, user"
        },
        {
            "type":"text",
            "text":"May I help you?"
        }
    ]
}'
```

<!-- tab end -->

#### Rate limit 

초당 2,000회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

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

replyToken

String

Webhook으로 받은 reply token

<!-- parameter end -->
<!-- parameter start (props: required) -->

messages

Array of [message objects](https://developers.line.biz/en/reference/messaging-api/#message-objects)

보낼 메시지\
최대: 5개

[Validate message objects of a reply message](https://developers.line.biz/en/reference/messaging-api/#validate-message-objects-of-reply-message) endpoint를 사용하면 message 객체를 검증할 수 있습니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

notificationDisabled

Boolean

- `true`: 메시지가 전송될 때 사용자에게 푸시 알림이 전송되지 않습니다.
- `false`: 메시지가 전송될 때 사용자에게 푸시 알림이 전송됩니다(사용자가 LINE 및/또는 기기에서 푸시 알림을 끈 경우는 제외).

기본값: `false`

<!-- parameter end -->

#### Response 

`200` 상태 코드와 다음 정보를 담은 JSON 객체가 반환됩니다.

<!-- parameter start -->

sentMessages

Array

보낸 메시지의 배열입니다.<br />최대: 5개

<!-- parameter end -->
<!-- parameter start -->

sentMessages.id

Number

보낸 메시지의 ID입니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

sentMessages.quoteToken

String

메시지의 quote token입니다. 인용 대상으로 지정할 수 있는 message 객체를 reply 메시지로 보낸 경우에만 포함됩니다. 자세한 내용은 Messaging API 문서의 [Get quote tokens](https://developers.line.biz/en/docs/messaging-api/get-quote-tokens/)를 참조하십시오.

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

```json
{
  "sentMessages": [
    {
      "id": "461230966842064897",
      "quoteToken": "IStG5h1Tz7b..."
    }
  ]
}
```

<!-- tab end -->

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code | Description |
| --- | --- |
| `400` | 메시지를 보내지 못했습니다. 다음 원인을 확인하십시오.<ul><li>잘못된 reply token을 지정했습니다.</li><li>잘못된 message 객체를 지정했습니다.</li></ul> |

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

오류가 반환되면 메시지는 전송되지 않습니다.

_Example error response_

<!-- tab start `json` -->

```json
// If you specify an invalid reply token such as expired or used (400 Bad Request)
{
  "message": "Invalid reply token"
}
```

<!-- tab end -->

### Send push message 

Endpoint: `POST` `https://api.line.me/v2/bot/message/push`

사용자, 그룹 채팅 또는 다인 채팅에 언제든지 메시지를 보냅니다.

#### Conditions for sending push message 

다음 조건 중 하나를 충족하면 push message를 보낼 수 있습니다.

- LINE Official Account를 친구로 추가한 사용자
- LINE Official Account가 참여한 그룹 채팅 또는 다인 채팅
- 1:1 채팅에서 7일 이내에 LINE Official Account에 메시지를 보낸 사용자(\*)

이러한 사용자에게 push message를 보내면 상태 코드 `200`이 반환되지만, 다음 사용자에게는 메시지가 전달되지 않습니다.

- LINE 계정을 삭제한 사용자
- Push message를 보낸 LINE Official Account를 차단한 사용자
- LINE Official Account를 친구로 추가하지 않은 사용자(\*)

\* 사용자는 친구로 추가하지 않은 LINE Official Account에도 메시지를 보낼 수 있습니다. 친구가 아닌 사용자로부터 1:1 채팅에서 메시지를 받은 경우, 그 메시지를 받은 날부터 7일 이내에는 해당 사용자에게 push message를 보낼 수 있습니다.

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X POST https://api.line.me/v2/bot/message/push \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer {channel access token}' \
-H 'X-Line-Retry-Key: {UUID}' \
-d '{
    "to": "U4af4980629...",
    "messages":[
        {
            "type":"text",
            "text":"Hello, world1"
        },
        {
            "type":"text",
            "text":"Hello, world2"
        }
    ]
}'
```

<!-- tab end -->

#### Rate limit 

초당 2,000회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Content-Type

application/json

<!-- parameter end -->
<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->
<!-- parameter start (props: optional) -->

X-Line-Retry-Key

재시도 키입니다. 어떤 방법으로든 생성한 16진수 형식의 UUID(예: 123e4567-e89b-12d3-a456-426614174000)를 지정합니다. 재시도 키는 LINE에서 생성하지 않습니다. 각 개발자가 직접 재시도 키를 생성해야 합니다. 자세한 내용은 Messaging API 문서의 [Retry failed API requests](https://developers.line.biz/en/docs/messaging-api/retrying-api-request/)를 참조하십시오.

<!-- parameter end -->

#### Request body 

<!-- parameter start (props: required) -->

to

String

대상 수신자의 ID입니다. [webhook event object](https://developers.line.biz/en/reference/messaging-api/#common-properties)에서 반환된 `userId`, `groupId` 또는 `roomId` 값을 사용하십시오.

<!-- parameter end -->
<!-- parameter start (props: required) -->

messages

Array of [message objects](https://developers.line.biz/en/reference/messaging-api/#message-objects)

보낼 메시지\
최대: 5개

[Validate message objects of a push message](https://developers.line.biz/en/reference/messaging-api/#validate-message-objects-of-push-message) endpoint를 사용하면 message 객체를 검증할 수 있습니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

notificationDisabled

Boolean

- `true`: 메시지가 전송될 때 사용자에게 푸시 알림이 전송되지 않습니다.
- `false`: 메시지가 전송될 때 사용자에게 푸시 알림이 전송됩니다(사용자가 LINE 및/또는 기기에서 푸시 알림을 끈 경우는 제외).

기본값: `false`

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

`200` 상태 코드와 다음 정보를 담은 JSON 객체가 반환됩니다.

<!-- parameter start -->

sentMessages

Array

보낸 메시지의 배열입니다.<br />최대: 5개

<!-- parameter end -->
<!-- parameter start -->

sentMessages.id

Number

보낸 메시지의 ID입니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

sentMessages.quoteToken

String

메시지의 quote token입니다. 인용 대상으로 지정할 수 있는 message 객체를 push 메시지로 보낸 경우에만 포함됩니다. 자세한 내용은 Messaging API 문서의 [Get quote tokens](https://developers.line.biz/en/docs/messaging-api/get-quote-tokens/)를 참조하십시오.

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

```json
{
  "sentMessages": [
    {
      "id": "461230966842064897",
      "quoteToken": "IStG5h1Tz7b..."
    }
  ]
}
```

<!-- tab end -->

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code | Description |
| --- | --- |
| `400` | 메시지를 보내지 못했습니다. 다음 원인을 확인하십시오.<ul><li>다른 provider의 채널에서 얻은 사용자 ID처럼 이 채널에 존재하지 않는 사용자 ID를 지정했습니다.</li><li>존재하지 않는 그룹 또는 LINE Official Account가 참여하지 않은 그룹을 지정했습니다.</li><li>존재하지 않는 다인 채팅 또는 LINE Official Account가 참여하지 않은 다인 채팅을 지정했습니다.</li><li>잘못된 message 객체를 지정했습니다.</li><li>`customAggregationUnits` 속성에 최대 문자 수(30)를 초과하는 unit 이름을 지정했습니다.</li><li>`customAggregationUnits` 속성에 잘못된 문자가 포함된 unit 이름을 지정했습니다.</li></ul> |
| `409` | 같은 재시도 키를 포함한 요청이 이미 수락되었습니다. 자세한 내용은 API 요청 재시도 문서의 [Response if the request has already been accepted](https://developers.line.biz/en/reference/messaging-api/#retry-api-request-response)를 참조하십시오. |
| `429` | 요청 횟수가 제한을 초과했습니다. 다음 원인을 확인하십시오.<ul><li>이 endpoint의 [rate limit](https://developers.line.biz/en/reference/messaging-api/#send-push-message-rate-limit)을 초과했습니다.</li><li>같은 사용자에게 많은 메시지를 보냈습니다.</li><li>이번 달 [메시지 발송 대상 한도](https://developers.line.biz/en/reference/messaging-api/#get-quota)를 초과했습니다.</li></ul>메시지 발송 대상 한도에 대한 자세한 내용은 Messaging API 문서의 [Messaging API pricing](https://developers.line.biz/en/docs/messaging-api/pricing/)을 참조하십시오. |

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

오류가 반환되면 메시지는 전송되지 않습니다.

_Example error response_

<!-- tab start `json` -->

```json
// If you failed to send a message (400 Bad Request)
{
  "message": "Failed to send messages"
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
```

<!-- tab end -->

### Send multicast message 

Endpoint: `POST` `https://api.line.me/v2/bot/message/multicast`

여러 사용자 ID에 같은 메시지를 효율적으로 보내는 API입니다. 그룹 채팅이나 다인 채팅에는 메시지를 보낼 수 없습니다.

한 명의 사용자에게 multicast 메시지를 보내는 것도 가능합니다. 다만 수신자가 한 명뿐이라면 [push message](https://developers.line.biz/en/reference/messaging-api/#send-push-message)를 사용하는 것을 권장합니다. Push message는 지연 시간을 짧게 해야 하는 메시지 전송에 적합합니다.

#### Conditions for sending multicast message 

LINE Official Account를 친구로 추가한 사용자에게 multicast 메시지를 보낼 수 있습니다.

이러한 사용자에게 multicast 메시지를 보내면 상태 코드 `200`이 반환되지만, 다음 사용자에게는 메시지가 전달되지 않습니다.

- LINE 계정을 삭제한 사용자
- Multicast 메시지를 보낸 LINE Official Account를 차단한 사용자
- LINE Official Account를 친구로 추가하지 않은 사용자
- 다른 provider의 다른 채널에서 가져온 사용자 ID처럼 이 채널에 존재하지 않는 사용자 ID

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X POST https://api.line.me/v2/bot/message/multicast \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer {channel access token}' \
-H 'X-Line-Retry-Key: {UUID}' \
-d '{
    "to": ["U4af4980629...","U0c229f96c4..."],
    "messages":[
        {
            "type":"text",
            "text":"Hello, world1"
        },
        {
            "type":"text",
            "text":"Hello, world2"
        }
    ]
}'
```

<!-- tab end -->

#### Rate limit 

초당 200회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Content-Type

application/json

<!-- parameter end -->
<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->
<!-- parameter start (props: optional) -->

X-Line-Retry-Key

재시도 키입니다. 어떤 방법으로든 생성한 16진수 형식의 UUID(예: 123e4567-e89b-12d3-a456-426614174000)를 지정합니다. 재시도 키는 LINE에서 생성하지 않습니다. 각 개발자가 직접 재시도 키를 생성해야 합니다. 자세한 내용은 Messaging API 문서의 [Retry failed API requests](https://developers.line.biz/en/docs/messaging-api/retrying-api-request/)를 참조하십시오.

<!-- parameter end -->

#### Request body 

<!-- parameter start (props: required) -->

to

Array of strings

사용자 ID의 배열입니다. [webhook event object](https://developers.line.biz/en/reference/messaging-api/#common-properties)에서 반환된 `userId` 값을 사용하십시오. LINE에서 확인할 수 있는 LINE ID는 사용하지 마십시오.\
최대: 사용자 ID 500개

<!-- parameter end -->
<!-- parameter start (props: required) -->

messages

Array of [message objects](https://developers.line.biz/en/reference/messaging-api/#message-objects)

보낼 메시지\
최대: 5개

[Validate message objects of a multicast message](https://developers.line.biz/en/reference/messaging-api/#validate-message-objects-of-multicast-message) endpoint를 사용하면 message 객체를 검증할 수 있습니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

notificationDisabled

Boolean

- `true`: 메시지가 전송될 때 사용자에게 푸시 알림이 전송되지 않습니다.
- `false`: 메시지가 전송될 때 사용자에게 푸시 알림이 전송됩니다(사용자가 LINE 및/또는 기기에서 푸시 알림을 끈 경우는 제외).

기본값: `false`

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
| `400` | 메시지를 보내지 못했습니다. 다음 원인을 확인하십시오.<ul><li>다른 provider의 채널에서 얻은 사용자 ID처럼 이 채널에 존재하지 않는 사용자 ID를 지정했습니다.</li><li>그룹 ID처럼 사용자 ID가 아닌 값을 지정했습니다.</li><li>잘못된 message 객체를 지정했습니다.</li><li>`customAggregationUnits` 속성에 최대 문자 수(30)를 초과하는 unit 이름을 지정했습니다.</li><li>`customAggregationUnits` 속성에 잘못된 문자가 포함된 unit 이름을 지정했습니다.</li></ul> |
| `409` | 같은 재시도 키를 포함한 요청이 이미 수락되었습니다. 자세한 내용은 API 요청 재시도 문서의 [Response if the request has already been accepted](https://developers.line.biz/en/reference/messaging-api/#retry-api-request-response)를 참조하십시오. |
| `429` | 요청 횟수가 제한을 초과했습니다. 다음 원인을 확인하십시오.<ul><li>이 endpoint의 [rate limit](https://developers.line.biz/en/reference/messaging-api/#send-multicast-rate-limit)을 초과했습니다.</li><li>이번 달 [메시지 발송 대상 한도](https://developers.line.biz/en/reference/messaging-api/#get-quota)를 초과했습니다.</li></ul>메시지 발송 대상 한도에 대한 자세한 내용은 Messaging API 문서의 [Messaging API pricing](https://developers.line.biz/en/docs/messaging-api/pricing/)을 참조하십시오. |

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

오류가 반환되면 어떤 사용자에게도 메시지가 전송되지 않습니다.

_Example error response_

<!-- tab start `json` -->

```json
// If your request contains invalid parameters（400 Bad Request）
{
  "message": "The property, to[1], in the request body is invalid (line: -, column: -)"
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
```

<!-- tab end -->

### Send narrowcast message 

Endpoint: `POST` `https://api.line.me/v2/bot/message/narrowcast`

여러 사용자에게 메시지를 보냅니다. 속성(나이, 성별, OS, 지역 등) 또는 리타게팅(audience)으로 수신자를 지정할 수 있습니다. 그룹 채팅이나 다인 채팅에는 메시지를 보낼 수 없습니다.

Narrowcast 메시지는 LINE Platform이 요청을 받은 후 백그라운드에서 비동기적으로 전송됩니다. 따라서 narrowcast 메시지 전송 요청이 성공하더라도 메시지 전달이 시작된 후 실패가 발생할 수 있습니다. [narrowcast 메시지의 진행 상태를 가져와서](https://developers.line.biz/en/reference/messaging-api/#get-narrowcast-progress-status) 메시지가 성공적으로 전송되었는지 확인할 수 있습니다.

<!-- note start -->

**About sending narrowcast messages to users under the age of 20 in Thailand**

특정 조건으로 수신자를 필터링하면 태국의 20세 미만 사용자는 제외됩니다.

<!-- note end -->

#### Conditions for sending narrowcast message 

LINE Official Account를 친구로 추가한 사용자에게 narrowcast 메시지를 보낼 수 있습니다.

다음 사용자에게 narrowcast 메시지를 보내면 상태 코드 `202`가 반환되지만, 해당 사용자는 수신자에서 제외됩니다.

- LINE 계정을 삭제한 사용자
- LINE Official Account를 차단한 사용자
- LINE Official Account를 친구로 추가하지 않은 사용자
- 다른 provider의 다른 채널에서 가져온 사용자 ID처럼 이 채널에 존재하지 않는 사용자 ID

#### Restrictions on sending messages using attributes and audiences 

속성 또는 audience를 사용하는 경우, 전송 조건에 따라 사용자 개인정보를 보호하기 위한 제한이 메시지에 적용될 수 있습니다. 전송하는 메시지가 제한에 해당하면 요청을 보내거나 메시지를 전달할 때 오류가 발생합니다.

- 속성 데이터를 전송 조건으로 지정하려면 LINE Official Account의 [target reach](https://developers.line.biz/en/glossary/#target-reach) 수가 100명 이상이어야 합니다. Target reach가 100명 미만이면 HTTP 상태 코드 `403`이 반환됩니다.
- 속성 데이터 또는 audience(\*)를 전송 조건으로 지정하면 최종 수신자 수가 50명 이상이어야 합니다. 최종 수신자 수가 50명 미만이면 HTTP 상태 코드 `202`가 반환되지만, 메시지 전달이 시작될 때 오류가 발생합니다.
- 전송 조건으로 두 개 이상의 audience를 지정하면 각 audience(\*)의 수신자는 최소 50명이어야 합니다. Audience의 수신자가 50명 미만이면 HTTP 상태 코드 `202`가 반환되지만, 메시지 전달이 시작될 때 오류가 발생합니다.

\* 다음 audience는 수신자 수에 대한 제한이 없습니다. 다만 다른 LINE Official Account가 만든 audience의 경우에는 다음 audience에도 제한이 적용됩니다.

- LINE Official Account Manager 또는 Messaging API에서 사용자 ID를 업로드하여 만든 audience
- 채팅 태그 audience

#### Note regarding the number of remaining messages to be sent during the current month 

LINE Official Account Manager와 Messaging API에서는 메시지 전송이 시작된 후 전송할 메시지 수가 확정될 때까지, 전송 예정 메시지 수만큼 남은 메시지 수를 예약합니다. 메시지 전달이 시작될 때 전송 예정 메시지 수를 예약할 수 없으면 메시지 전달에 실패합니다.

Narrowcast 메시지는 실제 수신자 수와 관계없이 LINE Official Account의 target reach에 대한 예약이 필요합니다. 따라서 narrowcast 메시지를 보낼 때는 다음 사항에 유의하십시오.

- 이번 달에 보낼 수 있는 남은 메시지 수가 LINE Official Account의 target reach보다 적으면 narrowcast 메시지 전달을 시작할 때 오류가 발생합니다.
- 실제 수신자 수가 충분히 적더라도 이번 달 남은 메시지 수가 일시적으로 소진될 수 있습니다. Narrowcast 메시지가 전달되는 중에 다른 메시지를 보내면 `You have reached your monthly limit.` 메시지와 함께 `429 Too Many Requests` 오류가 반환되고 메시지 전달이 실패합니다.

Narrowcast 메시지를 보낼 때 전송할 메시지 수를 제한하면 이러한 상황을 피할 수 있습니다. 자세한 내용은 [Request body](https://developers.line.biz/en/reference/messaging-api/#send-narrowcast-request-body)의 [Limit objects](https://developers.line.biz/en/reference/messaging-api/#send-narrowcast-limit)를 참조하십시오.

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X POST https://api.line.me/v2/bot/message/narrowcast \
-H 'Authorization: Bearer {channel access token}' \
-H 'Content-Type: application/json' \
-H 'X-Line-Retry-Key: {UUID}' \
-d '{
    "messages": [
        {
            "type": "text",
            "text": "test message"
        }
    ],
    "recipient": {
        "type": "operator",
        "and": [
            {
                "type": "audience",
                "audienceGroupId": 5614991017776
            },
            {
                "type": "operator",
                "not": {
                    "type": "audience",
                    "audienceGroupId": 4389303728991
                }
            }
        ]
    },
    "filter": {
        "demographic": {
            "type": "operator",
            "or": [
                {
                    "type": "operator",
                    "and": [
                        {
                            "type": "gender",
                            "oneOf": [
                                "male",
                                "female"
                            ]
                        },
                        {
                            "type": "age",
                            "gte": "age_20",
                            "lt": "age_25"
                        },
                        {
                            "type": "appType",
                            "oneOf": [
                                "android",
                                "ios"
                            ]
                        },
                        {
                            "type": "area",
                            "oneOf": [
                                "jp_23",
                                "jp_05"
                            ]
                        },
                        {
                            "type": "subscriptionPeriod",
                            "gte": "day_7",
                            "lt": "day_30"
                        }
                    ]
                },
                {
                    "type": "operator",
                    "and": [
                        {
                            "type": "age",
                            "gte": "age_35",
                            "lt": "age_40"
                        },
                        {
                            "type": "operator",
                            "not": {
                                "type": "gender",
                                "oneOf": [
                                    "male"
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    },
    "limit": {
        "max": 100,
        "upToRemainingQuota": true
    }
}'
```

<!-- tab end -->

#### Rate limit 

시간당 60회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->
<!-- parameter start (props: required) -->

Content-Type

`application/json`

<!-- parameter end -->
<!-- parameter start (props: optional) -->

X-Line-Retry-Key

재시도 키입니다. 어떤 방법으로든 생성한 16진수 형식의 UUID(예: 123e4567-e89b-12d3-a456-426614174000)를 지정합니다. 재시도 키는 LINE에서 생성하지 않습니다. 각 개발자가 직접 재시도 키를 생성해야 합니다. 자세한 내용은 Messaging API 문서의 [Retry failed API requests](https://developers.line.biz/en/docs/messaging-api/retrying-api-request/)를 참조하십시오.

<!-- parameter end -->

#### Request body 

<!-- parameter start (props: required) -->

messages

Array of [message objects](https://developers.line.biz/en/reference/messaging-api/#message-objects)

보낼 메시지\
최대: 5개

[Validate message objects of a narrowcast message](https://developers.line.biz/en/reference/messaging-api/#validate-message-objects-of-narrowcast-message) endpoint를 사용하면 message 객체를 검증할 수 있습니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

recipient

Object

[Recipient 객체](https://developers.line.biz/en/reference/messaging-api/#narrowcast-recipient)입니다. 수신자를 지정하기 위해 audience와 이전에 보낸 narrowcast 메시지의 request ID를 합하여 최대 10개까지 사용할 수 있습니다. Operator 객체의 개수에는 상한이 없습니다. \
이 속성을 생략하면 LINE Official Account를 친구로 추가한 모든 사용자에게 메시지를 보냅니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

filter.demographic

Object

[Demographic filter 객체](https://developers.line.biz/en/reference/messaging-api/#narrowcast-demographic-filter)입니다. 친구의 속성을 사용하여 수신자 목록을 필터링할 수 있습니다. \
이 속성을 생략하면 속성 값이 "unknown"인 사용자를 포함하여 모든 사용자에게 메시지를 보냅니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

limit

Object

[Limit 객체](https://developers.line.biz/en/reference/messaging-api/#send-narrowcast-limit)입니다. 보낼 수 있는 narrowcast 메시지의 최대 개수를 설정할 수 있습니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

notificationDisabled

Boolean

- `true`: 메시지가 전송될 때 사용자에게 푸시 알림이 전송되지 않습니다.
- `false`: 메시지가 전송될 때 사용자에게 푸시 알림이 전송됩니다(사용자가 LINE 및/또는 기기에서 푸시 알림을 끈 경우는 제외).

기본값: `false`

<!-- parameter end -->

##### Recipient objects 

Recipient 객체는 audience 객체 또는 redelivery 객체를 나타냅니다. Logical operator 객체를 사용하여 여러 기준을 조합해 수신자를 지정할 수 있습니다. 요청 하나당 audience 객체와 redelivery 객체를 합하여 최대 10개까지 지정할 수 있습니다.

###### Audience objects 

<!-- parameter start (props: required) -->

type

String

`audience`

<!-- parameter end -->
<!-- parameter start (props: required) -->

audienceGroupId

Number

Audience ID입니다. [manage audience](https://developers.line.biz/en/reference/messaging-api/#manage-audience-group) API로 audience를 만들 수 있습니다.

<!-- parameter end -->

###### Redelivery object 

<!-- parameter start (props: required) -->

type

String

`redelivery`

<!-- parameter end -->
<!-- parameter start (props: required) -->

requestId

String

이전에 보낸 narrowcast 메시지의 request ID입니다. Request ID는 Messaging API 요청마다 발급되는 ID입니다. [response header](https://developers.line.biz/en/reference/messaging-api/#response-headers)에 포함되어 있습니다.

<!-- parameter end -->

<!-- note start -->

**Conditions for specifying the request ID**

`requestId` 속성에 지정하는 request ID는 다음 조건을 모두 충족해야 합니다. 이 조건을 충족하지 않는 request ID를 지정하면 HTTP 상태 코드 `400`이 반환됩니다.

- Request ID는 narrowcast 메시지를 전달할 때 발급된 것이어야 합니다.
- Narrowcast 메시지는 [Get narrowcast message status](https://developers.line.biz/en/reference/messaging-api/#get-narrowcast-progress-status-response) API endpoint 응답의 `acceptedTime`에 표시된 시각으로부터 14일(336시간) 미만 이내에 전달되어야 합니다.
- 전달 과정이 완료되어야 합니다([Get narrowcast message status](https://developers.line.biz/en/reference/messaging-api/#get-narrowcast-progress-status-response) API endpoint 응답에서 `phase` 속성 값이 `succeeded`여야 합니다).

<!-- note end -->

###### Logical operator objects 

Logical AND, OR, NOT 연산자를 사용하여 여러 recipient 객체를 조합합니다.

<!-- parameter start (props: required) -->

type

String

`operator`

<!-- parameter end -->
<!-- parameter start (props: annotation="*") -->

and

Array of recipient objects

지정한 recipient 객체 배열의 논리곱(AND)을 취하여 새로운 recipient 객체를 만듭니다.

![Audience 1 and Audience 2](https://developers.line.biz/media/messaging-api/narrowcast-message/operator_object_for_reference_and_en.png)

<!-- parameter end -->
<!-- parameter start (props: annotation="*") -->

or

Array of recipient objects

지정한 recipient 객체 배열의 논리합(OR)을 취하여 새로운 recipient 객체를 만듭니다.

![Audience 1 or Audience 2](https://developers.line.biz/media/messaging-api/narrowcast-message/operator_object_for_reference_or_en.png)

<!-- parameter end -->
<!-- parameter start (props: annotation="*") -->

not

Recipient object

지정한 recipient 객체를 제외하는 새로운 recipient 객체를 만듭니다.

![not Audience 2](https://developers.line.biz/media/messaging-api/narrowcast-message/operator_object_for_reference_not_en.png)

<!-- parameter end -->

\* 이 세 속성(`and`, `or`, `not`) 중 하나만 지정하십시오. 빈 배열은 지정할 수 없습니다.

_Example recipient object_

<!-- tab start `json` -->

```json
{
  "type": "operator",
  "and": [
    {
      "type": "audience",
      "audienceGroupId": 5614991017776
    },
    {
      "type": "operator",
      "not": {
        "type": "redelivery",
        "requestId": "5b59509c-c57b-11e9-aa8c-2a2ae2dbcce4"
      }
    }
  ]
}
```

<!-- tab end -->

##### Demographic filter objects 

Demographic filter 객체는 수신자 목록을 필터링하는 기준(예: 나이, 성별, OS, 지역, 친구 관계 기간)을 나타냅니다. Logical operator 객체를 사용하여 서로 다른 기준을 조합해 수신자를 필터링할 수 있습니다.

<!-- note start -->

**Using attribute data**

- Demographic filter에 사용하는 속성 데이터는 약 3일 전의 데이터입니다(이보다 이르거나 늦을 수 있습니다).
- 속성을 지정하지 않으면 속성 값이 "unknown"인 사용자를 포함하여 모든 사용자에게 메시지를 보냅니다.
- 속성 데이터를 사용하려면 ["Target reach"](https://developers.line.biz/en/glossary/#target-reach) 수가 100명 이상이어야 합니다.
  - Target reach가 100명 미만이면 HTTP 상태 코드 `403`이 반환됩니다.

<!-- note end -->

###### Gender 

<!-- parameter start (props: required) -->

type

String

`gender`

<!-- parameter end -->
<!-- parameter start (props: required) -->

oneOf

Array of strings

지정한 성별의 사용자에게 메시지를 보냅니다. 다음 중 하나입니다.

- `male`
- `female`

<!-- parameter end -->

###### Age 

지정한 나이 범위의 수신자를 필터링할 수 있습니다.

<!-- parameter start (props: required) -->

type

String

`age`

<!-- parameter end -->
<!-- parameter start (props: annotation="*") -->

gte

String

지정한 나이 이상인 사용자에게 메시지를 보냅니다.

다음 값 중 하나를 지정할 수 있습니다. 다만 `lt` 속성에 지정한 값보다 작은 값을 지정하십시오.

- `age_15`
- `age_20`
- `age_25`
- `age_30`
- `age_35`
- `age_40`
- `age_45`
- `age_50`
- `age_55`
- `age_60`
- `age_65`
- `age_70`

<!-- parameter end -->
<!-- parameter start (props: annotation="*") -->

lt

String

지정한 나이보다 어린 사용자에게 메시지를 보냅니다.

다음 값 중 하나를 지정할 수 있습니다. 다만 `gte` 속성에 지정한 값보다 큰 값을 지정하십시오.

- `age_15`
- `age_20`
- `age_25`
- `age_30`
- `age_35`
- `age_40`
- `age_45`
- `age_50`
- `age_55`
- `age_60`
- `age_65`
- `age_70`

<!-- parameter end -->

\* `gte`, `lt` 중 하나 또는 둘 모두를 지정하십시오.

###### Operating system 

<!-- parameter start (props: required) -->

type

String

`appType`

<!-- parameter end -->
<!-- parameter start (props: required) -->

oneOf

Array of strings

지정한 OS를 사용하는 사용자에게 메시지를 보냅니다. 다음 중 하나입니다.

- `ios`
- `android`

<!-- parameter end -->

###### Region 

<!-- parameter start (props: required) -->

type

String

`area`

<!-- parameter end -->
<!-- parameter start (props: required) -->

oneOf

Array of strings

지정한 지역에 있는 사용자에게 메시지를 보냅니다. 다음 중 하나입니다. \
**日本 // JP (country code=392)**

- `jp_01`: 北海道 // Hokkaido
- `jp_02`: 青森県 // Aomori
- `jp_03`: 岩手県 // Iwate
- `jp_04`: 宮城県 // Miyagi
- `jp_05`: 秋田県 // Akita
- `jp_06`: 山形県 // Yamagata
- `jp_07`: 福島県 // Fukushima
- `jp_08`: 茨城県 // Ibaraki
- `jp_09`: 栃木県 // Tochigi
- `jp_10`: 群馬県 // Gunma
- `jp_11`: 埼玉県 // Saitama
- `jp_12`: 千葉県 // Chiba
- `jp_13`: 東京都 // Tokyo
- `jp_14`: 神奈川県 // Kanagawa
- `jp_15`: 新潟県 // Niigata
- `jp_16`: 富山県 // Toyama
- `jp_17`: 石川県 // Ishikawa
- `jp_18`: 福井県 // Fukui
- `jp_19`: 山梨県 // Yamanashi
- `jp_20`: 長野県 // Nagano
- `jp_21`: 岐阜県 // Gifu
- `jp_22`: 静岡県 // Shizuoka
- `jp_23`: 愛知県 // Aichi
- `jp_24`: 三重県 // Mie
- `jp_25`: 滋賀県 // Shiga
- `jp_26`: 京都府 // Kyoto
- `jp_27`: 大阪府 // Osaka
- `jp_28`: 兵庫県 // Hyougo
- `jp_29`: 奈良県 // Nara
- `jp_30`: 和歌山県 // Wakayama
- `jp_31`: 鳥取県 // Tottori
- `jp_32`: 島根県 // Shimane
- `jp_33`: 岡山県 // Okayama
- `jp_34`: 広島県 // Hiroshima
- `jp_35`: 山口県 // Yamaguchi
- `jp_36`: 徳島県 // Tokushima
- `jp_37`: 香川県 // Kagawa
- `jp_38`: 愛媛県 // Ehime
- `jp_39`: 高知県 // Kouchi
- `jp_40`: 福岡県 // Fukuoka
- `jp_41`: 佐賀県 // Saga
- `jp_42`: 長崎県 // Nagasaki
- `jp_43`: 熊本県 // Kumamoto
- `jp_44`: 大分県 // Oita
- `jp_45`: 宮崎県 // Miyazaki
- `jp_46`: 鹿児島県 // Kagoshima
- `jp_47`: 沖縄県 // Okinawa

**台湾 // TW (country code=158)**

- `tw_01`: 台北市 // Taipei City
- `tw_02`: 新北市 // New Taipei City
- `tw_03`: 桃園市 // Taoyuan City
- `tw_04`: 台中市 // Taichung City
- `tw_05`: 台南市 // Tainan City
- `tw_06`: 高雄市 // Kaohsiung City
- `tw_07`: 基隆市 // Keelung City
- `tw_08`: 新竹市 // Hsinchu City
- `tw_09`: 嘉義市 // Chiayi City
- `tw_10`: 新竹県 // Hsinchu County
- `tw_11`: 苗栗県 // Miaoli County
- `tw_12`: 彰化県 // Changhua County
- `tw_13`: 南投県 // Nantou County
- `tw_14`: 雲林県 // Yunlin County
- `tw_15`: 嘉義県 // Chiayi County
- `tw_16`: 屏東県 // Pingtung County
- `tw_17`: 宜蘭県 // Yilan County
- `tw_18`: 花蓮県 // Hualien County
- `tw_19`: 台東県 // Taitung County
- `tw_20`: 澎湖県 // Penghu County
- `tw_21`: 金門県 // Kinmen County
- `tw_22`: 連江県 // Lienchiang County

**タイ // TH (country code=764)**

- `th_01`: バンコク // Bangkok
- `th_02`: パタヤ // Pattaya
- `th_03`: 北部 // Northern
- `th_04`: 中央部 // Central
- `th_05`: 南部 // Southern
- `th_06`: 東部 // Eastern
- `th_07`: 東北部 // NorthEastern
- `th_08`: 西部 // Western

<!-- parameter end -->

###### Friendship duration 

지정한 범위의 친구 관계 기간으로 수신자를 필터링할 수 있습니다.

<!-- parameter start (props: required) -->

type

String

`subscriptionPeriod`

<!-- parameter end -->
<!-- parameter start (props: annotation="*") -->

gte

String

지정한 일수 이상 친구 관계를 유지한 사용자에게 메시지를 보냅니다.\
다음 값 중 하나를 지정할 수 있습니다. 다만 `lt` 속성에 지정한 값보다 작은 값을 지정하십시오.

- `day_7`
- `day_30`
- `day_90`
- `day_180`
- `day_365`

<!-- parameter end -->
<!-- parameter start (props: annotation="*") -->

lt

String

지정한 일수보다 짧은 기간 동안 친구 관계를 유지한 사용자에게 메시지를 보냅니다.\
다음 값 중 하나를 지정할 수 있습니다. 다만 `gte` 속성에 지정한 값보다 큰 값을 지정하십시오.

- `day_7`
- `day_30`
- `day_90`
- `day_180`
- `day_365`

<!-- parameter end -->

\* `gte`, `lt` 중 하나 또는 둘 모두를 지정하십시오.

###### Logical operator objects 

Logical AND, OR, NOT 연산자를 사용하여 여러 demographic filter 객체를 조합합니다. 요청 하나당 demographic filter 객체는 최대 10개까지 지정할 수 있습니다.

<!-- parameter start (props: required) -->

type

String

`operator`

<!-- parameter end -->
<!-- parameter start (props: annotation="*") -->

and

Array of demographic filter objects

지정한 demographic filter 객체 배열의 논리곱(AND)을 취하여 새로운 demographic filter 객체를 만듭니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="*") -->

or

Array of demographic filter objects

지정한 demographic filter 객체 배열의 논리합(OR)을 취하여 새로운 demographic filter 객체를 만듭니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="*") -->

not

Demographic filter object

지정한 demographic filter 객체 배열을 제외하는 새로운 demographic filter 객체를 만듭니다.

<!-- parameter end -->

\* 이 세 속성(`and`, `or`, `not`) 중 하나만 지정하십시오. 빈 배열은 지정할 수 없습니다.

_Example demographic filter object for gender_

<!-- tab start `json` -->

```json
{
  "type": "gender",
  "oneOf": ["male", "female"]
}
```

<!-- tab end -->

##### Limit objects 

Limit 객체를 설정하여 보낼 수 있는 narrowcast 메시지의 최대 개수를 제한할 수 있습니다.

속성 설정을 통해 전송 최대 개수를 제어하는 방법에 대한 자세한 내용은 Messaging API 문서의 [Controlling the maximum number of messages to send with limit objects](https://developers.line.biz/en/docs/messaging-api/sending-messages/#maximum-send-numbers-control)를 참조하십시오.

<!-- parameter start (props: optional) -->

max

Number

보낼 narrowcast 메시지의 최대 개수입니다. 이 파라미터로 전송되는 narrowcast 메시지 수를 제한할 수 있습니다. 수신자는 무작위로 선택됩니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

upToRemainingQuota

Boolean

`true`이면 전송 가능한 메시지의 최대 개수 범위 안에서 메시지를 보냅니다. 기본값은 `false`입니다. 대상은 무작위로 선택됩니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

forbidPartialDelivery

Boolean

이 옵션은 메시지가 대상 audience의 일부에게만 전달되는 것을 막습니다. `upToRemainingQuota` 속성을 `true`로 설정하고 `forbidPartialDelivery` 속성도 `true`로 설정하면, 수신자 수가 최대 전송 개수를 초과하는 경우 메시지가 전달되지 않습니다.

[narrowcast 메시지 진행 상태 가져오기](https://developers.line.biz/en/reference/messaging-api/#get-narrowcast-progress-status)로 메시지 전달이 취소되었는지 확인할 수 있습니다. 전달이 취소되면 응답의 `phase` 속성은 `failed`이고, `errorCode` 속성은 `5`입니다.

`forbidPartialDelivery` 속성은 `upToRemainingQuota` 속성이 `true`로 설정된 경우에만 지정할 수 있습니다.

<!-- parameter end -->

_Example limit object_

<!-- tab start `json` -->

```json
{
  "max": 100,
  "upToRemainingQuota": true,
  "forbidPartialDelivery": true
}
```

<!-- tab end -->

다음 표는 `max` 속성 설정과 `upToRemainingQuota` 속성 설정에 따른 예약 수와 최대 전송 개수의 관계를 보여줍니다.

| `max` 속성 | `upToRemainingQuota` 속성 | 예약 수 및 최대 전송 개수 |
| --- | --- | --- |
| 설정하지 않음 | false | Target reach 수 |
| 임의의 숫자 | false | Target reach와 `max` 속성 중 최솟값 |
| 설정하지 않음 | true | Target reach와 이번 달의 예상 상한 중 최솟값 |
| 임의의 숫자 | true | Target reach, 이번 달의 예상 상한, `max` 속성 중 최솟값 |

#### Response 

HTTP 상태 코드 `202`와 빈 JSON 객체가 반환됩니다.

Narrowcast 메시지는 비동기적으로 전송됩니다. Narrowcast 메시지의 상태를 확인하는 방법은 [Get narrowcast message status](https://developers.line.biz/en/reference/messaging-api/#get-narrowcast-progress-status)를 참조하십시오.

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code | Description |
| --- | --- |
| `400` | 메시지를 보내지 못했습니다. 다음 원인을 확인하십시오.<ul><li>[redelivery 객체](https://developers.line.biz/en/reference/messaging-api/#narrowcast-recipient-redelivery-object)에 잘못된 request ID를 지정했습니다.</li><li>`READY` 이외의 상태인 등 잘못된 audience를 지정했습니다.</li><li>잘못된 message 객체를 지정했습니다.</li><li>잘못된 요청 파라미터 조합을 지정했습니다.</li></ul> |
| `403` | 수신자가 충분하지 않습니다. 자세한 내용은 [속성과 audience를 사용한 메시지 전송 제한](https://developers.line.biz/en/reference/messaging-api/#send-narrowcast-message-restrictions)을 참조하십시오. |
| `409` | 같은 재시도 키를 포함한 요청이 이미 수락되었습니다. 자세한 내용은 API 요청 재시도 문서의 [Response if the request has already been accepted](https://developers.line.biz/en/reference/messaging-api/#retry-api-request-response)를 참조하십시오. |
| `429` | 요청 횟수가 제한을 초과했습니다. 다음 원인을 확인하십시오.<ul><li>이 endpoint의 [rate limit](https://developers.line.biz/en/reference/messaging-api/#send-narrowcast-rate-limit)을 초과했습니다.</li><li>이번 달 [메시지 발송 대상 한도](https://developers.line.biz/en/reference/messaging-api/#get-quota)를 초과했습니다.</li></ul>메시지 발송 대상 한도에 대한 자세한 내용은 Messaging API 문서의 [Messaging API pricing](https://developers.line.biz/en/docs/messaging-api/pricing/)을 참조하십시오. |

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

오류가 반환되면 어떤 사용자에게도 메시지가 전송되지 않습니다.

_Error response example_

<!-- tab start `json` -->

```json
// If you specify an invalid audience ID (400 Bad Request)
{
    "message": "Invalid audience group id: {audience ID}"
}

// If you specify an invalid request ID for redelivery object (400 Bad Request)
{
    "message": "Invalid request id: {request ID}"
}

// If you set limit.forbidPartialDelivery to true without setting limit.upToRemainingQuota to true (400 Bad Request)
{
    "message": "The option forbidPartialDelivery must be used with upToRemainingQuota."
}

// If there are not enough friends (403 Forbidden)
{
    "message": "Your account does not have enough friends"
}
```

<!-- tab end -->

### Get narrowcast message status 

Endpoint: `GET` `https://api.line.me/v2/bot/message/progress/narrowcast`

Narrowcast 메시지의 상태를 가져옵니다.

<!-- note start -->

**Narrowcast messages can't be sent if the number of recipients is less than the required amount**

수신자의 속성을 추측하는 것을 막기 위해 수신자 수가 필요한 최소 인원보다 적으면 narrowcast 메시지를 보낼 수 없습니다. 자세한 내용은 [속성과 audience를 사용한 메시지 전송 제한](https://developers.line.biz/en/reference/messaging-api/#send-narrowcast-message-restrictions)을 참조하십시오.

<!-- note end -->

<!-- note start -->

**Window of availability for status requests**

`acceptedTime`에 표시된 시각으로부터 14일(336시간)이 지나면 더 이상 narrowcast 메시지의 상태를 가져올 수 없습니다.

<!-- note end -->

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X GET 'https://api.line.me/v2/bot/message/progress/narrowcast?requestId={request_id}' \
-H 'Authorization: Bearer {channel access token}'
```

<!-- tab end -->

#### Rate limit 

초당 2,000회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->

#### Query parameters 

<!-- parameter start (props: required) -->

requestId

Narrowcast 메시지의 request ID입니다. Messaging API 요청마다 request ID가 있습니다. [response headers](https://developers.line.biz/en/reference/messaging-api/#response-headers)에서 확인할 수 있습니다.

<!-- parameter end -->

#### Response 

`200` HTTP 상태 코드와 다음 정보를 담은 JSON 객체가 반환됩니다.

<!-- parameter start -->

phase

String

현재 상태입니다. 다음 중 하나입니다.

- `waiting`: 메시지를 아직 보낼 준비가 되지 않았습니다. 현재 필터링되거나 처리되고 있습니다.
- `sending`: 메시지를 보내고 있습니다.
- `succeeded`: 메시지를 성공적으로 보냈습니다. 메시지가 성공적으로 수신되었다는 의미는 아닐 수 있습니다.
- `failed`: 메시지 전송에 실패했습니다. `failedDescription` 속성으로 실패 원인을 확인하십시오.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

successCount

Number

메시지를 성공적으로 받은 사용자의 수입니다. \*

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

failureCount

Number

메시지 전송에 실패한 사용자의 수입니다. \* \
`phase`가 `succeeded`라도 `failureCount`가 0이 아니면 일부 사용자는 narrowcast 메시지를 받지 못했을 수 있습니다. 예를 들어 narrowcast 메시지를 보내는 도중 사용자가 LINE Official Account를 차단하면 `failureCount`에 포함됩니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

targetCount

Number

메시지의 의도된 수신자 수입니다. \*

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

failedDescription

String

메시지 전송에 실패한 이유입니다. `phase` 속성 값이 `failed`인 경우에만 포함됩니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

errorCode

Number

오류 요약입니다. `phase` 속성 값이 `failed`인 경우에만 포함됩니다.\
다음 중 하나입니다.

- `1`: 내부 오류가 발생했습니다.
- `2`: 수신자가 충분하지 않아 오류가 발생했습니다.
- `3`: 이미 수락된 요청을 재시도하여 요청 충돌 오류가 발생했습니다.
- `4`: 전송 조건으로 50명 미만의 수신자를 가진 audience가 포함되어 있습니다.
- `5`: 대상 audience의 일부에게만 메시지가 전달되는 것을 막기 위해 메시지 전달이 취소되었습니다. [`limit.forbidPartialDelivery`](https://developers.line.biz/en/reference/messaging-api/#send-narrowcast-limit)를 `true`로 설정하여 메시지를 보냈는데 수신자 수가 최대 전송 개수를 초과하는 경우 이 오류가 발생합니다.

<!-- parameter end -->
<!-- parameter start -->

acceptedTime

String

Narrowcast 메시지 요청이 수락된 시각(밀리초)입니다.

- 형식: [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)(예: `2020-12-03T10:15:30.121Z`)
- 시간대: UTC

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

completedTime

String

Narrowcast 메시지 요청의 처리가 완료된 시각(밀리초)입니다. `phase` 속성이 `succeeded` 또는 `failed`인 경우에 반환됩니다.

- 형식: [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)(예: `2020-12-03T10:15:30.121Z`)
- 시간대: UTC

<!-- parameter end -->

\* `phase` 속성이 `waiting`인 경우에는 사용할 수 없습니다.

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code | Description |
| --- | --- |
| `400` | 잘못된 request ID를 지정했습니다. |
| `404` | 상태를 가져올 수 없습니다. 다음 원인을 확인하십시오.<ul><li>상태를 가져올 수 있는 기간이 만료되었습니다.</li><li>Narrowcast 메시지가 아닌 request ID를 지정했습니다.</li></ul> |

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Example error response_

<!-- tab start `json` -->

```json
// If you couldn't get the status (404 Not Found)
{
  "message": "Not found"
}
```

<!-- tab end -->

### Send broadcast message 

Endpoint: `POST` `https://api.line.me/v2/bot/message/broadcast`

언제든지 LINE Official Account의 모든 친구에게 메시지를 보냅니다.

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X POST https://api.line.me/v2/bot/message/broadcast \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer {channel access token}' \
-H 'X-Line-Retry-Key: {UUID}' \
-d '{
    "messages":[
        {
            "type":"text",
            "text":"Hello, world1"
        },
        {
            "type":"text",
            "text":"Hello, world2"
        }
    ]
}'
```

<!-- tab end -->

#### Rate limit 

시간당 60회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Content-Type

application/json

<!-- parameter end -->
<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->
<!-- parameter start (props: optional) -->

X-Line-Retry-Key

재시도 키입니다. 어떤 방법으로든 생성한 16진수 형식의 UUID(예: 123e4567-e89b-12d3-a456-426614174000)를 지정합니다. 재시도 키는 LINE에서 생성하지 않습니다. 각 개발자가 직접 재시도 키를 생성해야 합니다. 자세한 내용은 Messaging API 문서의 [Retry failed API requests](https://developers.line.biz/en/docs/messaging-api/retrying-api-request/)를 참조하십시오.

<!-- parameter end -->

#### Request body 

<!-- parameter start (props: required) -->

messages

Array of [message objects](https://developers.line.biz/en/reference/messaging-api/#message-objects)

보낼 메시지\
최대: 5개

[Validate message objects of a broadcast message](https://developers.line.biz/en/reference/messaging-api/#validate-message-objects-of-broadcast-message) endpoint를 사용하면 message 객체를 검증할 수 있습니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

notificationDisabled

Boolean

- `true`: 메시지가 전송될 때 사용자에게 푸시 알림이 전송되지 않습니다.
- `false`: 메시지가 전송될 때 사용자에게 푸시 알림이 전송됩니다(사용자가 LINE 및/또는 기기에서 푸시 알림을 끈 경우는 제외).

기본값: `false`

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
| `400` | 잘못된 message 객체를 지정했습니다. |
| `409` | 같은 재시도 키를 포함한 요청이 이미 수락되었습니다. 자세한 내용은 API 요청 재시도 문서의 [Response if the request has already been accepted](https://developers.line.biz/en/reference/messaging-api/#retry-api-request-response)를 참조하십시오. |
| `429` | 요청 횟수가 제한을 초과했습니다. 다음 원인을 확인하십시오.<ul><li>이 endpoint의 [rate limit](https://developers.line.biz/en/reference/messaging-api/#send-broadcast-rate-limit)을 초과했습니다.</li><li>이번 달 [메시지 발송 대상 한도](https://developers.line.biz/en/reference/messaging-api/#get-quota)를 초과했습니다.</li></ul>메시지 발송 대상 한도에 대한 자세한 내용은 Messaging API 문서의 [Messaging API pricing](https://developers.line.biz/en/docs/messaging-api/pricing/)을 참조하십시오. |

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

오류가 반환되면 메시지는 전송되지 않습니다.

_Example error response_

<!-- tab start `json` -->

```json
// If your request contains invalid parameters（400 Bad Request）
{
  "message": "The request body has 1 error(s)",
  "details": [
    {
      "message": "May not be empty",
      "property": "messages[0].type"
    }
  ]
}
```

<!-- tab end -->

### Mark messages as read 

Endpoint: `POST` `https://api.line.me/v2/bot/chat/markAsRead`

지정한 메시지 이전에 보낸 모든 메시지를 읽음으로 표시합니다. 자세한 내용은 Messaging API 문서의 [Mark messages as read](https://developers.line.biz/en/docs/messaging-api/mark-as-read/)를 참조하십시오.

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X POST https://api.line.me/v2/bot/chat/markAsRead \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer {channel access token}' \
-d '{
  "markAsReadToken": "{mark as read token}"
}'
```

<!-- tab end -->

#### Rate limit 

초당 2,000회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

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

markAsReadToken

String

Read token입니다. Webhook의 [message event object](https://developers.line.biz/en/reference/messaging-api/#message-event)의 `markAsReadToken` 속성에 포함되어 있습니다.

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

| Code  | Description                               |
| ----- | ----------------------------------------- |
| `400` | 잘못된 read token을 지정했습니다. |

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Example error response_

<!-- tab start `json` -->

```json
// If an invalid read token is specified (400 Bad Request)
{
  "message": "Invalid markAsReadToken. Tokens must be used by the bot that received them via Webhook."
}
```

<!-- tab end -->

### Display a loading animation 

Endpoint: `POST` `https://api.line.me/v2/bot/chat/loading/start`

사용자와 LINE Official Account 간의 1:1 채팅에 로딩 애니메이션을 표시합니다.

로딩 애니메이션은 지정한 시간(5초에서 60초 사이)이 지나거나 LINE Official Account로부터 새 메시지가 도착하면 자동으로 사라집니다.

로딩 애니메이션은 사용자가 LINE Official Account와의 채팅 화면을 보고 있을 때만 표시됩니다. 사용자가 채팅 화면을 보고 있지 않을 때 로딩 애니메이션 표시를 요청하면 알림이 표시되지 않습니다. 사용자가 나중에 채팅 화면을 열더라도 애니메이션은 표시되지 않습니다.

로딩 애니메이션이 아직 표시되고 있는 동안 다시 표시를 요청하면 애니메이션은 계속 표시되며, 사라지기까지의 시간은 두 번째 요청에서 지정한 시간(초)으로 덮어쓰기됩니다.

다음 버전의 LINE에서 로딩 애니메이션이 표시됩니다.

- LINE for iOS 또는 Android: 13.16.0 이상

자세한 내용은 Messaging API 문서의 [Display a loading animation](https://developers.line.biz/en/docs/messaging-api/use-loading-indicator/)을 참조하십시오.

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X POST https://api.line.me/v2/bot/chat/loading/start \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer {channel access token}' \
-d '{
    "chatId": "U4af4980629...",
    "loadingSeconds": 5
}'
```

<!-- tab end -->

#### Rate limit 

초당 100회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

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

chatId

String

로딩 애니메이션을 표시할 대상 사용자의 사용자 ID입니다.

사용자 ID를 가져오는 방법은 Messaging API 문서의 [Get user IDs](https://developers.line.biz/en/docs/messaging-api/getting-user-ids/)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

loadingSeconds

Number

로딩 애니메이션을 표시할 시간(초)입니다. `5`, `10`, `15`, `20`, `25`, `30`, `35`, `40`, `45`, `50`, `55`, `60` 중 하나를 지정할 수 있습니다.

기본값은 `20`입니다.

<!-- parameter end -->

#### Response 

상태 코드 `202`와 빈 JSON 객체가 반환됩니다.

다음 사용자에게 로딩 애니메이션 표시를 요청하면 상태 코드 `202`가 반환되지만, 로딩 애니메이션은 표시되지 않습니다.

- LINE Official Account와의 채팅 화면을 열고 있지 않은 사용자
- LINE Official Account를 친구로 추가하지 않은 사용자
- LINE Official Account를 차단한 사용자
- LINE 계정을 삭제한 사용자

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
| `400` | 로딩 애니메이션을 표시하지 못했습니다. 다음 원인을 확인하십시오.<ul><li>잘못된 시간(초)을 지정했습니다.</li><li>잘못된 사용자 ID를 지정했습니다.</li><li>그룹 채팅 또는 다인 채팅을 지정했습니다.</li></ul> |

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

오류가 반환되면 로딩 애니메이션이 표시되지 않습니다.

_Example error response_

<!-- tab start `json` -->

```json
// If you specify an invalid number of seconds (400 Bad Request)
{
  "message": "The request body has 2 error(s)",
  "details": [
    {
      "message": "Must be between 5 and 60",
      "property": "loadingSeconds"
    },
    {
      "message": "must be a multiple of five",
      "property": "loadingSeconds"
    }
  ]
}

// If you specify a group chat or a multi-person chat as the destination (400 Bad Request)
{
  "message": "The request body has 1 error(s)",
  "details": [
    {
      "message": "Only user id is acceptable, please confirm if there are any group/room ids or illegal ids.",
      "property": "chatId"
    }
  ]
}
```

<!-- tab end -->

### Get the target limit for sending messages this month 

Endpoint: `GET` `https://api.line.me/v2/bot/message/quota`

이번 달의 메시지 발송 대상 한도를 가져옵니다. 무료 메시지와 추가 메시지의 총 개수가 반환됩니다.

이 endpoint로 가져오는 메시지 수에는 LINE Official Account Manager에서 보낸 메시지 수가 포함됩니다.

LINE Official Account Manager에서 추가 메시지에 대한 대상 한도를 설정할 수 있습니다. 설정에 대한 자세한 내용은 LINE for Business의 [Using and billing (plan changes and payment management)](https://www.lycbiz.com/jp/manual/OfficialAccountManager/account-settings_plan/?list=7171)(일본어만 제공)을 참조하십시오.

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X GET https://api.line.me/v2/bot/message/quota \
-H 'Authorization: Bearer {channel access token}'
```

<!-- tab end -->

#### Rate limit 

초당 2,000회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->

#### Response 

다음 정보를 담은 JSON 객체와 함께 상태 코드 `200`이 반환됩니다.

<!-- parameter start -->

type

String

대상 한도가 설정되어 있는지 여부를 나타내는 다음 값 중 하나입니다.

- `none`: 대상 한도가 설정되어 있지 않습니다.
- `limited`: 대상 한도가 설정되어 있습니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

value

Number

이번 달의 메시지 발송 대상 한도입니다. `type` 속성 값이 `limited`인 경우에 반환됩니다.

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

```json
{
  "type": "limited",
  "value": 1000
}
```

<!-- tab end -->

#### Error Response 

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

### Get number of messages sent this month 

Endpoint: `GET` `https://api.line.me/v2/bot/message/quota/consumption`

이번 달에 보낸 메시지 수를 가져옵니다.

이 작업으로 가져오는 메시지 수에는 LINE Official Account Manager에서 보낸 메시지 수가 포함됩니다.

이 작업으로 가져오는 메시지 수는 대략적인 값입니다. 정확한 발송 메시지 수를 확인하려면 LINE Official Account Manager를 사용하거나 발송 메시지 수를 가져오는 API 작업을 실행하십시오.

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X GET https://api.line.me/v2/bot/message/quota/consumption \
-H 'Authorization: Bearer {channel access token}'
```

<!-- tab end -->

#### Rate limit 

초당 2,000회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->

#### Response 

다음 정보를 담은 JSON 객체와 함께 상태 코드 `200`이 반환됩니다.

<!-- parameter start -->

totalUsage

Number

이번 달에 보낸 메시지 수

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

```json
{
  "totalUsage": 500
}
```

<!-- tab end -->

#### Error Response 

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

### Get number of sent reply messages 

Endpoint: `GET` `https://api.line.me/v2/bot/message/delivery/reply`

[`/bot/message/reply`](https://developers.line.biz/en/reference/messaging-api/#send-reply-message) endpoint로 보낸 메시지 수를 가져옵니다.

이 작업으로 가져오는 메시지 수에는 LINE Official Account Manager에서 보낸 메시지 수가 포함되지 않습니다.

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X GET "https://api.line.me/v2/bot/message/delivery/reply?date={yyyyMMdd}" \
-H 'Authorization: Bearer {channel access token}'
```

<!-- tab end -->

#### Rate limit 

초당 2,000회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->

#### Query parameters 

<!-- parameter start (props: required) -->

date

메시지를 보낸 날짜

- 형식: `yyyyMMdd` (예: `20191231`)
- 시간대: UTC+9

<!-- parameter end -->

#### Response 

다음 정보를 담은 JSON 객체와 함께 상태 코드 `200`이 반환됩니다.

<!-- parameter start -->

status

String

집계 처리 상태입니다. 다음 값 중 하나가 반환됩니다.

- `ready`: 메시지 수를 가져올 수 있습니다.
- `unready`: `date`에 지정한 날짜의 메시지 집계가 아직 완료되지 않았습니다. 나중에 다시 요청하십시오. 보통 집계는 다음 날까지 완료됩니다.
- `out_of_service`: `date`에 지정한 날짜가 집계 시스템 운영이 시작된 2018년 3월 31일보다 이전입니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

success

Number

`date`에 지정한 날짜에 Messaging API로 보낸 메시지 수입니다. `status` 값이 `ready`인 경우에만 응답에 이 속성이 포함됩니다.

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

```json
{
  "status": "ready",
  "success": 10000
}
```

<!-- tab end -->

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code | Description |
| --- | --- |
| `400` | 잘못된 날짜 형식을 지정했습니다. |

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Example error response_

<!-- tab start `json` -->

```json
// If you specify a date in an invalid format (400 Bad Request)
{
  "message": "The value for the 'date' parameter is invalid"
}
```

<!-- tab end -->

### Get number of sent push messages 

Endpoint: `GET` `https://api.line.me/v2/bot/message/delivery/push`

[`/bot/message/push`](https://developers.line.biz/en/reference/messaging-api/#send-push-message) endpoint로 보낸 메시지 수를 가져옵니다.

이 작업으로 가져오는 메시지 수에는 LINE Official Account Manager에서 보낸 메시지 수가 포함되지 않습니다.

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X GET "https://api.line.me/v2/bot/message/delivery/push?date={yyyyMMdd}" \
-H 'Authorization: Bearer {channel access token}'
```

<!-- tab end -->

#### Rate limit 

초당 2,000회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->

#### Query parameters 

<!-- parameter start (props: required) -->

date

메시지를 보낸 날짜

- 형식: `yyyyMMdd` (예: `20191231`)
- 시간대: UTC+9

<!-- parameter end -->

#### Response 

다음 정보를 담은 JSON 객체와 함께 상태 코드 `200`이 반환됩니다.

<!-- parameter start -->

status

String

집계 처리 상태입니다. 다음 값 중 하나가 반환됩니다.

- `ready`: 메시지 수를 가져올 수 있습니다.
- `unready`: `date`에 지정한 날짜의 메시지 집계가 아직 완료되지 않았습니다. 나중에 다시 요청하십시오. 보통 집계는 다음 날까지 완료됩니다.
- `out_of_service`: `date`에 지정한 날짜가 집계 시스템 운영이 시작된 2018년 3월 31일보다 이전입니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

success

Number

`date`에 지정한 날짜에 Messaging API로 보낸 메시지 수입니다. `status` 값이 `ready`인 경우에만 응답에 이 속성이 포함됩니다.

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

```json
{
  "status": "ready",
  "success": 10000
}
```

<!-- tab end -->

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code | Description |
| --- | --- |
| `400` | 잘못된 날짜 형식을 지정했습니다. |

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Example error response_

<!-- tab start `json` -->

```json
// If you specify a date in an invalid format (400 Bad Request)
{
  "message": "The value for the 'date' parameter is invalid"
}
```

<!-- tab end -->

### Get number of sent multicast messages 

Endpoint: `GET` `https://api.line.me/v2/bot/message/delivery/multicast`

[`/bot/message/multicast`](https://developers.line.biz/en/reference/messaging-api/#send-multicast-message) endpoint로 보낸 메시지 수를 가져옵니다.

이 작업으로 가져오는 메시지 수에는 LINE Official Account Manager에서 보낸 메시지 수가 포함되지 않습니다.

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X GET "https://api.line.me/v2/bot/message/delivery/multicast?date={yyyyMMdd}" \
-H 'Authorization: Bearer {channel access token}'
```

<!-- tab end -->

#### Rate limit 

초당 2,000회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->

#### Query parameters 

<!-- parameter start (props: required) -->

date

메시지를 보낸 날짜

- 형식: `yyyyMMdd` (예: `20191231`)
- 시간대: UTC+9

<!-- parameter end -->

#### Response 

다음 정보를 담은 JSON 객체와 함께 상태 코드 `200`이 반환됩니다.

<!-- parameter start -->

status

String

집계 처리 상태입니다. 다음 값 중 하나가 반환됩니다.

- `ready`: 메시지 수를 가져올 수 있습니다.
- `unready`: `date`에 지정한 날짜의 메시지 집계가 아직 완료되지 않았습니다. 나중에 다시 요청하십시오. 보통 집계는 다음 날까지 완료됩니다.
- `out_of_service`: `date`에 지정한 날짜가 집계 시스템 운영이 시작된 2018년 3월 31일보다 이전입니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

success

Number

`date`에 지정한 날짜에 Messaging API로 보낸 메시지 수입니다. `status` 값이 `ready`인 경우에만 응답에 이 속성이 포함됩니다.

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

```json
{
  "status": "ready",
  "success": 10000
}
```

<!-- tab end -->

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code | Description |
| --- | --- |
| `400` | 잘못된 날짜 형식을 지정했습니다. |

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Example error response_

<!-- tab start `json` -->

```json
// If you specify a date in an invalid format (400 Bad Request)
{
  "message": "The value for the 'date' parameter is invalid"
}
```

<!-- tab end -->

### Get number of sent broadcast messages 

Endpoint: `GET` `https://api.line.me/v2/bot/message/delivery/broadcast`

[`/bot/message/broadcast`](https://developers.line.biz/en/reference/messaging-api/#send-broadcast-message) endpoint로 보낸 메시지 수를 가져옵니다.

이 작업으로 가져오는 메시지 수에는 LINE Official Account Manager에서 보낸 메시지 수가 포함되지 않습니다.

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X GET "https://api.line.me/v2/bot/message/delivery/broadcast?date={yyyyMMdd}" \
-H 'Authorization: Bearer {channel access token}'
```

<!-- tab end -->

#### Rate limit 

초당 2,000회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->

#### Query parameters 

<!-- parameter start (props: required) -->

date

메시지를 보낸 날짜

- 형식: `yyyyMMdd` (예: `20191231`)
- 시간대: UTC+9

<!-- parameter end -->

#### Response 

다음 정보를 담은 JSON 객체와 함께 상태 코드 `200`이 반환됩니다.

<!-- parameter start -->

status

String

집계 처리 상태입니다. 다음 값 중 하나가 반환됩니다.

- `ready`: 메시지 수를 가져올 수 있습니다.
- `unready`: `date`에 지정한 날짜의 메시지 집계가 아직 완료되지 않았습니다. 나중에 다시 요청하십시오. 보통 집계는 다음 날까지 완료됩니다.
- `out_of_service`: `date`에 지정한 날짜가 집계 시스템 운영이 시작된 2018년 3월 31일보다 이전입니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

success

Number

`date`에 지정한 날짜에 Messaging API로 보낸 메시지 수입니다. `status` 값이 `ready`인 경우에만 응답에 이 속성이 포함됩니다.

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

```json
{
  "status": "ready",
  "success": 10000
}
```

<!-- tab end -->

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code | Description |
| --- | --- |
| `400` | 잘못된 날짜 형식을 지정했습니다. |

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Example error response_

<!-- tab start `json` -->

```json
// If you specify a date in an invalid format (400 Bad Request)
{
  "message": "The value for the 'date' parameter is invalid"
}
```

<!-- tab end -->

### Validate message objects of a reply message 

Endpoint: `POST` `https://api.line.me/v2/bot/message/validate/reply`

[Send reply message](https://developers.line.biz/en/reference/messaging-api/#send-reply-message) endpoint의 [request body](https://developers.line.biz/en/reference/messaging-api/#send-reply-message-request-body) `messages` 속성 값으로 [message 객체](https://developers.line.biz/en/reference/messaging-api/#message-objects) 배열이 유효한지 검증할 수 있습니다. 이 endpoint는 `messages` 속성 이외의 속성 값은 검증하지 않습니다.

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X POST https://api.line.me/v2/bot/message/validate/reply \
-H 'Authorization: Bearer {channel access token}' \
-H 'Content-Type: application/json' \
-d \
'{
  "messages": [
    {
      "type": "text",
      "text": "Hello, world"
    }
  ]
}'
```

<!-- tab end -->

#### Rate limit 

초당 2,000회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->
<!-- parameter start (props: required) -->

Content-Type

application/json

<!-- parameter end -->

#### Request body 

<!-- parameter start (props: required) -->

messages

Array of objects

검증할 [message 객체](https://developers.line.biz/en/reference/messaging-api/#message-objects)의 배열

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

| Code  | Description                             |
| ----- | --------------------------------------- |
| `400` | 잘못된 message 객체를 지정했습니다. |

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Error response example (If more message objects are specified than the maximum number)_

<!-- tab start `json` -->

```json
{
  "message": "The request body has 1 error(s)",
  "details": [
    {
      "message": "Size must be between 1 and 5",
      "property": "messages"
    }
  ]
}
```

<!-- tab end -->

_Error response example (If more characters are specified in a text message than the maximum number of characters)_

<!-- tab start `json` -->

```json
{
  "message": "The request body has 1 error(s)",
  "details": [
    {
      "message": "Length must be between 0 and 5000",
      "property": "messages[0].text"
    }
  ]
}
```

<!-- tab end -->

### Validate message objects of a push message 

Endpoint: `POST` `https://api.line.me/v2/bot/message/validate/push`

[Send push message](https://developers.line.biz/en/reference/messaging-api/#send-push-message) endpoint의 [request body](https://developers.line.biz/en/reference/messaging-api/#send-push-message-request-body) `messages` 속성 값으로 [message 객체](https://developers.line.biz/en/reference/messaging-api/#message-objects) 배열이 유효한지 검증할 수 있습니다. 이 endpoint는 `messages` 속성 이외의 속성 값은 검증하지 않습니다.

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X POST https://api.line.me/v2/bot/message/validate/push \
-H 'Authorization: Bearer {channel access token}' \
-H 'Content-Type: application/json' \
-d \
'{
  "messages": [
    {
      "type": "text",
      "text": "Hello, world"
    }
  ]
}'
```

<!-- tab end -->

#### Rate limit 

초당 2,000회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->
<!-- parameter start (props: required) -->

Content-Type

application/json

<!-- parameter end -->

#### Request body 

<!-- parameter start (props: required) -->

messages

Array of objects

검증할 [message 객체](https://developers.line.biz/en/reference/messaging-api/#message-objects)의 배열

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

| Code  | Description                             |
| ----- | --------------------------------------- |
| `400` | 잘못된 message 객체를 지정했습니다. |

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Error response example (If more message objects are specified than the maximum number)_

<!-- tab start `json` -->

```json
{
  "message": "The request body has 1 error(s)",
  "details": [
    {
      "message": "Size must be between 1 and 5",
      "property": "messages"
    }
  ]
}
```

<!-- tab end -->

_Error response example (If more characters are specified in a text message than the maximum number of characters)_

<!-- tab start `json` -->

```json
{
  "message": "The request body has 1 error(s)",
  "details": [
    {
      "message": "Length must be between 0 and 5000",
      "property": "messages[0].text"
    }
  ]
}
```

<!-- tab end -->

### Validate message objects of a multicast message 

Endpoint: `POST` `https://api.line.me/v2/bot/message/validate/multicast`

[Send multicast message](https://developers.line.biz/en/reference/messaging-api/#send-multicast-message) endpoint의 [request body](https://developers.line.biz/en/reference/messaging-api/#send-multicast-request-body) `messages` 속성 값으로 [message 객체](https://developers.line.biz/en/reference/messaging-api/#message-objects) 배열이 유효한지 검증할 수 있습니다. 이 endpoint는 `messages` 속성 이외의 속성 값은 검증하지 않습니다.

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X POST https://api.line.me/v2/bot/message/validate/multicast \
-H 'Authorization: Bearer {channel access token}' \
-H 'Content-Type: application/json' \
-d \
'{
  "messages": [
    {
      "type": "text",
      "text": "Hello, world"
    }
  ]
}'
```

<!-- tab end -->

#### Rate limit 

초당 2,000회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->
<!-- parameter start (props: required) -->

Content-Type

application/json

<!-- parameter end -->

#### Request body 

<!-- parameter start (props: required) -->

messages

Array of objects

검증할 [message 객체](https://developers.line.biz/en/reference/messaging-api/#message-objects)의 배열

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

| Code  | Description                             |
| ----- | --------------------------------------- |
| `400` | 잘못된 message 객체를 지정했습니다. |

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Error response example (If more message objects are specified than the maximum number)_

<!-- tab start `json` -->

```json
{
  "message": "The request body has 1 error(s)",
  "details": [
    {
      "message": "Size must be between 1 and 5",
      "property": "messages"
    }
  ]
}
```

<!-- tab end -->

_Error response example (If more characters are specified in a text message than the maximum number of characters)_

<!-- tab start `json` -->

```json
{
  "message": "The request body has 1 error(s)",
  "details": [
    {
      "message": "Length must be between 0 and 5000",
      "property": "messages[0].text"
    }
  ]
}
```

<!-- tab end -->

### Validate message objects of a narrowcast message 

Endpoint: `POST` `https://api.line.me/v2/bot/message/validate/narrowcast`

[Send narrowcast message](https://developers.line.biz/en/reference/messaging-api/#send-narrowcast-message) endpoint의 [request body](https://developers.line.biz/en/reference/messaging-api/#send-narrowcast-request-body) `messages` 속성 값으로 [message 객체](https://developers.line.biz/en/reference/messaging-api/#message-objects) 배열이 유효한지 검증할 수 있습니다. 이 endpoint는 `messages` 속성 이외의 속성 값은 검증하지 않습니다.

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X POST https://api.line.me/v2/bot/message/validate/narrowcast \
-H 'Authorization: Bearer {channel access token}' \
-H 'Content-Type: application/json' \
-d \
'{
  "messages": [
    {
      "type": "text",
      "text": "Hello, world"
    }
  ]
}'
```

<!-- tab end -->

#### Rate limit 

초당 2,000회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->
<!-- parameter start (props: required) -->

Content-Type

application/json

<!-- parameter end -->

#### Request body 

<!-- parameter start (props: required) -->

messages

Array of objects

검증할 [message 객체](https://developers.line.biz/en/reference/messaging-api/#message-objects)의 배열

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

| Code  | Description                             |
| ----- | --------------------------------------- |
| `400` | 잘못된 message 객체를 지정했습니다. |

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Error response example (If more message objects are specified than the maximum number)_

<!-- tab start `json` -->

```json
{
  "message": "The request body has 1 error(s)",
  "details": [
    {
      "message": "Size must be between 1 and 5",
      "property": "messages"
    }
  ]
}
```

<!-- tab end -->

_Error response example (If more characters are specified in a text message than the maximum number of characters)_

<!-- tab start `json` -->

```json
{
  "message": "The request body has 1 error(s)",
  "details": [
    {
      "message": "Length must be between 0 and 5000",
      "property": "messages[0].text"
    }
  ]
}
```

<!-- tab end -->

### Validate message objects of a broadcast message 

Endpoint: `POST` `https://api.line.me/v2/bot/message/validate/broadcast`

[Send broadcast message](https://developers.line.biz/en/reference/messaging-api/#send-broadcast-message) endpoint의 [request body](https://developers.line.biz/en/reference/messaging-api/#send-broadcast-request-body) `messages` 속성 값으로 [message 객체](https://developers.line.biz/en/reference/messaging-api/#message-objects) 배열이 유효한지 검증할 수 있습니다. 이 endpoint는 `messages` 속성 이외의 속성 값은 검증하지 않습니다.

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X POST https://api.line.me/v2/bot/message/validate/broadcast \
-H 'Authorization: Bearer {channel access token}' \
-H 'Content-Type: application/json' \
-d \
'{
  "messages": [
    {
      "type": "text",
      "text": "Hello, world"
    }
  ]
}'
```

<!-- tab end -->

#### Rate limit 

초당 2,000회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->
<!-- parameter start (props: required) -->

Content-Type

application/json

<!-- parameter end -->

#### Request body 

<!-- parameter start (props: required) -->

messages

Array of objects

검증할 [message 객체](https://developers.line.biz/en/reference/messaging-api/#message-objects)의 배열

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

| Code  | Description                             |
| ----- | --------------------------------------- |
| `400` | 잘못된 message 객체를 지정했습니다. |

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Error response example (If more message objects are specified than the maximum number)_

<!-- tab start `json` -->

```json
{
  "message": "The request body has 1 error(s)",
  "details": [
    {
      "message": "Size must be between 1 and 5",
      "property": "messages"
    }
  ]
}
```

<!-- tab end -->

_Error response example (If more characters are specified in a text message than the maximum number of characters)_

<!-- tab start `json` -->

```json
{
  "message": "The request body has 1 error(s)",
  "details": [
    {
      "message": "Length must be between 0 and 5000",
      "property": "messages[0].text"
    }
  ]
}
```

<!-- tab end -->

### Retrying an API request 

Push 메시지, multicast 메시지, narrowcast 메시지 또는 broadcast 메시지의 HTTP 헤더에 재시도 키(`X-Line-Retry-Key`)를 포함하면 같은 API 요청을 다시 시도하여 중복 처리를 방지할 수 있습니다.

LINE Platform에서 재시도 키를 관리하는 기간은 24시간입니다. 24시간을 초과하여 같은 재시도 키를 사용하면 해당 요청은 새로운 API 요청으로 처리됩니다.

API 요청 재시도에 대한 자세한 내용은 Messaging API 문서의 [Retry failed API requests](https://developers.line.biz/en/docs/messaging-api/retrying-api-request/)를 참조하십시오.

<!-- note start -->

**Don't use the same retry key for more than 24 hours**

24시간을 초과하여 같은 재시도 키를 사용하면, 같은 재시도 키를 포함한 API 요청이 이미 성공했더라도 새로운 API 요청으로 성공 처리됩니다. 그 결과 메시지가 중복으로 전송될 수 있습니다.

<!-- note end -->

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X POST https://api.line.me/v2/bot/message/push \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer {CHANNEL_ACCESS_TOKEN}' \
-H 'X-Line-Retry-Key: {UUID}' \
-d '{
    "messages": [
        {
            "type": "text",
            "text": "Hello, user"
        }
    ]
}'
```

<!-- tab end -->

#### Request headers 

<!-- parameter start (props: annotation="Optional*") -->

X-Line-Retry-Key

임의로 생성한 16진수 표기의 UUID(예: 123e4567-e89b-12d3-a456-426614174000)

<!-- parameter end -->

\* API 요청을 재시도할 때 필수입니다.

#### Response if the request has already been accepted 

같은 재시도 키를 포함한 요청이 이미 수락되었으면 `409` 상태 코드, 이미 수락된 요청의 request ID를 나타내는 `x-line-accepted-request-id` 헤더, 그리고 이 정보를 담은 JSON 객체가 반환됩니다.

<!-- parameter start -->

message

String

같은 요청이 이미 수락되었음을 알리는 메시지

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

sentMessages

Array

보낸 메시지의 배열입니다. Push 메시지를 보낸 경우에만 이 속성이 응답에 포함됩니다.<br />최대: 5개

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

sentMessages.id

Number

보낸 메시지의 ID입니다. Push 메시지를 보낸 경우에만 이 속성이 응답에 포함됩니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

sentMessages.quoteToken

String

메시지의 quote token입니다. 인용 대상으로 지정할 수 있는 message 객체를 push 메시지로 보낸 경우에만 포함됩니다. 자세한 내용은 Messaging API 문서의 [Get quote tokens](https://developers.line.biz/en/docs/messaging-api/get-quote-tokens/)를 참조하십시오.

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

```json
HTTP/1.1 409 Conflict
x-line-request-id: 123e4567-e89b-12d3-a456-426655440002
x-line-accepted-request-id: 123e4567-e89b-12d3-a456-426655440001

{
  "message": "The retry key is already accepted",
  "sentMessages": [
    {
      "id": "461230966842064897",
      "quoteToken": "IStG5h1Tz7b..."
    }
  ]
}
```

<!-- tab end -->

## Managing Audience 

Audience를 만들고, 업데이트하고, 활성화하거나 삭제할 수 있습니다. Narrowcast 메시지를 보낼 때 audience를 지정합니다.

Audience는 [LINE Official Account Manager](https://manager.line.biz/)에서도 만들 수 있습니다. 자세한 내용은 LINE for Business의 [Audience](https://www.lycbiz.com/jp/manual/OfficialAccountManager/messages-audience/)를 참조하십시오.

| Audience | 만드는 방법 |
| --- | --- |
| 사용자 ID 업로드용 audience | <ul><li>[Messaging API](https://developers.line.biz/en/reference/messaging-api/#create-upload-audience-group)</li><li>[LINE Official Account Manager](https://manager.line.biz/)</li><li>[LINE Points Ads](https://www.lycbiz.com/jp/service/line-point-ad/)(일본어만 제공)</li></ul> |
| Message click audience | <ul><li>[Messaging API](https://developers.line.biz/en/reference/messaging-api/#create-click-audience-group)</li><li>[LINE Official Account Manager](https://manager.line.biz/)</li></ul> |
| Message impression audience | <ul><li>[Messaging API](https://developers.line.biz/en/reference/messaging-api/#create-imp-audience-group)</li><li>[LINE Official Account Manager](https://manager.line.biz/)</li></ul> |
| Chat tag audience | [LINE Official Account Manager](https://manager.line.biz/) |
| Friend path audience | [LINE Official Account Manager](https://manager.line.biz/) |
| Reservation audience | [LINE Official Account Manager](https://manager.line.biz/) |
| Rich menu impression audience | [LINE Official Account Manager](https://manager.line.biz/) |
| Rich menu click audience | [LINE Official Account Manager](https://manager.line.biz/) |
| Web traffic audience (LINE Tag) | <ul><li>[LINE Official Account Manager](https://manager.line.biz/)</li><li>[LINE Ads](https://admanager.line.biz/)</li></ul> |
| Web traffic audience (Tracking Tag) | [LINE Official Account Manager](https://manager.line.biz/) |
| App event audience | [LINE Ads](https://admanager.line.biz/) |
| Video view audience | [LINE Ads](https://admanager.line.biz/) |
| Image click audience | [LINE Ads](https://admanager.line.biz/) |
| LINE Beacon Network ad impression audience \* | [LINE Ads](https://admanager.line.biz/) |

\* LINE Beacon Network ad impression audience는 대만 사용자가 만든 LINE Official Account에서만 사용할 수 있습니다.

<!-- note start -->

**Note**

- LINE Official Account를 가진 일본(JP), 태국(TH), 대만(TW) 사용자만 audience를 만들 수 있습니다.
- Messaging API로는 다음 유형의 audience를 만들 수 없습니다.
  - Chat tag audience
  - Friend path audience
  - Reservation audience
  - Rich menu impression audience
  - Rich menu click audience
  - Web traffic audience (LINE Tag)
  - Web traffic audience (Tracking Tag)
  - App event audience
  - Video view audience
  - Image click audience
  - LINE Beacon Network ad impression audience

<!-- note end -->

### Details of the error related to audience management 

Audience 관리 endpoint에서 발생하는 오류의 세부 내용은 JSON 응답의 `details[].message` 속성에 포함됩니다. 주요 오류의 세부 내용은 다음과 같습니다.

| Message | Description |
| --- | --- |
| `AUDIENCE_GROUP_CAN_NOT_UPLOAD_STATUS_EXPIRED` | 이 audience를 만든 후 180일(15,552,000초)이 지나 이 audience를 사용할 수 없습니다. |
| `AUDIENCE_GROUP_COUNT_MAX_OVER` | 이미 만들 수 있는 최대 개수(1,000개)의 audience를 만들었습니다. |
| `AUDIENCE_GROUP_NAME_SIZE_OVER` | Audience의 이름이 너무 깁니다. |
| `AUDIENCE_GROUP_NAME_WRONG` | Audience의 이름에 잘못된 문자(예: `\n` 또는 기타 제어 문자)가 포함되어 있습니다. |
| `AUDIENCE_GROUP_NAME_EMPTY` | Audience의 이름이 비어 있거나 공백만 포함합니다. |
| `AUDIENCE_GROUP_NOT_FOUND` | Audience를 찾을 수 없습니다. |
| `AUDIENCE_GROUP_REQUESTID_DUPLICATE` | 지정한 request ID를 가진 audience가 이미 있습니다. |
| `AUDIENCE_GROUP_UPLOAD_DESCRIPTION_SIZE_OVER` | Audience의 설명이 너무 깁니다. |
| `REQUEST_NOT_FOUND` | 지정한 request ID가 잘못되었거나, 지정한 request ID로 audience를 만들 준비가 LINE에서 되어 있지 않습니다. |
| `TOO_OLD_MESSAGES` | 60일(5,184,000초)을 초과하여 전에 보낸 메시지(request ID)로는 audience를 만들 수 없습니다. |
| `UPLOAD_AUDIENCE_GROUP_INVALID_AUDIENCE_ID_FORMAT` | <ul><li>`file`에 잘못된 사용자 ID 또는 IFA가 포함되어 있습니다.</li><li>`audiences[].id`가 잘못된 사용자 ID 또는 IFA입니다.</li></ul>이 메시지가 반환되면 [Error-handling methods](https://developers.line.biz/en/reference/messaging-api/#manage-audience-error-handling)를 참조하십시오. |
| `UPLOAD_AUDIENCE_GROUP_NO_VALID_AUDIENCE_IDS` | <ul><li>`file`에 올바른 사용자 ID 또는 IFA가 포함되어 있지 않습니다.</li><li>`audiences[].id`가 올바른 사용자 ID 또는 IFA가 아닙니다.</li></ul> |
| `UPLOAD_AUDIENCE_GROUP_TOO_MANY_AUDIENCE_IDS` | 사용자 ID 또는 IFA의 최대 개수를 초과했습니다. |
| `WRONG_BOT_ID` | 지정한 request ID의 bot ID가 channel access token을 발급한 채널에 연결된 bot과 일치하지 않습니다. |
| `ALREADY_ACTIVE` | Audience 그룹이 이미 활성 상태입니다. |

#### Error-handling methods 

<!-- note start -->

**If the audiences property contains invalid user IDs**

`UPLOAD_AUDIENCE_GROUP_INVALID_AUDIENCE_ID_FORMAT`이 반환되는 경우 [Get profile information](https://developers.line.biz/en/reference/messaging-api/#get-profile) endpoint를 사용하여 JSON에 지정된 모든 사용자 ID의 프로필 정보를 가져오십시오. 상태 코드 `200` 이외의 값을 반환한 모든 사용자 ID를 제외한 후 실패한 endpoint를 다시 한 번 실행하십시오.

<!-- note end -->

### Create audience for uploading user IDs (by JSON) 

Endpoint: `POST` `https://api.line.me/v2/bot/audienceGroup/upload`

사용자 ID 업로드용 audience를 만듭니다.

이 endpoint에서는 JSON을 사용하여 수신자를 지정합니다. [텍스트 파일로 수신자를 지정하는 endpoint](https://developers.line.biz/en/reference/messaging-api/#create-upload-audience-group-by-file)도 사용할 수 있습니다.

사용자 ID를 가져오는 방법은 Messaging API 문서의 [Get user IDs](https://developers.line.biz/en/docs/messaging-api/getting-user-ids/)를 참조하십시오.

#### Conditions for users that can be added to the audience 

LINE Official Account를 친구로 추가한 사용자를 사용자 ID 업로드용 audience에 추가할 수 있습니다. 상태 코드 `202`가 반환되더라도 다음 사용자는 audience에 추가됩니다.

- LINE 계정을 삭제한 사용자
- Audience를 만든 LINE Official Account를 차단한 사용자
- Audience를 만든 LINE Official Account를 친구로 추가하지 않은 사용자

만든 audience를 사용하여 메시지를 보내더라도 위에 나열된 사용자에게는 메시지가 전송되지 않습니다.

<!-- note start -->

**We have set a limit on the number of concurrent endpoint operations**

사용자 ID 업로드용 audience를 만들고 audience에 사용자 ID를 추가하기 위해 audience ID(`audienceGroupId`)별 엔드포인트의 동시 작업 수 제한이 설정되어 있습니다. 자세한 내용은 [Limit on the number of concurrent operations](https://developers.line.biz/en/reference/messaging-api/#limit-on-the-number-of-concurrent-operations)를 참조하십시오.

<!-- note end -->

<!-- note start -->

**You must complete additional application forms to specify recipients using Identifiers for Advertisers (IFAs)**

IFA(Identifiers for Advertisers)를 사용하여 수신자를 지정할 수 있지만, 이 기능은 특정 신청을 완료한 법인 사용자에게만 제공됩니다. LINE Official Account에서 사용하려면 담당 영업 대표에게 문의하거나 [영업 파트너](https://www.lycbiz.com/jp/partner/sales/)에게 문의하십시오.

<!-- note end -->

<!-- tip start -->

**Audience used for uploading user IDs**

Audience의 사양은 다음과 같습니다.

| Item | Limit |
| --- | --- |
| 채널당 audience 개수 | 최대 1,000개 |
| Audience의 보관 기간 | 최대 180일(15,552,000초) |
| 요청당 audience에 업로드할 수 있는 사용자 ID 또는 IFA 개수 | JSON 사용 시: 최대 10,000개<br>파일 사용 시: 최대 1,500,000개 |
| Audience당 사용자 수 | 사용자 ID 업로드용 audience: 제한 없음 |

Narrowcast 메시지의 제한에 대한 자세한 내용은 [속성과 audience를 사용한 메시지 전송 제한](https://developers.line.biz/en/reference/messaging-api/#send-narrowcast-message-restrictions)을 참조하십시오.

<!-- tip end -->

<!-- note start -->

**Verifying a valid user ID**

JSON의 `audiences` 속성에 잘못된 사용자 ID를 지정하면 오류 응답(`details[].message`: `UPLOAD_AUDIENCE_GROUP_INVALID_AUDIENCE_ID_FORMAT`)이 반환되고 사용자 ID 추가에 실패합니다. 이 endpoint를 실행하기 전에 JSON의 `audiences` 속성에 지정한 모든 사용자 ID가 올바른지 확인하십시오.

사용자 ID가 올바른지 확인하려면 [Get profile information](https://developers.line.biz/en/reference/messaging-api/#get-profile) endpoint를 사용하십시오. 사용자 ID가 올바르면 HTTP 상태 코드 `200`이 반환됩니다. `200` 이외의 값이 반환되면 해당 사용자 ID는 올바르지 않으므로 `audiences` 속성에 포함하지 마십시오.

<!-- note end -->

<!-- note start -->

**Status of an audience without a user ID**

Audience를 만들 때 JSON의 `audiences` 속성을 생략하거나 빈 배열을 지정하면 빈 audience가 만들어집니다.

빈 audience에 포함된 사용자 수(`audienceGroup.audienceCount`)는 0이며, 이 audience는 메시지를 받을 수 없습니다. 따라서 응답의 `audienceGroup.status`는 `READY`가 되지 않고 `IN_PROGRESS` 상태로 남습니다.

<!-- note end -->

<!-- note start -->

**Only users who have agreed to LINE's Privacy Policy (revised in March 2022 or later) will be added**

사용자 ID 업로드용 audience에 사용자 ID를 추가할 때, LINE 개인정보 처리방침(2022년 3월 이후 개정본)에 동의하지 않은 사용자의 ID는 무시됩니다. 동의한 사용자의 ID만 추가됩니다.

따라서 audience의 유효 수신자 수는 지정한 사용자 ID 수보다 적을 수 있습니다.

<!-- note end -->

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X POST https://api.line.me/v2/bot/audienceGroup/upload \
-H 'Authorization: Bearer {channel access token}' \
-H 'Content-Type: application/json' \
-d '{
    "description": "audienceGroupName_01"
}'
```

<!-- tab end -->

#### Rate limit 

분당 60회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->
<!-- parameter start (props: required) -->

Content-Type

`application/json`

<!-- parameter end -->

#### Request body 

<!-- parameter start (props: required) -->

description

String

Audience의 이름입니다. 대소문자를 구분하지 않으므로 `AUDIENCE`와 `audience`는 같은 것으로 취급됩니다. \
최대 문자 수: 120

<!-- parameter end -->
<!-- parameter start (props: optional) -->

isIfaAudience

Boolean

- IFA로 수신자를 지정하려면 `true`로 설정하십시오.
- 사용자 ID로 수신자를 지정하려면 `false`로 설정하거나 `isIfaAudience` 속성을 생략하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

uploadDescription

String

작업(`jobs[].description`)에 등록할 설명입니다.\
최대 문자 수: 300

<!-- parameter end -->
<!-- parameter start (props: optional) -->

audiences

Array

사용자 ID 또는 IFA의 배열입니다.\
생략하면 빈 audience가 만들어집니다.\
최대 개수: 10,000개

<!-- parameter end -->
<!-- parameter start (props: optional) -->

audiences\[].id

String

사용자 ID 또는 IFA입니다. 빈 배열을 지정할 수 있습니다.\
빈 배열을 지정하면 빈 audience가 만들어집니다.

<!-- parameter end -->

#### Response 

`202` HTTP 상태 코드와 다음 정보를 담은 JSON 객체가 반환됩니다.

<!-- note start -->

**Audience is created asynchronously**

Audience를 사용하기 전에 [audience를 전송에 사용할 수 있는지 확인](https://developers.line.biz/en/docs/messaging-api/sending-messages/#get-audience-status)하십시오.

<!-- note end -->

<!-- parameter start -->

audienceGroupId

Number

Audience ID입니다.

<!-- parameter end -->
<!-- parameter start -->

createRoute

String

Audience가 만들어진 경로입니다.

- `MESSAGING_API`: Messaging API로 만든 audience입니다.

<!-- parameter end -->
<!-- parameter start -->

type

String

Audience의 유형입니다.

- `UPLOAD`: 사용자 ID 업로드용 audience입니다.

<!-- parameter end -->
<!-- parameter start -->

description

String

Audience의 이름입니다.

<!-- parameter end -->
<!-- parameter start -->

created

Number

Audience가 만들어진 시각(UNIX time, 초 단위)입니다.

<!-- parameter end -->
<!-- parameter start -->

permission

String

만든 audience의 업데이트 권한입니다.

- `READ_WRITE`: Audience를 사용하고 업데이트할 수 있습니다.

<!-- parameter end -->
<!-- parameter start -->

expireTimestamp

Number

Audience의 만료 시각(UNIX time, 초 단위)입니다.

<!-- parameter end -->
<!-- parameter start -->

isIfaAudience

Boolean

사용자 ID 업로드용 audience를 만들 때 지정한, 전송 대상 계정의 유형을 나타내는 값입니다. 다음 중 하나입니다.

- `true`: IFA로 계정을 지정합니다.
- `false`(기본값): 사용자 ID로 계정을 지정합니다.

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

```json
{
  "audienceGroupId": 1234567890123,
  "createRoute": "MESSAGING_API",
  "type": "UPLOAD",
  "description": "audienceGroupName_01",
  "created": 1613698278,
  "permission": "READ_WRITE",
  "expireTimestamp": 1629250278,
  "isIfaAudience": false
}
```

<!-- tab end -->

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code | Description |
| --- | --- |
| `400` | 요청에 문제가 있습니다. 다음 원인을 확인하십시오.<ul><li>최대 개수(1,000개)의 audience를 이미 만들었습니다.</li><li>`description` 속성에 최대 문자 수(120)를 초과하는 이름을 지정했습니다.</li><li>`description` 속성에 잘못된 문자(예: `\n` 또는 기타 제어 문자)를 지정했습니다.</li><li>`description` 속성이 비어 있거나 공백만 포함합니다.</li><li>`uploadDescription` 속성에 최대 문자 수(300)를 초과하는 문자열을 지정했습니다.</li><li>`audiences[].id` 속성에 잘못된 사용자 ID 또는 IFA를 지정했습니다.</li><li>`audiences` 속성에 최대 개수(10,000개)를 초과하는 사용자 ID 또는 IFA를 지정했습니다.</li></ul> |
| `429` | 동시 작업 수 제한을 초과했습니다. 자세한 내용은 [Limit on the number of concurrent operations](https://developers.line.biz/en/reference/messaging-api/#limit-on-the-number-of-concurrent-operations)를 참조하십시오. |

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Example error response_

<!-- tab start `json` -->

```json
// If you specify a name longer than the maximum number of characters (120) in the description property (400 Bad Request)
{
  "message": "size over audienceGroupName",
  "details": [
    {
      "message": "AUDIENCE_GROUP_NAME_SIZE_OVER"
    }
  ]
}
```

<!-- tab end -->

### Create audience for uploading user IDs (by file) 

Endpoint: `POST` `https://api-data.line.me/v2/bot/audienceGroup/upload/byFile`

<!-- note start -->

**This domain name is different from that of other endpoints**

이 endpoint의 도메인 이름(`api-data.line.me`)은 Messaging API용 LINE Platform에서 대량의 데이터를 송수신하기 위한 것입니다. 이 도메인 이름은 다른 endpoint(`api.line.me`)와 다릅니다.

<!-- note end -->

사용자 ID 업로드용 audience를 만듭니다.

이 endpoint에서는 텍스트 파일을 사용하여 수신자를 지정합니다. [JSON으로 수신자를 지정하는 endpoint](https://developers.line.biz/en/reference/messaging-api/#create-upload-audience-group)도 사용할 수 있습니다.

사용자 ID를 가져오는 방법은 Messaging API 문서의 [Get user IDs](https://developers.line.biz/en/docs/messaging-api/getting-user-ids/)를 참조하십시오.

#### Conditions for users that can be added to the audience 

LINE Official Account를 친구로 추가한 사용자를 사용자 ID 업로드용 audience에 추가할 수 있습니다. 상태 코드 `202`가 반환되더라도 다음 사용자는 audience에 추가됩니다.

- LINE 계정을 삭제한 사용자
- Audience를 만든 LINE Official Account를 차단한 사용자
- Audience를 만든 LINE Official Account를 친구로 추가하지 않은 사용자

만든 audience를 사용하여 메시지를 보내더라도 위에 나열된 사용자에게는 메시지가 전송되지 않습니다.

<!-- note start -->

**We have set a limit on the number of concurrent endpoint operations**

사용자 ID 업로드용 audience를 만들고 audience에 사용자 ID를 추가하기 위해 audience ID(`audienceGroupId`)별 엔드포인트의 동시 작업 수 제한이 설정되어 있습니다. 자세한 내용은 [Limit on the number of concurrent operations](https://developers.line.biz/en/reference/messaging-api/#limit-on-the-number-of-concurrent-operations)를 참조하십시오.

<!-- note end -->

<!-- note start -->

**You must complete additional application forms to specify recipients using Identifiers for Advertisers (IFAs)**

IFA(Identifiers for Advertisers)를 사용하여 수신자를 지정할 수 있지만, 이 기능은 특정 신청을 완료한 법인 사용자에게만 제공됩니다. LINE Official Account에서 사용하려면 담당 영업 대표에게 문의하거나 [영업 파트너](https://www.lycbiz.com/jp/partner/sales/)에게 문의하십시오.

<!-- note end -->

<!-- tip start -->

**Audience used for uploading user IDs**

Audience의 사양은 다음과 같습니다.

| Item | Limit |
| --- | --- |
| 채널당 audience 개수 | 최대 1,000개 |
| Audience의 보관 기간 | 최대 180일(15,552,000초) |
| 요청당 audience에 업로드할 수 있는 사용자 ID 또는 IFA 개수 | JSON 사용 시: 최대 10,000개<br>파일 사용 시: 최대 1,500,000개 |
| Audience당 사용자 수 | 사용자 ID 업로드용 audience: 제한 없음 |

Narrowcast 메시지의 제한에 대한 자세한 내용은 [속성과 audience를 사용한 메시지 전송 제한](https://developers.line.biz/en/reference/messaging-api/#send-narrowcast-message-restrictions)을 참조하십시오.

<!-- tip end -->

<!-- note start -->

**Only users who have agreed to LINE's Privacy Policy (revised in March 2022 or later) will be added**

사용자 ID 업로드용 audience에 사용자 ID를 추가할 때, LINE 개인정보 처리방침(2022년 3월 이후 개정본)에 동의하지 않은 사용자의 ID는 무시됩니다. 동의한 사용자의 ID만 추가됩니다.

따라서 audience의 유효 수신자 수는 지정한 사용자 ID 수보다 적을 수 있습니다.

<!-- note end -->

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X POST https://api-data.line.me/v2/bot/audienceGroup/upload/byFile \
-H 'Authorization: Bearer {channel access token}' \
-F 'description=audienceGroupName_01' \
-F 'file=@audiences.txt;type=text/plain'
```

<!-- tab end -->

_Text file example_

<!-- tab start `File` -->

```
U4af4980627...
U4af4980628...
U4af4980629...
```

<!-- tab end -->

#### Rate limit 

분당 60회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->
<!-- parameter start (props: required) -->

Content-Type

`multipart/form-data`

<!-- parameter end -->

#### Request body 

<!-- parameter start (props: required) -->

description

String

Audience의 이름입니다. 대소문자를 구분하지 않으므로 `AUDIENCE`와 `audience`는 같은 것으로 취급됩니다. \
최대 문자 수: 120

<!-- parameter end -->
<!-- parameter start (props: optional) -->

isIfaAudience

Boolean

- IFA로 수신자를 지정하려면 `true`로 설정하십시오.
- 사용자 ID로 수신자를 지정하려면 `false`로 설정하거나 `isIfaAudience` 속성을 생략하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

uploadDescription

String

작업(`jobs[].description`)에 등록할 설명입니다.\
최대 문자 수: 300

<!-- parameter end -->
<!-- parameter start (props: required) -->

file

File

한 줄에 사용자 ID 또는 IFA 하나를 입력한 텍스트 파일입니다. Content-Type으로 `text/plain`을 지정하십시오.\
최대 파일 개수: 1개\
최대 개수: 1,500,000개

<!-- parameter end -->

#### Response 

`202` HTTP 상태 코드와 다음 정보를 담은 JSON 객체가 반환됩니다.

<!-- note start -->

**Audience is created asynchronously**

Audience를 사용하기 전에 [audience를 전송에 사용할 수 있는지 확인](https://developers.line.biz/en/docs/messaging-api/sending-messages/#get-audience-status)하십시오.

<!-- note end -->

<!-- parameter start -->

audienceGroupId

Number

Audience ID입니다.

<!-- parameter end -->
<!-- parameter start -->

createRoute

String

Audience가 만들어진 경로입니다.

- `MESSAGING_API`: Messaging API로 만든 audience입니다.

<!-- parameter end -->
<!-- parameter start -->

type

String

Audience의 유형입니다.

- `UPLOAD`: 사용자 ID 업로드용 audience입니다.

<!-- parameter end -->
<!-- parameter start -->

description

String

Audience의 이름입니다.

<!-- parameter end -->
<!-- parameter start -->

created

Number

Audience가 만들어진 시각(UNIX time, 초 단위)입니다.

<!-- parameter end -->
<!-- parameter start -->

permission

String

만든 audience의 업데이트 권한입니다.

- `READ_WRITE`: Audience를 사용하고 업데이트할 수 있습니다.

<!-- parameter end -->
<!-- parameter start -->

expireTimestamp

Number

Audience의 만료 시각(UNIX time, 초 단위)입니다.

<!-- parameter end -->
<!-- parameter start -->

isIfaAudience

Boolean

사용자 ID 업로드용 audience를 만들 때 지정한, 전송 대상 계정의 유형을 나타내는 값입니다. 다음 중 하나입니다.

- `true`: IFA로 계정을 지정합니다.
- `false`(기본값): 사용자 ID로 계정을 지정합니다.

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

```json
{
  "audienceGroupId": 1234567890123,
  "createRoute": "MESSAGING_API",
  "type": "UPLOAD",
  "description": "audienceGroupName_01",
  "created": 1613700237,
  "permission": "READ_WRITE",
  "expireTimestamp": 1629252237,
  "isIfaAudience": false
}
```

<!-- tab end -->

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code | Description |
| --- | --- |
| `400` | 요청에 문제가 있습니다. 다음 원인을 확인하십시오.<ul><li>`file` 속성에 지정한 파일에 잘못된 사용자 ID 또는 IFA가 포함되어 있습니다.</li><li>`file` 속성에 최대 개수(1,500,000개)를 초과하는 사용자 ID 또는 IFA가 포함된 파일을 지정했습니다.</li><li>`file` 속성에 지정한 파일에 올바른 사용자 ID 또는 IFA가 포함되어 있지 않습니다.</li><li>최대 개수(1,000개)의 audience를 이미 만들었습니다.</li><li>`description` 속성에 최대 문자 수(120)를 초과하는 이름을 지정했습니다.</li><li>`description` 속성에 잘못된 문자(예: `\n` 또는 기타 제어 문자)를 지정했습니다.</li><li>`description` 속성이 비어 있거나 공백만 포함합니다.</li><li>`uploadDescription` 속성에 최대 문자 수(300)를 초과하는 문자열을 지정했습니다.</li></ul> |
| `415` | `file` 속성에 지원되지 않는 미디어 형식의 파일을 지정했습니다. |
| `429` | 동시 작업 수 제한을 초과했습니다. 자세한 내용은 [Limit on the number of concurrent operations](https://developers.line.biz/en/reference/messaging-api/#limit-on-the-number-of-concurrent-operations)를 참조하십시오. |

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Example error response_

<!-- tab start `json` -->

```json
// If you specify a name longer than the maximum number of characters (120) in the description property (400 Bad Request)
{
  "message": "size over audienceGroupName",
  "details": [
    {
      "message": "AUDIENCE_GROUP_NAME_SIZE_OVER"
    }
  ]
}
```

<!-- tab end -->

### Add user IDs or Identifiers for Advertisers (IFAs) to an audience for uploading user IDs (by JSON) 

Endpoint: `PUT` `https://api.line.me/v2/bot/audienceGroup/upload`

사용자 ID 업로드용 audience에 새 사용자 ID 또는 IFA를 추가합니다.

이 endpoint에서는 JSON을 사용하여 수신자를 지정합니다. [텍스트 파일로 수신자를 지정하는 endpoint](https://developers.line.biz/en/reference/messaging-api/#update-upload-audience-group-by-file)도 사용할 수 있습니다.

#### Conditions for users that can be added to the audience 

LINE Official Account를 친구로 추가한 사용자를 사용자 ID 업로드용 audience에 추가할 수 있습니다. 상태 코드 `202`가 반환되더라도 다음 사용자는 audience에 추가됩니다.

- LINE 계정을 삭제한 사용자
- Audience를 만든 LINE Official Account를 차단한 사용자
- Audience를 만든 LINE Official Account를 친구로 추가하지 않은 사용자

만든 audience를 사용하여 메시지를 보내더라도 위에 나열된 사용자에게는 메시지가 전송되지 않습니다.

<!-- note start -->

**We have set a limit on the number of concurrent endpoint operations**

사용자 ID 업로드용 audience를 만들고 audience에 사용자 ID를 추가하기 위해 audience ID(`audienceGroupId`)별 엔드포인트의 동시 작업 수 제한이 설정되어 있습니다. 자세한 내용은 [Limit on the number of concurrent operations](https://developers.line.biz/en/reference/messaging-api/#limit-on-the-number-of-concurrent-operations)를 참조하십시오.

<!-- note end -->

<!-- note start -->

**Request timeout values**

요청 시간 초과(timeout) 값으로 30초 이상을 사용할 것을 강력히 권장합니다.

<!-- note end -->

<!-- note start -->

**Verifying a valid user ID**

JSON의 `audiences` 속성에 잘못된 사용자 ID를 지정하면 오류 응답(`details[].message`: `UPLOAD_AUDIENCE_GROUP_INVALID_AUDIENCE_ID_FORMAT`)이 반환되고 audience 생성에 실패합니다. 이 endpoint를 실행하기 전에 JSON의 `audiences` 속성에 지정한 모든 사용자 ID가 올바른지 확인하십시오.

사용자 ID가 올바른지 확인하려면 [Get profile information](https://developers.line.biz/en/reference/messaging-api/#get-profile) endpoint를 사용하십시오. 사용자 ID가 올바르면 HTTP 상태 코드 `200`이 반환됩니다. `200` 이외의 값이 반환되면 해당 사용자 ID는 올바르지 않으므로 `audiences` 속성에 포함하지 마십시오.

<!-- note end -->

<!-- note start -->

**You can't switch between user IDs and IFAs**

사용자 ID 업로드용 audience를 만들 때 지정한 것과 같은 유형의 데이터(사용자 ID 또는 IFA)를 추가하십시오. 예를 들어 처음에 IFA를 사용하여 만든 audience에는 사용자 ID를 추가할 수 없습니다.

Audience의 `isIfaAudience` 속성을 사용하면 audience를 만들 때 어떤 유형의 수신자(사용자 ID 또는 IFA)를 지정했는지 확인할 수 있습니다. 자세한 내용은 [Get audience data](https://developers.line.biz/en/reference/messaging-api/#get-audience-group)를 참조하십시오.

<!-- note end -->

<!-- note start -->

**You can't delete user IDs or IFAs**

추가한 사용자 ID 또는 IFA는 삭제할 수 없습니다.

<!-- note end -->

<!-- note start -->

**Only users who have agreed to LINE's Privacy Policy (revised in March 2022 or later) will be added**

사용자 ID 업로드용 audience에 사용자 ID를 추가할 때, LINE 개인정보 처리방침(2022년 3월 이후 개정본)에 동의하지 않은 사용자의 ID는 무시됩니다. 동의한 사용자의 ID만 추가됩니다.

따라서 audience의 유효 수신자 수는 지정한 사용자 ID 수보다 적을 수 있습니다.

<!-- note end -->

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X PUT https://api.line.me/v2/bot/audienceGroup/upload \
-H 'Authorization: Bearer {channel access token}' \
-H 'Content-Type: application/json' \
-d '{
    "audienceGroupId": 4389303728991,
    "uploadDescription": "fileName",
    "audiences": [
        {
            "id": "U4af4980627..."
        },
        {
            "id": "U4af4980628..."
        }
    ]
}'
```

<!-- tab end -->

#### Rate limit 

분당 60회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->
<!-- parameter start (props: required) -->

Content-Type

`application/json`

<!-- parameter end -->

#### Request body 

<!-- parameter start (props: required) -->

audienceGroupId

Number

Audience ID

<!-- parameter end -->
<!-- parameter start (props: optional) -->

uploadDescription

String

작업(`jobs[].description`)에 등록할 설명입니다.\
최대 문자 수: 300

<!-- parameter end -->
<!-- parameter start (props: required) -->

audiences

Array

사용자 ID 또는 IFA의 배열입니다.\
최대 개수: 10,000개

<!-- parameter end -->
<!-- parameter start (props: required) -->

audiences\[].id

String

사용자 ID 또는 IFA

<!-- parameter end -->

#### Response 

상태 코드 `202`와 빈 JSON 객체가 반환됩니다.

<!-- note start -->

**Audience is created asynchronously**

Audience를 사용하기 전에 [audience를 전송에 사용할 수 있는지 확인](https://developers.line.biz/en/docs/messaging-api/sending-messages/#get-audience-status)하십시오.

<!-- note end -->

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
| `400` | 요청에 문제가 있습니다. 다음 원인을 확인하십시오.<ul><li>`audiences[].id` 속성에 잘못된 사용자 ID 또는 IFA를 지정했습니다.</li><li>`audiences` 속성에 최대 개수(10,000개)를 초과하는 사용자 ID 또는 IFA를 지정했습니다.</li><li>`audiences[].id` 속성에 잘못된 사용자 ID 또는 IFA를 지정하지 않았습니다.</li><li>보관 기간이 지난 audience를 지정했습니다.</li><li>존재하지 않는 audience를 지정했습니다.</li><li>`uploadDescription` 속성에 최대 문자 수(300)를 초과하는 문자열을 지정했습니다.</li></ul> |
| `429` | 동시 작업 수 제한을 초과했습니다. 자세한 내용은 [Limit on the number of concurrent operations](https://developers.line.biz/en/reference/messaging-api/#limit-on-the-number-of-concurrent-operations)를 참조하십시오. |

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Example error response_

<!-- tab start `json` -->

```json
// If you specify an invalid user ID in the audiences[].id property (400 Bad Request)
{
  "message": "Invalid audience id format",
  "details": [
    {
      "message": "UPLOAD_AUDIENCE_GROUP_INVALID_AUDIENCE_ID_FORMAT",
      "property": "audiences"
    }
  ]
}
```

<!-- tab end -->

### Add user IDs or Identifiers for Advertisers (IFAs) to an audience for uploading user IDs (by file) 

Endpoint: `PUT` `https://api-data.line.me/v2/bot/audienceGroup/upload/byFile`

<!-- note start -->

**This domain name is different from that of other endpoints**

이 endpoint의 도메인 이름(`api-data.line.me`)은 Messaging API용 LINE Platform에서 대량의 데이터를 송수신하기 위한 것입니다. 이 도메인 이름은 다른 endpoint(`api.line.me`)와 다릅니다.

<!-- note end -->

사용자 ID 업로드용 audience에 새 사용자 ID 또는 IFA를 추가합니다.

이 endpoint에서는 텍스트 파일을 사용하여 수신자를 지정합니다. [JSON으로 수신자를 지정하는 endpoint](https://developers.line.biz/en/reference/messaging-api/#update-upload-audience-group)도 사용할 수 있습니다.

#### Conditions for users that can be added to the audience 

LINE Official Account를 친구로 추가한 사용자를 사용자 ID 업로드용 audience에 추가할 수 있습니다. 상태 코드 `202`가 반환되더라도 다음 사용자는 audience에 추가됩니다.

- LINE 계정을 삭제한 사용자
- Audience를 만든 LINE Official Account를 차단한 사용자
- Audience를 만든 LINE Official Account를 친구로 추가하지 않은 사용자

만든 audience를 사용하여 메시지를 보내더라도 위에 나열된 사용자에게는 메시지가 전송되지 않습니다.

<!-- note start -->

**We have set a limit on the number of concurrent endpoint operations**

사용자 ID 업로드용 audience를 만들고 audience에 사용자 ID를 추가하기 위해 audience ID(`audienceGroupId`)별 엔드포인트의 동시 작업 수 제한이 설정되어 있습니다. 자세한 내용은 [Limit on the number of concurrent operations](https://developers.line.biz/en/reference/messaging-api/#limit-on-the-number-of-concurrent-operations)를 참조하십시오.

<!-- note end -->

<!-- note start -->

**Request timeout values**

요청 시간 초과(timeout) 값으로 30초 이상을 사용할 것을 강력히 권장합니다.

<!-- note end -->

<!-- note start -->

**You can't switch between user IDs and IFAs**

사용자 ID 업로드용 audience를 만들 때 지정한 것과 같은 유형의 데이터(사용자 ID 또는 IFA)를 추가하십시오. 예를 들어 처음에 IFA를 사용하여 만든 audience에는 사용자 ID를 추가할 수 없습니다.

Audience의 `isIfaAudience` 속성을 사용하면 audience를 만들 때 어떤 유형의 수신자(사용자 ID 또는 IFA)를 지정했는지 확인할 수 있습니다. 자세한 내용은 [Get audience data](https://developers.line.biz/en/reference/messaging-api/#get-audience-group)를 참조하십시오.

<!-- note end -->

<!-- note start -->

**You can't delete user IDs or IFAs**

추가한 사용자 ID 또는 IFA는 삭제할 수 없습니다.

<!-- note end -->

<!-- note start -->

**Only users who have agreed to LINE's Privacy Policy (revised in March 2022 or later) will be added**

사용자 ID 업로드용 audience에 사용자 ID를 추가할 때, LINE 개인정보 처리방침(2022년 3월 이후 개정본)에 동의하지 않은 사용자의 ID는 무시됩니다. 동의한 사용자의 ID만 추가됩니다.

따라서 audience의 유효 수신자 수는 지정한 사용자 ID 수보다 적을 수 있습니다.

<!-- note end -->

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X PUT https://api-data.line.me/v2/bot/audienceGroup/upload/byFile \
-H 'Authorization: Bearer {channel access token}' \
-F 'audienceGroupId=4389303728991' \
-F 'uploadDescription=fileName' \
-F 'file=@audiences.txt;type=text/plain'
```

<!-- tab end -->

_Example text_

<!-- tab start `File` -->

```sh
U4af4980627...
U4af4980628...
U4af4980629...
```

<!-- tab end -->

#### Rate limit 

분당 60회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->
<!-- parameter start (props: required) -->

Content-Type

`multipart/form-data`

<!-- parameter end -->

#### Request body 

<!-- parameter start (props: required) -->

audienceGroupId

Number

Audience ID

<!-- parameter end -->
<!-- parameter start (props: optional) -->

uploadDescription

String

작업(`jobs[].description`)에 등록할 설명입니다.\
최대 문자 수: 300

<!-- parameter end -->
<!-- parameter start (props: required) -->

file

File

한 줄에 사용자 ID 또는 IFA 하나를 입력한 텍스트 파일입니다. Content-Type으로 `text/plain`을 지정하십시오.\
최대 파일 개수: 1개\
최대 개수: 1,500,000개

<!-- parameter end -->

#### Response 

상태 코드 `202`와 빈 JSON 객체가 반환됩니다.

<!-- note start -->

**Audience is created asynchronously**

Audience를 사용하기 전에 [audience를 전송에 사용할 수 있는지 확인](https://developers.line.biz/en/docs/messaging-api/sending-messages/#get-audience-status)하십시오.

<!-- note end -->

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
| `400` | 요청에 문제가 있습니다. 다음 원인을 확인하십시오.<ul><li>`file` 속성에 지정한 파일에 잘못된 사용자 ID 또는 IFA가 포함되어 있습니다.</li><li>`file` 속성에 최대 개수(1,500,000개)를 초과하는 사용자 ID 또는 IFA가 포함된 파일을 지정했습니다.</li><li>`file` 속성에 지정한 파일에 올바른 사용자 ID 또는 IFA가 포함되어 있지 않습니다.</li><li>보관 기간이 지난 audience를 지정했습니다.</li><li>존재하지 않는 audience를 지정했습니다.</li><li>`uploadDescription` 속성에 최대 문자 수(300)를 초과하는 문자열을 지정했습니다.</li></ul> |
| `415` | `file` 속성에 지원되지 않는 미디어 형식의 파일을 지정했습니다. |
| `429` | 동시 작업 수 제한을 초과했습니다. 자세한 내용은 [Limit on the number of concurrent operations](https://developers.line.biz/en/reference/messaging-api/#limit-on-the-number-of-concurrent-operations)를 참조하십시오. |

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Example error response_

<!-- tab start `json` -->

```json
// If you specify a file that contains an invalid user ID or IFA (400 Bad Request)
{
  "message": "UPLOAD_AUDIENCE_GROUP_INVALID_AUDIENCE_ID_FORMAT",
  "details": [
    {
      "message": "UPLOAD_AUDIENCE_GROUP_INVALID_AUDIENCE_ID_FORMAT",
      "property": "file"
    }
  ]
}
```

<!-- tab end -->

### Create message click audience 

Endpoint: `POST` `https://api.line.me/v2/bot/audienceGroup/click`

Message click audience를 만듭니다.

Message click audience는 broadcast 또는 narrowcast 메시지에 포함된 URL을 클릭한 사용자의 모음입니다. 링크를 한 번이라도 클릭한 사용자에게 메시지가 전송됩니다.

Request ID를 사용하여 메시지를 지정합니다.

<!-- tip start -->

**Message click audience**

Audience의 사양은 다음과 같습니다.

| Item | Limit |
| --- | --- |
| 채널당 audience 개수 | 최대 1,000개 |
| Audience의 보관 기간 | 최대 180일(15,552,000초) |
| Audience당 사용자 수 | Message click audience당 최소 50명 |
| 메시지 전송 후 리타게팅 audience\*를 만들 수 있는 기간 | 최대 60일(5,184,000초) |

\* Message click audience 및 message impression audience입니다.

자세한 내용은 [속성과 audience를 사용한 메시지 전송 제한](https://developers.line.biz/en/reference/messaging-api/#send-narrowcast-message-restrictions)을 참조하십시오.

<!-- tip end -->

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X POST https://api.line.me/v2/bot/audienceGroup/click \
-H 'Authorization: Bearer {channel access token}' \
-H 'Content-Type: application/json' \
-d '{
    "description": "audienceGroupName_01",
    "requestId": "bb9744f9-47fa-4a29-941e-1234567890ab",
    "clickUrl": "https://developers.line.biz/"
}'
```

<!-- tab end -->

#### Rate limit 

분당 60회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->
<!-- parameter start (props: required) -->

Content-Type

`application/json`

<!-- parameter end -->

#### Request body 

<!-- parameter start (props: required) -->

description

String

Audience의 이름입니다. 대소문자를 구분하지 않으므로 `AUDIENCE`와 `audience`는 같은 것으로 취급됩니다. \
최대 문자 수: 120

<!-- parameter end -->
<!-- parameter start (props: required) -->

requestId

String

과거 60일 이내에 보낸 broadcast 또는 narrowcast 메시지의 request ID입니다. Messaging API 요청마다 request ID가 있습니다. [response headers](https://developers.line.biz/en/reference/messaging-api/#response-headers)에서 확인할 수 있습니다.

<!-- note start -->

**Note**

Reply 메시지, push 메시지, multicast 메시지의 request ID는 사용할 수 없습니다.

<!-- note end -->

<!-- parameter end -->
<!-- parameter start (props: optional) -->

clickUrl

String

사용자가 클릭한 URL입니다. 비워 두면 메시지에 포함된 URL 중 하나라도 클릭한 사용자가 수신자 목록에 추가됩니다. \
최대 문자 수: 2,000

<!-- parameter end -->

#### Response 

`202` HTTP 상태 코드와 다음 정보를 담은 JSON 객체가 반환됩니다.

<!-- note start -->

**Audience is created asynchronously**

Audience를 사용하기 전에 [audience를 전송에 사용할 수 있는지 확인](https://developers.line.biz/en/docs/messaging-api/sending-messages/#get-audience-status)하십시오.

<!-- note end -->

<!-- parameter start -->

audienceGroupId

Number

Audience ID입니다.

<!-- parameter end -->
<!-- parameter start -->

createRoute

String

Audience가 만들어진 경로입니다.

- `MESSAGING_API`: Messaging API로 만든 audience입니다.

<!-- parameter end -->
<!-- parameter start -->

type

String

Audience의 유형입니다.

- `CLICK`: Message click audience입니다.

<!-- parameter end -->
<!-- parameter start -->

description

String

Audience의 이름입니다.

<!-- parameter end -->
<!-- parameter start -->

created

Number

Audience가 만들어진 시각(UNIX time, 초 단위)입니다.

<!-- parameter end -->
<!-- parameter start -->

permission

String

만든 audience의 업데이트 권한입니다.

- `READ_WRITE`: Audience를 사용하고 업데이트할 수 있습니다.

<!-- parameter end -->
<!-- parameter start -->

expireTimestamp

Number

Audience의 만료 시각(UNIX time, 초 단위)입니다.

<!-- parameter end -->
<!-- parameter start -->

isIfaAudience

Boolean

사용자 ID 업로드용 audience를 만들 때 지정한, 전송 대상 계정의 유형을 나타내는 값입니다. 다음 중 하나입니다.

- `true`: IFA로 계정을 지정합니다.
- `false`(기본값): 사용자 ID로 계정을 지정합니다.

<!-- parameter end -->
<!-- parameter start -->

requestId

String

Audience를 만들 때 지정한 request ID입니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

clickUrl

String

Audience를 만들 때 지정한 URL입니다. 요청의 `clickUrl` 속성에 값을 지정한 경우에만 포함됩니다.

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

```json
{
  "audienceGroupId": 1234567890123,
  "createRoute": "MESSAGING_API",
  "type": "CLICK",
  "description": "audienceGroupName_01",
  "created": 1613705240,
  "permission": "READ_WRITE",
  "expireTimestamp": 1629257239,
  "isIfaAudience": false,
  "requestId": "bb9744f9-47fa-4a29-941e-1234567890ab",
  "clickUrl": "https://developers.line.biz/"
}
```

<!-- tab end -->

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code | Description |
| --- | --- |
| `400` | 요청에 문제가 있습니다. 다음 원인을 확인하십시오.<ul><li>최대 개수(1,000개)의 audience를 이미 만들었습니다.</li><li>`description` 속성에 최대 문자 수(120)를 초과하는 이름을 지정했습니다.</li><li>`description` 속성에 잘못된 문자(예: `\n` 또는 기타 제어 문자)를 지정했습니다.</li><li>`requestID`와 `clickUrl` 속성이 기존 audience와 같은 값 조합을 가지고 있습니다.</li><li>Audience를 만들 수 있는 제한 시간이 만료되었습니다.</li><li>존재하지 않는 request ID를 지정했습니다.</li><li>LINE Platform이 지정한 request ID로 audience를 만들 준비가 되어 있지 않습니다.</li></ul> |

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Example error response_

<!-- tab start `json` -->

```json
// If you specify a name longer than the maximum number of characters (120) in the description property (400 Bad Request)
{
  "message": "size over audienceGroupName",
  "details": [
    {
      "message": "AUDIENCE_GROUP_NAME_SIZE_OVER"
    }
  ]
}
```

<!-- tab end -->

### Create message impression audience 

Endpoint: `POST` `https://api.line.me/v2/bot/audienceGroup/imp`

Message impression audience를 만듭니다.

Message impression audience는 broadcast 또는 narrowcast 메시지를 본 사용자의 모음입니다. 메시지 말풍선을 한 번이라도 본 사용자가 포함됩니다.

Request ID를 사용하여 메시지를 지정합니다.

<!-- tip start -->

**Message impression audience**

Audience의 사양은 다음과 같습니다.

| Item | Limit |
| --- | --- |
| 채널당 audience 개수 | 최대 1,000개 |
| Audience의 보관 기간 | 최대 180일(15,552,000초) |
| Audience당 사용자 수 | Message impression audience당 최소 50명 |
| 메시지 전송 후 리타게팅 audience\*를 만들 수 있는 기간 | 최대 60일(5,184,000초) |

\* Message click audience 및 message impression audience입니다.

자세한 내용은 [속성과 audience를 사용한 메시지 전송 제한](https://developers.line.biz/en/reference/messaging-api/#send-narrowcast-message-restrictions)을 참조하십시오.

<!-- tip end -->

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X POST https://api.line.me/v2/bot/audienceGroup/imp \
-H 'Authorization: Bearer {channel access token}' \
-H 'Content-Type: application/json' \
-d '{
    "description": "audienceGroupName_01",
    "requestId": "bb9744f9-47fa-4a29-941e-1234567890ab"
}'
```

<!-- tab end -->

#### Rate limit 

분당 60회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->
<!-- parameter start (props: required) -->

Content-Type

`application/json`

<!-- parameter end -->

#### Request body 

<!-- parameter start (props: required) -->

description

String

Audience의 이름입니다. 대소문자를 구분하지 않으므로 `AUDIENCE`와 `audience`는 같은 것으로 취급됩니다. \
최대 문자 수: 120

<!-- parameter end -->
<!-- parameter start (props: required) -->

requestId

String

과거 60일 이내에 보낸 broadcast 또는 narrowcast 메시지의 request ID입니다. Messaging API 요청마다 request ID가 있습니다. [response headers](https://developers.line.biz/en/reference/messaging-api/#response-headers)에서 확인할 수 있습니다.

<!-- parameter end -->

#### Response 

`202` HTTP 상태 코드와 다음 정보를 담은 JSON 객체가 반환됩니다.

<!-- note start -->

**Audience is created asynchronously**

Audience를 사용하기 전에 [audience를 전송에 사용할 수 있는지 확인](https://developers.line.biz/en/docs/messaging-api/sending-messages/#get-audience-status)하십시오.

<!-- note end -->

<!-- parameter start -->

audienceGroupId

Number

Audience ID입니다.

<!-- parameter end -->
<!-- parameter start -->

createRoute

String

Audience가 만들어진 경로입니다.

- `MESSAGING_API`: Messaging API로 만든 audience입니다.

<!-- parameter end -->
<!-- parameter start -->

type

String

Audience의 유형입니다.

- `IMP`: Message impression audience입니다.

<!-- parameter end -->
<!-- parameter start -->

description

String

Audience의 이름입니다.

<!-- parameter end -->
<!-- parameter start -->

created

Number

Audience가 만들어진 시각(UNIX time, 초 단위)입니다.

<!-- parameter end -->
<!-- parameter start -->

permission

String

만든 audience의 업데이트 권한입니다.

- `READ_WRITE`: Audience를 사용하고 업데이트할 수 있습니다.

<!-- parameter end -->
<!-- parameter start -->

expireTimestamp

Number

Audience의 만료 시각(UNIX time, 초 단위)입니다.

<!-- parameter end -->
<!-- parameter start -->

isIfaAudience

Boolean

사용자 ID 업로드용 audience를 만들 때 지정한, 전송 대상 계정의 유형을 나타내는 값입니다. 다음 중 하나입니다.

- `true`: IFA로 계정을 지정합니다.
- `false`(기본값): 사용자 ID로 계정을 지정합니다.

<!-- parameter end -->
<!-- parameter start -->

requestId

String

Audience를 만들 때 지정한 request ID입니다.

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

```json
{
  "audienceGroupId": 1234567890123,
  "createRoute": "MESSAGING_API",
  "type": "IMP",
  "description": "audienceGroupName_01",
  "created": 1613707097,
  "permission": "READ_WRITE",
  "expireTimestamp": 1629259095,
  "isIfaAudience": false,
  "requestId": "bb9744f9-47fa-4a29-941e-1234567890ab"
}
```

<!-- tab end -->

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code | Description |
| --- | --- |
| `400` | 요청에 문제가 있습니다. 다음 원인을 확인하십시오.<ul><li>최대 개수(1,000개)의 audience를 이미 만들었습니다.</li><li>`description` 속성에 최대 문자 수(120)를 초과하는 이름을 지정했습니다.</li><li>`description` 속성에 잘못된 문자(예: `\n` 또는 기타 제어 문자)를 지정했습니다.</li><li>지정한 request ID를 가진 audience가 이미 있습니다.</li><li>Audience를 만들 수 있는 제한 시간이 만료되었습니다.</li><li>존재하지 않는 request ID를 지정했습니다.</li><li>LINE Platform이 지정한 request ID로 audience를 만들 준비가 되어 있지 않습니다.</li></ul> |

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Example error response_

<!-- tab start `json` -->

```json
// If you specify a name longer than the maximum number of characters (120) in the description property (400 Bad Request)
{
  "message": "size over audienceGroupName",
  "details": [
    {
      "message": "AUDIENCE_GROUP_NAME_SIZE_OVER"
    }
  ]
}
```

<!-- tab end -->

### Rename an audience 

Endpoint: `PUT` `https://api.line.me/v2/bot/audienceGroup/{audienceGroupId}/updateDescription`

기존 audience의 이름을 변경합니다.

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X PUT https://api.line.me/v2/bot/audienceGroup/{audienceGroupId}/updateDescription \
-H 'Authorization: Bearer {channel access token}' \
-H 'Content-Type: application/json' \
-d '{
    "description": "audienceGroupName"
}'
```

<!-- tab end -->

#### Rate limit 

분당 60회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->
<!-- parameter start (props: required) -->

Content-Type

`application/json`

<!-- parameter end -->

#### Path parameters 

<!-- parameter start (props: required) -->

audienceGroupId

Audience ID입니다.

<!-- parameter end -->

#### Request body 

<!-- parameter start (props: required) -->

description

String

Audience의 이름입니다. 대소문자를 구분하지 않으므로 `AUDIENCE`와 `audience`는 같은 것으로 취급됩니다. \
최대 문자 수: 120

<!-- parameter end -->

#### Response 

`200` HTTP 상태 코드와 빈 JSON 객체가 반환됩니다.

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code | Description |
| --- | --- |
| `400` | 요청에 문제가 있습니다. 다음 원인을 확인하십시오.<ul><li>`description` 속성에 최대 문자 수(120)를 초과하는 이름을 지정했습니다.</li><li>`description` 속성에 잘못된 문자(예: `\n` 또는 기타 제어 문자)를 지정했습니다.</li><li>존재하지 않는 audience를 지정했습니다.</li></ul> |

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Example error response_

<!-- tab start `json` -->

```json
// If you specify a name longer than the maximum number of characters (120) in the description property (400 Bad Request)
{
  "message": "size over audienceGroupName",
  "details": [
    {
      "message": "AUDIENCE_GROUP_NAME_SIZE_OVER"
    }
  ]
}
```

<!-- tab end -->

### Delete audience 

Endpoint: `DELETE` `https://api.line.me/v2/bot/audienceGroup/{audienceGroupId}`

Audience를 삭제합니다.

<!-- warning start -->

**You can't undo deleting an audience**

Audience를 삭제하기 전에 더 이상 사용하지 않는지 반드시 확인하십시오.

<!-- warning end -->

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X DELETE https://api.line.me/v2/bot/audienceGroup/{audienceGroupId} \
-H 'Authorization: Bearer {channel access token}'
```

<!-- tab end -->

#### Rate limit 

분당 60회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->

#### Path parameters 

<!-- parameter start (props: required) -->

audienceGroupId

Audience ID입니다.

<!-- parameter end -->

#### Response 

`202` HTTP 상태 코드와 빈 JSON 객체가 반환됩니다.

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code  | Description                           |
| ----- | ------------------------------------- |
| `400` | 존재하지 않는 audience를 지정했습니다. |

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Example error response_

<!-- tab start `json` -->

```json
// If you specify a non-existent audience (400 Bad Request)
{
  "message": "audience group not found",
  "details": [
    {
      "message": "AUDIENCE_GROUP_NOT_FOUND"
    }
  ]
}
```

<!-- tab end -->

### Get audience data 

Endpoint: `GET` `https://api.line.me/v2/bot/audienceGroup/{audienceGroupId}`

Audience 데이터를 가져옵니다.

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X GET https://api.line.me/v2/bot/audienceGroup/{audienceGroupId} \
-H 'Authorization: Bearer {channel access token}'
```

<!-- tab end -->

#### Rate limit 

분당 60회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->

#### Path parameters 

<!-- parameter start (props: required) -->

audienceGroupId

Audience ID입니다.

<!-- parameter end -->

#### Response 

다음 정보를 담은 JSON 객체와 함께 `200` HTTP 상태 코드가 반환됩니다.

<!-- parameter start -->

audienceGroup

Object

Audience group 객체입니다.

<!-- parameter end -->
<!-- parameter start -->

audienceGroup.audienceGroupId

Number

Audience ID입니다.

<!-- parameter end -->
<!-- parameter start -->

audienceGroup.createRoute

String

Audience가 만들어진 경로입니다. 다음 중 하나입니다.

- `OA_MANAGER`: [LINE Official Account Manager](https://manager.line.biz/)로 만든 audience입니다.
- `MESSAGING_API`: Messaging API로 만든 audience입니다.
- `POINT_AD`: [LINE Points Ads](https://www.lycbiz.com/jp/service/line-point-ad/)로 만든 audience입니다(일본어만 제공).
- `AD_MANAGER`: [LINE Ads](https://admanager.line.biz/)로 만든 audience입니다.

<!-- parameter end -->
<!-- parameter start -->

audienceGroup.type

String

Audience의 유형입니다. 다음 중 하나입니다.

- `UPLOAD`: 사용자 ID 업로드용 audience입니다.
- `CLICK`: Message click audience입니다.
- `IMP`: Message impression audience입니다.
- `CHAT_TAG`: Chat tag audience입니다.
- `FRIEND_PATH`: Friend path audience입니다.
- `RESERVATION`: Reservation audience입니다.
- `RICHMENU_IMP`: Rich menu impression audience입니다.
- `RICHMENU_CLICK`: Rich menu click audience입니다.
- `APP_EVENT`: App event audience입니다.
- `VIDEO_VIEW`: Video view audience입니다.
- `WEBTRAFFIC`: Web traffic audience(LINE Tag)입니다.
- `TRACKINGTAG_WEBTRAFFIC`: Web traffic audience(Tracking Tag)입니다.
- `IMAGE_CLICK`: Image click audience입니다.
- `POP_AD_IMP`: LINE Beacon Network ad impression audience입니다.

자세한 내용은 LINE for Business의 [Audience](https://www.lycbiz.com/jp/manual/OfficialAccountManager/messages-audience/) 페이지를 참조하십시오. 이 페이지는 현재 영어로 제공되지 않습니다.

<!-- parameter end -->
<!-- parameter start -->

audienceGroup.description

String

Audience의 이름입니다.

<!-- parameter end -->
<!-- parameter start -->

audienceGroup.status

String

Audience의 상태입니다. 다음 중 하나입니다.

- `IN_PROGRESS`: 대기 중입니다. 상태가 `READY`로 바뀌기까지 몇 시간이 걸릴 수 있습니다. 사용자 수 제한이 있는 audience에 포함된 사용자 수가 부족한 경우(최소 50명 필요) 상태는 `IN_PROGRESS`로 남아 업데이트되지 않습니다.
- `READY`: 메시지를 받을 준비가 되었습니다(\*).
- `FAILED`: Audience를 만드는 중에 오류가 발생했습니다.
- `EXPIRED`: 만료되었습니다. Audience는 만료 후 한 달이 지나면 자동으로 삭제됩니다.
- `INACTIVE`: Audience가 비활성 상태입니다.
- `ACTIVATING`: Audience를 활성화하는 중입니다.

\* 사용자 ID 업로드용 audience의 경우, `audienceGroup.status`가 `READY`인 audience에 사용자 ID 또는 IFA를 추가해도 상태는 `READY`로 유지됩니다. 추가된 대상 수신자를 포함한 사용자에게 메시지를 보내려면 해당 작업의 `jobs[].jobStatus`가 `FINISHED`인지 확인하십시오.

<!-- parameter end -->
<!-- parameter start -->

audienceGroup.audienceCount

Number

Audience에 포함된 사용자 수입니다. 사용자의 개인정보를 보호하기 위해, 다음 유형의 audience를 제외하고 수가 20명 미만이면 0이 반환됩니다.

- 사용자 ID 업로드용 audience(수신자를 사용자 ID로 지정한 경우)
- Chat tag audience

Audience에는 이미 LINE Official Account를 차단한 사용자가 포함되어 있을 수 있으므로, `audienceGroup.audienceCount` 값과 실제로 메시지를 받는 사용자 수는 다를 수 있습니다.

<!-- parameter end -->
<!-- parameter start -->

audienceGroup.created

Number

Audience가 만들어진 시각(UNIX time, 초 단위)입니다.

<!-- parameter end -->
<!-- parameter start -->

audienceGroup.permission

String

Audience의 업데이트 권한입니다. 현재 Messaging API 채널이 대상 audience를 업데이트할 수 있으면 `READ_WRITE`를, 업데이트할 수 없으면 `READ`를 반환합니다.

- `READ`: Audience를 사용할 수 있지만 업데이트할 수는 없습니다.
- `READ_WRITE`: Audience를 사용하고 업데이트할 수 있습니다.

<!-- parameter end -->
<!-- parameter start -->

audienceGroup.isIfaAudience

Boolean

사용자 ID 업로드용 audience를 만들 때 지정한, 전송 대상 계정의 유형을 나타내는 값입니다. 다음 중 하나입니다.

- `true`: IFA로 계정을 지정합니다.
- `false`(기본값): 사용자 ID로 계정을 지정합니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

audienceGroup.requestId

String

Audience를 만들 때 지정한 request ID입니다. `audienceGroup.type`이 `CLICK` 또는 `IMP`인 경우에만 포함됩니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

audienceGroup.clickUrl

String

Audience를 만들 때 지정한 URL입니다. `audienceGroup.type`이 `CLICK`이고 링크 URL을 지정한 경우에만 포함됩니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

audienceGroup.failedType

String

작업이 실패한 이유입니다. `audienceGroup.status`가 `FAILED`인 경우에만 포함됩니다. 다음 중 하나입니다.

- `AUDIENCE_GROUP_AUDIENCE_INSUFFICIENT`: Audience에 포함된 사용자 수가 부족합니다(최소 50명 필요).
- `INTERNAL_ERROR`: 내부 서버 오류입니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

audienceGroup.activated

Number

Audience가 활성화된 시각입니다. [LINE Ads](https://admanager.line.biz/) 또는 [LINE Points Ads](https://www.lycbiz.com/jp/service/line-point-ad/)(일본어만 제공)로 만든 audience에 대해서만 반환됩니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

audienceGroup.inactivatedTimestamp

Number

Audience가 비활성화된 시각입니다. [LINE Ads](https://admanager.line.biz/) 또는 [LINE Points Ads](https://www.lycbiz.com/jp/service/line-point-ad/)(일본어만 제공)로 만든 audience에 대해서만 반환됩니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

audienceGroup.expireTimestamp

Number

Audience의 만료 시각(UNIX time, 초 단위)입니다. 특정 audience에 대해서만 반환됩니다.

<!-- parameter end -->
<!-- parameter start -->

jobs

Array

작업의 배열입니다. 이 배열은 사용자 ID 업로드용 audience에 새 사용자 ID 또는 IFA를 추가하려는 각 시도를 추적하는 데 사용됩니다. 그 밖의 유형의 audience에 대해서는 빈 배열이 반환됩니다.<br />최대: 50개

<!-- parameter end -->
<!-- parameter start -->

jobs\[].audienceGroupJobId

Number

작업 ID입니다.

<!-- parameter end -->
<!-- parameter start -->

jobs\[].audienceGroupId

Number

Audience ID입니다.

<!-- parameter end -->
<!-- parameter start -->

jobs\[].description

String

작업의 설명입니다. 사용자 ID 또는 IFA를 추가할 때 `uploadDescription` 속성에 값을 지정하지 않았다면 `null`이 반환됩니다.

<!-- parameter end -->
<!-- parameter start -->

jobs\[].type

String

작업의 유형입니다. 다음 중 하나입니다.

- `DIFF_ADD`: Messaging API를 통해 사용자 ID 또는 IFA를 추가했음을 나타냅니다.

<!-- parameter end -->
<!-- parameter start -->

jobs\[].status

String

이 속성은 deprecated되었습니다. 작업의 상태는 `jobs[].jobStatus`를 참조하십시오.

<!-- parameter end -->
<!-- parameter start -->

jobs\[].failedType

String

작업이 실패한 이유입니다. `jobs[].jobStatus`가 `FAILED`인 경우에만 포함됩니다. 다음 중 하나입니다.

- `AUDIENCE_GROUP_AUDIENCE_INSUFFICIENT`: Audience에 포함된 사용자 수가 부족합니다(최소 50명 필요).
- `INTERNAL_ERROR`: 내부 서버 오류입니다.

`jobs[].jobStatus`가 `FAILED`가 아니면 `null`이 반환됩니다.

<!-- parameter end -->
<!-- parameter start -->

jobs\[].audienceCount

Number

추가되거나 삭제된 계정(수신자)의 수입니다.

<!-- parameter end -->
<!-- parameter start -->

jobs\[].created

Number

작업이 만들어진 시각(UNIX time, 초 단위)입니다.

<!-- parameter end -->
<!-- parameter start -->

jobs\[].jobStatus

String

작업의 상태입니다. 다음 중 하나입니다.

- `QUEUED`: 실행 대기 중입니다.
- `WORKING`: 실행 중입니다.
- `FINISHED`: 완료되었습니다.
- `FAILED`: 실패했습니다.

상태가 `QUEUED` 또는 `WORKING`인 작업은 사용자 ID 또는 IFA를 추가하는 처리가 아직 완료되지 않았습니다. 추가된 대상 수신자를 포함한 사용자에게 메시지를 보내려면 해당 작업의 `jobs[].jobStatus`가 `FINISHED`인지 확인하십시오.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

adaccount

Object

광고 계정 객체입니다. [LINE Ads](https://admanager.line.biz/) 또는 [LINE Points Ads](https://www.lycbiz.com/jp/service/line-point-ad/)(일본어만 제공)로 만든 audience에 대해서만 반환됩니다.

<!-- parameter end -->
<!-- parameter start -->

adaccount\[].name

String

공유 audience를 만든 광고 계정의 이름입니다.

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

```json
// Example of an audience used for uploading user IDs
{
    "audienceGroup": {
        "audienceGroupId": 1234567890123,
        "createRoute": "OA_MANAGER",
        "type": "UPLOAD",
        "description": "audienceGroupName_01",
        "status": "READY",
        "audienceCount": 1887,
        "created": 1608617466,
        "permission": "READ",
        "isIfaAudience": false,
        "expireTimestamp": 1624342266
    },
    "jobs": [
        {
            "audienceGroupJobId": 12345678,
            "audienceGroupId": 1234567890123,
            "description": "audience_list.txt",
            "type": "DIFF_ADD",
            "status": "FINISHED",
            "failedType": null,
            "audienceCount": 0,
            "created": 1608617472,
            "jobStatus": "FINISHED"
        }
    ]
}

// Example of a message click audience
{
    "audienceGroup": {
        "audienceGroupId": 1234567890987,
        "createRoute": "OA_MANAGER",
        "type": "CLICK",
        "description": "audienceGroupName_02",
        "status": "IN_PROGRESS",
        "audienceCount": 8619,
        "created": 1611114828,
        "permission": "READ",
        "isIfaAudience": false,
        "expireTimestamp": 1626753228,
        "requestId": "c10c3d86-f565-...",
        "clickUrl": "https://example.com/"
    },
    "jobs": []
}

// Example of an audience used for app events
{
    "audienceGroup": {
        "audienceGroupId": 2345678909876,
        "createRoute": "AD_MANAGER",
        "type": "APP_EVENT",
        "description": "audienceGroupName_03",
        "status": "READY",
        "audienceCount": 8619,
        "created": 1608619802,
        "permission": "READ",
        "activated": 1610068515,
        "inactiveTimestamp": 1625620516,
        "isIfaAudience": false
    },
    "jobs": [],
    "adaccount": {
        "name": "Ad Account Name"
    }
}
```

<!-- tab end -->

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code  | Description                           |
| ----- | ------------------------------------- |
| `400` | 존재하지 않는 audience를 지정했습니다. |

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Example error response_

<!-- tab start `json` -->

```json
// If you specify a non-existent audience (400 Bad Request)
{
  "message": "audience group not found",
  "details": [
    {
      "message": "AUDIENCE_GROUP_NOT_FOUND"
    }
  ]
}
```

<!-- tab end -->

### Get data for multiple audiences 

Endpoint: `GET` `https://api.line.me/v2/bot/audienceGroup/list`

여러 audience의 데이터를 가져옵니다.

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X GET https://api.line.me/v2/bot/audienceGroup/list \
--data-urlencode 'page=1' \
--data-urlencode 'description=audienceGroupName' \
--data-urlencode 'size=40' \
--data-urlencode 'createRoute=OA_MANAGER' \
-G \
-H 'Authorization: Bearer {channel access token}'
```

<!-- tab end -->

#### Rate limit 

분당 60회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->

#### Query parameters 

<!-- parameter start (props: required) -->

page

(페이지 단위로) 결과를 가져올 때 반환할 페이지입니다. `1` 이상이어야 합니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

description

반환할 audience의 이름입니다. 부분 일치로 검색할 수 있습니다. 대소문자를 구분하지 않으므로 `AUDIENCE`와 `audience`는 같은 것으로 취급됩니다. 생략하면 audience의 이름은 검색 조건으로 사용되지 않습니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

status

반환할 audience의 상태입니다. 생략하면 audience의 상태는 검색 조건으로 사용되지 않습니다. 다음 중 하나입니다.

- `IN_PROGRESS`: 대기 중입니다.
- `READY`: 메시지를 받을 준비가 되었습니다.
- `FAILED`: Audience를 만드는 중에 오류가 발생했습니다.
- `EXPIRED`: 만료되었습니다. Audience는 만료 후 한 달이 지나면 자동으로 삭제됩니다.
- `INACTIVE`: Audience가 비활성 상태입니다.
- `ACTIVATING`: Audience를 활성화하는 중입니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

size

페이지당 audience 개수입니다. 기본값: `20` \
최대: `40`

<!-- parameter end -->
<!-- parameter start (props: optional) -->

includesExternalPublicGroups

- `true`(기본값): 같은 bot에 연결된 모든 채널에서 만든 공개 audience를 가져옵니다.
- `false`: 같은 채널에서 만든 audience를 가져옵니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

createRoute

Audience가 만들어진 경로입니다. 생략하면 모든 audience가 포함됩니다.

- `OA_MANAGER`: [LINE Official Account Manager](https://manager.line.biz/)로 만든 audience만 반환합니다.
- `MESSAGING_API`: Messaging API로 만든 audience만 반환합니다.
- `POINT_AD`: [LINE Points Ads](https://www.lycbiz.com/jp/service/line-point-ad/)(일본어만 제공)로 만든 audience만 반환합니다.
- `AD_MANAGER`: [LINE Ads](https://admanager.line.biz/)로 만든 audience만 반환합니다.

여러 파라미터를 지정하면 OR 조건이 사용됩니다.

<!-- parameter end -->

#### Response 

다음 정보를 담은 JSON 객체와 함께 `200` HTTP 상태 코드가 반환됩니다.

<!-- parameter start -->

audienceGroups

Array

Audience 데이터의 배열입니다. 지정한 필터와 일치하는 audience가 없으면 빈 배열이 반환됩니다.

<!-- parameter end -->
<!-- parameter start -->

audienceGroups\[].audienceGroupId

Number

Audience ID입니다.

<!-- parameter end -->
<!-- parameter start -->

audienceGroups\[].createRoute

String

Audience가 만들어진 경로입니다. 다음 중 하나입니다.

- `OA_MANAGER`: [LINE Official Account Manager](https://manager.line.biz/)로 만든 audience입니다.
- `MESSAGING_API`: Messaging API로 만든 audience입니다.
- `POINT_AD`: [LINE Points Ads](https://www.lycbiz.com/jp/service/line-point-ad/)(일본어만 제공)로 만든 audience입니다.
- `AD_MANAGER`: [LINE Ads](https://admanager.line.biz/)로 만든 audience입니다.

<!-- parameter end -->
<!-- parameter start -->

audienceGroups\[].type

String

Audience의 유형입니다. 다음 중 하나입니다.

- `UPLOAD`: 사용자 ID 업로드용 audience입니다.
- `CLICK`: Message click audience입니다.
- `IMP`: Message impression audience입니다.
- `CHAT_TAG`: Chat tag audience입니다.
- `FRIEND_PATH`: Friend path audience입니다.
- `RESERVATION`: Reservation audience입니다.
- `RICHMENU_IMP`: Rich menu impression audience입니다.
- `RICHMENU_CLICK`: Rich menu click audience입니다.
- `APP_EVENT`: App event audience입니다.
- `VIDEO_VIEW`: Video view audience입니다.
- `WEBTRAFFIC`: Web traffic audience(LINE Tag)입니다.
- `TRACKINGTAG_WEBTRAFFIC`: Web traffic audience(Tracking Tag)입니다.
- `IMAGE_CLICK`: Image click audience입니다.
- `POP_AD_IMP`: LINE Beacon Network ad impression audience입니다.

자세한 내용은 LINE for Business의 [Audience](https://www.lycbiz.com/jp/manual/OfficialAccountManager/messages-audience/) 페이지를 참조하십시오. 이 페이지는 현재 영어로 제공되지 않습니다.

<!-- parameter end -->
<!-- parameter start -->

audienceGroups\[].description

String

Audience의 이름입니다.

<!-- parameter end -->
<!-- parameter start -->

audienceGroups\[].status

String

Audience의 상태입니다. 다음 중 하나입니다.

- `IN_PROGRESS`: 대기 중입니다. 사용자 수 제한이 있는 audience에 포함된 사용자 수가 부족한 경우(최소 50명 필요) 상태는 `IN_PROGRESS`로 남아 업데이트되지 않습니다.
- `READY`: 메시지를 받을 준비가 되었습니다.
- `FAILED`: Audience를 만드는 중에 오류가 발생했습니다.
- `EXPIRED`: 만료되었습니다. Audience는 만료 후 한 달이 지나면 자동으로 삭제됩니다.
- `INACTIVE`: Audience가 비활성 상태입니다.
- `ACTIVATING`: Audience를 활성화하는 중입니다.

<!-- parameter end -->
<!-- parameter start -->

audienceGroups\[].audienceCount

Number

Audience에 포함된 사용자 수입니다. 사용자의 개인정보를 보호하기 위해, 다음 유형의 audience를 제외하고 수가 20명 미만이면 0이 반환됩니다.

- 사용자 ID 업로드용 audience(수신자를 사용자 ID로 지정한 경우)
- Chat tag audience

Audience에는 이미 LINE Official Account를 차단한 사용자가 포함되어 있을 수 있으므로, `audienceGroups[].audienceCount` 값과 메시지를 보내는 사용자 수는 다를 수 있습니다.

<!-- parameter end -->
<!-- parameter start -->

audienceGroups\[].created

Number

Audience가 만들어진 시각(UNIX time, 초 단위)입니다.

<!-- parameter end -->
<!-- parameter start -->

audienceGroups\[].permission

String

Audience의 업데이트 권한입니다. 현재 Messaging API 채널이 대상 audience를 업데이트할 수 있으면 `READ_WRITE`를, 업데이트할 수 없으면 `READ`를 반환합니다.

- `READ`: Audience를 사용할 수 있지만 업데이트할 수는 없습니다.
- `READ_WRITE`: Audience를 사용하고 업데이트할 수 있습니다.

<!-- parameter end -->
<!-- parameter start -->

audienceGroups\[].isIfaAudience

Boolean

사용자 ID 업로드용 audience를 만들 때 지정한, 전송 대상 계정의 유형을 나타내는 값입니다. 다음 중 하나입니다.

- `true`: IFA로 계정을 지정합니다.
- `false`(기본값): 사용자 ID로 계정을 지정합니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

audienceGroups\[].activated

Number

Audience가 활성화된 시각입니다. [LINE Ads](https://admanager.line.biz/) 또는 [LINE Points Ads](https://www.lycbiz.com/jp/service/line-point-ad/)(일본어만 제공)로 만든 audience에 대해서만 반환됩니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

audienceGroups\[].inactivatedTimestamp

Number

Audience가 비활성화된 시각입니다. [LINE Ads](https://admanager.line.biz/) 또는 [LINE Points Ads](https://www.lycbiz.com/jp/service/line-point-ad/)(일본어만 제공)로 만든 audience에 대해서만 반환됩니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

audienceGroups\[].expireTimestamp

Number

Audience의 만료 시각(UNIX time, 초 단위)입니다. 특정 audience에 대해서만 반환됩니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

audienceGroups\[].requestId

String

Audience를 만들 때 지정한 request ID입니다. `audienceGroups[].type`이 `CLICK` 또는 `IMP`인 경우에만 포함됩니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

audienceGroups\[].clickUrl

String

Audience를 만들 때 지정한 URL입니다. `audienceGroups[].type`이 `CLICK`이고 링크 URL을 지정한 경우에만 포함됩니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

audienceGroups\[].failedType

String

작업이 실패한 이유입니다. `audienceGroups[].status`가 `FAILED` 또는 `EXPIRED`인 경우에만 포함됩니다. 다음 중 하나입니다.

- `AUDIENCE_GROUP_AUDIENCE_INSUFFICIENT`: Audience에 포함된 사용자 수가 부족합니다(최소 50명 필요).
- `INTERNAL_ERROR`: 내부 서버 오류입니다.

<!-- parameter end -->
<!-- parameter start -->

hasNextPage

Boolean

마지막 페이지가 아닌 경우 `true`입니다.

<!-- parameter end -->
<!-- parameter start -->

totalCount

Number

지정한 필터로 반환될 수 있는 audience의 총 개수입니다.

<!-- parameter end -->
<!-- parameter start -->

readWriteAudienceGroupTotalCount

Number

지정한 필터로 가져올 수 있는 audience 중 업데이트 권한(`audienceGroups[].permission`)이 `READ_WRITE`인 audience의 수입니다.

<!-- parameter end -->
<!-- parameter start -->

page

Number

현재 페이지 번호입니다.

<!-- parameter end -->
<!-- parameter start -->

size

Number

현재 페이지의 최대 audience 개수입니다.

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

```json
// Example of when there are two audiences that match the specified filter
{
    "audienceGroups": [
        {
            "audienceGroupId": 1234567890123,
            "createRoute": "OA_MANAGER",
            "type": "CLICK",
            "description": "audienceGroupName_01",
            "status": "IN_PROGRESS",
            "audienceCount": 8619,
            "created": 1611114828,
            "permission": "READ",
            "isIfaAudience": false,
            "expireTimestamp": 1626753228,
            "requestId": "c10c3d86-f565-...",
            "clickUrl": "https://example.com/"
        },
        {
            "audienceGroupId": 2345678901234,
            "createRoute": "AD_MANAGER",
            "type": "APP_EVENT",
            "description": "audienceGroupName_02",
            "status": "READY",
            "audienceCount": 3368,
            "created": 1608619802,
            "permission": "READ",
            "activated": 1610068515,
            "inactiveTimestamp": 1625620516,
            "isIfaAudience": false
        }
    ],
    "hasNextPage": false,
    "totalCount": 2,
    "readWriteAudienceGroupTotalCount": 0,
    "size": 40,
    "page": 1
}

// Example of when there is no audience that matches the specified filter
{
    "audienceGroups": [],
    "hasNextPage": false,
    "totalCount": 0,
    "readWriteAudienceGroupTotalCount": 0,
    "size": 40,
    "page": 1
}
```

<!-- tab end -->

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code  | Description                              |
| ----- | ---------------------------------------- |
| `400` | 잘못된 쿼리 파라미터를 지정했습니다. |

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Example error response_

<!-- tab start `json` -->

```json
// If you specify an invalid query parameter (400 Bad Request)
{
  "message": "size: must be less than or equal to 40",
  "details": [
    {
      "message": "TOO_HIGH"
    }
  ]
}
```

<!-- tab end -->

### Get shared audience data in Business Manager 

Endpoint: `GET` `https://api.line.me/v2/bot/audienceGroup/shared/{audienceGroupId}`

[Business Manager](https://www.lycbiz.com/jp/service/business-manager/)의 공유 audience를 가져옵니다(일본어만 제공).

<!-- tip start -->

**About Business Manager**

Business Manager를 사용하면 특정 audience를 여러 서비스에서 공유할 수 있습니다. Business Manager에서 audience를 공유하면 최종 사용자와 더 효과적으로 소통할 수 있습니다.

자세한 내용은 LY for Business의 [Business Manager](https://www.lycbiz.com/jp/service/business-manager/)(일본어만 제공)를 참조하십시오.

<!-- tip end -->

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X GET https://api.line.me/v2/bot/audienceGroup/shared/{audienceGroupId} \
-H 'Authorization: Bearer {channel access token}'
```

<!-- tab end -->

#### Rate limit 

분당 60회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->

#### Path parameters 

<!-- parameter start (props: required) -->

audienceGroupId

정보를 가져올 audience의 audience ID입니다.

<!-- parameter end -->

#### Response 

다음 정보를 담은 JSON 객체와 함께 `200` HTTP 상태 코드가 반환됩니다.

<!-- parameter start -->

audienceGroup

Object

Audience group 객체입니다.

<!-- parameter end -->
<!-- parameter start -->

audienceGroup.audienceGroupId

Number

Audience ID입니다.

<!-- parameter end -->
<!-- parameter start -->

audienceGroup.createRoute

String

Audience가 만들어진 경로입니다. 다음 중 하나입니다.

- `OA_MANAGER`: [LINE Official Account Manager](https://manager.line.biz/)로 만든 audience입니다.
- `MESSAGING_API`: Messaging API로 만든 audience입니다.
- `POINT_AD`: [LINE Points Ads](https://www.lycbiz.com/jp/service/line-point-ad/)로 만든 audience입니다(일본어만 제공).
- `AD_MANAGER`: [LINE Ads](https://admanager.line.biz/)로 만든 audience입니다.
- `BUSINESS_MANAGER`: [Business Manager](https://www.lycbiz.com/jp/service/business-manager/)로 만든 audience입니다.
- `YAHOO_DISPLAY_ADS`: [LY Ads Display Ads](https://www.lycbiz.jp/en/#advertising)로 만든 audience입니다.

<!-- parameter end -->
<!-- parameter start -->

audienceGroup.type

String

Audience의 유형입니다. 다음 중 하나입니다.

- `UPLOAD`: 사용자 ID 업로드용 audience입니다.
- `CLICK`: Message click audience입니다.
- `IMP`: Message impression audience입니다.
- `CHAT_TAG`: Chat tag audience입니다.
- `FRIEND_PATH`: Friend path audience입니다.
- `RESERVATION`: Reservation audience입니다.
- `RICHMENU_IMP`: Rich menu impression audience입니다.
- `RICHMENU_CLICK`: Rich menu click audience입니다.
- `APP_EVENT`: App event audience입니다.
- `VIDEO_VIEW`: Video view audience입니다.
- `WEBTRAFFIC`: Web traffic audience(LINE Tag)입니다.
- `TRACKINGTAG_WEBTRAFFIC`: Web traffic audience(Tracking Tag)입니다.
- `IMAGE_CLICK`: Image click audience입니다.
- `POP_AD_IMP`: LINE Beacon Network ad impression audience입니다.

자세한 내용은 LINE for Business의 [Audience](https://www.lycbiz.com/jp/manual/OfficialAccountManager/messages-audience/) 페이지를 참조하십시오. 이 페이지는 현재 영어로 제공되지 않습니다.

<!-- parameter end -->
<!-- parameter start -->

audienceGroup.description

String

Audience의 이름입니다.

<!-- parameter end -->
<!-- parameter start -->

audienceGroup.status

String

Audience의 상태입니다. 다음 중 하나입니다.

- `IN_PROGRESS`: 대기 중입니다. 상태가 `READY`로 바뀌기까지 몇 시간이 걸릴 수 있습니다. 사용자 수 제한이 있는 audience에 포함된 사용자 수가 부족한 경우(최소 50명 필요) 상태는 `IN_PROGRESS`로 남아 업데이트되지 않습니다.
- `READY`: 메시지를 받을 준비가 되었습니다(\*).
- `FAILED`: Audience를 만드는 중에 오류가 발생했습니다.
- `EXPIRED`: 만료되었습니다. Audience는 만료 후 한 달이 지나면 자동으로 삭제됩니다.
- `INACTIVE`: Audience가 비활성 상태입니다.
- `ACTIVATING`: Audience를 활성화하는 중입니다.

\* 사용자 ID 업로드용 audience의 경우, `audienceGroup.status`가 `READY`인 audience에 사용자 ID 또는 IFA를 추가해도 상태는 `READY`로 유지됩니다. 추가된 대상 수신자를 포함한 사용자에게 메시지를 보내려면 해당 작업의 `jobs[].jobStatus`가 `FINISHED`인지 확인하십시오.

<!-- parameter end -->
<!-- parameter start -->

audienceGroup.audienceCount

Number

Audience에 포함된 사용자 수입니다. 사용자의 개인정보를 보호하기 위해, 다음 유형의 audience를 제외하고 수가 20명 미만이면 0이 반환됩니다.

- 사용자 ID 업로드용 audience(수신자를 사용자 ID로 지정한 경우)
- Chat tag audience

Audience에는 이미 LINE Official Account를 차단한 사용자가 포함되어 있을 수 있으므로, `audienceGroup.audienceCount` 값과 메시지를 보내는 사용자 수는 다를 수 있습니다.

<!-- parameter end -->
<!-- parameter start -->

audienceGroup.created

Number

Audience가 만들어진 시각(UNIX time, 초 단위)입니다.

<!-- parameter end -->
<!-- parameter start -->

audienceGroup.permission

String

Audience의 업데이트 권한입니다. 현재 Messaging API 채널이 대상 audience를 업데이트할 수 있으면 `READ_WRITE`를, 업데이트할 수 없으면 `READ`를 반환합니다.

- `READ`: Audience를 사용할 수 있지만 업데이트할 수는 없습니다.
- `READ_WRITE`: Audience를 사용하고 업데이트할 수 있습니다.

<!-- parameter end -->
<!-- parameter start -->

audienceGroup.isIfaAudience

Boolean

사용자 ID 업로드용 audience를 만들 때 지정한, 전송 대상 계정의 유형을 나타내는 값입니다. 다음 중 하나입니다.

- `true`: IFA로 계정을 지정합니다.
- `false`(기본값): 사용자 ID로 계정을 지정합니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

audienceGroups\[].webtraffic

Object

[Web traffic 객체](https://developers.line.biz/en/reference/messaging-api/#get-shared-audience-response-webtraffic)입니다. `audienceGroups[].type`이 `WEBTRAFFIC` 또는 `TRACKINGTAG_WEBTRAFFIC`인 경우에만 포함됩니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

audienceGroup.requestId

String

Audience를 만들 때 지정한 request ID입니다. `audienceGroup.type`이 `CLICK` 또는 `IMP`인 경우에만 포함됩니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

audienceGroup.clickUrl

String

Audience를 만들 때 지정한 URL입니다. `audienceGroup.type`이 `CLICK`이고 링크 URL을 지정한 경우에만 포함됩니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

audienceGroup.failedType

String

작업이 실패한 이유입니다. `audienceGroup.status`가 `FAILED`인 경우에만 포함됩니다. 다음 중 하나입니다.

- `AUDIENCE_GROUP_AUDIENCE_INSUFFICIENT`: Audience에 포함된 사용자 수가 부족합니다(최소 50명 필요).
- `INTERNAL_ERROR`: 내부 서버 오류입니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

audienceGroup.activated

Number

Audience가 활성화된 시각입니다. [LINE Ads](https://admanager.line.biz/) 또는 [LINE Points Ads](https://www.lycbiz.com/jp/service/line-point-ad/)(일본어만 제공)로 만든 audience에 대해서만 반환됩니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

audienceGroup.inactivatedTimestamp

Number

Audience가 비활성화된 시각입니다. [LINE Ads](https://admanager.line.biz/) 또는 [LINE Points Ads](https://www.lycbiz.com/jp/service/line-point-ad/)(일본어만 제공)로 만든 audience에 대해서만 반환됩니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

audienceGroup.expireTimestamp

Number

Audience의 만료 시각(UNIX time, 초 단위)입니다. 특정 audience에 대해서만 반환됩니다.

<!-- parameter end -->
<!-- parameter start -->

jobs

Array

작업의 배열입니다. 이 배열은 사용자 ID 업로드용 audience에 새 사용자 ID 또는 IFA를 추가하려는 각 시도를 추적하는 데 사용됩니다. 그 밖의 유형의 audience에 대해서는 빈 배열이 반환됩니다.<br />최대: 50개

<!-- parameter end -->
<!-- parameter start -->

jobs\[].audienceGroupJobId

Number

작업 ID입니다.

<!-- parameter end -->
<!-- parameter start -->

jobs\[].audienceGroupId

Number

Audience ID입니다.

<!-- parameter end -->
<!-- parameter start -->

jobs\[].description

String

작업의 설명입니다. 사용자 ID 또는 IFA를 추가할 때 `uploadDescription` 속성에 값을 지정하지 않았다면 `null`이 반환됩니다.

<!-- parameter end -->
<!-- parameter start -->

jobs\[].type

String

작업의 유형입니다. 다음 중 하나입니다.

- `DIFF_ADD`: Messaging API를 통해 사용자 ID 또는 IFA를 추가했음을 나타냅니다.

<!-- parameter end -->
<!-- parameter start -->

jobs\[].status

String

이 속성은 deprecated되었습니다. 작업의 상태는 `jobs[].jobStatus`를 참조하십시오.

<!-- parameter end -->
<!-- parameter start -->

jobs\[].failedType

String

작업이 실패한 이유입니다. `jobs[].jobStatus`가 `FAILED`인 경우에만 포함됩니다. 다음 중 하나입니다.

- `AUDIENCE_GROUP_AUDIENCE_INSUFFICIENT`: Audience에 포함된 사용자 수가 부족합니다(최소 50명 필요).
- `INTERNAL_ERROR`: 내부 서버 오류입니다.

`jobs[].jobStatus`가 `FAILED`가 아니면 `null`이 반환됩니다.

<!-- parameter end -->
<!-- parameter start -->

jobs\[].audienceCount

Number

추가되거나 삭제된 계정(수신자)의 수입니다.

<!-- parameter end -->
<!-- parameter start -->

jobs\[].created

Number

작업이 만들어진 시각(UNIX time, 초 단위)입니다.

<!-- parameter end -->
<!-- parameter start -->

jobs\[].jobStatus

String

작업의 상태입니다. 다음 중 하나입니다.

- `QUEUED`: 실행 대기 중입니다.
- `WORKING`: 실행 중입니다.
- `FINISHED`: 완료되었습니다.
- `FAILED`: 실패했습니다.

상태가 `QUEUED` 또는 `WORKING`인 작업은 사용자 ID 또는 IFA를 추가하는 처리가 아직 완료되지 않았습니다. 추가된 대상 수신자를 포함한 사용자에게 메시지를 보내려면 해당 작업의 `jobs[].jobStatus`가 `FINISHED`인지 확인하십시오.

<!-- parameter end -->
<!-- parameter start -->

owner.serviceType

String

Audience를 만든 서비스의 이름입니다. 다음 중 하나입니다.

- `bm`: Business Manager
- `lap`: LINE Ads
- `account`: LINE Official Account
- `yda`: LY Ads

<!-- parameter end -->
<!-- parameter start -->

owner.id

String

Audience를 만든 계정의 ID입니다.

<!-- parameter end -->
<!-- parameter start -->

owner.name

String

Audience를 만든 계정의 이름입니다.

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

```json
// Example of a web traffic audience
{
  "audienceGroup": {
    "audienceGroupId": 1234567890123,
    "createRoute": "BUSINESS_MANAGER",
    "type": "WEBTRAFFIC",
    "description": "Web traffic audience",
    "status": "READY",
    "audienceCount": 0,
    "created": 1668179144,
    "permission": "READ",
    "isIfaAudience": true,
    "webtraffic": {
      "webtrafficIsMyTag": false,
      "webtrafficBmTagSharingStatus": "SHARED",
      "webtrafficIsTagDeleted": false,
      "webtrafficTagCreateRoute": "OA_MANAGER",
      "webtrafficVisitType": "VISIT_ALL",
      "webtrafficRetentionDays": 30,
      "webtrafficTagId": "01234567-8901-2345-6789-012345678901",
      "webtrafficConditionGroup": [],
      "webtrafficTagOwnerName": "LINE Developers (@linedevelopers)"
    }
  },
  "jobs": [],
  "owner": {
    "serviceType": "bm",
    "id": "0123456789ABCDEFGHIJKLMNOP",
    "name": "LINE Developers"
  }
}
```

<!-- tab end -->

##### Web traffic object 

Web traffic 객체는 webtraffic audience의 데이터를 나타냅니다.

<!-- parameter start -->

webtrafficIsMyTag

Boolean

- LINE Tag의 경우: 사용하는 Messaging API 채널에 연결된 LINE Official Account가 LINE Tag를 만들었으면 `true`를 반환합니다.
- Tracking Tag의 경우: 항상 `false`를 반환합니다.

<!-- parameter end -->
<!-- parameter start -->

webtrafficBmTagSharingStatus

String

Web traffic audience에 사용된 LINE Tag 또는 Tracking Tag의 Business Manager 공유 상태를 나타내는 값입니다.

LINE Tag의 경우 다음 중 하나입니다.

- `SHARED`: Business Manager에서 공유되었습니다.
- `UNSHARED`: Business Manager에서 공유되지 않았습니다.
- `ERROR`: 일시적인 오류로 인해 태그 세부 정보를 가져올 수 없습니다.

Tracking Tag의 경우 다음 중 하나입니다.

- `SHARED`: Tracking Tag를 만든 Business Manager의 조직이 LINE Official Account와 연결되어 있습니다.
- `UNSHARED`: Tracking Tag를 만든 Business Manager의 조직이 LINE Official Account와 연결되어 있지 않습니다.
- `ERROR`: 일시적인 오류로 인해 태그 세부 정보를 가져올 수 없습니다.

Business Manager 조직을 LINE Official Account와 연결하는 방법에 대한 자세한 내용은 LINE for Business의 [How to link a LINE Official Account to an organization](https://help.linebiz.com/lineadshelp/s/article/L000001362?language=ja)(일본어만 제공)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start -->

webtrafficIsTagDeleted

Boolean

- LINE Tag의 경우: 이 web traffic audience에서 사용한 LINE Tag가 이미 삭제되었으면 `true`를 반환합니다.
- Tracking Tag의 경우: 항상 `false`를 반환합니다.

<!-- parameter end -->
<!-- parameter start -->

webtrafficTagCreateRoute

String

Webtraffic audience를 만든 경로입니다. 다음 값 중 하나를 반환합니다.

- `OA_MANAGER`: [LINE Official Account Manager](https://manager.line.biz/)로 만든 audience입니다.
- `AD_MANAGER`: [LINE Ads](https://admanager.line.biz/)로 만든 audience입니다.
- `BUSINESS_MANAGER`: [Business Manager](https://www.lycbiz.com/jp/service/business-manager/)로 만든 audience입니다.

<!-- parameter end -->
<!-- parameter start -->

webtrafficVisitType

String

LINE Tag 또는 Tracking Tag의 매칭 방법입니다. 다음 중 하나입니다.

- `VISIT_ALL`: 방문한 모든 사용자
- `URL_MATCHING`: URL 조건
- `EVENT_MATCHING`: 이벤트 지정

<!-- parameter end -->
<!-- parameter start -->

webtrafficRetentionDays

String

Web traffic audience의 보관 기간입니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

webtrafficTagEventType

String

이벤트 코드의 유형입니다. `webtrafficVisitType`이 `EVENT_MATCHING`인 경우에만 포함됩니다. 다음 중 하나입니다.

- `CONVERSION_EVENT`: 전환 코드
- `CUSTOM_EVENT`: 커스텀 이벤트 코드

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

webtrafficCustomEventName

String

커스텀 이벤트 이름입니다. `webtrafficVisitType`이 `EVENT_MATCHING`이고 `webtrafficTagEventType`이 `CUSTOM_EVENT`인 경우에만 포함됩니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

webtrafficMatchingType

String

LINE Tag 또는 Tracking Tag의 이벤트 매칭 방법입니다. `webtrafficVisitType`이 `EVENT_MATCHING` 또는 `URL_MATCHING`인 경우에만 포함됩니다. 값은 항상 `NORMAL`입니다.

<!-- parameter end -->
<!-- parameter start -->

webtrafficConditionGroup

Array

매칭 조건의 배열입니다.

<!-- parameter end -->
<!-- parameter start -->

webtrafficConditionGroup\[].conditionType

String

`keywords` 배열의 키워드에 대한 매칭 조건입니다. 다음 중 하나입니다.

- `CONTAIN`: 키워드를 포함합니다.
- `NOT_CONTAIN`: 키워드를 포함하지 않습니다.
- `EQUAL_TO`: 키워드와 일치합니다.

<!-- parameter end -->
<!-- parameter start -->

webtrafficConditionGroup[].keywords[]

Array of strings

매칭 조건에 사용되는 키워드의 배열입니다.

<!-- parameter end -->
<!-- parameter start -->

webtrafficTagId

String

LINE Tag 또는 Tracking Tag의 태그 ID입니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

webtrafficTagOwnerName

String

LINE Tag를 발급한 계정의 이름입니다. Web traffic audience가 LINE Tag를 사용하는 경우에만 포함됩니다.

<!-- parameter end -->

_Example_

<!-- tab start `json` -->

```json
{
  "webtrafficIsMyTag": false,
  "webtrafficBmTagSharingStatus": "SHARED",
  "webtrafficIsTagDeleted": false,
  "webtrafficTagCreateRoute": "OA_MANAGER",
  "webtrafficVisitType": "VISIT_ALL",
  "webtrafficRetentionDays": 30,
  "webtrafficTagId": "01234567-8901-2345-6789-012345678901",
  "webtrafficConditionGroup": [],
  "webtrafficTagOwnerName": "LINE Developers (@linedevelopers)"
}
```

<!-- tab end -->

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code  | Description                           |
| ----- | ------------------------------------- |
| `400` | 존재하지 않는 audience를 지정했습니다. |

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Example error response_

<!-- tab start `json` -->

```json
// If you specify a non-existent audience (400 Bad Request)
{
  "message": "audience group not found",
  "details": [
    {
      "message": "AUDIENCE_GROUP_NOT_FOUND"
    }
  ]
}
```

<!-- tab end -->

### Get a list of shared audiences in Business Manager 

Endpoint: `GET` `https://api.line.me/v2/bot/audienceGroup/shared/list`

[Business Manager](https://www.lycbiz.com/jp/service/business-manager/)의 공유 audience 목록을 가져옵니다(일본어만 제공).

각 audience에 대한 더 자세한 정보는 [Get shared audience data in Business Manager](https://developers.line.biz/en/reference/messaging-api/#get-shared-audience) endpoint로 가져올 수 있습니다.

<!-- tip start -->

**About Business Manager**

Business Manager를 사용하면 특정 audience를 여러 서비스에서 공유할 수 있습니다. Business Manager에서 audience를 공유하면 최종 사용자와 더 효과적으로 소통할 수 있습니다.

자세한 내용은 LY for Business의 [Business Manager](https://www.lycbiz.com/jp/service/business-manager/)(일본어만 제공)를 참조하십시오.

<!-- tip end -->

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X GET https://api.line.me/v2/bot/audienceGroup/shared/list \
--data-urlencode 'page=1' \
--data-urlencode 'description=audienceGroupName' \
--data-urlencode 'size=40' \
--data-urlencode 'createRoute=OA_MANAGER' \
-G \
-H 'Authorization: Bearer {channel access token}'
```

<!-- tab end -->

#### Rate limit 

분당 60회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->

#### Query parameters 

<!-- parameter start (props: optional) -->

page

(페이지 단위로) 결과를 가져올 때 반환할 페이지입니다. `1` 이상이어야 합니다. 생략하면 1페이지를 가져옵니다.

모든 audience를 가져오려면 응답의 `audienceGroups` 배열 길이가 페이지 크기(`size`)보다 작아질 때까지 `page` 파라미터를 증가시키면서 요청을 반복하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

description

반환할 audience의 이름입니다. 부분 일치로 검색할 수 있습니다. 대소문자를 구분하지 않으므로 `AUDIENCE`와 `audience`는 같은 것으로 취급됩니다. 생략하면 audience의 이름은 검색 조건으로 사용되지 않습니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

status

반환할 audience의 상태입니다. 생략하면 audience의 상태는 검색 조건으로 사용되지 않습니다. 다음 중 하나입니다.

- `IN_PROGRESS`: 대기 중입니다.
- `READY`: 메시지를 받을 준비가 되었습니다.
- `FAILED`: Audience를 만드는 중에 오류가 발생했습니다.
- `EXPIRED`: 만료되었습니다. Audience는 만료 후 한 달이 지나면 자동으로 삭제됩니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

size

페이지당 audience 개수입니다. 기본값: `20` \
최대: `40`

<!-- parameter end -->
<!-- parameter start (props: optional) -->

createRoute

Audience가 만들어진 경로입니다. 생략하면 모든 audience가 포함됩니다.

- `OA_MANAGER`: [LINE Official Account Manager](https://manager.line.biz/)로 만든 audience만 반환합니다.
- `MESSAGING_API`: Messaging API로 만든 audience만 반환합니다.
- `POINT_AD`: [LINE Points Ads](https://www.lycbiz.com/jp/service/line-point-ad/)(일본어만 제공)로 만든 audience만 반환합니다.
- `AD_MANAGER`: [LINE Ads](https://admanager.line.biz/)로 만든 audience만 반환합니다.
- `BUSINESS_MANAGER`: [Business Manager](https://www.lycbiz.com/jp/service/business-manager/)로 만든 audience만 반환합니다.
- `YAHOO_DISPLAY_ADS`: [LY Ads Display Ads](https://www.lycbiz.jp/en/#advertising)로 만든 audience만 반환합니다.

여러 파라미터를 지정하면 OR 조건이 사용됩니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

includesOwnedAudienceGroups

Business Manager의 공유 audience 외에 LINE Official Account가 만든 audience도 포함할지 여부를 나타내는 설정입니다. 기본값은 `false`입니다.

- `true`: LINE Official Account가 만든 audience를 포함하여 가져옵니다.
- `false`: Business Manager의 공유 audience만 가져옵니다.

<!-- parameter end -->

#### Response 

다음 정보를 담은 JSON 객체와 함께 `200` HTTP 상태 코드가 반환됩니다.

<!-- parameter start -->

audienceGroups

Array

Audience 데이터의 배열입니다. 지정한 필터와 일치하는 audience가 없으면 빈 배열이 반환됩니다.

<!-- parameter end -->
<!-- parameter start -->

audienceGroups\[].audienceGroupId

Number

Audience ID입니다.

<!-- parameter end -->
<!-- parameter start -->

audienceGroups\[].createRoute

String

Audience가 만들어진 경로입니다. 다음 중 하나입니다.

- `OA_MANAGER`: [LINE Official Account Manager](https://manager.line.biz/)로 만든 audience입니다.
- `MESSAGING_API`: Messaging API로 만든 audience입니다.
- `POINT_AD`: [LINE Points Ads](https://www.lycbiz.com/jp/service/line-point-ad/)로 만든 audience입니다(일본어만 제공).
- `AD_MANAGER`: [LINE Ads](https://admanager.line.biz/)로 만든 audience입니다.
- `BUSINESS_MANAGER`: [Business Manager](https://www.lycbiz.com/jp/service/business-manager/)로 만든 audience입니다.
- `YAHOO_DISPLAY_ADS`: [LY Ads Display Ads](https://www.lycbiz.jp/en/#advertising)로 만든 audience입니다.

<!-- parameter end -->
<!-- parameter start -->

audienceGroups\[].type

String

Audience의 유형입니다. 다음 중 하나입니다.

- `UPLOAD`: 사용자 ID 업로드용 audience입니다.
- `CLICK`: Message click audience입니다.
- `IMP`: Message impression audience입니다.
- `CHAT_TAG`: Chat tag audience입니다.
- `FRIEND_PATH`: Friend path audience입니다.
- `RESERVATION`: Reservation audience입니다.
- `RICHMENU_IMP`: Rich menu impression audience입니다.
- `RICHMENU_CLICK`: Rich menu click audience입니다.
- `APP_EVENT`: App event audience입니다.
- `VIDEO_VIEW`: Video view audience입니다.
- `WEBTRAFFIC`: Web traffic audience(LINE Tag)입니다.
- `TRACKINGTAG_WEBTRAFFIC`: Web traffic audience(Tracking Tag)입니다.
- `IMAGE_CLICK`: Image click audience입니다.
- `POP_AD_IMP`: LINE Beacon Network ad impression audience입니다.

자세한 내용은 LINE for Business의 [Audience](https://www.lycbiz.com/jp/manual/OfficialAccountManager/messages-audience/)(일본어만 제공)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start -->

audienceGroups\[].description

String

Audience의 이름입니다.

<!-- parameter end -->
<!-- parameter start -->

audienceGroups\[].status

String

Audience의 상태입니다. 다음 중 하나입니다.

- `IN_PROGRESS`: 대기 중입니다. 상태가 `READY`로 바뀌기까지 몇 시간이 걸릴 수 있습니다. 사용자 수 제한이 있는 audience에 포함된 사용자 수가 부족한 경우(최소 50명 필요) 상태는 `IN_PROGRESS`로 남아 업데이트되지 않습니다.
- `READY`: 메시지를 받을 준비가 되었습니다.
- `FAILED`: Audience를 만드는 중에 오류가 발생했습니다.
- `EXPIRED`: 만료되었습니다. Audience는 만료 후 한 달이 지나면 자동으로 삭제됩니다.
- `INACTIVE`: Audience가 비활성 상태입니다.
- `ACTIVATING`: Audience를 활성화하는 중입니다.

<!-- parameter end -->
<!-- parameter start -->

audienceGroups\[].audienceCount

Number

Audience에 포함된 사용자 수입니다. 사용자의 개인정보를 보호하기 위해, 다음 유형의 audience를 제외하고 수가 20명 미만이면 0이 반환됩니다.

- 사용자 ID 업로드용 audience(수신자를 사용자 ID로 지정한 경우)
- Chat tag audience

Audience에는 이미 LINE Official Account를 차단한 사용자가 포함되어 있을 수 있으므로, `audienceGroups[].audienceCount` 값과 메시지를 보내는 사용자 수는 다를 수 있습니다.

<!-- parameter end -->
<!-- parameter start -->

audienceGroups\[].created

Number

Audience가 만들어진 시각(UNIX time, 초 단위)입니다.

<!-- parameter end -->
<!-- parameter start -->

audienceGroups\[].permission

String

Audience의 업데이트 권한입니다. 현재 Messaging API 채널이 대상 audience를 업데이트할 수 있으면 `READ_WRITE`를, 업데이트할 수 없으면 `READ`를 반환합니다.

- `READ`: Audience를 사용할 수 있지만 업데이트할 수는 없습니다.
- `READ_WRITE`: Audience를 사용하고 업데이트할 수 있습니다.

<!-- parameter end -->
<!-- parameter start -->

audienceGroups\[].isIfaAudience

Boolean

사용자 ID 업로드용 audience를 만들 때 지정한, 전송 대상 계정의 유형을 나타내는 값입니다. 다음 중 하나입니다.

- `true`: IFA로 계정을 지정합니다.
- `false`(기본값): 사용자 ID로 계정을 지정합니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

audienceGroups\[].activated

Number

Audience가 활성화된 시각입니다. [LINE Ads](https://admanager.line.biz/) 또는 [LINE Points Ads](https://www.lycbiz.com/jp/service/line-point-ad/)(일본어만 제공)로 만든 audience에 대해서만 반환됩니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

audienceGroups\[].inactivatedTimestamp

Number

Audience가 비활성화된 시각입니다. [LINE Ads](https://admanager.line.biz/) 또는 [LINE Points Ads](https://www.lycbiz.com/jp/service/line-point-ad/)(일본어만 제공)로 만든 audience에 대해서만 반환됩니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

audienceGroups\[].expireTimestamp

Number

Audience의 만료 시각(UNIX time, 초 단위)입니다. 특정 audience에 대해서만 반환됩니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

audienceGroups\[].webtraffic

Object

[Web traffic 객체](https://developers.line.biz/en/reference/messaging-api/#get-shared-audience-list-response-webtraffic)입니다. `audienceGroups[].type`이 `WEBTRAFFIC` 또는 `TRACKINGTAG_WEBTRAFFIC`인 경우에만 포함됩니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

audienceGroups\[].requestId

String

Audience를 만들 때 지정한 request ID입니다. `audienceGroups[].type`이 `CLICK` 또는 `IMP`인 경우에만 포함됩니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

audienceGroups\[].clickUrl

String

Audience를 만들 때 지정한 URL입니다. `audienceGroups[].type`이 `CLICK`이고 링크 URL을 지정한 경우에만 포함됩니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

audienceGroups\[].failedType

String

작업이 실패한 이유입니다. `audienceGroups[].status`가 `FAILED` 또는 `EXPIRED`인 경우에만 포함됩니다. 다음 중 하나입니다.

- `AUDIENCE_GROUP_AUDIENCE_INSUFFICIENT`: Audience에 포함된 사용자 수가 부족합니다(최소 50명 필요).
- `INTERNAL_ERROR`: 내부 서버 오류입니다.

<!-- parameter end -->
<!-- parameter start -->

hasNextPage

Boolean

마지막 페이지가 아닌 경우 `true`입니다.

<!-- parameter end -->
<!-- parameter start -->

totalCount

Number

지정한 필터로 반환될 수 있는 audience의 총 개수입니다.

<!-- parameter end -->
<!-- parameter start -->

readWriteAudienceGroupTotalCount

Number

지정한 필터로 가져올 수 있는 audience 중 업데이트 권한(`audienceGroups[].permission`)이 `READ_WRITE`인 audience의 수입니다.

<!-- parameter end -->
<!-- parameter start -->

page

Number

현재 페이지 번호입니다.

<!-- parameter end -->
<!-- parameter start -->

size

Number

현재 페이지의 최대 audience 개수입니다.

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

```json
// Example of when there are two audiences that match the specified filter
{
  "audienceGroups": [
    {
      "audienceGroupId": 1234567890123,
      "createRoute": "BUSINESS_MANAGER",
      "type": "WEBTRAFFIC",
      "description": "Web traffic audience",
      "status": "READY",
      "audienceCount": 4871,
      "created": 1668179144,
      "permission": "READ",
      "isIfaAudience": true,
      "webtraffic": {
        "webtrafficIsMyTag": false,
        "webtrafficBmTagSharingStatus": "SHARED",
        "webtrafficIsTagDeleted": false,
        "webtrafficTagCreateRoute": "OA_MANAGER"
      }
    },
    {
      "audienceGroupId": 3210987654321,
      "createRoute": "AD_MANAGER",
      "type": "IMAGE_CLICK",
      "description": "Image click audience",
      "status": "IN_PROGRESS",
      "audienceCount": 2234,
      "created": 1718895503,
      "permission": "READ",
      "isIfaAudience": true
    }
  ],
  "hasNextPage": false,
  "totalCount": 2,
  "readWriteAudienceGroupTotalCount": 0,
  "size": 40,
  "page": 1
}

// Example of when there is no audience that matches the specified filter
{
    "audienceGroups": [],
    "hasNextPage": false,
    "totalCount": 0,
    "readWriteAudienceGroupTotalCount": 0,
    "size": 40,
    "page": 1
}
```

<!-- tab end -->

##### Web traffic object 

Web traffic 객체는 webtraffic audience의 데이터를 나타냅니다.

<!-- parameter start -->

webtrafficIsMyTag

Boolean

- LINE Tag의 경우: 사용하는 Messaging API 채널에 연결된 LINE Official Account가 LINE Tag를 만들었으면 `true`를 반환합니다.
- Tracking Tag의 경우: 항상 `false`를 반환합니다.

<!-- parameter end -->
<!-- parameter start -->

webtrafficBmTagSharingStatus

String

Web traffic audience에 사용된 LINE Tag 또는 Tracking Tag의 Business Manager 공유 상태를 나타내는 값입니다.

LINE Tag의 경우 다음 중 하나입니다.

- `SHARED`: Business Manager에서 공유되었습니다.
- `UNSHARED`: Business Manager에서 공유되지 않았습니다.
- `ERROR`: 일시적인 오류로 인해 태그 세부 정보를 가져올 수 없습니다.

Tracking Tag의 경우 다음 중 하나입니다.

- `SHARED`: Tracking Tag를 만든 Business Manager의 조직이 LINE Official Account와 연결되어 있습니다.
- `UNSHARED`: Tracking Tag를 만든 Business Manager의 조직이 LINE Official Account와 연결되어 있지 않습니다.
- `ERROR`: 일시적인 오류로 인해 태그 세부 정보를 가져올 수 없습니다.

Business Manager 조직을 LINE Official Account와 연결하는 방법에 대한 자세한 내용은 LINE for Business의 [How to link a LINE Official Account to an organization](https://help.linebiz.com/lineadshelp/s/article/L000001362?language=ja)(일본어만 제공)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start -->

webtrafficIsTagDeleted

Boolean

- LINE Tag의 경우: 이 web traffic audience에서 사용한 LINE Tag가 이미 삭제되었으면 `true`를 반환합니다.
- Tracking Tag의 경우: 항상 `false`를 반환합니다.

<!-- parameter end -->
<!-- parameter start -->

webtrafficTagCreateRoute

String

Webtraffic audience를 만든 경로입니다. 다음 값 중 하나를 반환합니다.

- `OA_MANAGER`: [LINE Official Account Manager](https://manager.line.biz/)로 만든 audience입니다.
- `AD_MANAGER`: [LINE Ads](https://admanager.line.biz/)로 만든 audience입니다.
- `BUSINESS_MANAGER`: [Business Manager](https://www.lycbiz.com/jp/service/business-manager/)로 만든 audience입니다.

<!-- parameter end -->

_Example_

<!-- tab start `json` -->

```json
{
  "webtrafficIsMyTag": false,
  "webtrafficBmTagSharingStatus": "UNSHARED",
  "webtrafficIsTagDeleted": false,
  "webtrafficTagCreateRoute": "BUSINESS_MANAGER"
}
```

<!-- tab end -->

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code  | Description                              |
| ----- | ---------------------------------------- |
| `400` | 잘못된 쿼리 파라미터를 지정했습니다. |

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Example error response_

<!-- tab start `json` -->

```json
// If you specify an invalid query parameter (400 Bad Request)
{
  "message": "size: must be less than or equal to 40",
  "details": [
    {
      "message": "TOO_HIGH"
    }
  ]
}
```

<!-- tab end -->

## Insights 

Messaging API로 LINE Official Account에서 보낸 메시지 수, 친구 수 및 그 밖의 통계 데이터를 가져올 수 있습니다.

### Get number of message deliveries 

Endpoint: `GET` `https://api.line.me/v2/bot/insight/message/delivery?date={date}`

`date`에 지정한 날짜에 LINE Official Account에서 보낸 메시지 수를 반환합니다.

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X GET 'https://api.line.me/v2/bot/insight/message/delivery?date=20190418' \
-H 'Authorization: Bearer {channel access token}'
```

<!-- tab end -->

#### Rate limit 

시간당 60회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->

#### Query parameters 

<!-- parameter start (props: required) -->

date

메시지 발송 수를 가져올 날짜입니다.

- 형식: `yyyyMMdd` (예: `20191231`)
- 시간대: UTC+9

<!-- parameter end -->

#### Response 

`200` 상태 코드와 다음 속성을 가진 JSON 객체가 반환됩니다.

<!-- parameter start -->

status

String

집계 처리 상태입니다. 다음 중 하나입니다.

- `ready`: 계산이 완료되었으며 수치가 최신 상태입니다.
- `unready`: 지정한 `date`의 발송 메시지 수 계산이 아직 끝나지 않았습니다. 나중에 다시 시도하십시오. 계산은 보통 하루 정도 걸립니다.
- `out_of_service`: 지정한 `date`가 발송 메시지 계산을 처음 시작한 날짜(2017년 3월 1일)보다 이전입니다.

`broadcast` 속성 이후의 속성은 `state` 속성이 `ready`인 경우에만 포함됩니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

broadcast

Number

LINE Official Account Manager에서 수신자로 **All Friends**를 선택하여 보낸 메시지 수입니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

targeting

Number

LINE Official Account Manager에서 수신자로 **Targeting**을 선택하여 보낸 메시지 수입니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

stepMessage

Number

LINE Official Account Manager에서 스텝 메시지로 보낸 메시지 수입니다.

자세한 내용은 LINE for Business의 [Step messages](https://www.linebiz.com/jp/manual/OfficialAccountManager/step-message/)(일본어만 제공)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

autoResponse

Number

사용자로부터 메시지를 받았을 때 자동으로 보낸 자동 응답 메시지의 수입니다.

자세한 내용은 LINE for Business의 [Auto-response messages](https://www.lycbiz.com/jp/manual/OfficialAccountManager/Auto-response-messages/)(일본어만 제공)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

welcomeResponse

Number

사용자가 LINE Official Account를 친구로 추가했을 때 자동으로 보낸 인사 메시지의 수입니다.

자세한 내용은 LINE for Business의 [Set greeting messages](https://www.lycbiz.com/jp/manual/OfficialAccountManager/greeting-message/)(일본어만 제공)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

chat

Number

LINE Official Account Manager [채팅 화면](https://www.lycbiz.com/jp/manual/OfficialAccountManager/chats/)에서 보낸 메시지의 수입니다(일본어만 제공).

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

apiBroadcast

Number

[Send broadcast message](https://developers.line.biz/en/reference/messaging-api/#send-broadcast-message) endpoint로 보낸 메시지의 수입니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

apiPush

Number

[Send push message](https://developers.line.biz/en/reference/messaging-api/#send-push-message) endpoint로 보낸 메시지의 수입니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

apiMulticast

Number

[Send multicast message](https://developers.line.biz/en/reference/messaging-api/#send-multicast-message) endpoint로 보낸 메시지의 수입니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

apiNarrowcast

Number

[Send narrowcast message](https://developers.line.biz/en/reference/messaging-api/#send-narrowcast-message) endpoint로 보낸 메시지의 수입니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

apiReply

Number

[Send reply message](https://developers.line.biz/en/reference/messaging-api/#send-reply-message) endpoint로 보낸 메시지의 수입니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

ccAutoReply

Number

LINE Chat Plus의 자동 응답으로 보낸 메시지의 수입니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

ccManualReply

Number

LINE Chat Plus의 수동 채팅 지원으로 보낸 메시지의 수입니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

pnpNoticeMessage

Number

법인 고객 옵션의 [LINE notification messages](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/overview/)로 보낸 메시지의 수입니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

pnpCallToLine

Number

Call to LINE으로 보낸 메시지의 수입니다. \*

\* Call to LINE의 신규 등록은 중단되었습니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

thirdPartyChatTool

Number

타사 채팅 도구에서 보낸 메시지의 수입니다.

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

```json
// If the calculation has finished
{
  "status": "ready",
  "broadcast": 5385,
  "targeting": 522
}

// if the calculation hasn't finished yet
{
  "status": "unready"
}
```

<!-- tab end -->

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code  | Description                   |
| ----- | ----------------------------- |
| `400` | 잘못된 날짜를 지정했습니다. |

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Example error response_

<!-- tab start `json` -->

```json
// If you specify an invalid date (400 Bad Request)
{
  "message": "Bad Request"
}
```

<!-- tab end -->

### Get number of followers 

Endpoint: `GET` `https://api.line.me/v2/bot/insight/followers?date={date}`

지정한 날짜 이전 또는 당일에 LINE Official Account를 친구로 추가한 사용자 수를 반환합니다.

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X GET 'https://api.line.me/v2/bot/insight/followers?date=20190418' \
-H 'Authorization: Bearer {channel access token}'
```

<!-- tab end -->

#### Rate limit 

시간당 60회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->

#### Query parameters 

<!-- parameter start (props: required) -->

date

친구 수를 가져올 날짜입니다.

- 형식: `yyyyMMdd` (예: `20191231`)
- 시간대: UTC+9

<!-- parameter end -->

#### Response 

`200` 상태 코드와 다음 속성을 가진 JSON 객체가 반환됩니다.

<!-- parameter start -->

status

String

계산 상태입니다. 다음 중 하나입니다.

- `ready`: 계산이 완료되었습니다. 수치가 최신 상태입니다.
- `unready`: 지정한 `date`의 친구 수 계산이 아직 끝나지 않았습니다. 나중에 다시 시도하십시오. 계산은 보통 하루 정도 걸립니다.
- `out_of_service`: 지정한 `date`가 친구 수 계산을 처음 시작한 날짜(2016년 11월 1일)보다 이전입니다.

<!-- parameter end -->
<!-- parameter start -->

followers

Number

지정한 `date`까지 사용자가 이 LINE Official Account를 처음으로 친구 추가한 횟수입니다. 이후 사용자가 차단하거나 LINE 계정을 삭제하더라도 이 수는 줄어들지 않습니다.

`status` 속성이 `ready`가 아니면 이 값은 `null`입니다.

<!-- parameter end -->
<!-- parameter start -->

targetedReaches

Number

지정한 `date` 기준으로, 성별, 나이, 지역에 기반한 타깃 메시지로 이 LINE Official Account가 도달할 수 있는 사용자 수입니다. 이 수에는 LINE 또는 LINE 서비스에서 활동하고 인구통계 정보의 확실성이 높은 사용자만 포함됩니다.

`status` 속성이 `ready`가 아니면 이 값은 `null`입니다.

<!-- parameter end -->
<!-- parameter start -->

blocks

Number

지정한 `date` 기준으로 이 LINE Official Account를 차단한 사용자 수입니다. 사용자가 차단을 해제하면 이 수는 줄어듭니다.

`status` 속성이 `ready`가 아니면 이 값은 `null`입니다.

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

```json
// If the calculation has finished
{
  "status": "ready",
  "followers": 7620,
  "targetedReaches": 5848,
  "blocks": 237
}

// if the calculation hasn't finished yet
{
  "status": "unready",
  "followers": null,
  "targetedReaches": null,
  "blocks": null
}
```

<!-- tab end -->

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code | Description |
| --- | --- |
| `400` | 날짜를 지정하지 않았거나 잘못된 날짜를 지정했습니다. |

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Example error response_

<!-- tab start `json` -->

```json
// If you don't specify a date (400 Bad Request)
{
  "message": "date is required"
}

// If you specify an invalid date (400 Bad Request)
{
  "message": "Bad Request"
}
```

<!-- tab end -->

### Get friend demographics 

Endpoint: `GET` `https://api.line.me/v2/bot/insight/demographic`

LINE Official Account 친구의 인구통계 정보를 가져옵니다. 인구통계 정보를 가져오려면 다음 조건을 모두 충족해야 합니다.

- Target reach가 20명 이상이어야 합니다.
- LINE Official Account가 일본(JP), 태국(TH) 또는 대만(TW)의 사용자가 만든 것이어야 합니다.

<!-- note start -->

**Not real-time data**

친구 인구통계 정보가 반영되는 데 약 3일이 걸립니다. 따라서 가져올 수 있는 정보는 약 3일 전의 정보입니다. 시점은 달라질 수 있습니다.

<!-- note end -->

<!-- tip start -->

**About friend demographic information**

친구 인구통계 정보는 LINE 패밀리 서비스에 LINE 사용자가 등록한 성별, 나이, 지역 정보와 행동 이력을 기반으로 한 "추정 속성(deemed attributes)"으로 분류됩니다. 통신사와 운영체제는 추정 속성에 포함되지 않습니다.

추정 속성은 LINE에서 구매하고 사용한 스티커, 관심 있는 콘텐츠, 사용자가 친구로 추가한 LINE Official Account의 유형 등의 추세를 기반으로 분류됩니다. 전화번호, 이메일 주소, 주소록, 채팅 내용과 같은 민감한 정보는 분류의 근거로 사용되지 않습니다.

친구 인구통계 정보의 추정은 통계적이며 특정 개인을 식별하지 않습니다. 특정 개인을 식별할 수 있는 정보는 제3자(예: 광고주)와 공유되지 않습니다.

<!-- tip end -->

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X GET https://api.line.me/v2/bot/insight/demographic \
-H 'Authorization: Bearer {channel access token}'
```

<!-- tab end -->

#### Rate limit 

시간당 60회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->

#### Response 

`200` 상태 코드와 다음 속성을 가진 JSON 객체가 반환됩니다.

<!-- parameter start -->

available

Boolean

- `true`: 친구 인구통계 정보를 사용할 수 있습니다.
- `false`: 친구 인구통계 정보를 사용할 수 없습니다. 다음 원인을 확인하십시오.
  - Target reach가 20명 미만입니다.
  - LINE Official Account가 일본(JP), 태국(TH) 또는 대만(TW)의 사용자가 만든 것이 아닙니다.

응답의 각 배열(`genders`, `ages`, `areas`, `appTypes`, `subscriptionPeriods`)의 요소는 `available` 값이 `true`인 경우에만 응답에 포함됩니다.

<!-- parameter end -->
<!-- parameter start -->

genders

Array

성별별 비율입니다. 친구 인구통계 정보를 사용할 수 없으면 빈 배열이 반환됩니다.

<!-- parameter end -->
<!-- parameter start -->

genders\[].gender

String

사용자의 성별에 따라 다음 값이 반환됩니다.

- `male`
- `female`
- `unknown`

<!-- parameter end -->
<!-- parameter start -->

genders\[].percentage

Number

비율입니다.

<!-- parameter end -->
<!-- parameter start -->

ages

Array

나이 그룹별 비율입니다. 친구 인구통계 정보를 사용할 수 없으면 빈 배열이 반환됩니다.

<!-- parameter end -->
<!-- parameter start -->

ages\[].age

String

사용자의 나이에 따라 다음 값이 반환됩니다.

<!-- note start -->

**When you are using a Thai LINE Official Account**

태국 LINE Official Account의 인구통계 정보를 가져오면 `ages[].age` 값이 `from0to14` 및 `from15to19`인 비율은 응답에 포함되지 않습니다. 20세 미만 사용자는 `unknown`으로 집계됩니다.

<!-- note end -->

- `from0to14`
- `from15to19`
- `from20to24`
- `from25to29`
- `from30to34`
- `from35to39`
- `from40to44`
- `from45to49`
- `from50`
  - 2024년 9월 5일부터 [50세에서 70세 사이 친구의 비율을 가져올 수 있습니다](https://developers.line.biz/en/news/2024/09/05/age-percentage-subdivision/).
- `from50to54`
- `from55to59`
- `from60to64`
- `from65to69`
- `from70`
- `unknown`

<!-- parameter end -->
<!-- parameter start -->

ages\[].percentage

Number

비율입니다.

<!-- parameter end -->
<!-- parameter start -->

areas

Array

지역별 비율입니다. 친구 인구통계 정보를 사용할 수 없으면 빈 배열이 반환됩니다.

<!-- parameter end -->
<!-- parameter start -->

areas\[].area

String

사용자의 국가와 지역에 따라 다음 값이 반환됩니다. \
**JP**

- `北海道` (Hokkaido)
- `青森` (Aomori)
- `岩手` (Iwate)
- `宮城` (Miyagi)
- `秋田` (Akita)
- `山形` (Yamagata)
- `福島` (Fukushima)
- `茨城` (Ibaraki)
- `栃木` (Tochigi)
- `群馬` (Gunma)
- `埼玉` (Saitama)
- `千葉` (Chiba)
- `東京` (Tokyo)
- `神奈川` (Kanagawa)
- `新潟` (Niigata)
- `富山` (Toyama)
- `石川` (Ishikawa)
- `福井` (Fukui)
- `山梨` (Yamanashi)
- `長野` (Nagano)
- `岐阜` (Gifu)
- `静岡` (Shizuoka)
- `愛知` (Aichi)
- `三重` (Mie)
- `滋賀` (Shiga)
- `京都` (Kyoto)
- `大阪` (Osaka)
- `兵庫` (Hyogo)
- `奈良` (Nara)
- `和歌山` (Wakayama)
- `鳥取` (Tottori)
- `島根` (Shimane)
- `岡山` (Okayama)
- `広島` (Hiroshima)
- `山口` (Yamaguchi)
- `徳島` (Tokushima)
- `香川` (Kagawa)
- `愛媛` (Ehime)
- `高知` (Kochi)
- `福岡` (Fukuoka)
- `佐賀` (Saga)
- `長崎` (Nagasaki)
- `熊本` (Kumamoto)
- `大分` (Oita)
- `宮崎` (Miyazaki)
- `鹿児島` (Kagoshima)
- `沖縄` (Okinawa)
- `unknown`

**TW**

- `台北市` (Taipei City)
- `新北市` (New Taipei City)
- `桃園市` (Taoyuan City)
- `台中市` (Taichung)
- `台南市` (Tainan City)
- `高雄市` (Kaohsiung)
- `基隆市` (Keelung)
- `新竹市` (Hsinchu City)
- `嘉義市` (Chiayi City)
- `新竹縣` (Hisnchu County)
- `苗栗縣` (Miaoli County)
- `彰化縣` (Changhua County)
- `南投縣` (Nantou County)
- `雲林縣` (Yunlin County)
- `嘉義縣` (Chiayi County)
- `屏東縣` (Pingtung County)
- `宜蘭縣` (Yilan County)
- `花蓮縣` (Hualien County)
- `台東縣` (Taitung County)
- `澎湖縣` (Penghu County)
- `金門縣` (Kinmen County)
- `連江縣` (Lianjiang County)
- `unknown`

**TH**

- `Bangkok`
- `Pattaya`
- `Northern`
- `Central`
- `Southern`
- `Eastern`
- `NorthEastern`
- `Western`
- `unknown`

<!-- parameter end -->
<!-- parameter start -->

areas\[].percentage

Number

비율입니다.

<!-- parameter end -->
<!-- parameter start -->

appTypes

Array

OS별 비율입니다. 친구 인구통계 정보를 사용할 수 없으면 빈 배열이 반환됩니다.

<!-- parameter end -->
<!-- parameter start -->

appTypes\[].appType

String

사용자의 OS에 따라 다음 값이 반환됩니다.

- `ios`
- `android`
- `others`

<!-- parameter end -->
<!-- parameter start -->

appTypes\[].percentage

Number

비율입니다.

<!-- parameter end -->
<!-- parameter start -->

subscriptionPeriods

Array

친구 관계 기간별 비율입니다. 친구 인구통계 정보를 사용할 수 없으면 빈 배열이 반환됩니다.

<!-- parameter end -->
<!-- parameter start -->

subscriptionPeriods\[].subscriptionPeriod

String

친구 관계 기간에 대해 다음 값이 반환됩니다. "친구 관계 기간"은 사용자가 LINE Official Account를 친구로 추가한 다음 날부터 계산한 기간으로 정의됩니다.

- `within7days`: 7일 미만
- `within30days`: 7일 이상 30일 미만
- `within90days`: 30일 이상 90일 미만
- `within180days`: 90일 이상 180일 미만
- `within365days`: 180일 이상 365일 미만
- `over365days`: 365일 이상
- `unknown`: 알 수 없음

<!-- parameter end -->
<!-- parameter start -->

subscriptionPeriods\[].percentage

Number

각 `subscriptionPeriod` 값에 해당하는 사용자의 비율입니다.

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

```json
// If the friend demographic information isn't available because the target reach is lower than 20
{
  "available": false,
  "genders": [],
  "ages": [],
  "areas": [],
  "appTypes": [],
  "subscriptionPeriods": []
}

// If the friend demographic information is available because the target reach is 20 or higher
{
    "available": true,
    "genders": [
        {
            "gender": "unknown",
            "percentage": 37.6
        },
        {
            "gender": "male",
            "percentage": 31.8
        },
        {
            "gender": "female",
            "percentage": 30.6
        }
    ],
    "ages": [
        {
            "age": "unknown",
            "percentage": 37.6
        },
        {
            "age": "from50",
            "percentage": 17.3
        },
        ...
    ],
    "areas": [
        {
            "area": "unknown",
            "percentage": 42.9
        },
        {
            "area": "徳島",
            "percentage": 2.9
        },
        ...
    ],
    "appTypes": [
        {
            "appType": "ios",
            "percentage": 62.4
        },
        {
            "appType": "android",
            "percentage": 27.7
        },
        {
            "appType": "others",
            "percentage": 9.9
        }
    ],
    "subscriptionPeriods": [
        {
            "subscriptionPeriod": "over365days",
            "percentage": 96.4
        },
        {
            "subscriptionPeriod": "within365days",
            "percentage": 1.9
        },
        {
            "subscriptionPeriod": "within180days",
            "percentage": 1.2
        },
        {
            "subscriptionPeriod": "within90days",
            "percentage": 0.5
        },
        {
            "subscriptionPeriod": "within30days",
            "percentage": 0.1
        },
        {
            "subscriptionPeriod": "within7days",
            "percentage": 0
        }
    ]
}
```

<!-- tab end -->

#### Error response 

[Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

### Get user interaction statistics 

Endpoint: `GET` `https://api.line.me/v2/bot/insight/message/event?requestId={requestId}`

LINE Official Account에서 보낸 narrowcast 메시지 또는 broadcast 메시지에 대해 사용자가 어떻게 반응했는지에 대한 통계를 반환합니다.

메시지 단위 또는 말풍선 단위로 통계를 가져올 수 있습니다.

![message and bubbles](https://developers.line.biz/media/messaging-api/get-message-event.webp)

<!-- note start -->

**On the recorded statistics recorded**

통계는 메시지를 보낸 시점부터 14일(1,209,600초) 동안에만 업데이트됩니다. 그 이후에는 통계가 업데이트되지 않습니다.

예를 들어 2021년 2월 1일 15:00에 메시지를 보냈다면, 통계는 2021년 2월 15일 15:00까지 업데이트됩니다.

<!-- note end -->

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X GET 'https://api.line.me/v2/bot/insight/message/event?requestId=f70dd685-499a-4231-a441-f24b8d4fba21' \
-H 'Authorization: Bearer {channel access token}'
```

<!-- tab end -->

#### Rate limit 

시간당 60회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->

#### Query parameters 

<!-- parameter start (props: required) -->

requestId

Narrowcast 메시지 또는 broadcast 메시지의 request ID입니다. Messaging API 요청마다 request ID가 있습니다. [response headers](https://developers.line.biz/en/reference/messaging-api/#response-headers)에서 확인할 수 있습니다.

<!-- parameter end -->

#### Response 

`200` 상태 코드와 다음 속성을 가진 JSON 객체가 반환됩니다.

<!-- note start -->

**Note**

통계 데이터에는 일부 오류가 포함될 수 있습니다.

사용자의 개인정보를 보호하기 위해 다음 경우에는 사용자 상호작용과 관련된 일부 속성 값이 `null`로 표시됩니다.

- 속성 값이 20 미만인 경우
- 속성 값이 20 이상이더라도 이벤트를 발생시킨 실제 사용자 수가 20 미만인 경우(예: `messages[].mediaPlayed`가 30이지만 `messages[].uniqueMediaPlayed`가 15이면 두 값 모두 `null`로 표시됩니다.

<!-- note end -->

<!-- parameter start -->

overview

Object

메시지 통계의 요약입니다.

<!-- parameter end -->
<!-- parameter start -->

overview.requestId

String

Request ID입니다.

<!-- parameter end -->
<!-- parameter start -->

overview.timestamp

Number

메시지 전달 시각(UNIX time, 초 단위)입니다.

<!-- parameter end -->
<!-- parameter start -->

overview.delivered

Number

전달된 메시지 수입니다. 이 속성은 20 미만의 값을 표시합니다. 다만 모든 메시지가 전송되지 않은 경우에는 null입니다.

<!-- parameter end -->
<!-- parameter start -->

overview.uniqueImpression

Number

메시지를 열어 말풍선을 최소 1개 표시한 사용자 수입니다.

<!-- parameter end -->
<!-- parameter start -->

overview.uniqueClick

Number

메시지에 있는 URL 중 하나라도 연 사용자 수입니다.

<!-- parameter end -->
<!-- parameter start -->

overview.uniqueMediaPlayed

Number

메시지에 있는 동영상 또는 오디오 중 하나라도 재생을 시작한 사용자 수입니다.

<!-- parameter end -->
<!-- parameter start -->

overview.uniqueMediaPlayed100Percent

Number

메시지에 있는 동영상 또는 오디오 중 하나를 끝까지 재생한 사용자 수입니다.

<!-- parameter end -->
<!-- parameter start -->

messages

Array

개별 메시지 말풍선에 대한 정보의 배열입니다. 통계를 사용할 수 없으면 빈 배열이 반환됩니다.

<!-- parameter end -->
<!-- parameter start -->

messages\[].seq

Number

말풍선의 일련번호입니다.

<!-- parameter end -->
<!-- parameter start -->

messages\[].impression

Number

말풍선이 표시된 횟수입니다.

<!-- parameter end -->
<!-- parameter start -->

messages\[].mediaPlayed

Number

말풍선의 오디오 또는 동영상이 재생을 시작한 횟수입니다. 동영상이 자동 재생된 횟수도 포함됩니다.

<!-- parameter end -->
<!-- parameter start -->

messages\[].mediaPlayed25Percent

Number

말풍선의 오디오 또는 동영상이 재생을 시작하여 전체 시간의 25%까지 재생된 횟수입니다.

<!-- parameter end -->
<!-- parameter start -->

messages\[].mediaPlayed50Percent

Number

말풍선의 오디오 또는 동영상이 재생을 시작하여 전체 시간의 50%까지 재생된 횟수입니다.

<!-- parameter end -->
<!-- parameter start -->

messages\[].mediaPlayed75Percent

Number

말풍선의 오디오 또는 동영상이 재생을 시작하여 전체 시간의 75%까지 재생된 횟수입니다.

<!-- parameter end -->
<!-- parameter start -->

messages\[].mediaPlayed100Percent

Number

말풍선의 오디오 또는 동영상이 재생을 시작하여 전체 시간의 100%까지 재생된 횟수입니다.

<!-- parameter end -->
<!-- parameter start -->

messages\[].uniqueMediaPlayed

Number

말풍선의 오디오 또는 동영상 재생을 시작한 사용자 수입니다.

<!-- parameter end -->
<!-- parameter start -->

messages\[].uniqueMediaPlayed25Percent

Number

말풍선의 오디오 또는 동영상 재생을 시작하여 전체 시간의 25%까지 재생한 사용자 수입니다.

<!-- parameter end -->
<!-- parameter start -->

messages\[].uniqueMediaPlayed50Percent

Number

말풍선의 오디오 또는 동영상 재생을 시작하여 전체 시간의 50%까지 재생한 사용자 수입니다.

<!-- parameter end -->
<!-- parameter start -->

messages\[].uniqueMediaPlayed75Percent

Number

말풍선의 오디오 또는 동영상 재생을 시작하여 전체 시간의 75%까지 재생한 사용자 수입니다.

<!-- parameter end -->
<!-- parameter start -->

messages\[].uniqueMediaPlayed100Percent

Number

말풍선의 오디오 또는 동영상 재생을 시작하여 전체 시간의 100%까지 재생한 사용자 수입니다.

<!-- parameter end -->
<!-- parameter start -->

clicks

Array

메시지에서 열린 URL에 대한 정보의 배열입니다. 메시지에 URL이 없거나 통계를 사용할 수 없으면 빈 배열이 반환됩니다.

<!-- parameter end -->
<!-- parameter start -->

clicks\[].seq

Number

URL의 일련번호입니다.

<!-- parameter end -->
<!-- parameter start -->

clicks\[].url

String

URL입니다.

<!-- parameter end -->
<!-- parameter start -->

clicks\[].click

Number

URL이 열린 횟수입니다.

<!-- parameter end -->
<!-- parameter start -->

clicks\[].uniqueClick

Number

URL을 연 사용자 수입니다.

<!-- parameter end -->
<!-- parameter start -->

clicks\[].uniqueClickOfRequest

Number

메시지에 있는 어떤 링크를 통해서든 이 `url`을 연 사용자 수입니다. 메시지에 같은 URL을 가리키는 링크가 두 개 있고 사용자가 두 링크를 모두 열면 한 번만 집계됩니다.

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

```json
// If the statistic isn't available because the value of each property is lower than 20
{
  "overview": {
    "requestId": "a425a5cd-6510-43fe-95be-a27f222e5dc0",
    "timestamp": 1711684800,
    "delivered": 1,
    "uniqueImpression": null,
    "uniqueClick": null,
    "uniqueMediaPlayed": null,
    "uniqueMediaPlayed100Percent": null
  },
  "messages": [],
  "clicks": []
}

// If the statistic is available because the value of each property is 20 or higher
{
  "overview": {
    "requestId": "f70dd685-499a-4231-a441-f24b8d4fba21",
    "timestamp": 1568214000,
    "delivered": 320,
    "uniqueImpression": 82,
    "uniqueClick": 51,
    "uniqueMediaPlayed": null,
    "uniqueMediaPlayed100Percent": null
  },
  "messages": [
    {
      "seq": 1,
      "impression": 136,
      "mediaPlayed": null,
      "mediaPlayed25Percent": null,
      "mediaPlayed50Percent": null,
      "mediaPlayed75Percent": null,
      "mediaPlayed100Percent": null,
      "uniqueMediaPlayed": null,
      "uniqueMediaPlayed25Percent": null,
      "uniqueMediaPlayed50Percent": null,
      "uniqueMediaPlayed75Percent": null,
      "uniqueMediaPlayed100Percent": null
    }
  ],
  "clicks": [
    {
      "seq": 1,
      "url": "https://line.me/",
      "click": 41,
      "uniqueClick": 30,
      "uniqueClickOfRequest": 30
    },
    {
      "seq": 1,
      "url": "https://www.lycorp.co.jp/",
      "click": 59,
      "uniqueClick": 38,
      "uniqueClickOfRequest": 38
    }
  ]
}
```

<!-- tab end -->

#### Error response 

[Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

### Get statistics per unit 

Endpoint: `GET` `https://api.line.me/v2/bot/insight/message/event/aggregation?customAggregationUnit={customAggregationUnit}&from={from}&to={to}`

LINE Official Account에서 보낸 push 메시지, multicast 메시지 또는 LINE notification 메시지에 대해 사용자가 어떻게 반응했는지에 대한 unit별 통계를 확인할 수 있습니다.

Unit별로 메시지 단위 또는 메시지 말풍선 단위의 통계를 가져올 수 있습니다.

![message and bubbles](https://developers.line.biz/media/messaging-api/get-message-event.webp)

같은 unit 이름으로 메시지를 보내면, 메시지 내용이나 말풍선의 개수와 순서와 관계없이 통계가 함께 집계됩니다.

<!-- note start -->

**On recorded statistics**

통계는 메시지를 보낸 시점부터 14일(1,209,600초) 동안에만 업데이트됩니다. 그 이후에는 통계가 업데이트되지 않습니다.

예를 들어 2021년 2월 1일 15:00에 메시지를 보냈다면, 통계는 2021년 2월 15일 15:00까지 업데이트됩니다.

나중에 같은 unit 이름으로 메시지를 다시 보내도 이전에 보낸 메시지의 통계가 업데이트되는 기간은 연장되지 않습니다. 각 메시지의 통계는 전송 시점부터 14일 동안 독립적으로 업데이트됩니다.

<!-- note end -->

<!-- tip start -->

**To get statistics per message**

Narrowcast 메시지 또는 broadcast 메시지 단위로 통계를 가져오려면 이 endpoint 대신 다음 endpoint를 사용하십시오.

- [Get user interaction statistics](https://developers.line.biz/en/reference/messaging-api/#get-message-event)

<!-- tip end -->

<!-- tip start -->

**When statistics for LINE notification messages are updated**

LINE notification 메시지의 경우 API 요청이 수락되더라도 실제로 메시지가 전송되기 전까지는 해당 메시지의 통계 업데이트가 시작되지 않습니다. 자세한 내용은 LINE notification messages 문서의 [Statistics are updated after the message is actually sent](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/statistics/#statistics-are-aggregated-when-the-message-is-sent)를 참조하십시오.

<!-- tip end -->

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X GET https://api.line.me/v2/bot/insight/message/event/aggregation \
-H 'Authorization: Bearer {channel access token}' \
--data-urlencode 'customAggregationUnit=promotion_a' \
--data-urlencode 'from=20210301' \
--data-urlencode 'to=20210331' \
-G
```

<!-- tab end -->

#### Rate limit 

시간당 60회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->

#### Query parameters 

<!-- parameter start (props: required) -->

customAggregationUnit

String

메시지를 보낼 때 지정한 aggregation unit의 이름입니다. 대소문자를 구분합니다. 예를 들어 `Promotion_a`와 `Promotion_A`는 서로 다른 unit 이름으로 취급됩니다.

Unit 이름 지정에 대한 자세한 내용은 Messaging API 문서의 [Assign a unit name](https://developers.line.biz/en/docs/messaging-api/unit-based-statistics-aggregation/#assign-names-to-units-when-sending-messages)을 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: required) -->

from

String

집계 기간의 시작 날짜입니다.

- 형식: `yyyyMMdd` (예: `20210301`)
- 시간대: UTC+9

<!-- parameter end -->
<!-- parameter start (props: required) -->

to

String

집계 기간의 종료 날짜입니다. 종료 날짜는 시작 날짜로부터 최대 30일 이후까지 지정할 수 있습니다. 예를 들어 시작 날짜가 `20210301`이면 가장 늦은 종료 날짜는 `20210331`입니다.

- 형식: `yyyyMMdd` (예: `20210301`)
- 시간대: UTC+9

<!-- parameter end -->

#### Response 

`200` HTTP 상태 코드와 다음 정보를 담은 JSON 객체가 반환됩니다.

<!-- note start -->

**Note**

통계 데이터에는 일부 오류가 포함될 수 있습니다.

사용자의 개인정보를 보호하기 위해 다음 경우에는 사용자 상호작용과 관련된 일부 속성 값이 `null`로 표시됩니다.

- 속성 값이 20 미만인 경우
- 속성 값이 20 이상이더라도 이벤트를 발생시킨 실제 사용자 수가 20 미만인 경우(예: `messages[].mediaPlayed`가 30이지만 `messages[].uniqueMediaPlayed`가 15이면 두 값 모두 `null`로 표시됩니다.

<!-- note end -->

<!-- parameter start -->

overview

Object

메시지 관련 통계입니다.

<!-- parameter end -->
<!-- parameter start -->

overview.uniqueImpression

Number

메시지를 열어 말풍선을 최소 1개 표시한 사용자 수입니다.

<!-- parameter end -->
<!-- parameter start -->

overview.uniqueClick

Number

메시지에 있는 URL 중 하나라도 연 사용자 수입니다.

<!-- parameter end -->
<!-- parameter start -->

overview.uniqueMediaPlayed

Number

메시지에 있는 동영상 또는 오디오 중 하나라도 재생을 시작한 사용자 수입니다.

<!-- parameter end -->
<!-- parameter start -->

overview.uniqueMediaPlayed100Percent

Number

메시지에 있는 동영상 또는 오디오 중 하나를 끝까지 재생한 사용자 수입니다.

<!-- parameter end -->
<!-- parameter start -->

messages

Array

개별 메시지 말풍선에 대한 정보의 배열입니다. 통계를 사용할 수 없으면 빈 배열이 반환됩니다.

<!-- parameter end -->
<!-- parameter start -->

messages\[].seq

Number

말풍선의 일련번호입니다.

<!-- parameter end -->
<!-- parameter start -->

messages\[].impression

Number

말풍선이 표시된 횟수입니다.

<!-- parameter end -->
<!-- parameter start -->

messages\[].uniqueImpression

Number

말풍선을 표시한 사용자 수입니다.

<!-- parameter end -->
<!-- parameter start -->

messages\[].mediaPlayed

Number

말풍선의 오디오 또는 동영상이 재생을 시작한 횟수입니다. 동영상이 자동 재생된 횟수도 포함됩니다.

<!-- parameter end -->
<!-- parameter start -->

messages\[].mediaPlayed25Percent

Number

말풍선의 오디오 또는 동영상이 재생을 시작하여 전체 시간의 25%까지 재생된 횟수입니다.

<!-- parameter end -->
<!-- parameter start -->

messages\[].mediaPlayed50Percent

Number

말풍선의 오디오 또는 동영상이 재생을 시작하여 전체 시간의 50%까지 재생된 횟수입니다.

<!-- parameter end -->
<!-- parameter start -->

messages\[].mediaPlayed75Percent

Number

말풍선의 오디오 또는 동영상이 재생을 시작하여 전체 시간의 75%까지 재생된 횟수입니다.

<!-- parameter end -->
<!-- parameter start -->

messages\[].mediaPlayed100Percent

Number

말풍선의 오디오 또는 동영상이 재생을 시작하여 전체 시간의 100%까지 재생된 횟수입니다.

<!-- parameter end -->
<!-- parameter start -->

messages\[].uniqueMediaPlayed

Number

말풍선의 오디오 또는 동영상 재생을 시작한 사용자 수입니다.

<!-- parameter end -->
<!-- parameter start -->

messages\[].uniqueMediaPlayed25Percent

Number

말풍선의 오디오 또는 동영상 재생을 시작하여 전체 시간의 25%까지 재생한 사용자 수입니다.

<!-- parameter end -->
<!-- parameter start -->

messages\[].uniqueMediaPlayed50Percent

Number

말풍선의 오디오 또는 동영상 재생을 시작하여 전체 시간의 50%까지 재생한 사용자 수입니다.

<!-- parameter end -->
<!-- parameter start -->

messages\[].uniqueMediaPlayed75Percent

Number

말풍선의 오디오 또는 동영상 재생을 시작하여 전체 시간의 75%까지 재생한 사용자 수입니다.

<!-- parameter end -->
<!-- parameter start -->

messages\[].uniqueMediaPlayed100Percent

Number

말풍선의 오디오 또는 동영상 재생을 시작하여 전체 시간의 100%까지 재생한 사용자 수입니다.

<!-- parameter end -->
<!-- parameter start -->

clicks

Array

메시지에서 열린 URL에 대한 정보의 배열입니다. 메시지에 URL이 없거나 통계를 사용할 수 없으면 빈 배열이 반환됩니다.

<!-- parameter end -->
<!-- parameter start -->

clicks\[].seq

Number

URL의 일련번호입니다.

<!-- parameter end -->
<!-- parameter start -->

clicks\[].url

String

URL입니다.

<!-- parameter end -->
<!-- parameter start -->

clicks\[].click

Number

말풍선의 URL이 열린 횟수입니다.

<!-- parameter end -->
<!-- parameter start -->

clicks\[].uniqueClick

Number

말풍선의 URL을 연 사용자 수입니다.

<!-- parameter end -->
<!-- parameter start -->

clicks\[].uniqueClickOfRequest

Number

메시지에 있는 어떤 링크를 통해서든 이 `url`을 연 사용자 수입니다. 다른 말풍선에 같은 URL이 포함되어 있고 사용자가 두 링크를 모두 열면 한 번만 집계됩니다.

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

```json
// If there is no statistic for aggregation period
{
  "overview": {
    "uniqueImpression": null,
    "uniqueClick": null,
    "uniqueMediaPlayed": null,
    "uniqueMediaPlayed100Percent": null
  },
  "messages": [],
  "clicks": []
}

// If there is a statistic for aggregation period
{
  "overview": {
    "uniqueImpression": 40,
    "uniqueClick": 30,
    "uniqueMediaPlayed": 25,
    "uniqueMediaPlayed100Percent": null
  },
  "messages": [
    {
      "seq": 1,
      "impression": 42,
      "uniqueImpression": 40,
      "mediaPlayed": 30,
      "mediaPlayed25Percent": null,
      "mediaPlayed50Percent": null,
      "mediaPlayed75Percent": null,
      "mediaPlayed100Percent": null,
      "uniqueMediaPlayed": 25,
      "uniqueMediaPlayed25Percent": null,
      "uniqueMediaPlayed50Percent": null,
      "uniqueMediaPlayed75Percent": null,
      "uniqueMediaPlayed100Percent": null
    }
  ],
  "clicks": [
    {
      "seq": 1,
      "url": "https://developers.line.biz/",
      "click": 35,
      "uniqueClick": 25,
      "uniqueClickOfRequest": null
    },
    {
      "seq": 1,
      "url": "https://api.line-status.info/",
      "click": 29,
      "uniqueClick": null,
      "uniqueClickOfRequest": null
    }
  ]
}
```

<!-- tab end -->

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code | Description |
| --- | --- |
| `400` | 통계를 가져오지 못했습니다. 다음 원인을 확인하십시오.<ul><li>Unit 이름을 지정하지 않았습니다.</li><li>집계 기간 날짜를 지정하지 않았습니다.</li><li>잘못된 집계 기간 날짜를 지정했습니다.</li></ul> |

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Example error response_

<!-- tab start `json` -->

```json
// If you couldn't get the statistic (400 Bad Request)
{
  "message": null,
  "key": null,
  "stacktrace": null,
  "code": null
}
```

<!-- tab end -->

### Get the number of unit name types assigned during this month 

Endpoint: `GET` `https://api.line.me/v2/bot/message/aggregation/info`

이번 달에 push 메시지, multicast 메시지 또는 LINE notification 메시지에 지정된 unit 이름 유형의 개수를 가져올 수 있습니다. 메시지를 보낼 때 지정할 수 있는 unit 이름의 제한에 대한 자세한 내용은 Messaging API 문서의 [Maximum number of unit name types](https://developers.line.biz/en/docs/messaging-api/unit-based-statistics-aggregation/#limit-to-the-number-of-units)를 참조하십시오.

<!-- tip start -->

**When unit names for LINE notification messages are reflected**

LINE notification 메시지의 경우 API 요청이 수락되더라도 실제로 메시지가 전송되기 전까지는 지정한 unit 이름이 unit 이름 유형의 개수에 포함되지 않습니다. 자세한 내용은 LINE notification messages 문서의 [Statistics are updated after the message is actually sent](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/statistics/#statistics-are-aggregated-when-the-message-is-sent)를 참조하십시오.

<!-- tip end -->

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X GET https://api.line.me/v2/bot/message/aggregation/info \
-H 'Authorization: Bearer {channel access token}'
```

<!-- tab end -->

#### Rate limit 

초당 2,000회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->

#### Response 

`200` HTTP 상태 코드와 다음 정보를 담은 JSON 객체가 반환됩니다.

<!-- parameter start -->

numOfCustomAggregationUnits

Number

이번 달에 push 메시지, multicast 메시지 또는 LINE notification 메시지에 지정된 unit 이름 유형의 개수입니다.

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

```json
{
  "numOfCustomAggregationUnits": 22
}
```

<!-- tab end -->

#### Error Response 

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

### Get a list of unit names assigned during this month 

Endpoint: `GET` `https://api.line.me/v2/bot/message/aggregation/list`

이번 달에 push 메시지, multicast 메시지 또는 LINE notification 메시지에 지정된 unit 이름의 고유한 목록을 가져올 수 있습니다.

<!-- tip start -->

**When unit names for LINE notification messages are reflected**

LINE notification 메시지의 경우 API 요청이 수락되더라도 실제로 메시지가 전송되기 전까지는 지정한 unit 이름이 목록에 포함되지 않습니다. 자세한 내용은 LINE notification messages 문서의 [Statistics are updated after the message is actually sent](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/statistics/#statistics-are-aggregated-when-the-message-is-sent)를 참조하십시오.

<!-- tip end -->

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X GET https://api.line.me/v2/bot/message/aggregation/list \
-H 'Authorization: Bearer {channel access token}' \
--data-urlencode 'limit=30' \
-G
```

<!-- tab end -->

#### Rate limit 

초당 2,000회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->

#### Query parameters 

<!-- parameter start (props: optional) -->

limit

String

요청당 가져올 수 있는 unit 이름의 최대 개수입니다. 기본값은 `100`입니다.\
최대값: `100`

<!-- parameter end -->
<!-- parameter start (props: optional) -->

start

String

[응답](https://developers.line.biz/en/reference/messaging-api/#get-a-list-of-unit-names-assigned-during-this-month-response)으로 반환된 JSON 객체의 `next` 속성에 있는 continuation token 값입니다. 한 번의 요청으로 모든 unit 이름을 가져올 수 없으면 이 파라미터를 포함하여 나머지 배열을 가져오십시오.

<!-- parameter end -->

#### Response 

`200` HTTP 상태 코드와 다음 정보를 담은 JSON 객체가 반환됩니다.

<!-- parameter start -->

customAggregationUnits

Array of strings

Unit 이름을 나타내는 문자열의 배열입니다. 이 배열에는 이번 달에 push 메시지, multicast 메시지 또는 LINE notification 메시지에 지정된 unit 이름이 중복 없이 포함됩니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

next

String

다음 unit 이름 배열을 가져오기 위한 continuation token입니다. 원래 요청의 `customAggregationUnits` 속성에 반환되지 않은 unit 이름이 남아 있을 때만 반환됩니다.

Continuation token은 24시간(86,400초) 후에 만료됩니다.

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

```json
{
  "customAggregationUnits": ["promotion_a", "promotion_b"],
  "next": "jxEWCEEP..."
}
```

<!-- tab end -->

#### Error Response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code | Description |
| --- | --- |
| `400` | 요청에 문제가 있습니다. 다음 원인을 확인하십시오.<ul><li>잘못된 continuation token을 지정했습니다.</li><li>`limit` 속성에 잘못된 값을 지정했습니다.</li></ul> |

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Example error response_

<!-- tab start `json` -->

```json
// If you specify an invalid continuation token, such as expired (400 Bad Request)
{
  "message": "Invalid start param"
}
```

<!-- tab end -->

### Get rich menu insight totals 

Endpoint: `GET` `https://api.line.me/v2/bot/insight/richmenu/{richMenuId}/summary?from={from}&to={to}`

리치 메뉴를 본 사용자 수와 조회 횟수 등 지정한 기간의 누적 통계를 가져옵니다. 이러한 통계의 집계 처리는 보통 다음 날까지 완료됩니다.

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X GET https://api.line.me/v2/bot/insight/richmenu/richmenu-862e6ad6c267d2ddf3f42bc78554f6a4/summary \
-H 'Authorization: Bearer {channel access token}' \
--data-urlencode 'from=20260610' \
--data-urlencode 'to=20260612' \
-G
```

<!-- tab end -->

#### Rate limit 

시간당 60회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->

#### Path parameters 

<!-- parameter start (props: required) -->

richMenuId

통계를 가져올 리치 메뉴의 ID입니다.

<!-- parameter end -->

#### Query parameters 

<!-- parameter start (props: required) -->

from

String

집계 기간의 시작 날짜입니다. 시작 날짜는 최대 3년 전까지 지정할 수 있습니다. 예를 들어 오늘이 `20260701`이면 가장 이른 시작 날짜는 `20230701`입니다.

- 형식: `yyyyMMdd` (예: `20230701`)
- 시간대: UTC+9

<!-- parameter end -->
<!-- parameter start (props: required) -->

to

String

집계 기간의 종료 날짜입니다. 종료 날짜는 시작 날짜로부터 최대 396일 이후까지 지정할 수 있습니다. 예를 들어 시작 날짜가 `20230701`이면 종료 날짜는 `20230701`부터 `20240731`까지 지정할 수 있습니다.

- 형식: `yyyyMMdd` (예: `20240731`)
- 시간대: UTC+9

<!-- parameter end -->

#### Response 

`200` HTTP 상태 코드와 다음 정보를 담은 JSON 객체가 반환됩니다.

<!-- note start -->

**Note**

통계 데이터에는 일부 오류가 포함될 수 있습니다.

사용자의 개인정보를 보호하기 위해, `from`과 `to`로 지정한 전체 기간 동안 리치 메뉴를 클릭한 고유 사용자 수가 20 미만이면 응답에 리치 메뉴 ID만 포함되며 통계 데이터는 반환되지 않습니다.

<!-- note end -->

<!-- parameter start -->

richMenuId

String

리치 메뉴의 ID입니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

metricsFrom

String

지정한 기간 내에서 실제로 가져온 통계 데이터의 시작 날짜입니다.

- 형식: `yyyyMMdd` (예: `20230701`)
- 시간대: UTC+9

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

metricsTo

String

지정한 기간 내에서 실제로 가져온 통계 데이터의 종료 날짜입니다.

- 형식: `yyyyMMdd` (예: `20231008`)
- 시간대: UTC+9

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

impression

Object

리치 메뉴 노출과 관련된 통계를 담은 객체입니다.

<!-- parameter end -->
<!-- parameter start -->

impression.metrics

Object

리치 메뉴 노출 횟수를 담은 객체입니다.

<!-- parameter end -->
<!-- parameter start -->

impression.metrics.count

Number

리치 메뉴를 본 횟수입니다.

<!-- parameter end -->
<!-- parameter start -->

impression.metrics.uniqueUsers

Number

리치 메뉴를 본 사용자 수입니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

clicks

Array of objects

리치 메뉴 클릭 횟수를 담은 객체의 배열입니다.

<!-- parameter end -->
<!-- parameter start -->

clicks\[].bounds

Object

[`bounds` 객체](https://developers.line.biz/en/reference/messaging-api/#bounds-object)입니다. 리치 메뉴를 만들 때 지정한 클릭 영역의 좌표와 크기를 나타내는 객체입니다.

<!-- parameter end -->
<!-- parameter start -->

clicks\[].metrics

Object

리치 메뉴 클릭 횟수를 담은 객체입니다.

<!-- parameter end -->
<!-- parameter start -->

clicks\[].metrics.count

Number

`clicks.bounds`로 표시되는 리치 메뉴 클릭 영역이 클릭된 횟수입니다.

<!-- parameter end -->
<!-- parameter start -->

clicks\[].metrics.uniqueUsers

Number

`clicks.bounds`로 표시되는 리치 메뉴 클릭 영역을 클릭한 사용자 수입니다.

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

```json
// If no statistical data is available
{
  "richMenuId": "richmenu-862e6ad6c267d2ddf3f42bc78554f6a4"
}

// When retrieving statistics for a rich menu divided into 6 boundaries
{
  "richMenuId": "richmenu-862e6ad6c267d2ddf3f42bc78554f6a4",
  "metricsFrom": "20260301",
  "metricsTo": "20260331",
  "impression": {
    "metrics": {
      "count": 10141,
      "uniqueUsers": 2366
    }
  },
  "clicks": [
    {
      "bounds": {
        "x": 0,
        "y": 0,
        "width": 833,
        "height": 843
      },
      "metrics": {
        "count": 74,
        "uniqueUsers": 55
      }
    },
    {
      "bounds": {
        "x": 833,
        "y": 0,
        "width": 833,
        "height": 843
      },
      "metrics": {
        "count": 15,
        "uniqueUsers": 15
      }
    },
    {
      "bounds": {
        "x": 1666,
        "y": 0,
        "width": 833,
        "height": 843
      },
      "metrics": {
        "count": 53,
        "uniqueUsers": 46
      }
    },
    {
      "bounds": {
        "x": 0,
        "y": 843,
        "width": 833,
        "height": 843
      },
      "metrics": {
        "count": 49,
        "uniqueUsers": 42
      }
    },
    {
      "bounds": {
        "x": 833,
        "y": 843,
        "width": 833,
        "height": 843
      },
      "metrics": {
        "count": 17,
        "uniqueUsers": 14
      }
    },
    {
      "bounds": {
        "x": 1666,
        "y": 843,
        "width": 833,
        "height": 843
      },
      "metrics": {
        "count": 17,
        "uniqueUsers": 14
      }
    }
  ]
}
```

<!-- tab end -->

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code | Description |
| --- | --- |
| `400` | 통계를 가져오지 못했습니다. 다음 원인을 확인하십시오.<ul><li>집계 기간 날짜를 지정하지 않았습니다.</li><li>잘못된 집계 기간 날짜를 지정했습니다.</li></ul> |
| `404` | 존재하지 않는 리치 메뉴를 지정했습니다. |

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Example error response_

<!-- tab start `json` -->

```json
// If the start or end date of the aggregation period is not specified (400 Bad Request)
{
  "message": "Bad Request"
}

// If the specified end date is earlier than the start date (400 Bad Request)
{
  "message": "Parameter to must be the same date as, or after parameter from."
}

// If the specified end date is more than 396 days after the start date (400 Bad Request)
{
  "message": "Date range exceeds. Max range is 396 days."
}

// If the start date of the aggregation period is earlier than 3 years ago (400 Bad Request)
{
  "message": "Parameter from must be the same date as, or after 2023-06-29."
}
```

<!-- tab end -->

### Get rich menu insight by day 

Endpoint: `GET` `https://api.line.me/v2/bot/insight/richmenu/{richMenuId}/daily?from={from}&to={to}`

리치 메뉴를 본 사용자 수와 조회 횟수 등 지정한 기간의 일별 통계를 가져옵니다. 이러한 통계의 집계 처리는 보통 다음 날까지 완료됩니다.

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X GET https://api.line.me/v2/bot/insight/richmenu/richmenu-862e6ad6c267d2ddf3f42bc78554f6a4/daily \
-H 'Authorization: Bearer {channel access token}' \
--data-urlencode 'from=20260610' \
--data-urlencode 'to=20260612' \
-G
```

<!-- tab end -->

#### Rate limit 

시간당 60회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->

#### Path parameters 

<!-- parameter start (props: required) -->

richMenuId

통계를 가져올 리치 메뉴의 ID입니다.

<!-- parameter end -->

#### Query parameters 

<!-- parameter start (props: required) -->

from

String

집계 기간의 시작 날짜입니다. 시작 날짜는 최대 3년 전까지 지정할 수 있습니다. 예를 들어 오늘이 `20260701`이면 가장 이른 시작 날짜는 `20230701`입니다.

- 형식: `yyyyMMdd` (예: `20230701`)
- 시간대: UTC+9

<!-- parameter end -->
<!-- parameter start (props: required) -->

to

String

집계 기간의 종료 날짜입니다. 종료 날짜는 시작 날짜로부터 최대 99일 이후까지 지정할 수 있습니다. 예를 들어 시작 날짜가 `20230701`이면 종료 날짜는 `20230701`부터 `20231008`까지 지정할 수 있습니다.

- 형식: `yyyyMMdd` (예: `20231008`)
- 시간대: UTC+9

<!-- parameter end -->

#### Response 

`200` HTTP 상태 코드와 다음 정보를 담은 JSON 객체가 반환됩니다.

<!-- note start -->

**Note**

통계 데이터에는 일부 오류가 포함될 수 있습니다.

사용자의 개인정보를 보호하기 위해, `from`과 `to`로 지정한 전체 기간 동안 리치 메뉴를 클릭한 고유 사용자 수가 20 미만이면 응답에 리치 메뉴 ID만 포함되며 통계 데이터는 반환되지 않습니다.

<!-- note end -->

<!-- parameter start -->

richMenuId

String

리치 메뉴의 ID입니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

metricsFrom

String

지정한 기간 내에서 실제로 가져온 통계 데이터의 시작 날짜입니다.

- 형식: `yyyyMMdd` (예: `20230701`)
- 시간대: UTC+9

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

metricsTo

String

지정한 기간 내에서 실제로 가져온 통계 데이터의 종료 날짜입니다.

- 형식: `yyyyMMdd` (예: `20231008`)
- 시간대: UTC+9

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

impression

Object

리치 메뉴 노출과 관련된 통계를 담은 객체입니다.

<!-- parameter end -->
<!-- parameter start -->

impression.metrics

Array of objects

리치 메뉴 노출과 관련된 일별 통계를 담은 객체의 배열입니다.

<!-- parameter end -->
<!-- parameter start -->

impression.metrics\[].date

String

리치 메뉴를 본 날짜입니다.

- 형식: `yyyyMMdd` (예: `20230701`)
- 시간대: UTC+9

<!-- parameter end -->
<!-- parameter start -->

impression.metrics\[].count

Number

리치 메뉴를 본 횟수입니다.

<!-- parameter end -->
<!-- parameter start -->

impression.metrics\[].uniqueUsers

Number

리치 메뉴를 본 사용자 수입니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

clicks

Array of objects

리치 메뉴 클릭과 관련된 일별 통계를 담은 객체의 배열입니다.

<!-- parameter end -->
<!-- parameter start -->

clicks\[].bounds

Object

[`bounds` 객체](https://developers.line.biz/en/reference/messaging-api/#bounds-object)입니다. 리치 메뉴를 만들 때 지정한 클릭 영역의 좌표와 크기를 나타내는 객체입니다.

<!-- parameter end -->
<!-- parameter start -->

clicks\[].metrics

Array of objects

리치 메뉴 클릭 횟수를 담은 객체의 배열입니다.

<!-- parameter end -->
<!-- parameter start -->

clicks\[].metrics\[].date

String

`clicks.bounds`로 표시되는 리치 메뉴 클릭 영역이 클릭된 날짜입니다.

- 형식: `yyyyMMdd` (예: `20230701`)
- 시간대: UTC+9

<!-- parameter end -->
<!-- parameter start -->

clicks\[].metrics\[].count

Number

`clicks.bounds`로 표시되는 리치 메뉴 클릭 영역이 클릭된 횟수입니다.

<!-- parameter end -->
<!-- parameter start -->

clicks\[].metrics\[].uniqueUsers

Number

`clicks.bounds`로 표시되는 리치 메뉴 클릭 영역을 클릭한 사용자 수입니다.

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

```json
// If no statistical data is available
{
  "richMenuId": "richmenu-862e6ad6c267d2ddf3f42bc78554f6a4"
}

// When retrieving statistics for a rich menu divided into 6 boundaries
{
  "richMenuId": "richmenu-862e6ad6c267d2ddf3f42bc78554f6a4",
  "metricsFrom": "20260610",
  "metricsTo": "20260611",
  "impression": {
    "metrics": [
      {
        "date": "20260610",
        "count": 1364,
        "uniqueUsers": 1254
      },
      {
        "date": "20260611",
        "count": 282,
        "uniqueUsers": 260
      }
    ]
  },
  "clicks": [
    {
      "bounds": {
        "x": 0,
        "y": 0,
        "width": 833,
        "height": 843
      },
      "metrics": [
        {
          "date": "20260610",
          "count": 9,
          "uniqueUsers": 8
        },
        {
          "date": "20260611",
          "count": 2,
          "uniqueUsers": 2
        }
      ]
    },
    {
      "bounds": {
        "x": 833,
        "y": 0,
        "width": 833,
        "height": 843
      },
      "metrics": [
        {
          "date": "20260610",
          "count": 3,
          "uniqueUsers": 3
        },
        {
          "date": "20260611",
          "count": 0,
          "uniqueUsers": 0
        }
      ]
    },
    {
      "bounds": {
        "x": 1666,
        "y": 0,
        "width": 833,
        "height": 843
      },
      "metrics": [
        {
          "date": "20260610",
          "count": 7,
          "uniqueUsers": 7
        },
        {
          "date": "20260611",
          "count": 1,
          "uniqueUsers": 1
        }
      ]
    },
    {
      "bounds": {
        "x": 0,
        "y": 843,
        "width": 833,
        "height": 843
      },
      "metrics": [
        {
          "date": "20260610",
          "count": 4,
          "uniqueUsers": 4
        },
        {
          "date": "20260611",
          "count": 4,
          "uniqueUsers": 3
        }
      ]
    },
    {
      "bounds": {
        "x": 833,
        "y": 843,
        "width": 833,
        "height": 843
      },
      "metrics": [
        {
          "date": "20260610",
          "count": 0,
          "uniqueUsers": 0
        },
        {
          "date": "20260611",
          "count": 1,
          "uniqueUsers": 1
        }
      ]
    },
    {
      "bounds": {
        "x": 1666,
        "y": 843,
        "width": 833,
        "height": 843
      },
      "metrics": [
        {
          "date": "20260610",
          "count": 3,
          "uniqueUsers": 3
        },
        {
          "date": "20260611",
          "count": 2,
          "uniqueUsers": 2
        }
      ]
    }
  ]
}
```

<!-- tab end -->

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code | Description |
| --- | --- |
| `400` | 통계를 가져오지 못했습니다. 다음 원인을 확인하십시오.<ul><li>집계 기간 날짜를 지정하지 않았습니다.</li><li>잘못된 집계 기간 날짜를 지정했습니다.</li></ul> |
| `404` | 존재하지 않는 리치 메뉴를 지정했습니다. |

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Example error response_

<!-- tab start `json` -->

```json
// If the start or end date of the aggregation period is not specified (400 Bad Request)
{
  "message": "Bad Request"
}

// If the specified end date is earlier than the start date (400 Bad Request)
{
  "message": "Parameter to must be the same date as, or after parameter from."
}

// If the specified end date is more than 99 days after the start date (400 Bad Request)
{
  "message": "Date range exceeds. Max range is 99 days."
}

// If the start date of the aggregation period is earlier than 3 years ago (400 Bad Request)
{
  "message": "Parameter from must be the same date as, or after 2023-06-29."
}
```

<!-- tab end -->

## Coupon 

LINE Official Account에서 사용자에게 보낼 쿠폰을 관리할 수 있습니다.

### Create a coupon 

Endpoint: `POST` `https://api.line.me/v2/bot/coupon`

쿠폰을 만듭니다.

쿠폰은 만든다고 해서 사용자에게 자동으로 전송되지 않습니다. 만든 쿠폰을 메시지로 보내야 합니다. 자세한 내용은 Messaging API 문서의 [Steps to send coupons using the Messaging API](https://developers.line.biz/en/docs/messaging-api/send-coupons-to-users/#send-coupons-using-messaging-api)를 참조하십시오.

유효한 쿠폰은 최대 5,000개까지 만들 수 있습니다.

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X POST https://api.line.me/v2/bot/coupon \
-H 'Authorization: Bearer {channel access token}' \
-H 'Content-Type: application/json' \
-d \
'
{
  "title": "Friends-only coupon",
  "description": "- To redeem your coupon, present this screen at checkout.\n- Redeemable once only, even if previously redeemed only unintentionally by the customer.\n- The validity period of this coupon may change or it may be canceled without notice.",
  "reward": {
    "type": "discount",
    "priceInfo": {
      "type": "fixed",
      "fixedAmount": 100
    }
  },
  "acquisitionCondition": {
    "type": "normal"
  },
  "startTimestamp": 0,
  "endTimestamp": 1924959599,
  "imageUrl": "https://developers.line.biz/media/messaging-api/coupon/sample-coupon-image-100-yen-off.jpg",
  "timezone": "ASIA_TOKYO",
  "visibility": "UNLISTED",
  "maxUseCountPerTicket": 1
}'
```

<!-- tab end -->

#### Rate limit 

초당 200회 요청

[LINE Official Account Manager](https://developers.line.biz/en/glossary/#line-oa-manager)를 사용하여 쿠폰을 만드는 경우에는 이 제한이 적용되지 않습니다.

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->
<!-- parameter start (props: required) -->

Content-Type

application/json

<!-- parameter end -->

#### Request body 

<!-- parameter start (props: required) -->

title

String

쿠폰 제목입니다.\
최대 길이: 60

<!-- parameter end -->
<!-- parameter start (props: optional) -->

description

String

쿠폰 안내 사항입니다. 쿠폰의 사용 방법과 주의 사항을 설정하십시오. 줄바꿈은 `\n`으로 지정할 수 있습니다.\
최대 길이: 1,000

<!-- parameter end -->
<!-- parameter start (props: required) -->

acquisitionCondition

Object

쿠폰 획득 조건을 담은 객체입니다.

<!-- parameter end -->
<!-- parameter start (props: required) -->

acquisitionCondition.type

String

쿠폰 획득 조건의 유형입니다.\
다음 값 중 하나를 지정하십시오.

- `normal`: 조건 없음. 모든 사용자가 획득할 수 있습니다.
- `lottery`: 추첨. 추첨에 당첨된 사용자만 획득할 수 있습니다.

"친구 추천(friend referral)" 획득 조건이 있는 쿠폰은 Messaging API로 만들 수 없습니다. LINE Official Account Manager에서만 만들 수 있습니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

acquisitionCondition.lotteryProbability

Number

쿠폰 당첨 확률(%)을 1에서 99 사이의 정수로 지정하십시오.\
예를 들어 50을 지정하면 당첨 확률은 50%입니다.
`acquisitionCondition.type`이 `lottery`인 경우 필수입니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

acquisitionCondition.maxAcquireCount

Number

추첨의 당첨자 수 상한입니다. 1에서 999999 사이의 정수를 지정하십시오.\
상한이 없으면 `-1`을 지정하십시오.\
`acquisitionCondition.type`이 `lottery`인 경우 필수입니다.

<!-- parameter end -->
<!-- parameter start (props: required) -->

maxUseCountPerTicket

Number

쿠폰을 사용할 수 있는 횟수입니다. \
다음 값 중 하나를 지정하십시오.

- `1`: 한 번만
- `-1`: 제한 없음

<!-- parameter end -->
<!-- parameter start (props: required) -->

startTimestamp

Number

쿠폰 유효 기간의 시작 날짜와 시간입니다.\
UNIX time(초 단위)으로 지정하십시오.

<!-- parameter end -->
<!-- parameter start (props: required) -->

endTimestamp

Number

쿠폰 유효 기간의 종료 날짜와 시간입니다.\
UNIX time(초 단위)으로 지정하십시오.\
현재 날짜와 시간 또는 시작 날짜와 시간보다 이전으로 지정할 수 없습니다.

<!-- parameter end -->
<!-- parameter start (props: required) -->

timezone

String

유효 기간의 기준이 되는 시간대입니다.\
다음 값 중 하나를 지정하십시오.

- `ETC_GMT_MINUS_12`: (UTC-12:00) Etc/GMT-12
- `ETC_GMT_MINUS_11`: (UTC-11:00) Etc/GMT-11
- `PACIFIC_HONOLULU`: (UTC-10:00) Pacific/Honolulu
- `AMERICA_ANCHORAGE`: (UTC-09:00) America/Anchorage
- `AMERICA_LOS_ANGELES`: (UTC-08:00) America/Los_Angeles, Santa_Isabel
- `AMERICA_PHOENIX`: (UTC-07:00) America/Phoenix, Denver
- `AMERICA_CHICAGO`: (UTC-06:00) America/Chicago, Guatemala
- `AMERICA_NEW_YORK`: (UTC-05:00) America/New_York, Indiana/Indianapolis
- `AMERICA_CARACAS`: (UTC-04:30) America/Caracas
- `AMERICA_SANTIAGO`: (UTC-04:00) America/Santiago, Cuiaba
- `AMERICA_ST_JOHNS`: (UTC-03:30) America/St_Johns
- `AMERICA_SAO_PAULO`: (UTC-03:00) America/Sao_Paulo, Argentina/Buenos_Aires
- `ETC_GMT_MINUS_2`: (UTC-02:00) Etc/GMT-2
- `ATLANTIC_CAPE_VERDE`: (UTC-01:00) Atlantic/Cape_Verde, Azores
- `EUROPE_LONDON`: (UTC+00:00) Europe/London, Etc/GMT
- `EUROPE_PARIS`: (UTC+01:00) Europe/Paris, Berlin
- `EUROPE_ISTANBUL`: (UTC+02:00) Europe/Istanbul, Kiev
- `EUROPE_MOSCOW`: (UTC+03:00) Europe/Moscow, Minsk
- `ASIA_TEHRAN`: (UTC+03:30) Asia/Tehran
- `ASIA_TBILISI`: (UTC+04:00) Asia/Tbilisi, Yerevan
- `ASIA_KABUL`: (UTC+04:30) Asia/Kabul
- `ASIA_TASHKENT`: (UTC+05:00) Asia/Tashkent, Karachi
- `ASIA_COLOMBO`: (UTC+05:30) Asia/Colombo, Kolkata
- `ASIA_KATHMANDU`: (UTC+05:45) Asia/Kathmandu
- `ASIA_ALMATY`: (UTC+06:00) Asia/Almaty, Dhaka
- `ASIA_RANGOON`: (UTC+06:30) Asia/Rangoon
- `ASIA_BANGKOK`: (UTC+07:00) Asia/Bangkok, Jakarta
- `ASIA_TAIPEI`: (UTC+08:00) Asia/Taipei, Singapore
- `ASIA_TOKYO`: (UTC+09:00) Asia/Tokyo, Seoul
- `AUSTRALIA_DARWIN`: (UTC+09:30) Australia/Darwin, Adelaide
- `AUSTRALIA_SYDNEY`: (UTC+10:00) Australia/Sydney, Brisbane
- `ASIA_VLADIVOSTOK`: (UTC+11:00) Asia/Vladivostok, Pacific/Guadalcanal
- `ETC_GMT_PLUS_12`: (UTC+12:00) Etc/GMT+12
- `PACIFIC_TONGATAPU`: (UTC+13:00) Pacific/Tongatapu, Apia

<!-- parameter end -->
<!-- parameter start (props: required) -->

reward

Object

쿠폰 유형 정보를 담은 [Reward 객체](https://developers.line.biz/en/reference/messaging-api/#create-coupon-reward-object)입니다.

<!-- parameter end -->
<!-- parameter start (props: required) -->

visibility

String

LY Corporation 서비스에 쿠폰을 표시할지 여부입니다.\
다음 값 중 하나입니다.

- `PUBLIC`: 표시합니다.
- `UNLISTED`: 표시하지 않습니다.

자세한 내용은 LINE for Business의 [Display coupon in LY Corporation services](https://www.lycbiz.com/jp/manual/OfficialAccountManager/coupons-service/)(일본어만 제공)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

imageUrl

String

쿠폰 이미지의 URL입니다.\
최대 문자 수: 2000\
프로토콜: HTTPS(TLS 1.2 이상)\
이미지 형식: JPEG 또는 PNG\
최대 파일 크기: 10MB(1MB 이하 권장)

URL은 UTF-8로 퍼센트 인코딩되어야 합니다. 자세한 내용은 [About the encoding of a URL specified in a request body property](https://developers.line.biz/en/reference/messaging-api/#url-encoding)를 참조하십시오.

<!-- note start -->

**Changing the image at the URL later won't update the coupon image**

쿠폰을 만들 때 URL의 이미지를 가져와 LINE Platform에 저장합니다. 나중에 URL의 이미지를 변경해도 쿠폰 이미지는 업데이트되지 않습니다.

<!-- note end -->

<!-- parameter end -->
<!-- parameter start (props: optional) -->

couponCode

String

쿠폰을 열면 표시되는 쿠폰 코드입니다.\
최대 길이: 16

<!-- parameter end -->
<!-- parameter start (props: optional) -->

barcodeImageUrl

String

쿠폰을 열면 표시되는 바코드 이미지의 URL입니다.\
최대 문자 수: 2000\
프로토콜: HTTPS(TLS 1.2 이상)\
이미지 형식: JPEG 또는 PNG\
최대 파일 크기: 10MB

URL은 UTF-8로 퍼센트 인코딩되어야 합니다. 자세한 내용은 [About the encoding of a URL specified in a request body property](https://developers.line.biz/en/reference/messaging-api/#url-encoding)를 참조하십시오.

<!-- note start -->

**Changing the image at the URL later won't update the coupon image**

쿠폰을 만들 때 URL의 이미지를 가져와 LINE Platform에 저장합니다. 나중에 URL의 이미지를 변경해도 쿠폰 이미지는 업데이트되지 않습니다.

<!-- note end -->

<!-- parameter end -->
<!-- parameter start (props: optional) -->

usageCondition

String

쿠폰 사용 조건입니다.\
최대 길이: 100

<!-- parameter end -->

##### Reward object 

<!-- parameter start (props: required) -->

type

String

쿠폰 유형입니다.\
다음 값 중 하나를 지정하십시오.

- `discount`: 할인
- `free`: 무료
- `gift`: 선물
- `cashBack`: 캐시백
- `others`: 기타

<!-- parameter end -->
<!-- parameter start (props: optional) -->

priceInfo

Object

할인 또는 캐시백 세부 정보를 담은 객체입니다.\
`type`이 `discount` 또는 `cashBack`인 경우 필수입니다.

<!-- parameter end -->
<!-- parameter start (props: required) -->

priceInfo.type

String

쿠폰 할인 세부 정보의 유형입니다.

`type`이 `discount`인 경우 다음 값 중 하나를 지정할 수 있습니다.

- `fixed`: 할인 금액 표시
- `percentage`: 할인율 표시
- `explicit`: 원래 가격에 취소선을 긋고 할인가 표시

`type`이 `cashBack`인 경우 다음 값 중 하나를 지정할 수 있습니다.

- `fixed`: 캐시백 금액 표시
- `percentage`: 캐시백 비율 표시

<!-- parameter end -->
<!-- parameter start (props: optional) -->

priceInfo.fixedAmount

Number

할인 금액을 양의 정수로 지정하십시오.\
`priceInfo.type`이 `fixed`인 경우 필수입니다.\
통화 단위는 LINE Official Account의 국가 또는 지역에 따라 자동으로 설정됩니다.

- 대만: TWD(대만 달러)
- 태국: THB(태국 바트)
- 그 밖의 모든 국가 및 지역: JPY(일본 엔)

<!-- parameter end -->
<!-- parameter start (props: optional) -->

priceInfo.percentage

Number

할인율(%)을 1에서 99 사이의 정수로 지정하십시오.\
예를 들어 50을 지정하면 할인율은 50%입니다.\
`priceInfo.type`이 `percentage`인 경우 필수입니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

priceInfo.originalPrice

Number

할인 전 가격을 양의 정수로 지정하십시오.\
`priceInfo.type`이 `explicit`인 경우 필수입니다.\
통화 단위는 LINE Official Account의 국가 또는 지역에 따라 자동으로 설정됩니다.

- 대만: TWD(대만 달러)
- 태국: THB(태국 바트)
- 그 밖의 모든 국가 및 지역: JPY(일본 엔)

<!-- parameter end -->
<!-- parameter start (props: optional) -->

priceInfo.priceAfterDiscount

Number

할인 후 가격을 양의 정수로 지정하십시오.\
`priceInfo.type`이 `explicit`인 경우 필수입니다.\
통화 단위는 LINE Official Account의 국가 또는 지역에 따라 자동으로 설정됩니다.

- 대만: TWD(대만 달러)
- 태국: THB(태국 바트)
- 그 밖의 모든 국가 및 지역: JPY(일본 엔)

<!-- parameter end -->

_Reward object examples_

<!-- tab start `json` -->

```json
// 1,500 yen discount
{
  "type": "discount",
  "priceInfo": {
    "type": "fixed",
    "fixedAmount": 1500
  }
}

// 25% discount
{
  "type": "discount",
  "priceInfo": {
    "type": "percentage",
    "percentage": 25
  }
}

// Cross out the original price of 12,000 yen and display the discounted price of 9,500 yen
{
  "type": "discount",
  "priceInfo": {
    "type": "explicit",
    "originalPrice": 12000,
    "priceAfterDiscount": 9500
  }
}

// Free
{
  "type": "free"
}

// Gift
{
  "type": "gift"
}

// 100 yen cashback
{
  "type": "cashBack",
  "priceInfo": {
    "type": "fixed",
    "fixedAmount": 100
  }
}

// 30% cashback
{
  "type": "cashBack",
  "priceInfo": {
    "type": "percentage",
    "percentage": 30
  }
}

// Others
{
  "type": "others"
}
```

<!-- tab end -->

#### Response 

`200` 상태 코드와 다음 속성을 가진 JSON 객체가 반환됩니다.

<!-- parameter start -->

couponId

String

쿠폰 ID입니다. 쿠폰 메시지를 보낼 때 등에 사용하십시오.

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

```json
{
  "couponId": "01JYNW8JMQVFBNWF1APF8Z3FS7"
}
```

<!-- tab end -->

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code | Description |
| --- | --- |
| `400` | 쿠폰을 만들지 못했습니다. 다음 원인을 확인하십시오.<ul><li>잘못된 쿠폰 유형을 지정했습니다.</li><li>유효한 쿠폰의 최대 개수(최대 5,000개)에 도달했습니다.</li><li>Reward 객체에 `priceInfo.type`과 맞지 않는 속성을 지정했습니다.</li></ul> |

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Example error response_

<!-- tab start `json` -->

```json
// When the coupon title exceeds 60 characters
{
  "message": "The request body has 1 error(s)",
  "details": [
    {
      "message": "Size must be between 1 and 60",
      "property": "title"
    }
  ]
}

// When an invalid coupon type is specified
{
  "message": "The request body has 1 error(s)",
  "details": [
    {
      "message": "Must be one of the following values: [discount,free,gift,cashBack,others]",
      "property": "reward.type"
    }
  ]
}

// When the number of valid coupons exceeds the limit
{
  "message": "The request body has 1 error(s)",
  "details": [
    {
      "message": "You have too many coupons created.",
      "property": ""
    }
  ]
}

// When priceInfo.type is percentage in the reward object, but fixedAmount is specified
{
  "message": "The request body has 1 error(s)",
  "details": [
    {
      "message": "Must not be specified",
      "property": "reward.priceInfo.fixedAmount"
    }
  ]
}
```

<!-- tab end -->

### Discontinue a coupon 

Endpoint: `PUT` `https://api.line.me/v2/bot/coupon/{couponId}/close`

지정한 쿠폰을 중단합니다.

쿠폰이 중단되면 메시지로 쿠폰을 이미 받은 사용자도 더 이상 쿠폰을 얻을 수 없으며, 이미 쿠폰을 얻은 사용자도 더 이상 사용할 수 없습니다.

중단된 쿠폰은 다시 활성화할 수 없습니다.

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X PUT https://api.line.me/v2/bot/coupon/01JYNW8JMQVFBNWF1APF8Z3FS7/close \
-H 'Authorization: Bearer {channel access token}' \
-H 'Content-Type: application/json'
```

<!-- tab end -->

#### Rate limit 

초당 200회 요청

[LINE Official Account Manager](https://developers.line.biz/en/glossary/#line-oa-manager)를 사용하여 쿠폰을 중단하는 경우에는 이 제한이 적용되지 않습니다.

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->
<!-- parameter start (props: required) -->

Content-Type

application/json

<!-- parameter end -->

#### Path parameters 

<!-- parameter start (props: required) -->

couponId

String

중단할 쿠폰의 쿠폰 ID입니다.

<!-- parameter end -->

#### Response 

`200` HTTP 상태 코드와 빈 JSON 객체가 반환됩니다.

_Response example_

<!-- tab start `json` -->

```json
{}
```

<!-- tab end -->

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code  | Description                                                 |
| ----- | ----------------------------------------------------------- |
| `410` | 이미 중단된 쿠폰의 쿠폰 ID를 지정했습니다. |
| `404` | 지정한 쿠폰이 존재하지 않습니다.                         |

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Example error response_

<!-- tab start `json` -->

```json
// If the specified coupon is already discontinued (410 Gone)
{
  "message": "The request body has 1 error(s)",
  "details": [
    {
      "message": "The coupon has already been closed.",
      "property": ""
    }
  ]
}

// If you specify a non-existent coupon ID (404 Not Found)
{
  "message": "The request body has 1 error(s)",
  "details": [
    {
      "message": "coupon not found",
      "property": ""
    }
  ]
}
```

<!-- tab end -->

### Get a list of coupons 

Endpoint: `GET` `https://api.line.me/v2/bot/coupon`

쿠폰 ID와 쿠폰 제목을 포함한 쿠폰 목록을 가져옵니다. 유효한 쿠폰 또는 중단된 쿠폰만 가져올 수도 있습니다.

이 쿠폰 목록에는 Messaging API와 [LINE Official Account Manager](https://manager.line.biz/)에서 만든 쿠폰이 모두 포함됩니다. LINE Official Account Manager에서도 같은 목록을 볼 수 있습니다.

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X GET https://api.line.me/v2/bot/coupon \
-H 'Authorization: Bearer {channel access token}'
-d 'limit=100' \
-d 'status=DRAFT,RUNNING' \
-G
```

<!-- tab end -->

#### Rate limit 

초당 200회 요청

[LINE Official Account Manager](https://developers.line.biz/en/glossary/#line-oa-manager)를 사용하여 쿠폰 목록을 확인하는 경우에는 이 제한이 적용되지 않습니다.

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->

#### Query parameters 

<!-- parameter start (props: optional) -->

limit

Number

한 번의 요청으로 가져올 쿠폰의 최대 개수입니다. 기본값은 `20`입니다.\
최대값: `100`

<!-- parameter end -->
<!-- parameter start (props: optional) -->

start

String

[응답](https://developers.line.biz/en/reference/messaging-api/#get-coupons-list-response)으로 반환된 JSON 객체의 `next` 속성에 있는 continuation token 값입니다. 한 번의 요청으로 모든 쿠폰을 가져올 수 없으면 이 파라미터를 포함하여 나머지 쿠폰을 가져오십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

status

반환할 쿠폰의 상태입니다. 생략하면 모든 상태의 쿠폰이 포함됩니다.

- `DRAFT`: 임시 저장된 쿠폰입니다.
- `RUNNING`: 예정되었거나 유효한 쿠폰입니다.
- `CLOSED`: 만료되었거나 중단된 쿠폰입니다.

여러 파라미터를 지정하면 OR 조건이 사용됩니다.

<!-- parameter end -->

#### Response 

`200` 상태 코드와 다음 속성을 가진 JSON 객체가 반환됩니다.

<!-- parameter start -->

items

Array of objects

쿠폰을 나타내는 객체의 배열입니다.\
최대: `limit`에 지정한 개수

<!-- parameter end -->
<!-- parameter start -->

items\[].couponId

String

쿠폰 ID입니다.

<!-- parameter end -->
<!-- parameter start -->

items\[].title

String

쿠폰 제목입니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

next

String

다음 쿠폰을 가져오기 위한 continuation token입니다. 응답의 `items` 속성에서 가져오지 못한 쿠폰이 남아 있을 때만 반환됩니다.

Continuation token은 24시간(86,400초) 동안 유효합니다.

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

```json
// When all coupons are retrieved
{
  "items": [
    {
      "couponId": "01JZMWQ9HMDW9ENJP4C167CXP8",
      "title": "Year-end and New Year coupon"
    },
    {
      "couponId": "01JZA9NPPFDJ3RFG8NA9DJ0NQT",
      "title": "Friends-only coupon"
    }
  ]
}

// When there are still coupons that couldn't be retrieved
{
  "next": "MTAwMDU3MjAxOjE3NTI1Njk5NDU2MjE6WXBPRHo1N3VjL3hPMkcxVEZPVGY1eW9YS3BqL2R2TGVEdit2V3J0ckczVT0=",
  "items": [
    {
      "couponId": "01JZMWQ9HMDW9ENJP4C167CXP8",
      "title": "Year-end and New Year coupon"
    },
    {
      "couponId": "01JZA9NPPFDJ3RFG8NA9DJ0NQT",
      "title": "Friends-only coupon"
    }
  ]
}

// When no matching coupons are found
{
  "items": []
}
```

<!-- tab end -->

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code | Description |
| --- | --- |
| `400` | 쿠폰 목록을 가져오지 못했습니다. 가능한 원인은 다음과 같습니다.<ul><li>잘못된 status를 지정했습니다.</li><li>가져올 쿠폰의 최대 개수가 100을 초과합니다.</li></ul> |

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Example error response_

<!-- tab start `json` -->

```json
// When an invalid status is specified (400 Bad Request)
{
  "message": "The request body has 1 error(s)",
  "details": [
    {
      "message": "Must be one of the following values: [DRAFT,RUNNING,CLOSED]",
      "property": "status"
    }
  ]
}

// When the maximum number of coupons to retrieve exceeds 100
{
  "message": "The request body has 1 error(s)",
  "details": [
    {
      "message": "Must be less than or equal to 100",
      "property": "limit"
    }
  ]
}
```

<!-- tab end -->

### Get details of a coupon 

Endpoint: `GET` `https://api.line.me/v2/bot/coupon/{couponId}`

지정한 쿠폰의 세부 정보를 가져옵니다.

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X GET https://api.line.me/v2/bot/coupon/01JYNW8JMQVFBNWF1APF8Z3FS7 \
-H 'Authorization: Bearer {channel access token}'
```

<!-- tab end -->

#### Rate limit 

초당 200회 요청

[LINE Official Account Manager](https://developers.line.biz/en/glossary/#line-oa-manager)를 사용하여 쿠폰 세부 정보를 확인하는 경우에는 이 제한이 적용되지 않습니다.

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->

#### Path parameters 

<!-- parameter start (props: required) -->

couponId

String

세부 정보를 가져올 쿠폰의 ID입니다.

<!-- parameter end -->

#### Response 

`200` 상태 코드와 다음 속성을 가진 JSON 객체가 반환됩니다.

<!-- parameter start -->

couponId

String

쿠폰의 쿠폰 ID입니다.

<!-- parameter end -->
<!-- parameter start -->

title

String

쿠폰 제목입니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

description

String

쿠폰 사용 안내입니다.

<!-- parameter end -->
<!-- parameter start -->

acquisitionCondition

Object

쿠폰 획득 조건을 담은 객체입니다.

<!-- parameter end -->
<!-- parameter start -->

acquisitionCondition.type

String

쿠폰 획득 조건의 유형입니다.\
다음 값 중 하나입니다.

- `normal`: 조건 없음. 모든 사용자가 획득할 수 있습니다.
- `lottery`: 추첨. 추첨에 당첨된 사용자만 획득할 수 있습니다.
- `referral`: 친구 추천. 쿠폰을 추천한 사용자와 추천을 받은 사용자 모두 획득할 수 있습니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

acquisitionCondition.lotteryProbability

Number

쿠폰 당첨 확률(%)을 1에서 99 사이의 정수로 나타냅니다.\
`acquisitionCondition.type`이 `lottery`인 경우에 포함됩니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

acquisitionCondition.maxAcquireCount

Number

당첨자 수의 상한을 1에서 999999 사이의 정수로 나타냅니다.\
상한이 없으면 값은 `-1`입니다.\
`acquisitionCondition.type`이 `lottery`인 경우에 포함됩니다.

<!-- parameter end -->
<!-- parameter start -->

maxUseCountPerTicket

Number

쿠폰을 사용할 수 있는 횟수입니다. \
다음 값 중 하나입니다.

- `1`: 한 번만
- `-1`: 제한 없음

<!-- parameter end -->
<!-- parameter start -->

maxTicketPerUser

Number

사용자 한 명이 획득할 수 있는 쿠폰의 개수입니다.\
`acquisitionCondition.type`이 `referral`이면 1에서 30 사이의 정수입니다. 그 밖의 경우 값은 `1`입니다.

<!-- parameter end -->
<!-- parameter start -->

startTimestamp

Number

쿠폰 유효 기간의 시작 날짜와 시간을 UNIX time(초 단위)으로 나타냅니다.

<!-- parameter end -->
<!-- parameter start -->

endTimestamp

Number

쿠폰 유효 기간의 종료 날짜와 시간을 UNIX time(초 단위)으로 나타냅니다.

<!-- parameter end -->
<!-- parameter start -->

timezone

String

유효 기간의 기준이 되는 시간대입니다.\
다음 값 중 하나입니다.

- `ETC_GMT_MINUS_12`: (UTC-12:00) Etc/GMT-12
- `ETC_GMT_MINUS_11`: (UTC-11:00) Etc/GMT-11
- `PACIFIC_HONOLULU`: (UTC-10:00) Pacific/Honolulu
- `AMERICA_ANCHORAGE`: (UTC-09:00) America/Anchorage
- `AMERICA_LOS_ANGELES`: (UTC-08:00) America/Los_Angeles, Santa_Isabel
- `AMERICA_PHOENIX`: (UTC-07:00) America/Phoenix, Denver
- `AMERICA_CHICAGO`: (UTC-06:00) America/Chicago, Guatemala
- `AMERICA_NEW_YORK`: (UTC-05:00) America/New_York, Indiana/Indianapolis
- `AMERICA_CARACAS`: (UTC-04:30) America/Caracas
- `AMERICA_SANTIAGO`: (UTC-04:00) America/Santiago, Cuiaba
- `AMERICA_ST_JOHNS`: (UTC-03:30) America/St_Johns
- `AMERICA_SAO_PAULO`: (UTC-03:00) America/Sao_Paulo, Argentina/Buenos_Aires
- `ETC_GMT_MINUS_2`: (UTC-02:00) Etc/GMT-2
- `ATLANTIC_CAPE_VERDE`: (UTC-01:00) Atlantic/Cape_Verde, Azores
- `EUROPE_LONDON`: (UTC+00:00) Europe/London, Etc/GMT
- `EUROPE_PARIS`: (UTC+01:00) Europe/Paris, Berlin
- `EUROPE_ISTANBUL`: (UTC+02:00) Europe/Istanbul, Kiev
- `EUROPE_MOSCOW`: (UTC+03:00) Europe/Moscow, Minsk
- `ASIA_TEHRAN`: (UTC+03:30) Asia/Tehran
- `ASIA_TBILISI`: (UTC+04:00) Asia/Tbilisi, Yerevan
- `ASIA_KABUL`: (UTC+04:30) Asia/Kabul
- `ASIA_TASHKENT`: (UTC+05:00) Asia/Tashkent, Karachi
- `ASIA_COLOMBO`: (UTC+05:30) Asia/Colombo, Kolkata
- `ASIA_KATHMANDU`: (UTC+05:45) Asia/Kathmandu
- `ASIA_ALMATY`: (UTC+06:00) Asia/Almaty, Dhaka
- `ASIA_RANGOON`: (UTC+06:30) Asia/Rangoon
- `ASIA_BANGKOK`: (UTC+07:00) Asia/Bangkok, Jakarta
- `ASIA_TAIPEI`: (UTC+08:00) Asia/Taipei, Singapore
- `ASIA_TOKYO`: (UTC+09:00) Asia/Tokyo, Seoul
- `AUSTRALIA_DARWIN`: (UTC+09:30) Australia/Darwin, Adelaide
- `AUSTRALIA_SYDNEY`: (UTC+10:00) Australia/Sydney, Brisbane
- `ASIA_VLADIVOSTOK`: (UTC+11:00) Asia/Vladivostok, Pacific/Guadalcanal
- `ETC_GMT_PLUS_12`: (UTC+12:00) Etc/GMT+12
- `PACIFIC_TONGATAPU`: (UTC+13:00) Pacific/Tongatapu, Apia

<!-- parameter end -->
<!-- parameter start -->

reward

Object

쿠폰 유형 정보를 담은 [Reward 객체](https://developers.line.biz/en/reference/messaging-api/#get-coupon-reward-object)입니다.

<!-- parameter end -->
<!-- parameter start -->

visibility

String

LY Corporation 서비스에 쿠폰을 표시할지 여부입니다.\
다음 값 중 하나입니다.

- `PUBLIC`: 표시합니다.
- `UNLISTED`: 표시하지 않습니다.

자세한 내용은 LINE for Business의 [Display coupon in LY Corporation services](https://www.lycbiz.com/jp/manual/OfficialAccountManager/coupons-service/)(일본어만 제공)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

imageUrl

String

쿠폰 이미지의 URL입니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

couponCode

String

쿠폰을 열면 표시되는 쿠폰 코드입니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

barcodeImageUrl

String

URL of the barcode image displayed after opening the coupon.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

usageCondition

String

Coupon usage conditions.

<!-- parameter end -->
<!-- parameter start -->

status

The status of the coupon.

- `DRAFT`: Draft saved coupon.
- `RUNNING`: Upcoming or valid coupon.
- `CLOSED`: Expired or discontinued coupon.

<!-- parameter end -->
<!-- parameter start -->

createdTimestamp

Number

Creation date and time of the coupon in UNIX time (in seconds).

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

```json
{
  "couponId": "01K0B456W5Y6SBD3YH74YM6QE6",
  "title": "Friends-only coupon",
  "description": "- To redeem your coupon, present this screen at checkout.\n- Redeemable once only, even if previously redeemed only unintentionally by the customer.\n- The validity period of this coupon may change or it may be canceled without notice.",
  "acquisitionCondition": {
    "type": "lottery",
    "lotteryProbability": 50,
    "maxAcquireCount": -1
  },
  "startTimestamp": 1752678000,
  "endTimestamp": 1924959540,
  "timezone": "ASIA_TOKYO",
  "couponCode": "COUPONCODE123456",
  "maxUseCountPerTicket": 1,
  "maxTicketPerUser": 1,
  "visibility": "UNLISTED",
  "reward": {
    "type": "discount",
    "priceInfo": {
      "type": "fixed",
      "fixedAmount": 100,
      "currency": "JPY"
    }
  },
  "imageUrl": "https://oa-coupon.line-scdn-dev.net/0h9gbUqRVkZkhfLHhXMLYZHwdyaCosWGBAPFR7cD5tZidsTnofYDVfezt-ZAR3YER9OzRfK35XZwR6TH5uYDF2TnJ-cBNyfURpPRl2RSFSXQc0TiJhYCFiXiZ8XXk0",
  "usageCondition": "Usable for payments of 1,000 yen or more",
  "status": "RUNNING",
  "createdTimestamp": 1752720120
}
```

<!-- tab end -->

##### Reward object 

<!-- parameter start -->

type

String

Coupon type.\
One of the following values:

- `discount`: Discount
- `free`: Free
- `gift`: Gift
- `cashBack`: Cashback
- `others`: Others

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

priceInfo

Object

Object containing discount or cashback details.\
Included when `type` is `discount` and `cashBack`.

<!-- parameter end -->
<!-- parameter start -->

priceInfo.type

String

Type of coupon discount details.

When `type` is `discount`, one of the following values:

- `fixed`: Display discount amount
- `percentage`: Display discount percentage
- `explicit`: Cross out original price and display discounted price

When `type` is `cashBack`, one of the following values:

- `fixed`: Display cashback amount
- `percentage`: Display cashback percentage

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

priceInfo.fixedAmount

Number

The discount amount.\
Included when `priceInfo.type` is `fixed`.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

priceInfo.percentage

Number

The discount rate (%).\
Included when `priceInfo.type` is `percentage`.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

priceInfo.originalPrice

Number

The price before discount.\
Included when `priceInfo.type` is `explicit`.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

priceInfo.priceAfterDiscount

Number

The price after discount.\
Included when `priceInfo.type` is `explicit`.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

priceInfo.currency

Number

The currency unit. Automatically set according to the country or region of the LINE Official Account.\
Included when `priceInfo.type` is `fixed` or `explicit`.

- `TWD`: Taiwan Dollar (Taiwan)
- `THB`: Thai Baht (Thailand)
- `JPY`: Japanese Yen (All other countries and regions)

<!-- parameter end -->

_Reward object examples_

<!-- tab start `json` -->

```json
// 1,500 yen discount
{
  "type": "discount",
  "priceInfo": {
    "type": "fixed",
    "fixedAmount": 1500,
    "currency": "JPY"
  }
}

// 25% discount
{
  "type": "discount",
  "priceInfo": {
    "type": "percentage",
    "percentage": 25
  }
}

// Cross out the original price of 12,000 yen and display the discounted price of 9,500 yen
{
  "type": "discount",
  "priceInfo": {
    "type": "explicit",
    "originalPrice": 12000,
    "priceAfterDiscount": 9500,
    "currency": "JPY"
  }
}

// Free
{
  "type": "free"
}

// Gift
{
  "type": "gift"
}

// 100 yen cashback
{
  "type": "cashBack",
  "priceInfo": {
    "type": "fixed",
    "fixedAmount": 100,
    "currency": "JPY"
  }
}

// 30% cashback
{
  "type": "cashBack",
  "priceInfo": {
    "type": "percentage",
    "percentage": 30
  }
}

// Others
{
  "type": "others"
}
```

<!-- tab end -->

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code | Description |
| --- | --- |
| `404` | 지정한 쿠폰이 존재하지 않습니다. 다음 원인을 확인하십시오.<ul><li>다른 채널에서 만든 쿠폰을 지정했습니다.</li></ul> |

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Example error response_

<!-- tab start `json` -->

```json
// If you specify a non-existent coupon ID (404 Not Found)
{
  "message": "The request body has 1 error(s)",
  "details": [
    {
      "message": "coupon not found",
      "property": ""
    }
  ]
}
```

<!-- tab end -->

## Users 

LINE Official Account를 친구로 추가한 사용자의 정보를 가져올 수 있습니다.

<!-- note start -->

**Accessing your own user ID**

[LINE Developers Console](https://developers.line.biz/console/)에서 채널의 **Basic settings** 탭으로 이동하면 자신의 사용자 ID를 확인할 수 있습니다. LINE Developers Console의 역할별 권한에 대한 자세한 내용은 [Managing roles](https://developers.line.biz/en/docs/line-developers-console/managing-roles/)의 [Channel roles](https://developers.line.biz/en/docs/line-developers-console/managing-roles/#roles-for-channel)을 참조하십시오. 자신의 사용자 ID를 가져오는 API는 없습니다.

<!-- note end -->

### Get profile 

Endpoint: `GET` `https://api.line.me/v2/bot/profile/{userId}`

다음 두 가지 조건 중 하나를 충족하는 사용자의 프로필 정보를 가져올 수 있습니다.

- LINE Official Account를 친구로 추가한 사용자
- LINE Official Account를 친구로 추가하지 않았지만 LINE Official Account에 메시지를 보낸 사용자(LINE Official Account를 차단한 사용자는 제외)

기본 프로필 정보만 가져올 수 있습니다. 사용자의 [subprofile](https://developers.line.biz/en/glossary/#subprofile)은 가져올 수 없습니다.

<!-- note start -->

**Note**

LINE Official Account를 차단한 사용자의 프로필 정보는 가져올 수 없습니다.

<!-- note end -->

<!-- tip start -->

**Profile information of group chat members and multi-person chat members**

그룹 채팅 멤버 또는 다인 채팅 멤버의 프로필 정보를 가져오려면 다음 endpoint를 사용하십시오.

- [Get group chat member profile](https://developers.line.biz/en/reference/messaging-api/#get-group-member-profile)
- [Get multi-person chat member profile](https://developers.line.biz/en/reference/messaging-api/#get-room-member-profile)

<!-- tip end -->

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X GET https://api.line.me/v2/bot/profile/{userId} \
-H 'Authorization: Bearer {channel access token}'
```

<!-- tab end -->

#### Rate limit 

초당 2,000회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->

#### Path parameters 

<!-- parameter start (props: required) -->

userId

[webhook event object](https://developers.line.biz/en/reference/messaging-api/#webhook-event-objects)에서 반환되는 사용자 ID입니다. LINE에서 확인할 수 있는 LINE ID는 사용하지 마십시오.

<!-- parameter end -->

#### Response 

지정한 사용자 ID가 올바르면 상태 코드 `200`과 다음 정보를 담은 JSON 객체가 반환됩니다.

<!-- parameter start -->

displayName

String

사용자의 표시 이름

<!-- parameter end -->
<!-- parameter start -->

userId

String

사용자 ID

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

language

String

사용자의 언어로, [BCP 47](https://www.rfc-editor.org/info/bcp47/) 언어 태그입니다. 사용자가 아직 LY Corporation 개인정보 처리방침에 동의하지 않았으면 응답에 포함되지 않습니다.\
예: 영어인 경우 `en`

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

pictureUrl

String

프로필 이미지 URL입니다. "https" 이미지 URL입니다. 사용자가 프로필 이미지를 가지고 있지 않으면 응답에 포함되지 않습니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

statusMessage

String

사용자의 상태 메시지입니다. 사용자가 상태 메시지를 가지고 있지 않으면 응답에 포함되지 않습니다.

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

```json
{
  "displayName": "LINE taro",
  "userId": "U4af4980629...",
  "language": "en",
  "pictureUrl": "https://profile.line-scdn.net/ch/v2/p/uf9da5ee2b...",
  "statusMessage": "Hello, LINE!"
}
```

<!-- tab end -->

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code | Description |
| --- | --- |
| `400` | 잘못된 사용자 ID를 지정했습니다. |
| `404` | 프로필 정보를 가져올 수 없습니다. 다음 원인을 확인하십시오.<ul><li>대상 사용자 ID가 존재하지 않습니다.</li><li>사용자가 프로필 정보를 가져오는 것에 동의하지 않았습니다.</li><li>사용자가 대상 LINE Official Account를 친구로 추가하지 않았습니다.</li><li>사용자가 대상 LINE Official Account를 친구로 추가한 후 차단했습니다.</li></ul>자세한 내용은 Messaging API 문서의 [Consent on getting user profile information](https://developers.line.biz/en/docs/messaging-api/user-consent/)을 참조하십시오. |

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Example error response_

<!-- tab start `json` -->

```json
// If you couldn't get profile information (404 Not Found)
{
  "message": "Not found"
}
```

<!-- tab end -->

### Get a list of users who added your LINE Official Account as a friend 

Endpoint: `GET` `https://api.line.me/v2/bot/followers/ids`

<!-- note start -->

**Note**

이 기능은 인증 계정 또는 [premium accounts](https://developers.line.biz/en/glossary/#premium-account)에서만 사용할 수 있습니다. 계정 유형에 대한 자세한 내용은 LINE for Business의 [Account Types of LINE Official Account](https://www.linebiz.com/jp-en/service/line-official-account/account-type/) 페이지를 참조하십시오.

<!-- note end -->

LINE Official Account를 친구로 추가한 사용자의 [User ID](https://developers.line.biz/en/glossary/#user-id) 목록을 가져옵니다.

모든 사용자 ID를 가져오려면 [응답](https://developers.line.biz/en/reference/messaging-api/#get-follower-ids-response)에 `next` 속성이 더 이상 포함되지 않을 때까지 요청을 반복하십시오. 응답에 포함된 `next` 속성을 다음 요청의 `start`로 지정하여 요청을 반복합니다.

#### Restrictions on user IDs that can be obtained 

다음 사용자의 ID는 가져온 사용자 ID 목록에 포함되지 않습니다.

- LINE 계정을 삭제한 사용자
- LINE Official Account를 친구로 추가한 후 차단한 사용자
- 프로필 정보를 가져오는 것에 동의하지 않은 사용자. 자세한 내용은 Messaging API 문서의 [Consent on getting user profile information](https://developers.line.biz/en/docs/messaging-api/user-consent/)을 참조하십시오.

따라서 이 endpoint로 가져온 실제 사용자 ID 수는 LINE Official Account 비즈니스 프로필 또는 [LINE Official Account Manager](https://manager.line.biz/)에 표시되는 친구 수와 일치하지 않을 수 있습니다.

<!-- note start -->

**You may not be able to use the user IDs obtained**

이 endpoint로 가져온 사용자 ID로 메시지를 보내더라도 사용자의 동작에 따라 전송에 실패할 수 있습니다. 주요 실패 원인은 다음과 같습니다.

- 사용자 ID를 가져온 시점부터 메시지를 보내려고 시도하는 시점 사이에 사용자가 대상 LINE Official Account를 차단했습니다.
- 사용자가 대상 LINE Official Account를 친구로 추가한 후 [LINE 계정을 삭제](https://guide.line.me/ja/account-and-settings/line-account-delete.html)했습니다.

<!-- note end -->

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X GET https://api.line.me/v2/bot/followers/ids \
-H 'Authorization: Bearer {channel access token}' \
-d 'limit=1000' \
-d 'start=yANU9IA...' \
-G
```

<!-- tab end -->

#### Rate limit 

초당 2,000회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->

#### Query parameters 

<!-- parameter start (props: optional) -->

limit

Number

한 번의 요청으로 가져올 사용자 ID의 최대 개수입니다. 기본값은 `300`입니다.\
최대값: `1000`

<!-- parameter end -->
<!-- parameter start (props: optional) -->

start

String

[응답](https://developers.line.biz/en/reference/messaging-api/#get-follower-ids-response)으로 반환된 JSON 객체의 `next` 속성에 있는 continuation token 값입니다. 다음 사용자 ID 배열을 가져오려면 이 파라미터를 포함하십시오. 한 번의 요청으로 모든 사용자 ID를 가져올 수 없으면 이 파라미터를 지정하여 나머지 사용자 ID를 가져오십시오.

<!-- parameter end -->

#### Response 

상태 코드 `200`과 다음 속성을 가진 JSON 객체가 반환됩니다.

<!-- parameter start -->

userIds

Array of strings

LINE Official Account를 친구로 추가한 사용자의 사용자 ID를 나타내는 문자열의 배열입니다. [가져올 수 있는 사용자 ID의 제한](https://developers.line.biz/en/reference/messaging-api/#get-follower-ids-obtainable-ids) 때문에 `next` 속성이 반환되더라도 `userIds` 속성의 사용자 ID 수는 `limit`으로 지정한 최대 개수에 도달하지 않을 수 있습니다.\
최대: `limit`에 지정한 개수

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

next

String

다음 사용자 ID를 가져오기 위한 continuation token입니다. 이전 요청의 `userIds` 속성에서 반환되지 않은 사용자 ID가 남아 있을 때만 반환됩니다.

Continuation token은 24시간(86,400초) 후에 만료됩니다.

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

```json
{
  "userIds": ["U4af4980629...", "U0c229f96c4...", "U95afb1d4df..."],
  "next": "yANU9IA..."
}
```

<!-- tab end -->

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code | Description |
| --- | --- |
| `400` | 잘못된 continuation token을 지정했습니다. |
| `403` | 이 endpoint를 사용할 권한이 없습니다. 인증 계정 또는 [premium accounts](https://developers.line.biz/en/glossary/#premium-account)에서만 사용할 수 있습니다. |

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Error response example_

<!-- tab start `json` -->

```json
// If you specify an invalid continuation token, such as expired (400 Bad Request)
{
  "message": "Invalid start param"
}
```

<!-- tab end -->

## Membership 

LINE Official Account의 멤버십 정보를 가져올 수 있습니다. 자세한 내용은 Messaging API 문서의 [Use membership features](https://developers.line.biz/en/docs/messaging-api/use-membership-features/)를 참조하십시오.

### Get a user's membership subscription status 

Endpoint: `GET` `https://api.line.me/v2/bot/membership/subscription/{userId}`

사용자가 가입한 멤버십의 정보를 가져올 수 있습니다.

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X GET https://api.line.me/v2/bot/membership/subscription/{userId} \
-H 'Authorization: Bearer {channel access token}'
```

<!-- tab end -->

#### Rate limit 

초당 200회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->

#### Path parameters 

<!-- parameter start (props: required) -->

userId

멤버십 구독 상태를 확인할 사용자의 사용자 ID입니다.

사용자 ID를 가져오는 방법은 Messaging API 문서의 [Get user IDs](https://developers.line.biz/en/docs/messaging-api/getting-user-ids/)를 참조하십시오.

<!-- parameter end -->

#### Response 

사용자가 멤버십을 구독하고 있으면 상태 코드 `200`과 다음 정보를 담은 JSON 객체가 반환됩니다.

<!-- parameter start -->

subscriptions

Array

멤버십의 배열입니다.

<!-- parameter end -->
<!-- parameter start -->

membership

Object

멤버십 플랜에 대한 정보를 담은 객체입니다.

<!-- parameter end -->
<!-- parameter start -->

membership.membershipId

Number

멤버십 플랜 ID입니다.

<!-- parameter end -->
<!-- parameter start -->

membership.title

String

멤버십 플랜의 이름입니다.

<!-- parameter end -->
<!-- parameter start -->

membership.description

String

멤버십 플랜의 설명입니다.

<!-- parameter end -->
<!-- parameter start -->

membership.benefits

Array of strings

멤버십 플랜의 혜택 목록입니다. \
최대 혜택 수: 5개

<!-- parameter end -->
<!-- parameter start -->

membership.price

Number

멤버십 플랜의 월 이용료입니다(예: `1500.00`).

<!-- parameter end -->
<!-- parameter start -->

membership.currency

String

`membership.price`의 통화입니다. 다음 중 하나입니다.

- `JPY`: 일본 엔
- `TWD`: 대만 달러
- `THB`: 태국 바트

<!-- parameter end -->
<!-- parameter start -->

user

Object

사용자의 멤버십 구독 정보를 담은 객체입니다.

<!-- parameter end -->
<!-- parameter start -->

user.membershipNo

Number

멤버십 플랜에서 사용자의 회원 번호입니다.

<!-- parameter end -->
<!-- parameter start -->

user.joinedTime

Number

사용자가 멤버십을 구독한 UNIX time(초 단위)입니다.

<!-- parameter end -->
<!-- parameter start -->

user.nextBillingDate

String

멤버십 플랜의 다음 결제일입니다.

- 형식: `yyyy-MM-dd`(예: `2024-02-08`)
- 시간대: UTC+9

<!-- parameter end -->
<!-- parameter start -->

user.totalSubscriptionMonths

Number

사용자가 멤버십 플랜을 구독한 기간(개월 수)입니다. 사용자가 이전에 구독을 취소한 후 같은 멤버십 플랜을 다시 구독한 경우에는 재구독 이후의 기간만 집계됩니다.

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

```json
{
  "subscriptions": [
    {
      "membership": {
        "membershipId": 3189,
        "title": "Basic Plan",
        "description": "You will receive messages and photos every Saturday.",
        "benefits": ["Members Only Messages", "Members Only Photos"],
        "price": 500.00,
        "currency": "JPY"
      },
      "user": {
        "membershipNo": 1,
        "joinedTime": 1707214784,
        "nextBillingDate": "2024-02-08",
        "totalSubscriptionMonths": 1
      }
    }
  ]
}
```

<!-- tab end -->

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code | Description |
| --- | --- |
| `400` | 잘못된 사용자 ID를 지정했습니다. |
| `404` | 사용자가 구독하는 멤버십 정보를 가져올 수 없습니다. 다음 원인을 확인하십시오.<ul><li>사용자가 멤버십을 구독하지 않았습니다.</li><li>대상 사용자 ID가 존재하지 않습니다.</li></ul> |

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Example error response_

<!-- tab start `json` -->

```json
// If you specify an invalid user ID (400 Bad Request)
{
  "message": "The value for the 'userId' parameter is invalid"
}

// If user doesn't subscribe to membership (404 Not Found)
{
  "message": "Not found"
}
```

<!-- tab end -->

### Get a list of users who have joined the membership 

Endpoint: `GET` `https://api.line.me/v2/bot/membership/{membershipId}/users/ids`

LINE Official Account의 멤버십에 가입한 사용자의 사용자 ID 목록을 가져올 수 있습니다.

#### Restrictions on user IDs that can be obtained 

사용자가 멤버십에 가입했더라도 다음 조건 중 하나라도 해당하면 그 사용자의 사용자 ID는 목록에 포함되지 않습니다.

- 사용자가 LINE 계정을 삭제했습니다.
- 사용자가 LINE Official Account를 차단했습니다.
- 사용자가 LINE Official Account를 친구로 추가하지 않았습니다.
- 사용자가 프로필 정보에 대한 접근을 허용하는 데 동의하지 않았습니다. 자세한 내용은 Messaging API 문서의 [Consent on getting user profile information](https://developers.line.biz/en/docs/messaging-api/user-consent/)을 참조하십시오.

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X GET https://api.line.me/v2/bot/membership/{membershipId}/users/ids \
-H 'Authorization: Bearer {channel access token}' \
-d 'limit={limit}' \
-d 'start={start}' \
-G
```

<!-- tab end -->

#### Rate limit 

초당 200회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->

#### Path parameters 

<!-- parameter start (props: required) -->

membershipId

멤버십 ID입니다.

<!-- parameter end -->

#### Query parameters 

<!-- parameter start (props: optional) -->

limit

Number

한 번의 요청으로 가져올 사용자 ID의 최대 개수입니다. 기본값은 `300`입니다.\
최대값: `1000`

<!-- parameter end -->
<!-- parameter start (props: optional) -->

start

The value of the continuation token. This is included in the `next` property of the JSON object returned in the [response](https://developers.line.biz/en/reference/messaging-api/#get-follower-ids-response). If you can't obtain all of the user IDs in a single request, you can specify this parameter to obtain the remaining array.

<!-- parameter end -->

#### Response 

Returns status code `200` and a JSON object with the following properties.

<!-- parameter start -->

userIds

Array of strings

An array of the user IDs of users who have joined the membership. The number of user IDs contained in the `userIds` property may not always be the same as the number specified by the `limit` query parameter, even when the `next` property is returned, because the user IDs that can be obtained depend on the users' status. For more information, see [Restrictions on user IDs that can be obtained](https://developers.line.biz/en/reference/messaging-api/#get-membership-user-ids-restrictions).\
Max: The number specified by the `limit` query parameter

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

next

String

Continuation token. Used to obtain the list of the next user IDs. This property is only returned if there are user IDs that couldn't be obtained from the previous response's `userIds` property.

The continuation token expires in 24 hours (86,400 seconds).

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

```json
{
  "userIds": ["U4af4980629...", "U0c229f96c4...", "U95afb1d4df..."],
  "next": "yANU9IA..."
}
```

<!-- tab end -->

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code | Description |
| --- | --- |
| `400` | 요청에 문제가 있습니다. 다음 원인을 확인하십시오.<ul><li>잘못된 continuation token을 지정했습니다.</li><li>`limit` 쿼리 파라미터에 잘못된 값을 지정했습니다.</li></ul> |
| `404` | `membershipId` 경로 파라미터에 존재하지 않는 멤버십 ID를 지정했습니다. |

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Example error response_

<!-- tab start `json` -->

```json
// If you specify a membership ID that doesn't exist in the membershipId path parameter (404 Not Found)
{
  "message": "Membership ID is not found"
}
```

<!-- tab end -->

### Get membership plans being offered 

Endpoint: `GET` `https://api.line.me/v2/bot/membership/list`

LINE Official Account 멤버십을 통해 현재 제공 중인 멤버십 플랜을 가져올 수 있습니다.

심사 중인 플랜이나 종료된 플랜은 응답에 포함되지 않습니다.

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X GET https://api.line.me/v2/bot/membership/list \
-H 'Authorization: Bearer {channel access token}'
```

<!-- tab end -->

#### Rate limit 

초당 200회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->

#### Response 

상태 코드 `200`과 다음 속성을 가진 JSON 객체가 반환됩니다.

<!-- parameter start -->

memberships

Array

제공 중인 멤버십 플랜의 배열입니다. \
최대 플랜 수: 5개

<!-- parameter end -->
<!-- parameter start -->

memberships\[].membershipId

Number

멤버십 플랜 ID입니다.

<!-- parameter end -->
<!-- parameter start -->

memberships\[].title

String

멤버십 플랜의 이름입니다.

<!-- parameter end -->
<!-- parameter start -->

memberships\[].description

String

멤버십 플랜의 설명입니다.

<!-- parameter end -->
<!-- parameter start -->

memberships\[].benefits

Array of strings

멤버십 플랜의 혜택 목록입니다. \
최대 혜택 수: 5개

<!-- parameter end -->
<!-- parameter start -->

memberships\[].price

Number

멤버십 플랜의 월 이용료입니다(예: `1500.00`).

<!-- parameter end -->
<!-- parameter start -->

memberships\[].currency

String

`memberships[].price`의 통화입니다. 다음 중 하나입니다.

- `JPY`: 일본 엔
- `TWD`: 대만 달러
- `THB`: 태국 바트

<!-- parameter end -->
<!-- parameter start -->

memberships\[].memberCount

Number

멤버십 플랜에 가입한 멤버의 수입니다.

<!-- parameter end -->
<!-- parameter start -->

memberships\[].memberLimit

Number

가입할 수 있는 멤버의 상한입니다. 상한이 설정되어 있지 않으면 `null`입니다.

<!-- parameter end -->
<!-- parameter start -->

memberships\[].isInAppPurchase

Boolean

멤버십 플랜에 가입하는 사용자의 결제 방식입니다.

- `true`: 인앱 결제
- `false`: 브라우저 결제

<!-- parameter end -->
<!-- parameter start -->

memberships\[].isPublished

Boolean

멤버십 플랜의 상태입니다.

- `true`: 공개
- `false`: 비공개(플랜이 중단되어 더 이상 공개되지 않지만 혜택은 계속 제공됩니다)

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

```json
{
  "memberships": [
    {
      "membershipId": 3189,
      "title": "Basic Plan",
      "description": "You will receive messages and photos every Saturday.",
      "benefits": ["Members Only Messages", "Members Only Photos"],
      "price": 500.00,
      "currency": "JPY",
      "memberCount": 1,
      "memberLimit": null,
      "isInAppPurchase": true,
      "isPublished": true
    },
    {
      "membershipId": 3213,
      "title": "Premium Plan",
      "description": "Invitation to a special party.",
      "benefits": ["Members Only Party"],
      "price": 1500.00,
      "currency": "JPY",
      "memberCount": 0,
      "memberLimit": null,
      "isInAppPurchase": false,
      "isPublished": true
    }
  ]
}
```

<!-- tab end -->

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code  | Description                  |
| ----- | ---------------------------- |
| `404` | 제공 중인 멤버십 플랜이 없습니다. |

자세한 내용은 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오. ([Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션 참조)

_Error response example_

<!-- tab start `json` -->

```json
// No membership plan offered (404 Not Found)
{
  "message": "Membership plan not found"
}
```

<!-- tab end -->

## LINE Official Account (bot) 

LINE Official Account(bot)의 기본 정보를 가져올 수 있습니다.

### Get LINE Official Account (bot) info 

Endpoint: `GET` `https://api.line.me/v2/bot/info`

LINE Official Account(bot)의 기본 정보를 가져옵니다.

_Example request_

<!-- tab start `shell` -->

```sh
curl -X GET \
-H 'Authorization: Bearer {channel access token}' \
https://api.line.me/v2/bot/info
```

<!-- tab end -->

#### Rate limit 

초당 2,000회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->

#### Response 

상태 코드 `200`과 다음 정보를 담은 JSON 객체가 반환됩니다.

<!-- parameter start -->

userId

String

LINE Official Account(bot)의 사용자 ID입니다.

<!-- parameter end -->
<!-- parameter start -->

basicId

String

LINE Official Account(bot)의 basic ID입니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

premiumId

String

LINE Official Account(bot)의 [premium ID](https://developers.line.biz/en/glossary/#premium-id)입니다. Premium ID가 설정되지 않은 경우 응답에 포함되지 않습니다.

<!-- parameter end -->
<!-- parameter start -->

displayName

String

LINE Official Account(bot)의 표시 이름입니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

pictureUrl

String

프로필 이미지 URL입니다. "https" 이미지 URL입니다. LINE Official Account(bot)에 프로필 이미지가 없으면 응답에 포함되지 않습니다.

<!-- parameter end -->
<!-- parameter start -->

chatMode

String

[LINE Official Account Manager](https://manager.line.biz)에서 설정한 채팅 설정입니다. 다음 중 하나입니다.

- `chat`: 채팅이 "On"으로 설정되어 있습니다.
- `bot`: 채팅이 "Off"로 설정되어 있습니다.

<!-- parameter end -->
<!-- parameter start -->

markAsReadMode

String

메시지의 자동 읽음 설정입니다. 채팅이 "Off"로 설정되어 있으면 `auto`가 반환됩니다. 채팅이 "On"으로 설정되어 있으면 `manual`이 반환됩니다.

- `auto`: 자동 읽음 설정이 활성화되어 있습니다.
- `manual`: 자동 읽음 설정이 비활성화되어 있습니다.

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

```json
{
  "userId": "Ub9952f8...",
  "basicId": "@216ru...",
  "displayName": "Example name",
  "pictureUrl": "https://profile.line-scdn.net/0hbGgpkVAb...",
  "chatMode": "chat",
  "markAsReadMode": "manual"
}
```

<!-- tab end -->

#### Error response 

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

## Group chats 

LINE Official Account가 참여하고 있는 그룹 채팅과 그 멤버에 대한 정보를 가져올 수 있습니다.

### Get group chat summary 

Endpoint: `GET` `https://api.line.me/v2/bot/group/{groupId}/summary`

LINE Official Account가 멤버로 참여하고 있는 그룹 채팅의 그룹 ID, 그룹 이름, 그룹 아이콘 URL을 가져옵니다.

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X GET https://api.line.me/v2/bot/group/{groupId}/summary \
-H 'Authorization: Bearer {channel access token}'
```

<!-- tab end -->

#### Rate limit 

초당 2,000회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->

#### Path parameters 

<!-- parameter start (props: required) -->

groupId

그룹 ID입니다. [webhook event object](https://developers.line.biz/en/reference/messaging-api/#webhook-event-objects)의 source 객체에서 확인할 수 있습니다.

<!-- parameter end -->

#### Response 

상태 코드 `200`과 다음 속성을 가진 JSON 객체가 반환됩니다.

<!-- parameter start -->

groupId

String

그룹 ID

<!-- parameter end -->
<!-- parameter start -->

groupName

String

그룹 이름

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

pictureUrl

String

그룹 아이콘 URL입니다. 사용자가 그룹 프로필 아이콘을 설정하지 않았으면 응답에 포함되지 않습니다.

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

```json
{
  "groupId": "Ca56f94637c...",
  "groupName": "Group name",
  "pictureUrl": "https://profile.line-scdn.net/abcdefghijklmn"
}
```

<!-- tab end -->

#### Error Response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code | Description |
| --- | --- |
| `400` | 잘못된 그룹 ID를 지정했습니다. |
| `404` | 존재하지 않는 그룹이거나 LINE Official Account가 참여하지 않은 그룹을 지정했습니다. |

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Example error response_

<!-- tab start `json` -->

```json
// If you specify an invalid group ID (400 Bad Request)
{
  "message": "The value for the 'groupId' parameter is invalid"
}

// If you specify a non-existent group or a group that your LINE Official Account doesn't participate in (404 Not Found)
{
  "message": "Not found"
}
```

<!-- tab end -->

### Get number of users in a group chat 

Endpoint: `GET` `https://api.line.me/v2/bot/group/{groupId}/members/count`

그룹 채팅에 있는 사용자 수를 가져옵니다. 사용자가 LINE Official Account를 친구로 추가하지 않았거나 차단했더라도 그룹 채팅의 사용자 수를 가져올 수 있습니다.

반환되는 수에는 LINE Official Account가 포함되지 않습니다.

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X GET https://api.line.me/v2/bot/group/{groupId}/members/count \
-H 'Authorization: Bearer {channel access token}'
```

<!-- tab end -->

#### Rate limit 

초당 2,000회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->

#### Path parameters 

<!-- parameter start (props: required) -->

groupId

그룹 ID입니다. [webhook event object](https://developers.line.biz/en/reference/messaging-api/#webhook-event-objects)의 source 객체에서 확인할 수 있습니다.

<!-- parameter end -->

#### Response 

상태 코드 `200`과 다음 속성을 가진 JSON 객체가 반환됩니다.

<!-- parameter start -->

count

Number

그룹 채팅의 멤버 수입니다. 반환되는 수에는 LINE Official Account가 포함되지 않습니다.

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

```json
{
  "count": 3
}
```

<!-- tab end -->

#### Error Response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code | Description |
| --- | --- |
| `400` | 잘못된 그룹 ID를 지정했습니다. |
| `404` | 존재하지 않는 그룹이거나 LINE Official Account가 참여하지 않은 그룹을 지정했습니다. |

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Example error response_

<!-- tab start `json` -->

```json
// If you specify an invalid group ID (400 Bad Request)
{
  "message": "The value for the 'groupId' parameter is invalid"
}

// If you specify a non-existent group or a group that your LINE Official Account doesn't participate in (404 Not Found)
{
  "message": "Not found"
}
```

<!-- tab end -->

### Get group chat member user IDs 

Endpoint: `GET` `https://api.line.me/v2/bot/group/{groupId}/members/ids`

<!-- note start -->

**Note**

이 기능은 인증 계정 또는 [premium accounts](https://developers.line.biz/en/glossary/#premium-account)에서만 사용할 수 있습니다. 계정 유형에 대한 자세한 내용은 LINE for Business의 [Account Types of LINE Official Account](https://www.linebiz.com/jp-en/service/line-official-account/account-type/) 페이지를 참조하십시오.

<!-- note end -->

LINE Official Account가 참여하고 있는 그룹 채팅 멤버의 사용자 ID를 가져옵니다. LINE Official Account를 친구로 추가하지 않았거나 차단한 사용자의 사용자 ID도 포함됩니다.

<!-- tip start -->

**웹훅에서도 사용자 ID를 가져올 수 있습니다**

사용자가 그룹 채팅에 참여하거나 그룹 채팅에서 메시지를 보내면 봇 서버로 웹훅이 전송됩니다. 웹훅에는 사용자 ID가 포함되어 있으므로 API 요청 없이 사용자 ID를 가져올 수 있습니다. 자세한 내용은 Messaging API 문서의 [Get a user ID from webhook](https://developers.line.biz/en/docs/messaging-api/getting-user-ids/#get-user-ids-in-webhook)을 참조하십시오.

<!-- tip end -->

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X GET 'https://api.line.me/v2/bot/group/{groupId}/members/ids?start={continuationToken}' \
-H 'Authorization: Bearer {channel access token}'
```

<!-- tab end -->

#### Rate limit 

초당 2,000회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->

#### Path parameters 

<!-- parameter start (props: required) -->

groupId

그룹 ID입니다. [webhook event object](https://developers.line.biz/en/reference/messaging-api/#webhook-event-objects)의 `source` 객체에서 확인할 수 있습니다.

<!-- parameter end -->

#### Query parameters 

<!-- parameter start (props: optional) -->

start

[응답](https://developers.line.biz/en/reference/messaging-api/#get-group-member-user-ids-response)으로 반환된 JSON 객체의 `next` 속성에 있는 continuation token 값입니다. 그룹 멤버의 다음 사용자 ID 배열을 가져오려면 이 파라미터를 포함하십시오.

<!-- parameter end -->

#### Response 

상태 코드 `200`과 다음 속성을 가진 JSON 객체가 반환됩니다.

<!-- parameter start -->

memberIds

Array of strings

그룹 채팅 멤버의 사용자 ID 목록입니다. LINE for iOS 및 LINE for Android 사용자만 `memberIds`에 포함됩니다. 자세한 내용은 [Consent on getting user profile information](https://developers.line.biz/en/docs/messaging-api/user-consent/)을 참조하십시오.\
최대: 사용자 ID 100개

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

next

String

그룹 채팅 멤버의 다음 사용자 ID 배열을 가져오기 위한 continuation token입니다. 원래 요청의 `memberIds`에서 반환되지 않은 사용자 ID가 남아 있을 때만 반환됩니다.

Continuation token은 24시간(86,400초) 후에 만료됩니다.

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

```json
{
  "memberIds": ["U4af4980629...", "U0c229f96c4...", "U95afb1d4df..."],
  "next": "jxEWCEEP..."
}
```

<!-- tab end -->

#### Error Response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code | Description |
| --- | --- |
| `400` | 요청에 문제가 있습니다. 다음 원인을 확인하십시오.<ul><li>잘못된 그룹 ID를 지정했습니다.</li><li>`start` 속성에 잘못된 continuation token을 지정했습니다.</li></ul> |
| `403` | 이 endpoint를 사용할 권한이 없습니다. 인증 계정 또는 [premium accounts](https://developers.line.biz/en/glossary/#premium-account)에서만 사용할 수 있습니다. |
| `404` | 존재하지 않는 그룹이거나 LINE Official Account가 참여하지 않은 그룹을 지정했습니다. |

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Example error response_

<!-- tab start `json` -->

```json
// If you specify an invalid group ID (400 Bad Request)
{
  "message": "The value for the 'groupId' parameter is invalid"
}

// If you specify an invalid continuation token, such as expired (400 Bad Request)
{
  "message": "Invalid start param"
}

// If you specify a non-existent group or a group that your LINE Official Account doesn't participate in (404 Not Found)
{
  "message": "Not found"
}
```

<!-- tab end -->

### Get group chat member profile 

Endpoint: `GET` `https://api.line.me/v2/bot/group/{groupId}/member/{userId}`

LINE Official Account가 참여하고 있는 그룹 채팅 멤버의 사용자 ID를 알고 있으면 해당 멤버의 프로필 정보를 가져올 수 있습니다.

<!-- tip start -->

**Tip**

같은 그룹 채팅의 사용자라면 LINE Official Account를 친구로 추가했는지 또는 차단했는지와 관계없이 프로필 정보를 가져올 수 있습니다.

<!-- tip end -->

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X GET https://api.line.me/v2/bot/group/{groupId}/member/{userId} \
-H 'Authorization: Bearer {channel access token}'
```

<!-- tab end -->

#### Rate limit 

초당 2,000회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->

#### Path parameters 

<!-- parameter start (props: required) -->

groupId

그룹 ID입니다. [webhook event object](https://developers.line.biz/en/reference/messaging-api/#webhook-event-objects)의 `source` 객체에서 확인할 수 있습니다.

<!-- parameter end -->
<!-- parameter start (props: required) -->

userId

사용자 ID입니다. [webhook event object](https://developers.line.biz/en/reference/messaging-api/#webhook-event-objects)의 `source` 객체에서 확인할 수 있습니다. LINE에서 사용하는 LINE ID는 사용하지 마십시오.

<!-- parameter end -->

#### Response 

상태 코드 `200`과 다음 정보를 담은 JSON 객체가 반환됩니다.

<!-- parameter start -->

displayName

String

표시 이름

<!-- parameter end -->
<!-- parameter start -->

userId

String

사용자 ID

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

pictureUrl

String

프로필 이미지 URL입니다. 사용자가 프로필 이미지를 가지고 있지 않으면 응답에 포함되지 않습니다.

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

```json
{
  "displayName": "LINE taro",
  "userId": "U4af4980629...",
  "pictureUrl": "https://sprofile.line-scdn.net/0hHkIRkHJF..."
}
```

<!-- tab end -->

#### Error Response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code | Description |
| --- | --- |
| `400` | 요청에 문제가 있습니다. 다음 원인을 확인하십시오.<ul><li>잘못된 그룹 ID를 지정했습니다.</li><li>잘못된 사용자 ID를 지정했습니다.</li></ul> |
| `404` | 프로필 정보를 가져올 수 없습니다. 다음 원인을 확인하십시오.<ul><li>존재하지 않는 그룹이거나 LINE Official Account가 참여하지 않은 그룹을 지정했습니다.</li><li>존재하지 않는 사용자이거나 그룹에 참여하지 않은 사용자를 지정했습니다.</li></ul> |

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Example error response_

<!-- tab start `json` -->

```json
// If you specify an invalid group ID (400 Bad Request)
{
  "message": "The value for the 'groupId' parameter is invalid"
}

// If you specify a non-existent group or user, or a group that your LINE Official Account doesn't participate in (404 Not Found)
{
  "message": "Not found"
}
```

<!-- tab end -->

### Leave group chat 

Endpoint: `POST` `https://api.line.me/v2/bot/group/{groupId}/leave`

[그룹 채팅](https://developers.line.biz/en/docs/messaging-api/group-chats/#group)에서 나갑니다.

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X POST https://api.line.me/v2/bot/group/{groupId}/leave \
-H 'Authorization: Bearer {channel access token}'
```

<!-- tab end -->

#### Rate limit 

초당 2,000회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->

#### Path parameters 

<!-- parameter start (props: required) -->

groupId

그룹 ID입니다. [webhook event object](https://developers.line.biz/en/reference/messaging-api/#webhook-event-objects)의 `source` 객체에서 확인할 수 있습니다.

<!-- parameter end -->

#### Response 

상태 코드 `200`과 빈 JSON 객체가 반환됩니다.

_Example response_

<!-- tab start `json` -->

```json
{}
```

<!-- tab end -->

#### Error Response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code | Description |
| --- | --- |
| `400` | 잘못된 그룹 ID를 지정했습니다. |
| `404` | 존재하지 않는 그룹이거나 LINE Official Account가 참여하지 않은 그룹을 지정했습니다. |

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Example error response_

<!-- tab start `json` -->

```json
// If you specify an invalid group ID (400 Bad Request)
{
  "message": "The value for the 'groupId' parameter is invalid"
}

// If you specify a non-existent group or a group that your LINE Official Account doesn't participate in (404 Not Found)
{
  "message": "Not found"
}
```

<!-- tab end -->

## Multi-person chats 

LINE Official Account가 참여하고 있는 다인 채팅과 그 멤버에 대한 정보를 가져올 수 있습니다.

### Get number of users in a multi-person chat 

Endpoint: `GET` `https://api.line.me/v2/bot/room/{roomId}/members/count`

다인 채팅에 있는 사용자 수를 가져옵니다. 사용자가 LINE Official Account를 친구로 추가하지 않았거나 차단했더라도 다인 채팅의 사용자 수를 가져올 수 있습니다.

반환되는 수에는 LINE Official Account가 포함되지 않습니다.

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X GET https://api.line.me/v2/bot/room/{roomId}/members/count \
-H 'Authorization: Bearer {channel access token}'
```

<!-- tab end -->

#### Rate limit 

초당 2,000회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->

#### Path parameters 

<!-- parameter start (props: required) -->

roomId

룸 ID입니다. [webhook event object](https://developers.line.biz/en/reference/messaging-api/#webhook-event-objects)의 source 객체에서 확인할 수 있습니다.

<!-- parameter end -->

#### Response 

상태 코드 `200`과 다음 속성을 가진 JSON 객체가 반환됩니다.

<!-- parameter start -->

count

Number

다인 채팅의 멤버 수입니다. 반환되는 수에는 LINE Official Account가 포함되지 않습니다.

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

```json
{
  "count": 3
}
```

<!-- tab end -->

#### Error Response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code | Description |
| --- | --- |
| `400` | 잘못된 룸 ID를 지정했습니다. |
| `404` | 존재하지 않는 다인 채팅이거나 LINE Official Account가 참여하지 않은 다인 채팅을 지정했습니다. |

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Example error response_

<!-- tab start `json` -->

```json
// If you specify an invalid room ID (400 Bad Request)
{
  "message": "The value for the 'roomId' parameter is invalid"
}

// If you specify a non-existent multi-person chat or a multi-person chat that your LINE Official Account doesn't participate in (404 Not Found)
{
  "message": "Not found"
}
```

<!-- tab end -->

### Get multi-person chat member user IDs 

Endpoint: `GET` `https://api.line.me/v2/bot/room/{roomId}/members/ids`

<!-- note start -->

**Note**

이 기능은 인증 계정 또는 [premium accounts](https://developers.line.biz/en/glossary/#premium-account)에서만 사용할 수 있습니다. 계정 유형에 대한 자세한 내용은 LINE for Business의 [Account Types of LINE Official Account](https://www.linebiz.com/jp-en/service/line-official-account/account-type/) 페이지를 참조하십시오.

<!-- note end -->

LINE Official Account가 참여하고 있는 다인 채팅 멤버의 사용자 ID를 가져옵니다. LINE Official Account를 친구로 추가하지 않았거나 차단한 사용자의 사용자 ID도 포함됩니다.

<!-- tip start -->

**웹훅에서도 사용자 ID를 가져올 수 있습니다**

사용자가 다인 채팅에 참여하거나 다인 채팅에서 메시지를 보내면 봇 서버로 웹훅이 전송됩니다. 웹훅에는 사용자 ID가 포함되어 있으므로 API 요청 없이 사용자 ID를 가져올 수 있습니다. 자세한 내용은 Messaging API 문서의 [Get a user ID from webhook](https://developers.line.biz/en/docs/messaging-api/getting-user-ids/#get-user-ids-in-webhook)을 참조하십시오.

<!-- tip end -->

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X GET 'https://api.line.me/v2/bot/room/{roomId}/members/ids?start={continuationToken}' \
-H 'Authorization: Bearer {channel access token}'
```

<!-- tab end -->

#### Rate limit 

초당 2,000회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->

#### Path parameters 

<!-- parameter start (props: required) -->

roomId

룸 ID입니다. [webhook event object](https://developers.line.biz/en/reference/messaging-api/#webhook-event-objects)의 `source` 객체에서 확인할 수 있습니다.

<!-- parameter end -->

#### Query parameters 

<!-- parameter start (props: optional) -->

start

[응답](https://developers.line.biz/en/reference/messaging-api/#get-room-member-user-ids-response)으로 반환된 JSON 객체의 `next` 속성에 있는 continuation token 값입니다. 다인 채팅 멤버의 다음 사용자 ID 배열을 가져오려면 이 파라미터를 포함하십시오.

<!-- parameter end -->

#### Response 

상태 코드 `200`과 다음 속성을 가진 JSON 객체가 반환됩니다.

<!-- parameter start -->

memberIds

Array of strings

다인 채팅 멤버의 사용자 ID 목록입니다. LINE for iOS 및 LINE for Android 사용자만 `memberIds`에 포함됩니다. 자세한 내용은 [Consent on getting user profile information](https://developers.line.biz/en/docs/messaging-api/user-consent/)을 참조하십시오.\
최대: 사용자 ID 100개

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

next

String

다인 채팅 멤버의 다음 사용자 ID 배열을 가져오기 위한 continuation token입니다. 원래 요청의 `memberIds`에서 반환되지 않은 사용자 ID가 남아 있을 때만 반환됩니다.

Continuation token은 24시간(86,400초) 후에 만료됩니다.

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

```json
{
  "memberIds": ["U4af4980629...", "U0c229f96c4...", "U95afb1d4df..."],
  "next": "jxEWCEEP..."
}
```

<!-- tab end -->

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code | Description |
| --- | --- |
| `400` | 요청에 문제가 있습니다. 다음 원인을 확인하십시오.<ul><li>잘못된 룸 ID를 지정했습니다.</li><li>`start` 속성에 잘못된 continuation token을 지정했습니다.</li></ul> |
| `403` | 이 endpoint를 사용할 권한이 없습니다. 인증 계정 또는 [premium accounts](https://developers.line.biz/en/glossary/#premium-account)에서만 사용할 수 있습니다. |
| `404` | 존재하지 않는 다인 채팅이거나 LINE Official Account가 참여하지 않은 다인 채팅을 지정했습니다. |

자세한 내용은 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션에서 참조하십시오.

_Error response example_

<!-- tab start `json` -->

```json
// If you specify an invalid continuation token, such as expired (400 Bad Request)
{
  "message": "Invalid start param"
}
```

<!-- tab end -->

### Get multi-person chat member profile 

Endpoint: `GET` `https://api.line.me/v2/bot/room/{roomId}/member/{userId}`

LINE Official Account가 참여하고 있는 다인 채팅 멤버의 사용자 ID를 알고 있으면 해당 멤버의 프로필 정보를 가져올 수 있습니다.

<!-- tip start -->

**Tip**

같은 다인 채팅의 사용자라면 LINE Official Account를 친구로 추가했는지 또는 차단했는지와 관계없이 프로필 정보를 가져올 수 있습니다.

<!-- tip end -->

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X GET https://api.line.me/v2/bot/room/{roomId}/member/{userId} \
-H 'Authorization: Bearer {channel access token}'
```

<!-- tab end -->

#### Rate limit 

초당 2,000회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->

#### Path parameters 

<!-- parameter start (props: required) -->

roomId

룸 ID입니다. [webhook event object](https://developers.line.biz/en/reference/messaging-api/#webhook-event-objects)의 `source` 객체에서 확인할 수 있습니다.

<!-- parameter end -->
<!-- parameter start (props: required) -->

userId

사용자 ID입니다. [webhook event object](https://developers.line.biz/en/reference/messaging-api/#webhook-event-objects)의 `source` 객체에서 확인할 수 있습니다. LINE에서 사용하는 LINE ID는 사용하지 마십시오.

<!-- parameter end -->

#### Response 

상태 코드 `200`과 다음 정보를 담은 JSON 객체가 반환됩니다.

<!-- parameter start -->

displayName

String

표시 이름

<!-- parameter end -->
<!-- parameter start -->

userId

String

사용자 ID

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

pictureUrl

String

프로필 이미지 URL입니다. 사용자가 프로필 이미지를 가지고 있지 않으면 응답에 포함되지 않습니다.

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

```json
{
  "displayName": "LINE taro",
  "userId": "U4af4980629...",
  "pictureUrl": "https://sprofile.line-scdn.net/0hHkIRkHJF..."
}
```

<!-- tab end -->

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code | Description |
| --- | --- |
| `400` | 요청에 문제가 있습니다. 다음 원인을 확인하십시오.<ul><li>잘못된 룸 ID를 지정했습니다.</li><li>잘못된 사용자 ID를 지정했습니다.</li></ul> |
| `404` | 프로필 정보를 가져올 수 없습니다. 다음 원인을 확인하십시오.<ul><li>존재하지 않는 다인 채팅이거나 LINE Official Account가 참여하지 않은 다인 채팅을 지정했습니다.</li><li>존재하지 않는 사용자이거나 다인 채팅에 참여하지 않은 사용자를 지정했습니다.</li></ul> |

자세한 내용은 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션에서 참조하십시오.

_Error response example_

<!-- tab start `json` -->

```json
// If you specify an invalid room ID (400 Bad Request)
{
  "message": "The value for the 'roomId' parameter is invalid"
}

// If you specify a non-existent multi-person chat or user, or a multi-person chat that your LINE Official Account doesn't participate in (404 Not Found)
{
  "message": "Not found"
}
```

<!-- tab end -->

### Leave multi-person chat 

Endpoint: `POST` `https://api.line.me/v2/bot/room/{roomId}/leave`

[다인 채팅](https://developers.line.biz/en/docs/messaging-api/group-chats/#room)에서 나갑니다.

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X POST https://api.line.me/v2/bot/room/{roomId}/leave \
-H 'Authorization: Bearer {channel access token}'
```

<!-- tab end -->

#### Rate limit 

초당 2,000회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->

#### Path parameters 

<!-- parameter start (props: required) -->

roomId

룸 ID입니다. [webhook event object](https://developers.line.biz/en/reference/messaging-api/#webhook-event-objects)의 `source` 객체에서 확인할 수 있습니다.

<!-- parameter end -->

#### Response 

상태 코드 `200`과 빈 JSON 객체가 반환됩니다.

LINE Official Account가 참여하지 않은 다인 채팅을 지정해도 상태 코드 `200`이 반환됩니다.

_Example response_

<!-- tab start `json` -->

```json
{}
```

<!-- tab end -->

#### Error Response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code  | Description                                    |
| ----- | ---------------------------------------------- |
| `400` | 잘못된 룸 ID를 지정했습니다.                   |
| `404` | 존재하지 않는 다인 채팅을 지정했습니다.        |

자세한 내용은 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션에서 참조하십시오.

_Example error response_

<!-- tab start `json` -->

```json
// If you specify an invalid room ID (400 Bad Request)
{
  "message": "The value for the 'roomId' parameter is invalid"
}

// If you specify a non-existent multi-person chat (404 Not Found)
{
  "message": "Not found"
}
```

<!-- tab end -->

## Rich menu 

LINE Official Account의 채팅 화면에 표시되는 사용자 지정 가능한 메뉴입니다. 자세한 내용은 [Use rich menus](https://developers.line.biz/en/docs/messaging-api/using-rich-menus/)를 참조하십시오.

### Create rich menu 

Endpoint: `POST` `https://api.line.me/v2/bot/richmenu`

리치 메뉴를 만듭니다.

리치 메뉴를 표시하려면 [리치 메뉴 이미지를 업로드](https://developers.line.biz/en/reference/messaging-api/#upload-rich-menu-image)하고, [리치 메뉴를 기본 리치 메뉴로 설정](https://developers.line.biz/en/reference/messaging-api/#set-default-rich-menu)하거나 [리치 메뉴를 사용자에게 연결](https://developers.line.biz/en/reference/messaging-api/#link-rich-menu-to-user)해야 합니다. Messaging API로는 LINE Official Account 하나당 리치 메뉴를 최대 1000개까지 만들 수 있습니다.

<!-- tip start -->

**리치 메뉴를 만들기 전에**

[리치 메뉴 객체 검증](https://developers.line.biz/en/reference/messaging-api/#validate-rich-menu-object) endpoint도 있습니다.

<!-- tip end -->

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X POST https://api.line.me/v2/bot/richmenu \
-H 'Authorization: Bearer {channel access token}' \
-H 'Content-Type: application/json' \
-d \
'{
    "size": {
      "width": 2500,
      "height": 1686
    },
    "selected": false,
    "name": "Nice rich menu",
    "chatBarText": "Tap to open",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2500,
          "height": 1686
        },
        "action": {
          "type": "postback",
          "data": "action=buy&itemid=123"
        }
      }
   ]
}'
```

<!-- tab end -->

#### Rate limit 

시간당 100회 요청

[LINE Official Account Manager](https://developers.line.biz/en/glossary/#line-oa-manager)를 사용한 리치 메뉴 생성 및 삭제에는 이 제한이 적용되지 않습니다.

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->
<!-- parameter start (props: required) -->

Content-Type

application/json

<!-- parameter end -->

#### Request body 

리치 메뉴로 표시할 [리치 메뉴 객체](https://developers.line.biz/en/reference/messaging-api/#rich-menu-object)를 지정합니다.

#### Response 

상태 코드 `200`과 다음 정보를 담은 JSON 객체가 반환됩니다.

<!-- parameter start -->

richMenuId

String

리치 메뉴의 ID입니다. [리치 메뉴 이미지를 업로드](https://developers.line.biz/en/reference/messaging-api/#upload-rich-menu-image)할 때 사용합니다.

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

```json
{
  "richMenuId": "{richMenuId}"
}
```

<!-- tab end -->

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code | Description |
| --- | --- |
| `400` | 리치 메뉴를 만들 수 없습니다. 다음 원인을 확인하십시오.<ul><li>잘못된 리치 메뉴 객체를 지정했습니다.</li><li>만들 수 있는 리치 메뉴의 최대 개수(1000개)에 도달했습니다.</li></ul> |

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Example error response_

<!-- tab start `json` -->

```json
// If you specify a rich menu object that doesn't have a required JSON key for the rich menu object (400 Bad Request)
{
  "message": "The request body has 1 error(s)",
  "details": [
    {
      "message": "must be specified",
      "property": "name"
    }
  ]
}

// If you specify an invalid scheme for a URI action (400 Bad Request)
{
  "message": "The request body has 1 error(s)",
  "details": [
    {
      "message": "invalid uri",
      "property": "areas[0].action.uri"
    }
  ]
}
```

<!-- tab end -->

### Validate rich menu object 

Endpoint: `POST` `https://api.line.me/v2/bot/richmenu/validate`

리치 메뉴 객체를 검증합니다.

[리치 메뉴를 만들기](https://developers.line.biz/en/reference/messaging-api/#create-rich-menu)위한 요청 본문으로 [리치 메뉴 객체](https://developers.line.biz/en/reference/messaging-api/#rich-menu-object)가 유효한지 확인할 수 있습니다.

_Request example_

<!-- tab start `shell` -->

```sh
curl -v -X POST https://api.line.me/v2/bot/richmenu/validate \
-H 'Authorization: Bearer {channel access token}' \
-H 'Content-Type: application/json' \
-d \
'{
    "size": {
      "width": 2500,
      "height": 1686
    },
    "selected": false,
    "name": "Nice rich menu",
    "chatBarText": "Tap to open",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2500,
          "height": 1686
        },
        "action": {
          "type": "postback",
          "data": "action=buy&itemid=123"
        }
      }
   ]
}'
```

<!-- tab end -->

#### Rate limit 

초당 2,000회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request header 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->
<!-- parameter start (props: required) -->

Content-Type

application/json

<!-- parameter end -->

#### Request body 

검증할 [리치 메뉴 객체](https://developers.line.biz/en/reference/messaging-api/#rich-menu-object)를 지정합니다.

#### Response 

요청 본문이 리치 메뉴 객체로 유효하면 HTTP 상태 코드 `200`과 빈 JSON 객체가 반환됩니다.

_Response example_

<!-- tab start `json` -->

```json
{}
```

<!-- tab end -->

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code | Description |
| --- | --- |
| `400` | 잘못된 리치 메뉴 객체를 지정했습니다. |

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Example error response_

<!-- tab start `json` -->

```json
// If you specify a rich menu object that doesn't have a required JSON key for the rich menu object (400 Bad Request)
{
  "message": "The request body has 1 error(s)",
  "details": [
    {
      "message": "must be specified",
      "property": "name"
    }
  ]
}

// If you specify an invalid scheme for a URI action (400 Bad Request)
{
  "message": "The request body has 1 error(s)",
  "details": [
    {
      "message": "invalid uri",
      "property": "areas[0].action.uri"
    }
  ]
}
```

<!-- tab end -->

### Upload rich menu image 

Endpoint: `POST` `https://api-data.line.me/v2/bot/richmenu/{richMenuId}/content`

<!-- note start -->

**This domain name is different from that of other endpoints**

이 endpoint의 도메인 이름(`api-data.line.me`)은 Messaging API에서 대용량 데이터를 주고받기 위한 것입니다. 이 도메인 이름은 다른 endpoint의 도메인 이름(`api.line.me`)과 다릅니다.

<!-- note end -->

리치 메뉴에 이미지를 업로드하고 설정합니다.

#### Requirements for rich menu image 

다음 사양을 충족하는 리치 메뉴 이미지를 사용할 수 있습니다.

- 이미지 형식: JPEG 또는 PNG
- 이미지 너비: 800~2500픽셀
- 이미지 높이: 250픽셀 이상
- 이미지 종횡비(너비 / 높이): 1.45 이상
- 최대 파일 크기: 1MB

<!-- note start -->

**Note**

리치 메뉴에 설정된 이미지는 교체할 수 없습니다. 리치 메뉴 이미지를 업데이트하려면 새 리치 메뉴 객체를 만들고 다른 이미지를 업로드하십시오.

<!-- note end -->

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X POST https://api-data.line.me/v2/bot/richmenu/{richMenuId}/content \
-H "Authorization: Bearer {channel access token}" \
-H "Content-Type: image/jpeg" \
-T image.jpg
```

<!-- tab end -->

#### Rate limit 

초당 2,000회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->
<!-- parameter start (props: required) -->

Content-Type

`image/jpeg` 또는 `image/png`

<!-- parameter end -->

#### Path parameters 

<!-- parameter start (props: required) -->

richMenuId

이미지를 설정할 리치 메뉴의 ID입니다.

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
| `400` | 리치 메뉴에 이미지를 설정할 수 없습니다. 다음 원인을 확인하십시오.<ul><li>이미지가 [요구 사항](https://developers.line.biz/en/reference/messaging-api/#upload-rich-menu-image-requirements)을 충족하지 않습니다.</li><li>리치 메뉴에 이미지가 이미 설정되어 있습니다.</li></ul> |
| `404` | 존재하지 않는 리치 메뉴를 지정했습니다. |
| `415` | `Content-Type`에 지원하지 않는 미디어 형식을 지정했습니다(`image/jpeg`와 `image/png` 외). |

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Example error response_

<!-- tab start `json` -->

```json
// If you specify an image that doesn't meet the requirements (400 Bad Request)
{
  "message": "The image size is not allowed for richmenu"
}

// The image is already set to the rich menu (400 Bad Request)
{
  "message": "An image has already been uploaded to the richmenu"
}
```

<!-- tab end -->

### Download rich menu image 

Endpoint: `GET` `https://api-data.line.me/v2/bot/richmenu/{richMenuId}/content`

<!-- note start -->

**This domain name is different from that of other endpoints**

이 endpoint의 도메인 이름(`api-data.line.me`)은 Messaging API에서 대용량 데이터를 주고받기 위한 것입니다. 이 도메인 이름은 다른 endpoint의 도메인 이름(`api.line.me`)과 다릅니다.

<!-- note end -->

리치 메뉴와 연결된 이미지를 다운로드합니다.

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X GET "https://api-data.line.me/v2/bot/richmenu/{richMenuId}/content" \
-H 'Authorization: Bearer {channel access token}' \
-o picture.jpg
```

<!-- tab end -->

#### Rate limit 

초당 2,000회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->

#### Path parameters 

<!-- parameter start (props: required) -->

richMenuId

다운로드할 이미지가 있는 리치 메뉴의 ID입니다.

<!-- parameter end -->

#### Response 

상태 코드 `200`과 리치 메뉴 이미지의 바이너리 데이터가 반환됩니다. 요청 예시와 같이 이미지를 다운로드할 수 있습니다.

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code | Description |
| --- | --- |
| `404` | 이미지를 다운로드할 수 없습니다. 다음 원인을 확인하십시오.<ul><li>존재하지 않는 리치 메뉴를 지정했습니다.</li><li>리치 메뉴에 설정된 이미지가 없습니다.</li></ul> |

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Example error response_

<!-- tab start `json` -->

```json
// If the rich menu doesn't exist (404 Not Found)
{
  "message": "Not found"
}
```

<!-- tab end -->

### Get rich menu list 

Endpoint: `GET` `https://api.line.me/v2/bot/richmenu/list`

[리치 메뉴 생성](https://developers.line.biz/en/reference/messaging-api/#create-rich-menu)으로 만든 모든 리치 메뉴의 리치 메뉴 응답 객체 목록을 가져옵니다.

<!-- note start -->

**Note**

LINE Official Account Manager로 만든 리치 메뉴는 가져올 수 없습니다.

<!-- note end -->

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X GET https://api.line.me/v2/bot/richmenu/list \
-H 'Authorization: Bearer {channel access token}'
```

<!-- tab end -->

#### Rate limit 

초당 10회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->

#### Response 

상태 코드 `200`과 다음 정보를 담은 JSON 객체가 반환됩니다.

<!-- parameter start -->

richmenus

Array

[리치 메뉴 응답 객체](https://developers.line.biz/en/reference/messaging-api/#rich-menu-response-object)의 배열입니다.

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

```json
{
  "richmenus": [
    {
      "richMenuId": "{richMenuId}",
      "name": "Nice rich menu",
      "size": {
        "width": 2500,
        "height": 1686
      },
      "chatBarText": "Tap to open",
      "selected": false,
      "areas": [
        {
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 2500,
            "height": 1686
          },
          "action": {
            "type": "postback",
            "data": "action=buy&itemid=123"
          }
        }
      ]
    }
  ]
}
```

<!-- tab end -->

#### Error response 

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

### Get rich menu 

Endpoint: `GET` `https://api.line.me/v2/bot/richmenu/{richMenuId}`

리치 메뉴 ID로 리치 메뉴를 가져옵니다.

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X GET https://api.line.me/v2/bot/richmenu/{richMenuId} \
-H 'Authorization: Bearer {channel access token}'
```

<!-- tab end -->

#### Rate limit 

초당 2,000회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->

#### Path parameters 

<!-- parameter start (props: required) -->

richMenuId

리치 메뉴의 ID입니다.

<!-- parameter end -->

#### Response 

상태 코드 `200`과 [리치 메뉴 응답 객체](https://developers.line.biz/en/reference/messaging-api/#rich-menu-response-object)가 반환됩니다.

_Example response_

<!-- tab start `json` -->

```json
{
  "richMenuId": "{richMenuId}",
  "name": "Nice rich menu",
  "size": {
    "width": 2500,
    "height": 1686
  },
  "chatBarText": "Tap to open",
  "selected": false,
  "areas": [
    {
      "bounds": {
        "x": 0,
        "y": 0,
        "width": 2500,
        "height": 1686
      },
      "action": {
        "type": "postback",
        "data": "action=buy&itemid=123"
      }
    }
  ]
}
```

<!-- tab end -->

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code  | Description                            |
| ----- | -------------------------------------- |
| `404` | 존재하지 않는 리치 메뉴를 지정했습니다. |

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Example error response_

<!-- tab start `json` -->

```json
// If you specify a non-existent rich menu (404 Not Found)
{
  "message": "Not found"
}
```

<!-- tab end -->

### Delete rich menu 

Endpoint: `DELETE` `https://api.line.me/v2/bot/richmenu/{richMenuId}`

리치 메뉴를 삭제합니다.

<!-- note start -->

**Rich menu limits**

LINE Official Account의 Messaging API로 만든 리치 메뉴가 최대 1,000개에 도달했으면 새 리치 메뉴를 만들기 전에 리치 메뉴를 삭제해야 합니다.

<!-- note end -->

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X DELETE https://api.line.me/v2/bot/richmenu/{richMenuId} \
-H 'Authorization: Bearer {channel access token}'
```

<!-- tab end -->

#### Rate limit 

시간당 100회 요청

[LINE Official Account Manager](https://developers.line.biz/en/glossary/#line-oa-manager)를 사용한 리치 메뉴 생성 및 삭제에는 이 제한이 적용되지 않습니다.

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->

#### Path parameters 

<!-- parameter start (props: required) -->

richMenuId

리치 메뉴의 ID입니다.

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

| Code  | Description                            |
| ----- | -------------------------------------- |
| `404` | 존재하지 않는 리치 메뉴를 지정했습니다. |

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Example error response_

<!-- tab start `json` -->

```json
// If you specify a non-existent rich menu (404 Not Found)
{
  "message": "Not found"
}
```

<!-- tab end -->

### Set default rich menu 

Endpoint: `POST` `https://api.line.me/v2/bot/user/all/richmenu/{richMenuId}`

기본 리치 메뉴를 설정합니다. 기본 리치 메뉴는 LINE Official Account의 채팅 화면을 여는 모든 사용자에게 표시됩니다. 기본 리치 메뉴가 이미 설정되어 있으면 이 endpoint를 호출할 때 요청에서 지정한 리치 메뉴로 현재 기본 리치 메뉴가 교체됩니다.

리치 메뉴는 다음 우선순위(높은 순서에서 낮은 순서)에 따라 표시됩니다.

1. [Messaging API로 설정한 사용자별 리치 메뉴](https://developers.line.biz/en/reference/messaging-api/#link-rich-menu-to-user)
1. Messaging API로 설정한 기본 리치 메뉴
1. [LINE Official Account Manager로 설정한 기본 리치 메뉴](https://developers.line.biz/en/docs/messaging-api/rich-menus-overview/#creating-a-rich-menu-with-the-line-manager)

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X POST https://api.line.me/v2/bot/user/all/richmenu/{richMenuId} \
-H "Authorization: Bearer {channel access token}"
```

<!-- tab end -->

#### Rate limit 

초당 2,000회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->

#### Path parameters 

<!-- parameter start (props: required) -->

richMenuId

리치 메뉴의 ID입니다.

<!-- parameter end -->

#### Response 

상태 코드 `200`과 빈 JSON 객체가 반환됩니다.

_Example response_

<!-- tab start `json` -->

```json
{}
```

<!-- tab end -->

#### Error Response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code  | Description                             |
| ----- | --------------------------------------- |
| `400` | 리치 메뉴에 설정된 이미지가 없습니다. |
| `404` | 존재하지 않는 리치 메뉴를 지정했습니다.  |

자세한 내용은 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션에서 참조하십시오.

_Example error response_

<!-- tab start `json` -->

```json
// If there is no image set to the rich menu (400 Bad Request)
{
  "message": "must upload richmenu image before applying it to user",
  "details": []
}

// If you specify a non-existent rich menu (404 Not Found)
{
  "message": "Not found"
}
```

<!-- tab end -->

### Get default rich menu ID 

Endpoint: `GET` `https://api.line.me/v2/bot/user/all/richmenu`

Messaging API로 설정한 기본 리치 메뉴의 ID를 가져옵니다.

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X GET https://api.line.me/v2/bot/user/all/richmenu \
-H 'Authorization: Bearer {channel access token}'
```

<!-- tab end -->

#### Rate limit 

초당 2,000회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->

#### Response 

상태 코드 `200`과 다음 정보를 담은 JSON 객체가 반환됩니다.

<!-- parameter start -->

richMenuId

String

리치 메뉴의 ID입니다.

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

```json
{
  "richMenuId": "{richMenuId}"
}
```

<!-- tab end -->

#### Error Response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code | Description |
| --- | --- |
| `403` | 기본 리치 메뉴가 [LINE Official Account Manager](https://developers.line.biz/en/glossary/#line-oa-manager)와 같은 다른 채널에서 설정되었습니다. |
| `404` | 기본 리치 메뉴가 설정되어 있지 않습니다. |

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Example error response_

<!-- tab start `json` -->

```json
// If the default rich menu is set by another channel (403 Forbidden)
{
  "message": "the richmenu is owned by another channel",
  "details": []
}

// If the default rich menu isn't set (404 Not Found)
{
  "message": "no default richmenu",
  "details": []
}
```

<!-- tab end -->

### Clear default rich menu 

Endpoint: `DELETE` `https://api.line.me/v2/bot/user/all/richmenu`

Messaging API로 설정한 기본 리치 메뉴를 해제합니다.

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X DELETE https://api.line.me/v2/bot/user/all/richmenu \
-H 'Authorization: Bearer {channel access token}'
```

<!-- tab end -->

#### Rate limit 

초당 2,000회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->

#### Response 

상태 코드 `200`과 빈 JSON 객체가 반환됩니다.

_Example response_

<!-- tab start `json` -->

```json
{}
```

<!-- tab end -->

#### Error Response 

자세한 내용은 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션에서 참조하십시오.

## Per-user rich menu 

사용자 ID와 리치 메뉴 ID를 지정하여 사용자별로 리치 메뉴를 설정할 수 있습니다. 자세한 내용은 Messaging API 문서의 [Use per-user rich menus](https://developers.line.biz/en/docs/messaging-api/use-per-user-rich-menus/)를 참조하십시오.

### Link rich menu to user 

Endpoint: `POST` `https://api.line.me/v2/bot/user/{userId}/richmenu/{richMenuId}`

사용자에게 리치 메뉴를 연결합니다. 한 번에 사용자에게 연결할 수 있는 리치 메뉴는 하나뿐입니다. 사용자에게 이미 연결된 리치 메뉴가 있으면 이 endpoint를 호출할 때 요청에서 지정한 리치 메뉴로 기존 리치 메뉴가 교체됩니다.

리치 메뉴는 다음 우선순위(높은 순서에서 낮은 순서)에 따라 표시됩니다.

1. Messaging API로 설정한 사용자별 리치 메뉴
1. [Messaging API로 설정한 기본 리치 메뉴](https://developers.line.biz/en/reference/messaging-api/#set-default-rich-menu)
1. [LINE Official Account Manager로 설정한 기본 리치 메뉴](https://developers.line.biz/en/docs/messaging-api/rich-menus-overview/#creating-a-rich-menu-with-the-line-manager)

#### Conditions for linking rich menu 

LINE Official Account를 친구로 추가한 사용자에게 리치 메뉴를 연결할 수 있습니다.

다음 사용자에게 리치 메뉴를 연결하려고 하면 상태 코드 `200`이 반환되지만 리치 메뉴는 사용자에게 연결되지 않습니다.

- LINE 계정을 삭제한 사용자
- LINE Official Account를 차단한 사용자
- LINE Official Account를 친구로 추가하지 않은 사용자
- 다른 provider 아래의 다른 채널에서 가져온 경우 등, 채널에 존재하지 않는 사용자 ID

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X POST https://api.line.me/v2/bot/user/{userId}/richmenu/{richMenuId} \
-H "Authorization: Bearer {channel access token}"
```

<!-- tab end -->

#### Rate limit 

초당 2,000회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->

#### Path parameters 

<!-- parameter start (props: required) -->

richMenuId

리치 메뉴의 ID입니다.

<!-- parameter end -->
<!-- parameter start (props: required) -->

userId

사용자 ID입니다. [webhook event object](https://developers.line.biz/en/reference/messaging-api/#webhook-event-objects)의 `source` 객체에서 확인할 수 있습니다. LINE에서 사용하는 LINE ID는 사용하지 마십시오.

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
| `400` | 리치 메뉴를 연결할 수 없습니다. 다음 원인을 확인하십시오.<ul><li>잘못된 사용자 ID를 지정했습니다.</li><li>리치 메뉴에 설정된 이미지가 없습니다.</li></ul> |
| `404` | 존재하지 않는 리치 메뉴를 지정했습니다. |

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

오류가 반환되면 리치 메뉴의 연결이 해제되지 않습니다.

_Example error response_

<!-- tab start `json` -->

```json
// If you specify an invalid user ID (400 Bad Request)
{
  "message": "The value for the 'userId' parameter is invalid"
}

// If you specify a non-existent rich menu (404 Not Found)
{
  "message": "Not found"
}
```

<!-- tab end -->

### Link rich menu to multiple users 

Endpoint: `POST` `https://api.line.me/v2/bot/richmenu/bulk/link`

여러 사용자에게 리치 메뉴를 연결합니다.

리치 메뉴는 다음 우선순위(높은 순서에서 낮은 순서)에 따라 표시됩니다.

1. Messaging API로 설정한 사용자별 리치 메뉴
1. [Messaging API로 설정한 기본 리치 메뉴](https://developers.line.biz/en/reference/messaging-api/#set-default-rich-menu)
1. [LINE Official Account Manager로 설정한 기본 리치 메뉴](https://developers.line.biz/en/docs/messaging-api/rich-menus-overview/#creating-a-rich-menu-with-the-line-manager)

[사용자에게 리치 메뉴 연결](https://developers.line.biz/en/reference/messaging-api/#link-rich-menu-to-user)과 달리 이 요청은 백그라운드에서 비동기로 처리됩니다. 일반적으로 몇 초 안에 처리가 완료됩니다.

상태 코드 `202`가 반환되더라도 리치 메뉴가 연결되지 않았을 수 있습니다. 요청이 성공적으로 처리되었는지 확인하려면 [사용자에게 연결된 리치 메뉴 ID 가져오기](https://developers.line.biz/en/reference/messaging-api/#get-rich-menu-id-of-user)를 사용하여 사용자에게 리치 메뉴가 실제로 연결되었는지 확인하십시오.

[오류 응답](https://developers.line.biz/en/reference/messaging-api/#bulk-link-rich-menu-error-response)이 반환되면 어떤 사용자에게도 리치 메뉴가 연결되지 않습니다.

#### Conditions for linking rich menu 

LINE Official Account를 친구로 추가한 사용자에게 리치 메뉴를 연결할 수 있습니다. 상태 코드 `202`가 반환되면 요청에서 지정한 사용자에게 리치 메뉴가 연결됩니다.

상태 코드 `202`가 반환되더라도 다음 사용자는 LINE Official Account의 친구가 아니므로 리치 메뉴가 연결되지 않을 수 있습니다.

- LINE 계정을 삭제한 사용자
- LINE Official Account를 차단한 사용자
- LINE Official Account를 친구로 추가하지 않은 사용자
- 다른 provider 아래의 다른 채널에서 가져온 경우 등, 채널에 존재하지 않는 사용자 ID

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X POST https://api.line.me/v2/bot/richmenu/bulk/link \
-H "Authorization: Bearer {channel access token}" \
-H "Content-Type: application/json" \
-d '{
  "richMenuId":"{richMenuId}",
  "userIds":["{userId1}","{userId2}"]
}'
```

<!-- tab end -->

#### Rate limit 

초당 2,000회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->
<!-- parameter start (props: required) -->

Content-Type

application/json

<!-- parameter end -->

#### Request body 

<!-- parameter start (props: required) -->

richMenuId

String

리치 메뉴의 ID입니다.

<!-- parameter end -->
<!-- parameter start (props: required) -->

userIds

Array of strings

사용자 ID의 배열입니다. [webhook event object](https://developers.line.biz/en/reference/messaging-api/#webhook-event-objects)의 `source` 객체에서 확인할 수 있습니다. LINE에서 사용하는 LINE ID는 사용하지 마십시오.\
최대: 사용자 ID 500개

<!-- parameter end -->

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
| `400` | 리치 메뉴를 연결할 수 없습니다. 다음 원인을 확인하십시오.<ul><li>잘못된 사용자 ID를 지정했습니다.</li><li>잘못된 리치 메뉴 ID를 지정했습니다.</li><li>리치 메뉴에 설정된 이미지가 없습니다.</li></ul> |
| `404` | 존재하지 않는 리치 메뉴를 지정했습니다. |

자세한 내용은 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션에서 참조하십시오.

_Example error response_

<!-- tab start `json` -->

```json
// If you specify an invalid user ID (400 Bad Request)
{
  "message": "The property, 'userIds[0]', in the request body is invalid (line: -, column: -)"
}

// If you specify an invalid rich menu ID (400 Bad Request)
{
  "message": "The request body has 1 error(s)",
  "details": [
    {
      "message": "invalid richMenuId",
      "property": "richMenuId"
    }
  ]
}

// If you specify a non-existent rich menu (404 Not Found)
{
    "message": "richmenu not found",
    "details": []
}
```

<!-- tab end -->

### Get rich menu ID of user 

Endpoint: `GET` `https://api.line.me/v2/bot/user/{userId}/richmenu`

사용자에게 연결된 리치 메뉴의 ID를 가져옵니다.

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X GET https://api.line.me/v2/bot/user/{userId}/richmenu \
-H 'Authorization: Bearer {channel access token}'
```

<!-- tab end -->

#### Rate limit 

초당 2,000회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->

#### Path parameters 

<!-- parameter start (props: required) -->

userId

사용자 ID입니다. [webhook event object](https://developers.line.biz/en/reference/messaging-api/#webhook-event-objects)의 `source` 객체에서 확인할 수 있습니다. LINE에서 사용하는 LINE ID는 사용하지 마십시오.

<!-- parameter end -->

#### Response 

상태 코드 `200`과 다음 정보를 담은 JSON 객체가 반환됩니다.

<!-- parameter start -->

richMenuId

String

리치 메뉴의 ID입니다.

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

```json
{
  "richMenuId": "{richMenuId}"
}
```

<!-- tab end -->

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code | Description |
| --- | --- |
| `400` | 잘못된 사용자 ID를 지정했습니다. |
| `404` | 리치 메뉴 ID를 가져올 수 없습니다. 다음 원인을 확인하십시오.<ul><li>사용자에게 리치 메뉴가 연결되어 있지 않습니다.</li><li>존재하지 않는 사용자를 지정했습니다.</li><li>사용자가 대상 LINE Official Account를 친구로 추가하지 않았습니다.</li></ul> |

자세한 내용은 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션에서 참조하십시오.

_Example error response_

<!-- tab start `json` -->

```json
// If you specify an invalid user ID (400 Bad Request)
{
  "message": "The value for the 'userId' parameter is invalid"
}

// If you specify the user to whom the rich menu isn't linked (404 Not Found)
{
  "message": "the user has no richmenu",
  "details": []
}
```

<!-- tab end -->

### Unlink rich menu from user 

Endpoint: `DELETE` `https://api.line.me/v2/bot/user/{userId}/richmenu`

지정한 사용자에게 연결된 사용자별 리치 메뉴를 제거하는 API입니다.

#### Conditions for unlinking rich menu 

LINE Official Account를 친구로 추가한 사용자의 리치 메뉴 연결을 해제할 수 있습니다.

다음 사용자의 리치 메뉴 연결을 해제하려고 하면 상태 코드 `200`이 반환되지만 리치 메뉴 연결은 해제되지 않습니다.

- LINE 계정을 삭제한 사용자
- LINE Official Account를 차단한 사용자
- LINE Official Account를 친구로 추가하지 않은 사용자
- 다른 provider 아래의 다른 채널에서 가져온 경우 등, 채널에 존재하지 않는 사용자 ID

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X DELETE https://api.line.me/v2/bot/user/{userId}/richmenu \
-H 'Authorization: Bearer {channel access token}'
```

<!-- tab end -->

#### Rate limit 

초당 2,000회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->

#### Path parameters 

<!-- parameter start (props: required) -->

userId

사용자 ID입니다. [webhook event object](https://developers.line.biz/en/reference/messaging-api/#webhook-event-objects)의 `source` 객체에서 확인할 수 있습니다. LINE에서 사용하는 LINE ID는 사용하지 마십시오.

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

자세한 내용은 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션에서 참조하십시오.

_Example error response_

<!-- tab start `json` -->

```json
// If you specify an invalid user ID (400 Bad Request)
{
  "message": "The value for the 'userId' parameter is invalid"
}
```

<!-- tab end -->

### Unlink rich menus from multiple users 

Endpoint: `POST` `https://api.line.me/v2/bot/richmenu/bulk/unlink`

여러 사용자의 리치 메뉴 연결을 해제합니다.

[사용자의 리치 메뉴 연결 해제](https://developers.line.biz/en/reference/messaging-api/#unlink-rich-menu-from-user)와 달리 이 요청은 백그라운드에서 비동기로 처리됩니다. 일반적으로 몇 초 안에 처리가 완료됩니다.

상태 코드 `202`가 반환되더라도 리치 메뉴의 연결이 해제되지 않았을 수 있습니다. 요청이 성공적으로 처리되었는지 확인하려면 [사용자에게 연결된 리치 메뉴 ID 가져오기](https://developers.line.biz/en/reference/messaging-api/#get-rich-menu-id-of-user)를 사용하여 연결 해제된 리치 메뉴가 실제로 사용자에게 연결되지 않았는지 확인하십시오.

[오류 응답](https://developers.line.biz/en/reference/messaging-api/#bulk-unlink-rich-menu-error-response)이 반환되면 어떤 사용자의 리치 메뉴 연결도 해제되지 않습니다.

#### Conditions for unlinking rich menu 

LINE Official Account를 친구로 추가한 사용자의 리치 메뉴 연결을 해제할 수 있습니다. 상태 코드 `202`가 반환되면 요청에서 지정한 사용자의 리치 메뉴 연결이 해제됩니다.

상태 코드 `202`가 반환되더라도 다음 사용자는 LINE Official Account의 친구가 아니므로 리치 메뉴 연결이 해제되지 않을 수 있습니다.

- LINE 계정을 삭제한 사용자
- LINE Official Account를 차단한 사용자
- LINE Official Account를 친구로 추가하지 않은 사용자
- 다른 provider 아래의 다른 채널에서 가져온 경우 등, 채널에 존재하지 않는 사용자 ID

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X POST https://api.line.me/v2/bot/richmenu/bulk/unlink \
-H "Authorization: Bearer {channel access token}" \
-H "Content-Type: application/json" \
-d '{
  "userIds":["{userId1}","{userId2}"]
}'
```

<!-- tab end -->

#### Rate limit 

초당 2,000회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

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

userIds

Array of strings

사용자 ID의 배열입니다. [webhook event object](https://developers.line.biz/en/reference/messaging-api/#webhook-event-objects)의 `source` 객체에서 확인할 수 있습니다. LINE에서 사용하는 LINE ID는 사용하지 마십시오.\
최대: 사용자 ID 500개

<!-- parameter end -->

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

| Code  | Description                      |
| ----- | -------------------------------- |
| `400` | 잘못된 사용자 ID를 지정했습니다. |

자세한 내용은 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션에서 참조하십시오.

_Example error response_

<!-- tab start `json` -->

```json
// If you specify an invalid user ID (400 Bad Request)
{
  "message": "The property, 'userIds[0]', in the request body is invalid (line: -, column: -)"
}
```

<!-- tab end -->

### Replace or unlink the linked rich menus in batches 

Endpoint: `POST` `https://api.line.me/v2/bot/richmenu/batch`

이 endpoint를 사용하면 [Link rich menu to user](https://developers.line.biz/en/reference/messaging-api/#link-rich-menu-to-user) 같은 endpoint로 사용자에게 연결된 리치 메뉴를 일괄 제어할 수 있습니다. 다음 작업을 사용할 수 있습니다.

1. 특정 리치 메뉴에 연결된 모든 사용자의 리치 메뉴를 다른 리치 메뉴로 교체합니다.
1. 특정 리치 메뉴에 연결된 모든 사용자의 리치 메뉴 연결을 해제합니다.
1. 리치 메뉴에 연결된 모든 사용자의 리치 메뉴 연결을 해제합니다.

[요청 본문](https://developers.line.biz/en/reference/messaging-api/#batch-control-rich-menus-of-users-request-body)의 `operations` 속성에 여러 리치 메뉴 일괄 작업을 지정할 수도 있습니다. 여러 리치 메뉴 일괄 작업을 지정하면 각 일괄 작업은 사용자마다 독립적으로 병렬 처리됩니다. 지정한 일괄 작업은 서로 영향을 주지 않습니다.

예를 들어 `operations` 속성에 다음 배열을 지정하면 요청 전에 리치 메뉴 A에 연결되어 있던 사용자의 리치 메뉴는 B로 교체되고, 요청 전에 리치 메뉴 B에 연결되어 있던 사용자의 리치 메뉴는 C로 교체됩니다. 일괄 작업은 서로 영향을 주지 않으므로 요청 전에 리치 메뉴 A에 연결되어 있던 사용자의 리치 메뉴가 C로 교체되지는 않습니다.

```json
[
  {
    "type": "link",
    "from": "{ID of rich menu A}",
    "to": "{ID of rich menu B}"
  },
  {
    "type": "link",
    "from": "{ID of rich menu B}",
    "to": "{ID of rich menu C}"
  }
]
```

리치 메뉴 일괄 작업은 백그라운드에서 비동기로 처리됩니다. 처리 상태는 [Get the status of rich menu batch control](https://developers.line.biz/en/reference/messaging-api/#get-batch-control-rich-menus-progress-status) endpoint로 확인할 수 있습니다.

#### How to avoid unintended operations when retrying 

`resumeRequestKey` 속성을 사용하면 안전하게 재시도할 수 있습니다.

다음 경우에 `resumeRequestKey` 속성을 사용하지 않고 재시도하면 리치 메뉴가 의도하지 않은 메뉴로 교체될 수 있습니다.

- 제한 시간 초과 또는 LINE Platform의 내부 서버 오류로 요청이 수락되었는지 확실하지 않은 경우
- [리치 메뉴 일괄 작업 진행 상태를 가져왔을 때](https://developers.line.biz/en/reference/messaging-api/#get-batch-control-rich-menus-progress-status) 응답의 `phase` 속성이 `failed`인 경우

이러한 경우에도 초기 요청의 `resumeRequestKey` 속성에 임의의 키를 지정하면 같은 키로 요청을 다시 보냈을 때 처리가 완료되지 않은 사용자에 대해서만 처리가 재개됩니다.

`resumeRequestKey` 속성은 14일(336시간) 후에 만료됩니다. 만료된 경우에는 새 요청으로 처리됩니다.

_Example of a request to replace a rich menu and unlink a rich menu_

<!-- tab start `shell` -->

```sh
curl -v -X POST https://api.line.me/v2/bot/richmenu/batch \
-H "Authorization: Bearer {channel access token}" \
-H "Content-Type: application/json" \
-d '{
  "operations": [
    {
      "type": "link",
      "from": "{rich menu ID before replacement}",
      "to": "{rich menu ID after replacement}"
    },
    {
      "type": "unlink",
      "from": "{rich menu ID to unlink}"
    }
  ],
  "resumeRequestKey": "{an arbitrary key string matching the regular expression pattern [0-9a-zA-Z\-_]{1,100}}"
}'
```

<!-- tab end -->

_Example of a request to unlink a linked rich menu from all users_

<!-- tab start `shell` -->

```sh
curl -v -X POST https://api.line.me/v2/bot/richmenu/batch \
-H "Authorization: Bearer {channel access token}" \
-H "Content-Type: application/json" \
-d '{
  "operations": [
    {
      "type": "unlinkAll"
    }
  ],
  "resumeRequestKey": "{an arbitrary key string matching the regular expression pattern [0-9a-zA-Z\-_]{1,100}}"
}'
```

<!-- tab end -->

#### Rate limit 

시간당 3회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

<!-- tip start -->

**요청 본문을 미리 검증할 수 있습니다**

요청 본문을 미리 검증하는 [Validate a request of rich menu batch control](https://developers.line.biz/en/reference/messaging-api/#validate-batch-control-rich-menus-request) endpoint도 있습니다.

검증 endpoint를 사용하면 이 endpoint의 rate limit의 영향을 받지 않고 요청에 오류가 없는지 미리 확인할 수 있습니다.

<!-- tip end -->

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->

#### Request body 

<!-- parameter start (props: required) -->

operations

Array of [Rich menu operation object](https://developers.line.biz/en/reference/messaging-api/#batch-control-rich-menus-of-users-operations)

리치 메뉴의 일괄 작업을 지정합니다.\
최대: 1,000개의 객체

<!-- parameter end -->
<!-- parameter start (props: optional) -->

resumeRequestKey

String

재시도용 키입니다. 키 값은 정규 표현식 패턴 `[0-9a-zA-Z\-_]{1,100}`과 일치하는 문자열이어야 합니다.

<!-- parameter end -->

##### Rich menu operation object 

Rich menu operation object는 사용자에게 연결된 리치 메뉴에 대한 일괄 작업을 나타냅니다.

<!-- parameter start (props: required) -->

type

String

사용자에게 연결된 리치 메뉴에 대한 작업입니다. 다음 중 하나입니다.

- `link`: `from` 속성에 지정한 리치 메뉴에 연결된 모든 사용자의 리치 메뉴를 `to` 속성에 지정한 리치 메뉴로 교체합니다.
- `unlink`: `from` 속성에 지정한 리치 메뉴에 연결된 모든 사용자의 리치 메뉴 연결을 해제합니다.
- `unlinkAll`: 리치 메뉴에 연결된 모든 사용자의 리치 메뉴 연결을 해제합니다.

`unlinkAll`을 지정하면 `operations` 속성에 `unlinkAll` 이외의 `type`을 포함할 수 없습니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Required if type is link or unlink") -->

from

String

리치 메뉴의 ID입니다.

교체 전 리치 메뉴의 ID 또는 연결을 해제할 리치 메뉴의 ID를 지정합니다.

`operations` 속성에 여러 작업을 지정하는 경우 같은 리치 메뉴의 ID를 여러 `from` 속성에 지정할 수 없습니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Required if type is link") -->

to

String

리치 메뉴의 ID입니다.

교체할 리치 메뉴의 ID를 지정합니다.

<!-- parameter end -->

#### Response 

`202` HTTP 상태 코드와 빈 JSON 객체가 반환됩니다.

리치 메뉴 일괄 작업은 백그라운드에서 비동기로 처리됩니다. 처리 상태는 [Get the status of rich menu batch control](https://developers.line.biz/en/reference/messaging-api/#get-batch-control-rich-menus-progress-status) endpoint로 확인할 수 있습니다.

_Response example_

<!-- tab start `json` -->

```json
{}
```

<!-- tab end -->

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code | Description |
| --- | --- |
| `400` | 리치 메뉴를 제어할 수 없습니다. 다음 원인을 확인하십시오.<ul><li>잘못된 리치 메뉴 ID를 지정했습니다.</li><li>교체하려는 리치 메뉴에 이미지가 없습니다.</li><li>`operations` 속성에 1000개를 초과하는 작업을 지정했습니다.</li><li>`type` 속성에 `unlinkAll`과 다른 type을 동시에 지정했습니다.</li><li>여러 `from` 속성에 같은 리치 메뉴의 ID를 지정했습니다.</li></ul> |
| `404` | 존재하지 않는 리치 메뉴를 지정했습니다. |

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

오류 응답이 반환되면 어떤 사용자에게도 리치 메뉴가 연결되지 않습니다.

_Error response example_

<!-- tab start `json` -->

```json
// If you specify an invalid rich menu ID (400 Bad Request)
{
  "message": "The request body has 1 error(s)",
  "details": [
    {
      "message": "invalid richMenuId",
      "property": "operations[0].from"
    }
  ]
}

// If you specify the ID of the same rich menu in multiple from properties (400 Bad Request)
{
  "message": "The request body has 1 error(s)",
  "details": [
    {
      "message": "from richmenu (richmenu-6fc298...) is duplicated",
      "property": "operations[].from"
    }
  ]
}

// If you specify unlinkAll and other types to the type property in the request at the same time (400 Bad Request)
{
  "message": "The request body has 1 error(s)",
  "details": [
    {
      "message": "'unlinkAll' type can't be combined with other type",
      "property": "operations[].type"
    }
  ]
}
```

<!-- tab end -->

### Get the status of rich menu batch control 

Endpoint: `GET` `https://api.line.me/v2/bot/richmenu/progress/batch`

[Replace or unlink a linked rich menus in batches](https://developers.line.biz/en/reference/messaging-api/#batch-control-rich-menus-of-users)의 상태를 가져옵니다.

`acceptedTime`에 표시된 시각으로부터 14일(336시간)이 지나면 더 이상 상태를 가져올 수 없습니다.

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X GET 'https://api.line.me/v2/bot/richmenu/progress/batch?requestId={request_id}' \
-H 'Authorization: Bearer {CHANNEL_ACCESS_TOKEN}'
```

<!-- tab end -->

#### Rate limit 

시간당 100회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->

#### Query parameters 

<!-- parameter start (props: required) -->

requestId

사용자에게 연결된 리치 메뉴를 일괄 제어하는 데 사용하는 요청 ID입니다. 각 Messaging API 요청에는 요청 ID가 있습니다. [응답 헤더](https://developers.line.biz/en/reference/messaging-api/#response-headers)에서 확인할 수 있습니다.

<!-- parameter end -->

#### Response 

상태 코드 `200`과 다음 정보를 담은 JSON 객체가 반환됩니다.

<!-- parameter start -->

phase

String

현재 상태입니다. 다음 중 하나입니다.

- `ongoing`: 리치 메뉴 일괄 제어가 진행 중입니다.
- `succeeded`: 리치 메뉴 일괄 제어가 완료되었습니다.
- `failed`: 리치 메뉴 일괄 제어에 실패했습니다. 한 명 이상의 사용자에 대해 리치 메뉴를 제어하지 못했다는 뜻입니다. 작업이 성공적으로 완료된 사용자도 있을 수 있습니다.<br><br>초기 요청에서 재시도 키를 지정하면 실패한 작업을 안전하게 재시도할 수 있습니다. 자세한 내용은 [How to avoid unintended operations when retrying](https://developers.line.biz/en/reference/messaging-api/#batch-control-rich-menus-of-users-retry-key)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start -->

acceptedTime

String

리치 메뉴 일괄 제어 요청이 수락된 시각(밀리초 단위)입니다.

- 형식: [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)(예: `2020-12-03T10:15:30.121Z`)
- 시간대: UTC

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

completedTime

String

리치 메뉴 일괄 제어가 완료된 시각(밀리초 단위)입니다. `phase` 속성이 `succeeded` 또는 `failed`인 경우에 반환됩니다.

- 형식: [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)(예: `2020-12-03T10:15:30.121Z`)
- 시간대: UTC

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

```json
{
  "phase": "succeeded",
  "acceptedTime": "2023-06-26T07:37:21.083Z",
  "completedTime": "2023-06-26T09:12:12.197Z"
}
```

<!-- tab end -->

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code | Description |
| --- | --- |
| `400` | 잘못된 요청 ID를 지정했습니다. |
| `404` | 상태를 가져올 수 없습니다. 다음 원인을 확인하십시오.<ul><li>존재하지 않는 요청 ID를 지정했습니다.</li><li>상태를 가져올 수 있는 기간이 만료되었습니다.</li></ul> |

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Example error response_

<!-- tab start `json` -->

```json
// If you specify a non-existent request ID (404 Not Found)
{
  "message": "Not found"
}
```

<!-- tab end -->

### Validate a request of rich menu batch control 

Endpoint: `POST` `https://api.line.me/v2/bot/richmenu/validate/batch`

[Replace or unlink the linked rich menus in batches](https://developers.line.biz/en/reference/messaging-api/#batch-control-rich-menus-of-users) endpoint의 요청 본문을 검증합니다.

이 endpoint를 사용하면 리치 메뉴를 일괄 교체하거나 연결을 해제할 때 다음 오류를 미리 감지할 수 있습니다.

- 존재하지 않는 리치 메뉴를 지정한 경우
- 이미지가 없는 리치 메뉴를 지정한 경우
- `operations` 속성에 지정한 여러 작업이 잘못된 경우
  - `operations` 속성에 1,000개를 초과하는 배열을 지정한 경우
  - `type` 속성이 `unlinkAll`이고 다른 `type`도 함께 지정한 경우
  - 여러 `from` 속성에 같은 리치 메뉴의 ID를 지정한 경우
- `resumeRequestKey` 속성에 잘못된 문자열을 지정한 경우

_Example request_

<!-- tab start `shell` -->

```sh
curl -v -X POST https://api.line.me/v2/bot/richmenu/validate/batch \
-H "Authorization: Bearer {channel access token}" \
-H "Content-Type: application/json" \
-d '{
  "operations": [
    {
      "type": "link",
      "from": "{rich menu ID before replacing}",
      "to": "{rich menu ID after replacing}"
    },
    {
      "type": "unlink",
      "from": "{rich menu ID to unlink}"
    }
  ],
  "resumeRequestKey": "{an arbitrary key string matching the regular expression pattern [0-9a-zA-Z\-_]{1,100}}"
}'
```

<!-- tab end -->

#### Rate limit 

초당 2,000회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->

#### Request body 

<!-- parameter start (props: required) -->

operations

Array of [Rich menu operation object](https://developers.line.biz/en/reference/messaging-api/#batch-control-rich-menus-of-users-operations)

리치 메뉴에 대한 일괄 작업을 정의합니다.\
최대: 1,000개의 객체

<!-- parameter end -->
<!-- parameter start (props: optional) -->

resumeRequestKey

String

재시도용 키입니다. 키 값은 정규 표현식 패턴 `[0-9a-zA-Z\-_]{1,100}`과 일치하는 문자열이어야 합니다.

<!-- parameter end -->

#### Response 

상태 코드 `200`과 빈 JSON 객체가 반환됩니다.

_Response example_

<!-- tab start `json` -->

```json
{}
```

<!-- tab end -->

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code | Description |
| --- | --- |
| `400` | 리치 메뉴를 제어할 수 없습니다. 다음 원인을 확인하십시오.<ul><li>잘못된 리치 메뉴 ID를 지정했습니다.</li><li>교체하려는 리치 메뉴에 이미지가 없습니다.</li><li>`operations` 속성에 1000개를 초과하는 작업을 지정했습니다.</li><li>`type` 속성에 `unlinkAll`과 다른 type을 동시에 지정했습니다.</li><li>여러 `from` 속성에 같은 리치 메뉴의 ID를 지정했습니다.</li></ul> |
| `404` | 존재하지 않는 리치 메뉴를 지정했습니다. |

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Error response example_

<!-- tab start `json` -->

```json
// If you specify a rich menu with no images (400 Bad Request)
{
  "message": "The request body has 1 error(s)",
  "details": [
    {
      "message": "'to' richmenu (richmenu-0c757d...) must have image but it doesn't",
      "property": "operations[0].to"
    }
  ]
}

// If you specify a non-existent rich menu ID (404 Not Found)
{
  "message": "The request body has 1 error(s)",
  "details": [
    {
      "message": "Richmenu (richmenu-d3385e...) is not found",
      "property": "operations[0].to"
    }
  ]
}
```

<!-- tab end -->

## Rich menu alias 

[리치 메뉴 별칭](https://developers.line.biz/en/glossary/#rich-menu-alias)과 [리치 메뉴 전환 액션](https://developers.line.biz/en/reference/messaging-api/#richmenu-switch-action)을 사용하면 탭 전환이 가능한 리치 메뉴를 사용자에게 제공할 수 있습니다. 자세한 내용은 Messaging API 문서의 [Switch between tabs on rich menus](https://developers.line.biz/en/docs/messaging-api/switch-rich-menus/)를 참조하십시오.

### Create rich menu alias 

Endpoint: `POST` `https://api.line.me/v2/bot/richmenu/alias`

리치 메뉴 별칭을 만듭니다.

리치 메뉴 별칭을 만들기 전에 다음 작업을 미리 완료해야 합니다. 자세한 내용은 Messaging API 문서의 [Switch between tabs on rich menus](https://developers.line.biz/en/docs/messaging-api/switch-rich-menus/)를 참조하십시오.

- [Create a rich menu](https://developers.line.biz/en/reference/messaging-api/#create-rich-menu)
- [Upload a rich menu image](https://developers.line.biz/en/reference/messaging-api/#upload-rich-menu-image)

Messaging API를 사용하면 LINE Official Account 하나당 리치 메뉴 별칭을 최대 1000개까지 만들 수 있습니다.

_Request example_

<!-- tab start `shell` -->

```sh
# Example of creating rich menu alias A
curl -v -X POST https://api.line.me/v2/bot/richmenu/alias \
-H 'Authorization: Bearer {channel access token}' \
-H 'Content-Type: application/json' \
-d \
'{
    "richMenuAliasId": "richmenu-alias-a",
    "richMenuId": "richmenu-862e6ad6c267d2ddf3f42bc78554f6a4"
}'

# Example of creating rich menu alias B
curl -v -X POST https://api.line.me/v2/bot/richmenu/alias \
-H 'Authorization: Bearer {channel access token}' \
-H 'Content-Type: application/json' \
-d \
'{
    "richMenuAliasId":"richmenu-alias-b",
    "richMenuId":"richmenu-88c05ef6921ae53f8b58a25f3a65faf7"
}'
```

<!-- tab end -->

#### Rate limit 

초당 2,000회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request header 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->
<!-- parameter start (props: required) -->

Content-Type

application/json

<!-- parameter end -->

#### Request body 

<!-- parameter start (props: required) -->

richMenuAliasId

String

리치 메뉴 별칭의 ID입니다. 채널마다 고유하면 임의의 ID를 사용할 수 있습니다.

- 최대 문자 수: 32
- 지원 문자 종류: 반각 영숫자(`a-z`, `0-9`), 밑줄(`_`), 하이픈(`-`)

<!-- parameter end -->
<!-- parameter start (props: required) -->

richMenuId

String

리치 메뉴 별칭에 연결할 리치 메뉴의 ID입니다.

<!-- note start -->

**연결할 수 있는 리치 메뉴에 대하여**

리치 메뉴 별칭은 같은 채널에서 만든 리치 메뉴에만 연결할 수 있습니다.

<!-- note end -->

<!-- parameter end -->

#### Response 

상태 코드 `200`과 빈 JSON 객체가 반환됩니다.

_Response example_

<!-- tab start `json` -->

```json
{}
```

<!-- tab end -->

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code | Description |
| --- | --- |
| `400` | 리치 메뉴 별칭을 만들 수 없습니다. 다음 원인을 확인하십시오.<ul><li>존재하지 않는 리치 메뉴이거나 이미지가 설정되지 않은 리치 메뉴를 지정했습니다.</li><li>잘못된 리치 메뉴 별칭 ID를 지정했습니다.</li><li>잘못된 리치 메뉴 ID를 지정했습니다.</li><li>만들 수 있는 리치 메뉴 별칭의 최대 개수에 도달했습니다.</li><li>이미 존재하는 리치 메뉴 별칭과 같은 ID를 지정했습니다.</li></ul> |

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Error response example_

<!-- tab start `json` -->

```json
// If you specify a rich menu that doesn't exist or a rich menu ID without a set image (400 Bad Request)
{
    "message": "richmenu not found",
    "details": []
}

// If you specify an invalid rich menu ID (400 Bad Request)
{
    "message": "The request body has 1 error(s)",
    "details": [
        {
            "message": "invalid richMenuId",
            "property": "richMenuId"
        }
    ]
}

// If you specify the same rich menu alias ID as an existing rich menu alias (400 Bad Request)
{
    "message": "conflict richmenu alias id",
    "details": []
}
```

<!-- tab end -->

### Delete rich menu alias 

Endpoint: `DELETE` `https://api.line.me/v2/bot/richmenu/alias/{richMenuAliasId}`

리치 메뉴 별칭을 삭제합니다.

<!-- note start -->

**리치 메뉴 별칭 개수 제한에 대하여**

Messaging API를 사용하면 LINE Official Account 하나당 리치 메뉴 별칭을 최대 1,000개까지 만들 수 있습니다. 이 제한에 도달하면 새 리치 메뉴 별칭을 만들기 전에 기존 리치 메뉴 별칭을 삭제해야 합니다.

<!-- note end -->

_Request example_

<!-- tab start `shell` -->

```sh
# Example of deleting rich menu alias A
curl -v -X DELETE https://api.line.me/v2/bot/richmenu/alias/richmenu-alias-a \
-H 'Authorization: Bearer {channel access token}'
```

<!-- tab end -->

#### Rate limit 

시간당 100회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request header 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->

#### Path parameter 

<!-- parameter start (props: required) -->

richMenuAliasId

삭제할 리치 메뉴 별칭의 ID입니다.

<!-- parameter end -->

#### Response 

상태 코드 `200`과 빈 JSON 객체가 반환됩니다.

_Response example_

<!-- tab start `json` -->

```json
{}
```

<!-- tab end -->

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code  | Description                                  |
| ----- | -------------------------------------------- |
| `400` | 잘못된 리치 메뉴 별칭 ID를 지정했습니다.     |
| `404` | 존재하지 않는 리치 메뉴 별칭을 지정했습니다. |

자세한 내용은 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션에서 참조하십시오.

_Error response example_

<!-- tab start `json` -->

```json
// If you specify a rich menu alias that doesn't exist (404 Not Found)
{
  "message": "richmenu alias not found",
  "details": []
}
```

<!-- tab end -->

### Update rich menu alias 

Endpoint: `POST` `https://api.line.me/v2/bot/richmenu/alias/{richMenuAliasId}`

리치 메뉴 별칭을 업데이트합니다. 기존 리치 메뉴 별칭을 지정하여 연결된 리치 메뉴를 변경할 수 있습니다.

<!-- note start -->

**업데이트는 언제 반영되나요?**

캐시 데이터 때문에 리치 메뉴 별칭의 업데이트가 즉시 반영되지 않을 수 있습니다.

<!-- note end -->

_Request example_

<!-- tab start `shell` -->

```sh
# Example of when you want to update rich menu alias A
curl -v -X POST https://api.line.me/v2/bot/richmenu/alias/richmenu-alias-a \
-H 'Authorization: Bearer {channel access token}' \
-H 'Content-Type: application/json' \
-d \
'{
    "richMenuId": "richmenu-862e6ad6c267d2ddf3f42bc78554f6a4"
}'
```

<!-- tab end -->

#### Rate limit 

초당 2,000회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request header 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->
<!-- parameter start (props: required) -->

Content-Type

application/json

<!-- parameter end -->

#### Path parameter 

<!-- parameter start (props: required) -->

richMenuAliasId

업데이트할 리치 메뉴 별칭의 ID입니다.

<!-- parameter end -->

#### Request body 

<!-- parameter start (props: required) -->

richMenuId

String

리치 메뉴 별칭에 연결할 리치 메뉴의 ID입니다.

<!-- note start -->

**연결할 수 있는 리치 메뉴에 대하여**

리치 메뉴 별칭은 같은 채널에서 만든 리치 메뉴에만 연결할 수 있습니다.

<!-- note end -->

<!-- parameter end -->

#### Response 

상태 코드 `200`과 빈 JSON 객체가 반환됩니다.

_Response example_

<!-- tab start `json` -->

```json
{}
```

<!-- tab end -->

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code | Description |
| --- | --- |
| `400` | 리치 메뉴 별칭을 업데이트할 수 없습니다. 다음 원인을 확인하십시오.<ul><li>존재하지 않는 리치 메뉴이거나 이미지가 설정되지 않은 리치 메뉴를 지정했습니다.</li><li>잘못된 리치 메뉴 별칭 ID를 지정했습니다.</li><li>잘못된 리치 메뉴 ID를 지정했습니다.</li></ul> |
| `404` | 존재하지 않는 리치 메뉴 별칭을 지정했습니다. |

자세한 내용은 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션의 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 참조하십시오.

_Error response example_

<!-- tab start `json` -->

```json
// If you specify a rich menu that doesn't exist or a rich menu ID without a set image (400 Bad Request)
{
    "message": "richmenu not found",
    "details": []
}

// If you specify an invalid rich menu ID (400 Bad Request)
{
    "message": "The request body has 1 error(s)",
    "details": [
        {
            "message": "invalid richMenuId",
            "property": "richMenuId"
        }
    ]
}
```

<!-- tab end -->

### Get rich menu alias information 

Endpoint: `GET` `https://api.line.me/v2/bot/richmenu/alias/{richMenuAliasId}`

리치 메뉴 별칭 ID를 지정하여 리치 메뉴 별칭의 정보를 가져옵니다.

_Request example_

<!-- tab start `shell` -->

```sh
# Example of when you want to get the information of rich menu alias A
curl -v -X GET https://api.line.me/v2/bot/richmenu/alias/richmenu-alias-a \
-H 'Authorization: Bearer {channel access token}'
```

<!-- tab end -->

#### Rate limit 

초당 2,000회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request header

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->

#### Path parameter 

<!-- parameter start (props: required) -->

richMenuAliasId

정보를 가져올 리치 메뉴 별칭의 ID입니다.

<!-- parameter end -->

#### Response 

상태 코드 `200`과 다음 정보를 담은 JSON 객체가 반환됩니다.

<!-- parameter start -->

richMenuAliasId

String

리치 메뉴 별칭의 ID입니다.

<!-- parameter end -->
<!-- parameter start -->

richMenuId

String

리치 메뉴 별칭에 연결된 리치 메뉴의 ID입니다.

<!-- parameter end -->

_Response example_

<!-- tab start `json` -->

```json
{
  "richMenuAliasId": "richmenu-alias-a",
  "richMenuId": "richmenu-88c05ef6921ae53f8b58a25f3a65faf7"
}
```

<!-- tab end -->

#### Error response 

다음 HTTP 상태 코드와 오류 응답이 반환됩니다.

| Code  | Description                                  |
| ----- | -------------------------------------------- |
| `400` | 잘못된 리치 메뉴 별칭 ID를 지정했습니다.     |
| `404` | 존재하지 않는 리치 메뉴 별칭을 지정했습니다. |

자세한 내용은 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션에서 참조하십시오.

_Error response example_

<!-- tab start `json` -->

```json
// If you specify a rich menu alias that doesn't exist (404 Not Found)
{
  "message": "richmenu alias not found",
  "details": []
}
```

<!-- tab end -->

### Get list of rich menu alias 

Endpoint: `GET` `https://api.line.me/v2/bot/richmenu/alias/list`

리치 메뉴 별칭 목록을 가져옵니다.

_Request example_

<!-- tab start `shell` -->

```sh
curl -v -X GET https://api.line.me/v2/bot/richmenu/alias/list \
-H 'Authorization: Bearer {channel access token}'
```

<!-- tab end -->

#### Rate limit 

초당 2,000회 요청

rate limit에 대한 자세한 내용은 [Rate limits](https://developers.line.biz/en/reference/messaging-api/#rate-limits)를 참조하십시오.

#### Request header 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->

#### Response 

상태 코드 `200`과 다음 값을 담은 JSON 객체가 반환됩니다.

<!-- parameter start -->

aliases\[].richMenuAliasId

String

리치 메뉴 별칭의 ID입니다.

<!-- parameter end -->
<!-- parameter start -->

aliases\[].richMenuId

String

리치 메뉴 별칭에 연결된 리치 메뉴의 ID입니다.

<!-- parameter end -->

_Response example_

<!-- tab start `json` -->

```json
// If you have 2 rich menu aliases
{
    "aliases": [
        {
            "richMenuAliasId": "richmenu-alias-a",
            "richMenuId": "richmenu-862e6ad6c267d2ddf3f42bc78554f6a4"
        },
        {
            "richMenuAliasId": "richmenu-alias-b",
            "richMenuId": "richmenu-88c05ef6921ae53f8b58a25f3a65faf7"
        }
    ]
}

// If you have 0 rich menu alias
{
    "aliases": []
}
```

<!-- tab end -->

#### Error response 

자세한 내용은 [Status codes](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [Error responses](https://developers.line.biz/en/reference/messaging-api/#error-responses)를 [Common specifications](https://developers.line.biz/en/reference/messaging-api/#common-specifications) 섹션에서 참조하십시오.

## Account link 

Provider(기업 및 개발자)가 제공하는 서비스 계정을 LINE 사용자의 계정과 연결할 수 있습니다.

### Issue link token 

Endpoint: `POST` `https://api.line.me/v2/bot/user/{userId}/linkToken`

[계정 연결](https://developers.line.biz/en/docs/messaging-api/linking-accounts/) 기능에 사용하는 link token을 발급합니다.

_Example request_

<!-- tab start `shell` -->

```sh
curl -X POST https://api.line.me/v2/bot/user/{userId}/linkToken \
-H 'Authorization: Bearer {channel access token}'
```

<!-- tab end -->

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`

<!-- parameter end -->

#### Path parameters 

<!-- parameter start (props: required) -->

userId

연결할 LINE 계정의 사용자 ID입니다. [account link event](https://developers.line.biz/en/reference/messaging-api/#account-link-event) 객체의 `source` 객체에서 확인할 수 있습니다. LINE에서 사용하는 LINE ID는 사용하지 마십시오.

<!-- parameter end -->

#### Response 

상태 코드 `200`과 다음 값을 담은 JSON 객체가 반환됩니다.

<!-- parameter start -->

linkToken

String

Link token입니다. Link token은 10분 동안 유효하며 한 번만 사용할 수 있습니다.

<!-- note start -->

**Note**

유효 기간은 예고 없이 변경될 수 있습니다.

<!-- note end -->

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

```json
{
  "linkToken": "NMZTNuVrPTqlr2IF8Bnymkb7rXfYv5EY"
}
```

<!-- tab end -->

## Message objects 

전송하는 메시지의 내용을 담은 JSON 객체입니다.

<!-- tip start -->

**메시지 객체 검증**

다음 endpoint를 사용하면 메시지 객체를 검증할 수 있습니다.

- [Validate message objects of a reply message](https://developers.line.biz/en/reference/messaging-api/#validate-message-objects-of-reply-message)
- [Validate message objects of a push message](https://developers.line.biz/en/reference/messaging-api/#validate-message-objects-of-push-message)
- [Validate message objects of a multicast message](https://developers.line.biz/en/reference/messaging-api/#validate-message-objects-of-multicast-message)
- [Validate message objects of a narrowcast message](https://developers.line.biz/en/reference/messaging-api/#validate-message-objects-of-narrowcast-message)
- [Validate message objects of a broadcast message](https://developers.line.biz/en/reference/messaging-api/#validate-message-objects-of-broadcast-message)

<!-- tip end -->

### Common properties for messages 

다음 속성은 모든 메시지 객체에 지정할 수 있습니다.

#### Quick reply 

이 속성은 퀵 리플라이 기능에 사용합니다. 자세한 내용은 [Use quick replies](https://developers.line.biz/en/docs/messaging-api/using-quick-reply/)를 참조하십시오.

<!-- parameter start (props: optional) -->

quickReply

Object

[items object](https://developers.line.biz/en/reference/messaging-api/#items-object)

<!-- parameter end -->

사용자가 여러 [message object](https://developers.line.biz/en/reference/messaging-api/#message-objects)를 받으면 마지막 message object의 `quickReply` 속성이 표시됩니다.

##### items object 

[퀵 리플라이 버튼 객체](https://developers.line.biz/en/reference/messaging-api/#quick-reply-button-object)를 담는 컨테이너입니다.

<!-- parameter start (props: required) -->

items

Array of objects

[퀵 리플라이 버튼 객체](https://developers.line.biz/en/reference/messaging-api/#quick-reply-button-object)의 배열입니다.\
최대: 13개의 객체

<!-- parameter end -->

_Example items object_

<!-- tab start `json` -->

```json
"quickReply": {
  "items": [
    {
      "type": "action",
      "action": {
        "type": "cameraRoll",
        "label": "Send photo"
      }
    },
    {
      "type": "action",
      "action": {
        "type": "camera",
        "label": "Open camera"
      }
    }
  ]
}
```

<!-- tab end -->

##### Quick reply button object 

버튼으로 표시되는 퀵 리플라이 옵션입니다.

<!-- parameter start (props: required) -->

type

String

`action`

<!-- parameter end -->
<!-- parameter start (props: optional) -->

imageUrl

String

버튼 앞에 표시되는 아이콘의 URL입니다(최대 문자 수: 2000)\
프로토콜: HTTPS(TLS 1.2 이상)\
이미지 형식: PNG\
종횡비: 1:1(너비 : 높이)\
최대 파일 크기: 1MB

이미지 크기에는 제한이 없습니다.\
`action` 속성이 [camera action](https://developers.line.biz/en/reference/messaging-api/#camera-action), [camera roll action](https://developers.line.biz/en/reference/messaging-api/#camera-roll-action), [location action](https://developers.line.biz/en/reference/messaging-api/#location-action)이고 `imageUrl` 속성을 설정하지 않으면 기본 아이콘이 표시됩니다.

URL은 UTF-8로 퍼센트 인코딩해야 합니다. 자세한 내용은 [About the encoding of a URL specified in a request body property](https://developers.line.biz/en/reference/messaging-api/#url-encoding)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: required) -->

action

Object

이 버튼을 탭했을 때 수행할 액션입니다. [action object](https://developers.line.biz/en/reference/messaging-api/#action-objects)를 지정합니다. 사용할 수 있는 액션은 다음과 같습니다.

- [Postback action](https://developers.line.biz/en/reference/messaging-api/#postback-action)
- [Message action](https://developers.line.biz/en/reference/messaging-api/#message-action)
- [URI action](https://developers.line.biz/en/reference/messaging-api/#uri-action)
- [Datetime picker action](https://developers.line.biz/en/reference/messaging-api/#datetime-picker-action)
- [Camera action](https://developers.line.biz/en/reference/messaging-api/#camera-action)
- [Camera roll action](https://developers.line.biz/en/reference/messaging-api/#camera-roll-action)
- [Location action](https://developers.line.biz/en/reference/messaging-api/#location-action)
- [Clipboard action](https://developers.line.biz/en/reference/messaging-api/#clipboard-action)

<!-- parameter end -->

퀵 리플라이 기능을 지원하지 않는 LINE 버전이 퀵 리플라이 버튼이 포함된 메시지를 받으면 메시지만 표시됩니다.

#### Customize icon and display name 

LINE Official Account에서 메시지를 보낼 때 [Message objects](https://developers.line.biz/en/reference/messaging-api/#message-objects)에서 `sender.name` 속성과 `sender.iconUrl` 속성을 지정할 수 있습니다.

<!-- parameter start (props: optional) -->

sender.name

String

표시 이름입니다. `LINE`과 같은 일부 단어는 사용할 수 없습니다.\
최대 문자 수: 20

<!-- parameter end -->
<!-- parameter start (props: optional) -->

sender.iconUrl

String

메시지를 보낼 때 아이콘으로 표시할 이미지의 URL입니다(최대 문자 수: 2000)\
프로토콜: HTTPS(TLS 1.2 이상)\
이미지 형식: PNG\
종횡비: 1:1(너비 : 높이)\
최대 파일 크기: 1MB

URL은 UTF-8로 퍼센트 인코딩해야 합니다. 자세한 내용은 [About the encoding of a URL specified in a request body property](https://developers.line.biz/en/reference/messaging-api/#url-encoding)를 참조하십시오.

<!-- parameter end -->

_Text message example of customized icon and display name_

<!-- tab start `json` -->

```json
{
  "type": "text",
  "text": "Hello, I am Cony!!",
  "sender": {
    "name": "Cony",
    "iconUrl": "https://line.me/conyprof"
  }
}
```

<!-- tab end -->

### Text message 

<!-- note start -->

**Number of characters and index position of emojis**

속성에 설정하는 텍스트의 문자 수와 이모지의 인덱스 위치는 UTF-16으로 인코딩했을 때의 코드 유닛 수와 위치여야 합니다. 서로게이트 페어를 사용하는 문자나 UTF-16으로 표현할 수 있는 이모지처럼 일부 문자는 하나가 아니라 여러 문자로 계산하십시오.

자세한 내용은 Messaging API 문서의 [Character counting in a text](https://developers.line.biz/en/docs/messaging-api/text-character-count/)를 참조하십시오.

<!-- note end -->

<!-- parameter start (props: required) -->

type

String

`text`

<!-- parameter end -->
<!-- parameter start (props: required) -->

text

String

메시지 텍스트입니다. 다음 이모지를 포함할 수 있습니다.

- LINE 이모지. `$` 문자를 자리 표시자로 사용하고, 사용할 LINE 이모지의 `product ID`와 `emoji ID`를 `emojis` 속성에 지정합니다. 자세한 내용은 [LINE emoji](https://developers.line.biz/en/docs/messaging-api/emoji-list/)를 참조하십시오.
- Unicode 이모지

최대 문자 수: 5000

<!-- warning start -->

**&quot;LINE original unicode emojis&quot;는 2022년 3월 31일부로 제공이 종료되었습니다**

"LINE original unicode emojis" 대신 `emojis` 속성과 함께 "LINE Emoji"를 사용하십시오.

자세한 내용은 2022년 4월 1일 뉴스인 ["LINE original unicode emojis" of the Messaging API has been discontinued as of March 31, 2022](https://developers.line.biz/en/news/2022/04/01/line-original-unicode-emojis-has-been-discontinued/)와 [LINE emoji](https://developers.line.biz/en/docs/messaging-api/emoji-list/)를 참조하십시오.

<!-- warning end -->

<!-- parameter end -->
<!-- parameter start (props: optional) -->

emojis

Array of LINE emoji objects

하나 이상의 LINE 이모지입니다.\
최대: LINE 이모지 20개

<!-- parameter end -->
<!-- parameter start (props: optional) -->

emojis.index

Number

`text`에서 LINE 이모지의 자리 표시자인 `$`의 인덱스 위치입니다. 첫 번째 문자의 위치는 `0`입니다. 자세한 내용은 텍스트 메시지 예시를 참조하십시오.

<!-- note start -->

**Note**

`$`의 위치와 일치하지 않는 위치를 지정하면 API가 HTTP `400 Bad request`를 반환합니다.

<!-- note end -->

<!-- parameter end -->
<!-- parameter start (props: optional) -->

emojis.productId

String

LINE 이모지 세트의 product ID입니다. product ID에 대한 자세한 내용은 [LINE emoji](https://developers.line.biz/en/docs/messaging-api/emoji-list/)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

emojis.emojiId

String

Emoji ID입니다. Messaging API로 보낼 수 있는 LINE 이모지의 emoji ID에 대한 자세한 내용은 [LINE emoji](https://developers.line.biz/en/docs/messaging-api/emoji-list/)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

quoteToken

String

인용하려는 메시지의 quote token입니다. 자세한 내용은 Messaging API 문서의 [Get quote tokens](https://developers.line.biz/en/docs/messaging-api/get-quote-tokens/)를 참조하십시오.

<!-- parameter end -->

_Text message example_

<!-- tab start `json` -->

```json
{
    "type": "text",
    "text": "Hello, world"
}
```

<!-- tab end -->

_Text message example with LINE emoji_

<!-- tab start `json` -->

```json
{
    "type": "text",
    "text": "$ LINE emoji $",
    "emojis": [
      {
        "index": 0,
        "productId": "5ac1bfd5040ab15980c9b435",
        "emojiId": "001"
      },
      {
        "index": 13,
        "productId": "5ac1bfd5040ab15980c9b435",
        "emojiId": "002"
      }
    ]
}
```

<!-- tab end -->

_Example of a text message quoting a past message_

<!-- tab start `json` -->

```json
{
    "type": "text",
    "text": "Yes, you can.",
    "quoteToken": "yHAz4Ua2wx7..."
}
```

<!-- tab end -->

### Text message (v2) 

[Text message](https://developers.line.biz/en/reference/messaging-api/#text-message)와 달리 text message (v2)는 `{`와 `}`로 둘러싼 문자열을 멘션과 이모지로 대체할 수 있습니다.

<!-- parameter start (props: required) -->

type

String

`textV2`

<!-- parameter end -->
<!-- parameter start (props: required) -->

text

String

메시지 텍스트입니다.

`substitution` 속성을 사용하면 `{`와 `}`로 둘러싼 문자열을 멘션이나 이모지로 대체할 수 있습니다. `{`와 `}`를 문자열로 사용하려면 `{{`와 `}}`로 이스케이프하십시오. 또한 `{`와 `}`를 사용할 때는 다음 사항을 확인하십시오.

- `{`와 `}`는 쌍으로 사용해야 합니다.
- `{`와 `}`로 둘러싼 문자열의 대체 내용은 `substitution` 속성을 사용하여 지정해야 합니다.

최대 문자 수: 5000

<!-- parameter end -->
<!-- parameter start (props: optional) -->

substitution

Object

`text` 속성의 `{`와 `}`로 둘러싼 부분에 대한 대체 내용을 지정하는 객체입니다.

객체 키에 사용할 수 있는 문자는 반각 영숫자(`0-9a-zA-Z`)와 밑줄(`_`)입니다. 또한 키의 최대 길이는 20자입니다.

객체 값으로 [mention objects](https://developers.line.biz/en/reference/messaging-api/#text-message-v2-mention-object) 또는 [emoji objects](https://developers.line.biz/en/reference/messaging-api/#text-message-v2-emoji-object)를 지정할 수 있습니다.

최대 객체 수: 100

<!-- parameter end -->
<!-- parameter start (props: optional) -->

quoteToken

String

인용하려는 메시지의 quote token입니다. 자세한 내용은 Messaging API 문서의 [Get quote tokens](https://developers.line.biz/en/docs/messaging-api/get-quote-tokens/)를 참조하십시오.

<!-- parameter end -->

_Example of a text message (v2) with mentions and an emoji_

<!-- tab start `json` -->

```json
{
  "type": "textV2",
  "text": "Welcome, {user1}! {laugh}\n{everyone} There is a newcomer!",
  "substitution": {
    "user1": {
      "type": "mention",
      "mentionee": {
        "type": "user",
        "userId": "U49585cd0d5..."
      }
    },
    "laugh": {
      "type": "emoji",
      "productId": "5a8555cfe6256cc92ea23c2a",
      "emojiId": "002"
    },
    "everyone": {
      "type": "mention",
      "mentionee": {
        "type": "all"
      }
    }
  }
}
```

<!-- tab end -->

#### Mention object 

텍스트 안에서 대체할 멘션의 내용을 지정합니다. 멘션 객체를 사용할 때는 다음 사항을 확인하십시오.

1. 멘션 객체는 [reply message](https://developers.line.biz/en/reference/messaging-api/#send-reply-message) 또는 [push message](https://developers.line.biz/en/reference/messaging-api/#send-push-message)에서만 사용할 수 있습니다.
1. 메시지의 대상은 [group chat](https://developers.line.biz/en/docs/messaging-api/group-chats/#group) 또는 [multi-person chat](https://developers.line.biz/en/docs/messaging-api/group-chats/#room)이어야 합니다.
1. 메시지를 보내는 LINE Official Account는 메시지를 보내려는 그룹 채팅 또는 다인 채팅의 멤버여야 합니다.
1. 멘션된 모든 사용자는 메시지를 보내려는 그룹 채팅 또는 다인 채팅의 멤버여야 합니다.
1. 하나의 메시지에서 대체할 수 있는 멘션은 최대 20개입니다.

위 2~4번 항목은 [Validate message objects of a reply message](https://developers.line.biz/en/reference/messaging-api/#validate-message-objects-of-reply-message) 또는 [Validate message objects of a push message](https://developers.line.biz/en/reference/messaging-api/#validate-message-objects-of-push-message) endpoint로 검증할 수 없습니다.

<!-- parameter start (props: required) -->

type

String

`mention`

<!-- parameter end -->
<!-- parameter start (props: required) -->

mentionee

Object

멘션할 대상 객체입니다. [user object](https://developers.line.biz/en/reference/messaging-api/#text-message-v2-mentionee-user) 또는 [all-mention object](https://developers.line.biz/en/reference/messaging-api/#text-message-v2-mentionee-all) 중 하나를 지정합니다.

<!-- parameter end -->

##### User object 

<!-- parameter start (props: required) -->

type

String

`user`

<!-- parameter end -->
<!-- parameter start (props: required) -->

userId

String

멘션할 사용자의 사용자 ID입니다. LINE Bot의 사용자 ID는 지정할 수 없습니다.

<!-- parameter end -->

##### All-mention object 

<!-- parameter start (props: required) -->

type

String

`all`

<!-- parameter end -->

#### Emoji object 

텍스트 안에서 대체할 이모지의 내용을 지정합니다. 하나의 메시지에서 대체할 수 있는 이모지는 최대 20개입니다.

<!-- parameter start (props: required) -->

type

String

`emoji`

<!-- parameter end -->
<!-- parameter start (props: required) -->

productId

String

LINE 이모지 세트의 product ID입니다. product ID에 대한 자세한 내용은 Messaging API 문서의 [LINE emoji](https://developers.line.biz/en/docs/messaging-api/emoji-list/)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: required) -->

emojiId

String

Emoji ID입니다. Messaging API로 보낼 수 있는 LINE 이모지의 emoji ID에 대한 자세한 내용은 Messaging API 문서의 [LINE emoji](https://developers.line.biz/en/docs/messaging-api/emoji-list/)를 참조하십시오.

<!-- parameter end -->

### Sticker message 

<!-- parameter start (props: required) -->

type

String

`sticker`

<!-- parameter end -->
<!-- parameter start (props: required) -->

packageId

String

스티커 세트의 package ID입니다. package ID에 대한 자세한 내용은 [Stickers](https://developers.line.biz/en/docs/messaging-api/sticker-list/)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: required) -->

stickerId

String

Sticker ID입니다. Messaging API로 보낼 수 있는 스티커의 sticker ID 목록은 [Stickers](https://developers.line.biz/en/docs/messaging-api/sticker-list/)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

quoteToken

String

인용하려는 메시지의 quote token입니다. 자세한 내용은 Messaging API 문서의 [Get quote tokens](https://developers.line.biz/en/docs/messaging-api/get-quote-tokens/)를 참조하십시오.

<!-- parameter end -->

_Sticker message example_

<!-- tab start `json` -->

```json
{
  "type": "sticker",
  "packageId": "446",
  "stickerId": "1988"
}
```

<!-- tab end -->

_Example of a sticker message quoting a past message_

<!-- tab start `json` -->

```json
{
  "type": "sticker",
  "packageId": "789",
  "stickerId": "10855",
  "quoteToken": "yHAz4Ua2wx7..."
}
```

<!-- tab end -->

### Image message 

<!-- parameter start (props: required) -->

type

String

`image`

<!-- parameter end -->
<!-- parameter start (props: required) -->

originalContentUrl

String

이미지 파일 URL(최대 문자 수: 2000)\
프로토콜: HTTPS(TLS 1.2 이상)\
이미지 형식: JPEG 또는 PNG\
최대 파일 크기: 10MB

URL은 UTF-8로 퍼센트 인코딩해야 합니다. 자세한 내용은 [About the encoding of a URL specified in a request body property](https://developers.line.biz/en/reference/messaging-api/#url-encoding)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: required) -->

previewImageUrl

String

미리 보기 이미지 URL(최대 문자 수: 2000)\
프로토콜: HTTPS(TLS 1.2 이상)\
이미지 형식: JPEG 또는 PNG\
최대 파일 크기: 1MB

URL은 UTF-8로 퍼센트 인코딩해야 합니다. 자세한 내용은 [About the encoding of a URL specified in a request body property](https://developers.line.biz/en/reference/messaging-api/#url-encoding)를 참조하십시오.

사용자 기기의 상황에 따라 `originalContentUrl` 속성의 이미지가 미리 보기 이미지로 사용될 수 있습니다.

<!-- parameter end -->

_Image message example_

<!-- tab start `json` -->

```json
{
  "type": "image",
  "originalContentUrl": "https://example.com/original.jpg",
  "previewImageUrl": "https://example.com/preview.jpg"
}
```

<!-- tab end -->

### Video message 

<!-- note start -->

**If the video doesn't play properly**

메시지에 포함된 동영상이 전송에 성공하더라도 사용자 기기에서 동영상이 제대로 재생되지 않을 수 있습니다. 자세한 내용은 FAQ의 [Why can't I play a video that I sent as a message?](https://developers.line.biz/en/faq/#why-cant-i-play-a-video-i-sent)를 참조하십시오.

<!-- note end -->

<!-- note start -->

**Video aspect ratio**

- 매우 넓거나 좁은 동영상은 일부 환경에서 재생할 때 잘릴 수 있습니다.
- `originalContentUrl`에 지정한 동영상의 종횡비와 `previewImageUrl`에 지정한 미리 보기 이미지의 종횡비는 같아야 합니다. 종횡비가 다르면 동영상 뒤에 미리 보기 이미지가 표시됩니다.

![A video message in the LINE chat room. A preview image with a 1:1 aspect ratio is displayed behind the video that has an aspect ratio of 16:9.](https://developers.line.biz/media/messaging-api/messages/image-overlapping-en.png)

<!-- note end -->

<!-- parameter start (props: required) -->

type

String

`video`

<!-- parameter end -->
<!-- parameter start (props: required) -->

originalContentUrl

String

동영상 파일 URL(최대 문자 수: 2000)\
프로토콜: HTTPS(TLS 1.2 이상)\
동영상 형식: mp4\
최대 파일 크기: 200MB

URL은 UTF-8로 퍼센트 인코딩해야 합니다. 자세한 내용은 [About the encoding of a URL specified in a request body property](https://developers.line.biz/en/reference/messaging-api/#url-encoding)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: required) -->

previewImageUrl

String

미리 보기 이미지 URL(최대 문자 수: 2000)\
프로토콜: HTTPS(TLS 1.2 이상)\
이미지 형식: JPEG 또는 PNG\
최대 파일 크기: 1MB

URL은 UTF-8로 퍼센트 인코딩해야 합니다. 자세한 내용은 [About the encoding of a URL specified in a request body property](https://developers.line.biz/en/reference/messaging-api/#url-encoding)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

trackingId

String

[Video viewing complete event](https://developers.line.biz/en/reference/messaging-api/#video-viewing-complete)가 발생할 때 동영상을 식별하는 데 사용하는 ID입니다. `trackingId`를 추가하여 동영상 메시지를 보내면 사용자가 동영상 시청을 마쳤을 때 동영상 시청 완료 이벤트가 발생합니다.

같은 ID를 여러 메시지에서 사용할 수 있습니다.

- 최대 문자 수: 100
- 지원 문자 종류: 반각 영숫자(`a-z`, `A-Z`, `0-9`)와 기호(`-.=,+*()%$&;:@{}!?<>[]`)

<!-- note start -->

**Note**

그룹 채팅 또는 다인 채팅을 대상으로 한 메시지에서는 `trackingId` 속성을 사용할 수 없습니다.

<!-- note end -->

<!-- parameter end -->

_Video message example_

<!-- tab start `json` -->

```json
{
  "type": "video",
  "originalContentUrl": "https://example.com/original.mp4",
  "previewImageUrl": "https://example.com/preview.jpg",
  "trackingId": "track-id"
}
```

<!-- tab end -->

### Audio message 

<!-- parameter start (props: required) -->

type

String

`audio`

<!-- parameter end -->
<!-- parameter start (props: required) -->

originalContentUrl

String

오디오 파일 URL(최대 문자 수: 2000)\
프로토콜: HTTPS(TLS 1.2 이상)\
오디오 형식: mp3 또는 m4a\
최대 파일 크기: 200MB

URL은 UTF-8로 퍼센트 인코딩해야 합니다. 자세한 내용은 [About the encoding of a URL specified in a request body property](https://developers.line.biz/en/reference/messaging-api/#url-encoding)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: required) -->

duration

Number

오디오 파일의 길이(밀리초)입니다.

<!-- parameter end -->

_Audio message example_

<!-- tab start `json` -->

```json
{
  "type": "audio",
  "originalContentUrl": "https://example.com/original.m4a",
  "duration": 60000
}
```

<!-- tab end -->

### Location message 

<!-- parameter start (props: required) -->

type

String

`location`

<!-- parameter end -->
<!-- parameter start (props: required) -->

title

String

제목\
최대 문자 수: 100

<!-- parameter end -->
<!-- parameter start (props: required) -->

address

String

주소\
최대 문자 수: 100

<!-- parameter end -->
<!-- parameter start (props: required) -->

latitude

Decimal

위도

<!-- parameter end -->
<!-- parameter start (props: required) -->

longitude

Decimal

경도

<!-- parameter end -->

_Location message example_

<!-- tab start `json` -->

```json
{
  "type": "location",
  "title": "my location",
  "address": "1-3 Kioicho, Chiyoda-ku, Tokyo, 102-8282, Japan",
  "latitude": 35.67966,
  "longitude": 139.73669
}
```

<!-- tab end -->

### Coupon message 

쿠폰 메시지는 쿠폰 ID를 지정하여 사용자에게 쿠폰을 보내는 메시지입니다.

<!-- parameter start (props: required) -->

type

String

`coupon`

<!-- parameter end -->
<!-- parameter start (props: required) -->

couponId

String

쿠폰 ID입니다.\
[쿠폰을 만들 때](https://developers.line.biz/en/reference/messaging-api/#create-coupon) [응답](https://developers.line.biz/en/reference/messaging-api/#create-coupon-response)에서 쿠폰 ID(`couponId`)를 얻을 수 있습니다. [쿠폰 목록을 가져오는](https://developers.line.biz/en/reference/messaging-api/#get-coupons-list) endpoint에서도 쿠폰 ID를 확인할 수 있습니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

deliveryTag

String

쿠폰 표시 경로의 이름입니다.\
최대 문자 수: 30\
지원 문자 종류: 반각 영숫자(`a-z`, `A-Z`, `0-9`)와 밑줄(`_`)

`deliveryTag`를 지정하지 않으면 경로가 `Unknown`으로 표시됩니다. 자세한 내용은 LINE for Business의 [Insight - Coupons](https://www.lycbiz.com/jp/manual/OfficialAccountManager/insight_coupon/)(일본어만 제공)를 참조하십시오.

<!-- parameter end -->

_Coupon message example_

<!-- tab start `json` -->

```json
{
  "type": "coupon",
  "couponId": "01JYNW8JMQVFBNWF1APF8Z3FS7",
  "deliveryTag": "2025_winter_campaign"
}
```

<!-- tab end -->

### Imagemap message 

Imagemap 메시지는 여러 개의 탭 가능한 영역이 있는 이미지로 구성된 메시지입니다. 이미지 전체에 탭 가능한 영역을 하나 지정하거나, 이미지를 나눈 영역마다 서로 다른 탭 가능한 영역을 지정할 수 있습니다.

이미지에서 동영상을 재생하고, 동영상이 끝난 후 하이퍼링크가 있는 라벨을 표시할 수도 있습니다.

<!-- note start -->

**If the video doesn't play properly**

메시지에 포함된 동영상이 전송에 성공하더라도 사용자 기기에서 동영상이 제대로 재생되지 않을 수 있습니다. 자세한 내용은 FAQ의 [Why can't I play a video that I sent as a message?](https://developers.line.biz/en/faq/#why-cant-i-play-a-video-i-sent)를 참조하십시오.

<!-- note end -->

<!-- note start -->

**Video aspect ratio**

`originalContentUrl`에 지정한 동영상의 종횡비와 `previewImageUrl`에 지정한 미리 보기 이미지의 종횡비는 같아야 합니다. 종횡비가 다르면 동영상 뒤에 미리 보기 이미지가 표시됩니다.

![A video message in the LINE chat room. A preview image with a 1:1 aspect ratio is displayed behind the video that has an aspect ratio of 16:9.](https://developers.line.biz/media/messaging-api/messages/image-overlapping-en.png)

<!-- note end -->

<!-- parameter start (props: required) -->

type

String

`imagemap`

<!-- parameter end -->
<!-- parameter start (props: required) -->

baseUrl

String

이미지 기본 URL(최대 문자 수: 2000)\
프로토콜: HTTPS(TLS 1.2 이상)\
Imagemap 메시지에서 지원하는 이미지에 대한 자세한 내용은 [How to configure an image](https://developers.line.biz/en/reference/messaging-api/#base-url)를 참조하십시오.

URL은 UTF-8로 퍼센트 인코딩해야 합니다. 자세한 내용은 [About the encoding of a URL specified in a request body property](https://developers.line.biz/en/reference/messaging-api/#url-encoding)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: required) -->

altText

String

대체 텍스트입니다. 사용자가 메시지를 받으면 기기의 알림이나 채팅 목록에서 이미지 대신 이 텍스트가 표시됩니다.\
Unicode 이모지를 포함할 수 있습니다.\
최대 문자 수: 1500

<!-- parameter end -->
<!-- parameter start (props: required) -->

baseSize.width

Number

기본 이미지의 너비(픽셀)입니다. 1040으로 설정합니다.

<!-- parameter end -->
<!-- parameter start (props: required) -->

baseSize.height

Number

기본 이미지의 높이입니다. 너비 1040픽셀에 해당하는 높이로 설정합니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="*1") -->

video.originalContentUrl

String

동영상 파일 URL(최대 문자 수: 2000)\
프로토콜: HTTPS(TLS 1.2 이상)\
동영상 형식: mp4\
최대 파일 크기: 200MB

URL은 UTF-8로 퍼센트 인코딩해야 합니다. 자세한 내용은 [About the encoding of a URL specified in a request body property](https://developers.line.biz/en/reference/messaging-api/#url-encoding)를 참조하십시오.

<!-- note start -->

**Note**

매우 넓거나 좁은 동영상은 일부 환경에서 재생할 때 잘릴 수 있습니다.

<!-- note end -->

<!-- parameter end -->
<!-- parameter start (props: annotation="*1") -->

video.previewImageUrl

String

미리 보기 이미지 URL(최대 문자 수: 2000)\
프로토콜: HTTPS(TLS 1.2 이상)\
이미지 형식: JPEG 또는 PNG\
최대 파일 크기: 1MB

URL은 UTF-8로 퍼센트 인코딩해야 합니다. 자세한 내용은 [About the encoding of a URL specified in a request body property](https://developers.line.biz/en/reference/messaging-api/#url-encoding)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: annotation="*1") -->

video.area.x

Number

Imagemap 영역의 왼쪽 가장자리를 기준으로 한 동영상 영역의 가로 위치입니다. 값은 `0` 이상이어야 합니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="*1") -->

video.area.y

Number

Imagemap 영역의 상단을 기준으로 한 동영상 영역의 세로 위치입니다. 값은 `0` 이상이어야 합니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="*1") -->

video.area.width

Number

동영상 영역의 너비입니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="*1") -->

video.area.height

Number

동영상 영역의 높이입니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="*2") -->

video.externalLink.linkUri

String

웹페이지 URL입니다. 동영상 뒤에 표시되는 라벨을 탭하면 호출됩니다.\
최대 문자 수: 1000\
사용할 수 있는 스킴은 `http`, `https`, `line`, `tel`입니다. LINE URL 스킴에 대한 자세한 내용은 [Use LINE features with the LINE URL scheme](https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/)를 참조하십시오.

URL은 UTF-8로 퍼센트 인코딩해야 합니다. 자세한 내용은 [About the encoding of a URL specified in a request body property](https://developers.line.biz/en/reference/messaging-api/#url-encoding)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: annotation="*2") -->

video.externalLink.label

String

라벨입니다. 동영상이 끝난 후 표시됩니다.\
최대 문자 수: 30

<!-- parameter end -->
<!-- parameter start (props: required) -->

actions

Array of [imagemap action objects](https://developers.line.biz/en/reference/messaging-api/#imagemap-action-objects)

탭했을 때의 액션입니다.\
최대: 50

<!-- parameter end -->

*1 Imagemap에서 동영상을 재생하도록 설정하면 이 속성이 필요합니다.\
*2 Imagemap에서 동영상을 재생하고 동영상 뒤에 라벨을 표시하도록 설정하면 이 속성이 필요합니다.

_Imagemap message example with two tappable areas_

<!-- tab start `json` -->

```json
{
  "type": "imagemap",
  "baseUrl": "https://example.com/bot/images/rm001",
  "altText": "This is an imagemap",
  "baseSize": {
    "width": 1040,
    "height": 1040
  },
  "video": {
    "originalContentUrl": "https://example.com/video.mp4",
    "previewImageUrl": "https://example.com/video_preview.jpg",
    "area": {
      "x": 0,
      "y": 0,
      "width": 1040,
      "height": 585
    },
    "externalLink": {
      "linkUri": "https://example.com/see_more.html",
      "label": "See More"
    }
  },
  "actions": [
    {
      "type": "uri",
      "linkUri": "https://example.com/",
      "area": {
        "x": 0,
        "y": 586,
        "width": 520,
        "height": 454
      }
    },
    {
      "type": "message",
      "text": "Hello",
      "area": {
        "x": 520,
        "y": 586,
        "width": 520,
        "height": 454
      }
    }
  ]
}
```

<!-- tab end -->

#### How to configure an image 

Imagemap 메시지에 사용하는 이미지는 다음 요구 사항을 충족해야 합니다.

- 이미지 형식: JPEG 또는 PNG
- 이미지 너비: 240px, 300px, 460px, 700px, 1040px
- 최대 파일 크기: 10MB

<!-- tip start -->

**투명 PNG 사용**

Imagemap 메시지에서 투명 PNG를 사용할 수 있습니다.

<!-- tip end -->

`baseUrl/{image width}` URL 형식으로 5가지 크기의 이미지에 접근할 수 있도록 하십시오. 그러면 LINE이 기기에 맞는 해상도의 이미지를 다운로드합니다.

예를 들어 기본 URL이 `https://example.com/images/cats`이면 너비 700px 이미지의 URL은 `https://example.com/images/cats/700`입니다. 모든 이미지가 올바르게 표시되는지 확인하려면 이미지 URL에 접근해 보십시오.

| Image width | Example URL                                 |
| ----------- | ------------------------------------------- |
| 240px       | `https://example.com/bot/images/rm001/240`  |
| 300px       | `https://example.com/bot/images/rm001/300`  |
| 460px       | `https://example.com/bot/images/rm001/460`  |
| 700px       | `https://example.com/bot/images/rm001/700`  |
| 1040px      | `https://example.com/bot/images/rm001/1040` |

<!-- note start -->

**URL에서 이미지 확장자 제외**

이미지 파일 이름에 확장자를 포함하지 마십시오. URL에 이미지 파일 확장자(예: `https://example.com/bot/images/rm001/700.png`)가 포함되어 있으면 Imagemap 메시지에서 이미지가 표시되지 않습니다.

<!-- note end -->

#### Imagemap action objects 

Imagemap의 액션과 탭 가능한 영역을 지정하는 객체입니다. 영역을 탭하면 액션 유형에 따라 다음 동작이 실행됩니다.

- `uri`: 지정한 URI로 이동합니다.
- `message`: 지정한 메시지를 보냅니다.
- `clipboard`: 지정한 문자열을 사용자 기기의 클립보드에 복사합니다.

##### Imagemap URI action object 

<!-- parameter start (props: required) -->

type

String

`uri`

<!-- parameter end -->
<!-- parameter start (props: optional) -->

label

String

액션의 라벨입니다. 클라이언트 기기에서 접근성 기능이 활성화되어 있으면 읽어 줍니다.\
최대 문자 수: 100

<!-- parameter end -->
<!-- parameter start (props: required) -->

linkUri

String

웹페이지 URL\
최대 문자 수: 1000\
사용할 수 있는 스킴은 `http`, `https`, `line`, `tel`입니다. LINE URL 스킴에 대한 자세한 내용은 [Use LINE features with the LINE URL scheme](https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/)를 참조하십시오.

URL은 UTF-8로 퍼센트 인코딩해야 합니다. 자세한 내용은 [About the encoding of a URL specified in a request body property](https://developers.line.biz/en/reference/messaging-api/#url-encoding)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: required) -->

area

[Imagemap area object](https://developers.line.biz/en/reference/messaging-api/#imagemap-area-object)

정의된 탭 가능한 영역

<!-- parameter end -->

_Example imagemap URI action object_

<!-- tab start `json` -->

```json
{
  "type": "uri",
  "label": "https://example.com/",
  "linkUri": "https://example.com/",
  "area": {
    "x": 0,
    "y": 0,
    "width": 520,
    "height": 1040
  }
}
```

<!-- tab end -->

##### Imagemap message action object 

<!-- parameter start (props: required) -->

type

String

`message`

<!-- parameter end -->
<!-- parameter start (props: optional) -->

label

String

액션의 라벨입니다. 클라이언트 기기에서 접근성 기능이 활성화되어 있으면 읽어 줍니다.\
최대 문자 수: 100

<!-- parameter end -->
<!-- parameter start (props: required) -->

text

String

보낼 메시지\
최대 문자 수: 400

<!-- parameter end -->
<!-- parameter start (props: required) -->

area

[Imagemap area object](https://developers.line.biz/en/reference/messaging-api/#imagemap-area-object)

정의된 탭 가능한 영역

<!-- parameter end -->

_Example imagemap message action object_

<!-- tab start `json` -->

```json
{
  "type": "message",
  "label": "hello",
  "text": "hello",
  "area": {
    "x": 520,
    "y": 0,
    "width": 520,
    "height": 1040
  }
}
```

<!-- tab end -->

##### Imagemap clipboard action object 

이 기능은 iOS 또는 Android의 LINE 버전 `14.0.0` 이상에서 사용할 수 있습니다.

<!-- parameter start (props: required) -->

type

String

`clipboard`

<!-- parameter end -->
<!-- parameter start (props: optional) -->

label

String

액션의 라벨입니다. 클라이언트 기기에서 접근성 기능이 활성화되어 있으면 읽어 줍니다.\
최대 문자 수: 100

<!-- parameter end -->
<!-- parameter start (props: required) -->

clipboardText

String

클립보드에 복사되는 텍스트

- 최대 문자 수: 1000

<!-- parameter end -->
<!-- parameter start (props: required) -->

area

[Imagemap area object](https://developers.line.biz/en/reference/messaging-api/#imagemap-area-object)

정의된 탭 가능한 영역

<!-- parameter end -->

_Example imagemap clipboard action object_

<!-- tab start `json` -->

```json
{
  "type": "clipboard",
  "label": "Copy",
  "clipboardText": "3B48740B",
  "area": {
    "x": 520,
    "y": 0,
    "width": 520,
    "height": 1040
  }
}
```

<!-- tab end -->

###### Imagemap area object 

탭 가능한 영역의 크기를 정의합니다. 원점은 왼쪽 위입니다. `baseSize.width` 속성과 `baseSize.height` 속성을 기준으로 이 속성을 설정하십시오.

<!-- parameter start (props: required) -->

x

Number

영역의 왼쪽 가장자리를 기준으로 한 가로 위치입니다. 값은 `0` 이상이어야 합니다.

<!-- parameter end -->
<!-- parameter start (props: required) -->

y

Number

영역의 상단을 기준으로 한 세로 위치입니다. 값은 `0` 이상이어야 합니다.

<!-- parameter end -->
<!-- parameter start (props: required) -->

width

Number

탭 가능한 영역의 너비입니다.

<!-- parameter end -->
<!-- parameter start (props: required) -->

height

Number

탭 가능한 영역의 높이입니다.

<!-- parameter end -->

_Example imagemap area object_

<!-- tab start `json` -->

```json
{
  "x": 520,
  "y": 0,
  "width": 520,
  "height": 1040
}
```

<!-- tab end -->

### Template messages 

템플릿 메시지는 사용자 지정이 가능한 미리 정의된 레이아웃을 가진 메시지입니다. 자세한 내용은 [Template messages](https://developers.line.biz/en/docs/messaging-api/message-types/#template-messages)를 참조하십시오.

다음 템플릿 유형을 사용할 수 있습니다.

- [Buttons](https://developers.line.biz/en/reference/messaging-api/#buttons)
- [Confirm](https://developers.line.biz/en/reference/messaging-api/#confirm)
- [Carousel](https://developers.line.biz/en/reference/messaging-api/#carousel)
- [Image carousel](https://developers.line.biz/en/reference/messaging-api/#image-carousel)

더 유연한 레이아웃의 메시지를 보내려면 [Flex Message](https://developers.line.biz/en/reference/messaging-api/#flex-message)를 사용하십시오.

#### Common properties of template message objects 

다음 속성은 모든 템플릿 메시지 객체에 공통으로 적용됩니다.

<!-- parameter start (props: required) -->

type

String

`template`

<!-- parameter end -->
<!-- parameter start (props: required) -->

altText

String

대체 텍스트입니다. 사용자가 메시지를 받으면 기기의 알림, 채팅 목록, [인용 메시지](https://developers.line.biz/en/docs/messaging-api/sending-messages/#send-quote-messages)에서 템플릿 메시지 대신 이 텍스트가 표시됩니다.\
Unicode 이모지를 포함할 수 있습니다.\
최대 문자 수: 1500

<!-- parameter end -->
<!-- parameter start (props: required) -->

template

Object

[Buttons](https://developers.line.biz/en/reference/messaging-api/#buttons), [Confirm](https://developers.line.biz/en/reference/messaging-api/#confirm), [Carousel](https://developers.line.biz/en/reference/messaging-api/#carousel) 또는 [Image Carousel](https://developers.line.biz/en/reference/messaging-api/#image-carousel) 객체입니다.

<!-- parameter end -->

#### Buttons template 

이미지, 제목, 텍스트와 여러 개의 액션 버튼이 있는 템플릿입니다.

<!-- parameter start (props: required) -->

type

String

`buttons`

<!-- parameter end -->
<!-- parameter start (props: optional) -->

thumbnailImageUrl

String

이미지 URL(최대 문자 수: 2000)\
프로토콜: HTTPS(TLS 1.2 이상)\
이미지 형식: JPEG 또는 PNG\
최대 너비: 1024px\
최대 파일 크기: 10MB

URL은 UTF-8로 퍼센트 인코딩해야 합니다. 자세한 내용은 [About the encoding of a URL specified in a request body property](https://developers.line.biz/en/reference/messaging-api/#url-encoding)를 참조하십시오.

<!-- tip start -->

**권장 파일 크기**

메시지 표시가 지연되지 않도록 개별 이미지 파일의 크기를 작게(1MB 이하 권장) 유지하십시오.

<!-- tip end -->

<!-- parameter end -->
<!-- parameter start (props: optional) -->

imageAspectRatio

String

이미지의 종횡비입니다. 다음 중 하나입니다.

- `rectangle`: 1.51:1
- `square`: 1:1

기본값: `rectangle`

<!-- parameter end -->
<!-- parameter start (props: optional) -->

imageSize

String

이미지의 크기입니다. 다음 중 하나입니다.

- `cover`: 이미지가 이미지 영역 전체를 채웁니다. 영역에 맞지 않는 이미지 부분은 표시되지 않습니다.
- `contain`: 이미지 전체가 이미지 영역에 표시됩니다. 세로 이미지의 좌우 빈 영역이나 가로 이미지의 상하 빈 영역에는 배경이 표시됩니다.

기본값: `cover`

<!-- parameter end -->
<!-- parameter start (props: optional) -->

imageBackgroundColor

String

이미지의 배경색입니다. RGB 색상 값을 지정합니다. 기본값: `#FFFFFF`(흰색)

<!-- parameter end -->
<!-- parameter start (props: optional) -->

title

String

제목\
최대 문자 수: 40

<!-- parameter end -->
<!-- parameter start (props: required) -->

text

String

메시지 텍스트\
최대 문자 수: 160(이미지나 제목이 없는 경우)\
최대 문자 수: 60(이미지나 제목이 있는 메시지의 경우)

<!-- parameter end -->
<!-- parameter start (props: optional) -->

defaultAction

[Action object](https://developers.line.biz/en/reference/messaging-api/#action-objects)

이미지, 제목 또는 텍스트 영역을 탭했을 때의 액션입니다.

<!-- parameter end -->
<!-- parameter start (props: required) -->

actions

Array of [action objects](https://developers.line.biz/en/reference/messaging-api/#action-objects)

탭했을 때의 액션입니다.\
최대 객체 수: 4

<!-- parameter end -->

_Buttons template message example_

<!-- tab start `json` -->

```json
{
  "type": "template",
  "altText": "This is a buttons template",
  "template": {
    "type": "buttons",
    "thumbnailImageUrl": "https://example.com/bot/images/image.jpg",
    "imageAspectRatio": "rectangle",
    "imageSize": "cover",
    "imageBackgroundColor": "#FFFFFF",
    "title": "Menu",
    "text": "Please select",
    "defaultAction": {
      "type": "uri",
      "label": "View detail",
      "uri": "http://example.com/page/123"
    },
    "actions": [
      {
        "type": "postback",
        "label": "Buy",
        "data": "action=buy&itemid=123"
      },
      {
        "type": "postback",
        "label": "Add to cart",
        "data": "action=add&itemid=123"
      },
      {
        "type": "uri",
        "label": "View detail",
        "uri": "http://example.com/page/123"
      }
    ]
  }
}
```

<!-- tab end -->

#### Confirm template 

두 개의 액션 버튼이 있는 템플릿입니다.

<!-- parameter start (props: required) -->

type

String

`confirm`

<!-- parameter end -->
<!-- parameter start (props: required) -->

text

String

메시지 텍스트\
최대 문자 수: 240

<!-- parameter end -->
<!-- parameter start (props: required) -->

actions

Array of [action objects](https://developers.line.biz/en/reference/messaging-api/#action-objects)

탭했을 때의 액션입니다.\
두 버튼에 대해 액션 2개를 설정하십시오.

<!-- parameter end -->

_Confirm template message example_

<!-- tab start `json` -->

```json
{
  "type": "template",
  "altText": "this is a confirm template",
  "template": {
    "type": "confirm",
    "text": "Are you sure?",
    "actions": [
      {
        "type": "message",
        "label": "Yes",
        "text": "yes"
      },
      {
        "type": "message",
        "label": "No",
        "text": "no"
      }
    ]
  }
}
```

<!-- tab end -->

#### Carousel template 

캐러셀처럼 순환하며 넘길 수 있는 여러 열이 있는 템플릿입니다. 열은 가로로 스크롤하면 순서대로 표시됩니다.

<!-- parameter start (props: required) -->

type

String

`carousel`

<!-- parameter end -->
<!-- parameter start (props: required) -->

columns

Array of [column objects](https://developers.line.biz/en/reference/messaging-api/#column-object-for-carousel)

열의 배열입니다.\
최대 열 수: 10

<!-- parameter end -->
<!-- parameter start (props: optional) -->

imageAspectRatio

String

이미지의 종횡비입니다. 다음 중 하나입니다.

- `rectangle`: 1.51:1
- `square`: 1:1

모든 열에 적용됩니다. 기본값: `rectangle`

<!-- parameter end -->
<!-- parameter start (props: optional) -->

imageSize

String

이미지의 크기입니다. 다음 중 하나입니다.

- `cover`: 이미지가 이미지 영역 전체를 채웁니다. 영역에 맞지 않는 이미지 부분은 표시되지 않습니다.
- `contain`: 이미지 전체가 이미지 영역에 표시됩니다. 세로 이미지의 좌우 빈 영역이나 가로 이미지의 상하 빈 영역에는 배경이 표시됩니다.

모든 열에 적용됩니다. 기본값: `cover`

<!-- parameter end -->

_Carousel template message example_

<!-- tab start `json` -->

```json
{
  "type": "template",
  "altText": "this is a carousel template",
  "template": {
    "type": "carousel",
    "columns": [
      {
        "thumbnailImageUrl": "https://example.com/bot/images/item1.jpg",
        "imageBackgroundColor": "#FFFFFF",
        "title": "this is menu",
        "text": "description",
        "defaultAction": {
          "type": "uri",
          "label": "View detail",
          "uri": "http://example.com/page/123"
        },
        "actions": [
          {
            "type": "postback",
            "label": "Buy",
            "data": "action=buy&itemid=111"
          },
          {
            "type": "postback",
            "label": "Add to cart",
            "data": "action=add&itemid=111"
          },
          {
            "type": "uri",
            "label": "View detail",
            "uri": "http://example.com/page/111"
          }
        ]
      },
      {
        "thumbnailImageUrl": "https://example.com/bot/images/item2.jpg",
        "imageBackgroundColor": "#000000",
        "title": "this is menu",
        "text": "description",
        "defaultAction": {
          "type": "uri",
          "label": "View detail",
          "uri": "http://example.com/page/222"
        },
        "actions": [
          {
            "type": "postback",
            "label": "Buy",
            "data": "action=buy&itemid=222"
          },
          {
            "type": "postback",
            "label": "Add to cart",
            "data": "action=add&itemid=222"
          },
          {
            "type": "uri",
            "label": "View detail",
            "uri": "http://example.com/page/222"
          }
        ]
      }
    ],
    "imageAspectRatio": "rectangle",
    "imageSize": "cover"
  }
}
```

<!-- tab end -->

##### Column object for carousel 

<!-- parameter start (props: optional) -->

thumbnailImageUrl

String

이미지 URL(최대 문자 수: 2000)\
프로토콜: HTTPS(TLS 1.2 이상)\
이미지 형식: JPEG 또는 PNG\
종횡비: 1.51:1(너비 : 높이)\
최대 너비: 1024px\
최대 파일 크기: 10MB

URL은 UTF-8로 퍼센트 인코딩해야 합니다. 자세한 내용은 [About the encoding of a URL specified in a request body property](https://developers.line.biz/en/reference/messaging-api/#url-encoding)를 참조하십시오.

<!-- tip start -->

**권장 파일 크기**

메시지 표시가 지연되지 않도록 개별 이미지 파일의 크기를 작게(1MB 이하 권장) 유지하십시오.

<!-- tip end -->

<!-- parameter end -->
<!-- parameter start (props: optional) -->

imageBackgroundColor

String

이미지의 배경색입니다. RGB 색상 값을 지정합니다. 기본값은 `#FFFFFF`(흰색)입니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

title

String

제목\
최대 문자 수: 40

<!-- parameter end -->
<!-- parameter start (props: required) -->

text

String

메시지 텍스트\
최대 문자 수: 120(이미지나 제목이 없는 경우)\
최대 문자 수: 60(이미지나 제목이 있는 메시지의 경우)

<!-- parameter end -->
<!-- parameter start (props: optional) -->

defaultAction

[Action object](https://developers.line.biz/en/reference/messaging-api/#action-objects)

이미지, 제목 또는 텍스트 영역을 탭했을 때의 액션입니다.

<!-- parameter end -->
<!-- parameter start (props: required) -->

actions

Array of [action objects](https://developers.line.biz/en/reference/messaging-api/#action-objects)

탭했을 때의 액션입니다.\
최대 객체 수: 3

<!-- parameter end -->

<!-- note start -->

**Note**

모든 열에서 액션 수를 일치시키십시오. 한 열에 이미지나 제목을 사용하면 다른 모든 열에도 같은 방식으로 적용하십시오.

<!-- note end -->

#### Image carousel template 

캐러셀처럼 순환하며 넘길 수 있는 여러 이미지가 있는 템플릿입니다. 이미지는 가로로 스크롤하면 순서대로 표시됩니다.

<!-- parameter start (props: required) -->

type

String

`image_carousel`

<!-- parameter end -->
<!-- parameter start (props: required) -->

columns

Array of [column objects](https://developers.line.biz/en/reference/messaging-api/#column-object-for-image-carousel)

열의 배열입니다.\
최대 열 수: 10

<!-- parameter end -->

_Image carousel template message example_

<!-- tab start `json` -->

```json
{
  "type": "template",
  "altText": "this is a image carousel template",
  "template": {
    "type": "image_carousel",
    "columns": [
      {
        "imageUrl": "https://example.com/bot/images/item1.jpg",
        "action": {
          "type": "postback",
          "label": "Buy",
          "data": "action=buy&itemid=111"
        }
      },
      {
        "imageUrl": "https://example.com/bot/images/item2.jpg",
        "action": {
          "type": "message",
          "label": "Yes",
          "text": "yes"
        }
      },
      {
        "imageUrl": "https://example.com/bot/images/item3.jpg",
        "action": {
          "type": "uri",
          "label": "View detail",
          "uri": "http://example.com/page/222"
        }
      }
    ]
  }
}
```

<!-- tab end -->

##### Column object for image carousel 

<!-- parameter start (props: required) -->

imageUrl

String

이미지 URL(최대 문자 수: 2000)\
프로토콜: HTTPS(TLS 1.2 이상)\
이미지 형식: JPEG 또는 PNG\
종횡비: 1:1(너비 : 높이)\
최대 너비: 1024px\
최대 파일 크기: 10MB

URL은 UTF-8로 퍼센트 인코딩해야 합니다. 자세한 내용은 [About the encoding of a URL specified in a request body property](https://developers.line.biz/en/reference/messaging-api/#url-encoding)를 참조하십시오.

<!-- tip start -->

**권장 파일 크기**

메시지 표시가 지연되지 않도록 개별 이미지 파일의 크기를 작게(1MB 이하 권장) 유지하십시오.

<!-- tip end -->

<!-- parameter end -->
<!-- parameter start (props: required) -->

action

[Action object](https://developers.line.biz/en/reference/messaging-api/#action-objects)

이미지를 탭했을 때의 액션입니다.

<!-- parameter end -->

### Flex Message 

Flex Message는 레이아웃을 사용자 지정할 수 있는 메시지입니다. [CSS Flexible Box (CSS Flexbox)](https://www.w3.org/TR/css-flexbox-1/) 사양에 따라 레이아웃을 자유롭게 사용자 지정할 수 있습니다. 자세한 내용은 Messaging API 문서의 [Send Flex Messages](https://developers.line.biz/en/docs/messaging-api/using-flex-messages/)를 참조하십시오.

- [Container](https://developers.line.biz/en/reference/messaging-api/#container)
  - [Bubble](https://developers.line.biz/en/reference/messaging-api/#bubble)
  - [Carousel](https://developers.line.biz/en/reference/messaging-api/#f-carousel)
- [Component](https://developers.line.biz/en/reference/messaging-api/#flex-component)
  - [Box](https://developers.line.biz/en/reference/messaging-api/#box)
  - [Button](https://developers.line.biz/en/reference/messaging-api/#button)
  - [Image](https://developers.line.biz/en/reference/messaging-api/#f-image)
  - [Video](https://developers.line.biz/en/reference/messaging-api/#f-video)
  - [Icon](https://developers.line.biz/en/reference/messaging-api/#icon)
  - [Text](https://developers.line.biz/en/reference/messaging-api/#f-text)
  - [Span](https://developers.line.biz/en/reference/messaging-api/#span)
  - [Separator](https://developers.line.biz/en/reference/messaging-api/#separator)
  - [Filler](https://developers.line.biz/en/reference/messaging-api/#filler) (deprecated)

<!-- parameter start (props: required) -->

type

String

`flex`

<!-- parameter end -->
<!-- parameter start (props: required) -->

altText

String

대체 텍스트입니다. 사용자가 메시지를 받으면 기기의 알림, 톡 목록, [인용 메시지](https://developers.line.biz/en/docs/messaging-api/sending-messages/#send-quote-messages)에서 Flex Message 대신 이 텍스트가 표시됩니다.\
Unicode 이모지를 포함할 수 있습니다.\
최대 문자 수: 1500

<!-- parameter end -->
<!-- parameter start (props: required) -->

contents

Object

Flex Message [container](https://developers.line.biz/en/reference/messaging-api/#container)

<!-- parameter end -->

_Flex Message example_

<!-- tab start `json` -->

```json
{
  "type": "flex",
  "altText": "this is a flex message",
  "contents": {
    "type": "bubble",
    "body": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "text",
          "text": "hello"
        },
        {
          "type": "text",
          "text": "world"
        }
      ]
    }
  }
}
```

<!-- tab end -->

#### Operating environment 

Flex Message는 모든 LINE 버전에서 지원됩니다. 다음 기능은 모든 LINE 버전에서 지원되지는 않습니다.

| Feature | LINE for iOS<br>LINE for Android | LINE for PC<br />(macOS, Windows) |
| --- | :-: | :-: |
| <ul><li>[box](https://developers.line.biz/en/reference/messaging-api/#box)의 `maxWidth` 속성</li><li>[box](https://developers.line.biz/en/reference/messaging-api/#box)의 `maxHeight` 속성</li><li>[text](https://developers.line.biz/en/reference/messaging-api/#f-text)의 `lineSpacing` 속성</li><li>[Video](https://developers.line.biz/en/reference/messaging-api/#f-video) \*1</li></ul> | 11.22.0 이상 | 7.7.0 이상 |
| <ul><li>[bubble](https://developers.line.biz/en/reference/messaging-api/#bubble)의 `size` 속성에 있는 `deca`와 `hecto` 값 \*2</li><li>[button](https://developers.line.biz/en/reference/messaging-api/#button), [text](https://developers.line.biz/en/reference/messaging-api/#f-text), [icon](https://developers.line.biz/en/reference/messaging-api/#icon)의 `scaling` 속성</li></ul> | 13.6.0 이상 | 7.17.0 이상 |

\*1 Flex Message의 video 컴포넌트를 지원하지 않는 버전에서도 올바르게 렌더링하려면 `altContent` 속성을 지정하십시오. 이 속성에 지정한 이미지가 대신 표시됩니다.

\*2 LINE 버전이 `deca`와 `hecto`를 지원하는 버전보다 낮으면 bubble의 크기는 `kilo`로 표시됩니다.

#### Container 

Container는 Flex Message의 최상위 구성 요소입니다. 사용할 수 있는 container 유형은 다음과 같습니다.

- [Bubble](https://developers.line.biz/en/reference/messaging-api/#bubble)
- [Carousel](https://developers.line.biz/en/reference/messaging-api/#f-carousel)

container의 JSON 샘플과 사용법은 API 문서의 [Flex Message elements](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/)를 참조하십시오.

##### Bubble 

Bubble은 하나의 메시지 버블만 담는 container입니다. header, hero, body, footer의 네 가지 블록을 포함할 수 있습니다. 각 블록의 사용법은 API 문서의 [Block](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#block)을 참조하십시오.

bubble을 정의하는 JSON 데이터의 최대 크기는 30KB입니다.

<!-- parameter start (props: required) -->

type

String

`bubble`

<!-- parameter end -->
<!-- parameter start (props: optional) -->

size

String

Bubble의 크기입니다. `nano`, `micro`, `deca`, `hecto`, `kilo`, `mega`, `giga` 중 하나를 지정할 수 있습니다. 기본값은 `mega`입니다.

`deca`와 `hecto`는 다음 LINE 버전에서 지원됩니다.

- LINE for iOS and Android: 13.6.0 이상
- LINE for macOS and Windows: 7.17.0 이상

LINE 버전이 `deca`와 `hecto`를 지원하는 버전보다 낮으면 bubble의 크기는 `kilo`로 표시됩니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

direction

String

텍스트 방향과 가로 box에서 컴포넌트를 배치하는 방향입니다. 다음 중 하나를 지정합니다.

- `ltr`: 텍스트가 왼쪽에서 오른쪽으로 쓰이며, 컴포넌트는 왼쪽에서 오른쪽으로 배치됩니다.
- `rtl`: 텍스트가 오른쪽에서 왼쪽으로 쓰이며, 컴포넌트는 오른쪽에서 왼쪽으로 배치됩니다.

기본값은 `ltr`입니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

header

Object

Header 블록입니다. [Box](https://developers.line.biz/en/reference/messaging-api/#box)를 지정합니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

hero

Object

Hero 블록입니다. [box](https://developers.line.biz/en/reference/messaging-api/#box), [image](https://developers.line.biz/en/reference/messaging-api/#f-image) 또는 [video](https://developers.line.biz/en/reference/messaging-api/#f-video)를 지정합니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

body

Object

Body 블록입니다. [Box](https://developers.line.biz/en/reference/messaging-api/#box)를 지정합니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

footer

Object

Footer 블록입니다. [Box](https://developers.line.biz/en/reference/messaging-api/#box)를 지정합니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

styles

Object

각 블록의 스타일입니다. [bubble style](https://developers.line.biz/en/reference/messaging-api/#bubble-style)을 지정합니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

action

Object

이 이미지를 탭했을 때 수행할 액션입니다. [action object](https://developers.line.biz/en/reference/messaging-api/#action-objects)를 지정합니다.

<!-- parameter end -->

_Bubble example_

<!-- tab start `json` -->

```json
{
  "type": "bubble",
  "header": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "text",
        "text": "Header text"
      }
    ]
  },
  "hero": {
    "type": "image",
    "url": "https://example.com/flex/images/image.jpg"
  },
  "body": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "text",
        "text": "Body text"
      }
    ]
  },
  "footer": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "text",
        "text": "Footer text"
      }
    ]
  },
  "styles": {
    "comment": "See the example of a bubble style object"
  }
}
```

<!-- tab end -->

##### Objects for the block style 

블록의 스타일을 정의하려면 다음 두 객체를 사용하십시오.

_Example of a bubble style and block style_

<!-- tab start `json` -->

```json
  "styles": {
    "header": {
      "backgroundColor": "#00ffff"
    },
    "hero": {
      "separator": true,
      "separatorColor": "#000000"
    },
    "footer": {
      "backgroundColor": "#00ffff",
      "separator": true,
      "separatorColor": "#000000"
    }
  }
```

<!-- tab end -->

###### Bubble style 

<!-- parameter start (props: optional) -->

header

Object

Header 블록입니다. [block style](https://developers.line.biz/en/reference/messaging-api/#block-style)을 지정합니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

hero

Object

Hero 블록입니다. [block style](https://developers.line.biz/en/reference/messaging-api/#block-style)을 지정합니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

body

Object

Body 블록입니다. [block style](https://developers.line.biz/en/reference/messaging-api/#block-style)을 지정합니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

footer

Object

Footer 블록입니다. [block style](https://developers.line.biz/en/reference/messaging-api/#block-style)을 지정합니다.

<!-- parameter end -->

###### Block style 

<!-- parameter start (props: optional) -->

backgroundColor

String

블록의 배경색입니다. 16진수 색상 코드를 사용하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

separator

Boolean

블록 위에 구분선을 배치하려면 `true`로 설정합니다. 기본값은 `false`입니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

separatorColor

String

구분선의 색상입니다. 16진수 색상 코드를 사용하십시오.

<!-- parameter end -->

<!-- note start -->

**Note**

첫 번째 블록 위에는 구분선을 배치할 수 없습니다.

<!-- note end -->

##### Carousel 

Carousel은 여러 bubble을 담는 container입니다. Carousel의 bubble은 좌우로 스크롤하여 둘러볼 수 있습니다.

carousel을 정의하는 JSON 데이터의 최대 크기는 50KB입니다.

<!-- parameter start (props: required) -->

type

String

`carousel`

<!-- parameter end -->
<!-- parameter start (props: required) -->

contents

Array of objects

Carousel 안의 [bubble](https://developers.line.biz/en/reference/messaging-api/#bubble)입니다. 최대: bubble 12개

<!-- parameter end -->

<!-- note start -->

**Bubble width**

Carousel에는 너비(`size` 속성)가 서로 다른 bubble을 포함할 수 없습니다. Carousel의 각 bubble은 같은 너비여야 합니다.

<!-- note end -->

<!-- tip start -->

**Bubble height**

각 bubble의 body는 carousel에서 가장 높은 bubble에 맞춰 늘어납니다. 다만 body가 없는 bubble의 높이는 변하지 않습니다.

<!-- tip end -->

_Carousel example_

<!-- tab start `json` -->

```json
{
  "type": "carousel",
  "contents": [
    {
      "type": "bubble",
      "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "First bubble"
          }
        ]
      }
    },
    {
      "type": "bubble",
      "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "Second bubble"
          }
        ]
      }
    }
  ]
}
```

<!-- tab end -->

#### Component 

Component는 블록을 구성하는 단위입니다. 사용할 수 있는 component는 다음과 같습니다.

- [Box](https://developers.line.biz/en/reference/messaging-api/#box)
- [Button](https://developers.line.biz/en/reference/messaging-api/#button)
- [Image](https://developers.line.biz/en/reference/messaging-api/#f-image)
- [Video](https://developers.line.biz/en/reference/messaging-api/#f-video)
- [Icon](https://developers.line.biz/en/reference/messaging-api/#icon)
- [Text](https://developers.line.biz/en/reference/messaging-api/#f-text)
- [Span](https://developers.line.biz/en/reference/messaging-api/#span)
- [Separator](https://developers.line.biz/en/reference/messaging-api/#separator)
- [Filler](https://developers.line.biz/en/reference/messaging-api/#filler) (deprecated)

각 component의 JSON 샘플과 사용법은 Messaging API 문서의 [Flex Message elements](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/)와 [Flex Message layout](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/)을 참조하십시오.

##### Box 

이 component는 가로 또는 세로 레이아웃 방향을 정의하고 component들을 함께 담습니다. box를 포함한 모든 component를 담을 수 있으며, box 안에 box를 넣을 수도 있습니다.

<!-- parameter start (props: required) -->

type

String

`box`

<!-- parameter end -->
<!-- parameter start (props: required) -->

layout

String

이 box 안 component의 레이아웃 스타일입니다. 자세한 내용은 API 문서의 [Box component orientation](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#box-component-orientation)을 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: required) -->

contents

Array of objects

이 box 안의 component입니다. 사용할 수 있는 component 유형은 다음과 같습니다.

- `layout` 속성이 `horizontal` 또는 `vertical`인 경우: [box](https://developers.line.biz/en/reference/messaging-api/#box), [button](https://developers.line.biz/en/reference/messaging-api/#button), [image](https://developers.line.biz/en/reference/messaging-api/#f-image), [text](https://developers.line.biz/en/reference/messaging-api/#f-text), [separator](https://developers.line.biz/en/reference/messaging-api/#separator), [filler](https://developers.line.biz/en/reference/messaging-api/#filler)
- `layout` 속성이 `baseline`인 경우: [icon](https://developers.line.biz/en/reference/messaging-api/#icon), [text](https://developers.line.biz/en/reference/messaging-api/#f-text), [filler](https://developers.line.biz/en/reference/messaging-api/#filler)

Component는 배열에 지정한 순서대로 렌더링됩니다. 빈 배열을 지정할 수도 있습니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

backgroundColor

String

블록의 배경색입니다. RGB 색상 외에 알파 채널(투명도)도 설정할 수 있습니다. 16진수 색상 코드를 사용하십시오(예: #RRGGBBAA). 기본값은 `#00000000`입니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

borderColor

String

Box 테두리의 색상입니다. 16진수 색상 코드를 사용하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

borderWidth

String

Box 테두리의 너비입니다. 픽셀 값 또는 `none`, `light`, `normal`, `medium`, `semi-bold`, `bold` 중 하나를 지정할 수 있습니다. `none`은 테두리를 렌더링하지 않는다는 뜻이며, 나머지 값은 너비가 커지는 순서로 나열되어 있습니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

cornerRadius

String

테두리 모서리를 둥글게 처리할 때의 반지름입니다. 픽셀 값 또는 `none`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl` 중 하나를 지정할 수 있습니다. `none`은 모서리를 둥글게 하지 않으며, 나머지 값은 나열된 순서대로 반지름이 커집니다. 기본값은 `none`입니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

width

String

Box의 너비입니다. 픽셀 값 또는 상위 요소 너비의 백분율로 지정합니다. 자세한 내용은 Messaging API 문서의 [Box width](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#box-width)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

maxWidth

String

Box의 최대 너비입니다. 픽셀 값 또는 상위 요소 너비의 백분율로 지정합니다. 자세한 내용은 Messaging API 문서의 [Max width of a box](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#box-width)를 참조하십시오.

이 속성은 다음 LINE 버전에서 지원됩니다.

- LINE for iOS and Android: 11.22.0 이상
- LINE for macOS and Windows: 7.7.0 이상

<!-- parameter end -->
<!-- parameter start (props: optional) -->

height

String

Box의 높이입니다. 픽셀 값 또는 상위 요소 높이의 백분율로 지정합니다. 자세한 내용은 Messaging API 문서의 [Box height](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#box-height)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

maxHeight

String

Box의 최대 높이입니다. 픽셀 값 또는 상위 요소 높이의 백분율로 지정합니다. 자세한 내용은 Messaging API 문서의 [Max height of a box](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#box-height)를 참조하십시오.

이 속성은 다음 LINE 버전에서 지원됩니다.

- LINE for iOS and Android: 11.22.0 이상
- LINE for macOS and Windows: 7.7.0 이상

<!-- parameter end -->
<!-- parameter start (props: optional) -->

flex

Number

상위 box 안에서 이 component의 너비 또는 높이 비율입니다. 자세한 내용은 Messaging API 문서의 [Component size](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#component-size)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

spacing

String

이 box 안 component 사이의 최소 간격입니다. 기본값은 `none`입니다. 자세한 내용은 Messaging API 문서의 [`spacing` property for boxes](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#spacing-property)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

margin

String

상위 container에서 이 component 앞에 두는 최소 여백입니다. 자세한 내용은 Messaging API 문서의 [`margin` property of components](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#margin-property)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

paddingAll

String

이 box의 테두리와 하위 요소 사이의 여백입니다. 자세한 내용은 Messaging API 문서의 [Position child component with box padding](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#padding-property)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

paddingTop

String

이 box의 위쪽 테두리와 하위 요소의 위쪽 끝 사이의 여백입니다. 자세한 내용은 Messaging API 문서의 [Position child component with box padding](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#padding-property)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

paddingBottom

String

이 box의 아래쪽 테두리와 하위 요소의 아래쪽 끝 사이의 여백입니다. 자세한 내용은 Messaging API 문서의 [Position child component with box padding](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#padding-property)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

paddingStart

String

- [bubble](https://developers.line.biz/en/reference/messaging-api/#bubble)의 텍스트 방향이 LTR인 경우: 이 box의 왼쪽 끝 테두리와 하위 요소의 왼쪽 끝 사이의 여백입니다.
- [bubble](https://developers.line.biz/en/reference/messaging-api/#bubble)의 텍스트 방향이 RTL인 경우: 이 box의 오른쪽 끝 테두리와 하위 요소의 오른쪽 끝 사이의 여백입니다.

자세한 내용은 Messaging API 문서의 [Position child component with box padding](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#padding-property)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

paddingEnd

String

- [bubble](https://developers.line.biz/en/reference/messaging-api/#bubble)의 텍스트 방향이 LTR인 경우: 이 box의 오른쪽 끝 테두리와 하위 요소의 오른쪽 끝 사이의 여백입니다.
- [bubble](https://developers.line.biz/en/reference/messaging-api/#bubble)의 텍스트 방향이 RTL인 경우: 이 box의 왼쪽 끝 테두리와 하위 요소의 왼쪽 끝 사이의 여백입니다.

자세한 내용은 Messaging API 문서의 [Position child component with box padding](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#padding-property)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

position

String

이 box를 배치할 기준 위치입니다. 다음 중 하나를 지정합니다.

- `relative`: 이전 box를 기준으로 합니다.
- `absolute`: 상위 요소의 왼쪽 위를 기준으로 합니다.

기본값은 `relative`입니다. 자세한 내용은 Messaging API 문서의 [Offset](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#component-offset)을 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

offsetTop

String

Offset입니다. 자세한 내용은 Messaging API 문서의 [Offset](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#component-offset)을 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

offsetBottom

String

Offset입니다. 자세한 내용은 Messaging API 문서의 [Offset](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#component-offset)을 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

offsetStart

String

Offset입니다. 자세한 내용은 Messaging API 문서의 [Offset](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#component-offset)을 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

offsetEnd

String

Offset입니다. 자세한 내용은 Messaging API 문서의 [Offset](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#component-offset)을 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

action

Object

이 이미지를 탭했을 때 수행할 액션입니다. [action object](https://developers.line.biz/en/reference/messaging-api/#action-objects)를 지정합니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

justifyContent

String

How child elements are aligned along the main axis of the parent element. If the parent element is a horizontal box, this only takes effect when its child elements have their `flex` property set equal to 0. For more information, see [Child component arrangement with free space](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#justify-property) in the Messaging API documentation.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

alignItems

String

How child elements are aligned along the cross axis of the parent element. For more information, see [Child component arrangement with free space](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#justify-property) in the Messaging API documentation.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

background.type

String

사용할 배경의 유형입니다. 다음 값을 지정합니다.

- `linearGradient`: 선형 그라데이션입니다. 자세한 내용은 Messaging API 문서의 [Linear gradient backgrounds](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#linear-gradient-bg)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

background.angle

String

선형 그라데이션이 이동하는 각도입니다. `90deg`(90도)와 같은 정수 값 또는 `23.5deg`(23.5도)와 같은 소수 값을 [0, 360) 범위에서 지정합니다. 각도가 커지면 선형 그라데이션의 방향은 시계 방향으로 회전합니다. `0deg`이면 그라데이션은 아래에서 시작하여 위에서 끝나고, `45deg`이면 왼쪽 아래 모서리에서 시작하여 오른쪽 위 모서리에서 끝납니다. `90deg`이면 왼쪽에서 시작하여 오른쪽에서 끝나고, `180deg`이면 위에서 시작하여 아래에서 끝납니다. 자세한 내용은 Messaging API 문서의 [Angle of linear gradient](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#linear-gradient-bg-angle)를 참조하십시오.

`background.type`이 `linearGradient`이면 이 속성이 필요합니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

background.startColor

String

그라데이션 시작점의 색상입니다. `#RRGGBB` 또는 `#RRGGBBAA` 형식의 16진수 색상 코드를 사용하십시오.

`background.type`이 `linearGradient`이면 이 속성이 필요합니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

background.endColor

String

그라데이션 끝점의 색상입니다. `#RRGGBB` 또는 `#RRGGBBAA` 형식의 16진수 색상 코드를 사용하십시오.

`background.type`이 `linearGradient`이면 이 속성이 필요합니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

background.centerColor

String

그라데이션 중간의 색상입니다. `#RRGGBB` 또는 `#RRGGBBAA` 형식의 16진수 색상 코드를 사용하십시오. `background.centerColor` 속성에 값을 지정하면 세 가지 색상의 그라데이션을 만들 수 있습니다. 자세한 내용은 Messaging API 문서의 [Intermediate color stops for linear gradients](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#linear-gradient-bg-center-color)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

background.centerPosition

String

중간 색상 정지점의 위치입니다. `0%`(시작점)에서 `100%`(끝점) 사이의 정수 또는 소수 값을 지정합니다. 기본값은 `50%`입니다. 자세한 내용은 Messaging API 문서의 [Intermediate color stops for linear gradients](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#linear-gradient-bg-center-color)를 참조하십시오.

<!-- parameter end -->

_Box example_

<!-- tab start `json` -->

```json
{
  "type": "bubble",
  "body": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "image",
        "url": "https://example.com/flex/images/image.jpg"
      },
      {
        "type": "separator"
      },
      {
        "type": "text",
        "text": "Text in the box"
      },
      {
        "type": "box",
        "layout": "vertical",
        "contents": [],
        "width": "30px",
        "height": "30px",
        "background": {
          "type": "linearGradient",
          "angle": "90deg",
          "startColor": "#FFFF00",
          "endColor": "#0080ff"
        }
      }
    ],
    "height": "400px",
    "justifyContent": "space-evenly",
    "alignItems": "center"
  }
}
```

<!-- tab end -->

##### Button 

이 component는 버튼을 렌더링합니다. 사용자가 버튼을 탭할 때 실행할 [action](https://developers.line.biz/en/docs/messaging-api/actions/)을 설정할 수 있습니다.

<!-- parameter start (props: required) -->

type

String

`button`

<!-- parameter end -->
<!-- parameter start (props: required) -->

action

Object

이 버튼을 탭했을 때 수행할 액션입니다. [action object](https://developers.line.biz/en/reference/messaging-api/#action-objects)를 지정합니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

flex

Number

상위 요소 안에서 이 component의 너비 또는 높이에 사용할 비율입니다. 기본적으로 가로 box의 component는 `flex` 속성이 `1`로 설정되어 있습니다. 기본적으로 세로 box의 component는 `flex` 속성이 `0`으로 설정되어 있습니다. 자세한 내용은 Messaging API 문서의 [Component size](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#component-size)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

margin

String

상위 container에서 이 component 앞에 두는 최소 여백입니다. 자세한 내용은 Messaging API 문서의 [`margin` property for components](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#margin-property)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

position

String

`offsetTop`, `offsetBottom`, `offsetStart`, `offsetEnd`의 기준입니다. 다음 값 중 하나를 지정합니다.

- `relative`: 이전 box를 기준으로 합니다.
- `absolute`: 상위 요소의 왼쪽 위를 기준으로 합니다.

기본값은 `relative`입니다. 자세한 내용은 API 문서의 [Offset](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#component-offset)을 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

offsetTop

String

Offset입니다. 자세한 내용은 Messaging API 문서의 [Offset](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#component-offset)을 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

offsetBottom

String

Offset입니다. 자세한 내용은 Messaging API 문서의 [Offset](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#component-offset)을 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

offsetStart

String

Offset입니다. 자세한 내용은 Messaging API 문서의 [Offset](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#component-offset)을 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

offsetEnd

String

Offset입니다. 자세한 내용은 Messaging API 문서의 [Offset](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#component-offset)을 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

height

String

버튼의 높이입니다. `sm` 또는 `md`를 지정할 수 있습니다. 기본값은 `md`입니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

style

String

버튼의 스타일입니다. 다음 값 중 하나를 지정합니다.

- `primary`: 어두운 색 버튼의 스타일입니다.
- `secondary`: 밝은 색 버튼의 스타일입니다.
- `link`: HTML 링크 스타일입니다.

기본값은 `link`입니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

color

String

`style` 속성이 `link`이면 글자 색상이고, `style` 속성이 `primary` 또는 `secondary`이면 배경색입니다. 16진수 색상 코드를 사용하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

gravity

String

세로 방향의 정렬 스타일입니다. 자세한 내용은 Messaging API 문서의 [Vertically align text, images, or button](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#gravity-property)을 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

adjustMode

String

텍스트 글꼴 크기를 조정하는 방법입니다. 다음 값을 지정합니다.

- `shrink-to-fit`: component의 너비에 맞도록 글꼴 크기를 자동으로 줄입니다. 이 속성은 "best-effort" 방식으로 동작하므로 플랫폼에 따라 다르게 동작하거나 전혀 동작하지 않을 수 있습니다. 자세한 내용은 Messaging API 문서의 [Automatically shrink fonts to fit](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#adjusts-fontsize-to-fit)을 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

scaling

Boolean

`scaling` 속성을 `true`로 설정하면 LINE 앱의 글꼴 크기 설정에 따라 텍스트의 글꼴 크기가 자동으로 조정됩니다. 기본값은 `false`입니다. 자세한 내용은 Messaging API 문서의 [Scaling to size according to the font size setting](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#size-scaling)을 참조하십시오.

이 속성은 다음 LINE 버전에서 지원됩니다.

- LINE for iOS and Android: 13.6.0 이상
- LINE for macOS and Windows: 7.17.0 이상

<!-- parameter end -->

_Button example_

<!-- tab start `json` -->

```json
{
  "type": "button",
  "action": {
    "type": "uri",
    "label": "Tap me",
    "uri": "https://example.com"
  },
  "style": "primary",
  "color": "#0000ff"
}
```

<!-- tab end -->

##### Image 

이 component는 이미지를 렌더링합니다.

<!-- parameter start (props: required) -->

type

String

`image`

<!-- parameter end -->
<!-- parameter start (props: required) -->

url

String

이미지 URL(최대 문자 수: 2000)\
프로토콜: HTTPS(TLS 1.2 이상)\
이미지 형식: JPEG 또는 PNG\
최대 이미지 크기: 1024 x 1024픽셀\
최대 파일 크기: 10MB(`animated` 속성이 `true`이면 300KB)

URL은 UTF-8로 퍼센트 인코딩해야 합니다. 자세한 내용은 [About the encoding of a URL specified in a request body property](https://developers.line.biz/en/reference/messaging-api/#url-encoding)를 참조하십시오.

<!-- tip start -->

**권장 파일 크기**

메시지 표시가 지연되지 않도록 개별 이미지 파일의 크기를 작게(1MB 이하 권장) 유지하십시오.

<!-- tip end -->

<!-- parameter end -->
<!-- parameter start (props: optional) -->

flex

Number

상위 box 안에서 이 component의 너비 또는 높이 비율입니다. 자세한 내용은 Messaging API 문서의 [Component size](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#component-size)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

margin

String

상위 container에서 이 component 앞에 두는 최소 여백입니다. 자세한 내용은 Messaging API 문서의 [`margin` property of components](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#margin-property)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

position

String

`offsetTop`, `offsetBottom`, `offsetStart`, `offsetEnd`의 기준입니다. 다음 값 중 하나를 지정합니다.

- `relative`: 이전 box를 기준으로 합니다.
- `absolute`: 상위 요소의 왼쪽 위를 기준으로 합니다.

기본값은 `relative`입니다. 자세한 내용은 Messaging API 문서의 [Offset](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#component-offset)을 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

offsetTop

String

Offset입니다. 자세한 내용은 Messaging API 문서의 [Offset](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#component-offset)을 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

offsetBottom

String

Offset입니다. 자세한 내용은 Messaging API 문서의 [Offset](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#component-offset)을 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

offsetStart

String

Offset입니다. 자세한 내용은 Messaging API 문서의 [Offset](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#component-offset)을 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

offsetEnd

String

Offset입니다. 자세한 내용은 Messaging API 문서의 [Offset](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#component-offset)을 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

align

String

가로 방향의 정렬 스타일입니다. 자세한 내용은 Messaging API 문서의 [Horizontally align text or images](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#align-property)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

gravity

String

세로 방향의 정렬 스타일입니다. 자세한 내용은 Messaging API 문서의 [Alignment in vertical direction](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#gravity-property)을 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

size

String

이미지 너비의 최대 크기입니다. 기본값은 `md`입니다. 자세한 내용은 Messaging API 문서의 [Image size](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#image-size)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

aspectRatio

String

이미지의 종횡비입니다. `{width}:{height}` 형식입니다. `{width}`와 `{height}`는 1에서 100000 사이의 값으로 지정하십시오. 단, `{height}`는 `{width}` 값의 세 배를 초과할 수 없습니다. 기본값은 `1:1`입니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

aspectMode

String

이미지의 종횡비와 `aspectRatio` 속성으로 지정한 종횡비가 일치하지 않을 때 이미지를 표시하는 방식입니다. 자세한 내용은 [About the drawing area](https://developers.line.biz/en/reference/messaging-api/#drawing-area)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

backgroundColor

String

이미지의 배경색입니다. 16진수 색상 코드를 사용하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

action

Object

이 이미지를 탭했을 때 수행할 액션입니다. [action object](https://developers.line.biz/en/reference/messaging-api/#action-objects)를 지정합니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

animated

Boolean

`true`이면 애니메이션 이미지(APNG)가 재생됩니다. 하나의 메시지에서 `true`로 지정할 수 있는 이미지는 최대 10개입니다. 이 제한을 초과하는 메시지는 보낼 수 없습니다. 기본값은 `false`입니다. 300KB를 초과하는 애니메이션 이미지는 재생되지 않습니다.

<!-- parameter end -->

<!-- tip start -->

**애니메이션 이미지를 만드는 방법**

APNG 편집기를 사용하여 애니메이션 이미지를 만드십시오. APNG 파일을 만들 때는 애니메이션 스티커 제작과 관련된 정보를 참고하십시오. 자세한 내용은 LINE Creators Market의 애니메이션 스티커 [Creation Guidelines](https://creator.line.me/en/guideline/animationsticker/)를 참조하십시오.

<!-- tip end -->

<!-- note start -->

**애니메이션 이미지가 재생되지 않으면 어떻게 하나요?**

이미지는 표시되지만 애니메이션이 재생되지 않으면 다음을 확인하십시오.

- `animated` 속성을 `true`로 설정했습니까?
- 이미지 파일 크기가 300KB 이하입니까?

메시지를 받은 LINE 앱의 설정에 따라 애니메이션이 재생되지 않는 경우도 있습니다. 다음도 확인하십시오.

- LINE 앱 설정에서 `Auto-play GIFs`가 활성화되어 있습니까?

애니메이션은 APNG의 `acTL` 청크에 있는 `num_plays` 필드에 지정된 횟수만큼 반복됩니다. 값을 0으로 지정하면 애니메이션이 무한히 반복됩니다.

<!-- note end -->

_Image example_

<!-- tab start `json` -->

```json
{
  "type": "image",
  "url": "https://example.com/flex/images/image.jpg",
  "size": "full",
  "aspectRatio": "1.91:1"
}
```

<!-- tab end -->

###### About the drawing area 

`size` 속성으로 이미지의 최대 너비를, `aspectRatio` 속성으로 이미지의 종횡비(너비 대비 높이 비율)를 지정합니다. `size` 속성과 `aspectRatio` 속성으로 결정되는 직사각형 영역을 **drawing area**라고 합니다. 이미지는 이 drawing area에 렌더링됩니다.

- `flex` 속성으로 지정한 이미지 너비가 [`size` 속성](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#component-size)으로 계산한 너비보다 크면 drawing area의 너비가 component의 너비에 맞게 축소됩니다.
- 이미지의 종횡비와 `aspectRatio` 속성으로 지정한 종횡비가 일치하지 않으면 `aspectMode` 속성에 따라 이미지가 표시됩니다. 기본값은 `fit`입니다.
  - `aspectMode`가 `cover`이면 이미지가 drawing area 전체를 채웁니다. drawing area에 맞지 않는 이미지 부분은 표시되지 않습니다.
  - `aspectMode`가 `fit`이면 이미지 전체가 drawing area에 표시됩니다. 세로 이미지의 좌우 빈 영역이나 가로 이미지의 상하 빈 영역에는 배경이 표시됩니다.

##### Video 

이 component는 동영상을 렌더링합니다.

Video component는 다음 LINE 버전에서 지원됩니다.

- LINE for iOS and Android: 11.22.0 이상
- LINE for macOS and Windows: 7.7.0 이상

LINE 버전이 동영상을 지원하는 버전보다 낮으면 `altContent` 속성의 값으로 지정한 component가 표시됩니다.

<!-- note start -->

**동영상이 제대로 재생되지 않으면**

메시지에 포함된 동영상이 전송에 성공하더라도 사용자 기기에서 동영상이 제대로 재생되지 않을 수 있습니다. 자세한 내용은 FAQ의 [Why can't I play a video that I sent as a message?](https://developers.line.biz/en/faq/#why-cant-i-play-a-video-i-sent)를 참조하십시오.

<!-- note end -->

<!-- note start -->

**Video aspect ratio**

매우 넓거나 좁은 동영상은 일부 환경에서 재생할 때 잘릴 수 있습니다.

또한 `url` 속성에 지정한 동영상의 종횡비는 다음 두 종횡비와 같아야 합니다. 두 종횡비가 다르면 예상과 다른 레이아웃이 될 수 있습니다.

- `aspectRatio` 속성으로 지정한 종횡비
- `previewUrl` 속성으로 지정한 미리 보기 이미지의 종횡비

![A video in a LINE chat room. A preview image with a 1:1 aspect ratio is displayed behind the video that has an aspect ratio of 16:9.](https://developers.line.biz/media/messaging-api/messages/image-overlapping-en.png)

<!-- note end -->

<!-- note start -->

**Use conditions of the video component**

Video component를 사용하려면 다음 조건을 충족해야 합니다.

- Video component는 hero [block](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#block) 바로 아래에 지정해야 합니다.
- bubble의 `size` 속성 값으로 `kilo`, `mega` 또는 `giga`를 지정해야 합니다.
- bubble이 carousel의 하위 요소가 아니어야 합니다.

<!-- note end -->

<!-- parameter start (props: required) -->

type

String

`video`

<!-- parameter end -->
<!-- parameter start (props: required) -->

url

String

동영상 파일 URL(최대 문자 수: 2000)\
프로토콜: HTTPS(TLS 1.2 이상)\
동영상 형식: mp4\
최대 파일 크기: 200MB

URL은 UTF-8로 퍼센트 인코딩해야 합니다. 자세한 내용은 [About the encoding of a URL specified in a request body property](https://developers.line.biz/en/reference/messaging-api/#url-encoding)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: required) -->

previewUrl

String

미리 보기 이미지 URL(최대 문자 수: 2000)\
프로토콜: HTTPS(TLS 1.2 이상)\
이미지 형식: JPEG 또는 PNG\
최대 파일 크기: 1MB

URL은 UTF-8로 퍼센트 인코딩해야 합니다. 자세한 내용은 [About the encoding of a URL specified in a request body property](https://developers.line.biz/en/reference/messaging-api/#url-encoding)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: required) -->

altContent

component

대체 콘텐츠입니다. Video component를 지원하지 않는 LINE 버전을 사용하는 사용자 기기의 화면에 대체 콘텐츠가 표시됩니다. [box](https://developers.line.biz/en/reference/messaging-api/#box) 또는 [image](https://developers.line.biz/en/reference/messaging-api/#f-image)를 지정합니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

aspectRatio

String

동영상의 종횡비입니다. `{width}:{height}` 형식입니다. `{width}`와 `{height}`는 1에서 100000 사이의 값으로 지정하십시오. 단, `{height}`는 `{width}` 값의 세 배를 초과할 수 없습니다. 기본값은 `1:1`입니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

action

Object

[URI action](https://developers.line.biz/en/reference/messaging-api/#uri-action)입니다. 자세한 내용은 Messaging API 문서의 [URI action](https://developers.line.biz/en/docs/messaging-api/create-flex-message-including-video/#uri-action)을 참조하십시오.

<!-- parameter end -->

_Video example_

<!-- tab start `json` -->

```json
{
  "type": "bubble",
  "size": "mega",
  "hero": {
    "type": "video",
    "url": "https://example.com/video.mp4",
    "previewUrl": "https://example.com/video_preview.jpg",
    "altContent": {
      "type": "image",
      "size": "full",
      "aspectRatio": "20:13",
      "aspectMode": "cover",
      "url": "https://example.com/image.jpg"
    },
    "aspectRatio": "20:13"
  }
}
```

<!-- tab end -->

##### Icon 

이 component는 인접한 텍스트를 장식하는 아이콘을 렌더링합니다. [baseline box](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#baseline-box)에서만 사용할 수 있습니다.

<!-- parameter start (props: required) -->

type

String

`icon`

<!-- parameter end -->
<!-- parameter start (props: required) -->

url

String

이미지 URL(최대 문자 수: 2000)\
프로토콜: HTTPS(TLS 1.2 이상)\
이미지 형식: JPEG 또는 PNG\
최대 이미지 크기: 1024 x 1024픽셀\
최대 파일 크기: 1MB

URL은 UTF-8로 퍼센트 인코딩해야 합니다. 자세한 내용은 [About the encoding of a URL specified in a request body property](https://developers.line.biz/en/reference/messaging-api/#url-encoding)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

margin

String

상위 container에서 이 component 앞에 두는 최소 여백입니다. 자세한 내용은 Messaging API 문서의 [`margin` property of components](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#margin-property)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

position

String

`offsetTop`, `offsetBottom`, `offsetStart`, `offsetEnd`의 기준입니다. 다음 값 중 하나를 지정합니다.

- `relative`: 이전 box를 기준으로 합니다.
- `absolute`: 상위 요소의 왼쪽 위를 기준으로 합니다.

기본값은 `relative`입니다. 자세한 내용은 Messaging API 문서의 [Offset](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#component-offset)을 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

offsetTop

String

Offset입니다. 자세한 내용은 Messaging API 문서의 [Offset](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#component-offset)을 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

offsetBottom

String

Offset입니다. 자세한 내용은 Messaging API 문서의 [Offset](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#component-offset)을 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

offsetStart

String

Offset입니다. 자세한 내용은 Messaging API 문서의 [Offset](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#component-offset)을 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

offsetEnd

String

Offset입니다. 자세한 내용은 Messaging API 문서의 [Offset](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#component-offset)을 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

size

String

아이콘 너비의 최대 크기입니다. 기본값은 `md`입니다. 자세한 내용은 Messaging API 문서의 [Icon, text, and span size](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#other-component-size)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

scaling

Boolean

`scaling` 속성을 `true`로 설정하면 LINE 앱의 글꼴 크기 설정에 따라 아이콘 크기가 자동으로 조정됩니다. 기본값은 `false`입니다. 자세한 내용은 Messaging API 문서의 [Scaling to size according to the font size setting](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#size-scaling)을 참조하십시오.

이 속성은 다음 LINE 버전에서 지원됩니다.

- LINE for iOS and Android: 13.6.0 이상
- LINE for macOS and Windows: 7.17.0 이상

<!-- parameter end -->
<!-- parameter start (props: optional) -->

aspectRatio

String

아이콘의 종횡비입니다. `{width}:{height}` 형식입니다. `{width}`와 `{height}`의 값은 1–100000 범위여야 합니다. `{height}`는 `{width}` 값의 세 배를 초과할 수 없습니다. 기본값은 `1:1`입니다.

<!-- parameter end -->

아이콘의 `flex` 속성은 `0`으로 고정됩니다.

_Icon example_

<!-- tab start `json` -->

```json
{
  "type": "icon",
  "url": "https://example.com/icon/png/caution.png",
  "size": "lg",
  "aspectRatio": "1.91:1"
}
```

<!-- tab end -->

##### Text 

이 component는 텍스트 문자열을 렌더링합니다. 글꼴 색상, 크기, 두께를 지정할 수 있습니다.

<!-- parameter start (props: required) -->

type

String

`text`

<!-- parameter end -->
<!-- parameter start (props: optional) -->

text

String

텍스트입니다. `text` 속성 또는 `contents` 속성 중 하나를 반드시 설정하십시오. `contents` 속성을 설정하면 `text`는 무시됩니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

contents

Array of objects

[span](https://developers.line.biz/en/reference/messaging-api/#span)의 배열입니다. `text` 속성 또는 `contents` 속성 중 하나를 반드시 설정하십시오. `contents` 속성을 설정하면 `text`는 무시됩니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

adjustMode

String

텍스트의 글꼴 크기를 조정하는 방법입니다. 다음 값을 지정합니다.

- `shrink-to-fit`: component의 너비에 맞도록 글꼴 크기를 자동으로 줄입니다. 이 속성은 "best-effort" 방식으로 동작하므로 플랫폼에 따라 다르게 동작하거나 전혀 동작하지 않을 수 있습니다. 자세한 내용은 Messaging API 문서의 [Automatically shrink fonts to fit](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#adjusts-fontsize-to-fit)을 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

flex

Number

상위 box 안에서 이 component의 너비 또는 높이 비율입니다. 자세한 내용은 Messaging API 문서의 [Component size](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#component-size)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

margin

String

상위 container에서 이 component 앞에 두는 최소 여백입니다. 자세한 내용은 Messaging API 문서의 [`margin` property of components](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#margin-property)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

position

String

`offsetTop`, `offsetBottom`, `offsetStart`, `offsetEnd`의 기준입니다. 다음 값 중 하나를 지정합니다.

- `relative`: 이전 box를 기준으로 합니다.
- `absolute`: 상위 요소의 왼쪽 위를 기준으로 합니다.

기본값은 `relative`입니다. 자세한 내용은 Messaging API 문서의 [Offset](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#component-offset)을 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

offsetTop

String

Offset입니다. 자세한 내용은 Messaging API 문서의 [Offset](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#component-offset)을 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

offsetBottom

String

Offset입니다. 자세한 내용은 Messaging API 문서의 [Offset](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#component-offset)을 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

offsetStart

String

Offset입니다. 자세한 내용은 Messaging API 문서의 [Offset](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#component-offset)을 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

offsetEnd

String

Offset입니다. 자세한 내용은 Messaging API 문서의 [Offset](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#component-offset)을 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

size

String

글꼴 크기입니다. 기본값은 `md`입니다. 자세한 내용은 Messaging API 문서의 [Icon, text, and span size](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#other-component-size)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

scaling

Boolean

`scaling` 속성을 `true`로 설정하면 LINE 앱의 글꼴 크기 설정에 따라 텍스트의 글꼴 크기가 자동으로 조정됩니다. 기본값은 `false`입니다. 자세한 내용은 Messaging API 문서의 [Scaling to size according to the font size setting](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#size-scaling)을 참조하십시오.

이 속성이 `true`이면 `contents` 속성으로 설정한 [span](https://developers.line.biz/en/reference/messaging-api/#span)의 텍스트 글꼴 크기도 자동으로 조정됩니다.

이 속성은 다음 LINE 버전에서 지원됩니다.

- LINE for iOS and Android: 13.6.0 이상
- LINE for macOS and Windows: 7.17.0 이상

<!-- parameter end -->
<!-- parameter start (props: optional) -->

align

String

가로 방향의 정렬 스타일입니다. 자세한 내용은 Messaging API 문서의 [Horizontally align text or images](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#align-property)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

gravity

String

세로 방향의 정렬 스타일입니다. 기본값은 `top`입니다. 자세한 내용은 Messaging API 문서의 [Alignment in vertical direction](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#gravity-property)을 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

wrap

Boolean

텍스트를 줄바꿈하려면 `true`로 설정합니다. 기본값은 `false`입니다. `true`로 설정하면 줄바꿈 문자(`\n`)를 사용하여 새 줄에서 시작할 수 있습니다. 자세한 내용은 Messaging API 문서의 [Wrapping text](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#text-wrap)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

lineSpacing

String

줄바꿈된 텍스트의 줄 간격입니다. 끝에 px가 붙은 양의 정수 또는 소수를 지정합니다. `lineSpacing` 속성은 시작 줄의 위쪽과 마지막 줄의 아래쪽에는 적용되지 않습니다. 자세한 내용은 Messaging API 문서의 [Increase the line spacing in a text](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#text-line-spacing)를 참조하십시오.

이 속성은 다음 LINE 버전에서 지원됩니다.

- LINE for iOS and Android: 11.22.0 이상
- LINE for macOS and Windows: 7.7.0 이상

<!-- parameter end -->
<!-- parameter start (props: optional) -->

maxLines

Number

최대 줄 수입니다. 텍스트가 지정한 줄 수를 초과하면 마지막 줄은 말줄임표(…)로 끝납니다. `0`으로 설정하면 텍스트 전체가 표시됩니다. 기본값은 `0`입니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

weight

String

글꼴 두께입니다. `regular` 또는 `bold` 중 하나를 지정할 수 있습니다. `bold`를 지정하면 글꼴이 굵게 표시됩니다. 기본값은 `regular`입니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

color

String

글꼴 색상입니다. 16진수 색상 코드를 사용하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

action

Object

이 이미지를 탭했을 때 수행할 액션입니다. [action object](https://developers.line.biz/en/reference/messaging-api/#action-objects)를 지정합니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

style

String

텍스트의 스타일입니다. 다음 값 중 하나를 지정합니다.

- `normal`: 기본
- `italic`: 기울임꼴

기본값은 `normal`입니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

decoration

String

텍스트의 장식입니다. 다음 값 중 하나를 지정합니다.

- `none`: 장식 없음
- `underline`: 밑줄
- `line-through`: 취소선

기본값은 `none`입니다.

<!-- parameter end -->

_Text example_

<!-- tab start `json` -->

```json
{
  "type": "text",
  "text": "Hello, World!",
  "size": "xl",
  "weight": "bold",
  "color": "#0000ff"
}
```

<!-- tab end -->

##### Span 

이 component는 서로 다른 스타일의 여러 텍스트 문자열을 렌더링합니다. 각 텍스트의 색상, 크기, 두께, 장식을 지정할 수 있습니다. Span은 [text](https://developers.line.biz/en/reference/messaging-api/#text)의 `contents` 속성에 설정합니다.

<!-- parameter start (props: required) -->

type

String

`span`

<!-- parameter end -->
<!-- parameter start (props: optional) -->

text

String

텍스트입니다. 상위 text의 `wrap` 속성이 `true`이면 줄바꿈 문자(`\n`)를 사용하여 새 줄에서 시작할 수 있습니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

color

String

글꼴 색상입니다. 16진수 색상 코드를 사용하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

size

String

글꼴 크기입니다. 자세한 내용은 Messaging API 문서의 [Icon, text, and span size](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#other-component-size)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

weight

String

글꼴 두께입니다. `regular` 또는 `bold` 중 하나를 지정할 수 있습니다. `bold`를 지정하면 글꼴이 굵게 표시됩니다. 기본값은 `regular`입니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

style

String

텍스트의 스타일입니다. 다음 값 중 하나를 지정합니다.

- `normal`: 기본
- `italic`: 기울임꼴

기본값은 `normal`입니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

decoration

String

텍스트의 장식입니다. 다음 값 중 하나를 지정합니다.

- `none`: 장식 없음
- `underline`: 밑줄
- `line-through`: 취소선

기본값은 `none`입니다.

<!-- note start -->

**Note**

[text](https://developers.line.biz/en/reference/messaging-api/#f-text)의 `decoration` 속성에 설정한 장식은 span의 `decoration` 속성으로 덮어쓸 수 없습니다.

<!-- note end -->

<!-- parameter end -->

_Span example_

<!-- tab start `json` -->

```json
{
  "type": "span",
  "text": "蛙",
  "size": "xxl",
  "weight": "bold",
  "style": "italic",
  "color": "#4f8f00"
}
```

<!-- tab end -->

##### Separator 

이 component는 [box](https://developers.line.biz/en/reference/messaging-api/#box) 안에 구분선을 렌더링합니다. 가로 레이아웃의 box에 포함되면 세로선이 그려지고, 세로 레이아웃의 box에 포함되면 가로선이 그려집니다.

<!-- parameter start (props: required) -->

type

String

`separator`

<!-- parameter end -->
<!-- parameter start (props: optional) -->

margin

String

상위 container에서 이 component 앞에 두는 최소 여백입니다. 자세한 내용은 Messaging API 문서의 [`margin` property of components](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#margin-property)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

color

String

구분선의 색상입니다. 16진수 색상 코드를 사용하십시오.

<!-- parameter end -->

_Separator example_

<!-- tab start `json` -->

```json
{
  "type": "separator",
  "color": "#000000"
}
```

<!-- tab end -->

##### Filler 

<!-- warning start -->

**Filler is deprecated**

공간을 추가하려면 filler를 추가하는 대신 각 component의 속성을 사용하십시오. 자세한 내용은 Messaging API 문서의 [Component position](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#component-position)을 참조하십시오.

<!-- warning end -->

이 component는 빈 공간을 렌더링합니다. [box](https://developers.line.biz/en/reference/messaging-api/#box) 안의 component 사이, 앞, 뒤에 공간을 넣을 수 있습니다.

<!-- parameter start (props: required) -->

type

String

`filler`

<!-- parameter end -->
<!-- parameter start (props: optional) -->

flex

Number

상위 box 안에서 이 component의 너비 또는 높이 비율입니다. 자세한 내용은 Messaging API 문서의 [Component size](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#component-size)를 참조하십시오.

<!-- parameter end -->

filler의 경우 상위 요소의 `spacing` 속성은 무시됩니다.

_Filler example_

<!-- tab start `json` -->

```json
{
  "type": "filler"
}
```

<!-- tab end -->

## Action objects 

사용자가 메시지의 버튼 또는 이미지를 탭했을 때 봇이 수행할 액션의 유형입니다.

- [Postback action](https://developers.line.biz/en/reference/messaging-api/#postback-action)
- [Message action](https://developers.line.biz/en/reference/messaging-api/#message-action)
- [URI action](https://developers.line.biz/en/reference/messaging-api/#uri-action)
- [Datetime picker action](https://developers.line.biz/en/reference/messaging-api/#datetime-picker-action)
- [Camera action](https://developers.line.biz/en/reference/messaging-api/#camera-action)
- [Camera roll action](https://developers.line.biz/en/reference/messaging-api/#camera-roll-action)
- [Location action](https://developers.line.biz/en/reference/messaging-api/#location-action)
- [Richmenu Switch Action](https://developers.line.biz/en/reference/messaging-api/#richmenu-switch-action)
- [Clipboard action](https://developers.line.biz/en/reference/messaging-api/#clipboard-action)

### Postback action 

이 액션과 연결된 컨트롤을 탭하면 `data` 속성에 지정한 문자열과 함께 [postback event](https://developers.line.biz/en/reference/messaging-api/#postback-event)가 웹훅으로 반환됩니다.

<!-- parameter start (props: required) -->

type

String

`postback`

<!-- parameter end -->
<!-- parameter start (props: annotation="See description") -->

label

String

액션의 라벨입니다. 사양은 액션을 설정한 객체에 따라 다릅니다. 자세한 내용은 [Specifications of the label](https://developers.line.biz/en/reference/messaging-api/#action-object-label-spec)을 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: required) -->

data

String

[postback event](https://developers.line.biz/en/reference/messaging-api/#postback-event)의 `postback.data` 속성으로 웹훅을 통해 반환되는 문자열입니다.\
최대 문자 수: 300

<!-- parameter end -->
<!-- parameter start (props: optional) -->

displayText

String

액션이 실행될 때 사용자가 보낸 메시지처럼 LINE 채팅 화면에 표시되는 텍스트입니다.\
최대 문자 수: 300\
`displayText`와 `text` 속성은 동시에 사용할 수 없습니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

text

String

【Deprecated】 액션이 실행될 때 사용자가 보낸 메시지처럼 LINE 채팅 화면에 표시되는 텍스트입니다. 웹훅을 통해 서버에서 반환됩니다. 이 속성은 퀵 리플라이 버튼과 함께 사용하지 마십시오.\
최대 문자 수: 300\
`displayText`와 `text` 속성은 동시에 사용할 수 없습니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

inputOption

String

사용자의 동작에 따라 리치 메뉴 등을 표시하는 방식입니다. 다음 값 중 하나를 지정합니다.

- `closeRichMenu`: 리치 메뉴를 닫습니다.
- `openRichMenu`: 리치 메뉴를 엽니다.
- `openKeyboard`: 키보드를 엽니다.
- `openVoice`: 음성 메시지 입력 모드를 엽니다.

이 속성은 iOS 또는 Android의 LINE 버전 `12.6.0` 이상에서 사용할 수 있습니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="See description") -->

fillInText

String

키보드를 열 때 입력 필드에 미리 채워 둘 문자열입니다. `inputOption` 속성이 `openKeyboard`로 설정된 경우에만 유효합니다. 문자열은 줄바꿈 문자(`\n`)로 나눌 수 있습니다.\
최대 문자 수: 300

이 속성은 iOS 또는 Android의 LINE 버전 `12.6.0` 이상에서 사용할 수 있습니다.

<!-- parameter end -->

#### Specifications of the label 

다음 액션의 `label` 속성은 액션을 설정한 객체에 따라 사양이 다릅니다.

- [Postback action](https://developers.line.biz/en/reference/messaging-api/#postback-action)
- [Message action](https://developers.line.biz/en/reference/messaging-api/#message-action)
- [URI action](https://developers.line.biz/en/reference/messaging-api/#uri-action)
- [Datetime picker action](https://developers.line.biz/en/reference/messaging-api/#datetime-picker-action)
- [Clipboard action](https://developers.line.biz/en/reference/messaging-api/#clipboard-action)

위에 나열한 액션의 label 사양은 다음과 같습니다. 위에 나열하지 않은 액션의 label 사양은 각 액션의 사양을 참조하십시오.

<table>
  <thead>
    <tr>
      <th colspan="2">Object</th>
      <th>Required</th>
      <th>Max character limit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2"><a href="#template-messages">Template messages</a></td>
      <td>Image carousel</td>
      <td>Optional</td>
      <td>12</td>
    </tr>
    <tr>
      <td>Other than image carousel</td>
      <td>Required</td>
      <td>20</td>
    </tr>
    <tr>
      <td colspan="2"><a href="#rich-menu-object">Rich menu</a> *1</td>
      <td>Optional</td>
      <td>20</td>
    </tr>
    <tr>
      <td colspan="2"><a href="#quick-reply-button-object">Quick reply button</a></td>
      <td>Required</td>
      <td>20</td>
    </tr>
    <tr>
      <td rowspan="2"><a href="#flex-message">Flex Message</a></td>
      <td>Button</td>
      <td>Required</td>
      <td>40</td>
    </tr>
    <tr>
      <td>Other than button *2</td>
      <td>Optional</td>
      <td>40</td>
    </tr>
  </tbody>
</table>

\*1 클라이언트 기기에서 접근성 기능이 활성화되어 있으면 읽어 줍니다.

\*2 지정한 라벨은 표시되지 않습니다.

_Example postback action object_

<!-- tab start `json` -->

```json
{
  "type": "postback",
  "label": "Buy",
  "data": "action=buy&itemid=111",
  "displayText": "Buy",
  "inputOption": "openKeyboard",
  "fillInText": "---\nName: \nPhone: \nBirthday: \n---"
}
```

<!-- tab end -->

### Message action 

이 액션과 연결된 컨트롤을 탭하면 `text` 속성의 문자열이 사용자가 보낸 메시지로 전송됩니다.

<!-- parameter start (props: required) -->

type

String

`message`

<!-- parameter end -->
<!-- parameter start (props: annotation="See description") -->

label

String

액션의 라벨입니다. 사양은 액션을 설정한 객체에 따라 다릅니다. 자세한 내용은 [Specifications of the label](https://developers.line.biz/en/reference/messaging-api/#action-object-label-spec)을 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: required) -->

text

String

액션을 실행할 때 전송되는 텍스트입니다.\
최대 문자 수: 300

<!-- parameter end -->

_Example message action object_

<!-- tab start `json` -->

```json
{
  "type": "message",
  "label": "Yes",
  "text": "Yes"
}
```

<!-- tab end -->

### URI action 

이 액션과 연결된 컨트롤을 탭하면 `uri` 속성에 지정한 URI가 LINE의 인앱 브라우저에서 열립니다.

<!-- parameter start (props: required) -->

type

String

`uri`

<!-- parameter end -->
<!-- parameter start (props: annotation="See description") -->

label

String

액션의 라벨입니다. 사양은 액션을 설정한 객체에 따라 다릅니다. 자세한 내용은 [Specifications of the label](https://developers.line.biz/en/reference/messaging-api/#action-object-label-spec)을 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: required) -->

uri

String

액션을 실행할 때 열리는 URI입니다(최대 문자 수: 1000)\
사용할 수 있는 스킴은 `http`, `https`, `line`, `tel`입니다. LINE URL 스킴에 대한 자세한 내용은 [Use LINE features with the LINE URL scheme](https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/)를 참조하십시오.

URI는 UTF-8로 퍼센트 인코딩해야 합니다. 자세한 내용은 [About the encoding of a URL specified in a request body property](https://developers.line.biz/en/reference/messaging-api/#url-encoding)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

altUri.desktop

String

액션을 실행할 때 LINE for macOS 및 Windows에서 열리는 URI입니다(최대 문자 수: 1000)\
`altUri.desktop` 속성을 설정하면 LINE for macOS 및 Windows에서는 `uri` 속성이 무시됩니다.\
사용할 수 있는 스킴은 `http`, `https`, `line`, `tel`입니다. LINE URL 스킴에 대한 자세한 내용은 [Use LINE features with the LINE URL scheme](https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/)를 참조하십시오.

URI는 UTF-8로 퍼센트 인코딩해야 합니다. 자세한 내용은 [About the encoding of a URL specified in a request body property](https://developers.line.biz/en/reference/messaging-api/#url-encoding)를 참조하십시오.

<!-- note start -->

**Note**

`altUri.desktop`은 Flex Message에서 URI 액션을 설정할 때 지원되지만, 퀵 리플라이에서는 동작하지 않습니다.

<!-- note end -->

<!-- parameter end -->

_Example URI action object_

<!-- tab start `json` -->

```json
// Example of opening a specified URL in LINE's in-app browser
{
    "type": "uri",
    "label": "Menu",
    "uri": "https://example.com/menu"
}

// Example of opening different URLs for smartphone and desktop versions of LINE
{
   "type":"uri",
   "label":"View details",
   "uri":"http://example.com/page/222",
   "altUri": {
      "desktop" : "http://example.com/pc/page/222"
   }
}

// Example of opening a call app by specifying a phone number
{
    "type": "uri",
    "label": "Phone order",
    "uri": "tel:09001234567"
}

// Example of sharing LINE Official Account through LINE URL scheme
{
    "type": "uri",
    "label": "Recommend to friends",
    "uri": "https://line.me/R/nv/recommendOA/%40linedevelopers"
}
```

<!-- tab end -->

### Datetime picker action 

이 액션과 연결된 컨트롤을 탭하면 사용자가 날짜 및 시간 선택 대화 상자에서 선택한 날짜와 시간이 담긴 [postback event](https://developers.line.biz/en/reference/messaging-api/#postback-event)가 웹훅으로 반환됩니다. Datetime picker 액션은 시간대를 지원하지 않습니다.

<!-- parameter start (props: required) -->

type

String

`datetimepicker`

<!-- parameter end -->
<!-- parameter start (props: annotation="See description") -->

label

String

액션의 라벨입니다. 사양은 액션을 설정한 객체에 따라 다릅니다. 자세한 내용은 [Specifications of the label](https://developers.line.biz/en/reference/messaging-api/#action-object-label-spec)을 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: required) -->

data

String

[postback event](https://developers.line.biz/en/reference/messaging-api/#postback-event)의 `postback.data` 속성으로 웹훅을 통해 반환되는 문자열입니다.\
최대 문자 수: 300

<!-- parameter end -->
<!-- parameter start (props: required) -->

mode

String

액션 모드입니다.\
`date`: 날짜 선택\
`time`: 시간 선택\
`datetime`: 날짜와 시간 선택

<!-- parameter end -->
<!-- parameter start (props: optional) -->

initial

String

날짜 또는 시간의 초기값입니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

max

String

선택할 수 있는 가장 큰 날짜 또는 시간 값입니다. `min` 값보다 커야 합니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

min

String

선택할 수 있는 가장 작은 날짜 또는 시간 값입니다. `max` 값보다 작아야 합니다.

<!-- parameter end -->

_Example datetime picker action object_

<!-- tab start `json` -->

```json
{
  "type": "datetimepicker",
  "label": "Select date",
  "data": "storeId=12345",
  "mode": "datetime",
  "initial": "2017-12-25t00:00",
  "max": "2018-01-24t23:59",
  "min": "2017-12-25t00:00"
}
```

<!-- tab end -->

#### Date and time format 

`initial`, `max`, `min` 값의 날짜 및 시간 형식은 다음과 같습니다. `full-date`, `time-hour`, `time-minute` 형식은 [RFC3339](https://www.rfc-editor.org/rfc/rfc3339.txt) 프로토콜을 따릅니다.

| Mode | Format | Example |
| --- | --- | --- |
| date | `full-date`<br />Max: 2100-12-31<br />Min: 1900-01-01 | 2017-06-18 |
| time | `time-hour`:`time-minute`<br />Max: 23:59<br />Min: 00:00 | 00:00<br />06:15<br />23:59 |
| datetime | `full-date`T`time-hour`:`time-minute` 또는 `full-date`t`time-hour`:`time-minute`<br />Max: 2100-12-31T23:59<br />Min: 1900-01-01T00:00 | 2017-06-18T06:15<br />2017-06-18t06:15 |

### Camera action 

이 액션은 퀵 리플라이 버튼으로만 설정할 수 있습니다. 이 액션과 연결된 버튼을 탭하면 LINE의 카메라 화면이 열립니다.

<!-- parameter start (props: required) -->

type

String

`camera`

<!-- parameter end -->
<!-- parameter start (props: required) -->

label

String

액션의 라벨입니다\
최대 문자 수: 20

<!-- parameter end -->

_Example camera action object_

<!-- tab start `json` -->

```json
{
  "type": "camera",
  "label": "Camera"
}
```

<!-- tab end -->

### Camera roll action 

이 액션은 퀵 리플라이 버튼으로만 설정할 수 있습니다. 이 액션과 연결된 버튼을 탭하면 LINE의 카메라 롤 화면이 열립니다.

<!-- parameter start (props: required) -->

type

String

`cameraRoll`

<!-- parameter end -->
<!-- parameter start (props: required) -->

label

String

액션의 라벨입니다\
최대 문자 수: 20

<!-- parameter end -->

_Example camera roll action object_

<!-- tab start `json` -->

```json
{
  "type": "cameraRoll",
  "label": "Camera roll"
}
```

<!-- tab end -->

### Location action 

이 액션은 퀵 리플라이 버튼으로만 설정할 수 있습니다. 이 액션과 연결된 버튼을 탭하면 LINE의 위치 화면이 열립니다.

<!-- parameter start (props: required) -->

type

String

`location`

<!-- parameter end -->
<!-- parameter start (props: required) -->

label

String

액션의 라벨입니다\
최대 문자 수: 20

<!-- parameter end -->

_Example location action object_

<!-- tab start `json` -->

```json
{
  "type": "location",
  "label": "Location"
}
```

<!-- tab end -->

### Rich menu switch action 

이 액션은 리치 메뉴에서만 설정할 수 있습니다. Flex Message나 퀵 리플라이에는 사용할 수 없습니다. 이 액션과 연결된 리치 메뉴를 탭하면 리치 메뉴를 전환할 수 있으며, 사용자가 선택한 리치 메뉴 별칭 ID가 포함된 [postback event](https://developers.line.biz/en/reference/messaging-api/#postback-event)가 웹훅으로 반환됩니다. 자세한 내용은 Messaging API 문서의 [Switch between tabs on rich menus](https://developers.line.biz/en/docs/messaging-api/switch-rich-menus/)를 참조하십시오.

<!-- parameter start (props: required) -->

type

String

`richmenuswitch`

<!-- parameter end -->
<!-- parameter start (props: optional) -->

label

String

액션 라벨입니다. 리치 메뉴에서는 선택 사항입니다. 사용자 기기의 접근성 기능이 활성화되어 있으면 읽어 줍니다.

- 최대 문자 수: 20

<!-- parameter end -->
<!-- parameter start (props: required) -->

richMenuAliasId

String

전환할 리치 메뉴 별칭의 ID입니다.

<!-- parameter end -->
<!-- parameter start (props: required) -->

data

String

웹훅을 통해 [postback event](https://developers.line.biz/en/reference/messaging-api/#postback-event)의 `postback.data` 속성으로 반환되는 문자열입니다.

- 최대 문자 수: 300

<!-- parameter end -->

_Rich menu switch action object example_

<!-- tab start `json` -->

```json
{
  "type": "richmenuswitch",
  "richMenuAliasId": "richmenu-alias-b",
  "data": "richmenu-changed-to-b"
}
```

<!-- tab end -->

### Clipboard action 

사용자가 이 액션과 연결된 컨트롤을 탭하면 `clipboardText` 속성에 지정한 텍스트가 기기의 클립보드에 복사됩니다.

이 기능은 iOS 또는 Android의 LINE 버전 `14.0.0` 이상에서 사용할 수 있습니다.

<!-- parameter start (props: required) -->

type

String

`clipboard`

<!-- parameter end -->
<!-- parameter start (props: annotation="See description") -->

label

String

액션의 라벨입니다. 사양은 액션을 설정한 객체에 따라 다릅니다. 자세한 내용은 [Specifications of the label](https://developers.line.biz/en/reference/messaging-api/#action-object-label-spec)을 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: required) -->

clipboardText

String

클립보드에 복사되는 텍스트

- 최대 문자 수: 1000

<!-- parameter end -->

_Example clipboard action object_

<!-- tab start `json` -->

```json
{
  "type": "clipboard",
  "label": "Copy",
  "clipboardText": "3B48740B"
}
```

<!-- tab end -->

## Rich menu structure 

리치 메뉴는 다음 객체 중 하나로 구성됩니다.

- 리치 메뉴 ID가 없는 [Rich menu object](https://developers.line.biz/en/reference/messaging-api/#rich-menu-object). [리치 메뉴를 만들 때](https://developers.line.biz/en/reference/messaging-api/#create-rich-menu) 이 객체를 사용합니다.
- 리치 메뉴 ID가 있는 [Rich menu response object](https://developers.line.biz/en/reference/messaging-api/#rich-menu-response-object). [리치 메뉴를 가져올 때](https://developers.line.biz/en/reference/messaging-api/#get-rich-menu) 또는 [리치 메뉴 목록을 가져올 때](https://developers.line.biz/en/reference/messaging-api/#get-rich-menu-list) 반환됩니다.

이 객체에는 [Area objects](https://developers.line.biz/en/reference/messaging-api/#area-object)와 [action objects](https://developers.line.biz/en/reference/messaging-api/#action-objects)가 포함됩니다.

### Rich menu object 

<!-- tip start -->

**리치 메뉴 객체가 유효한지 확인하기**

리치 메뉴 객체가 유효한지 확인하려면 [Validate rich menu object](https://developers.line.biz/en/reference/messaging-api/#validate-rich-menu-object) endpoint를 사용할 수 있습니다.

<!-- tip end -->

<!-- parameter start (props: required) -->

size

Object

채팅에 표시되는 리치 메뉴의 너비와 높이를 포함하는 [`size` object](https://developers.line.biz/en/reference/messaging-api/#size-object)입니다. 리치 메뉴 이미지의 너비는 800px에서 2500px 사이여야 합니다. 높이는 250px 이상이어야 합니다. 단, 종횡비(너비 / 높이)는 1.45 이상이어야 합니다.

<!-- parameter end -->
<!-- parameter start (props: required) -->

selected

Boolean

리치 메뉴를 기본으로 표시하려면 `true`입니다. 그렇지 않으면 `false`입니다.

<!-- parameter end -->
<!-- parameter start (props: required) -->

name

String

리치 메뉴의 이름입니다. 리치 메뉴를 관리하는 데 사용할 수 있으며 사용자에게는 표시되지 않습니다.\
최대 문자 수: 300

<!-- parameter end -->
<!-- parameter start (props: required) -->

chatBarText

String

채팅 바에 표시되는 텍스트입니다\
최대 문자 수: 14

<!-- parameter end -->
<!-- parameter start (props: required) -->

areas

Array

탭 가능한 영역의 좌표와 크기를 정의하는 [area objects](https://developers.line.biz/en/reference/messaging-api/#area-object)의 배열입니다\
최대: area object 20개

<!-- parameter end -->

_Example rich menu object_

<!-- tab start `json` -->

```json
{
  "size": {
    "width": 2500,
    "height": 1686
  },
  "selected": false,
  "name": "Nice rich menu",
  "chatBarText": "Tap to open",
  "areas": [
    {
      "bounds": {
        "x": 0,
        "y": 0,
        "width": 2500,
        "height": 1686
      },
      "action": {
        "type": "postback",
        "data": "action=buy&itemid=123"
      }
    }
  ]
}
```

<!-- tab end -->

### Rich menu response object 

<!-- parameter start -->

richMenuId

String

리치 메뉴의 ID입니다.

<!-- parameter end -->
<!-- parameter start -->

size

Object

채팅에 표시되는 리치 메뉴의 너비와 높이를 포함하는 [`size` object](https://developers.line.biz/en/reference/messaging-api/#size-object)입니다. 리치 메뉴 이미지의 너비는 800px에서 2500px 사이여야 합니다. 높이는 250px 이상이어야 합니다. 단, 종횡비(너비 / 높이)는 1.45 이상이어야 합니다.

<!-- parameter end -->
<!-- parameter start -->

selected

Boolean

리치 메뉴를 기본으로 표시하려면 `true`입니다. 그렇지 않으면 `false`입니다.

<!-- parameter end -->
<!-- parameter start -->

name

String

리치 메뉴의 이름입니다. 리치 메뉴를 관리하는 데 사용할 수 있으며 사용자에게는 표시되지 않습니다.\
최대 문자 수: 300

<!-- parameter end -->
<!-- parameter start -->

chatBarText

String

채팅 바에 표시되는 텍스트입니다\
최대 문자 수: 14

<!-- parameter end -->
<!-- parameter start -->

areas

Array

탭 가능한 영역의 좌표와 크기를 정의하는 [area objects](https://developers.line.biz/en/reference/messaging-api/#area-object)의 배열입니다\
최대: area object 20개

<!-- parameter end -->

_Example rich menu response object_

<!-- tab start `json` -->

```json
{
  "richMenuId": "{richMenuId}",
  "size": {
    "width": 2500,
    "height": 1686
  },
  "selected": false,
  "name": "Nice rich menu",
  "chatBarText": "Tap to open",
  "areas": [
    {
      "bounds": {
        "x": 0,
        "y": 0,
        "width": 2500,
        "height": 1686
      },
      "action": {
        "type": "postback",
        "label": "Buy",
        "data": "action=buy&itemid=123"
      }
    }
  ]
}
```

<!-- tab end -->

#### `size` object 

<!-- parameter start (props: required) -->

width

Number

리치 메뉴의 너비입니다. 리치 메뉴 이미지의 너비는 `800`에서 `2500` 사이여야 합니다. 단, 종횡비(너비 / 높이)는 1.45 이상이어야 합니다.

<!-- parameter end -->
<!-- parameter start (props: required) -->

height

Number

리치 메뉴의 높이입니다. 높이는 `250` 이상이어야 합니다. 단, 종횡비(너비 / 높이)는 1.45 이상이어야 합니다.

<!-- parameter end -->

_Example size object_

<!-- tab start `json` -->

```json
{
  "width": 2500,
  "height": 1686
}
```

<!-- tab end -->

#### Area object 

<!-- parameter start (props: required) -->

bounds

Object

영역의 경계를 픽셀 단위로 설명하는 객체입니다. [`bounds` object](https://developers.line.biz/en/reference/messaging-api/#bounds-object)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: required) -->

action

Object

영역을 탭했을 때 수행할 액션입니다. [action objects](https://developers.line.biz/en/reference/messaging-api/#action-objects)를 참조하십시오.

<!-- parameter end -->

_Example area object_

<!-- tab start `json` -->

```json
{
  "bounds": {
    "x": 0,
    "y": 0,
    "width": 2500,
    "height": 1686
  },
  "action": {
    "type": "postback",
    "label": "Buy",
    "data": "action=buy&itemid=123"
  }
}
```

<!-- tab end -->

##### `bounds` object 

<!-- parameter start (props: required) -->

x

Number

탭 가능한 영역의 왼쪽 위 모서리의 가로 위치입니다. 이미지의 왼쪽 가장자리를 기준으로 합니다. 값은 `0` 이상이어야 합니다.

<!-- parameter end -->
<!-- parameter start (props: required) -->

y

Number

탭 가능한 영역의 왼쪽 위 모서리의 세로 위치입니다. 이미지의 위쪽 가장자리를 기준으로 합니다. 값은 `0` 이상이어야 합니다.

<!-- parameter end -->
<!-- parameter start (props: required) -->

width

Number

탭 가능한 영역의 너비입니다.

<!-- parameter end -->
<!-- parameter start (props: required) -->

height

Number

탭 가능한 영역의 높이입니다.

<!-- parameter end -->

_Example bounds object_

<!-- tab start `json` -->

```json
{
  "x": 0,
  "y": 0,
  "width": 2500,
  "height": 1686
}
```

<!-- tab end -->
