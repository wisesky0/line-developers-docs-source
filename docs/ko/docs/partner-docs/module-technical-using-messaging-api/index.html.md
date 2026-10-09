# 모듈 채널에서 Messaging API 사용하기

<!-- note start -->

**선택 기능을 사용하려면 절차가 필요합니다**

이 문서에 설명된 기능은 소정의 신청을 완료한 법인 고객만 사용할 수 있습니다. 모듈을 사용하여 확장 기능을 게시하려면 영업 담당자에게 문의하거나 [LINE Marketplace 문의](https://line-marketplace.com/jp/inquiry)(일본어만 제공)를 통해 문의해 주십시오.

<!-- note end -->

모듈 채널도 Messaging API 채널과 마찬가지로 Messaging API를 사용하여 메시지를 보내고 리치 메뉴를 전환할 수 있습니다.

- [모듈 채널의 채널 액세스 토큰으로 Messaging API 사용하기](https://developers.line.biz/en/docs/partner-docs/module-technical-using-messaging-api/#using-msg-api-with-module-channel-access-token)
- [웹훅 수신하기](https://developers.line.biz/en/docs/partner-docs/module-technical-using-messaging-api/#get-webhook)
- [모듈 채널에서 LINE 공식 계정 정보 가져오기](https://developers.line.biz/en/docs/partner-docs/module-technical-using-messaging-api/#get-line-oa-info-from-module-channel)
- [참고 사항](https://developers.line.biz/en/docs/partner-docs/module-technical-using-messaging-api/#notes)

## 모듈 채널의 채널 액세스 토큰으로 Messaging API 사용하기 

- [모듈 채널에서 사용하는 사용자 ID](https://developers.line.biz/en/docs/partner-docs/module-technical-using-messaging-api/#user-id-used-in-module-channel)
- [모듈 채널의 채널 액세스 토큰](https://developers.line.biz/en/docs/partner-docs/module-technical-using-messaging-api/#module-channel-access-token)
- [Messaging API 엔드포인트 호출하기](https://developers.line.biz/en/docs/partner-docs/module-technical-using-messaging-api/#call-msg-api-endpoint)
- [Messaging API 사용 시 요청 제한](https://developers.line.biz/en/docs/partner-docs/module-technical-using-messaging-api/#rate-limits)

### 모듈 채널에서 사용하는 사용자 ID 

LINE Market Place에서 제공하는 모듈 채널의 경우, 각 사용자의 식별자인 [사용자 ID](https://developers.line.biz/en/faq/#what-are-userid-groupid-and-roomid)는 문자 "L"로 시작하는 68자리 문자열입니다.

같은 사용자라도 LINE 공식 계정마다 이 식별자는 다릅니다.

**"L"로 시작하는 68자리 식별자 예시:**

```
LUb577ef3cbe786a8da85ff8e902a03fc6-U5fac33f633e72c192759f09afc41fa28
```

### 모듈 채널의 채널 액세스 토큰 

모듈 채널이 Active Channel로 전환되면, 모듈 채널의 채널 액세스 토큰을 사용하여 Messaging API 또는 Module Channel API를 호출할 수 있습니다.

모듈 채널에는 다음 채널 액세스 토큰 중 하나를 사용할 수 있습니다.

- [단기 채널 액세스 토큰](https://developers.line.biz/en/docs/basics/channel-access-token/#short-lived-channel-access-token)
- [사용자 지정 만료 기간이 있는 채널 액세스 토큰(채널 액세스 토큰 v2.1)](https://developers.line.biz/en/docs/basics/channel-access-token/#user-specified-expiration)
- [상태 비저장(stateless) 채널 액세스 토큰](https://developers.line.biz/en/docs/basics/channel-access-token/#stateless-channel-access-token)

채널 액세스 토큰을 발급하는 데 필요한 정보는 [LINE Developers Console](https://developers.line.biz/console/)에서 모듈 채널의 **Basic settings** 탭에서 확인할 수 있습니다.

<!-- note start -->

**장기 채널 액세스 토큰은 사용할 수 없습니다**

모듈 채널에서는 장기 채널 액세스 토큰을 사용할 수 없습니다.

<!-- note end -->

### Messaging API 엔드포인트 호출하기 

모듈 채널의 채널 액세스 토큰을 사용하여 Messaging API를 사용할 수 있습니다.

다만 스코프와 요청 헤더에 주의해 주십시오.

#### 스코프 

Messaging API를 사용하려면 각 엔드포인트에 정의된 스코프가 있어야 합니다.

스코프는 모듈 채널을 연결할 때 지정해야 하며, LINE 공식 계정 관리자에게 사용 권한을 받아야 합니다. 자세한 내용은 [LINE 공식 계정 관리자에게 승인 요청하기](https://developers.line.biz/en/docs/partner-docs/module-technical-attach-channel/#request-auth-from-line-oa-admin)를 참조해 주십시오.

#### 요청 헤더 

모듈 채널에서 Messaging API 엔드포인트를 호출할 때에는 `Authorization` 헤더에 모듈 채널의 채널 액세스 토큰을 지정합니다. 또한 모듈 채널은 여러 LINE 공식 계정에 연결하도록 설계된 서비스이므로, 아래의 "봇의 사용자 ID를 지정하는 헤더"도 반드시 지정해 주십시오.

<!-- parameter start (props: required) -->

Authorization

`Bearer {channel access token}`

`{channel access token}`에는 모듈 채널의 채널 액세스 토큰을 지정합니다.

<!-- parameter end -->
<!-- parameter start (props: required) -->

봇의 사용자 ID를 지정하는 헤더

모듈 채널에 연결된 LINE 공식 계정 봇의 사용자 ID입니다.

봇의 사용자 ID는 [모듈 채널 연결](https://developers.line.biz/en/reference/partner-docs/#link-attach-by-operation-module-channel-provider) 응답 또는 [Attached 이벤트](https://developers.line.biz/en/reference/partner-docs/#attached-event)에서 가져올 수 있습니다.

<!-- note start -->

**이 헤더의 구체적인 내용은 참여 후 제공됩니다**

이 헤더의 이름(파라미터 이름)은 [LINE Marketplace](https://line-marketplace.com/jp/inquiry)(일본어만 제공)에 참여한 고객에게만 공개됩니다.

<!-- note end -->

<!-- parameter end -->

다음은 Messaging API를 통해 모듈 채널에서 [푸시 메시지](https://developers.line.biz/en/reference/messaging-api/#send-push-message)를 보내는 예시입니다.

```sh
curl -v -X POST https://api.line.me/v2/bot/message/push \
-H 'Content-Type:application/json' \
-H 'Authorization: Bearer {channel access token}' \
-H 'Header specifying the bot user ID: xxxxxxxxxxxxxxxxxxxxxxxx'　\      // 이 헤더가 필요합니다
-d '{
    "to": "LUb577ef3cbe...",
    "messages":[
        {
            "type":"text",
            "text":"Hello, world1"
        }
    ]
}'
```

### Messaging API 사용 시 요청 제한 

모듈 채널에서 Messaging API를 사용할 때의 요청 제한은 모듈 채널에 연결된 LINE 공식 계정 봇별로, 각 API 기능(엔드포인트) 단위로 모듈 채널 기준으로 적용됩니다.

모듈 채널이 여러 LINE 공식 계정 봇에 연결되어 있더라도, 요청 제한은 `모듈 채널 x LINE 공식 계정 봇 x API 기능`의 조합마다 별도로 적용됩니다.

엔드포인트별 요청 제한에 대한 자세한 내용은 Messaging API 레퍼런스의 [요청 제한](https://developers.line.biz/en/reference/messaging-api/#rate-limits)을 참조해 주십시오.

### 모듈 채널에서 발송한 메시지의 통계 가져오기 

여러 사용자에게 보낸 [푸시 메시지](https://developers.line.biz/en/reference/messaging-api/#send-push-message)와 [멀티캐스트 메시지](https://developers.line.biz/en/reference/messaging-api/#send-multicast-message)에 대해, 사용자가 어떻게 상호작용했는지 집계 단위별 통계를 가져올 수 있습니다.

모듈 채널의 통계는 LINE 공식 계정 봇과 단위 이름의 조합으로 집계됩니다.

예를 들어, 하나의 모듈 채널에서 LINE 공식 계정 A와 B가 "Unit A"라는 단위 이름의 메시지를 보낸 경우, 단위별 통계는 LINE 공식 계정마다 따로 집계됩니다.

당월(1일부터 말일까지)에 할당된 단위 이름 종류의 수도 같은 방식으로, LINE 공식 계정 봇과 단위 이름의 조합을 기준으로 집계됩니다.

자세한 내용은 Messaging API 문서의 [발송한 메시지 통계 가져오기](https://developers.line.biz/en/docs/messaging-api/unit-based-statistics-aggregation/)를 참조해 주십시오.

## 웹훅 수신하기 

모듈 채널에 등록된 웹훅 URL 서버에서 웹훅 이벤트를 받으면, `mode` 속성과 `destination` 속성의 값을 확인해 주십시오.

<!-- note start -->

**참고**

모듈 채널의 웹훅 URL 서버가 웹훅 이벤트를 수신하지 못하는 경우 다음 사항을 확인해 주십시오.

- 모듈 채널이 LINE 공식 계정에 연결되어 있어야 합니다. LINE 공식 계정을 친구로 추가한 사용자에게 모듈 채널에서 푸시 메시지를 보낼 수 있는지 확인해 주십시오.
- 모듈 채널을 연결하려고 LINE 공식 계정 관리자에게 승인을 요청할 때, 승인 URL의 scope 쿼리 파라미터에 `message%3Areceive`(message:receive)를 지정해야 합니다.

스코프에 대한 자세한 내용은 [LINE 공식 계정 관리자에게 승인 요청하기](https://developers.line.biz/en/docs/partner-docs/module-technical-attach-channel/#request-auth-from-line-oa-admin)를 참조해 주십시오.

<!-- note end -->

- [`mode` 속성](https://developers.line.biz/en/docs/partner-docs/module-technical-using-messaging-api/#mode-property)
- [`destination` 속성](https://developers.line.biz/en/docs/partner-docs/module-technical-using-messaging-api/#destination-property)
- [모듈 채널 전용 웹훅 이벤트 수신하기](https://developers.line.biz/en/docs/partner-docs/module-technical-using-messaging-api/#get-module-channel-specific-webhook-events)

### `mode` 속성 

사용자의 메시지나 친구 추가 등의 웹훅 이벤트는 LINE 공식 계정에 연결된 모든 채널(Primary Channel과 LINE 공식 계정에 연결된 모듈 채널)에 동시에 전송됩니다.

![Chat control](https://developers.line.biz/media/partner-docs/module-technical/chat-control-en.png)

웹훅 이벤트를 처리하기 전에, 각 채널이 최종 사용자에게 응답할 주도권(Chat Control)을 가지고 있는지 확인해 주십시오.

주도권(Chat Control)은 웹훅 이벤트의 `mode` 속성으로 확인할 수 있습니다.

| `mode` 속성 값 | 설명 |
| --- | --- |
| `active` | 웹훅 이벤트를 받은 채널이 활성 상태입니다.<br>이 웹훅 이벤트를 받은 웹훅 URL 서버는 응답 메시지, 푸시 메시지 등을 보낼 수 있습니다. |
| `standby` | 웹훅 이벤트를 받은 채널이 대기 상태입니다.<br>이 웹훅 이벤트를 받은 웹훅 URL 서버는 메시지를 보내지 않아야 합니다.<br><br>대기 채널에 도착한 웹훅 이벤트에는 `replyToken` 속성이 포함되지 않습니다. 따라서 응답 메시지를 보낼 수 없습니다. |

LINE 공식 계정에 연결된 채널 중 `mode` 속성이 `active`인 채널은 하나뿐입니다. 나머지 모든 채널의 `mode` 속성은 `standby`입니다.

다음은 `mode` 속성 값이 `active` 또는 `standby`일 때 전송되는 웹훅 이벤트의 예시입니다.

```sh
# Active Channel로 전송된 웹훅 예시
{
    "replyToken": "0f3779fba3b349968c5d07db31eab56f", // 이 속성에 주의하십시오
    "type": "message",
    "mode": "active", // 이 속성에 주의하십시오
    "timestamp": 1462629479859,
    "source": {
        "type": "user",
        "userId": "LUb577ef3cbe..."
    },
    "message": {
        "id": "325708",
        "type": "text",
        "text": "Hello, world"
    }
}

# Standby Channel로 전송된 웹훅 이벤트 예시
{
    // replyToken 속성이 없습니다
    "type": "message",
    "mode": "standby", // 이 속성에 주의하십시오
    "timestamp": 1462629479859,
    "source": {
        "type": "user",
        "userId": "U4af4980629..."
    },
    "message": {
        "id": "325708",
        "type": "text",
        "text": "Hello, world!"
    }
}
```

### `destination` 속성 

모듈 채널은 아래 그림과 같이 여러 LINE 공식 계정(OA "X", OA "Y", OA "Z", ...)에 연결될 수 있습니다.

![같은 서비스 연결](https://developers.line.biz/media/partner-docs/module-technical/attach-same-service-en.png)

따라서 `destination` 속성을 사용하여 웹훅이 어떤 LINE 공식 계정에서 보내졌는지 확인해 주십시오.

<!-- parameter start -->

destination

String

웹훅 이벤트를 보낸 LINE 공식 계정 봇의 사용자 ID입니다.

봇의 사용자 ID 값은 정규 표현식 `U[0-9a-f]{32}`에 맞는 문자열입니다.

<!-- parameter end -->

웹훅 이벤트 예시는 다음과 같습니다.

```sh
{
  "destination": "U53387d54817...",  // 이 속성에 주의하십시오
  "events": [...]
}
```

### 모듈 채널 전용 웹훅 이벤트 수신하기 

다음 웹훅 이벤트는 모듈 채널의 웹훅 URL 서버로만 전송됩니다.

| 이벤트 유형 | 설명 |
| --- | --- |
| [Attached 이벤트](https://developers.line.biz/en/reference/partner-docs/#attached-event) | 모듈 채널이 LINE 공식 계정에 연결되었음을 나타내는 이벤트입니다. |
| [Detached 이벤트](https://developers.line.biz/en/reference/partner-docs/#detached-event) | 모듈 채널이 LINE 공식 계정에서 연결 해제되었음을 나타내는 이벤트입니다. |
| [Activated 이벤트](https://developers.line.biz/en/reference/partner-docs/#activated-event) | [Acquire Control API](https://developers.line.biz/en/reference/partner-docs/#acquire-control-api)를 호출하여 모듈 채널이 Active Channel로 전환되었음을 나타내는 이벤트입니다. |
| [Deactivated 이벤트](https://developers.line.biz/en/reference/partner-docs/#deactivated-event) | [Acquire Control API](https://developers.line.biz/en/reference/partner-docs/#acquire-control-api) 또는 [Release Control API](https://developers.line.biz/en/reference/partner-docs/#release-control-api)를 호출하여 모듈 채널이 Standby Channel로 전환되었음을 나타내는 이벤트입니다. |
| [botSuspend 이벤트](https://developers.line.biz/en/reference/partner-docs/#botsuspend-event) | LINE 공식 계정이 정지(Suspend)되었음을 나타내는 이벤트입니다. |
| [botResumed 이벤트](https://developers.line.biz/en/reference/partner-docs/#botresumed-event)  | LINE 공식 계정이 정지 상태에서 복구되었음을 나타내는 이벤트입니다. |

<!-- tip start -->

**주도권(Chat Control) 변경을 감지하는 방법**

모듈 채널이 Active Channel로 설정되어 있을 때는, Release Control API를 호출하지 않아도 주도권(Chat Control)이 자동으로 변경될 수 있습니다. 다음 방법으로 주도권(Chat Control)의 변경을 감지할 수 있습니다.

| 이벤트 유형 | 설명 |
| --- | --- |
| <ul><li>[Activated 이벤트](https://developers.line.biz/en/reference/partner-docs/#activated-event)</li><li>[Deactivated 이벤트](https://developers.line.biz/en/reference/partner-docs/#deactivated-event)</li></ul>  | LINE 공식 계정에 연결된 모듈 채널이 Acquire Control API 또는 Release Control API를 호출하여 채팅의 주도권(Chat Control)이 전환될 때 전송되는 이벤트입니다. |
| <ul><li>[Follow 이벤트](https://developers.line.biz/en/reference/messaging-api/#follow-event)</li><li>[Unfollow 이벤트](https://developers.line.biz/en/reference/messaging-api/#unfollow-event)</li></ul> | 최종 사용자가 LINE 공식 계정을 차단했다가 다시 친구로 추가할 때 전송되는 이벤트입니다.<br>최종 사용자가 LINE 공식 계정을 차단했다가 다시 친구로 추가하면, 주도권(Chat Control)은 자동으로 기본 상태로 초기화됩니다. 모듈 채널에 [Default Active](https://developers.line.biz/en/docs/partner-docs/module-technical-chat-control/#default-active) 기능이 있다면 자동으로 Active Channel이 됩니다. |

<!-- tip end -->

<!-- tip start -->

**LINE 공식 계정의 정지 상태(Suspend)에 대하여**

모듈 채널 설정이나 서비스 제공 여부와 관계없이, LINE 공식 계정 운영자의 필요에 따라 LINE 공식 계정이 정지(Suspend)될 수 있습니다. 구체적으로 다음과 같은 경우에 LINE 공식 계정이 정지됩니다.

- 운영자가 LINE 공식 계정을 삭제한 경우
- 어떤 이유로든 LINE 공식 계정의 사용이 정지된 경우

경우에 따라 정지 상태였던 LINE 공식 계정이 복구될 수 있습니다. LINE 공식 계정이 정지되거나 복구될 때 웹훅 이벤트가 전송됩니다.

모듈 채널 측에서 관리하는 정보에 충돌이 생기지 않도록 모듈을 구현해 주십시오.

<!-- tip end -->

## 모듈 채널에서 LINE 공식 계정 정보 가져오기 

모듈 채널에 연결된 각 LINE 공식 계정의 정보는 다음 API로 가져올 수 있습니다.

- [LINE 공식 계정(봇) 정보 가져오기](https://developers.line.biz/en/docs/partner-docs/module-technical-using-messaging-api/#get-bot-info)
- [모듈이 연결된 봇 목록 가져오기](https://developers.line.biz/en/docs/partner-docs/module-technical-using-messaging-api/#get-multiple-bot-info)

### LINE 공식 계정(봇) 정보 가져오기 

모듈 채널이 연결된 LINE 공식 계정 봇의 기본 정보를 가져옵니다. 자세한 내용은 Messaging API 문서의 [LINE 공식 계정(봇) 정보 가져오기](https://developers.line.biz/en/reference/messaging-api/#get-bot-info)를 참조해 주십시오.

또한 요청 헤더에 다음 내용을 지정해 주십시오.

<!-- parameter start -->

Authorization

Bearer `{channel access token}`

`{channel access token}`에는 모듈 채널의 채널 액세스 토큰을 지정합니다.

<!-- parameter end -->
<!-- parameter start -->

봇의 사용자 ID를 지정하는 헤더

모듈 채널에 연결된 LINE 공식 계정 봇의 사용자 ID입니다.

봇의 사용자 ID는 [모듈 채널 연결 작업](https://developers.line.biz/en/docs/partner-docs/module-technical-using-messaging-api/#link-attach-by-operation-module-channel-provider) 응답 또는 [Attached 이벤트](https://developers.line.biz/en/reference/partner-docs/#attached-event)에서 가져올 수 있습니다.

<!-- note start -->

**이 헤더의 구체적인 내용은 참여 후 제공됩니다**

이 헤더의 이름(파라미터 이름)은 [LINE Marketplace](https://line-marketplace.com/jp/inquiry)(일본어만 제공)에 참여한 고객에게만 공개됩니다.

<!-- note end -->

<!-- parameter end -->

### 모듈이 연결된 봇 목록 가져오기 

모듈이 연결된 여러 LINE 공식 계정 봇의 기본 정보 목록을 가져옵니다. 자세한 내용은 법인 고객용 API 레퍼런스의 [모듈이 연결된 봇 목록 가져오기](https://developers.line.biz/en/reference/partner-docs/#get-multiple-bot-info-api)를 참조해 주십시오.

## 참고 사항 

- 모듈 채널을 연결 해제하면 설정이 반영되기까지 시간 차이가 있습니다. 연결 해제 후에는 요청을 보내지 마십시오.
- 이미 연결된 계정에도 대상 계정에 스코프를 추가할 수 있습니다.
