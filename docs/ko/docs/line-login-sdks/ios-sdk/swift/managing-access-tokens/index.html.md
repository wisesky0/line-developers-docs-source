# 액세스 토큰 관리하기

이 문서에서는 다음 액세스 토큰 관리 작업을 수행하는 방법을 설명합니다.

- [액세스 토큰 갱신하기](https://developers.line.biz/en/docs/line-login-sdks/ios-sdk/swift/managing-access-tokens/#refresh-token)
- [현재 액세스 토큰 가져오기](https://developers.line.biz/en/docs/line-login-sdks/ios-sdk/swift/managing-access-tokens/#get-current-token)
- [액세스 토큰 검증하기](https://developers.line.biz/en/docs/line-login-sdks/ios-sdk/swift/managing-access-tokens/#verify-access-token)

<!-- tip start -->

**안전한 로그인 과정 만들기**

사용자 등록과 로그인을 안전하게 처리하는 일반적인 권장 사항은 [앱과 서버 간 안전한 로그인 과정 만들기](https://developers.line.biz/en/docs/line-login/secure-login-process/)를 참고하세요.

<!-- tip end -->

## 액세스 토큰 갱신하기 

LINE SDK는 인증에 성공한 후 사용자의 유효한 액세스 토큰을 저장하고, 이를 API 요청에 사용합니다. 아래와 같이 액세스 토큰의 만료 날짜를 확인할 수 있습니다.

```swift
if let token = AccessTokenStore.shared.current {
    print("Token expires at:\(token.expiresAt)")
}
```

`API` 타입을 통해 API 요청을 하면 LINE SDK가 만료된 액세스 토큰을 자동으로 갱신합니다. 다만 토큰이 만료된 지 오래되었다면 갱신 작업이 실패합니다. 이 경우 오류가 발생하며, 사용자가 다시 로그인해야 합니다. 자세한 내용은 [오류 처리하기](https://developers.line.biz/en/docs/line-login-sdks/ios-sdk/swift/error-handling/)를 참고하세요.

<!-- note start -->

**액세스 토큰 자동 갱신**

`API` 타입의 메서드만 액세스 토큰을 자동으로 갱신합니다. `API.Auth`와 같은 다른 타입의 메서드는 액세스 토큰 자동 갱신을 트리거하지 않습니다.

<!-- note end -->

액세스 토큰을 직접 갱신하지 않는 것을 **권장합니다**. LINE SDK가 액세스 토큰을 자동으로 관리하게 하는 것이 더 쉽고 향후 변경에도 안전합니다. 하지만 필요한 경우 아래와 같이 액세스 토큰을 수동으로 갱신할 수 있습니다.

```swift
API.Auth.refreshAccessToken { result in
    switch result {
    case .success(let token):
        print("Token Refreshed: \(token)")
    case .failure(let error):
        print(error)
    }
}
```

## 현재 액세스 토큰 가져오기 

클라이언트-서버 애플리케이션을 만들 때는 액세스 토큰을 사용해 앱과 서버 간에 사용자 데이터를 전송합니다.

앱에서 액세스 토큰을 가져와 서버로 보내면, 해당 서버에서 LINE Login API를 호출할 수 있습니다.

자세한 내용은 [LINE Login v2.1 API 레퍼런스](https://developers.line.biz/en/reference/line-login/)를 참고하세요.

LINE SDK가 앱에 저장한 액세스 토큰을 가져오려면 공유 `AccessTokenStore` 객체의 `current` 속성을 다음과 같이 사용합니다.

```swift
if let token = AccessTokenStore.shared.current {
    print(token.value)
}
```

<!-- note start -->

**참고**

액세스 토큰을 서버로 보낼 때는 토큰을 암호화하고 SSL을 사용해 암호화된 데이터를 전송하는 것을 권장합니다. 또한 서버가 받은 액세스 토큰이 LINE Login을 호출할 때 사용한 액세스 토큰과 일치하는지, 그리고 채널 ID가 사용자의 채널 ID와 일치하는지 확인해야 합니다.

<!-- note end -->

## 액세스 토큰 검증하기 

현재 액세스 토큰이 유효한지 확인하려면 `API.Auth.verifyAccessToken` 메서드를 호출합니다. 이 메서드는 결과를 담은 `AccessTokenVerifyResult` 객체를 반환합니다. 토큰 검증에 성공하면 응답에 `channelID`, `permissions`, `expiresIn` 등의 속성이 포함됩니다. 그렇지 않으면 토큰이 유효하지 않거나, 취소되었거나, 만료된 것이며 오류가 반환됩니다.

```swift
API.Auth.verifyAccessToken { result in
    switch result {
    case .success(let value):
        print(value.channelID) // Bound channel ID of the token.
        print(value.permissions) // The permissions of this token.
        print(value.expiresIn) // How long it is before the token expires.
    case .failure(let error):
        print(error)
    }
}
```
