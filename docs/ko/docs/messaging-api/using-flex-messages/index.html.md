# Flex Message 보내기

Flex Message는 일반적인 LINE 메시지에 비해 폭넓고 상호작용이 가능한 레이아웃을 제공하는 메시지입니다. 일반 LINE 메시지는 텍스트, 이미지, 동영상과 같은 단일 소스 유형만 전달할 수 있습니다. Flex Message는 [CSS Flexible Box(CSS Flexbox)](https://www.w3.org/TR/css-flexbox-1/) 사양을 기반으로 원하는 대로 레이아웃을 맞춤 설정할 수 있습니다.

Flex Message의 구성 요소는 컨테이너, 블록, 컴포넌트입니다. 각 Flex Message에는 메시지 버블을 담는 컨테이너 하나가 최상위 요소로 있습니다. 컨테이너에는 여러 메시지 버블을 넣을 수 있습니다. 버블에는 블록이 있고, 블록에는 컴포넌트가 있습니다.

Flex Message에서는 텍스트의 방향을 왼쪽에서 오른쪽(LTR) 또는 오른쪽에서 왼쪽(RTL)으로 설정할 수 있습니다.

<!-- note start -->

**Flex Message 제한 사항**

같은 Flex Message라도 수신자의 기기 환경에 따라 다르게 표시될 수 있습니다. 표시 방식은 기기 OS, LINE 버전, 기기 해상도, 언어 설정, 글꼴에 영향을 받을 수 있습니다.

<!-- note end -->

![Flex Message 예시](https://developers.line.biz/media/messaging-api/using-flex-messages/bubbleSamples-Update1.webp)

다른 메시지 유형과 마찬가지로 Flex Message도 JSON으로 정의합니다. Flex Message에 대한 자세한 내용은 다음을 참고하세요.

- [Flex Message 요소](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/)
- [Flex Message 레이아웃](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/)
- [Flex Message](https://developers.line.biz/en/reference/messaging-api/#flex-message) (Messaging API 레퍼런스)

## 운영 환경 

Flex Message는 모든 LINE 버전에서 지원됩니다. 다만 아래 기능은 모든 LINE 버전에서 지원되지 않습니다.

| 기능 | LINE for iOS<br>LINE for Android | LINE for PC<br />(macOS, Windows) |
| --- | :-: | :-: |
| <ul><li>[box](https://developers.line.biz/en/reference/messaging-api/#box)의 `maxWidth` 속성</li><li>[box](https://developers.line.biz/en/reference/messaging-api/#box)의 `maxHeight` 속성</li><li>[text](https://developers.line.biz/en/reference/messaging-api/#f-text)의 `lineSpacing` 속성</li><li>[동영상](https://developers.line.biz/en/reference/messaging-api/#f-video) \*1</li></ul> | 11.22.0 이상 | 7.7.0 이상 |
| <ul><li>[bubble](https://developers.line.biz/en/reference/messaging-api/#bubble)의 `size` 속성 중 `deca` 및 `hecto` 값 \*2</li><li>[button](https://developers.line.biz/en/reference/messaging-api/#button), [text](https://developers.line.biz/en/reference/messaging-api/#f-text), [icon](https://developers.line.biz/en/reference/messaging-api/#icon)의 `scaling` 속성</li></ul> | 13.6.0 이상 | 7.17.0 이상 |

\*1 동영상 컴포넌트를 지원하지 않는 버전에서도 Flex Message의 동영상 컴포넌트가 제대로 표시되도록 하려면 `altContent` 속성을 지정하세요. 이 속성에 지정한 이미지가 대신 표시됩니다.

\*2 LINE 버전이 `deca` 및 `hecto`를 지원하는 버전보다 낮으면 버블 크기가 `kilo`로 표시됩니다.

## Flex Message Simulator 

[Flex Message Simulator](https://developers.line.biz/flex-simulator/)를 사용하면 메시지를 보내지 않고도 렌더링된 결과를 확인하여 Flex Message의 레이아웃을 점검할 수 있습니다.

![Flex Message Simulator](https://developers.line.biz/media/messaging-api/using-flex-messages/flex-message-simulator-en.webp)

Flex Message Simulator에 대한 자세한 내용은 [튜토리얼 - Flex Message Simulator로 디지털 명함 만들기](https://developers.line.biz/en/docs/messaging-api/using-flex-message-simulator/)를 참고하세요.

## "Hello, World!" 보내기 

Flex Message를 시작하려면 "Hello, World!"를 Flex Message로 보내 보세요. 먼저 메시지를 JSON으로 [정의](https://developers.line.biz/en/docs/messaging-api/using-flex-messages/#preparing-json-data)한 다음, [Messaging API를 호출](https://developers.line.biz/en/docs/messaging-api/using-flex-messages/#sending-messages-with-the-messaging-api)하여 메시지를 보냅니다.

![Hello, World!](https://developers.line.biz/media/messaging-api/using-flex-messages/helloWorld.png)

### JSON으로 Flex Message 정의하기 

Messaging API를 호출하여 Flex Message를 보내기 전에 Flex Message를 JSON으로 정의하세요. 다음은 "Hello, World!" 메시지를 JSON으로 정의하는 방법입니다. 이 Flex Message에는 메시지 버블 하나만 필요하므로 [Bubble 컨테이너](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#bubble) 유형을 사용합니다.

```json
{
  "type": "bubble", // 1
  "body": {
    // 2
    "type": "box", // 3
    "layout": "horizontal", // 4
    "contents": [
      // 5
      {
        "type": "text", // 6
        "text": "Hello,"
      },
      {
        "type": "text", // 6
        "text": "World!"
      }
    ]
  }
}
```

코드 주석의 라벨 1부터 6까지에 대한 설명은 다음과 같습니다.

| | |
| --- | --- |
| 1 | 단일 메시지 버블을 위한 컨테이너를 만듭니다. 따라서 컨테이너 유형을 `"bubble"`로 설정합니다. |
| 2 | 버블의 내용을 _담을_ 바디를 지정합니다. 메시지를 표시하는 데 필요한 블록 유형은 [바디 블록](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#block) 하나뿐입니다. |
| 3 | 바디 블록을 [box 컴포넌트](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#box)로 설정합니다. |
| 4 | 바디의 방향을 가로로 설정합니다. 이렇게 하면 하위 컴포넌트가 box 안에서 가로로 배치됩니다. |
| 5 | box에 배치할 컴포넌트를 지정합니다. |
| 6 | "Hello,"와 "World!"라는 두 개의 text 컴포넌트를 삽입합니다. |

### Messaging API를 호출하여 Flex Message 보내기 

[메시지 유형](https://developers.line.biz/en/docs/messaging-api/sending-messages/) 중 어떤 방식으로든 Flex Message를 보낼 수 있습니다. 메시지 요청의 요청 본문에서 `messages.contents` 속성에 [Flex Message](https://developers.line.biz/en/reference/messaging-api/#flex-message) 객체 정의를 설정합니다.

다음은 Flex Message로 푸시 메시지를 보내는 요청 예시입니다.

```sh
curl -v -X POST https://api.line.me/v2/bot/message/push \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer {channel access token}' \
-d '{
  "to": "U4af4980629...",
  "messages": [
    {
      "type": "flex",
      "altText": "This is a Flex Message",
      "contents": {
        "type": "bubble",
        "body": {
          "type": "box",
          "layout": "horizontal",
          "contents": [
            {
              "type": "text",
              "text": "Hello,"
            },
            {
              "type": "text",
              "text": "World!"
            }
          ]
        }
      }
    }
  ]
}'
```

## 관련 페이지 

- [Flex Message 요소](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/)
- [Flex Message 레이아웃](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/)
- [Flex Message](https://developers.line.biz/en/reference/messaging-api/#flex-message) (Messaging API 레퍼런스)
- [Flex Message Simulator](https://developers.line.biz/flex-simulator/)
