# 채널 생성하기

LIFF 앱을 개발하려면 먼저 [LINE Developers Console](https://developers.line.biz/console/)에서 프로바이더와 채널을 만들어야 합니다.

## LINE Developers Console에 로그인 

프로바이더와 채널을 만들려면 먼저 LINE Developers Console에 로그인해야 합니다. 로그인 방법에 대한 자세한 내용은 [LINE Developers Console에 로그인](https://developers.line.biz/en/docs/line-developers-console/login-account/)을 참조하세요.

## 프로바이더 및 채널 만들기 

[LINE Developers Console](https://developers.line.biz/console/)에 로그인하여 프로바이더와 채널을 만드세요.

### 1. 프로바이더 만들기 

이미 사용할 프로바이더가 있다면 [2. 채널 만들기](https://developers.line.biz/en/docs/liff/getting-started/#step-two-create-channel)로 이동하세요.

1. Console 홈에서 **Create a new provider** 버튼을 클릭합니다.

   <!-- note start -->

   **Create a new provider 버튼이 보이지 않는 경우**

   이미 프로바이더를 만든 경우 Console 홈에 **Create a new provider** 버튼이 표시되지 않습니다. 다른 프로바이더를 만들고 싶다면 Console 홈의 **Providers** 섹션에 있는 **Create** 버튼을 클릭하세요.

   ![Create button in the Providers section](https://developers.line.biz/media/liff/getting-started/providers-section-en.png)

   <!-- note end -->

1. **Create a new provider** 화면에서 원하는 **Provider name**을 입력하고 **Create** 버튼을 클릭합니다.

   **프로바이더**는 LINE Platform을 통해 서비스를 제공하는 개인, 회사 또는 조직을 말합니다. 프로바이더 이름으로는 본인의 이름이나 회사 이름을 입력하세요.

   ![Create a provider](https://developers.line.biz/media/liff/getting-started/create-provider-en.png)

### 2. 채널 만들기 

**채널**은 LINE Platform의 기능과 프로바이더의 서비스 사이의 통신 경로입니다. 채널에는 이름, 설명, 아이콘 이미지가 있어야 합니다.

LIFF 앱은 다음 두 가지 채널 유형에 추가할 수 있습니다.

| 유형 | 설명 |
| --- | --- |
| [LINE Login](https://developers.line.biz/en/docs/line-login/) | LIFF 앱을 만들려는 경우, 다음 단계에서 [LIFF 스타터 앱을 체험](https://developers.line.biz/en/docs/liff/trying-liff-app/)하려는 경우, 또는 [Create LIFF App으로 LIFF 앱 개발 환경을 구축](https://developers.line.biz/en/docs/liff/cli-tool-create-liff-app/)하려는 경우 LINE Login 채널을 만드세요. |
| [LINE MINI App](https://developers.line.biz/en/docs/line-mini-app/)  | [LINE MINI App](https://developers.line.biz/en/docs/line-mini-app/quickstart/)으로 LIFF 앱을 만들려는 경우 LINE MINI App 채널을 만드세요. |

<!-- tip start -->

**LIFF 앱은 LINE MINI App으로 만드는 것을 권장합니다**

앞으로 LIFF와 LINE MINI App은 하나의 브랜드로 통합될 예정입니다. 이 통합에 따라 LIFF는 LINE MINI App에 통합됩니다. 따라서 새 LIFF 앱은 LINE MINI App으로 만들 것을 권장합니다. 자세한 내용은 [2025년 2월 12일](https://developers.line.biz/en/news/2025/02/12/line-mini-app/)의 뉴스를 참조하세요.

<!-- tip end -->

이 섹션에서는 다음 단계에서 [LIFF 스타터 앱을 체험](https://developers.line.biz/en/docs/liff/trying-liff-app/)하려는 것을 가정하고 LINE Login 채널을 만드는 방법을 설명합니다. LINE Login 채널을 추가할 프로바이더를 클릭하고 채널을 만드세요. 이미 사용할 LINE Login 채널이 있다면 그 채널을 선택하세요. 채널을 만드는 방법에 대한 자세한 내용은 [채널 만들기](https://developers.line.biz/en/docs/line-developers-console/overview/#creating-a-channel)를 참조하세요.

<!-- note start -->

**채널 이름 제한**

채널 이름에는 "LINE" 또는 이와 유사한 문자열을 포함할 수 없습니다.

<!-- note end -->

<!-- note start -->

**채널의 App types에 대하여**

LIFF 앱을 개발할 때는 App types에서 **Web app**을 선택하세요.

<!-- note end -->

<!-- note start -->

**LINE Login 및 LINE MINI App 이외의 채널에는 LIFF 앱을 추가할 수 없습니다**

다음 채널 유형에는 LIFF 앱을 추가할 수 없습니다.

- Messaging API
- Blockchain Service

이전에는 Messaging API 채널이나 Blockchain Service 채널에 LIFF 앱을 추가할 수 있었습니다. 그러나 Messaging API 채널과 Blockchain Service 채널에 이미 추가된 LIFF 앱은 새로운 LIFF 기능을 사용할 수 없습니다. 자세한 내용은 다음 뉴스를 참조하세요.

- 2020년 2월 5일 뉴스, [Messaging API 채널에는 더 이상 LIFF 앱을 추가할 수 없습니다](https://developers.line.biz/en/news/2020/02/05/liff-channel-type/)
- 2021년 7월 20일 뉴스, [Blockchain Service 채널에는 더 이상 LIFF 앱을 추가할 수 없습니다](https://developers.line.biz/en/news/2021/07/20/liff-cannot-be-used-with-blockchain-service-channels/)

<!-- note end -->

#### 채널과 프로바이더 연결 시 주의 사항 

채널을 만든 후에는 나중에 다른 프로바이더로 채널을 옮길 수 없습니다.

LINE Login 채널과 Messaging API 채널을 연결하는 서비스를 개발하는 경우 두 채널을 같은 프로바이더 안에서 만드세요.

개발자가 제공하는 서비스를 이용하는 LINE 사용자에게는 프로바이더마다 서로 다른 사용자 ID가 부여됩니다. 사용자 ID로는 서로 다른 프로바이더의 채널에서 같은 사용자를 식별할 수 없습니다.

![](https://developers.line.biz/media/line-developers-console/different-user-ids.png)

<!-- warning start -->

**채널을 만들 때 특별한 주의가 필요한 경우**

예를 들어 다음과 같은 경우에는 특별한 주의가 필요합니다.

- 채널과 프로바이더를 개인 또는 회사가 관리하는 경우
- 관련 없는 서비스나 회사의 채널을 하나의 프로바이더 아래에 만드는 경우
- 채널 관리 도구 등을 운영하는 서비스(회사)가 관리하는 프로바이더 아래에 채널을 만드는 경우

이러한 경우 나중에 프로바이더 간에 채널을 옮길 수 없고, 프로바이더마다 사용자에게 다른 사용자 ID가 부여되기 때문에 향후 문제가 생길 수 있습니다. 위험을 충분히 검토한 후 적절한 프로바이더 아래에 채널을 만드세요.

<!-- warning end -->

## 다음 단계 

LIFF 앱을 위한 채널을 만들었습니다. 다음으로 다음 중 하나를 진행하세요.

- [LIFF 스타터 앱 체험하기](https://developers.line.biz/en/docs/liff/trying-liff-app/)
- [LIFF 앱 개발하기](https://developers.line.biz/en/docs/liff/developing-liff-apps/)
