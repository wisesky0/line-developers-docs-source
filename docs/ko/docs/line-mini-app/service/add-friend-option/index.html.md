# LINE MINI App에서 LINE 공식 계정을 친구로 추가하기 (친구 추가 옵션)

친구 추가 옵션을 사용하면 LINE MINI App에서 사용자가 LINE 공식 계정을 친구로 추가하도록 유도할 수 있습니다.

## 친구 추가 옵션이란 

LINE MINI App의 [인증 화면](https://developers.line.biz/en/docs/line-mini-app/develop/configure-console/#verification-screen) 또는 [채널 동의 화면](https://developers.line.biz/en/docs/line-mini-app/develop/configure-console/#consent-screen-settings)에 LINE 공식 계정을 친구로 추가하는 옵션을 표시할 수 있습니다. 이를 친구 추가 옵션이라고 합니다.

![](https://developers.line.biz/media/line-mini-app/channel-consent-simplification/add-friend-option-verification-screen-en.webp) ![](https://developers.line.biz/media/line-mini-app/channel-consent-simplification/add-friend-option-channel-consent-screen-en.webp)

<!-- tip start -->

**인증된 제공자의 경우 인증 화면의 친구 추가 옵션이 기본으로 활성화됩니다**

LINE MINI App 채널이 [인증된 제공자](https://developers.line.biz/en/docs/line-developers-console/overview/#certified-provider)에 속한 경우, 인증 화면과 채널 동의 화면의 친구 추가 옵션이 기본으로 활성화됩니다.

사용자가 옵션을 직접 끄지 않는 한, 사용자가 인증 화면 또는 채널 동의 화면에서 권한을 허용하면 친구 추가 옵션으로 지정된 LINE 공식 계정이 친구로 추가됩니다.

<!-- tip end -->

## 친구 추가 옵션의 요구 사항 

친구 추가 옵션을 사용해 LINE MINI App을 LINE 공식 계정과 연결하려면 다음 조건을 모두 충족해야 합니다.

- LINE 공식 계정이 Messaging API를 사용합니다 (\*1).
- LINE 공식 계정에 연결된 Messaging API 채널과 LINE MINI App 채널이 같은 제공자에 속합니다.
- 작업을 수행하는 계정이 LINE MINI App 채널의 Admin 역할 (\*2)과 LINE 공식 계정의 Administrator 역할 (\*3)을 모두 가지고 있습니다.

\*1 LINE 공식 계정에서 Messaging API를 사용하는 방법은 Messaging API 문서의 [LINE 공식 계정에서 Messaging API 활성화하기](https://developers.line.biz/en/docs/messaging-api/getting-started/#using-oa-manager)를 참고하세요.\
\*2 LINE MINI App 채널의 Admin 역할은 [LINE Developers Console](https://developers.line.biz/console/)에서 확인할 수 있습니다.\
\*3 LINE 공식 계정의 Administrator 역할은 [LINE Official Account Manager](https://manager.line.biz)에서 확인할 수 있습니다.

## 친구 추가 옵션 설정 방법 

1. [LINE Developers Console](https://developers.line.biz/console/)에서 LINE MINI App 채널의 **Web app settings** 탭을 엽니다.
1. **Add friend option**을 "On (normal)"로 설정합니다.
1. **Basic settings** 탭을 엽니다.
1. **Default LINE Official Account** 섹션에서 **Edit** (\*)을 클릭합니다.
1. LINE MINI App 채널에 연결할 LINE 공식 계정을 선택하고 **Update**를 클릭합니다.

\* 태국 및 대만의 LINE MINI App 채널은 **Linked LINE Official Account** 섹션에서 **Edit**를 클릭합니다.

## 언제든지 사용자에게 LINE 공식 계정 추가 또는 차단 해제 요청하기 

[`liff.requestFriendship()`](https://developers.line.biz/en/reference/liff/#request-friendship) 메서드를 사용하면 사용자에게 LINE 공식 계정을 추가하거나 차단을 해제하도록 요청하는 서브 창을 언제든지 표시할 수 있습니다.

자세한 내용은 LIFF API 레퍼런스의 [`liff.requestFriendship()`](https://developers.line.biz/en/reference/liff/#request-friendship)을 참고하세요.

## 친구 추가 옵션에서 여러 LINE 공식 계정 사용하기 

친구 추가 옵션에서 여러 LINE 공식 계정을 사용할 수도 있습니다. 이 기능을 사용하면 미리 허용 목록(\*)에 추가된 LINE 공식 계정 중에서 사용자 상황에 맞는 계정을 친구 추가 대상으로 표시할 수 있습니다.

요구 사항과 사용 방법에 대한 자세한 내용은 다음 섹션을 참고하세요.

- [여러 LINE 공식 계정 사용을 위한 요구 사항](https://developers.line.biz/en/docs/line-mini-app/service/add-friend-option/#use-multiple-accounts-requirements)
- [여러 LINE 공식 계정 사용 방법](https://developers.line.biz/en/docs/line-mini-app/service/add-friend-option/#how-to-use-multiple-accounts)

\* 인증 화면, 채널 동의 화면 및 기타 화면에 표시될 수 있는 LINE 공식 계정의 목록입니다.

### 여러 LINE 공식 계정 사용을 위한 요구 사항 

친구 추가 옵션에서 여러 LINE 공식 계정을 사용하려면 [친구 추가 옵션의 요구 사항](https://developers.line.biz/en/docs/line-mini-app/service/add-friend-option/#requirements)을 충족하는 것 외에, LINE MINI App 채널의 **Region to provide the service**를 "Japan"으로 설정해야 합니다.

### 여러 LINE 공식 계정 사용 방법 

친구 추가 옵션에서 여러 LINE 공식 계정을 사용하려면 다음과 같이 설정하고 구현합니다.

1. [LINE Developers Console에서 여러 LINE 공식 계정 사용 기능 설정하기](https://developers.line.biz/en/docs/line-mini-app/service/add-friend-option/#configure-use-multiple-accounts)
1. [LINE MINI App에서 사용자에게 친구 추가를 요청하는 LINE 공식 계정 전환하기](https://developers.line.biz/en/docs/line-mini-app/service/add-friend-option/#switch-line-official-account)

#### 1. LINE Developers Console에서 여러 LINE 공식 계정 사용 기능 설정하기 

1. [LINE Developers Console](https://developers.line.biz/console/)에서 LINE MINI App 채널의 **Web app settings** 탭을 엽니다.
1. **Add friend option**을 "On (normal)"로 설정합니다.
1. **Basic settings** 탭을 엽니다.
1. **Add friend option** 섹션에서 **Use multiple accounts**를 클릭합니다.

   ![](https://developers.line.biz/media/line-mini-app/service/add-friend-option/use-multiple-accounts-en.png)

1. 허용 목록에 관한 주요 사항이 표시됩니다. 내용을 확인하고 **Agree and enable**을 클릭합니다.

   ![](https://developers.line.biz/media/line-mini-app/service/add-friend-option/agree-and-enable-en.png)

1. 허용 목록 편집 화면이 표시됩니다. **Default LINE Official Account**로 설정된 계정을 포함하여 최대 1,000개의 LINE 공식 계정을 허용 목록에 추가할 수 있습니다. 허용 목록에 추가할 계정을 선택하고 **Confirm**을 클릭합니다.

   ![](https://developers.line.biz/media/line-mini-app/service/add-friend-option/confirm-en.png)

1. 확인 화면이 표시됩니다. 변경 사항이 올바른지 확인하고 **Apply**를 클릭합니다.

   ![](https://developers.line.biz/media/line-mini-app/service/add-friend-option/apply-en.png)

<!-- note start -->

**허용 목록에 관한 주요 사항**

- 이 LINE MINI App과 같은 서비스의 LINE 공식 계정만 허용 목록에 추가하세요.
- 다른 서비스의 LINE 공식 계정을 허용 목록에 추가하면 [LINE MINI App 정책](https://terms2.line.me/LINE_MINI_App?lang=en)을 위반하게 됩니다.
- 정책 위반이 확인되면 채널이 정지될 수 있습니다.
- 허용 목록의 변경 사항은 심사 없이 즉시 적용됩니다.
- **Default LINE Official Account**로 설정된 계정 외에 허용 목록에 추가된 LINE 공식 계정이 없으면 **Use multiple accounts**가 자동으로 비활성화됩니다.

<!-- note end -->

<!-- tip start -->

**기본 LINE 공식 계정 설정은 선택 사항입니다**

친구 추가 옵션에서 여러 LINE 공식 계정을 사용할 때 **Default LINE Official Account** 설정은 선택 사항입니다.

**Default LINE Official Account**를 설정하면 인증 화면, 채널 동의 화면 또는 기타 화면에 표시할 LINE 공식 계정을 가져오지 못했을 때 대체 계정으로 표시할 수 있습니다.

<!-- tip end -->

#### 2. LINE MINI App에서 사용자에게 친구 추가를 요청하는 LINE 공식 계정 전환하기 

- [인증 화면에 표시되는 LINE 공식 계정 전환하기](https://developers.line.biz/en/docs/line-mini-app/service/add-friend-option/#verification-screen)
- [채널 동의 화면에 표시되는 LINE 공식 계정 전환하기](https://developers.line.biz/en/docs/line-mini-app/service/add-friend-option/#channel-consent-screen)
- [사용자에게 계정 추가 또는 차단 해제를 요청하는 서브 창에 표시되는 LINE 공식 계정 전환하기](https://developers.line.biz/en/docs/line-mini-app/service/add-friend-option/#subwindow)

##### 인증 화면에 표시되는 LINE 공식 계정 전환하기 

인증 화면에 표시되는 LINE 공식 계정을 전환하려면 [`liff.permission.requestAll()`](https://developers.line.biz/en/reference/liff/#permission-request-all) 메서드에서 `officialAccount` 속성을 지정합니다. `officialAccount` 속성을 지정하려면 LIFF SDK v2.30.0 이상이 필요합니다.

```javascript
try {
  const permissionStatus = await liff.permission.query("profile");

  if (permissionStatus.state === "prompt") {
    await liff.permission.requestAll({
      officialAccount: {
        id: "@819...",
        fallback: true,
      },
    });
  }
} catch (error) {
  console.error(error);
}
```

자세한 내용은 LIFF API 레퍼런스의 [`liff.permission.requestAll()`](https://developers.line.biz/en/reference/liff/#permission-request-all)을 참고하세요.

[`openid` 스코프 이외의 권한이 필요한 메서드](https://developers.line.biz/en/docs/line-mini-app/develop/channel-consent-simplification/#request-permissions-other-than-openid)를 실행할 때도 인증 화면이 표시될 수 있습니다. 이 경우 **Default LINE Official Account**로 설정된 LINE 공식 계정이 표시되며, 다른 LINE 공식 계정으로 전환할 수는 없습니다.

##### 채널 동의 화면에 표시되는 LINE 공식 계정 전환하기 

<!-- note start -->

**채널 동의 화면에 표시되는 LINE 공식 계정을 전환하는 기능은 일시적으로 중단되었습니다**

기술적인 문제로 인해 채널 동의 화면에 표시되는 LINE 공식 계정을 전환하는 기능이 일시적으로 중단되었습니다. 자세한 내용은 [2026년 9월 15일](https://developers.line.biz/en/news/2026/09/15/use-multiple-accounts/)자 소식을 참고하세요.

<!-- note end -->

채널 동의 화면에 표시되는 LINE 공식 계정을 전환하려면 [LIFF URL](https://developers.line.biz/en/glossary/#liff-url) 또는 [퍼머넌트 링크](https://developers.line.biz/en/glossary/#permanent-link-liff)에 `prompt_bot_id` 쿼리 파라미터를 추가합니다. `prompt_bot_id` 쿼리 파라미터에는 사용자에게 친구 추가를 요청할 LINE 공식 계정의 ID를 베이직 ID 또는 [프리미엄 ID](https://developers.line.biz/en/glossary/#premium-id)로 지정합니다.

```
https://miniapp.line.me/123456-abcedfg?prompt_bot_id=@819...
```

##### 사용자에게 계정 추가 또는 차단 해제를 요청하는 서브 창에 표시되는 LINE 공식 계정 전환하기 

[`liff.requestFriendship()`](https://developers.line.biz/en/reference/liff/#request-friendship) 메서드를 사용하면 사용자에게 LINE 공식 계정을 추가하거나 차단을 해제하도록 요청하는 서브 창을 언제든지 표시할 수 있습니다.

서브 창에 표시되는 LINE 공식 계정을 전환하려면 `liff.requestFriendship()` 메서드에서 `officialAccount` 속성을 지정합니다. `officialAccount` 속성을 지정하려면 LIFF SDK v2.30.0 이상이 필요합니다.

```javascript
try {
  await liff.requestFriendship({
    officialAccount: {
      id: "@819...",
      fallback: true,
    },
    template: { id: "coupon" },
  });
} catch (error) {
  console.log(error);
}
```

자세한 내용은 LIFF API 레퍼런스의 [`liff.requestFriendship()`](https://developers.line.biz/en/reference/liff/#request-friendship)을 참고하세요.

## 친구 추가 옵션과 "채널 동의 간소화" 기능을 함께 사용할 때의 주요 사항 

친구 추가 옵션을 "[채널 동의 간소화](https://developers.line.biz/en/docs/line-mini-app/develop/channel-consent-simplification/#what-is-channel-consent-simplification)" 기능과 함께 사용하면 인증 화면과 채널 동의 화면이 표시되지 않을 수 있습니다.

자세한 내용은 [친구 추가 옵션과 함께 "채널 동의 간소화" 기능을 사용할 때의 주요 사항](https://developers.line.biz/en/docs/line-mini-app/develop/channel-consent-simplification/#add-friend-option)을 참고하세요.
