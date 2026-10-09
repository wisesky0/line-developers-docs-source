# 운영 중인 웹 앱을 LINE MINI App으로 구현하기

운영 중인 웹 앱을 LINE MINI App으로 구현하려고 하지만 방법을 잘 모를 수 있습니다. 이 페이지에서는 LINE MINI App의 개요와 웹 앱을 LINE MINI App으로 구현하는 데 필요한 지식과 절차를 안내합니다. 이 페이지를 읽으면 웹 앱을 LINE MINI App으로 구현하는 데 필요한 전체 과정을 파악할 수 있습니다.

<!-- table of contents -->

## LINE MINI App이란 

LINE MINI App은 LINE 앱 안에서 사용할 수 있는 웹 앱으로, [LIFF(LINE Front-end Framework)](https://developers.line.biz/en/docs/liff/overview/)를 사용하여 구현됩니다. LIFF 기능을 사용하면 앱에서 LINE 사용자에게 원활한 로그인 경험을 제공하고 사용자 프로필을 가져올 수 있습니다.

또한 [서비스 메시지](https://developers.line.biz/en/docs/line-mini-app/develop/service-messages/) 기능을 사용하면, LINE MINI App에서 사용자의 행동에 대응하여 사용자에게 알림을 보낼 수 있습니다. 거의 모든 HTML5 사양도 지원됩니다. 예를 들어 [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)를 사용하여 사용자의 위치 정보를 가져올 수 있습니다.

![](https://developers.line.biz/media/line-mini-app/develop/product-image.webp)

앞에서 설명한 것처럼 웹 앱을 LINE MINI App으로 구현하면, 불편한 로그인이나 프로필 입력 때문에 사용자가 앱을 떠나는 것을 방지할 수 있습니다. 또한 LINE 앱에서 바로 LINE MINI App을 시작할 수 있고 모든 작업을 LINE 앱 안에서 수행할 수 있으므로 사용자 경험을 개선할 수 있습니다.

<!-- tip start -->

**LINE MINI App과 네이티브 앱 비교**

네이티브 앱에 비해 LINE MINI App의 장점에 대한 자세한 내용은 [네이티브 앱과 LINE MINI App의 차이](https://developers.line.biz/en/docs/line-mini-app/discover/native-mini/)를 참고하세요.

<!-- tip end -->

## 요구 사항 

운영 중인 웹 앱을 LINE MINI App으로 구현하려면 어떤 요구 사항이 있을까요? 먼저 웹 앱을 LINE MINI App으로 구현하기 위한 요구 사항을 설명하겠습니다.

웹 앱을 LINE MINI App으로 구현하려면 다음이 필요합니다.

- 웹 앱을 개발하고 게시하는 데 필요한 지식과 기술
- Business ID

LINE MINI App은 LINE 앱에서 실행되는 웹 앱입니다. 따라서 운영 중인 웹 앱을 개발할 때 사용한 지식과 기술을 그대로 활용할 수 있습니다. 예를 들어 HTML, CSS, JavaScript에 대한 지식과 텍스트 편집기 같은 개발 환경이 유용합니다. 또한 웹 앱을 게시하려면 여전히 웹 서버가 필요합니다.

그리고 LINE MINI App을 개발할 때는 [LINE Developers Console](https://developers.line.biz/console/)을 사용합니다. 따라서 LINE Developers Console에 필요한 Business ID가 필요합니다. Business ID에 대한 자세한 내용은 LINE Developers Console 문서의 [LINE Developers Console에 로그인하기](https://developers.line.biz/en/docs/line-developers-console/login-account/)를 참고하세요.

## 웹 앱을 LINE MINI App으로 구현하는 절차 

이제 웹 앱을 LINE MINI App으로 구현하는 구체적인 단계를 설명하겠습니다. 여기서는 사용자 정보를 처리하는 운영 중인 웹 앱을 LINE 계정과 연결하는 예시를 살펴보겠습니다.

1. LINE MINI App 채널 만들기
1. 웹 앱 쪽에서 LIFF SDK 로드하기
1. LIFF 앱 초기화하기
1. 필요한 기능 구현하기
1. LINE MINI App 채널 설정하기
1. LINE MINI App 심사 요청하기

각 단계는 아래에서 설명합니다.

### 1. LINE MINI App 채널 만들기 

사용자에게 LINE MINI App을 게시하려면 LINE MINI App 채널이라는 [채널](https://developers.line.biz/en/glossary/#channel)이 필요합니다. 먼저 [LINE Developers Console](https://developers.line.biz/console/)에 로그인하여 LINE MINI App 채널을 만드세요. LINE MINI App 채널을 만드는 방법은 [LINE MINI App용 LINE Developers Console 가이드](https://developers.line.biz/en/docs/line-mini-app/discover/console-guide/)를 참고하세요.

### 2. 웹 앱 쪽에서 LIFF SDK 로드하기 

LINE MINI App은 [LIFF(LINE Front-end Framework)](https://developers.line.biz/en/docs/liff/overview/)를 사용하는 LIFF 앱으로 실행됩니다. 따라서 먼저 웹 앱 쪽에서 LIFF SDK를 로드해야 합니다.

LIFF SDK를 로드하는 방법은 CDN을 사용하거나 npm 패키지를 사용하는 두 가지가 있습니다. 예를 들어 CDN에서 LIFF SDK를 로드하려면 다음 코드를 작성합니다.

```html
<script charset="utf-8" src="https://static.line-scdn.net/liff/edge/2/sdk.js"></script>
```

LIFF SDK를 로드하는 방법에 대한 자세한 내용은 LIFF 문서의 [LIFF 앱에 LIFF SDK 통합하기](https://developers.line.biz/en/docs/liff/developing-liff-apps/#integrating-sdk)를 참고하세요.

### 3. LIFF 앱 초기화하기 

LIFF SDK를 사용하려면 `liff.init()` 메서드를 실행하여 LIFF 앱을 초기화해야 합니다. 이때 1단계에서 만든 LINE MINI App 채널에서 확인할 수 있는 LIFF ID를 지정하세요. LIFF ID를 확인하는 방법은 [LIFF ID 확인 및 엔드포인트 URL 설정](https://developers.line.biz/en/docs/line-mini-app/discover/console-guide/#confirm-liff-id-and-set-endpoint-url)을 참고하세요.

`liff.init()`으로 LIFF 앱을 초기화하려면 다음 코드를 구현하세요.

```javascript
liff
  .init({
    liffId: "123456-abcdefg", // Specify LIFF ID
  })
  .then(() => {
    // Use the LIFF API
  })
  .catch((err) => {
    // When an error occurs during initialization
    console.log(err.code, err.message);
  });
```

### 4. 필요한 기능 구현하기 

이제 기능을 구현할 준비가 되었습니다. 다음 단계는 필요한 기능을 구현하는 것입니다. LINE MINI App에서는 다음 기능과 사양을 사용할 수 있습니다.

- LIFF API
- 서비스 메시지
- HTML5 사양

각각에 대해서는 아래에서 설명합니다.

#### LIFF API 

LIFF 앱을 초기화했다면, LIFF API를 사용하여 필요한 기능을 구현할 수 있습니다. LIFF API로 사용자 로그인을 처리하고 사용자 프로필을 가져올 수 있습니다. 예를 들어 사용자 ID를 가져오려면 먼저 `liff.getIDToken()`으로 ID 토큰을 가져오세요.

```javascript
const idToken = liff.getIDToken();
```

이 `idToken`을 서버 쪽으로 보내면, [ID 토큰 검증](https://developers.line.biz/en/reference/line-login/#verify-id-token) 엔드포인트로 검증하여 사용자 ID를 얻을 수 있습니다. 예를 들어 얻은 사용자 ID를 운영 중인 웹 앱의 회원 정보와 연결하면, 사용자에게 최적화된 메시지를 전달할 수 있습니다.

LIFF API에 대한 자세한 내용은 LIFF 문서의 [LIFF API 호출하기](https://developers.line.biz/en/docs/liff/developing-liff-apps/#calling-liff-api)를 참고하세요.

#### 서비스 메시지 

LINE MINI App에는 서비스 메시지라는 기능이 있습니다. 서비스 메시지를 사용하면 LINE MINI App에서 사용자의 행동에 대응하여 사용자에게 알림을 보낼 수 있습니다. 서비스 메시지에 대한 자세한 내용은 [서비스 메시지 보내기](https://developers.line.biz/en/docs/line-mini-app/develop/service-messages/)를 참고하세요.

#### HTML5 사양 

LINE MINI App은 거의 모든 HTML5 사양을 지원합니다. 예를 들어 [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)를 사용하여 사용자의 위치 정보를 가져올 수 있습니다. 자세한 내용은 [LINE MINI App 사양](https://developers.line.biz/en/docs/line-mini-app/discover/specifications/)을 참고하세요.

### 5. LINE MINI App 채널 설정하기 

웹 앱이 LIFF 앱으로 운영되고 있다면, 다음 단계는 LINE MINI App으로 동작하도록 설정하는 것입니다. 이를 위해 웹 앱의 URL(예: `https://example.com`)을 1단계에서 만든 LINE MINI App 채널의 엔드포인트 URL로 설정해야 합니다. 엔드포인트 URL 설정에 대한 자세한 내용은 [LIFF ID 확인 및 엔드포인트 URL 설정](https://developers.line.biz/en/docs/line-mini-app/discover/console-guide/#confirm-liff-id-and-set-endpoint-url)을 참고하세요.

### 6. LINE MINI App 심사 요청하기 

위의 단계를 모두 마쳤다면, 게시된 채널의 LIFF URL을 사용자에게 공유하여 사용자가 LINE MINI App을 이용할 수 있도록 하세요. LINE MINI App은 [인증되지 않은 MINI App](https://developers.line.biz/en/glossary/#unverified-mini-app) 또는 [인증된 MINI App](https://developers.line.biz/en/glossary/#verified-mini-app)으로 게시할 수 있습니다.

LINE MINI App을 인증된 MINI App으로 게시하려면 LY Corporation의 심사를 통과해야 합니다. 심사 절차에 대한 자세한 내용은 [LINE MINI App 제출하기](https://developers.line.biz/en/docs/line-mini-app/submit/submission-guide/)를 참고하세요.

## 다음 단계 

LINE MINI App을 개발할 때는 [LINE MINI App 개발 가이드라인](https://developers.line.biz/en/docs/line-mini-app/development-guidelines/)을 참고하세요. 이 가이드라인에는 LINE 플랫폼에 요청을 보낼 때 고려할 사항과 로그 저장에 관한 내용이 포함되어 있습니다.

또한 [커스텀 기능](https://developers.line.biz/en/docs/line-mini-app/discover/custom-features/) 섹션에서는 사용자 경험을 더 개선할 수 있는 기능을 설명합니다. 예를 들어 사용자 기기의 홈 화면에 LINE MINI App의 바로가기를 추가하는 기능이 있습니다.
