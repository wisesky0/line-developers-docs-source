# 커스텀 액션 버튼 구현하기

LINE MINI App에는 (A) [헤더](https://developers.line.biz/en/docs/line-mini-app/discover/ui-components/#header)에 기본 액션 버튼이 내장되어 있어, 사용자가 현재 열려 있는 페이지를 친구들과 공유할 수 있습니다. 이 액션 버튼은 LINE이 구현하여 기본으로 표시되므로, 버튼의 동작과 공유 메시지의 내용은 맞춤 설정할 수 없습니다.

하지만 (B) 본문에 커스텀 액션 버튼을 구현하면, LINE MINI App을 공유하기 전에 공유 메시지의 내용을 맞춤 설정할 수 있습니다.

![](https://developers.line.biz/media/line-mini-app/mini_concept.webp)

## 가이드라인 

커스텀 공유 메시지를 보낼 수 있는 커스텀 액션 버튼을 구현할 때는 사용자가 메시지 내용을 빠르고 정확하게 이해할 수 있도록 다음 가이드라인을 따르세요.

<!-- note start -->

**참고**

제공하는 서비스의 특성상 이 문서의 디자인 요구 사항을 충족할 수 없다면, [mini_request@linecorp.com](mailto:mini_request@linecorp.com)으로 문의하세요.

<!-- note end -->

<!-- note start -->

**LINE MINI App의 LIFF URL이 변경되었습니다**

[2023년 12월 13일](https://developers.line.biz/en/news/2023/12/13/change-of-liff-url-for-line-mini-app/)부터 LINE MINI App의 LIFF URL이 `https://miniapp.line.me/{liffId}`로 변경되었습니다.

사용자가 기존 `https://liff.line.me/{liffId}`에 접근해도 LINE MINI App이 열립니다. 따라서 이미 발급한 QR 코드를 계속 사용할 수 있습니다.

<!-- note end -->

### 공유 대상 선택 화면 사용하기 

본문에 커스텀 액션 버튼을 구현하고, 버튼을 탭하면 대상 선택 화면(수신자를 선택하는 화면)을 표시하세요. 사용자가 대상 선택 화면에서 수신자를 선택하면, [Flex Message](https://developers.line.biz/en/docs/messaging-api/using-flex-messages/)와 같이 개발자가 만든 공유 메시지를 보낼 수 있습니다.

![target picker](https://developers.line.biz/media/liff/share-target-picker_tobe_en.png)

공유 대상 선택 화면을 사용하는 방법에 대한 자세한 내용은 [사용자의 친구에게 메시지 보내기](https://developers.line.biz/en/docs/liff/developing-liff-apps/#share-target-picker)를 참고하세요.

### 커스텀 공유 메시지 형식 

커스텀 공유 메시지를 작성할 때는 Flex Message의 [Bubble](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#bubble) 컨테이너를 사용하세요. Flex Message의 [Carousel](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#carousel) 컨테이너는 사용하지 마세요.

커스텀 공유 메시지에는 [standard type](https://developers.line.biz/en/docs/line-mini-app/develop/share-messages/#standard)과 [image list type](https://developers.line.biz/en/docs/line-mini-app/develop/share-messages/#image-list)이 포함되며, 두 형식 모두 아래 A~F 섹션으로 나뉩니다.

![](https://developers.line.biz/media/line-mini-app/mini_design_flex_msg_common.webp)

| 라벨 | 섹션 | 필수 여부 | 설명 |
| --- | --- | --- | --- |
| A | 이미지 | 선택 | 메시지 전체가 화면 안에 들어가 스크롤이 필요 없을 만큼 이미지 크기가 작아야 합니다. |
| B | 제목 | 필수 | 메시지 내용을 요약하세요. |
| C | 부제목 | \* | 메시지의 부제목입니다. |
| D | 상세 | \* | 항목의 라벨과 설명으로 구성된 목록입니다. 최대 항목 수는 standard type과 image list type에서 다릅니다.<ul><li>Standard type: 최대 10개 항목 목록</li><li>Image list type: 최대 5개 항목 목록</li></ul> |
| E | 버튼 | 필수 | <ul><li>버튼은 최대 3개까지 넣을 수 있습니다.</li><li>공유하려는 내용을 자세히 보여 주는 페이지(상세 페이지)를 표시하도록 하나 이상의 버튼을 설정해야 합니다.</li></ul> |
| F | 푸터 | 필수 | LINE MINI App 아이콘, LINE MINI App 이름, 이미지 ![>](https://vos.line-scdn.net/service-notifier/footer_go_btn.png)로 구성합니다. 이 이미지는 변경하지 마세요. 사용자가 이 이미지를 탭하면 LINE MINI App 상단 페이지(`https://miniapp.line.me/{your-liffId}`)가 표시되도록 URI 액션을 지정하세요. |

\* C 부제목 또는 D 상세 섹션 중 하나는 반드시 넣어야 합니다. 둘 다 넣을 수도 있습니다.

#### Standard type 

Standard type의 Flex Message는 다음 가이드라인을 따르세요.

예시 JSON 파일은 [가이드라인을 따르는 JSON 파일 예시](https://developers.line.biz/en/docs/line-mini-app/develop/share-messages-standard/)를 참고하세요.

<!-- note start -->

**참고**

- 액션은 버튼(E)과 푸터(F)의 지정된 구성 요소에만 설정할 수 있습니다.
- 여기에 설명하지 않은 속성은 변경하지 마세요.

<!-- note end -->

![](https://developers.line.biz/media/line-mini-app/mini_design_flex_msg_standard.webp)

##### Standard type - 이미지(A) 

이미지(A)를 hero 블록에 넣으세요.

| 라벨 | 섹션 | 타입 | 설명 |
| --- | --- | --- | --- |
| A | 이미지 | [Hero 블록](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#block) > [Image](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#image) | <ul><li>`"url": "{URL}"`</li><li>`"size": "full"`</li><li>`"aspectRatio": "{width}:{height}"`<br>단, `{height}`는 `{width} * 2` 이하로 설정하세요.</li><li>`"aspectMode": "cover"`</li></ul> |

```json
{
    "type": "bubble",
    "hero": { // Hero 블록
        // 이미지(A)
        "type": "image",
        "url": "https://example.com/hero-image.png",
        "size": "full",
        "aspectRatio": "20:13",
        "aspectMode": "cover"
    },
    "body": {. . .}
}
```

##### Standard type - 본문 

제목(B), 부제목(C), 상세(D), 버튼(E)을 포함하는 body 블록을 다음과 같이 지정하세요.

| 라벨 | 섹션 | 타입 | 설명 |
| --- | --- | --- | --- |
| - | - | [Body 블록](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#block) > [Box](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#box) | <ul><li>`"layout": "vertical"`</li><li>`"spacing": "md"`</li></ul> |

```json
{
    "type": "bubble",
    "hero": { ... },
    "body": { // Body 블록
        // Box
        "type": "box",
        "layout": "vertical",
        "contents": [ ... ],
        "spacing": "md"
    }
}
```

##### Standard type - 제목(B) 

| 라벨 | 섹션 | 타입 | 설명 |
| --- | --- | --- | --- |
| B | 제목 | [Box](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#box) | <ul><li>`"layout": "vertical"`</li><li>`"spacing": "none"`</li></ul> |
| B | 제목 | [Text](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#text) | <ul><li>`"text": "{Title}"`<br>텍스트 최대 줄 수: 2</li><li>`"size": "lg"`</li><li>`"color": "#000000"`</li><li>`"weight": "bold"`</li><li>`"wrap": true`</li></ul> |

```json
{
    "type": "bubble",
    "hero": { ... },
    "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
            {   // 제목(B) - Box
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {   // Text
                        "type": "text",
                        "text": "Main title",
                        "size": "lg",
                        "color": "#000000",
                        "weight": "bold",
                        "wrap": true
                    }
                ],
                "spacing": "none"
            }
        ],
        "spacing": "md"
    }
}
```

##### Standard type - 부제목(C) 

| 라벨 | 섹션 | 타입 | 설명 |
| --- | --- | --- | --- |
| C | 부제목 | [Box](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#box) | <ul><li>`"layout": "vertical"`</li><li>`"spacing": "none"`</li></ul> |
| C | 부제목 | [Text](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#text) | <ul><li>`"text": "{Sub-title}"`<br>텍스트 최대 줄 수: 2</li><li>`"size": "sm"`</li><li>`"color": "#999999"`</li><li>`"wrap": true`</li></ul> |

```json
{
    "type": "bubble",
    "hero": { ... },
    "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
            {   // 제목(B) - Box
                ...
            },
            {   // 부제목(C) - Box
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {   // Text
                        "type": "text",
                        "text": "Sub-title",
                        "size": "sm",
                        "color": "#999999",
                        "wrap": true
                    }
                ],
                "spacing": "none"
            }
        ],
        "spacing": "md"
    }
}
```

##### Standard type - 상세(D) 

| 라벨 | 섹션 | 타입 | 설명 |
| --- | --- | --- | --- |
| D | 상세 | [Box](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#box) | <ul><li>`"layout": "vertical"`</li><li>`"spacing": "sm"`</li><li>`"margin": "lg"`</li><li>`"flex": 1`</li></ul> |
| D | 상세 - 항목 | [Box](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#box) | D-1과 D-2 한 쌍만 포함하는 box입니다.<ul><li>`"layout": "horizontal"`</li><li>`"spacing": "sm"`</li><li>`"flex": 1`</li></ul> |
| D-1 | 상세 - 라벨 | [Text](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#text) | <ul><li>`"text": "{Label}"`<br>텍스트 최대 줄 수: 1</li><li>`"size": "sm"`</li><li>`"color": "#555555"`</li><li>`"wrap": false`</li><li>`"flex": 20`</li></ul> |
| D-2 | 상세 - 설명 | [Text](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#text) | <ul><li>`"text": "{Description}"`<br>텍스트 최대 줄 수: 1</li><li>`"size": "sm"`</li><li>`"color": "#111111"`</li><li>`"wrap": false`</li><li>`"flex": 55`</li></ul> |

```json
{
    "type": "bubble",
    "hero": { ... },
    "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
            {   // 제목(B) - Box
                ...
            },
            {   // 부제목(C) - Box
                ...
            },
            {   // 상세(D) - Box
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {   // 라벨(D-1) - Box
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {   // Text
                                "type": "text",
                                "text": "Label 1",
                                "size": "sm",
                                "color": "#555555",
                                "wrap": false
                                "flex": 20
                            },
                            {   // 설명
                                "type": "text",
                                "text": "Description 1",
                                "size": "sm",
                                "color": "#111111",
                                "wrap": false,
                                "flex": 55
                            }
                        ],
                        "flex": 1,
                        "spacing": "sm"
                    },
                    {   // 상세(D-2) - Box
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {   // Text
                                "type": "text",
                                "text": "Label 2",
                                "size": "sm",
                                "color": "#555555",
                                "wrap": false
                                "flex": 20
                            },
                            {   // Text
                                "type": "text",
                                "text": "Description 2",
                                "size": "sm",
                                "color": "#111111",
                                "wrap": false,
                                "flex": 55
                            }
                        ],
                        "flex": 1,
                        "spacing": "sm"
                    }
                ],
                "spacing": "sm",
                "margin": "lg",
                "flex": 1
            }
        ],
        "spacing": "md"
    }
}
```

##### Standard type - 버튼(E) 

| 라벨 | 섹션 | 타입 | 설명 |
| --- | --- | --- | --- |
| E | 버튼 | [Box](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#box) | E-1과 E-2로 구성된 box입니다.<ul><li>`"layout": "vertical"`</li><li>`"spacing": "xs"`</li><li>`"margin": "lg"`</li></ul> |
| E-1 | 버튼<br>(링크 스타일만 사용하는 경우) | [Button](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#button) | <ul><li>`"style": "link"`</li><li>`"height": "sm"`</li><li>`"color": "{Text Color}"`</li><li>`"action" : { ... }`<br>사용자가 이 버튼을 탭하면 LINE MINI App 페이지가 표시되도록 URI 액션을 지정하세요. 해당 페이지가 LINE MINI App의 상단 페이지가 아니라면, [영구 링크](https://developers.line.biz/en/docs/line-mini-app/develop/permanent-links/)를 할당해야 합니다.</li></ul> |
| E-2 | 버튼<br>(primary 스타일 사용 시) | [Button](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#button) | <ul><li>상단 버튼에는 `"style": "primary"`를, 그 외 모든 버튼에는 `"style": "link"`를 지정하세요. `"secondary"`는 사용할 수 없습니다.</li><li>`"height": "md"`</li><li>`"color": "{Text or Background Color}"`</li><li>`"action" : { ... }`<br>사용자가 이 버튼을 탭하면 LINE MINI App 페이지가 표시되도록 URI 액션을 지정하세요. 해당 페이지가 LINE MINI App의 상단 페이지가 아니라면, [영구 링크](https://developers.line.biz/en/docs/line-mini-app/develop/permanent-links/)를 할당해야 합니다.</li></ul></li></ul> |

primary 스타일을 사용하는 경우:

```json
{
    "type": "bubble",
    "hero": { ... }
    },
    "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
            {   // 제목(B) - Box
                ...
            },
            {   // 부제목(C) - Box
                ...
            },
            {   // 상세(D) - Box
                ...
            },
            {   // 버튼(E) - Box
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {   // 버튼(primary)
                        "type": "button",
                        "action": {
                            "type": "uri",
                            "label": "View details",
                            "uri": "https://miniapp.line.me/123456-abcedfg"
                        },
                        "style": "primary",
                        "height": "md",
                        "color": "#17c950"
                    },
                    {   // 버튼(link)
                        "type": "button",
                        "action": {
                            "type": "uri",
                            "label": "Share",
                            "uri": "https://miniapp.line.me/123456-abcedfg/share"
                        },
                        "style": "link",
                        "height": "md",
                        "color": "#469fd6"
                    }
                ],
                "spacing": "xs",
                "margin": "lg"
            }
        ],
        "spacing": "md"
    }
}
```

##### Standard type - 푸터(F) 

푸터(F)를 footer 블록에 넣으세요.

| 라벨 | 섹션 | 요소 | 설명 |
| --- | --- | --- | --- |
| - | - | [Footer 블록](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#block) > [Box](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#box) | <ul><li>`"layout": "vertical"`</li></ul> |
| - | - | [Separator](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#separator) | <ul><li>`"color": "#f0f0f0"`</li></ul> |
| F | 푸터 | [Box](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#box) | F-1부터 F-3으로 구성된 box입니다.<ul><li>`"layout": "horizontal"`</li><li>`"flex": 1`</li><li>`"spacing": "md"`</li><li>`"margin": "md"`</li></ul> |
| F-1 | LINE MINI App 아이콘 | [Image](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#image) | <ul><li>`"url": "{Image URL}"`</li><li>`"flex": 1`</li><li>`"gravity": "center"`</li></ul> |
| F-2 | LINE MINI App 이름 | [Text](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#text) | <ul><li>`"text": "{LINE MINI App Name}"`<br>텍스트 최대 줄 수: 1</li><li>`"flex": 19`</li><li>`"size": "xs"`</li><li>`"color": "#999999"`</li><li>`"weight": "bold"`</li><li>`"gravity": "center"`</li><li>`"wrap": false`</li></ul> |
| F-3 | ![>](https://vos.line-scdn.net/service-notifier/footer_go_btn.png) | [Image](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#image) | <ul><li>`"url": "https://vos.line-scdn.net/service-notifier/footer_go_btn.png"`</li><li>`"flex": 1`</li><li>`"gravity": "center"`</li><li>`"size": "xxs"`</li><li>`"action" : { ... }`<br>사용자가 이 이미지를 탭하면 LINE MINI App 상단 페이지(`https://miniapp.line.me/{your-liffId}`)가 표시되도록 URI 액션을 지정하세요.</li></ul> |

```json
{
    "type": "bubble",
    "hero": { ... },
    "body": { ... },
    "footer": { // Footer 블록
        // Box
        "type": "box",
        "layout": "vertical",
        "contents": [
            {   // Separator
                "type": "separator",
                "color": "#f0f0f0"
            },
            {   // 푸터(F) - Box
                "type": "box",
                "layout": "horizontal",
                "contents": [
                    {   // LINE MINI App 아이콘(F-1)
                        "type": "image",
                        "url": "https://example.com/line-mini-app-icon.png",
                        "flex": 1,
                        "gravity": "center"
                    },
                    {   // LINE MINI App 이름(F-2)
                        "type": "text",
                        "text": "Service name",
                        "flex": 19,
                        "size": "xs",
                        "color": "#999999",
                        "weight": "bold",
                        "gravity": "center",
                        "wrap": false
                    },
                    {   // >(F-3)
                        "type": "image",
                        "url": "https://vos.line-scdn.net/service-notifier/footer_go_btn.png",
                        "flex": 1,
                        "gravity": "center",
                        "size": "xxs",
                        "action": {
                            "type": "uri",
                            "label": "action",
                            "uri": "https://miniapp.line.me/123456-abcedfg"
                        }
                    }
                ],
                "flex": 1,
                "spacing": "md",
                "margin": "md"
            }
        ]
    }
}
```

#### Image list type 

Image list type의 Flex Message는 다음 가이드라인을 따르세요.

예시 JSON 파일은 [가이드라인을 따르는 JSON 파일 예시](https://developers.line.biz/en/docs/line-mini-app/develop/share-messages-standard/)를 참고하세요.

<!-- note start -->

**참고**

- 액션은 버튼(E)과 푸터(F)의 지정된 구성 요소에만 설정할 수 있습니다.
- 여기에 설명하지 않은 속성은 변경하지 마세요.

<!-- note end -->

![](https://developers.line.biz/media/line-mini-app/mini_design_flex_msg_list.webp)

##### Image list type - 이미지(A) 

이미지(A)를 hero 블록에 넣으세요.

| 라벨 | 섹션 | 타입 | 설명 |
| --- | --- | --- | --- |
| A | 이미지 | [Hero 블록](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#block) > [Image](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#image) | <ul><li>`"url": "{Image URL}"`</li><li>`"size": "full"`</li><li>`"aspectRatio": "{width}:{height}"`<br>단, `{height}`는 `{width} * 2` 이하로 설정하세요.</li><li>`"aspectMode": "cover"`</li></ul> |

```json
{
    "type": "bubble",
    "hero": { // Hero 블록
        // 이미지(A)
        "type": "image",
        "url": "https://example.com/hero-image.png",
        "size": "full",
        "aspectRatio": "20:13",
        "aspectMode": "cover"
    },
    "body": {. . .}
}
```

##### Image list type - 본문 

제목(B), 부제목(C), 상세(D), 버튼(E)을 포함하는 body 블록을 다음과 같이 지정하세요.

| 라벨 | 섹션 | 타입 | 설명 |
| --- | --- | --- | --- |
| - | - | [Body 블록](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#block) > [Box](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#box) | <ul><li>`"layout": "vertical"`</li><li>`"spacing": "md"`</li></ul> |

```json
{
    "type": "bubble",
    "hero": { ... },
    "body": { // Body 블록
        // Box
        "type": "box",
        "layout": "vertical",
        "contents": [ ... ],
        "spacing": "md"
    }
}
```

##### Image list type - 제목(B) 

| 라벨 | 섹션 | 타입 | 설명 |
| --- | --- | --- | --- |
| B | 제목 | [Box](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#box) | <ul><li>`"layout": "vertical"`</li><li>`"spacing": "none"`</li></ul> |
| B | 제목 | [Text](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#text) | <ul><li>`"text": "{Title}"`<br>텍스트 최대 줄 수: 2</li><li>`"size": "lg"`</li><li>`"color": "#000000"`</li><li>`"weight": "bold"`</li><li>`"wrap": true`</li></ul> |

```json
{
    "type": "bubble",
    "hero": { ... },
    "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
            {   // 제목(B) - Box
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {   // Text
                        "type": "text",
                        "text": "Main title",
                        "size": "lg",
                        "color": "#000000",
                        "weight": "bold",
                        "wrap": true
                    }
                ],
                "spacing": "none"
            }
        ],
        "spacing": "md"
    }
}
```

##### Image list type - 부제목(C) 

| 라벨 | 섹션 | 타입 | 설명 |
| --- | --- | --- | --- |
| C | 부제목 | [Box](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#box) | <ul><li>`"layout": "vertical"`</li><li>`"spacing": "none"`</li></ul> |
| C | 부제목 | [Text](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#text) | <ul><li>`"text": "{Sub-title}"`<br>텍스트 최대 줄 수: 2</li><li>`"size": "sm"`</li><li>`"color": "#999999"`</li><li>`"wrap": true`</li></ul> |

```json
{
    "type": "bubble",
    "hero": { ... },
    "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
            {   // 제목(B) - Box
                ...
            },
            {   // 부제목(C) - Box
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {   // Text
                        "type": "text",
                        "text": "Sub-title",
                        "size": "sm",
                        "color": "#999999",
                        "wrap": true
                    }
                ],
                "spacing": "none"
            }
        ],
        "spacing": "md"
    }
}
```

##### Image list type - 상세(D) 

| 라벨 | 섹션 | 타입 | 설명 |
| --- | --- | --- | --- |
| D | 상세 | [Box](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#box) | <ul><li>`"layout": "vertical"`</li><li>`"spacing": "xl"`</li><li>`"margin": "lg"`</li></ul> |
| - | 상세 - 항목 | [Box](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#box) | D-1부터 D-4 한 쌍만 포함하는 box입니다.<ul><li>`"layout": "horizontal"`</li><li>`"flex": 1`</li></ul> |
| D-1 | 상세 - 이미지 | [Image](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#image) | <ul><li>`"url": "{Image URL}"`</li><li>`"flex": 3`</li><li>`"size": "sm"`</li><li>`"aspectRatio": "1:1"`</li><li>`"aspectMode": "cover"`</li></ul> |
| - | 상세 - 텍스트 영역 | [Box](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#box) | D-2부터 D-4로 구성된 box입니다.<ul><li>`"layout": "vertical"`</li><li>`"flex": 8`</li><li>`"spacing": "xs"`</li><li>`"margin": "md"`</li></ul> |
| D-2 | 상세 - 일반 텍스트 | [Text](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#text) | <ul><li>`"text": "{General Text}"`</li><li>`"size": "md"`</li><li>`"color": "#111111"`</li></ul> |
| D-3 | 상세 - 강조 텍스트 | [Text](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#text) | <ul><li>`"text": "{Text to emphasize}"`</li><li>`"size": "md"`</li><li>`"color": "#111111"`</li></ul> |
| D-4 | 상세 - 이미지+텍스트 | [Box](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#box) | D-4의 이미지와 텍스트로 구성된 box입니다:<ul><li>`"layout": "horizontal"`</li><li>`"flex": 1`</li></ul>D-4의 [Image](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#image):<ul><li>`"flex": 8`</li><li>`"url": "{Image URL}"`</li><li>`"gravity": "center"`</li><li>`"size": "xxs"`</li><li>`"aspectRatio": "1:1"`</li></ul>D-4의 [Text](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#text):<ul><li>`"flex": 85`</li><li>`"margin": "xs"`</li><li>`"text": "{Text}"`</li><li>`"size": "sm"`</li><li>`"color": "{Color}"`</li><li>`"gravity": "center"`</li></ul> |

```json
{
    "type": "bubble",
    "hero": { ... },
    "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
            {   // 제목(B) - Box
                ...
            },
            {   // 부제목(C) - Box
                ...
            },
            {   // 상세(D) - Box
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {   // 항목
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {   // 이미지
                                "type": "image",
                                "url": "https://example.com/item-image01.png",
                                "flex": 3,
                                "size": "sm",
                                "aspectRatio": "1:1",
                                "aspectMode": "cover"
                            },
                            {   // 텍스트 영역
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {   // 일반 텍스트(D-2)
                                        "type": "text",
                                        "text": "General text",
                                        "size": "md",
                                        "color": "#111111"
                                    },
                                    {   // 강조 텍스트(D-3)
                                        "type": "text",
                                        "text": "Text to emphasize",
                                        "size": "md",
                                        "color": "#111111"
                                    },
                                    {   // 이미지+텍스트(D-4)
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {   // 이미지
                                                "type": "image",
                                                "url": "https://example.com/item-image02.png",
                                                "flex": 8,
                                                "gravity": "center",
                                                "size": "xxs",
                                                "aspectRatio": "1:1"
                                            },
                                            {   // Text
                                                "type": "text",
                                                "text": "Text",
                                                "flex": 85,
                                                "gravity": "center",
                                                "size": "sm",
                                                "color": "#17c950",
                                                "margin": "xs"
                                            }
                                        ],
                                        "flex": 1
                                    }
                                ],
                                "flex": 8,
                                "spacing": "xs",
                                "margin": "md"
                            }
                        ],
                        "flex": 1
                    }
                ],
                "spacing": "xl",
                "margin": "lg"
            }
        ],
        "spacing": "md"
    }
}
```

##### Image list type - 버튼(E) 

| 라벨 | 섹션 | 타입 | 설명 |
| --- | --- | --- | --- |
| E | 버튼 | [Box](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#box) | E-1과 E-2로 구성된 box입니다.<ul><li>`"layout": "vertical"`</li><li>`"spacing": "xs"`</li></ul> |
| E-1 | 버튼<br>(링크만 사용하는 경우) | [Button](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#button) | <ul><li>`"style": "link"`</li><li>`"height": "sm"`</li><li>`"color": "{Text Color}"`</li><li>`"action" : { ... }`<br>사용자가 이 버튼을 탭하면 LINE MINI App 페이지가 표시되도록 URI 액션을 지정하세요. LINE MINI App의 상단 페이지가 아닌 다른 페이지를 표시하는 경우, [영구 링크](https://developers.line.biz/en/docs/line-mini-app/develop/permanent-links/)를 할당해야 합니다.</li></ul> |
| E-2 | 버튼<br>(primary 스타일 사용 시) | [Button](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#button) | <ul><li>상단 버튼에는 `"style": "primary"`를, 그 외 버튼에는 `"style": "link"`를 지정하세요. `"secondary"`는 사용할 수 없습니다.</li><li>`"height": "md"`</li><li>`"color": "{Text or Background Color}"`</li><li>`"action" : { ... }`<br>사용자가 이 버튼을 탭하면 LINE MINI App 페이지가 표시되도록 URI 액션을 지정하세요. LINE MINI App의 상단 페이지가 아닌 다른 페이지를 표시하는 경우, [영구 링크](https://developers.line.biz/en/docs/line-mini-app/develop/permanent-links/)를 할당해야 합니다.</li></ul></li></ul> |

primary 스타일을 사용하는 경우:

```json
{
    "type": "bubble",
    "hero": { ... }
    },
    "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
            {   // 제목(B) - Box
                ...
            },
            {   // 부제목(C) - Box
                ...
            },
            {   // 상세(D) - Box
                ...
            },
            {   // 버튼(E) - Box
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {   // 버튼(primary)
                        "type": "button",
                        "action": {
                            "type": "uri",
                            "label": "View details",
                            "uri": "https://miniapp.line.me/123456-abcedfg"
                        },
                        "style": "primary",
                        "height": "md",
                        "color": "#17c950"
                    },
                    {   // 버튼(link)
                        "type": "button",
                        "action": {
                            "type": "uri",
                            "label": "Share",
                            "uri": "https://miniapp.line.me/123456-abcedfg/share"
                        },
                        "style": "link",
                        "height": "md",
                        "color": "#469fd6"
                    }
                ],
                "spacing": "xs"
            }
        ],
        "spacing": "md"
    }
}
```

##### Image list type - 푸터(F) 

| 라벨 | 섹션 | 타입 | 설명 |
| --- | --- | --- | --- |
| - | - | [Footer 블록](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#block) > [Box](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#box) | <ul><li>`"layout": "vertical"`</li></ul> |
| - | - | [Separator](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#separator) | <ul><li>`"color": "#f0f0f0"`</li></ul> |
| F | 푸터 | [Box](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#box) | F-1부터 F-3으로 구성된 box입니다.<ul><li>`"layout": "horizontal"`</li><li>`"flex": 1`</li><li>`"spacing": "md"`</li><li>`"margin": "md"`</li></ul> |
| F-1 | LINE MINI App 아이콘 | [Image](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#image) | <ul><li>`"url": "{Image URL}"`</li><li>`"flex": 1`</li><li>`"gravity": "center"`</li></ul> |
| F-2 | LINE MINI App 이름 | [Text](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#text) | <ul><li>`"text": "{LINE MINI App Name}"`<br>텍스트 최대 줄 수: 1</li><li>`"flex": 19`</li><li>`"size": "xs"`</li><li>`"color": "#999999"`</li><li>`"weight": "bold"`</li><li>`"gravity": "center"`</li><li>`"wrap": false`</li></ul> |
| F-3 | ![>](https://vos.line-scdn.net/service-notifier/footer_go_btn.png) | [Image](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#image) | <ul><li>`"url": "https://vos.line-scdn.net/service-notifier/footer_go_btn.png"`</li><li>`"flex": 1`</li><li>`"gravity": "center"`</li><li>`"size": "xxs"`</li><li>`"action" : { ... }`<br>사용자가 이 이미지를 탭하면 LINE MINI App 상단 페이지(`https://miniapp.line.me/{your-liffId}`)가 표시되도록 URI 액션을 지정하세요.</li></ul> |

```json
{
    "type": "bubble",
    "hero": { ... },
    "body": { ... },
    "footer": { // Footer 블록
        // Box
        "type": "box",
        "layout": "vertical",
        "contents": [
            {   // Separator
                "type": "separator",
                "color": "#f0f0f0"
            },
            {   // 푸터(F) - Box
                "type": "box",
                "layout": "horizontal",
                "contents": [
                    {   // LINE MINI App 아이콘(F-1)
                        "type": "image",
                        "url": "https://example.com/line-mini-app-icon.png",
                        "flex": 1,
                        "gravity": "center"
                    },
                    {   // LINE MINI App 이름(F-2)
                        "type": "text",
                        "text": "Service name",
                        "flex": 19,
                        "size": "xs",
                        "color": "#999999",
                        "weight": "bold",
                        "gravity": "center",
                        "wrap": false
                    },
                    {   // >(F-3)
                        "type": "image",
                        "url": "https://vos.line-scdn.net/service-notifier/footer_go_btn.png",
                        "flex": 1,
                        "gravity": "center",
                        "size": "xxs",
                        "action": {
                            "type": "uri",
                            "label": "action",
                            "uri": "https://miniapp.line.me/123456-abcedfg"
                        }
                    }
                ],
                "flex": 1,
                "spacing": "md",
                "margin": "md"
            }
        ]
    }
}
```
