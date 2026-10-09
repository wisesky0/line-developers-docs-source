# 사용자 관리(LINE Login v2.0)

<!-- warning start -->

**LINE Login v2.0은 더 이상 권장되지 않습니다(deprecated)**

이 페이지는 이전 버전인 LINE Login v2.0의 문서입니다. LINE Login v2.0은 [deprecated](https://developers.line.biz/en/glossary/#deprecated) 상태이며, [end-of-life](https://developers.line.biz/en/glossary/#end-of-life) 날짜는 아직 정해지지 않았습니다. 따라서 현재 버전인 LINE Login v2.1을 사용하는 것을 권장합니다. 종료(end-of-life)가 공지된 후 실제 종료되기까지는 일정한 유예 기간이 있습니다. 자세한 내용은 [LINE Login 버전](https://developers.line.biz/en/docs/line-login/overview/#versions)을 참고하십시오.

<!-- warning end -->

이 주제에서는 [LINE Login v2.0](https://developers.line.biz/en/docs/line-login/overview/#versions) 엔드포인트를 사용하여 LINE Login API로 로그인한 사용자를 관리하는 방법을 설명합니다.

## 사용자 프로필 가져오기 

[액세스 토큰](https://developers.line.biz/en/docs/line-login/managing-access-tokens/)으로 식별된 사용자의 프로필 정보를 가져올 수 있습니다. 프로필 정보에는 사용자 ID, 표시 이름, 프로필 이미지, 상태 메시지가 포함됩니다.

LINE Login v2.0과 v2.1은 사용자 프로필을 가져오는 방법이 같습니다. 자세한 내용은 [사용자 프로필 가져오기](https://developers.line.biz/en/docs/line-login/managing-users/#get-profile)를 참고하십시오.

## 사용자 로그아웃 처리하기 

<!-- note start -->

**Note**

이 문서는 이전 버전인 LINE Login v2.0의 문서입니다.

최신 버전인 LINE Login v2.1에서 이 작업을 수행하는 방법은 [사용자 로그아웃 처리하기](https://developers.line.biz/en/docs/line-login/managing-users/#logout)를 참고하십시오.

<!-- note end -->

더 나은 사용자 경험을 위해 사용자가 앱에서 로그아웃할 수 있는 방법을 제공하는 것을 권장합니다.

사용자가 앱에서 로그아웃하면 해당 사용자의 [액세스 토큰](https://developers.line.biz/en/docs/line-login/managing-access-tokens-v2/)을 취소하고 앱의 모든 사용자 데이터를 삭제하십시오.

액세스 토큰을 취소하는 요청 예시:

```sh
curl -v -X POST https://api.line.me/v2/oauth/revoke \
-H 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'refresh_token={refresh token}'
```

자세한 내용은 LINE Login v2.0 API 레퍼런스의 [액세스 토큰 취소](https://developers.line.biz/en/reference/line-login-v2/#revoke-access-token)를 참고하십시오.
