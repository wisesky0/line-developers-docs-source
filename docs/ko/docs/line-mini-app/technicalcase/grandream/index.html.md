# GDL 플랫폼의 기술 사례 연구: 비용 효율성과 유연성을 함께 실현

<!-- tip start -->

**이 페이지에 대하여**

이 페이지는 LINE API Use Case 사이트(2026년 3월 31일 종료)에서 LINE Developers 사이트로 옮겨 온 글을 담고 있습니다. 이 페이지는 LINE Platform을 도입한 기업의 사례 연구를 소개합니다. 글의 내용은 게재 시점에 확인할 수 있었던 정보를 기준으로 합니다.

<!-- tip end -->

![grandream](https://developers.line.biz/media/line-mini-app/technicalcase/grandream/en/grandream-logo.webp)

**Grandream Inc.**

Grandream은 웹 애플리케이션 개발부터 인프라 구축 및 운영까지 엔드 투 엔드로 지원하는 뛰어난 기술력과 제안 역량을 갖춘 시스템 개발 회사입니다. 주로 LINE 기술을 활용한 애플리케이션 개발에 집중하고 있으며, 최근에는 특히 LINE MINI App에 중점을 두고 있습니다. 고객의 비즈니스가 성공할 수 있도록 안내하는 파트너가 되겠습니다.

## 서비스 개요와 해결하고자 하는 과제 

LINE API로 애플리케이션을 개발하려면 특정 비즈니스 과제를 해결하는 솔루션뿐 아니라 범용 기능도 구현해야 합니다. 예를 들어 친구의 팔로우 및 차단 상태 관리, 결제, 리치 메뉴, 1대1 채팅 등이 있습니다. 그래서 개발 예산을 범용 기능과 비즈니스 솔루션에 나누어 배정하면 핵심 기능을 구축하기 어려운 경우가 많습니다. 이 문제를 해결하기 위해 GDL 플랫폼은 하이브리드 솔루션을 제공합니다. 범용 기능은 SaaS 또는 패키지로 제공하고, 고객의 특정 비즈니스 과제를 해결하는 시스템은 맞춤형으로 제공합니다. 이 방식을 사용하면 개발자가 핵심 기능 구축에 집중할 수 있습니다. 2023년 5월에는 아이들을 괴롭힘으로부터 보호하기 위한 월 구독형 서비스 "MONSTER" 앱의 베타 버전을 출시했습니다. 이 서비스는 사용자 정보 관리와 결제 기능에 GDL 플랫폼을 활용해 개발 비용을 줄인 성공 사례입니다.

MONSTER 웹사이트: [https://www.monster-line.com](https://www.monster-line.com/)

### 이미지 

![service-overview](https://developers.line.biz/media/line-mini-app/technicalcase/grandream/en/grandream-service-img.webp)

![service-image](https://developers.line.biz/media/line-mini-app/technicalcase/grandream/en/grandream-ui-img.webp)

## 시스템 개요 

![System architecture diagram](https://developers.line.biz/media/line-mini-app/technicalcase/grandream/en/grandream-system-dialog.webp)

### 서비스에서 시스템 데이터 활용하기 

보다 세분화된 세그먼트 관리를 위해 LINE 공식 계정과 LINE MINI App에서 발생하는 사용자 행동을 가능한 한 데이터베이스에 기록합니다.\* 적절한 세그먼트를 만들면 사용자에게 관련 정보를 전달할 수 있을 뿐 아니라 메시지 전송 비용도 줄일 수 있습니다.

\*LINE 계정과 연결된 행동 데이터를 수집하고 활용하려면 사용자의 동의가 필요합니다.

### 다양한 서비스를 갖춘 AWS 활용 

저희는 오랜 기간 AWS에서 개발해 왔으며, Infrastructure as Code(IaC)를 포함하여 풍부한 인프라 구축 자산을 보유하고 있습니다. AWS의 또 다른 장점은 서비스 종류가 매우 다양하여 필요한 모든 작업을 플랫폼 안에서 완결할 수 있다는 점입니다.

### 클라우드 인프라 운영 비용 

AWS 운영 비용의 상당 부분은 Amazon Elastic Compute Cloud("AWS EC2"), Amazon Elastic Container Service("AWS ECS"), Amazon ElastiCache("AWS ElastiCache"), Amazon Relational Database Service("AWS RDS") 같은 "상시 가동" 서비스에서 발생합니다. 기능 검증용 스테이징 환경과 실서비스를 운영하는 프로덕션 환경의 두 가지 표준 환경을 제공하지만, 특히 개발 환경의 운영 비용을 줄이는 데 집중하고 있습니다. 여기에서 비용 절감 방안 세 가지를 소개합니다.

첫 번째는 스테이징과 프로덕션 환경 모두에서 사용하는 AWS EventBridge입니다. AWS EventBridge는 이벤트를 사용해 애플리케이션 구성 요소를 연결하여 이벤트 기반 아키텍처를 구현할 수 있게 해 주는 서버리스 서비스입니다. 이벤트 기반 아키텍처는 이벤트를 발생시키고 응답하는 방식으로 서로 느슨하게 결합되어 함께 동작하는 소프트웨어 시스템을 구축할 수 있게 합니다. 이를 통해 민첩성이 높아지고 신뢰성과 확장성이 뛰어난 애플리케이션을 만들 수 있습니다. 저희 서비스에서는 AWS EventBridge 스케줄러를 사용해, 필요한 개발 시간 외에는 서비스를 자동으로 중지하는 스크립트를 실행합니다.

두 번째는 AWS ECS입니다. AWS ECS는 컨테이너화된 애플리케이션의 배포, 관리, 확장을 쉽게 할 수 있도록 해 주는 완전 관리형 컨테이너 오케스트레이션 서비스입니다. 운영 비용은 선택한 리소스와 사용량에 따라 크게 달라집니다. 비용을 줄이기 위해 컨테이너 워크로드를 비용 효율성을 우선하여 실행하는 AWS 옵션인 "Fargate Spot"을 사용하고 있습니다.

세 번째는 AWS ElastiCache입니다. AWS ElastiCache는 분산형 인메모리 캐시 환경을 쉽게 설정, 관리, 확장할 수 있도록 해 주는 관리형 서비스입니다. 이 서비스는 고속 인메모리 캐싱을 제공하여 애플리케이션 성능을 향상시킵니다. 인메모리 캐시에서는 데이터베이스보다 훨씬 빠르게 데이터를 가져올 수 있으므로, 자주 접근하는 데이터를 캐싱하면 애플리케이션 응답 시간을 크게 줄이고 데이터베이스 부하도 낮출 수 있습니다. 비용은 전송되는 데이터량과 인스턴스의 실행 시간 등 여러 요인에 따라 달라집니다. 개발 환경에서는 AWS ElastiCache 대신 AWS EC2에 Redis 인스턴스를 직접 구축하여 비용을 줄이고 있습니다.

### 인프라를 지원하는 운영 도구 

인프라를 지원하는 IaC 솔루션으로 AWS Cloud Development Kit("AWS CDK")를 도입했습니다. AWS 인프라를 코드로 구축할 수 있으므로 AWS 리소스를 프로그래밍 방식으로 관리할 수 있습니다. 또한 AWS CDK의 사용 언어로 TypeScript를 채택했습니다. 이를 통해 개발 도구(VS Code)의 타입 추론 및 타입 검사 기능을 충분히 활용할 수 있어 코딩 효율이 높아지고 실행 전에 오타를 잡아낼 수 있습니다. 또한 인프라를 프로그래밍 방식으로 정의하므로 스테이징과 프로덕션을 포함한 환경별로 서로 다른 설정을 쉽게 구성할 수 있습니다. 과거에는 CloudFormation 템플릿과 Terraform 등 다양한 도구로 AWS 환경을 구축한 경험이 있지만, 현재는 AWS CDK가 가장 적합한 도구라고 생각합니다.

### 향후 목표 

GDL 플랫폼을 다양한 기업에 제공하면서 기능을 지속적으로 확장하고 있습니다. 기존 고객도 이러한 지속적인 개선의 혜택을 누릴 수 있도록 하고자 합니다.

---

## 관련 링크 

- [Grandream Inc.](https://www.grandream.jp/)
