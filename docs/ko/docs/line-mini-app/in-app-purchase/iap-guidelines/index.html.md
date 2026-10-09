# 인앱 결제 개발 가이드라인

이 페이지에서는 LINE MINI App에서 인앱 결제 기능을 사용할 때의 사양 제약, 설계 시 고려 사항, 권장 구현 방법을 설명합니다.

인앱 결제 기능을 사용할 때는 아래 개발 가이드라인을 따라 주십시오. 또한 [LINE MINI App 개발 가이드라인](https://developers.line.biz/en/docs/line-mini-app/development-guidelines/)도 반드시 참고해 주십시오.

**금지 사항**

- [IP 주소로 접근을 제한하지 마십시오](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/iap-guidelines/#prohibit-ip-address-restriction)

**필수 사항**

- [액세스 토큰의 유효성을 검증하십시오](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/iap-guidelines/#verify-access-token)

**권장 사항**

- [웹훅 서명을 검증하십시오](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/iap-guidelines/#verify-webhook-signature)
- [중복을 제거하십시오](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/iap-guidelines/#eliminate-duplicates)
- [적절한 오류 처리를 구현하십시오](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/iap-guidelines/#error-handling)
- [결제 알림을 중복으로 보내지 마십시오](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/iap-guidelines/#payment-notifications)

## 금지 사항 

### IP 주소로 접근을 제한하지 마십시오 

웹훅을 받는 서버에서는 웹훅 요청을 보내는 LINE Platform의 IP 주소를 기준으로 접근을 제한하지 마십시오. LINE Platform의 IP 주소는 공개되어 있지 않으며 예고 없이 변경될 수 있습니다. IP 주소 기반 접근 제어 대신 [서명 검증](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/iap-guidelines/#verify-webhook-signature)을 사용하여 승인되지 않은 출처의 요청을 거부하십시오.

## 필수 사항 

### 액세스 토큰의 유효성을 검증하십시오 

결제 예약을 할 때는 LINE MINI App의 서버 측에서 [액세스 토큰 유효성 검증](https://developers.line.biz/en/reference/line-login/#verify-access-token) 엔드포인트를 사용하여 액세스 토큰의 유효성, 채널 ID, 액세스 토큰의 유효 기간을 검증하십시오.

## 권장 사항 

### 호환성을 깨지 않는 변경을 염두에 두고 구현하십시오 

LINE MINI App의 인앱 결제에서는 호환성을 깨지 않는 기능 추가가 이루어질 수 있습니다. 이러한 변경은 기존 기능을 깨뜨리지 않고 API를 확장하기 위한 것입니다. 따라서 다음 유형의 변경은 사전 공지 없이 이루어질 수 있습니다.

- 새로운 엔드포인트 추가
- API 요청에 선택적 매개변수, 필드, 헤더 추가
- API 응답에 필드와 헤더 추가
- 열거형(enum) 값 추가
- 웹훅 이벤트 객체에 속성 추가
- API 응답과 웹훅 이벤트 객체의 속성 순서 변경
- 데이터 요소 사이의 공백 또는 줄 바꿈 유무

서버는 이러한 호환성을 유지하는 기능 추가가 있어도 올바르게 동작하도록 구현해 주십시오.

### 웹훅 서명을 검증하십시오 

위조된 요청을 방지하기 위해 `x-line-signature` 요청 헤더를 사용하여 서명을 검증하십시오.

- 채널 시크릿을 비밀 키로 사용하여 요청 본문의 다이제스트를 HMAC-SHA256 알고리즘으로 계산합니다.
- 다이제스트를 Base64로 인코딩한 후, `x-line-signature` 요청 헤더에 포함된 서명과 일치하는지 확인합니다.

Java에서 서명을 검증하는 예시

```java
class WebhookProcessor {
    void verify(String httpRequestBody) { // 요청 본문 문자열
        String channelSecret = '...'; // 채널 시크릿 문자열
        SecretKeySpec key = new SecretKeySpec(channelSecret.getBytes(), "HmacSHA256");
        Mac mac = Mac.getInstance("HmacSHA256");
        mac.init(key);

        byte[] source = httpRequestBody.getBytes("UTF-8");
        String signature = Base64.encodeBase64String(mac.doFinal(source));
        // x-line-signature 요청 헤더 문자열과 signature를 비교합니다
    }
}
```

웹훅 서명 검증에 대한 자세한 내용은 Messaging API 문서의 [웹훅 서명 검증](https://developers.line.biz/en/docs/messaging-api/verify-webhook-signature/)을 참고해 주십시오.

### 중복을 제거하십시오 

네트워크 상황으로 인해 같은 웹훅 이벤트가 여러 번 전달될 수 있습니다. 한 번의 결제에 대해 아이템이 여러 번 지급되지 않도록 주문 ID(`orderId`)를 사용하십시오. 또한 사용자가 앱 스토어에서 결제를 취소한 경우에도 취소 처리가 여러 번 수행되지 않도록 해 주십시오.

### 적절한 오류 처리를 구현하십시오 

결제 예약이 완료된 결제를 보장하지는 않습니다. 네트워크 오류 등 문제가 발생하면 요청을 재시도하거나 사용자에게 다시 시도하도록 안내하는 등 적절한 조치를 취하십시오.

### 결제 알림을 중복으로 보내지 마십시오 

결제가 완료되면 LINE 공식 계정 "LINE In-App Purchase Notifications(LINE 앱 내 결제 알림)"에서 사용자에게 메시지가 자동으로 보내집니다. 마찬가지로 사용자가 앱 스토어에서 결제를 취소하면 사용자에게 메시지가 자동으로 보내집니다.

이 외에 다른 LINE 공식 계정에서도 결제 알림을 보내면 사용자는 같은 종류의 알림을 여러 번 받게 됩니다. 사용자 경험이 나빠지지 않도록 알림을 중복으로 보내지 마십시오.
