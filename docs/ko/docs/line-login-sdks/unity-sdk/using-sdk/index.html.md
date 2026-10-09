# 결과 처리와 기타 API에 LINE SDK 사용하기

## 결과 처리와 함께 LINE API 호출하기 

실패할 수 있는 LINE SDK for Unity의 모든 API 작업은 콜백에서 `Result` 객체를 제공합니다. 결과 값을 확인하여 성공과 실패 사례를 모두 깔끔하게 처리할 수 있습니다.

```csharp
LineSDK.Instance.Login(scopes, result => {
    result.Match(
        value => {
            Debug.Log("Login OK");
        },
        error => {
            Debug.Log("Login failed, error code: " + error.Code);
        }
    );
});
```

`error` 분기에서 모든 `Error` 객체에는 오류 `Code`가 포함됩니다. 오류 코드는 플랫폼마다 다릅니다. 자세한 내용은 다음 페이지를 참고하십시오.

- [Handling errors for LINE SDK for iOS Swift](https://developers.line.biz/en/docs/line-login-sdks/ios-sdk/swift/error-handling/)
- [Handling errors for LINE SDK for Android](https://developers.line.biz/en/docs/line-login-sdks/android-sdk/handling-errors/)
- [Error API reference and definition for Swift](https://developers.line.biz/en/reference/ios-sdk-swift/Enums/LineSDKError.html)
- [Error API reference and definition for Android](https://developers.line.biz/en/reference/android-sdk/reference/com/linecorp/linesdk/LineApiResponseCode.html)

## 사용자 프로필 가져오기 

로그인 요청에 `profile` 스코프를 포함하면 사용자의 LINE 프로필 정보를 가져올 수 있습니다. 사용자 프로필에는 사용자 ID, 표시 이름, 프로필 미디어(이미지 또는 동영상), 상태 메시지가 포함됩니다.

아래와 같이 `LineAPI.GetProfile` 메서드를 호출합니다.

```csharp
LineAPI.GetProfile(result => {
    result.Match(
        value => {
            Debug.Log("User ID: " + value.UserId);
            Debug.Log("User Display Name: " + value.DisplayName);
            Debug.Log("User Status Message: " + value.StatusMessage);
            Debug.Log("User Icon: " + value.PictureUrl);
        },
        error => {
            Debug.Log(error.Message);
        }
    );
});
```

### 사용자 로그아웃 처리하기 

앱에서 사용자를 로그아웃시킬 수 있습니다. 더 나은 사용자 경험을 위해 사용자가 앱에서 로그아웃할 수 있는 방법을 제공하는 것을 권장합니다.

`Logout` 메서드를 호출하면 사용자의 액세스 토큰이 무효화되고 앱에서 로그아웃됩니다. 로그아웃 후에는 사용자가 다시 로그인 과정을 거쳐야 합니다.

```csharp
LineSDK.Instance.Logout(result => {
    result.Match(
        _ => { /* User logout done. Update UI. */ },
        error => {
            Debug.Log(error.Message);
        }
    );
});
```

### 액세스 토큰 가져오기 

서버 측 코드는 액세스 토큰을 사용하여 LINE Login API를 호출할 수 있습니다. 자세한 내용은 [LINE Login v2.1 API 레퍼런스](https://developers.line.biz/en/reference/line-login/)를 참고하십시오.

현재 액세스 토큰을 가져오려면 아래와 같이 `LineSDK` 인스턴스의 `CurrentAccessToken` 속성을 사용합니다.

```csharp
var currentToken = LineSDK.Instance.CurrentAccessToken;
if (currentToken != null) {
    Debug.Log("Current token value: " + currentToken.Value);
}
```

<!-- note start -->

**Note**

액세스 토큰을 서버로 보낼 때는 액세스 토큰을 암호화하고 SSL을 사용하여 암호화된 데이터를 전송하는 것을 권장합니다. 또한 서버가 받은 액세스 토큰이 LINE Login 호출에 사용된 액세스 토큰과 일치하는지, 그리고 채널 ID가 자신의 채널과 일치하는지 확인해야 합니다.

<!-- note end -->

### 액세스 토큰 검증 및 갱신하기 

`CurrentAccessToken`이 null이 아닌 값을 반환하더라도 액세스 토큰이 유효하다는 보장은 없습니다. 액세스 토큰이 이미 만료되었거나 취소되었을 수 있습니다. `LineAPI.VerifyToken`을 사용하면 현재 액세스 토큰이 여전히 유효한지 확인할 수 있습니다.

```csharp
LineAPI.VerifyAccessToken(result => {
    result.Match(
        value => {
            Debug.Log("Channel Id bound to the token: " + value.ChannelId);
        },
        error => {
            Debug.Log("The token verifying failed: " + error.Message);
        }
    );
});
```

`LineAPI`를 통해 API 요청을 보내면 LINE SDK가 만료된 액세스 토큰을 자동으로 갱신합니다. 다만 토큰이 장기간 만료된 상태라면 갱신이 실패합니다. 이 경우 오류가 발생하며 사용자가 다시 로그인해야 합니다.

직접 액세스 토큰을 갱신하지 않는 것을 권장합니다. LINE SDK가 액세스 토큰을 자동으로 관리하도록 두는 것이 더 쉽고 안전합니다. 그래도 직접 갱신해야 한다면 아래와 같이 할 수 있습니다.

```csharp
LineAPI.RefreshAccessToken(result => {
    result.Match(
        token => {
            Debug.Log("Token refreshed. New token: " + token.Value);
        },
        error => {
            Debug.Log("Something wrong when refreshing token: " + error.Message);
        }
    );
});
```
