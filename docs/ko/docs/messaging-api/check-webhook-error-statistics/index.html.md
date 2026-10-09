# 웹훅 오류 원인 및 통계 확인하기

Messaging API는 웹훅 전송 시 오류 원인과 통계를 확인할 수 있는 기능을 제공합니다. 봇 서버의 문제 등으로 웹훅을 받지 못했을 때 웹훅 전송 상태를 파악하는 데 유용합니다.

![봇 서버에서 오류가 반환되었을 때의 오류 통계 화면](https://developers.line.biz/media/messaging-api/receiving-messages/webhook-error-en.webp)

## 오류 통계 사용하기 

오류 통계 표시는 기본적으로 비활성화되어 있습니다. 오류 통계를 표시하려면 [LINE Developers Console](https://developers.line.biz/console/)에서 다음 단계를 수행하세요.

1. 오류 통계를 표시할 채널의 설정 화면을 엽니다.
1. **Messaging API** 탭을 클릭합니다.
1. **Use webhook**을 켭니다.
1. **Error statistics aggregation**을 켭니다.

**Error statistics aggregation**을 켠 후 **Webhook errors** 탭을 클릭하면 통계를 볼 수 있습니다. 오류는 **Error statistics aggregation**이 켜져 있는 동안에만 집계됩니다. 꺼져 있던 기간의 데이터는 소급하여 표시되지 않습니다. 표시되는 오류의 날짜와 시간은 UTC+9 기준입니다. **Download TSV file**을 클릭하면 과거 오류 정보를 TSV 형식으로 내려받을 수도 있습니다.

![오류 통계 집계](https://developers.line.biz/media/messaging-api/receiving-messages/error-statistics-en.webp)

오류 통계에는 다음 항목이 포함됩니다.

| 항목 | 설명 |
| --- | --- |
| Date | 오류가 발생한 날짜입니다. |
| Start | LINE Platform이 오류를 처음 감지한 시각입니다. |
| End | LINE Platform이 오류를 마지막으로 감지한 시각입니다. |
| Reason | 오류의 원인입니다. 자세한 내용은 [오류 원인 확인하기](https://developers.line.biz/en/docs/messaging-api/check-webhook-error-statistics/#check-error-reason)를 참고하세요. |
| Detail | 각 오류 원인에 대한 세부 정보입니다. 자세한 내용은 [오류 세부 정보 확인하기](https://developers.line.biz/en/docs/messaging-api/check-webhook-error-statistics/#check-detail-for-error)를 참고하세요. |
| Errors | 60초 이내에 발생한 같은 HTTP 상태 코드의 오류 수입니다. HTTP 상태 코드가 없는 오류는 같은 오류로 묶어 집계합니다. |

<!-- tip start -->

**오류 통계에는 웹훅 URL 검증 요청이 포함되지 않습니다**

오류 통계에는 실제로 전송을 시도한 웹훅만 표시됩니다. 성공 여부와 관계없이 [웹훅 URL을 검증](https://developers.line.biz/en/docs/messaging-api/verify-webhook-url/)하기 위한 요청은 오류 통계에 포함되지 않습니다.

<!-- tip end -->

## 오류 원인 확인하기 

오류 통계에서 오류의 원인과 세부 정보를 확인할 수 있습니다. 원인은 네 가지 유형이 있습니다.

| 오류 원인 | 요약 |
| --- | --- |
| `could_not_connect` | LINE Platform이 봇 서버로 웹훅을 보내려고 했지만, 봇 서버에 성공적으로 연결하지 못했습니다. 자세한 내용은 [오류 원인이 could_not_connect인 경우](https://developers.line.biz/en/docs/messaging-api/check-webhook-error-statistics/#reason-could-not-connect) 섹션을 참고하세요. |
| `request_timeout` | LINE Platform이 봇 서버로 웹훅을 보냈지만, 봇 서버가 2초 이내에 응답을 반환하지 않았습니다. 자세한 내용은 [오류 원인이 request_timeout인 경우](https://developers.line.biz/en/docs/messaging-api/check-webhook-error-statistics/#reason-request-timeout) 섹션을 참고하세요. |
| `error_status_code` | LINE Platform이 봇 서버로 웹훅을 보냈지만, 봇 서버가 `20x` HTTP 상태 코드가 아닌 응답을 반환했습니다. 자세한 내용은 [오류 원인이 error_status_code인 경우](https://developers.line.biz/en/docs/messaging-api/check-webhook-error-statistics/#reason-status-code) 섹션을 참고하세요. |
| `unclassified` | 위 항목으로 분류할 수 없는 알 수 없는 오류가 발생했습니다. 자세한 내용은 [오류 원인이 unclassified인 경우](https://developers.line.biz/en/docs/messaging-api/check-webhook-error-statistics/#reason-unclassified) 섹션을 참고하세요. |

## 오류 세부 정보 확인하기 

각 원인에 대한 세부 정보는 다음과 같습니다.

- [오류 원인이 could_not_connect인 경우](https://developers.line.biz/en/docs/messaging-api/check-webhook-error-statistics/#reason-could-not-connect)
- [오류 원인이 request_timeout인 경우](https://developers.line.biz/en/docs/messaging-api/check-webhook-error-statistics/#reason-request-timeout)
- [오류 원인이 error_status_code인 경우](https://developers.line.biz/en/docs/messaging-api/check-webhook-error-statistics/#reason-status-code)
- [오류 원인이 unclassified인 경우](https://developers.line.biz/en/docs/messaging-api/check-webhook-error-statistics/#reason-unclassified)

### 오류 원인이 `could_not_connect`인 경우 

LINE Platform이 봇 서버로 웹훅을 보내려고 했지만 봇 서버에 성공적으로 연결하지 못하면 원인은 `could_not_connect`입니다. 이 경우의 세부 정보는 다음과 같습니다.

| 오류 세부 정보 | 요약 |
| --- | --- |
| `Connection failed` | 봇 서버에 연결하지 못했습니다. |
| `Connection failed (received GOAWAY)` | 봇 서버에 연결할 때 연결이 거부되었습니다. |
| `Connection failed (session closed)` | 봇 서버와의 연결이 예기치 않게 종료되었습니다. |
| `Connection timeout` | 봇 서버와의 연결이 일정 시간 내에 완료되지 않았습니다. |
| `DNS Query timeout` | 웹훅 URL의 이름 확인을 수행했지만, 일정 시간 내에 이름 확인을 완료하지 못했습니다. |
| `Invalid URL syntax` | 잘못된 웹훅 URL이 지정되었습니다(예: RFC 위반). |
| `Session protocol negotiation failure` | 봇 서버에 연결했지만 프로토콜 협상에 실패했습니다. |
| `No SSL/TLS record` | 봇 서버의 응답이 SSL/TLS로 암호화되어 있지 않습니다. |
| `TLS handshake failure` | 봇 서버에 연결했지만 TLS 핸드셰이크에 실패했습니다. 봇 서버가 [웹훅 소스의 SSL/TLS 사양](https://developers.line.biz/en/docs/messaging-api/ssl-tls-spec-of-the-webhook-source/)을 지원하는지 확인하세요. |
| `Unknown host` | 웹훅 URL에 지정된 호스트를 찾을 수 없습니다. |

### 오류 원인이 `request_timeout`인 경우 

LINE Platform이 봇 서버로 웹훅을 보냈지만 LINE Platform이 응답을 받지 못했거나 전송이 중간에 실패하면 원인은 `request_timeout`입니다. 이 경우의 세부 정보는 다음과 같습니다. 봇 서버가 웹훅을 성공적으로 받았을 수도 있다는 점에 유의하세요.

| 오류 세부 정보 | 요약 |
| --- | --- |
| `Request timeout` | 웹훅을 봇 서버로 보냈지만 일정 시간 내에 응답이 반환되지 않았습니다. |

### 오류 원인이 `error_status_code`인 경우 

원인이 `error_status_code`인 경우, 세부 정보에 HTTP 상태 코드가 포함됩니다.

### 오류 원인이 `unclassified`인 경우 

분류되지 않은 오류가 발생하면 원인은 `unclassified`입니다. 이 경우의 세부 정보는 다음과 같습니다.

| 오류 세부 정보 | 요약 |
| --- | --- |
| `Session closed unexpectedly` | 웹훅을 봇 서버로 보냈지만 연결이 예기치 않게 종료되었습니다. |
| `Stream closed unexpectedly` | 웹훅을 봇 서버로 보냈지만 스트림이 예기치 않게 종료되었습니다. |
| `Unclassified webhook dispatch error` | 분류할 수 없는 예상치 못한 오류가 발생했습니다. |

## 오류에 대비하여 웹훅 재전송 활성화하기 

웹훅 재전송을 미리 활성화해 두면, 봇 서버가 웹훅을 받지 못해 오류가 발생했을 때 웹훅이 봇 서버로 다시 전송됩니다. 자세한 내용은 [수신하지 못한 웹훅 재전송하기](https://developers.line.biz/en/docs/messaging-api/receiving-messages/#webhook-redelivery)를 참고하세요.
