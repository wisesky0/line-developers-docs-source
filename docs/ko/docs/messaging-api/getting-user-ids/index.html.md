# 사용자 ID 가져오기

Messaging API로 사용자에게 메시지를 보내려면 사용자 ID로 해당 사용자를 지정해야 합니다. 사용자 ID를 가져오는 방법을 알아보세요.

<!-- table of contents -->

## 사용자 ID란 

사용자 ID는 사용자를 식별하는 고유 식별자이며, 표시 이름이나 친구 검색을 위해 사용자가 등록하는 LINE ID와는 다릅니다. LINE 플랫폼은 `U[0-9a-f]{32}`(정규 표현식) 형식의 문자열로 사용자 ID를 발급합니다. 사용자 ID의 예는 `U8189cf6745fc0d808977bdb0b9f22995`입니다.

![표시 이름, LINE ID, 사용자 ID의 차이](https://developers.line.biz/media/messaging-api/getting-user-ids/display-name-and-id-and-user-id-en.webp)

### 사용자 ID 발급 단위 

같은 사용자라도 프로바이더마다 서로 다른 사용자 ID가 발급됩니다. 같은 프로바이더에 속해 있다면 채널 유형(LINE Login 채널 또는 Messaging API 채널)과 관계없이 사용자 ID가 같습니다.

예를 들어 같은 프로바이더에 Messaging API 채널과 LINE Login 채널이 있다면, 각 채널에서 얻은 사용자 A의 사용자 ID는 같은 값입니다. 하지만 다른 프로바이더의 채널에서 얻은 사용자 A의 사용자 ID는 다른 값입니다.

![프로바이더별 사용자 ID](https://developers.line.biz/media/messaging-api/getting-user-ids/user-id-for-each-provider-en.png)

## 사용자 ID 가져오기 

다음 네 가지 방법으로 사용자 ID를 가져올 수 있습니다.

1. [개발자 본인의 사용자 ID 가져오기](https://developers.line.biz/en/docs/messaging-api/getting-user-ids/#get-own-user-id)
1. [웹훅에서 사용자 ID 가져오기](https://developers.line.biz/en/docs/messaging-api/getting-user-ids/#get-user-ids-in-webhook)
1. [모든 친구의 사용자 ID 가져오기](https://developers.line.biz/en/docs/messaging-api/getting-user-ids/#get-all-friends-user-ids)
1. [그룹 채팅 및 다인 채팅 멤버의 사용자 ID 가져오기](https://developers.line.biz/en/docs/messaging-api/getting-user-ids/#get-member-user-ids)

### 개발자 본인의 사용자 ID 가져오기 

개발자는 [LINE Developers Console](https://developers.line.biz/console/)에서 채널의 **Basic settings** 탭에 있는 **Your user ID**에서 자신의 사용자 ID를 확인할 수 있습니다. 자세한 내용은 LINE Developers Console 문서의 [채널 역할](https://developers.line.biz/en/docs/line-developers-console/managing-roles/#roles-for-channel)을 참고하세요. 개발자 본인의 사용자 ID를 가져오는 API는 없습니다.

<!-- tip start -->

**Business ID를 LINE 계정과 연결해야 합니다**

Business ID가 LINE 계정과 연결되어 있지 않으면 **Basic settings** 탭의 **Your user ID**가 표시되지 않습니다. LINE 계정 연결 상태에 따른 표시 차이는 다음과 같습니다.

| LINE 계정 연결됨 | LINE 계정 연결되지 않음 |
| --- | --- |
| ![LINE 계정이 연결된 경우](https://developers.line.biz/media/messaging-api/getting-user-ids/get-own-user-id-linked-line-account-en.png) | ![LINE 계정이 연결되지 않은 경우](https://developers.line.biz/media/messaging-api/getting-user-ids/get-own-user-id-unlinked-line-account-en.png) |

LINE 계정을 연결하는 방법에 대한 자세한 내용은 LINE Developers Console 문서의 [Business ID를 LINE 계정과 연결하기](https://developers.line.biz/en/docs/line-developers-console/login-account/#link-business-account-with-line-account)를 참고하세요.

<!-- tip end -->

### 웹훅에서 사용자 ID 가져오기 

사용자가 LINE 공식 계정을 친구로 추가하거나 LINE 공식 계정에 메시지를 보내면, LINE 플랫폼은 LINE Developers Console의 **Webhook URL**에 지정된 URL(봇 서버)로 웹훅을 보냅니다. 웹훅에는 사용자 ID가 포함되어 있습니다.

다음은 사용자가 LINE 공식 계정을 친구로 추가할 때 LINE 플랫폼이 보내는 [웹훅 이벤트 객체](https://developers.line.biz/en/reference/messaging-api/#webhook-event-objects)의 예입니다.

```json
{
  "destination": "xxxxxxxxxx",
  "events": [
    {
      "type": "follow",
      "timestamp": 1462629479859,
      "source": {
        // source 객체의 userId 속성에서 사용자 ID를 가져올 수 있습니다
        "type": "user",
        "userId": "U8189cf6745fc0d808977bdb0b9f22995"
      },
      "replyToken": "nHuyWiB7yP5Zw52FIkcQobQuGDXCTA",
      "mode": "active",
      "webhookEventId": "01FZ74A0TDDPYRVKNK77XKC3ZR",
      "deliveryContext": {
        "isRedelivery": false
      }
    }
  ]
}
```

사용자가 사용자 프로필 정보에 접근하는 것에 동의하지 않았다면 웹훅에 사용자 ID가 포함되지 않습니다. 자세한 내용은 [사용자 프로필 정보 가져오기 동의](https://developers.line.biz/en/docs/messaging-api/user-consent/)를 참고하세요.

### 모든 친구의 사용자 ID 가져오기 

[LINE 공식 계정을 친구로 추가한 사용자 목록 가져오기](https://developers.line.biz/en/reference/messaging-api/#get-follower-ids) 엔드포인트로 LINE 공식 계정을 친구로 추가한 모든 사용자의 사용자 ID를 가져올 수 있습니다.

<!-- note start -->

**참고**

이 기능은 인증된 계정 또는 [프리미엄 계정](https://developers.line.biz/en/glossary/#premium-account)에서만 사용할 수 있습니다. 계정 유형에 대한 자세한 내용은 LINE for Business의 [LINE 공식 계정의 계정 유형](https://www.linebiz.com/jp-en/service/line-official-account/account-type/)을 참고하세요.

<!-- note end -->

### 그룹 채팅 및 다인 채팅 멤버의 사용자 ID 모두 가져오기 

LINE 공식 계정이 참여 중인 그룹 채팅 또는 다인 채팅의 모든 멤버 사용자 ID는 다음 엔드포인트로 가져올 수 있습니다.

- [그룹 채팅 멤버 사용자 ID 가져오기](https://developers.line.biz/en/reference/messaging-api/#get-group-member-user-ids)
- [다인 채팅 멤버 사용자 ID 가져오기](https://developers.line.biz/en/reference/messaging-api/#get-room-member-user-ids)

<!-- note start -->

**참고**

이 기능은 인증된 계정 또는 [프리미엄 계정](https://developers.line.biz/en/glossary/#premium-account)에서만 사용할 수 있습니다. 계정 유형에 대한 자세한 내용은 LINE for Business의 [LINE 공식 계정의 계정 유형](https://www.linebiz.com/jp-en/service/line-official-account/account-type/)을 참고하세요.

<!-- note end -->

<!-- tip start -->

**웹훅에서도 사용자 ID를 가져올 수 있습니다**

사용자가 그룹 채팅 또는 다인 채팅에 참여하거나 메시지를 보내면 봇 서버로 웹훅이 전송됩니다. 웹훅에는 사용자 ID가 포함되어 있으므로 API 요청 없이 사용자 ID를 가져올 수 있습니다. 자세한 내용은 [웹훅에서 사용자 ID 가져오기](https://developers.line.biz/en/docs/messaging-api/getting-user-ids/#get-user-ids-in-webhook)를 참고하세요.

<!-- tip end -->

## 사용자 ID 유효성 검사 

사용자 ID가 있더라도 유효하지 않은 사용자 ID라면 메시지를 보낼 수 없습니다.

사용자 ID가 유효한지 확인하려면 [프로필 가져오기](https://developers.line.biz/en/reference/messaging-api/#get-profile) 엔드포인트를 사용하세요. 사용자 ID가 유효하면 HTTP 상태 코드 `200`이 반환됩니다. `200` 이외의 응답이 반환되면 사용자 ID가 유효하지 않으므로 해당 사용자에게 메시지를 보낼 수 없습니다.
