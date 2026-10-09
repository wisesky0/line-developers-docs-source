# LINE 알림 메시지(템플릿)

<!-- note start -->

**선택 기능을 사용하려면 신청이 필요합니다**

필요한 신청서를 제출한 법인 사용자만 이 문서에 설명된 기능을 사용할 수 있습니다. LINE 공식 계정에서 이러한 기능을 사용하려면 영업 담당자 또는 [영업 파트너](https://www.lycbiz.com/jp/partner/sales/)에게 문의해 주십시오.

<!-- note end -->

<!-- table of contents -->

## LINE 알림 메시지(템플릿)란 

LINE 알림 메시지(템플릿)는 미리 준비된 템플릿과 항목을 조합하여 메시지를 만들고, 사용자의 전화번호를 지정하여 보낼 수 있는 기능입니다. 사용자가 LINE 공식 계정을 친구로 추가하지 않았더라도 LINE 공식 계정에서 메시지를 보낼 수 있습니다.

LINE 알림 메시지(템플릿)는 일본, 태국, 대만에서 만든 LINE 공식 계정에서만 사용할 수 있습니다.

[템플릿](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/template/#templates)을 선택한 후, [항목](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/template/#items)과 [버튼](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/template/#buttons)을 조합하고 각각에 원하는 텍스트나 URL을 지정하여 JSON을 만든 다음, [LINE 알림 메시지(템플릿) 발송](https://developers.line.biz/en/reference/line-notification-messages/#send-line-notification-message-template) 엔드포인트를 사용하여 LINE 알림 메시지(템플릿)를 보낼 수 있습니다.

사용할 수 있는 템플릿, 항목, 버튼의 종류는 일본, 태국, 대만마다 다르며, 메시지를 보내는 LINE 공식 계정에 따라 자동으로 결정됩니다. 메시지의 헤더와 푸터는 변경할 수 없습니다.

![LINE 알림 메시지(템플릿) 예시](https://developers.line.biz/media/line-notification-message/notification-messages-template.webp)

예를 들어, 위의 메시지는 다음 JSON을 만들어 보낼 수 있습니다.

```json
{
  "to": "{hashed_phone_number}",
  "templateKey": "shipment_completed_ja",
  "body": {
    "emphasizedItem": {
      "itemKey": "date_002_ja",
      "content": "Saturday, August 10, 2024"
    },
    "items": [
      {
        "itemKey": "time_range_001_ja",
        "content": "A.M."
      },
      {
        "itemKey": "number_001_ja",
        "content": "1234567"
      },
      {
        "itemKey": "price_001_ja",
        "content": "120 USD"
      },
      {
        "itemKey": "name_010_ja",
        "content": "Frozen Soup Set"
      }
    ],
    "buttons": [
      {
        "buttonKey": "check_delivery_status_ja",
        "url": "https://example.com/CheckDeliveryStatus/"
      },
      {
        "buttonKey": "contact_ja",
        "url": "https://example.com/ContactUs/"
      }
    ]
  },
  "customAggregationUnits": ["shipping"]
}
```

API를 사용하여 LINE 알림 메시지(템플릿)의 발송 수를 확인할 수 있습니다. 자세한 내용은 [발송된 LINE 알림 메시지 수 가져오기](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/technical-specs/#get-number-of-sent-line-notification-messages)를 참조해 주십시오.

## 템플릿 

템플릿의 키(`Key`)를 지정하여 LINE 알림 메시지(템플릿)를 보내면, 해당 템플릿의 제목(`Title`)과 설명(`Description`)이 메시지 상단에 표시됩니다.

![](https://developers.line.biz/media/line-notification-message/notification-messages-template-templates.webp)

<!-- templates -->

## 항목 

항목의 키(`Key`)를 지정하여 템플릿에 여러 항목을 포함할 수 있습니다. 지정한 항목의 값으로는 원하는 문자열을 설정할 수 있습니다.

![](https://developers.line.biz/media/line-notification-message/notification-messages-template-items.webp)

<!-- templates -->

## 버튼 

버튼의 키(`Key`)를 지정하여 템플릿에 여러 버튼을 포함할 수 있습니다. 버튼을 누렀을 때 이동할 대상으로는 원하는 URL을 설정할 수 있습니다.

![](https://developers.line.biz/media/line-notification-message/notification-messages-template-buttons.webp)

<!-- templates -->
