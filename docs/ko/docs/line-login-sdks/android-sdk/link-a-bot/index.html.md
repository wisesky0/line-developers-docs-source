# SDK로 친구 추가 옵션 활성화하기

사용자가 앱에 로그인할 때 LINE 공식 계정을 친구로 추가하는 옵션을 표시할 수 있습니다. 이를 **친구 추가 옵션**(add friend option)이라고 합니다. 개발자는 친구로 추가될 LINE 공식 계정을 지정할 수 있습니다.

설정을 시작하기 전에 친구 추가 옵션을 이해하려면 LINE Login 문서의 [로그인 시 LINE 공식 계정을 친구로 추가하기(친구 추가 옵션)](https://developers.line.biz/en/docs/line-login/link-a-bot/)를 참조하고, 다음 세부 사항을 확인하십시오.

- LINE Developers Console에서 LINE 공식 계정을 채널과 연결하기
- LINE 플랫폼으로 전송되는 bot prompt 매개변수와 그 동작
- LINE 플랫폼에서 반환되는 친구 관계 상태 플래그와 그 의미

이 문서에서는 LINE SDK를 사용하여 친구 추가 옵션과 관련된 기능을 활성화하는 방법을 설명합니다.

- [로그인 요청에서 bot prompt 매개변수 설정하기](https://developers.line.biz/en/docs/line-login-sdks/android-sdk/link-a-bot/#bot_prompt)
- [사용자와 LINE 공식 계정 간의 친구 관계 상태 확인하기](https://developers.line.biz/en/docs/line-login-sdks/android-sdk/link-a-bot/#get_friendship)

## 로그인 요청에서 bot prompt 매개변수 설정하기 

다음 샘플 코드는 `LoginButton` 위젯을 사용할 때 `botPrompt` 매개변수를 설정하는 방법을 보여 줍니다.

```java
...
LoginButton loginButton = rootView.findViewById(R.id.line_login_btn);

loginButton.setAuthenticationParams(new LineAuthenticationParams.Builder()
        .scopes(Arrays.asList(Scope.PROFILE))
        .botPrompt(BotPrompt.normal) // configure it here
        .build()
);
...
```

다음 샘플 코드는 `LoginApi.getLoginIntent()` 메서드를 사용할 때 `botPrompt` 매개변수를 설정하는 방법을 보여 줍니다.

```java
Intent loginIntent = LineLoginApi.getLoginIntent(
    view.getContext(),
    Constants.CHANNEL_ID,
    new LineAuthenticationParams.Builder()
            .scopes(Arrays.asList(Scope.PROFILE))
            .botPrompt(BotPrompt.normal) // configure it here
            .build());

startActivityForResult(loginIntent, REQUEST_CODE);
```

매개변수 값에 대한 자세한 내용은 LINE SDK for Android 레퍼런스의 [LineAuthenticationParams.BotPrompt](https://developers.line.biz/en/reference/android-sdk/reference/com/linecorp/linesdk/auth/LineAuthenticationParams.BotPrompt.html)를 참조하십시오.

## 사용자와 LINE 공식 계정 간의 친구 관계 상태 확인하기 

다음 메서드를 사용하여 사용자와 LINE 공식 계정 간의 친구 관계 상태를 확인할 수 있습니다.

- [로그인 응답의 `LineLoginResult` 객체 확인하기](https://developers.line.biz/en/docs/line-login-sdks/android-sdk/link-a-bot/#use-friendship_status_changed): 로그인 중에 친구 관계 상태가 변경되었는지 확인합니다.
- [LINE Login을 사용하여 친구 관계 상태 가져오기](https://developers.line.biz/en/docs/line-login-sdks/android-sdk/link-a-bot/#use-line-login-api): 사용자와 LINE 공식 계정 간의 친구 관계 상태를 가져옵니다.

### 로그인 응답의 `LineLoginResult` 객체 확인하기 

로그인에 성공하면 `LineLoginResult` 객체에 친구 관계 상태가 변경되었는지 여부를 나타내는 불리언 값이 포함됩니다. `getFriendshipStatusChanged()` 메서드로 이 값을 가져올 수 있습니다.

친구 관계 상태 플래그를 가져오려면 다음 조건을 충족해야 합니다.

- 로그인 요청의 `LineAuthenticationParams` 객체에 `botPrompt` 매개변수가 지정되어 있어야 합니다.
- 사용자에게 LINE 공식 계정을 친구로 추가하는 옵션이 포함된 동의 화면이 표시되어야 합니다.

다음 샘플 코드는 `LineLoginResult` 객체에서 친구 관계 상태를 가져오는 방법을 보여 줍니다.

```java
public void onActivityResult(int requestCode, int resultCode, Intent data) {
    ...

    LineLoginResult result = LineLoginApi.getLoginResultFromIntent(data);

    boolean friendshipStatusChanged = result.getFriendshipStatusChanged();

    ...
}
```

반환 값에 대한 자세한 내용은 LINE SDK for Android 레퍼런스의 [getFriendshipStatusChanged()](https://developers.line.biz/en/reference/android-sdk/reference/com/linecorp/linesdk/auth/LineLoginResult.html#getFriendshipStatusChanged())를 참조하십시오.

### LINE Login을 사용하여 친구 관계 상태 가져오기 

사용자가 앱에 로그인하여 액세스 토큰이 반환된 후 `LineApiClient.getFriendshipStatus()` 메서드를 호출하십시오.

```
boolean isFriendToTheBot = lineApiClient.getFriendshipStatus();
```

반환 값에 대한 자세한 내용은 LINE SDK for Android 레퍼런스의 [getFriendshipStatus()](https://developers.line.biz/en/reference/android-sdk/reference/com/linecorp/linesdk/api/LineApiClient.html#getFriendshipStatus())를 참조하십시오.
