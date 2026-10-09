# 리치 메뉴에서 탭 전환하기

사용자별 리치 메뉴를 사용하여 탭 전환이 가능한 리치 메뉴를 제공할 수 있습니다. 탭을 전환하듯이 리치 메뉴를 간편하게 바꾸려면 [리치 메뉴 별칭](https://developers.line.biz/en/glossary/#rich-menu-alias)과 [리치 메뉴 전환 액션](https://developers.line.biz/en/reference/messaging-api/#richmenu-switch-action)을 사용하십시오.

![](https://developers.line.biz/media/messaging-api/rich-menu/switching-richmenu-ja.webp)

리치 메뉴 A와 리치 메뉴 B 두 개를 설정하고 둘 사이를 전환할 수 있도록 하는 단계는 다음과 같습니다.

1. [리치 메뉴 이미지 준비하기](https://developers.line.biz/en/docs/messaging-api/switch-rich-menus/#richmenu-switch-01)
1. [리치 메뉴 A 생성하기](https://developers.line.biz/en/docs/messaging-api/switch-rich-menus/#richmenu-switch-02)
1. [리치 메뉴 A 이미지 업로드하기](https://developers.line.biz/en/docs/messaging-api/switch-rich-menus/#richmenu-switch-03)
1. [리치 메뉴 B 생성하기](https://developers.line.biz/en/docs/messaging-api/switch-rich-menus/#richmenu-switch-04)
1. [리치 메뉴 B 이미지 업로드하기](https://developers.line.biz/en/docs/messaging-api/switch-rich-menus/#richmenu-switch-05)
1. [리치 메뉴 A를 기본값으로 설정하기](https://developers.line.biz/en/docs/messaging-api/switch-rich-menus/#richmenu-switch-06)
1. [리치 메뉴 별칭 A 생성하기](https://developers.line.biz/en/docs/messaging-api/switch-rich-menus/#richmenu-switch-07)
1. [리치 메뉴 별칭 B 생성하기](https://developers.line.biz/en/docs/messaging-api/switch-rich-menus/#richmenu-switch-08)
1. [리치 메뉴 표시 중단하기](https://developers.line.biz/en/docs/messaging-api/switch-rich-menus/#richmenu-switch-09)

## 1. 리치 메뉴 이미지 준비하기 

리치 메뉴 A용 이미지(`richmenu-a.png`)와 리치 메뉴 B용 이미지(`richmenu-b.png`)를 준비하십시오. 지원되는 이미지 사양에 대한 자세한 내용은 Messaging API 레퍼런스의 [리치 메뉴 이미지 요구 사항](https://developers.line.biz/en/reference/messaging-api/#upload-rich-menu-image-requirements)을 참고하십시오.

| 리치 메뉴 A 이미지 | 리치 메뉴 B 이미지 |
| :-: | :-: |
| ![리치 메뉴 A 이미지](https://developers.line.biz/media/messaging-api/rich-menu/richmenu-a.webp) | ![리치 메뉴 B 이미지](https://developers.line.biz/media/messaging-api/rich-menu/richmenu-b.webp) |

## 2. 리치 메뉴 A 생성하기 

Messaging API로 [리치 메뉴를 생성](https://developers.line.biz/en/reference/messaging-api/#create-rich-menu)하십시오. 이 예시에서는 [영역 객체](https://developers.line.biz/en/reference/messaging-api/#area-object)의 탭 가능한 영역에 다음과 같이 액션을 지정합니다.

- **리치 메뉴 A의 왼쪽 탭 가능 영역**
  - 액션: [URI 액션](https://developers.line.biz/en/reference/messaging-api/#uri-action)
  - URI: [LINE Developers 사이트](https://developers.line.biz/)
- **리치 메뉴 A의 오른쪽 탭 가능 영역**
  - 액션: [리치 메뉴 전환 액션](https://developers.line.biz/en/reference/messaging-api/#richmenu-switch-action)(유형: `richmenuswitch`)
  - 전환 대상: 리치 메뉴 B(richMenuAliasId: `richmenu-alias-b`)

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
    "name": "richmenu-a",
    "chatBarText": "Tap to open",
    "areas": [
        {
            "bounds": {
                "x": 0,
                "y": 0,
                "width": 1250,
                "height": 1686
            },
            "action": {
                "type": "uri",
                "uri": "https://developers.line.biz/"
            }
        },
        {
            "bounds": {
                "x": 1251,
                "y": 0,
                "width": 1250,
                "height": 1686
            },
            "action": {
                "type": "richmenuswitch",
                "richMenuAliasId": "richmenu-alias-b",
                "data": "richmenu-changed-to-b"
            }
        }
    ]
}'
```

리치 메뉴 A가 생성되면 응답으로 리치 메뉴의 ID가 반환됩니다.

```json
{
  "richMenuId": "richmenu-19682466851b21e2d7c0ed482ee0930f"
}
```

## 3. 리치 메뉴 A 이미지 업로드하기 

리치 메뉴 A를 생성했으므로, Messaging API로 리치 메뉴 A의 [이미지를 업로드](https://developers.line.biz/en/reference/messaging-api/#upload-rich-menu-image)하십시오. [2단계](https://developers.line.biz/en/docs/messaging-api/switch-rich-menus/#richmenu-switch-02)에서 받은 리치 메뉴 ID를 경로 매개변수로 지정하여 대상 메뉴를 지정하십시오.

```sh
curl -v -X POST https://api-data.line.me/v2/bot/richmenu/richmenu-19682466851b21e2d7c0ed482ee0930f/content \
-H 'Authorization: Bearer {channel access token}' \
-H "Content-Type: image/png" \
-T richmenu-a.png
```

## 4. 리치 메뉴 B 생성하기 

리치 메뉴 A와 같은 방법으로 리치 메뉴 B(`richmenu-b`)를 생성하십시오. [영역 객체](https://developers.line.biz/en/reference/messaging-api/#area-object)의 탭 가능한 영역에 다음과 같이 액션을 지정하십시오.

- **리치 메뉴 B의 왼쪽 탭 가능 영역**
  - 액션: [리치 메뉴 전환 액션](https://developers.line.biz/en/reference/messaging-api/#richmenu-switch-action)(유형: `richmenuswitch`)
  - 전환 대상: 리치 메뉴 A(richMenuAliasId: `richmenu-alias-a`)
- **리치 메뉴 B의 오른쪽 탭 가능 영역**
  - 액션: [URI 액션](https://developers.line.biz/en/reference/messaging-api/#uri-action)
  - URI: [LY Corporation Tech Blog](https://techblog.lycorp.co.jp/)

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
    "name": "richmenu-b",
    "chatBarText": "Tap to open",
    "areas": [
        {
            "bounds": {
                "x": 0,
                "y": 0,
                "width": 1250,
                "height": 1686
            },
            "action": {
                "type": "richmenuswitch",
                "richMenuAliasId": "richmenu-alias-a",
                "data": "richmenu-changed-to-a"
            }
        },
        {
            "bounds": {
                "x": 1251,
                "y": 0,
                "width": 1250,
                "height": 1686
            },
            "action": {
                "type": "uri",
                "uri": "https://techblog.lycorp.co.jp/"
            }
        }
    ]
}'
```

리치 메뉴 B가 생성되면 응답으로 리치 메뉴의 ID가 반환됩니다.

```json
{
  "richMenuId": "richmenu-4ecc8d672d9da4ba375fb82fa938fe5e"
}
```

## 5. 리치 메뉴 B 이미지 업로드하기 

리치 메뉴 B를 생성했으므로, Messaging API로 리치 메뉴 B의 [이미지를 업로드](https://developers.line.biz/en/reference/messaging-api/#upload-rich-menu-image)하십시오. [4단계](https://developers.line.biz/en/docs/messaging-api/switch-rich-menus/#richmenu-switch-04)에서 받은 리치 메뉴 ID를 경로 매개변수로 지정하여 대상 메뉴를 지정하십시오.

```sh
curl -v -X POST https://api-data.line.me/v2/bot/richmenu/richmenu-4ecc8d672d9da4ba375fb82fa938fe5e/content \
-H 'Authorization: Bearer {channel access token}' \
-H "Content-Type: image/png" \
-T richmenu-b.png
```

## 6. 리치 메뉴 A를 기본값으로 설정하기 

리치 메뉴 A를 [기본 리치 메뉴로 설정](https://developers.line.biz/en/reference/messaging-api/#set-default-rich-menu)하십시오.

```sh
curl -v -X POST https://api.line.me/v2/bot/user/all/richmenu/richmenu-19682466851b21e2d7c0ed482ee0930f \
-H 'Authorization: Bearer {channel access token}'
```

이렇게 하면 리치 메뉴 A가 기본 메뉴로 표시됩니다. 리치 메뉴 A의 오른쪽 절반을 탭해도 리치 메뉴 B로 전환되지 않습니다. 아직 리치 메뉴 B의 별칭을 만들지 않았기 때문입니다.

![기본 리치 메뉴 표시](https://developers.line.biz/media/messaging-api/rich-menu/set-default-rich-menu.png)

<!-- note start -->

**리치 메뉴 A가 표시되지 않는 경우**

사용자에게 기본 리치 메뉴보다 높은 표시 우선순위의 사용자별 리치 메뉴가 설정되어 있으면 리치 메뉴 A가 표시되지 않습니다. 리치 메뉴 A를 표시하려면 사용자별 리치 메뉴를 [삭제](https://developers.line.biz/en/reference/messaging-api/#delete-rich-menu)하거나, 사용자와 리치 메뉴의 [연결을 해제](https://developers.line.biz/en/reference/messaging-api/#unlink-rich-menu-from-user)하십시오. 자세한 내용은 [리치 메뉴의 표시 우선순위](https://developers.line.biz/en/docs/messaging-api/rich-menus-overview/#rich-menu-display)를 참고하십시오.

<!-- note end -->

## 7. 리치 메뉴 별칭 A 생성하기 

리치 메뉴 A의 [별칭을 생성](https://developers.line.biz/en/reference/messaging-api/#create-rich-menu-alias)하십시오. 다음은 [2단계](https://developers.line.biz/en/docs/messaging-api/switch-rich-menus/#richmenu-switch-02)에서 생성한 리치 메뉴 A에 별칭 `richmenu-alias-a`를 설정하는 요청 예시입니다.

```sh
curl -v -X POST https://api.line.me/v2/bot/richmenu/alias \
-H 'Authorization: Bearer {channel access token}' \
-H 'Content-Type: application/json' \
-d \
'{
    "richMenuAliasId": "richmenu-alias-a",
    "richMenuId": "richmenu-19682466851b21e2d7c0ed482ee0930f"
}'
```

## 8. 리치 메뉴 별칭 B 생성하기 

리치 메뉴 B의 [별칭을 생성](https://developers.line.biz/en/reference/messaging-api/#create-rich-menu-alias)하십시오. 다음은 [4단계](https://developers.line.biz/en/docs/messaging-api/switch-rich-menus/#richmenu-switch-04)에서 생성한 리치 메뉴 B에 별칭 `richmenu-alias-b`를 설정하는 요청 예시입니다.

```sh
curl -v -X POST https://api.line.me/v2/bot/richmenu/alias \
-H 'Authorization: Bearer {channel access token}' \
-H 'Content-Type: application/json' \
-d \
'{
    "richMenuAliasId": "richmenu-alias-b",
    "richMenuId": "richmenu-4ecc8d672d9da4ba375fb82fa938fe5e"
}'
```

이제 리치 메뉴 A의 오른쪽 탭 가능 영역을 탭하면 리치 메뉴 B로 전환할 수 있습니다. 리치 메뉴 B의 왼쪽 탭 가능 영역을 탭하면 리치 메뉴 A로 되돌아갈 수 있습니다.

| 리치 메뉴 A | 리치 메뉴 B |
| :-: | :-: |
| ![리치 메뉴 A](https://developers.line.biz/media/messaging-api/rich-menu/set-default-rich-menu.png) | ![리치 메뉴 B](https://developers.line.biz/media/messaging-api/rich-menu/switch-rich-menu.png) |

[별칭을 변경](https://developers.line.biz/en/reference/messaging-api/#update-rich-menu-alias)하는 것은 언제든지 가능합니다.

## 9. 리치 메뉴 표시 중단하기 

리치 메뉴 표시를 중단하려고 한다고 가정하겠습니다. Messaging API를 사용하는 경우 다음 순서로 리치 메뉴를 제거하십시오.

1. [리치 메뉴의 기본 메뉴 설정을 해제](https://developers.line.biz/en/reference/messaging-api/#clear-default-rich-menu)합니다.
1. [리치 메뉴 별칭을 삭제](https://developers.line.biz/en/reference/messaging-api/#delete-rich-menu-alias)합니다.
1. [리치 메뉴를 삭제](https://developers.line.biz/en/reference/messaging-api/#delete-rich-menu)합니다.

사용자와의 [리치 메뉴 연결을 해제](https://developers.line.biz/en/reference/messaging-api/#unlink-rich-menu-from-user)하지 않고도 리치 메뉴를 삭제할 수 있습니다. 다만 이 경우 리치 메뉴는 즉시 제거되지 않고, 사용자가 다음번에 채팅방을 열 때 제거됩니다.

사용자의 ID를 알고 있다면 LINE 공식 계정의 친구인 사용자와 리치 메뉴의 연결을 해제할 수 있습니다. 리치 메뉴는 유지하면서 사용자와의 연결만 해제하려면 다음을 사용하십시오.

- [사용자와 리치 메뉴 연결 해제](https://developers.line.biz/en/reference/messaging-api/#unlink-rich-menu-from-user)
- [여러 사용자와 리치 메뉴 연결 해제](https://developers.line.biz/en/reference/messaging-api/#unlink-rich-menu-from-users)

사용자와 리치 메뉴의 연결을 해제하는 순간, 리치 메뉴는 채팅방에서 바로 사라집니다.

## 의도한 리치 메뉴가 표시되지 않을 때 

의도한 리치 메뉴가 표시되지 않는다면 다음 사항을 확인하십시오.

- [기본 메뉴 설정을 해제한 후에도 리치 메뉴가 계속 보입니다](https://developers.line.biz/en/docs/messaging-api/switch-rich-menus/#youll-still-see-the-rich-menu-after-you-clear-the-default)
- [새 기본 리치 메뉴를 설정했지만 다른 리치 메뉴가 보입니다](https://developers.line.biz/en/docs/messaging-api/switch-rich-menus/#you-see-a-different-rich-menu)

### 기본 메뉴 설정을 해제한 후에도 리치 메뉴가 계속 보입니다 

리치 메뉴 A에서 B로, 또는 B에서 A로 전환할 때는 표시 우선순위가 가장 높은 사용자별 메뉴가 표시됩니다. 따라서 [6단계](https://developers.line.biz/en/docs/messaging-api/switch-rich-menus/#richmenu-switch-06)에서 설정한 기본 리치 메뉴를 해제해도 화면에는 영향이 없습니다. 여전히 리치 메뉴 A 또는 B가 보입니다.

이제 [리치 메뉴를 삭제](https://developers.line.biz/en/reference/messaging-api/#delete-rich-menu)하거나 [사용자와 리치 메뉴의 연결을 해제](https://developers.line.biz/en/reference/messaging-api/#unlink-rich-menu-from-user)하면 리치 메뉴가 더 이상 표시되지 않습니다. 리치 메뉴의 표시 우선순위에 대한 자세한 내용은 [리치 메뉴의 표시 우선순위](https://developers.line.biz/en/docs/messaging-api/rich-menus-overview/#rich-menu-display)를 참고하십시오.

### 새 기본 리치 메뉴를 설정했지만 다른 리치 메뉴가 보입니다 

새로 설정한 기본 리치 메뉴가 보이지 않는다면 표시 우선순위에 문제가 있는 것입니다. 표시 우선순위가 더 높은 사용자별 리치 메뉴가 존재할 수 있습니다.

새 기본 메뉴를 보이게 하려면, 현재 보이는 리치 메뉴를 [삭제](https://developers.line.biz/en/reference/messaging-api/#delete-rich-menu)하거나 [사용자와 리치 메뉴의 연결을 해제](https://developers.line.biz/en/reference/messaging-api/#unlink-rich-menu-from-user)하십시오. 자세한 내용은 [리치 메뉴의 표시 우선순위](https://developers.line.biz/en/docs/messaging-api/rich-menus-overview/#rich-menu-display)를 참고하십시오.
