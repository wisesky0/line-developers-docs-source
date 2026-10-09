# LINE MINI App 인증 흐름

LIFF 앱이 사용자 정보를 가져오거나 사용자에게 메시지를 보내려면, 사용자가 LIFF 앱에 처음 접근할 때 채널 동의 화면에서 해당 권한에 동의해야 합니다.

LINE MINI App에서는 "Channel consent simplification" 기능을 활성화하면 사용자가 LINE MINI App에 더 쉽게 접근할 수 있습니다.

이 페이지에서는 "Channel consent simplification" 기능과 이를 기반으로 한 인증 흐름을 설명합니다.

<!-- table of contents -->

## "Channel consent simplification" 기능이란 

"Channel consent simplification" 기능은 사용자가 LINE MINI App에 처음 접근할 때 필요한 권한 동의를 간소화하는 메커니즘입니다.

"Channel consent simplification" 기능을 활성화하면, 사용자는 LINE MINI App에 처음 접근할 때 채널 동의 화면을 건너뛰고 바로 LINE MINI App을 사용할 수 있습니다. 사용자 경험을 개선하려면 "Channel consent simplification" 기능을 활성화하는 것을 권장합니다.

"Channel consent simplification" 기능은 [사용자 ID](https://developers.line.biz/en/glossary/#user-id)를 가져오는 권한(`openid` 스코프)에만 적용됩니다. 프로필 정보를 가져오거나 메시지를 보내는 데 필요한 권한(예: [`profile` 스코프 및 `chat_message.write` 스코프](https://developers.line.biz/en/docs/liff/registering-liff-apps/#registering-liff-app))은 이 기능에 포함되지 않습니다. 이러한 추가 권한은 해당 권한이 필요할 때 각 LINE MINI App 내에서 검증 화면을 통해 요청합니다. 자세한 내용은 [검증 화면에서 `openid` 스코프 이외의 권한 요청하기](https://developers.line.biz/en/docs/line-mini-app/develop/channel-consent-simplification/#request-permissions-other-than-openid)를 참고하세요.

일본의 새로운 LINE MINI App 채널에서는 "Channel consent simplification" 기능이 항상 활성화되어 있습니다. 자세한 내용은 [2026년 1월 8일](https://developers.line.biz/en/news/2026/01/08/channel-consent-simplification/) 뉴스를 참고하세요.

<!-- note start -->

**설계에 따라 LINE MINI App이 예상대로 동작하지 않을 수 있습니다**

LINE MINI App이 LIFF SDK를 통해 가져온 [액세스 토큰](https://developers.line.biz/en/glossary/#access-token)이나 [ID 토큰](https://developers.line.biz/en/glossary/#id-token)을 사용하여 [LINE Login API](https://developers.line.biz/en/reference/line-login/)를 호출하도록 설계되어 있다면, "Channel consent simplification" 기능으로 인해 LINE MINI App이 예상과 다르게 동작할 수 있습니다.

예를 들어 LINE MINI App이 [ID 토큰 검증](https://developers.line.biz/en/reference/line-login/#verify-id-token) 엔드포인트를 호출하여 가져온 사용자 [프로필 정보](https://developers.line.biz/en/glossary/#profile-information)로 LINE MINI App의 서비스 계정을 만들도록 설계되어 있다고 가정해 보겠습니다. "Channel consent simplification" 기능은 사용자 프로필 정보를 가져오는 권한(`profile` 스코프)에 대한 동의를 건너뛰므로, ID 토큰 페이로드에 사용자 프로필 정보가 포함되지 않습니다. 따라서 사용자 프로필 정보로 서비스 계정을 만들 수 없습니다.

이 문제를 방지하려면 액세스 토큰이나 ID 토큰을 가져오기 전에 [`liff.permission.query()`](https://developers.line.biz/en/reference/liff/#permission-query) 메서드와 [`liff.permission.requestAll()`](https://developers.line.biz/en/reference/liff/#permission-request-all) 메서드를 사용하여 검증 화면을 표시하고, 사용자에게 필요한 권한을 요청하세요. 자세한 내용은 [검증 화면에서 `openid` 스코프 이외의 권한 요청하기](https://developers.line.biz/en/docs/line-mini-app/develop/channel-consent-simplification/#request-permissions-other-than-openid)를 참고하세요.

<!-- note end -->

### "Channel consent simplification" 기능 설정 

"Channel consent simplification" 기능은 다음 조건을 모두 충족하는 경우에만 설정할 수 있습니다.

- LINE MINI App 채널의 **Region to provide the service**가 "Japan"으로 설정되어 있어야 합니다.
- LINE MINI App 채널의 상태가 "Not yet reviewed"여야 합니다.

2026년 1월 8일 이전에 만든 LINE MINI App 채널에서 "Channel consent simplification" 기능을 활성화하려면, [LINE Developers Console](https://developers.line.biz/console/)에서 LINE MINI App 채널의 **Web app settings** 탭에 있는 Channel consent simplification 섹션의 토글을 켜세요.

![](https://developers.line.biz/media/line-mini-app/simplification-feature-setup-en.webp)

"Channel consent simplification" 기능은 사용자 ID를 가져오는 권한(`openid` 스코프)에 대한 동의를 간소화하므로, 이 기능을 활성화하면 Scope 섹션에서 `openid`도 자동으로 활성화된다는 점에 유의하세요.

![](https://developers.line.biz/media/line-mini-app/simplification-scope-en.png)

2026년 1월 8일 이후에 만든 LINE MINI App 채널에서는 "Channel consent simplification" 기능이 항상 활성화되어 있습니다. LINE Developers Console에서 별도로 설정할 필요가 없습니다.

### "Channel consent simplification" 기능의 동작 조건 

"Channel consent simplification" 기능이 동작하려면 다음 조건을 모두 충족해야 합니다.

- LINE MINI App이 인증된 MINI App이어야 합니다(\*).
- LINE MINI App의 LIFF SDK 버전이 v2.13.x 이상이어야 합니다.

\* 인증되지 않은 MINI App의 경우, 이 기능은 Developing 및 Review용 LINE MINI App에서만 동작합니다.

#### LIFF 간 전환에서 "Channel consent simplification" 기능이 동작하기 위한 조건 

위의 [`"Channel consent simplification" 기능의 동작 조건`](https://developers.line.biz/en/docs/line-mini-app/develop/channel-consent-simplification/#operating-conditions)을 충족하는 LINE MINI App을 [LIFF 간 전환(LIFF-to-LIFF transition)](https://developers.line.biz/en/docs/liff/opening-liff-app/#move-liff-to-liff)으로 여는 경우, 이동 대상 URL이 [LIFF URL](https://developers.line.biz/en/glossary/#liff-url)이면 이 기능이 동작합니다. 다만 이동 대상 URL이 엔드포인트 URL이면 이 기능은 동작하지 않습니다.

## "Channel consent simplification" 기능이 활성화된 LINE MINI App의 인증 흐름 

"Channel consent simplification" 기능이 활성화된 LINE MINI App은 사용자 ID를 가져오는 권한(`openid` 스코프)이 부여된 상태로 열립니다.

추가 권한이 필요한 경우에는 [검증 화면에서 `openid` 스코프 이외의 권한 요청하기](https://developers.line.biz/en/docs/line-mini-app/develop/channel-consent-simplification/#request-permissions-other-than-openid)를 참고하세요.

![](https://developers.line.biz/media/line-mini-app/channel-consent-simplification/authorization-flow-enabled-en.webp)

### 검증 화면에서 `openid` 스코프 이외의 권한 요청하기 

[`liff.getProfile()`](https://developers.line.biz/en/reference/liff/#get-profile) 메서드나 [`liff.sendMessages()`](https://developers.line.biz/en/reference/liff/#send-messages) 메서드처럼 `openid` 스코프 이외의 권한이 필요한 메서드를 실행하면 검증 화면이 표시됩니다. 검증 화면에는 LINE MINI App이 요청하는 추가 권한이 표시되며, 사용자에게 해당 권한을 허용할지 묻습니다.

![](https://developers.line.biz/media/line-mini-app/line-mini-app-playground-verification-screen-en.webp)

다음 메서드는 `openid` 스코프 이외의 권한이 필요합니다.

| 스코프 | 메서드 |
| --- | --- |
| `email` | <ul><li>[`liff.getIDToken()`](https://developers.line.biz/en/reference/liff/#get-id-token)</li><li>[`liff.getDecodedIDToken()`](https://developers.line.biz/en/reference/liff/#get-decoded-id-token)</li></ul> |
| `profile` | <ul><li>[`liff.getProfile()`](https://developers.line.biz/en/reference/liff/#get-profile)</li><li>[`liff.getFriendship()`](https://developers.line.biz/en/reference/liff/#get-friendship)</li></ul> |
| `chat_message.write` | <ul><li>[`liff.sendMessages()`](https://developers.line.biz/en/reference/liff/#send-messages)</li></ul> |

[`liff.permission.query()`](https://developers.line.biz/en/reference/liff/#permission-query) 메서드와 [`liff.permission.requestAll()`](https://developers.line.biz/en/reference/liff/#permission-request-all) 메서드를 사용하면 원하는 시점에 검증 화면을 표시할 수 있습니다.

```javascript
liff.permission.query("profile").then((permissionStatus) => {
  if (permissionStatus.state === "prompt") {
    liff.permission.requestAll();
  }
});
```

자세한 내용은 LIFF API 레퍼런스의 [`liff.permission.query()`](https://developers.line.biz/en/reference/liff/#permission-query) 및 [`liff.permission.requestAll()`](https://developers.line.biz/en/reference/liff/#permission-request-all)을 참고하세요.

<!-- tip start -->

**"검증 화면"이 표시되는 시점**

"검증 화면"은 사용자가 LINE MINI App을 처음 여는 시점이 아니라, `openid` 스코프 이외의 스코프(예: [`profile` 스코프 또는 `chat_message.write` 스코프](https://developers.line.biz/en/docs/liff/registering-liff-apps/#registering-liff-app) 등)의 권한이 필요해지는 시점에 처음 표시됩니다.

따라서 사용자가 LINE MINI App에 접근하자마자 `liff.getProfile()` 메서드처럼 `openid` 스코프 이외의 권한이 필요한 요청을 실행하도록 LINE MINI App을 설계하면, 채널 동의 화면이 건너뛰어지지 않고 표시되는 것처럼 보일 수 있습니다. 가능한 경우, `openid` 스코프 이외의 권한이 필요한 요청은 실제로 필요한 시점에만 실행되도록 LINE MINI App을 구현하는 것을 권장합니다.

<!-- tip end -->

### "Channel consent simplification" 기능과 친구 추가 옵션을 함께 사용할 때의 주의사항 

LINE MINI App에서는 [친구 추가 옵션](https://developers.line.biz/en/docs/line-mini-app/service/add-friend-option/)을 사용하여 검증 화면이나 채널 동의 화면에서 사용자에게 LINE 공식 계정 추가를 권할 수 있습니다.

![](https://developers.line.biz/media/line-mini-app/channel-consent-simplification/add-friend-option-verification-screen-en.webp) ![](https://developers.line.biz/media/line-mini-app/channel-consent-simplification/add-friend-option-channel-consent-screen-en.webp)

다만, LINE MINI App 채널의 **Web app settings** 탭에 있는 Scope 섹션에 `openid`만 지정되어 있는 경우, "Channel consent simplification" 기능을 활성화하면 검증 화면과 채널 동의 화면이 표시되지 않습니다. 따라서 친구 추가 옵션을 사용하여 사용자에게 친구 추가를 권할 수 없습니다.

"Channel consent simplification" 기능과 친구 추가 옵션을 함께 사용할 때는 LINE MINI App 채널의 **Web app settings** 탭에 있는 Scope 섹션에 `openid` 이외의 스코프를 지정하고, 검증 화면을 표시하는 것을 권장합니다. 자세한 내용은 [검증 화면에서 `openid` 스코프 이외의 권한 요청하기](https://developers.line.biz/en/docs/line-mini-app/develop/channel-consent-simplification/#request-permissions-other-than-openid)를 참고하세요.

[`liff.requestFriendship()`](https://developers.line.biz/en/reference/liff/#request-friendship) 메서드를 사용하면 원하는 시점에 서브 창을 표시하여, 사용자에게 LINE 공식 계정을 친구로 추가하거나 차단을 해제하도록 안내할 수도 있습니다.

## "Channel consent simplification" 기능이 비활성화된 LINE MINI App의 인증 흐름 

"Channel consent simplification" 기능이 비활성화된 LINE MINI App에 사용자가 처음 접근하면 채널 동의 화면이 표시됩니다. 채널 동의 화면에는 LINE MINI App이 요청하는 권한 목록이 표시되며, 사용자에게 해당 권한을 허용할지 묻습니다.

사용자가 **Allow**를 탭하면 LINE MINI App을 사용할 수 있습니다.

![](https://developers.line.biz/media/line-mini-app/channel-consent-simplification/line-mini-app-playground-channel-consent-screen-en.webp)
