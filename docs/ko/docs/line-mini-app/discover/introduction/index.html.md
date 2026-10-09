# LINE MINI App 소개

LINE MINI App은 LINE에서 실행되는 웹 애플리케이션입니다. LINE MINI App을 이용하면 사용자는 별도의 네이티브 앱을 설치하지 않고도 서비스를 이용할 수 있습니다.

"LINE MINI App"은 공식 명칭입니다.

LINE MINI App은 웹 브라우저이므로 대부분의 HTML5 사양을 사용할 수 있습니다. 자세한 내용은 [LINE MINI App 사양](https://developers.line.biz/en/docs/line-mini-app/discover/specifications/)을 참고해 주십시오.

## 소개 

[LINE MINI App 정책](https://terms2.line.me/LINE_MINI_App?lang=en)에서 허용된 고객이라면 누구나 LINE MINI App을 개발할 수 있습니다. 먼저 [빠른 시작 가이드](https://developers.line.biz/en/docs/line-mini-app/quickstart/)를 확인해 주십시오.

LINE MINI App 채널을 개발하려면 [LINE Developers Console](https://developers.line.biz/console/) 계정이 필요합니다. LINE MINI App 설정부터 심사 제출까지 많은 작업이 LINE Developers Console에서 이루어집니다.

## LINE MINI App으로 할 수 있는 일 

LINE MINI App에는 다음과 같은 [기본 제공 기능](https://developers.line.biz/en/docs/line-mini-app/discover/builtin-features/)이 있습니다.

- 다른 사용자와 LINE MINI App을 공유하는 기능
- 서비스에 대한 사용자 접근 권한을 요청하는 기능

또한 다음과 같은 [커스텀 기능](https://developers.line.biz/en/docs/line-mini-app/discover/custom-features/)을 추가하여 사용자 경험을 더욱 향상시킬 수 있습니다.

- 서비스 메시지
- 결제 시스템 사용
- 커스텀 액션 버튼

<!-- tip start -->

**LINE MINI App 체험하기**

LY Corporation은 개발자를 위해 [LINE MINI App Playground](https://miniapp.line.me/lineminiapp_playground)라는 LINE MINI App을 제공합니다. LINE 앱이 설치된 스마트폰에서 LINE MINI App Playground를 열면 LINE MINI App의 일부 기능을 직접 체험해 볼 수 있습니다.

<!-- tip end -->

## 검증되지 않은 MINI App과 검증된 MINI App 

LINE MINI App은 검증 심사 통과 여부에 따라 검증되지 않은 MINI App과 검증된 MINI App으로 나뉩니다. 두 가지의 차이점은 다음 섹션을 참고해 주십시오.

### 검증되지 않은 MINI App이란 

검증되지 않은 MINI App은 아직 검증 심사를 통과하지 않은 LINE MINI App입니다. LINE MINI App 채널을 만든 후 검증 심사를 통과하기 전까지 LINE MINI App은 검증되지 않은 MINI App입니다.

누구나 검증되지 않은 MINI App을 만들 수 있지만, 아래의 "[검증된 MINI App이란](https://developers.line.biz/en/docs/line-mini-app/discover/introduction/#verified-mini-app)"에서 설명하듯이 일부 기능이 제한됩니다. LINE MINI App을 검증된 MINI App으로 만들려면 [LINE MINI App 심사를 제출](https://developers.line.biz/en/docs/line-mini-app/submit/submission-guide/)해 주십시오.

검증되지 않은 MINI App의 [헤더](https://developers.line.biz/en/docs/line-mini-app/discover/ui-components/#header)에는 제목과 엔드포인트 URL의 도메인 이름이 표시됩니다.

![](https://developers.line.biz/media/line-mini-app/unverified-mini-app-header-en.png)

### 검증된 MINI App이란 

LINE MINI App이 검증 심사를 통과하면 검증된 MINI App이 됩니다. 검증된 MINI App이 되면 [헤더](https://developers.line.biz/en/docs/line-mini-app/discover/ui-components/#header) 등에 검증 배지가 표시됩니다. 또한 헤더에는 제목과 LINE MINI App 이름이 함께 표시됩니다.

![](https://developers.line.biz/media/line-mini-app/verified-mini-app-header-en.png)

이 밖에도 다음과 같은 기능을 사용할 수 있습니다.

- [LINE MINI App의 바로 가기를 사용자 기기의 홈 화면에 추가](https://developers.line.biz/en/docs/line-mini-app/develop/add-to-home-screen/)
- [커스텀 경로](https://developers.line.biz/en/docs/line-mini-app/develop/custom-path/)
- [채널 동의 간소화](https://developers.line.biz/en/docs/line-mini-app/develop/channel-consent-simplification/)

이처럼 LINE MINI App을 검증된 MINI App으로 만들면 신뢰성과 편의성 측면에서 사용자 경험을 향상시킬 수 있습니다. 검증된 MINI App에서 사용할 수 있는 기능에 대한 자세한 내용은 [커스텀 기능](https://developers.line.biz/en/docs/line-mini-app/discover/custom-features/)을 참고해 주십시오.

## LINE MINI App 구성 요소 

LINE MINI App 페이지는 (A) 헤더와 (B) 본문으로 구성됩니다. 자세한 내용은 [LINE MINI App UI 컴포넌트](https://developers.line.biz/en/docs/line-mini-app/discover/ui-components/)를 참고해 주십시오.

![LINE MINI App 구조](https://developers.line.biz/media/line-mini-app/mini_concept.webp)

## 사용자가 LINE MINI App에 접근하는 방법 

사용자는 LINE 안에서뿐만 아니라 LINE 밖에서도 LINE MINI App에 접근할 수 있습니다. LINE 안에서 LINE MINI App에 접근하는 방법은 여러 가지가 있습니다.

### LINE 밖에서 접근 

[LINE MINI App 영구 링크](https://developers.line.biz/en/docs/line-mini-app/develop/permanent-links/)가 있으면 LINE 밖에서도 LINE MINI App에 접근할 수 있습니다. 다음과 같은 방법으로 LINE MINI App의 영구 링크를 사용자와 공유할 수 있습니다.

- 웹사이트, 이메일, 문자 메시지 등에 게시하기
- 다양한 매체에 게시할 QR 코드 만들기

또한 [LINE MINI App의 바로 가기를 사용자 기기의 홈 화면에 추가](https://developers.line.biz/en/docs/line-mini-app/develop/add-to-home-screen/)하면 사용자가 홈 화면에서 바로 LINE MINI App에 접근할 수 있습니다.

### LINE 공식 계정 

LINE 공식 계정에서도 LINE MINI App에 접근할 수 있습니다. 예를 들어 LINE 공식 계정에서 친구에게 보내는 리치 메시지나 채팅 화면에 표시되는 리치 메뉴에 LINE MINI App 링크를 추가할 수 있습니다. 자세한 내용은 [LINE 공식 계정 사용](https://developers.line.biz/en/docs/line-mini-app/service/line-mini-app-oa/)을 참고해 주십시오.

![LINE 공식 계정에서 LINE MINI App을 홍보할 수 있습니다](https://developers.line.biz/media/line-mini-app/mini_with_oa.webp)

### 홈 탭 

<!-- note start -->

**LINE 홈 탭에 LINE MINI App을 고정하는 기능은 종료되었습니다**

자세한 내용은 2024년 1월 9일자 뉴스 [이제 LINE 홈 탭에서 최근 사용한 LINE MINI App에 접근할 수 있습니다](https://developers.line.biz/en/news/2024/01/09/line-mini-app-history/)를 참고해 주십시오.

<!-- note end -->

LINE의 **Home** 탭에 있는 **Services**에서 최근 사용한 LINE MINI App에 접근할 수 있습니다. **Services** 섹션에는 마지막으로 사용한 순서대로 최대 8개의 최근 사용 LINE MINI App이 표시됩니다. 이 기능은 검증된 MINI App에서만 사용할 수 있습니다.

홈 탭의 표시 정책은 서비스를 제공하는 지역에 따라 다릅니다.

![](https://developers.line.biz/media/line-mini-app/mini-access-home-tab-en.webp)

### LINE 검색 

LINE 검색 기능을 통해서도 LINE MINI App에 접근할 수 있습니다. 이 기능은 검증된 MINI App에서만 사용할 수 있습니다.

![검색을 통한 접근](https://developers.line.biz/media/line-mini-app/mini_access_search.png)

### LINE 메시지 

사용자는 LINE MINI App을 친구에게 쉽게 공유할 수 있습니다. 사용자가 친구와 LINE MINI App을 쉽게 공유할 수 있도록 [기본 제공 액션 버튼](https://developers.line.biz/en/docs/line-mini-app/discover/builtin-features/#action-button)이 제공되지만, [커스텀 액션 버튼을 구현](https://developers.line.biz/en/docs/line-mini-app/develop/share-messages/)하는 방법도 있습니다.

![공유 메시지](https://developers.line.biz/media/line-mini-app/mini_access_share.webp)

## LIFF 앱에서는 가능하지만 LINE MINI App에서는 사용할 수 없는 기능 

| 항목 | 설명 |
| --- | --- |
| 액션 버튼 숨기기(Module mode) | LINE MINI App에서는 [액션 버튼](https://developers.line.biz/en/docs/line-mini-app/discover/builtin-features/#action-button)을 숨길 수 없습니다. LINE MINI App 채널에 추가된 LIFF 앱에는 **Module Mode**를 설정할 수 없습니다. |
| 같은 채널에 여러 LIFF 앱 추가 | LINE MINI App 채널에는 여러 웹 앱을 추가할 수 없습니다. |
| LIFF 브라우저의 화면 크기 선택 | LINE MINI App에서는 [LIFF 브라우저의 크기](https://developers.line.biz/en/docs/liff/overview/#screen-size)를 선택할 수 없습니다. LINE MINI App에서 사용할 수 있는 화면 크기는 `Full`뿐입니다. |

<!-- tip start -->

**LIFF 앱을 LINE MINI App으로 만들기를 권장합니다**

앞으로 LIFF와 LINE MINI App은 하나의 브랜드로 통합될 예정입니다. 이 통합에 따라 LIFF는 LINE MINI App에 포함됩니다. 따라서 새로운 LIFF 앱은 LINE MINI App으로 만드실 것을 권장합니다. 자세한 내용은 [2025년 2월 12일](https://developers.line.biz/en/news/2025/02/12/line-mini-app/)자 뉴스를 참고해 주십시오.

<!-- tip end -->
