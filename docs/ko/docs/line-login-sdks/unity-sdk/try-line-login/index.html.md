# 스타터 앱 체험하기

LINE Login 스타터 앱(Unity용)을 사용하면 Unity 게임에서 [LINE Login](https://developers.line.biz/en/docs/line-login/overview/)이 어떻게 동작하는지 빠르게 확인할 수 있습니다.

## 사전 요구 사항 

스타터 앱을 빌드하고 실행하기 전에 [Setting up your project](https://developers.line.biz/en/docs/line-login-sdks/unity-sdk/project-setup/) 가이드를 따라 Unity, iOS, Android 환경을 올바르게 설정하십시오.

## 샘플 채널로 스타터 앱 체험하기 

샘플 채널로 스타터 앱을 체험하려면 다음 단계를 따르십시오.

1. [LINE SDK for Unity 오픈소스 저장소](https://github.com/line/line-sdk-unity)를 클론합니다.

    ```sh
    $ git clone https://github.com/line/line-sdk-unity.git
    ```

1. Unity에서 `LINE_SDK_Unity` 폴더의 프로젝트를 엽니다.
1. `Assets/LineSDK/Demo/Scenes/Main` 아래의 씬을 iOS 또는 Android용으로 빌드하고 내보냅니다.
1. 내보낸 프로젝트/바이너리를 기기에 설치합니다.

<!-- note start -->

**Note**

iOS 기기에 샘플 앱을 설치하려면 인증서를 수정해야 할 수 있습니다. iOS 기기가 없다면 **Player Settings > Settings for iOS > Other Settings**로 이동하여 **Target SDK**를 **Simulator SDK**로 설정한 다음, iOS 시뮬레이터에서 샘플 앱을 실행하십시오.

<!-- note end -->

### 자신의 채널로 스타터 앱 체험하기 

스타터 앱을 자신의 채널에 연결할 수도 있습니다. 채널이 아직 없다면 [지금 채널을 만드십시오](https://developers.line.biz/console/register/line-login/channel/). 또한 [provider](https://developers.line.biz/en/glossary/#provider)를 선택하거나 새로 만들어야 합니다.

스타터 앱을 자신의 채널과 연결하려면 Unity 프로젝트에서 다음과 같이 변경하십시오.

1. **File** > **Build Settings**를 선택합니다.
1. **Player Settings**를 클릭합니다.
1. ![iPhone, iPod Touch and iPad settings tab](https://developers.line.biz/media/unity-sdk/ios-settings-tab.png) > **Other Settings**를 선택하고, **Bundle Identifier**를 LINE Developers Console의 LINE Login 채널 **LINE Login** 탭에 있는 **iOS bundle ID**와 같은 값으로 설정합니다.

    ![Bundle Identifier](https://developers.line.biz/media/unity-sdk/bundle-identifier-settings.png)

1. 다음 두 필드에 LINE Developers Console의 LINE Login 채널 **LINE Login** 탭에 있는 Android **Package Name**과 같은 값을 설정합니다.
    - **Product Name**
    - ![Android settings tab](https://developers.line.biz/media/unity-sdk/android-settings-tab.png) > **Other Settings** > **Package Name**

    ![Package Name](https://developers.line.biz/media/unity-sdk/package-name-settings.png)

1. 메인 페이지에서 **LineSDK** 오브젝트를 선택합니다.
1. **Line SDK (Script)** 아래의 **Channel ID** 필드에 LINE Login 채널 ID를 입력합니다.

    ![Channel ID](https://developers.line.biz/media/unity-sdk/channel-id-settings.png)

## 스타터 앱 실행하기 

iOS/Android 기기 또는 시뮬레이터에서 스타터 앱을 실행합니다. 처음 로그인할 때 앱이 프로필 정보에 접근하도록 동의해야 합니다.

**Log in with LINE**을 탭하면 앱 간 로그인(app-to-app login)으로 로그인합니다.

기기에 LINE이 설치되어 있고 로그인된 상태라면 LINE 계정 정보를 입력하지 않고도 스타터 앱에 자동으로 로그인됩니다. 그렇지 않은 경우에는 브라우저를 통해 로그인하라는 안내가 표시됩니다. 이 경우에는 LINE 계정 정보를 입력해야 합니다.

### LINE SDK에서 사용 가능한 기능 체험하기 

앱에 로그인한 후에는 메뉴 항목을 탭하여 LINE SDK의 다음 기능을 체험할 수 있습니다.

일반 사용자가 사용할 수 있는 기능:

- 사용자 로그아웃
- 사용자 프로필 가져오기
- 액세스 토큰 검증
- 채널에 연결된 LINE 공식 계정과 사용자 간의 친구 상태 가져오기

그 밖에 표시되는 기능은 제한된 사용자(limited users)만 사용할 수 있습니다.
