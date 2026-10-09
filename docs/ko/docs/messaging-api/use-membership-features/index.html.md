# 멤버십 기능 사용하기

[멤버십](https://www.lycbiz.com/jp/service/line-official-account/Membership/)(일본어로만 제공됩니다)은 LINE 공식 계정에서 이용할 수 있는 월간 멤버십 구독 기능입니다. 사용자는 LINE 공식 계정의 멤버십 플랜을 구독하고 멤버 전용 혜택을 받을 수 있습니다.

## 멤버십 정보를 가져오는 엔드포인트 

Messaging API를 사용하면 다음 엔드포인트로 멤버십 정보를 가져올 수 있습니다.

- [사용자의 멤버십 구독 상태 조회](https://developers.line.biz/en/docs/messaging-api/use-membership-features/#get-a-users-membership-subscription-status)
- [멤버십에 가입한 사용자 목록 조회](https://developers.line.biz/en/docs/messaging-api/use-membership-features/#get-membership-user-ids)
- [제공 중인 멤버십 플랜 조회](https://developers.line.biz/en/docs/messaging-api/use-membership-features/#get-membership-plans)

<!-- tip start -->

**멤버십을 시작하는 방법**

[LINE 공식 계정 관리자](https://manager.line.biz/)에서 멤버십을 설정하고 공개할 수 있습니다. 자세한 내용은 LINE for Business의 [LINE에서 구독 서비스를 손쉽게 만들 수 있습니다! LINE 공식 계정의 "멤버십" 기능이란?](https://www.lycbiz.com/jp/column/line-official-account/service-information/membership/)(일본어로만 제공됩니다)을 참고하세요.

현재 멤버십 기능은 일본에 있는 LINE 공식 계정에서만 이용할 수 있습니다.

<!-- tip end -->

### 사용자의 멤버십 구독 상태 조회 

이 엔드포인트를 사용하면 사용자 ID로 지정한 사용자가 구독 중인 멤버십 정보를 가져올 수 있습니다. 자세한 내용은 Messaging API 레퍼런스의 [사용자의 멤버십 구독 상태 조회](https://developers.line.biz/en/reference/messaging-api/#get-a-users-membership-subscription-status)를 참고하세요.

### 멤버십에 가입한 사용자 목록 조회 

이 엔드포인트를 사용하면 LINE 공식 계정의 멤버십에 가입한 사용자의 사용자 ID 목록을 가져올 수 있습니다. 자세한 내용은 Messaging API 레퍼런스의 [멤버십에 가입한 사용자 목록 조회](https://developers.line.biz/en/reference/messaging-api/#get-membership-user-ids)를 참고하세요.

### 제공 중인 멤버십 플랜 조회 

이 엔드포인트를 사용하면 LINE 공식 계정 멤버십을 통해 현재 제공 중인 멤버십 플랜을 가져올 수 있습니다. 자세한 내용은 Messaging API 레퍼런스의 [제공 중인 멤버십 플랜 조회](https://developers.line.biz/en/reference/messaging-api/#get-membership-plans)를 참고하세요.

## 웹훅 멤버십 이벤트 

사용자가 LINE 공식 계정의 멤버십에 가입하거나, 갱신하거나, 탈퇴하면 웹훅 멤버십 이벤트가 전송됩니다. 자세한 내용은 Messaging API 레퍼런스의 [멤버십 이벤트](https://developers.line.biz/en/reference/messaging-api/#membership-event)를 참고하세요.
