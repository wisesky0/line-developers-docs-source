# Messaging API 개발 가이드라인

봇 개발을 시작하기 전에, Messaging API로 봇을 개발할 때 권장되는 사항과 금지되는 사항을 확인하세요.

**금지 사항**

- [LINE Platform에 대량의 요청을 보내지 마세요](https://developers.line.biz/en/docs/messaging-api/development-guidelines/#prohibiting-mass-requests-to-line-platform)
- [LINE Platform을 통해 부하 테스트를 하지 마세요](https://developers.line.biz/en/docs/messaging-api/development-guidelines/#prohibiting-line-platform-load-tests)
- [같은 사용자에게 대량의 메시지를 보내지 마세요](https://developers.line.biz/en/docs/messaging-api/development-guidelines/#prohibiting-mass-transmissions-to-same-user)
- [유효하지 않은 사용자 ID로 요청을 보내지 마세요](https://developers.line.biz/en/docs/messaging-api/development-guidelines/#prohibiting-requests-for-non-existent-user-ids)
- [사용자 속성을 식별하려고 하지 마세요](https://developers.line.biz/en/docs/messaging-api/development-guidelines/#prohibiting-identify-users-attribute)
- [IP 주소로 접근을 제한하지 마세요](https://developers.line.biz/en/docs/messaging-api/development-guidelines/#prohibiting-ip-address-restrictions)

**권장 사항**

- [언센드 이벤트를 받았을 때의 권장 처리](https://developers.line.biz/en/docs/messaging-api/development-guidelines/#webhook-unsend-message)
- [웹훅을 받을 때 웹훅 서명을 검증하는 것을 권장합니다](https://developers.line.biz/en/docs/messaging-api/development-guidelines/#verify-webhook-signature)
- [기능이 하위 호환성을 깨지 않고 추가되는 것을 가정한 구현 권장](https://developers.line.biz/en/docs/messaging-api/development-guidelines/#assume-non-breaking-changes)
- [로그 저장하기](https://developers.line.biz/en/docs/messaging-api/development-guidelines/#save-logs)

<!-- note start -->

**참고**

봇 개발의 기본 규칙은 [약관 및 정책](https://developers.line.biz/en/terms-and-policies/)을 따릅니다.

<!-- note end -->

## 금지 사항 

### LINE Platform에 대량의 요청을 보내지 마세요 

부하 테스트나 운영 테스트를 위해 LINE Platform에 대량의 요청을 보내지 마세요. 어떤 경우에도 요청 수를 지정된 [요청 속도 제한](https://developers.line.biz/en/reference/messaging-api/#rate-limits) 이내로 유지하세요. 요청 속도 제한을 초과하여 요청을 보내면 `429 Too Many Requests` 오류가 발생합니다.

<!-- note start -->

**속도 제한 이내의 운영 테스트**

속도 제한을 지키더라도 다음과 같은 요청은 높은 빈도로 보내지 마세요.

- 실제로 narrowcast 메시지 전송에 사용하지 않는데도 [오디언스](https://developers.line.biz/en/docs/messaging-api/using-audience/#create-audience)를 반복해서 만들고 삭제하는 것
- Messaging API 기능을 사용하지 않는 요청을 반복해서 보내는 것

<!-- note end -->

### LINE Platform을 통해 부하 테스트를 하지 마세요 

LINE Platform에는 봇 서버의 부하를 테스트하는 서비스가 없습니다. 봇 서버를 부하 테스트하기 위해 LINE Platform을 통해 대량의 메시지를 보내지 마세요. 봇 서버 부하 테스트 전용 환경을 별도로 준비하세요.

### 같은 사용자에게 대량의 메시지를 보내지 마세요 

어떤 경우에도 같은 사용자에게 지나치게 많은 메시지를 보내지 마세요.

### 유효하지 않은 사용자 ID로 요청을 보내지 마세요 

존재하지 않는 [사용자 ID](https://developers.line.biz/en/glossary/#user-id)로 요청을 보내지 마세요.

### 사용자 속성을 식별하려고 하지 마세요 

특정 사용자 ID의 사용자 [속성](https://developers.line.biz/en/reference/messaging-api/#narrowcast-demographic-filter)을 식별하려고 하지 마세요. 또한 사용자 속성을 식별할 목적으로 [오디언스 관리](https://developers.line.biz/en/reference/messaging-api/#manage-audience-group) API를 사용하거나 [narrowcast 메시지](https://developers.line.biz/en/reference/messaging-api/#send-narrowcast-message)를 보내지 마세요.

### IP 주소로 접근을 제한하지 마세요 

웹훅을 받는 봇 서버에서, LINE Platform의 IP 주소를 기준으로 웹훅 요청을 보내는 접근을 제한하지 마세요. IP 주소 기반 접근 제어 대신 [서명 검증](https://developers.line.biz/en/reference/messaging-api/#signature-validation)을 사용하여 권한이 없는 출처의 요청을 거부하세요. LINE Platform의 IP 주소는 공개하지 않으며, IP 주소는 예고 없이 변경될 수 있기 때문입니다.

## 권장 사항 

### 언센드 이벤트를 받았을 때의 권장 처리 

사용자가 보낸 메시지를 언센드(회수)하면 봇 서버로 [언센드 이벤트](https://developers.line.biz/en/reference/messaging-api/#unsend-event)가 전송됩니다.

언센드 이벤트를 받으면, 서비스 제공자는 사용자가 메시지를 회수하려는 의도를 존중하고, 해당 메시지를 앞으로 볼 수도 사용할 수도 없도록 각별히 주의하여 적절히 처리하는 것을 권장합니다.

자세한 내용은 [언센드 이벤트를 받았을 때의 처리](https://developers.line.biz/en/docs/messaging-api/receiving-messages/#webhook-unsend-message)를 참고하세요.

### 웹훅을 받을 때 웹훅 서명을 검증하는 것을 권장합니다 

봇 서버가 웹훅 이벤트를 받으면, [웹훅 이벤트 오브젝트](https://developers.line.biz/en/reference/messaging-api/#webhook-event-objects)를 처리하기 전에 요청 헤더에 포함된 서명을 검증하는 것을 권장합니다. 이 검증 단계는 웹훅이 LINE Platform에서 온 것이며 전송 중에 변조되지 않았음을 확인하기 위해 중요합니다.

자세한 내용은 [웹훅 서명 검증하기](https://developers.line.biz/en/docs/messaging-api/verify-webhook-signature/)를 참고하세요.

### 하위 호환성을 깨지 않는 기능 추가를 가정한 구현 권장 

Messaging API에는 하위 호환성을 깨지 않는 기능 추가가 이루어질 수 있습니다. 이러한 변경은 기존 기능을 깨뜨리지 않고 API를 확장하기 위한 것입니다. 따라서 다음 유형의 변경은 사전 공지 없이 이루어질 수 있습니다.

- 새로운 엔드포인트 추가
- API 요청에 선택적 매개변수, 필드, 헤더 추가
- API 응답에 필드와 헤더 추가
- 웹훅 이벤트 오브젝트에 속성 추가
- API 응답과 웹훅 이벤트 오브젝트에서 속성 순서 변경
- 열거형 값 추가(예: [웹훅 이벤트 오브젝트](https://developers.line.biz/en/reference/messaging-api/#common-properties)의 `type` 속성 값 추가)
- 데이터 요소 사이의 공백이나 줄바꿈 포함 여부 변경

이러한 하위 호환 기능 추가가 있더라도 문제없이 동작하도록 봇 서버를 구현하세요.

### 로그 저장하기 

보낸 [Messaging API 요청](https://developers.line.biz/en/docs/messaging-api/development-guidelines/#messaging-api-logs)과 받은 [웹훅](https://developers.line.biz/en/docs/messaging-api/development-guidelines/#webhook-logs)의 로그를 일정 기간 동안 저장하는 것을 권장합니다. 이 로그는 문제의 원인을 조사할 때 도움이 됩니다.

<!-- tip start -->

**로그에 저장하면 도움이 되는 데이터**

이 섹션에서 권장하는 기본 정보 외에도 다음 데이터가 도움이 될 수 있습니다. 봇의 요구 사항에 따라 이 데이터의 저장을 고려하세요.

- 호출한 Messaging API의 요청 본문 매개변수
- Messaging API 호출에 대해 LINE Platform이 반환한 응답 본문
- LINE Platform에서 웹훅을 보낼 때 [요청 헤더](https://developers.line.biz/en/reference/messaging-api/#request-headers)의 서명(`x-line-signature`)
- LINE Platform이 보낸 [웹훅 이벤트 오브젝트](https://developers.line.biz/en/reference/messaging-api/#webhook-event-objects)

<!-- tip end -->

<!-- note start -->

**로그는 제공하지 않습니다**

문의하더라도 Messaging API 요청 로그나 LINE Platform에서 보낸 웹훅 로그는 제공하지 않습니다. 로그 저장은 개발자의 책임입니다.

<!-- note end -->

#### Messaging API 요청에 대한 로그 저장 

Messaging API에 요청할 때 다음 정보를 기록하는 것을 권장합니다.

- 응답 헤더의 [요청 ID](https://developers.line.biz/en/reference/messaging-api/#response-headers)(`x-line-request-id`)
- API 요청을 보낸 시각
- 요청의 HTTP 메서드
- 호출한 API 엔드포인트
- LINE Platform이 반환한 [상태 코드](https://developers.line.biz/en/reference/messaging-api/#status-codes)

각 데이터는 아래와 같은 형식의 로그 파일에 저장하세요.

| 요청 ID(`x-line-request-id`) | API 요청 시각 | HTTP 메서드 | API 엔드포인트 | 상태 코드 |
| --- | --- | --- | --- | --- |
| 8e36bade-c5d6-4d00-9e69-72244675a9a1 | Mon, 05 Jul 2021 08:14:35 GMT | POST | `https://api.line.me/v2/bot/message/push` | 200 |

#### 받은 웹훅에 대한 로그 저장 

봇 서버가 LINE Platform으로부터 [웹훅](https://developers.line.biz/en/reference/messaging-api/#webhooks)을 받을 때 다음 정보를 기록하는 것을 권장합니다.

- 웹훅을 보낸 발신자의 IP 주소
- 웹훅을 받은 시각
- HTTP 메서드
- 요청 경로
- 받은 웹훅에 대해 봇 서버가 [응답](https://developers.line.biz/en/reference/messaging-api/#response)으로 반환한 상태 코드

각 데이터는 아래와 같은 형식의 로그 파일에 저장하세요.

| 발신자 IP 주소 | 웹훅을 받은 시각 | HTTP 메서드 | 요청 경로 | 상태 코드 |
| --- | --- | --- | --- | --- |
| 203.0.113.1 | Mon, 05 Jul 2021 08:10:00 GMT | POST | `/linebot/webhook` | 200 |
