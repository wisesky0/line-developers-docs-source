# 오류 알림

<!-- note start -->

**선택 기능을 사용하려면 신청이 필요합니다**

필요한 신청서를 제출한 법인 사용자만 이 문서에 설명된 기능을 사용할 수 있습니다. LINE 공식 계정에서 이러한 기능을 사용하려면 영업 담당자 또는 [영업 파트너](https://www.lycbiz.com/jp/partner/sales/)에게 문의해 주십시오.

<!-- note end -->

## 개요 

사용자가 LINE 공식 계정을 친구로 추가하거나 LINE 공식 계정에 메시지를 보내면, LINE 플랫폼은 [LINE Developers Console](https://developers.line.biz/console/)의 "Webhook URL"에 지정된 URL(봇 서버)로 웹훅 이벤트를 보냅니다.

봇 서버가 이 웹훅 이벤트 요청에 응답하지 않거나 상태 코드 `2xx` 이외의 응답을 반환하면, 채널 관리자는 오류 발생을 알리는 알림 이메일을 받게 됩니다. 이 옵션을 "오류 알림" 기능이라고 합니다.

![봇 서버에서 오류가 반환되면 알림 이메일을 받게 됩니다](https://developers.line.biz/media/partner-docs/normal-error-notification-en.webp)

## 알림 이메일 

이 항목에서는 오류 알림 기능으로 발송되는 이메일을 설명합니다.

### 이메일 수신자 

알림 이메일은 다음 이메일 주소로 발송됩니다.

- 대상 채널의 **Basic settings** 페이지에 등록된 이메일 주소
- 대상 채널의 Admin 역할을 가진 사용자의 등록된 이메일 주소

### 이메일 유형 

알림 이메일은 다음 유형으로 나뉩니다.

- [LINE 플랫폼이 오류를 감지한 경우](https://developers.line.biz/en/docs/partner-docs/error-notification/#detected-error)
- [LINE 플랫폼이 웹훅 재전송을 중단한 경우](https://developers.line.biz/en/docs/partner-docs/error-notification/#webhook-redelivery-stopped) (웹훅 재전송이 활성화된 경우에만 해당)

#### LINE 플랫폼이 오류를 감지한 경우 

LINE 플랫폼이 오류가 발생했음을 감지하면 다음 이메일이 발송됩니다. 이메일의 내용과 오류 메시지는 예고 없이 변경될 수 있습니다.

| | |
| --- | --- |
| Subject | Messaging API: Your bot server returned no response or an error - `<Channel name>` |
| 본문 | LINE 플랫폼이 웹훅을 보냈지만, 봇 서버가 응답하지 않았거나 오류를 반환했습니다.<br/>오류의 원인과 세부 정보, 봇 서버의 구성을 확인해 주십시오. 그런 다음 웹훅을 올바르게 수신할 수 있도록 필요한 변경을 수행해 주십시오. |
| 오류 세부 정보 | 상황별로 오류 원인과 발생 날짜 및 시각이 기재됩니다. 자세한 내용은 [이메일 내용](https://developers.line.biz/en/docs/partner-docs/error-notification/#content)을 참조해 주십시오. |

<!-- tip start -->

**LINE Developers Console에서도 오류 정보를 확인할 수 있습니다**

알림 이메일에서 받은 오류 정보는 [LINE Developers Console](https://developers.line.biz/console/)에서도 확인할 수 있습니다. 자세한 내용은 [LINE Developers Console의 "Webhook errors" 탭](https://developers.line.biz/en/docs/partner-docs/error-notification/#line-developers-console)을 참조해 주십시오.

<!-- tip end -->

#### LINE 플랫폼이 웹훅 재전송을 중단한 경우 

Messaging API 채널 설정에서 [웹훅 재전송을 활성화](https://developers.line.biz/en/docs/messaging-api/receiving-messages/#enable-webhook-redelivery)한 경우, LINE 플랫폼은 봇 서버가 수신하지 못한 웹훅을 다시 보냅니다.

이후 일정 시간이 지나도 봇 서버가 응답하지 않으면, LINE 플랫폼은 웹훅 재전송을 중단하고 다음 이메일을 보냅니다. 이메일의 제목과 내용은 예고 없이 변경될 수 있습니다.

| | |
| --- | --- |
| Subject | Messaging API: Webhook redelivery stopped - `<Channel name>` |
| 본문 | LINE 플랫폼이 이벤트에 대한 웹훅을 보내려고 했지만, 봇 서버의 응답이 없어 재전송을 중단했습니다.<br>자세한 내용은 LINE Developers 사이트를 확인해 주십시오. |
| 오류 세부 정보 | 상황별로 오류 원인과 발생 날짜 및 시각이 기재됩니다. 자세한 내용은 [이메일 내용](https://developers.line.biz/en/docs/partner-docs/error-notification/#content)을 참조해 주십시오. |

웹훅 재전송에 대한 자세한 내용은 [수신하지 못한 웹훅 재전송](https://developers.line.biz/en/docs/messaging-api/receiving-messages/#webhook-redelivery)을 참조해 주십시오.

### 알림 이메일 예시 

![알림 이메일 예시](https://developers.line.biz/media/partner-docs/error-notification-email-sample.webp)

### 이메일 내용 

이메일에는 다음 내용이 포함됩니다.

| 항목 | 설명 |
| --- | --- |
| Channel ID | 대상 채널 ID입니다. |
| Channel name | 대상 채널 이름입니다. |
| 오류 원인 | 오류 원인의 개요입니다. 자세한 내용은 Messaging API 문서의 [오류 원인 확인](https://developers.line.biz/en/docs/messaging-api/check-webhook-error-statistics/#check-error-reason)을 참조해 주십시오. |
| 오류 세부 정보 | 오류 원인의 세부 내용입니다. 자세한 내용은 Messaging API 문서의 [오류 세부 정보 확인](https://developers.line.biz/en/docs/messaging-api/check-webhook-error-statistics/#check-detail-for-error)을 참조해 주십시오. |
| 오류 횟수 | 5분(300초) 이내에 발생한 동일한 HTTP 상태 코드의 오류 수입니다. HTTP 상태 코드가 없는 오류는 그룹화되어 같은 오류로 집계됩니다. 같은 오류로 집계된 항목은 하나의 알림 이메일에 포함됩니다. |
| 감지 시각 | LINE 플랫폼이 오류를 감지한 날짜와 시각입니다. |

## 알림 메시지 해결 방법 

[알림 이메일 예시](https://developers.line.biz/en/docs/partner-docs/error-notification/#sample-mail)와 같은 오류 알림을 받았다고 가정해 보겠습니다. 오류 원인이 `error_status_code`이고 오류 세부 정보가 `500`이므로, [오류 원인 확인](https://developers.line.biz/en/docs/messaging-api/check-webhook-error-statistics/#check-error-reason)에 따라 봇 서버가 웹훅 요청에 HTTP 상태 코드 `500`으로 응답했다고 추정할 수 있습니다.

이 경우 봇 서버가 수신한 웹훅 이벤트를 올바르게 처리하지 못했을 수 있습니다. 봇 서버의 웹훅 이벤트 처리 로그를 확인하여 문제의 원인을 조사해 주십시오.

<!-- note start -->

**오류 조사에 대하여**

LY Corporation은 개별 오류 조사나 확인을 제공하지 않습니다. 오류의 원인은 채널이나 봇 서버를 관리하는 개발자가 직접 해결해야 합니다.

<!-- note end -->

## LINE Developers Console의 "Webhook errors" 탭 

알림 이메일에서 받은 오류 정보는 [LINE Developers Console](https://developers.line.biz/console/)의 Messaging API 채널 **Webhook errors** 탭에서도 확인할 수 있습니다.

**Webhook errors** 탭은 **Messaging API** 탭에서 **Error statistics aggregation**이 활성화된 채널에만 표시됩니다. 자세한 내용은 [오류 통계 활성화](https://developers.line.biz/en/docs/messaging-api/check-webhook-error-statistics/#enable-error-statistics)를 참조해 주십시오.

![오류 통계 집계](https://developers.line.biz/media/messaging-api/receiving-messages/error-statistics-en.webp)
