# LIFF 앱 개발하기

LIFF 앱은 HTML과 JavaScript를 기반으로 한 웹 앱입니다. 여기서는 LIFF 앱을 개발하는 과정과 LIFF 앱 구축에 특화된 과정을 설명합니다.

<!-- table of contents -->

## LIFF 앱의 제목 설정하기 

LIFF 앱의 제목은 LIFF 앱의 헤더에 표시됩니다. LIFF 앱의 HTML 소스에 있는 `<title>` 요소에 LIFF 앱의 이름을 지정하세요.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The title</title>
```

## LIFF 앱에 LIFF SDK 통합하기 

다음 방법으로 LIFF 앱에 LIFF SDK를 포함할 수 있습니다.

- [CDN 경로 지정하기](https://developers.line.biz/en/docs/liff/developing-liff-apps/#specify-cdn-path)
- [npm 패키지 사용하기](https://developers.line.biz/en/docs/liff/developing-liff-apps/#use-npm-package)

### CDN 경로 지정하기 

LIFF SDK의 기능을 사용하려면 LIFF 앱의 HTML 소스에 있는 `<script>` 요소의 `src` 속성에 LIFF SDK의 URL을 지정하세요. LIFF에는 다음 두 가지 유형의 CDN 경로가 준비되어 있습니다. 목적에 맞는 CDN 경로를 지정하세요.

| CDN 경로 | 설명 |
| --- | --- |
| CDN 에지 경로(CDN edge path) | MAJOR 버전까지만 포함하는 CDN 경로입니다. 항상 최신 LIFF 기능을 사용하려는 경우 이 CDN 경로를 사용하세요. 새로운 MAJOR 버전이 출시될 때만 URL을 업데이트하면 됩니다.<br>예: https://static.line-scdn.net/liff/edge/**2**/sdk.js |
| CDN 고정 경로(CDN fixed path) | PATCH 버전까지 포함하는 CDN 경로입니다. 특정 버전의 LIFF 기능을 사용하려는 경우 이 CDN 경로를 사용하세요. LIFF 앱을 업데이트하지 않는 한 지정한 PATCH 버전을 계속 사용할 수 있습니다. 새로운 기능, 보안 업데이트, 버그 수정을 적용하고 싶을 때만 URL을 업데이트하세요. 자동으로 업데이트되지 않으며 LIFF SDK 업데이트의 영향을 받지 않습니다.<br>예: https://static.line-scdn.net/liff/edge/**versions/2.31.1**/sdk.js |

<!-- note start -->

**어떤 버전을 사용해야 하나요?**

CDN 고정 경로를 사용하는 개발자는 LIFF 앱을 언제 업데이트할지 결정해야 합니다. LIFF 문서의 [릴리스 노트](https://developers.line.biz/en/docs/liff/release-notes/)를 자주 확인하여 각 업데이트를 평가하고 해당 업데이트가 적합한지 결정할 수 있습니다.

<!-- note end -->

CDN 고정 경로를 지정하는 예시는 다음과 같습니다.

```html
<script charset="utf-8" src="https://static.line-scdn.net/liff/edge/versions/2.31.1/sdk.js"></script>
```

<!-- note start -->

**LIFF SDK는 UTF-8로 작성되어 있습니다**

LIFF SDK는 UTF-8로 작성되어 있으므로 HTML 소스가 UTF-8이 아닌 다른 문자 인코딩을 사용하는 경우 `charset="utf-8"`도 반드시 지정하세요.

<!-- note end -->

### npm 패키지 사용하기 

LIFF SDK는 npm 패키지로 제공됩니다. npm을 사용하여 LIFF SDK를 설치할 수 있습니다.

<!-- note start -->

**SDK 버전 관리**

적절한 SDK 버전을 사용하는 것은 개발자의 책임입니다. SDK 버전을 최신 상태로 유지하려면 [LIFF 릴리스 노트](https://developers.line.biz/en/docs/liff/release-notes/)를 정기적으로 확인하고 로컬 SDK를 자주 업데이트하세요. LIFF의 버전 관리 정책에 대한 자세한 내용은 [LIFF SDK(sdk.js) 업데이트 정책](https://developers.line.biz/en/docs/liff/versioning-policy/#update-policy)을 참조하세요.

<!-- note end -->

<!-- note start -->

**webpack v5를 사용하는 프로젝트에서 LIFF v2.16.0 이하의 npm 버전을 사용하면 빌드 중에 오류가 발생합니다**

[webpack v5에서는 Node.js 폴리필이 제거되었습니다](https://webpack.js.org/blog/2020-10-10-webpack-5-release/#automatic-nodejs-polyfills-removed). 따라서 webpack v5를 사용하는 프로젝트에서 LIFF v2.16.0 이하의 npm 버전을 사용하면 빌드 오류가 발생합니다. 자세한 내용은 2021년 10월 26일 뉴스 [LIFF v2.16.1 출시](https://developers.line.biz/en/news/2021/10/26/release-liff-2-16-1/)를 참조하세요.

<!-- note end -->

npm으로 LIFF SDK를 설치하고 앱으로 가져오려면 다음 단계를 따르세요.

1. 터미널에서 다음 명령을 실행하여 npm으로 LIFF SDK를 설치합니다.

   ```bash
   $ npm install --save @line/liff
   ```

   또는 터미널에서 다음 명령을 실행하여 Yarn으로 LIFF SDK를 설치할 수도 있습니다.

   ```bash
   $ yarn add @line/liff
   ```

1. 앱에 SDK를 가져옵니다.

   JavaScript 또는 TypeScript 파일에 다음 코드를 포함하세요.

   ```js
   import liff from "@line/liff";

   liff.init({
     liffId: "1234567890-AbcdEfgh", // 자신의 liffId를 사용하세요
   });
   ```

   TypeScript용 타입 정의는 `@line/liff` 패키지에 이미 포함되어 있습니다.

   <!-- note start -->

   **window.liff를 선언하거나 수정하지 마세요**

   하위 호환성을 위해 전역 LIFF 인스턴스인 `window.liff`를 선언하거나 수정하지 마세요. window.liff를 선언하거나 수정하면 LINE 앱이 오작동할 수 있습니다.

   <!-- note end -->

관련 페이지: [https://www.npmjs.com/package/@line/liff](https://www.npmjs.com/package/@line/liff)

<!-- tip start -->

**LIFF SDK 파일 크기 줄이기**

플러거블 SDK를 사용하면 LIFF SDK 파일 크기를 줄일 수 있습니다. 자세한 내용은 [플러거블 SDK](https://developers.line.biz/en/docs/liff/pluggable-sdk/)를 참조하세요.

<!-- tip end -->

## LIFF 앱 초기화하기 

[`liff.init()`](https://developers.line.biz/en/reference/liff/#initialize-liff-app) 메서드는 LIFF 앱을 초기화하고, LIFF 앱에서 LIFF SDK의 다른 메서드를 호출할 수 있게 합니다.

LIFF 앱은 페이지를 열 때마다 초기화해야 합니다. 같은 LIFF 앱 안에서 전환하는 경우에도 새 페이지를 열 때는 `liff.init()` 메서드를 실행해야 합니다.

LIFF 앱을 제대로 초기화하지 않고 LIFF 기능을 사용하면 해당 기능이 동작한다고 보장할 수 없습니다.

사용자가 LINE 앱에서 [LIFF URL](https://developers.line.biz/en/glossary/#liff-url)에 접속하고 LIFF 앱이 초기화되기까지의 과정은 다음과 같습니다.

![Interactive SVG](https://developers.line.biz/media/liff/initializing-liff-app-flow-liff-browser-en.svg)

자세한 내용은 [LIFF URL에 접속하여 LIFF 앱을 열기까지의 동작](https://developers.line.biz/en/docs/liff/opening-liff-app/#redirect-flow)을 참조하세요.

<!-- note start -->

**LIFF 앱의 쿼리 파라미터**

LIFF URL에 접속하거나 LIFF 간 전환을 수행하면 URL에 다음 쿼리 파라미터가 추가될 수 있습니다.

- `liff.state`: LIFF URL에 지정된 추가 정보를 나타냅니다.
- `liff.referrer`: LIFF 간 전환 이전의 URL을 나타냅니다. 자세한 내용은 [LIFF 간 전환 이전의 URL 가져오기](https://developers.line.biz/en/docs/liff/opening-liff-app/#using-liff-referrer)를 참조하세요.
- `lineAppVersion`: LINE for Android에서 LIFF 앱을 열 때 포함될 수 있습니다.

위 쿼리 파라미터는 LIFF 앱이 제대로 동작하도록 LIFF SDK가 추가하는 것입니다. LIFF 앱의 URL에 대해 사용자 정의 처리를 하는 경우 LIFF 앱이 제대로 동작하도록 `liff.init()` 메서드가 완료될 때까지 LIFF SDK가 제공하는 쿼리 파라미터를 수정하지 마세요. 이는 LIFF 앱을 열거나 LIFF 간 전환을 할 때 특히 중요합니다.

그 밖의 `liff.*` 쿼리 파라미터도 추가될 수 있습니다. 따라서 LIFF URL에 접속하거나 LIFF 간 전환을 할 때 추가된 `liff.*` 쿼리 파라미터를 수정하지 않도록 앱을 설계하세요.

<!-- note end -->

<!-- tip start -->

**LIFF 앱 초기화 전에도 실행할 수 있는 기능**

다음 속성이나 메서드는 `liff.init()` 메서드를 실행하기 전에도 사용할 수 있습니다. 예를 들어 LIFF 앱을 초기화하기 전에 LIFF 앱이 실행 중인 환경을 가져올 수 있습니다.

- [liff.ready](https://developers.line.biz/en/reference/liff/#ready)
- [liff.getOS()](https://developers.line.biz/en/reference/liff/#get-os)
- [liff.getAppLanguage()](https://developers.line.biz/en/reference/liff/#get-app-language)
- [liff.getLanguage()](https://developers.line.biz/en/reference/liff/#get-language) (지원 종료)
- [liff.getVersion()](https://developers.line.biz/en/reference/liff/#get-version)
- [liff.getLineVersion()](https://developers.line.biz/en/reference/liff/#get-line-version)
- [liff.isInClient()](https://developers.line.biz/en/reference/liff/#is-in-client)
- [liff.closeWindow()](https://developers.line.biz/en/reference/liff/#close-window)
- [liff.use()](https://developers.line.biz/en/reference/liff/#use)
- [liff.i18n.setLang()](https://developers.line.biz/en/reference/liff/#i18n-set-lang)

`liff.init()`으로 LIFF 앱의 초기화가 끝나기 전에 `liff.closeWindow()` 메서드를 사용하려면 LIFF SDK 버전이 v2.4.0 이상이어야 합니다.

<!-- tip end -->

<!-- tip start -->

**외부 브라우저에서 LIFF 앱을 초기화할 때 liff.login() 메서드를 자동으로 실행하도록 설정하기**

`liff.init()` 메서드의 `config` 객체에 있는 `withLoginOnExternalBrowser` 속성에 `true`를 지정하면 외부 브라우저에서 LIFF 앱을 초기화할 때 `liff.login()` 메서드를 자동으로 실행할 수 있습니다.

```js
liff
  .init({
    liffId: "1234567890-AbcdEfgh", // 자신의 liffId를 사용하세요
    withLoginOnExternalBrowser: true, // 자동 로그인 과정을 활성화합니다
  })
  .then(() => {
    // liff의 API 사용을 시작합니다
  });
