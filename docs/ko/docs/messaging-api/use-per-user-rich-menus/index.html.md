# 사용자별 리치 메뉴 사용하기

이 페이지에서는 "사용자별 리치 메뉴"를 설정하는 방법을 설명합니다.

<!-- table of contents -->

## 사용자별 리치 메뉴란 

Messaging API를 사용하면 사용자별로 리치 메뉴를 설정할 수 있습니다. 따라서 여러 개의 리치 메뉴를 준비하고 사용자마다 다른 리치 메뉴를 설정하여 사용자 경험을 향상시킬 수 있습니다.

사용자별 리치 메뉴의 특징은 다음과 같습니다.

1. 기본 리치 메뉴보다 표시 우선순위가 높습니다
   - 사용자별 리치 메뉴는 기본 리치 메뉴보다 표시 우선순위가 높습니다. 따라서 LINE 공식 계정에 기본 리치 메뉴를 설정하고 특정 사용자에게 사용자별 리치 메뉴를 설정하면 사용자별 리치 메뉴가 기본 리치 메뉴보다 우선됩니다. 자세한 내용은 [리치 메뉴의 표시 우선순위](https://developers.line.biz/en/docs/messaging-api/rich-menus-overview/#rich-menu-display)를 참고하세요.
1. 설정 변경이 즉시 적용됩니다
   - 사용자별 리치 메뉴 설정은 즉시 적용되며, 사용자가 채팅 화면을 다시 열지 않아도 화면이 바로 바뀝니다. 자세한 내용은 [리치 메뉴 설정 변경이 적용되는 시점](https://developers.line.biz/en/docs/messaging-api/rich-menus-overview/#when-setting-change-takes-effect)을 참고하세요.

## 사용자별 리치 메뉴 설정하기 

사용자별 리치 메뉴의 기본 설정 순서는 다음과 같습니다.

1. [리치 메뉴를 만들고 이미지 첨부하기](https://developers.line.biz/en/docs/messaging-api/use-per-user-rich-menus/#create-a-rich-menu)
1. [사용자 ID 준비하기](https://developers.line.biz/en/docs/messaging-api/use-per-user-rich-menus/#prepare-user-id)
1. [리치 메뉴를 사용자에게 연결하기](https://developers.line.biz/en/docs/messaging-api/use-per-user-rich-menus/#link-the-rich-menu-to-user)
1. [사용자에게서 리치 메뉴 연결 해제하기](https://developers.line.biz/en/docs/messaging-api/use-per-user-rich-menus/#unlink-the-rich-menu-from-user) 사용자별 리치 메뉴 표시를 중단하려면 실행합니다(선택 사항)

### 1. 리치 메뉴를 만들고 이미지 첨부하기 

먼저 리치 메뉴를 만듭니다. 리치 메뉴를 만드는 방법은 [리치 메뉴 사용하기](https://developers.line.biz/en/docs/messaging-api/using-rich-menus/)를 참고하세요.

이 가이드에서는 리치 메뉴에 다음 템플릿 이미지(`richmenu-template-guide-07.png`)를 사용합니다. 원하는 디렉터리에 저장하세요.

![이 가이드에서 사용하는 리치 메뉴 템플릿 이미지](https://developers.line.biz/media/messaging-api/rich-menu/richmenu-template-guide-07.png)

터미널에서 다음 명령어를 실행하여 [리치 메뉴를 만드세요](https://developers.line.biz/en/reference/messaging-api/#create-rich-menu).

```sh
curl -v -X POST https://api.line.me/v2/bot/richmenu \
-H 'Authorization: Bearer {channel access token}' \
-H 'Content-Type: application/json' \
-d \
'{
    "size": {
        "width": 2500,
        "height": 1686
    },
    "selected": true,
    "name": "Test the per-user rich menu",
    "chatBarText": "Tap to open",
    "areas": [
        {
            "bounds": {
                "x": 0,
                "y": 0,
                "width": 2500,
                "height": 1686
            },
            "action": {
                "type": "uri",
                "label": "Tap area A",
                "uri": "https://developers.line.biz/en/news/"
            }
        }
    ]
}'
```

다음으로 터미널에서 다음 명령어를 실행하여 [리치 메뉴에 이미지를 업로드하고 첨부하세요](https://developers.line.biz/en/reference/messaging-api/#upload-rich-menu-image).

```sh
curl -v -X POST https://api-data.line.me/v2/bot/richmenu/{richMenuId}/content \
-H "Authorization: Bearer {channel access token}" \
-H "Content-Type: image/png" \
-T richmenu-template-guide-07.png
```

### 2. 사용자 ID 준비하기 

리치 메뉴를 표시할 사용자의 사용자 ID를 준비합니다. 여기서는 실제로 표시를 확인할 수 있도록 본인의 사용자 ID를 준비하세요.

사용자 ID 예시: `U8189cf6745fc0d808977bdb0b9f22995`

사용자 ID를 가져오는 방법은 [사용자 ID 가져오기](https://developers.line.biz/en/docs/messaging-api/getting-user-ids/)의 [개발자 본인의 사용자 ID 가져오기](https://developers.line.biz/en/docs/messaging-api/getting-user-ids/#get-own-user-id)를 참고하세요.

### 3. 리치 메뉴를 사용자에게 연결하기 

리치 메뉴와 사용자 ID가 준비되면 [리치 메뉴를 사용자에게 연결](https://developers.line.biz/en/reference/messaging-api/#link-rich-menu-to-user)하세요. 터미널에서 다음 명령어를 실행합니다.

```sh
curl -v -X POST https://api.line.me/v2/bot/user/{userId}/richmenu/{richMenuId} \
-H "Authorization: Bearer {channel access token}"
```

#### 3-1. 리치 메뉴 표시 확인하기 

3단계에서 설정한 사용자별 리치 메뉴가 표시되는지 확인합니다. 리치 메뉴를 설정한 LINE 공식 계정의 채팅 화면을 여세요.

![](https://developers.line.biz/media/messaging-api/rich-menu/per-user-rich-menu-example.png)

### 4. 사용자에게서 리치 메뉴 연결 해제하기 

마지막으로 [사용자에게서 리치 메뉴 연결을 해제](https://developers.line.biz/en/reference/messaging-api/#unlink-rich-menu-from-user)하여 리치 메뉴 표시를 중단합니다. 4단계에서 열어 둔 채팅 화면을 보면서 터미널에서 다음 명령어를 실행하세요.

```sh
curl -v -X DELETE https://api.line.me/v2/bot/user/{userId}/richmenu \
-H 'Authorization: Bearer {channel access token}'
```

사용자별 리치 메뉴 설정은 즉시 적용되므로 명령어 실행이 끝나면 사용자별 리치 메뉴 표시도 끝납니다.

기본 리치 메뉴가 설정되어 있다면 대신 기본 리치 메뉴가 표시된다는 점에 유의하세요.

## 사용자가 리치 메뉴를 전환할 수 있도록 하기 

사용자별 리치 메뉴를 사용하면 탭 전환 방식의 리치 메뉴를 제공할 수 있습니다. 탭을 전환하듯 리치 메뉴를 쉽게 전환하려면 [리치 메뉴 별칭(rich menu aliases)](https://developers.line.biz/en/glossary/#rich-menu-alias)과 [리치 메뉴 전환 액션](https://developers.line.biz/en/reference/messaging-api/#richmenu-switch-action)을 사용하세요.

![](https://developers.line.biz/media/messaging-api/rich-menu/switching-richmenu-ja.webp)

자세한 내용은 [리치 메뉴에서 탭 전환하기](https://developers.line.biz/en/docs/messaging-api/switch-rich-menus/)를 참고하세요.
