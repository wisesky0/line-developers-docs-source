# iOS 앱에 LINE Login 통합하기

[SDK를 설치](https://developers.line.biz/en/docs/line-login-sdks/ios-sdk/swift/setting-up-project/)하고 프로젝트를 구성하면 LINE Login을 활용해 앱의 사용자 경험을 개선할 수 있습니다.

## LineSDK 프레임워크와 채널 ID 설정하기 

로그인 동작의 결과를 처리하려면 `AppDelegate.swift` 파일에서 LINE SDK for iOS Swift를 설정합니다.

### 1. LineSDK 프레임워크 가져오기 

`AppDelegate.swift` 파일 상단에서 아래와 같이 `LineSDK` 프레임워크를 가져옵니다.

```swift
// AppDelegate.swift
import LineSDK
```

앱의 다른 파일에서도 SDK를 사용하려면 해당 파일에도 SDK를 가져와야 합니다.

### 2. `LoginManager.setup` 메서드 호출하기 

앱이 실행된 직후 아래와 같이 `LoginManager.setup` 메서드를 호출합니다.

```swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    // Add this to your "didFinishLaunching" delegate method.
    LoginManager.shared.setup(channelID: "YOUR_CHANNEL_ID", universalLinkURL: nil)

    return true
}
```

<!-- note start -->

**참고**

LINE SDK for iOS Swift의 다른 속성에 접근하거나 다른 메서드를 호출하기 **전에** 반드시 `setup` 메서드를 호출해야 합니다.

<!-- note end -->

#### 유니버설 링크 사용하기 

LINE Developers Console에서 유니버설 링크를 설정했다면 `universalLinkURL` 매개변수와 함께 `setup` 메서드를 호출합니다. 이렇게 하면 LINE이 유니버설 링크로 앱을 열 수 있어 로그인 과정이 더 안전해집니다.

유니버설 링크로 로그인 과정을 처리하는 방법은 [유니버설 링크 사용하기](https://developers.line.biz/en/docs/line-login-sdks/ios-sdk/swift/universal-links-support/)를 참고하세요.

### 3. 앱 열기 처리하기 

LINE Platform에서 받은 인증 결과를 처리하려면 수신한 URL을 `LoginManager`의 `application(_:open:options:)` 메서드에 전달합니다. 프로젝트가 여러 윈도우를 지원하는지 여부에 따라 앱 델리게이트 클래스 또는 씬 델리게이트 클래스를 수정해야 합니다. 씬 기능은 [iOS 13에서 도입](https://developer.apple.com/documentation/uikit/scenes)되었습니다.

#### 앱 델리게이트 수정하기 

iOS 12 이하에서는 `UIApplicationDelegate` 객체를 호출하여 URL을 엽니다. 따라서 앱 델리게이트 클래스의 `application(_:open:options:)` 델리게이트 메서드에 다음 코드를 추가합니다.

```swift
// AppDelegate.swift
func application(_ app: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey : Any] = [:]) -> Bool {
    return LoginManager.shared.application(app, open: url)
}
```

#### 씬 델리게이트 수정하기 

기본적으로 iOS 13 이상에서는 `UISceneDelegate` 객체를 호출하여 URL을 열려고 합니다.

Xcode 11 이상으로 프로젝트를 만들었다면 기본적으로 `SceneDelegate.swift` 파일이 포함되며, `Info.plist` 파일에 `UIApplicationSceneManifest` 항목이 있습니다. 사용하려는 씬 델리게이트 클래스에 다음 코드를 추가합니다.

앱이 여러 윈도우를 지원한다면 사용하려는 씬 델리게이트 클래스에 다음 코드를 추가합니다.

```swift
// SceneDelegate.swift
func scene(_ scene: UIScene, openURLContexts URLContexts: Set<UIOpenURLContext>) {
    _ = LoginManager.shared.application(.shared, open: URLContexts.first?.url)
}
```

<!-- note start -->

**앱이 여러 윈도우를 지원하지 않는 경우**

앱이 여러 윈도우를 지원하지 않는다면 iOS는 URL을 열기 위해 `UIApplicationDelegate` 객체를 호출합니다. 대신 앱 델리게이트 클래스를 수정해 주세요.

<!-- note end -->

## 로그인 과정 수행하기 

사용자가 iOS 앱에 로그인할 수 있도록 LINE 브랜드의 로그인 버튼을 만들어 인증 및 권한 부여 과정을 진행할 수 있습니다.

로그인 버튼을 추가하는 방법은 두 가지가 있습니다.

- [LINE SDK에 내장된 로그인 버튼 사용하기](https://developers.line.biz/en/docs/line-login-sdks/ios-sdk/swift/integrate-line-login/#use-button)
- [직접 작성한 코드 사용하기](https://developers.line.biz/en/docs/line-login-sdks/ios-sdk/swift/integrate-line-login/#use-code)

### LINE SDK에 내장된 로그인 버튼 사용하기 

LINE SDK for iOS Swift는 미리 정의된 로그인 버튼을 제공합니다. SDK의 `LoginButton` 클래스는 `UIButton` 클래스의 하위 클래스이며, [LINE Login 버튼 디자인 가이드라인](https://developers.line.biz/en/docs/line-login/login-button/)에서 권장하는 스타일을 따릅니다. 아래와 같이 앱의 사용자 인터페이스에 로그인 버튼을 추가하면 사용자가 빠르게 로그인할 수 있습니다.

```swift
// In your view controller
override func viewDidLoad() {
    super.viewDidLoad()

    // Create Login Button.
    let loginButton = LoginButton()
    loginButton.delegate = self

    // Configuration for permissions and presenting.
    loginButton.permissions = [.profile]
    loginButton.presentingViewController = self

    // Add button to view and layout it.
    view.addSubview(loginButton)
    loginButton.translatesAutoresizingMaskIntoConstraints = false
    loginButton.centerXAnchor.constraint(equalTo: view.centerXAnchor).isActive = true
    loginButton.centerYAnchor.constraint(equalTo: view.centerYAnchor).isActive = true
}
```

사용자가 로그인 버튼을 탭하면 적절한 로그인 과정을 거쳐 인증됩니다. 사용자의 기기에 LINE이 설치되어 있다면 앱은 LINE에서 사용자의 LINE 계정 정보를 가져와 인증을 수행합니다. 그렇지 않은 경우 사용자는 브라우저의 LINE Login 대화상자로 이동하여 LINE 계정 정보를 입력하도록 요청받습니다.

로그인 상태를 받으려면 아래와 같이 `LoginButtonDelegate` 프로토콜의 관련 델리게이트 메서드를 구현합니다.

```swift
extension LoginViewController: LoginButtonDelegate {
    func loginButton(_ button: LoginButton, didSucceedLogin loginResult: LoginResult) {
        hideIndicator()
        print("Login Succeeded.")
    }

    func loginButton(_ button: LoginButton, didFailLogin error: LineSDKError) {
        hideIndicator()
        print("Error: \(error)")
    }

    func loginButtonDidStartLogin(_ button: LoginButton) {
        showIndicator()
        print("Login Started.")
    }
}
```

로그인 과정이 끝나면 로그인 결과와 함께 델리게이트 메서드 중 하나가 호출됩니다.

### 직접 작성한 코드 사용하기 

기본 로그인 버튼 대신 직접 사용자 인터페이스와 로그인 과정을 커스터마이즈할 수도 있습니다.

로그인 과정을 수행하려면 적절한 매개변수와 함께 `LoginManager.login` 메서드를 호출합니다. 일반적으로 로그인 과정은 아래와 같이 뷰 컨트롤러에서 진행됩니다.

```swift
// LoginViewController.swift

import LineSDK

class LoginViewController: UIViewController {
    override func viewDidLoad() {
        //...
    }

    func login() {
        LoginManager.shared.login(permissions: [.profile], in: self) {
            result in
            switch result {
            case .success(let loginResult):
                print(loginResult.accessToken.value)
                // Do other things you need with the login result
            case .failure(let error):
                print(error)
            }
        }
    }
}
```

사용자가 로그인 과정을 마치면 `result` 인수와 함께 completion 핸들러가 호출됩니다. 로그인 결과를 기준으로 분기하여 로그인 세부 정보에 접근합니다.

로그인에 성공하면 LINE Platform은 공통 로그인 정보를 담은 `LoginResult` 객체를 반환합니다. 로그인 상태에 접근하려면 `LoginManager.shared.isAuthorized` 메서드를 사용합니다.

로그인 과정 중 오류가 발생하면 LINE SDK는 `.failure`인 `result` 인수와 연결된 `LineSDKError` 열거형 멤버를 반환합니다. SDK에서 오류 세부 정보를 가져오고 적절히 처리하는 방법은 [오류 처리하기](https://developers.line.biz/en/docs/line-login-sdks/ios-sdk/swift/error-handling/)를 참고하세요.

로그인 인터페이스를 디자인하는 방법은 [LINE Login 버튼 디자인 가이드라인](https://developers.line.biz/en/docs/line-login/login-button/)을 참고하세요. 이 페이지에서 LINE Login 버튼 이미지도 다운로드할 수 있습니다.

## 로그인 결과 처리하기 

### 토큰 권한 

`LoginManager.login` 메서드를 호출할 때 사용자가 앱에 부여하기를 원하는 권한을 자유롭게 지정할 수 있지만, 채널에 해당 권한이 없을 수도 있습니다. 이 경우 `LoginResult` 객체의 `permissions` 속성은 인증 요청에서 지정한 값과 다를 수 있습니다.

액세스 토큰과 연결된 인증 권한을 확인하려면 `permissions` 속성을 가져옵니다. 예를 들어 아래 코드로 토큰에 `.profile` 권한이 포함되어 있는지 확인할 수 있습니다.

```swift
case .success(let loginResult):
    let profileEnabled = loginResult.permissions.contains(.profile)
```

적절한 권한이 없는 API 호출은 실패합니다. 자세한 내용은 [오류 처리하기](https://developers.line.biz/en/docs/line-login-sdks/ios-sdk/swift/error-handling/)를 참고하세요.

### 사용자 프로필 

인증 요청에서 profile 권한을 지정하면 로그인 결과에 `UserProfile` 객체가 포함됩니다. 아래와 같이 사용자 프로필 정보에 접근하여 자체 사용자 시스템을 구축할 수 있습니다.

```swift
LoginManager.shared.login(permissions: [.profile], in: self) {
    result in
    switch result {
    case .success(let loginResult):
        if let profile = loginResult.userProfile {
            print("User ID: \(profile.userID)")
            print("User Display Name: \(profile.displayName)")
            print("User Icon: \(String(describing: profile.pictureURL))")
        }
    case .failure(let error):
        print(error)
    }
}
```

사용자 ID는 개별 프로바이더에 대해서만 고유합니다. 같은 LINE 사용자라도 프로바이더가 다르면 사용자 ID가 다릅니다. 여러 프로바이더에 걸쳐 사용자를 식별하는 데 사용자 ID를 사용하지 마세요.

### 서버에서 사용자 데이터 사용하기 

<!-- warning start -->

**사용자 사칭**

클라이언트가 백엔드 서버로 보낸 사용자 ID나 `UserProfile` 객체의 다른 정보를 신뢰하지 마세요. 악의적인 클라이언트는 사용자를 사칭하기 위해 임의의 사용자 ID나 잘못된 형식의 정보를 서버에 보낼 수 있습니다.

대신 클라이언트는 액세스 토큰을 서버에 보내고, 서버는 그 토큰을 사용해 사용자 데이터를 가져와야 합니다.

<!-- warning end -->

일반적으로 백엔드 서버는 사용자 ID, 표시 이름 또는 기타 LINE 계정 속성을 기준으로 사용자의 신원을 확인합니다. 이러한 정보를 앱에서 백엔드로 일반 텍스트로 보내는 대신, 앱에 저장된 액세스 토큰을 보내세요. 그런 다음 액세스 토큰을 사용해 데이터를 안전하게 주고받을 수 있습니다. 백엔드 서버는 LINE Platform에 대해 액세스 토큰을 검증한 후 사용자의 세부 정보를 가져올 수 있습니다.

액세스 토큰은 `LoginResult` 객체에서 가져올 수 있습니다. 예시는 다음과 같습니다.

```swift
LoginManager.shared.login(permissions: [.profile], in: self) {
    result in
    switch result {
    case .success(let loginResult):
        let token = loginResult.accessToken.value
        // Send `token` to your server.
    case .failure(let error):
        print(error)
```

백엔드에서 호출할 수 있는 API에 대한 자세한 내용은 다음 페이지를 참고하세요.

- [액세스 토큰 유효성 검증](https://developers.line.biz/en/reference/line-login/#verify-access-token)
- [사용자 프로필 가져오기](https://developers.line.biz/en/reference/line-login/#get-user-profile)
