# 웹훅 발송 완료 이벤트

<!-- note start -->

**선택 기능을 사용하려면 신청이 필요합니다**

필요한 신청서를 제출한 법인 사용자만 이 문서에 설명된 기능을 사용할 수 있습니다. LINE 공식 계정에서 이러한 기능을 사용하려면 영업 담당자 또는 [영업 파트너](https://www.lycbiz.com/jp/partner/sales/)에게 문의해 주십시오.

<!-- note end -->

## 웹훅 발송 완료 이벤트 개요 

LINE 알림 메시지 API에 요청하고 LINE 알림 메시지가 사용자에게 발송 완료되면, LINE 플랫폼은 봇 서버의 웹훅 URL로 전용 웹훅 이벤트(발송 완료 이벤트)를 보냅니다.

- [웹훅 발송 완료 이벤트 사양](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/message-sending-complete-webhook-event/#receive-delivery-event)
- [웹훅 발송 완료 이벤트에 대한 추가 정보](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/message-sending-complete-webhook-event/#we-cant-receive-a-delivery-webhook-event)

### 웹훅 발송 완료 이벤트 사양 

| 속성 이름 | 타입 | 설명 |
| --- | --- | --- |
| type | String | `delivery` |
| mode | Object | [공통 속성](https://developers.line.biz/en/reference/messaging-api/#common-properties)을 참조해 주십시오. |
| timestamp | Number | [공통 속성](https://developers.line.biz/en/reference/messaging-api/#common-properties)을 참조해 주십시오. |
| webhookEventId | String | [공통 속성](https://developers.line.biz/en/reference/messaging-api/#common-properties)을 참조해 주십시오. |
| deliveryContext | Object | [공통 속성](https://developers.line.biz/en/reference/messaging-api/#common-properties)을 참조해 주십시오. |
| delivery | Object | 해시된 전화번호 문자열 또는 [`X-Line-Delivery-Tag`](https://developers.line.biz/en/reference/line-notification-messages/#send-line-notification-message-template-request-headers)로 지정한 문자열을 포함하는 delivery 객체입니다. |
| delivery.data | String | 해시된 전화번호 문자열 또는 [`X-Line-Delivery-Tag`](https://developers.line.biz/en/reference/line-notification-messages/#send-line-notification-message-template-request-headers)로 지정한 문자열입니다. |

_웹훅 이벤트 예시_

<!-- tab start `json` -->

```json
// 웹훅 발송 완료 이벤트 예시(X-Line-Delivery-Tag 헤더를 지정하지 않은 경우)
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
      "mode": "active"
    }
  ]
}

// 웹훅 발송 완료 이벤트 예시(X-Line-Delivery-Tag 헤더를 지정한 경우)
{
  "destination": "Uc7472b39e21dab71c2347e02714630d6",
  "events": [
    {
      "type": "delivery",
      "delivery": {
        "data": "15034552939884E28681A7D668CEA94C147C716C0EC9DFE8B80B44EF3B57F6BD0602366BC3menu01"
      },
      "webhookEventId": "01G17EJCGAVV66J5WNA7ZCTF6H",
      "deliveryContext": {
        "isRedelivery": false
      },
      "timestamp": 1650591346705,
      "mode": "active"
    }
  ]
}
```

<!-- tab end -->

<!-- note start -->

**웹훅 발송 완료 이벤트의 상태에 대하여**

웹훅 발송 완료 이벤트는 **LINE 알림 메시지가 사용자에게 발송되었으며 메시지를 확인할 수 있음**을 나타냅니다. 다음 사항을 나타내지는 않습니다.

- LINE 알림 메시지 API 요청이 성공했음
- [사용자가 "LINE 알림 메시지 수신 설정하기" 메시지를 받음](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/flow-when-receiving-message/#user-consent-flow-for-receiving-line-notification-messages-1)
- LINE 알림 메시지 수신에 동의함
- [사용자가 SMS 인증 요청 메시지를 받음](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/flow-when-receiving-message/#user-consent-flow-for-receiving-line-notification-messages-3)
- 사용자가 SMS 인증을 완료함
- 사용자가 LINE 알림 메시지를 열어 읽음

<!-- note end -->

<!-- note start -->

**웹훅 이벤트의 서명 검증**

발송 완료 이벤트를 수신하면 [서명 검증](https://developers.line.biz/en/docs/messaging-api/receiving-messages/#verify-signature)에 채널 시크릿을 사용해 주십시오. LINE Chat Plus를 사용하는 채널의 경우에는 Switcher Secret을 사용하여 서명을 검증해 주십시오.

<!-- note end -->

## 웹훅 발송 완료 이벤트에 대한 추가 정보 

LINE 알림 메시지 API 요청을 보내고 HTTP 상태 코드 `200` 또는 `202`로 응답을 받더라도, 사용자의 [LINE 알림 메시지 수신 설정](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/technical-specs/#how-to-consent-for-line-notification-messages)과 SMS 인증 상태에 따라 LINE 알림 메시지가 사용자에게 전달되지 않거나 LINE 알림 메시지 발송이 중단될 수 있습니다.

LINE 알림 메시지 API 요청을 보내고 HTTP 상태 코드 `200` 또는 `202`로 응답을 받은 후 24시간 이내에 [웹훅 발송 완료 이벤트](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/message-sending-complete-webhook-event/)를 받지 못했다면, 다음 중 하나의 이유로 LINE 알림 메시지가 사용자에게 전달되지 않은 것입니다.

- [사용자가 LINE 공식 계정을 차단한 경우](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/message-sending-complete-webhook-event/#user-blocked-your-account)
- [사용자가 필요한 동의 또는 인증을 하지 않은 경우](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/message-sending-complete-webhook-event/#user-didnt-action-taken)

### 사용자가 LINE 공식 계정을 차단한 경우 

LINE 알림 메시지를 보낸 LINE 공식 계정을 사용자가 차단한 경우에도, [LINE 알림 메시지 API 요청](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/technical-specs/#about-pnp-api-block-response)에는 HTTP 상태 코드 `200` 또는 `202`로 응답합니다.

### 사용자가 필요한 동의 또는 인증을 하지 않은 경우 

LINE 알림 메시지 수신 설정이 되어 있지 않거나, SMS 인증이 필요한데 해당 설정이나 작업이 완료되지 않았을 수 있습니다. 자세한 내용은 [LINE 알림 메시지 API 요청은 성공했지만 메시지가 발송되지 않은 경우](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/technical-specs/#why-i-cant-receive-line-notification-messages)를 참조해 주십시오.
