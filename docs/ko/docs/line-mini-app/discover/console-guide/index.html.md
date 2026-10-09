# LINE MINI App용 LINE Developers Console 가이드

심사를 요청하기 전에 [LINE Developers Console](https://developers.line.biz/console/)의 기본 구조와 주의 사항을 이해해 주십시오.

<!-- table of contents -->

## LINE MINI App용 LINE Developers Console 

LINE Developers Console은 LINE MINI App을 개발하고 테스트하는 도구이며, 검증 심사를 위해 LINE MINI App을 제출하여 검증된 MINI App으로 만드는 도구이기도 합니다. LINE MINI App용 LINE Developers Console은 [LINE MINI App 정책](https://terms2.line.me/LINE_MINI_App?lang=en)에서 허용된 고객이라면 누구나 사용할 수 있습니다.

## LINE MINI App용 LINE Developers Console 사용 시 주의 사항 

LINE MINI App 채널에 설정된 LINE MINI App과 LINE 로그인 채널에 추가된 LIFF 앱의 차이는 다음과 같습니다.

<!-- tip start -->

**LIFF 앱을 LINE MINI App으로 만들기를 권장합니다**

앞으로 LIFF와 LINE MINI App은 하나의 브랜드로 통합될 예정입니다. 이 통합에 따라 LIFF는 LINE MINI App에 포함됩니다. 따라서 새로운 LIFF 앱은 LINE MINI App으로 만드실 것을 권장합니다. 자세한 내용은 [2025년 2월 12일](https://developers.line.biz/en/news/2025/02/12/line-mini-app/)자 뉴스를 참고해 주십시오.

<!-- tip end -->

### LINE MINI App 채널의 기본 구조 

LINE 로그인 채널과 달리, LINE MINI App 채널에는 다음과 같은 구조적 특징이 있습니다.

LINE Developers Console에서 LINE MINI App 채널을 만들면 **Developing**, **Review**, **Published**라는 세 개의 내부 채널이 동시에 만들어집니다. 각 내부 채널에는 고유한 기능과 목적이 있습니다. 설정이 언제 반영되는지에 대한 자세한 내용은 [LINE Developers Console의 설정이 반영되는 시점](https://developers.line.biz/en/docs/line-mini-app/discover/console-guide/#timing-of-settings-reflection)을 참고해 주십시오.

| 내부 채널 | 용도 | 채널 상태 | 내부 채널의 세부 정보를 확인할 수 있는 관리자 | LINE MINI App에 접근하는 사용자 |
| --- | --- | --- | --- | --- |
| **Developing** | 개발과 테스트를 위한 내부 채널 | 항상 "Developing" | 권한을 부여하고 수락한 관리자만 해당<br><ul><li>LINE Developers Console의 LINE MINI App 채널 설정 화면에서 설정을 확인할 수 있습니다.</li></ul> | 권한을 부여하고 수락한 테스터만 해당 |
| **Review** | LY Corporation이 LINE MINI App을 심사하는 데 사용하는 내부 채널 | 항상 "Developing" | <ul><li>권한을 부여하고 수락한 관리자<ul><li>LINE Developers Console의 LINE MINI App 채널 설정 화면에서 설정을 확인할 수 있습니다.</li></ul></li><li>LY Corporation 심사자</li></ul> | LY Corporation 심사자만 해당 |
| **Published** | 사용자에게 공개되는 내부 채널 | 항상 "Published" | 권한을 부여하고 수락한 관리자만 해당<br><ul><li>LINE MINI App 채널의 오른쪽 상단에 있는 **Published Data** 버튼을 클릭하면 "Published" 채널의 정보를 확인할 수 있습니다.</li></ul> | 최종 사용자 |

<!-- note start -->

**채널 상태는 변경할 수 없습니다**

내부 채널의 상태는 변경할 수 없습니다.

<!-- note end -->

<!-- tip start -->

**LINE MINI App 테스터 등록**

LINE MINI App을 테스트할 사용자를 추가하려면 해당 사용자를 LINE MINI App 채널의 테스터로 등록해 주십시오. 자세한 내용은 [역할 관리](https://developers.line.biz/en/docs/line-developers-console/managing-roles/)를 참고해 주십시오.

<!-- tip end -->

### 검증 URL과 엔드포인트 URL 설정 

LINE MINI App 채널에서는 각 내부 채널마다 LINE MINI App(LIFF 앱) 하나가 추가됩니다. 각 내부 채널의 고유한 **LIFF ID**를 확인하고 **Endpoint URL**을 지정한 후, 각 엔드포인트 URL에 LIFF 앱을 배포해 주십시오.

- 심사를 요청하기 전에 "Review" LIFF 앱을 "Review"용 엔드포인트 URL에 배포해 주십시오.
- LINE MINI App을 공개할 때는 "Published" LIFF 앱을 "Published"용 엔드포인트 URL에 배포해 주십시오.

**Developing** 또는 **Review**의 **Endpoint URL**에는 베이직 인증이 적용된 URL을 지정할 수 있습니다. 자세한 내용은 [출시 전 베이직 인증을 사용하여 LINE MINI App 접근 제한](https://developers.line.biz/en/docs/line-mini-app/develop/develop-overview/#use-basic-authentication)을 참고해 주십시오.

<!-- note start -->

**내부 채널마다 LIFF ID가 다릅니다**

- LINE MINI App에서 [`liff.init()`](https://developers.line.biz/en/reference/liff/#initialize-liff-app) 메서드를 호출할 때 내부 채널마다 다른 LIFF ID를 지정해야 합니다. 예를 들어 "Review" 채널에서 초기화를 실행할 때는 `liff.init()`으로 초기화하기 전에 Review 채널의 LIFF ID를 지정해야 합니다. 어떤 내부 채널에서도 LINE MINI App을 실행할 수 없다면 다음 두 LIFF ID가 일치하는지 확인해 주십시오.
  - 각 내부 채널에 발급된 LIFF ID
  - LIFF 앱을 초기화할 때 `liff.init()`에 지정한 LIFF ID
- LIFF ID는 LIFF URL(예: `https://miniapp.line.me/{liffId}`)에 포함됩니다. 즉, LIFF 앱에서 커스텀 공유 메시지를 보내려면 해당 LIFF 앱에 대응하는 URL을 보내야 합니다. 예를 들어 "Review"용 LIFF에서 커스텀 공유 메시지를 보내려면 "Review" LIFF 앱을 공유하는 URL을 보내야 합니다.
- 하나의 내부 채널에는 여러 LIFF 앱을 추가할 수 없습니다(여러 LIFF ID를 발급할 수 없습니다).

<!-- note end -->

<!-- note start -->

**LINE 로그인 채널의 [LIFF] 탭과 LINE MINI App 채널의 [Web app settings] 탭의 차이**

- LINE MINI App 채널의 **Web app settings** 탭에서는 기본 LINE MINI App(LIFF 앱) 외에 다른 LIFF 앱을 추가할 수 없습니다.
- LINE MINI App 채널의 **Web app settings** 탭에서는 각 LIFF 앱(내부 채널)의 scope, 친구 추가 옵션 등을 변경할 수 없습니다.
- LINE MINI App 채널의 **Web app settings** 탭에서는 **Module mode**를 설정할 수 없습니다.

<!-- note end -->

<!-- tip start -->

**LINE Developers Console의 설정**

LINE Developers Console의 설정은 필요할 때 자동으로 반영(복사)됩니다. 자세한 내용은 [LINE Developers Console의 설정이 반영되는 시점](https://developers.line.biz/en/docs/line-mini-app/discover/console-guide/#timing-of-settings-reflection)을 참고해 주십시오.

<!-- tip end -->

<!-- note start -->

**LINE MINI App의 LIFF URL이 변경되었습니다**

[2023년 12월 13일](https://developers.line.biz/en/news/2023/12/13/change-of-liff-url-for-line-mini-app/)부터 LINE MINI App의 LIFF URL이 `https://miniapp.line.me/{liffId}`로 변경되었습니다.

기존 `https://liff.line.me/{liffId}`에 접근하는 사용자도 LINE MINI App이 열립니다. 따라서 이미 발급한 QR 코드를 계속 사용할 수 있습니다.

<!-- note end -->

### 채널 액세스 토큰 발급 

LINE MINI App 채널에는 [상태 비저장(stateless) 채널 액세스 토큰](https://developers.line.biz/en/docs/basics/channel-access-token/#stateless-channel-access-token)을 사용해 주십시오.

LINE MINI App(LIFF 앱)이 동작하는 각 내부 채널마다 채널 액세스 토큰을 발급해 주십시오. 채널 ID와 채널 시크릿은 LINE Developers Console의 **Channel basic settings** 탭에서 확인할 수 있습니다.

![채널 ID와 채널 시크릿](https://developers.line.biz/media/line-mini-app/channel_id_secret.png)

<!-- note start -->

**채널 액세스 토큰은 내부 채널마다 발급해야 합니다**

"Review" 및 "Published" LINE MINI App에서 서비스 메시지를 보낼 때 "Developing" LINE MINI App 채널의 채널 액세스 토큰을 지정하지 마십시오.

<!-- note end -->

<!-- note start -->

**상태 비저장 채널 액세스 토큰 사용을 권장합니다**

LINE MINI App 채널에서는 [장기 채널 액세스 토큰](https://developers.line.biz/en/docs/basics/channel-access-token/#long-lived-channel-access-token)과 [사용자가 만료 기간을 지정하는 채널 액세스 토큰(Channel Access Token v2.1)](https://developers.line.biz/en/docs/basics/channel-access-token/#user-specified-expiration)을 사용할 수 없습니다.

LINE MINI App을 개발할 때는 [상태 비저장 채널 액세스 토큰](https://developers.line.biz/en/docs/basics/channel-access-token/#stateless-channel-access-token) 또는 [단기 채널 액세스 토큰](https://developers.line.biz/en/docs/basics/channel-access-token/#short-lived-channel-access-token)을 사용할 수 있습니다. 이 둘 중에서는 상태 비저장 채널 액세스 토큰을 권장합니다. 상태 비저장 채널 액세스 토큰은 발급 횟수에 제한이 없으므로 애플리케이션이 토큰의 수명 주기를 관리할 필요가 없습니다.

<!-- note end -->

### 회사 또는 소유자의 국가 또는 지역 설정 

LINE MINI App 채널을 만들 때는 **I represent and warrant that the region to provide the LINE MINI App and service company's country or region are the same.** 체크박스의 내용에 동의해야 합니다. 여기서 설정한 국가 또는 지역은 채널 동의 화면에서 최종 사용자에게 표시됩니다.

![LINE MINI App을 제공하는 지역과 서비스 회사의 국가 또는 지역이 동일함을 보증합니다.](https://developers.line.biz/media/line-mini-app/configuring-country-or-region-en.webp)

<!-- note start -->

**기존 LINE MINI App 채널의 회사 또는 소유자의 국가 또는 지역은 수정할 수 없습니다**

변경이 필요하다면 심사를 신청할 때 **Review request** 탭의 **Reference materials for the review** 섹션에 변경을 원하는 내용과 변경하려는 국가 또는 지역을 입력해 주십시오.

<!-- note end -->

### LINE Developers Console의 설정이 반영되는 시점 

LINE MINI App 채널을 만들면 입력한 설정 정보가 세 개의 내부 채널에 복사됩니다.

LINE MINI App이 검증되지 않은 MINI App인 경우, LINE Developers Console에서 설정을 변경하면 "Developing" 채널의 내용이 "Published" 채널에 반영됩니다. 다만 **Web app settings** 탭의 **Service message template** 탭과 **Channel consent simplification** 항목은 LINE MINI App이 검증 심사를 통과하기 전까지 반영되지 않습니다.

LINE MINI App이 검증된 MINI App인 경우, 채널 이름, LIFF 앱의 scope, 친구 추가 옵션 등을 변경하면 "Developing" 채널의 설정만 변경됩니다. "Review" 또는 "Published" 채널에는 반영되지 않습니다. 이는 "Developing" 내부 채널에서 설정을 자유롭게 변경하여 원활하게 개발할 수 있도록 하기 위함입니다.

검증된 MINI App의 경우, LINE Developers Console에서 변경한 설정이 "Review" 및 "Published"에 반영되는 시점은 다음 표와 같습니다.

| 내부 채널 | 설정이 반영되는 시점 |
| --- | --- |
| Developing | LINE Developers Console에서 설정하면 반영됩니다. |
| Review | 심사가 시작되면 Developing 채널의 설정이 반영(복사)됩니다. |
| Published | 공개되면 Developing 채널의 설정이 반영(복사)됩니다. |

### 채널 설명 

**Basic settings** 탭의 **Channel description**은 다음 용도로 사용됩니다. 이러한 용도를 위해 정확한 서비스 설명을 입력해 주십시오.

- 사용자가 LINE MINI App 서비스의 내용을 이해하도록 돕기 위해
- LY Corporation의 심사 시 LINE MINI App의 서비스 내용을 파악하기 위해
- LINE 앱(일본 전용)의 Apps 탭에 있는 "Daily top trends" 섹션에 표시되는 LINE MINI App의 카테고리를 지정하고 AI로 설명을 생성할 때 정보 출처로 사용하기 위해

![채널 설명](https://developers.line.biz/media/line-mini-app/line-mini-app-channel-description-en.png)

**Channel description** 입력 예시는 다음 표를 참고해 주십시오.

|  | 채널 이름 | 채널 설명 |
| --- | --- | --- |
| 나쁜 예 | LINE FRIENDS STORE | LINE FRIENDS STORE는 LINE 캐릭터 상품을 파는 가게입니다. |
| 좋은 예 | LINE FRIENDS STORE | LINE FRIENDS STORE에서 제공하는 모바일 주문 서비스입니다. 미리 주문하고 결제한 후 가게에서 상품을 받을 수 있습니다. |

<!-- note start -->

**채널 설명에 반드시 포함해야 하는 정보**

서비스의 LINE MINI App 개발을 외주로 맡겼고, LINE MINI App을 통해 서비스를 제공하는 회사와 LINE MINI App을 개발한 회사가 다른 경우, **Channel description**에는 다음 정보를 명시해야 합니다.

- 서비스 회사명
- 개발 회사명
- LINE MINI App을 통해 얻은 사용자 데이터를 제공하는 실제 회사명

<!-- note end -->

## LINE MINI App 3개의 동작 차이 

"Developing" LINE MINI App, "Review" LINE MINI App, "Published" LINE MINI App에서는 일부 화면이 서로 다르게 표시됩니다.

| LINE MINI App | 헤더 부제목 [(참고)](https://developers.line.biz/en/docs/line-mini-app/discover/ui-components/#header) |
| --- | --- |
| "Developing" LINE MINI App | 보고 있는 페이지의 도메인이 **항상** 표시됩니다. |
| "Review" LINE MINI App | 보고 있는 페이지의 도메인이 **항상** 표시됩니다. |
| "Published" LINE MINI App | 검증되지 않은 MINI App에서는 페이지의 도메인이 표시됩니다. 검증된 MINI App에서는 LINE MINI App 이름과 검증 배지가 표시됩니다. |
