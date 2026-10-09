# SDK 업그레이드하기

## 최신 SDK로 업그레이드하기 

5.0.0은 LINE SDK for iOS Swift의 첫 번째 버전입니다. 이 버전은 [기존 Objective-C 버전](https://developers.line.biz/en/docs/line-login-sdks/ios-sdk/deprecated/objective-c-v41/overview/)과 호환되지 않습니다. LINE SDK for iOS Swift로 업그레이드하려면 일부 코드를 변경해야 합니다.

<!-- note start -->

**참고**

새로운 LINE SDK for iOS Swift는 Swift 프로젝트를 위해 설계되었습니다. 다만 Objective-C 코드에서도 새로운 SDK를 사용할 수 있습니다. Objective-C 코드에서 SDK를 사용하는 방법은 [Objective-C 코드에서 SDK 사용하기](https://developers.line.biz/en/docs/line-login-sdks/ios-sdk/swift/using-objc/)를 참고하세요.

<!-- note end -->

SDK를 업그레이드하려면 기존 SDK와 관련된 코드 줄을 모두 제거하고, Swift 또는 Objective-C 중 어떤 언어의 기존 버전을 사용하고 있든 [프로젝트 설정하기](https://developers.line.biz/en/docs/line-login-sdks/ios-sdk/swift/setting-up-project/)의 단계에 따라 깨끗하게 다시 설치하는 것을 권장합니다. 다만 현재 구현을 기반으로 변경하고 싶다면 다음의 일반적인 단계를 따를 수 있습니다.

1. 코드베이스에서 기존 `LineSDK.framework` 파일을 제거합니다.
    - CocoaPods, Carthage 등의 패키지 관리자를 사용했다면 패키지 정의 파일(Podfile 또는 Cartfile)에서 "LineSDK" 항목을 제거합니다. 그런 다음 깨끗하게 다시 설치하여 프로젝트에서 `LineSDK.framework` 파일에 대한 참조를 제거합니다.
    - 다운로드한 바이너리를 사용했다면 프로젝트에서 그냥 제거합니다.

1. `Info.plist` 파일을 정리합니다. 이 항목은 더 이상 필요하지 않으므로 파일에서 `LineSDKConfig` 항목을 안전하게 제거할 수 있습니다.

1. LINE SDK for iOS Swift를 설치합니다. 자세한 단계는 [프로젝트 설정하기](https://developers.line.biz/en/docs/line-login-sdks/ios-sdk/swift/setting-up-project/)를 참고하세요.

1. `AppDelegate` 파일에서 채널 ID와 콜백 처리를 설정합니다.

    앱이 실행된 직후 아래와 같이 `LoginManager.setup` 메서드를 호출합니다.

    ```swift
    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        // Add this to your "didFinishLaunching" delegate method.
        LoginManager.shared.setup(channelID: "YOUR_CHANNEL_ID", universalLinkURL: nil)

        return true
    }
    ```

    아래와 같이 URL 열기 처리를 업데이트합니다.

    ```swift
    func application(_ app: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey : Any] = [:]) -> Bool {
        return LoginManager.shared.application(app, open: url, options: options)
    }
    ```

## 최신 SDK를 사용하도록 코드 업데이트하기 

이제 최신 LINE SDK를 사용할 수 있도록 나머지 모든 코드 줄을 업데이트할 준비가 되었습니다. 다음 섹션에서는 몇 가지 일반적인 예시를 설명합니다.

이 섹션에서 SDK의 모든 기능을 다루지는 않습니다. 하지만 LINE SDK의 대응 타입은 비슷한 규칙을 따르므로 쉽게 찾을 수 있습니다. 프로젝트가 컴파일되도록 최신 LINE SDK를 사용하도록 코드를 업데이트하세요.

최신 LINE SDK for iOS Swift와 호환되는 샘플 앱도 제공합니다. 기본 통합 방법과 사용법은 [오픈소스 저장소](https://github.com/line/line-sdk-ios-swift)에서 확인해 주세요.

<!-- note start -->

**LINE을 통해 앱에 사용자 로그인시키기**

**LINE SDK 4.x 버전에서 발급된 액세스 토큰은 5.x 버전에서 사용할 수 없습니다.** LINE SDK를 업그레이드하면 앱이 LINE Platform에 접근하기 전에 모든 사용자가 다시 로그인해야 합니다.

<!-- note end -->

#### 이전 

```swift
// First set the delegate to the current object
LineSDKLogin.sharedInstance().delegate = self
LineSDKLogin.sharedInstance().start()

// MARK: LineSDKLoginDelegate

func didLogin(_ login: LineSDKLogin, credential: LineSDKCredential?, profile: LineSDKProfile?, error: Error?) {

    if let error = error {
        print("LINE Login Failed with Error: \(error.localizedDescription) ")
        return
    }

    print("LINE Login Succeeded")
}
```

#### 현재 

```swift
LoginManager.shared.login(permissions: [.profile]) {
    result in
    switch result {
    case .success(let loginResult):
        print("User name: \(loginResult.userProfile?.displayName ?? "nil")")
    case .failure(let error):
        print("Error: \(error)")
    }
}
```

### 사용자 프로필 가져오기 

#### 이전 

```swift
var apiClient: LineSDKAPI
apiClient = LineSDKAPI(configuration: LineSDKConfiguration.defaultConfig())

apiClient.getProfile(queue: .main) {
    (profile, error) in

    if let error = error {
        print("Error getting profile \(error.localizedDescription)")
    }

    print(profile?.displayName ?? "none")
    print(profile?.pictureURL ?? "none")
    print(profile?.statusMessage ?? "none")
    print(profile?.userID ?? "none")
}
```

#### 현재 

```swift
API.getProfile { result in
    switch result {
    case .success(let profile):
        print("User name: \(profile.displayName)")
    case .failure(let error):
        print("Error: \(error)")
    }
}
```

### 사용자 로그아웃시키기 

#### 이전 

```swift
var apiClient: LineSDKAPI
apiClient = LineSDKAPI(configuration: LineSDKConfiguration.defaultConfig())

apiClient.logout(queue: .main) {
    (success, error) in

    if success {
        print("Logout Succeeded")
    }
    else {
        print("Logout Failed \(error?.localizedDescription as String?)")
    }
}
```

#### 현재 

```swift
LoginManager.shared.logout { result in
    switch result {
    case .success:            print("Logout Succeeded")
    case .failure(let error): print("Logout Failed: \(error)")
    }
}
```

### 현재 액세스 토큰 가져오기 

#### 이전 

```swift
var apiClient: LineSDKAPI
apiClient = LineSDKAPI(configuration: LineSDKConfiguration.defaultConfig())

let myToken = apiClient.currentAccessToken()
```

#### 현재 

```swift
let token = AccessTokenStore.shared.current?.value
```

### 액세스 토큰 검증하기 

#### 이전 

```swift
var apiClient: LineSDKAPI
apiClient = LineSDKAPI(configuration: LineSDKConfiguration.defaultConfig())

apiClient.verifyToken(queue: .main) {
    (result, error) in

    if let error = error {
        print("Token is Invalid: \(error.localizedDescription)")
        return
    }

    guard let result = result, let permissions = result.permissions else {
        print("Response result is null")
        return
    }
    print("Token is Valid")
}
```

#### 현재 

```swift
API.Auth.verifyAccessToken { result in
    switch result {
    case .success: print("Token is valid.")
    case .failure(let error): print("Error: \(error)")
    }
}
```