```

<!-- tip end -->

`liffId`에는 지정된 LIFF 앱의 ID가 필요합니다. 이 ID는 채널에 LIFF 앱을 추가하면 얻을 수 있습니다. 자세한 내용은 [채널에 LIFF 앱 추가하기](https://developers.line.biz/en/docs/liff/registering-liff-apps/)를 참조하세요.

```javascript
liff
  .init({
    liffId: "1234567890-AbcdEfgh", // 자신의 liffId를 사용하세요
  })
  .then(() => {
    // LIFF의 API 사용을 시작합니다
  })
  .catch((err) => {
    console.log(err);
  });
```

또한 `liff.ready`를 사용하면 LIFF 앱을 시작한 후 `liff.init()`을 처음 실행할 때 완료되는 `Promise` 객체를 가져올 수 있습니다.

자세한 내용은 LIFF API 레퍼런스의 [liff.init()](https://developers.line.biz/en/reference/liff/#initialize-liff-app) 및 [liff.ready](https://developers.line.biz/en/reference/liff/#ready) 섹션을 참조하세요.

### LIFF 앱을 초기화할 때 고려해야 할 중요 사항 

LIFF 앱을 초기화할 때 고려해야 할 중요 사항은 다음과 같습니다. LIFF 앱 개발을 시작하기 전에 이 사항들을 읽고 이해하세요.

- [엔드포인트 URL 또는 그보다 하위 레벨에서 `liff.init()` 실행하기](https://developers.line.biz/en/docs/liff/developing-liff-apps/#initializing-liff-app-notes-1)
- [기본 리디렉션 URL과 보조 리디렉션 URL에서 각각 한 번씩 `liff.init()` 실행하기](https://developers.line.biz/en/docs/liff/developing-liff-apps/#initializing-liff-app-notes-2)
- [`liff.init()`이 완료된 후 URL 변경 처리하기](https://developers.line.biz/en/docs/liff/developing-liff-apps/#initializing-liff-app-notes-3)
- [기본 리디렉션 URL 처리 시 주의하기](https://developers.line.biz/en/docs/liff/developing-liff-apps/#initializing-liff-app-notes-4)

#### 엔드포인트 URL 또는 그보다 하위 레벨에서 `liff.init()` 실행하기 

`liff.init()` 메서드는 엔드포인트 URL과 정확히 같은 URL이거나 엔드포인트 URL보다 하위 레벨인 URL에서만 동작합니다. LIFF 앱이 이 두 경우 이외의 URL로 전환되면 `liff.init()` 메서드가 동작한다고 보장할 수 없습니다.

다음 예시는 엔드포인트 URL이 `https://example.com/path1/`일 때 `liff.init()` 메서드를 실행하는 URL별로 동작이 보장되는지를 보여 줍니다. [멀티 탭 뷰](https://developers.line.biz/en/docs/liff/overview/#multi-tab-view) 같은 일부 LIFF 앱 기능은 동작이 보장되지 않는 URL에서 제대로 동작하지 않을 수 있습니다.

