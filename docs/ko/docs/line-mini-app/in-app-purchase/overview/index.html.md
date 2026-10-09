# 인앱 결제 개요

이 페이지에서는 LINE MINI App의 인앱 결제 기능에 대한 개요를 제공합니다.

인앱 결제는 사용자가 [검증된 MINI App](https://developers.line.biz/en/docs/line-mini-app/discover/introduction/#verified-mini-app) 안에서 디지털 콘텐츠를 구매할 수 있도록 하는 시스템입니다.

이 기능은 선택 사항이며, 사용하려면 [LINE Developers Console](https://developers.line.biz/console/)에서 신청하고 승인을 받아야 합니다. 신청 방법에 대한 자세한 내용은 [인앱 결제 사용 신청](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/request-iap-review/)을 참고해 주십시오.

## 인앱 결제란 

인앱 결제는 검증된 MINI App 안에서 LINE MINI App이 제공하는 디지털 콘텐츠를 사용자가 구매할 수 있도록 하는 시스템입니다.

현재는 소비성(consumable) 디지털 콘텐츠만 구매할 수 있습니다.

인앱 결제에는 다음과 같은 특징이 있습니다.

- App Store와 Google Play의 결제 메커니즘을 사용합니다.
- LINE Platform이 결제 검증 및 알림 기능을 제공합니다.
- LIFF SDK를 사용하여 클라이언트를 구현합니다.
- 웹훅을 사용하여 서버 측 연동을 수행합니다.

구현에 대한 자세한 내용은 [인앱 결제 기능 연동](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/implement-in-app-purchase/)을 참고해 주십시오.

### 인앱 결제 기능의 서비스 수수료 

인앱 결제 기능을 사용할 때는 서비스 수수료가 적용됩니다. 수수료율은 LINE Developers Console에서 서비스를 신청할 때 **In-app purchase** 탭에 표시됩니다.

#### Mini Apps Partner Program 

[Mini Apps Partner Program](https://developer.apple.com/programs/mini-apps-partner/)은 Apple Inc.가 제공하는 수수료 인하 프로그램입니다. 인앱 결제 사용이 승인된 LINE MINI App은 이 프로그램을 신청할 수 있습니다.

자세한 내용은 [Mini Apps Partner Program을 통한 App Store 수수료 인하](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/apple-mini-apps-partner-program/)를 참고해 주십시오.

## 인앱 결제 사용을 시작하는 흐름 

인앱 결제 사용을 시작하는 흐름은 다음과 같습니다. 자세한 내용은 각 문서를 참고해 주십시오.

| 단계 | 세부 내용 |
| --- | --- |
| 1단계: [인앱 결제 사용 신청](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/request-iap-review/) | LINE Developers Console의 LINE MINI App 채널에 있는 **In-app purchase** 탭에서 사용을 신청합니다. 신청할 때는 회사 이름을 포함하여 모든 정보를 정확하게 입력해 주십시오.<br>사용자에게 인앱 결제를 제공할 수 있는 것은 검증된 LINE MINI App뿐입니다. 다만 검증되지 않은 MINI App이라도 인앱 결제 사용을 신청할 수는 있습니다. |
| 2단계: [인앱 결제 설정](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/iap-settings/) | 인앱 결제 사용 신청의 상태가 "Approved"가 되면 **In-app purchase** 탭 안의 **In-app purchase settings** 탭에서 웹훅 URL과 테스트 결제용 테스터를 등록합니다. |
| 3단계: Developing 채널에 [인앱 결제 연동](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/implement-in-app-purchase/) 및 [테스트 결제 진행](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/implement-in-app-purchase/#test-payment-guide) | LINE MINI App 채널의 Developing 채널에 인앱 결제 기능을 연동하고 테스트 결제를 진행합니다. |
| 4단계: [검증 심사 신청](https://developers.line.biz/en/docs/line-mini-app/submit/submission-guide/) | LINE Developers Console의 **Review request** 탭에서 검증된 MINI App으로 공개하기 위한 심사를 신청합니다. 신청할 때 **Review request** 탭에서 **Release the in-app purchase feature** 토글 버튼을 켜 주십시오. 같은 화면에서 Mini Apps Partner Program도 신청할 수 있습니다.<br>이미 검증된 MINI App으로 공개된 앱에 인앱 결제를 연동했다면 다시 심사를 받아야 합니다. |
| 5단계: 인앱 결제가 포함된 LINE MINI App 공개 | 4단계인 검증 심사가 승인되면 인앱 결제가 포함된 LINE MINI App을 공개할 수 있습니다.<br />이미 검증된 MINI App이었다면 절차가 다릅니다. 자세한 내용은 [LINE MINI App 제출](https://developers.line.biz/en/docs/line-mini-app/submit/submission-guide/)을 참고해 주십시오. |

## 시스템 구조 

인앱 결제는 다음 구성 요소로 이루어집니다.

| 구성 요소 | 역할 |
| --- | --- |
| LINE MINI App | 사용자의 동작을 받고 결제 거래를 시작합니다. |
| LINE MINI App 서버 | 결제를 예약하고, 웹훅을 받고, 결제 결과를 관리합니다. |
| LINE Platform | 스토어 결제를 검증하고 웹훅 이벤트를 보냅니다. |
| 앱 스토어 | 실제 결제 거래를 수행합니다.<ul><li>iOS: App Store</li><li>Android: Google Play</li></ul> |

## 조건 

인앱 결제를 사용하기 위한 조건과 요건은 다음과 같습니다.

### 인앱 결제 사용 조건 

LINE MINI App 채널에서 "Region to provide the service"와 "Company or owner's country or region"이 모두 "Japan"으로 설정되어 있어야 합니다.

### 인앱 결제 요건 

- LINE MINI App이 검증된 MINI App입니다 (\*).
- LINE MINI App의 LIFF SDK 버전이 2.26.0 이상입니다.
- LINE MINI App이 LIFF 브라우저에서 열립니다.
- 사용자가 LINE 계정에 일본 전화번호를 등록했습니다.
- 사용자의 LINE 버전이 15.6.0 이상입니다.

\* 검증되지 않은 MINI App은 Developing 및 Review용 LINE MINI App에서만 작동합니다.

## 구매 가능한 아이템과 가격 

인앱 결제로 구매할 수 있는 아이템은 LINE Platform에서 미리 정의되어 있습니다. 자세한 내용은 [인앱 결제로 구매 가능한 아이템의 상품 ID 목록](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/iap-product-id/)을 참고해 주십시오.

아이템 가격은 일본 엔으로 정의됩니다.

사용자에게 인앱 결제로 구매 가능한 아이템을 보여줄 때는 사용자의 경험이 나빠지지 않도록 사용자가 이용하는 앱 스토어의 지역에 맞춘 현지화 통화로 가격을 표시해야 합니다.

사용자가 이용하는 앱 스토어 지역에 맞게 현지화된 가격은 [`liff.iap.getPlatformProducts()`](https://developers.line.biz/en/reference/line-mini-app/#get-platform-products) 메서드로 가져올 수 있습니다. 이 메서드를 사용하면 LINE MINI App에 표시되는 가격과 결제 시 앱 스토어에 표시되는 가격의 차이를 줄일 수 있습니다.

## 인앱 결제 취소 

LY Corporation은 인앱 결제로 완료된 결제의 취소를 지원하지 않습니다. 부정 사용이나 실수로 한 결제의 경우 App Store나 Google Play 등 각 앱 스토어의 최신 환불 정책을 확인하고, 사용자가 직접 환불을 요청하도록 안내해 주십시오.

- [Apple에서 구매한 앱이나 콘텐츠의 환불 요청](https://support.apple.com/en-us/118223)
- [Google Play 환불 정책 알아보기](https://support.google.com/googleplay/answer/2479637?hl=en)

## 처리 흐름 예시 

인앱 결제의 기본 처리 흐름 예시입니다.

![](https://developers.line.biz/media/line-mini-app/in-app-purchase/flow.png)

- 1〜5: [환경이 인앱 결제를 지원하는지 확인](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/implement-in-app-purchase/#check-the-environment)
- 6〜9: [구매 가능한 아이템 목록 가져오기](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/implement-in-app-purchase/#get-item-information) 및 사용자에게 표시
- 10〜13: [인앱 결제 사용에 대한 사용자 동의 얻기](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/implement-in-app-purchase/#get-user-consent)
- 14〜21: LINE MINI App 서버에서 [결제 예약](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/implement-in-app-purchase/#reserve-payment)
- 22〜30: 앱 스토어(App Store, Google Play)에서 [결제 거래 시작](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/implement-in-app-purchase/#start-transaction)
- 31〜36: [웹훅 수신, 결제 완료 확인, 아이템 지급](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/implement-in-app-purchase/#receive-webhook)
