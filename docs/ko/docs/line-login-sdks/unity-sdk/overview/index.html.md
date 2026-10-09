# LINE SDK for Unity 개요

LINE SDK for Unity는 LINE Platform API를 구현하는 현대적인 방법을 제공합니다. 이 SDK에 포함된 기능은 흥미롭고 개인화된 사용자 경험을 갖춘 Unity 게임을 개발하는 데 도움이 됩니다.

## 기능 

LINE SDK for Unity는 [LINE SDK for iOS Swift](https://developers.line.biz/en/docs/line-login-sdks/ios-sdk/)와 [LINE SDK for Android](https://developers.line.biz/en/docs/line-login-sdks/android-sdk/)를 감싼 래퍼입니다. iOS 또는 Android에서 실행되는 Unity 게임에 다음 기능을 제공합니다.

### 사용자 인증 

이 기능을 사용하면 사용자가 LINE 계정으로 Unity 게임에 로그인할 수 있습니다. LINE SDK for Unity를 사용하면 LINE Login을 앱에 통합하는 것이 그 어느 때보다 쉬워졌습니다. 사용자가 Android 기기에서 이미 LINE에 로그인되어 있다면, LINE 계정 정보를 입력하지 않아도 앱에 자동으로 로그인됩니다. 사용자는 회원가입 과정을 거치지 않고도 앱을 바로 시작할 수 있습니다.

### OpenID 지원으로 사용자 데이터 활용하기 

사용자가 인증을 마치면 LINE 프로필을 가져올 수 있습니다. 자체 사용자 시스템을 구축하지 않고도 LINE에 등록된 사용자 정보를 활용할 수 있습니다.

LINE SDK는 [OpenID Connect](https://openid.net/developers/how-connect-works/) 1.0 사양을 지원합니다. 액세스 토큰을 가져올 때 사용자의 LINE 프로필이 포함된 ID 토큰을 받을 수 있습니다.

### API 호출 

LINE SDK에 포함된 메서드를 사용하여 사용자 프로필 정보를 가져오고, 사용자를 로그아웃시키고, 액세스 토큰을 관리할 수 있습니다.

## 오픈소스 SDK 

LINE SDK for Unity는 오픈소스 프로젝트입니다. 제공되는 코드와 샘플을 확인하려면 [저장소](https://github.com/line/line-sdk-unity)를 방문해 주세요.

## SDK 사용하기 

Unity 게임에서 LINE SDK를 사용하려면 아래 단계를 따라 주세요.

1. 채널을 만듭니다. 자세한 내용은 LINE Login 문서의 [LINE Login 시작하기](https://developers.line.biz/en/docs/line-login/getting-started/)를 참고하세요.
2. SDK를 사용해 Unity 게임에 LINE Login 기능을 추가합니다. 자세한 내용은 [Unity 게임에 LINE Login 통합하기](https://developers.line.biz/en/docs/line-login-sdks/unity-sdk/integrate-line-login/)를 참고하세요.
3. SDK를 사용해 앱에서 API를 호출하거나, LINE Login API를 통해 서버 측 코드에서 API를 호출합니다. 자세한 내용은 [LINE SDK for Unity API 레퍼런스](https://developers.line.biz/en/reference/unity-sdk/)와 [LINE Login v2.1 API 레퍼런스](https://developers.line.biz/en/reference/line-login/)를 참고하세요.

### 스타터 앱 체험하기 

스타터 앱으로 LINE Login이 어떻게 동작하는지 확인할 수 있습니다. [스타터 앱 체험하기](https://developers.line.biz/en/docs/line-login-sdks/unity-sdk/try-line-login/)를 참고하세요.

## 이 가이드의 내용 

이 가이드에서는 LINE SDK를 Unity 게임에 통합하고 SDK에서 제공하는 API 기능을 앱에서 사용하는 방법을 설명합니다. 아래 표에서 이 가이드의 주제와 내용을 확인하세요.

| Title | Content |
| --- | --- |
| [LINE SDK for Unity 개요](https://developers.line.biz/en/docs/line-login-sdks/unity-sdk/overview/) | SDK의 기능과 SDK 사용을 위한 상위 단계입니다. |
| [프로젝트 설정](https://developers.line.biz/en/docs/line-login-sdks/unity-sdk/project-setup/) | LINE SDK for Unity를 통합하는 데 필요한 사전 요구 사항과 환경입니다. |
| [스타터 앱 체험하기](https://developers.line.biz/en/docs/line-login-sdks/unity-sdk/try-line-login/) | 스타터 앱을 실행하는 방법입니다. |
| [Unity 게임에 LINE Login 통합하기](https://developers.line.biz/en/docs/line-login-sdks/unity-sdk/integrate-line-login/) | 프로젝트에 LINE SDK를 통합하고 LINE Login을 활용하여 앱의 사용자 경험을 개선하는 방법입니다. |
| [다른 API 사용 및 결과 처리하기](https://developers.line.biz/en/docs/line-login-sdks/unity-sdk/using-sdk/) | LINE SDK for Unity의 사용법과 기타 세부 정보입니다. |
| [LINE SDK for Unity 레퍼런스](https://developers.line.biz/en/reference/unity-sdk/) | SDK에서 사용할 수 있는 인터페이스와 클래스에 대한 상세 정보입니다. |

## 기타 리소스 

| Title | Content |
| --- | --- |
| [LINE SDK for Unity 릴리스 노트](https://developers.line.biz/en/docs/line-login-sdks/unity-sdk/release-notes/) | SDK 변경 기록입니다. |
