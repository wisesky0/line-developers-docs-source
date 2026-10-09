# 로딩 애니메이션 표시하기

사용자가 LINE 공식 계정에 메시지를 보내면, 메시지 준비나 예약 처리 때문에 응답에 시간이 걸릴 수 있습니다. 이런 경우 로딩 애니메이션을 표시하여 사용자에게 기다려 달라는 의사를 시각적으로 전달할 수 있습니다.

![](https://developers.line.biz/media/messaging-api/loading-indicator/loading-indicator.png)

## 로딩 애니메이션 표시하기 

[로딩 애니메이션 표시](https://developers.line.biz/en/reference/messaging-api/#display-a-loading-indicator) 엔드포인트를 사용하면 사용자와 LINE 공식 계정 간의 1:1 채팅에 로딩 애니메이션을 표시할 수 있습니다. 로딩 애니메이션은 지정한 시간(5초에서 60초 사이)이 지나거나 LINE 공식 계정에서 새 메시지가 도착하면 자동으로 사라집니다.

![](https://developers.line.biz/media/messaging-api/loading-indicator/loading-animation.webp)

표시 대상으로 사용자 ID를 지정하면 사용자와 LINE 공식 계정 간의 1:1 채팅에 로딩 애니메이션을 표시할 수 있습니다. 그룹 채팅이나 여러 명이 참여하는 채팅에는 지정할 수 없습니다.

로딩 애니메이션은 사용자가 LINE 공식 계정의 채팅 화면을 보고 있을 때만 표시됩니다. 사용자가 채팅 화면을 보고 있지 않은 상태에서 로딩 애니메이션 표시를 요청하면 아무런 알림도 표시되지 않습니다. 이후 사용자가 채팅 화면을 열어도 애니메이션은 표시되지 않습니다.

로딩 애니메이션이 아직 표시되고 있는 동안 다시 표시를 요청하면 애니메이션은 계속 표시되며, 사라질 때까지의 시간은 두 번째 요청에서 지정한 초 단위 값으로 덮어써집니다.

### 요청 예시 

다음은 로딩 애니메이션을 5초 동안 표시하는 요청 예시입니다.

```sh
curl -v -X POST https://api.line.me/v2/bot/chat/loading/start \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer {channel access token}' \
-d '{
    "chatId": "U4af4980629...",
    "loadingSeconds": 5
}'
```

자세한 내용은 Messaging API 레퍼런스의 [로딩 애니메이션 표시](https://developers.line.biz/en/reference/messaging-api/#display-a-loading-indicator)를 참고하세요.
