# 프로젝트 설정하기

이 문서에서는 LINE SDK for iOS Swift를 iOS 프로젝트에 통합하고 필요한 설정을 적용하는 방법을 설명합니다.

앱을 최신 iOS 버전과 호환되도록 만들고 기능을 최대한 활용하려면, 이 설치 가이드를 따르고 최신 버전의 LINE SDK for iOS Swift를 사용하는 것을 강력히 권장합니다.

## 사전 요구 사항 

LINE SDK for iOS Swift를 빌드하고 사용하려면 다음이 필요합니다.

- LINE Developers Console에서 만들 수 있는 [프로바이더](https://developers.line.biz/en/glossary/#provider)와 LINE Login 채널. [둘 다 만들기](https://developers.line.biz/console/register/line-login/channel/)
- 배포 대상(deployment target)으로 iOS 13.0 이상
- Xcode 14.1 이상

<!-- tip start -->

**배포 대상으로 iOS 13.0 미만 지원하기**

배포 대상으로 iOS 13.0 미만을 지원하려면 이전 버전의 LINE SDK for iOS Swift를 사용하세요. 자세한 내용은 [릴리스](https://github.com/line/line-sdk-ios-swift/releases)를 참고하세요.

<!-- tip end -->

LINE SDK for iOS Swift는 Swift 코드 또는 Objective-C 코드와 함께 사용할 수 있습니다. 이 가이드는 Swift 코드로 LINE SDK for iOS Swift를 구현한다고 가정합니다. Objective-C 코드로 LINE SDK for iOS Swift를 통합하려면 [Objective-C에서 SDK 사용하기](https://developers.line.biz/en/docs/line-login-sdks/ios-sdk/swift/using-objc/)를 참고하세요.

## 설치 

LINE SDK for iOS Swift는 이전 LINE SDK for iOS Objective-C 버전과 호환되지 않습니다. LINE SDK 버전을 업그레이드하는 경우 업그레이드를 진행하기 전에 [SDK 업그레이드하기](https://developers.line.biz/en/docs/line-login-sdks/ios-sdk/swift/migration-guide/)를 참고하세요.

### CocoaPods 

CocoaPods에 익숙하지 않다면 [CocoaPods 시작 가이드](https://guides.cocoapods.org/using/getting-started.html)를 참고하세요. CocoaPods로 LINE SDK for iOS Swift를 앱에 통합하려면 먼저 컴퓨터에 CocoaPods gem이 설치되어 있어야 합니다.

1. Podfile을 준비한 후 대상(target)에 아래 pod 명령을 추가합니다.

    ```ruby
    platform :ios, '13.0'
    use_frameworks!

    target '<Your App Target Name>' do
        pod 'LineSDKSwift', '~> 5.0'
    end
    ```

1. 다음 명령을 실행합니다.

    ```bash
    $ pod install
    ```

LINE SDK for iOS Swift가 다운로드되어 Xcode 워크스페이스에 통합됩니다.

### Carthage 

[Carthage](https://github.com/Carthage/Carthage)는 의존성을 빌드하고 바이너리 프레임워크를 제공하는 분산형 의존성 관리자입니다.

1. Carthage 도구를 설치하려면 [Homebrew](https://brew.sh/)를 사용합니다.

    ```bash
    $ brew update
    $ brew install carthage
    ```

1. Carthage를 사용해 LINE SDK for iOS Swift를 Xcode 프로젝트에 통합하려면 아래와 같이 Cartfile에 SDK의 GitHub 저장소를 지정합니다.

    ```
    github "line/line-sdk-ios-swift" ~> 5.0
    ```

1. 다음 명령을 실행하여 LINE SDK for iOS Swift를 빌드합니다.

    ```
    $ carthage update line-sdk-ios-swift
    ```

이제 다음 섹션에서 설명하는 단계에 따라 빌드된 `LineSDK.framework` 파일을 Xcode 프로젝트에 추가할 수 있습니다.

#### Xcode 프로젝트에 `LineSDK.framework` 파일 연결하기 

`Carthage/Build/iOS` 폴더에 있는 `LineSDK.framework` 파일을 앱 대상의 "General" 설정 탭에 있는 "Linked Frameworks and Libraries" 섹션으로 드래그 앤 드롭합니다.

![Finder에서 앱 대상의 Linked Frameworks and Libraries 섹션으로 옮겨지는 LINE SDK 프레임워크 파일](https://developers.line.biz/media/ios-sdk-swift/install-link.webp)

#### 빌드 단계에서 `LineSDK.framework` 파일 복사하기 

1. 앱 대상의 "Build Phases" 설정 탭에서 **+** 아이콘을 클릭하고 **New Run Script Phase**를 선택합니다. 다음 내용으로 실행 스크립트를 만듭니다.

    ```
    /usr/local/bin/carthage copy-frameworks
    ```

1. "Input Files" 섹션에 `LineSDK.framework` 파일의 경로를 추가합니다.

    ```
    $(SRCROOT)/Carthage/Build/iOS/LineSDK.framework
    ```

1. "Output Files" 섹션에 `LineSDK.framework` 파일의 경로를 추가합니다.

    ```
    $(BUILT_PRODUCTS_DIR)/$(FRAMEWORKS_FOLDER_PATH)/LineSDK.framework
    ```

실행 스크립트는 다음과 같아야 합니다.

![Shell, Input Files, Input File Lists, Output Files를 보여 주도록 펼쳐진 Run script 섹션](https://developers.line.biz/media/ios-sdk-swift/install-carthage-copy.webp)

## 앱을 채널에 연결하기 

앱을 LINE Login 채널에 연결하려면 몇 가지 설정이 필요합니다. [LINE Developers Console](https://developers.line.biz/console/)에서 LINE Login 채널 설정으로 이동한 후 **LINE Login** 탭에서 다음 항목을 입력합니다.

- **iOS bundle ID:** Xcode 프로젝트 설정의 "General" 탭에서 확인할 수 있는 앱의 번들 식별자입니다. 소문자여야 합니다. 예: `com.example.app`. 각 번들 식별자를 새 줄에 입력하여 여러 개를 지정할 수 있습니다.
- **iOS universal link:** 앱에 설정한 유니버설 링크를 입력합니다. 유니버설 링크를 사용해 로그인 과정을 처리하는 방법은 [유니버설 링크 사용하기](https://developers.line.biz/en/docs/line-login-sdks/ios-sdk/swift/universal-links-support/)를 참고하세요.

![LINE Login의 iOS bundle ID 및 universal link 설정](https://developers.line.biz/media/line-login/integrate-login-ios/ios-app-settings.png)

## `Info.plist` 파일 설정하기 

Xcode에서 앱의 `Info.plist` 파일을 마우스 오른쪽 버튼으로 클릭하고 **Open As** > **Source Code**를 선택합니다. 마지막 `</dict>` 태그 바로 앞에 다음 코드 조각을 삽입합니다.

```xml
<key>CFBundleURLTypes</key>
<array>
    <dict>
        <key>CFBundleTypeRole</key>
        <string>Editor</string>
        <key>CFBundleURLSchemes</key>
        <array>
            <!-- Specify URL scheme to use when returning from LINE to your app. -->
            <string>line3rdp.$(PRODUCT_BUNDLE_IDENTIFIER)</string>
        </array>
    </dict>
</array>
<key>LSApplicationQueriesSchemes</key>
<array>
    <!-- Specify URL scheme to use when launching LINE from your app. -->
    <string>lineauth2</string>
</array>
```

이 코드 조각은 다음 설정을 추가합니다.

Key | Description
--- | -----------
CFBundleURLSchemes | 앱을 여는 데 필요한 URL 스킴을 정의하려면 `line3rdp.$(PRODUCT_BUNDLE_IDENTIFIER)`를 사용합니다. iOS는 이 URL 스킴을 나중에 참조할 수 있도록 저장합니다. LINE Platform이 로그인 결과를 반환한 후 LINE Login은 이 스킴을 사용해 앱을 엽니다. <br /> 참고: URL 스킴 `lineauth2`는 LINE을 활성화하는 데 이미 사용되고 있습니다. CFBundleURLSchemes에는 이 스킴을 사용하지 마세요.
LSApplicationQueriesSchemes | 앱에서 LINE을 실행할 수 있도록 `lineauth2`를 지정합니다. 앱은 로그인 과정의 일부로 LINE을 실행합니다.
