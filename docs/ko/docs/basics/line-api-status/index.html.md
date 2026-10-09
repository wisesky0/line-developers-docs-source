# LINE Platform 가용성 확인 (LINE API Status)

LY Corporation은 LINE Platform의 가용성과 장애 상태를 확인할 수 있도록 [LINE API Status](https://api.line-status.info/)를 제공합니다.

<!-- table of contents -->

## LINE API Status란 

LINE API Status는 LINE Platform의 가용성과 장애 상태를 확인할 수 있는 사이트입니다. 가용성 및 장애 상태 정보는 영어로 제공됩니다.

<!-- note start -->

**LINE API Status 정보에 관하여**

LY Corporation은 LINE API Status를 통해 장애 상태에 관한 정보를 제공하지만, 이것이 즉시성, 정확성 또는 포괄성을 보장하는 것은 아닙니다. 장애의 원인이나 영향 범위 등 장애에 대한 상세 내용은 LINE Developers 사이트의 [뉴스](https://developers.line.biz/en/news/tags/outage-report/)를 통해 계속 안내하겠습니다.

<!-- note end -->

- [LINE API Status](https://api.line-status.info/)<br>![](https://developers.line.biz/media/basics/line-api-status.webp)

### ATOM 및 RSS 피드 제공 

LINE API Status는 ATOM 및 RSS 피드를 제공합니다. LINE API Status에서 **SUBSCRIBE TO UPDATES**를 클릭하면 ATOM 또는 RSS 피드를 받을 수 있습니다.

![](https://developers.line.biz/media/news/line_api_status_rss_feed.png)

### 안정적으로 운영 중일 때의 표시 

장애가 없고 운영이 안정적인 경우 `All Systems Operational`이 표시됩니다.

![](https://developers.line.biz/media/news/line_api_status_operational.png)

### 장애 발생 시의 표시 

장애가 발생하면 장애가 발생한 서비스와 장애 발생 여부에 대해 다음과 같이 표시됩니다.

![](https://developers.line.biz/media/news/line_api_status_outage.png)

장애 상태는 [LINE Developers 사이트](https://developers.line.biz/)의 다음 팝업을 통해서도 표시됩니다.

![](https://developers.line.biz/media/news/line_api_status_outage_popup.png)

## LINE API Status가 다루는 서비스 

LINE API Status는 다음 서비스를 다룹니다.

- Messaging API
  - API
  - Webhook
- LINE Developers
  - LINE Developers 사이트
  - LINE Developers Console
- LIFF
- LINE Login

현재 LINE API Status는 LINE 앱 및 위에 나열된 것 이외의 서비스는 다루지 않습니다.

## LINE API Status 접속 방법 

LINE Developers 사이트의 헤더 또는 푸터에 있는 **More** 메뉴에서 LINE API Status에 접속할 수 있습니다.

![](https://developers.line.biz/media/basics/line-api-status-from-header-en.png)

![](https://developers.line.biz/media/basics/line-api-status-from-footer-en.png)
