# 법인 고객 공지

법인 고객 공지입니다. [뉴스](https://developers.line.biz/en/news/)도 함께 확인해 주십시오.

2026/09/16

## LINE 알림 메시지의 단위별 통계를 가져올 수 있게 되었습니다 

이제 LINE 알림 메시지(템플릿)와 LINE 알림 메시지(유연형)에 대해 단위별 통계를 가져올 수 있습니다. LINE 알림 메시지를 보낼 때 `customAggregationUnits` 속성에 단위 이름을 지정한 다음, [단위별 통계 가져오기](https://developers.line.biz/en/reference/messaging-api/#get-statistics-per-unit) 엔드포인트를 사용하면 같은 단위 이름으로 보낸 메시지의 통계를 가져올 수 있습니다.

자세한 내용은 LINE 알림 메시지 문서의 [LINE 알림 메시지 통계 가져오기](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/statistics/)를 참조해 주십시오.

2026/05/18

## Mark as read API(이전 버전)의 신규 신청 접수를 2026년 10월 말에 종료합니다 

[Mark as read API(이전 버전)](https://developers.line.biz/en/docs/partner-docs/mark-as-read/)의 신규 신청 접수를 2026년 10월 말에 종료합니다. 현재 Mark as read API(이전 버전)를 사용 중인 LINE 공식 계정은 신규 신청 접수가 종료된 이후에도 계속 사용할 수 있습니다.

Mark as read API(이전 버전)의 지원 종료를 검토하고 있습니다. Mark as read API(이전 버전)를 포함한 시스템을 운영 중이라면, Messaging API의 [Mark messages as read](https://developers.line.biz/en/reference/messaging-api/#mark-as-read) 엔드포인트로 전환하는 것을 고려해 주십시오. "Mark messages as read" 엔드포인트는 별도의 신청이 필요 없으며 채팅 기능과 함께 사용할 수 있습니다.

2026/02/19

## 미션 스티커 API의 일부 오류 응답이 변경되었습니다 

사용자 속성 정보를 유추할 수 없도록 미션 스티커 API의 [미션 스티커를 사용자에게 제공](https://developers.line.biz/en/reference/partner-docs/#send-mission-stickers-v3) 엔드포인트에서 일부 오류 응답의 내용을 변경했습니다.

자세한 내용은 미션 스티커를 사용자에게 제공하는 엔드포인트의 [오류 메시지](https://developers.line.biz/en/reference/partner-docs/#send-mission-stickers-v3-error-messages) 섹션을 참조해 주십시오.

2025/06/30

## 웹훅 오류 알림 이메일의 제목과 본문이 변경되었습니다 

2025년 6월 30일부터 웹훅 오류 알림 이메일의 제목과 본문을 업데이트했습니다.

자세한 내용은 [알림 이메일 예시](https://developers.line.biz/en/docs/partner-docs/error-notification/#sample-mail)를 참조해 주십시오.

2025/06/18

## LINE 알림 메시지가 "중요한 알림"으로 표시됩니다 

LINE 알림 메시지는 다른 메시지와 구분하기 위해 LINE 공식 계정 아이콘 오른쪽에 "Important notification"이 표시되도록 변경되었습니다.

![LINE 알림 메시지는 아이콘 오른쪽에 "Important notification"이 표시됩니다](https://developers.line.biz/media/line-notification-message/notification-messages-important-en.webp)

자세한 내용은 LINE 알림 메시지 문서의 [다른 메시지와의 표시 차이](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/overview/#difference-from-other-messages)를 참조해 주십시오.

2025/06/18

## 미션 스티커 API의 엔드포인트 이름을 변경했습니다 

이해하기 쉽도록 미션 스티커 API의 "Send mission stickers (v3)" 엔드포인트 이름을 변경했습니다. 기능은 변경되지 않았습니다.

| 변경 전 이름 | 변경 후 이름(현재) |
| -------------------------- | ------------------------------------- |
| Send mission stickers (v3) | Provide mission stickers to the users |

자세한 내용은 법인 고객용 API 레퍼런스의 [Mission Sticker API](https://developers.line.biz/en/reference/partner-docs/#mission-stickers)를 참조해 주십시오.

2025/06/02

## LINE 알림 메시지(템플릿)를 사용할 수 있게 되었습니다 

미리 준비된 템플릿, 항목 등을 조합하여 간편하게 메시지를 만들 수 있는 "[LINE 알림 메시지(템플릿)](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/template/)" 기능이 추가되었습니다.

이에 따라 기존의 UX 심사가 필요한 "LINE 알림 메시지"의 이름을 "LINE 알림 메시지(유연형)"으로 변경했습니다.

자세한 내용은 [LINE 알림 메시지 개요](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/overview/)를 참조해 주십시오.

2025/01/28

## LINE 알림 메시지의 웹훅 이벤트에서 source 속성이 삭제되었습니다 

[2024년 8월 9일](https://developers.line.biz/en/docs/partner-docs/notice/#partner-news-20240809)에 안내한 대로, 2025년 1월 28일부터 LINE 알림 메시지의 [웹훅 발송 완료 이벤트](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/message-sending-complete-webhook-event/#receive-delivery-event)에서 `source` 속성이 삭제되었습니다.

지금까지는 LINE 알림 메시지 API에 요청하고 사용자에게 LINE 알림 메시지 발송이 완료되면, LINE 플랫폼은 봇 서버로 다음과 같은 웹훅 이벤트를 보냈습니다.

```json
{
  "destination": "Uc7472b39e21dab71c2347e02714630d6",
  "events": [
    {
      "type": "delivery",
      "delivery": {
        "data": "68df277462529930889fab80ecffdc0883906320591df93c25efc08300410fc2"
      },
      "webhookEventId": "01G17DAF0QJ7A3ERC5EJ9MAMH8",
      "deliveryContext": {
        "isRedelivery": false
      },
      "timestamp": 1650590038721,
      // 다음 source 속성이 삭제되었습니다
      "source": {
        "type": "user",
        "userId": "U8189cf6745fc0d808977bdb0b9f22995"
      },
      "mode": "active"
    }
  ]
}
```

위 웹훅 이벤트의 `source` 속성은 2025년 1월 28일부터 삭제되었습니다.

앞으로도 고객 서비스 개선을 위해 노력하겠습니다. 양해해 주셔서 감사합니다.

2024/10/18

## Quick-fill 문서를 추가했습니다 

Quick-fill은 LINE MINI App에서 **Auto-fill** 버튼을 탭하면 필요한 프로필 정보를 자동으로 채워 주는 기능입니다. LINE MINI App에서 사용자가 Account Center에 설정한 Common Profile 정보를 간편하게 사용할 수 있습니다.

![](https://developers.line.biz/media/line-mini-app/quick-fill/quick-fill-3-steps.webp)

LINE MINI App에 Quick-fill을 통합하면, 사용자는 한 번의 탭으로 주소나 전화번호를 자동으로 입력할 수 있습니다. 예를 들어 식당을 예약하거나 온라인 스토어에서 주문할 때 정보를 직접 입력하는 번거로움을 줄일 수 있습니다.

LY Corporation의 연락을 받은 일부 법인 고객만 Quick-fill 기능을 사용할 수 있습니다.

LINE MINI App에 Quick-fill을 통합하는 방법에 대한 자세한 내용은 [Quick-fill 개요](https://developers.line.biz/en/docs/partner-docs/quick-fill/overview/)를 참조해 주십시오.

2024/08/09

## 2025년 1월 28일부터 LINE 알림 메시지의 웹훅 이벤트에서 source 속성이 삭제됩니다 

2025년 1월 28일부터 LINE 알림 메시지의 [웹훅 발송 완료 이벤트](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/message-sending-complete-webhook-event/#receive-delivery-event)에서 `source` 속성이 삭제될 예정입니다.

LINE 알림 메시지 API에 요청하고 사용자에게 LINE 알림 메시지 발송이 완료되면, LINE 플랫폼은 봇 서버로 다음과 같은 웹훅 이벤트를 보냅니다.

```json
{
  "destination": "Uc7472b39e21dab71c2347e02714630d6",
  "events": [
    {
      "type": "delivery",
      "delivery": {
        "data": "68df277462529930889fab80ecffdc0883906320591df93c25efc08300410fc2"
      },
      "webhookEventId": "01G17DAF0QJ7A3ERC5EJ9MAMH8",
      "deliveryContext": {
        "isRedelivery": false
      },
      "timestamp": 1650590038721,
      // 다음 source 속성이 삭제될 예정입니다
      "source": {
        "type": "user",
        "userId": "U8189cf6745fc0d808977bdb0b9f22995"
      },
      "mode": "active"
    }
  ]
}
```

위 웹훅 이벤트의 `source` 속성은 2025년 1월 28일부터 삭제됩니다. 속성 삭제 날짜와 시각은 예고 없이 변경될 수 있습니다.

앞으로도 고객 서비스 개선을 위해 노력하겠습니다. 양해해 주셔서 감사합니다.

2024/05/07

## 모듈 점검 안내 

2024년 6월 5일 오전 2시부터 오전 3시경(UTC+9)까지 모듈 점검이 예정되어 있습니다. 자세한 내용은 2024년 5월 7일 뉴스 [Messaging API, 모듈, LINE Developers Console 점검 안내](https://developers.line.biz/en/news/2024/05/07/maintenance-notice/)를 참조해 주십시오.

2024/04/26

## 웹훅 재전송이 중단되었을 때 알림 이메일이 발송됩니다 

Messaging API의 [오류 알림](https://developers.line.biz/en/docs/partner-docs/error-notification/) 기능에서, 웹훅 재전송이 중단되었을 때도 알림 이메일이 발송되도록 변경되었습니다.

Messaging API 채널 설정에서 [웹훅 재전송을 활성화](https://developers.line.biz/en/docs/messaging-api/receiving-messages/#enable-webhook-redelivery)하면, LINE 플랫폼은 봇 서버가 수신하지 못한 웹훅을 다시 보냅니다. 다만 일정 시간 동안 재전송을 시도한 후에도 서버에서 응답이 없으면 LINE 플랫폼은 재전송을 중단합니다.

이전에는 오류가 감지되면 LINE 플랫폼이 오류 알림 이메일을 한 번만 보냈습니다. 이번 변경으로 웹훅 재전송이 시작될 때와 중단될 때 모두 알림 이메일이 발송됩니다.

자세한 내용은 [LINE 플랫폼이 웹훅 재전송을 중단한 경우](https://developers.line.biz/en/docs/partner-docs/error-notification/#webhook-redelivery-stopped)를 참조해 주십시오.

2023/11/01

## 2023년 10월 31일부로 Audience Match API가 중단되었습니다 

[2023년 7월 18일](https://developers.line.biz/en/docs/partner-docs/notice/#partner-news-20230718)에 안내한 대로, 2023년 10월 31일부로 Audience Match API를 중단했습니다.

LY Corporation은 앞으로도 고객 서비스의 품질 향상을 위해 노력하겠습니다. 양해해 주셔서 감사합니다.

2023/08/31

## Stateless 채널 액세스 토큰이 출시되었습니다 

Stateless 채널 토큰은 15분 동안만 유효한 채널 토큰입니다. 발급할 수 있는 Stateless 채널 액세스 토큰의 수에는 제한이 없습니다. Stateless 채널 액세스 토큰은 예를 들어 Messaging API 채널이나 모듈 채널을 사용할 때 사용할 수 있습니다.

Stateless 채널 액세스 토큰에 대한 자세한 내용은 2023년 8월 31일 뉴스 [Stateless 채널 액세스 토큰 출시](https://developers.line.biz/en/news/2023/08/31/stateless-channel-access-token/)를 참조해 주십시오.

2023/07/18

## 2023년 10월 31일부로 전화번호를 사용한 메시지 발송 기능이 중단됩니다 

2023년 10월 31일부로 Audience Match API의 전화번호를 사용한 메시지 발송 기능을 더 이상 사용할 수 없습니다. Audience Match API도 중단될 예정입니다.

중단 후 관련 문서와 API 레퍼런스는 예고 없이 삭제될 수 있습니다.

### 대상 엔드포인트 

중단에 따라 다음 엔드포인트도 순차적으로 중단됩니다.

- [전화번호를 사용한 메시지 발송](https://developers.line.biz/en/reference/partner-docs/#phone-audience-match)
- [전화번호를 사용한 메시지 발송 결과 가져오기](https://developers.line.biz/en/reference/partner-docs/#get-phone-audience-match)

### 중단 예정일 

2023년 10월 31일

이 날짜는 예고 없이 변경될 수 있습니다.

LINE은 앞으로도 고객 서비스의 품질 향상을 위해 노력하겠습니다. 양해해 주셔서 감사합니다.

2023/05/31

## Send mission stickers (v2) 엔드포인트가 중단되었습니다 

[2023년 2월 2일](https://developers.line.biz/en/docs/partner-docs/notice/#partner-news-20230202)에 안내한 대로, 2023년 5월 31일부로 Send mission stickers (v2) 엔드포인트를 중단했습니다. 앞으로는 [Send mission stickers (v3)](https://developers.line.biz/en/reference/partner-docs/#send-mission-stickers-v3) 엔드포인트를 사용해 주십시오.

2023/04/11

## 모듈 점검 안내 

2023년 5월 11일 오전 2시부터 오전 3시경(UTC+9)까지 모듈 점검이 예정되어 있습니다. 자세한 내용은 2023년 4월 11일 뉴스 [Messaging API, 모듈, LINE Developers Console 점검 안내](https://developers.line.biz/en/news/2023/04/11/messaging-api-module-and-console-maintenance/)를 참조해 주십시오.

2023/02/20

## Mark-as-Read API의 이름을 "Mark as read API"로 변경했습니다 

Mark-as-Read API의 이름을 "Mark as read API"로 변경했습니다. 기능은 변경되지 않았습니다.

| 언어 | 변경 전 이름 | 변경 후 이름 |
| -------- | ------------------ | ----------------- |
| 일본어 | Mark-as-Read API | 既読API |
| 영어 | Mark-as-Read API | Mark as read API |

Mark as read API에 대한 자세한 내용은 [Mark as read API](https://developers.line.biz/en/docs/partner-docs/mark-as-read/)를 참조해 주십시오.

2023/02/02

## Send mission stickers (v2) 엔드포인트는 2023년 5월 31일에 중단됩니다 

2023년 5월 31일에 Send mission stickers (v2) 엔드포인트를 중단합니다. 중단 후에는 [Send mission stickers (v3)](https://developers.line.biz/en/reference/partner-docs/#send-mission-stickers-v3) 엔드포인트를 사용해 주십시오.

중단 후 관련 문서와 API 레퍼런스는 예고 없이 삭제될 수 있습니다.

2022/12/20

## 모듈 레퍼런스 제공 방식 변경 안내 

이전에 PDF 파일로 제공하던 모듈 레퍼런스를 이제 LINE Developers 사이트의 문서로 제공합니다. 앞으로는 모듈에 대한 [문서](https://developers.line.biz/en/docs/partner-docs/#module)와 [API 레퍼런스](https://developers.line.biz/en/reference/partner-docs/#module)를 참조해 주십시오.

2022/09/28

## "단위별 통계 가져오기 기능"에 대한 안내 

"[단위별 통계 가져오기 기능](https://developers.line.biz/en/docs/messaging-api/unit-based-statistics-aggregation/)"이 Messaging API에 통합되었습니다.

자세한 내용은 2022년 9월 28일 뉴스 ["단위별 통계 가져오기 기능"이 Messaging API에서 사용 가능해졌습니다](https://developers.line.biz/en/news/2022/09/28/messaging-api-updated/)를 참조해 주십시오.

2022/08/23

## LINE API 정책 핸드북 출시 

LINE API 정책 핸드북을 이제 이용할 수 있습니다. 이 핸드북은 [LINE 공식 계정 이용 약관](https://terms2.line.me/official_account_terms_jp?country=JP&lang=en)과 [LINE 공식 계정 API 이용 약관](https://terms2.line.me/official_account_api_terms_jp?lang=ja&country=JP)(일본어만 제공)과 관련된 문서로, LINE API를 더 잘 이해하고 올바르게 사용할 수 있도록 돕기 위한 것입니다.

자세한 내용은 [LINE API 정책 핸드북](https://developers.line.biz/en/docs/partner-docs/api-policy-handbook/)을 참조해 주십시오.

2022/06/28

## LINE 알림 메시지 문서 출시 

LINE 알림 메시지는 사용자의 [사용자 ID](https://developers.line.biz/en/glossary/#user-id)를 몰라도 전화번호를 지정하여 메시지를 보낼 수 있는 서비스입니다. 사용자가 LINE 공식 계정을 친구로 추가하지 않았더라도 LINE 공식 계정에서 메시지를 보낼 수 있습니다.

이전에 공개된 LINE 알림 메시지 개요에 더해, [LINE 알림 메시지 API 기술 사양](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/technical-specs/)(일본어만 제공)과 [LINE 알림 메시지 API 레퍼런스](https://developers.line.biz/en/reference/line-notification-messages/)(일본어만 제공) 등의 문서가 공개되었습니다.

LINE 알림 메시지에 대한 자세한 내용은 [LINE 알림 메시지 개요](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/overview/)를 참조해 주십시오.

2022/03/24

## 모듈 문서 출시 

모듈을 사용하면 Messaging API 채널을 사용하지 않는 LINE 공식 계정에도 Messaging API를 이용한 고급 기능을 쉽게 추가할 수 있습니다. 이제 모듈 문서를 이용할 수 있습니다. 모듈에 대한 자세한 내용은 [모듈](https://developers.line.biz/en/docs/partner-docs/module/)을 참조해 주십시오.

2022/01/05

## IFA를 사용한 메시지 발송이 중단되었습니다 

[2021년 12월 1일](https://developers.line.biz/en/docs/partner-docs/notice/#partner-news-20211201)에 안내한 대로, Audience Match API의 IFA(Identifier for Advertisers)를 사용한 메시지 발송은 2021년 12월 말에 중단될 예정입니다.

LINE은 앞으로도 고객 서비스의 품질 향상을 위해 노력하겠습니다. 양해해 주셔서 감사합니다.

2021/12/06

## LINE 봇 개발 가이드라인 제공 방식 변경 안내 

이전에 PDF 파일로 제공하던 LINE 봇 개발 가이드라인을 이제 LINE Developers 사이트의 문서로 제공합니다. 또한 가이드라인의 이름을 [법인 고객을 위한 개발 가이드라인](https://developers.line.biz/en/docs/partner-docs/development-guidelines/)으로 변경했습니다. 앞으로는 이 문서를 참조해 주십시오.

2021/12/01

## IFA를 사용한 메시지 발송이 중단되었습니다 

2021년 12월 31일부로 Audience Match API의 IFA(Identifier for Advertisers)를 사용한 메시지 발송을 더 이상 사용할 수 없습니다.

중단 후 관련 문서와 API 레퍼런스는 예고 없이 삭제될 수 있습니다.

### 대상 엔드포인트 

중단에 따라 다음 엔드포인트도 순차적으로 중단됩니다.

- 모바일 광고 ID를 사용한 메시지 발송
- 모바일 광고 ID를 사용한 메시지 발송 결과 가져오기

### 중단 예정일 

2021년 12월 31일

이 날짜는 예고 없이 변경될 수 있습니다.

LINE은 앞으로도 고객 서비스의 품질 향상을 위해 노력하겠습니다. 양해해 주셔서 감사합니다.

2021/07/09

## "단위별 통계 가져오기" 문서 정정 

"[단위별 통계 가져오기](https://developers.line.biz/en/docs/messaging-api/unit-based-statistics-aggregation/)" API 레퍼런스에서 요청 본문 설명에 오류가 있었습니다. 이미 정정했으며, 이 오류로 불편을 드린 점 사과드립니다.

정정 전후의 차이는 다음 표를 참조해 주십시오.

- **메시지 발송 시 모든 집계 단위에 단위 이름을 할당**

  | 항목 | 잘못된 내용 | 올바른 내용 |
  | ------------------------------------------------ | --------- | ------- |
  | `customAggregationUnits`의 최대 글자 수 | 100 | 30 |

메시지 발송 시 최대 글자 수를 초과하는 집계 단위 이름을 지정하면 요청은 실패하지 않지만, 해당 메시지에는 단위 이름이 할당되지 않으니 유의해 주십시오.

2021/04/28

## 오류 알림 이메일의 제목이 변경됩니다 

<!-- note start -->

**2021년 5월 25일에 업데이트됨**

[변경 내용](https://developers.line.biz/en/docs/partner-docs/notice/#partner-news-20210428-01)과 [변경 예정일](https://developers.line.biz/en/docs/partner-docs/notice/#partner-news-20210428-02)을 업데이트했습니다.

<!-- note end -->

이 변경은 Messaging API의 기능으로 제공되는 [오류 알림](https://developers.line.biz/en/docs/partner-docs/error-notification/)에 대해 예정된 것입니다.

### 변경 내용 

[알림 이메일](https://developers.line.biz/en/docs/partner-docs/error-notification/#mail)의 제목을 다음과 같이 변경합니다. 또한 이해하기 쉽도록 이메일 본문의 일부 내용도 변경합니다.

| 항목 | 변경 전 | 변경 후 |
| --- | --- | --- |
| **제목** | Messaging API: Webhook transmission failed - `<Channel name>` | Messaging API: Your server did not return \[200 OK\] - `<Channel name>` |

`<Channel name>` 부분에는 대상 채널의 채널 이름이 표시됩니다.

### 변경 예정일 

2021년 5월 25일

자세한 내용은 법인 고객용 문서의 [오류 알림](https://developers.line.biz/en/docs/partner-docs/error-notification/)을 참조해 주십시오.

2021/03/10

## 단위별 통계 가져오기 기능을 출시했습니다 

이제 여러 push 메시지와 multicast 메시지에 대해 집계 단위별 통계를 가져올 수 있습니다. 메시지를 보내기 전에 단위 이름을 지정해 두면, 나중에 단위별 통계를 확인할 수 있습니다.

<!-- tip start -->

**단위별 통계 가져오기 기능은 언제 유용한가요?**

여러 사용자에게 narrowcast 또는 broadcast 메시지를 보낼 때, 요청 ID를 지정하여 해당 메시지의 [사용자 상호작용 통계](https://developers.line.biz/en/reference/messaging-api/#get-message-event)를 가져올 수 있습니다.

![사용자 상호작용 통계](https://developers.line.biz/media/news/old_statistics_en.png)

20명 미만의 사용자에게 메시지를 보내는 경우에는 사용자의 개인정보를 보호해야 하므로 통계를 가져올 수 없습니다. 하지만 새로 출시된 [단위별 통계 가져오기](https://developers.line.biz/en/docs/messaging-api/unit-based-statistics-aggregation/) 기능을 사용하면, 메시지를 보내기 전에 단위 이름을 지정하여 소수의 사용자에게 보내더라도 여러 메시지에 대한 단위별 통계를 가져올 수 있습니다.

![단위별 통계 집계](https://developers.line.biz/media/news/new_statistics_en.png)

<!-- tip end -->

자세한 내용은 법인 고객용 문서의 [단위별 통계 가져오기](https://developers.line.biz/en/docs/messaging-api/unit-based-statistics-aggregation/)를 참조해 주십시오.

2020/03/17

## 아이콘/닉네임 스위치 정보 

아이콘/닉네임 스위치가 Messaging API에 통합되었습니다.

자세한 내용은 "[LINE 공식 계정의 아이콘과 표시 이름을 변경할 수 있게 되었습니다(2020/3/17)](https://developers.line.biz/en/news/2020/03/17/icon-nickname-switch/)"를 참조해 주십시오.
