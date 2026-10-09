# 인앱 결제 기능 연동

이 페이지에서는 LINE MINI App에 인앱 결제 기능을 연동하는 방법을 설명합니다.

## 준비 

구현을 시작하기 전에 다음 사항을 확인해 주십시오.

- LINE MINI App이 검증된 MINI App으로 공개되어 있거나, 검증되지 않은 MINI App이라면 Developing 채널을 사용할 수 있습니다.
- [인앱 결제 기능 사용 신청](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/request-iap-review/)이 승인되었습니다.
- LINE MINI App의 서버를 사용할 수 있습니다.
- 웹훅 엔드포인트(웹훅 URL)를 사용할 수 있습니다. (\*)

\* 인앱 결제 사용 신청이 승인된 후 [LINE Developers Console](https://developers.line.biz/console/)에서 웹훅 URL을 등록해 주십시오. 등록 방법에 대한 자세한 내용은 [웹훅 URL 등록](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/iap-settings/#register-webhook-url)을 참고해 주십시오.

## 구현 흐름 

다음 흐름에 따라 인앱 결제를 연동하십시오.

1. [환경이 인앱 결제를 지원하는지 확인](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/implement-in-app-purchase/#check-the-environment)
1. [구매 가능한 아이템 정보 가져오기](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/implement-in-app-purchase/#get-item-information)
1. [인앱 결제에 대한 사용자 동의 얻기](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/implement-in-app-purchase/#get-user-consent)
1. [LINE MINI App 서버에서 결제 예약](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/implement-in-app-purchase/#reserve-payment)
1. [스토어에서 결제 거래 시작](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/implement-in-app-purchase/#start-transaction)
1. [웹훅을 받고 결제 완료 처리](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/implement-in-app-purchase/#receive-webhook)

### 1. 환경이 인앱 결제를 지원하는지 확인 

[`liff.isApiAvailable()`](https://developers.line.biz/en/reference/liff/#is-api-available) 메서드를 호출하여 환경이 인앱 결제를 지원하는지 확인합니다.

```javascript
liff.isApiAvailable("iap");
```

사용자가 외부 브라우저를 사용하고 있거나 사용 중인 LINE 앱 버전이 인앱 결제를 지원하지 않는 경우에는 LINE MINI App을 비활성화하거나 결제 흐름을 숨겨 주십시오.

`liff.isApiAvailable()` 메서드로 환경이 인앱 결제를 지원하는 것을 확인했더라도, "[3. 인앱 결제에 대한 사용자 동의 얻기](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/implement-in-app-purchase/#get-user-consent)"에서 사용자 동의를 얻지 못하거나 나중에 동의가 철회되면 인앱 결제를 사용할 수 없습니다.

### 2. 구매 가능한 아이템 정보 가져오기 

구매 가능한 아이템 정보를 가져와서 사용자에게 표시합니다.

인앱 결제로 구매할 수 있는 아이템은 LY Corporation이 일본 엔을 기준으로 미리 정의합니다. 인앱 결제로 구매 가능한 아이템을 사용자에게 표시할 때는 사용자 경험이 나빠지지 않도록 사용자가 이용하는 앱 스토어 지역에 맞게 현지화된 가격과 통화를 사용해 주십시오.

미리 정의된 아이템 중 LINE MINI App이 지원하는 아이템은 인앱 결제를 사용하는 서비스 제공자의 정책에 따라 결정할 수 있습니다. 해당 아이템의 현지화된 가격, 통화, 아이템 이름을 가져오려면 [`liff.iap.getPlatformProducts()`](https://developers.line.biz/en/reference/line-mini-app/#get-platform-products) 메서드를 호출하십시오.

```javascript
const productIds = ["iap_ln_002", "iap_ln_003"];
await liff.iap.getPlatformProducts({ productIds });
```

예시:

```json
{
  "iap_ln_002": {
    "currency": "JPY",
    "price": 100,
    "productName": "LINE Purchase 100"
  },
  "iap_ln_003": {
    "currency": "JPY",
    "price": 150,
    "productName": "LINE Purchase 150"
  }
}
```

### 3. 인앱 결제에 대한 사용자 동의 얻기 

[`liff.iap.requestConsentAgreement()`](https://developers.line.biz/en/reference/line-mini-app/#request-consent-agreement) 메서드를 사용하여 "[이용약관: LINE 인앱 결제 시스템](https://terms.line.me/line_iap_tou_1?lang=en)"에 대한 사용자 동의를 얻습니다.

```javascript
await liff.iap.requestConsentAgreement();
```

이 과정은 LINE MINI App별이 아니라 사용자별로 한 번 완료하면 됩니다. 사용자가 다른 LINE MINI App에서 이미 인앱 결제 사용에 동의했다면 다시 동의할 필요가 없습니다. 현재 실행 중인 LINE MINI App에서 이미 동의를 받았다면 역시 다시 동의할 필요가 없습니다.

다만 "이용약관: LINE 인앱 결제 시스템"이 업데이트되면 사용자가 다시 동의해야 할 수 있습니다. 동의하지 않은 사용자는 결제를 예약하거나 시작할 수 없습니다. 따라서 인앱 결제를 시작할 때는 항상 `liff.iap.requestConsentAgreement()` 메서드를 호출하여 최신 동의 상태를 확인해 주십시오.

`liff.iap.requestConsentAgreement()` 메서드를 실행했을 때 사용자가 동의를 완료하지 않았고 새로운 동의가 필요하다면 그 시점에 동의 화면이 표시됩니다. 동의 화면 표시로 인해 사용자가 이탈하는 것을 막으려면 적절한 시점에 동의를 요청하는 것을 권장합니다.

### 4. LINE MINI App 서버에서 결제 예약 

앱 스토어(App Store, Google Play)에서 결제 거래를 시작하기 전에, "[결제 예약](https://developers.line.biz/en/reference/line-mini-app/#reserve-purchase)" 엔드포인트를 사용하여 LINE MINI App 서버에서 결제를 예약합니다.

사용자가 LINE MINI App에서 아이템의 구매 버튼을 탭할 때처럼 적절한 시점에 LINE MINI App 서버에서 결제 예약을 하십시오.

결제 예약에 필요한 추가 매개변수를 준비합니다.

- 인증 시 액세스 토큰에는 [`liff.getAccessToken()`](https://developers.line.biz/en/reference/liff/#get-access-token) 메서드로 얻은 값을 지정합니다.
- `clientIp`에는 LINE MINI App 서버에서 얻은 사용자의 IP 주소를 지정합니다.
- `clientOs`에는 [`liff.getOS()`](https://developers.line.biz/en/reference/liff/#get-os) 메서드로 얻은 값을 지정합니다.

<!-- note start -->

**액세스 토큰의 유효 기간**

액세스 토큰은 발급 후 12시간 동안 유효합니다. 다만 유효 기간 내라도 사용자의 동작으로 인해 액세스 토큰이 철회될 수 있습니다. 따라서 액세스 토큰을 얻는 시점에 주의해 주십시오.

- 사용자가 LINE MINI App을 닫으면 액세스 토큰이 철회될 수 있습니다. 자세한 내용은 LIFF 문서의 [LIFF 앱을 닫을 때의 동작](https://developers.line.biz/en/docs/liff/developing-liff-apps/#behavior-when-closing-liff-app)을 참고해 주십시오.
- "[채널 동의 간소화](https://developers.line.biz/en/docs/line-mini-app/develop/channel-consent-simplification/#what-is-channel-consent-simplification)" 기능이 활성화되어 있을 때 검증 화면에서 추가 권한을 부여하면 액세스 토큰이 갱신되며, 이전에 발급된 액세스 토큰은 철회됩니다. 자세한 내용은 [검증 화면에서 `openid` 스코프 이외의 권한 요청](https://developers.line.biz/en/docs/line-mini-app/develop/channel-consent-simplification/#request-permissions-other-than-openid)을 참고해 주십시오.

<!-- note end -->

이 시점에서는 아직 결제가 완료된 것이 아닙니다. 예를 들어 결제 예약이 성공하더라도 사용자가 나중에 LINE MINI App을 떠나거나 앱 스토어에서 결제 거래를 취소하면 실제 결제는 완료되지 않습니다.

결제 예약 시 응답에서 얻을 수 있는 주문 ID(`orderId` 값)는 결제가 완료되었을 때 LINE Platform이 보내는 웹훅에도 매개변수로 포함됩니다. LY Corporation에 문의하거나 조사할 때 필요하므로 `orderId` 값을 로그나 저장소에 기록해 주십시오.

또한 응답에 포함된 `x-line-request-id` 헤더의 값을 기록해 두었다가 `orderId` 값과 함께 문의해 주십시오.

### 5. 스토어에서 결제 거래 시작 

결제 예약을 완료한 후에는 LINE MINI App에서 [앱 스토어 결제](https://developers.line.biz/en/reference/line-mini-app/#create-payment)를 시작합니다.

```javascript
await liff.iap.createPayment({
  productId,
  orderId,
});
```

결제 거래가 성공하면 LINE Platform은 스토어에 확인하여 결제가 올바르게 이루어졌는지 검증합니다. 결제가 올바른 것으로 검증되면 LINE Platform은 결제 완료 웹훅 이벤트를 웹훅 엔드포인트로 알립니다. 전달되는 웹훅 이벤트에 대한 자세한 내용은 LINE MINI App API 레퍼런스의 [결제 완료 이벤트](https://developers.line.biz/en/reference/line-mini-app/#purchase-complete-event)를 참고해 주십시오.

결제가 취소되거나 결제 거래가 실패하면 예외가 발생합니다. 필요에 따라 오류 처리를 구현해 주십시오.

```javascript
try {
  await liff.iap.createPayment({
    productId,
    orderId,
  });
} catch (e) {
  // e => { code: "CANCELED", message: "Transaction was canceled." }
  console.error({
    code: e.code,
    message: e.message,
  });
}
```

### 6. 웹훅을 받고 결제 완료 처리 

LINE Platform이 알리는 [결제 완료](https://developers.line.biz/en/reference/line-mini-app/#purchase-complete-event) 웹훅 이벤트를 받으면, LINE MINI App 서버에서 내용을 확인한 후 사용자에게 아이템을 지급합니다. 사용자에게 아이템을 지급하는 구체적인 방법은 개발하는 LINE MINI App의 구현에 따라 다릅니다.

웹훅 이벤트의 특성상 네트워크 또는 애플리케이션 오류로 인해 같은 이벤트가 여러 번 전달될 수 있습니다. 또한 LINE MINI App 서버가 특정 결제 완료 이벤트를 올바르게 받았더라도, LINE Platform이 수신을 확인하지 못하면 같은 이벤트가 다시 전달될 수 있습니다.

사용자의 각 결제에는 [결제 예약](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/implement-in-app-purchase/#reserve-payment) 시 발급된 고유한 `orderId`가 할당됩니다. `orderId`를 사용하여 거래가 이미 처리되었는지 확인하십시오. 또한 각 결제에 대해 아이템은 한 번만 지급하십시오.

결제 완료 여부는 항상 웹훅 이벤트를 기준으로 판단하십시오.

#### 웹훅 서명 검증 

위조된 요청을 방지하기 위해 웹훅을 받을 때 `x-line-signature` 요청 헤더를 사용하여 서명을 검증하십시오. 자세한 내용은 [웹훅 서명 검증](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/iap-guidelines/#verify-webhook-signature)을 참고해 주십시오.

#### 웹훅에 대한 응답 

LINE Platform은 LINE MINI App 서버의 응답 내용을 검증하지 않으므로, 서버는 임의의 페이로드를 반환할 수 있습니다.

다만 서버가 웹훅을 정상적으로 받았다면 2xx 상태 코드를 반환해야 합니다.

그 밖의 상태 코드(예: 3xx, 4xx, 5xx)가 반환되면 LINE Platform은 해당 요청을 실패로 간주하고 웹훅을 다시 전달합니다. 재전달은 30분 이내에 여러 번 이루어집니다.

#### 웹훅 이벤트 기록 조회 

"[웹훅 이벤트 기록 조회](https://developers.line.biz/en/reference/line-mini-app/#webhook-events-history)" 엔드포인트를 사용하면 이전에 보낸 웹훅 이벤트의 기록을 가져올 수 있습니다.

수신에 실패한 웹훅 이벤트를 복구해야 한다면 이 엔드포인트를 사용하십시오.

자세한 내용은 LINE MINI App API 레퍼런스의 [웹훅 이벤트 기록 조회](https://developers.line.biz/en/reference/line-mini-app/#webhook-events-history)를 참고해 주십시오.

## 테스트 결제 가이드 

LINE MINI App에 인앱 결제 기능을 연동하면 Developing 채널의 LINE MINI App 채널에서 테스트 결제를 할 수 있습니다. 테스트 결제를 통해 LINE MINI App에서 아이템을 구매하고 [구매 내역을 확인](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/implement-in-app-purchase/#purchase-history)하는 등 일련의 작업을 검증할 수 있습니다.

Developing 채널에서 테스터 권한이 있는 계정이 결제 과정을 진행하면 시스템은 이를 테스트 결제로 처리합니다. 따라서 실제 청구 없이 결제 흐름을 테스트할 수 있습니다.

테스트 결제를 하는 사용자는 다음 조건을 모두 충족해야 합니다.

- 해당 LINE MINI App 채널의 [Admin 또는 Tester 역할](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/implement-in-app-purchase/#channel-permission)이 있어야 합니다.
- 테스트 결제 기능의 [테스터 권한](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/implement-in-app-purchase/#tester-permission)이 있어야 합니다.

### LINE MINI App 채널의 역할 

LINE MINI App의 테스트 결제 기능을 사용하려면 LINE MINI App 채널의 Admin 역할 또는 Tester 역할이 필요합니다. [LINE Developers Console](https://developers.line.biz/console/)의 **Role settings** 탭에서 권한을 설정하십시오.

역할 설정 방법에 대한 자세한 내용은 LINE Developers Console 문서의 [채널에서 개발자 추가, 역할 편집, 개발자 삭제](https://developers.line.biz/en/docs/line-developers-console/managing-roles/#role-settings-for-channel)를 참고해 주십시오.

채널의 Admin 역할을 가진 개발자만 채널 역할을 추가하거나 편집할 수 있습니다. 역할의 차이에 대한 자세한 내용은 LINE Developers Console 문서의 [LINE MINI App 채널](https://developers.line.biz/en/docs/line-developers-console/managing-roles/#roles-for-channel-line-mini-app)을 참고해 주십시오.

### 테스트 결제 기능의 테스터 권한 

테스트 결제 기능의 테스터 권한은 해당 LINE MINI App 채널의 Admin 역할 또는 Tester 역할을 가진 개발자에게 부여할 수 있습니다. LINE Developers Console의 **In-app purchase** 탭 안에 있는 **In-app purchase setup** 탭에서 테스터 권한을 설정하십시오.

권한을 설정하는 방법에 대한 자세한 내용은 [테스터 등록](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/iap-settings/#register-testers)을 참고해 주십시오.

### 테스트 결제 절차 

테스트 결제를 하면 실제 결제를 처리하지 않고도 동작을 확인할 수 있습니다.

테스트 절차는 다음과 같습니다.

1. 해당 LINE MINI App 채널에서 [테스터를 등록](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/iap-settings/#register-testers)합니다.
1. Developing용 LINE MINI App의 LIFF URL을 테스터와 공유합니다. LIFF URL은 LINE Developers Console의 **Web app settings** 탭에서 확인할 수 있습니다.
1. 테스터는 지정된 LIFF URL에서 LINE MINI App을 실행하고 결제를 진행합니다.

## 운영 체크리스트 

인앱 결제 서비스를 운영 환경에서 운영할 때는 다음 사항을 확인해 주십시오.

### 결제 성공 시 사용자 알림 

결제가 완료되면 LY Corporation이 LINE 공식 계정 "LINEアプリ内課金お知らせ"(일본어로 LINE 앱 내 결제 알림)에서 결제한 사용자에게 자동으로 메시지를 보냅니다. 따라서 개발자가 추가로 조치할 필요는 없습니다.

사용자는 이 계정을 차단하거나 알림 설정을 변경할 수 없습니다. 다만 드물게 사용자의 이용 환경이나 서버 상태 때문에 알림이 전달되지 않을 수 있습니다. 양해 부탁드립니다.

### 사용자가 구매 내역을 확인하는 방법 

사용자는 LINE 앱의 "Settings" 화면에서 **In-app purchases**를 열거나, LINE 공식 계정 "LINEアプリ内課金お知らせ"가 보낸 메시지에서 인앱 결제 내역을 확인할 수 있습니다. 최대 1년간의 구매 내역을 확인할 수 있습니다.

아래 "In-App Purchases" 화면에서 빨간색 테두리로 표시된 부분의 값은 [인앱 결제 사용 신청](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/request-iap-review/) 시점, [결제 예약 요청](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/implement-in-app-purchase/#reserve-payment) 시점, 또는 사용자가 스토어에서 구매한 시점의 실제 가격과 통화를 반영합니다.

![](https://developers.line.biz/media/line-mini-app/in-app-purchase/purchase-history-en.png)

#### 표시되는 내용과 설정 방법 

구매 내역에 표시되는 정보와 설정 위치는 다음 표를 참고해 주십시오.

| 번호 | 내용 | 설명 |
| --- | --- | --- |
| 1 | 아이템 이름(상품 이름)이 표시됩니다. | [결제 예약](https://developers.line.biz/en/reference/line-mini-app/#reserve-purchase)을 할 때 [요청 본문](https://developers.line.biz/en/reference/line-mini-app/#reserve-purchase-request-body)의 `shopProductName`에 지정합니다.<br />\* 사용자가 구매한 아이템을 식별할 수 있도록 적절한 값을 설정해 주십시오. |
| 2 | 인앱 결제 기능을 제공하는 서비스(LINE MINI App) 이름과 서비스 제공자의 서비스 이름이 표시됩니다.<br /><br />**표시 패턴:**<ul><li>기기 언어가 일본어로 설정된 경우: `LINEミニアプリ・{서비스 제공자의 서비스 이름}`</li><li>그 밖의 언어: `LINE MINI App・{서비스 제공자의 서비스 이름}`</li></ul>\* 현재 서비스 제공자의 서비스 이름은 다국어를 지원하지 않습니다. | 서비스 제공자의 서비스 이름은 LINE MINI App 채널의 **Basic settings** 탭 > **Channel name**에 설정됩니다.<br />\* 검증된 LINE MINI App의 채널 이름을 변경하는 경우 [재심사](https://developers.line.biz/en/docs/line-mini-app/service/update-service/)를 신청해야 합니다. |
| 3 | 결제에 사용된 앱 스토어(App Store 또는 Google Play)와 가격에 대응하는 상품 ID가 표시됩니다. | 상품 ID는 당사가 앱 스토어에 미리 등록하며, 개발자는 수정할 수 없습니다. 상품 ID와 가격의 조합은 [인앱 결제로 구매 가능한 아이템의 상품 ID 목록](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/iap-product-id/)에서 확인할 수 있습니다. |
| 4 | LINE Platform이 앱 스토어에서 결제 처리를 확인한 시각(결제 완료 시각)이 표시됩니다. | - |
| 5 | 실제 결제 거래에 사용된 통화와 가격이 표시됩니다. | 사용자의 앱 스토어 지역을 기준으로 통화가 변환되어 결제가 처리됩니다. |
