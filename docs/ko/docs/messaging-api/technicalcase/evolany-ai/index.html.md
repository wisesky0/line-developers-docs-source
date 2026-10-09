# anybot for ChatGPT 기술 사례 연구: ChatGPT를 적극 활용하여 더 원활한 커뮤니케이션 구현하기

<!-- tip start -->

**이 페이지에 대하여**

이 페이지에는 LINE API 활용 사례 사이트(2026년 3월 31일 종료)에서 LINE Developers 사이트로 이전된 글이 포함되어 있습니다. 이 페이지는 LINE 플랫폼을 도입한 기업의 사례를 소개합니다. 글의 내용은 게시 시점에 제공된 정보를 기준으로 한다는 점에 유의하십시오.

<!-- tip end -->

![Evolany Co., Ltd.](https://developers.line.biz/media/messaging-api/technicalcase/evolany_ai/en/evolany_ai_logo.webp)

**Evolany Co., Ltd.**

Evolany Co., Ltd.는 2018년 송유(Song Yu)와 Christian Forestell이 일본에서 설립한 IT 스타트업입니다. 디지털 전환(DX)의 이점을 지역 상점 운영자에게 전달한다는 신념 아래, 디지털 기술로 다양한 기업의 문제를 해결하기 위해 노력하고 있으며, 4년 연속 연간 200% 이상의 빠른 성장을 이루었습니다. 2022년 11월 기준으로 3,500개 이상의 기업을 지원했습니다.

## anybot for ChatGPT 개발 배경 

"anybot for ChatGPT"는 ChatGPT를 활용하여 사전 학습된 정보를 바탕으로 사용자 질문에 대한 AI 기반 응답을 제공합니다. 내부 커뮤니케이션을 원활하게 하고 고객과의 소통을 촉진하는 데에는 많은 비용이 들기 때문에, 근본적인 해결책을 찾기 매우 어려운 분야입니다. 그러나 ChatGPT의 등장으로 자연어를 정확하게 해석하고, 사람의 개입 없이도 이해하기 쉬운 응답을 요약하여 전달할 수 있게 되었습니다. 이러한 가능성을 활용하여 우리는 anybot을 통해 커뮤니케이션을 돕고 촉진하는 기능을 구현하기로 했습니다. 한편 ChatGPT에는 대화 기록을 관리할 수 없고, 새로 습득한 정보를 보존할 수 없으며, 최신 데이터에 접근할 수 없다는 등의 한계가 있습니다(2023년 11월 기준 ChatGPT-3의 지식 기준 시점은 2021년 9월). 이러한 한계 때문에 기업의 도입이 더딘 경우가 많습니다. 그래서 우리는 지금까지 챗봇을 제공하며 쌓아 온 전문성을 활용하여, ChatGPT의 약점을 보완한 안전한 서비스를 제공하기로 결정했고, 이를 통해 "anybot for ChatGPT"를 개발하게 되었습니다.

### 이미지 

![서비스 이미지](https://developers.line.biz/media/messaging-api/technicalcase/evolany_ai/en/evolany_ai_overview_1.webp)

## 시스템 개요 

![시스템 아키텍처 다이어그램](https://developers.line.biz/media/messaging-api/technicalcase/evolany_ai/en/evolany_ai_system_diagram.webp)

### AWS와 ChatGPT를 활용한 고객 지원 시스템 

인프라를 선택할 때, 특정 요구 사항을 충족하는 서비스를 선택했습니다. PDF 파일과 같은 대량의 학습 데이터를 관리하기 위해 Amazon Simple Storage Service(AWS S3)를 도입했습니다. 또한 처리 중에 자주 필요한 파일에 고속이면서도 안전하게 접근할 수 있도록 Amazon Elastic File System(AWS EFS)을 사용합니다. 이 파일 스토리지 서비스는 여러 Amazon Elastic Container Service(이하 "AWS ECS") 인스턴스에서 동시에 접근할 수 있으며, 예를 들어 처리된 학습 데이터를 검색하는 데 활용됩니다.

애플리케이션을 호스팅하기 위해 AWS ECS를 도입했습니다. 목적은 손쉬운 업데이트 관리와, 접속 수 및 부하 상황에 따른 스케일 인/아웃을 통해 안정적인 서비스 제공을 보장하는 것입니다. 나아가 질의응답 세션을 위해 ChatGPT(OpenAI)를 도입했습니다. 이 AI 도구는 자연어 처리를 사용하여 사용자 문의에 응답할 수 있습니다. 또한 Azure 환경에 익숙한 기업이나 Microsoft Azure의 보안 기능을 활용하고 싶은 기업을 위해 ChatGPT(Azure OpenAI Service)도 유사한 목적으로 사용합니다.

### AWS로 인프라 운영 효율성을 높이고 보안을 강화하기 

Amazon CloudWatch(이하 "AWS CloudWatch")와 Amazon Elastic Container Registry Service(이하 "AWS ECR")는 인프라 운영에서 중요한 역할을 합니다. 로그 관리에는 AWS CloudWatch를 사용합니다. 이 도구는 인프라와 애플리케이션이 생성하는 로그 데이터를 모니터링하고 분석하는 강력한 서비스입니다. 실시간 데이터를 수집하고 모니터링하여 시스템 성능을 추적하고 필요할 때 신속하게 대응할 수 있다는 점에서 AWS CloudWatch를 선택했습니다. 또한 예기치 않은 시스템 문제나 보안 침해를 신속하게 감지하여 효과적인 대응책을 세우는 데에도 중요한 역할을 합니다. 한편 업데이트 관리에는 AWS ECR을 사용합니다. AWS ECR은 컨테이너화된 애플리케이션 이미지를 관리하고 안전하게 저장하는 서비스입니다. 주로 애플리케이션 업데이트 과정을 간소화하고 효율화하기 위해 이 도구를 선택했습니다. AWS ECR을 사용하면 컨테이너 이미지의 버전 관리가 용이하고, 개발부터 배포까지 일관된 워크플로를 유지할 수 있습니다. 이러한 운영 도구는 인프라 성능 모니터링과 업데이트 프로세스의 효율성을 지원하며, 시스템의 안전성과 보안을 강화하는 데 중요한 역할을 합니다.

### 향후 전망 

많은 AI 관련 서비스는 학습 곡선이 가파르지만, 우리는 사용자가 목표를 최대한 쉽게 달성할 수 있는 서비스를 제공하고자 합니다. ChatGPT의 보안과 안정성에 대해 우려하는 사용자가 있다는 것도 알고 있습니다. 기존의 접근 방식에 따라, 강점은 극대화하고 약점은 보완하는 서비스를 계속 유지해 나갈 것입니다.

### LINE API에 대한 요청 

언어를 위한 생성형 AI는 응답을 한 번에 생성하지 않고 토큰 단위로 하나씩 생성한다는 특징이 있습니다. 따라서 전체 텍스트가 생성되기까지 시간이 걸립니다. 그러므로 UI/UX 관점에서 응답을 스트리밍하여 콘텐츠를 표시하는 기능이 실용화에 필수적이 될 것이라고 생각합니다. LINE 플랫폼 내에서 콘텐츠를 보내는 스트리밍 기능이 향후 지원되기를 바랍니다.

### 새로운 서비스를 개발하는 분들께 드리는 메시지 

생성형 AI 서비스는 새로운 시대의 문턱에 서 있다고 믿습니다. 기술이 빠르게 발전하고 규제 환경이 변화하는 가운데 이 분야는 복잡하지만, 동료 개발자들과 함께 생성형 AI 서비스의 발전에 기여할 수 있다는 기대에 설레고 있습니다.

---

## 관련 링크 

- [Evolany Co., Ltd.](https://evolany.com/en/)
- [anybot](https://www.anybot.me/special/campaign/)
- [anybot for ChatGPT](https://chatgpt.anybot.me/)
