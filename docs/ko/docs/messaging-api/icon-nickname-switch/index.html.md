# 아이콘 및 표시 이름 설정하기

이 API로 보내는 메시지에서 LINE 공식 계정의 아이콘과 표시 이름을 설정할 수 있습니다. [메시지 객체](https://developers.line.biz/en/reference/messaging-api/#message-objects)의 종류에는 제한이 없습니다.

- [푸시 메시지 보내기](https://developers.line.biz/en/reference/messaging-api/#send-push-message)
- [멀티캐스트 메시지 보내기](https://developers.line.biz/en/reference/messaging-api/#send-multicast-message)
- [내로우캐스트 메시지 보내기](https://developers.line.biz/en/reference/messaging-api/#send-narrowcast-message)
- [브로드캐스트 메시지 보내기](https://developers.line.biz/en/reference/messaging-api/#send-broadcast-message)
- [응답 메시지 보내기](https://developers.line.biz/en/reference/messaging-api/#send-reply-message)

메시지에 아이콘이나 표시 이름을 지정하지 않으면 기본 아이콘과 LINE 공식 계정 이름이 표시됩니다.

아이콘과 표시 이름을 설정할 때는 먼저 설정한 아이콘과 표시 이름으로 본인의 LINE 계정에 푸시 메시지를 보내 메시지 모양을 확인하는 것을 권장합니다.

## 아이콘과 표시 이름 설정하기 

기본 메시지와 아이콘 및 표시 이름을 지정한 메시지의 차이를 확인해 보세요. 아래에서 보듯이 표시 이름에는 `from 'account name'`이 붙습니다. 이는 사용자가 LINE 공식 계정을 쉽게 식별하고 다른 사람과 혼동하지 않도록 하기 위함입니다. 채팅 화면 상단에 표시되는 계정 이름은 모든 경우에 그대로입니다.

![아이콘 및 표시 이름 설정 예제](https://developers.line.biz/media/messaging-api/icon-nickname-switch/icon-nickname-switch.jpg)

### 요청 예제 

아이콘과 표시 이름을 설정하여 메시지를 보내는 요청 예제는 다음과 같습니다.

```sh
curl -v -X POST https://api.line.me/v2/bot/message/push \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer {CHANNEL_ACCESS_TOKEN}' \
-d '{
    "to": "U1234....",
    "messages": [
        {
            "type": "text",
            "text": "Hello, I am Cony!!",
            "sender": {
                "name": "Cony",
                "iconUrl": "https://line.me/conyprof"
            }
        }
    ]
}'
```

## 아이콘과 표시 이름 설정의 적용 범위 

이 섹션에서는 아이콘과 표시 이름 설정이 어디에 적용되는지 설명합니다.

### 채팅방 

메시지에 지정한 아이콘과 표시 이름은 해당 메시지의 아이콘과 표시 이름에만 영향을 줍니다.

- 메시지 말풍선: 설정한 아이콘과 표시 이름(`display name from 'account name'`)이 표시됩니다.
- 채팅방 이름: 상단에 표시되는 채팅방 이름은 LINE 공식 계정 이름으로 그대로 유지됩니다.
- 비즈니스 프로필 페이지: LINE 공식 계정 이름의 비즈니스 프로필 페이지에 표시되는 프로필 이미지와 표시 이름은 설정할 수 없습니다.

### 메시지 검색 결과 

검색 결과에 표시되는 메시지에 설정된 아이콘과 표시 이름이 있다면, 해당 아이콘과 표시 이름이 `from 'account name'`과 함께 표시됩니다.

### 채팅 목록 및 미리보기 

채팅 목록에 표시되는 LINE 공식 계정의 아이콘과 표시 이름은 설정할 수 없습니다. 다만 텍스트가 아닌 메시지의 미리보기에는 설정된 아이콘과 표시 이름이 표시됩니다. 예를 들어 표시 이름을 설정하여 사진을 보내면, 미리보기 메시지에 "(표시 이름)이(가) 사진을 보냈습니다"라고 표시됩니다.

### 채팅 목록 검색 결과 

채팅 목록 검색 결과에 표시되는 LINE 공식 계정은 기본 아이콘과 기본 표시 이름이 표시됩니다.

### 친구 목록 

친구 목록에 표시되는 LINE 공식 계정은 기본 아이콘과 기본 표시 이름이 표시됩니다.

## 더 알아보기 

아이콘 및 표시 이름 설정의 사양에 대한 자세한 내용은 Messaging API 레퍼런스의 [아이콘 및 표시 이름 변경](https://developers.line.biz/en/reference/messaging-api/#icon-nickname-switch)을 참고하세요.
