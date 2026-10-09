# 승인된 앱 관리하기

사용자가 LINE Login 채널을 사용할 때 [사용자 ID](https://developers.line.biz/en/glossary/#user-id) 등 자신의 정보를 가져가는 데 대해 동의해야 합니다. 동의한 후에는 사용자가 언제든지 동의 내용을 확인하거나 동의를 철회할 수 있습니다.

1. LINE 앱에서 **Settings** > **Account** > **Authorized apps**를 탭합니다. <br> "Authorized apps" 설정 화면이 표시됩니다.
2. 승인을 해제할 앱을 탭합니다.<br> 승인된 앱 화면이 표시됩니다.<br> ![Authorized app](https://developers.line.biz/media/line-login/managing-authorized-apps/authorized-app-en.webp)<br> 동의 내용을 확인하려면 "View permissions"를 탭합니다. <br> 동의를 철회하려면 "Unlink"를 탭합니다.

## 사용자가 동의를 철회한 경우 

사용자가 동의를 철회하면 액세스 토큰과 리프레시 토큰은 즉시 비활성화되며, 사용자와 provider에게 다음과 같은 영향을 줍니다.

| 대상 | 설명 |
| --- | --- |
| 사용자 | <ul><li>동의를 철회한 앱에서 LINE Login을 사용하려고 하면 동의 화면이 다시 표시됩니다.</li><li>동의를 얻기 전까지 LINE Login이 제한됩니다.</li></ul> |
| Provider | <ul><li>이미 획득한 액세스 토큰이 있더라도 사용자 ID나 프로필 정보를 가져올 수 없습니다.</li><li>리프레시 토큰을 사용할 수 없으므로 액세스 토큰을 갱신할 수 없습니다.</li><li>사용자가 다시 동의하고 LINE Login을 사용하기 전까지는 사용자 ID나 프로필 정보를 가져올 수 없습니다.</li></ul> |

<!-- note start -->

**사용자의 동의 철회 결정을 존중하십시오**

LINE 사용자는 provider마다 서로 다른 사용자 ID를 갖습니다. 사용자가 동의를 철회한 후 다시 동의하더라도 사용자 ID는 바뀌지 않습니다. 따라서 동의를 철회한 후에도 특정 사용자 ID와 연결된 정보는 계속 사용될 수 있습니다.

그러나 사용자의 동의 철회 결정을 존중하고, 액세스 토큰을 검증할 때 사용자 정보를 다시 얻지 않아야 합니다.

액세스 토큰이 유효하지 않게 된 경우 다음 조치를 취하십시오.

- 액세스 토큰이 만료되어 유효하지 않게 되면 리프레시 토큰을 사용하여 액세스 토큰을 갱신하십시오.
- 다만 사용자가 동의를 철회했다면 액세스 토큰과 리프레시 토큰 모두 사용할 수 없습니다.

사용자 정보는 [LINE User Data Policy](https://terms2.line.me/LINE_Developers_user_data_policy?lang=en)에 따라 올바르게 처리해야 합니다. LINE User Data Policy를 준수하지 않으면 서비스가 중단될 수 있습니다.

<!-- note end -->
