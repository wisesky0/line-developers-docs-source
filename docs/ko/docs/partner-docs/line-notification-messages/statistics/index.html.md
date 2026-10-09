# LINE 알림 메시지 통계 가져오기

<!-- note start -->

**선택 기능을 사용하려면 신청이 필요합니다**

필요한 신청서를 제출한 법인 사용자만 이 문서에 설명된 기능을 사용할 수 있습니다. LINE 공식 계정에서 이러한 기능을 사용하려면 영업 담당자 또는 [영업 파트너](https://www.lycbiz.com/jp/partner/sales/)에게 문의해 주십시오.

<!-- note end -->

## 개요 

LINE 알림 메시지(템플릿)와 LINE 알림 메시지(유연형)는 메시지를 보낼 때 단위 이름을 지정하여 단위별 통계를 가져올 수 있습니다.

가져올 수 있는 통계, 단위 이름의 제한, 통계를 가져오는 방법에 대한 자세한 내용은 Messaging API 문서의 [발송한 메시지 통계 가져오기](https://developers.line.biz/en/docs/messaging-api/unit-based-statistics-aggregation/)를 참조해 주십시오.

## 단위 이름 지정 

LINE 알림 메시지를 보낼 때 `customAggregationUnits` 속성에 단위 이름을 지정합니다. 단위 이름을 지정하는 방법은 LINE 알림 메시지 API 레퍼런스의 다음 항목을 참조해 주십시오.

- [LINE 알림 메시지(템플릿) 발송](https://developers.line.biz/en/reference/line-notification-messages/#send-line-notification-message-template)
- [LINE 알림 메시지(유연형) 발송](https://developers.line.biz/en/reference/line-notification-messages/#send-line-notification-message-flexible)

## LINE 알림 메시지의 단위 이름 지정 시 참고 사항 

LINE 알림 메시지의 단위 이름을 지정할 때는 다음 두 가지 사항에 유의해 주십시오.

- [같은 목적의 LINE 알림 메시지에는 같은 단위 이름을 일관되게 사용해 주십시오](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/statistics/#use-the-same-unit-name-for-the-same-purpose)
- [통계는 메시지가 실제로 발송된 후에 업데이트됩니다](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/statistics/#statistics-are-aggregated-when-the-message-is-sent)

### 같은 목적의 LINE 알림 메시지에는 같은 단위 이름을 일관되게 사용해 주십시오 

사용자 개인정보를 보호하기 위해, 집계된 통계 값이 20 미만인 경우와 같은 상황에서는 개별 사용자 상호작용 통계가 `null`로 표시됩니다. LINE 알림 메시지는 한 명의 사용자에게 발송되므로, 같은 단위 이름의 메시지를 소수의 사용자에게만 보내거나 집계 기간이 짧은 경우 통계가 `null`이 될 가능성이 높습니다.

같은 목적의 LINE 알림 메시지에는 같은 단위 이름을 일관되게 사용하고, 주 단위 또는 월 단위 등 더 긴 기간에 걸쳐 통계를 확인하는 것을 권장합니다. 통계가 `null`이 되는 조건에 대한 자세한 내용은 Messaging API 문서의 [집계 통계 참고 사항](https://developers.line.biz/en/docs/messaging-api/unit-based-statistics-aggregation/#notes-about-message-statistics)을 참조해 주십시오.

### 통계는 메시지가 실제로 발송된 후에 업데이트됩니다 

LINE 알림 메시지의 경우, API로 발송 요청을 한 시점이 아니라 메시지가 사용자에게 실제로 발송된 시점에 통계와 단위 이름 정보가 다음과 같이 업데이트됩니다.

- 통계 업데이트가 시작되며, 14일(1,209,600초) 동안 계속됩니다.
- 지정한 단위 이름은 당월에 할당된 단위 이름 종류의 수에 포함됩니다.
- 지정한 단위 이름은 당월에 할당된 단위 이름 목록에 포함됩니다.

예를 들어, 사용자의 [LINE 알림 메시지 수신 설정이 "미설정"](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/flow-when-receiving-message/#user-consent-flow-for-receiving-line-notification-messages-1)인 경우, 사용자가 LINE 알림 메시지 수신에 동의한 후에 메시지가 발송됩니다. 이 경우 메시지가 실제로 발송되기 전까지는 지정한 단위 이름이 [당월에 할당된 단위 이름 종류 수 가져오기](https://developers.line.biz/en/reference/messaging-api/#get-the-number-of-unit-name-types-assigned-during-this-month) 및 [당월에 할당된 단위 이름 목록 가져오기](https://developers.line.biz/en/reference/messaging-api/#get-a-list-of-unit-names-assigned-during-this-month) 엔드포인트의 결과에 반영되지 않습니다.
