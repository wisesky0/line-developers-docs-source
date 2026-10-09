# 액세스 토큰 관리하기

이 문서에서는 다음과 같은 액세스 토큰 관리 작업을 수행하는 방법을 설명합니다.

- [액세스 토큰 갱신하기](https://developers.line.biz/en/docs/line-login-sdks/android-sdk/managing-access-tokens/#refresh-token)
- [현재 액세스 토큰 가져오기](https://developers.line.biz/en/docs/line-login-sdks/android-sdk/managing-access-tokens/#get-current-token)
- [액세스 토큰 검증하기](https://developers.line.biz/en/docs/line-login-sdks/android-sdk/managing-access-tokens/#verify-access-token)

<!-- tip start -->

**안전한 로그인 과정 만들기**

사용자 등록 및 로그인을 안전하게 처리하기 위한 일반적인 권장 사항은 [앱과 서버 간의 안전한 로그인 과정 만들기](https://developers.line.biz/en/docs/line-login/secure-login-process/)를 참조하십시오.

<!-- tip end -->

## 액세스 토큰 갱신하기 

LINE SDK는 인증에 성공한 사용자의 유효한 액세스 토큰을 저장하고, 이를 API 요청에 사용합니다. 다음과 같이 액세스 토큰의 유효 기간을 확인할 수 있습니다.

```java
LineAccessToken accessToken = lineApiClient.getCurrentAccessToken().getResponseData();
Log.i(TAG, accessToken.getExpiresInMillis());
```

API 요청을 보낼 때 LINE SDK는 `LineApiClient` 인터페이스를 통해 만료된 액세스 토큰을 자동으로 갱신합니다. 다만 토큰이 오랫동안 만료된 상태라면 갱신 작업이 실패합니다. 이 경우 오류가 발생하며 사용자가 다시 로그인해야 합니다.

직접 액세스 토큰을 갱신하는 것은 **권장하지 않습니다**. LINE SDK의 자동 액세스 토큰 관리는 향후 업그레이드 시 더 쉽고 안전합니다. 그래도 다음과 같이 액세스 토큰을 수동으로 갱신할 수 있습니다.

```java
LineAccessToken newAccessToken = lineApiClient.refreshAccessToken().getResponseData();
```

## 현재 액세스 토큰 가져오기 

클라이언트-서버 애플리케이션을 만들 때는 액세스 토큰을 사용하여 앱과 서버 간에 사용자 데이터를 전송합니다. 앱에서 액세스 토큰을 얻어 서버로 보내면, 해당 서버에서 LINE Login API를 호출할 수 있습니다. 자세한 내용은 [LINE Login v2.1 API 레퍼런스](https://developers.line.biz/en/reference/line-login/)를 참조하십시오.

LINE SDK가 앱에 저장한 액세스 토큰을 가져오려면 `getCurrentAccessToken()` 메서드를 호출하십시오.

```java
String accessToken = lineApiClient.getCurrentAccessToken().getResponseData().getTokenString();
```

<!-- note start -->

**참고**

액세스 토큰을 SSL 연결을 통해 서버로 보내기 전에 암호화하는 것을 권장합니다.

서버에서 액세스 토큰을 사용하기 전에 다음 조건이 참인지 확인하십시오.

- 서버가 LINE Login API 호출에 사용된 것과 동일한 액세스 토큰을 받았는지 확인합니다.
- LINE Login API 호출에 사용된 채널 ID가 본인의 채널 ID와 일치하는지 확인합니다.

<!-- note end -->

## 액세스 토큰 검증하기 

앱에서 `verifyToken()` 메서드를 호출하여 LINE SDK가 저장한 액세스 토큰이 유효한지 검증하십시오. 이 메서드는 결과를 포함하는 `LineApiResponse` 객체를 반환합니다. 그다음 `isSuccess()` 메서드를 호출하여 토큰이 유효한지 확인할 수 있습니다.

`isSuccess()` 메서드가 `true`를 반환하면 토큰이 유효합니다. 그렇지 않으면 액세스 토큰이 유효하지 않거나 만료되었거나, LINE SDK의 LINE Login API 호출이 어떤 이유로든 실패한 것입니다.

`isSuccess()` 메서드가 `false`를 반환하면 `LineApiResponse.getErrorData()` 메서드로 `verifyToken()` 메서드가 실패한 이유를 확인할 수 있습니다. 이 경우 `getResponseData()` 메서드는 `null`을 반환합니다.

```java
LineApiResponse verifyResponse = lineApiClient.verifyToken();

if (verifyResponse.isSuccess()) {

    Log.i(TAG, "getResponseData: " + verifyResponse.getResponseData().toString());
    Log.i(TAG, "getResponseCode: " + verifyResponse.getResponseCode().toString());

    return true;
} else {

    Log.i(TAG, "getResponseCode: " + verifyResponse.getResponseCode());
    Log.i(TAG, "getErrorData: " + verifyResponse.getErrorData());

    return false;

}
```

액세스 토큰과 연결된 스코프 목록을 가져오려면 `LineApiResponse.getResponseData().getScopes()`를 호출하십시오. 다음 예시는 스코프 목록을 토스트로 표시하는 방법을 보여 줍니다.

```java
protected void onPostExecute(LineApiResponse response){
    if (response.isSuccess()){
        LineCredential lineCredential = response.getResponseData();
        List<Scope> scopes = lineCredential.getScopes();
        String scopesString = Scope.join(scopes);
        Toast.makeText(getApplicationContext(), scopesString, Toast.LENGTH_SHORT).show();
    }
}
```
