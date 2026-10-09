# 웹훅 URL 확인하기

Messaging API 웹훅을 사용하는 경우, 다음 방법 중 하나로 LINE 플랫폼이 웹훅 URL(봇 서버)과 통신할 수 있는지 확인하는 것을 권장합니다.

- [확인 방법 1: 웹훅 URL 검증용 엔드포인트로 확인하기](https://developers.line.biz/en/docs/messaging-api/verify-webhook-url/#verify-method-01)
- [확인 방법 2: LINE Developers Console의 웹훅 URL "Verify" 버튼 사용하기](https://developers.line.biz/en/docs/messaging-api/verify-webhook-url/#verify-method-02)

<!-- tip start -->

**통신 요청에는 상태 코드 200을 반환하세요**

LINE 플랫폼은 통신을 확인하기 위해 웹훅 이벤트가 포함되지 않은 HTTP POST 요청을 웹훅 URL(봇 서버)로 보냅니다. 봇 서버가 상태 코드 `200`을 반환하도록 설계하세요.

웹훅 이벤트가 포함되지 않은 HTTP POST 요청 예시는 다음과 같습니다.

```json
{
  "destination": "xxxxxxxxxx",
  "events": []
}
```

<!-- tip end -->

웹훅 URL을 확인한 후에도 봇 서버가 웹훅을 받지 못했다면 [웹훅 수신 실패 원인을 조사하세요](https://developers.line.biz/en/docs/messaging-api/verify-webhook-url/#investigate-webhook-reception-failure).

## 확인 방법 1: 웹훅 URL 검증용 엔드포인트로 확인하기 

웹훅 URL 테스트용 엔드포인트를 사용하여 통신을 확인하세요.

- [웹훅 엔드포인트 테스트](https://developers.line.biz/en/reference/messaging-api/#test-webhook-endpoint)

## 확인 방법 2: LINE Developers Console의 웹훅 URL "Verify" 버튼 사용하기 

[LINE Developers Console](https://developers.line.biz/console/)에서 웹훅 URL의 **Verify** 버튼을 클릭하여 확인을 수행하세요.

![전송 대상](https://developers.line.biz/media/news/webhook-url-verify-button.png)

## 웹훅 수신 실패 원인 조사하기 

웹훅 URL을 확인한 후에도 봇 서버가 웹훅을 받지 못했다면 다음 방법으로 웹훅 수신 실패 원인을 조사하세요.

- 웹훅 URL 테스트 엔드포인트가 반환한 [응답](https://developers.line.biz/en/reference/messaging-api/#test-webhook-endpoint-response) 또는 [오류 응답](https://developers.line.biz/en/reference/messaging-api/#test-webhook-endpoint-error-response)을 확인합니다.
- [웹훅 오류 원인 및 통계 확인하기](https://developers.line.biz/en/docs/messaging-api/check-webhook-error-statistics/)를 참고합니다.
- [웹훅 소스의 SSL/TLS 사양](https://developers.line.biz/en/docs/messaging-api/ssl-tls-spec-of-the-webhook-source/)을 확인합니다.
