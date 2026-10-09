# Android 앱에 LINE Login 통합하기

이 문서에서는 기존 Android 앱에 LINE SDK for Android를 통합하여 [LINE Login](https://developers.line.biz/en/docs/line-login/overview/)을 구현하는 방법을 설명합니다. LINE Login으로 할 수 있는 기능을 확인하려면 [샘플 앱 체험하기](https://developers.line.biz/en/docs/line-login-sdks/android-sdk/try-line-login/)를 읽고 Android용 LINE Login 샘플 앱을 사용해 보십시오.

## 사전 요구 사항 

LINE SDK for Android를 빌드하고 사용하려면 다음이 필요합니다.

- [프로바이더](https://developers.line.biz/en/glossary/#provider)와 LINE Login 채널. LINE Developers Console에서 [둘 다 만들 수 있습니다](https://developers.line.biz/console/register/line-login/channel/).
- `minSdkVersion`을 24 이상(Android 7.0 이상)으로 설정합니다.

<!-- tip start -->

**minSdkVersion을 24 미만(Android 7.0 미만)으로 설정하기**

`minSdkVersion`을 24 미만(Android 7.0 미만)으로 설정하려면 이전 버전의 LINE SDK for Android를 사용하십시오. 자세한 내용은 [Releases](https://github.com/line/line-sdk-android/releases)를 참조하십시오.

<!-- tip end -->

<!-- note start -->

**리소스 이름 충돌**

SDK의 리소스와 충돌할 수 있으므로 `linesdk_`로 시작하는 리소스 ID를 사용하지 마십시오.

<!-- note end -->

## 이전 SDK 버전에서 업그레이드하기 

LINE SDK v4.x 이하에서 업그레이드하는 경우, 현재 버전에는 다음과 같은 주요 차이점이 있다는 점을 알아 두면 도움이 됩니다.

- 로그인을 시작할 때 앱이 접근할 수 있는 사용자 데이터를 결정하기 위해 [스코프(Scope)](https://developers.line.biz/en/docs/line-login/integrate-line-login/#scopes)를 지정해야 합니다.
- 로그인 시 `OPENID_CONNECT` 스코프를 지정하면 사용자의 신원을 안전하게 검증할 수 있는 [ID 토큰](https://developers.line.biz/en/docs/line-login-sdks/android-sdk/managing-users/#get-id-token)을 받을 수 있습니다.

## LINE SDK 종속성 추가하기 

LINE SDK for Android를 통합하려면 프로젝트에 필요한 라이브러리를 가져오고 아래 단계에 따라 프로젝트의 Android 매니페스트 파일을 구성하십시오.

### 프로젝트에 라이브러리 가져오기 

모듈 수준의 `build.gradle` 파일에 LINE SDK 종속성을 추가하십시오.

[![Maven Central](https://img.shields.io/maven-central/v/com.linecorp.linesdk/linesdk.svg?label=Maven%20Central){:zoom="false"}](https://central.sonatype.com/artifact/com.linecorp.linesdk/linesdk)

```groovy
repositories {
   ...
   mavenCentral()
}

dependencies {
    ...
    implementation 'com.linecorp.linesdk:linesdk:latest.release'
    ...
}
```

### Android 컴파일 옵션 추가하기 

Java 1.8 지원을 활성화하십시오. 위와 같은 `build.gradle` 파일에 다음을 추가하십시오.

```
android {
...
  compileOptions {
        sourceCompatibility JavaVersion.VERSION_1_8
        targetCompatibility JavaVersion.VERSION_1_8
    }
...
}
```

## Android 매니페스트 파일 설정하기 

앱이 인터넷 접근을 필요로 함을 지정하려면 `AndroidManifest.xml` 파일에 `INTERNET` 권한을 추가하십시오.

```xml
<uses-permission android:name="android.permission.INTERNET"/>
```

<!-- note start -->

**참고**

로그인을 호출하는 액티비티의 실행 모드가 `singleInstance`로 설정되어 있지 않은지 확인하십시오. 그렇지 않으면 액티비티가 `onActivityResult` 콜백을 받지 못할 수 있습니다.

<!-- note end -->

## 앱과 채널 연결하기 

앱을 LINE Login 채널에 연결하려면 [LINE Developers Console](https://developers.line.biz/console/)에서 채널 설정의 **LINE Login** 탭에 있는 **Mobile app**을 활성화하고 다음 항목을 입력하십시오.

- **Package names:** 필수. Google Play 스토어를 실행하는 데 사용되는 애플리케이션의 패키지 이름입니다.
- **Package signatures:** 선택. 각 서명을 새 줄에 입력하여 여러 서명을 설정할 수 있습니다.
- **Android URL scheme:** 선택. 앱을 실행하는 데 사용되는 사용자 정의 URL 스킴입니다.

![Android Package names, Package signatures, and URL scheme settings.](https://developers.line.biz/media/line-login/integrate-login-android/android-app-settings.png)

### 패키지 서명 설정하기 

패키지 서명은 앱과 LINE 앱 간의 인증 상호 작용을 강화하는 데 매우 중요합니다. 패키지 서명에는 디버그 패키지 서명과 릴리스 패키지 서명, 두 가지 유형이 있습니다. 두 서명 모두 SHA-1 형식의 키 해시와 관련됩니다.

#### 디버그 패키지 서명 

디버그 패키지 서명은 앱을 실행하거나 디버깅할 때 Android Studio가 자동으로 생성하는 디버그 인증서로부터 만들어집니다.

```bash
# For macOS
keytool -exportcert -alias androiddebugkey -keystore ~/.android/debug.keystore -storepass android -keypass android | openssl sha1

# For Windows
keytool -exportcert -alias androiddebugkey -keystore %USERPROFILE%\.android\debug.keystore -storepass android -keypass android | openssl sha1
```

#### 릴리스 패키지 서명 

릴리스 패키지 서명은 앱을 스토어에 배포할 때 사용하는 릴리스 인증서로부터 만들어집니다. `<RELEASE_KEY_ALIAS>`와 `<RELEASE_KEY_PATH>`를 실제 릴리스 키 별칭과 경로로 바꾸십시오.

```bash
keytool -exportcert -alias <RELEASE_KEY_ALIAS> -keystore <RELEASE_KEY_PATH> | openssl sha1
```

#### Google Play Console을 사용하여 릴리스 키 해시 가져오기 

[Play 앱 서명](https://developer.android.com/studio/publish/app-signing?hl=en#app-signing-google-play)을 사용하는 경우, 터미널에서 릴리스 키 해시를 생성하는 대신 Google Play Console에서 얻은 SHA-1 인증서 지문을 사용하십시오. 자세한 내용은 Play Console 도움말의 [Play 앱 서명 사용하기](https://support.google.com/googleplay/android-developer/answer/9842756?hl=en)를 참조하십시오.

Google Play Console에서 **Setup** > **App signing**으로 이동한 다음 SHA-1 인증서 지문 값을 복사하십시오.

## LINE Login 버튼 추가하기 

사용자가 Android 앱에 로그인할 수 있도록, LINE 브랜드 로그인 버튼을 만들어 사용자가 인증 및 권한 부여 과정을 거치도록 할 수 있습니다.

로그인 버튼을 추가하는 방법은 두 가지입니다.

- [LINE SDK의 기본 제공 로그인 버튼 사용하기](https://developers.line.biz/en/docs/line-login-sdks/android-sdk/integrate-line-login/#use-button)
- [사용자 정의 로그인 버튼 사용하기](https://developers.line.biz/en/docs/line-login-sdks/android-sdk/integrate-line-login/#use-code)

### LINE SDK의 기본 제공 로그인 버튼 사용하기 

LINE SDK는 미리 정의된 로그인 버튼을 제공합니다. 다음과 같이 앱의 사용자 인터페이스에 로그인 버튼을 추가하여 사용자에게 빠른 로그인 방법을 제공할 수 있습니다.

1. 레이아웃 XML 파일에 로그인 버튼을 추가합니다.

   ```xml
   <com.linecorp.linesdk.widget.LoginButton
       android:id="@+id/line_login_btn"
       android:layout_width="match_parent"
       android:layout_height="wrap_content" />
   ```

1. 액티비티 또는 프래그먼트에서 뷰를 찾고, 필요한 매개변수를 설정한 다음 리스너를 할당합니다.

   ```java
   import java.util.Arrays;

   // A delegate for delegating the login result to the internal login handler.
   private LoginDelegate loginDelegate = LoginDelegate.Factory.create();

   LoginButton loginButton = rootView.findViewById(R.id.line_login_btn);

   // if the button is inside a Fragment, this function should be called.
   loginButton.setFragment(this);

   loginButton.setChannelId(channelIdEditText.getText().toString());

   // configure whether login process should be done by Line App, or inside WebView.
   loginButton.enableLineAppAuthentication(true);

   // set up required scopes and nonce.
   loginButton.setAuthenticationParams(new LineAuthenticationParams.Builder()
           .scopes(Arrays.asList(Scope.PROFILE))
           // .nonce("<a randomly-generated string>") // nonce can be used to improve security
           .build()
   );
   loginButton.setLoginDelegate(loginDelegate);
   loginButton.addLoginListener(new LoginListener() {
       @Override
       public void onLoginSuccess(@NonNull LineLoginResult result) {
           Toast.makeText(getContext(), "Login success", Toast.LENGTH_SHORT).show();
       }

       @Override
       public void onLoginFailure(@Nullable LineLoginResult result) {
           Toast.makeText(getContext(), "Login failure", Toast.LENGTH_SHORT).show();
       }
   });
   ```

### 사용자 정의 로그인 버튼 사용하기 

기본 로그인 버튼 대신 자체 코드로 사용자 인터페이스와 로그인 과정을 직접 사용자 정의할 수도 있습니다.

#### 이미지 다운로드 및 프로젝트에 추가하기 

LINE Login 버튼 이미지 세트에는 iOS, Android, 데스크톱 애플리케이션용 이미지가 포함되어 있습니다. Android용 이미지 세트에는 여러 화면 밀도와 버튼 상태에 대한 이미지가 포함되어 있습니다. 이 가이드에서는 Android 폴더의 "base" 및 "pressed" 로그인 버튼 이미지를 사용합니다.

1. [LINE Login 버튼 이미지](https://vos.line-scdn.net/line-developers/docs/media/line-login/login-button/LINE_Login_Button_Image.zip)를 다운로드하여 압축을 풉니다.
2. 화면 밀도별로 "base" 및 "pressed" 로그인 버튼 이미지를 `drawable` 폴더에 추가합니다.

#### 이미지 구성하기 

이미지를 사용하기 전에 사용할 로그인 버튼 텍스트를 추가해야 합니다. 언어별로 권장하는 로그인 버튼 텍스트는 [LINE Login 버튼 디자인 가이드라인](https://developers.line.biz/en/docs/line-login/login-button/)을 참조하십시오. 또한 LINE 아이콘이 왜곡되지 않도록 버튼 텍스트를 추가할 신축 가능한 영역을 정의해야 합니다.

1. 각 이미지에 대해 [9-patch 파일](https://developer.android.com/guide/topics/resources/drawable-resource#NinePatch#NinePatch)을 만들고 로그인 버튼 텍스트를 위한 신축 영역을 정의합니다.
2. 원하는 로그인 버튼 텍스트를 가진 클릭 가능한 텍스트 뷰로 앱의 로그인 화면에 버튼을 추가합니다.
3. drawable 폴더에 선택기(selector) XML 파일을 추가하여 텍스트 뷰의 상태에 대응하는 이미지를 정의합니다.

## 로그인 액티비티 시작하기 

사용자가 로그인 버튼을 누르면 앱은 `getLoginIntent()`를 호출하여 로그인 인텐트를 가져오고 로그인 액티비티를 시작합니다. 이 메서드에는 컨텍스트와 채널 ID를 전달해야 합니다. 기기에 LINE이 설치되어 있으면 사용자의 LINE 자격 증명을 묻지 않고 LINE이 열려 로그인을 수행합니다. LINE이 설치되어 있지 않으면 사용자는 브라우저의 LINE Login 화면으로 이동하여 LINE 자격 증명(이메일 주소와 비밀번호)을 입력합니다.

1. 버튼이 눌리는 것을 감지하기 위해 클릭 리스너를 설정합니다.
1. `onClick` 콜백에서 `LineLoginApi`의 `getLoginIntent()` 메서드를 호출하여 로그인 액티비티를 시작할 로그인 인텐트를 가져옵니다.
1. 로그인 인텐트와 요청 코드를 매개변수로 전달하여 `startActivityForResult()`를 호출함으로써 인증 과정을 시작합니다. 요청 코드는 요청을 식별하는 데 사용되는 정수입니다.

다음은 사용자가 로그인 버튼을 눌렀을 때 사용자를 로그인시키는 액티비티를 시작하는 예시입니다.

```java
private static final int REQUEST_CODE = 1;
...

final TextView loginButton = (TextView) findViewById(R.id.login_button);
loginButton.setOnClickListener(new View.OnClickListener() {

    public void onClick(View view) {
        try {
            // App-to-app login
            Intent loginIntent = LineLoginApi.getLoginIntent(
              view.getContext(),
              Constants.CHANNEL_ID,
              new LineAuthenticationParams.Builder()
                .scopes(Arrays.asList(Scope.PROFILE))
                        // .nonce("<a randomly-generated string>") // nonce can be used to improve security
                .build());
            startActivityForResult(loginIntent, REQUEST_CODE);
        }
        catch(Exception e) {
            Log.e("ERROR", e.toString());
        }
    }
});
```

<!-- note start -->

**참고**

앱 간 로그인을 사용하지 않고 사용자가 브라우저의 LINE Login 화면을 통해 로그인하도록 하려면 `getLoginIntentWithoutLineAppAuth()` 메서드를 사용하십시오.

<!-- note end -->

## 로그인 결과 처리하기 

사용자가 로그인하면 로그인 결과가 액티비티의 `onActivityResult()` 메서드로 반환됩니다. 앱은 로그인 결과를 처리하기 위해 이 메서드를 재정의해야 합니다.

`LineLoginResult` 객체의 `getResponseCode()` 메서드를 사용하여 로그인 성공 여부를 확인하십시오. `getResponseCode()`가 `SUCCESS`를 반환하면 로그인에 성공한 것입니다. 그 밖의 값은 실패를 나타냅니다. 발생한 오류 유형을 확인하려면 [오류 처리](https://developers.line.biz/en/docs/line-login-sdks/android-sdk/handling-errors/)를 참조하십시오.

앱에서 로그인 결과를 처리하는 예시는 다음과 같습니다.

```java
public void onActivityResult(int requestCode, int resultCode, Intent data) {
    super.onActivityResult(requestCode, resultCode, data);
    if (requestCode != REQUEST_CODE) {
        Log.e("ERROR", "Unsupported Request");
        return;
    }

    LineLoginResult result = LineLoginApi.getLoginResultFromIntent(data);

    switch (result.getResponseCode()) {

        case SUCCESS:
            // Login successful
            String accessToken = result.getLineCredential().getAccessToken().getTokenString();

            Intent transitionIntent = new Intent(this, PostLoginActivity.class);
            transitionIntent.putExtra("line_profile", result.getLineProfile());
            transitionIntent.putExtra("line_credential", result.getLineCredential());
            startActivity(transitionIntent);
            break;

        case CANCEL:
            // Login canceled by user
            Log.e("ERROR", "LINE Login Canceled by user.");
            break;

        default:
            // Login canceled due to other error
            Log.e("ERROR", "Login FAILED!");
            Log.e("ERROR", result.getErrorData().toString());
    }
}
```

### 액세스 토큰 가져오기 

로그인 결과에는 사용자의 액세스 토큰을 담고 있는 `LineCredential()` 객체가 포함되어 있습니다. 위 예시와 같이 다음 코드로 액세스 토큰을 가져올 수 있습니다.

```java
String accessToken = result.getLineCredential().getAccessToken().getTokenString();
```

### 로그인 직후 사용자 프로필 가져오기 

LINE SDK는 로그인 시 사용자의 프로필 정보를 자동으로 가져옵니다. 사용자의 프로필 정보에는 표시 이름, 사용자 ID, 상태 메시지, 프로필 미디어 URL이 포함됩니다. 이 정보는 `LineLoginResult` 객체의 `getLineProfile()` 메서드를 호출하여 가져올 수 있습니다. 위 예시에서 다음 코드 조각은 로그인 결과에서 사용자 프로필 정보를 가져와 인텐트에 전달하는 방법을 보여줍니다.

```java
transitionIntent.putExtra("display_name", result.getLineProfile().getDisplayName());
transitionIntent.putExtra("status_message", result.getLineProfile().getStatusMessage());
transitionIntent.putExtra("user_id", result.getLineProfile().getUserId());
transitionIntent.putExtra("picture_url", result.getLineProfile().getPictureUrl().toString());
```

사용자 ID는 개별 프로바이더 안에서만 고유합니다. 같은 LINE 사용자라도 프로바이더가 다르면 사용자 ID가 다릅니다. 서로 다른 프로바이더에 걸쳐 사용자를 식별하는 데 사용자 ID를 사용하지 마십시오.

### 서버에서 사용자 데이터 사용하기 

<!-- warning start -->

**사용자 사칭**

클라이언트가 백엔드 서버로 보낸 사용자 ID나 `LineProfile` 객체의 다른 정보를 신뢰하지 마십시오. 악의적인 클라이언트는 임의의 사용자 ID나 잘못된 형식의 정보를 서버로 보내 사용자를 사칭할 수 있습니다.

대신 클라이언트는 액세스 토큰을 서버로 보내고, 서버는 이 토큰을 사용하여 사용자 데이터를 가져와야 합니다.

<!-- warning end -->

일반적으로 백엔드 서버는 사용자 ID, 표시 이름 또는 기타 LINE 계정 속성을 기반으로 사용자의 신원을 확인합니다. 그러나 이러한 정보를 클라이언트에서 서버로 직접 보내는 대신, 클라이언트는 액세스 토큰을 보내야 합니다. 그런 다음 서버는 이를 사용하여 LINE 플랫폼 서버에 대해 사용자의 신원을 안전하게 검증해야 합니다.

액세스 토큰에 대한 자세한 내용은 [액세스 토큰 가져오기](https://developers.line.biz/en/docs/line-login-sdks/android-sdk/integrate-line-login/#get-access-token)를 참조하십시오.

백엔드에서 호출할 API에 대한 자세한 내용은 다음 페이지를 참조하십시오.

- [액세스 토큰 유효성 검증](https://developers.line.biz/en/reference/line-login/#verify-access-token)
- [사용자 프로필 가져오기](https://developers.line.biz/en/reference/line-login/#get-user-profile)

## `LineApiClient` 인터페이스 사용하기 

`LineApiClient` 인터페이스의 메서드를 호출하여 SDK를 사용합니다. 이를 위해 `lineApiClient` 객체의 정적 변수를 만들고 초기화하십시오.

1. 다양한 메서드를 호출하기 위해 객체의 정적 변수를 만듭니다.

   ```java
   private static LineApiClient lineApiClient;
   ```

2. 아래와 같이 액티비티의 `onCreate()` 메서드에서 `lineApiClient` 변수를 초기화합니다. 초기화에는 채널 ID와 컨텍스트가 필요합니다.

   ```java
   LineApiClientBuilder apiClientBuilder = new LineApiClientBuilder(getApplicationContext(), "your channel id here");
   lineApiClient = apiClientBuilder.build();
   ```

<!-- note start -->

**참고**

LINE SDK for Android의 모든 메서드는 네트워크 작업을 수행하므로, 메인 스레드에서 호출하면 `NetworkOnMainThreadException`이 발생합니다. 이 문제를 피하려면 `AsyncTask`를 사용하여 메서드를 호출하십시오.

<!-- note end -->
