# 메시지 보내기

Messaging API를 사용하면 봇이 사용자에게 메시지를 보내도록 할 수 있습니다. 언제든지 사용자에게 메시지 전송을 시작할 수 있고, 사용자의 메시지에 응답할 수도 있습니다. 또한 다양한 메시지 유형을 사용할 수 있습니다.

| | |
| --- | --- |
| 메시징 유형 | <ul><li>응답 메시지</li><li>푸시 메시지: 1:1</li><li>멀티캐스트 메시지: 1:다수(사용자 ID 목록 대상)</li><li>내로캐스트 메시지: 1:다수(세분화된 목록 대상)</li><li>브로드캐스트 메시지: 1:다수(모든 친구 대상)</li></ul> |
| 메시지 유형 | <ul><li>텍스트 메시지</li><li>텍스트 메시지(v2)</li><li>스티커 메시지</li><li>이미지 메시지</li><li>동영상 메시지</li><li>오디오 메시지</li><li>위치 메시지</li><li>이미지맵 메시지</li><li>템플릿 메시지</li><li>Flex Message</li></ul>메시지 유형에 대한 자세한 내용은 [메시지 유형](https://developers.line.biz/en/docs/messaging-api/message-types/)을 참고하십시오. |

## 메시징 유형 

Messaging API에서 사용할 수 있는 전송 방법은 크게 두 가지입니다.

- [사용자의 메시지 및 액션에 응답하기(응답 메시지)](https://developers.line.biz/en/docs/messaging-api/sending-messages/#reply-messages)
- [언제든지 메시지 보내기](https://developers.line.biz/en/docs/messaging-api/sending-messages/#send-messages-at-any-time)

### 사용자의 메시지 및 액션에 응답하기(응답 메시지) 

사용자가 LINE 공식 계정을 친구로 추가하거나 LINE 공식 계정에 메시지를 보내면, Messaging API로 응답할 수 있습니다. 사용자의 액션으로 [웹훅 이벤트](https://developers.line.biz/en/reference/messaging-api/#webhook-event-objects)를 통해 받은 응답 토큰을 `replyToken` 속성에 설정하십시오. 한 번의 요청으로 최대 5개의 [메시지 객체](https://developers.line.biz/en/reference/messaging-api/#message-objects)를 보낼 수 있습니다.

<!-- tip start -->

**응답 메시지를 준비하는 동안 로딩 애니메이션을 표시할 수 있습니다**

LINE 공식 계정이 사용자의 메시지를 받은 후에는 메시지 준비나 예약 처리 때문에 응답에 시간이 걸릴 수 있습니다. 이런 경우에는 로딩 애니메이션을 표시하여 사용자에게 기다려 달라는 신호를 시각적으로 전달할 수 있습니다. 자세한 내용은 [로딩 애니메이션 표시하기](https://developers.line.biz/en/docs/messaging-api/use-loading-indicator/)를 참고하십시오.

<!-- tip end -->

응답 메시지를 보내는 요청 예시는 다음과 같습니다.

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

자세한 내용은 Messaging API 레퍼런스의 [응답 메시지 전송](https://developers.line.biz/en/reference/messaging-api/#send-reply-message)을 참고하십시오.

### 언제든지 메시지 보내기 

다음 방법 중 하나를 사용하여 언제든지 사용자에게 메시지를 보낼 수 있습니다.

| 메시징 유형 | 설명 |
| --- | --- |
| [푸시 메시지](https://developers.line.biz/en/reference/messaging-api/#send-push-message)  | 사용자, 그룹 채팅, 다인 채팅에 메시지를 보냅니다. 예를 들어 쇼핑 사이트에서 구매한 상품이 발송되었음을 사용자에게 알릴 때 사용할 수 있습니다. |
| [멀티캐스트 메시지](https://developers.line.biz/en/reference/messaging-api/#send-multicast-message) | 여러 사용자에게 한 번에 메시지를 보냅니다. 내로캐스트와의 차이점은 사용자 ID로 수신자를 지정한다는 것입니다. 예를 들어 쇼핑 사이트의 모든 회원에게 신기능을 알릴 때 사용할 수 있습니다. |
| [내로캐스트 메시지](https://developers.line.biz/en/docs/messaging-api/sending-messages/#send-narrowcast-message)  | 여러 사용자에게 한 번에 메시지를 보냅니다. 멀티캐스트와의 차이점은 사용자의 속성 데이터 또는 리타겟팅(오디언스)으로 수신자를 지정한다는 것입니다. 사용자 속성 데이터에는 성별, 연령, OS 유형, 지역 등이 포함됩니다. |
| [브로드캐스트 메시지](https://developers.line.biz/en/reference/messaging-api/#send-broadcast-message)  | LINE 공식 계정의 모든 친구에게 같은 메시지를 보낼 수 있습니다. |

한 번의 요청으로 최대 5개의 [메시지 객체](https://developers.line.biz/en/reference/messaging-api/#message-objects)를 보낼 수 있습니다.

<!-- tip start -->

**메시지 수를 세는 방법**

전송된 메시지로 집계되는 수는 메시지를 받는 사람의 수입니다. 한 번의 요청에 지정한 [메시지 객체](https://developers.line.biz/en/reference/messaging-api/#message-objects)의 수는 전송된 메시지 수에 영향을 주지 않습니다. 예를 들어 사람이 5명 있는 채팅방에 한 번의 요청으로 메시지 객체 4개를 포함한 푸시 메시지를 보냈다고 가정하십시오. 이때 전송된 메시지 수는 5입니다.

메시지를 받을 수 없는 사용자에게 보낸 메시지는 집계에서 제외됩니다. 이러한 사용자는 LINE 공식 계정을 차단한 사용자 ID이거나, 존재하지 않는 사용자 ID인 경우입니다.

<!-- tip end -->

푸시 메시지를 보내는 요청 예시는 다음과 같습니다.

```sh
curl -v -X POST https://api.line.me/v2/bot/message/push \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer {channel access token}' \
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

## 내로캐스트 메시지 보내기 

내로캐스트 메시지를 사용하면 원하는 시점에 여러 사용자에게 메시지를 보낼 수 있습니다. 그룹 채팅이나 다인 채팅에는 내로캐스트 메시지를 보낼 수 없습니다. 내로캐스트 메시지는 나이, 성별, OS, 지역 등의 속성 데이터 또는 리타겟팅(오디언스)으로 수신자를 지정합니다.

내로캐스트 메시지를 보내려면 다음 단계를 따르십시오.

1. [오디언스 또는 요청 ID 준비하기](https://developers.line.biz/en/docs/messaging-api/sending-messages/#prepare-audience-or-request-id)
1. [내로캐스트 메시지 전송 시작하기](https://developers.line.biz/en/docs/messaging-api/sending-messages/#send-narrowcast-message-detail)
1. [내로캐스트 메시지의 상태 확인하기](https://developers.line.biz/en/docs/messaging-api/sending-messages/#get-narrowcast-progress-status)

### 오디언스 또는 요청 ID 준비하기 

내로캐스트 메시지를 보내려면 수신 대상에 따라 오디언스 또는 요청 ID를 준비해야 합니다. 논리 연산자(AND, OR, NOT)를 사용하여 수신 대상을 조합할 수 있습니다. 예를 들어 OR 연산으로 메시지 A를 받은 사용자와 메시지 B의 URL을 클릭한 사용자를 수신 대상에 포함할 수 있습니다.

| 수신 대상 | 준비할 데이터 |
| --- | --- |
| LINE 공식 계정을 친구로 추가한 모든 사용자 | 필요 없음 |
| [사용자 ID](https://developers.line.biz/en/docs/messaging-api/sending-messages/#user-id) 또는 광고 식별자(IFA)로 식별되는 사용자 | <ul><li>[사용자 ID 업로드용 오디언스(JSON)](https://developers.line.biz/en/reference/messaging-api/#create-upload-audience-group)</li><li>[사용자 ID 업로드용 오디언스(파일)](https://developers.line.biz/en/reference/messaging-api/#create-upload-audience-group-by-file)</li></ul> |
| 보낸 메시지의 URL을 클릭한 사용자 | [메시지 클릭 오디언스](https://developers.line.biz/en/reference/messaging-api/#create-click-audience-group) |
| 보낸 메시지를 연 사용자 | [메시지 노출 오디언스](https://developers.line.biz/en/reference/messaging-api/#create-imp-audience-group) |
| 내로캐스트 메시지를 받은 사용자 | [수신자 객체](https://developers.line.biz/en/reference/messaging-api/#narrowcast-recipient)의 재전송 객체에 이전에 전송한 내로캐스트 메시지의 요청 ID를 지정합니다. |
| 채팅에 특정 태그가 붙은 사용자 | 채팅 태그 오디언스. [LINE Official Account Manager](https://manager.line.biz/)에서 만들 수 있습니다. |
| 특정 경로로 LINE 공식 계정을 친구로 추가한 사용자 | 친구 경로 오디언스. [LINE Official Account Manager](https://manager.line.biz/)를 사용하십시오. |
| 이전에 방문을 예약한 사용자 | 예약 오디언스. [LINE Official Account Manager](https://manager.line.biz/)에서 만들 수 있습니다. |
| 리치 메뉴를 본 사용자 | 리치 메뉴 노출 오디언스. [LINE Official Account Manager](https://manager.line.biz/)에서 만들 수 있습니다. |
| 리치 메뉴를 클릭한 사용자 | 리치 메뉴 클릭 오디언스. [LINE Official Account Manager](https://manager.line.biz/)에서 만들 수 있습니다. |
| LINE 태그 추적 정보로 좁힌 사용자 | 웹 트래픽 오디언스(LINE 태그). [LINE Official Account Manager](https://manager.line.biz/) 또는 [LINE Ad Manager](https://admanager.line.biz/)에서 만들 수 있습니다. |
| 추적 태그 정보로 좁힌 사용자 | 웹 트래픽 오디언스(추적 태그). [LINE Official Account Manager](https://manager.line.biz/)에서 만들 수 있습니다. |
| 보낸 동영상을 시청한 사용자 | 동영상 시청 오디언스. [LINE Ad Manager](https://admanager.line.biz/)에서 만들 수 있습니다. |
| 앱 내에서 특정 이벤트(예: 앱 실행, 앱 내 구매)에 참여한 사용자 | 앱 이벤트 오디언스. [LINE Ad Manager](https://admanager.line.biz/)에서 만들 수 있습니다. |
| 보낸 이미지를 클릭한 사용자 | 이미지 클릭 오디언스. [LINE Ad Manager](https://admanager.line.biz/)에서 만들 수 있습니다. |
| [비콘 배너](https://developers.line.biz/en/docs/messaging-api/using-beacons/#beacon-banner)를 본 사용자 | LINE 비콘 네트워크 광고 노출 오디언스. [LINE Ad Manager](https://admanager.line.biz/)에서 만들 수 있습니다. LINE 비콘 네트워크 광고 노출 오디언스는 대만 사용자가 만든 LINE 공식 계정에서만 사용할 수 있습니다. |

<!-- note start -->

**참고**

다음 유형의 오디언스는 Messaging API로 만들 수 없습니다.

- 채팅 태그 오디언스
- 친구 경로 오디언스
- 예약 오디언스
- 리치 메뉴 노출 오디언스
- 리치 메뉴 클릭 오디언스
- 웹 트래픽 오디언스(LINE 태그)
- 웹 트래픽 오디언스(추적 태그)
- 앱 이벤트 오디언스
- 동영상 시청 오디언스
- 이미지 클릭 오디언스
- LINE 비콘 네트워크 광고 노출 오디언스

<!-- note end -->

오디언스를 만든 후에는 아래 지침에 따라 메시지를 받을 준비가 되었는지 확인하십시오.

#### 오디언스를 전송에 사용할 수 있는지 확인하기 

오디언스는 백그라운드에서 비동기로 만들어집니다. 오디언스에 내로캐스트 메시지를 보내기 전에 오디언스의 상태가 `READY`(메시지를 받을 준비가 됨)인지 확인하십시오.

다음 엔드포인트를 사용하여 오디언스의 상태를 확인할 수 있습니다.

```sh
curl -v -X GET https://api.line.me/v2/bot/audienceGroup/{audienceGroupId} \
-H 'Authorization: Bearer {channel access token}'
```

응답의 `audienceGroup.status` 속성이 `READY`(메시지를 받을 준비가 됨)이면 해당 오디언스에 내로캐스트 메시지를 보낼 수 있습니다.

다만 사용자 ID 업로드용 오디언스의 경우, `audienceGroup.status` 속성이 `READY`인 오디언스에 사용자 ID 또는 IFA를 추가해도 상태는 `READY`로 유지됩니다. 추가한 수신 대상을 포함한 사용자에게 메시지를 보내려면 해당 작업의 `jobs[].jobStatus` 속성이 `FINISHED`인지 확인하십시오.

오디언스 상태를 확인하는 방법에 대한 자세한 내용은 Messaging API 레퍼런스의 [오디언스 데이터 조회](https://developers.line.biz/en/reference/messaging-api/#get-audience-group)를 참고하십시오.

### 내로캐스트 메시지 전송 시작하기 

내로캐스트 메시지를 보낼 때 다음 객체를 조합하여 수신 대상을 좁힐 수 있습니다.

- [수신자 객체](https://developers.line.biz/en/docs/messaging-api/sending-messages/#recipient-object)
  - [오디언스 객체](https://developers.line.biz/en/docs/messaging-api/sending-messages/#audience-object)
  - [재전송 객체](https://developers.line.biz/en/docs/messaging-api/sending-messages/#redelivery-object)
- [인구 통계 필터 객체](https://developers.line.biz/en/docs/messaging-api/sending-messages/#demographic-filter-object)
- [연산자 객체](https://developers.line.biz/en/docs/messaging-api/sending-messages/#operator-object)
- [제한 객체](https://developers.line.biz/en/docs/messaging-api/sending-messages/#limit-object)

예를 들어 두 오디언스에 속한 여성 중 15~20세가 아닌 사용자를 수신 대상으로 지정할 수 있습니다. 객체들은 논리 연산자(AND, OR, NOT)로 조합할 수 있습니다.

![](https://developers.line.biz/media/messaging-api/narrowcast-message/narrow_cast.png)

보낼 수 있는 메시지 수에는 월별 한도가 있습니다. 한도를 초과하여 보내려고 하면 전송이 실패합니다. 발송 메시지 수를 한도 이내로 유지하려면 `limit.upToRemainingQuota` 속성을 `true`로 설정하십시오. 보낼 수 있는 메시지의 최대 수에 대한 자세한 내용은 [Messaging API 요금](https://developers.line.biz/en/docs/messaging-api/pricing/)을 참고하십시오.

<!-- note start -->

**내로캐스트 메시지 전송이 완료될 때까지 다른 메시지가 전송되지 않을 수 있습니다**

내로캐스트 메시지를 보내면, 실제 전송 수와 관계없이 그 달에 예약할 수 있는 메시지의 대략적인 한도에 도달할 수 있습니다. 대략적인 한도에 도달하면 한도를 넘을 수 없으므로 내로캐스트 메시지 전송이 완료될 때까지 기다려야 합니다. 이 상태에서 다른 메시지를 보내려고 하면 `You have reached your monthly limit.`이 반환되고 메시지 전송이 실패합니다.

자세한 내용은 Messaging API 레퍼런스의 [이번 달 남은 발송 가능 메시지 수에 대한 참고 사항](https://developers.line.biz/en/reference/messaging-api/#send-narrowcast-message-cautions)을 참고하십시오.

<!-- note end -->

#### 수신자 객체 

내로캐스트 메시지를 보낼 때는 요청 본문의 `messages` 속성에 메시지 내용을, `recipient` 속성에 메시지 대상을 지정하십시오. `recipient` 속성을 지정하지 않으면 LINE 공식 계정을 친구로 추가한 모든 사용자가 수신자가 됩니다.

`recipient` 속성에는 [오디언스 객체](https://developers.line.biz/en/docs/messaging-api/sending-messages/#audience-object) 또는 [재전송 객체](https://developers.line.biz/en/docs/messaging-api/sending-messages/#redelivery-object)를 지정할 수 있습니다.

##### 오디언스 객체 

오디언스에 내로캐스트 메시지를 보내려면 요청 본문의 `recipient` 속성을 오디언스 객체로 설정하십시오. 오디언스 객체를 만들려면 객체에 `type` 속성은 `"audience"`로, `audienceGroupId` 속성은 오디언스 ID로 지정하십시오. 오디언스가 없다면 [오디언스 관리](https://developers.line.biz/en/reference/messaging-api/#manage-audience-group) API로 만드십시오.

오디언스 객체의 예시는 다음과 같습니다.

```json
{
  "type": "audience",
  "audienceGroupId": 5614991017776
}
```

##### 재전송 객체 

이전에 내로캐스트 메시지를 받은 사용자에게 내로캐스트 메시지를 보내려면 요청 본문의 `recipient` 속성을 재전송 객체로 설정하십시오. 재전송 객체는 `type` 속성을 `"redelivery"`로 설정합니다. `requestId` 속성에는 내로캐스트 메시지를 보낼 때 받은 요청 ID(`X-Line-Request-Id`)를 설정하십시오.

재전송 객체의 예시는 다음과 같습니다.

```json
{
  "type": "redelivery",
  "requestId": "5b59509c-c57b-11e9-aa8c-2a2ae2dbcce4"
}
```

![Interactive SVG](https://developers.line.biz/media/news/redeliver-narrowcast-en.svg)

<!-- note start -->

**"There weren't enough recipients" 오류**

재전송 객체로 이전에 보낸 메시지의 요청 ID를 지정하여 메시지를 보내려 했는데 `errorCode`가 `2`(수신자가 충분하지 않아 오류가 발생했음을 의미합니다)로 반환되는 경우, 다음과 같은 원인이 있을 수 있습니다.

- 참조한 내로캐스트 메시지를 받은 후 일부 사용자가 LINE 공식 계정을 차단하여 이전 수신 대상의 수가 줄어든 경우
- [연산자](https://developers.line.biz/en/docs/messaging-api/sending-messages/#operator-object)(AND 또는 NOT)를 사용하여 다른 오디언스 객체나 인구 통계 필터 객체와 조합함으로써 수신 대상을 좁혀서 수신 대상의 수가 줄어든 경우

사용자의 속성을 추측할 수 없도록, 수신자 수가 필요한 최소 인원보다 적으면 내로캐스트 메시지를 보낼 수 없습니다. 자세한 내용은 [속성 및 오디언스를 사용한 메시지 전송의 제한 사항](https://developers.line.biz/en/reference/messaging-api/#send-narrowcast-message-restrictions)을 참고하십시오.

<!-- note end -->

오디언스 객체와 재전송 객체에 대한 자세한 내용은 Messaging API 레퍼런스의 [수신자 객체](https://developers.line.biz/en/reference/messaging-api/#narrowcast-recipient)를 참고하십시오.

#### 인구 통계 필터 객체 

인구 통계 필터 객체(`filter.demographic` 속성)를 지정하면 사용자의 속성(성별, 연령, OS 유형, 지역 등)에 따라 메시지를 세분화하여 보낼 수 있습니다.

성별로 필터링하는 인구 통계 필터 객체의 예시는 다음과 같습니다.

```json
{
  "type": "gender",
  "oneOf": ["male", "female"]
}
```

자세한 내용은 Messaging API 레퍼런스의 [인구 통계 필터 객체](https://developers.line.biz/en/reference/messaging-api/#narrowcast-demographic-filter)를 참고하십시오.

#### 연산자 객체 

연산자 객체의 교집합(AND), 합집합(OR), 차집합(NOT)을 사용하면 수신자 객체와 인구 통계 필터 객체의 여러 조건을 조합하여 수신 대상을 지정할 수 있습니다.

![](https://developers.line.biz/media/messaging-api/narrowcast-message/operator_object.png)

연산자 객체로 수신 대상을 지정한 수신자 객체의 예시는 다음과 같습니다.

```json
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
                "type": "redelivery",
                "requestId": "5b59509c-c57b-11e9-aa8c-2a2ae2dbcce4"
            }
        }
    ]
}
```

<!-- tip start -->

**연산자 객체를 사용하여 중첩 구조로 수신 대상을 지정할 수 있습니다**

연산자 객체를 사용하면 수신자 객체와 인구 통계 필터 객체를 중첩하여 수신 대상을 지정할 수 있습니다. 연산자 객체는 중첩이 가장 깊은 단계부터 먼저 적용됩니다.

이 다이어그램의 수신 대상은 "**A, B, E에 해당하지만 C와 D에는 해당하지 않는 사용자**(`AudienceA AND AudienceB AND NOT (AudienceC AND Audience D) AND Audience E`)"로 해석됩니다.

![](https://developers.line.biz/media/messaging-api/narrowcast-message/operator_object_nest_sample.png)

```json
{
    "type": "operator",
    "and": [
        {
            "type": "audience",
            "audienceGroupId": AudienceA
        },
        {
            "type": "audience",
            "audienceGroupId": AudienceB
        },
        {
            "type": "operator",
            "not": {
                "type": "operator",
                "and": [
                    {
                       "type": "audience",
                       "audienceGroupId": AudienceC
                    },
                    {
                       "type": "audience",
                       "audienceGroupId": AudienceD
                    },
                 ]
            }
        },
        {
            "type": "audience",
            "audienceGroupId": AudienceE
        },
    ]
}
```

<!-- tip end -->

#### 제한 객체 

제한 객체를 설정하여 내로캐스트 메시지의 최대 전송 수를 제한할 수 있습니다. 수신자를 제한하는 경우에는 수신자가 무작위로 선택됩니다.

제한 객체의 예시는 다음과 같습니다.

```json
{
  "max": 100,
  "upToRemainingQuota": true,
  "forbidPartialDelivery": true
}
```

자세한 내용은 Messaging API 레퍼런스의 [제한 객체](https://developers.line.biz/en/reference/messaging-api/#send-narrowcast-limit)를 참고하십시오.

##### 제한 객체로 최대 전송 메시지 수 제어하기 

다음은 제한 객체를 사용하여 최대 전송 수를 제어하는 예시입니다.

| 조건 \* | 도달 대상: 100<br>월간 한도: 90<br>수신 대상: 80 | 도달 대상: 100<br>월간 한도: 50<br>수신 대상: 80 |
| --- | --- | --- |
| 제한 객체를 지정하지 않음 | ❌ 요청 오류<br>(도달 대상이 월간 한도를 초과함) | ❌ 요청 오류<br>(도달 대상이 월간 한도를 초과함) |
| `max` 미지정<br>`upToRemainingQuota`=`true`<br>`forbidPartialDelivery`=`false` | ✅ 모든 수신자에게 전송 | ✅ 월간 한도 이내인 50명에게 전송 |
| `max` 미지정<br>`upToRemainingQuota`=`true`<br>`forbidPartialDelivery`=`true` | ✅ 모든 수신자에게 전송 | ❌ 부분 전송으로 인해 전송이 취소됨 |
| `max`=30<br>`upToRemainingQuota`=`true`<br>`forbidPartialDelivery`=`false` | ✅ `max` 값과 같은 30명에게 전송 | ✅ `max` 값과 같은 30명에게 전송 |
| `max`=30<br>`upToRemainingQuota`=`true`<br>`forbidPartialDelivery`=`true` | ❌ 부분 전송으로 인해 전송이 취소됨 | ❌ 부분 전송으로 인해 전송이 취소됨 |

\* 조건에 사용된 용어의 설명은 다음과 같습니다.

- 도달 대상: 메시지를 통해 도달할 수 있는 사용자 수입니다.
- 월간 한도: 이번 달에 보낼 수 있는 메시지 수의 추정 상한입니다. 자세한 내용은 Messaging API 레퍼런스의 [이번 달 메시지 전송 대상 한도 조회](https://developers.line.biz/en/reference/messaging-api/#get-quota)를 참고하십시오.
- 수신 대상: 속성(나이, 성별, OS, 지역 등) 또는 리타겟팅(오디언스)으로 필터링된 수신자입니다.

### 내로캐스트 메시지 전송 요청 예시 

다음 조건을 만족하는 사용자에게 내로캐스트 메시지를 보내려고 한다고 가정하겠습니다.

- 오디언스(오디언스 ID: `5614991017776`)에 속한 사용자
- 내로캐스트 메시지를 받은 적이 없는 사용자(요청 ID: `5b59509c-c57b-11e9-aa8c-2a2ae2dbcce4`)
- 나이가 20~25세인 남성 또는 여성
- 아키타현 또는 아이치현에 거주하는 사용자
- 이 예시의 LINE 공식 계정을 7~30일 동안 친구로 유지한 사용자
- 35~40세 여성(남성 제외)

위에서 지정한 수신 대상에게 내로캐스트 메시지를 보내는 요청 예시는 다음과 같습니다.

```sh
curl -v -X POST https://api.line.me/v2/bot/message/narrowcast \
-H 'Authorization: Bearer {channel access token}' \
-H 'Content-Type: application/json' \
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
                    "type": "redelivery",
                    "requestId": "5b59509c-c57b-11e9-aa8c-2a2ae2dbcce4"
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

자세한 내용은 Messaging API 레퍼런스의 [내로캐스트 메시지 전송](https://developers.line.biz/en/reference/messaging-api/#send-narrowcast-message)을 참고하십시오.

### 내로캐스트 메시지의 상태 확인하기 

내로캐스트 메시지는 백그라운드에서 비동기로 전송됩니다. 내로캐스트 메시지가 성공적으로 전송되었는지 확인하려면 아래 예시와 같이 [내로캐스트 메시지 상태 조회](https://developers.line.biz/en/reference/messaging-api/#get-narrowcast-progress-status) 엔드포인트를 호출하십시오.

```sh
curl -v -X GET 'https://api.line.me/v2/bot/message/progress/narrowcast?requestId={request_id}' \
-H 'Authorization: Bearer {channel access token}'
```

## 인용 메시지 보내기 

Messaging API를 사용하여 과거 메시지를 인용하는 메시지를 보낼 수 있습니다.

![](https://developers.line.biz/media/messaging-api/sending-messages/quote-message.webp)

과거 메시지를 인용하는 메시지를 보내려면 인용할 메시지의 인용 토큰(`quoteToken`)을 지정하십시오. 인용 토큰을 가져오는 방법에 대한 자세한 내용은 [인용 토큰 가져오기](https://developers.line.biz/en/docs/messaging-api/get-quote-tokens/)를 참고하십시오.

**과거 메시지를 인용하는 푸시 메시지 요청 예시**

```sh
curl -v -X POST https://api.line.me/v2/bot/message/push \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer {channel access token}' \
-d '{
  "to": "U4af4980629...",
  "messages": [
    {
      "type": "text",
      "text": "Yes, you can.",
      "quoteToken": "yHAz4Ua2wx7..." // 인용할 메시지의 인용 토큰을 지정합니다
    }
  ]
}'
```

인용할 메시지의 전송이 취소되었거나 기기에서 과거 채팅 기록이 삭제된 경우, 인용된 메시지는 표시되지 않습니다.

![인용할 메시지가 존재하지 않으면 "Message unavailable."로 표시됩니다.](https://developers.line.biz/media/messaging-api/sending-messages/delete-quoted-message-en.png)

인용 토큰은 다음 엔드포인트에서만 사용해 메시지를 보낼 수 있습니다.

- [응답 메시지 전송](https://developers.line.biz/en/reference/messaging-api/#send-reply-message)
- [푸시 메시지 전송](https://developers.line.biz/en/reference/messaging-api/#send-push-message)

또한 인용 토큰을 사용하여 메시지를 보낼 때는 다음 메시지 객체만 사용할 수 있습니다.

- [텍스트 메시지](https://developers.line.biz/en/docs/messaging-api/message-types/#text-messages)
- [텍스트 메시지(v2)](https://developers.line.biz/en/docs/messaging-api/message-types/#text-messages-v2)
- [스티커 메시지](https://developers.line.biz/en/docs/messaging-api/message-types/#sticker-messages)
