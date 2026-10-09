# 모듈

<!-- note start -->

**선택 기능을 사용하려면 절차가 필요합니다**

이 문서에 설명된 기능은 소정의 신청을 완료한 법인 고객만 사용할 수 있습니다. 모듈을 사용하여 확장 기능을 게시하려면 영업 담당자에게 문의하거나 [LINE Marketplace 문의](https://line-marketplace.com/jp/inquiry)(일본어만 제공)를 통해 문의해 주십시오.

<!-- note end -->

## 개요 

모듈은 LINE 공식 계정에 연결(attach)하여 Messaging API를 사용하는 기능을 추가할 수 있는 메커니즘입니다. 모듈은 [모듈 채널](https://developers.line.biz/en/docs/line-developers-console/overview/#channel)이라는 채널 유형으로 제공됩니다. LINE 공식 계정에 Messaging API 채널이 없더라도, 모듈 채널에서 Messaging API를 호출하여 사용자에게 메시지를 보내고 리치 메뉴를 설정할 수 있습니다.

![모듈 채널](https://developers.line.biz/media/partner-docs/module/module-channel-en.webp)

### 모듈 채널과 LINE 공식 계정의 관계 

일반적으로 하나의 LINE 공식 계정에는 Messaging API 채널을 하나만 만들(개설할) 수 있습니다. 반면 모듈 채널은 여러 LINE 공식 계정에 연결할 수 있습니다.

![같은 서비스 연결](https://developers.line.biz/media/partner-docs/module-technical/attach-same-service-en.png)

- OA "X", OA "Y", OA "Z": LINE 공식 계정
- Module CH: 모듈 채널
- System: 모듈 채널의 웹훅 대상 및 봇 서버

<!-- tip start -->

**모듈 채널에 사용되는 서버에 대하여**

모듈 채널에서 LINE 플랫폼 시스템과 통신하는 서버는 모듈 채널을 개발하는 회사가 준비합니다. 웹훅 대상으로 설정하는 서버와 Messaging API를 호출하는 서버는 같을 필요가 없습니다.

<!-- tip end -->

### 모듈 사용 예시 

예를 들어, LINE 공식 계정 관리자의 채팅 기능을 사용하여 사용자와 소통하는 LINE 공식 계정이 있다고 가정해 보겠습니다. 이 LINE 공식 계정에 "매장 예약 기능이 있는 모듈 채널"을 연결하면, LINE 공식 계정 관리자에서 사용자와 채팅하면서 모듈을 통해 매장 예약 절차를 자동화할 수 있습니다.

<!-- tip start -->

**모듈 채널에는 웹훅이 활성화되어 있습니다**

LINE 공식 계정의 응답 설정에서 [웹훅 사용이 비활성화](https://developers.line.biz/en/reference/messaging-api/#get-webhook-endpoint-information)되어 있으면, Messaging API 채널로는 웹훅 이벤트가 전송되지 않습니다. 이 설정에서도 모듈 채널에는 웹훅 이벤트가 계속 전송됩니다.

수신한 웹훅 이벤트의 내용에 따라, 모듈 채널은 사용자에게 메시지를 보내도록 구현할 수 있습니다.

<!-- tip end -->

![샘플](https://developers.line.biz/media/partner-docs/module/module-sample.webp)

| 번호 | 설명 |
| --- | --- |
| 1 | 사용자가 메시지를 보냅니다 |
| 2 | 운영자가 LINE 공식 계정 관리자의 채팅 기능으로 사용자에게 메시지를 보냅니다 |
| 3 | 사용자가 리치 메뉴를 눌러 예약 기능이 있는 모듈을 실행합니다 |
| 4 | 예약 기능 봇이 응답하고 예약 절차가 시작됩니다 |

## 참고 

모듈이 제공하는 REST API 등 기술 사양에 대한 자세한 내용은 법인 고객용 API 레퍼런스의 [모듈](https://developers.line.biz/en/reference/partner-docs/#module)을 참조해 주십시오.

## 필요한 시스템과 메커니즘 준비 

<!-- note start -->

**참고**

현재 모듈은 [LINE Marketplace](https://line-marketplace.com/)(일본어만 제공)에서 유료 확장 기능으로만 게시할 수 있습니다.

<!-- note end -->

LY Corporation이 모듈에서 제공하는 기능은 다음과 같습니다.

| 기능 이름 | 설명 |
| --- | --- |
| 모듈 채널을 LINE 공식 계정에 연결하는 메커니즘 | OAuth 2.0 인증 메커니즘과 REST API를 사용하여 모듈 채널을 LINE 공식 계정에 연결하는 메커니즘을 제공합니다. 자세한 내용은 [OAuth 2.0 인증 메커니즘을 사용하여 모듈 채널 연결](https://developers.line.biz/en/docs/partner-docs/module-technical-attach-channel/#attach-module-channels-using-oauth-2-0-auth-mechanism)을 참조해 주십시오. |
| 모듈 채널에서 LINE 공식 계정 연결을 해제하는 API | 모듈 채널에서 LINE 공식 계정 연결을 해제하는 REST API를 제공합니다. 자세한 내용은 법인 고객용 API 레퍼런스의 [모듈 채널 관리자의 작업으로 모듈 채널 연결 해제(detach)](https://developers.line.biz/en/reference/partner-docs/#unlink-detach-module-channel-by-operation-mc-admin)를 참조해 주십시오. |
| 채팅 주도권을 제어하는 API | 모듈 채널에는 채팅 주도권(Chat Control)이라는 개념이 있습니다. 주도권을 가진 채널에서 사용자, 그룹 또는 채팅방에 [응답 메시지](https://developers.line.biz/en/reference/messaging-api/#send-reply-message)를 보낼 수 있습니다.<br>LINE 마켓플레이스에서 제공하는 모듈 채널은 일반적으로 주도권 제어가 필요하지 않지만, 예기치 않은 이벤트로 채팅 주도권이 변경된 경우에 대비하여 채팅 주도권을 제어하는 REST API를 제공합니다.<br>자세한 내용은 [채팅 주도권 제어(Chat Control)](https://developers.line.biz/en/docs/partner-docs/module-technical-chat-control/)를 참조해 주십시오. |
| 모듈 채널에서 Messaging API를 사용하는 메커니즘 | 모듈 채널에서 Messaging API를 호출할 때는 모듈 전용 특수 요청 헤더를 지정해야 합니다. 자세한 내용은 [모듈 채널에서 Messaging API 사용하기](https://developers.line.biz/en/docs/partner-docs/module-technical-using-messaging-api/)를 참조해 주십시오. |
| 모듈 채널 전용 웹훅 이벤트 | 모듈 채널은 전용 웹훅 이벤트를 제공합니다. 자세한 내용은 [모듈 채널 전용 웹훅 이벤트 수신하기](https://developers.line.biz/en/docs/partner-docs/module-technical-using-messaging-api/#get-module-channel-specific-webhook-events)를 참조해 주십시오. |
| 모듈 채널에 연결된 LINE 공식 계정 정보를 가져오는 API | 모듈 채널에 연결된 LINE 공식 계정 정보를 가져오는 REST API를 제공합니다. 자세한 내용은 [모듈 채널에서 LINE 공식 계정 정보 가져오기](https://developers.line.biz/en/docs/partner-docs/module-technical-using-messaging-api/#get-line-oa-info-from-module-channel)를 참조해 주십시오. |

위 항목 외에 LINE 마켓플레이스에서 확장 기능을 게시하는 데 필요한 나머지 시스템(서버 등)과 메커니즘은 모두 고객이 제공(개발)해야 합니다. 예를 들면 다음과 같습니다.

- [모듈이 제공하는 기능을 사용하는 메커니즘](https://developers.line.biz/en/docs/partner-docs/module/#develop-your-system)
- [모듈 채널에서 Messaging API를 사용하는 메커니즘](https://developers.line.biz/en/docs/partner-docs/module/#develop-messaging-api-and-backend)
- [사용자가 확장 기능을 사용하기 위한 관리 화면과 운영 콘솔의 메커니즘](https://developers.line.biz/en/docs/partner-docs/module/#develop-cms)
- [모듈 이용 요금의 결제 및 관리 메커니즘](https://developers.line.biz/en/docs/partner-docs/module/#manage-payment-system)
- [사용자 지원 메커니즘](https://developers.line.biz/en/docs/partner-docs/module/#user-support)

### 모듈이 제공하는 기능을 사용하는 메커니즘 

모듈 채널은 [OAuth 2.0 인증 코드 승인 흐름](https://datatracker.ietf.org/doc/html/rfc6749)을 기반으로 LINE 공식 계정과 함께 사용됩니다. 고객은 OAuth 2.0 인증 코드를 발급하는 시스템(인증 요청)을 포함하여, [필요한 시스템과 메커니즘 준비](https://developers.line.biz/en/docs/partner-docs/module/#module-functions)에 설명된 기능을 사용하기 위한 여러 메커니즘을 준비해야 합니다.

### 모듈 채널에서 Messaging API를 사용하는 메커니즘 

모듈 채널을 통해 연결된 LINE 공식 계정에서 Messaging API를 사용하려면, 모듈 채널 전용 특수 요청 헤더를 지정하여 Messaging API를 요청해야 합니다. 고객은 Messaging API를 요청하는 메커니즘과 모듈이 제공하는 확장 기능(챗봇 등)을 위한 메커니즘을 준비해야 합니다.

<!-- tip start -->

**메시지 발송에 추가 비용이 발생할 수 있습니다**

모듈 채널에서 Messaging API를 호출하여 사용자에게 메시지를 보내는 경우, 모듈 채널에 연결된 LINE 공식 계정의 운영자는 [Messaging API 요금](https://developers.line.biz/en/docs/messaging-api/pricing/)을 지불해야 할 수 있습니다. 이는 Messaging API 채널에서 Messaging API를 사용하여 메시지를 보낼 때와 같습니다.

<!-- tip end -->

### 사용자가 확장 기능을 사용하기 위한 관리 화면과 운영 콘솔의 메커니즘 

고객은 모듈에 구현된 확장 기능을 사용자가 이용할 수 있도록 자체 관리 화면, 운영 콘솔 등 필요한 메커니즘을 제공해야 합니다.

### 모듈 이용 요금의 결제 및 관리 메커니즘 

모듈은 [LINE Marketplace](https://line-marketplace.com/)(일본어만 제공)에서 유료 확장 기능으로 제공됩니다. 고객은 확장 기능을 사용하는 사용자를 관리하고 이용 요금을 정산하기 위한 메커니즘을 직접 제공해야 합니다.

### 사용자 지원 메커니즘 

고객은 모듈 확장 기능을 사용하는 사용자를 위한 지원 메커니즘을 준비해야 합니다. LY Corporation은 [LINE Marketplace](https://line-marketplace.com/jp/inquiry)(일본어만 제공)에 게시된 확장 기능의 사용자에게 지원을 제공하지 않습니다.

## 참고 사항 

LINE Marketplace에서 모듈 채널 기능을 사용할 때 다음 사항을 준수해야 합니다.

- [Messaging API 채널에서의 Messaging API 호출(결합 사용)](https://developers.line.biz/en/docs/partner-docs/module/#restrict-messaging-api-request)
- [연결할 수 있는 모듈 채널의 최대 수](https://developers.line.biz/en/docs/partner-docs/module/#attach-limit)
- [모듈 채널에서 사용할 수 있는 Messaging API 종류](https://developers.line.biz/en/docs/partner-docs/module/#module-scopes)
- [웹훅 이벤트 받기](https://developers.line.biz/en/docs/partner-docs/module/#bot-module-channel-receive-webhook)

### Messaging API 채널에서의 Messaging API 호출(결합 사용) 

모듈 채널에 연결된 LINE 공식 계정에 대해서는 Messaging API 채널에서 Messaging API를 사용하지 않는 것을 권장합니다. 시스템 구현에 따라서는 모듈이 제공하는 확장 기능에서 예기치 않은 동작이 발생할 수 있기 때문입니다.

예를 들어 다음과 같은 문제가 발생할 수 있습니다.

- [Messaging API를 통해 리치 메뉴를 사용자에게 연결](https://developers.line.biz/en/reference/messaging-api/#link-rich-menu-to-user)하여 모듈이 제공하는 리치 메뉴가 표시되지 않을 수 있습니다.
- 사용자가 Messaging API 채널에서 보낸 메시지에 메시지를 보내거나 동작을 수행하면 [웹훅 이벤트가 전송](https://developers.line.biz/en/docs/partner-docs/module/#bot-module-channel-receive-webhook)됩니다. 이 웹훅 이벤트는 모듈의 시스템에서 예상하지 않은 것이므로 올바르게 처리되지 않을 수 있습니다.

### 연결할 수 있는 모듈 채널의 최대 수 

LINE 마켓플레이스에서는 하나의 LINE 공식 계정에 동시에 하나의 모듈 채널(확장 기능)만 연결할 수 있습니다.

### 모듈 채널에서 사용할 수 있는 Messaging API 종류 

모듈 채널에서 사용할 수 있는 Messaging API의 종류는 모듈 채널을 연결할 때 부여된 권한(스코프)에 따라 달라집니다. 자세한 내용은 모듈 채널 연결 문서의 [스코프](https://developers.line.biz/en/docs/partner-docs/module-technical-attach-channel/#scopes)를 참조해 주십시오.

### 웹훅 이벤트 받기 

모듈 채널에서는 웹훅 이벤트를 받기 위한 엔드포인트 URL을 하나 설정할 수 있습니다.

모듈 채널이 LINE 공식 계정에 연결되면, LINE 공식 계정의 채팅방에 전송된 내용에 해당하는 웹훅 이벤트도 모듈 채널에 설정된 엔드포인트로 전송됩니다. 모듈 채널의 웹훅 이벤트에 대한 자세한 내용은 [웹훅 수신하기](https://developers.line.biz/en/docs/partner-docs/module-technical-using-messaging-api/#get-webhook)를 참조해 주십시오.

<!-- tip start -->

**모듈 채널 전용 웹훅 이벤트**

모듈 채널에만 전송되는 웹훅 이벤트가 있습니다. 자세한 내용은 [모듈 채널 전용 웹훅 이벤트 수신하기](https://developers.line.biz/en/docs/partner-docs/module-technical-using-messaging-api/#get-module-channel-specific-webhook-events)를 참조해 주십시오.

<!-- tip end -->

<!-- note start -->

**Messaging API 채널의 웹훅 이벤트에 대하여**

모듈 채널에 연결된 LINE 공식 계정이 [Messaging API 채널을 사용](https://developers.line.biz/en/docs/messaging-api/getting-started/)하고 [웹훅 사용이 활성화](https://developers.line.biz/en/docs/messaging-api/building-bot/#set-up-bot-on-line-developers-console)되어 있다면, 웹훅 이벤트는 모듈 채널과 Messaging API 채널에 설정된 엔드포인트 URL 모두로 전송됩니다. 이 경우 Messaging API 채널의 엔드포인트 URL로 전송되는 웹훅 이벤트는 [`mode` 속성이 `standby`](https://developers.line.biz/en/reference/messaging-api/#common-properties)로 설정되며, [응답 메시지를 보내기](https://developers.line.biz/en/reference/messaging-api/#send-reply-message) 위한 reply token이 포함되지 않습니다.

<!-- note end -->
