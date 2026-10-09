# 커스텀 기능

LINE MINI App에 다음과 같은 기능을 추가하여 사용자 경험을 더욱 향상시킬 수 있습니다. 사용할 수 있는 기능은 LINE MINI App이 검증되지 않은 MINI App인지 검증된 MINI App인지에 따라 다릅니다.

| 기능 | 검증되지 않은 MINI App | 검증된 MINI App |
| --- | --- | --- |
| [서비스 메시지](https://developers.line.biz/en/docs/line-mini-app/discover/custom-features/#service-messages) | ❌ | ✅ |
| [커스텀 경로](https://developers.line.biz/en/docs/line-mini-app/discover/custom-features/#custom-path) | ❌ | ✅ |
| [LINE MINI App의 바로 가기를 사용자 기기의 홈 화면에 추가](https://developers.line.biz/en/docs/line-mini-app/discover/custom-features/#create-shortcut-on-home-screen) | ❌ | ✅ |
| [공통 프로필 자동 입력(Quick-fill)](https://developers.line.biz/en/docs/line-mini-app/discover/custom-features/#quick-fill) | ❌ | ✅ |
| [헤더에 LINE MINI App 이름 표시](https://developers.line.biz/en/docs/line-mini-app/discover/custom-features/#display-mini-app-name-in-header) | ❌ | ✅ |
| [사용자에게 LINE 공식 계정 친구 추가 유도](https://developers.line.biz/en/docs/line-mini-app/discover/custom-features/#OA-friend) | ✅ | ✅ |
| [커스텀 액션 버튼](https://developers.line.biz/en/docs/line-mini-app/discover/custom-features/#custom-action-button) | ✅ | ✅ |
| [결제 시스템 사용](https://developers.line.biz/en/docs/line-mini-app/discover/custom-features/#using-payment-systems) | ✅ | ✅ |
| [광고 게재](https://developers.line.biz/en/docs/line-mini-app/discover/custom-features/#place-ads) | ✅ | ✅ |

검증되지 않은 MINI App의 헤더에는 URL의 도메인 이름이 표시되지만, 검증된 MINI App의 헤더에는 도메인 이름 대신 LINE MINI App 이름이 표시됩니다. 자세한 내용은 [LINE MINI App UI 컴포넌트](https://developers.line.biz/en/docs/line-mini-app/discover/ui-components/#header)를 참고해 주십시오.

## 서비스 메시지 

서비스 메시지는 사용자의 식당 예약이나 숙박 예약을 확인하는 내용을 전달할 때 사용할 수 있습니다.

서비스 메시지는 LINE MINI App이 사용자의 요청과 관련하여 사용자가 알아야 할 정보를 알려주는 기능입니다.

LINE MINI App에서 보낸 서비스 메시지는 LINE MINI App의 유형과 관계없이 LINE MINI App을 제공하는 지역별로 정해진 채팅방에 표시됩니다.

| 일본 | 태국 | 대만 |
| :-: | :-: | :-: |
| LINEミニアプリ お知らせ | LINE MINI App Notice | LINE MINI App 通知 |
| ![LINEミニアプリ お知らせ](https://developers.line.biz/media/line-mini-app/mini_service_notifier_jp.webp) | ![LINE MINI App Notice](https://developers.line.biz/media/line-mini-app/mini_service_notifier_th.webp) | ![LINE MINI App 通知](https://developers.line.biz/media/line-mini-app/mini_service_notifier_tw.webp) |

서비스 메시지를 보내려면 Service message API를 사용합니다. 자세한 내용은 [서비스 메시지 보내기](https://developers.line.biz/en/docs/line-mini-app/develop/service-messages/)를 참고해 주십시오.

<!-- note start -->

**서비스 메시지를 보내기 위한 조건**

서비스 메시지는 LINE MINI App에서 사용자가 한 동작에 대한 확인이나 응답으로만 보낼 수 있습니다. 할인, 쇼핑 적립, 신제품, 할인 쿠폰, 프로모션 정보를 포함한 광고와 이벤트 알림은 금지됩니다. 서비스 메시지 조건에 대한 자세한 내용은 [서비스 제공 중 서비스 메시지 조건](https://developers.line.biz/en/docs/line-mini-app/service/service-operation/#conditions-for-service-messages)을 참고해 주십시오.

<!-- note end -->

## 커스텀 경로 

커스텀 경로는 게시된 채널의 LIFF URL에 설정하는 고유한 문자열입니다. 커스텀 경로 기능을 사용하면 다음과 같이 LIFF URL에 원하는 문자열을 설정할 수 있습니다.

| LIFF ID가 포함된 예시 URL | 커스텀 경로 설정 예시 |
| --- | --- |
| `https://miniapp.line.me/123456-abcdefg` | `https://miniapp.line.me/cony_coffee` |

예를 들어 고유한 이름을 커스텀 경로로 설정하면, 사용자는 URL을 보고 어떤 브랜드나 가게의 LINE MINI App인지 쉽게 알 수 있습니다. 커스텀 경로에 대한 자세한 내용은 [커스텀 경로 설정](https://developers.line.biz/en/docs/line-mini-app/develop/custom-path/)을 참고해 주십시오.

## LINE MINI App의 바로 가기를 사용자 기기의 홈 화면에 추가 

사용자는 LINE MINI App의 바로 가기를 사용자 기기의 홈 화면에 추가할 수 있습니다. 이렇게 하면 사용자는 기기의 홈 화면에서 바로 LINE MINI App에 접근할 수 있습니다.

![](https://developers.line.biz/media/line-mini-app/develop/add-to-home-screen/add-shortcut-screen-ios-en.webp)
![](https://developers.line.biz/media/line-mini-app/develop/add-to-home-screen/shortcut-ios-en.webp)

멤버십 카드나 모바일 주문처럼 사용자가 자주 사용하는 서비스에 이 기능을 사용하면 사용자 경험을 향상시킬 수 있습니다.

자세한 내용은 [LINE MINI App의 바로 가기를 사용자 기기의 홈 화면에 추가](https://developers.line.biz/en/docs/line-mini-app/develop/add-to-home-screen/)를 참고해 주십시오.

## 공통 프로필 자동 입력(Quick-fill) 

Quick-fill은 LINE MINI App에서 **Auto-fill**을 탭하면 필요한 프로필 정보를 자동으로 입력해 주는 기능입니다. 계정 센터에서 설정한 공통 프로필의 정보를 LINE MINI App에서 간편하게 사용할 수 있습니다. 자세한 내용은 [공통 프로필 Quick-fill 개요](https://developers.line.biz/en/docs/line-mini-app/quick-fill/overview/)를 참고해 주십시오.

![](https://developers.line.biz/media/line-mini-app/quick-fill/quick-fill-3-steps.webp)

LINE MINI App에 Quick-fill을 구현하면 사용자는 버튼을 한 번 탭하는 것만으로 주소나 전화번호 등 필요한 정보를 자동으로 입력할 수 있습니다. 이를 통해 직접 입력하는 번거로움이 없어지며, 매장 예약이나 온라인 스토어 주문 시 사용자 편의가 높아집니다.

## 헤더에 LINE MINI App 이름 표시 

검증된 MINI App의 [헤더](https://developers.line.biz/en/docs/line-mini-app/discover/ui-components/#header)에는 제목, LINE MINI App 이름, 검증 배지가 표시됩니다. 검증되지 않은 MINI App의 경우에는 제목과 엔드포인트 URL의 도메인 이름이 표시됩니다.

![](https://developers.line.biz/media/line-mini-app/line-mini-app-header-en.png)

자세한 내용은 [LINE MINI App UI 컴포넌트](https://developers.line.biz/en/docs/line-mini-app/discover/ui-components/)의 [헤더](https://developers.line.biz/en/docs/line-mini-app/discover/ui-components/#header) 섹션을 참고해 주십시오.

## 사용자에게 LINE 공식 계정 친구 추가 유도 

LINE MINI App에서는 친구 추가 옵션을 사용하여 [검증 화면](https://developers.line.biz/en/docs/line-mini-app/develop/configure-console/#verification-screen) 또는 [채널 동의 화면](https://developers.line.biz/en/docs/line-mini-app/develop/configure-console/#consent-screen-settings)에서 사용자가 LINE 공식 계정을 친구로 추가하도록 유도할 수 있습니다.

자세한 내용은 [LINE MINI App에서 LINE 공식 계정 친구 추가(친구 추가 옵션)](https://developers.line.biz/en/docs/line-mini-app/service/add-friend-option/)를 참고해 주십시오.

![봇 링크 기능 1](https://developers.line.biz/media/line-mini-app/miniguide-incremental-01-en.webp)
![봇 링크 기능 2](https://developers.line.biz/media/line-mini-app/miniguide-incremental-02-en.webp)

또한 [`liff.requestFriendship()`](https://developers.line.biz/en/reference/liff/#request-friendship) 메서드를 사용하면 언제든지 하위 창을 표시하여 사용자에게 LINE 공식 계정을 친구로 추가하거나 차단을 해제하도록 안내할 수 있습니다.

## 커스텀 액션 버튼 

LINE MINI App을 친구와 쉽게 공유할 수 있도록 [기본 제공 액션 버튼](https://developers.line.biz/en/docs/line-mini-app/discover/builtin-features/#action-button)이 제공되지만, [커스텀 액션 버튼을 구현](https://developers.line.biz/en/docs/line-mini-app/develop/share-messages/)하는 방법도 있습니다.

![](https://developers.line.biz/media/line-mini-app/mini_share_custom.webp)

## 결제 시스템 사용 

LINE Pay 등의 결제 수단을 LINE MINI App에 연동할 수 있습니다. 또한 일본에서만 [LINE MINI App 인앱 결제](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/overview/) 기능을 사용할 수 있습니다.

LINE MINI App에서 사용할 수 있는 결제 시스템은 국가 또는 지역에 따라 다릅니다.

| 결제 수단                             | 일본  | 대만   | 태국     |
| ------------------------------------- | :---: | :----: | :------: |
| LINE Pay                              |  ❌   |   ✅   |    ✅    |
| LINE MINI App 인앱 결제               |  ✅   |   ❌   |    ❌    |
| 기타 수단                             |  ✅   |   ✅   |    ✅    |

자세한 내용은 [결제 처리](https://developers.line.biz/en/docs/line-mini-app/develop/payment/)를 참고해 주십시오.

![mini intro linepay](https://developers.line.biz/media/line-mini-app/mini_intro_linepay.png)

## 광고 게재 

LINE MINI App에는 [LY Ads Network 디스플레이 광고(웹)](https://www.lycbiz.com/jp/partner/adnetwork/ly-ads/)(일본어만 제공)를 게재하여 수익을 창출할 수 있습니다. 검증된 MINI App과 검증되지 않은 MINI App 모두에 광고를 게재할 수 있지만, 서비스는 일본에서 제공되어야 합니다.

자세한 내용은 [LINE MINI App에 광고 게재](https://developers.line.biz/en/docs/line-mini-app/service/line-mini-app-ads/)를 참고해 주십시오.
