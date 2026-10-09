# 법인 고객을 위한 개발 가이드라인

법인 사용자를 위한 개발 가이드라인입니다. LINE 플랫폼에서 개발할 때 이 가이드라인을 따르세요.

**목차**

<!-- table of contents -->

## LINE 봇 소개 

### LINE Developers란? 

LY Corporation은 외부 기업과 개발자가 LY Corporation 서비스와 연동할 수 있도록 API를 제공합니다. LINE Developers 사이트는 개발자에게 LINE API 사양, 개발 절차를 설명하는 문서, 설정용 콘솔을 제공합니다. 자세한 내용은 [LINE Developers 사이트 소개](https://developers.line.biz/en/about/)를 참고하세요.

### LINE 봇의 작동 방식 

LINE 봇은 Messaging API를 사용하여 정보를 주고받습니다. 자세한 내용은 Messaging API 문서의 [작동 방식](https://developers.line.biz/en/docs/messaging-api/overview/#how-messaging-api-works)을 참고하세요.

### LINE 봇과 채널의 관계 

LINE 공식 계정의 구성 요소인 봇과 채널의 관계는 다음과 같습니다.

![봇과 채널의 관계](https://developers.line.biz/media/partner-docs/bot-and-channel-relations-en.webp)

### 다양한 용어 이해하기 

다양한 용어에 대해서는 [용어집](https://developers.line.biz/en/glossary/)을 참고하세요.

### LINE 봇 개발 절차 

1. LINE 공식 계정(봇)과 Messaging API 채널을 만듭니다.

   다음 사이트 중 하나에서 만들 수 있습니다.
   - LINE 공식 계정 관리자
   - LINE AGP

   Messaging API 채널을 만드는 방법은 Messaging API 문서의 [Messaging API 시작하기](https://developers.line.biz/en/docs/messaging-api/getting-started/)를 참고하세요.

1. 다음 시스템과 메커니즘을 준비합니다.
   - Messaging API를 호출하는 서버 등의 환경([TLS 1.2 이상](https://developers.line.biz/en/docs/partner-docs/development-guidelines/#use-higher-TLS1-2) 지원)
   - 웹훅 이벤트를 받는 봇 서버 등의 환경([TLS 1.2 이상](https://developers.line.biz/en/docs/partner-docs/development-guidelines/#https-communication-compatible) 지원)

   Messaging API를 호출하는 서버 등의 환경과 웹훅 이벤트를 받는 봇 서버 등의 환경을 반드시 따로 준비해야 하는 것은 아닙니다.

1. 웹훅 이벤트를 받을 봇 서버를 준비하고 구현합니다.

1. LINE Developers Console에서 **Messaging API** > **Webhook settings**로 이동하여 **Webhook URL**에 봇 서버 URL을 설정한 후 **Use Webhook**을 활성화합니다.

1. 만든 LINE 공식 계정을 친구로 추가하고 봇 서버가 웹훅 이벤트를 받고 있는지 확인합니다.

### LINE 봇을 출시하기 전에 확인할 사항 

LINE 봇을 출시하기 전에 반드시 다음 사항을 확인하세요.

1. LINE Developers Console에 접근해야 하는 멤버에게 채널 [권한](https://developers.line.biz/en/docs/line-developers-console/managing-roles/)과 LINE 공식 계정 관리자 [권한](https://www.lycbiz.com/jp/manual/OfficialAccountManager/account-settings_permission/)(일본어로만 제공됩니다)을 부여했는지 확인합니다.

1. LINE Developers Console의 **Messaging API** > **Webhook settings** > **Webhook URL**에 올바른 URL이 설정되어 있는지, 봇 서버가 웹훅 이벤트를 올바르게 처리할 수 있는지 확인합니다.

1. [API 요청 보낼 때의 주의 사항](https://developers.line.biz/en/docs/partner-docs/development-guidelines/#send-api-requests)에 설명된 사항을 고려하여 구현합니다.

1. [LINE BOT 보안 가이드라인](https://vos.line-scdn.net/line-developers/docs/media/partner-docs/LINE_BOT_Security_Guidelines.pdf)(일본어로만 제공됩니다)과 [LINE BOT 보안 체크리스트](https://vos.line-scdn.net/line-developers/docs/media/partner-docs/LINE_BOT_Security_Checklist.xlsx)(일본어로만 제공됩니다)의 보안 기준을 준수하거나, 이와 같거나 더 나은 환경을 구축합니다.

## 봇 서버에서 웹훅 이벤트를 받을 때의 주의 사항 

### 보안 통신과 봇 서버 환경 

#### TLS 1.2 이상을 지원하는 HTTPS 통신 

봇 서버가 LINE 플랫폼에서 보낸 웹훅 이벤트를 받을 때는 TLS 1.2 이상을 지원하는 HTTPS 통신을 사용해야 합니다. HTTPS 통신에는 공인 인증 기관이 발급한 SSL 인증서를 사용하세요. SSL 인증서를 구매하거나 [Let's Encrypt](https://letsencrypt.org/)처럼 무료로 발급받은 인증서를 사용할 수 있습니다. 웹훅 설정에 대한 자세한 내용은 Messaging API 문서의 [웹훅 URL 설정하기](https://developers.line.biz/en/docs/messaging-api/building-bot/#setting-webhook-url)를 참고하세요.

#### 보안 가이드라인을 준수하는 환경 구축하기 

이 보안 가이드라인과 체크리스트는 봇 서버를 구축할 때 충족해야 하는 보안 기준을 설명합니다. LINE 봇을 사용하여 서비스를 제공할 때는 명시된 보안 기준을 준수하거나 이와 같거나 더 나은 환경을 준비하세요.

- [LINE 봇 보안 가이드라인](https://vos.line-scdn.net/line-developers/docs/media/partner-docs/LINE_BOT_Security_Guidelines.pdf)(일본어로만 제공됩니다)
- [LINE 봇 보안 체크리스트](https://vos.line-scdn.net/line-developers/docs/media/partner-docs/LINE_BOT_Security_Checklist.xlsx)(일본어로만 제공됩니다)

### 받은 웹훅 이벤트의 검증 

요청 헤더 [`x-line-signature`](https://developers.line.biz/en/reference/messaging-api/#webhooks)에는 받은 웹훅 이벤트가 LINE 플랫폼에서 왔음을 검증하기 위한 서명이 포함되어 있습니다. 봇 서버는 정의된 알고리즘을 사용하여 받은 요청 본문에서 다이제스트 값을 구하고, 이것이 `x-line-signature` 요청 헤더의 서명과 일치하는지 확인합니다. 서명이 일치함을 확인하면 받은 요청이 LINE 플랫폼이 보낸 올바른 웹훅 이벤트임을 검증할 수 있습니다.

채널 시크릿은 서명 계산에 사용되는 키입니다. 따라서 채널 시크릿을 다룰 때 주의하세요. 자세한 내용과 코드 예시는 Messaging API 레퍼런스의 [서명 검증](https://developers.line.biz/en/reference/messaging-api/#signature-validation)을 참고하세요.

<!-- note start -->

**LINE 플랫폼의 IP 주소는 공개되지 않습니다**

웹훅 요청을 보내는 LINE 플랫폼의 IP 주소는 공개되지 않습니다. 보안을 강화하려면 IP 주소로 접근을 제어하는 대신 [서명 검증](https://developers.line.biz/en/reference/messaging-api/#signature-validation)을 사용하세요.

<!-- note end -->

![서명 검증 이미지](https://developers.line.biz/media/partner-docs/webbhook-signature-verification-en.webp)

### 대량 및 집중적인 웹훅 이벤트 전달 대응 

LINE 공식 계정의 특성상 예기치 않게 많은 접근(웹훅 이벤트 전송)이 발생할 수 있습니다. 봇 서버의 처리 능력을 초과하는 웹훅 요청이 전송되면 사용자에게 보내는 메시지가 지연되거나 전달되지 않을 수 있습니다.

<!-- tip start -->

**접근이 집중될 가능성이 높은 경우의 예**

- LINE 공식 계정의 [검색 결과 및 추천에 표시](https://www.lycbiz.com/jp/manual/OfficialAccountManager/tutorial-step5/)(일본어로만 제공됩니다)를 "표시"로 설정한 직후
- [스폰서 스티커](https://www.lycbiz.com/jp/service/line-promotion-sticker/)(일본어로만 제공됩니다) 등의 조치를 시행한 직후
- [브로드캐스트 메시지](https://developers.line.biz/en/reference/messaging-api/#send-broadcast-message) 등을 사용하여 모든 친구에게 한 번에 메시지를 보낸 직후(특히 캠페인 등의 조치를 포함한 경우)
- 뉴스나 TV 등 미디어에 소개된 직후

접근은 특히 낮 12시와 오후 5시부터 밤 12시 사이에 집중될 수 있습니다.

<!-- tip end -->

<!-- note start -->

**참고**

- LY Corporation은 봇 서버에 대해 부하 테스트를 수행할 수 있는 환경을 제공하지 않습니다. LINE 플랫폼을 포함하는 방식으로 부하 테스트를 하지 마세요.
- 친구 수가 많은(100만 명 이상) LINE 공식 계정에서 사용자 반응이 큰 캠페인 등의 공지 메시지를 보내면 LINE 플랫폼 전체의 성능에 영향을 줄 수 있습니다. 이런 경우에는 한꺼번에 메시지를 보내지 말고, 사용자 접근이 집중되지 않도록 단계적으로 메시지를 보내는 등의 조치를 취하세요.

<!-- note end -->

### 웹훅 ON/OFF 설정 

LINE Developers Console의 **Messaging API settings** > **Webhook settings**에서 **Use webhook**을 켜거나 끌 수 있습니다. 또한 LINE 공식 계정 관리자의 **Settings** > **Response settings** 섹션에서 **Webhooks**를 켜거나 끌 수 있습니다.

<!-- note start -->

**웹훅 사용을 시작할 때의 주의 사항**

웹훅 설정을 활성화할 때는 대상 LINE 공식 계정에 설정을 적용하기 전에 검증용 계정으로 테스트 환경에서 동작을 확인하세요.

<!-- note end -->

<!-- tip start -->

**웹훅 설정 동기화**

LINE Developers Console과 LINE 공식 계정 관리자에서 한 웹훅 설정은 서로 동기화됩니다.

<!-- tip end -->

### 웹훅 ON/OFF 및 자동 응답 메시지 설정 

LINE 공식 계정 관리자의 **Webhooks** 설정과 **Response mode** 및 **Greeting message** 설정을 조합한 내용입니다.

| **Webhooks** | **Response mode** 및 **Greeting message** | 설정 가능 여부 |
| --- | --- | --- |
| 사용 | 사용 | ✅ |
| 사용 | 사용 안 함 | ✅ |
| 사용 안 함 | 사용 | ✅ |
| 사용 안 함 | 사용 안 함 | ❌ |

<!-- note start -->

**허용되지 않는 설정 조합**

사용자에게 더 나은 경험을 제공하기 위해, **Webhooks**와 LINE 공식 계정 관리자의 **Response mode** 및 **Greeting message** 설정을 모두 사용하지 않는 설정은 허용되지 않습니다. 이러한 설정은 LINE 공식 계정이 사용자에게 메시지를 보내지 못하게 하기 때문입니다.

<!-- note end -->

<!-- note start -->

**인사 메시지가 전송되는 경우**

LINE 공식 계정 관리자의 **Greeting message**는 LINE 공식 계정을 추가할 때 자동으로 전송되는 메시지입니다. **Greeting message**는 차단 해제 시에도 전송됩니다.

<!-- note end -->

### 웹훅 요청을 받을 때의 처리 흐름 

봇 서버가 웹훅 이벤트를 받은 후 2초 이내에 HTTP 상태 코드 `200`으로 응답하세요.

봇 서버가 웹훅 요청을 받을 때 웹훅 요청의 처리가 후속 처리를 지연시키지 않도록 이벤트 처리를 비동기로 처리하는 것을 권장합니다. 이벤트 처리를 비동기로 하는 경우, 이벤트의 컨텍스트를 유지하면서 처리할 수 있도록 구현하세요.

다음 이미지는 비동기 처리를 나타냅니다.

![웹훅 요청을 받을 때의 처리 흐름](https://developers.line.biz/media/partner-docs/flow-when-receiving-a-webhook-en.png)

### 웹훅 요청 전송 시 문제가 발생한 경우 

인증된 프로바이더 아래의 Messaging API 채널의 경우, 웹훅 이벤트를 받은 후 2초 이내에 HTTP 상태 코드 `2xx`를 보내지 않으면 채널 관리자에게 [`request_timeout`](https://developers.line.biz/en/docs/messaging-api/check-webhook-error-statistics/#check-error-reason) [오류 알림](https://developers.line.biz/en/docs/partner-docs/error-notification/)이 전송됩니다.

<!-- note start -->

**오류 알림 기능 사용에 관하여**

오류 알림 기능은 인증된 프로바이더 아래의 Messaging API 채널에서만 사용할 수 있습니다.

<!-- note end -->

### 기타 주의 사항 

#### 하나의 웹훅에는 여러 웹훅 이벤트 객체가 포함될 수 있습니다 

LINE 플랫폼에서 보낸 웹훅에는 여러 웹훅 이벤트 객체가 포함될 수 있습니다. 또한 웹훅 하나에 항상 한 명의 사용자만 있는 것은 아니므로, 사람 A의 [메시지 이벤트](https://developers.line.biz/en/reference/messaging-api/#message-event)와 사람 B의 [팔로우 이벤트](https://developers.line.biz/en/reference/messaging-api/#follow-event)가 같은 웹훅에 포함될 수도 있습니다.

여러 웹훅 이벤트 객체가 포함된 웹훅을 받더라도 봇 서버가 모든 이벤트를 올바르게 처리할 수 있도록 하세요. 웹훅 이벤트 객체에 대한 자세한 내용은 Messaging API 레퍼런스의 [웹훅 이벤트 객체](https://developers.line.biz/en/reference/messaging-api/#webhook-event-objects)를 참고하세요.

#### 웹훅 이벤트 객체의 구조 변경에 대응하기 

Messaging API 기능이 추가되거나 변경되면 웹훅 이벤트 객체에 속성이 추가될 수 있습니다. 새로운 속성을 가진 웹훅 이벤트 객체를 받더라도 문제가 발생하지 않도록 봇 서버를 구현하세요. 웹훅 이벤트 객체에 대한 자세한 내용은 Messaging API 레퍼런스의 [웹훅 이벤트 객체](https://developers.line.biz/en/reference/messaging-api/#webhook-event-objects)를 참고하세요.

#### 웹훅 요청에 포함된 헤더에 대하여 

Messaging API 레퍼런스의 [요청 헤더](https://developers.line.biz/en/reference/messaging-api/#request-headers)를 참고하세요.

#### 예기치 않은 채팅 전송 처리에 대하여 

LINE 공식 계정에 채팅과 그에 해당하는 웹훅 이벤트를 보내는 것을 사용자에게 제한할 수는 없습니다. 특정 사용자가 예기치 않은 채팅을 보내는 경우에 대비하여, 상황에 따라 처리를 변경할 수 있도록 시스템을 구현하세요.

## API 요청을 보낼 때의 주의 사항 

### 채널 액세스 토큰 발급 

Messaging API 요청은 사용자가 채널을 사용할 권한이 있는지 확인하기 위해 [채널 액세스 토큰](https://developers.line.biz/en/docs/basics/channel-access-token/)을 사용합니다. 현재 유효 기간과 발급 방법이 다른 [네 가지 유형의 채널 액세스 토큰](https://developers.line.biz/en/docs/basics/channel-access-token/#channel-access-token-types)을 제공합니다.

<!-- note start -->

**장기 채널 액세스 토큰에 관하여**

LINE Developers Console에서 매우 긴 유효 기간을 가진 장기 채널 액세스 토큰을 발급할 수 있지만, 보안상의 이유로 장기 채널 액세스 토큰 발급은 권장하지 않습니다. 채널 액세스 토큰을 발급할 때는 유효 기간이 30일인 단기 채널 액세스 토큰, 사용자가 만료 기간을 지정할 수 있는 채널 액세스 토큰(채널 액세스 토큰 v2.1), 또는 상태 비저장(stateless) 채널 액세스 토큰을 사용하는 것을 권장합니다.

<!-- note end -->

### 채널 액세스 토큰 재발급 

단기 채널 액세스 토큰, 사용자가 만료 기간을 지정한 채널 액세스 토큰, 상태 비저장 채널 액세스 토큰은 유효 기간이 있으며, 만료되면 더 이상 사용할 수 없습니다. 또한 한 번 발급된 채널 액세스 토큰의 유효 기간은 연장(갱신)할 수 없습니다. 따라서 남은 유효 기간을 고려하고, 정기적으로 새 채널 액세스 토큰을 재발급하는 프로세스를 구축해야 합니다.

채널 액세스 토큰은 여러 개 발급할 수 있지만, 채널 액세스 토큰 유형에 따라 발급할 수 있는 개수에 제한이 있습니다. 여러 서버나 시스템에서 Messaging API를 사용하는 경우에는 각 서버나 시스템이 사용하는 채널 액세스 토큰을 올바르게 관리하세요.

단기 채널 액세스 토큰이나 사용자가 만료 기간을 지정한 채널 액세스 토큰의 경우, 새 채널 액세스 토큰을 발급한 후 더 이상 사용하지 않는 기존 채널 액세스 토큰을 폐기하는 것을 권장합니다. 자세한 내용은 LINE 플랫폼 기본 사항의 [채널 액세스 토큰 운영 예시](https://developers.line.biz/en/docs/basics/channel-access-token/#how-to-operate-channel-access-token)를 참고하세요.

### 채널 액세스 토큰 최대 발급 한도 

채널 액세스 토큰 유형별 최대 발급 한도는 다음과 같습니다.

| 유형 | 최대 발급 한도 | 최대 한도를 초과했을 때의 동작 | 채널 액세스 토큰이 무효화되는 조건 |
| --- | --- | --- | --- |
| 단기 채널 액세스 토큰 | 30 | 발급 순서대로 기존 단기 채널 액세스 토큰을 무효화합니다 | <ul><li>유효 기간이 만료됨</li><li>최대 발급 한도를 초과함</li><li>채널 액세스 토큰 폐기(revoke API) 실행</li></ul> |
| 장기 채널 액세스 토큰 | 1 | 기존 장기 채널 액세스 토큰이 비활성화됩니다 | <ul><li>최대 발급 한도를 초과함</li><li>채널 액세스 토큰 폐기(revoke API) 실행</li></ul> |
| 사용자가 만료 기간을 지정한 액세스 토큰(채널 액세스 토큰 v2.1) | 30 | API 오류가 발생하며 추가 토큰을 발급할 수 없습니다 | <ul><li>유효 기간이 만료됨</li><li>채널 액세스 토큰 폐기(revoke API) 실행</li></ul> |
| 상태 비저장(stateless) 채널 액세스 토큰 | 제한 없음 | - | <ul><li>유효 기간이 만료됨</li></ul> |

### 메시지 전송 요청 

메시지 전송에 성공하면 HTTP 상태 코드 `200`(narrowcast API에서만 `202`)과 함께 빈 JSON 객체가 반환됩니다.

메시지 전송에 실패하면 오류 메시지 등의 JSON 데이터가 포함된 응답 본문이 [오류 응답](https://developers.line.biz/en/reference/messaging-api/#error-responses)으로 반환됩니다.

<!-- note start -->

**오류 응답에 관하여**

오류 응답에 포함된 오류 메시지는 보장되지 않으며 사전 통지 없이 변경될 수 있습니다. 오류가 발생하면 받은 HTTP 상태 코드에 따라 예외 처리를 하세요.

<!-- note end -->

<!-- tip start -->

**로그 저장하기**

Messaging API에 요청할 때는 요청한 API와 받은 응답의 로그를 일정 기간 저장하세요. 로그 저장에 대한 자세한 내용은 Messaging API 문서의 [로그 저장하기](https://developers.line.biz/en/docs/messaging-api/development-guidelines/#save-logs)를 참고하세요.

<!-- tip end -->

### 메시지 전송 요청 재시도 

LINE 플랫폼에 장애가 없더라도 봇 서버의 네트워크 연결 상태 등의 이유로 다음 문제가 발생할 수 있습니다.

- API 요청이 성공적으로 완료되지 않음
- LINE 플랫폼으로부터 응답을 올바르게 받을 수 없음

이런 경우 같은 API 요청을 연속으로 보내면, 첫 번째 API 요청이 성공적으로 접수되었다면 사용자는 같은 메시지를 두 번 받게 됩니다. 이를 방지하려면 재시도 키(`X-Line-Retry-Key`)를 구현하여 요청을 안전하게 재시도하세요. 메시지 전송 요청에 대한 자세한 내용은 Messaging API 문서의 [실패한 API 요청 재시도하기](https://developers.line.biz/en/docs/messaging-api/retrying-api-request/)를 참고하세요.

![실패한 API 요청 재시도](https://developers.line.biz/media/partner-docs/retrying-a-failed-api-request-en.webp)

### 요청 제한 

LINE 봇이 한 번의 요청으로 보낼 수 있는 메시지 길이와, 일정 시간 내에 보낼 수 있는 메시지 수에는 제한이 있습니다.

#### 텍스트 메시지 제한 

[텍스트 메시지](https://developers.line.biz/en/reference/messaging-api/#text-message)와 [텍스트 메시지(v2)](https://developers.line.biz/en/reference/messaging-api/#text-message-v2)에 지정할 수 있는 최대 문자 수는 5000자입니다.

#### 요청 크기 제한 

최대 요청 크기는 2MB입니다.

#### 요청 빈도 제한 

Messaging API는 각 엔드포인트에 [요청 빈도 제한](https://developers.line.biz/en/reference/messaging-api/#rate-limits)을 적용합니다.

프로덕션 계정이나 테스트 계정을 사용하든 관계없이, 동작 테스트를 목적으로 [대량 요청을 보내는 것은 금지되어 있습니다](https://developers.line.biz/en/docs/messaging-api/development-guidelines/#prohibiting-mass-requests-to-line-platform). 메시지 전송에 대해 부하 테스트를 수행할 때는 LINE 플랫폼을 포함하지 마세요.

### 메시지를 보내는 방법 

메시지를 보내는 방법에 대한 자세한 내용은 다음 문서를 참고하세요.

- [사용자의 메시지와 액션에 응답하기(응답 메시지)](https://developers.line.biz/en/docs/messaging-api/sending-messages/#reply-messages)
- [언제든지 메시지 보내기](https://developers.line.biz/en/docs/messaging-api/sending-messages/#send-messages-at-any-time)

<!-- tip start -->

**응답 토큰의 유효 기간**

[응답 메시지](https://developers.line.biz/en/docs/messaging-api/sending-messages/#reply-messages)에 사용되는 응답 토큰의 유효 기간에 대한 자세한 내용은 Messaging API 레퍼런스의 [응답 토큰](https://developers.line.biz/en/reference/messaging-api/#send-reply-message-reply-token)을 참고하세요.

<!-- tip end -->

### HTTPS(TLS 1.2 이상) 사용하기 

Messaging API를 호출한 시스템과 LINE API 서버 간의 통신은 반드시 HTTPS(TLS 1.2 이상)로 해야 합니다. 또한 Messaging API로 [이미지 메시지](https://developers.line.biz/en/docs/messaging-api/message-types/#image-messages)나 [이미지 컴포넌트](https://developers.line.biz/en/reference/messaging-api/#f-image)가 포함된 Flex Message를 보내는 경우, 파일을 저장하는 서버도 HTTPS(TLS 1.2 이상) 통신을 지원해야 합니다.

### 대량 접근 처리하기 

메시지를 보내는 사용자 수와 메시지 내용에 따라 메시지에 포함된 URL, 이미지 등의 콘텐츠에 대량의 접근이 발생할 수 있습니다.

이런 경우에 대비하여 CDN이나 로드 밸런서 같은 부하 분산 메커니즘을 사용하거나, 메시지를 단계적으로 보내 콘텐츠를 저장한 서버가 대량 접근으로 다운되지 않도록 하세요.

![대량 요청](https://developers.line.biz/media/partner-docs/large-volume-of-requests-en.webp)

## LINE 로그인 사용 시 주의 사항 

LINE 로그인을 사용하면 웹 서비스와 네이티브 앱에서 사용자의 LINE 계정 정보를 활용하는 로그인 기능을 구현할 수 있습니다.

예를 들어 웹 앱에 LINE 로그인을 통합하고 얻은 정보를 회사의 회원 정보와 연결하면, Messaging API를 사용하여 사용자에게 더 개인화된 메시지를 보낼 수 있습니다.

LINE 로그인에 대한 자세한 내용은 [LINE 로그인 개요](https://developers.line.biz/en/docs/line-login/overview/)를 참고하세요.

### LINE 로그인 인증 및 검증 과정 

웹 앱용 LINE 로그인(웹 로그인)의 과정은 [OAuth 2.0](https://datatracker.ietf.org/doc/html/rfc6749) 인가 코드 그랜트 흐름과 [OpenID® Connect](https://openid.net/specs/openid-connect-core-1_0.html) 프로토콜을 기반으로 합니다. 웹 앱용 LINE 로그인에 대한 자세한 내용은 LINE 로그인 문서의 [로그인 흐름](https://developers.line.biz/en/docs/line-login/integrate-line-login/#login-flow)을 참고하세요.

### 콜백 URL에 관하여 

콜백 URL(`redirect_uri`)은 사용자가 LINE 로그인을 위한 인증 및 승인 작업을 마친 후 [웹 앱에서 인가 코드 또는 오류 응답을 받는 URL](https://developers.line.biz/en/docs/line-login/integrate-line-login/#receiving-the-authorization-code-or-error-response-with-a-web-app)로 사용됩니다. 콜백 URL은 LINE Developers Console의 채널 설정에 있는 **LINE Login**에서 설정할 수 있습니다.

콜백 URL에 대한 자세한 내용은 LINE 로그인 문서의 [콜백 URL 설정하기](https://developers.line.biz/en/docs/line-login/integrate-line-login/#setting-callback-url)를 참고하세요.

<!-- note start -->

**콜백 URL을 설정할 때의 주의 사항**

- 콜백 URL은 최대 400개까지 등록할 수 있습니다.
- 쿼리 파라미터가 포함된 URL도 콜백 URL로 등록할 수 있습니다.
- 인가 요청 시 지정하는 `redirect_uri`는 콜백 URL로 등록된 URL을 URL 인코딩한 문자열입니다. 임의의 쿼리 파라미터를 추가할 수 있습니다.
  - 콜백 URL로 `https://example.com`을 등록하고, 인가 요청 시 `redirect_uri`에 `https://example.com?key=value`를 지정할 수 있습니다.

<!-- note end -->

### 웹 앱에서 인가 응답 또는 오류 응답 받기 

사용자의 인증 및 승인 과정이 끝나면 사용자는 콜백 URL로 리디렉션됩니다.

사용자가 앱에 접근을 허용하면 인가 코드가 포함된 인가 응답이 반환됩니다. 하지만 사용자가 앱에 접근을 허용하지 않으면 오류 응답이 반환됩니다. 자세한 내용은 LINE 로그인 문서의 [웹 앱에서 인가 응답 또는 오류 응답 받기](https://developers.line.biz/en/docs/line-login/integrate-line-login/#receiving-the-authorization-code-or-error-response-with-a-web-app)를 참고하세요.

### 액세스 토큰 발급 

액세스 토큰은 LINE 로그인 인가 요청으로 얻은 인가 코드를 사용하여 발급됩니다. 액세스 토큰 발급에 대한 자세한 내용은 LINE 로그인 v2.1 API 레퍼런스의 [액세스 토큰 발급](https://developers.line.biz/en/reference/line-login/#issue-access-token)을 참고하세요.

<!-- note start -->

**액세스 토큰 발급 시 주의 사항**

- 액세스 토큰을 발급할 때 지정하는 `redirect_uri` 파라미터는 인가 요청 시 지정한 값과 같아야 합니다.
- 인가 코드는 액세스 토큰 발급 성공 여부와 관계없이 한 번만 사용할 수 있습니다.

<!-- note end -->

### ID 토큰 검증 

ID 토큰은 scope에 `openid`를 지정하여 LINE 로그인 인가 요청을 보내고 얻은 토큰 엔드포인트의 [페이로드](https://developers.line.biz/en/docs/line-login/integrate-line-login/#response)에 포함됩니다. 얻은 ID 토큰을 검증하면 사용자의 프로필 정보를 얻을 수 있습니다. 자세한 내용은 LINE 로그인 문서의 [ID 토큰에서 프로필 정보 가져오기](https://developers.line.biz/en/docs/line-login/verify-id-token/)를 참고하세요.

### 기타 LINE 로그인 API 

얻은 액세스 토큰을 사용하면 사용자와 LINE 공식 계정 간의 친구 관계를 확인하고 사용자의 프로필 정보를 가져올 수 있습니다. LINE 로그인 API에 대한 자세한 내용은 [LINE 로그인 v2.1 API 레퍼런스](https://developers.line.biz/en/reference/line-login/)를 참고하세요.

### LINE 로그인으로 얻은 정보와 회사가 관리하는 정보 연결하기(ID 연동) 

LINE 로그인으로 얻은 사용자 정보(사용자 ID 등)를 회사가 관리하는 회원 정보와 연결하면 더 개인화된 메시지를 제공할 수 있습니다.

![ID 연동 흐름](https://developers.line.biz/media/partner-docs/flow-for-linking-ids-en.webp)

<!-- note start -->

**회원 정보와의 연결 및 관리에 관하여**

- LY Corporation은 LINE 로그인으로 얻은 사용자 정보를 회사가 관리하는 회원 정보와 연결하는 방법을 제공하지 않습니다.
- 회원 정보 등을 연결할 때는 위조를 방지하도록 보안을 고려하여 시스템을 설계하세요.
- LINE 플랫폼의 사용자 정보와 회원 정보 등의 연결을 해제하는 흐름을 마련하세요.
- LINE 앱의 **Settings** > **Account** > **Authorized apps**에서 **Unlink**를 선택하면 LINE 로그인의 "채널 동의"는 철회되지만 사용자 정보의 연결은 해제되지 않습니다. LINE 로그인으로 얻은 정보와 회사가 관리하는 정보를 연결하는 과정은 고객이 별도로 처리해야 합니다.

![연결 해제](https://developers.line.biz/media/partner-docs/unlink.png)

<!-- note end -->

### 친구 추가 옵션 

LINE 로그인을 사용하면 사용자가 로그인할 때 LINE 공식 계정을 친구로 추가하는 옵션을 사용할 수 있습니다. 이를 친구 추가 옵션이라고 합니다. 친구 추가 옵션에 사용할 LINE 공식 계정은 LINE Developers Console에서 설정할 수 있습니다. 자세한 내용은 LINE 로그인 문서의 [로그인 시 LINE 공식 계정을 친구로 추가하기(친구 추가 옵션)](https://developers.line.biz/en/docs/line-login/link-a-bot/)를 참고하세요.

<!-- note start -->

**친구 추가 옵션 사용 시 주의 사항**

- 연결할 수 있는 LINE 공식 계정은 LINE 로그인 채널과 관련된 계정으로 제한됩니다. 예를 들어 회사 A의 LINE 공식 계정을 회사 A와 관련 없는 회사 B의 LINE 로그인 채널에 연결하지 마세요.
- 설정 변경은 즉시 반영되므로, 의도하지 않은 LINE 공식 계정(테스트 등)을 실수로 설정하지 않도록 주의해서 작업하세요.
- LINE 로그인 채널이 인증된 프로바이더 아래에 있는 경우, LINE 로그인 동의 화면의 **Add Friend (Unblock)** 옵션이 기본으로 선택(체크)되어 있습니다.

<!-- note end -->

### state 검증 

LINE 로그인 인가를 요청할 때 지정하는 `state` 파라미터는 [사이트 간 요청 위조(Cross-Site Request Forgery)](https://en.wikipedia.org/wiki/Cross-site_request_forgery)를 방지하기 위해 필요합니다. 웹 앱에서 인가 요청 세션마다 무작위로 생성하고, [인가 응답 또는 오류 응답을 받을 때](https://developers.line.biz/en/docs/line-login/integrate-line-login/#receiving-the-authorization-code-or-error-response-with-a-web-app) 검증하세요.

![state 검증](https://developers.line.biz/media/partner-docs/state-verification-en.webp)

## LINE Front-end Framework(LIFF) 

LINE Front-end Framework(LIFF)는 LY Corporation이 제공하는 웹 앱 플랫폼입니다. 이 플랫폼에서 실행되는 웹 앱을 LIFF 앱이라고 합니다.

LIFF 앱을 사용하면 LINE 플랫폼에서 LINE 사용자 ID와 기타 정보를 가져올 수 있습니다. LIFF 앱은 이 정보를 사용하여 사용자 정보를 활용하는 기능을 제공하거나 사용자를 대신하여 메시지를 보낼 수 있습니다.

LIFF 앱에 대한 자세한 내용은 [LIFF 개요](https://developers.line.biz/en/docs/liff/overview/)를 참고하세요.

## 기타 기능 

### 대상 브라우저 설정 방법 

채팅방이나 LINE 인앱 브라우저에서 URL에 접근할 때, 특수 쿼리 파라미터를 붙여 URL을 열면 URL을 여는 브라우저를 외부 브라우저로 바꿀 수 있습니다. 쿼리 파라미터에 대한 자세한 내용은 [외부 브라우저에서 URL 열기](https://developers.line.biz/en/docs/line-login/using-line-url-scheme/#opening-url-in-external-browser)를 참고하세요.

### URL 스킴에 관하여 

LINE 공식 계정과의 채팅방에서 사용할 수 있는 URL 스킴을 제공합니다. URL 스킴에 대한 자세한 내용은 [LINE URL 스킴으로 LINE 기능 사용하기](https://developers.line.biz/en/docs/line-login/using-line-url-scheme/)를 참고하세요.

### 채널 권한에 관하여 

LINE 로그인 채널과 LINE MINI App 채널은 생성 직후 상태가 "개발 중(Developing)"입니다. "개발 중" 상태의 채널에서 LINE에 로그인하거나 LIFF 앱에 접근하려면 해당 채널의 관리자(admin) 또는 테스터(tester) 권한이 있는 LINE 계정이 필요합니다.

권한에 대한 자세한 내용은 LINE Developers Console 문서의 [채널 역할](https://developers.line.biz/en/docs/line-developers-console/managing-roles/#roles-for-channel)을 참고하세요.

### Messaging API에서 사용할 수 있는 스티커와 이모지 

Messaging API에서 스티커는 [패키지 ID와 스티커 ID 같은 식별자](https://developers.line.biz/en/docs/messaging-api/sticker-list/#sticker-definitions)를 사용하여 주고받습니다.

#### Messaging API로 스티커 보내기 

Messaging API로 보낼 수 있는 스티커에 대한 자세한 내용은 Messaging API 문서의 [스티커](https://developers.line.biz/en/docs/messaging-api/sticker-list/)를 참고하세요.

#### 사용자가 보낸 스티커 확인하기 

사용자가 LINE 공식 계정에 스티커를 보내면, 보낸 스티커의 패키지 ID와 스티커 ID가 [웹훅 메시지 이벤트](https://developers.line.biz/en/reference/messaging-api/#wh-sticker)로 전송됩니다.

받은 웹훅 이벤트의 스티커 ID를 사용하여 보낸 스티커의 이미지를 가져오는 방법은 공개하지 않습니다. 이 서비스는 [테크놀로지 파트너](https://www.lycbiz.com/jp/partner/technology/line/)(일본어로만 제공됩니다)가 사용자와 직접 상호작용할 수 있는 채팅 도구(CRM 도구 등)를 만드는 경우나, LY Corporation이 적절하다고 판단하는 경우에만 제공합니다. 자세한 내용은 담당자에게 문의하세요.

#### LINE 이모지 보내기 

[텍스트 메시지](https://developers.line.biz/en/reference/messaging-api/#text-message) 또는 [텍스트 메시지(v2)](https://developers.line.biz/en/reference/messaging-api/#text-message-v2)를 보낼 때 LINE 이모지를 함께 보낼 수 있습니다. LINE 이모지에 대한 자세한 내용은 Messaging API 문서의 [LINE 이모지](https://developers.line.biz/en/docs/messaging-api/emoji-list/)를 참고하세요.

#### LINE 이모지 받기 

사용자가 LINE 공식 계정에 LINE 이모지를 보내면, 메시지 이벤트의 텍스트 객체에 있는 [emojis 객체](https://developers.line.biz/en/reference/messaging-api/#wh-text)에 배열로 저장됩니다.

<!-- note start -->

**보낸 LINE 이모지가 emojis 속성에 포함되지 않을 수 있습니다**

- Android용 LINE에서 보낸 기본 LINE 이모지는 포함되지 않습니다.
- 유니코드로 정의된 이모지와 이전 버전의 LINE 이모지는 올바르게 가져오지 못할 수 있습니다.

<!-- note end -->
