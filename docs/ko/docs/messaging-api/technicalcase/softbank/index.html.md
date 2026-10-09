# 인프라를 로우 코드로 도입하기: CNAP으로 개발 효율을 높인 LINE 기반 서비스 개발 사례

<!-- tip start -->

**이 페이지에 대하여**

이 페이지에는 LINE API 활용 사례 사이트(2026년 3월 31일 종료)에서 LINE Developers 사이트로 이전된 글이 포함되어 있습니다. 이 페이지는 LINE 플랫폼을 도입한 기업의 사례를 소개합니다. 글의 내용은 게시 시점에 제공된 정보를 기준으로 한다는 점에 유의하십시오.

<!-- tip end -->

![SoftBank Corp.](https://developers.line.biz/media/messaging-api/technicalcase/softbank/en/softbank-logo.webp)

**SoftBank Corp.**

SoftBank Corp.는 통신, 클라우드 보안, AI, 로봇공학 등 폭넓은 사업을 운영하고 있습니다. SoftBank Corp.는 정보 혁명을 통해 모든 사람의 행복에 기여하고, "전 세계 사람들에게 가장 필요한 기업"이 되는 것을 목표로 하고 있습니다. 또한 구축해 온 사업 기반과 디지털 기술의 힘을 활용하여, 모든 사람이 편리하고 쾌적하며 안전하게 생활할 수 있는 이상적인 사회를 실현하고자 합니다.

## CNAP이란 무엇이며, 애플리케이션 개발 기간을 어떻게 단축하나요? 

기존의 애플리케이션 개발에는 다음과 같은 과제가 있었습니다.

- 개발과 인프라 운영을 서로 다른 팀이 담당하여, 릴리스할 때마다 변경 요청을 제출해야 했고 이로 인해 릴리스 과정이 길어졌습니다.
- 개발 환경과 실행 환경, 설계 관행, 정책의 일관성이 부족하여 적절한 거버넌스를 보장하기 어려웠습니다.
- 운영 작업이 개인에게 크게 의존했고 표준화되어 있지 않아 운영 오류의 위험이 있었습니다.

이러한 과제는 빌드 및 운영 프로세스를 자동화하고 시스템 구성을 표준화하는 등 DevOps 원칙을 따름으로써 해결할 수 있습니다. 그러나 이러한 환경을 자체적으로 준비하는 것은 학습 비용이 많이 들고, 기술 전문성을 쌓는 데 상당한 시간이 필요하며, 잦은 버전 업데이트를 따라가기 위해 지속적인 유지 보수가 필요하기 때문에 매우 어렵습니다. Cloud Native Application Platform(CNAP)은 SoftBank가 실천해 온 DevOps 노하우를 집약하여, 표준화되고 자동화된 플랫폼을 제공하는 서비스입니다. CNAP은 설계가 표준화되고 빌드 프로세스가 자동화된 로우 코드 구성 패키지를 제공합니다. 이러한 패키지를 유지 및 관리함으로써 고객은 기존의 과제를 극복하고 핵심 개발에 집중할 수 있습니다. 이 글에서는 LINE Messaging API를 사용한 문의 관리 시스템 개발에 CNAP을 사용한 사례를 소개합니다.

### 이미지 

![로드맵](https://developers.line.biz/media/messaging-api/technicalcase/softbank/en/softbank-overview-1.webp)

![CNAP의 장점](https://developers.line.biz/media/messaging-api/technicalcase/softbank/en/softbank-overview-2.webp)

![CNAP 소개](https://developers.line.biz/media/messaging-api/technicalcase/softbank/en/softbank-overview-3.webp)

![서비스 이미지](https://developers.line.biz/media/messaging-api/technicalcase/softbank/en/softbank-overview-4.webp)

## 시스템 개요 

![시스템 아키텍처 다이어그램](https://developers.line.biz/media/messaging-api/technicalcase/softbank/en/softbank-system-diagram.webp)

### CNAP을 사용한 Azure 환경 자동 배포 

프런트엔드부터 백엔드까지 모든 인프라는 Azure 위에 구축되어 있습니다. 우리는 Microsoft Azure, Google Cloud, Amazon Web Services(AWS)를 포함한 퍼블릭 클라우드 플랫폼을 지원하는 관리형 서비스 제공자(MSP) 서비스를 제공합니다. 이러한 서비스를 자체적으로 개발함으로써 퍼블릭 클라우드 플랫폼에 대한 폭넓은 전문성을 쌓아 왔습니다. 그중에서도 Azure는 2019년 10월부터 MSP 서비스를 일찍 제공하기 시작하여 가장 많은 경험을 보유한 퍼블릭 클라우드 플랫폼입니다. 따라서 이 프로젝트에는 Azure를 선택했습니다. CNAP을 사용하면 시스템 구성을 추상화한 형태로 정의한 YAML 파일을 Git 저장소에 푸시하는 것만으로 Kubernetes 환경과 관련 리소스를 통합적으로 배포하고 관리할 수 있습니다. Google Cloud와 AWS도 지원합니다.

### Azure Kubernetes Service를 사용한 성능 및 비용 최적화 

애플리케이션이 Kubernetes 클러스터에서 실행되므로, Azure Kubernetes Service(AKS)가 전체 비용에서 가장 큰 부분을 차지합니다. 또한 클러스터의 각 노드에 여러 파드를 배치할 수 있으므로, 노드 리소스가 충분하다면 여러 서비스를 함께 호스팅할 수 있습니다. 더불어 Kubernetes는 워크로드에 따라 동적 확장을 가능하게 합니다. 그 결과 시스템은 각 서비스의 워크로드에 따라 성능을 최적화하면서도 비용을 최소화할 수 있습니다.

### AKS를 포함한 CNAP의 구성 요소 

CNAP은 AKS와 같은 관리형 서비스를 중심으로 구성된 긴밀하게 통합된 OSS 구성 요소를 통해 인프라 운영의 자동화를 지원하는 플랫폼입니다. 애플리케이션 패키징 플랫폼으로는 Helm을 채택하고, GitOps를 구현하기 위한 지속적 배포(CD) 플랫폼으로는 Flux CD를 사용합니다. 또한 애플리케이션의 메트릭, 로그, 오류를 모니터링하기 위해 Prometheus와 Grafana를 사용합니다. 자체 애플리케이션 개발 및 운영을 통해 쌓은 노하우를 바탕으로, CNAP은 권장 구성이 포함되고 실적이 검증된 OSS 구성 요소를 제공하여, 고객이 셀프 서비스 방식으로 시스템을 관리, 운영, 모니터링할 수 있도록 합니다.

### 향후 목표 

애플리케이션 인프라 계층을 추상화하고 관리형 플랫폼을 제공함으로써, CNAP은 고객이 애플리케이션 개발에 집중할 수 있는 환경을 제공합니다. CNAP을 통해 LINE API를 사용하는 애플리케이션을 포함한 다양한 애플리케이션 개발 프로젝트를 지원할 수 있다고 믿습니다. 서비스를 계속 확장하고 고객의 요구에 더 잘 부응하기 위해 노력하겠습니다.

### 새로운 서비스를 개발하는 분들께 드리는 메시지 

앞서 언급했듯이 LINE은 매우 큰 활성 사용자 기반을 보유하고 있습니다. 따라서 LINE 플랫폼에서 제공하는 서비스는 훨씬 더 넓은 범위의 최종 사용자에게 도달할 수 있습니다. 또한 LINE은 다양한 API를 풍부하게 제공하여, 개발자가 다양한 조합과 창의적인 아이디어를 통해 여러 가지 애플리케이션을 만들 수 있게 합니다. 애플리케이션을 개발할 때 CNAP을 하나의 선택지로 고려해 주십시오.

---

## 관련 링크 

- [Cloud-Native Application Platform(CNAP)](https://www.softbank.jp/business/service/platform/msp-service/cnap)
- [MSP 서비스](https://www.softbank.jp/business/service/platform/msp-service/)
- [SoftBank Corp.](https://global.tm.softbank.jp/en/)
