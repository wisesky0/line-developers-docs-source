# 사용자 관리하기

이 문서에서는 다음과 같은 사용자 관리 작업을 수행하는 방법을 설명합니다.

- [사용자 프로필 가져오기](https://developers.line.biz/en/docs/line-login-sdks/android-sdk/managing-users/#get-profile)
- [ID 토큰을 사용하여 사용자 신원 검증하기](https://developers.line.biz/en/docs/line-login-sdks/android-sdk/managing-users/#get-id-token)
- [사용자 로그아웃시키기](https://developers.line.biz/en/docs/line-login-sdks/android-sdk/managing-users/#logout)

<!-- tip start -->

**안전한 로그인 과정 만들기**

사용자 등록 및 로그인을 안전하게 처리하기 위한 일반적인 권장 사항은 [앱과 서버 간의 안전한 로그인 과정 만들기](https://developers.line.biz/en/docs/line-login/secure-login-process/)를 참조하십시오.

<!-- tip end -->

## 사용자 프로필 가져오기 

로그인 요청에 `Scope.PROFILE` 스코프를 포함했다면 사용자의 LINE 프로필 정보를 가져올 수 있습니다. 사용자 프로필에는 사용자 ID, 표시 이름, 프로필 미디어(이미지 또는 동영상), 상태 메시지가 포함됩니다.

다음과 같이 `LineApiClient.getProfile()` 메서드를 호출하십시오.

```java
LineProfile profile = lineApiClient.getProfile().getResponseData()
Log.i(TAG, profile.getDisplayName());
Log.i(TAG, profile.getUserId());
Log.i(TAG, profile.getStatusMessage());
Log.i(TAG, profile.getPictureUrl().toString());
```

`getDisplayName()`, `getPictureURL()`, `getStatusMessage()` 메서드는 로그인 시점의 값을 가져오며, 사용자는 LINE에서 언제든지 이 값을 변경할 수 있습니다. 사용자를 식별하려면 `getUserId()` 메서드를 사용하십시오. 이 메서드가 반환하는 사용자 ID는 변경되지 않습니다.

URL에 접미사를 추가하여 사용자 프로필 이미지의 크기를 변경할 수 있습니다.

이미지 크기 | 접미사
-|-
200 x 200 | /large
51 x 51 | /small

## ID 토큰을 사용하여 사용자 신원 검증하기 

[OpenID Connect](https://openid.net/developers/how-connect-works/) 1.0 사양은 OAuth 2.0 프로토콜 위에 구축된 ID 계층입니다. OpenID Connect를 사용하면 LINE 플랫폼과 정보를 안전하게 주고받을 수 있습니다. 현재 OpenID Connect 사양을 준수하는 ID 토큰을 발급하여 LINE 플랫폼에서 사용자 프로필과 이메일 주소를 가져올 수 있습니다.

### 이메일 권한 신청하기 

LINE Login으로 로그인한 사용자에게 앱이 이메일 주소를 가져올 수 있는 권한을 요청할 수 있습니다. 이를 위해서는 [LINE Developers Console](https://developers.line.biz/console/)에서 권한을 신청하십시오. 자세한 내용은 LINE Login 가이드의 [이메일 권한 신청하기](https://developers.line.biz/en/docs/line-login/integrate-line-login/#applying-for-email-permission)를 참조하십시오.

### OpenID 및 이메일 스코프로 로그인하기 

채널에 이메일 권한이 있으면 사용자가 `Scope.OPENID_CONNECT` 및 `Scope.OC_EMAIL` 스코프로 로그인하도록 하여 다음과 같이 ID 토큰에서 사용자의 이메일 주소를 가져올 수 있습니다.

```java
import java.util.Arrays;

private static final int REQUEST_CODE = 1;

LineAuthenticationParams params = new LineAuthenticationParams.Builder()
                                    .scopes(Arrays.asList(Scope.OPENID_CONNECT, Scope.OC_EMAIL))
                                    .build();

Intent loginIntent = LineLoginApi.getLoginIntent(
                        view.getContext(),
                        Constants.CHANNEL_ID,
                        params);

startActivityForResult(loginIntent, REQUEST_CODE);
```

ID 토큰은 서명된 [JSON 웹 토큰](https://datatracker.ietf.org/doc/html/rfc7519)입니다. LINE SDK는 잘못된 형식의 데이터를 방지하기 위해 서명과 유효 기간을 검사하여 토큰을 검증합니다. 검증을 통과하면 다음과 같이 `onActivityResult()` 콜백에서 `LineIdToken` 인스턴스를 가져올 수 있습니다.

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
            LineIdToken lineIdToken = result.getLineIdToken();
            Log.v("INFO", lineIdToken.getEmail());
    ...
    }
}
```

### 서버에서 ID 토큰 사용하기 

<!-- warning start -->

**사용자 사칭**

클라이언트가 백엔드 서버로 보낸 사용자 ID나 기타 정보를 신뢰하지 마십시오. 악의적인 클라이언트는 임의의 사용자 ID나 잘못된 형식의 정보를 서버로 보내 사용자를 사칭할 수 있습니다.

대신 클라이언트는 원시(raw) ID 토큰 문자열을 서버로 보내야 합니다. 서버는 ID 토큰 검증 API로 토큰을 검증한 후 사용자 ID나 기타 정보를 가져올 수 있습니다.

<!-- warning end -->

#### 원시 ID 토큰 문자열 보내기 

`Scope.OPENID_CONNECT` 스코프로 로그인할 때 `nonce` 매개변수에 사용자 정의 값을 할당할 수 있습니다.

```java
private static final int REQUEST_CODE = 1;
...
LineAuthenticationParams params = new LineAuthenticationParams.Builder()
                                  ...
                                  .nonce("<a randomly-generated string>")
                                  .build();

Intent loginIntent = LineLoginApi.getLoginIntent(
                        view.getContext(),
                        Constants.CHANNEL_ID,
                        params);

startActivityForResult(loginIntent, REQUEST_CODE);
```

직접 지정하지 않으면 LINE SDK가 `nonce` 값을 자동으로 할당하지만, 임의의 값을 생성하여 `nonce` 매개변수에 지정하는 것을 권장합니다. [ID 토큰을 검증](https://developers.line.biz/en/docs/line-login-sdks/android-sdk/managing-users/#verify-id-token-on-server)할 때 LINE Login API에 여기서 지정한 `nonce` 값을 사용할 수 있습니다. ID 토큰을 검증할 때 `nonce`를 사용하면 [재전송 공격(replay attack)](https://en.wikipedia.org/wiki/Replay_attack)을 방지하는 데 도움이 됩니다.

`Scope.OPENID_CONNECT` 스코프로 로그인에 성공한 후에는 다음과 같이 원시 ID 토큰 문자열을 가져올 수 있습니다.

```java
public void onActivityResult(int requestCode, int resultCode, Intent data) {
    ...
    LineLoginResult result = LineLoginApi.getLoginResultFromIntent(data);

    switch (result.getResponseCode()) {
        case SUCCESS:
            // Login successful
            LineIdToken lineIdToken = result.getLineIdToken();
            String idTokenStr = lineIdToken.getRawString();
            if (idTokenStr != null) {
                // Send `idTokenStr` to your server.
            } else {
                // Something went wrong. You should fail the login.
            }
    ...
}
```

여기서 얻은 `idTokenStr`을 백엔드 서버로 보내 [ID 토큰을 검증](https://developers.line.biz/en/docs/line-login-sdks/android-sdk/managing-users/#verify-id-token-on-server)하십시오.

#### 백엔드 서버에서 ID 토큰 검증하기 

ID 토큰을 받은 후 서버는 토큰과 해당 `nonce` 값을 LINE 플랫폼의 ID 토큰 검증 엔드포인트로 보내야 합니다. 토큰이 유효하면 API는 ID 토큰 클레임을 포함한 JSON 형식의 객체를 반환합니다.

백엔드 서버에서 호출할 API에 대한 자세한 내용은 다음을 참조하십시오.

- [ID 토큰 검증](https://developers.line.biz/en/reference/line-login/#verify-id-token)(LINE Login v2.1 API 레퍼런스)

### 사용자 데이터를 책임감 있게 처리하기 

앱이나 서버에 민감한 사용자 데이터를 평문으로 저장하거나, 안전하지 않은 HTTP 통신으로 전송하지 마십시오. 이러한 데이터에는 액세스 토큰, 사용자 ID, 사용자 이름, ID 토큰에 포함된 모든 정보가 포함됩니다. LINE SDK는 사용자의 액세스 토큰을 대신 저장합니다. 필요한 경우 인증 후 다음 코드로 액세스 토큰에 접근할 수 있습니다.

```java
LineAccessToken accessToken = lineApiClient.getCurrentAccessToken().getResponseData();
```

ID 토큰은 로그인 시에만 발급됩니다. ID 토큰을 업데이트하려면 사용자가 다시 로그인해야 합니다. 다만 로그인 요청에 `Scope.PROFILE` 스코프를 설정했다면 `LineApiClient.getProfile()` 메서드를 호출하여 사용자 프로필 정보를 가져올 수 있습니다.

## 사용자 로그아웃시키기 

앱에서 사용자를 로그아웃시킬 수 있습니다. 더 나은 사용자 경험을 위해 사용자가 앱에서 로그아웃할 수 있는 방법을 제공하는 것을 권장합니다.

액세스 토큰을 무효화하여 앱에서 사용자를 로그아웃시키려면 `logout()` 메서드를 호출하십시오. 액세스 토큰을 무효화하면 사용자가 앱에서 로그아웃됩니다. 로그아웃 후에는 사용자가 다시 로그인 과정을 거쳐야 합니다.

```java
lineApiClient.logout();
```
