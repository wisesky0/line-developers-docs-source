# LINE 알림 메시지 개요

<!-- note start -->

**선택 기능을 사용하려면 신청이 필요합니다**

필요한 신청서를 제출한 법인 사용자만 이 문서에 설명된 기능을 사용할 수 있습니다. LINE 공식 계정에서 이러한 기능을 사용하려면 영업 담당자 또는 [영업 파트너](https://www.lycbiz.com/jp/partner/sales/)에게 문의해 주십시오.

<!-- note end -->

## 개요 

LINE 알림 메시지는 사용자의 전화번호를 지정하여 메시지를 보낼 수 있는 서비스입니다. 사용자가 LINE 공식 계정을 친구로 추가하지 않았더라도 LINE 공식 계정에서 메시지를 보낼 수 있습니다.

LINE 알림 메시지는 일본, 태국, 대만의 LINE 공식 계정에서만 사용할 수 있습니다.

LINE 알림 메시지에는 두 가지 유형이 있습니다. 미리 준비된 템플릿과 항목을 조합하여 간편하게 메시지를 만들 수 있는 [LINE 알림 메시지(템플릿)](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/template/)과, 사전 UX 심사가 필요한 [LINE 알림 메시지(유연형)](https://developers.line.biz/en/reference/line-notification-messages/#flexible)입니다. 각 유형은 서로 다른 API 엔드포인트를 사용합니다.

다음은 LINE 알림 메시지(템플릿)의 예시입니다.

![LINE 알림 메시지(템플릿) 예시](https://developers.line.biz/media/line-notification-message/line-notification-messages-sample-ja.webp)

자세한 내용은 [LINE 알림 메시지 API 기술 사양](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/technical-specs/) 및 [LINE 알림 메시지 API 레퍼런스](https://developers.line.biz/en/reference/line-notification-messages/)를 참조해 주십시오.

<!-- tip start -->

**LINE 알림 메시지의 사용 목적**

LINE 알림 메시지의 사용 목적은 사용자에게 유용하고 적절하다고 판단되는 용도로 제한됩니다. 상업적 또는 광고 목적으로는 보낼 수 없습니다. 자세한 내용은 LINE for Business의 [LINE 알림 메시지(템플릿) UX 가이드라인](https://www.lycbiz.com/sites/default/files/media/jp/download/LINE_Official_Notification_Template_UXGuideline.pdf)(일본어만 제공)과 [LINE 알림 메시지(유연형) UX 가이드라인](https://www.lycbiz.com/sites/default/files/media/jp/download/LINE%E9%80%9A%E7%9F%A5%E3%83%A1%E3%83%83%E3%82%BB%E3%83%BC%E3%82%B8UX%E3%82%AC%E3%82%A4%E3%83%89%E3%83%A9%E3%82%A4%E3%83%B3.pdf)(일본어만 제공)을 참조해 주십시오.

<!-- tip end -->

## 다른 메시지와의 표시 차이 

LINE 알림 메시지는 다른 메시지와 구분하기 위해 LINE 공식 계정 아이콘 오른쪽에 "Important notification"이 표시됩니다. 이 기능은 iOS, Android, iPad의 LINE 15.9.0 이상 버전에서 사용할 수 있습니다.

![LINE 알림 메시지는 아이콘 오른쪽에 "Important notification"이 표시됩니다](https://developers.line.biz/media/line-notification-message/notification-messages-important-en.webp)

표시되는 텍스트는 LINE 알림 메시지를 받은 LINE 앱의 언어 설정에 따라 달라질 수 있습니다.

| LINE 앱 언어 설정 | 표시되는 텍스트 |
| -------------------------------- | ------------------------ |
| 일본어 | `重要なお知らせ` |
| 태국어 | `การแจ้งเตือนสำคัญ` |
| 중국어(간체/번체) | `重要通知` |
| 기타 | `Important notification` |

LINE 앱의 언어 설정에 대한 자세한 내용은 고객센터의 [LINE 앱 언어 설정 변경](https://help.line.me/line/?contentId=20007465&lang=en)을 참조해 주십시오.

## 관련 페이지 

- [LINE 알림 메시지 API 기술 사양](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/technical-specs/)
- [LINE 알림 메시지 API 레퍼런스](https://developers.line.biz/en/reference/line-notification-messages/)
- [웹훅 발송 완료 이벤트](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/message-sending-complete-webhook-event/)
- [LINE 알림 메시지를 수신할 때의 흐름](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/flow-when-receiving-message/)
- [LINE 알림 메시지 통계 가져오기](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/statistics/)