| `liff.init()`을 실행하는 URL          | 동작 보장 여부 |
| ------------------------------------- | -------------- |
| `https://example.com/`                | ❌             |
| `https://example.com/path1/`          | ✅             |
| `https://example.com/path1/language/` | ✅             |
| `https://example.com/path2/`          | ❌             |

<!-- note start -->

**liff.init() 메서드를 실행할 때 콘솔에 "liff.init() was called with a current URL that is not related to the endpoint URL." 경고 메시지가 나타납니다**

LIFF v2.27.2 이상에서는 동작이 보장되지 않는 URL에서 `liff.init()` 메서드를 실행하면 경고 메시지가 나타납니다.

예를 들어 LIFF 앱의 엔드포인트 URL이 `https://example.com/path1/path2/`이고 `liff.init()` 메서드를 실행하는 URL이 `https://example.com/path1/`이면 다음 경고 메시지가 나타납니다.

```
liff.init() was called with a current URL that is not related to the endpoint URL.
https://example.com/path1/ is not under https://example.com/path1/path2/
```

위 경고 메시지가 나타나면 엔드포인트 URL을 `https://example.com/` 또는 `https://example.com/path1/`로 변경하는 것을 고려하세요. 이 URL로 변경하면 `liff.init()` 메서드가 올바르게 동작하는 것이 보장됩니다.

<!-- note end -->

#### 기본 리디렉션 URL과 보조 리디렉션 URL에서 각각 한 번씩 `liff.init()` 실행하기 

