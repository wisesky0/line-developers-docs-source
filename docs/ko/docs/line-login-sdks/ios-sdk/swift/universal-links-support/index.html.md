# 유니버설 링크 사용하기

Apple의 [유니버설 링크](https://developer.apple.com/documentation/xcode/supporting-universal-links-in-your-app) 기능을 사용하면 앱 간에 정보를 안전하게 주고받아 앱의 보안을 강화할 수 있습니다. 유니버설 링크를 설정하면 LINE은 먼저 유니버설 링크로 앱을 열려고 시도합니다. 유니버설 링크가 유효하지 않으면 LINE은 iOS 번들 ID를 기반으로 한 URL로 대체합니다([채널에 앱 연결하기](https://developers.line.biz/en/docs/line-login-sdks/ios-sdk/swift/setting-up-project/#linking-app-to-channel) 참고).

<!-- note start -->

**유니버설 링크를 권장합니다**

유니버설 링크는 선택 사항이지만, 앱을 더 안전하게 만들기 위해 사용하는 것을 권장합니다.

<!-- note end -->

사용자가 유니버설 링크로 앱을 열 수 있도록 하려면 다음 단계를 따르세요.

1. [앱과 서버 간의 연결을 만듭니다.](https://developers.line.biz/en/docs/line-login-sdks/ios-sdk/swift/universal-links-support/#ul-s1)
1. [LINE Developers Console에서 유니버설 링크를 설정합니다.](https://developers.line.biz/en/docs/line-login-sdks/ios-sdk/swift/universal-links-support/#ul-s2)
1. [유니버설 링크와 함께 `LoginManager.setup` 메서드를 호출합니다.](https://developers.line.biz/en/docs/line-login-sdks/ios-sdk/swift/universal-links-support/#ul-s3)
1. [유니버설 링크로 앱이 열린 후 로그인 결과를 처리합니다.](https://developers.line.biz/en/docs/line-login-sdks/ios-sdk/swift/universal-links-support/#ul-s4)

## 1. 앱과 서버 간의 연결 만들기 

이 단계는 Apple의 [콘텐츠에 대한 앱과 웹사이트의 링크 허용하기](https://developer.apple.com/documentation/xcode/allowing-apps-and-websites-to-link-to-your-content) 문서를 참고하세요.

다음 작업을 완료해 주세요.

- 앱이 처리할 수 있는 URL에 대한 JSON 데이터가 담긴 `apple-app-site-association` 파일을 만들고, 이를 HTTPS 서버에 배치합니다.
- 앱에 Associated Domains 엔타이틀먼트(entitlement)를 추가합니다.

이 섹션에서는 LINE 인증 응답을 처리할 유니버설 링크로 `https://yourdomain.com/line-auth/`를 사용한다고 가정합니다.

`apple-app-site-association` 파일의 `paths` 필드에 `/line-auth/*`를 포함하세요. 유효한 Apple App Site Association 파일의 예는 다음과 같습니다.

```json
{
    "applinks": {
        "apps": [],
        "details": [
            {
                "appID": "YOUR_TEAM_ID.com.yourcompany.yourapp",
                "paths": [ "/line-auth/*" ]
            }
        ]
    }
}
```

유니버설 링크는 실제 iOS 기기에서만 테스트할 수 있다는 점에 유의하세요. 앱 ID와 프로파일을 올바르게 설정해야 합니다. 유니버설 링크가 작동하지 않는다면 Apple 개발자 사이트의 [유니버설 링크 문제 해결](https://developer.apple.com/library/archive/qa/qa1916/_index.html)을 참고하세요. 다음 단계로 넘어가기 전에 유니버설 링크가 정상적으로 작동하는지 확인해 주세요.

## 2. LINE Developers Console에서 유니버설 링크 설정하기 

절차는 [채널에 앱 연결하기](https://developers.line.biz/en/docs/line-login-sdks/ios-sdk/swift/setting-up-project/#linking-app-to-channel)를 참고하세요. 이 예시에서는 `https://yourdomain.com/line-auth/`로 설정합니다.

## 3. 유니버설 링크와 함께 `LoginManager.setup` 메서드 호출하기 

`LoginManager.setup` 메서드를 호출할 때 유니버설 링크를 LINE SDK for iOS Swift에 전달합니다. 이렇게 하면 LINE Login이 유니버설 링크가 LINE Developers Console과 앱 양쪽에 올바르게 설정되었는지 확인하여 유니버설 링크가 악용되는 것을 방지합니다. 아래 예시에서 유니버설 링크는 `https://yourdomain.com/line-auth/`입니다.

```swift
let link = URL(string: "https://yourdomain.com/line-auth/")
LoginManager.shared.setup(channelID: "YOUR_CHANNEL_ID", universalLinkURL: link)
```

`LoginManager.setup` 메서드 호출에 대한 자세한 내용은 [iOS 앱에 LINE Login 통합하기](https://developers.line.biz/en/docs/line-login-sdks/ios-sdk/swift/integrate-line-login/)를 참고하세요.

## 4. 유니버설 링크로 앱이 열린 후 로그인 결과 처리하기 

LINE Platform에서 반환된 인증 결과를 처리하려면 수신한 URL을 `LoginManager`의 `application(_:open:options:)` 메서드에 전달합니다. 프로젝트가 여러 윈도우를 지원하는지 여부에 따라 앱 델리게이트 클래스 또는 씬 델리게이트 클래스를 수정해야 합니다. 씬 기능은 [iOS 13에서 도입](https://developer.apple.com/documentation/uikit/scenes)되었습니다.

### 앱 델리게이트 수정하기 

iOS 12 이하에서는 `UIApplicationDelegate` 객체를 호출하여 URL을 엽니다. 앱 델리게이트 클래스에 `application(_:continue:restorationHandler:)` 델리게이트 메서드가 있다면 다음 코드를 추가하세요. 없다면 먼저 만든 후 이 코드를 추가하세요.

```swift
func application(
    _ app: UIApplication,
    continue userActivity: NSUserActivity,
    restorationHandler: @escaping ([UIUserActivityRestoring]?) -> Void) -> Bool
{
    if LoginManager.shared.application(app, open: userActivity.webpageURL) {
        return true
    }
    // Your other code to handle universal links and/or user activities.
}
```

### 씬 델리게이트 수정하기 

기본적으로 iOS 13 이상에서는 `UISceneDelegate` 객체를 호출하여 URL을 열려고 합니다.

Xcode 11 이상으로 프로젝트를 만들었다면 기본적으로 `SceneDelegate.swift` 파일이 포함되며, `Info.plist` 파일에 `UIApplicationSceneManifest` 항목이 있습니다.

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

이제 LINE이 유니버설 링크로 앱을 열 수 있고, 앱은 로그인 결과를 처리할 수 있습니다.
