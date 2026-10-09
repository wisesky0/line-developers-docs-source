# 인용 토큰 가져오기

Messaging API로 과거 메시지를 인용하는 메시지를 보내려면 인용 토큰(quote token)을 사용합니다. 이 페이지에서는 인용 토큰을 가져오는 방법을 설명합니다.

<!-- table of contents -->

## 인용 토큰이란 

인용 토큰은 `IStG5h1Tz7bsH6xinEQtKQ9IdtcN5wLE15-LwtIDCEYAqDkV741O-XkOhZo1GYxw2UCURKnpHujpZuZaBaeQZVOVpKiaEeAz1Ye3-3ZYbPQVjuXZ4x8ZpISG7WhJDCE8o-hhHh8uMBRyp3b0L_Cxlg`와 같은 문자열입니다. 인용 토큰은 [인용 메시지 보내기](https://developers.line.biz/en/docs/messaging-api/sending-messages/#send-quote-messages)에 필요합니다.

인용 토큰은 인용할 메시지가 전송된 1:1 채팅, 그룹 채팅, 다인 채팅에서만 사용할 수 있습니다. 인용 토큰에는 만료 기한이 없으며, 같은 인용 토큰을 여러 번 사용할 수 있습니다.

## 인용 토큰 가져오기 

인용 토큰을 가져오는 방법은 두 가지입니다.

1. [웹훅으로 인용 토큰 가져오기](https://developers.line.biz/en/docs/messaging-api/get-quote-tokens/#get-quote-tokens-via-webhook)
1. [메시지 전송 시 응답으로 인용 토큰 가져오기](https://developers.line.biz/en/docs/messaging-api/get-quote-tokens/#get-quote-tokens-in-the-response)

### 웹훅으로 인용 토큰 가져오기 

LINE 공식 계정이 추가된 1:1 채팅, 그룹 채팅, 다인 채팅에서 사용자가 메시지를 보내면, 웹훅의 [message 이벤트](https://developers.line.biz/en/reference/messaging-api/#message-event)가 봇 서버로 전송됩니다. 이 message 이벤트에서 다음 메시지 객체에는 인용 토큰(`quoteToken`)이 포함됩니다.

- [텍스트](https://developers.line.biz/en/reference/messaging-api/#wh-text)
- [스티커](https://developers.line.biz/en/reference/messaging-api/#wh-sticker)
- [이미지](https://developers.line.biz/en/reference/messaging-api/#wh-image)
- [동영상](https://developers.line.biz/en/reference/messaging-api/#wh-video)

```json
"message": {
  "type": "text",
  "id": "468789577898262530",
  "quoteToken": "q3Plxr4AgKd...", // 인용 토큰
  "text": "Can I reserve a table for dinner tonight?"
}
```

웹훅에 대한 자세한 내용은 [메시지 수신(웹훅)](https://developers.line.biz/en/docs/messaging-api/receiving-messages/)을 참고하세요.

### 메시지 전송 시 응답으로 인용 토큰 가져오기 

Messaging API로 [응답 메시지](https://developers.line.biz/en/reference/messaging-api/#send-reply-message) 또는 [푸시 메시지](https://developers.line.biz/en/reference/messaging-api/#send-push-message)를 보내면, 응답으로 `sentMessages` 속성을 포함한 JSON 객체가 반환됩니다.

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

다만 인용 대상으로 지정할 수 있는 다음 메시지 객체를 보낸 경우에만 인용 토큰(`sentMessages[].quoteToken`)이 응답에 포함됩니다.

- [텍스트 메시지](https://developers.line.biz/en/docs/messaging-api/message-types/#text-messages)
- [텍스트 메시지(v2)](https://developers.line.biz/en/docs/messaging-api/message-types/#text-messages-v2)
- [스티커 메시지](https://developers.line.biz/en/docs/messaging-api/message-types/#sticker-messages)
- [이미지 메시지](https://developers.line.biz/en/docs/messaging-api/message-types/#image-messages)
- [동영상 메시지](https://developers.line.biz/en/docs/messaging-api/message-types/#video-messages)
- [템플릿 메시지](https://developers.line.biz/en/docs/messaging-api/message-types/#template-messages) (인용되면 `altText`만 표시됨)
- [Flex Message](https://developers.line.biz/en/docs/messaging-api/message-types/#flex-messages) (인용되면 `altText`만 표시됨)

위 메시지 객체 중 여러 개를 지정하여 보내면 그 개수만큼 인용 토큰을 받습니다. 이 경우 `sentMessages` 배열의 요소 순서는 전송한 메시지 객체의 순서와 같다는 것이 보장됩니다.

```json
{
  "sentMessages": [
    {
      "id": "471875397094211585",
      "quoteToken": "YKPDqjc2jmW..."
    },
    {
      "id": "471875397127766017",
      "quoteToken": "eG5SfLhgiFX..."
    }
  ]
}
```
