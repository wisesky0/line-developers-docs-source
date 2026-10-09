# LINE 비콘 사용하기

LINE 비콘을 사용하면 LINE 사용자가 비콘 영역에 들어올 때마다 봇이 [비콘 웹훅 이벤트](https://developers.line.biz/en/reference/messaging-api/#beacon-event)를 받습니다. LINE 비콘을 활용하여 비즈니스 요구에 맞는 상황에서 사용자와 상호작용하도록 봇 앱을 맞춤 설정할 수 있습니다.

<!-- note start -->

**참고**

LINE 비콘은 일본, 대만, 태국에서 이용할 수 있습니다.

<!-- note end -->

<!-- tip start -->

**LINE 비콘을 사용하려면 최신 버전의 LINE을 사용하세요**

LINE 비콘을 사용하려면 최신 버전의 LINE을 사용하는 것을 권장합니다.

<!-- tip end -->

## 비콘 기기 준비하기 

LINE 비콘을 사용하려면 LINE 공식 계정과 연결할 Bluetooth® Low Energy 비콘 기기가 필요합니다. 다음 유형의 기기 중 하나를 사용할 수 있습니다.

- [LINE 비콘](https://developers.line.biz/en/docs/messaging-api/beacon-device-spec/)을 지원하는 비콘 기기. 이 기기는 해당 국가에서만 지원됩니다.
  - 일본에서 지원되는 기기는 [여기](https://beacon.theshop.jp/items/6617930)에서 확인할 수 있습니다.
  - 태국에서 지원되는 기기는 [여기](https://linedevth.line.me/th/tech-partner?filterTech=Beacon)에서 확인할 수 있습니다.
- [LINE Simple Beacon](https://github.com/line/line-simple-beacon) 사양을 사용하는 Bluetooth® Low Energy 기기

## 비콘을 LINE 공식 계정에 연결하기 

LINE 공식 계정을 비콘과 연결하려면 [LINE 공식 계정 관리자](https://manager.line.biz/beacon/register)에서 비콘 등록 페이지를 여세요. 등록 페이지에서 LINE 비콘을 지원하는 기기를 LINE 공식 계정과 연결합니다. 또한 기기의 **LINE Simple Beacon 하드웨어 ID**를 발급할 수도 있습니다.

<!-- note start -->

**참고**

하나의 LINE 공식 계정에는 여러 개의 비콘을 연결할 수 있습니다. 하지만 하나의 비콘에는 LINE 공식 계정을 하나만 연결할 수 있습니다.

<!-- note end -->

## 웹훅 이벤트 받기 

다음 조건을 만족하는 사용자가 비콘 영역에 들어오면 봇 서버는 [비콘 웹훅 이벤트](https://developers.line.biz/en/reference/messaging-api/#beacon-event)를 받습니다.

- 사용자의 LINE에서 Bluetooth와 LINE 비콘 설정이 활성화되어 있는 사용자
- 봇 앱에 연결된 LINE 공식 계정을 미리 친구로 추가한 사용자

비콘 웹훅 이벤트를 발생시키려면 다음 단계를 따르세요.

1. 스마트폰에서 Bluetooth가 활성화되어 있는지 확인합니다.
2. LINE에서 **Settings** > **Privacy**로 이동하여 **Use LINE Beacon**을 활성화합니다.
3. 비콘 기기의 전원이 켜져 있는지 확인합니다. 스마트폰을 비콘 범위 안으로 가져갑니다.
4. 봇 서버가 비콘 이벤트 객체를 받았는지 확인합니다.

다음은 [비콘 이벤트 객체](https://developers.line.biz/en/reference/messaging-api/#beacon-event)의 예시입니다.

```json
{
  "destination": "xxxxxxxxxx",
  "events": [
    {
      "replyToken": "nHuyWiB7yP5Zw52FIkcQobQuGDXCTA",
      "type": "beacon",
      "mode": "active",
      "timestamp": 1462629479859,
      "source": {
        "type": "user",
        "userId": "U4af4980629..."
      },
      "webhookEventId": "01FZ74A0TDDPYRVKNK77XKC3ZR",
      "deliveryContext": {
        "isRedelivery": false
      },
      "beacon": {
        "hwid": "d41d8cd98f",
        "type": "enter"
      }
    }
  ]
}
```

## 비콘 배너 

비콘 배너는 비콘이 LINE 사용자를 감지했을 때 사용자의 채팅 화면 위에 표시되는 배너입니다.

사용자가 아직 친구로 추가하지 않은 경우, 배너를 탭하여 비콘에 연결된 LINE 공식 계정을 친구로 추가할 수 있습니다.

사용자가 비콘 배너를 탭하면 LINE 공식 계정에서 지정한 웹 페이지가 열립니다. 또한 사용자가 배너를 탭한 바로 그 장소에서 LINE 공식 계정의 메시지를 받도록 할 수도 있습니다.

<!-- note start -->

**참고**

비콘 배너는 법인 사용자만 이용할 수 있습니다. 비콘 배너를 사용하려면 LINE 담당자에게 문의하거나 [LY for Business](https://www.lycbiz.jp/en/) 웹사이트를 통해 문의하세요.

<!-- note end -->

![](https://developers.line.biz/media/messaging-api/using-beacons/beacon-banner_en.webp)
