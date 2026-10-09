# 사용자 관리

이 주제에서는 LINE Login API로 로그인한 사용자를 관리하는 방법을 설명합니다.

## 사용자 프로필 가져오기 

[액세스 토큰](https://developers.line.biz/en/docs/line-login/managing-access-tokens/)으로 식별된 사용자의 프로필 정보를 가져올 수 있습니다. 프로필 정보에는 사용자 ID, 표시 이름, 프로필 이미지, 상태 메시지가 포함됩니다.

<!-- note start -->

**액세스 토큰의 scope 확인하기**

사용자의 프로필 정보를 가져오려면 `profile` scope가 포함된 액세스 토큰이 필요합니다. 자세한 내용은 [사용자를 인증하고 인증 요청하기](https://developers.line.biz/en/docs/line-login/integrate-line-login/#making-an-authorization-request)와 [Scopes](https://developers.line.biz/en/docs/line-login/integrate-line-login/#scopes)를 참고하십시오.

<!-- note end -->

요청 예시:

```sh
curl -v -X GET https://api.line.me/v2/profile \
-H 'Authorization: Bearer {access token}'
```

응답 예시:

```json
{
  "userId":"U4af4980629...",
  "displayName":"Brown",
  "pictureUrl":"https://profile.line-scdn.net/abcdefghijklmn",
  "statusMessage":"Hello, LINE!"
}
```

자세한 내용은 LINE Login v2.1 API 레퍼런스의 [사용자 프로필 가져오기](https://developers.line.biz/en/reference/line-login/#get-user-profile)를 참고하십시오.

<!-- tip start -->

**서비스에서 사용자 식별하기**

[사용자 ID](https://developers.line.biz/en/glossary/#user-id)로 사용자를 식별하십시오. 사용자 ID는 변경할 수 없습니다.

사용자는 언제든지 새로운 표시 이름, 프로필 이미지, 상태 메시지를 설정할 수 있습니다.

이 정보로는 사용자를 식별할 수 없습니다.

<!-- tip end -->

<!-- tip start -->

**ID 토큰으로 사용자 식별하기**

사용자의 액세스 토큰과 함께 받은 ID 토큰을 사용하여 사용자의 프로필 정보와 이메일 주소를 가져올 수 있습니다.

자세한 내용은 LINE Login v2.1 API 레퍼런스의 [ID 토큰 검증](https://developers.line.biz/en/reference/line-login/#verify-id-token)을 참고하십시오.

<!-- tip end -->

## 사용자 로그아웃 처리하기 

더 나은 사용자 경험을 위해 사용자가 앱에서 로그아웃할 수 있는 방법을 제공하는 것을 권장합니다.

사용자가 앱에서 로그아웃하면 해당 사용자의 [액세스 토큰](https://developers.line.biz/en/docs/line-login/managing-access-tokens/)을 취소하고 앱의 모든 사용자 데이터를 삭제하십시오.

액세스 토큰을 취소하는 요청 예시:

```sh
curl -v -X POST 'https://api.line.me/oauth2/v2.1/revoke' \
-H "Content-Type:application/x-www-form-urlencoded" \
-d "client_id={channel id}&client_secret={channel secret}&access_token={access token}"
```

자세한 내용은 LINE Login v2.1 API 레퍼런스의 [액세스 토큰 취소](https://developers.line.biz/en/reference/line-login/#revoke-access-token)를 참고하십시오.
