# 시작하기

LINE MINI App 개발에 바로 들어가기 전에 다음 내용을 꼼꼼히 읽어 보시기를 권장합니다.

- LINE MINI App 알아보기
  - [LINE MINI App 사양](https://developers.line.biz/en/docs/line-mini-app/discover/specifications/)
- 디자인
  - [LINE MINI App 아이콘 사양 및 가이드라인](https://developers.line.biz/en/docs/line-mini-app/design/line-mini-app-icon/)
  - [가로 모드의 안전 영역](https://developers.line.biz/en/docs/line-mini-app/design/landscape/)
  - [로딩 아이콘](https://developers.line.biz/en/docs/line-mini-app/design/loading-icon/)
- 개발
  - [성능 가이드라인](https://developers.line.biz/en/docs/line-mini-app/develop/performance-guidelines/)
- 심사 신청
  - [심사 신청하기](https://developers.line.biz/en/docs/line-mini-app/submit/submission-guide/)
  - [LINE MINI App 정책](https://terms2.line.me/LINE_MINI_App?lang=en)

## LINE MINI App 채널 만들기 

[LINE MINI App 정책](https://terms2.line.me/LINE_MINI_App?lang=en)에서 허용된 고객이라면 누구나 LINE MINI App 채널을 만들 수 있습니다.

[채널](https://developers.line.biz/en/docs/line-developers-console/overview/#channel)은 앱과 LINE 플랫폼을 연결하는 통신 채널입니다. LINE MINI App마다 LINE Developers Console에서 LINE MINI App 채널을 하나씩 만드세요.

1. [LINE Developers Console](https://developers.line.biz/console/)에 접속하여 프로바이더를 선택합니다.

2. **Channels** > **Create a new channel** > **LINE MINI App** 순서로 클릭합니다.

   ![LINE MINI App channel](https://developers.line.biz/media/line-mini-app/line-mini-app-channel-en.webp)

3. 아래 항목에 정보를 입력하여 LINE MINI App 채널을 만듭니다.

   | 항목 | 필수 여부 | 설명 | 사용자에게 표시되는 위치 |
   | --- | --- | --- | --- |
   | **Channel type** | ✅ | 채널 유형입니다. LINE MINI App 채널을 만들려면 LINE MINI App을 선택하세요. | - |
   | **Provider** | ✅ | 채널의 [프로바이더](https://developers.line.biz/en/docs/line-developers-console/overview/#provider) | LINE 로그인 또는 LIFF 앱 실행 시 권한 동의 화면 |
   | **Region to provide the service** | ✅ | LINE MINI App을 제공할 지역입니다. 다음 중 하나를 선택합니다. <br><ul><li>Japan</li><li>Thailand</li><li>Taiwan</li></ul>\*여러 지역에서 LINE MINI App을 제공하려면 지역별로 채널을 각각 만드세요. | - |
   | **Channel icon** | ❌ | 채널의 아이콘입니다. 아이콘 크기와 디자인에 대한 자세한 내용은 [LINE MINI App 아이콘 사양 및 가이드라인](https://developers.line.biz/en/docs/line-mini-app/design/line-mini-app-icon/)을 참고하세요. | <ul><li>LINE MINI App 실행 시 권한 동의 화면</li><li>[액션 버튼](https://developers.line.biz/en/docs/line-mini-app/develop/configure-console/#built-in-share-settings)으로 LINE MINI App 페이지를 공유할 때의 대상 채팅방</li><li>[멀티 탭 보기](https://developers.line.biz/en/docs/line-mini-app/develop/configure-console/#multi-tab-view-settings)</li><li>[서비스 메시지](https://developers.line.biz/en/docs/line-mini-app/develop/service-messages/#template-elements)의 푸터 영역</li><li>[LINE MINI App 찾아보기(홈 탭, 검색 기능 등)](https://developers.line.biz/en/docs/line-mini-app/discover/introduction/#access-line-mini-app-methods-for-users)</li><li>[바로가기 추가 화면](https://developers.line.biz/en/docs/line-mini-app/develop/configure-console/#add-shortcut-screen)</li></ul> |
   | **Channel name** | ✅ | 채널의 이름입니다.<br>\*채널 이름에 "LINE" 또는 이와 유사한 문자열을 포함할 수 없습니다. | <ul><li>인증된 MINI App의 [헤더](https://developers.line.biz/en/docs/line-mini-app/discover/ui-components/#header)</li><li>LINE MINI App 실행 시 권한 동의 화면</li><li>[액션 버튼](https://developers.line.biz/en/docs/line-mini-app/develop/configure-console/#built-in-share-settings)으로 LINE MINI App 페이지를 공유할 때의 대상 채팅방</li><li>[멀티 탭 보기](https://developers.line.biz/en/docs/line-mini-app/develop/configure-console/#multi-tab-view-settings)</li><li>[서비스 메시지](https://developers.line.biz/en/docs/line-mini-app/develop/service-messages/#template-elements)의 푸터 영역</li><li>[LINE MINI App 찾아보기(홈 탭, 검색 기능 등)](https://developers.line.biz/en/docs/line-mini-app/discover/introduction/#access-line-mini-app-methods-for-users)</li><li>[바로가기 추가 화면](https://developers.line.biz/en/docs/line-mini-app/develop/configure-console/#add-shortcut-screen)</li></ul> |
   | **Channel description** | ✅ | 채널에 대한 설명입니다. LINE MINI App을 개발한 회사와 서비스를 제공하는 회사가 다르다면 사용자에게 이를 알려야 합니다. 자세한 내용은 [LINE MINI App 정책](https://terms2.line.me/LINE_MINI_App?lang=en)의 회사 정보를 참고하세요. | LINE MINI App 실행 시 권한 동의 화면 |
   | **Email address** | ✅ | 채널에 관한 중요한 업데이트를 받을 이메일 주소 | - |
   | **Privacy policy URL** | ✅ \* | 앱의 개인정보 처리방침 URL | LINE MINI App 실행 시 권한 동의 화면 |
   | **Terms of use URL** | ❌ | 앱의 이용약관 URL | LINE MINI App 실행 시 권한 동의 화면 |
   | **LINE Developers Agreement** | ✅ | LINE Developers Agreement를 읽고 동의합니다. | - |
   | **LINE MINI App Platform Agreemeent** | ✅ | LINE MINI App Platform Agreement를 읽고 동의합니다. | - |
   | **LINE MINI App Policy** | ✅ | LINE MINI App 정책을 읽고 동의합니다. | - |
   | **Service company's country or region** | ✅ | LINE MINI App을 제공하는 지역과 서비스 회사의 국가 또는 지역이 동일함을 진술하고 보증합니다. | LINE MINI App 실행 시 권한 동의 화면 |
   | **LY Corporation Privacy Policy** | 상황에 따라 다름 | **Region to provide the service**로 Thailand를 선택한 경우에만 필요합니다. [LY Corporation 개인정보 처리방침](https://line.me/th/terms/policy/)을 읽고 동의합니다. | - |

   \* 인증된 프로바이더만 LINE MINI App 채널을 만들 때 개인정보 처리방침 URL을 입력해야 합니다.

4. "By creating a LINE MINI App and agreeing to the terms and conditions herein, I hereby warrant and represent that I have the full authority to execute and bind my company to the terms hereof."로 시작하는 문장을 반드시 읽고, 회사를 대표하여 이 약관에 동의할 권한이 있음을 보증하고 진술하는 체크박스를 선택하세요.
5. **Create**를 클릭합니다.
6. "Regarding Consent to Usage of the Information"을 반드시 읽고, 동의하는 경우 **Accept**를 클릭합니다.

   위 과정을 마치면 LINE MINI App 채널이 만들어지며, 인증되지 않은 MINI App으로 사용할 준비가 됩니다.

   만든 LINE MINI App 채널의 설정을 변경하는 방법은 [LINE Developers Console의 설정이 반영되는 시점](https://developers.line.biz/en/docs/line-mini-app/discover/console-guide/#timing-of-settings-reflection)을 참고하세요.

<!-- note start -->

**LINE MINI App 채널을 만들 수 없는 경우**

LINE MINI App 채널을 만들 수 없다면, [LINE Developers Console](https://developers.line.biz/console/)에 로그인할 때 사용하는 Business ID를 LINE 계정에 연결하세요. 자세한 내용은 LINE Developers Console 문서의 [Business ID를 LINE 계정에 연결하기](https://developers.line.biz/en/docs/line-developers-console/login-account/#link-business-account-with-line-account)를 참고하세요.

<!-- note end -->

### 개인정보 처리방침 URL 설정 

LINE MINI App을 개발한 회사와 서비스 제공자가 다르다면, 심사를 통과하기 위해 **Channel description**과 **Privacy policy URL**을 설정해야 합니다. 자세한 내용은 [LINE MINI App 정책](https://terms2.line.me/LINE_MINI_App?lang=en)의 "Company information"을 참고하세요.

LINE MINI App 채널을 만들 때, 인증된 프로바이더라면 **Privacy policy URL**을 설정할 수 있습니다. 인증된 프로바이더가 아니라면 설정할 수 없습니다. 이 경우 먼저 LINE MINI App 채널을 만든 다음 **Privacy policy URL**을 수정하세요.

### 채널과 프로바이더 연결 시 주의사항 

채널을 만든 후에는 나중에 채널을 다른 프로바이더로 옮길 수 없습니다.

개발자가 제공하는 서비스를 이용하는 LINE 사용자에게는 프로바이더마다 서로 다른 사용자 ID가 부여됩니다. 사용자 ID로는 서로 다른 프로바이더의 채널에서 같은 사용자를 식별할 수 없습니다.

![](https://developers.line.biz/media/line-developers-console/different-user-ids.png)

<!-- warning start -->

**채널을 만들 때 특별히 주의해야 하는 경우**

예를 들어 다음 경우에는 특별한 주의가 필요합니다.

- 채널과 프로바이더를 개인 또는 회사가 관리하는 경우
- 관련 없는 서비스나 회사의 채널을 하나의 프로바이더 아래에 만드는 경우
- 채널 관리 도구 등을 운영하는 서비스(회사)가 관리하는 프로바이더 아래에 채널을 만드는 경우

이러한 경우에는 나중에 채널을 프로바이더 간에 옮길 수 없고, 프로바이더마다 사용자 ID가 달라지는 문제 등이 생길 수 있습니다. 위험을 충분히 검토한 후 적절한 프로바이더 아래에 채널을 만드세요.

<!-- warning end -->

<!-- tip start -->

**프로바이더 및 채널 관리 모범 사례**

프로바이더와 채널의 관리자 역할을 관리하는 방법과, 어느 프로바이더 아래에 채널을 만들어야 하는지 구체적인 예시와 함께 설명하는 페이지가 있습니다.

자세한 내용은 LINE Developers Console 문서의 [프로바이더 및 채널 관리 모범 사례](https://developers.line.biz/en/docs/line-developers-console/best-practices-for-provider-and-channel-management/)를 참고하세요.

<!-- tip end -->

## LINE MINI App 개발하기 

LINE MINI App 채널을 만들었다면 LINE MINI App 개발을 시작할 수 있습니다. LINE MINI App 개발은 이 가이드에서 설명하는 추가 요구사항과 제약이 있는 [LIFF](https://developers.line.biz/en/docs/liff/overview/)를 사용하는 것이라고 생각하면 됩니다.

자세한 내용은 [LINE MINI App 사양](https://developers.line.biz/en/docs/line-mini-app/discover/specifications/)을 참고하세요.

### LINE MINI App 채널의 내부 구조 

LINE Developers Console의 **Channels** 탭에서는 LINE MINI App이 하나의 채널로 보입니다. 그러나 내부적으로는 다음 세 개의 채널로 구성되며, 이를 이하 "내부 채널"이라고 부릅니다.

| 내부 채널 | 설명 |
| --- | --- |
| Developing 상태의 LINE MINI App 채널 | 개발에 사용하는 LINE MINI App 채널입니다. 채널 상태는 항상 "Developing"입니다. |
| Review 상태의 LINE MINI App 채널 | LY Corporation의 심사에 사용하는 LINE MINI App 채널입니다. 채널 상태는 항상 "Developing"입니다. |
| Published 상태의 LINE MINI App 채널 | 공개되어 사용자가 이용할 수 있는 LINE MINI App 채널입니다. 채널 상태는 항상 "Publishing"입니다. |

내부 채널에 대한 자세한 내용은 [LINE MINI App용 LINE Developers Console 가이드](https://developers.line.biz/en/docs/line-mini-app/discover/console-guide/)를 참고하세요.

### API 사용하기 

LINE MINI App 개발에는 두 가지 API를 사용할 수 있습니다. LIFF API와 [Service Message API](https://developers.line.biz/en/reference/line-mini-app/)입니다. LIFF API는 LINE MINI App에서 호출하고, Service Message API는 서비스의 서버 측에서 호출합니다. LIFF API 사용에 대한 자세한 내용은 [LIFF 문서](https://developers.line.biz/en/docs/liff/overview/)를 참고하세요.

예를 들어 [커스텀 액션 버튼을 구현하려면](https://developers.line.biz/en/docs/line-mini-app/develop/share-messages/) LINE MINI App에서 LIFF API를 호출해야 합니다. 반면 [서비스 메시지](https://developers.line.biz/en/docs/line-mini-app/develop/service-messages/)를 보내려면 서버에서 Service Message API를 호출해야 합니다.

<!-- tip start -->

**LIFF API는 계속 개선되고 있습니다**

사용자 경험을 높이기 위해 LIFF API에는 새로운 기능이 계속 추가되고 기존 기능도 계속 개선되고 있습니다.

<!-- tip end -->

## 출시 전 LINE MINI App 접근을 제한하기 위해 기본 인증 사용하기 

기본 인증(Basic authentication)은 상태가 "Not yet reviewed" 또는 "Reviewing"인 LINE MINI App에서 사용할 수 있습니다. 기본 인증을 사용하면 출시 전 LINE MINI App에 대한 접근을 제한할 수 있습니다.

### 기본 인증 사용 방법 

[LINE Developers Console](https://developers.line.biz/console/)의 **Web app settings** 탭에서 **Developing** 또는 **Review**의 **Endpoint URL**에 기본 인증이 적용된 URL을 입력하세요. 그런 다음 [LIFF 브라우저](https://developers.line.biz/en/glossary/#liff-browser)에서 LINE MINI App을 열면 사용자 이름과 비밀번호를 입력하라는 대화 상자가 표시됩니다.

![Basic authentication screen](https://developers.line.biz/media/line-mini-app/basic-auth.webp)

### 기본 인증의 조건 

다음 조건을 모두 충족하면 기본 인증을 사용할 수 있습니다.

- LINE MINI App의 상태가 "Not yet reviewed" 또는 "Reviewing"이어야 합니다.
- LINE MINI App이 [LIFF 브라우저](https://developers.line.biz/en/glossary/#liff-browser)에서 열려 있어야 합니다.

상태가 "Reflected"인 LIFF 앱과 LINE MINI App에서는 기본 인증을 사용할 수 없습니다. 또한 다이제스트 인증은 사용할 수 없습니다.

<!-- tip start -->

**조건을 충족하는데도 기본 인증을 사용할 수 없는 경우**

LIFF 간 전환(LIFF-to-LIFF transition) 후의 LINE MINI App에서는 기본 인증을 사용할 수 없습니다. 자세한 내용은 LIFF 문서의 [다른 LIFF 앱에서 LIFF 앱 열기(LIFF 간 전환)](https://developers.line.biz/en/docs/liff/opening-liff-app/#move-liff-to-liff)를 참고하세요.

<!-- tip end -->

LIFF 브라우저의 기본 인증 사양에 대한 자세한 내용은 LIFF 문서의 [LIFF 브라우저 사양](https://developers.line.biz/en/docs/liff/overview/#liff-browser-spec)을 참고하세요.

### 기본 인증 사용 시 참고 사항 

기본 인증은 간단한 접근 제한에 사용하는 인증 방식입니다. LINE MINI App 개발자는 기본 인증을 사용하기 전에, 기본 인증이 자신의 보안 요구사항을 충족하는지 스스로 평가하고 판단해야 합니다.

이 기능이 추가되었다고 해서 기본 인증 사용을 권장하는 것은 아니며, 기본 인증에 기반한 접근 제한의 보안을 보장하지도 않습니다.

## 개발에 대한 권장 사항 

사용자가 핵심 기능에 쉽고 빠르게 접근할 수 있도록 LINE MINI App을 개발하세요. 몇 가지 제안은 다음과 같습니다.

- 사용자 위치를 파악하려면 HTML5 [Geolocation API](https://www.w3.org/TR/geolocation/)를 사용하세요.
- LIFF API로 가져올 수 있는 사용자의 LINE 프로필 정보를 활용하세요. 예를 들어 레스토랑 예약 시 LINE 프로필 정보를 자동으로 채워 넣으면, 사용자가 예약할 때마다 개인 정보를 다시 입력하지 않아도 됩니다.
- LINE MINI App 사용자에게 더 나은 사용자 경험을 제공하도록 LINE MINI App의 성능을 최적화하세요. 자세한 내용은 [성능 가이드라인](https://developers.line.biz/en/docs/line-mini-app/develop/performance-guidelines/)을 참고하세요.

## LINE MINI App 심사 신청 

LINE MINI App 채널을 만들면 LINE MINI App은 인증되지 않은 MINI App이며, 일부 기능이 제한됩니다. 개발한 LINE MINI App을 인증된 MINI App으로 만들려면 LY Corporation의 인증 심사를 받아야 합니다.

서비스 제공 지역이 대만 또는 태국인 경우, 인증 심사를 신청할 수 있는 것은 인증된 프로바이더 아래의 LINE MINI App 채널뿐입니다.

자세한 내용은 [LINE MINI App 제출하기](https://developers.line.biz/en/docs/line-mini-app/submit/submission-guide/)를 참고하세요.