`liff.init()` 메서드는 기본 리디렉션 URL에 주어진 `liff.state`나 `access_token=xxx` 같은 정보를 기반으로 초기화 처리를 수행합니다. 엔드포인트 URL에 쿼리 파라미터나 경로가 포함되어 있다면 LIFF 앱을 올바르게 초기화하기 위해 기본 리디렉션 URL과 보조 리디렉션 URL에서 각각 한 번씩 `liff.init()` 메서드를 실행하세요. 자세한 내용은 [LIFF URL에 접속하여 LIFF 앱을 열기까지의 동작](https://developers.line.biz/en/docs/liff/opening-liff-app/#redirect-flow)을 참조하세요.

#### `liff.init()`이 완료된 후 URL 변경 처리하기 

URL을 변경하는 처리는 `liff.init()` 메서드가 반환한 `Promise` 객체가 완료(resolve)된 후에 실행하세요.

```javascript
// window.location.replace()를 사용하는 예시
liff
  .init({
    liffId: "1234567890-AbcdEfgh", // 자신의 liffId를 사용하세요
  })
  .then(() => {
    // 반환된 Promise 객체가 완료된 후 다른 페이지로 리디렉션합니다
    window.location.replace(location.href + "/entry/");
  });
```

`Promise` 객체가 완료되기 전에 다음 URL 조작 중 하나라도 실행하면 LIFF 앱이 제대로 열리지 않을 수 있습니다.

- [`Document.location`](https://developer.mozilla.org/en-US/docs/Web/API/Document/location) 속성 또는 [`Window.location`](https://developer.mozilla.org/en-US/docs/Web/API/Window/location) 속성으로 URL을 변경하는 경우
- [History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API)의 [`history.pushState()`](https://developer.mozilla.org/en-US/docs/Web/API/History/pushState) 메서드 또는 [`history.replaceState()`](https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState) 메서드로 URL을 변경하는 경우
- 서버 측에서 상태 코드 `301` 또는 `302`를 반환하여 다른 URL로 리디렉션하는 경우

#### 기본 리디렉션 URL 처리 시 주의하기 

기본 리디렉션 URL에 자동으로 부여되는 `access_token=xxx`는 사용자의 액세스 토큰(기밀 정보)입니다. 기본 리디렉션 URL을 Google Analytics 같은 외부 로깅 도구로 보내지 마세요.

참고로 LIFF v2.11.0 이상에서는 `liff.init()` 메서드가 완료될 때 URL에서 인증 정보가 제외됩니다. 따라서 아래와 같이 `then()` 메서드에서 페이지뷰를 보내면 인증 정보가 유출되는 것을 방지할 수 있습니다. 로깅 도구를 사용하려면 LIFF 앱을 v2.11.0 이상으로 업그레이드하는 것을 권장합니다. LIFF v2.11.0의 업데이트에 대한 자세한 내용은 [릴리스 노트](https://developers.line.biz/en/docs/liff/release-notes/#liff-v2-11-0)를 참조하세요.

```javascript
liff
  .init({
    liffId: "1234567890-AbcdEfgh", // 자신의 liffId를 사용하세요
  })
  .then(() => {
    ga("send", "pageview");
  });
```

### 외부 브라우저에서 LINE 로그인 사용하기 

외부 브라우저에서 LINE 로그인을 사용하려면 아래와 같이 `liff.init()` 메서드를 두 번 호출하세요.

1. LIFF SDK를 로드한 후 `liff.init()` 메서드를 호출합니다.
1. `liff.login()` 메서드를 호출합니다. 인증 페이지와 권한 승인 화면의 처리가 끝나면 LIFF 앱(`redirectUri`)으로 리디렉션됩니다. 이때 `liff.init()` 메서드를 다시 호출합니다.

   `liff.init()` 메서드 처리 중 오류가 발생하거나 로그인 중에 사용자가 권한 승인을 취소하면 `errorCallback`이 실행됩니다.

![Flow diagram](https://developers.line.biz/media/liff/initializing-liff-app-flow.webp)

<!-- note start -->

**LIFF 브라우저 내의 권한 요청**

LIFF 브라우저 내에서 LINE 로그인 권한 요청의 동작은 보장되지 않습니다. 또한 외부 브라우저나 LINE의 인앱 브라우저에서 LIFF 앱을 열 때는 로그인 처리에 [LINE 로그인으로 권한 요청하기](https://developers.line.biz/en/docs/line-login/integrate-line-login/#making-an-authorization-request)가 아니라 [`liff.login()`](https://developers.line.biz/en/reference/liff/#login) 메서드를 사용하세요.

<!-- note end -->

## LIFF API 호출하기 

LIFF SDK를 통합하고 LIFF를 초기화한 후에는 다음 작업을 할 수 있습니다.

- [LIFF 앱이 실행 중인 환경 가져오기](https://developers.line.biz/en/docs/liff/developing-liff-apps/#getting-environment)
- [로그인 처리 수행하기](https://developers.line.biz/en/docs/liff/developing-liff-apps/#login-with-line-login)
- [URL 열기](https://developers.line.biz/en/docs/liff/developing-liff-apps/#opening-url)
- [2D 코드 리더 열기](https://developers.line.biz/en/docs/liff/developing-liff-apps/#opening-two-dimensional-code-reader)
- [LIFF 앱이 실행된 화면 유형 가져오기](https://developers.line.biz/en/docs/liff/developing-liff-apps/#getting-context)
- [사용자 프로필 가져오기](https://developers.line.biz/en/docs/liff/developing-liff-apps/#getting-user-profile)
- [사용자와 LINE 공식 계정 간의 친구 관계 상태 가져오기](https://developers.line.biz/en/docs/liff/developing-liff-apps/#get-friendship-status)
- [현재 페이지의 영구 링크 가져오기](https://developers.line.biz/en/docs/liff/developing-liff-apps/#get-permanent-link)
- [현재 채팅방에 메시지 보내기](https://developers.line.biz/en/docs/liff/developing-liff-apps/#sending-messages)
- [사용자의 친구에게 메시지 보내기(share target picker)](https://developers.line.biz/en/docs/liff/developing-liff-apps/#share-target-picker)
- [LIFF 앱 닫기](https://developers.line.biz/en/docs/liff/developing-liff-apps/#closing-liff-app)

### LIFF 앱이 실행 중인 환경 가져오기 

LIFF 앱이 실행 중인 환경을 가져오려면 `liff.isInClient()` 메서드와 `liff.getOS()` 메서드를 호출하세요.

```javascript
// LIFF 앱이 실행 중인 환경을 출력합니다
console.log(liff.getAppLanguage());
console.log(liff.getVersion());
console.log(liff.isInClient());
console.log(liff.isLoggedIn());
console.log(liff.getOS());
console.log(liff.getLineVersion());
```

자세한 내용은 LIFF API 레퍼런스의 각 메서드를 참조하세요.

- [liff.getAppLanguage()](https://developers.line.biz/en/reference/liff/#get-app-language)
- [liff.getVersion()](https://developers.line.biz/en/reference/liff/#get-version)
- [liff.isInClient()](https://developers.line.biz/en/reference/liff/#is-in-client)
- [liff.isLoggedIn()](https://developers.line.biz/en/reference/liff/#is-logged-in)
- [liff.getOS()](https://developers.line.biz/en/reference/liff/#get-os)
- [liff.getLineVersion()](https://developers.line.biz/en/reference/liff/#get-line-version)

### 로그인 처리 수행하기 

LINE의 [인앱 브라우저](https://developers.line.biz/en/glossary/#line-iab)와 [외부 브라우저](https://developers.line.biz/en/glossary/#external-browser) 모두에서 로그인 처리를 하려면 `liff.login()` 메서드를 호출하세요.

<!-- note start -->

**참고**

`liff.init()`을 실행하면 `liff.login()`이 자동으로 실행되므로 LIFF 브라우저에서는 `liff.login()`을 사용할 수 없습니다.

<!-- note end -->

<!-- tip start -->

**liff.init() 메서드를 실행할 때 withLoginOnExternalBrowser 속성에 true를 지정한 경우**

`liff.init()` 메서드의 `withLoginOnExternalBrowser` 속성에 `true`를 지정하면 외부 브라우저에서도 LIFF 앱을 초기화할 때 `liff.login()` 메서드가 자동으로 실행됩니다. 자세한 내용은 LIFF API 레퍼런스의 [liff.init()](https://developers.line.biz/en/reference/liff/#initialize-liff-app)을 참조하세요.

<!-- tip end -->

```javascript
// 로그인 호출은 외부 브라우저 또는 LINE의 인앱 브라우저를 사용할 때만 합니다
if (!liff.isLoggedIn()) {
  liff.login();
}
```

`liff.logout()` 메서드를 호출하여 로그아웃할 수도 있습니다.

```javascript
// 로그아웃 호출은 외부 브라우저 또는 LINE의 인앱 브라우저를 사용할 때만 합니다
if (liff.isLoggedIn()) {
  liff.logout();
  window.location.reload();
}
```

자세한 내용은 LIFF API 레퍼런스의 [liff.login()](https://developers.line.biz/en/reference/liff/#login) 및 [liff.logout()](https://developers.line.biz/en/reference/liff/#logout)을 참조하세요.

### URL 열기 

`liff.openWindow()` 메서드는 지정한 URL을 LINE의 인앱 브라우저 또는 외부 브라우저에서 엽니다.

다음 코드는 `https://line.me`를 외부 브라우저에서 엽니다.

```javascript
// openWindow 호출
liff.openWindow({
  url: "https://line.me",
  external: true,
});
```

자세한 내용은 LIFF API 레퍼런스의 [liff.openWindow()](https://developers.line.biz/en/reference/liff/#open-window)를 참조하세요.

### 2D 코드 리더 열기 

`liff.scanCodeV2()` 메서드를 호출하면 2D 코드 리더가 실행되고 사용자가 읽은 문자열을 가져올 수 있습니다.

```javascript
// scanCodeV2 호출
liff
  .scanCodeV2()
  .then((result) => {
    // 예: result = { value: 'Hello LIFF app!' }
  })
  .catch((err) => {
    console.log(err);
  });
```

자세한 내용은 LIFF API 레퍼런스의 [liff.scanCodeV2()](https://developers.line.biz/en/reference/liff/#scan-code-v2)를 참조하세요.

<!-- note start -->

**liff.scanCode() 메서드는 지원이 종료되었습니다**

기존의 `liff.scanCode()` 메서드는 [지원이 종료되었습니다](https://developers.line.biz/en/glossary/#deprecated). 2D 코드 리더를 구현할 때는 `liff.scanCodeV2()` 메서드를 사용하는 것을 권장합니다.

<!-- note end -->

<!-- note start -->

**liff.scanCodeV2() 메서드의 동작 환경**

`liff.scanCodeV2()` 메서드는 다음 환경에서 동작합니다.

- iOS: iOS 14.3 이상
- Android: 모든 버전
- 외부 브라우저: [WebRTC API](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API)를 지원하는 웹 브라우저

<table>
  <thead>
    <tr>
      <th>OS</th>
      <th>버전</th>
      <th>LIFF 브라우저</th>
      <th>외부 브라우저</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">iOS</td>
      <td>11~14.2</td>
      <td>❌</td>
      <td>✅ *1</td>
    </tr>
    <tr>
      <td>14.3 이상</td>
      <td>✅ *2</td>
      <td>✅ *1</td>
    </tr>
    <tr>
      <td>Android</td>
      <td>모든 버전</td>
      <td>✅ *2</td>
      <td>✅ *1</td>
    </tr>
    <tr>
      <td>PC</td>
      <td>모든 버전</td>
      <td>❌</td>
      <td>✅ *1</td>
    </tr>
  </tbody>
</table>

\*1 [WebRTC API](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API)를 지원하는 웹 브라우저에서만 사용할 수 있습니다.

\*2 LIFF 브라우저의 화면 크기가 `Full`인 경우에만 사용할 수 있습니다. 자세한 내용은 LIFF 문서의 [LIFF 브라우저의 크기](https://developers.line.biz/en/docs/liff/overview/#screen-size)를 참조하세요.

<!-- note end -->

<!-- note start -->

**2D 코드 리더를 실행하려면 [Scan QR]을 켜세요**

[채널에 LIFF 앱을 추가](https://developers.line.biz/en/docs/liff/registering-liff-apps/)할 때 **Scan QR**을 켜세요. LIFF 앱을 채널에 추가한 후에도 [LINE Developers Console](https://developers.line.biz/console/)의 LIFF 탭에서 **Scan QR** 설정을 변경할 수 있습니다.

<!-- note end -->

### LIFF 앱이 실행된 화면 유형 가져오기 

`liff.getContext()` 메서드를 실행하면 LIFF 앱이 실행된 화면 유형(1:1 채팅, 그룹 채팅, 멀티 채팅 또는 외부 브라우저)을 나타내는 값을 가져올 수 있습니다.

```javascript
const context = liff.getContext();
console.log(context);
// {"type": "utou", "userId": "U70e153189a29f1188b045366285346bc", "viewType": "full", "accessTokenHash": "ArIXhlwQMAZyW7SDHm7L2g", "availability": {"shareTargetPicker": {"permission": true, "minVer": "10.3.0"}, "multipleLiffTransition": {"permission": true, "minVer": "10.18.0"}}}
```

자세한 내용은 LIFF API 레퍼런스의 [liff.getContext()](https://developers.line.biz/en/reference/liff/#get-context)를 참조하세요.

### 사용자 프로필 가져오기 

LIFF 앱에서 ID 토큰을 가져와 사용자 프로필을 얻는 방법은 두 가지가 있습니다. 목적에 맞는 방법을 사용하세요.

- [사용자 데이터를 서버로 보내기](https://developers.line.biz/en/docs/liff/developing-liff-apps/#getting-tokens)
- [LIFF 앱에 사용자 데이터 표시하기](https://developers.line.biz/en/docs/liff/developing-liff-apps/#getting-decoded-id-token)

<!-- note start -->

**스코프 선택하기**

[채널에 LIFF 앱을 추가](https://developers.line.biz/en/docs/liff/registering-liff-apps/)할 때 `openid` 스코프를 선택하세요. 스코프를 선택하지 않았거나 사용자가 권한을 부여하지 않은 경우 ID 토큰을 가져올 수 없습니다. 스코프 선택은 LIFF 앱을 추가한 후에도 [LINE Developers Console](https://developers.line.biz/console/)의 LIFF 탭에서 변경할 수 있습니다.

<!-- note end -->

<!-- tip start -->

**사용자의 이메일 주소를 가져올 수 있습니다**

사용자의 이메일 주소를 가져오려면 [채널에 LIFF 앱을 추가](https://developers.line.biz/en/docs/liff/registering-liff-apps/)할 때 `email` 스코프를 선택하세요. 사용자가 권한을 부여하면 이메일 주소를 가져올 수 있습니다. 스코프 선택은 LIFF 앱을 추가한 후에도 [LINE Developers Console](https://developers.line.biz/console/)의 LIFF 탭에서 변경할 수 있습니다.

<!-- tip end -->

#### 사용자 데이터를 서버로 보내기 

LIFF 앱이 사용자 데이터를 서버로 보내는 경우 이 방법으로 얻은 액세스 토큰이나 ID 토큰을 보냅니다. 자세한 내용은 LIFF 문서의 [LIFF 앱 및 서버에서 사용자 데이터 사용하기](https://developers.line.biz/en/docs/liff/using-user-profile/)를 참조하세요.

- `liff.getAccessToken()` 메서드를 실행하여 현재 사용자의 액세스 토큰을 가져옵니다. 자세한 내용은 LIFF API 레퍼런스의 [liff.getAccessToken()](https://developers.line.biz/en/reference/liff/#get-access-token)을 참조하세요.

  ```javascript
  // 액세스 토큰 가져오기
  if (!liff.isLoggedIn() && !liff.isInClient()) {
    window.alert(
      '액세스 토큰을 가져오려면 로그인되어 있어야 합니다. 아래의 "login" 버튼을 탭한 후 다시 시도하세요.',
    );
  } else {
    const accessToken = liff.getAccessToken();
    console.log(accessToken);
  }
  ```

- `liff.getIDToken()` 메서드를 실행하여 현재 사용자의 원시(raw) ID 토큰을 가져옵니다. 자세한 내용은 LIFF API 레퍼런스의 [liff.getIDToken()](https://developers.line.biz/en/reference/liff/#get-id-token)을 참조하세요.

  ```javascript
  liff.init(() => {
    const idToken = liff.getIDToken();
    console.log(idToken); // 원시 idToken 객체를 출력합니다
  });
  ```

#### LIFF 앱에 사용자 데이터 표시하기 

`liff.getDecodedIDToken()` 메서드를 실행하여 현재 사용자의 프로필 정보와 이메일 주소를 가져옵니다.

LIFF 앱에서 사용자의 표시 이름을 사용하려면 이 API를 사용하세요.

<!-- warning start -->

**사용자 데이터를 서버로 보내지 마세요**

`liff.getDecodedIDToken()`으로 얻은 사용자 데이터를 서버로 보내지 마세요. 대신 [`liff.getIDToken()`](https://developers.line.biz/en/docs/liff/developing-liff-apps/#getting-tokens)으로 얻은 ID 토큰을 보내세요.

<!-- warning end -->

```javascript
liff.init(() => {
  const idToken = liff.getDecodedIDToken();
  console.log(idToken); // 디코딩된 idToken 객체를 출력합니다
});
```

자세한 내용은 LIFF API 레퍼런스의 [liff.getDecodedIDToken()](https://developers.line.biz/en/reference/liff/#get-decoded-id-token)을 참조하세요.

### 사용자와 LINE 공식 계정 간의 친구 관계 상태 가져오기 

LIFF 앱이 추가된 LINE 로그인 채널에 연결된 LINE 공식 계정과 사용자 사이의 친구 관계 상태를 가져옵니다.

로그인 시 LINE 공식 계정을 친구로 추가하는 방법(친구 추가 옵션)에 대해서는 LINE 로그인 문서의 [로그인 시 LINE 공식 계정을 친구로 추가하기(친구 추가 옵션)](https://developers.line.biz/en/docs/line-login/link-a-bot/)를 참조하세요.

```javascript
liff.getFriendship().then((data) => {
  if (data.friendFlag) {
    // 원하는 작업을 수행합니다
  }
});
```

자세한 내용은 LIFF API 레퍼런스의 [liff.getFriendship()](https://developers.line.biz/en/reference/liff/#get-friendship)을 참조하세요.

<!-- note start -->

**스코프 선택하기**

[채널에 LIFF 앱을 추가](https://developers.line.biz/en/docs/liff/registering-liff-apps/)할 때 `profile` 스코프를 선택하세요. 스코프를 선택하지 않았거나 사용자가 권한을 부여하지 않은 경우 친구 관계 상태를 가져올 수 없습니다. 스코프 선택은 LIFF 앱을 추가한 후에도 [LINE Developers Console](https://developers.line.biz/console/)의 LIFF 탭에서 변경할 수 있습니다.

<!-- note end -->

### 사용자에게 LINE 공식 계정을 친구로 추가하거나 차단 해제하도록 요청하기 

사용자에게 LINE 공식 계정을 친구로 추가하거나 차단을 해제하도록 요청하는 하위 창을 표시합니다.

![](https://developers.line.biz/media/liff/request-friendship/request-friendship-add-friend-en.webp)

- 사용자가 LINE 공식 계정을 친구로 추가하지 않은 경우 친구로 추가하도록 요청하는 하위 창이 표시됩니다.
- 사용자가 LINE 공식 계정을 차단한 경우 차단을 해제하도록 요청하는 하위 창이 표시됩니다.
- 사용자가 이미 LINE 공식 계정과 친구인 경우 하위 창이 표시된 후 자동으로 닫힙니다.

```javascript
try {
  await liff.requestFriendship();
} catch (error) {
  console.log(error);
}
```

자세한 내용은 LIFF API 레퍼런스의 [liff.requestFriendship()](https://developers.line.biz/en/reference/liff/#request-friendship)을 참조하세요.

### LIFF 앱의 임의의 페이지에 대한 영구 링크 가져오기 

`liff.permanentLink.createUrlBy()` 메서드를 실행하면 LIFF 앱의 임의의 페이지에 대한 영구 링크를 가져올 수 있습니다.

```javascript
// 예: LIFF 앱의 엔드포인트 URL이 https://example.com/path1?q1=v1이고 LIFF ID가 1234567890-AbcdEfgh인 경우
liff.permanentLink
  .createUrlBy("https://example.com/path1?q1=v1")
  .then((permanentLink) => {
    // https://liff.line.me/1234567890-AbcdEfgh
    console.log(permanentLink);
  });

liff.permanentLink
  .createUrlBy("https://example.com/path1/path2?q1=v1&q2=v2")
  .then((permanentLink) => {
    // https://liff.line.me/1234567890-AbcdEfgh/path2?q=2=v2
    console.log(permanentLink);
  });
```

자세한 내용은 LIFF API 레퍼런스의 [liff.permanentLink.createUrlBy()](https://developers.line.biz/en/reference/liff/#permanent-link-create-url-by)를 참조하세요.

### 현재 채팅방에 메시지 보내기 

`liff.sendMessages()` 메서드는 LIFF 앱이 열린 채팅방에 사용자를 대신하여 메시지를 보냅니다. 한 번의 요청으로 최대 5개의 메시지 객체를 보낼 수 있습니다.

다음 코드는 LIFF 앱이 표시된 채팅방에 사용자의 메시지로 "Hello, World!"를 보냅니다.

```javascript
liff
  .sendMessages([
    {
      type: "text",
      text: "Hello, World!",
    },
  ])
  .then(() => {
    console.log("message sent");
  })
  .catch((err) => {
    console.log("error", err);
  });
```

자세한 내용은 LIFF API 레퍼런스의 [liff.sendMessages()](https://developers.line.biz/en/reference/liff/#send-messages)를 참조하세요.

### 사용자의 친구에게 메시지 보내기(share target picker) 

`liff.shareTargetPicker()` 메서드를 실행하면 대상 선택 화면(수신자를 선택하는 화면)이 표시되고, 개발자가 만든 메시지를 선택한 대상에게 보낼 수 있습니다. 메시지는 각 선택된 수신자에게 사용자가 보낸 것처럼 보입니다.

대상 선택 화면에서 사용자는 그룹, 친구, 채팅에서 수신자를 선택할 수 있습니다. OpenChat은 포함되지 않습니다. 자세한 내용은 [share target picker에서 선택할 수 있는 수신자](https://developers.line.biz/en/docs/liff/developing-liff-apps/#share-target-picker-displayed-targets)를 참조하세요.

![target picker](https://developers.line.biz/media/liff/share-target-picker_tobe_en.png)

#### share target picker 사용하기 

share target picker를 사용하려면 개발자가 아래 안내에 따라 "정보 이용에 관한 동의(Agreement Regarding Use of Information)"에 동의해야 합니다. 이 동의는 채널마다 필요합니다.

1. [LINE Developers Console](https://developers.line.biz/console/)에서 LIFF 앱을 추가할 LINE 로그인 채널을 선택합니다.
1. **LIFF** 탭에서 **shareTargetPicker**를 클릭하면 "정보 이용에 관한 동의(Agreement Regarding Use of Information)"가 표시됩니다.
1. 표시된 내용을 주의 깊게 읽고 **I have read and agree to the Agreement Regarding Use of Information**를 체크한 다음 **Enable**을 클릭합니다.

#### share target picker에서 선택할 수 있는 수신자 

사용자는 대상 선택 화면에서 다음 유형의 수신자를 선택할 수 있습니다.

| 수신자 유형 | 선택할 수 있는 수신자 |
| --- | --- |
| 그룹 | 사용자가 참여 중인 그룹. OpenChat은 포함되지 않습니다. |
| 친구 | 사용자의 친구. 단, LINE 공식 계정은 친구 섹션에 표시되지 않습니다. |
| 채팅 | 일정 기간 내에 메시지를 주고받은 채팅. 그룹, 사용자, 채팅방, LINE 공식 계정을 포함합니다. |

메서드를 호출할 때 `options.isMultiple` 속성에 `false`를 지정하면 친구 섹션만 표시되며, 사용자는 친구 한 명만 수신자로 선택할 수 있습니다.

##### 친구 섹션에 있는 수신자의 표시 동작 

사용자가 새 친구를 추가하면 해당 친구가 대상 선택 화면에 반영되기까지 최대 몇 분이 걸릴 수 있습니다.

다음 조건 중 하나라도 해당하는 친구는 친구 섹션에 표시되지 않습니다. 일정 기간 내에 사용자와 메시지를 주고받았다면 채팅 섹션에 표시될 수 있습니다.

- 친구가 LINE 앱의 **Settings** > **Privacy** > **External app access**에서 **Never allowed**를 선택한 경우
- 친구가 LINE 앱의 **Settings** > **Privacy** > **External app access**에서 **Only for mutual LINE friends**를 선택했고, 친구가 발신자를 친구로 추가하지 않은 경우
- 사용자가 LINE 앱의 친구 목록에서 친구를 숨기거나 차단한 경우

수신자가 발신자를 차단했더라도, 발신자가 수신자를 친구로 추가한 상태이고 위 조건 중 어느 것도 해당하지 않으면 수신자는 여전히 친구 섹션에 표시됩니다.

#### share target picker 예제 코드 

다음 코드는 대상 선택 화면을 표시하고, 선택된 수신자에게 사용자의 메시지로 "Hello, World!"를 보냅니다. LIFF 앱이 시작된 환경에서 대상 선택 화면을 사용할 수 있는지 확인하려면 먼저 `liff.isApiAvailable()`을 실행하세요.

```javascript
if (liff.isApiAvailable("shareTargetPicker")) {
  liff.shareTargetPicker([
    {
      type: "text",
      text: "Hello, World!",
    },
  ]);
}
```

자세한 내용은 LIFF API 레퍼런스의 [liff.isApiAvailable()](https://developers.line.biz/en/reference/liff/#is-api-available) 및 [liff.shareTargetPicker()](https://developers.line.biz/en/reference/liff/#share-target-picker)를 참조하세요.

### LIFF 앱 닫기 

`liff.closeWindow()` 메서드는 열려 있는 LIFF 앱을 닫습니다.

```javascript
// closeWindow 호출
if (!liff.isInClient()) {
  window.alert(
    "LIFF가 현재 외부 브라우저에서 열려 있으므로 이 버튼은 사용할 수 없습니다.",
  );
} else {
  liff.closeWindow();
}
```

자세한 내용은 LIFF API 레퍼런스의 [liff.closeWindow()](https://developers.line.biz/en/reference/liff/#close-window)를 참조하세요.

<!-- note start -->

**참고**

`liff.closeWindow()`는 외부 브라우저에서 동작한다고 보장되지 않습니다.

<!-- note end -->

## OGP 태그 설정하기 

LIFF 앱의 각 페이지에 OGP 태그를 설정하면, 예를 들어 LINE 채팅방에서 LIFF 앱의 URL(`https://liff.line.me/{liffId}`)을 공유할 때 원하는 제목, 설명, 썸네일 이미지를 표시할 수 있습니다.

다음은 LIFF가 지원하는 OGP 태그입니다. OGP 태그에 대한 자세한 내용은 [The Open Graph protocol](https://ogp.me/)을 참조하세요.

```html
<html lang="ja" prefix="og: http://ogp.me/ns#">
<meta property="og:title" content="The title">
<meta property="og:type" content="`website`, `blog`, or `article`">
<meta property="og:description" content="A one to two sentence description">
<meta property="og:url" content="The URL">
<meta property="og:site_name" content="The name that represents the overall site">
<meta property="og:image" content="An image URL">
```

<!-- note start -->

**참고**

`line://app/{liffId}` 형식(지원 종료)으로 LIFF 앱의 URL을 공유하면 OGP 태그가 무시됩니다.

<!-- note end -->

## LIFF 앱이 아닌 외부 사이트를 열 때 

LIFF 브라우저에서 열린 LIFF 앱에서 LIFF 앱이 아닌 외부 사이트를 열면 "This is an external page"라는 팝업이 나타납니다.

![A popup when moving to the external site](https://developers.line.biz/media/news/2022/liff-opening-external-site-en.webp)

팝업은 외부 사이트를 같은 창에서 열 때만 나타납니다. 외부 사이트를 다른 창에서 열면 팝업이 나타나지 않습니다.

<!-- note start -->

**LIFF 엔드포인트 URL보다 상위 레벨로 이동하기**

LIFF 앱에서 엔드포인트 URL(예: `https://example.com/path`)보다 상위 레벨(예: `https://example.com/`)로 이동하는 경우 동작이 보장되지 않습니다.

<!-- note end -->

## LIFF 앱을 닫을 때의 동작 

LIFF 브라우저에서 열린 LIFF 앱을 사용자가 닫거나 [`liff.closeWindow()`](https://developers.line.biz/en/reference/liff/#close-window) 메서드로 닫을 때의 동작은 LINE 앱의 버전과 LIFF 앱의 설정에 따라 다릅니다.

### LINE 앱 버전이 15.12.0 이상인 경우 

LINE 앱 버전이 15.12.0 이상이면, 닫을 때의 동작은 LIFF 앱이 멀티 탭 뷰의 [“최근 사용한 서비스” 섹션에 표시되는 조건](https://developers.line.biz/en/docs/liff/overview/#multi-tab-view-condition)을 충족하는지에 따라 달라집니다.

| | |
| --- | --- |
| 조건을 충족하는 경우 | 사용자가 LIFF 앱을 닫더라도 12시간 이내에 다시 시작할 수 있습니다. 액세스 토큰, 탐색 기록, 화면 스크롤 위치가 유지됩니다. |
| 조건을 충족하지 않는 경우 | 사용자가 LIFF 앱을 닫으면 LIFF 앱이 종료됩니다. 따라서 LIFF 앱을 닫을 때 액세스 토큰이 만료됩니다. |

자세한 내용은 [최근 사용한 서비스](https://developers.line.biz/en/docs/liff/overview/#multi-tab-view-recent-service)를 참조하세요.

### LINE 앱 버전이 15.12.0 미만인 경우 

LINE 앱 버전이 15.12.0 미만이면 사용자가 LIFF 앱을 닫을 때 LIFF 앱이 종료됩니다. 따라서 LIFF 앱을 닫을 때 액세스 토큰이 만료됩니다.

## 다음 단계 

LIFF 앱을 개발한 후에는 원하는 서버에 배포하세요. 배포한 후에는 다음 작업을 하세요.

1. [채널에 LIFF 앱을 추가하세요.](https://developers.line.biz/en/docs/liff/registering-liff-apps/)
1. [LIFF 앱을 여세요](https://developers.line.biz/en/docs/liff/opening-liff-app/)
