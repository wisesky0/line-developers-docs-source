# 쿠폰을 만들어 사용자에게 보내기

Messaging API를 사용하여 쿠폰을 만들고, LINE 공식 계정의 메시지로 사용자에게 보낼 수 있습니다.

![](https://developers.line.biz/media/messaging-api/coupon/several-coupons.webp)

<!-- table of contents -->

## Messaging API로 쿠폰을 보내는 단계 

Messaging API를 사용하면 다음 두 단계로 사용자에게 쿠폰을 보낼 수 있습니다.

1. [쿠폰 만들기](https://developers.line.biz/en/docs/messaging-api/send-coupons-to-users/#create-coupon)
2. [쿠폰 보내기](https://developers.line.biz/en/docs/messaging-api/send-coupons-to-users/#send-coupon)

<!-- tip start -->

**LINE Official Account Manager로도 쿠폰을 보낼 수 있습니다**

Messaging API 외에도 [LINE Official Account Manager](https://manager.line.biz/)에서 쿠폰을 만들고 보낼 수 있습니다. 자세한 내용은 LINE for Business의 [쿠폰](https://www.lycbiz.com/jp/manual/OfficialAccountManager/coupons-create/)(일본어로만 제공)을 참고하십시오.

<!-- tip end -->

## 쿠폰 만들기 

먼저 [쿠폰 생성](https://developers.line.biz/en/reference/messaging-api/#create-coupon) 엔드포인트를 사용하여 쿠폰을 만드십시오.

```sh
curl -v -X POST https://api.line.me/v2/bot/coupon \
-H 'Authorization: Bearer {channel access token}' \
-H 'Content-Type: application/json' \
-d \
'
{
  "title": "Friends-only coupon",
  "description": "- To use this coupon, please show this screen to the staff.\n- Used coupons cannot be used again. If you accidentally mark it as \"used\", it will also become unavailable.\n- This coupon may be changed or terminated without notice regardless of the validity period.",
  "reward": {
    "type": "discount",
    "priceInfo": {
      "type": "fixed",
      "fixedAmount": 100
    }
  },
  "acquisitionCondition": {
    "type": "normal"
  },
  "startTimestamp": 0,
  "endTimestamp": 1924959599,
  "imageUrl": "https://developers.line.biz/media/messaging-api/coupon/sample-coupon-image-100-yen-off.jpg",
  "timezone": "ASIA_TOKYO",
  "visibility": "UNLISTED",
  "maxUseCountPerTicket": 1
}'
```

쿠폰을 만들면 응답에 쿠폰 ID가 반환됩니다.

```json
{
  "couponId": "01JYNW8JMQVFBNWF1APF8Z3FS7"
}
```

쿠폰을 만들 때 요청 본문의 `acquisitionCondition.type`을 `lottery`로 설정하면 "추첨에 당첨된 사용자만 획득 가능"과 같은 획득 조건을 설정할 수 있습니다. 또한 [reward 객체](https://developers.line.biz/en/reference/messaging-api/#create-coupon-reward-object)(`reward`)를 사용하여 "50% 할인" 또는 "100엔 캐시백"과 같이 쿠폰의 혜택을 지정할 수 있습니다.

자세한 내용은 Messaging API 레퍼런스의 [쿠폰 생성](https://developers.line.biz/en/reference/messaging-api/#create-coupon)을 참고하십시오.

쿠폰을 만들었다면 [쿠폰 보내기](https://developers.line.biz/en/docs/messaging-api/send-coupons-to-users/#send-coupon) 단계로 진행하십시오.

### 만든 쿠폰은 수정할 수 없습니다 

쿠폰을 만든 후에는 수정할 수 없습니다. 쿠폰의 내용을 바꾸려면 먼저 [쿠폰을 중단](https://developers.line.biz/en/docs/messaging-api/send-coupons-to-users/#discontinue-coupon)한 다음, 새 쿠폰을 만들어야 합니다.

LINE Official Account Manager로 쿠폰을 만들 때는 임시 저장할 수 있습니다. 그러나 Messaging API로 쿠폰을 만들 때는 "임시 저장" 상태로 만들 수 없습니다.

## 쿠폰 보내기 

쿠폰을 만들고 쿠폰 ID를 받은 후에는, 해당 쿠폰 ID를 [쿠폰 메시지](https://developers.line.biz/en/docs/messaging-api/message-types/#coupon-messages)에 지정하여 보내십시오. 쿠폰 ID를 모르는 경우에는 [쿠폰 목록 조회](https://developers.line.biz/en/docs/messaging-api/send-coupons-to-users/#check-coupon-list)로 확인할 수 있습니다.

```sh
curl -v -X POST https://api.line.me/v2/bot/message/broadcast \
-H 'Authorization: Bearer {channel access token}' \
-H 'Content-Type: application/json' \
-d '
{
  "messages": [
    {
      "type": "coupon",
      "couponId": "01JYNW8JMQVFBNWF1APF8Z3FS7"
    }
  ]
}'
```

쿠폰 메시지는 다음 중 어떤 유형의 메시지로든 보낼 수 있습니다. Messaging API로 만든 쿠폰은 LINE Official Account Manager에서 메시지로 보낼 수도 있습니다.

- [푸시 메시지](https://developers.line.biz/en/reference/messaging-api/#send-push-message)
- [멀티캐스트 메시지](https://developers.line.biz/en/reference/messaging-api/#send-multicast-message)
- [브로드캐스트 메시지](https://developers.line.biz/en/reference/messaging-api/#send-broadcast-message)
- [내로캐스트 메시지](https://developers.line.biz/en/reference/messaging-api/#send-narrowcast-message)
- [응답 메시지](https://developers.line.biz/en/reference/messaging-api/#send-reply-message)

사용자는 전달받은 쿠폰을 열어서 획득할 수 있으며, 유효 기간 내에 사용할 수 있습니다.

![](https://developers.line.biz/media/messaging-api/coupon/coupon-message-ja.webp)

## 쿠폰 중단하기 

쿠폰은 생성할 때 지정한 유효 기간이 지나면 자동으로 만료됩니다. 그 전에 직접 중단하려면 [쿠폰 중단](https://developers.line.biz/en/reference/messaging-api/#discontinue-coupon) 엔드포인트를 사용하십시오.

```sh
curl -v -X PUT https://api.line.me/v2/bot/coupon/01JYNW8JMQVFBNWF1APF8Z3FS7/close \
-H 'Authorization: Bearer {channel access token}' \
-H 'Content-Type: application/json'
```

쿠폰을 중단하면, 이미 메시지로 쿠폰을 받은 사용자는 더 이상 쿠폰을 획득할 수 없고, 이미 쿠폰을 획득한 사용자는 더 이상 쿠폰을 사용할 수 없습니다.

중단된 쿠폰은 다시 활성화할 수 없습니다.

자세한 내용은 Messaging API 레퍼런스의 [쿠폰 중단](https://developers.line.biz/en/reference/messaging-api/#discontinue-coupon)을 참고하십시오.

## 만든 쿠폰 목록 확인하기 

[쿠폰 목록 조회](https://developers.line.biz/en/reference/messaging-api/#get-coupons-list) 엔드포인트를 사용하면 내가 만든 쿠폰의 쿠폰 ID와 제목을 확인할 수 있습니다.

```sh
curl -v -X GET https://api.line.me/v2/bot/coupon \
-H 'Authorization: Bearer {channel access token}'
```

이 쿠폰 목록에는 Messaging API와 [LINE Official Account Manager](https://manager.line.biz/)에서 만든 쿠폰이 모두 포함됩니다. LINE Official Account Manager에서도 같은 목록을 볼 수 있습니다.

```json
{
  "items": [
    {
      "couponId": "01JZMWQ9HMDW9ENJP4C167CXP8",
      "title": "Year-end and New Year coupon"
    },
    {
      "couponId": "01JZA9NPPFDJ3RFG8NA9DJ0NQT",
      "title": "Friends-only coupon"
    }
  ]
}
```

쿼리 매개변수 `status`를 사용하면 유효한 쿠폰 또는 만료된 쿠폰만 조회할 수도 있습니다. 자세한 내용은 Messaging API 레퍼런스의 [쿠폰 목록 조회](https://developers.line.biz/en/reference/messaging-api/#get-coupons-list)를 참고하십시오.

## 쿠폰 상세 정보 조회하기 

[쿠폰 상세 정보 조회](https://developers.line.biz/en/reference/messaging-api/#get-coupon) 엔드포인트를 사용하면 특정 쿠폰의 상세 정보를 조회할 수 있습니다.

```sh
curl -v -X GET https://api.line.me/v2/bot/coupon/01JYNW8JMQVFBNWF1APF8Z3FS7 \
-H 'Authorization: Bearer {channel access token}'
```

Messaging API로 만든 쿠폰뿐만 아니라 LINE Official Account Manager로 만든 쿠폰의 상세 정보도 조회할 수 있습니다.

```json
{
  "couponId": "01K0B456W5Y6SBD3YH74YM6QE6",
  "title": "Friends-only coupon",
  "description": "- To redeem your coupon, present this screen at checkout.\n- Redeemable once only, even if previously redeemed only unintentionally by the customer.\n- The validity period of this coupon may change or it may be canceled without notice.",
  "acquisitionCondition": {
    "type": "lottery",
    "lotteryProbability": 50,
    "maxAcquireCount": -1
  },
  "startTimestamp": 1752678000,
  "endTimestamp": 1924959540,
  "timezone": "ASIA_TOKYO",
  "couponCode": "COUPONCODE123456",
  "maxUseCountPerTicket": 1,
  "maxTicketPerUser": 1,
  "visibility": "UNLISTED",
  "reward": {
    "type": "discount",
    "priceInfo": {
      "type": "fixed",
      "fixedAmount": 100,
      "currency": "JPY"
    }
  },
  "imageUrl": "https://oa-coupon.line-scdn-dev.net/0h9gbUqRVkZkhfLHhXMLYZHwdyaCosWGBAPFR7cD5tZidsTnofYDVfezt-ZAR3YER9OzRfK35XZwR6TH5uYDF2TnJ-cBNyfURpPRl2RSFSXQc0TiJhYCFiXiZ8XXk0",
  "usageCondition": "Usable for payments of 1,000 yen or more",
  "status": "RUNNING",
  "createdTimestamp": 1752720120
}
```

자세한 내용은 Messaging API 레퍼런스의 [쿠폰 상세 정보 조회](https://developers.line.biz/en/reference/messaging-api/#get-coupon)를 참고하십시오.

## 보낸 쿠폰의 조회 수와 사용 수 확인하기 

보낸 쿠폰의 조회 수와 사용 수는 [LINE Official Account Manager](https://manager.line.biz/)에서 확인할 수 있습니다. 자세한 내용은 LINE for Business의 [인사이트 - 쿠폰](https://www.lycbiz.com/jp/manual/OfficialAccountManager/insight_coupon/)(일본어로만 제공)을 참고하십시오.

## 쿠폰 이미지 표시 크기 

쿠폰을 만들 때 `imageUrl`에 이미지 URL을 지정하여 쿠폰 이미지를 표시할 수 있습니다. 정사각형 이미지를 지정하면 채팅 화면에서 가로 대 세로 비율이 1.51:1(가로:세로)로 표시되므로, 이미지의 위아래 일부가 잘려 보이게 됩니다.

![](https://developers.line.biz/media/messaging-api/coupon/how-images-look.webp)

<!-- tip start -->

**쿠폰 이미지는 어떻게 만드나요**

LINE Marketing Campus의 [무료 템플릿 이미지 모음](https://lymcampus.jp/line-official-account/courses/template/lessons/6-1-1)(일본어로만 제공)에서 제공하는 쿠폰 이미지나, [LINE Creative Lab](https://creativelab.line.biz/)(일본어로만 제공)에서 제공하는 템플릿을 사용할 수 있습니다.

![쿠폰 이미지 샘플](https://developers.line.biz/media/messaging-api/coupon/sample-coupon-image-100-yen-off.jpg)

<!-- tip end -->
