# 액세스 토큰 관리

LINE Login API로 관리하는 액세스 토큰은 앱이 LINE Platform에 저장된 사용자 데이터(사용자 ID, 표시 이름, 프로필 이미지, 상태 메시지 등)에 접근할 수 있는 권한을 부여받았는지 확인하는 역할을 합니다.

## 사용자의 액세스 토큰 가져오기 

사용자 인증이 완료되면 LINE Platform이 액세스 토큰을 반환합니다. 이 시점에서 앱이 사용자 데이터에 접근할 수 있는 권한을 가지고 있다고 간주할 수 있습니다.

자세한 내용은 다음을 참고하십시오.

**LINE Login:**

- [웹 앱에 LINE Login 연동하기](https://developers.line.biz/en/docs/line-login/integrate-line-login/)
- [iOS 앱에 LINE Login 연동하기](https://developers.line.biz/en/docs/line-login-sdks/ios-sdk/swift/integrate-line-login/)
- [Android 앱에 LINE Login 연동하기](https://developers.line.biz/en/docs/line-login-sdks/android-sdk/integrate-line-login/)
- [Unity 게임에 LINE Login 연동하기](https://developers.line.biz/en/docs/line-login-sdks/unity-sdk/integrate-line-login/)
- [LINE SDK for Flutter](https://developers.line.biz/en/docs/line-login-sdks/flutter-sdk/)

**LIFF SDK:**

- [LIFF 앱 개발하기](https://developers.line.biz/en/docs/liff/developing-liff-apps/)

<!-- note start -->

**액세스 토큰의 유효 기간**

액세스 토큰은 발급된 후 30일 동안 유효합니다. 액세스 토큰이 포함된 모든 응답에는 `expires_in` 속성에 토큰이 만료되기까지 남은 시간(초)도 포함됩니다.

<!-- note end -->

### 리프레시 토큰 

사용자 인증이 완료되면 액세스 토큰과 함께 리프레시 토큰이 반환됩니다.

액세스 토큰이 만료되면 리프레시 토큰을 사용하여 새 액세스 토큰을 가져올 수 있습니다. 자세한 내용은 LINE Login v2.1 API 레퍼런스의 [액세스 토큰 갱신](https://developers.line.biz/en/reference/line-login/#refresh-access-token)을 참고하십시오.

<!-- note start -->

**리프레시 토큰의 유효 기간**

리프레시 토큰은 해당 액세스 토큰이 발급된 후 최대 90일 동안 유효합니다. 리프레시 토큰이 만료되면 사용자에게 다시 로그인하도록 안내하여 새 액세스 토큰을 발급받아야 합니다.

<!-- note end -->

## 액세스 토큰 검증하기 

앱이나 외부 서버에서 받은 액세스 토큰은 자체 서버에서 사용하기 전에 반드시 검증하십시오.

액세스 토큰을 검증하는 방법에 대한 자세한 내용은 [새 사용자 등록에 액세스 토큰 사용하기](https://developers.line.biz/en/docs/line-login/secure-login-process/#using-access-tokens)를 참고하십시오.
