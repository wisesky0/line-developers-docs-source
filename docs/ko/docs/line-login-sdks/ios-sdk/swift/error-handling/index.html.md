# 오류 처리하기

## 개요 

SDK는 발생할 수 있는 오류를 처리하고 적절한 정보를 제공하므로, 최종 제품에서 오류를 적절하게 처리할 수 있습니다.

LINE SDK for iOS Swift의 모든 메서드는 응답으로 `Result` 열거형(enumeration)을 반환합니다. 아래와 같이 응답에 `.failure` 케이스가 있으면 관련 오류를 가져올 수 있습니다.

```swift
API.getProfile { result in
    switch result {
    case .success(let profile):
        print(profile.displayName)
    case .failure(let error):
        print(error)
        // Handle the error
    }
}
```

위 샘플 코드는 단순히 오류를 출력합니다. 로그에 출력된 오류는 원인을 사람이 읽을 수 있는 문장으로 설명합니다. 이 정보를 사용하면 각 오류 케이스를 어떻게 처리할지 결정할 수 있습니다.

## 오류 유형과 오류 사유 

LINE SDK for iOS Swift가 보고하는 모든 오류는 `Swift.Error` 프로토콜을 준수하는 열거형인 `LineSDKError` 인스턴스입니다. 이 열거형의 멤버는 오류가 어느 단계에서 어떤 이유로 발생했는지를 나타내는 사유 범주를 표현합니다. 현재 네 가지 오류 사유 범주가 정의되어 있습니다.

- `.requestFailed(reason: RequestErrorReason)`: API 요청을 생성하는 중 오류가 발생했습니다. 잘못된 매개변수 또는 액세스 토큰 누락 때문일 수 있습니다.
- `.responseFailed(reason: ResponseErrorReason)`: 서버 응답을 받은 후 오류가 발생했습니다. 잘못된 응답 또는 네트워크 오류 때문일 수 있습니다.
- `.authorizeFailed(reason: AuthorizeErrorReason)`: 인증 과정 중 오류가 발생했습니다. 예를 들어 사용자가 과정을 취소하거나 ID 토큰 검증에 실패한 경우입니다.
- `.generalError(reason: GeneralErrorReason)`: 데이터 문자열 변환 실패나 전제 조건을 충족하지 않는 매개변수 등 그 밖의 일반적인 오류 원인입니다.

각 오류 범주에는 상세 사유를 나타내는 열거형이 연결되어 있습니다. 이 열거형에는 필요한 정보를 담은 사유 멤버나 시스템에서 발생한 기반 `Error` 인스턴스가 포함됩니다.

사유가 어떤 모습인지는 `ResponseErrorReason` 열거형의 아래 코드 조각을 참고하세요.

```swift
public enum ResponseErrorReason {
    // Error happens in the underlying `URLSession`. Code 2001.
    case URLSessionError(Error)
    // The response is not a valid `HTTPURLResponse`. Code 2002.
    case nonHTTPURLResponse
    // Cannot parse received data to an instance of target type. Code 2003.
    case dataParsingFailed(Any.Type, Data, Error)
    // Received response contains an invalid HTTP status code. Code 2004.
    case invalidHTTPStatusAPIError(detail: APIErrorDetail)
}
```

<!-- note start -->

**참고**

이 코드는 설명을 위한 예시입니다. 실제 최종 코드는 위와 다를 수 있습니다.

<!-- note end -->

## 오류 데이터 가져오기 

최상위 `LineSDKError` 인스턴스에서 오류의 상세 정보를 확인하려면 Swift 패턴 매칭을 사용해 연결된 데이터를 추출할 수 있습니다. 예를 들어 서버에서 받은 HTTP 상태 코드가 잘못되어 발생한 오류인지 확인할 수 있습니다.

```swift
case .failure(let error):
    if case .responseFailed(
        reason: .invalidHTTPStatusAPIError(let detail)) = error
    {
        print("HTTP Status Code: \(detail.code)")
        print("API Error Detail: \(detail.error?.detail ?? "nil")")
        print("Raw Response: \(detail.raw)")
    }
```

