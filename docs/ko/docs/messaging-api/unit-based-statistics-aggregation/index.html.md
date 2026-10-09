# 발송한 메시지의 통계 조회하기

Messaging API를 사용하면 LINE 공식 계정에서 발송한 메시지에 대해 사용자가 어떻게 반응했는지 통계를 조회할 수 있습니다. 통계를 조회하는 방법은 발송하는 메시지 유형에 따라 다릅니다.

- [모든 친구 또는 오디언스나 속성으로 선택한 친구에게 보낸 메시지의 통계](https://developers.line.biz/en/docs/messaging-api/unit-based-statistics-aggregation/#get-statistics-on-narrowcast-or-broadcast)
  - 브로드캐스트 메시지
  - 나로우캐스트 메시지
- [특정 친구, 그룹 채팅 또는 전화번호를 지정하여 보낸 메시지의 통계](https://developers.line.biz/en/docs/messaging-api/unit-based-statistics-aggregation/#get-statistics-on-push-multicast-or-line-notification-messages)
  - 푸시 메시지
  - 멀티캐스트 메시지
  - LINE 알림 메시지

## 모든 친구 또는 오디언스나 속성으로 선택한 친구에게 보낸 메시지의 통계 

[나로우캐스트 메시지](https://developers.line.biz/en/reference/messaging-api/#send-narrowcast-message) 또는 [브로드캐스트 메시지](https://developers.line.biz/en/reference/messaging-api/#send-broadcast-message)에 대해 발송 요청 단위로 사용자가 어떻게 상호작용했는지 통계를 조회할 수 있습니다. 자세한 내용은 Messaging API 레퍼런스의 [사용자 상호작용 통계 조회](https://developers.line.biz/en/reference/messaging-api/#get-message-event)를 참고하세요.

## 특정 친구, 그룹 채팅 또는 전화번호를 지정하여 보낸 메시지의 통계 

[푸시 메시지](https://developers.line.biz/en/reference/messaging-api/#send-push-message), [멀티캐스트 메시지](https://developers.line.biz/en/reference/messaging-api/#send-multicast-message), 또는 [LINE 알림 메시지](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/overview/)에 대해 사용자가 어떻게 상호작용했는지 단위별로 통계를 조회할 수 있습니다.

일반적으로 사용자 개인정보 보호를 위해 푸시 메시지, 멀티캐스트 메시지, LINE 알림 메시지에서 사용자가 메시지를 열거나 URL을 탭하는 등의 행동에 대한 통계는 조회할 수 없습니다. 다만 사용자가 정의한 단위로 집계하고 개인을 식별할 수 없도록 하면 통계를 조회할 수 있습니다.

<!-- tip start -->

**LINE 알림 메시지의 단위 이름 지정**

Messaging API로 보내는 푸시 메시지와 멀티캐스트 메시지뿐만 아니라, 법인 사용자를 위한 옵션인 LINE 알림 메시지를 보낼 때도 단위 이름을 지정할 수 있습니다. 자세한 내용은 LINE 알림 메시지 문서의 [LINE 알림 메시지 통계 조회](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/statistics/)를 참고하세요.

<!-- tip end -->

아래와 같이 메시지를 보낼 때 단위 이름을 지정하면 단위별로 통계를 조회할 수 있습니다.

![](https://developers.line.biz/media/news/customAggregationUnits_en.png)

### 단위별 통계 

메시지에 대해 단위별로 다음 통계를 조회할 수 있습니다.

- 메시지를 연 사용자 수
- 메시지 안의 URL을 한 번이라도 연 사용자 수
- 메시지 안의 동영상 또는 오디오 재생을 시작한 사용자 수

메시지 통계를 조회하면 사용자가 발송한 메시지에 대해 어떤 행동을 했는지 확인할 수 있습니다. 이러한 통계를 활용하면 다음과 같은 정보를 확인할 수 있습니다.

**조회한 통계를 활용한 예시**

| 수신자 수 | 열람 수 | 열람률 | URL 탭 수 | URL 탭률 |
| --- | --- | --- | --- | --- |
| 500 | 433 | 87% | 323 | 65% |

#### 집계 통계에 관한 참고 사항 

통계 데이터에는 일부 오차가 포함될 수 있습니다. 사용자의 개인정보를 보호하기 위해 다음의 경우 사용자 상호작용과 관련된 일부 속성 값이 `null`로 표시됩니다.

- 집계된 통계 값이 20 미만인 경우
- 집계된 통계 값이 20 이상이더라도 실제로 이벤트를 발생시킨 사용자 수가 20 미만인 경우
  - 예를 들어 동영상 재생 횟수가 30회이지만 동영상을 재생한 사용자 수가 15명이면 두 값 모두 `null`로 표시됩니다.

[단위별 통계 조회](https://developers.line.biz/en/reference/messaging-api/#get-statistics-per-unit) 엔드포인트의 응답에는 발송한 메시지 수와 수신자 수가 포함되지 않습니다. 또한 `overview.uniqueImpression`은 집계 기간 동안 메시지를 한 번이라도 연 고유 사용자 수입니다. 따라서 이 응답만으로는 발송한 메시지 수를 분모로 하는 열람률이나 수신자 수를 분모로 하는 도달률을 계산할 수 없습니다.

### 단위 이름 지정하기 

통계를 조회하려면 푸시 메시지, 멀티캐스트 메시지, 또는 LINE 알림 메시지를 보낼 때 집계 단위 이름을 지정해야 합니다. 요청 본문의 `customAggregationUnits` 속성에 이름을 지정합니다. 메시지를 보낼 때 지정할 수 있는 단위 이름은 하나뿐입니다. 푸시 메시지 또는 멀티캐스트 메시지 발송 사양은 Messaging API 레퍼런스의 [메시지](https://developers.line.biz/en/reference/messaging-api/#messages)를 참고하세요.

다음은 푸시 메시지에 `promotion_a`라는 집계 단위 이름을 지정하는 요청 예시입니다.

```sh
curl -v -X POST https://api.line.me/v2/bot/message/push \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer {channel access token}' \
-d '{
    "to": "U4af4980629...",
    "messages":[
        {
            "type": "text",
            "text": "Hello, world1"
        }
    ],
    "customAggregationUnits": [
        "promotion_a"
    ]
}'
```

<!-- tip start -->

**나중에 단위 이름을 지정하거나 변경하기**

메시지를 보낸 후에는 단위 이름을 지정하거나 변경할 수 없습니다.

<!-- tip end -->

#### 단위 이름 유형의 최대 개수 

이번 달(매월 1일부터 말일까지) 메시지를 보낼 때 지정할 수 있는 서로 다른 단위 이름은 최대 1,000개입니다.

예를 들어 3월에 `promotion_0001`부터 `promotion_1000`까지 1,000개의 단위 이름 유형으로 메시지를 보냈다면, 다음 달인 4월에도 같은 1,000개의 단위 이름 유형인 `promotion_0001`부터 `promotion_1000`까지로 메시지를 보낼 수 있습니다. 4월에는 `promotion_1001`부터 `promotion_2000`까지 새로운 1,000개의 단위 이름 유형으로도 메시지를 보낼 수 있습니다.

참고로 1,001번째 이상의 단위 이름 유형으로 메시지를 보내면 메시지 자체는 발송되지만 해당 단위 이름은 지정되지 않습니다. 예를 들어 `promotion_0001`부터 `promotion_1500`까지 1,500개의 단위 이름 유형으로 메시지를 보내면 `promotion_1001` 이후의 단위 이름은 메시지에 지정되지 않습니다.

단위 이름 유형이 많은 경우에는 다음 방법 중 하나로 단위 이름이 지정될 수 있는지, 또는 지정되었는지 확인하세요.

- 메시지를 보내기 전에 [이번 달에 지정된 단위 이름 유형 수 조회](https://developers.line.biz/en/reference/messaging-api/#get-the-number-of-unit-name-types-assigned-during-this-month) 엔드포인트를 사용하여 이번 달 단위 이름 수가 아직 1,000개에 도달하지 않았는지 확인합니다.
- 메시지를 보낸 후에는 [이번 달에 지정된 단위 이름 목록 조회](https://developers.line.biz/en/reference/messaging-api/#get-a-list-of-unit-names-assigned-during-this-month) 엔드포인트를 사용하여 지정한 단위 이름이 존재하는지 확인합니다.

같은 단위 이름으로 보낸 푸시 메시지, 멀티캐스트 메시지, LINE 알림 메시지(템플릿), LINE 알림 메시지(플렉시블)의 통계는 함께 집계됩니다. 이번 달의 단위 이름 유형 수는 이 모든 발송 방법에 걸쳐 고유한 단위 이름의 개수로 계산됩니다.

<!-- tip start -->

**단위 이름 제한에 관하여**

단위 이름을 지정할 때 "이번 달 최대 1,000개의 단위 이름 유형"이라는 제한이 있습니다. 하지만 메시지를 보낸 후 [단위별 통계](https://developers.line.biz/en/docs/messaging-api/unit-based-statistics-aggregation/#get-statistics-per-unit)를 조회하면 집계 기간 중 `from`부터 `to`까지 존재하는 모든 단위의 통계를 조회할 수 있습니다.

<!-- tip end -->

### 단위별 통계 조회하기 

[단위별 통계 조회](https://developers.line.biz/en/reference/messaging-api/#get-statistics-per-unit) 엔드포인트를 사용하면 단위 이름과 함께 보낸 메시지의 사용자 상호작용 통계를 조회할 수 있습니다. 다음은 `promotion_a`라는 단위의 통계를 조회하는 요청 예시입니다.

```sh
curl -v -X GET https://api.line.me/v2/bot/insight/message/event/aggregation \
-H 'Authorization: Bearer {channel access token}' \
--data-urlencode 'customAggregationUnit=promotion_a' \
--data-urlencode 'from=20210301' \
--data-urlencode 'to=20210331' \
-G
```

또한 [이번 달에 지정된 단위 이름 목록 조회](https://developers.line.biz/en/reference/messaging-api/#get-a-list-of-unit-names-assigned-during-this-month) 엔드포인트를 사용하면 이번 달에 지정된 단위 이름 목록을 조회할 수 있습니다. 이번 달 이전에 지정된 단위 이름을 확인하는 엔드포인트는 없습니다.

### URL이 포함된 메시지의 통계 조회 예시 

다음은 URL이 포함된 메시지의 단위별 통계를 조회하는 단계입니다.

#### 1. 단위 이름을 지정하여 메시지 보내기 

먼저 같은 내용의 메시지를 여러 사용자에게 보냅니다.

![](https://developers.line.biz/media/messaging-api/insight/new-item-message-example-en.png)

멀티캐스트 메시지를 사용하여 150명의 사용자에게 메시지를 보낸다고 가정해 보겠습니다. 이때 단위 이름은 `customAggregationUnits` 속성에 지정합니다.

```sh
curl -v -X POST https://api.line.me/v2/bot/message/multicast \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer {channel access token}' \
-d '{
    "to": ["U4af4980629...","U0c229f96c4...",...], // 150 user IDs
    "messages":[
        {
            "type": "text",
            "text": "🆕 Our new product is available now!\nhttps://example.com/new-item/"
        }
    ],
    "customAggregationUnits": [
        "new-item-message-yyyymmdd"
    ]
}'
```

#### 2. 통계 조회 및 집계하기 

단위별 통계를 조회하려면 메시지를 보낸 후 며칠 기다리세요.

```sh
curl -v -X GET https://api.line.me/v2/bot/insight/message/event/aggregation \
-H 'Authorization: Bearer {channel access token}' \
--data-urlencode 'customAggregationUnit=new-item-message-yyyymmdd' \
--data-urlencode 'from=20210301' \
--data-urlencode 'to=20210331' \
-G
```

이 예시에서는 다음과 같은 통계를 얻을 수 있습니다.

```json
{
  "overview": {
    "uniqueImpression": 111,
    "uniqueClick": 74,
    "uniqueMediaPlayed": null,
    "uniqueMediaPlayed100Percent": null
  },
  "messages": [
    {
      "seq": 1,
      "impression": 111,
      "uniqueImpression": 111,
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
      "url": "https://example.com/new-item/",
      "click": 74,
      "uniqueClick": 74,
      "uniqueClickOfRequest": 74
    }
  ]
}
```

이 통계를 활용하면 메시지 열람률, URL 탭률 등을 확인할 수 있습니다.

| 수신자 수 | 열람 수 | 열람률 | URL 탭 수 | URL 탭률 |
| --- | --- | --- | --- | --- |
| 150 | 111 | 74% | 74 | 67% |
