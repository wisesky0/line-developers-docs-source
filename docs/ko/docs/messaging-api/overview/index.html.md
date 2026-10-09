# Messaging API 개요

Messaging API를 사용하여 사용자에게 LINE에서 개인화된 경험을 제공하는 봇을 만드세요.

<!-- tip start -->

**LINE 공식 계정이란**

LINE 공식 계정이 익숙하지 않다면 종합 학습 플랫폼인 [LY Marketing Campus](https://lymcampus.jp/)(일본어만 제공)를 방문해 보세요.

<!-- tip end -->

## Messaging API의 작동 방식 

Messaging API를 사용하면 봇 서버가 LINE 플랫폼과 데이터를 주고받을 수 있습니다. 요청은 HTTPS를 통해 JSON 형식으로 전송됩니다. 봇 서버와 LINE 플랫폼 사이의 통신 흐름은 다음과 같습니다.

1. 사용자가 LINE 공식 계정에 메시지를 보냅니다.
1. LINE 플랫폼이 봇 서버의 웹훅 URL로 웹훅 이벤트를 보냅니다.
1. 봇 서버가 웹훅 이벤트를 확인하고 LINE 플랫폼을 통해 사용자에게 응답합니다.

![Messaging API 아키텍처](https://developers.line.biz/media/messaging-api/overview/messaging-api-architecture.png)

## Messaging API로 할 수 있는 일 

Messaging API로 할 수 있는 일은 다음과 같습니다.

### 응답 메시지 보내기 

Messaging API를 사용하면 LINE 공식 계정을 친구로 추가한 사용자에게 응답 메시지를 보낼 수 있습니다. 자세한 내용은 [메시지 보내기](https://developers.line.biz/en/docs/messaging-api/sending-messages/)를 참고하세요.

### 언제든지 메시지 보내기 

Messaging API를 사용하면 언제든지 사용자에게 직접 메시지를 보낼 수 있습니다. 자세한 내용은 [메시지 보내기](https://developers.line.biz/en/docs/messaging-api/sending-messages/)를 참고하세요.

### 다양한 메시지 유형 보내기 

Messaging API를 사용하면 아래와 같이 다양한 유형의 메시지를 사용자에게 보낼 수 있습니다. 이러한 메시지의 사양에 대한 자세한 내용은 [메시지 타입](https://developers.line.biz/en/docs/messaging-api/message-types/)을 참고하세요.

- [텍스트 메시지](https://developers.line.biz/en/docs/messaging-api/message-types/#text-messages)
- [텍스트 메시지(v2)](https://developers.line.biz/en/docs/messaging-api/message-types/#text-messages-v2)
- [스티커 메시지](https://developers.line.biz/en/docs/messaging-api/message-types/#sticker-messages)
- [이미지 메시지](https://developers.line.biz/en/docs/messaging-api/message-types/#image-messages)
- [동영상 메시지](https://developers.line.biz/en/docs/messaging-api/message-types/#video-messages)
- [오디오 메시지](https://developers.line.biz/en/docs/messaging-api/message-types/#audio-messages)
- [위치 메시지](https://developers.line.biz/en/docs/messaging-api/message-types/#location-messages)
- [쿠폰 메시지](https://developers.line.biz/en/docs/messaging-api/message-types/#coupon-messages)
- [이미지맵 메시지](https://developers.line.biz/en/docs/messaging-api/message-types/#imagemap-messages)
- [템플릿 메시지](https://developers.line.biz/en/docs/messaging-api/message-types/#template-messages)
- [Flex Message](https://developers.line.biz/en/docs/messaging-api/message-types/#flex-messages)

### 사용자가 보낸 콘텐츠 가져오기 

Messaging API를 사용하면 사용자가 보낸 이미지, 동영상, 오디오, 파일을 가져올 수 있습니다. 사용자가 보낸 콘텐츠는 일정 기간이 지나면 자동으로 삭제됩니다. 자세한 내용은 Messaging API 레퍼런스의 [콘텐츠 가져오기](https://developers.line.biz/en/reference/messaging-api/#get-content)를 참고하세요.

### 사용자 프로필 가져오기 

Messaging API를 사용하면 1:1 채팅과 그룹 채팅에서 LINE 공식 계정과 상호작용하는 사용자의 프로필 정보를 가져올 수 있습니다. 가져올 수 있는 프로필 정보는 사용자의 표시 이름, 언어, 프로필 이미지, 상태 메시지입니다. 자세한 내용은 Messaging API 레퍼런스의 [프로필 가져오기](https://developers.line.biz/en/reference/messaging-api/#get-profile)를 참고하세요.

### 그룹 채팅 참여하기 

Messaging API를 사용하면 그룹 채팅에서 메시지를 보내고 그룹 채팅 멤버의 정보를 가져올 수 있습니다. 자세한 내용은 [그룹 채팅 및 다인 채팅](https://developers.line.biz/en/docs/messaging-api/group-chats/)을 참고하세요.

### 리치 메뉴 사용하기 

Messaging API를 사용하면 채팅에서 리치 메뉴를 설정하고 맞춤 설정할 수 있습니다. 리치 메뉴는 사용자가 LINE 공식 계정과 상호작용할 수 있는 방법을 쉽게 찾도록 도와줍니다. 사용자는 채팅 중 언제든지 이 메뉴를 사용할 수 있습니다. 자세한 내용은 [리치 메뉴 사용하기](https://developers.line.biz/en/docs/messaging-api/using-rich-menus/)를 참고하세요.

### 비콘 사용하기 

LINE Beacon을 사용하면 비콘 영역에 들어온 사용자와 상호작용하도록 LINE 공식 계정을 설정할 수 있습니다. 자세한 내용은 [LINE에서 비콘 사용하기](https://developers.line.biz/en/docs/messaging-api/using-beacons/)를 참고하세요.

### 계정 연동 사용하기 

Messaging API를 사용하면 사용자가 LINE 공식 계정을 친구로 추가한 경우, 서비스의 사용자 계정을 LINE 계정과 안전하게 연동할 수 있습니다. 자세한 내용은 [사용자 계정 연동](https://developers.line.biz/en/docs/messaging-api/linking-accounts/)을 참고하세요.

### 보낸 메시지 수 가져오기 

Messaging API를 사용하면 LINE 공식 계정에서 보낸 메시지 수를 가져올 수 있습니다. 이 API는 LINE 공식 계정 관리자가 아니라 Messaging API로 보낸 메시지 수만 반환합니다. 자세한 내용은 다음 레퍼런스를 참고하세요.

- [이번 달 메시지 전송 목표 한도 가져오기](https://developers.line.biz/en/reference/messaging-api/#get-quota)
- [이번 달 보낸 메시지 수 가져오기](https://developers.line.biz/en/reference/messaging-api/#get-consumption)
- [보낸 응답 메시지 수 가져오기](https://developers.line.biz/en/reference/messaging-api/#get-number-of-reply-messages)
- [보낸 푸시 메시지 수 가져오기](https://developers.line.biz/en/reference/messaging-api/#get-number-of-push-messages)
- [보낸 멀티캐스트 메시지 수 가져오기](https://developers.line.biz/en/reference/messaging-api/#get-number-of-multicast-messages)
- [보낸 브로드캐스트 메시지 수 가져오기](https://developers.line.biz/en/reference/messaging-api/#get-number-of-broadcast-messages)

## Messaging API 요금 

Messaging API는 무료로 시작할 수 있습니다. 누구나 Messaging API를 사용하여 LINE 공식 계정에서 메시지를 보낼 수 있습니다.

매달 일정 수의 메시지를 무료로 보낼 수 있습니다. 무료 메시지 수는 LINE 공식 계정의 [구독 요금제](https://www.lycbiz.com/jp/service/line-official-account/plan/)(일본어만 제공)에 따라 다릅니다. 구독 요금제는 국가 또는 지역에 따라 다를 수 있으므로, 자세한 내용은 해당 지역의 구독 요금제를 확인하세요.

Messaging API 요금에 대한 자세한 내용은 [Messaging API 요금](https://developers.line.biz/en/docs/messaging-api/pricing/)을 참고하세요.

## 다음 단계 

다음 단계로 [Messaging API 시작하기](https://developers.line.biz/en/docs/messaging-api/getting-started/)에서 봇을 만들어 보세요. 먼저 LINE 공식 계정을 만드세요. LINE 공식 계정을 만들었다면, 그 계정을 위한 Messaging API 채널을 만들 수 있습니다.

## 더 알아보기 

- [Messaging API 개발 가이드라인](https://developers.line.biz/en/docs/messaging-api/development-guidelines/)
- [LINE Messaging API SDK](https://developers.line.biz/en/docs/messaging-api/line-bot-sdk/)
- [Messaging API 레퍼런스](https://developers.line.biz/en/reference/messaging-api/)
