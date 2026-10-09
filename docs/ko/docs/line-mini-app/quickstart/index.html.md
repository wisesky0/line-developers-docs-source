# LINE MINI App 시작하기

LINE MINI App은 LINE에서 실행되는 웹 애플리케이션입니다.

이 플랫폼을 활용하면 개발자는 별도의 네이티브 앱을 개발하지 않고도 서비스를 제공할 수 있습니다.

마찬가지로 사용자는 별도의 앱을 다운로드하지 않고도 LINE 계정으로 LINE 안에서 실행되는 다양한 서비스를 이용할 수 있습니다.

## LINE MINI App 개발부터 출시까지의 과정 

LINE MINI App을 개발하고 출시하는 전체 과정은 다음과 같습니다.

1. LINE MINI App 채널을 만들면 [LINE MINI App 개발](https://developers.line.biz/en/docs/line-mini-app/develop/develop-overview/)을 시작할 수 있습니다. 이 단계에서는 검증되지 않은 MINI App으로 게시됩니다.
1. [LINE MINI App 심사 제출](https://developers.line.biz/en/docs/line-mini-app/submit/submission-guide/)을 합니다.
1. 심사를 통과하면 검증된 MINI App으로 [서비스를 제공](https://developers.line.biz/en/docs/line-mini-app/service/service-operation/)할 수 있습니다.

## 공통 가이드 

역할과 관계없이 LINE MINI App을 개발하는 전체 워크플로를 확인해 주십시오.

- [**LINE MINI App의 기본 알아보기**](https://developers.line.biz/en/docs/line-mini-app/discover/introduction/): LINE MINI App에 기본으로 제공되는 기능과 직접 구현할 수 있는 커스텀 기능을 이해합니다.
  - [LINE MINI App 사양](https://developers.line.biz/en/docs/line-mini-app/discover/specifications/)
  - [기본 제공 기능](https://developers.line.biz/en/docs/line-mini-app/discover/builtin-features/)
  - [커스텀 기능](https://developers.line.biz/en/docs/line-mini-app/discover/custom-features/)
  - [LINE MINI App UI 컴포넌트](https://developers.line.biz/en/docs/line-mini-app/discover/ui-components/)

## 역할별 가이드 

역할별 가이드를 따라 LINE MINI App 개발 워크플로를 확인해 주십시오.

### 서비스 기획자를 위한 가이드 

LINE MINI App으로 제공할 서비스를 설계할 때 알아 두어야 할 작업입니다.

- [**LINE MINI App 정책 확인**](https://terms2.line.me/LINE_MINI_App?lang=en) 기획 단계에서 LINE MINI App 정책을 살펴봐 주십시오. 심사를 제출하기 전에 LINE MINI App이 LINE MINI App 정책을 준수하는지 확인해야 합니다.

### 개발자를 위한 가이드 

LINE MINI App을 개발하고 구현할 때 알아 두어야 할 작업입니다.

- [**LINE MINI App 사양**](https://developers.line.biz/en/docs/line-mini-app/discover/specifications/): 어떤 플랫폼과 버전에서 어떤 기능이 지원되는지, 그리고 LIFF 지원 버전을 확인합니다.
- **개발자 가이드**
  - [**시작하기**](https://developers.line.biz/en/docs/line-mini-app/develop/develop-overview/): LINE MINI App을 개발하기 전에 반드시 읽어 주십시오.
  - [**커스텀 액션 버튼 구현**](https://developers.line.biz/en/docs/line-mini-app/develop/share-messages/): LINE MINI App을 친구에게 공유할 때 사용하는 공유 메시지를 커스터마이즈할 수 있습니다.
  - [**서비스 메시지 보내기**](https://developers.line.biz/en/docs/line-mini-app/develop/service-messages/): 사용자 동작에 대한 확인이나 응답으로 서비스 메시지를 보낼 수 있습니다.
  - [**결제 시스템 사용**](https://developers.line.biz/en/docs/line-mini-app/develop/payment/): LINE Pay 등 결제 시스템을 LINE MINI App에 연동하여 사용자에게 결제 기능을 제공할 수 있습니다.
  - [**영구 링크 만들기**](https://developers.line.biz/en/docs/line-mini-app/develop/permanent-links/): LINE MINI App의 영구 링크를 사용하면 사용자가 즉시 LINE MINI App에 접근할 수 있습니다.
  - [**LINE MINI App 사용자에게 표시되는 설정**](https://developers.line.biz/en/docs/line-mini-app/develop/configure-console/): LINE MINI App은 LINE Developers Console에 설정된 데이터를 사용하므로 LINE Developers Console에 정확한 데이터를 설정해 주십시오.
  - [**외부 브라우저에서 LINE MINI App 열기**](https://developers.line.biz/en/docs/line-mini-app/develop/external-browser/): 외부 브라우저에서 LINE MINI App을 여는 경우의 참고 사항을 확인해 주십시오.
  - [**성능 가이드 확인**](https://developers.line.biz/en/docs/line-mini-app/develop/performance-guidelines/): LINE MINI App 성능 가이드를 확인하시기를 권장합니다.
- **API 레퍼런스**
  - [Service Message API](https://developers.line.biz/en/reference/line-mini-app/#service-messages)
  - [LIFF API](https://developers.line.biz/en/reference/liff/)
  - [LINE Pay API](https://developers-pay.line.me/online-api-v3)
- [**심사 요청 제출**](https://developers.line.biz/en/docs/line-mini-app/submit/submission-guide/): 가이드라인을 준수한 것으로 확인된 LINE MINI App만 검증된 MINI App이 됩니다. LINE MINI App을 검증된 MINI App으로 만들려면 심사를 신청해 주십시오.

### 디자이너를 위한 가이드 

LINE MINI App 페이지를 디자인할 때 알아 두어야 할 작업입니다.

- [**LINE MINI App 아이콘 사양 및 가이드라인**](https://developers.line.biz/en/docs/line-mini-app/design/line-mini-app-icon/): 가이드라인에 따라 아이콘을 만들고 LINE Developers Console에서 채널 아이콘을 설정합니다. 자세한 내용은 [LINE MINI App 사용자에게 표시되는 설정](https://developers.line.biz/en/docs/line-mini-app/develop/configure-console/)을 참고해 주십시오.
- [**가로 모드의 안전 영역 확인**](https://developers.line.biz/en/docs/line-mini-app/design/landscape/): 노치가 있는 기기에서도 LINE MINI App의 모든 부분이 보이도록 CSS를 사용하여 LINE MINI App을 안전 영역 안에 배치해 주십시오.
- [**로딩 아이콘 확인**](https://developers.line.biz/en/docs/line-mini-app/design/loading-icon/): 로딩 아이콘은 LINE MINI App에서 권장하는 UI 요소입니다. 지정된 파일을 사용해 주십시오.

### 서비스 운영자 및 마케터를 위한 가이드 

LINE MINI App으로 제공하는 서비스를 운영하고 홍보할 때 알아 두어야 할 작업입니다.

- [**서비스 운영 가이드 확인**](https://developers.line.biz/en/docs/line-mini-app/service/service-operation/): 실제 운영을 위해 영구 링크로 LINE MINI App을 공유하는 방법과 서비스 메시지를 보내는 방법 등을 숙지해 주십시오.
  - [서비스 제공자를 위한 노하우](https://developers.line.biz/en/docs/line-mini-app/service/service-operation/)
  - [LINE MINI App에 광고 게재](https://developers.line.biz/en/docs/line-mini-app/service/line-mini-app-ads/)
  - [검증된 MINI App 업데이트 후 재심사](https://developers.line.biz/en/docs/line-mini-app/service/update-service/)
  - [LINE 공식 계정 사용](https://developers.line.biz/en/docs/line-mini-app/service/line-mini-app-oa/)
  - [LINE MINI App 채널을 Business Manager 조직에 연결](https://developers.line.biz/en/docs/line-mini-app/service/business-manager-link/)
