# 액션

메시지의 컨트롤을 사용자가 탭했을 때 실행되는 액션을 여러 종류로 설정할 수 있습니다. 사용할 수 있는 액션은 메시지 유형에 따라 다릅니다. 자세한 내용은 Messaging API 레퍼런스의 [메시지 오브젝트](https://developers.line.biz/en/reference/messaging-api/#message-objects)를 참고하세요.

사용할 수 있는 액션은 다음과 같습니다.

- [포스트백 액션](https://developers.line.biz/en/docs/messaging-api/actions/#postback-action)
- [메시지 액션](https://developers.line.biz/en/docs/messaging-api/actions/#message-action)
- [URI 액션](https://developers.line.biz/en/docs/messaging-api/actions/#uri-action)
- [날짜/시간 선택 액션](https://developers.line.biz/en/docs/messaging-api/actions/#datetime-picker-action)
- [카메라 액션](https://developers.line.biz/en/docs/messaging-api/actions/#camera-action)
- [카메라 롤 액션](https://developers.line.biz/en/docs/messaging-api/actions/#camera-roll-action)
- [위치 액션](https://developers.line.biz/en/docs/messaging-api/actions/#location-action)
- [리치 메뉴 전환 액션](https://developers.line.biz/en/docs/messaging-api/actions/#richmenu-switch-action)
- [클립보드 액션](https://developers.line.biz/en/docs/messaging-api/actions/#clipboard-action)

## 포스트백 액션 

포스트백 액션은 액션에서 지정한 텍스트가 담긴 [포스트백 이벤트](https://developers.line.biz/en/reference/messaging-api/#postback-event)를 서버로 보냅니다. 이 텍스트를 사용자가 보낸 메시지처럼 채팅창에 표시하도록 설정할 수도 있습니다.

사용자 액션에 따라 리치 메뉴 등의 표시 방식을 지정할 수도 있습니다. 지정할 수 있는 표시 방식은 다음과 같습니다.

- 리치 메뉴 닫기
- 리치 메뉴 열기
- 키보드 열기
- 음성 메시지 입력 모드 열기

사용자 액션에 따른 표시 방식 지정은 iOS 또는 Android의 LINE 버전 `12.6.0` 이상에서 사용할 수 있습니다. 자세한 내용은 Messaging API 레퍼런스의 [포스트백 액션](https://developers.line.biz/en/reference/messaging-api/#postback-action)을 참고하세요.

## 메시지 액션 

메시지 액션은 텍스트를 사용자의 메시지로 반환합니다. 자세한 내용은 Messaging API 레퍼런스의 [메시지 액션](https://developers.line.biz/en/reference/messaging-api/#message-action)을 참고하세요.

## URI 액션 

URI 액션은 LINE의 인앱 브라우저에서 URL을 엽니다. URI 액션에 [LINE URL 스킴](https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/)을 사용하면 지정한 번호로 통화 앱을 실행하거나, 임의의 LINE 공식 계정을 공유하는 화면을 열 수도 있습니다.

![URI 액션](https://developers.line.biz/media/messaging-api/actions/quick-reply-uri-action-en.webp)

이것은 위 예시의 퀵 리플라이 버튼에 URI 액션을 설정한 요청 본문입니다. 자세한 내용은 Messaging API 레퍼런스의 [URI 액션](https://developers.line.biz/en/reference/messaging-api/#uri-action)을 참고하세요.

```json
{
  "messages": [
    {
      "type": "text",
      "text": "Have you decided on your order?",
      "quickReply": {
        "items": [
          {
            "type": "action",
            "action": {
              "type": "uri",
              "label": "Menu",
              "uri": "https://example.com/menu"
            }
          },
          {
            "type": "action",
            "action": {
              "type": "uri",
              "label": "Phone order",
              "uri": "tel:09001234567"
            }
          },
          {
            "type": "action",
            "action": {
              "type": "uri",
              "label": "Recommend to friend",
              "uri": "https://line.me/R/nv/recommendOA/%40linedevelopers"
            }
          }
        ]
      }
    }
  ]
}
```

## 날짜/시간 선택 액션 

날짜/시간 선택 액션은 사용자에게 피커에서 날짜, 시간, 또는 날짜와 시간을 선택하도록 요청합니다. 사용자가 날짜와 시간을 선택하면 웹훅을 통해 [포스트백 이벤트](https://developers.line.biz/en/reference/messaging-api/#postback-event)에 날짜와 시간 정보가 담겨 전달됩니다. 자세한 내용은 Messaging API 레퍼런스의 [날짜/시간 선택 액션](https://developers.line.biz/en/reference/messaging-api/#datetime-picker-action)을 참고하세요.

![날짜/시간 선택 액션](https://developers.line.biz/media/messaging-api/actions/datetime-picker.png)

## 카메라 액션 

카메라 액션은 LINE 내에서 카메라 화면을 엽니다. 이 액션은 퀵 리플라이 버튼에만 설정할 수 있습니다. 자세한 내용은 Messaging API 레퍼런스의 [카메라 액션](https://developers.line.biz/en/reference/messaging-api/#camera-action)을 참고하세요.

## 카메라 롤 액션 

카메라 롤 액션은 LINE 내에서 카메라 롤 화면을 엽니다. 이 액션은 퀵 리플라이 버튼에만 설정할 수 있습니다. 자세한 내용은 Messaging API 레퍼런스의 [카메라 롤 액션](https://developers.line.biz/en/reference/messaging-api/#camera-roll-action)을 참고하세요.

## 위치 액션 

위치 액션은 LINE 내에서 위치 화면을 엽니다. 이 액션은 퀵 리플라이 버튼에만 설정할 수 있습니다. 자세한 내용은 Messaging API 레퍼런스의 [위치 액션](https://developers.line.biz/en/reference/messaging-api/#location-action)을 참고하세요.

## 리치 메뉴 전환 액션 

리치 메뉴 전환 액션은 리치 메뉴를 서로 전환할 수 있게 합니다. 이 액션은 리치 메뉴에만 설정할 수 있습니다. 자세한 내용은 Messaging API 레퍼런스의 [리치 메뉴 전환 액션](https://developers.line.biz/en/reference/messaging-api/#richmenu-switch-action)을 참고하세요.

## 클립보드 액션 

클립보드 액션은 텍스트를 클립보드에 복사합니다. 사용자가 이 액션이 연결된 컨트롤을 탭하면 `clipboardText` 속성에 지정된 텍스트가 기기의 클립보드에 복사됩니다.

![](https://developers.line.biz/media/news/2024/clipbord-action-example-en.webp)

이것은 위 예시의 메시지에 클립보드 액션을 설정한 요청 본문입니다. 자세한 내용은 Messaging API 레퍼런스의 [클립보드 액션](https://developers.line.biz/en/reference/messaging-api/#clipboard-action)을 참고하세요.

```json
{
  "messages":[
    {
      "type": "template",
      "altText": "This is your coupon code.",
      "template": {
        "type": "buttons",
        "thumbnailImageUrl": "{your coupon image}",
        "imageAspectRatio": "rectangle",
        "imageSize": "cover",
        "imageBackgroundColor": "#FFFFFF",
        "title": "Your exclusive coupon!",
        "text": "Period: Feb 2024.\nCopy and use the code from the button.",
        "actions": [
          {
            "type": "clipboard",
            "label": "Copy",
            "clipboardText": "3B48740B"
          }
        ]
      }
    }
  ]
}
```
