# 채팅 주도권 제어(Chat Control)

<!-- warning start -->

**경고**

현재 제공되는 모듈 채널은 LINE 공식 계정에 연결될 때 [(Default Active)](https://developers.line.biz/en/docs/partner-docs/module-technical-chat-control/#default-active)를 통해 자동으로 채팅 주도권을 획득하므로, 채팅 주도권을 별도로 제어할 필요가 없습니다.

<!-- warning end -->

<!-- note start -->

**선택 기능을 사용하려면 절차가 필요합니다**

이 문서에 설명된 기능은 소정의 신청을 완료한 법인 고객만 사용할 수 있습니다. 모듈을 사용하여 확장 기능을 게시하려면 영업 담당자에게 문의하거나 [LINE Marketplace 문의](https://line-marketplace.com/jp/inquiry)(일본어만 제공)를 통해 문의해 주십시오.

<!-- note end -->

## 채팅 제어(Chat Control)란 무엇인가 

여러 모듈 채널이 동시에 최종 사용자의 동작에 응답하거나 처리하는 것을 방지하기 위해, 모듈 채널에 대한 주도권(Chat Control) 개념을 도입했습니다.

![Chat control](https://developers.line.biz/media/partner-docs/module-technical/chat-control-en.png)

| 주도권(Chat Control) | 설명 |
| --- | --- |
| Active Channel(활성 채널) | 주도권(Chat Control)을 가진 채널입니다. 기본적으로 Primary CH(LINE 공식 계정과 연결된 표준 Messaging API 채널)가 "Active Channel"입니다.<br>이 채널에서 응답 메시지, 푸시 메시지 등을 보낼 수 있습니다.<br>LINE 공식 계정마다 "Active Channel"은 하나만 연결할 수 있습니다. |
| Standby Channel(대기 채널) | Chat Control이 없는 채널입니다.<br>이 채널에서 메시지를 보내지 않도록 주의해 주십시오.<br>Active Channel이 아닌 모든 채널은 "Standby Channel"입니다. |

<!-- note start -->

**주도권(Chat Control)은 모듈 채널별로 일괄 설정되지 않습니다**

주도권(Chat Control)은 사용자별, 채팅방별 또는 그룹별로 관리됩니다.

<!-- note end -->

<!-- note start -->

**"Default Active" 기능이 있는 모듈 채널**

"Default Active" 기능이 있는 모듈 채널은 LINE 공식 계정에 연결하면 자동으로 Active Channel이 되는 모듈 채널입니다.

자세한 내용은 [Default Active](https://developers.line.biz/en/docs/partner-docs/module-technical-chat-control/#default-active)를 참조해 주십시오.

<!-- note end -->

## API 레퍼런스 

- [Acquire Control API](https://developers.line.biz/en/reference/partner-docs/#acquire-control-api)
- [Release Control API](https://developers.line.biz/en/reference/partner-docs/#release-control-api)

## Default Active 

LINE 마켓플레이스에서 제공되는 모듈 채널에는 "Default Active" 기능이 부여됩니다.

<!-- note start -->

**이 기능은 LINE 마켓플레이스 전용입니다**

"Default Active" 기능은 [LINE 마켓플레이스](https://line-marketplace.com/jp/inquiry)에 게시된 모듈 채널에서만 사용할 수 있습니다.

<!-- note end -->

"Default Active" 기능이 있는 모듈 채널의 기능은 다음과 같습니다.

### 자동 활성화 

일반 모듈 채널은 LINE 공식 계정에 연결되면 Standby Channel이 됩니다. 그 후 모듈 채널은 필요에 따라(사용자 동작 등을 계기로) Acquire Control API를 사용하여 채팅 주도권(Chat Control)을 획득하고 Active Channel이 됩니다.

"Default Active" 기능이 부여된 모듈 채널은 LINE 공식 계정에 연결되면 자동으로 Active Channel이 됩니다. 따라서 Acquire Control API를 호출할 필요가 없습니다.

### 배타적 제어 

LINE 공식 계정에는 "Default Active" 기능이 있는 모듈 채널을 하나만 연결할 수 있습니다.

이미 "Default Active" 기능이 있는 모듈 채널이 LINE 공식 계정에 연결되어 있다면, 같은 계정에 다른 "Default Active" 모듈 채널은 연결할 수 없습니다.

"Default Active" 기능이 없는 모듈 채널은 여러 개를 연결할 수 있지만, 현재는 이러한 기능을 제공하지 않습니다.
