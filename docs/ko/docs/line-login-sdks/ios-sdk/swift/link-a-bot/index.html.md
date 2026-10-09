# SDK로 추가 친구 옵션 활성화하기

사용자가 앱에 로그인할 때 LINE 공식 계정을 친구로 추가하는 옵션을 표시할 수 있습니다. 이를 **추가 친구 옵션(add friend option)**이라고 합니다. 개발자는 친구로 추가될 LINE 공식 계정을 지정할 수 있습니다.

설정을 시작하기 전에 추가 친구 옵션을 이해하고 아래 세부 사항을 확인할 수 있도록 LINE Login 문서의 [로그인 시 LINE 공식 계정을 친구로 추가하기(추가 친구 옵션)](https://developers.line.biz/en/docs/line-login/link-a-bot/)를 먼저 읽어 주세요.

- LINE Developers Console에서 LINE 공식 계정을 채널과 연결하기
- LINE Platform에 전송되는 bot prompt 매개변수와 그 동작
- LINE Platform에서 반환되는 친구 관계 상태 플래그와 그 의미

이 문서에서는 LINE SDK로 추가 친구 옵션과 관련된 다음 기능을 활성화하는 방법을 설명합니다.

- [로그인 요청에서 bot prompt 매개변수 설정하기](https://developers.line.biz/en/docs/line-login-sdks/ios-sdk/swift/link-a-bot/#bot_prompt)
- [사용자와 LINE 공식 계정 간의 친구 관계 상태 확인하기](https://developers.line.biz/en/docs/line-login-sdks/ios-sdk/swift/link-a-bot/#get_friendship)

## 로그인 요청에서 bot prompt 매개변수 설정하기 

아래 샘플 코드는 로그인 요청에서 bot prompt 매개변수로 `.botPromptNormal` 또는 `.botPromptAggressive`를 설정하는 방법을 보여 줍니다.

```swift
// Includes an option to add a LINE Official Account as a friend in the consent screen.
var parameters = LoginManager.Parameters()
parameters.botPromptStyle = .normal
LoginManager.shared.login(permissions: [.profile], parameters: parameters) {
    // ...
}

// Opens a new screen to add the LINE Official Account as a friend after the user agrees to the permissions in the consent screen.
parameters.botPromptStyle = .aggressive
LoginManager.shared.login(permissions: [.profile], parameters: parameters) {
    // ...
}
```

매개변수 값에 대한 자세한 내용은 LINE SDK for iOS Swift 레퍼런스의 [LoginManager.Parameters](https://developers.line.biz/en/reference/ios-sdk-swift/Classes/LoginManager/Parameters.html)와 [LoginManager.BotPrompt](https://developers.line.biz/en/reference/ios-sdk-swift/Classes/LoginManager/BotPrompt.html)를 참고하세요.

## 사용자와 LINE 공식 계정 간의 친구 관계 상태 확인하기 

아래 메서드를 사용해 사용자와 LINE 공식 계정 간의 친구 관계 상태를 확인할 수 있습니다.

- [로그인 응답의 `friendshipStatusChanged` 속성 확인하기](https://developers.line.biz/en/docs/line-login-sdks/ios-sdk/swift/link-a-bot/#use-friendship_status_changed): 로그인 중 친구 관계 상태가 변경되었는지 확인합니다.
- [LINE Login을 사용해 친구 관계 상태 가져오기](https://developers.line.biz/en/docs/line-login-sdks/ios-sdk/swift/link-a-bot/#use-line-login-api): 사용자와 LINE 공식 계정 간의 친구 관계 상태를 가져옵니다.

### 로그인 응답의 `friendshipStatusChanged` 속성 확인하기 

로그인에 성공하면 `LoginResult` 객체의 `friendshipStatusChanged` 속성에 친구 관계 상태가 변경되었는지 여부를 나타내는 불리언 값이 포함됩니다.

친구 관계 상태 플래그를 받으려면 다음 조건을 충족해야 합니다.

- 로그인 요청에서 bot prompt 옵션을 지정해야 합니다.
- 사용자에게 LINE 공식 계정을 친구로 추가하는 옵션이 포함된 동의 화면이 표시되어야 합니다.

아래 샘플 코드는 `friendshipStatusChanged` 속성을 가져오는 방법을 보여 줍니다.

```swift
var parameters = LoginManager.Parameters()
parameters.botPromptStyle = .normal
LoginManager.shared.login(permissions: [.profile], parameters: parameters) {
    result in
    switch result {
    case .success(let value):
        print(value.friendshipStatusChanged)
    case .failure(let error):
        print(error)
    }
}
```

`friendshipStatusChanged` 속성에 대한 자세한 내용은 LINE SDK for iOS Swift 레퍼런스의 [friendshipStatusChanged](https://developers.line.biz/en/reference/ios-sdk-swift/Structs/LoginResult.html#/s:7LineSDK11LoginResultV23friendshipStatusChangedSbSgvp)를 참고하세요.

### LINE Login을 사용해 친구 관계 상태 가져오기 

사용자가 앱에 로그인하고 액세스 토큰을 받은 후 `getBotFriendshipStatus` 메서드를 호출합니다.

```swift
API.getBotFriendshipStatus { result in
    switch result {
    case .success(let value): print(value.friendFlag)
    case .failure(let error): print(error)
    }
}
```

반환 값에 대한 자세한 내용은 LINE SDK for iOS Swift 레퍼런스의 [getBotFriendshipStatus](https://developers.line.biz/en/reference/ios-sdk-swift/Enums/API.html#/s:7LineSDK3APIO22getBotFriendshipStatus13callbackQueue17completionHandleryAA08CallbackI0O_ys6ResultOyAA03GetefG7RequestV8ResponseVAA0A8SDKErrorOGctFZ)를 참고하세요.
