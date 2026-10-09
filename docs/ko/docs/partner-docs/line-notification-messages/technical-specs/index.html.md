# LINE 알림 메시지 API 기술 사양

<!-- note start -->

**선택 기능을 사용하려면 신청이 필요합니다**

필요한 신청서를 제출한 법인 사용자만 이 문서에 설명된 기능을 사용할 수 있습니다. LINE 공식 계정에서 이러한 기능을 사용하려면 영업 담당자 또는 [영업 파트너](https://www.lycbiz.com/jp/partner/sales/)에게 문의해 주십시오.

<!-- note end -->

## 사용자에게 LINE 알림 메시지 보내기 

회사가 보유한 고객의 전화번호를 기반으로 메시지 요청이 LINE 플랫폼 서버로 전송되며, LINE에 전화번호가 등록된 사용자의 계정으로 LINE 알림 메시지가 발송됩니다. 회사가 보내는 전화번호는 해시 처리되며, LY Corporation은 수신한 정보를 메시지 발송 대상 매칭에만 사용하고 매칭이 끝나면 즉시 폐기합니다. 개인정보가 포함된 알림 내용을 확인하고 절차를 계속하기 위해 SMS로 본인 확인이 필요할 수도 있습니다.

LINE 알림 메시지에는 LINE 알림 메시지(템플릿)와 LINE 알림 메시지(유연형) 두 가지 유형이 있습니다. 각 유형은 서로 다른 API 엔드포인트를 사용합니다.

- LINE 알림 메시지(템플릿)
  - [LINE 알림 메시지(템플릿) 발송](https://developers.line.biz/en/reference/line-notification-messages/#send-line-notification-message-template)
  - [발송된 LINE 알림 메시지(템플릿) 수 가져오기](https://developers.line.biz/en/reference/line-notification-messages/#get-number-of-sent-line-notification-messages-template)
- LINE 알림 메시지(유연형)
  - [LINE 알림 메시지(유연형) 발송](https://developers.line.biz/en/reference/line-notification-messages/#send-line-notification-message-flexible)
  - [발송된 LINE 알림 메시지(유연형) 수 가져오기](https://developers.line.biz/en/reference/line-notification-messages/#get-number-of-sent-line-notification-messages-flexible)

자세한 내용은 [LINE 알림 메시지 API 레퍼런스](https://developers.line.biz/en/reference/line-notification-messages/)를 참조해 주십시오.

### LINE 알림 메시지로 보낼 수 있는 메시지 유형 

LINE 알림 메시지(템플릿)를 사용하면 미리 준비된 템플릿, 항목, 버튼을 조합하여 간편하게 메시지를 만들 수 있습니다. 메시지를 만들 때는 [LINE 알림 메시지(템플릿) UX 가이드라인](https://www.lycbiz.com/sites/default/files/media/jp/download/LINE_Official_Notification_Template_UXGuideline.pdf)(일본어만 제공)을 따라 주십시오.

![LINE 알림 메시지(템플릿) 예시](https://developers.line.biz/media/line-notification-message/notification-messages-template.webp)

LINE 알림 메시지(유연형)에서는 더 유연한 메시지 작성을 위해 [Flex Message](https://developers.line.biz/en/docs/messaging-api/message-types/#flex-messages) 및 이와 유사한 메시지 유형을 사용할 수 있습니다. 다만 이미지, 동영상 또는 오디오가 포함된 메시지는 허용되지 않습니다. 또한 LINE 알림 메시지(유연형)는 사전 UX 심사가 필요하며, 심사를 통과한 메시지만 발송할 수 있습니다. 메시지를 만들 때는 [LINE 알림 메시지(유연형) UX 가이드라인](https://www.lycbiz.com/sites/default/files/media/jp/download/LINE%E9%80%9A%E7%9F%A5%E3%83%A1%E3%83%83%E3%82%BB%E3%83%BC%E3%82%B8UX%E3%82%AC%E3%82%A4%E3%83%89%E3%83%A9%E3%82%A4%E3%83%B3.pdf)(일본어만 제공)을 따라 주십시오.

### 전화번호 해싱 

LINE 알림 메시지 API에서 발송 대상 `to`를 지정할 때는 [E.164](https://developers.line.biz/en/glossary/#e164) 형식으로 정규화된 전화번호(예: `+818000001234`)를 SHA256으로 해시한 문자열을 지정합니다. 하이픈은 포함하지 마십시오. 다음은 Python3로 전화번호를 해시하는 예시입니다.

```python
import hashlib

phone_number = "+818000001234"
hashed_phone_number = hashlib.sha256(phone_number.encode()).hexdigest()
print(hashed_phone_number)

# d41e0ad70dddfeb68f149ad6fc61574b9c5780ab7bcb2fba5517771ffbb2409c
```

### 메시지 발송 알림 받기 

LINE 알림 메시지 API에 요청하여 사용자에게 LINE 알림 메시지를 보내면, LINE 플랫폼에서 전용 웹훅 이벤트([발송 완료 이벤트](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/message-sending-complete-webhook-event/#receive-delivery-event))를 보냅니다.

요청할 때 요청 헤더의 `X-Line-Delivery-Tag`에 임의의 문자열을 지정하면, 해당 문자열이 웹훅의 [발송 완료 이벤트](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/message-sending-complete-webhook-event/#receive-delivery-event)에 있는 `delivery.data` 속성으로 반환됩니다. `X-Line-Delivery-Tag`는 웹훅을 받았을 때 어떤 메시지가 발송되었는지 식별하는 등의 용도로 사용할 수 있습니다.

자세한 내용은 [웹훅 발송 완료 이벤트](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/message-sending-complete-webhook-event/)를 참조해 주십시오.

### 발송된 LINE 알림 메시지 수 가져오기 

다음 API를 사용하여 발송된 LINE 알림 메시지 수를 가져올 수 있습니다.

- [발송된 LINE 알림 메시지(템플릿) 수 가져오기](https://developers.line.biz/en/reference/line-notification-messages/#get-number-of-sent-line-notification-messages-template)
- [발송된 LINE 알림 메시지(유연형) 수 가져오기](https://developers.line.biz/en/reference/line-notification-messages/#get-number-of-sent-line-notification-messages-flexible)

<!-- note start -->

**참고**

발송 메시지 수에는 사용자에게 실제로 발송된 LINE 알림 메시지만 집계됩니다. 발송 조건에 대한 자세한 내용은 [LINE 알림 메시지 발송 조건](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/technical-specs/#conditions-for-sending-line-notification-messages)을 참조해 주십시오.

<!-- note end -->

## LINE 알림 메시지 발송 조건 

LINE 알림 메시지 API는 다음 조건을 모두 충족하면 사용자에게 메시지를 보냅니다.

- LINE 알림 메시지의 발송 대상으로 지정한 전화번호가 사용자의 LINE 계정에 등록된 전화번호와 일치해야 합니다.
- 사용자의 LINE 계정에 등록된 전화번호가 유효해야 합니다(일정 기간 내에 SMS로 전화번호 인증을 완료한 상태).
- 사용자가 LINE 알림 메시지 수신에 동의해야 합니다.
- 사용자가 LINE 공식 계정을 차단하지 않아야 합니다.
- 전화번호가 일본, 태국, 대만에서 발급되었어야 하며, [해당 전화번호로 LINE 앱에서 전화번호 인증이 가능](https://help.line.me/line/smartphone/pc?lang=en&contentId=20000104)해야 합니다.
- 사용자가 LINE 개인정보 처리방침(2022년 3월 개정 이후 버전)에 동의해야 합니다.

LINE 앱에서 LINE 알림 메시지를 설정하는 방법에 대한 자세한 내용은 LINE 사용자 가이드의 [LINE 알림 메시지 받는 방법](https://guide.line.me/ja/services/notification-message.html)(일본어만 제공)을 참조해 주십시오.

## LINE 알림 메시지 및 API에 대한 추가 정보 

- [“LINE 알림 메시지를 받았습니다” 메시지에 대하여](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/technical-specs/#about-recive-the-new-line-notification-message)
- [LINE 알림 메시지 수신 설정](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/technical-specs/#how-to-consent-for-line-notification-messages)
- [LINE 알림 메시지 수신에 동의하지 않은 경우 발송되는 메시지](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/technical-specs/#user-has-not-given-consent-when-receive-line-notification-messages)
- [LINE 공식 계정을 차단한 사용자에 대한 LINE 알림 메시지 API 요청](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/technical-specs/#about-pnp-api-block-response)
- [LINE 알림 메시지 API 요청은 성공했지만 메시지가 발송되지 않은 경우](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/technical-specs/#why-i-cant-receive-line-notification-messages)
- [LINE 공식 계정의 친구가 아닌 사용자에게 LINE 알림 메시지를 보낼 때의 친구 추가 및 차단](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/technical-specs/#when-user-add-or-block-oa)
- [LINE 공식 계정의 친구가 아닌 사용자에게 LINE 알림 메시지를 보낼 때의 리치 메뉴 표시](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/technical-specs/#about-richmenu-displayed)
- [LINE 알림 메시지 API의 이용 요금 청구 대상](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/technical-specs/#about-delivered-pnp-messages)

### “LINE 알림 메시지를 받았습니다” 메시지에 대하여 

LINE 알림 메시지를 보낼 때, "LINE"이라는 이름의 LINE 공식 계정(시스템 계정)에서 다음 메시지가 전송됩니다. 이 메시지는 LINE 알림 메시지를 보낼 때마다 항상 전송됩니다. LINE 알림 메시지의 발송자는 이 메시지의 전송을 막거나 전송 횟수를 줄일 수 없습니다.

![메시지 수신 알림](https://developers.line.biz/media/line-notification-message/type1-pnpflow-3-ja.webp)

<!-- note start -->

**차단했을 때의 동작**

LINE 알림 메시지 API에서 알림 메시지의 수신자로 지정한 사용자가 메시지를 보낸 LINE 공식 계정을 차단한 경우, 알림 메시지와 "LINE" 시스템 계정의 "LINE 알림 메시지를 받았습니다" 메시지는 전송되지 않습니다.

또한 사용자가 LINE 공식 계정을 차단한 동안 보낸 LINE 알림 메시지는, 사용자가 차단을 해제한 후에도 전달되지 않습니다.

<!-- note end -->

### LINE 알림 메시지 수신 설정 

사용자에게 LINE 알림 메시지가 발송되면, 사용자는 LINE 알림 메시지 수신에 동의하거나 거부할 수 있습니다. 또한 LINE 알림 메시지가 발송된 적이 없더라도, LINE 앱에서 **Settings** > **Privacy** > **Provide usage data** > **LINE notification messages**로 이동하여 언제든지 동의 또는 거부할 수 있습니다.

![LINE 알림 메시지 수신에 동의](https://developers.line.biz/media/line-notification-message/consent-line-notification-message-en.webp)

#### 수신 설정 상태 

LINE 알림 메시지 수신 설정에는 세 가지 상태가 있습니다.

| 상태 | 설명 |
| --- | --- |
| 동의(on) | 수신에 동의한 상태입니다. LINE 알림 메시지가 발송됩니다. |
| 거부(off) | 수신을 거부한 상태입니다. LINE 알림 메시지가 발송되지 않습니다. |
| 미설정 | 동의도 거부도 하지 않은 상태입니다. LINE 알림 메시지를 받을 때 LINE 알림 메시지 수신 동의를 요청하는 메시지가 발송됩니다.<ul><li>LINE 앱 8.0.0 이하 버전에서 새 LINE 계정을 만든 경우, LINE 알림 메시지 수신 동의 상태는 "미설정"입니다.</li><li>"미설정" 이외의 상태로 한 번이라도 변경하면 "미설정" 상태로 돌아갈 수 없습니다.</li></ul> |

### 수신 동의를 하지 않은 상태에서 발송되는 메시지 

| 상태 | 설명 |
| --- | --- |
| 거부(off) | 요청된 LINE 알림 메시지는 발송되지 않고 삭제됩니다. |
| 미설정 | [LINE 알림 메시지 수신 설정 요청](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/flow-when-receiving-message/#user-consent-flow-for-receiving-line-notification-messages-1)을 받은 후 24시간 이내에 수신에 동의하면 메시지가 발송됩니다. 24시간 이내에 동의하지 않으면 요청된 메시지는 발송되지 않고 삭제됩니다. |

### LINE 공식 계정을 차단한 사용자에 대한 LINE 알림 메시지 API 요청 

LINE 공식 계정을 차단한 사용자에게 LINE 알림 메시지 API로 발송 요청을 하면, HTTP 상태 코드 `200` 또는 `202` 응답이 반환됩니다. 그러나 이 경우 LINE 알림 메시지는 실제로 발송되지 않으며, [웹훅 발송 완료 이벤트](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/message-sending-complete-webhook-event/)도 전송되지 않습니다.

### LINE 알림 메시지 API 요청은 성공했지만 메시지가 발송되지 않은 경우 

LINE 공식 계정을 차단하지 않은 사용자에게 LINE 알림 메시지 API 요청에 성공(HTTP 상태 코드 `200` 또는 `202` 수신)했지만 LINE 알림 메시지가 실제로 발송되지 않은 경우, 다음과 같은 이유가 있을 수 있습니다.

- LINE 알림 메시지API 요청 시 지정한 전화번호와 연결된 사용자가 [LINE 알림 메시지 수신 설정](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/flow-when-receiving-message/#user-consent-flow-for-receiving-line-notification-messages-1)을 하지 않았고, 수신 설정 요청을 받았을 때 "거부"로 변경한 경우
- LINE 알림 메시지 API 요청 시 지정한 전화번호와 연결된 사용자가 [LINE 알림 메시지 수신 설정](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/flow-when-receiving-message/#user-consent-flow-for-receiving-line-notification-messages-1)을 하지 않았고, 수신 설정 요청을 받았을 때 설정을 하지 않은 상태로 두었던 경우
- LINE 알림 메시지 API 요청 시 지정한 전화번호와 연결된 사용자에게 SMS 인증이 필요하지만, [전화번호 인증](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/flow-when-receiving-message/#user-consent-flow-for-receiving-line-notification-messages-3) 메시지를 받았을 때 SMS 인증을 하지 않은 경우

### LINE 공식 계정의 친구가 아닌 사용자에게 LINE 알림 메시지를 보낼 때의 친구 추가 및 차단 

LINE 알림 메시지를 보내는 발신자의 LINE 공식 계정과 친구 관계가 아닌 사용자가 LINE 알림 메시지를 받으면, LINE 공식 계정을 친구로 추가할지 선택할 수 있습니다. 친구로 추가하면 [follow 이벤트](https://developers.line.biz/en/reference/messaging-api/#follow-event)가 전송되고, 차단하면 [unfollow 이벤트](https://developers.line.biz/en/reference/messaging-api/#unfollow-event)가 전송됩니다. LINE 알림 메시지를 사용할 때는 follow 이벤트를 받은 적이 없는 사용자로부터 unfollow 이벤트가 전송될 수도 있습니다.

### LINE 공식 계정의 친구가 아닌 사용자에게 LINE 알림 메시지를 보낼 때의 리치 메뉴 표시 

LINE 알림 메시지를 받은 사용자는 LINE 공식 계정을 친구로 추가하지 않고도 1:1 채팅을 열고 리치 메뉴를 사용할 수 있습니다. [LINE 공식 계정 관리자](https://developers.line.biz/en/docs/messaging-api/rich-menus-overview/#creating-a-rich-menu-with-the-line-manager) 또는 [Messaging API](https://developers.line.biz/en/docs/messaging-api/using-rich-menus/#set-the-default-rich-menu)에서 설정한 기본 리치 메뉴가 표시됩니다. 다만 친구로 추가하지 않은 사용자에게는 Messaging API로 설정한 [사용자별 리치 메뉴](https://developers.line.biz/en/reference/messaging-api/#link-rich-menu-to-user)가 표시되지 않습니다.

![사용자는 LINE 공식 계정을 친구로 추가하지 않고도 리치 메뉴를 사용할 수 있습니다](https://developers.line.biz/media/line-notification-message/about-richmenu-displayed.webp)

LINE 알림 메시지를 받은 사용자는 LINE 공식 계정을 친구로 추가하지 않고도 메시지를 보낼 수 있습니다. 따라서 친구가 아닌 사용자로부터 웹훅을 통해 [postback 이벤트](https://developers.line.biz/en/reference/messaging-api/#postback-event) 또는 [message 이벤트](https://developers.line.biz/en/reference/messaging-api/#message-event)를 받을 수 있습니다.

### LINE 알림 메시지 이용 요금 청구 대상 

LINE 알림 메시지 이용 요금은 **사용자에게 실제로 발송된 메시지**에 대해서만 청구됩니다.

API를 사용하여 사용자에게 실제로 발송된 메시지 수를 확인할 수 있습니다. 자세한 내용은 [발송된 LINE 알림 메시지 수 가져오기](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/technical-specs/#get-number-of-sent-line-notification-messages)를 참조해 주십시오.
