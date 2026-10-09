# LINE Login 개요

<!-- tip start -->

**개발자 문서**

지금 보고 계신 것은 LINE 개발자 문서입니다. LINE 앱 사용 방법이나 로그인 방법에 대한 도움이 필요하시다면 [Help Center](https://help.line.me/)를 방문하십시오.

<!-- tip end -->

## LINE Login이란 무엇인가요? 

LINE Login은 사용자가 LINE 계정을 사용할 수 있도록 하는 소셜 로그인 서비스입니다. LINE Login은 무료로 제공됩니다.

웹사이트나 앱에 LINE Login을 연동하면 사용자는 다음과 같이 쉽게 가입하고 로그인할 수 있습니다.

- 사용자가 회원으로 가입하면 LINE에 미리 등록된 [프로필 정보](https://developers.line.biz/en/glossary/#profile-information)가 자동으로 입력되므로 사용자가 정보를 직접 입력하는 수고를 덜 수 있습니다.
- 사용자는 사이트마다 이메일 주소와 비밀번호를 기억하지 않아도 LINE Login 버튼으로 간편하게 로그인할 수 있습니다.

LINE Login은 네이티브 iOS 및 Android 앱뿐만 아니라 웹 앱(웹사이트)과 Unity 게임에서도 사용할 수 있습니다.

<!-- tip start -->

**LINE Login을 연동한 웹사이트 예시**

예를 들어 전자책 서점 [BOOK WALKER](https://bookwalker.jp/top/)(일본어 사이트)는 LINE Login을 비롯한 여러 소셜 로그인을 연동하여, 사용자가 회원으로 쉽게 가입하고 사이트를 계속 이용할 수 있도록 하고 있습니다.

![E-bookstore login screen](https://developers.line.biz/media/line-login/overview/line-login-bookwalker-01-ja.webp)

<!-- tip end -->

## LINE Login 연동 개발 시작하기 

LINE Login 연동 개발을 시작하려면 먼저 LINE Login 채널을 만들어야 합니다. 자세한 내용은 [LINE Login 시작하기](https://developers.line.biz/en/docs/line-login/getting-started/)를 참고하십시오.

### 웹 앱과 연동하기 

웹 앱(웹사이트)에 LINE Login을 연동하면 사람들이 계정을 더 쉽게 만들고 로그인할 수 있습니다. LINE Login을 사용하면 기기에서 이미 LINE에 로그인되어 있는 사용자는 웹 앱에 자동으로 로그인할 수 있습니다. 인증 및 승인 과정은 [OAuth 2.0](https://datatracker.ietf.org/doc/html/rfc6749) 및 [OpenID® Connect](https://openid.net/specs/openid-connect-core-1_0.html) 프로토콜을 기반으로 합니다. 자세한 내용은 [웹 앱에 LINE Login 연동하기](https://developers.line.biz/en/docs/line-login/integrate-line-login/)를 참고하십시오.

LINE Login으로 사용자에게 더 나은 경험을 제공하는 예시는 [LINE STORE](https://store.line.me/) 웹사이트에서 확인할 수 있습니다.

![LINE Login](https://developers.line.biz/media/line-login/overview/line-login-web.png)

### 네이티브 앱과 연동하기 

SDK를 사용하여 앱에 LINE Login을 추가하고 사용자 인증은 LINE에 맡길 수 있습니다. 사용자가 모바일 기기에서 LINE에 로그인되어 있으면 이메일 주소와 비밀번호를 입력하지 않고도 앱에 로그인할 수 있습니다. Android, iOS, Unity용 SDK를 제공합니다.

- [LINE SDK for iOS Swift 개요](https://developers.line.biz/en/docs/line-login-sdks/ios-sdk/swift/overview/)
- [LINE SDK for Android 개요](https://developers.line.biz/en/docs/line-login-sdks/android-sdk/overview/)
- [LINE SDK for Unity 개요](https://developers.line.biz/en/docs/line-login-sdks/unity-sdk/overview/)
- [LINE SDK for Flutter](https://developers.line.biz/en/docs/line-login-sdks/flutter-sdk/)

예를 들어 LINE Rangers 게임은 LINE 계정으로 게임 계정을 쉽게 만들 수 있도록 LINE Login을 사용합니다.

![LINE Rangers 1](https://developers.line.biz/media/line-login/overview/line-login-rangers-1.webp)
![LINE Rangers 3](https://developers.line.biz/media/line-login/overview/line-login-rangers-3.webp)

## LINE Login 인증 방법 

LINE Login을 연동한 웹 앱에서 사용자는 다음 인증 방법 중 하나를 사용할 수 있습니다.

| 인증 방법 | 설명 |
| --- | --- |
| [자동 로그인](https://developers.line.biz/en/docs/line-login/integrate-line-login/#line-auto-login) | 사용자 조작 없이 로그인합니다. LINE Login 화면이나 확인 화면이 표시되지 않습니다. |
| [이메일 주소로 로그인](https://developers.line.biz/en/docs/line-login/integrate-line-login/#mail-or-qrcode-login) | LINE Login 화면에서 이메일 주소와 비밀번호를 입력하여 로그인합니다. |
| [QR 코드로 로그인](https://developers.line.biz/en/docs/line-login/integrate-line-login/#mail-or-qrcode-login) | LINE Login 화면에 표시된 QR 코드를 스마트폰의 LINE 앱에 있는 QR 코드 리더로 스캔하여 로그인합니다. |
| [SSO(Single Sign On) 로그인](https://developers.line.biz/en/docs/line-login/integrate-line-login/#line-sso-login) | "Continue as"가 표시된 확인 화면에서 로그인 버튼을 클릭하여 로그인합니다. |

각 인증 방법에서 실제로 어떤 화면이 표시되고 어떤 조건에서 나타나는지에 대한 자세한 내용은 [사용자 인증](https://developers.line.biz/en/docs/line-login/integrate-line-login/#authentication-process)을 참고하십시오.

## 사용자 식별하기 

사용자가 LINE Login으로 앱에 로그인하고 앱이 해당 사용자의 액세스 토큰을 가져오면, 앱은 사용자가 LINE에 등록한 프로필 정보를 가져올 수 있습니다.

사용자 ID, 표시 이름, 프로필 이미지 URL, 상태 메시지를 가져올 수 있습니다.

자세한 내용은 [사용자 프로필 가져오기](https://developers.line.biz/en/docs/line-login/managing-users/#get-profile)를 참고하십시오.

## LINE Login 버전 

LINE Login은 [OpenID Connect Discovery 1.0](https://openid.net/specs/openid-connect-discovery-1_0.html)을 지원합니다. OpenID provider에 대한 정보는 [OpenID Provider Configuration Document](https://access.line.me/.well-known/openid-configuration)를 참고하십시오.

다음 버전의 LINE Login이 출시되었습니다. 각 버전은 서로 다른 기능을 지원합니다.

| 버전 | 상태 | 설명 |
| --- | --- | --- |
| LINE Login v2.1 | [Active](https://developers.line.biz/en/glossary/#active) | 이 버전은 [OAuth 2.0 authorization code flow](https://datatracker.ietf.org/doc/html/rfc6749)를 기반으로 하는 로그인 요청을 처리할 수 있습니다. 또한 [OpenID Connect](https://openid.net/developers/how-connect-works/) 프로토콜을 지원하며 ID 토큰으로 사용자 데이터를 가져올 수 있습니다. <br>2017년 9월 28일에 출시되었습니다. 자세한 내용은 [LINE Login v2.1 출시](https://developers.line.biz/en/news/2017/09/28/line-login-v21/)를 참고하십시오. |
| LINE Login v2.0 | [Deprecated](https://developers.line.biz/en/glossary/#deprecated) | 이 버전은 2017년 1월 24일에 출시되었으며 [deprecated](https://developers.line.biz/en/glossary/#deprecated) 상태입니다. [end-of-life](https://developers.line.biz/en/glossary/#end-of-life) 날짜는 아직 정해지지 않았습니다. 현재 버전인 LINE Login v2.1을 사용하는 것을 권장합니다. 종료(end-of-life)가 공지된 후 실제 종료되기까지는 일정한 유예 기간이 있습니다. |
| LINE Login v1 | [End-of-life](https://developers.line.biz/en/glossary/#end-of-life) | **모든 기능이 2018년 6월 30일에 종료되어 더 이상 사용할 수 없습니다.** 자세한 내용은 [LINE Login v1 서비스 종료 안내](https://developers.line.biz/en/news/2018/02/28/line-login-v1-notice/)를 참고하십시오. |

## 2단계 인증 요구하기 

Admin 역할을 가진 사용자는 채널에 로그인할 때 2단계 인증을 요구하도록 채널을 설정할 수 있습니다.

2단계 인증을 사용하면 목록 기반 공격(list-based attack)과 같은 무단 로그인 위험을 줄일 수 있습니다.

사용자 보호 관점에서 2단계 인증을 요구하는 것을 권장합니다. 다만 LINE 앱이 설치된 스마트폰을 요구하는 등 사용자에게 제약이 생길 수 있다는 점에 유의하십시오.

### 2단계 인증이란 무엇인가요? 

2단계 인증은 사용자만 알고 있는 정보(비밀번호 등), 사용자가 소유한 물건(IC 카드나 스마트폰 등), 생체 정보(지문이나 얼굴 등) 중 두 가지 요소를 사용하여 사용자를 인증하는 방법입니다. 2단계 인증을 사용하면 제3자가 비밀번호를 알고 있더라도 무단 로그인을 방지할 가능성이 높아집니다.

LINE Login은 LINE 계정의 비밀번호 인증과, 화면에 표시된 인증 코드를 스마트폰의 LINE 화면에 입력하는 방식으로 2단계 인증을 수행합니다.

사용자가 서비스에 처음 로그인하거나 기기 또는 브라우저가 바뀌면, 비밀번호를 입력한 후 인증 코드를 입력하라는 안내가 표시됩니다.

![](https://developers.line.biz/media/news/2023/login-flow-with-2fa-en.webp)

사용자가 계정을 전환하거나 브라우저의 쿠키를 삭제하지 않는 한 365일 동안 신뢰된 상태로 유지되며, 인증 코드를 입력하라는 요청을 받지 않습니다.

또한 같은 브라우저에서 이미 로그인되어 있는 경우에는 2단계 인증이 생략됩니다.

<!-- tip start -->

**LINE Login v2.1 사용을 권장합니다**

2단계 인증은 LINE Login v2.1에서 사용할 수 있습니다. LINE Login v1.0([end-of-life](https://developers.line.biz/en/glossary/#end-of-life)) 또는 LINE Login v2.0([deprecated](https://developers.line.biz/en/glossary/#deprecated))을 사용하고 있다면 LINE Login v2.1로 업데이트하는 것을 권장합니다.

버전 간의 차이에 대한 자세한 내용은 [LINE Login 버전](https://developers.line.biz/en/docs/line-login/overview/#versions)을 참고하십시오.

<!-- tip end -->

### LINE Developers Console의 2단계 인증 설정 

2단계 인증 요구 설정은 [LINE Developers Console](https://developers.line.biz/console/)에서 새 채널을 만들 때와 기존 채널을 편집할 때 설정할 수 있습니다.

| 채널 유형 | 생성할 때 | 편집할 때 |
| ------------------ | ------------- | ------------ |
| LINE Login | ✅ | ✅ |
| Blockchain Service | ✅ | ✅ |
| Messaging API | - \*1 | ✅ \*2 |
| LINE MINI App | ❌ | ❌ |

\*1 LINE Developers Console에서는 Messaging API 채널을 만들 수 없습니다.

\*2 이전에 만든 채널이 LIFF를 보유한 경우에만 해당합니다.

#### 채널을 만들 때 설정하기 

LINE Developers Console에서 새 채널을 만들 때 **Require two-factor authentication** 스위치를 "on"(오른쪽)으로 설정하면 이 설정을 활성화할 수 있습니다. 기본 설정은 "on"입니다.

![](https://developers.line.biz/media/news/2023/2fa-on-a-channel-en.png)

#### 기존 채널을 편집할 때 설정하기 

LINE Developers Console에서 기존 채널을 편집할 때 **Require two-factor authentication** 설정을 켜거나 끌 수 있습니다.

이 설정은 채널의 Admin 역할을 가진 멤버만 편집할 수 있습니다. Member 역할인 경우에는 채널을 편집할 때 설정 필드가 표시되지 않습니다.

**Require two-factor authentication** 설정은 채널 유형에 따라 아래 탭에 있습니다.

| 채널 유형 | 탭 이름 |
| ------------------ | ---------- |
| LINE Login | LINE Login |
| Blockchain Service | LINE Login |
| Messaging API | LIFF |

### Two-factor Authentication Switch 기능과의 우선순위 

LINE 앱의 [Two-factor Authentication Switch](https://developers.line.biz/en/news/2022/04/26/2fa-switch-function/)는 사용자 기기에서 **Home** > **Settings** > **Accounts** > **Two-factor authentication** 토글 스위치가 "ON"(오른쪽)으로 설정되어 있을 때, LINE Login v2.1을 사용하는 서비스에 로그인할 때 2단계 인증을 제공하는 기능입니다.

채널에서 설정한 **Require two-factor authentication**은 사용자 기기의 설정보다 우선합니다. 즉, 채널에서 **Require two-factor authentication**을 활성화하면 사용자 기기에서 Two-factor Authentication Switch가 꺼져 있더라도 사용자는 2단계 인증을 해야 합니다.

사용자 기기의 Two-factor Authentication Switch와 채널 설정의 관계는 다음과 같습니다.

|  | 사용자 기기 설정 <br>OFF | 사용자 기기 설정<br>ON |
| :-: | :-: | :-: |
| **채널 설정**<br>**OFF** | 2단계 인증이 비활성화됨 | 2단계 인증이 활성화됨 |
| **채널 설정**<br>**ON** | 2단계 인증이 활성화됨 | 2단계 인증이 활성화됨 |

### 인증 방법에 따른 LINE Login 동작 차이 

[LINE Login 인증 방법](https://developers.line.biz/en/docs/line-login/overview/#auth-method)에 따라, **Require two-factor authentication**을 켜 두었더라도 사용자에게 인증 코드를 입력하라는 요청이 표시되지 않을 수 있습니다.

| 인증 방법 | 2단계 인증 |
| -------------------------- | ------------------------- |
| 이메일 주소로 로그인 | 필요 |
| QR 코드로 로그인 | 필요 |
| 자동 로그인 | 불필요 |
| SSO(Single Sign On) 로그인 | 불필요 |

## 관련 페이지 

- [LINE Login 개발 가이드라인](https://developers.line.biz/en/docs/line-login/development-guidelines/)
- [LINE Login 보안 체크리스트](https://developers.line.biz/en/docs/line-login/security-checklist/)
- [LINE Login v2.1 API 레퍼런스](https://developers.line.biz/en/reference/line-login/)
