# LINE Login 시작하기

이 페이지에서는 간단한 스타터 웹 앱을 배포하여 LINE Login을 시작하는 방법을 설명합니다. 이 웹 앱을 사용하면 사용자가 LINE 계정으로 로그인할 수 있습니다. 사용자가 로그인할 때 발급되는 액세스 토큰을 사용하여 사용자 프로필을 가져올 수 있습니다.

이 페이지의 모든 단계를 마치면 LINE Login이 어떻게 동작하는지 더 잘 이해하고, 웹 앱에 LINE Login을 구현하는 방법을 알게 됩니다.

<!-- tip start -->

**iOS/Android/Unity 스타터 앱**

특정 플랫폼용 스타터 앱도 제공하고 있습니다.

- [Trying the starter app - iOS Swift](https://developers.line.biz/en/docs/line-login-sdks/ios-sdk/swift/try-line-login/)
- [Trying the sample app - Android](https://developers.line.biz/en/docs/line-login-sdks/android-sdk/try-line-login/)
- [Trying the starter app - Unity](https://developers.line.biz/en/docs/line-login-sdks/unity-sdk/try-line-login/)

<!-- tip end -->

## 시작하기 전에 

LINE Login 스타터 앱을 사용하려면 다음이 필요합니다.

| 요구 사항 | 설명 |
| --- | --- |
| LINE 계정 | LINE 앱의 계정입니다. 스타터 앱을 체험하려면 LINE 계정이 필요합니다. LINE 계정을 만들려면 iOS용 또는 Android용 LINE을 [다운로드](https://line.me/)하고 가입하십시오. 새 LINE 계정 생성에 대한 자세한 내용은 LINE 사용자 가이드의 [Create a new account](https://guide.line.me/ja/signup/line-signup.html)(일본어로만 제공)를 참고하십시오. |
| Provider | Provider는 애플리케이션을 제공하는 개인 또는 조직을 나타내는 개념입니다. [LINE Developers Console](https://developers.line.biz/console/)에서 provider를 만드십시오. LINE 사용자는 provider마다 서로 다른 사용자 ID를 갖습니다. |
| LINE Login 채널 | 채널은 앱과 LINE Platform을 연결하는 통로입니다. Provider 안에 채널을 만드십시오. 앱마다 채널을 하나씩 만들어야 합니다. [LINE Developers Console](https://developers.line.biz/console/register/line-login/channel/)에서 LINE Login 채널을 만드십시오. <br/>참고: <ul><li>LINE Developers Console에 한 번도 로그인한 적이 없다면 먼저 개발자로 등록하라는 안내가 표시됩니다.<ul><li>LINE Login 채널을 만드는 단계는 [Step 1: Create your LINE Login channel](https://developers.line.biz/en/docs/line-login/getting-started/#step-1-create-channel)에 설명되어 있습니다.</li></ul></li><li>스타터 앱을 사용하기 위해 LINE Login 채널을 만들 때는 **App types**에서 **Web app**을 반드시 선택하십시오.</li></ul> |
| Heroku 계정 | [Heroku](https://www.heroku.com/)는 웹 앱 호스팅을 제공하는 서비스입니다. 스타터 앱을 Heroku에 배포하면 별도의 서버가 필요하지 않습니다. |
| Heroku CLI | 일부 Heroku 기능을 사용하려면 [Heroku Command Line Interface(CLI)](https://devcenter.heroku.com/articles/heroku-cli)가 필요합니다. |

<!-- note start -->

**Heroku의 무료 요금제는 종료되었습니다**

Heroku의 무료 요금제는 2022년 11월 27일부로 종료되었습니다. 이 스타터 앱을 무료로 체험하려면 다른 플랫폼을 사용하십시오. 자세한 내용은 [Heroku's Next Chapter](https://www.heroku.com/blog/next-chapter/)를 참고하십시오.

<!-- note end -->

## 1단계: LINE Login 채널 만들기 

LINE Login 채널을 만드는 것부터 시작하겠습니다.

[채널](https://developers.line.biz/en/docs/line-developers-console/overview/#channel)은 앱이 LINE Platform에 연결되는 통로입니다. 웹 앱마다 [LINE Developers Console](https://developers.line.biz/console/register/line-login/channel/)에서 LINE Login 채널을 하나씩 만드십시오.

1. [LINE Developers Console](https://developers.line.biz/console/)에 로그인합니다.
2. Provider를 선택한 다음 **Channels** 탭에서 **LINE Login**을 선택합니다.
3. 다음 필드에 필요한 정보를 입력하여 채널을 만듭니다.

| 항목 | 필수 여부 | 설명 | 사용자에게 표시되는 위치 |
| --- | --- | --- | --- |
| **Channel type** | ✅ | 채널 유형입니다. LINE Login 채널을 만들려면 LINE Login을 선택하십시오. | - |
| **Provider** | ✅ | 채널의 [provider](https://developers.line.biz/en/docs/line-developers-console/overview/#provider) | LINE Login 또는 LIFF 앱을 실행할 때 나타나는 권한 동의 화면 |
| **Region to provide the service** | ✅ | LINE Login 서비스를 제공할 지역입니다. 다음 중 하나를 선택합니다. <br><ul><li>Japan</li><li>Thailand</li><li>Taiwan</li><li>Indonesia</li></ul>\*여러 지역에서 서비스를 제공하려면 지역마다 채널을 하나씩 만드십시오. | - |
| **Company or owner's country or region** | ✅ | 채널을 관리하는 회사 또는 소유자의 국가 또는 지역 | LINE Login 또는 LIFF 앱을 실행할 때 나타나는 권한 동의 화면 |
| **Channel icon** | ❌ | 채널의 아이콘 | LINE Login 또는 LIFF 앱을 실행할 때 나타나는 권한 동의 화면 |
| **Channel name** | ✅ | 채널의 이름 <br>\*채널 이름에는 "LINE" 또는 이와 유사한 문자열을 포함할 수 없습니다. | LINE Login 또는 LIFF 앱을 실행할 때 나타나는 권한 동의 화면 |
| **Channel description** | ✅ | 채널에 대한 설명 | LINE Login 또는 LIFF 앱을 실행할 때 나타나는 권한 동의 화면 |
| **App types** | ✅ | LINE Login을 연동할 앱의 유형입니다. 다음 중 하나를 선택합니다. <br><ul><li>Web app</li><li>Mobile app</li></ul>\*스타터 앱 배포 예시에서는 **Web app**을 선택하십시오. | - |
| **Email address** | ✅ | 채널에 관한 중요한 공지를 받을 이메일 주소 | - |
| **Privacy policy URL** | 조건에 따라 다름 | 앱의 개인정보 처리방침 URL입니다. Provider가 [인증된 provider(certified provider)](https://developers.line.biz/en/docs/line-developers-console/overview/#certified-provider)인 경우 필수입니다. | LINE Login 또는 LIFF 앱을 실행할 때 나타나는 권한 동의 화면 |
| **Terms of use URL** | ❌ | 앱의 이용약관 URL | LINE Login 또는 LIFF 앱을 실행할 때 나타나는 권한 동의 화면 |
| **LINE Developers Agreement** | ✅ | [LINE Developers Agreement](https://terms2.line.me/LINE_Developers_Agreement?lang=en)를 읽고 동의합니다. | - |
| **LY Corporation Privacy Policy** | 조건에 따라 다름 | **Region to provide the service**에서 Thailand를 선택한 경우에만 필수입니다. [LY Corporation Privacy Policy](https://line.me/th/terms/policy/)를 읽고 확인합니다. | - |

### 채널과 provider 연결 시 주의 사항 

채널을 만든 후에는 나중에 채널을 다른 provider로 옮길 수 없습니다.

LINE Login 채널과 Messaging API 채널을 연결하는 서비스를 개발할 때는 두 채널을 같은 provider 안에 만드십시오.

개발자가 제공하는 서비스를 이용하는 LINE 사용자에게는 provider마다 서로 다른 사용자 ID가 부여됩니다. 서로 다른 provider 아래의 채널 간에는 사용자 ID로 같은 사용자를 식별할 수 없습니다.

![](https://developers.line.biz/media/line-developers-console/different-user-ids.png)

<!-- warning start -->

**채널을 만들 때 특별히 주의해야 하는 경우**

예를 들어 다음과 같은 경우에는 특별한 주의가 필요합니다.

- 채널과 provider를 개인 또는 회사가 관리하는 경우
- 관련 없는 서비스나 회사의 채널을 하나의 provider 아래에 만드는 경우
- 채널 관리 도구 등을 운영하는 서비스(회사)가 관리하는 provider 아래에 채널을 만드는 경우

이러한 경우에는 나중에 provider 간에 채널을 옮길 수 없고, provider마다 사용자에게 다른 사용자 ID가 부여되는 등의 문제가 발생할 수 있습니다. 관련 위험을 고려한 후 적절한 provider 아래에 채널을 만드십시오.

<!-- warning end -->

<!-- tip start -->

**provider 및 채널 관리 모범 사례**

Provider와 채널의 관리자 역할을 관리하는 방법, 그리고 어떤 provider 아래에 채널을 만들어야 하는지를 구체적인 예시와 함께 설명하는 페이지가 있습니다.

자세한 내용은 LINE Developers Console 문서의 [Best practices for provider and channel management](https://developers.line.biz/en/docs/line-developers-console/best-practices-for-provider-and-channel-management/)를 참고하십시오.

<!-- tip end -->

## 2단계: 스타터 앱 배포하기 

다음으로 1단계에서 만든 채널의 채널 ID와 채널 시크릿을 사용하여 스타터 앱을 Heroku에 배포합니다. 다음 단계를 따르십시오.

1. GitHub의 [line-login-starter](https://github.com/line/line-login-starter) 저장소로 이동합니다.
2. [README](https://github.com/line/line-login-starter)에서 **Deploy to Heroku**를 클릭합니다.
3. Heroku의 "Create New App" 페이지에 필요한 정보를 입력합니다.
   - Heroku 앱 이름<br/>고유한 이름이어야 합니다. 권장 형식: <code v-pre>line-login-starter-{YYYYMMDD}</code>
   - Region
   - Config Variables
     - 다음 형식의 콜백 URL: `https://{Heroku app name}.herokuapp.com/auth`
     - 채널 ID([LINE Developers Console](https://developers.line.biz/console/)에서 확인)
     - 채널 시크릿([LINE Developers Console](https://developers.line.biz/console/)에서 확인)
4. **Deploy app**을 선택하고 앱이 성공적으로 배포되었는지 확인합니다.

## 3단계: 채널 설정 확인 및 콜백 URL 입력하기 

웹 앱용 LINE Login 채널을 사용하려면 **App Type**과 **Callback URL**을 올바르게 설정해야 합니다.

1. [LINE Developers Console](https://developers.line.biz/console/)에서 1단계에서 만든 채널을 선택합니다.
2. **Basic settings** 탭을 클릭하고 **App types**에 **Web app**이 표시되는지 확인합니다.
3. **LINE Login** 탭을 클릭하고 Heroku의 **Callback URL**(`https://{Heroku app name}.herokuapp.com/auth`)을 입력합니다.

### LINE Login의 기본 설정 

**Basic settings** 탭에는 채널의 기본 정보가 들어 있습니다. 다음 정보를 확인할 수 있습니다.

| 항목 | 설명 |
| --- | --- |
| **Channel ID** | 채널의 고유 식별자 |
| **Region to provide the service** | LINE Login 서비스를 제공할 지역입니다. 새 채널을 만들 때만 지역을 설정할 수 있습니다. |
| **Company or owner's country or region** | 채널을 관리하는 회사 또는 소유자의 국가 또는 지역 |
| **Channel icon** | 채널의 아이콘 |
| **Channel name** | 채널의 이름 |
| **Channel description** | 채널에 대한 설명 |
| **Email address** | 채널에 관한 중요한 공지를 받을 이메일 주소 |
| **Privacy policy URL** | 앱의 개인정보 처리방침 URL |
| **Terms of use URL** | 앱의 이용약관 URL |
| **App types** | LINE Login을 연동할 앱의 유형 |
| **Permissions** | 이 채널이 접근할 수 있는 사용자 데이터의 유형 |
| **Channel secret** | 앱에 채널 접근 권한을 부여할 때 사용할 수 있는 고유한 비밀 키 |
| **Assertion Signing Key** | Assertion 서명 키 쌍과 연결된 UUID |
| **Your user ID** | 사용자의 LINE 계정 사용자 ID |
| **Linked LINE Official Account** | 이 채널에 연결된 LINE 공식 계정입니다. 같은 provider의 LINE 공식 계정만 연결할 수 있습니다. |
| **Localization** | 채널에 다른 언어를 추가하여 다국어 지원을 제공할 수 있습니다. |
| **Email address permission** | OpenID Connect를 사용하여 사용자의 이메일을 요청할 수 있도록 권한을 신청합니다. |
| **Delete** | 이 채널을 삭제합니다. |

## 4단계: 앱 체험하기 

1. 앱의 URL(`https://{Heroku app name}.herokuapp.com`)에 접속합니다. 다음 화면이 표시되어야 합니다.

   ![LINE Login starter app login](https://developers.line.biz/media/line-login/getting-started/line-login-starter-app-login.png)

2. **Log in**을 클릭합니다.

   표준 로그인 페이지로 리디렉션됩니다. URL은 `https://access.line.me/oauth2/v2.1/`로 시작하며 여러 쿼리 파라미터를 포함합니다. 각 파라미터의 의미는 [Integrating LINE Login with your web app](https://developers.line.biz/en/docs/line-login/integrate-line-login/)을 읽고 확인하십시오.

3. LINE에 로그인하고 앱에 필요한 권한을 부여하는 데 동의합니다.

LINE 계정 정보로 로그인에 성공하면 앱에 LINE 사용자 프로필 이미지, 표시 이름, 상태 메시지가 표시됩니다. (iOS 또는 Android 기기를 사용 중이고 이미 LINE에 로그인되어 있다면 자동으로 로그인됩니다.)

### 스타터 앱의 다른 기능 체험하기 

앱에 로그인한 후 다음 버튼을 선택하여 이 앱의 다른 기능을 체험할 수 있습니다.

- 사용자 액세스 토큰 검증
- 사용자 액세스 토큰 갱신
- 액세스 토큰 취소(로그아웃)

### 로그 확인하기 

[Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)로 앱의 로그를 확인합니다.

1. 명령줄에서 Heroku에 로그인합니다.

   ```sh
   $ heroku login
   ```

1. 로그를 확인합니다.

   ```sh
   $ heroku logs --app {Heroku app name} --tail
   ```

## 5단계: 앱 커스터마이징하기 

스타터 앱을 로컬 컴퓨터에 내려받아 직접 테스트하고 변경할 수 있습니다. 그다음 원하는 웹 서버에 앱을 배포할 수 있습니다. 여기서는 1단계에서 만든 Heroku 앱을 변경하고 배포하는 방법을 살펴보겠습니다.

다음 프로그램이 설치되어 있는지 확인하십시오.

- JDK 1.8 이상
- Maven™ 3.0 이상
- Git™

1. [line-login-starter](https://github.com/line/line-login-starter) GitHub 저장소를 클론합니다.

   ```sh
   git clone https://github.com/line/line-login-starter.git
   ```

1. `line-login-starter` 디렉터리로 `cd` 합니다.
1. 로컬 저장소에 Heroku용 remote를 추가합니다.

   ```sh
   $ heroku git:remote -a {Heroku app name}
   ```

1. 변경 사항을 만들고 커밋합니다(선택 사항).

   ```sh
   $ git add .
   $ git commit -m "First commit"
   ```

1. 변경 사항을 Heroku의 master 브랜치에 푸시합니다.

   ```sh
   $ git push heroku master
   ```

## 6단계: 채널 게시하기(선택 사항) 

LINE Login 채널은 "Developing" 상태로 만들어집니다. 이 상태에서는 Admin 또는 Tester 역할([역할 관리](https://developers.line.biz/en/docs/line-developers-console/managing-roles/) 참고)이 부여된 사용자만 LINE Login 채널을 사용할 수 있습니다. 다른 사용자도 앱에 접근하도록 허용하려면 앱의 상태를 "Published"로 변경해야 합니다. 이를 위해서는 [LINE Developers Console](https://developers.line.biz/console/)에서 LINE Login 채널을 열고 페이지 상단의 **Developing** 상태를 클릭하십시오.

현재 채널이 테스트 용도로만 사용된다면 상태를 그대로 두어도 됩니다. 하지만 앞으로 앱을 사용자에게 제공하려면 연결된 채널을 게시해야 합니다. 상태를 "Published"로 변경한 후에는 다시 "Developing"으로 되돌릴 수 없다는 점에 유의하십시오.

### "Developing" 상태의 LINE Login 채널로 테스트하는 방법 

"Developing" 상태의 LINE Login 채널로 테스트할 때는 채널에서 테스트 역할을 부여받은 개발자 계정이 LINE 계정과 연결되어 있어야 합니다. 개발자 계정에 연결된 Business ID에 LINE 계정을 연결하면 개발자 계정과 LINE 계정을 연결할 수 있습니다.

개발자 계정은 항상 Business ID와 일대일로 연결됩니다. 다만 Business ID를 LINE 계정에 연결하는 것은 선택 사항입니다. 따라서 Business ID와 LINE 계정이 연결되어 있지 않은 경우도 있을 수 있습니다. LINE Login을 테스트할 때는 Business ID가 LINE 계정과 연결되어 있는지 확인하십시오.

LINE Login을 테스트할 때는 개발자 계정에 연결된 LINE 계정으로 로그인해야 합니다. Business ID에 등록된 이메일 주소와 비밀번호로는 로그인할 수 없다는 점에 유의하십시오.

Business ID를 LINE 계정과 연결하는 방법에 대한 자세한 내용은 LINE Developers Console 문서의 [Link your Business ID with your LINE account](https://developers.line.biz/en/docs/line-developers-console/login-account/#link-business-account-with-line-account)를 참고하십시오.

## 다음 단계 

- [Integrating LINE Login with your web app](https://developers.line.biz/en/docs/line-login/integrate-line-login/)
- [Integrating LINE Login with your iOS app](https://developers.line.biz/en/docs/line-login-sdks/ios-sdk/swift/integrate-line-login/)
- [Integrating LINE Login with your Android app](https://developers.line.biz/en/docs/line-login-sdks/android-sdk/integrate-line-login/)
- [Integrating LINE Login with your Unity game](https://developers.line.biz/en/docs/line-login-sdks/unity-sdk/integrate-line-login/)
