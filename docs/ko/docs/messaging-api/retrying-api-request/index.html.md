# API 요청 재시도

메시지 전송에 실패하여 5xx 오류가 발생하거나 요청 시간이 초과될 수 있습니다. 그러나 이러한 오류가 발생하더라도 메시지가 실제로 전달되었을 가능성이 있습니다. 따라서 오류로 인해 같은 요청을 다시 보내면, 아래 그림과 같이 수신자가 같은 메시지를 두 번 받을 수 있습니다.

![](https://developers.line.biz/media/messaging-api/retry-api-request/retry-api-request-bad-en.svg)

같은 메시지가 두 번 전송되는 것을 막으려면 재시도 키(`X-Line-Retry-Key`)를 사용하십시오. 재시도 키를 지정하면 요청을 몇 번 보내든 요청은 한 번만 실행됩니다. 요청이 수락된 후에 재시도한 요청은 차단되며, 상태 코드 `409`가 반환됩니다.

따라서 같은 API 요청이 중복 실행되지 않도록, 재시도할 때는 재시도 키를 사용하는 것을 권장합니다.

![](https://developers.line.biz/media/messaging-api/retry-api-request/retry-api-request-good-en.svg)

<!-- note start -->

**참고**

`X-Line-Retry-Key`를 사용하면 메시지를 중복하지 않고 API 요청을 안전하게 재시도할 수 있습니다. 그러나 메시지가 확실히 전달된다는 것을 보장하지는 않습니다. LINE 플랫폼이 API 요청을 한 번이라도 수락(HTTP 상태 코드 200)한 경우, 사용자가 LINE 공식 계정을 차단하여 메시지를 올바르게 전달할 수 없었더라도 같은 요청을 다시 시도할 수 없습니다.

<!-- note end -->

## API 요청 재시도 흐름 

재시도 키를 지원하는 API를 사용하려면 아래 흐름에 따라 요청하십시오.

![재시도 API 요청 순서도](https://developers.line.biz/media/messaging-api/retry-api-request/retry-key-flowchart-en.png)

### 재시도 키를 항상 지정하기 

재시도 키를 지원하는 API로 메시지를 보낼 때는 항상 요청 헤더에 재시도 키(`X-Line-Retry-Key`)를 지정하십시오. 재시도 키는 원하는 방법으로 생성한 16진수 UUID여야 합니다.

<!-- note start -->

**첫 번째 API 요청에서 재시도 키 지정하기**

`X-Line-Retry-Key`가 없는 API 요청은 나중에 재시도할 수 없습니다. 처음 요청할 때 반드시 키를 추가하십시오.

<!-- note end -->

재시도를 지원하는 API는 다음과 같습니다.

| 전송 방식 | API 레퍼런스 |
| --- | --- |
| 푸시 메시지 | [푸시 메시지 전송](https://developers.line.biz/en/reference/messaging-api/#send-push-message) |
| 멀티캐스트 메시지 | [멀티캐스트 메시지 전송](https://developers.line.biz/en/reference/messaging-api/#send-multicast-message) |
| 내로캐스트 메시지 | [내로캐스트 메시지 전송](https://developers.line.biz/en/reference/messaging-api/#send-narrowcast-message) |
| 브로드캐스트 메시지 | [브로드캐스트 메시지 전송](https://developers.line.biz/en/reference/messaging-api/#send-broadcast-message) |

<!-- note start -->

**재시도를 지원하는 API에서만 사용하기**

위에 나열되지 않은 API의 요청 헤더에 `X-Line-Retry-Key`를 지정하면 요청이 거부되고 상태 코드 `400`이 반환됩니다.

<!-- note end -->

다음은 재시도 키(`123e4567-e89b-12d3-a456-426614174000`)를 포함하여 푸시 메시지를 보내는 요청 예시입니다.

```sh
curl -v -X POST https://api.line.me/v2/bot/message/push \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer {CHANNEL_ACCESS_TOKEN}' \
-H 'X-Line-Retry-Key: 123e4567-e89b-12d3-a456-426614174000' \
-d '{
  "messages": [
    {
      "type": "text",
      "text": "Hello, user"
    }
  ]
}'
```

### 상태 코드에 따라 API 요청 재시도하기 

받은 상태 코드에 따라 API 요청을 재시도할지 결정하십시오.

| 상태 코드 | 설명 | 재시도 여부 |
| --- | --- | --- |
| 500 Internal Server Error | 내부 서버 오류 | ✅ 재시도하십시오. 다음 요청은 성공할 수 있습니다. |
| 시간 초과 | 네트워크 장애 또는 기타 이유로 요청이 실패했습니다. | ✅ 재시도하십시오. 다음 요청은 성공할 수 있습니다. |
| 2xx | API 요청이 수락되었습니다. | ❌ 재시도하지 마십시오. 추가 재시도는 수락되지 않습니다. |
| 409 Conflict | 같은 재시도 키를 가진 API 요청이 이미 수락되었습니다. | ❌ 재시도하지 마십시오. 재시도한 요청은 이미 수락되었습니다. |
| 4xx | 요청에 문제가 있습니다. | ❌ 재시도하지 마십시오. 재시도해도 결과는 바뀌지 않습니다. |

<!-- note start -->

**참고**

- 재시도 키는 처음 요청한 시점부터 24시간 동안 유효합니다. 24시간 이내에 요청을 재시도하도록 서비스를 설계하십시오.
- 재시도한 요청은 원래 요청과 동일해야 합니다. 내용이나 수신자를 바꾸지 마십시오. 내용을 바꾸면서 같은 재시도 키를 사용하면 재시도가 기대한 대로 동작하지 않을 수 있습니다.

<!-- note end -->

<!-- tip start -->

**재시도 간격**

- 재시도 키를 사용한 재시도도 API 요청 한 건으로 계산되므로, 재시도가 잦으면 API 호출 한도(레이트 리밋)에 도달할 수 있습니다.
- 서버나 네트워크가 중단된 경우 부하를 줄이려면 [지수 백오프(exponential backoff)](https://en.wikipedia.org/wiki/Exponential_backoff)를 사용해 재시도 간격을 두는 것을 권장합니다.

<!-- tip end -->

#### 재시도 응답 

재시도한 API 요청에 대해 받는 응답은 요청이 수락되었는지 여부에 따라 달라집니다.

<!-- tip start -->

**다른 요청 ID가 발급됩니다**

같은 재시도 키로 여러 요청을 실행하면, 요청마다 서로 다른 요청 ID가 발급됩니다.

<!-- tip end -->

##### 수락된 요청에 대한 응답 

재시도한 요청이 성공하면, 정상적으로 수락된 요청과 동일한 응답을 받습니다. 예시는 다음과 같습니다.

```sh
HTTP/1.1 200 OK
x-line-request-id: 123e4567-e89b-12d3-a456-426655440001
```

##### 이미 수락된 요청을 재시도한 경우의 응답 

LINE 플랫폼이 `2xx` 상태 코드를 반환한 API 요청을 다시 시도하면 상태 코드 `409`를 받습니다. 응답에는 성공한 요청의 ID인 `x-line-accepted-request-id`가 포함됩니다.

```sh
HTTP/1.1 409 Conflict
x-line-request-id: 123e4567-e89b-12d3-a456-426655440002
x-line-accepted-request-id: 123e4567-e89b-12d3-a456-426655440001

{
  "message": "The retry key is already accepted"
}
```

또한 푸시 메시지의 경우, API 요청이 수락되었을 때와 같은 `sentMessages.id`와 `sentMessages.quoteToken`을 포함하는 JSON 객체가 반환됩니다.

```sh
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

## 관련 페이지 

재시도에 대한 자세한 내용은 Messaging API 레퍼런스의 [API 요청 재시도](https://developers.line.biz/en/reference/messaging-api/#retry-api-request)를 참고하십시오.
