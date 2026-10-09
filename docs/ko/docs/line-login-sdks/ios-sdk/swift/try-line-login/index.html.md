# 스타터 앱 체험하기

LINE Login iOS 스타터 앱을 사용하면 [LINE Login](https://developers.line.biz/en/docs/line-login/overview/)이 iOS 앱에서 어떻게 동작하는지 빠르게 확인할 수 있습니다.

## 사전 요구 사항 

스타터 앱을 빌드하고 실행하려면 다음이 필요합니다.

- Xcode 14.1 이상

## 사전 정의된 샘플 채널로 스타터 앱 체험하기 

샘플 채널로 스타터 앱을 체험하려면 아래 단계를 따라 주세요.

1. [LINE SDK for iOS Swift 오픈소스 저장소](https://github.com/line/line-sdk-ios-swift)를 클론합니다.

    ```sh
    $ git clone https://github.com/line/line-sdk-ios-swift.git
    ```

1. `LineSDK.xcworkspace` 파일을 엽니다.
1. `LineSDKSample` 프로젝트를 빌드합니다. 스타터 앱이 시뮬레이터에서 실행됩니다.

### 나만의 채널로 스타터 앱 체험하기 

스타터 앱을 나만의 채널에 연결할 수도 있습니다. 채널이 없다면 LINE Developers Console에서 [채널을 만들 수](https://developers.line.biz/console/register/line-login/channel/) 있습니다. 이때 [프로바이더](https://developers.line.biz/en/glossary/#provider)를 선택하거나 새로 만들어야 합니다.

채널을 만든 후 프로젝트에서 다음을 변경하여 스타터 앱을 채널에 연결합니다.

- LINE Developers Console에서 [앱을 채널에 연결하기](https://developers.line.biz/en/docs/line-login-sdks/ios-sdk/swift/setting-up-project/#linking-app-to-channel)에 설명된 대로 채널을 설정합니다.
- 앱의 번들 ID를 채널에 설정된 ID로 변경합니다.
- `Config.xcconfig` 파일에서 `LINE_CHANNEL_ID` 값을 채널 ID로 변경합니다.

## 스타터 앱 실행하기 

iOS 기기 또는 시뮬레이터에서 스타터 앱을 실행합니다. 처음 로그인할 때는 앱이 프로필 정보에 접근하는 것을 동의해야 합니다.

**Log in with LINE** 버튼을 탭하면 앱 간 로그인(app-to-app login)으로 로그인합니다.

기기에 LINE이 설치되어 있고 로그인되어 있다면, LINE 계정 정보를 입력하지 않아도 스타터 앱에 자동으로 로그인됩니다. 그렇지 않은 경우에는 기기의 브라우저를 통해 로그인하라는 안내가 표시됩니다. 이때는 LINE 계정 정보를 입력해야 합니다.

### LINE SDK에서 제공하는 기능 체험하기 

앱에 로그인한 후 메뉴 항목을 탭하여 LINE SDK의 다음 기능을 체험할 수 있습니다.

일반 사용자가 사용할 수 있는 기능은 다음과 같습니다.

- 사용자 로그아웃
- 사용자 프로필 가져오기
- 액세스 토큰 검증하기
- 채널에 연결된 LINE 공식 계정과 사용자 간의 친구 관계 상태 가져오기

화면의 다른 기능은 제한된 사용자만 사용할 수 있습니다.
