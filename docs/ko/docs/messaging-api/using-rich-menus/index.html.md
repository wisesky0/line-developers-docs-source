# 리치 메뉴 사용하기

이 페이지에서는 LINE 공식 계정을 친구로 추가한 모든 사용자에게 표시되는 "기본 리치 메뉴"를 설정하는 방법을 설명합니다.

<!-- tip start -->

**LINE 공식 계정 관리자에서도 리치 메뉴를 설정할 수 있습니다**

[LINE 공식 계정 관리자](https://manager.line.biz/)에서도 기본 리치 메뉴를 설정할 수 있습니다. 자세한 내용은 [LINE 공식 계정 관리자로 리치 메뉴 설정하기](https://developers.line.biz/en/docs/messaging-api/rich-menus-overview/#creating-a-rich-menu-with-the-line-manager)를 참고하세요.

<!-- tip end -->

<!-- table of contents -->

## 기본 리치 메뉴 설정하기 

Messaging API로 기본 리치 메뉴를 설정하려면 다음과 같이 하세요.

1. [리치 메뉴 이미지를 준비합니다](https://developers.line.biz/en/docs/messaging-api/using-rich-menus/#prepare-a-rich-menu-image).
1. [리치 메뉴를 만들고](https://developers.line.biz/en/docs/messaging-api/using-rich-menus/#create-a-rich-menu) 누를 수 있는 영역을 지정합니다.
1. [리치 메뉴 이미지를 업로드하고 첨부합니다](https://developers.line.biz/en/docs/messaging-api/using-rich-menus/#upload-the-rich-menu-image).
1. [기본 리치 메뉴를 설정합니다](https://developers.line.biz/en/docs/messaging-api/using-rich-menus/#set-the-default-rich-menu).

### 1. 리치 메뉴 이미지 준비하기 

리치 메뉴 이미지를 준비하세요. 리치 메뉴 이미지에서 누를 수 있는 영역을 어떻게 배치할지 고민해야 합니다.

이 가이드에서는 리치 메뉴에 다음 템플릿 이미지(`richmenu-template-guide-04.png`)를 사용합니다. 원하는 디렉터리에 저장하세요.

![이 가이드에서 사용하는 리치 메뉴 템플릿 이미지](https://developers.line.biz/media/messaging-api/rich-menu/richmenu-template-guide-04.png)

이 이미지의 경우 A, B, C 세 개의 누를 수 있는 영역이 정의되어 있다고 가정합니다.

<!-- tip start -->

**리치 메뉴 템플릿 이미지**

[LINE 공식 계정 관리자](https://manager.line.biz)에서 리치 메뉴의 템플릿 이미지를 다운로드할 수 있습니다. 리치 메뉴를 만드는 페이지에서 **Design guide**를 클릭하세요. [LINE Developers Console](https://developers.line.biz/console/)에서 사용하는 것과 같은 계정으로 LINE 공식 계정 관리자에 로그인할 수 있습니다.

<!-- tip end -->

이미지 요구 사항에 대한 자세한 내용은 Messaging API 레퍼런스의 [리치 메뉴 이미지 요구 사항](https://developers.line.biz/en/reference/messaging-api/#upload-rich-menu-image-requirements)을 참고하세요.

### 2. 리치 메뉴 만들기 

1단계에서 준비한 리치 메뉴 이미지와 일치하는 리치 메뉴를 만드세요. 이미지에서 누를 수 있는 영역이 A, B, C로 올바르게 설정되어 있는지 확인하세요.

[Messaging API로 리치 메뉴를 만들 때](https://developers.line.biz/en/reference/messaging-api/#create-rich-menu) 요청 본문에 [리치 메뉴 객체](https://developers.line.biz/en/reference/messaging-api/#rich-menu-object)를 지정합니다. 터미널에서 다음 명령어를 실행하세요. A, B, C 각 누를 수 있는 영역에서 서로 다른 URL을 열도록 [URI 액션](https://developers.line.biz/en/reference/messaging-api/#uri-action)을 지정합니다.

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
    "selected": false,
    "name": "Test the default rich menu",
    "chatBarText": "Tap to open",
    "areas": [
        {
            "bounds": {
                "x": 0,
                "y": 0,
                "width": 1666,
                "height": 1686
            },
            "action": {
                "type": "uri",
                "label": "Tap area A",
                "uri": "https://developers.line.biz/en/news/"
            }
        },
        {
            "bounds": {
                "x": 1667,
                "y": 0,
                "width": 834,
                "height": 843
            },
            "action": {
                "type": "uri",
                "label": "Tap area B",
                "uri": "https://api.line-status.info/"
            }
        },
        {
            "bounds": {
                "x": 1667,
                "y": 844,
                "width": 834,
                "height": 843
            },
            "action": {
                "type": "uri",
                "label": "Tap area C",
                "uri": "https://techblog.lycorp.co.jp/en/"
            }
        }
    ]
}'
```

<!-- tip start -->

**팁**

- 사용자에게 연결된 리치 메뉴를 자동으로 열려면 요청 본문의 `selected` 속성을 `true`로 설정하세요.
- 채팅 바의 텍스트를 설정하려면 요청 본문에 `chatBarText` 속성을 지정하세요.
- 리치 메뉴를 만들기 전에 [리치 메뉴 객체](https://developers.line.biz/en/reference/messaging-api/#rich-menu-object)의 [유효성을 확인](https://developers.line.biz/en/reference/messaging-api/#validate-rich-menu-object)할 수 있습니다.

<!-- tip end -->

리치 메뉴가 성공적으로 만들어지면 응답에 리치 메뉴 ID가 반환됩니다. 이후 단계에서 이 리치 메뉴 ID를 사용합니다.

```json
{
  "richMenuId": "richmenu-88c05..."
}
```

### 3. 리치 메뉴 이미지 업로드하고 첨부하기 

1단계에서 준비한 [이미지를 업로드하고](https://developers.line.biz/en/reference/messaging-api/#upload-rich-menu-image) 2단계에서 만든 리치 메뉴에 첨부합니다. 터미널에서 다음 명령어를 실행하세요.

1. 1단계에서 준비한 이미지가 들어 있는 디렉터리로 이동합니다.
1. `{richMenuId}`를 2단계에서 얻은 리치 메뉴 ID로 바꾼 후 다음 명령어를 실행합니다.

```sh
curl -v -X POST https://api-data.line.me/v2/bot/richmenu/{richMenuId}/content \
-H "Authorization: Bearer {channel access token}" \
-H "Content-Type: image/png" \
-T richmenu-template-guide-04.png
```

### 4. 기본 리치 메뉴 설정하기 

준비가 모두 끝났으니 리치 메뉴를 표시하도록 설정하겠습니다. [기본 리치 메뉴를 설정](https://developers.line.biz/en/reference/messaging-api/#set-default-rich-menu)하세요. LINE 공식 계정을 친구로 추가한 사용자는 사용자별 리치 메뉴가 연결되어 있지 않은 한 기본 리치 메뉴를 보게 됩니다. 터미널에서 다음 명령어를 실행하세요.

```sh
curl -v -X POST https://api.line.me/v2/bot/user/all/richmenu/{richMenuId} \
-H "Authorization: Bearer {channel access token}"
```

#### 4-1. 리치 메뉴 표시 확인하기 

설정한 기본 리치 메뉴가 표시되는지 확인합니다. 리치 메뉴를 설정한 LINE 공식 계정의 채팅 화면을 여세요. 이번에 만든 리치 메뉴는 닫힌 상태로 표시되며, **Tap to open**을 탭하면 리치 메뉴가 열립니다.

![](https://developers.line.biz/media/messaging-api/rich-menu/default-rich-menu-example.png)

## 사용자별 리치 메뉴 정보 

Messaging API로 사용자마다 리치 메뉴를 설정할 수 있습니다. 사용자별 리치 메뉴에 대한 자세한 내용은 [사용자별 리치 메뉴 사용하기](https://developers.line.biz/en/docs/messaging-api/use-per-user-rich-menus/)를 참고하세요.
