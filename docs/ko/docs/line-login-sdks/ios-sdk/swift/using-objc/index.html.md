# Objective-C 코드에서 SDK 사용하기

## 개요 

LINE SDK for iOS Swift는 순수 Swift로 작성되었지만 Objective-C 프로젝트에서도 사용할 수 있습니다. 이를 위한 두 가지 옵션이 있습니다.

## 옵션 1: 혼합 언어 프로젝트 만들기 

Swift와 Swift/Objective-C 상호 운용성에 어느 정도 경험이 있다면, LINE SDK for iOS Swift를 Objective-C 프로젝트에 직접 통합하고 Swift로 LINE SDK의 API를 호출하는 것을 권장합니다.

기존의 모든 Objective-C 프로젝트는 Objective-C와 Swift가 섞인 혼합 언어 프로젝트로 전환할 수 있습니다. 혼합 언어 프로젝트에 LINE SDK for iOS Swift와 상호작용하는 Swift 파일을 추가할 수 있습니다.

Swift 파일의 필요한 선언을 Objective-C에서 사용하려면 `@objc` 또는 `@objcMembers` 속성으로 노출해야 합니다. 이 속성에 대한 자세한 내용은 Swift.org의 [Attributes](https://docs.swift.org/swift-book/ReferenceManual/Attributes.html#ID592)를 참고하세요.

프로젝트에 Swift 파일을 가져오면 Xcode가 자동으로 브리징 헤더(bridging header) 파일을 생성하여 해당 파일을 Objective-C 코드에 노출합니다. 브리징 헤더에 대한 자세한 내용은 Apple의 [Swift를 Objective-C에서 가져오기](https://developer.apple.com/documentation/swift/importing-swift-into-objective-c)를 참고하세요.

Objective-C 프로젝트에서 Swift 클래스를 사용하는 방법을 알아보려면 다음 글도 참고하세요.

- [Jen Sipila](https://jen-sip.medium.com/)의 [Setting up Swift and Objective-C Interoperability](https://medium.com/ios-os-x-development/swift-and-objective-c-interoperability-2add8e6d6887): 특히 "Make a Swift Class available to Objective-C Files" 섹션을 확인하세요.
- Apple의 [Objective-C 코드를 Swift로 마이그레이션하기](https://developer.apple.com/documentation/swift/migrating-your-objective-c-code-to-swift): 전체 과정을 이해하는 데 도움이 됩니다.

## 옵션 2: Objective-C 래퍼 사용하기 

Objective-C 코드로 LINE SDK for iOS Swift와 상호작용하려면 LINE SDK for iOS Swift에서 제공하는 Objective-C 래퍼를 사용하세요. 옵션 1과 달리 추가 Objective-C 래퍼 프레임워크를 프로젝트에 추가해야 합니다. 이 섹션에서는 Objective-C 래퍼의 기본 개념, 설치 및 일반적인 사용법을 다룹니다.

LINE SDK for iOS Swift는 Swift 코드와만 호환됩니다. Objective-C 래퍼는 핵심 SDK 위에 구현되어 Objective-C 코드와 호환되며, LINE SDK for iOS Swift의 핵심 기능 대부분을 제공합니다. 다만 Swift와 완전히 호환되지 않는 Objective-C 명세의 제약 때문에 일부 기능은 Objective-C 래퍼에서 사용할 수 없습니다.

타입 이름과 SDK의 대부분의 구성 요소에는 원래 SDK와의 이름 충돌을 피하기 위해 "LineSDK" 접두사가 붙습니다. 또한 래퍼는 설정을 위한 추가 단계가 필요합니다.

래퍼는 LINE SDK for iOS Swift를 사용하기 위한 임시 방법이라는 점을 기억해 주세요. LINE SDK for iOS Swift의 모든 기능을 사용하려면 프로젝트를 Swift로 마이그레이션하는 것을 권장합니다.

### 설치 

#### 사전 요구 사항 

Objective-C 래퍼와 함께 LINE SDK for iOS Swift를 빌드하고 사용하려면 다음이 필요합니다.

- 배포 대상(deployment target)으로 iOS 11.0 이상
- Xcode 10 이상

#### CocoaPods 

CocoaPods에 익숙하지 않다면 [CocoaPods 시작 가이드](https://guides.cocoapods.org/using/getting-started.html)를 참고하세요. CocoaPods로 LINE SDK for iOS Swift를 앱에 통합하려면 먼저 컴퓨터에 CocoaPods gem이 설치되어 있어야 합니다.

1. Podfile을 준비한 후 대상(target)에 아래 pod 명령을 추가합니다.

    ```ruby
    platform :ios, '11.0'
    use_frameworks!

    target '<Your App Target Name>' do
        pod 'LineSDKSwift/ObjC', '~> 5.0'
    end
    ```

1. 다음 명령을 실행합니다.

    ```bash
    $ pod install
    ```

1. LINE SDK for iOS Swift가 다운로드되어 Xcode 워크스페이스에 통합됩니다.

##### SDK 가져오기 

아래와 같이 Objective-C 프로젝트에 `@import LineSDK;`를 추가하여 Objective-C 래퍼와 함께 LINE SDK for iOS Swift를 가져옵니다.

```objective-c
#import "ViewController.h"
@import LineSDK;

@implementation ViewController
// ...
@end
```

#### Carthage 

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

이제 다음 섹션에서 설명하는 단계에 따라 빌드된 `LineSDK.framework`와 `LineSDKObjC.framework` 파일을 Xcode 프로젝트에 추가할 수 있습니다.

##### Xcode 프로젝트에 프레임워크 파일 연결하기 

`Carthage/Build/iOS` 폴더에 있는 `LineSDK.framework`와 `LineSDKObjC.framework` 파일을 앱 대상의 "Build Phases" 설정 탭에 있는 "Link Binary With Libraries" 섹션으로 드래그 앤 드롭합니다.

##### 빌드 단계에서 프레임워크 파일 복사하기 

1. 앱 대상의 "Build Phases" 설정 탭에서 **+** 아이콘을 클릭하고 **New Run Script Phase**를 선택합니다. 다음 내용으로 실행 스크립트를 만듭니다.

    ```
    /usr/local/bin/carthage copy-frameworks
    ```

1. "Input Files" 섹션에 프레임워크 파일의 경로를 추가합니다.

    ```
    $(SRCROOT)/Carthage/Build/iOS/LineSDK.framework
    $(SRCROOT)/Carthage/Build/iOS/LineSDKObjC.framework
    ```

1. "Output Files" 섹션에 프레임워크 파일의 경로를 추가합니다.

    ```
    $(BUILT_PRODUCTS_DIR)/$(FRAMEWORKS_FOLDER_PATH)/LineSDK.framework
    $(BUILT_PRODUCTS_DIR)/$(FRAMEWORKS_FOLDER_PATH)/LineSDKObjC.framework
    ```

"Build Phases" 탭은 다음과 같아야 합니다.

![Link Binary with Libraries, Copy Bundle Resources, Run Script 하위 탭을 보여 주는 iOS SDK Swift ObjC Build Phases 탭](https://developers.line.biz/media/ios-sdk-swift/install-carthage-objc.webp)

##### "Always Embed Swift Standard Libraries" 옵션 활성화하기 

"Build Settings" 설정 탭에서 "Always Embed Swift Standard Libraries"(`ALWAYS_EMBED_SWIFT_STANDARD_LIBRARIES`) 옵션을 "YES"로 설정하여 최종 앱 번들에 Swift 표준 라이브러리를 포함시킵니다.

##### SDK 가져오기 

아래와 같이 Objective-C 프로젝트에 `@import LineSDKObjC;`를 추가하여 Objective-C 래퍼와 함께 LINE SDK for iOS Swift를 가져옵니다.

```objective-c
#import "ViewController.h"
@import LineSDKObjC;

@implementation ViewController
// ...
@end
```

### 명명 규칙 

Objective-C 래퍼를 사용할 때 타입 이름과 SDK의 대부분의 구성 요소에는 "LineSDK" 접두사가 붙습니다. 다음 코드 샘플은 Objective-C에서 일반적인 작업을 처리하는 방법을 보여 줍니다.

#### 여러 권한으로 사용자 로그인시키기 

```objective-c
NSSet *permissions = [NSSet setWithObjects:
                          [LineSDKLoginPermission profile],
                          [LineSDKLoginPermission openID],
                          nil];
[[LineSDKLoginManager sharedManager]
    loginWithPermissions:permissions
        inViewController:self
              parameters:nil
       completionHandler:^(LineSDKLoginResult *result, NSError *error) {
           if (result) {
               NSLog(@"User Name: %@", result.userProfile.displayName);
           } else {
               NSLog(@"Error: %@", error);
           }
       }
 ];
```

#### 사용자 프로필 가져오기 

```objective-c
[LineSDKAPI getProfileWithCompletionHandler:
    ^(LineSDKUserProfile * _Nullable profile, NSError * _Nullable error)
{
    if (profile) {
        NSLog(@"User Name: %@", profile.displayName);
    } else {
        NSLog(@"Error: %@", error);
    }
}];
```

### Objective-C 래퍼에서 오류 처리하기 

Objective-C 관례와 호환되도록 Objective-C 래퍼는 `NSError` 객체를 던집니다(throw). 다음 코드는 오류가 LINE SDK와 관련된 것인지 확인합니다.

```objective-c
NSError *error = // ... An error from LINE SDK ObjC Wrapper
if ([error.domain isEqualToString:[LineSDKErrorConstant errorDomain]]) {
    // SDK Error
}
```

래퍼가 던지는 모든 오류는 원래 LINE SDK for iOS Swift가 던지는 오류와 같은 `code` 및 `userInfo` 속성을 가집니다. 이 속성을 사용해 오류의 원인을 확인할 수 있습니다.

```objective-c
if (error.code == 2004) {
    // invalidHTTPStatusAPIError
    NSNumber *statusCode = error.userInfo[[LineSDKErrorConstant userInfoKeyStatusCode]];
    if ([statusCode integerValue] == 403) {
        // Permission granting issue. Ask for authorization with enough permission again.
    }
}
```

오류를 식별하고 처리하는 방법은 [오류 처리하기](https://developers.line.biz/en/docs/line-login-sdks/ios-sdk/swift/error-handling/)를 참고하세요.
