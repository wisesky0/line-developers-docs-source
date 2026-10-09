# 모듈 채널 연결

<!-- note start -->

**선택 기능을 사용하려면 절차가 필요합니다**

이 문서에 설명된 기능은 소정의 신청을 완료한 법인 고객만 사용할 수 있습니다. 모듈을 사용하여 확장 기능을 게시하려면 영업 담당자에게 문의하거나 [LINE Marketplace 문의](https://line-marketplace.com/jp/inquiry)(일본어만 제공)를 통해 문의해 주십시오.

<!-- note end -->

모듈 채널 기능을 사용하려면 LINE 공식 계정 관리자의 승인을 받고, 다음 단계에 따라 모듈 채널을 연결(attach)해야 합니다.

## OAuth 2.0 인증 메커니즘을 사용하여 모듈 채널 연결 

OAuth 2.0 인증 메커니즘의 흐름에 따라 LINE 공식 계정 관리자의 승인을 받아 모듈 채널을 연결할 수 있습니다.

## 모듈 연결 흐름 

첫 번째 화면과 다섯 번째 화면은 모듈 채널을 개발하는 회사가 준비해야 합니다.

![OAuth 2.0 인증 메커니즘을 사용한 모듈 채널 연결 흐름](https://developers.line.biz/media/partner-docs/module-technical/flow-en.webp)

<!-- note start -->

**하나의 LINE 공식 계정에 여러 모듈 채널을 연결할 때의 제한**

"Default Active" 기능이 있는 모듈 채널은 하나의 LINE 공식 계정에 하나만 연결할 수 있습니다.

<!-- note end -->

1. [LINE 공식 계정 관리자에게 승인 요청하기](https://developers.line.biz/en/docs/partner-docs/module-technical-attach-channel/#request-auth-from-line-oa-admin)
1. [연결 화면에 대하여](https://developers.line.biz/en/docs/partner-docs/module-technical-attach-channel/#about-linkage-screen)
1. [인증 코드 또는 오류 응답 받기](https://developers.line.biz/en/docs/partner-docs/module-technical-attach-channel/#get-auth-code)
1. [모듈 채널 제공자의 작업으로 연결하기](https://developers.line.biz/en/docs/partner-docs/module-technical-attach-channel/#link-attach-by-operation-of-module-channel-provider)

### 1. LINE 공식 계정 관리자에게 승인 요청하기 

LINE 공식 계정 관리자가 인증 및 승인 URL(쿼리 파라미터가 포함된 인증 URL `https://manager.line.biz/module/auth/v1/authorize`)에 접속하면, 모듈 채널을 LINE 공식 계정에 연결하는 과정이 시작됩니다.

**인증 및 승인 URL 예시**

```
https://manager.line.biz/module/auth/v1/authorize?response_type=code&client_id=1234567890&redirect_uri=https%3A%2F%2Fexample.com%2Fcallback&scope=message%3Asend%20message%3Areceive&state={CSRF token}&region=JP&basic_search_id={LINE Official Account basic ID}&brand_type=premium
```

일반적으로 모듈 채널 연결을 시작하는 페이지에 이 URL로 접속하는 링크를 설정하고, LINE 공식 계정 관리자에게 해당 링크를 클릭하도록 요청합니다. 위 예시의 흐름에서는 "'In Your Service" Click to Attach 페이지에서 **Attach Module** 버튼을 클릭하면 이 URL에 접속할 수 있습니다.

#### 쿼리 파라미터 

<!-- parameter start (props: required) -->

response_type

String

`code`

<!-- parameter end -->
<!-- parameter start (props: required) -->

redirect_uri

String

리다이렉트 URL입니다. 모듈 채널 개발자가 인증 코드를 받을 URL입니다. 인증 및 승인(연결 화면에서의 작업)이 끝나면 LINE 공식 계정 관리자는 이 URL로 리다이렉트됩니다.

이 URL은 모듈 채널 개발자가 제공해야 합니다. 이 URL은 [LINE Developers Console](https://developers.line.biz/console/)에서 모듈 채널에 미리 등록한 리다이렉트 URL과 일치해야 합니다.

<!-- note start -->

**redirect_uri 값은 URL 인코딩되어야 합니다**

쿼리 파라미터를 URL 인코딩하지 않으면, 두 번째 이후의 쿼리 파라미터가 인증 URL의 쿼리 파라미터로 인식되어 리다이렉트 대상으로 전달되지 않습니다.

예를 들어, `https://example.com/auth?param1=value1&param2=value2`를 `redirect_uri`로 지정한 인증 URL은 `https://manager.line.biz/module/auth/v1/authorize?response_type=code&client_id=1234567890&redirect_uri=https%3A%2F%2Fexample.com%2Fauth%3Fparam1%3Dvalue1%26param2%3Dvalue2&scope=message%3Asend%20message%3Areceive&state={CSRF token}&region=JP&basic_search_id={LINE Official Account basic id}&brand_type=premium`입니다.

<!-- note end -->

<!-- parameter end -->
<!-- parameter start (props: required) -->

client_id

String

모듈 채널의 채널 ID입니다. LINE 플랫폼이 발급하는 채널별 식별자입니다.

<!-- parameter end -->
<!-- parameter start (props: required) -->

scope

String

LINE 공식 계정 관리자에게 허용을 요청할 권한(스코프)을 지정합니다. 여러 스코프를 지정하려면 URL 인코딩된 공백(%20)으로 구분합니다. 자세한 내용은 [스코프](https://developers.line.biz/en/docs/partner-docs/module-technical-attach-channel/#scopes)를 참조해 주십시오.

<!-- parameter end -->
<!-- parameter start (props: required) -->

state

String

[크로스 사이트 요청 위조(CSRF)](https://datatracker.ietf.org/doc/html/rfc6749#section-10.12)를 방지하기 위한 고유한 영숫자 문자열입니다. 모듈 채널 개발을 담당하는 회사의 시스템에서 무작위로 생성한 고유 문자열이어야 합니다. URL 인코딩된 문자열은 사용할 수 없습니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

region

String

모듈 채널을 연결할 LINE 공식 계정의 지역입니다. `JP` 또는 `TW`를 지정합니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

basic_search_id

String

LINE 공식 계정의 [basic ID](https://help.linebiz.com/lineadshelp/s/article/L000001191?language=ja)입니다. 특정 LINE 공식 계정에만 모듈 채널을 연결하도록 허용할 때 지정합니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

brand_type

String

연결할 수 있는 [LINE 공식 계정의 계정 유형](https://www.lycbiz.com/jp/service/line-official-account/account-type/)을 제한할 때 지정합니다.

- 프리미엄 계정: `premium`
- 인증 계정: `verified`
- 미인증 계정: `unverified`

여러 계정 유형을 지정하려면 URL 인코딩된 공백(%20)으로 연결합니다. 예를 들어, 프리미엄 계정과 인증 계정만 연결하도록 제한하려면 `brand_type=premium%20verified`로 지정합니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

code_challenge

String

인증 코드 가로채기 공격에 대한 대책으로 OAuth 2.0 확장 사양에 정의된 PKCE(Proof Key for Code Exchange)를 사용할 때 지정합니다. [RFC 7636](https://datatracker.ietf.org/doc/html/rfc7636)을 따릅니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

code_challenge_method

String

`S256`

인증 코드 가로채기 공격에 대한 대책으로 OAuth 2.0 확장 사양에 정의된 PKCE(Proof Key for Code Exchange)를 사용할 때 지정합니다. [RFC 7636](https://datatracker.ietf.org/doc/html/rfc7636)을 따릅니다.

<!-- parameter end -->

#### 스코프 

`scope` 파라미터에 다음 스코프를 지정할 수 있습니다. 여러 스코프를 지정하려면 URL 인코딩된 공백(%20)으로 구분합니다.

| 스코프 | 모듈 채널에서 사용할 수 있는 API |
| --- | --- |
| 지정 불필요(기본값) | 스코프 없이 사용할 수 있습니다.<ul><li>[Issue link token (/v2/bot/user/{userId}/linkToken)](https://developers.line.biz/en/reference/messaging-api/#issue-link-token)</li></ul> |
| `message%3Asend`<br />(message:send) | <ul><li>[Send reply message (/v2/bot/message/reply)](https://developers.line.biz/en/reference/messaging-api/#send-reply-message)</li><li>[Send push message (/v2/bot/message/push)](https://developers.line.biz/en/reference/messaging-api/#send-push-message)</li><li>[Send multicast message (/v2/bot/message/multicast)](https://developers.line.biz/en/reference/messaging-api/#send-multicast-message)</li><li>[Send broadcast message (/v2/bot/message/broadcast)](https://developers.line.biz/en/reference/messaging-api/#send-broadcast-message)</li><li>[Send narrowcast message (/v2/bot/message/narrowcast)](https://developers.line.biz/en/reference/messaging-api/#send-narrowcast-message) 및 관련 API</li><li>[Managing Audience (/v2/bot/audienceGroup/\*\*\*)](https://developers.line.biz/en/reference/messaging-api/#manage-audience-group)</li><li>[Get the target limit for additional messages (/v2/bot/message/quota)](https://developers.line.biz/en/reference/messaging-api/#get-quota)</li><li>[Get number of messages sent this month (/v2/bot/message/quota/consumption)](https://developers.line.biz/en/reference/messaging-api/#get-consumption)</li><li>[Display a loading animation (/v2/bot/chat/loading/start)](https://developers.line.biz/en/reference/messaging-api/#display-a-loading-indicator)</li></ul> |
| `message%3Areceive`<br />(message:receive) | <ul><li>Messaging API와 모듈 채널의 웹훅 이벤트 수신</li><ul><li>[Webhooks](https://developers.line.biz/en/reference/messaging-api/#webhooks)</li><li>[Webhook Event Objects](https://developers.line.biz/en/reference/messaging-api/#webhook-event-objects)</li></ul><li>[채팅 주도권 제어(Chat Control)](https://developers.line.biz/en/docs/partner-docs/module-technical-chat-control/#what-is-chat-control)</li></ul> |
| `account%3Amanage`<br />(account:manage) | <ul><li>[Set default rich menu (/v2/bot/user/all/richmenu/{richMenuId})](https://developers.line.biz/en/reference/messaging-api/#set-default-rich-menu)</li><li>[Get number of message deliveries (/v2/bot/insight/message/delivery?date={date})](https://developers.line.biz/en/reference/messaging-api/#get-number-of-delivery-messages)</li><li>[Get number of followers (/v2/bot/insight/followers?date={date})](https://developers.line.biz/en/reference/messaging-api/#get-number-of-followers)</li><li>[Get friend demographics (/v2/bot/insight/demographic)](https://developers.line.biz/en/reference/messaging-api/#get-demographic)</li><li>[Get user interaction statistics (/v2/bot/insight/message/event?requestId={requestId})](https://developers.line.biz/en/reference/messaging-api/#get-message-event)</li><li>[Get statistics per unit (/v2/bot/insight/message/event/aggregation?customAggregationUnit={customAggregationUnit}&from={from}&to={to})](https://developers.line.biz/en/reference/messaging-api/#get-statistics-per-unit)</li></ul> |
| `message%3Amark_as_read`<br />(message:mark_as_read) | <ul><li>[Mark messages from users as read (/v2/bot/message/markAsRead)](https://developers.line.biz/en/reference/partner-docs/#mark-messages-from-users-as-read)</li></ul> |
| `message%3Atemplated_pnp`<br />(message:templated_pnp) | <ul><li>[Send a LINE notification message (template) (/v2/bot/message/pnp/templated/push)](https://developers.line.biz/en/reference/line-notification-messages/#send-line-notification-message-template)</li><li>[Get number of sent LINE notification messages (template) (/v2/bot/message/delivery/pnp/templated)](https://developers.line.biz/en/reference/line-notification-messages/#get-number-of-sent-line-notification-messages-template)</li><li>LINE 알림 메시지가 발송되었을 때 웹훅 이벤트 수신([웹훅 발송 완료 이벤트](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/message-sending-complete-webhook-event/))</li></ul> |
| `profile%3Aread`<br />(profile:read) | <ul><li>[Get profile (/v2/bot/profile/{userId})](https://developers.line.biz/en/reference/messaging-api/#get-profile)</li><li>[Get group chat summary (/v2/bot/group/{groupId}/summary)](https://developers.line.biz/en/reference/messaging-api/#get-group-summary)</li><li>[Get group chat member profile (/v2/bot/group/{groupId}/member/{userId})](https://developers.line.biz/en/reference/messaging-api/#get-group-member-profile)</li><li>[Get multi-person chat member profile (/v2/bot/room/{roomId}/member/{userId})](https://developers.line.biz/en/reference/messaging-api/#get-room-member-profile)</li><li>[Get number of users in a group chat (/v2/bot/group/{groupId}/members/count)](https://developers.line.biz/en/reference/messaging-api/#get-members-group-count)</li><li>[Get number of users in a multi-person chat (/v2/bot/room/{roomId}/members/count)](https://developers.line.biz/en/reference/messaging-api/#get-members-room-count)</li></ul> |
| `coupon%3Amanage`<br />(coupon:manage) | <ul><li>[Create a coupon (/v2/bot/coupon)](https://developers.line.biz/en/reference/messaging-api/#create-coupon)</li><li>[Discontinue a coupon (/v2/bot/coupon/{couponId}/close)](https://developers.line.biz/en/reference/messaging-api/#discontinue-coupon)</li><li>[Get a list of coupons (/v2/bot/coupon)](https://developers.line.biz/en/reference/messaging-api/#get-coupons-list)</li><li>[Get details of a coupon (/v2/bot/coupon/{couponId})](https://developers.line.biz/en/reference/messaging-api/#get-coupon)</li><li>[Coupon message](https://developers.line.biz/en/docs/messaging-api/message-types/#coupon-messages) 메시지 유형으로 메시지 발송</li></ul> |
| `crm%3Amanage`<br />(crm:manage) | Chat Plugin 기능을 사용하는 모듈 채널에만 지정할 수 있습니다\*. 그 외에는 지정하지 마십시오.<br />Chat Plugin을 사용할 때 필요합니다. Chat Plugin 기능을 사용하는 모듈 채널에 이 스코프를 지정하지 않으면, Chat Plugin이 제공하는 기능을 앞으로 사용하지 못할 수 있습니다. |

\* Chat Plugin 기능은 현재 일부 법인 고객에게만 제공됩니다.

### 2. 연결 화면에 대하여 

LINE 공식 계정 관리자가 인증 및 승인 URL에 접속하면, LINE 공식 계정 관리자의 연결 화면이 표시됩니다. 연결 화면에는 모듈 채널을 만들 때 신청한 내용이 표시됩니다. 설정 내용은 [LINE Developers Console](https://developers.line.biz/console/)에서 확인할 수 있습니다.

![연결 화면](https://developers.line.biz/media/partner-docs/attach-disp-en.webp)

### 3. 인증 코드 또는 오류 응답 받기 

LINE 공식 계정 관리자가 인증 및 승인을 완료하면, 인증 코드와 오류 코드가 인증 및 승인 URL에 지정된 리다이렉트 URL(`redirect_uri`)에 다음 쿼리 파라미터로 전달됩니다. 위 예시의 [흐름](https://developers.line.biz/en/docs/partner-docs/module-technical-attach-channel/#attach-flow)에서는 "OAM Confirm and Attach" 화면에서 **Link** 버튼을 클릭할 때 인증 코드와 오류 코드가 전달됩니다.

#### 인증 코드 받기 

LINE 공식 계정 관리자가 인증을 마치고 승인을 완료하면, 다음 쿼리 파라미터와 함께 리다이렉트 URL(`redirect_uri`)로 리다이렉트됩니다.

##### 쿼리 파라미터 

<!-- parameter start -->

code

String

LINE 공식 계정에 연결(attach)하는 데 필요한 인증 코드입니다. 이 인증 코드에는 유효 기간이 있으며 한 번만 사용할 수 있습니다.

<!-- parameter end -->
<!-- parameter start -->

state

String

CSRF 방지용 문자열입니다. 인증 및 승인 URL의 `state` 쿼리 파라미터에 지정한 값과 같은지 확인해 주십시오.

<!-- parameter end -->

#### 오류 응답 받기 

LINE 공식 계정 관리자의 인증이 실패하면, 다음 쿼리 파라미터와 함께 리다이렉트 URL(`redirect_uri`)로 리다이렉트됩니다.

##### 쿼리 파라미터 

<!-- parameter start -->

error

String

오류 코드입니다.

<!-- parameter end -->
<!-- parameter start -->

error_description

String

오류 세부 정보입니다.

<!-- parameter end -->
<!-- parameter start -->

state

String

CSRF 방지용 문자열입니다. 인증 및 승인 URL의 `state` 쿼리 파라미터에 지정한 값과 같은지 확인해 주십시오.

<!-- parameter end -->

### 4. 모듈 채널 제공자의 작업으로 연결하기 

인증 코드를 받고 `state` 쿼리 파라미터로 전달된 문자열이 올바른지 확인하면, 모듈 채널을 LINE 공식 계정에 연결합니다.

자세한 내용은 법인 고객용 API 레퍼런스의 [모듈 채널 제공자의 작업으로 연결하기](https://developers.line.biz/en/reference/partner-docs/#link-attach-by-operation-module-channel-provider)를 참조해 주십시오.
