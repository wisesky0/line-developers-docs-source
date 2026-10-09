# 결제 처리하기

LINE MINI App에 결제 시스템을 연동하여 사용자에게 결제 기능을 제공할 수 있습니다.

## 사용 가능한 결제 시스템 

LINE MINI App에서 사용할 수 있는 결제 시스템은 국가 또는 지역에 따라 다릅니다.

| 결제 수단 | 일본 | 대만 | 태국 |
| --- | :-: | :-: | :-: |
| [LINE Pay](https://developers.line.biz/en/docs/line-mini-app/develop/payment/#line-pay) | ❌ | ✅ | ✅ |
| [LINE MINI App의 인앱 결제](https://developers.line.biz/en/docs/line-mini-app/develop/payment/#in-app-purchase) | ✅ | ❌ | ❌ |
| [기타 결제 수단](https://developers.line.biz/en/docs/line-mini-app/develop/payment/#other-payment-methods) | ✅ | ✅ | ✅ |

<!-- note start -->

**일본의 LINE Pay 서비스는 종료되었습니다**

일본의 LINE Pay 서비스는 2025년 4월 30일부로 종료되었습니다. 대만과 태국의 LINE Pay 서비스는 계속 이용할 수 있습니다.

<!-- note end -->

## LINE Pay 

### LINE Pay 가맹점 계정 준비하기 

LINE MINI App에서 LINE Pay를 사용하려면 LINE Pay 가맹점 계정이 필요합니다. 아직 계정이 없다면 [LINE Pay 공식 웹사이트](https://pay.line.me/portal/global/main)에서 신청하세요.

### LINE Pay를 사용하는 서비스 개발하기 

LINE Pay 가맹점 계정을 발급받으면 LINE Pay를 LINE MINI App에 연동하세요. LINE Pay에 대한 자세한 내용은 LINE Pay Developers의 [온라인 결제 문서](https://developers-pay.line.me/online)를 참고하세요.

LINE Pay를 사용하면 결제는 다음과 같이 처리됩니다.

1. 사용자가 LINE MINI App에서 거래를 시작하면 LINE Pay의 결제 과정이 시작됩니다.

   LINE MINI App에 표시되는 화면:<br>![](https://developers.line.biz/media/line-mini-app/mini_linepay_flow01.png)

2. 사용자는 LINE Pay에서 결제 내역을 확인하고 LINE Pay 인증 정보를 입력합니다.

   LINE Pay에 표시되는 화면:<br>![](https://developers.line.biz/media/line-mini-app/mini_linepay_flow02.webp)

3. 주문 확인 페이지가 표시됩니다.

   LINE MINI App에 표시되는 화면:<br>![](https://developers.line.biz/media/line-mini-app/mini_linepay_flow03.png)

### LINE Pay 테스트하기 

결제 처리 구현을 테스트하려면 LINE Pay가 제공하는 [샌드박스](https://developers-pay.line.me/sandbox)를 사용할 수 있습니다.

## LINE MINI App의 인앱 결제 

[인앱 결제](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/overview/)는 사용자가 LINE MINI App 내에서 제공되는 디지털 콘텐츠를 구매할 수 있도록 하는 시스템입니다. 사용자는 LINE 앱에서 LINE MINI App을 실행하여 디지털 콘텐츠 구매를 시작하며, 결제는 App Store 또는 Google Play 결제 시스템을 통해 처리됩니다.

현재 인앱 결제는 일본에서만 사용할 수 있습니다. 자격 요건 및 기타 요구사항에 대한 자세한 내용은 [인앱 결제 개요](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/overview/)를 참고하세요.

## 기타 결제 수단 

위에서 언급한 것 외의 다른 결제 수단을 LINE MINI App에서 제공하려면, 일반 웹 페이지에서 구현하는 것과 같은 방식으로 구현하세요. 다만 외부 도메인이나 앱에서 거래를 완료한 후 사용자가 LINE MINI App 페이지로 다시 리디렉션되도록 과정을 설계해야 합니다.
