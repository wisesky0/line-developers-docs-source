# LINE 알림 메시지를 수신할 때의 흐름

<!-- note start -->

**선택 기능을 사용하려면 신청이 필요합니다**

필요한 신청서를 제출한 법인 사용자만 이 문서에 설명된 기능을 사용할 수 있습니다. LINE 공식 계정에서 이러한 기능을 사용하려면 영업 담당자 또는 [영업 파트너](https://www.lycbiz.com/jp/partner/sales/)에게 문의해 주십시오.

<!-- note end -->

## 사용자가 LINE 알림 메시지를 수신할 때의 흐름 

사용자는 LINE 알림 메시지 수신에 동의하는 것 외에도, LINE 알림 메시지를 받으려면 180일마다 SMS로 전화번호를 인증(SMS 인증)해야 합니다.

![사용자가 LINE 알림 메시지를 수신할 때의 흐름](https://developers.line.biz/media/line-notification-message/pnp-receive-flow-en.webp)

- [사용자가 이미 LINE 알림 메시지 수신에 동의했고 SMS 인증이 필요하지 않은 경우의 흐름](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/flow-when-receiving-message/#receiving-line-notification-messages)
- [LINE 알림 메시지 수신 설정이 "미설정"이고 SMS 인증이 필요하지 않은 경우의 흐름](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/flow-when-receiving-message/#user-consent-flow-for-receiving-line-notification-messages-1)
- [LINE 알림 메시지 수신 설정이 "미설정"이고 SMS 인증이 필요한 경우의 흐름](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/flow-when-receiving-message/#user-consent-flow-for-receiving-line-notification-messages-2)
- [사용자가 이미 LINE 알림 메시지 수신에 동의했고 SMS 인증이 필요한 경우의 흐름](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/flow-when-receiving-message/#user-consent-flow-for-receiving-line-notification-messages-3)
- [참고: LINE 계정에 등록된 전화번호를 변경하는 흐름](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/flow-when-receiving-message/#when-changing-your-phone-number)

<!-- note start -->

**LINE 알림 메시지 수신 설정은 모든 계정에 공통으로 적용됩니다**

사용자가 LINE 알림 메시지 수신에 한 번 동의하면, 모든 LINE 공식 계정에서 발송되는 LINE 알림 메시지 수신에 동의한 것으로 간주됩니다.

예를 들어, 사용자가 LINE 공식 계정 A가 보낸 LINE 알림 메시지에 응답하여 수신에 동의했고, 이후 다른 LINE 공식 계정 B가 보낸 LINE 알림 메시지를 받았다면, 사용자는 이미 LINE 알림 메시지 수신에 동의한 상태이므로 다시 동의할 필요가 없습니다.

<!-- note end -->

<!-- note start -->

**SMS 인증은 사용자의 LINE 계정마다 180일에 한 번 필요합니다**

사용자가 SMS 인증을 완료하면, 180일 동안 모든 LINE 공식 계정에서 발송되는 LINE 알림 메시지를 받을 때 SMS 인증이 필요하지 않습니다.

예를 들어, 사용자가 LINE 공식 계정 A가 보낸 LINE 알림 메시지에 응답하여 SMS 인증을 완료했다면, 180일 이내에 LINE 공식 계정 B가 보낸 LINE 알림 메시지를 받을 때에는 이미 SMS 인증이 되어 있으므로 다시 인증할 필요가 없습니다.

<!-- note end -->

<!-- note start -->

**SMS 인증이 필요하지 않은 경우**

다음 경우에는 LINE 알림 메시지를 받을 때 SMS 인증이 필요하지 않습니다.

- 새로운 LINE 계정을 만든 후 180일 이내인 경우
- 사용자의 LINE 계정에 등록된 전화번호를 변경한 후 180일 이내인 경우

<!-- note end -->

### 이미 LINE 알림 메시지 수신에 동의했고 SMS 인증이 필요하지 않은 경우의 흐름 

| 번호 | 이미지 | 설명 |
| --- | --- | --- |
| 1 | ![](https://developers.line.biz/media/line-notification-message/type1-pnpflow-3-ja.webp)<br><br>![](https://developers.line.biz/media/line-notification-message/type1-pnpflow-4-ja.webp) | 사용자가 이미 LINE 알림 메시지 수신에 동의했고 SMS 인증이 필요하지 않은 경우, "LINE" 시스템 계정이 사용자에게 "LINE Notification Message Received" 메시지를 보냅니다. 이와 동시에 요청된 LINE 알림 메시지가 사용자에게 발송됩니다. |

### LINE 알림 메시지 수신 설정이 "미설정"이고 SMS 인증이 필요하지 않은 경우의 흐름 

| 번호 | 이미지 | 설명 |
| --- | --- | --- |
| 1 | ![](https://developers.line.biz/media/line-notification-message/type1-pnpflow-1-ja.webp) | LINE 알림 메시지 [수신 설정](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/technical-specs/#user-consent-state)이 "미설정"이고 SMS 인증이 필요하지 않은 경우, 사용자가 LINE 알림 메시지를 받으면 "LINE" 시스템 계정에서 "LINE 알림 메시지를 받았습니다"와 "LINE 알림 메시지 수신 설정하기" 메시지를 보냅니다. |
| 2 | ![](https://developers.line.biz/media/line-notification-message/type1-pnpflow-2-ja.webp) | "LINE 알림 메시지 수신 설정하기" 아래의 "설정" 버튼을 누르면 LINE 알림 메시지 수신 동의 화면으로 이동합니다. |
| 3 | ![](https://developers.line.biz/media/line-notification-message/type1-pnpflow-3-ja.webp)<br><br>![](https://developers.line.biz/media/line-notification-message/type1-pnpflow-4-ja.webp) | 사용자가 "LINE 알림 메시지 수신 설정하기"에 동의하면, "LINE" 시스템 계정에서 LINE 알림 메시지를 받았다는 메시지를 보냅니다. 그 후 요청된 LINE 알림 메시지가 사용자에게 발송됩니다. |

### LINE 알림 메시지 수신 설정이 "미설정"이고 SMS 인증이 필요한 경우의 흐름 

| 번호 | 이미지 | 설명 |
| --- | --- | --- |
| 1 | ![](https://developers.line.biz/media/line-notification-message/type3-pnpflow-1-ja.webp) | LINE 알림 메시지 [수신 설정](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/technical-specs/#user-consent-state)이 "미설정"이고 SMS 인증이 필요한 경우, 사용자가 LINE 알림 메시지를 받으면 "LINE" 시스템 계정에서 "LINE 알림 메시지를 받았습니다"와 "LINE 알림 메시지 수신 설정하기" 메시지를 보냅니다. |
| 2 | ![](https://developers.line.biz/media/line-notification-message/type3-pnpflow-2-ja.webp) | "LINE 알림 메시지 수신 설정하기" 아래의 "설정" 버튼을 누르면 LINE 알림 메시지 수신 동의 화면으로 이동합니다. |
| 3 | ![](https://developers.line.biz/media/line-notification-message/type3-pnpflow-3-ja.webp) | 사용자가 "LINE 알림 메시지 수신 설정하기"에 동의하면, LINE 계정에 등록된 전화번호로 SMS를 보내기 위한 확인 대화상자가 표시됩니다. 이 대화상자에서 **Change**를 눌러 SMS를 받을 전화번호(LINE 계정에 등록된 전화번호)를 변경하면, 이전 전화번호로 발송된 LINE 알림 메시지는 사용자에게 전달되지 않습니다. |
| 4 | ![](https://developers.line.biz/media/line-notification-message/type3-pnpflow-4-ja.webp) | 지정된 전화번호로 SMS가 발송됩니다. 메시지에 제공된 PIN 번호를 입력해 주십시오. |
| 5 | ![](https://developers.line.biz/media/line-notification-message/type1-pnpflow-3-ja.webp)<br><br>![](https://developers.line.biz/media/line-notification-message/type1-pnpflow-4-ja.webp) | SMS 인증이 완료되면 "LINE" 시스템 계정이 사용자에게 "LINE Notification Message Received" 메시지를 보냅니다. 이와 동시에 요청된 LINE 알림 메시지가 사용자에게 발송됩니다. |

### 이미 LINE 알림 메시지 수신에 동의했고 SMS 인증이 필요한 경우의 흐름 

| 번호 | 이미지 | 설명 |
| --- | --- | --- |
| 1 | ![](https://developers.line.biz/media/line-notification-message/type2-pnpflow-1-ja.webp) | 사용자가 이미 LINE 알림 메시지 수신에 동의했고 SMS 인증이 필요한 경우, 사용자가 LINE 알림 메시지를 받으면 "LINE" 시스템 계정에서 "LINE 알림 메시지를 받았습니다" 메시지와 "전화번호 인증" 메시지를 보냅니다. |
| 2 | ![](https://developers.line.biz/media/line-notification-message/type2-pnpflow-2-ja.webp) | "전화번호 인증" 메시지의 "설정"을 누르면 전화번호 인증 화면으로 이동합니다. |
| 3 | ![](https://developers.line.biz/media/line-notification-message/type2-pnpflow-3-ja.webp) | "SMS 보내기" 버튼을 누르면 LINE 계정에 등록된 전화번호로 SMS를 보내기 위한 확인 대화상자가 표시됩니다. 이 대화상자에서 **Change**를 눌러 SMS를 받을 전화번호(LINE 계정에 등록된 전화번호)를 변경하면, 이전 전화번호로 발송된 LINE 알림 메시지는 사용자에게 전달되지 않습니다. |
| 4 | ![](https://developers.line.biz/media/line-notification-message/type2-pnpflow-4-ja.webp) | 지정된 전화번호로 SMS가 발송됩니다. 메시지에 제공된 PIN 번호를 입력해 주십시오. |
| 5 | ![](https://developers.line.biz/media/line-notification-message/type1-pnpflow-3-ja.webp)<br><br>![](https://developers.line.biz/media/line-notification-message/type1-pnpflow-4-ja.webp) | SMS 인증이 완료되면 "LINE" 시스템 계정이 사용자에게 "LINE Notification Message Received" 메시지를 보냅니다. 이와 동시에 요청된 LINE 알림 메시지가 사용자에게 발송됩니다. |

## 참고: LINE 계정에 등록된 전화번호를 변경하는 흐름 

LINE 계정에 등록된 전화번호를 변경하려면, 사용자는 LINE 알림 메시지를 받을 때의 SMS 인증 화면에서 **Change**를 누른 다음 **Next**를 누르고 전화번호를 입력합니다.

<!-- tip start -->

**LINE 계정에 등록된 전화번호 변경하기**

LINE 앱에서 **Settings** > **Profile** > **Phone number**로 이동하여 전화번호를 변경할 수도 있습니다. 자세한 내용은 LINE 고객센터의 [전화번호 확인 및 변경](https://help.line.me/line/smartphone/pc?lang=en&contentId=20000120)을 참조해 주십시오.

<!-- tip end -->

| 번호 | 이미지 | 설명 |
| --- | --- | --- |
| 1 | ![](https://developers.line.biz/media/line-notification-message/change-phone-number-1-en.png) | 변경할 전화번호를 입력하고 "Next"를 누릅니다. |
| 2 | ![](https://developers.line.biz/media/line-notification-message/change-phone-number-2-en.png) | 지정된 전화번호로 SMS가 발송됩니다. 메시지에 제공된 PIN 코드를 입력해 주십시오. |
| 3 | ![](https://developers.line.biz/media/line-notification-message/change-phone-number-3-ja.webp) | SMS로 전화번호 인증이 성공하면, LINE 계정에서 "Your phone number has been changed" 메시지를 받게 됩니다. |

<style scoped>
.table-user-content-flow td:nth-child(2) {
    min-width: 160px;
}
.table-user-content-flow td:nth-child(3) {
    min-width: 200px;
}
</style>
