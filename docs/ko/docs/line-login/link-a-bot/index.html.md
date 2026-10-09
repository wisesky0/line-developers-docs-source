# 로그인 시 LINE 공식 계정을 친구로 추가하기(친구 추가 옵션)

사용자가 앱에 로그인할 때 LINE 공식 계정을 친구로 추가하는 옵션을 표시할 수 있습니다. 이를 **친구 추가 옵션(add friend option)**이라고 합니다. LINE Developers Console에서 친구로 추가할 LINE 공식 계정을 지정하십시오.

![Consent screen](https://developers.line.biz/media/line-login/link-a-bot/consent-screen-with-bot-en.webp)

로그인할 때 위의 동의 화면에서 사용자가 **Add as friend**를 활성화하면 LINE 공식 계정이 친구로 추가됩니다. 봇을 만드는 방법에 대한 자세한 내용은 Messaging API 문서의 [Messaging API 개요](https://developers.line.biz/en/docs/messaging-api/overview/)를 참고하십시오.

## LINE 공식 계정을 친구로 추가하는 옵션 표시하기 

동의 화면에 LINE 공식 계정을 친구로 추가하는 옵션을 표시하려면 다음과 같이 설정하십시오.

1. [LINE 공식 계정을 채널에 연결합니다.](https://developers.line.biz/en/docs/line-login/link-a-bot/#link-a-line-official-account)
1. [`bot_prompt` 쿼리 파라미터와 함께 LINE Login 인증 URL로 사용자를 리디렉션합니다.](https://developers.line.biz/en/docs/line-login/link-a-bot/#redirect-users)

### LINE 공식 계정을 채널에 연결하기 

LINE Developers Console에서 LINE 공식 계정을 LINE Login 채널에 연결하십시오.

<!-- note start -->

**Note**

LINE 공식 계정을 LINE Login 채널에 연결하려면 다음 조건을 충족해야 합니다.

- LINE 공식 계정과 연결된 Messaging API 채널이 LINE Login 채널과 같은 provider에 속해 있어야 합니다.
- LINE Login 채널과 LINE 공식 계정 모두의 관리자여야 합니다.
  - LINE Login 채널의 관리자 권한은 [LINE Developers Console](https://developers.line.biz/console/)에서 확인할 수 있습니다.
  - LINE 공식 계정의 관리자 권한은 [LINE Official Account Manager](https://manager.line.biz)에서 확인할 수 있습니다.

<!-- note end -->

1. [LINE Developers Console](https://developers.line.biz/console/)에 로그인한 후 LINE Login 채널이 포함된 provider를 클릭합니다.

1. LINE Login 채널 설정을 엽니다.

1. **Basic settings** 탭의 **Linked LINE Official Account**에서 **Edit**를 클릭합니다.

1. 사용자가 친구로 추가하기를 원하는 LINE 공식 계정을 선택하고 **Update**를 클릭합니다.

   관리자 역할이 있는 LINE 공식 계정을 선택할 수 있습니다.

   LINE Login 채널에는 LINE 공식 계정을 하나만 연결할 수 있습니다.

### `bot_prompt` 쿼리 파라미터와 함께 LINE Login 인증 URL로 사용자 리디렉션하기 

LINE 공식 계정을 채널에 연결했다면 `bot_prompt` 쿼리 파라미터와 함께 사용자를 LINE Login 인증 URL로 리디렉션합니다.

```
https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id={CHANNEL_ID}&redirect_uri={CALLBACK_URL}&state={STATE}&bot_prompt={BOT_PROMPT}&scope={SCOPE_LIST}
```

`bot_prompt` 쿼리 파라미터의 값에 따라 다음 옵션이 표시됩니다.

| 값 | 설명 |
| --- | --- |
| `normal` | 동의 화면에 LINE 공식 계정을 친구로 추가하는 옵션을 표시합니다. |
| `aggressive` | 동의 화면 이후에 LINE 공식 계정을 친구로 추가하는 옵션이 있는 새 화면을 엽니다. |

![Screen to be displayed](https://developers.line.biz/media/line-login/link-a-bot/bot-prompt-en.webp)

<!-- tip start -->

**팁**

`bot_prompt` 이외의 쿼리 파라미터에 대한 자세한 내용은 [인증 요청하기](https://developers.line.biz/en/docs/line-login/integrate-line-login/#making-an-authorization-request)를 참고하십시오.

<!-- tip end -->

#### 동의 화면의 옵션 표시 

사용자와 LINE 공식 계정 간의 친구 관계에 따라 LINE 공식 계정을 친구로 추가하는 옵션이 다음과 같이 표시됩니다.

| 동의 화면이 표시될 때의 친구 관계 | 사용자에게 표시되는 옵션 |
| --- | --- |
| 친구가 아님 | LINE 공식 계정을 친구로 추가하는 옵션을 표시합니다. 사용자가 이 옵션을 선택하고 계속 진행하면 LINE 공식 계정이 친구로 추가됩니다. |
| 차단됨 | LINE 공식 계정의 차단을 해제하는 옵션을 표시합니다. 사용자가 이 옵션을 선택하고 계속 진행하면 LINE 공식 계정의 차단이 해제됩니다. |
| 친구로 추가됨 | 사용자가 이미 LINE 공식 계정을 친구로 추가했음을 표시합니다. LINE 공식 계정을 친구로 추가하는 옵션은 표시되지 않습니다. |

<!-- tip start -->

**provider가 인증된 provider인 경우 이 옵션이 기본으로 선택됩니다**

LINE Login 채널이 인증된 provider 아래에 있으면 `bot_prompt=normal`일 때 나타나는 동의 화면의 옵션이 기본으로 선택됩니다.

![](https://developers.line.biz/media/line-login/link-a-bot/add-friend-option-on-certified-provider-en.webp)

인증된 provider에 대한 자세한 내용은 LINE Developers Console 문서의 [인증된 provider](https://developers.line.biz/en/docs/line-developers-console/overview/#certified-provider)를 참고하십시오.

<!-- tip end -->

## 사용자와 LINE 공식 계정의 친구 관계 상태 가져오기 

친구 추가 옵션을 사용하면 다음 방법 중 하나로 사용자와 LINE Login 채널에 연결된 LINE 공식 계정 간의 친구 관계 상태를 가져올 수 있습니다.

- [`friendship_status_changed` 쿼리 파라미터 사용하기](https://developers.line.biz/en/docs/line-login/link-a-bot/#use-friendship_status_changed)
- [LINE Login API로 친구 관계 상태 확인하기](https://developers.line.biz/en/docs/line-login/link-a-bot/#use-line-login-api)

### `friendship_status_changed` 쿼리 파라미터 사용하기 

[인증 요청](https://developers.line.biz/en/docs/line-login/integrate-line-login/#making-an-authorization-request)할 때 `bot_prompt` 쿼리 파라미터를 지정하면, 사용자가 인증되고 앱에 권한을 부여한 후 `friendship_status_changed` 쿼리 파라미터와 함께 콜백 URL로 리디렉션됩니다.

리디렉션 대상 URL 예시:

```
https://client.example.org/cb?code={CODE}&state={STATE}&friendship_status_changed={FRIENDSHIP_STATUS_CHANGED}
```

`friendship_status_changed` 쿼리 파라미터는 다음 값을 가질 수 있습니다. 콜백 URL에 대한 자세한 내용은 [인증 코드 받기](https://developers.line.biz/en/docs/line-login/integrate-line-login/#receiving-the-authorization-code)를 참고하십시오.

| 값 | 설명 |
| --- | --- |
| `true` | 로그인하는 동안 사용자와 LINE 공식 계정의 친구 관계 상태가 변경되었습니다. 다음 중 하나의 경우에 발생합니다.<br /><ul><li>사용자가 LINE 공식 계정을 친구로 추가함</li><li>사용자가 LINE 공식 계정의 차단을 해제함</li></ul> |
| `false` | 로그인하는 동안 사용자와 LINE 공식 계정의 친구 관계 상태가 변경되지 않았습니다. 다음 중 하나의 경우에 발생합니다.<br /><ul><li>사용자가 이미 LINE 공식 계정을 친구로 추가한 상태임</li><li>사용자가 LINE 공식 계정을 친구로 추가하지 않음</li><li>사용자가 LINE 공식 계정의 차단을 해제하지 않음</li></ul> |

<!-- note start -->

**Note**

LINE 공식 계정을 친구로 추가하는 옵션이 있는 동의 화면이 사용자에게 표시되지 않으면 `friendship_status_changed` 쿼리 파라미터는 포함되지 않습니다.

<!-- note end -->

### LINE Login API로 친구 관계 상태 가져오기 

[웹 앱이 가져온 액세스 토큰](https://developers.line.biz/en/docs/line-login/integrate-line-login/#get-access-token)을 사용하여 사용자와 LINE Login 채널에 연결된 LINE 공식 계정 간의 친구 관계 상태를 가져올 수 있습니다.

요청 예시:

```sh
curl -v -X GET https://api.line.me/friendship/v1/status \
-H 'Authorization: Bearer {access token}'
```

응답 예시:

```json
{
  "friendFlag": true
}
```

자세한 내용은 LINE Login v2.1 API 레퍼런스의 [사용자와 LINE 공식 계정의 친구 관계 상태 가져오기](https://developers.line.biz/en/reference/line-login/#get-friendship-status)를 참고하십시오.
