# 퀵 리플라이 사용하기

퀵 리플라이는 사용자가 답장할 수 있도록 메시지와 함께 버튼을 표시하는 기능입니다. 사용자는 채팅 화면 하단에 표시된 답장 버튼을 탭하기만 하면 LINE 공식 계정에 답장할 수 있습니다. 퀵 리플라이는 LINE 공식 계정이 멤버로 참여하는 1:1 채팅, 그룹 채팅, 여러 명이 참여하는 채팅에서 사용할 수 있습니다. 모든 유형의 메시지에 최대 13개의 퀵 리플라이 버튼을 설정할 수 있습니다.

<!-- note start -->

**참고**

퀵 리플라이는 LINE for iOS와 LINE for Android에서 지원됩니다.

<!-- note end -->

![퀵 리플라이 샘플](https://developers.line.biz/media/messaging-api/using-quick-reply/quickReplySample.png)

## 퀵 리플라이 구성 요소 

퀵 리플라이 버튼의 구성 요소는 [액션](https://developers.line.biz/en/docs/messaging-api/using-quick-reply/#action), [아이콘](https://developers.line.biz/en/docs/messaging-api/using-quick-reply/#icon), [레이블](https://developers.line.biz/en/docs/messaging-api/using-quick-reply/#label)입니다. 자세한 내용은 Messaging API 레퍼런스의 [퀵 리플라이](https://developers.line.biz/en/reference/messaging-api/#quick-reply)를 참고하세요.

### 액션 

퀵 리플라이 버튼을 탭하면 액션이 실행됩니다. 자세한 내용은 [액션](https://developers.line.biz/en/docs/messaging-api/actions/)을 참고하세요.

퀵 리플라이 버튼에서만 사용할 수 있는 액션은 다음과 같습니다.

- [카메라 액션](https://developers.line.biz/en/reference/messaging-api/#camera-action)
- [카메라 롤 액션](https://developers.line.biz/en/reference/messaging-api/#camera-roll-action)
- [위치 액션](https://developers.line.biz/en/reference/messaging-api/#location-action)

다른 메시지 유형에서도 사용할 수 있는 액션으로, 퀵 리플라이 버튼에서 사용할 수 있는 액션은 다음과 같습니다.

- [포스트백 액션](https://developers.line.biz/en/reference/messaging-api/#postback-action)
- [메시지 액션](https://developers.line.biz/en/reference/messaging-api/#message-action)
- [URI 액션](https://developers.line.biz/en/reference/messaging-api/#uri-action)
- [Datetime picker 액션](https://developers.line.biz/en/reference/messaging-api/#datetime-picker-action)
- [클립보드 액션](https://developers.line.biz/en/reference/messaging-api/#clipboard-action)

<!-- tip start -->

**리치 메뉴 전환 액션은 사용할 수 없습니다**

퀵 리플라이 버튼에서 사용할 수 없는 액션은 [리치 메뉴 전환 액션](https://developers.line.biz/en/reference/messaging-api/#richmenu-switch-action)입니다.

<!-- tip end -->

### 아이콘 

퀵 리플라이 버튼에는 아이콘이 표시됩니다.

아이콘 이미지를 설정하지 않으면 다음과 같이 표시됩니다.

- 카메라, 카메라 롤, 위치 액션: 기본 아이콘이 표시됩니다.
- 위에 나열되지 않은 액션: 아이콘이 표시되지 않습니다.

### 레이블 

레이블은 퀵 리플라이 버튼에 표시되는 텍스트입니다.

## 퀵 리플라이 버튼 설정하기 

레스토랑 검색 봇을 개발한다고 가정해 보겠습니다. 이 봇은 사용자가 선호하는 음식 종류나 사용자의 위치에 따라 레스토랑을 추천합니다. 사용자가 답장하도록 유도하는 메시지를 작성해 보겠습니다.

1. 사용자에게 요청을 묻는 텍스트 메시지 객체를 만듭니다.
1. 내부에 `items` 배열이 있는 `quickReply` 객체를 추가합니다. 배열에 퀵 리플라이 버튼 객체 세 개를 추가합니다.
1. 처음 두 개의 퀵 리플라이 버튼에는 음식 종류를 지정합니다. 아이콘, 레이블, 메시지 액션을 설정합니다. 사용자가 두 버튼 중 하나를 탭하면 사용자가 선택한 음식 종류가 사용자의 답장으로 전송됩니다.
1. 세 번째 퀵 리플라이 버튼에는 사용자에게 위치를 보내도록 요청합니다. 위치 정보를 보내도록 안내하는 레이블과 위치 액션을 추가합니다. 기본 아이콘을 사용하려면 `imageUrl` 속성을 지정하지 마세요.

다음은 퀵 리플라이 버튼이 포함된 메시지의 예시입니다. 번호가 표시된 줄은 위 지침 번호에 해당합니다.

```sh
{
  "type": "text", // 1
  "text": "Select your favorite food category or send me your location!",
  "quickReply": { // 2
    "items": [
      {
        "type": "action", // 3
        "imageUrl": "https://example.com/sushi.png",
        "action": {
          "type": "message",
          "label": "Sushi",
          "text": "Sushi"
        }
      },
      {
        "type": "action",
        "imageUrl": "https://example.com/tempura.png",
        "action": {
          "type": "message",
          "label": "Tempura",
          "text": "Tempura"
        }
      },
      {
        "type": "action", // 4
        "action": {
          "type": "location",
          "label": "Send location"
        }
      }
    ]
  }
}
```

위 메시지가 포함된 채팅에서 사용자에게 보이는 퀵 리플라이 버튼은 다음과 같습니다.

![퀵 리플라이 샘플 2](https://developers.line.biz/media/messaging-api/using-quick-reply/quickReplySample2.webp)

## 퀵 리플라이 버튼이 사라지는 경우 

다음과 같은 경우 퀵 리플라이 버튼이 사라집니다.

- 사용자가 퀵 리플라이 버튼 중 하나를 탭한 경우(카메라, 카메라 롤, datetime picker 액션, 위치 액션은 제외합니다. 이 액션의 버튼은 예상되는 데이터가 전송될 때까지 남아 있습니다.)
- LINE 공식 계정, 사용자 또는 다른 멤버가 채팅방에 새 메시지를 보낸 경우(새 메시지가 삭제되면 퀵 리플라이 버튼이 다시 나타납니다.)

일부 액션은 퀵 리플라이 버튼을 탭해도 사용자의 선택이 자동으로 채팅에 게시되지 않습니다. 사용자가 어떤 답장 버튼을 눌렀는지 알고 채팅에서 확인할 수 있도록, 전송된 답장이 채팅에 메시지로 남도록 구현하세요.

## 관련 페이지 

- [메시지 유형](https://developers.line.biz/en/docs/messaging-api/message-types/)
- [액션](https://developers.line.biz/en/docs/messaging-api/actions/)
- Messaging API 레퍼런스의 [메시지 객체](https://developers.line.biz/en/reference/messaging-api/#message-objects)
