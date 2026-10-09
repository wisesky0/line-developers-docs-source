# 사용자 프로필 정보 제공 동의

[LINE 공식 계정](https://developers.line.biz/en/glossary/#line-official-account)을 통해 사용자의 [프로필 정보](https://developers.line.biz/en/glossary/#profile-information)에 접근하려면 사용자가 프로필 정보에 대한 접근을 허용하는 데 동의해야 합니다.

## LINE for iOS 및 LINE for Android 사용자 

LINE for iOS와 LINE for Android에서는 사용자가 LINE을 사용하기 시작할 때 프로필 정보에 대한 접근을 허용하는 데 동의합니다. 예를 들어 여기서 "사용자"에는 다음과 같은 사람이 포함됩니다.

- LINE for iOS 또는 LINE for Android에서 LINE 계정을 만들고 지금도 그 계정을 사용하는 사용자
- 처음에는 LINE for PC에서 LINE 계정을 만들었지만 지금은 LINE for iOS 또는 LINE for Android에서 계정을 사용하는 사용자

## LINE for iOS 또는 LINE for Android를 사용하지 않는 사용자 

LINE for iOS나 LINE for Android를 한 번도 사용하지 않은 사용자는 프로필 정보에 대한 접근을 허용하는 데 동의할 수 없습니다. 예를 들어 LINE for PC에서 LINE 계정을 만들고 지금도 LINE for PC만 사용하는 사용자가 여기에 해당합니다. 이런 사용자도 LINE 공식 계정을 친구로 추가하거나 채팅에 초대할 수 있습니다.

<!-- note start -->

**참고**

2020년 4월부터는 LINE for PC에서 계정을 만들 수 없습니다.

<!-- note end -->

사용자가 프로필 정보에 대한 접근을 허용하는 데 동의하지 않았다면, 해당 사용자의 프로필 정보는 다음 웹훅 이벤트 객체와 엔드포인트 응답에 포함되지 않습니다. 또한 웹훅 [멤버십 이벤트](https://developers.line.biz/en/reference/messaging-api/#membership-event)도 전송되지 않습니다.

- [웹훅 이벤트 객체](https://developers.line.biz/en/reference/messaging-api/#webhook-event-objects)의 [발신 사용자(source user)](https://developers.line.biz/en/reference/messaging-api/#source-user)
- [텍스트 메시지 객체](https://developers.line.biz/en/reference/messaging-api/#wh-text)의 `mention` 객체
- [LINE 공식 계정을 친구로 추가한 사용자 목록 조회](https://developers.line.biz/en/reference/messaging-api/#get-follower-ids) 엔드포인트
- [멤버십에 가입한 사용자 목록 조회](https://developers.line.biz/en/reference/messaging-api/#get-membership-user-ids) 엔드포인트
- [그룹 채팅 멤버의 사용자 ID 조회](https://developers.line.biz/en/reference/messaging-api/#get-group-member-user-ids) 엔드포인트
- [여러 명이 참여하는 채팅 멤버의 사용자 ID 조회](https://developers.line.biz/en/reference/messaging-api/#get-room-member-user-ids) 엔드포인트

<!-- tip start -->

**사용자 프로필 정보를 가져올 수 없는 경우**

사용자의 프로필 정보를 가져올 수 없는 원인으로 다음과 같은 사용자 측 사유가 있을 수 있습니다.

- 프로필 정보에 대한 접근을 허용하는 데 동의하지 않은 경우
- LINE 공식 계정을 친구로 추가하지 않은 경우
- 친구로 추가한 후 LINE 공식 계정을 차단한 경우
- 그룹 채팅 또는 여러 명이 참여하는 채팅에서 LINE 공식 계정을 내보낸 경우
- LINE 공식 계정이 멤버로 참여 중인 그룹 채팅 또는 여러 명이 참여하는 채팅에서 나간 경우

<!-- tip end -->
