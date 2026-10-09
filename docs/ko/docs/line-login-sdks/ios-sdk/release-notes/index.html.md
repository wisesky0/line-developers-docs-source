# LINE SDK for iOS 릴리스 노트

<!-- note start -->

**버전 5.0.0 이상의 릴리스 노트는 GitHub 저장소에서 확인할 수 있습니다**

LINE SDK for iOS 버전 5.0.0 이상의 릴리스 노트는 GitHub 저장소에서 확인할 수 있습니다. 자세한 내용은 [Releases](https://github.com/line/line-sdk-ios-swift/releases)를 참고하세요.

<!-- note end -->

November 20, 2018

## LINE SDK 5.0.0 for iOS 출시

LINE SDK 5.0.0 for iOS가 출시되었습니다. 설치 및 사용 방법은 [LINE SDK for iOS 가이드](https://developers.line.biz/en/docs/line-login-sdks/ios-sdk/)를 참고하세요.

#### 변경 사항

##### LINE Login v2.1 및 Social API v2.1 지원

LINE Login으로 사용자가 앱에 로그인할 때 앱에 부여할 권한을 스코프(scope)로 설정할 수 있습니다. 스코프를 설정하면 액세스 토큰을 가져올 때 ID 토큰도 함께 받을 수 있습니다. 이 토큰에는 로그인 요청에서 설정한 스코프에 따른 사용자 데이터가 포함됩니다.

사용자가 앱에 로그인할 때 봇을 친구로 추가하는 옵션을 표시할 수 있습니다. 로그인 응답과 Social API를 통해 사용자와 봇 사이의 친구 관계 상태를 가져올 수 있습니다.

##### Swift로 개발된 새로운 SDK 

Swift로 개발된 LINE SDK for iOS Swift는 LINE API를 구현하는 현대적인 방법을 제공합니다. LINE SDK 5.0.0 for iOS Objective-C는 Objective-C SDK의 마지막 버전입니다.

##### 오픈소스 SDK

LINE SDK for iOS Swift는 오픈소스입니다. 제공되는 코드와 샘플은 [저장소](https://github.com/line/line-sdk-ios-swift)에서 확인해 주세요.

##### 상세 레퍼런스

이제 소스 코드를 기반으로 한 상세 레퍼런스를 확인할 수 있습니다. 자세한 내용은 다음을 참고하세요.

- [LINE SDK for iOS Swift 레퍼런스](https://developers.line.biz/en/reference/ios-sdk-swift/)
- [LINE SDK for iOS Objective-C 레퍼런스](https://developers.line.biz/en/reference/ios-sdk-objc/)

April 13, 2018

## LINE SDK 4.1.1 for iOS 출시

LINE SDK 4.1.1 for iOS가 출시되었습니다. 다음 페이지에서 SDK를 다운로드할 수 있습니다.

- [LINE SDK 다운로드](https://developers.line.biz/en/docs/downloads/)

변경 사항:

- 로그아웃 후에도 `LineSDKLogin` 객체가 액세스 토큰을 캐시에 보관하는 문제를 수정했습니다.

January 29, 2018

## LINE SDK 4.1.0 for iOS 출시

LINE SDK 4.1.0 for iOS가 출시되었습니다. 다음 페이지에서 SDK를 다운로드할 수 있습니다.

- [LINE SDK 다운로드](https://developers.line.biz/en/docs/downloads/)

변경 사항:

- 웹 로그인 과정이 외부 브라우저 대신 Safari View Controller를 사용하도록 변경되었습니다.

March 22, 2017

## LINE SDK for iOS CocoaPod 출시

LINE SDK for iOS를 CocoaPods에 배포했습니다. 이제 Objective-C 및 Swift 프로젝트에서 CocoaPods를 사용해 LINE SDK for iOS를 다운로드할 수 있습니다.

CocoaPods로 SDK를 다운로드하는 방법은 아래 링크를 참고하세요.

- [CocoaPods](https://cocoapods.org/)로 다운로드

January 27, 2017

## LINE SDK 4.0.1 for iOS 출시

LINE SDK 4.0.1 for iOS가 출시되었습니다. 다음 페이지에서 SDK를 다운로드할 수 있습니다.

- [LINE SDK 다운로드](https://developers.line.biz/en/docs/downloads/)

변경 사항:

- 웹 로그인을 사용할 때 인증 오류가 발생하는 문제를 수정했습니다.

December 13, 2016

## LINE 도메인 화이트리스트 등록 요건 변경

LINE SDK for iOS를 사용하는 데 더 이상 LINE 도메인 화이트리스트 등록이 필요하지 않습니다. 따라서 **iOS 9 이상의 설정** 섹션에 있던 LINE 도메인 화이트리스트 등록 관련 문서가 삭제되었습니다.

October 7, 2016

## LINE SDK 3.2.1 for iOS 출시

LINE SDK for iOS가 버전 3.2.1로 업데이트되었습니다. 다음 페이지의 LINE SDK 아카이브에서 다운로드할 수 있습니다.

- [LINE SDK 다운로드](https://developers.line.biz/en/docs/downloads/)

변경 사항:

- `LineAdapter+Login.framework`와 `LineAdapterUI.framework`가 `LineAdapter.framework`로 병합되었습니다.
- Swift용 정의가 변경되었습니다.

또한 이 버전의 SDK와 호환되도록 LINE SDK 스타터 애플리케이션을 수정했습니다. 아래 GitHub 저장소에서 복제하거나 다운로드할 수 있습니다.

- [https://github.com/line/line-sdk-starter-ios](https://github.com/line/line-sdk-starter-ios)
