# 샘플 앱 체험하기

LINE Login 안드로이드 샘플 앱을 사용하면 [LINE Login](https://developers.line.biz/en/docs/line-login/overview/)이 안드로이드 앱에서 어떻게 동작하는지 빠르게 확인할 수 있습니다.

## 사전 요구 사항 

샘플 앱을 빌드하고 실행하려면 다음이 필요합니다.

- [Android Studio](https://developer.android.com/studio) 설치

## 샘플 앱 체험하기 

샘플 채널로 샘플 앱을 체험하려면 아래 단계를 따라 주세요.

1. [LINE SDK for Android 오픈소스 저장소](https://github.com/line/line-sdk-android)를 클론합니다.

    ```sh
    $ git clone https://github.com/line/line-sdk-android.git
    ```

1. Android Studio에서 LINE SDK 프로젝트를 엽니다.
1. 프로젝트를 빌드하고 안드로이드 기기 또는 Android Emulator에서 앱을 실행합니다.

<!-- tip start -->

**팁**

샘플 앱에는 샘플 채널 ID가 이미 정의되어 있으며, 그 값은 `1620019587`입니다. 따라서 다시 설정할 필요가 없습니다.

<!-- tip end -->

## 샘플 앱 실행하기 

안드로이드 기기 또는 Android Emulator에서 샘플 앱을 실행합니다. 처음 로그인할 때는 앱이 프로필 정보에 접근하는 것을 동의해야 합니다.

![LINE SDK 샘플 앱 메인 화면](https://developers.line.biz/media/line-login/try-line-login/line-sdk-sample-app-home-screen.webp)

### "Log in with LINE" 버튼 사용하기 

녹색 **Log in with LINE** 버튼을 탭하면 앱 간 로그인(app-to-app login)으로 로그인합니다. 이 버튼은 LINE SDK에 내장된 로그인 버튼입니다.

기기에 LINE이 설치되어 있고 이미 로그인되어 있다면, LINE 계정 정보를 입력하지 않아도 샘플 앱에 자동으로 로그인됩니다. 그렇지 않은 경우에는 기기의 브라우저를 통해 로그인하라는 안내가 표시됩니다. 이때는 LINE 계정 정보를 입력해야 합니다.

### "login" 버튼 사용하기 

현재 로그인되어 있지 않다면 **login** 버튼을 사용할 수 있습니다.
**login** 버튼을 탭하면 LINE 앱 간 로그인 과정이 시작됩니다.
로그인 방식과 과정은 SDK에 내장된 로그인 버튼과 같지만, `Scopes`와 같이 조정할 수 있는 옵션이 제공됩니다.
LINE SDK가 제공하는 `LineLoginApi` 클래스의 `getLoginIntent` 메서드를 참고할 수 있습니다.

<!-- note start -->

**참고**

기본으로 사용되는 Scopes는 `PROFILE`과 `OPENID_CONNECT`입니다.

<!-- note end -->

### "web login" 버튼 사용하기 

현재 로그인되어 있지 않다면 **web login** 버튼을 사용할 수 있습니다.
**web login** 버튼을 탭하면 브라우저에서 LINE 로그인 웹페이지가 열립니다.

### "logout" 버튼 사용하기 

로그인한 후에는 **logout** 버튼을 사용할 수 있습니다.
**logout** 버튼을 탭하면 현재 사용자가 로그아웃됩니다.

자세한 내용은 [사용자 로그아웃](https://developers.line.biz/en/docs/line-login-sdks/android-sdk/managing-users/#logout)을 참고하세요.

### LINE SDK에서 제공하는 기능 체험하기 

![LINE SDK 샘플 앱 API 목록 화면](https://developers.line.biz/media/line-login/try-line-login/line-sdk-sample-app-api-list-screen.webp)

앱에 로그인한 후 **API List Page** 버튼을 탭하면 LINE SDK의 다음 기능들을 체험할 수 있습니다.

- [사용자 프로필 가져오기](https://developers.line.biz/en/docs/line-login-sdks/android-sdk/managing-users/#get-profile)
- [현재 액세스 토큰 가져오기](https://developers.line.biz/en/docs/line-login-sdks/android-sdk/managing-access-tokens/#get-current-token)
- [액세스 토큰 갱신하기](https://developers.line.biz/en/docs/line-login-sdks/android-sdk/managing-access-tokens/#refresh-token)
- [액세스 토큰 검증하기](https://developers.line.biz/en/docs/line-login-sdks/android-sdk/managing-access-tokens/#verify-access-token)
- [LINE Login을 사용해 친구 관계 상태 가져오기](https://developers.line.biz/en/docs/line-login-sdks/android-sdk/link-a-bot/#use-line-login-api)

각 SDK API 버튼을 클릭하면 페이지 상단 절반에서 응답을 확인할 수 있습니다.