오류 유형과 원인에 따라 오류를 처리하는 방법을 결정할 수 있습니다. 예를 들어 `.invalidHTTPStatusAPIError`가 발생하면 `detail` 매개변수의 `code` 속성을 확인할 수 있습니다. 오류 코드가 `500`이면 서버 오류를 뜻하며, 팝업 메시지를 표시하는 것 외에는 할 수 있는 일이 많지 않습니다. 반면 `403`이면 현재 토큰에 대상 API 엔드포인트에 접근할 권한이 부족하다는 뜻입니다. 이 경우 사용자에게 다시 로그인해 앱이 대상 엔드포인트에 접근하는 데 필요한 권한을 부여하도록 안내할 수 있습니다.

위에서 설명한 오류를 처리하는 방법은 아래 코드와 같습니다.

```swift
case .failure(let error):
    if case .responseFailed(
        reason: .invalidHTTPStatusAPIError(let detail)) = error
    {
        if detail.code == 500 {
            print("LINE API Server Error: \(String(describing: detail.error)")
        } else if detail.code == 403 {
            print("Not enough permission. Login again with required permissions?")
            // Do Login
        }
    }
```

## 자주 발생하는 오류를 간편하게 처리하기 

LINE SDK for iOS Swift를 사용할 때 발생할 수 있는 흔한 오류가 여러 가지 있습니다. 이러한 오류를 빠르게 식별할 수 있도록 몇 가지 간편한 속성을 제공합니다. 이 속성을 사용하면 반환된 오류를 패턴 매칭하는 작업을 줄일 수 있습니다.

```swift
case .failure(let error):
    if error.isUserCancelled {
        // User cancelled the login process himself/herself.

    } else if error.isPermissionError {
        // Equivalent to checking .responseFailed.invalidHTTPStatusAPIError
        // with code 403. Should login again.

    } else if error.isURLSessionTimeOut {
        // Underlying request timeout in URL session. Should try again later.

    } else if error.isRefreshTokenError {
        // User is accessing a public API with expired token, LINE SDK tried to
        // refresh the access token automatically, but failed (due to refresh token)
        // also expired. Should login again.

    } else if /* error.isXYZ other condition */ {
        // You could also extend LineSDKError to make your own shortcuts.

    } else {
        // Any other errors.
        print("\(error)")
    }
```

이러한 간편한 속성을 사용하면 오류 처리 코드를 더 쉽게 추상화할 수 있습니다. 간단한 오류 처리 방식은 앱의 아키텍처에 따라 달라지지만, 같은 오류 처리 코드를 반복하지 않는 것이 일반적으로 권장되는 방법입니다. 좋은 방법은 모든 오류 처리 코드를 한 곳에 모아 두는 것입니다.

## 오류 코드와 사용자 데이터 

`LineSDKError` 열거형은 `CustomNSError` 프로토콜과 `LocalizedError` 프로토콜을 준수합니다. 각 오류 사유에는 오류 유형과 추가 세부 정보를 확인할 수 있도록 고유한 `errorCode` 속성과 `errorUserInfo` 속성이 있습니다.

## 마치며 

오류 처리는 쉬운 작업이 아니지만, 시간을 들여 볼 만한 가치가 있습니다. 오류를 꼼꼼하게 처리하면 앱의 사용자 경험을 크게 개선할 수 있습니다.

가능한 오류 코드와 각 코드가 의미하는 바는 LINE SDK for iOS Swift 레퍼런스의 [LineSDKError](https://developers.line.biz/en/reference/ios-sdk-swift/Enums/LineSDKError.html)를 참고하세요.

LINE SDK for iOS Swift는 발전하면서 새로운 오류가 추가될 수 있습니다. SDK를 업그레이드하기 전에 [LINE SDK for iOS 릴리스 노트](https://developers.line.biz/en/docs/line-login-sdks/ios-sdk/release-notes/)에서 중요한 변경 사항을 확인하고, 오류 처리 방법을 업데이트해야 하는지 판단해 주세요.
