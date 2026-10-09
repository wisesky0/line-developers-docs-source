# '대기 줄 관리 솔루션이 LINE MINI App으로 확장되는 방식: "matoca"와 "yoboca"의 개발 사례'

<!-- tip start -->

**이 페이지에 대하여**

이 페이지는 LINE API Use Case 사이트(2026년 3월 31일 종료)에서 LINE Developers 사이트로 옮겨 온 글을 담고 있습니다. 이 페이지는 LINE Platform을 도입한 기업의 사례 연구를 소개합니다. 글의 내용은 게재 시점에 확인할 수 있었던 정보를 기준으로 합니다.

<!-- tip end -->

![BraveTechnology inc.](https://developers.line.biz/media/line-mini-app/technicalcase/bravetechnology/en/bravetechnology_logo.webp)

**BraveTechnology inc.**

줄을 서서 기다리는 것은 누구나 겪는 일입니다. BraveTechnology는 LINE MINI App을 통해 대기 줄 및 알림 서비스를 제공하여 이에 따르는 스트레스를 줄이는 것을 미션으로 삼고 있습니다.

## 서비스 제공자가 시스템 개발에 대해 생각하는 것 

모든 사람의 대기 스트레스를 줄인다는 미션을 실현하기 위해 서비스를 제공하고 있습니다.

사람들은 대부분 기다리는 것을 싫어합니다. 예약을 했는데도 예상보다 오래 기다리거나 지연되는 경우가 많습니다. 한편 기업 입장에서는 고객을 기다리게 하는 스트레스와 주변 지역에 혼잡을 일으킬 수 있다는 부담도 있습니다. 코로나19 대유행 기간에는 사람들이 "3밀(밀폐, 밀집, 밀접)"을 피하려 하면서 이러한 스트레스가 더욱 커졌습니다.

이런 문제를 해결하기 위해 두 가지 서비스를 제공하고 있습니다. 대기 줄 관리를 위한 "matoca"와 픽업 알림을 위한 "yoboca"입니다. matoca를 사용하면 사용자는 직접 줄에 서지 않고도 순서를 확보할 수 있으며, 차례가 되면 LINE으로 알림을 받습니다. 구매와 픽업 사이에 기다림이 있는 상황에서는 yoboca가 주문이 준비되었을 때 LINE 알림을 보냅니다. 이 서비스들을 통해 사용자는 호출될 때까지 카페에서 쉬거나 볼일을 볼 수 있으며, 기다림의 스트레스를 줄일 수 있습니다.

일상에는 수많은 기다림의 순간이 있고, 각각의 순간에는 저마다의 스트레스가 따릅니다. 앞으로도 LINE을 활용해 이러한 기다림의 스트레스를 줄이기 위해 노력하겠습니다.

### 이미지 

![service image](https://developers.line.biz/media/line-mini-app/technicalcase/bravetechnology/en/bravetechnology_screenshot.webp)

## 시스템 개요 

![System architecture diagram](https://developers.line.biz/media/line-mini-app/technicalcase/bravetechnology/en/bravetechnology_system_diagram.webp)

### 향후 확장성을 고려하여 AWS 도입 

"LINE de Junbanmachi" 시절부터 AWS를 사용해 왔으며, 적은 인원으로도 개발과 운영을 모두 감당할 수 있도록 클라우드 서비스를 도입했습니다. 작년 9월에 출시한 yoboca는 서버리스 아키텍처를 채택했습니다. AWS Lambda, Amazon SQS 같은 사용한 만큼 과금되는 완전 관리형 서비스를 기반으로 하며, CI/CD를 통한 자동화를 결합했습니다. 이 아키텍처는 운영 비용과 금전적 비용을 모두 줄이는 동시에, 앞으로의 성장을 위한 확장 가능한 기반을 제공합니다.

### 다른 서비스와의 연동을 통해 마케팅과 고객 충성도를 높이는 서비스 제공 

최근 matoca와 yoboca가 POS 시스템, 발권기, 전자상거래 사이트와 연동할 수 있는 API를 공개했습니다. 이전에는 이 서비스들이 각각 독립적으로 운영되었지만, POS 시스템 같은 매장 설비와 연동하면서 추가 장비가 필요 없게 되었고, 제휴 업체 직원의 작업 단계도 줄일 수 있게 되었습니다. 다른 기기 및 서비스와의 연동에 더해, 사용자 행동 데이터를 더 많이 활용하여 제휴 업체의 마케팅 활동과 고객 충성도를 높이는 서비스를 개발할 계획입니다.

### 새로운 서비스를 개발하는 분들께 

앞서 말씀드렸듯이 LINE은 활성 사용자가 매우 많고 다양한 API를 제공하는 플랫폼입니다. 다른 플랫폼과 마찬가지로 LINE에도 일정한 제약이 있으며, 개발자는 자연스럽게 더 유연하고 정교한 시스템을 만들고 싶어 할 수 있습니다. 하지만 이러한 복잡성이 항상 사용자가 원하는 것은 아닙니다. 개발자 여러분이 사용자의 실제 니즈를 충족하는 서비스를 만드는 데 집중하고, 그에 맞게 기술과 플랫폼을 선택하시기를 권장합니다. 사용 편의성이 최우선이라면 LINE Platform을 활용하는 것이 효과적인 선택이 될 수 있습니다. 이런 경우에는 LINE을 선택지 중 하나로 고려해 보시기를 권합니다.

---

## 관련 링크 

- [BraveTechnology inc.](https://bravetechnology.co.jp/)
- [matoca](https://junbanmachi.jp/)
- [yoboca](https://yoboca.jp/)
