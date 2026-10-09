# 사용자 관리하기

이 문서에서는 다음 사용자 관리 작업을 수행하는 방법을 설명합니다.

- [사용자 프로필 가져오기](https://developers.line.biz/en/docs/line-login-sdks/ios-sdk/swift/managing-users/#get-profile)
- [ID 토큰을 사용해 사용자 신원 확인하기](https://developers.line.biz/en/docs/line-login-sdks/ios-sdk/swift/managing-users/#get-id-token)
- [사용자 로그아웃시키기](https://developers.line.biz/en/docs/line-login-sdks/ios-sdk/swift/managing-users/#logout)

<!-- tip start -->

**안전한 로그인 과정 만들기**

사용자 등록과 로그인을 안전하게 처리하는 일반적인 권장 사항은 [앱과 서버 간 안전한 로그인 과정 만들기](https://developers.line.biz/en/docs/line-login/secure-login-process/)를 참고하세요.

<!-- tip end -->

## 사용자 프로필 가져오기 

로그인 요청에 `.profile` 스코프를 포함했다면 사용자의 LINE 프로필 정보를 가져올 수 있습니다. 사용자 프로필에는 사용자 ID, 표시 이름, 프로필 미디어(이미지 또는 동영상), 상태 메시지가 포함됩니다.

아래와 같이 `API.getProfile` 메서드를 호출합니다.

```swift
API.getProfile { result in
    switch result {
    case .success(let profile):
        print("User ID: \(profile.userID)")
        print("User Display Name: \(profile.displayName)")
        print("User Status Message: \(profile.statusMessage)")
        print("User Icon: \(String(describing: profile.pictureURL))")
    case .failure(let error):
        print(error)
    }
}
```

`API.getProfile` 메서드는 로그인 시점의 값을 가져옵니다. 사용자는 LINE에서 표시 이름, 프로필 미디어, 상태 메시지를 언제든지 변경할 수 있습니다. 사용자를 식별하려면 변경되지 않는 `userID` 속성의 값을 사용하세요.

## ID 토큰을 사용해 사용자 신원 확인하기 

[OpenID Connect](https://openid.net/developers/how-connect-works/) 1.0 사양은 OAuth 2.0 프로토콜 위에 구축된 ID 계층입니다. OpenID Connect를 사용하면 LINE Platform과 정보를 안전하게 주고받을 수 있습니다. 현재 OpenID Connect 사양을 준수하는 ID 토큰을 발급받아 LINE Platform에서 사용자 프로필과 이메일 주소를 가져올 수 있습니다.

### 이메일 권한 신청하기 

LINE Login을 사용해 로그인하는 사용자에게 앱이 이메일 주소를 가져올 수 있는 권한을 요청할 수 있습니다. 이를 위해서는 [LINE Developers Console](https://developers.line.biz/console/)에서 권한을 신청해야 합니다. 자세한 내용은 LINE Login 가이드의 [이메일 권한 신청하기](https://developers.line.biz/en/docs/line-login/integrate-line-login/#applying-for-email-permission)를 참고하세요.

### OpenID 및 이메일 스코프로 로그인하기 

채널에 이메일 권한이 있으면 사용자가 `.openID` 및 `.email` 스코프로 로그인하도록 하여 아래와 같이 ID 토큰에서 사용자의 이메일 주소를 가져올 수 있습니다.

```swift
LoginManager.shared.login(permissions: [.openID, .email], in: self) {
    result in
    switch result {
    case .success(let loginResult):
        if let email = loginResult.accessToken.IDToken?.payload.email {
            print("User Email: \(email)")
        }
    case .failure(let error):
        print(error)
    }
}
```

ID 토큰은 서명된 [JSON Web Token](https://datatracker.ietf.org/doc/html/rfc7519)입니다. LINE SDK는 토큰에 잘못된 데이터가 포함되지 않도록 서명과 유효 기간을 확인하여 토큰을 검증합니다.

### 서버에서 ID 토큰 사용하기 

<!-- warning start -->

**사용자 사칭**

클라이언트가 백엔드 서버로 보낸 사용자 ID나 기타 정보를 신뢰하지 마세요. 악의적인 클라이언트는 사용자를 사칭하기 위해 임의의 사용자 ID나 잘못된 형식의 정보를 서버에 보낼 수 있습니다.

대신 클라이언트는 원시(raw) ID 토큰 문자열을 서버에 보내야 합니다. 서버는 ID 토큰 검증 API로 토큰을 검증한 후 사용자 ID나 기타 정보를 가져올 수 있습니다.

<!-- warning end -->

#### 원시 ID 토큰 문자열 보내기 

`.openID` 권한으로 로그인할 때는 `IDTokenNonce` 매개변수에 사용자 지정 값을 할당할 수 있습니다.

```swift
var parameters = LoginManager.Parameters()
parameters.IDTokenNonce = "<a randomly-generated string>"
LoginManager.shared.login(permissions: [.profile, .openID], parameters: parameters) {
    result in
    // ...
}
```

값을 지정하지 않으면 LINE SDK가 `IDTokenNonce`에 값을 자동으로 할당하지만, 서버에서 nonce 값을 무작위로 생성하고 서버에도 저장해 두는 것을 권장합니다. 이후 LINE Login을 사용해 [ID 토큰을 검증](https://developers.line.biz/en/docs/line-login-sdks/ios-sdk/swift/managing-users/#verify-id-token-on-server)할 때 원래의 nonce를 사용할 수 있습니다. ID 토큰을 검증할 때 `nonce`를 사용하면 [리플레이 공격(replay attack)](https://en.wikipedia.org/wiki/Replay_attack)을 방지하는 데 도움이 됩니다.

`.openID` 권한으로 로그인에 성공한 후에는 다음과 같이 원시 ID 토큰 문자열을 가져올 수 있습니다.

```swift
LoginManager.shared.login(permissions: [.profile, .openID], parameters: parameters) {
    result in
    switch result {
    case .success(let loginResult):
        if let idToken = loginResult.accessToken.IDTokenRaw {
            // Send `idToken` to your server.
        } else {
            // Something went wrong. You should fail the login.
        }

    case .failure(let error):
        print(error)
```

그런 다음 `idToken`을 서버로 보내 [검증](https://developers.line.biz/en/docs/line-login-sdks/ios-sdk/swift/managing-users/#verify-id-token-on-server)받을 수 있습니다.

#### 서버에서 ID 토큰 검증하기 

ID 토큰을 받은 후 서버는 토큰과 해당 `nonce` 값을 LINE Platform의 ID 토큰 검증 엔드포인트로 보내야 합니다. 토큰이 유효하면 API는 ID 토큰 클레임을 담은 JSON 형식의 객체를 반환합니다.

백엔드에서 호출할 수 있는 API에 대한 자세한 내용은 다음 페이지를 참고하세요.

- [ID 토큰 검증하기](https://developers.line.biz/en/reference/line-login/#verify-id-token)

### 사용자 데이터를 신중하게 다루기 

액세스 토큰, 사용자 ID, 사용자 이름, ID 토큰의 정보 등 민감한 사용자 데이터를 앱이나 서버에 일반 텍스트로 저장하거나 안전하지 않은 HTTP 통신으로 전송하지 마세요. LINE SDK는 사용자의 액세스 토큰을 저장합니다. 필요하다면 인증 후 아래 코드로 액세스 토큰에 접근할 수 있습니다.

```swift
if let token = AccessTokenStore.shared.current {
    print(token.value)
}
```

ID 토큰은 로그인할 때만 발급됩니다. ID 토큰을 업데이트하려면 사용자가 다시 로그인해야 합니다. 다만 로그인 요청에 `.profile` 스코프를 설정했다면 `API.getProfile` 메서드를 호출하여 사용자 프로필 정보를 가져올 수 있습니다.

## 사용자 로그아웃시키기 

앱에서 사용자를 로그아웃시킬 수 있습니다. 더 나은 사용자 경험을 위해 사용자가 앱에서 로그아웃할 수 있는 방법을 제공하는 것을 권장합니다.

액세스 토큰을 무효화하고 앱에서 사용자를 로그아웃시키려면 `logout` 메서드를 호출합니다. 액세스 토큰을 무효화하면 사용자가 앱에서 로그아웃됩니다. 로그아웃 후에는 사용자가 다시 로그인 과정을 거쳐야 합니다.

```swift
LoginManager.shared.logout { result in
    switch result {
    case .success:
        print("Logout from LINE")
    case .failure(let error):
        print(error)
    }
}
```
