# 리치 메뉴 체험하기

Rich Menu Playground는 리치 메뉴 기능을 테스트할 수 있는 LINE 공식 계정입니다. 이 계정은 일본어로만 서비스됩니다. [datetime picker action](https://developers.line.biz/en/reference/messaging-api/#datetime-picker-action)을 이용한 날짜 선택이나 [리치 메뉴 별칭(rich menu aliases)](https://developers.line.biz/en/docs/messaging-api/switch-rich-menus/)을 이용한 리치 메뉴 전환 등 리치 메뉴 기능을 직접 체험해 볼 수 있습니다.

![Rich Menu Playground 메인 화면](https://developers.line.biz/media/messaging-api/rich-menu-playground/richmenu-playground-bot-overview.webp)

## Rich Menu Playground 추가하기 

LINE 계정에서 Rich Menu Playground를 친구로 추가하면 리치 메뉴 기능을 테스트할 수 있습니다. 아래 안내에 따라 다양한 방법으로 Rich Menu Playground를 추가할 수 있습니다.

<!-- tip start -->

**스마트폰에서 Rich Menu Playground 사용하기**

리치 메뉴는 LINE for PC(macOS, Windows)에서 표시되지 않습니다. Rich Menu Playground를 체험하려면 스마트폰을 사용하세요.

<!-- tip end -->

| 추가 방법 | 추가 방법 안내 |
| --- | --- |
| URL | 스마트폰 브라우저에서 [https://lin.ee/7ALASDvA](https://lin.ee/7ALASDvA)를 열고 추가합니다. |
| QR 코드 | Rich Menu Playground의 QR 코드를 스캔하여 추가합니다. [^qrcode]</br></br>![Rich Menu Playground QR 코드](https://qr-official.line.me/sid/M/976nukmg.png) |
| ID | LINE에서 ID `@try_richmenu`를 검색하여 계정을 추가합니다.[^search-line-id] |

[^qrcode]: LINE 사용자 가이드에서 [링크 또는 QR 코드로 친구를 추가하는 방법](https://guide.line.me/ja/friends-and-groups/add-qrurl.html)을 확인하세요(일본어로만 제공됩니다).
[^search-line-id]: LINE 사용자 가이드에서 [ID 검색으로 친구를 추가하는 방법](https://guide.line.me/ja/friends-and-groups/search-line-id.html)을 확인하세요(일본어로만 제공됩니다).

## Rich Menu Playground 공통 기능 

Rich Menu Playground를 친구로 추가했다면 이제 리치 메뉴에 설정된 액션을 체험해 볼 수 있습니다. [리치 메뉴의 레이아웃](https://developers.line.biz/en/docs/messaging-api/try-rich-menu/#main-rich-menu)을 확인하고, 액션을 실행한 후 [액션 상세 정보](https://developers.line.biz/en/docs/messaging-api/try-rich-menu/#message-from-rich-menu-playground)를 확인하는 방법을 알아보세요.

### 리치 메뉴 레이아웃 

Rich Menu Playground의 리치 메뉴는 네 가지 주요 구성 요소로 이루어져 있습니다.

1. 탭: 다양한 액션을 체험할 수 있는 메뉴를 포함합니다.
2. 내비게이션 버튼: 탭 그룹 간에 이동합니다.
3. 액션 버튼: 버튼에 설정된 액션을 실행합니다. 액션에 파라미터가 필요한 경우 파라미터마다 체험할 수 있는 버튼이 표시됩니다.
4. 도움말 버튼: 대상 액션의 문서를 엽니다.

![메인 메뉴](https://developers.line.biz/media/messaging-api/rich-menu-playground/menu-descriptions.webp)

### 액션 상세 정보 

액션을 실행하면 Rich Menu Playground가 해당 액션을 수행한 후 실행한 액션의 상세 정보를 보여 줍니다. 화면에 별다른 결과가 표시되지 않는 액션이라도 실행되었는지 확인할 수 있습니다. 액션 상세 정보에는 액션 설명, 액션 설정(파라미터), LINE 플랫폼이 봇 서버로 보낸 웹훅 이벤트가 포함됩니다.

![액션 실행 후 메시지](https://developers.line.biz/media/messaging-api/rich-menu-playground/message.webp)

## Rich Menu Playground에서 체험할 수 있는 액션 

Rich Menu Playground에서 다음 액션을 테스트할 수 있습니다.

- [메시지 액션](https://developers.line.biz/en/docs/messaging-api/try-rich-menu/#try-message-action)
- [포스트백 액션(1)](https://developers.line.biz/en/docs/messaging-api/try-rich-menu/#try-postback-1-action)
- [포스트백 액션(2)](https://developers.line.biz/en/docs/messaging-api/try-rich-menu/#try-postback-2-action)
- [포스트백 액션(3)](https://developers.line.biz/en/docs/messaging-api/try-rich-menu/#try-postback-3-action)
- [URI 액션](https://developers.line.biz/en/docs/messaging-api/try-rich-menu/#try-uri-action)
- [Datetime picker 액션](https://developers.line.biz/en/docs/messaging-api/try-rich-menu/#try-datetime-picker-action)
- [리치 메뉴 전환 액션](https://developers.line.biz/en/docs/messaging-api/try-rich-menu/#try-richmenu-switch-action)

### 메시지 액션 테스트 

이 탭에서는 리치 메뉴에서 [메시지 액션](https://developers.line.biz/en/reference/messaging-api/#message-action)을 실행하여 메시지를 보낼 수 있습니다.

![메시지 액션 체험](https://developers.line.biz/media/messaging-api/rich-menu-playground/01-message-action-ja.webp)

<!-- tip start -->

**메시지 액션**

사용자가 LINE 공식 계정과의 채팅에서 리치 메뉴를 통해 메시지를 보내면 LINE 플랫폼은 해당하는 [메시지 이벤트](https://developers.line.biz/en/reference/messaging-api/#message-event)를 봇 서버로 보냅니다. 봇 서버는 메시지 이벤트와 함께 전달된 응답 토큰(reply token)으로 [응답 메시지](https://developers.line.biz/en/reference/messaging-api/#send-reply-message)를 보낼 수 있습니다.

<!-- tip end -->

| 버튼 레이블 | 액션 | 액션 객체 |
| --- | --- | --- |
| 메시지 보내기 | 메시지를 보냅니다 | `{"type":"message", "label":"メッセージを送信する","text":"message sent successfully!"}` |

### 포스트백 액션(1) 테스트 

이 탭에서는 리치 메뉴에서 [포스트백 액션](https://developers.line.biz/en/reference/messaging-api/#postback-action)을 실행할 수 있습니다. 이 액션을 실행하면 LINE 플랫폼은 포스트백 액션 객체의 `data` 속성에 지정된 문자열을 담은 [포스트백 이벤트](https://developers.line.biz/en/reference/messaging-api/#postback-event)를 봇 서버로 보냅니다.

![포스트백 액션(1) 체험](https://developers.line.biz/media/messaging-api/rich-menu-playground/02-postback-action-ja.webp)

<!-- tip start -->

**포스트백 액션**

사용자가 [포스트백 액션](https://developers.line.biz/en/reference/messaging-api/#postback-action)이 설정된 리치 메뉴를 탭하면 LINE 플랫폼은 [포스트백 이벤트](https://developers.line.biz/en/reference/messaging-api/#postback-event)를 봇 서버로 보냅니다. 이 포스트백 이벤트에는 포스트백 액션의 `data` 속성에 지정한 문자열이 포함됩니다.

`data` 속성에 지정한 내용은 사용자에게 표시되지 않습니다. 따라서 고유 파라미터나 식별자 같은 데이터를 봇 서버로 안전하게 전달할 수 있습니다. 포스트백 이벤트에서 받은 응답 토큰으로 [응답 메시지](https://developers.line.biz/en/reference/messaging-api/#send-reply-message)를 보낼 수 있습니다.

<!-- tip end -->

| 버튼 레이블 | 액션 | 액션 객체 |
| --- | --- | --- |
| `displayText` 있음 | 포스트백 액션을 실행하고 채팅 화면에 텍스트를 표시합니다 | `{"type":"postback","label":"ディスプレイテキストあり","data":"actionId=21","displayText":"ディスプレイテキストです。トーク画面に表示されます。"}` |
| `displayText` 없음 | 포스트백 액션을 실행하지만 채팅 화면에 텍스트를 표시하지 않습니다 | `{"type":"postback","label":"ディスプレイテキストなし","data":"actionId=22"}` |

<!-- tip start -->

**채팅 화면의 텍스트(displayText)**

포스트백 액션을 실행할 때 사용자가 보낸 메시지처럼 채팅 화면에 텍스트를 표시하려면 포스트백 액션 객체에 `displayText` 속성을 지정합니다. 이 텍스트는 채팅 화면에 표시되지만, [메시지 이벤트](https://developers.line.biz/en/reference/messaging-api/#message-event)로 봇 서버에 전송되지는 않습니다.

<!-- tip end -->

### 포스트백 액션(2) 테스트 

이 탭에서는 리치 메뉴를 열고 닫는 [포스트백 액션](https://developers.line.biz/en/reference/messaging-api/#postback-action)을 체험할 수 있습니다. 포스트백 액션이 실행되면 `data` 속성에 지정된 문자열을 담은 [포스트백 이벤트](https://developers.line.biz/en/reference/messaging-api/#postback-event)가 LINE 플랫폼에서 봇 서버로 전송됩니다.

![포스트백 액션(2) 체험](https://developers.line.biz/media/messaging-api/rich-menu-playground/02-2-postback-action-ja.webp)

| 버튼 레이블 | 액션 | 액션 객체 |
| --- | --- | --- |
| 리치 메뉴 열기 | `inputOption:openRichMenu`를 설정하여 포스트백 액션을 실행합니다. | `{"type":"postback","label":"リッチメニューを開く","data":"actionId=","inputOption":"openRichMenu"}` |
| 리치 메뉴 닫기 | `inputOption:closeRichMenu`를 설정하여 포스트백 액션을 실행합니다. | `{"type":"postback","label":"リッチメニューを閉じる","data":"actionId=","inputOption":"closeRichMenu"}` |

### 포스트백 액션(3) 테스트 

이 탭에서는 키보드 입력 모드와 음성 메시지 입력 모드를 여는 [포스트백 액션](https://developers.line.biz/en/reference/messaging-api/#postback-action)이 설정된 리치 메뉴를 체험할 수 있습니다. 포스트백 액션이 실행되면 `data` 속성에 지정된 문자열을 담은 [포스트백 이벤트](https://developers.line.biz/en/reference/messaging-api/#postback-event)가 LINE 플랫폼에서 봇 서버로 전송됩니다.

![포스트백 액션(3) 체험](https://developers.line.biz/media/messaging-api/rich-menu-playground/02-3-postback-action-ja.webp)

| 버튼 레이블 | 액션 | 액션 객체 |
| --- | --- | --- |
| 키보드 열기 | `inputOption:openKeyboard`를 설정하여 포스트백 액션을 실행합니다. | `{"type":"postback","label":"キーボードを開く","data":"actionId=","inputOption":"openKeyboard"}` |
| fillInText가 있는 키보드 열기 | `inputOption:openKeyboard`와 `fillInText`를 설정하여 포스트백 액션을 실행합니다. | `{"type":"postback","label":"キーボードを開くフィルインテキストあり","data":"actionId=","inputOption":"openKeyboard","fillInText":"---\予約番号: \予約メニュー番号: \n予約日時: \n---"}` |
| 음성 메시지 입력 모드 열기 | `inputOption:openVoice`를 설정하여 포스트백 액션을 실행합니다. | `{"type":"postback","label":"ボイスメッセージ入力モードを開く","data":"actionId=","inputOption":"openVoice"}` |

### URI 액션 테스트 

이 탭에서는 리치 메뉴에서 [URI 액션](https://developers.line.biz/en/reference/messaging-api/#uri-action)을 실행할 수 있습니다. 이 액션을 실행하면 액션에 설정된 `uri`가 웹 브라우저에서 열립니다.

![URI 액션 체험](https://developers.line.biz/media/messaging-api/rich-menu-playground/03-uri-action-ja.webp)

| 버튼 레이블 | 액션 | 액션 객체 |
| --- | --- | --- |
| URL 열기 | 지정된 URI를 엽니다 | `{"type":"uri","label":"URLを開く","uri":"https://developers.line.biz/docs/messaging-api/actions/#uri-action"}` |
| 외부 브라우저에서 열기 | URI를 [외부 브라우저](https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/#opening-url-in-external-browser)에서 엽니다(`openExternalBrowser=0`) | `{"type":"uri","label":"外部ブラウザで開く","uri":"https://developers.line.biz/docs/messaging-api/actions/?openExternalBrowser=1#uri-action"}` |
| Chrome 커스텀 탭에서 열기(Android 전용) | 지원되는 경우 URI를 [인앱 브라우저](https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/#opening-url-in-external-browser)에서 엽니다(`openInAppBrowser=0`) | `{"type":"uri","label":"Chromeカスタムタブで開く","uri":"https://developers.line.biz/docs/messaging-api/actions/?openInAppBrowser=0#uri-action"}` |
| 설정 확인(흰색 버튼) | URI를 열지 않고 URI 액션 객체에 설정된 값을 보여 줍니다 | 해당 없음 |

<!-- tip start -->

**openInAppBrowser에 관하여**

`openInAppBrowser` 파라미터는 Android용 LINE에서만 LINE 인앱 브라우저로 URL을 엽니다. `openInAppBrowser` 파라미터의 사양은 [외부 브라우저에서 URL 열기](https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/#opening-url-in-external-browser)를 참고하세요.

<!-- tip end -->

### Datetime picker 액션 테스트 

이 탭에서는 리치 메뉴에서 [datetime picker 액션](https://developers.line.biz/en/reference/messaging-api/#datetime-picker-action)을 실행할 수 있습니다. 이 액션을 실행하면 날짜 및 시간 선택 대화상자가 표시됩니다. 날짜를 선택하면 LINE 플랫폼은 선택한 날짜와 시간을 담은 [포스트백 이벤트](https://developers.line.biz/en/reference/messaging-api/#postback-event)를 봇 서버로 보냅니다.

![Datetime picker 액션 체험](https://developers.line.biz/media/messaging-api/rich-menu-playground/04-datetime-picker-action-ja.webp)

| 버튼 레이블 | 액션 | 액션 객체 |
| --- | --- | --- |
| 날짜 및 시간 선택(datetime 모드) | 현재 날짜와 시간으로 설정된 날짜 및 시간 선택기를 엽니다(`mode`를 `datetime`으로 설정) | `{"type":"datetimepicker","label":"datetimeモード","data":"actionId=31","mode":"datetime"}` |
| 초기값 설정 있음(`initial` 속성 사용) | `initial` 속성의 값으로 설정된 날짜 및 시간 선택기를 엽니다 | `{"type":"datetimepicker","label":"初期値設定あり","data":"actionId=32","initial:"2021-11-01t00:00","mode":"datetime"}` |
| 최대값·최소값 설정 있음(`min`, `max` 속성 사용) | 최소 및 최대 날짜가 설정된 날짜 및 시간 선택기를 엽니다 | `{"type":"datetimepicker","label":"最大・最小値設定あり","data":"actionId=33","mode":"datetime","max":"2021-12-31t23:59","min":"2021-11-01t00:00"}` |
| 날짜 선택(date 모드) | 현재 날짜로 설정된 날짜 및 시간 선택기를 엽니다 | `{"type":"datetimepicker","label":"dateモード","data":"actionId=34","mode":"date"}` |
| 시간 선택(time 모드) | 현재 시간으로 설정된 날짜 및 시간 선택기를 엽니다 | `{"type":"datetimepicker","label":"timeモード","data":"actionId=35","mode":"time"}` |

### 리치 메뉴 전환 액션 테스트 

이 탭에서는 리치 메뉴에서 [리치 메뉴 전환 액션](https://developers.line.biz/en/reference/messaging-api/#richmenu-switch-action)을 실행할 수 있습니다. 이 액션을 실행하면 [리치 메뉴 별칭(rich menu aliases)](https://developers.line.biz/en/docs/messaging-api/switch-rich-menus/)에 정의된 메뉴로 리치 메뉴가 전환됩니다. 리치 메뉴가 전환되면 LINE 플랫폼은 봇 서버로 [포스트백 이벤트](https://developers.line.biz/en/reference/messaging-api/#postback-event)를 보냅니다. 이 이벤트에는 포스트백 액션 객체의 `data` 속성과 `postback.params` 객체에 지정한 값이 포함됩니다.

![리치 메뉴 전환 액션 체험](https://developers.line.biz/media/messaging-api/rich-menu-playground/05-rich-menu-switch-action-ja.webp)

| 버튼 레이블 | 액션 | 액션 객체 |
| --- | --- | --- |
| 리치 메뉴 전환 | 리치 메뉴를 전환합니다 | `{"type":"richmenuswitch","label":"リッチメニューを切り替える","richMenuAliasId":"richmenu-richmenuswitch_2","data":"actionId=42"}` |
| 더 작은 크기의 리치 메뉴로 전환 | 리치 메뉴 객체의 `size` 속성 중 `height`로 지정된 더 작은 크기의 리치 메뉴로 전환합니다 | `{"type":"richmenuswitch","label":"小さいサイズのリッチメニューに切り替える","richMenuAliasId":"richmenu-richmenuswitch_3","data":"actionId=43"}` |
