# 모바일 주문 시스템 CX ORDER 사례 연구

<!-- tip start -->

**이 페이지에 대하여**

이 페이지는 LINE API Use Case 사이트(2026년 3월 31일 종료)에서 LINE Developers 사이트로 옮겨 온 글을 담고 있습니다. 이 페이지는 LINE Platform을 도입한 기업의 사례 연구를 소개합니다. 글의 내용은 게재 시점에 확인할 수 있었던 정보를 기준으로 합니다.

<!-- tip end -->

![Classmethod](https://developers.line.biz/media/line-mini-app/technicalcase/classmethod/classmethod_logo.webp)

**Classmethod, Inc.**

Classmethod는 "모든 사람의 창의성을 실현한다"는 미션 아래 클라우드, 데이터 분석, 모바일, IoT, AI, 머신러닝 등 다양한 분야에서 기술 지원을 제공하고 있습니다. 또한 LINE MINI App 개발 서비스와 기업이 모바일 주문 LINE MINI App을 만들 수 있도록 지원하는 "CX ORDER" 서비스를 통해 기업이 LINE을 활용할 수 있도록 돕고 있습니다.

## 서비스 제공자가 시스템 개발에 대해 생각하는 것 

저희는 IT 기업이지만, 아키하바라에서 "DevelopersIO CAFE"라는 완전 캐시리스 카페도 운영하고 있었습니다.\*

LINE, 웹사이트, 네이티브 앱 등 다양한 온라인 판매 채널을 개발하고 운영한 경험을 바탕으로, LINE MINI App을 통해 모바일 주문 기능을 제공하는 클라우드 서비스 [CX ORDER](https://cxorder.jp/lp/)를 출시했습니다.

단기적으로는 기업(주로 음식점)이 영업시간 단축이나 일시 휴업으로 잃은 매출을 테이크아웃 채널을 확대하여 보완할 수 있도록 돕는 것이 목표입니다. 중장기적으로는 운영 효율을 높이고 인력 부담을 줄이며, LINE을 통해 지속적인 사용자 참여를 지원하고자 합니다.

모바일 주문이 주목받고 있지만 아직 새로운 서비스이므로, 도입 장벽을 최대한 낮추는 것이 중요합니다. 저희는 LINE을 활용하면 끊김 없는 고객 경험을 제공할 수 있다고 믿습니다.

\* "DevelopersIO CAFE"는 2022년 12월 20일에 문을 닫았습니다.

### 이미지 

| 상품 목록 | 상품 상세 | 주문 확인 | 주문 완료 |
| --- | --- | --- | --- |
| ![Product List](https://developers.line.biz/media/line-mini-app/technicalcase/classmethod/classmethod_screenshot_1.webp) | ![Product Details](https://developers.line.biz/media/line-mini-app/technicalcase/classmethod/classmethod_screenshot_2.webp) | ![Order Confirmation](https://developers.line.biz/media/line-mini-app/technicalcase/classmethod/classmethod_screenshot_3.webp) | ![Order Complete](https://developers.line.biz/media/line-mini-app/technicalcase/classmethod/classmethod_screenshot_4.webp) |

## 시스템 개요 

![System architecture diagram](https://developers.line.biz/media/line-mini-app/technicalcase/classmethod/classmethod_system_diagram.webp)

### 주로 AWS 기반으로 구축, Google Cloud 도입도 진행 중 

가장 전문성이 높은 AWS를 주로 사용하고 있습니다. 사용자는 Amazon CloudFront를 통해 각 앱과 API에 접속합니다. 핵심 기능에는 Amazon ECS와 Amazon Aurora를 사용하며, 트래픽 증가에 대응할 수 있도록 오토 스케일링을 설정했습니다.

또한 자주 접근하는 데이터에는 Amazon DynamoDB를, 그 밖에 AWS Lambda와 Amazon SQS도 사용하고 있습니다. AWS가 주요 플랫폼이지만, 일부 기능에는 Google Cloud도 사용하기 시작했습니다.

### 지속적인 클라우드 인프라 및 운영 비용 

핵심 기능이 Amazon ECS와 Amazon Aurora를 기반으로 하고 있으므로, 완전한 서버리스 환경에 비해 추가 비용이 발생합니다. 구현 비용과 중장기 운영 비용을 고려할 때 현재 구성이 적절하다고 판단합니다. 다만 상황에 따라 특정 기능을 서버리스 환경으로 옮기거나 전체 구성을 조정하는 방안도 검토할 계획입니다.

### 인프라를 지원하는 운영 도구 

인프라 구성 관리에는 AWS CDK(TypeScript)를 사용합니다. CX ORDER는 앱과 API 모두 TypeScript로 구현되어 있으므로, 엔지니어가 인프라 계층부터 프런트엔드까지 끊김 없이 함께 작업할 수 있습니다. 또한 앱 오류를 모니터링하고 Slack으로 알림을 보내기 위해 Sentry를 도입했습니다. 같은 테넌트에서 짧은 시간에 여러 이벤트가 발생하면 Customer Success 팀과 함께 고객의 상황을 파악하고 오류 해결을 지원합니다. 사용자 행동을 추적하기 위해 Google Analytics를 사용하며, 이 데이터를 활용해 앱을 개선하고 메시지 발송을 위한 사용자 세그먼트를 만듭니다.

### 매출 증대, 운영 효율 향상, 고객 매장의 인력 부담 감소 

저희의 최우선 목표는 시스템을 도입한 매장의 매출을 높이고, 운영 효율을 향상시키며, 필요한 인력을 줄이는 것입니다. 앞으로도 더 많은 고객의 피드백을 수집하여 기능을 추가하고 개선해 나갈 것입니다. 또한 내부 실험에서 얻은 인사이트를 바탕으로 새로운 기능을 도입하고 고객 성공(Customer Success) 활동을 통해 LINE을 활용한 고객 커뮤니케이션에 기여하는 방법도 모색하고 있습니다.

### LINE API에 대한 요청 사항 

LINE API는 구현이 쉽고 핵심 기능이 잘 정리되어 있어 간결합니다. 앞으로 더 많은 서비스가 LINE과 연동되면서 이러한 간결함을 유지하고 안정적으로 운영되는 것이 중요합니다. 고객 이해 측면에서는 LINE이 보유한 속성 정보와 서비스가 보유한 정보를 결합하면 더 세분화된 전략을 세울 수 있습니다.

### 새로운 서비스를 개발하는 분들께 

LINE API와 SDK를 사용하면 개발 작업량을 줄이는 데 도움이 됩니다. 또한 LINE을 ID 기반 인프라로 채택하면 사용자가 서비스를 시작하기까지의 장벽을 낮출 수 있습니다. 사용자가 서비스를 이용하기 시작하면 LINE 공식 계정을 통한 지속적인 소통으로 충성도 높은 고객으로 만들 수 있다는 점도 중요한 장점입니다. 채널마다 고유한 특성이 있지만, LINE을 중심으로 서비스를 설계하면 상당한 이점을 얻을 수 있습니다.

---

## 관련 링크 

- [Classmethod, Inc. | LINE for Business](https://www.lycbiz.com/jp/partner/technology/line/classmethod/)
- [Classmethod, Inc.](https://classmethod.jp/english/)
- [CX ORDER](https://cxorder.jp/lp/)
