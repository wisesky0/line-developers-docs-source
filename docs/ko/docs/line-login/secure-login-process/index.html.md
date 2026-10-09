# 앱과 서버 간의 안전한 로그인 프로세스 만들기

이 페이지에서는 [LINE SDK](https://developers.line.biz/en/docs/line-login/overview/#native-app)를 사용하여 네이티브 앱에 LINE Login을 구현할 때 사용자 등록과 로그인을 안전하게 처리하는 방법을 설명합니다.

## 안전하게 주고받을 수 있는 정보 

사용자가 LINE Login으로 앱에 로그인하면 클라이언트 앱과 서버는 LINE Platform으로부터 다음 정보를 주고받을 수 있습니다.

- ❌ 사용자 프로필 세부 정보
- ❌ 채널 ID

그러나 위와 같은 정보는 스푸핑 및 기타 공격에 취약합니다. 예를 들어 클라이언트가 이러한 정보를 보내면 서버가 이를 무조건 신뢰하는 것은 위험합니다. 대신 클라이언트는 다음 데이터를 서버로 보내야 합니다.

- ✅ 액세스 토큰
- ✅ ID 토큰

이 토큰을 사용하면 서버가 LINE Platform에서 직접 신뢰할 수 있는 정보를 가져올 수 있습니다.

<!-- tip start -->

**이 페이지를 사용하는 방법**

이 섹션에서는 LINE SDK를 사용할 때 권장하는 설계 개념을 설명합니다. 이는 가이드일 뿐 템플릿이 아닙니다. 위험을 충분히 이해하고 안전한 시스템을 구축하십시오.

<!-- tip end -->

## 새 사용자 등록에 액세스 토큰 사용하기 

새 사용자가 LINE Login으로 앱에 로그인하면 LINE 프로필 세부 정보를 사용하여 데이터베이스에 새 사용자를 만들고 싶을 것입니다.

그러나 클라이언트 앱이 프로필 정보를 서버에 직접 보내도록 허용하면 공격에 취약해집니다.

<!-- note start -->

**Note**

다음 예시는 사용자 등록 및 로그인 프로세스의 잠재적인 취약점을 보여 줍니다.

<!-- note end -->

![](https://developers.line.biz/media/line-login/new-user-login-bad.svg)

프로필 정보 대신 클라이언트 앱은 액세스 토큰을 서버로 보냅니다. 서버는 액세스 토큰을 검증하고 LINE Platform에서 사용자 프로필을 직접 가져와야 합니다.

![Interactive SVG](https://developers.line.biz/media/line-login/new-user-login-standard.svg)

다이어그램의 API 호출에 대한 자세한 내용은 LINE Login v2.1 API 레퍼런스의 다음 항목을 참고하십시오.

- [액세스 토큰이 유효한지 확인(GET /oauth2/v2.1/verify)](https://developers.line.biz/en/reference/line-login/#verify-access-token)
- [사용자 프로필 가져오기(GET /v2/profile)](https://developers.line.biz/en/reference/line-login/#get-user-profile)

<!-- note start -->

**액세스 토큰을 검증한 후 추가 확인이 필요합니다**

LINE Login API가 액세스 토큰을 성공적으로 검증하면 응답에 `client_id` 속성(채널 ID)과 `expires_in` 속성(토큰이 만료되기까지 남은 시간)이 포함됩니다. 액세스 토큰을 사용하기 전에 이 속성들이 다음 조건을 충족하는지 확인하십시오.

| 속성 | 조건 |
| --- | --- |
| `client_id` | 네이티브 앱에 연결된 LINE Login 채널의 채널 ID와 같아야 함 |
| `expires_in` | 양수 값 |

<!-- note end -->

## OpenID로 새 사용자 등록하기 

앱이 [OpenID Connect](https://openid.net/developers/how-connect-works/)를 지원한다면 액세스 토큰을 검증할 필요가 없습니다. 대신 클라이언트 앱이 ID 토큰을 서버로 보냅니다. 서버는 LINE Platform이 제공하는 엔드포인트를 사용하여 ID 토큰을 검증하고 사용자 프로필 정보를 가져와야 합니다.

<!-- tip start -->

**nonce: 한 번만 사용되는 숫자**

nonce는 각 로그인 시도를 고유하게 식별할 수 있도록 무작위로 생성된 숫자입니다.

nonce를 올바르게 사용하면 [재전송 공격(replay attack)](https://en.wikipedia.org/wiki/Replay_attack)을 방지하는 데 도움이 됩니다.

<!-- tip end -->

![Interactive SVG](https://developers.line.biz/media/line-login/new-user-login-openid.svg)

다이어그램의 API 호출에 대한 자세한 내용은 LINE Login API 레퍼런스의 다음 항목을 참고하십시오.

- [ID 토큰 검증(POST /oauth2/v2.1/verify)](https://developers.line.biz/en/reference/line-login/#verify-id-token)

서버에서 ID 토큰과 nonce를 처리하는 방법에 대한 자세한 내용은 다음 항목을 참고하십시오.

- [서버에서 ID 토큰 사용하기](https://developers.line.biz/en/docs/line-login-sdks/ios-sdk/swift/managing-users/#get-id-token) (LINE SDK for iOS Swift)
- [서버에서 ID 토큰 사용하기](https://developers.line.biz/en/docs/line-login-sdks/android-sdk/managing-users/#get-id-token) (LINE SDK for Android)

## 다음 단계 

앞의 예시는 안전한 사용자 등록 및 로그인 프로세스를 설계하는 방법을 일반적인 수준에서 보여 줍니다. 앱에 LINE Login을 연동하는 구체적인 방법은 다음 항목을 참고하십시오.

- LINE SDK for iOS Swift:
  - [iOS 앱에 LINE Login 연동하기](https://developers.line.biz/en/docs/line-login-sdks/ios-sdk/swift/integrate-line-login/)
    - [사용자 관리](https://developers.line.biz/en/docs/line-login-sdks/ios-sdk/swift/managing-users/)
    - [액세스 토큰 관리](https://developers.line.biz/en/docs/line-login-sdks/ios-sdk/swift/managing-access-tokens/)
- LINE SDK for Android:
  - [Android 앱에 LINE Login 연동하기](https://developers.line.biz/en/docs/line-login-sdks/android-sdk/integrate-line-login/)
    - [사용자 관리](https://developers.line.biz/en/docs/line-login-sdks/android-sdk/managing-users/)
    - [액세스 토큰 관리](https://developers.line.biz/en/docs/line-login-sdks/android-sdk/managing-access-tokens/)
