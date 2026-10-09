# 동영상이 포함된 Flex Message 만들기

Flex Message의 동영상 컴포넌트를 사용하면 히어로 [블록](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#block)에 동영상을 표시할 수 있습니다. Flex Message 전송에 대한 자세한 내용은 [Flex Message 보내기](https://developers.line.biz/en/docs/messaging-api/using-flex-messages/)를 참고하세요.

<!-- table of contents -->

## Flex Message에 동영상을 포함하기 위한 요구 사항 

Flex Message에 [동영상](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#video) 컴포넌트를 포함하려면 다음을 충족해야 합니다.

- 히어로 [블록](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#block)의 유형을 `video`로 지정합니다.
- 버블의 크기를 `kilo`, `mega`, `giga` 중 하나로 지정합니다.
- 버블이 캐러셀의 자식 요소가 아니어야 합니다.

## 동영상 종횡비 

동영상이 너무 넓거나 너무 좁으면, 기기에 따라 동영상이 전체가 아닌 일부만 잘려서 표시될 수 있습니다. 동영상을 올바르게 표시하려면 다음 세 가지의 종횡비가 모두 같은지 확인하세요.

- `url` 속성에 지정된 동영상의 종횡비
- `aspectRatio` 속성에 지정된 종횡비
- `previewUrl` 속성에 지정된 미리 보기 이미지의 종횡비

![LINE 채팅방의 동영상입니다. 종횡비가 16:9인 동영상 뒤에 1:1 종횡비의 미리 보기 이미지가 표시되어 있습니다.](https://developers.line.biz/media/messaging-api/messages/image-overlapping-en.png)

## 동영상의 URI 액션 

`action` 속성을 사용하여 [URI 액션](https://developers.line.biz/en/reference/messaging-api/#uri-action)을 지정할 수 있습니다. 이 액션을 사용하면 사용자가 LINE의 인앱 브라우저에서 URL을 열거나 기기의 통화 앱으로 지정한 번호에 전화를 걸 수 있습니다. URI 액션의 레이블은 다음 세 곳에 표시됩니다.

- [채팅방(동영상 재생 후)](https://developers.line.biz/en/docs/messaging-api/create-flex-message-including-video/#chat-room-screen)
- [동영상 플레이어(동영상 재생 중)](https://developers.line.biz/en/docs/messaging-api/create-flex-message-including-video/#video-player-screen1)
- [동영상 플레이어(동영상 재생 후)](https://developers.line.biz/en/docs/messaging-api/create-flex-message-including-video/#video-player-screen2)

![동영상 재생이 끝났을 때의 채팅방](https://developers.line.biz/media/messaging-api/create-flex-message-including-video/label-in-chat-room-en.webp)
![동영상 재생 중인 동영상 플레이어](https://developers.line.biz/media/messaging-api/create-flex-message-including-video/label-in-video-player1-en.webp)
![동영상 재생이 끝났을 때의 동영상 플레이어](https://developers.line.biz/media/messaging-api/create-flex-message-including-video/label-in-video-player2-en.webp)

## 동영상이 포함된 Flex Message 정의하기 

동영상만 포함된 Flex Message가 가장 기본적인 레이아웃입니다. 아래와 같습니다.

![동영상 컴포넌트 예시](https://developers.line.biz/media/messaging-api/flex-message-elements/video-sample.png)

동영상을 삽입하려면 `hero` 블록을 사용해야 합니다. 동영상 컴포넌트를 지원하지 않는 LINE 버전에서도 동영상이 포함된 Flex Message가 적절히 표시되도록 대체 콘텐츠를 지정하세요. `altContent` 속성에 동영상 대신 표시할 콘텐츠를 지정하세요. 이 Flex Message 예시의 JSON 정의는 다음과 같습니다.

```json
{
  "type": "bubble",
  "size": "mega",
  "hero": {
    "type": "video",
    "url": "https://example.com/video.mp4",
    "previewUrl": "https://example.com/video_preview.jpg",
    "altContent": {
      "type": "image",
      "size": "full",
      "aspectRatio": "20:13",
      "aspectMode": "cover",
      "url": "https://example.com/image.jpg"
    },
    "aspectRatio": "20:13"
  }
}
```

동영상만 포함된 Flex Message는 [동영상 메시지](https://developers.line.biz/en/reference/messaging-api/#video-message)와 비슷하게 보입니다. Flex Message를 사용하면 동영상을 포함한 더 복잡한 레이아웃의 메시지를 만들 수 있습니다.

![동영상 컴포넌트 예시](https://developers.line.biz/media/messaging-api/create-flex-message-including-video/video.png)

이 Flex Message 예시의 JSON 정의는 다음과 같습니다.

```json
{
  "type": "bubble",
  "size": "mega",
  "hero": {
    "type": "video",
    "url": "https://example.com/video.mp4",
    "previewUrl": "https://example.com/video_preview.png",
    "altContent": {
      "type": "image",
      "size": "full",
      "aspectRatio": "20:13",
      "aspectMode": "cover",
      "url": "https://example.com/image.png"
    },
    "action": {
      "type": "uri",
      "label": "More information",
      "uri": "http://example.com/"
    },
    "aspectRatio": "20:13"
  },
  "body": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "text",
        "text": "Brown Cafe",
        "weight": "bold",
        "size": "xl"
      },
      {
        "type": "box",
        "layout": "baseline",
        "margin": "md",
        "contents": [
          {
            "type": "icon",
            "size": "sm",
            "url": "https://example.com/star.png"
          },
          {
            "type": "icon",
            "size": "sm",
            "url": "https://example.com/star.png"
          },
          {
            "type": "icon",
            "size": "sm",
            "url": "https://example.com/star.png"
          },
          {
            "type": "icon",
            "size": "sm",
            "url": "https://example.com/star.png"
          },
          {
            "type": "icon",
            "size": "sm",
            "url": "https://example.com/gray_star.png"
          },
          {
            "type": "text",
            "text": "4.0",
            "size": "sm",
            "color": "#999999",
            "margin": "md",
            "flex": 0
          }
        ]
      },
      {
        "type": "box",
        "layout": "vertical",
        "margin": "lg",
        "spacing": "sm",
        "contents": [
          {
            "type": "box",
            "layout": "baseline",
            "spacing": "sm",
            "contents": [
              {
                "type": "text",
                "text": "Place",
                "color": "#aaaaaa",
                "size": "sm",
                "flex": 1
              },
              {
                "type": "text",
                "text": "1-3 Kioicho, Chiyoda-ku, Tokyo",
                "wrap": true,
                "color": "#666666",
                "size": "sm",
                "flex": 5
              }
            ]
          },
          {
            "type": "box",
            "layout": "baseline",
            "spacing": "sm",
            "contents": [
              {
                "type": "text",
                "text": "Time",
                "color": "#aaaaaa",
                "size": "sm",
                "flex": 1
              },
              {
                "type": "text",
                "text": "10:00 - 23:00",
                "wrap": true,
                "color": "#666666",
                "size": "sm",
                "flex": 5
              }
            ]
          }
        ]
      }
    ]
  },
  "footer": {
    "type": "box",
    "layout": "vertical",
    "spacing": "sm",
    "contents": [
      {
        "type": "button",
        "style": "link",
        "height": "sm",
        "action": {
          "type": "uri",
          "label": "CALL",
          "uri": "https://example.com"
        }
      },
      {
        "type": "button",
        "style": "link",
        "height": "sm",
        "action": {
          "type": "uri",
          "label": "WEBSITE",
          "uri": "https://example.com"
        }
      },
      {
        "type": "box",
        "layout": "vertical",
        "contents": [],
        "margin": "sm"
      }
    ],
    "flex": 0
  }
}
```

## 재생 동작 

Flex Message로 보낸 동영상은 [채팅방](https://developers.line.biz/en/docs/messaging-api/create-flex-message-including-video/#chat-room)에서 재생하거나 [동영상 플레이어](https://developers.line.biz/en/docs/messaging-api/create-flex-message-including-video/#video-player)에서 재생할 수 있습니다.

<!-- note start -->

**동영상이 제대로 재생되지 않는 경우**

동영상이 포함된 메시지가 성공적으로 전송되더라도 사용자의 기기에서 동영상이 제대로 재생되지 않을 수 있습니다. 자세한 내용은 FAQ의 [보낸 동영상을 재생할 수 없는 이유는 무엇인가요?](https://developers.line.biz/en/faq/#why-cant-i-play-a-video-i-sent)를 참고하세요.

<!-- note end -->

### 채팅방에서 재생 

채팅방에서 재생이 시작되는 방식은 LINE의 사용자 설정에 따라 달라지며, 설정 위치는 **Settings** > **Photos & videos** > **Auto-play videos**입니다. 자동 재생은 LINE for PC(macOS 및 Windows)에서 지원되지 않습니다.

| 설정 | 동영상 재생 |
| --------------------- | ------------------------------------------------- |
| **On mobile & Wi-Fi** | 동영상이 자동으로 재생됩니다. |
| **On Wi-Fi only** | Wi-Fi에 연결된 경우에만 동영상이 자동으로 재생됩니다. |
| **Never** | 동영상이 자동으로 재생되지 않습니다. |

#### 동영상 재생이 끝났을 때의 화면 

동영상 재생이 끝나면 동영상 위에 최대 두 개의 버튼을 표시할 수 있습니다. 첫 번째 버튼은 **Play**입니다. 사용자가 이 버튼을 탭하면 동영상 플레이어가 실행되고 재생이 시작됩니다. 자세한 내용은 [동영상 플레이어에서 재생](https://developers.line.biz/en/docs/messaging-api/create-flex-message-including-video/#video-player)을 참고하세요.

두 번째 버튼은 **More information**입니다. 이 버튼에는 동영상 컴포넌트에 지정한 URI 액션의 레이블이 표시됩니다. 텍스트는 변경할 수 있습니다. 동영상 컴포넌트에 URI 액션을 지정하지 않으면 **Play** 버튼만 표시됩니다. 자세한 내용은 [동영상의 URI 액션](https://developers.line.biz/en/docs/messaging-api/create-flex-message-including-video/#uri-action)을 참고하세요.

![동영상 재생이 끝났을 때의 화면](https://developers.line.biz/media/messaging-api/create-flex-message-including-video/auto-play-finished-en.png)

### 동영상 플레이어에서 재생 

사용자가 채팅방에서 동영상을 탭하면 동영상 플레이어가 실행되고 동영상 재생이 시작됩니다. [재생 중](https://developers.line.biz/en/docs/messaging-api/create-flex-message-including-video/#video-player-screen1)과 [재생 후](https://developers.line.biz/en/docs/messaging-api/create-flex-message-including-video/#video-player-screen2)에 표시되는 버튼은 다릅니다.

#### 재생 중 화면 

동영상이 재생되는 동안 동영상 플레이어 상단에 최대 두 개의 버튼을 표시할 수 있습니다. 첫 번째 버튼은 **Done**입니다. 사용자가 이 버튼을 탭하면 동영상 플레이어가 닫히고 채팅방으로 이동합니다. [자동 재생](https://developers.line.biz/en/docs/messaging-api/create-flex-message-including-video/#chat-room)의 조건을 충족하면 채팅방에서 동영상 재생이 계속됩니다.

두 번째 버튼은 **More information**입니다. 이 버튼에는 동영상 컴포넌트에 지정한 URI 액션의 레이블이 표시됩니다. 텍스트는 변경할 수 있습니다. 동영상 컴포넌트에 URI 액션을 지정하지 않으면 **Done** 버튼만 표시됩니다. 자세한 내용은 [동영상의 URI 액션](https://developers.line.biz/en/docs/messaging-api/create-flex-message-including-video/#uri-action)을 참고하세요.

![동영상 재생 중인 화면](https://developers.line.biz/media/messaging-api/create-flex-message-including-video/video-player-en.webp)

#### 재생 완료 후 화면 

동영상 재생이 끝나면 동영상 위에 최대 두 개의 버튼을 표시할 수 있습니다. 첫 번째 버튼은 **Replay**입니다. 사용자가 이 버튼을 탭하면 동영상 플레이어에서 재생이 다시 시작됩니다.

두 번째 버튼은 **More information**입니다. 이 버튼에는 동영상 컴포넌트에 지정한 URI 액션의 레이블이 표시됩니다. 텍스트는 변경할 수 있습니다. 동영상 컴포넌트에 URI 액션을 지정하지 않으면 **Replay** 버튼만 표시됩니다. 자세한 내용은 [동영상의 URI 액션](https://developers.line.biz/en/docs/messaging-api/create-flex-message-including-video/#uri-action)을 참고하세요.

![동영상 재생이 끝났을 때의 화면](https://developers.line.biz/media/messaging-api/create-flex-message-including-video/video-player-finished-en.webp)

## 동영상 컴포넌트를 지원하지 않는 LINE 버전에서의 표시 

LINE 버전이 동영상 컴포넌트를 지원하는 버전보다 낮으면, `altContent` 속성의 값으로 지정된 컴포넌트가 표시됩니다. `altContent` 속성에는 [box](https://developers.line.biz/en/reference/messaging-api/#box) 컴포넌트 또는 [image](https://developers.line.biz/en/reference/messaging-api/#f-image) 컴포넌트를 사용하세요.

## Flex Message 시뮬레이터의 동영상 

[Flex Message 시뮬레이터](https://developers.line.biz/flex-simulator/)에서는 동영상을 미리 볼 수 없습니다. 대신 [동영상 컴포넌트를 지원하지 않는 LINE 버전에서의 표시](https://developers.line.biz/en/docs/messaging-api/create-flex-message-including-video/#alt-content)와 같이, 설정한 대체 콘텐츠가 Flex Message 시뮬레이터의 미리 보기 영역에 표시됩니다.

Flex Message 시뮬레이터에서 작성한 Flex Message의 동영상을 확인하려면 시뮬레이터에서 LINE으로 메시지를 보내세요. 시뮬레이터 오른쪽 상단의 **Send...** 메뉴를 사용하면 시뮬레이터에서 테스트 메시지를 보낼 수 있습니다.

![Flex Message 시뮬레이터의 Send... 버튼](https://developers.line.biz/media/messaging-api/create-flex-message-including-video/send.png)

## 관련 페이지 

- [Flex Message 보내기](https://developers.line.biz/en/docs/messaging-api/using-flex-messages/)
- [Flex Message 요소](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/)
- [Flex Message 레이아웃](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/)
- [Flex Message](https://developers.line.biz/en/reference/messaging-api/#flex-message) (Messaging API 레퍼런스)
- [Flex Message 시뮬레이터](https://developers.line.biz/flex-simulator/)
