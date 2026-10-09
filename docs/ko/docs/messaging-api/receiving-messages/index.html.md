# 메시지 수신하기(웹훅)

사용자가 LINE 공식 계정을 친구로 추가하거나 메시지를 보낼 때마다, LINE 플랫폼은 웹훅 이벤트 객체가 담긴 HTTP POST 요청을 [LINE Developers Console](https://developers.line.biz/console/)에 등록한 웹훅 URL(봇 서버)로 보냅니다.

봇 서버가 웹훅 이벤트 객체를 올바르게 처리하도록 하세요. 봇 서버가 오랜 시간 동안 웹훅을 수신하지 못하면 LINE 플랫폼은 봇 서버로의 웹훅 전송을 중단할 수 있습니다.

<!-- warning start -->

**보안 경고**

봇 서버는 LINE 플랫폼 이외의 출처에서 보낸 HTTP POST 요청을 받을 수 있으며, 이러한 요청은 악의적일 수 있습니다. 웹훅 이벤트 객체를 처리하기 전에 반드시 [서명을 검증](https://developers.line.biz/en/docs/messaging-api/receiving-messages/#verify-signature)하세요.

<!-- warning end -->

<!-- tip start -->

**이벤트를 비동기로 처리하는 것을 권장합니다**

웹훅 이벤트는 비동기로 처리하는 것을 권장합니다. 현재 요청이 처리될 때까지 후속 요청이 기다리는 것을 막기 위해서입니다.

<!-- tip end -->

## 서명 검증 

봇 서버가 웹훅 이벤트를 받으면, [웹훅 이벤트 객체](https://developers.line.biz/en/reference/messaging-api/#webhook-event-objects)를 처리하기 전에 요청 헤더에 포함된 서명을 검증하세요. 이 검증 단계는 웹훅이 LINE 플랫폼에서 왔는지, 전송 중에 변조되지 않았는지 확인하는 데 중요합니다.

자세한 내용은 [웹훅 서명 검증](https://developers.line.biz/en/docs/messaging-api/verify-webhook-signature/)을 참고하세요.

## 웹훅 이벤트 타입 

웹훅 이벤트 객체의 데이터에 따라 봇의 반응을 제어할 수 있습니다. 또한 봇이 어떤 작업을 수행하거나 사용자에게 응답하도록 할 수도 있습니다. [채팅](https://developers.line.biz/en/docs/messaging-api/receiving-messages/#webhook-event-in-one-on-one-talk-or-group-chat)과 [비콘 및 계정 연동](https://developers.line.biz/en/docs/messaging-api/receiving-messages/#other-webhook-events)에 대한 웹훅 이벤트를 받을 수 있습니다. 자세한 내용은 Messaging API 레퍼런스의 [웹훅 이벤트 객체](https://developers.line.biz/en/reference/messaging-api/#webhook-event-objects)를 참고하세요.

### 채팅 웹훅 이벤트 

1:1 채팅 또는 [그룹 채팅 및 다인 채팅](https://developers.line.biz/en/docs/messaging-api/group-chats/)에서 봇 서버가 받는 웹훅 이벤트는 다음과 같습니다.

| 웹훅 이벤트 | 수신 시점 | 1:1 채팅 | 그룹 채팅 | 다인 채팅 |
| --- | --- | --- | --- | --- |
| [Message 이벤트](https://developers.line.biz/en/reference/messaging-api/#message-event) | 사용자가 메시지를 보낼 때. 이 이벤트에 응답할 수 있습니다. | ✅ | ✅ | ✅ |
| [Edit 이벤트](https://developers.line.biz/en/reference/messaging-api/#edit-event) | 사용자가 메시지를 수정할 때. 이 이벤트에 응답할 수 있습니다. | ❌ | ✅ | ❌ |
| [Unsend 이벤트](https://developers.line.biz/en/reference/messaging-api/#unsend-event) | 사용자가 메시지를 전송 취소할 때. 이 이벤트 처리에 대한 자세한 내용은 [전송 취소 이벤트 수신 시 처리](https://developers.line.biz/en/docs/messaging-api/receiving-messages/#webhook-unsend-message)를 참고하세요. | ✅ | ✅ | ✅ |
| [Follow 이벤트](https://developers.line.biz/en/reference/messaging-api/#follow-event) | 사용자가 LINE 공식 계정을 친구로 추가하거나 차단을 해제할 때. 이 이벤트에 응답할 수 있습니다. | ✅ | ❌ | ❌ |
| [Unfollow 이벤트](https://developers.line.biz/en/reference/messaging-api/#unfollow-event) | 사용자가 LINE 공식 계정을 차단할 때. | ✅ | ❌ | ❌ |
| [Join 이벤트](https://developers.line.biz/en/reference/messaging-api/#join-event) | LINE 공식 계정이 그룹 채팅 또는 다인 채팅에 참여할 때. 이 이벤트에 응답할 수 있습니다. | ❌ | ✅ | ✅ |
| [Leave 이벤트](https://developers.line.biz/en/reference/messaging-api/#leave-event) | 사용자가 LINE 공식 계정을 삭제하거나, LINE 공식 계정이 그룹 채팅 또는 다인 채팅에서 나갈 때. | ❌ | ✅ | ✅ |
| [Member join 이벤트](https://developers.line.biz/en/reference/messaging-api/#member-joined-event) | LINE 공식 계정이 멤버인 그룹 채팅 또는 다인 채팅에 사용자가 참여할 때. 이 이벤트에 응답할 수 있습니다. | ❌ | ✅ | ✅ |
| [Member leave 이벤트](https://developers.line.biz/en/reference/messaging-api/#member-left-event) | LINE 공식 계정이 멤버인 그룹 채팅 또는 다인 채팅에서 사용자가 나갈 때. | ❌ | ✅ | ✅ |
| [Postback 이벤트](https://developers.line.biz/en/reference/messaging-api/#postback-event) | 사용자가 [postback 액션](https://developers.line.biz/en/reference/messaging-api/#postback-action)을 트리거할 때. 이 이벤트에 응답할 수 있습니다. | ✅ | ✅ | ✅ |
| [동영상 시청 완료 이벤트](https://developers.line.biz/en/reference/messaging-api/#video-viewing-complete) | 사용자가 LINE 공식 계정이 보낸 `trackingId`가 지정된 동영상 메시지 시청을 마칠 때. 이 이벤트에 응답할 수 있습니다. | ✅ | ❌ | ❌ |

✅ 봇 서버가 이 이벤트를 받음&nbsp;&nbsp;&nbsp;&nbsp;❌ 봇 서버가 이 이벤트를 받지 않음

#### liff.sendMessages()를 사용하여 메시지를 보낼 때의 웹훅 

사용자는 LINE 앱에서 [템플릿 메시지](https://developers.line.biz/en/reference/messaging-api/#template-messages)나 [Flex Message](https://developers.line.biz/en/reference/messaging-api/#flex-message)를 보낼 수 없습니다. 하지만 개발자는 [`liff.sendMessages()`](https://developers.line.biz/en/reference/liff/#send-messages)를 사용하여 LINE MINI App 또는 LIFF 앱이 열려 있는 현재 채팅 화면에 사용자를 대신해 메시지를 보낼 수 있습니다.

`liff.sendMessages()`를 사용하여 사용자가 템플릿 메시지나 Flex Message를 보내면, LINE 플랫폼은 웹훅을 보내지 않습니다. 그 밖의 [메시지 타입](https://developers.line.biz/en/docs/messaging-api/message-types/)에 대해서는 웹훅이 전송됩니다.

#### 웹훅으로 사용자가 보낸 인용 메시지 받기 

사용자가 과거 메시지를 인용하여 메시지를 보내면, 웹훅의 `message` 속성에 포함된 `quotedMessageId` 속성으로 인용된 메시지의 ID를 확인할 수 있습니다. 이 경우 인용된 메시지의 ID는 확인할 수 있지만, 메시지의 내용(텍스트나 스티커 등)은 가져올 수 없습니다.

![채팅 답장 기능](https://developers.line.biz/media/messaging-api/receiving-messages/chat-reply.png)

사용자가 과거 메시지를 인용하여 메시지를 보냈을 때 봇 서버로 도착하는 웹훅의 예는 다음과 같습니다.

```json
{
  "destination": "xxxxxxxxxx",
  "events": [
    {
      "type": "message",
      "message": {
        "type": "text",
        "id": "468789577898262530", // 보낸 메시지의 ID
        "quotedMessageId": "468789532432007169", // 인용된 메시지의 ID
        "quoteToken": "q3Plxr4AgKd...",
        "text": "Chicken, please." // 보낸 메시지의 텍스트
      },
      "webhookEventId": "01H810YECXQQZ37VAXPF6H9E6T",
      "deliveryContext": {
        "isRedelivery": false
      },
      "timestamp": 1692251666727,
      "source": {
        "type": "group",
        "groupId": "Ca56f94637c...",
        "userId": "U4af4980629..."
      },
      "replyToken": "38ef843bde154d9b91c21320ffd17a0f",
      "mode": "active"
    }
  ]
}
```

`quotedMessageId` 속성에 대한 자세한 내용은 Messaging API 레퍼런스의 [Message 이벤트](https://developers.line.biz/en/reference/messaging-api/#message-event) 중 [텍스트](https://developers.line.biz/en/reference/messaging-api/#wh-text)와 [스티커](https://developers.line.biz/en/reference/messaging-api/#wh-sticker)를 참고하세요.

사용자가 인용 메시지를 보내는 방법에 대한 자세한 내용은 LINE 사용자 가이드의 [채팅 답장 기능 사용하기](https://guide.line.me/ja/communication/chat-reply.html)(일본어만 제공)를 참고하세요.

#### 봇에 대한 멘션이 포함된 메시지를 보냈을 때의 웹훅 

사용자가 보낸 메시지가 봇을 멘션하면, 봇 서버로 전송되는 웹훅 이벤트의 텍스트 메시지 객체에 다음 값이 설정됩니다.

- `mention.mentionees[].type`은 `user`로 설정됩니다.
- `mention.mentionees[].userId`는 봇의 사용자 ID로 설정됩니다.
- `mention.mentionees[].isSelf`는 `true`로 설정됩니다.

예를 들어 다음 message 이벤트를 포함하는 웹훅 이벤트 객체가 봇 서버로 전송됩니다.

```json
"message": {
  "id": "444573844083572737",
  "type": "text",
  "quoteToken": "q3Plxr4AgKd...",
  "text": "@example_bot Good Morning!!",
  "mention": {
    "mentionees": [
      {
        "index": 0,
        "length": 12,
        "userId": "{user ID of the bot}",
        "type": "user",
        "isSelf": true
      }
    ]
  }
}
```

봇의 사용자 ID는 [웹훅 요청 본문](https://developers.line.biz/en/reference/messaging-api/#request-body)의 `destination` 속성에서 확인할 수 있으며, [LINE 공식 계정(봇) 정보 가져오기](https://developers.line.biz/en/reference/messaging-api/#get-bot-info) 엔드포인트로 가져올 수 있는 `userId` 속성에서도 확인할 수 있습니다.

### 그 밖의 웹훅 이벤트 

비콘 및 계정 연동에 대해서도 다음과 같이 웹훅 이벤트를 받을 수 있습니다.

| 웹훅 이벤트 | 수신 시점 |
| --- | --- |
| [Beacon 이벤트](https://developers.line.biz/en/reference/messaging-api/#beacon-event) | 사용자가 비콘의 수신 범위에 들어갈 때. 이 이벤트에 응답할 수 있습니다. 자세한 내용은 [LINE에서 비콘 사용하기](https://developers.line.biz/en/docs/messaging-api/using-beacons/)를 참고하세요. |
| [계정 연동 이벤트](https://developers.line.biz/en/reference/messaging-api/#account-link-event) | 사용자가 LINE 계정을 (프로바이더로서) 서비스 계정과 연동할 때. 이 이벤트에 응답할 수 있습니다. 자세한 내용은 [사용자 계정 연동](https://developers.line.biz/en/docs/messaging-api/linking-accounts/)을 참고하세요. |

## 전송 취소 이벤트 수신 시 처리 

사용자는 메시지를 보낸 후 제한된 시간 동안 해당 메시지를 전송 취소할 수 있습니다.

사용자가 보낸 메시지를 전송 취소하면, [전송 취소 이벤트](https://developers.line.biz/en/reference/messaging-api/#unsend-event)가 봇 서버로 전송됩니다. 전송 취소 이벤트를 받으면, 서비스 제공자는 사용자의 의도를 존중하여 해당 메시지가 앞으로 보이거나 사용되지 않도록 세심하게 처리하는 것을 권장합니다.

예를 들어 사용자가 전송 취소한 메시지는 다음과 같이 처리해야 합니다.

- 자체 관리 화면 등에 표시된 대상 메시지를 취소합니다.
- 데이터베이스나 다른 저장 장치에 저장된 대상 메시지를 삭제합니다.

LINE 앱에서 보낸 메시지를 전송 취소하는 방법에 대한 자세한 내용은 LINE 사용자 가이드의 [메시지 전송 취소 기능 사용하기](https://guide.line.me/ja/communication/chat-delete.html)(일본어만 제공)를 참고하세요.

## 수신하지 못한 웹훅 재전송 

Messaging API는 봇 서버가 수신하지 못한 웹훅을 재전송하는 기능을 제공합니다. 일시적인 과도한 접근 등의 이유로 봇 서버가 웹훅에 정상적으로 응답하지 못하더라도, LINE 플랫폼은 일정 기간 동안 웹훅을 다시 보내므로 봇 서버는 복구 후 웹훅을 받을 수 있습니다.

웹훅 재전송은 모든 Messaging API 채널에서 사용할 수 있습니다.

<!-- note start -->

**웹훅 재전송을 활성화하기 전에 확인하세요**

- 네트워크 라우팅 문제 등 다양한 이유로 같은 웹훅 이벤트가 봇 서버로 두 번 이상 전송될 수 있습니다. 중복을 감지하려면 웹훅 이벤트 객체의 `webhookEventId`를 사용하세요.
- LINE 플랫폼이 웹훅을 재전송하면, 받는 웹훅 이벤트의 순서가 실제 이벤트 발생 순서와 다를 수 있습니다. 이것이 문제가 된다면 웹훅 이벤트 객체의 `timestamp`를 확인하여 상황을 파악하세요.

<!-- note end -->

### 재전송된 웹훅 

재전송된 [웹훅 이벤트 객체](https://developers.line.biz/en/reference/messaging-api/#webhook-event-objects)의 내용은 `deliveryContext.isRedelivery` 값을 제외하면 원래의 웹훅 이벤트 객체와 같습니다. 웹훅 이벤트 ID와 응답 토큰 같은 값은 변경되지 않습니다.

재전송된 웹훅 이벤트 객체에 포함된 응답 토큰은 특정 경우를 제외하고 사용할 수 있습니다. 응답 토큰에 대한 자세한 내용은 Messaging API 레퍼런스의 [응답 토큰](https://developers.line.biz/en/reference/messaging-api/#send-reply-message-reply-token)을 참고하세요.

### 웹훅 재전송 활성화하기 

웹훅 재전송은 기본적으로 비활성화되어 있습니다. 웹훅 재전송을 활성화하려면 다음과 같이 하세요.

1. [LINE Developers Console](https://developers.line.biz/console/)에서 채널 설정 화면을 엽니다.
1. **Messaging API** 탭을 클릭합니다.
1. **Use webhook**을 활성화합니다.
1. **Webhook redelivery**를 활성화합니다.

**Webhook redelivery**를 활성화하면, 참고할 수 있도록 웹훅 재전송에 대한 안내가 표시됩니다. 활성화하기 전에 안내를 읽고 이해하세요.

![웹훅 재전송 활성화 화면](https://developers.line.biz/media/messaging-api/receiving-messages/enable-webhook-redelivery-en.png)

### 웹훅 재전송 조건 

다음 조건을 충족하면 LINE 플랫폼은 실패한 웹훅을 미리 정해진 횟수만큼 일정한 간격을 두고 다시 보냅니다.

- [웹훅 재전송이 활성화되어 있어야 합니다](https://developers.line.biz/en/docs/messaging-api/receiving-messages/#enable-webhook-redelivery).
- 봇 서버가 웹훅에 대해 `2xx` 상태 코드를 반환하지 않아야 합니다.

웹훅 재전송 횟수와 간격은 공개되지 않습니다. 또한 재전송 횟수와 간격은 사전 공지 없이 변경될 수 있습니다.

<!-- note start -->

**웹훅을 재전송하지 못할 수 있습니다**

웹훅 재전송이 웹훅의 안정적인 전달을 보장하지는 않는다는 점에 유의하세요. 또한 웹훅 재전송 횟수가 갑자기 늘어나 LINE 플랫폼의 운영에 영향을 주는 것으로 판단되면, 웹훅 재전송이 강제로 비활성화될 수 있습니다.

<!-- note end -->

## 웹훅 오류의 원인 확인하기 

Messaging API는 웹훅을 보낼 때 오류 원인과 통계를 확인할 수 있는 기능을 제공합니다. 봇 서버 문제 등으로 웹훅을 수신하지 못한 경우, 웹훅 전송 상태를 파악하는 데 유용합니다.

자세한 내용은 [웹훅 오류 원인 및 통계 확인하기](https://developers.line.biz/en/docs/messaging-api/check-webhook-error-statistics/)를 참고하세요.

## 웹훅으로 사용자가 보낸 콘텐츠 가져오기 

[웹훅](https://developers.line.biz/en/reference/messaging-api/#webhooks)의 메시지 ID로 사용자가 보낸 콘텐츠를 가져올 수 있습니다. 가져올 수 있는 콘텐츠의 종류는 다음과 같습니다.

- [이미지, 동영상, 오디오, 파일](https://developers.line.biz/en/docs/messaging-api/receiving-messages/#getting-content-file-sent-by-users)
- [이미지 또는 동영상의 미리보기 이미지](https://developers.line.biz/en/docs/messaging-api/receiving-messages/#getting-content-preview-image)

<!-- note start -->

**참고**

- 사용자가 보낸 콘텐츠는 일정 기간이 지나면 자동으로 삭제됩니다.
- 웹훅의 [텍스트](https://developers.line.biz/en/reference/messaging-api/#wh-text) 메시지 객체에서 사용자가 보낸 텍스트를 가져올 수 있습니다. 웹훅을 받은 후에는 텍스트를 다시 가져올 수 있는 API가 없습니다.

<!-- note end -->

### 이미지, 동영상, 오디오, 파일 가져오기 

웹훅의 메시지 ID로 사용자가 보낸 [이미지](https://developers.line.biz/en/reference/messaging-api/#wh-image), [동영상](https://developers.line.biz/en/reference/messaging-api/#wh-video), [오디오](https://developers.line.biz/en/reference/messaging-api/#wh-audio), [파일](https://developers.line.biz/en/reference/messaging-api/#wh-file)을 가져올 수 있습니다.

요청 예제

```sh
curl -v -X GET https://api-data.line.me/v2/bot/message/{messageId}/content \
-H 'Authorization: Bearer {channel access token}'
```

자세한 내용은 Messaging API 레퍼런스의 [콘텐츠 가져오기](https://developers.line.biz/en/reference/messaging-api/#get-content)를 참고하세요.

### 이미지 또는 동영상의 미리보기 이미지 가져오기 

웹훅의 메시지 ID로 사용자가 보낸 이미지 또는 동영상의 미리보기 이미지를 가져올 수 있습니다.

요청 예제

```sh
curl -v -X GET https://api-data.line.me/v2/bot/message/{messageId}/content/preview \
-H 'Authorization: Bearer {channel access token}'
```

미리보기 이미지는 원본 콘텐츠보다 데이터 크기를 줄인 이미지 데이터입니다.

예를 들어 미리보기 이미지는 썸네일로 사용할 수 있습니다. CRM과 같은 사이트를 만들 때, 큰 이미지나 동영상을 다운로드하는 동안 썸네일을 표시할 수 있습니다. 이렇게 하면 사용자가 콘텐츠의 개요를 빠르게 파악할 수 있어 시스템의 사용자 경험이 향상됩니다.

자세한 내용은 Messaging API 레퍼런스의 [이미지 또는 동영상의 미리보기 이미지 가져오기](https://developers.line.biz/en/reference/messaging-api/#get-image-or-video-preview)를 참고하세요.

## 사용자 프로필 가져오기 

[웹훅](https://developers.line.biz/en/reference/messaging-api/#webhooks)에 포함된 사용자 ID로 사용자의 LINE 프로필(표시 이름, 사용자 ID, 프로필 이미지 URL, 상태 메시지 등)을 가져올 수 있습니다.

요청 예제

```sh
curl -v -X GET https://api.line.me/v2/bot/profile/{userId} \
-H 'Authorization: Bearer {channel access token}'
```

성공하면 JSON 객체가 반환됩니다.

```json
{
  "displayName": "LINE Botto",
  "userId": "U4af4980629...",
  "pictureUrl": "https://profile.line-scdn.net/ch/v2/p/uf9da5ee2b...",
  "statusMessage": "Hello world!"
}
```

자세한 내용은 Messaging API 레퍼런스의 [프로필 가져오기](https://developers.line.biz/en/reference/messaging-api/#get-profile)를 참고하세요.
