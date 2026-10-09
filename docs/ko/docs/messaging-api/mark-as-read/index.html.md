# 메시지를 읽음으로 표시하기

LINE 채팅에서 수신자가 사용자가 보낸 메시지를 보면, 해당 메시지에 읽음 표시가 추가됩니다. LINE 공식 계정의 채팅 기능을 사용할 때는 사용자의 메시지가 자동으로 읽음 처리되지 않습니다. 하지만 Messaging API를 사용하면 채팅 기능을 활성화하고 특정 메시지를 수동으로 읽음 처리할 수 있습니다.

이 페이지에서는 Messaging API를 통해 사용자가 보낸 메시지를 읽음으로 표시하는 방법을 설명합니다.

<!-- table of contents -->

## Messaging API에서 메시지를 읽음으로 표시하는 조건 

[LINE 공식 계정 관리자](https://manager.line.biz/)의 **응답 설정**에서 **채팅**이 꺼져 있으면, 사용자가 보낸 메시지는 자동으로 읽음 처리됩니다. Messaging API로 메시지를 읽음으로 표시하려면 **채팅**이 켜져 있어야 합니다.

## Messaging API로 메시지를 읽음으로 표시하는 방법 

사용자가 보낸 메시지를 읽음으로 표시하려면 다음 단계를 따르세요.

1. [메시지의 읽음 토큰 가져오기](https://developers.line.biz/en/docs/messaging-api/mark-as-read/#get-token)
2. [“메시지를 읽음으로 표시” 엔드포인트 사용하기](https://developers.line.biz/en/docs/messaging-api/mark-as-read/#use-endpoint)

각 단계는 아래에서 설명합니다.

### 1. 메시지의 읽음 토큰 가져오기 

사용자가 LINE 공식 계정에 메시지를 보내면, LINE 플랫폼은 웹훅 [message 이벤트](https://developers.line.biz/en/reference/messaging-api/#message-event)를 봇 서버로 보냅니다. 이 이벤트 객체에는 메시지를 읽음으로 표시하는 데 사용하는 `markAsReadToken` 속성(읽음 토큰)이 포함되어 있습니다.

다음은 웹훅의 message 이벤트 객체 예입니다. 읽음 토큰에는 만료 기한이 없습니다.

```json
{
  "destination": "xxxxxxxxxx",
  "events": [
    {
      "type": "message",
      "webhookEventId": "01FZ74A0TDDPYRVKNK77XKC3ZR",
      "message": {
        "id": "444573844083572737",
        "type": "text",
        "quoteToken": "q3Plxr4AgKd...",
        "markAsReadToken": "30yhdy232...", // 읽음 토큰
        "text": "Hello, world!"
      },
      // 생략
    }
  ]
}
```

### 2. “메시지를 읽음으로 표시” 엔드포인트 사용하기 

메시지를 읽음으로 표시하려면 1단계에서 얻은 읽음 토큰을 사용하여 [메시지를 읽음으로 표시](https://developers.line.biz/en/reference/messaging-api/#mark-as-read) 엔드포인트를 호출합니다. 다음과 같이 요청하면 지정한 메시지 이전의 모든 메시지를 읽음으로 표시할 수 있습니다.

```sh
curl -v -X POST https://api.line.me/v2/bot/chat/markAsRead \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer {channel access token}' \
-d '{
  "markAsReadToken": "{mark as read token}"
}'
```
