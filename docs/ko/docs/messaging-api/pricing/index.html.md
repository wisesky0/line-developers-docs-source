# Messaging API 요금

이 페이지에서는 Messaging API로 메시지를 보낼 때의 요금을 설명합니다.

<!-- table of contents -->

## 요금 체계 

LINE 공식 계정에는 무료 요금제와 월 고정 요금이 있는 요금제가 모두 있습니다.

모든 요금제에서는 매달 일정 수의 메시지를 무료로 보낼 수 있습니다. 보낼 수 있는 무료 메시지 수는 구독 요금제에 따라 다릅니다. 같은 달 중에 상위 요금제로 업그레이드하면, 그 달의 무료 메시지 수가 늘어납니다.

무료 메시지 한도를 넘어서 추가로 메시지를 보낼 수 있는 요금제도 있습니다. 추가로 보낸 메시지 수에 따라 요금이 청구됩니다. 추가 메시지를 보내려면 [LINE 공식 계정 관리자](https://manager.line.biz/)를 열고 LINE 공식 계정을 선택한 다음, 추가 메시지 전송이 가능한 구독 요금제를 선택하세요. 이때 추가 메시지의 최대 수를 설정합니다.

### 국가 또는 지역별 요금제 

국가 또는 지역별 요금제는 다음을 참고하세요.

| 국가 또는 지역 | 요금 정보 |
| --- | --- |
| 일본 | [LINE 공식 계정 요금제](https://www.lycbiz.com/jp/service/line-official-account/plan/) <br> [이용 및 청구(구독 요금제 변경 및 결제 관련 관리)](https://www.lycbiz.com/jp/manual/OfficialAccountManager/account-settings_plan/) |
| 대만 | [LINE 공식 계정](https://tw.linebiz.com/service/account-solutions/line-official-account/) <br> [LINE 공식 계정 - FAQ](https://tw.linebiz.com/faq/oa-price/) |
| 태국 | [LINE 공식 계정](https://lineforbusiness.com/th/service/line-oa-features/broadcast-message) |
| 기타 지역 | [LINE 공식 계정](https://www.lycbiz.jp/en/other/) |

### 구독 요금제 예시 

다음 표는 일본의 구독 요금제 예시입니다.

|  | 커뮤니케이션 요금제 | 라이트 요금제 | 스탠다드 요금제 |
| :-- | :-: | :-: | :-: |
| 월 고정 요금 [^1] | 무료 | 5,000엔 | 15,000엔 |
| 월 무료 메시지 수 | 최대 200 | 최대 5,000 | 최대 30,000 |
| 추가 메시지 요금 [^1] | 해당 없음 | 해당 없음 | 메시지당 최대 3엔 [^2] |

[^1]: 세금 제외.

[^2]: 추가 메시지의 단가는 보낸 메시지 수에 따라 다릅니다.

예를 들어 한 달에 메시지를 1,000개 보내려면 무료 메시지가 5,000개인 라이트 요금제를 선택하세요.

한 달에 메시지를 40,000개 보내려면 무료 메시지가 30,000개인 스탠다드 요금제를 선택하고, 무료 메시지 한도를 넘는 10,000개에 대해 추가 요금을 지불해야 합니다.

요금제는 국가 또는 지역에 따라 다르므로, [해당 지역의 요금제](https://developers.line.biz/en/docs/messaging-api/pricing/#global-pricing)를 확인하세요.

## 무료 메시지 한도를 초과한 경우 

한 달에 보낼 수 있는 메시지 한도를 초과하면 오류 응답이 반환되며 메시지는 전송되지 않습니다. 자세한 내용은 Messaging API 레퍼런스의 [상태 코드](https://developers.line.biz/en/reference/messaging-api/#status-codes)와 [오류 응답](https://developers.line.biz/en/reference/messaging-api/#error-responses)을 참고하세요.

다음 엔드포인트로 이번 달 사용량을 확인할 수 있습니다.

- [이번 달 메시지 전송 목표 한도 가져오기](https://developers.line.biz/en/reference/messaging-api/#get-quota)
- [이번 달 보낸 메시지 수 가져오기](https://developers.line.biz/en/reference/messaging-api/#get-consumption)

무료 메시지 수를 늘리거나 추가 메시지를 보내기 위해 요금제를 변경하는 방법은 [요금 체계](https://developers.line.biz/en/docs/messaging-api/pricing/#pricing-system)를 참고하세요.

## 메시지 수를 세는 방법 

메시지 수는 메시지를 보낸 사람 수로 계산합니다. 예를 들어 다섯 명이 있는 채팅방에 한 번의 요청으로 [메시지 객체](https://developers.line.biz/en/reference/messaging-api/#message-objects) 네 개가 포함된 푸시 메시지를 보냈다고 가정해 봅시다. 이 경우 보낸 메시지 수는 5입니다. 요청에 포함된 메시지 객체 수는 보낸 메시지 수에 영향을 주지 않습니다.

LINE 공식 계정을 차단한 사용자나 존재하지 않는 사용자 ID로 메시지를 보내면 그 메시지는 계산되지 않습니다. 사용자가 메시지를 받을 수 없다면, 그 메시지는 전송된 메시지로 계산되지 않습니다.

## 구독 요금제의 메시지 수에 포함되는 전송 방식 

Messaging API로 보낸 모든 메시지가 구독 요금제의 메시지 수에 포함되는 것은 아닙니다. 메시지 수에 포함되는 전송 방식과 포함되지 않는 전송 방식은 다음과 같습니다.

- 메시지 수에 포함되는 전송 방식
  - [푸시 메시지](https://developers.line.biz/en/reference/messaging-api/#send-push-message)
  - [멀티캐스트 메시지](https://developers.line.biz/en/reference/messaging-api/#send-multicast-message)
  - [브로드캐스트 메시지](https://developers.line.biz/en/reference/messaging-api/#send-broadcast-message)
  - [내로우캐스트 메시지](https://developers.line.biz/en/reference/messaging-api/#send-narrowcast-message)
- 메시지 수에 포함되지 않는 전송 방식
  - [응답 메시지](https://developers.line.biz/en/reference/messaging-api/#send-reply-message)

Messaging API 이외의 메시징 기능에 대한 요금은 LINE for Business의 [유료 메시지](https://www.lycbiz.com/jp/service/line-official-account/plan/)(일본어만 제공)를 참고하세요.
