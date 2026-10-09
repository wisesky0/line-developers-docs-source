# LINE 공식 계정 친구 늘리기

LINE 공식 계정을 만들었다면 이제 LINE 공식 계정을 홍보하고 친구를 늘릴 차례입니다. 사용자에게 LINE 공식 계정을 노출하는 방법을 알아보십시오.

- [QR 코드 사용하기](https://developers.line.biz/en/docs/messaging-api/sharing-bot/#use-qr-code)
- [LINE 공식 계정의 LINE ID 공유하기](https://developers.line.biz/en/docs/messaging-api/sharing-bot/#share-the-line-id-of-your-line-official-account)
- [친구 추가 버튼 또는 링크 사용하기](https://developers.line.biz/en/docs/messaging-api/sharing-bot/#use-the-add-friend-button-or-link)
- [사용자가 LINE에서 친구에게 LINE 공식 계정을 추천하도록 유도하기](https://developers.line.biz/en/docs/messaging-api/sharing-bot/#encourage-users-to-recommend-your-bot-to-friends-on-line)
- [LINE 로그인에서 LINE 공식 계정 친구 추가를 안내하기](https://developers.line.biz/en/docs/messaging-api/sharing-bot/#prompt-users-to-add-your-line-official-account-at-line-login)

## QR 코드 사용하기 

LINE 공식 계정의 QR 코드를 웹사이트에 게시하거나 인쇄물로 공유하십시오. 사용자는 QR 코드를 스캔하기만 하면 LINE 공식 계정을 친구로 추가할 수 있습니다. QR 코드는 [LINE Developers Console](https://developers.line.biz/console/) 또는 [LINE Official Account Manager](https://manager.line.biz/)에서 얻을 수 있습니다.

LINE Developers Console에서 채널 설정의 **Messaging API** 탭을 클릭하십시오.

![](https://developers.line.biz/media/messaging-api/sharing-bot/qr-code-console-en.png)

LINE Official Account Manager에서 **Home** > **Gain friends** > **"Add friend" tools** > **Create an "Add friend" QR code**를 클릭하십시오. HTML 스니펫을 복사하여 웹사이트에 붙여넣으면 QR 코드를 표시할 수 있습니다.

![](https://developers.line.biz/media/messaging-api/sharing-bot/qr-code-oa-manager-en.webp)

## LINE 공식 계정의 LINE ID 공유하기 

사용자가 LINE에서 LINE 공식 계정을 검색하여 친구로 추가할 수 있도록 LINE 공식 계정의 LINE ID를 알려주십시오. LINE 공식 계정의 LINE ID는 [LINE Official Account Manager](https://manager.line.biz/) 헤더에서 확인할 수 있습니다. 앳 기호(@)가 붙은 텍스트가 LINE 공식 계정의 LINE ID입니다.

또한 프리미엄 ID를 구매하면 사용자가 기억하기 쉬운 맞춤형 LINE ID를 만들 수 있습니다. 프리미엄 ID에 대한 자세한 내용은 LINE for Business의 [구독 플랜](https://www.lycbiz.com/jp/service/line-official-account/plan/)(일본어로만 제공)을 참고하십시오.

![](https://developers.line.biz/media/messaging-api/sharing-bot/oa-manager-line-id.png)

## 친구 추가 버튼 또는 링크 사용하기 

앱이나 웹사이트에 버튼 또는 링크를 추가하면, 사용자는 기기에서 한 번의 탭으로 LINE 공식 계정을 친구로 추가할 수 있습니다. 다음 버튼 또는 링크를 추가할 수 있습니다.

- [LINE Social Plugins의 친구 추가 버튼](https://developers.line.biz/en/docs/messaging-api/sharing-bot/#add-friend-button-by-line-social-plugins)
- [LINE Official Account Manager의 친구 추가 버튼](https://developers.line.biz/en/docs/messaging-api/sharing-bot/#add-friend-button-by-the-line-manager)
- [프로필 페이지용 LINE URL 스킴](https://developers.line.biz/en/docs/messaging-api/sharing-bot/#line-url-scheme-for-profile-page)

### LINE Social Plugins의 친구 추가 버튼 

[LINE Social Plugins](https://developers.line.biz/en/docs/line-social-plugins/install-guide/using-add-friend-buttons/)는 **친구 추가** 버튼용 코드를 생성합니다. 이 버튼을 추가하려면 코드를 앱이나 웹사이트에 복사하여 붙여넣기만 하면 됩니다. 이 버튼은 여러 언어를 지원합니다. 버튼 옆에 LINE 공식 계정의 친구 수를 함께 표시할 수도 있습니다.

LINE Social Plugins로 생성한 **친구 추가** 버튼을 사용하려면 [버튼 만들기](https://developers.line.biz/en/docs/line-social-plugins/install-guide/using-add-friend-buttons/#create-button)의 안내를 참고하십시오.

![](https://developers.line.biz/media/messaging-api/sharing-bot/add-friend-button-types-en.png)

### LINE Official Account Manager의 친구 추가 버튼 

[LINE Official Account Manager](https://manager.line.biz/)는 **친구 추가** 버튼용 코드를 생성합니다. **Home** > **Gain Friends** > **"Add friend" tools** > **Create a button**을 클릭하십시오. HTML 코드를 복사하여 웹사이트에 붙여넣으면 버튼을 표시할 수 있습니다.

![](https://developers.line.biz/media/messaging-api/sharing-bot/add-friend-button-oa-manager-en.webp)

### 프로필 페이지용 LINE URL 스킴 

웹 앱이나 네이티브 앱에서 이 LINE URL 스킴을 사용하여 사용자에게 LINE 공식 계정을 친구로 추가하도록 안내할 수 있습니다. 이 LINE URL 스킴은 LINE for iOS 또는 LINE for Android에서 탭하면 LINE 공식 계정의 비즈니스 프로필 페이지를 엽니다.

- https://line.me/R/ti/p/`{퍼센트 인코딩된 LINE ID}`&nbsp;

예를 들어 [`https://line.me/R/ti/p/%40linedevelopers`](https://line.me/R/ti/p/%40linedevelopers)는 LINE Developers의 LINE 공식 계정 비즈니스 프로필 페이지를 표시합니다. LINE URL 스킴에 대한 자세한 내용은 [LINE 공식 계정 공유하기](https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/#sharing-line-official-account)를 참고하십시오.

![](https://developers.line.biz/media/messaging-api/sharing-bot/add-line-developers-oa-en.webp)

## 사용자가 LINE에서 친구에게 LINE 공식 계정을 추천하도록 유도하기 

사용자가 이미 LINE 공식 계정을 친구로 추가했다면, 이 LINE URL 스킴을 사용하여 사용자가 LINE에서 친구에게 LINE 공식 계정을 추천하도록 유도할 수 있습니다.

- https://line.me/R/nv/recommendOA/`{@가 붙은 LINE ID}`&nbsp;

예를 들어 이 LINE URL 스킴을 [리치 메뉴](https://developers.line.biz/en/docs/messaging-api/using-rich-menus/)의 [URI 액션 객체](https://developers.line.biz/en/reference/messaging-api/#uri-action)나 [템플릿 메시지](https://developers.line.biz/en/docs/messaging-api/message-types/#template-messages)에 지정할 수 있습니다. 이 LINE URL 스킴에 대한 자세한 내용은 [LINE 공식 계정 공유하기](https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/#sharing-line-official-account)를 참고하십시오.

![](https://developers.line.biz/media/messaging-api/sharing-bot/recommend-line-developers-rich-menu.webp)

## LINE 로그인에서 LINE 공식 계정 친구 추가를 안내하기 

웹 앱이나 네이티브 앱에서 [LINE 로그인](https://developers.line.biz/en/docs/line-login/overview/)을 사용하고 있다면, LINE 공식 계정을 LINE 로그인 채널에 연결하여 로그인 중에 사용자에게 LINE 공식 계정을 친구로 추가하도록 안내할 수 있습니다. 동의 화면에 옵션을 포함하거나, 사용자가 동의한 후 별도의 "LINE 공식 계정 추가" 화면을 열도록 선택할 수 있습니다.

LINE 공식 계정을 LINE 로그인 채널에 연결하는 방법은 [로그인 시 LINE 공식 계정을 친구로 추가(친구 추가 옵션)](https://developers.line.biz/en/docs/line-login/link-a-bot/)를 참고하십시오.

![bot_prompt=normal이면 동의 화면에 친구 추가 옵션이 표시됩니다. bot_prompt=aggressive이면 사용자가 동의한 후에 친구 추가 옵션이 표시됩니다.](https://developers.line.biz/media/line-login/link-a-bot/bot-prompt-en.webp)

## 더 알아보기 

- [LINE URL 스킴으로 LINE 기능 사용하기](https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/)
- [Messaging API 레퍼런스](https://developers.line.biz/en/reference/messaging-api/)
- [LINE Social Plugins](https://developers.line.biz/en/docs/line-social-plugins/)
- [LINE Official Account Manager](https://manager.line.biz/)
