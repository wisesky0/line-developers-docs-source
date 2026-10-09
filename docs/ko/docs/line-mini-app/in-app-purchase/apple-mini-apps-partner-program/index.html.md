# Mini Apps Partner Program을 통한 App Store 수수료 인하

이 페이지에서는 Apple Inc.가 제공하는 Mini Apps Partner Program이 LINE MINI App의 인앱 결제에 어떻게 적용되는지 설명합니다. 수수료 인하가 어떻게 작동하는지, 신청 방법, 신청 요건, 프로그램 참여의 효과를 포함합니다.

<!-- table of contents -->

## Mini Apps Partner Program이란 

[Mini Apps Partner Program](https://developer.apple.com/programs/mini-apps-partner/)은 인앱 결제에 대한 수수료 인하 프로그램입니다. 인앱 결제 기능의 사용이 승인된 LINE MINI App이라면 누구나 선택적으로 이 프로그램을 신청할 수 있습니다.

Mini Apps Partner Program이 LINE MINI App에 적용되면, iOS에서 App Store 거래의 매출 대금을 지급하면서 Apple Inc.에 지불하는 수수료가 줄어듭니다. Mini Apps Partner Program에 따라 수수료가 줄어들면, LY Corporation이 App Store에 지불하는 수수료에 해당하는 금액도 함께 줄어듭니다. 따라서 [LINE 인앱 결제 이용약관(LINE MINI App 제공자용)](https://terms2.line.me/LINE_MINI_App_IAP?lang=en)에 따라 총 매출액에서 차감되는 금액도 함께 줄어듭니다.

## Mini Apps Partner Program 신청 요건 

[인앱 결제](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/overview/) 신청이 승인된 LINE MINI App에 대해서만 Mini Apps Partner Program을 신청할 수 있습니다.

인앱 결제를 신청하지 않으셨다면 [인앱 결제 사용 신청](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/request-iap-review/)의 단계를 따라 주십시오.

## Mini Apps Partner Program 신청 

LINE Developers Console에서 LINE MINI App을 검증 심사에 제출할 때 Mini Apps Partner Program을 신청할 수 있습니다. LINE MINI App마다 개별적으로 신청해야 합니다.

자세한 내용은 [Mini Apps Partner Program 신청](https://developers.line.biz/en/docs/line-mini-app/submit/submission-guide/#apply-for-program)을 참고해 주십시오.

## 수수료 인하 적용 방식 

Mini Apps Partner Program은 LINE MINI App 단위로 적용되며, 각 결제는 수수료 인하 요건에 맞는지 개별적으로 평가됩니다.

프로그램 요건을 충족하지 않는 App Store 결제, Google Play 결제, 테스트 결제에는 수수료 인하가 적용되지 않습니다.

### 연령 범위 확인 

사용자가 Mini Apps Partner Program이 적용된 LINE MINI App을 실행하면 사용자의 연령 범위가 확인될 수 있습니다. Apple Inc.가 제공하는 [Declared Age Range API](https://developer.apple.com/documentation/declaredagerange)를 사용하여 사용자의 연령 범위를 확인할 수 있습니다. 서비스 제공자는 LINE MINI App에 연령 범위 확인 기능을 직접 구현할 필요가 없습니다.

사용자가 연령 범위 공유를 거부하거나, 사용자의 연령 범위를 달리 확인할 수 없거나, 사용자의 기기 환경이 연령 범위 확인을 지원하지 않는 경우 다음과 같은 제한이 적용될 수 있습니다.

- 사용자의 결제에 대한 수수료가 인하되지 않을 수 있습니다.
- 사용자가 LINE MINI App을 사용하지 못하게 되고, 앱이 실행되기 전에 종료될 수 있습니다.

<!-- note start -->

**연령 범위 확인 정보는 서비스 제공자에게 제공되지 않습니다**

Mini Apps Partner Program의 연령 범위 확인 과정에서 사용되거나 얻어진 나이, 생년월일, 연령 범위 등 연령 관련 정보는 LINE MINI App 서비스 제공자에게 제공되지 않습니다.

<!-- note end -->

## 수수료가 인하된 결제 구현 

LINE Platform이 결제에 수수료 인하가 적용되는지 판단합니다. 따라서 Mini Apps Partner Program 적용 여부에 따라 인앱 결제 흐름을 별도로 구현할 필요가 없습니다. 이미 인앱 결제 기능을 구현했다면 프로그램이 적용되더라도 코드를 변경할 필요가 없습니다.

결제 흐름에 대한 자세한 내용은 [인앱 결제 기능 연동](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/implement-in-app-purchase/)을 참고해 주십시오.

## 수수료가 인하된 결제에 대한 웹훅 이벤트 

[결제 완료 이벤트](https://developers.line.biz/en/reference/line-mini-app/#purchase-complete-event)와 [환불 이벤트](https://developers.line.biz/en/reference/line-mini-app/#refund-event)에서는 결제에 Mini Apps Partner Program의 수수료 인하가 적용된 경우 `paymentBenefitProgram` 속성의 값으로 `APPLE_MINI_APPS_PARTNER_PROGRAM`이 반환됩니다. 수수료 인하가 적용되지 않았다면 이 속성은 포함되지 않습니다.

`paymentBenefitProgram` 속성은 수수료 인하를 받은 결제를 식별하기 위한 추가 정보를 제공합니다. 이 속성은 구매 결과나 사용자에게 지급되는 아이템에는 영향을 주지 않습니다.

다음은 수수료 인하를 받은 결제에 대한 결제 완료 이벤트의 예시입니다.

```json
{
  "type": "purchaseComplete",
  "orderId": "T2025020710000002126002",
  "productId": "iap_ln_002",
  "userId": "U91FC5A...",
  "purchaseTimestamp": 1738672496,
  "channelId": "12345...",
  "paymentBenefitProgram": "APPLE_MINI_APPS_PARTNER_PROGRAM"
}
```

## LINE MINI App 간 이동 시 고려 사항 

Mini Apps Partner Program이 적용되는 LINE MINI App으로 다른 LINE MINI App에서 이동할 때는, 연령 범위 확인이 적절한 시점에 이루어지도록 웹 앱의 엔드포인트 URL 대신 대상 [LIFF URL](https://developers.line.biz/en/glossary/#liff-url) 또는 [영구 링크](https://developers.line.biz/en/docs/line-mini-app/develop/permanent-links/)를 사용해 주십시오.
