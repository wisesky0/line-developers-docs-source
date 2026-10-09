# 그룹 채팅 및 다인 채팅

LINE 공식 계정은 Messaging API를 사용하여 그룹 채팅 또는 다인 채팅에서 사용자와 상호작용할 수 있습니다. 그룹 채팅과 다인 채팅에서 LINE 공식 계정을 사용하는 방법을 알아보세요.

## 여러 사용자가 참여하는 채팅의 종류 

LINE에는 여러 사용자가 참여하는 채팅이 두 종류 있습니다. **그룹 채팅**과 **다인 채팅**입니다. 그룹 채팅 또는 다인 채팅에 참여하는 사용자를 **멤버**라고 합니다.

<!-- tip start -->

**다인 채팅은 그룹 채팅으로 통합되었습니다**

LINE 10.17.0 버전부터 다인 채팅이 그룹 채팅으로 통합되었습니다. 이전에 열린 다인 채팅은 계속 사용할 수 있습니다. 하지만 LINE 10.17.0 버전 이상에서 여러 친구와 새 채팅을 만들면 그 채팅은 그룹 채팅이 됩니다. LINE 사용자 가이드의 [그룹 만들기 및 관리](https://guide.line.me/ja/friends-and-groups/create-groups.html)(일본어만 제공)를 참고하세요.

<!-- tip end -->

### 그룹 채팅 

그룹 채팅은 여러 참여자가 계속 사용할 수 있도록 설계된 채팅입니다. 그룹 채팅을 식별하기 위해 [그룹 ID](https://developers.line.biz/en/glossary/#group-id)가 생성됩니다. LINE 사용자는 원하는 이름으로 그룹 채팅을 만들 수 있습니다. 그룹 채팅에서는 앨범, 노트 등의 기능을 사용할 수 있습니다.

<!-- tip start -->

**팁**

1:1 채팅에서 사용자가 세 번째 사용자를 초대하면 그룹 채팅이 만들어집니다. 사용자는 그룹 채팅에 초대되는 사용자에 대해 승인 절차를 둘지 여부를 설정할 수 있습니다. 승인 절차를 설정하는 방법은 LINE 사용자 가이드의 [그룹 만들기 및 관리](https://guide.line.me/ja/friends-and-groups/create-groups.html)(일본어만 제공)를 참고하세요.

<!-- tip end -->

### 다인 채팅 

다인 채팅은 여러 사람이 일시적으로 사용할 수 있도록 설계된 채팅입니다. 다인 채팅을 식별하기 위해 [룸 ID](https://developers.line.biz/en/glossary/#room-id)가 생성됩니다. 다인 채팅의 이름은 채팅 멤버들의 이름으로 자동 설정됩니다. 다인 채팅에서는 앨범, 노트 등의 기능을 지원하지 않습니다.

LINE 10.17.0 버전부터 다인 채팅이 그룹 채팅으로 통합되었습니다. 이전에 열린 다인 채팅은 계속 사용할 수 있습니다. 하지만 LINE 10.17.0 버전 이상에서 여러 친구와 새 채팅을 만들면 그 채팅은 그룹 채팅이 됩니다.

## 그룹 및 다인 채팅에 LINE 공식 계정 추가하기 

LINE 공식 계정을 그룹 채팅 또는 다인 채팅에 초대할 수 있습니다. 초대를 받으려면 [LINE Developers Console](https://developers.line.biz/console/) > 채널의 **Messaging API** 탭으로 이동하여 **Allow bot to join group chats**를 활성화하세요. 이 설정은 기본적으로 비활성화되어 있습니다. 그룹 채팅 또는 다인 채팅에는 언제든지 하나의 LINE 공식 계정만 참여할 수 있습니다.

## 웹훅 이벤트 수신하기 

그룹 채팅과 다인 채팅에서도 1:1 채팅과 같이 웹훅 이벤트를 받습니다. 자세한 내용은 Messaging API 레퍼런스의 [채팅 웹훅 이벤트](https://developers.line.biz/en/docs/messaging-api/receiving-messages/#webhook-event-in-one-on-one-talk-or-group-chat) 및 [웹훅 이벤트 객체](https://developers.line.biz/en/reference/messaging-api/#webhook-event-objects)를 참고하세요.

### message 이벤트 사용 팁 

LINE 공식 계정이 추가된 그룹 채팅 또는 다인 채팅에서 사용자가 메시지를 보내면, LINE 플랫폼은 1:1 채팅과 같이 봇 서버로 message 이벤트를 보냅니다.

[message 이벤트](https://developers.line.biz/en/reference/messaging-api/#message-event)에는 그룹 채팅의 ID(`groupId`) 또는 다인 채팅의 ID(`roomId`)를 지정하는 `source` 속성이 있습니다.

```json
"source": {
    "type": "group",
    "groupId": "Ca56f94637c...",
    "userId": "U4af4980629..."
}
```

그룹 ID와 룸 ID에 대한 자세한 내용은 [사용자 ID, 그룹 ID, 룸 ID 값은 무엇인가요?](https://developers.line.biz/en/faq/#what-are-userid-groupid-and-roomid)를 참고하세요.

## 엔드포인트에 요청 보내기 

다음 작업은 그룹 채팅과 다인 채팅에만 해당합니다. 자세한 내용은 [Messaging API 레퍼런스](https://developers.line.biz/en/reference/messaging-api/)를 참고하세요.

- **그룹 채팅**
  - [그룹 채팅 요약 정보 가져오기](https://developers.line.biz/en/reference/messaging-api/#get-group-summary)
  - [그룹 채팅 사용자 수 가져오기](https://developers.line.biz/en/reference/messaging-api/#get-members-group-count)
  - [그룹 채팅 멤버 사용자 ID 가져오기](https://developers.line.biz/en/reference/messaging-api/#get-group-member-user-ids)
  - [그룹 채팅 멤버 프로필 가져오기](https://developers.line.biz/en/reference/messaging-api/#get-group-member-profile)
  - [그룹 채팅 나가기](https://developers.line.biz/en/reference/messaging-api/#leave-group)
- **다인 채팅**
  - [다인 채팅 사용자 수 가져오기](https://developers.line.biz/en/reference/messaging-api/#get-members-room-count)
  - [다인 채팅 멤버 사용자 ID 가져오기](https://developers.line.biz/en/reference/messaging-api/#get-room-member-user-ids)
  - [다인 채팅 멤버 프로필 가져오기](https://developers.line.biz/en/reference/messaging-api/#get-room-member-profile)
  - [다인 채팅 나가기](https://developers.line.biz/en/reference/messaging-api/#leave-room)

### 메시지 전송 팁 

그룹 채팅과 다인 채팅에서도 1:1 채팅과 같이 [응답 메시지](https://developers.line.biz/en/reference/messaging-api/#send-reply-message)와 [푸시 메시지](https://developers.line.biz/en/reference/messaging-api/#send-push-message)를 보낼 수 있습니다.

푸시 메시지를 보낼 때는 요청 본문의 `to` 속성에 그룹 ID 또는 룸 ID를 지정하여 수신자를 지정하세요. 수신자 ID는 [웹훅 이벤트 객체](https://developers.line.biz/en/reference/messaging-api/#webhook-event-objects)에서 확인할 수 있습니다. 그룹 채팅과 다인 채팅에서 보낸 메시지는 채팅의 모든 멤버에게 표시됩니다.

<!-- tip start -->

**팁**

그룹 채팅과 다인 채팅에서는 여러 사용자에게 [멀티캐스트 메시지](https://developers.line.biz/en/reference/messaging-api/#send-multicast-message)를 보낼 수 없습니다.

<!-- tip end -->
