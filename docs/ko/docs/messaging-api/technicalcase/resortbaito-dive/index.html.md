# 임시직 직원의 만족도를 높이기 위한 "Resort Baito Dive" 개발 사례

<!-- tip start -->

**이 페이지에 대하여**

이 페이지에는 LINE API 활용 사례 사이트(2026년 3월 31일 종료)에서 LINE Developers 사이트로 이전된 글이 포함되어 있습니다. 이 페이지는 LINE 플랫폼을 도입한 기업의 사례를 소개합니다. 글의 내용은 게시 시점에 제공된 정보를 기준으로 한다는 점에 유의하십시오.

<!-- tip end -->

![Dive Inc.](https://developers.line.biz/media/messaging-api/technicalcase/resortbaito-dive/en/resortbaito-dive-logo.png)

**Dive Inc.**

Dive Inc.는 주로 "리조트 아르바이트"(단기 리조트 근무)를 통해 관광시설에 인력 파견 서비스를 제공하는 스타트업입니다. 관광 업계가 직면한 심각한 인력 부족 문제 해결에 기여하고 있습니다. 서비스 웹사이트의 연간 등록 사용자는 40,000명을 넘었으며, LINE 친구 수는 150,000명을 넘었습니다. 근로자를 지역 사회와 이어주는 고용 기회를 만들어 지역 활성화와 관광 산업의 성장에 힘쓰고 있습니다.

## 서비스 개요 및 해결 과제 

Dive Inc.는 리조트 아르바이트 인력 파견 서비스인 "Resort Baito Dive"에 LINE 공식 계정을 사용하고 있습니다. LINE 공식 계정을 통해 임시직 직원은 영업 담당자 및 고객 지원팀과 매일 소통합니다. 이 소통은 근무 중 일상적인 고민부터 구직 상담까지 폭넓은 주제를 다룹니다. 성수기에는 월간 메시지 전송 수가 약 63,000건에 달합니다. 우리는 각각의 소통을 세심하게 처리하기 위해 노력하고 있으며, 그 결과 임시직 직원들로부터 매우 긍정적인 피드백을 받고 있습니다.

### 이미지 

![서비스 이미지](https://developers.line.biz/media/messaging-api/technicalcase/resortbaito-dive/en/resortbaito-dive-ui-img.webp)

![서비스 CMS 이미지](https://developers.line.biz/media/messaging-api/technicalcase/resortbaito-dive/en/resortbaito-dive-ui-img-2.webp)

## 시스템 개요 

![시스템 아키텍처 다이어그램](https://developers.line.biz/media/messaging-api/technicalcase/resortbaito-dive/en/resortbaito-dive-system.webp)

### Resort Baito Dive를 지원하는 기술과 그 영향 

인프라는 AWS 위에 구축되어 있습니다. 프런트엔드는 CloudFront와 S3를 통해 제공되며, 백엔드 API는 ALB(Application Load Balancer)와 Fargate의 ECS를 사용하여 구축되었습니다.

사용자의 채팅 메시지를 수신하는 웹훅은 API Gateway와 SQS(Simple Queue Service)를 조합하여 설계되었으며, 이후 처리는 Lambda가 담당합니다. 이 아키텍처는 사용자 메시지를 안정적으로 수신하도록 보장합니다. 데이터베이스로는 Aurora Serverless v2를 도입하여 자동 프로비저닝을 통해 운영 효율을 높였습니다. 또한 이러한 인프라 구성은 AWS CDK로 코드처럼 관리되며, 배포는 GitHub Actions로 자동화되어 있습니다. 개발 언어로는 엔지니어의 인지 부담을 줄이기 위해 프런트엔드, 백엔드, 인프라 전반에 TypeScript를 일관되게 사용하고 있습니다. 이러한 통합적 접근 방식은 효율적이고 높은 품질의 시스템 운영을 가능하게 합니다.

출시 이후, 전 영업일 종료 시점부터 다음 영업일 시작 시점까지 받은 채팅 메시지에 대한 응답이 오전 중에 완료되었습니다. 이전에는 이 작업이 오후까지 이어졌습니다. 또한 검색 기능 개선으로, 하루에 여러 번 수행하던 채팅 미응답 확인 작업의 소요 시간이 확인 1회당 약 1시간에서 약 30분으로 줄어, 운영 효율이 크게 향상되었습니다.

### Resort Baito Dive의 향후 전망 

이제 회사 내에 채팅 데이터가 축적되고 있으므로, 이 데이터를 분석에 활용하여 사용자 만족도를 더욱 높일 계획입니다.

### LINE API에 대한 요청 

그룹 채팅과 다인 채팅에서 멤버의 사용자 ID를 가져오는 API는 인증된 계정만 실행할 수 있기 때문에, 개발 계정으로 테스트하는 데 어려움이 있었습니다. 테스트 목적의 특별 신청 절차를 통해 이 API를 미인증 계정에도 제공해 주시면 감사하겠습니다.

- [그룹 채팅 멤버의 사용자 ID 가져오기](https://developers.line.biz/en/reference/messaging-api/#get-group-member-user-ids)

- [다인 채팅 멤버의 사용자 ID 가져오기](https://developers.line.biz/en/reference/messaging-api/#get-room-member-user-ids)

### 새로운 서비스를 개발하는 분들께 드리는 메시지 

채팅과 같은 사용자 메시지를 반드시 수신해야 하는 경우, 웹훅을 통해 받은 메시지를 큐에 넣는 방식이 효과적입니다. 이처럼 메시지 수신과 처리를 분리하면 확장 가능한 아키텍처를 만들 수 있습니다.

---

## 관련 링크 

- [Dive Inc.](https://resortbaito-dive.com/)
- [개발 회사: Classmethod, Inc.](https://classmethod.jp/)
