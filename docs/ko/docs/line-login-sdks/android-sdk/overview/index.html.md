# LINE SDK for Android 개요

LINE SDK for Android는 LINE 플랫폼 API를 구현하는 최신 방법을 제공합니다. 이 SDK에 포함된 기능은 매력적이고 개인화된 사용자 경험을 갖춘 Android 앱을 개발하는 데 도움이 됩니다.

## 기능 

LINE SDK for Android는 다음 기능을 제공합니다.

### 사용자 인증 

이 기능을 사용하면 사용자가 자신의 LINE 계정으로 서비스에 로그인할 수 있습니다. LINE SDK for Android를 사용하면 LINE Login을 앱에 통합하기가 그 어느 때보다 쉬워집니다. 사용자가 Android 기기에서 이미 LINE에 로그인되어 있다면, LINE 자격 증명을 입력하지 않고도 앱에 자동으로 로그인됩니다. 따라서 사용자는 등록 절차를 거치지 않고도 앱을 쉽게 시작할 수 있습니다.

### OpenID 지원으로 사용자 데이터 활용하기 

사용자가 인증되면 사용자의 LINE 프로필을 가져올 수 있습니다. 사용자 시스템을 직접 구축하지 않고도 LINE에 등록된 사용자 정보를 활용할 수 있습니다.

LINE SDK는 [OpenID Connect](https://openid.net/developers/how-connect-works/) 1.0 사양을 지원합니다. 액세스 토큰을 가져올 때 사용자의 LINE 프로필이 포함된 ID 토큰을 받을 수 있습니다.

### API 호출 

LINE SDK에 포함된 메서드를 사용하여 사용자 프로필 정보를 가져오고, 사용자를 로그아웃시키고, 액세스 토큰을 관리할 수 있습니다.

## 오픈 소스 SDK 

LINE SDK for Android는 오픈 소스 프로젝트입니다. 제공되는 코드와 샘플을 확인하려면 [저장소](https://github.com/line/line-sdk-android)를 방문하십시오.

## LINE SDK 사용하기 

Android 앱에서 LINE SDK를 사용하려면 다음 단계를 따르십시오.

1. 채널을 만듭니다.

   자세한 내용은 LINE Login 문서의 [LINE Login 시작하기](https://developers.line.biz/en/docs/line-login/getting-started/)를 참조하십시오.

2. LINE SDK를 사용하여 Android 앱에 LINE Login 지원을 추가합니다.

   자세한 내용은 [Android 앱에 LINE Login 통합하기](https://developers.line.biz/en/docs/line-login-sdks/android-sdk/integrate-line-login/)를 참조하십시오.

   친구 추가 옵션 사용에 대한 자세한 내용은 [SDK로 친구 추가 옵션 활성화하기](https://developers.line.biz/en/docs/line-login-sdks/android-sdk/link-a-bot/)를 참조하십시오.

3. LINE Login을 사용합니다.

   앱에서 LINE Login을 사용하는 방법에 대한 자세한 내용은 [사용자 관리하기](https://developers.line.biz/en/docs/line-login-sdks/android-sdk/managing-users/) 및 [LINE SDK for Android 레퍼런스](https://developers.line.biz/en/reference/android-sdk/)를 참조하십시오.

   서버에서 LINE Login을 사용하는 방법에 대한 자세한 내용은 [액세스 토큰 관리하기](https://developers.line.biz/en/docs/line-login-sdks/android-sdk/managing-access-tokens/) 및 [LINE Login v2.1 API 레퍼런스](https://developers.line.biz/en/reference/line-login/)를 참조하십시오.

### 샘플 앱 체험하기 

스타터 앱을 사용하여 LINE Login이 어떻게 동작하는지 확인할 수 있습니다. 자세한 내용은 [샘플 앱 체험하기](https://developers.line.biz/en/docs/line-login-sdks/android-sdk/try-line-login/)를 참조하십시오.

## 이 가이드의 내용 

이 가이드는 앱에 LINE SDK를 통합하고 앱에서 SDK의 사용 가능한 API 기능을 사용하는 방법을 설명합니다. 이 가이드에서 다루는 주제의 개요는 다음 표를 참조하십시오.

| 제목 | 내용 |
| --- | --- |
| [LINE SDK for Android 개요](https://developers.line.biz/en/docs/line-login-sdks/android-sdk/overview/) | SDK의 기능과 SDK 사용을 위한 상위 단계 |
| [샘플 앱 체험하기](https://developers.line.biz/en/docs/line-login-sdks/android-sdk/try-line-login/) | 샘플 앱을 실행하는 방법 |
| [Android 앱에 LINE Login 통합하기](https://developers.line.biz/en/docs/line-login-sdks/android-sdk/integrate-line-login/) | 프로젝트에 LINE SDK를 통합하고 LINE Login을 활용하여 앱의 사용자 경험을 개선하는 방법 |
| [SDK로 친구 추가 옵션 활성화하기](https://developers.line.biz/en/docs/line-login-sdks/android-sdk/link-a-bot/) | 사용자에게 LINE 공식 계정을 친구로 추가하는 옵션을 표시하고, LINE 공식 계정과 사용자 간의 친구 관계 상태를 가져오는 방법 |
| [사용자 관리하기](https://developers.line.biz/en/docs/line-login-sdks/android-sdk/managing-users/) | 사용자 프로필을 가져오고, ID 토큰으로 사용자 데이터를 가져오고, 사용자를 로그아웃시키는 방법 |
| [액세스 토큰 관리하기](https://developers.line.biz/en/docs/line-login-sdks/android-sdk/managing-access-tokens/) | 액세스 토큰을 갱신 및 검증하고 현재 액세스 토큰을 가져오는 방법 |
| [오류 처리](https://developers.line.biz/en/docs/line-login-sdks/android-sdk/handling-errors/) | SDK가 반환하는 오류 |
| [LINE SDK v5 for Android 레퍼런스](https://developers.line.biz/en/reference/android-sdk/) | SDK에서 사용 가능한 인터페이스와 클래스에 대한 상세 정보 |

## 기타 리소스 

| 제목 | 내용 |
| --- | --- |
| [LINE SDK for Android 릴리스 노트](https://developers.line.biz/en/docs/line-login-sdks/android-sdk/release-notes/) | SDK 변경 로그 |
| [LINE API SDK](https://developers.line.biz/en/docs/downloads/) | LINE SDK 다운로드 링크 |
