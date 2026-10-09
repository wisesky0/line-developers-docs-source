# LIFF API reference

## Common specifications 

### Operating environment 

LIFF가 지원하는 운영 환경에 대한 자세한 내용은 LIFF 문서의 [LIFF overview](https://developers.line.biz/en/docs/liff/overview/)를 참조하십시오.

사용할 수 있는 기능은 LIFF 앱이 LIFF browser에서 열렸는지 외부 브라우저에서 열렸는지에 따라 달라집니다. 예를 들어 외부 브라우저에서는 `liff.scanCode()`를 사용할 수 없습니다. 자세한 내용은 각 client API의 설명을 참조하십시오.

<!-- note start -->

**LIFF apps are not compatible with OpenChat**

예를 들어 LIFF 앱을 통해 사용자의 프로필 정보를 가져오는 것은 대부분의 경우 불가능합니다.

<!-- note end -->

### LIFF SDK errors 

LIFF SDK 오류는 LiffError 객체로 반환됩니다.

<!-- note start -->

**When identifying errors, refer to both the error code and the error message**

오류 메시지는 예고 없이 변경될 수 있으므로, 오류 메시지가 정확히 일치하는지만으로 오류를 식별하면 LIFF 앱이 오작동할 수 있습니다. 오류 메시지가 변경되더라도 LIFF 앱이 계속 올바르게 작동하도록 하려면 오류 코드와 오류 메시지를 모두 참조하여 오류를 식별하십시오.

오류를 오류 코드만으로 고유하게 식별할 수 있도록 개선할 계획입니다.

<!-- note end -->

_Example_

<!-- tab start `json` -->

```json
{
  "code": "INIT_FAILED",
  "message": "Failed to init LIFF SDK"
}
```

<!-- tab end -->

#### LiffError object 

<!-- parameter start -->

code

String

오류 코드

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

message

String

오류 메시지

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

cause

Unknown

오류 원인

<!-- parameter end -->

#### Error details 

| Error code | Description |
| --- | --- |
| 400 | 요청에 문제가 있습니다. 요청 파라미터와 JSON 형식을 확인하십시오. |
| 401 | Authorization 헤더가 올바른지 확인하십시오. |
| 403 | API를 사용할 권한이 없습니다. 계정 또는 플랜이 API 사용 권한을 가지고 있는지 확인하십시오. |
| 429 | 요청 rate limit 범위 안에서 요청하고 있는지 확인하십시오. |
| 500 | API 서버에서 일시적인 오류가 발생했습니다. |
| INIT_FAILED | LIFF SDK 초기화에 실패했습니다. |
| INVALID_ARGUMENT | 잘못된 인자가 지정되었습니다. |
| UNAUTHORIZED | <ul><li>사용자가 승인하지 않았습니다.</li><li>Access token 없이 server API를 호출했습니다.</li><li>로그인하기 전에 share target picker를 호출했습니다.</li></ul> |
| FORBIDDEN | <ul><li>필요한 권한이 없습니다.</li><li>지원되지 않는 환경에서 기능을 사용하려고 했습니다.</li></ul> |
| INVALID_CONFIG | 잘못된 설정입니다.<ul><li>[`liff.init()`](https://developers.line.biz/en/reference/liff/#initialize-liff-app)으로 LIFF 앱을 초기화하려면 liffId를 지정해야 합니다.</li><li>[`liff.permanentLink.createUrl()`](https://developers.line.biz/en/reference/liff/#permanent-link-create-url) 메서드를 실행하는 페이지의 URL이 **Endpoint URL**에 지정된 URL로 시작하지 않습니다.</li></ul> |
| INVALID_ID_TOKEN | ID token 검증에 실패했습니다. |
| EXCEPTION_IN_SUBWINDOW | Subwindow에 문제가 있습니다. <ul><li>예를 들어 target picker(그룹 또는 친구 선택 화면)가 표시된 상태에서 10분 이상 유휴 상태였던 경우입니다.</li></ul> |
| UNKNOWN | 알 수 없는 오류입니다. |

## LIFF SDK properties 

### liff.id 

[`liff.init()`](https://developers.line.biz/en/reference/liff/#initialize-liff-app)에 전달된 LIFF 앱 ID(`String` 타입)를 보관하는 속성입니다.

`liff.init()`을 실행하기 전까지 `liff.id`의 값은 `null`입니다.

_Example_

<!-- tab start `javascript` -->

```javascript
const liffId = "my-liff-id";
liff.init({ liffId });

// liff.id equals to liffId
```

<!-- tab end -->

### liff.ready 

LIFF 앱을 시작한 후 [`liff.init()`](https://developers.line.biz/en/reference/liff/#initialize-liff-app)을 처음 실행하면 resolve되는 `Promise` 객체를 보관하는 속성입니다.

`liff.ready`를 사용하면 `liff.init()`이 완료된 후 원하는 처리를 실행할 수 있습니다.

<!-- tip start -->

**This property can be used before the LIFF app is initialized**

`liff.init()`에 의한 LIFF 앱 초기화가 끝나기 전에도 `liff.ready`를 사용할 수 있습니다.

<!-- tip end -->

_Example_

<!-- tab start `javascript` -->

```javascript
liff.ready.then(() => {
  // do something you want when liff.init finishes
});
```

<!-- tab end -->

<!-- note start -->

**Note**

`liff.init()`이 실패하더라도 `liff.ready`는 reject되지 않습니다. 또한 `LiffError` 객체를 반환하지 않습니다.

<!-- note end -->

## Initialization 

### liff.init() 

LIFF 앱을 초기화합니다.

`liff.init()` 메서드를 실행한 후에만 다른 LIFF SDK 메서드를 호출할 수 있습니다. LIFF 앱은 페이지를 열 때마다 초기화해야 합니다. 같은 LIFF 앱 내에서 전환하는 경우에도 새 페이지를 열 때는 `liff.init()` 메서드를 실행해야 합니다.

LIFF 앱을 올바르게 초기화하지 않고 LIFF 기능을 사용하면 해당 기능이 작동하는 것을 보장하지 않습니다.

`liff.init()` 메서드를 실행하면 LIFF SDK는 LINE Platform에서 사용자의 access token과 ID token을 가져옵니다.

- LIFF SDK가 가져온 access token을 사용하려면 [liff.getAccessToken()](https://developers.line.biz/en/reference/liff/#get-access-token)을 호출하십시오.
- LIFF SDK가 가져온 ID token의 payload를 사용하려면 [liff.getDecodedIDToken()](https://developers.line.biz/en/reference/liff/#get-decoded-id-token)을 호출하십시오.

_Example_

<!-- tab start `javascript` -->

```javascript
// Using a Promise object
liff
  .init({
    liffId: "123456-abcedfg", // Use own liffId
  })
  .then(() => {
    // Start to use liff's api
  })
  .catch((err) => {
    // Error happens during initialization
    console.log(err.code, err.message);
  });

// Using a callback
liff.init({ liffId: "123456-abcedfg" }, successCallback, errorCallback);
```

<!-- tab end -->

#### Important points to consider when initializing the LIFF app 

LIFF 앱을 초기화할 때 고려해야 할 중요한 사항은 다음과 같습니다. LIFF 앱 개발을 시작하기 전에 이 사항을 읽고 이해하십시오.

- [Execute `liff.init()` at the endpoint URL or at a lower level](https://developers.line.biz/en/reference/liff/#initializing-liff-app-notes-1)
- [Execute `liff.init()` once for the primary redirect URL and once for the secondary redirect URL](https://developers.line.biz/en/reference/liff/#initializing-liff-app-notes-2)
- [Process URL changes after `liff.init()` completes](https://developers.line.biz/en/reference/liff/#initializing-liff-app-notes-3)
- [Use caution when handling the primary redirect URL](https://developers.line.biz/en/reference/liff/#initializing-liff-app-notes-4)

##### Execute `liff.init()` at the endpoint URL or at a lower level 

`liff.init()` 메서드는 Endpoint URL과 정확히 같은 URL이거나 Endpoint URL보다 하위 레벨인 URL에서만 작동합니다. LIFF 앱이 이 외의 URL로 전환되면 `liff.init()` 메서드가 작동한다고 보장할 수 없습니다.

다음 예시는 Endpoint URL이 `https://example.com/path1/`일 때 `liff.init()` 메서드를 실행하는 URL에서 동작이 보장되는지를 보여줍니다. [multi-tab view](https://developers.line.biz/en/docs/liff/overview/#multi-tab-view) 같은 일부 LIFF 앱 기능은 동작이 보장되지 않는 URL에서 올바르게 작동하지 않을 수 있습니다.

| `liff.init()`을 실행하는 URL          | 작동 보장 여부 |
| ------------------------------------- | ------------------ |
| `https://example.com/`                | ❌                 |
| `https://example.com/path1/`          | ✅                 |
| `https://example.com/path1/language/` | ✅                 |
| `https://example.com/path2/`          | ❌                 |

<!-- note start -->

**When executing the liff.init() method, the warning message &quot;liff.init() was called with a current URL that is not related to the endpoint URL.&quot; appears in a console**

LIFF v2.27.2 이상에서는 동작이 보장되지 않는 URL에서 `liff.init()` 메서드를 실행하면 경고 메시지가 표시됩니다.

예를 들어 LIFF 앱의 Endpoint URL이 `https://example.com/path1/path2/`이고 `liff.init()` 메서드를 실행하는 URL이 `https://example.com/path1/`이면 다음 경고 메시지가 표시됩니다.

```
liff.init() was called with a current URL that is not related to the endpoint URL.
https://example.com/path1/ is not under https://example.com/path1/path2/
```

위 경고 메시지가 표시되면 Endpoint URL을 `https://example.com/` 또는 `https://example.com/path1/`로 변경하는 것을 고려하십시오. 이러한 URL로 변경하면 `liff.init()` 메서드가 올바르게 작동하도록 보장됩니다.

<!-- note end -->

##### Execute `liff.init()` once for the primary redirect URL and once for the secondary redirect URL 

`liff.init()` 메서드는 primary redirect URL에 전달된 `liff.state` 및 `access_token=xxx`와 같은 정보를 바탕으로 초기화 처리를 수행합니다. Endpoint URL에 쿼리 파라미터나 경로가 포함되어 있다면 LIFF 앱을 올바르게 초기화하기 위해 primary redirect URL과 secondary redirect URL 각각에 대해 `liff.init()` 메서드를 한 번씩 실행하십시오. 자세한 내용은 LIFF 문서의 [Behaviors from accessing the LIFF URL to opening the LIFF app](https://developers.line.biz/en/docs/liff/opening-liff-app/#redirect-flow)를 참조하십시오.

##### Process URL changes after `liff.init()` completes 

URL을 변경하는 처리는 `liff.init()` 메서드가 반환한 `Promise` 객체가 resolve된 후에 실행하십시오.

```javascript
// Example using window.location.replace()
liff
  .init({
    liffId: "1234567890-AbcdEfgh", // Use own liffId
  })
  .then(() => {
    // Redirect to another page after the returned Promise object has been resolved
    window.location.replace(location.href + "/entry/");
  });
```

`Promise` 객체가 resolve되기 전에 다음과 같은 URL 조작을 실행하면 LIFF 앱이 올바르게 열리지 않을 수 있습니다.

- [`Document.location`](https://developer.mozilla.org/en-US/docs/Web/API/Document/location) 속성 또는 [`Window.location`](https://developer.mozilla.org/en-US/docs/Web/API/Window/location) 속성을 사용하여 URL을 변경하는 경우
- [History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API)의 [`history.pushState()`](https://developer.mozilla.org/en-US/docs/Web/API/History/pushState) 메서드 또는 [`history.replaceState()`](https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState) 메서드를 사용하여 URL을 변경하는 경우
- 서버 측에서 상태 코드 `301` 또는 `302`를 반환하여 다른 URL로 리디렉션하는 경우

##### Use caution when handling the primary redirect URL 

Primary redirect URL에 자동으로 부여되는 `access_token=xxx`는 사용자의 access token(기밀 정보)입니다. Primary redirect URL을 Google Analytics와 같은 외부 로깅 도구로 전송하지 마십시오.

LIFF v2.11.0 이상에서는 `liff.init()` 메서드가 resolve될 때 URL에서 인증 정보가 제외된다는 점에 유의하십시오. 따라서 아래와 같이 `then()` 메서드에서 페이지 뷰를 전송하면 인증 정보가 유출되는 것을 방지할 수 있습니다. 로깅 도구를 사용하려면 LIFF 앱을 v2.11.0 이상으로 업그레이드하는 것을 권장합니다. LIFF v2.11.0의 업데이트에 대한 자세한 내용은 LIFF 문서의 [Release Notes](https://developers.line.biz/en/docs/liff/release-notes/#liff-v2-11-0)를 참조하십시오.

```javascript
liff
  .init({
    liffId: "1234567890-AbcdEfgh", // Use own liffId
  })
  .then(() => {
    ga("send", "pageview");
  });
```

<!-- note start -->

**LIFF app's query parameters**

LIFF URL에 접근하거나 LIFF 간 전환(LIFF-to-LIFF transition)을 수행하면 URL에 다음 쿼리 파라미터가 추가될 수 있습니다.

- `liff.state`: LIFF URL에 지정된 추가 정보를 나타냅니다.
- `liff.referrer`: LIFF 간 전환 전의 URL을 나타냅니다. 자세한 내용은 LIFF 문서의 [Get URL from before LIFF-to-LIFF transition](https://developers.line.biz/en/docs/liff/opening-liff-app/#using-liff-referrer)을 참조하십시오.
- `lineAppVersion`: LINE for Android에서 LIFF 앱을 열 때 포함될 수 있습니다.

위의 쿼리 파라미터는 LIFF 앱이 올바르게 작동하도록 LIFF SDK가 추가하는 것입니다. LIFF 앱의 URL에 사용자 정의 처리를 할 때는, 열기나 LIFF 간 전환 등에서 LIFF 앱이 올바르게 작동하도록 `liff.init()` 메서드가 resolve될 때까지 LIFF SDK가 전달한 쿼리 파라미터를 수정하지 마십시오.

그 밖의 `liff.*` 쿼리 파라미터도 추가될 수 있습니다. 따라서 LIFF URL에 접근하거나 LIFF 간 전환을 할 때 추가되는 `liff.*` 쿼리 파라미터를 수정하지 않도록 앱을 설계하십시오.

<!-- note end -->

<!-- tip start -->

**Functions that can be executed even before the LIFF app is initialized**

다음 속성 또는 메서드는 `liff.init()` 메서드를 실행하기 전에도 사용할 수 있습니다. LIFF 앱을 초기화하기 전에 LIFF 앱이 실행되는 환경을 확인하거나, LIFF 앱 초기화에 실패했을 때 LIFF 앱을 닫을 수 있습니다.

- [liff.ready](https://developers.line.biz/en/reference/liff/#ready)
- [liff.getOS()](https://developers.line.biz/en/reference/liff/#get-os)
- [liff.getAppLanguage()](https://developers.line.biz/en/reference/liff/#get-app-language)
- [liff.getLanguage()](https://developers.line.biz/en/reference/liff/#get-language) (deprecated)
- [liff.getVersion()](https://developers.line.biz/en/reference/liff/#get-version)
- [liff.getLineVersion()](https://developers.line.biz/en/reference/liff/#get-line-version)
- [liff.isInClient()](https://developers.line.biz/en/reference/liff/#is-in-client)
- [liff.closeWindow()](https://developers.line.biz/en/reference/liff/#close-window)
- [liff.use()](https://developers.line.biz/en/reference/liff/#use)
- [liff.i18n.setLang()](https://developers.line.biz/en/reference/liff/#i18n-set-lang)

`liff.init()`에 의한 LIFF 앱 초기화가 끝나기 전에 `liff.closeWindow()` 메서드를 사용하려면 LIFF SDK 버전이 v2.4.0 이상이어야 합니다.

<!-- tip end -->

#### Syntax 

```javascript
liff.init(config, successCallback, errorCallback);
```

#### Arguments 

<!-- parameter start (props: required) -->

config

Object

LIFF 앱 설정

<!-- parameter end -->
<!-- parameter start (props: required) -->

config.liffId

String

LIFF 앱 ID입니다. 채널에 LIFF 앱을 추가할 때 얻을 수 있습니다. 자세한 내용은 [Adding a LIFF app to your channel](https://developers.line.biz/en/docs/liff/registering-liff-apps/)을 참조하십시오.\
여기에 지정한 LIFF 앱 ID는 [`liff.id`](https://developers.line.biz/en/reference/liff/#id)로 얻을 수 있습니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

config.withLoginOnExternalBrowser

Boolean

다음 값 중 하나를 사용하여 외부 브라우저에서 LIFF 앱을 초기화할 때 `liff.login()` 메서드를 자동으로 실행할지 여부를 지정하십시오. 기본값은 `false`입니다.

- `true`: 외부 브라우저에서 `liff.login()` 메서드를 자동으로 실행합니다.
- `false`: 외부 브라우저에서 `liff.login()` 메서드를 자동으로 실행하지 않습니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

successCallback

Function

LIFF 앱 초기화에 성공했을 때 데이터 객체를 반환하는 콜백입니다.

<!-- note start -->

**Note**

successCallback은 반환 값인 `Promise` 객체가 resolve되는 시점과 동시에 처리됩니다. 다만 어느 쪽이 먼저 처리되는지는 정해져 있지 않습니다.

<!-- note end -->

<!-- parameter end -->
<!-- parameter start (props: optional) -->

errorCallback

Function

LIFF 앱 초기화에 실패했을 때 오류 객체를 반환하는 콜백입니다.

<!-- note start -->

**Note**

errorCallback은 반환 값인 `Promise` 객체가 reject되는 시점과 동시에 처리됩니다. 다만 어느 쪽이 먼저 처리되는지는 정해져 있지 않습니다.

<!-- note end -->

<!-- parameter end -->

#### Return value 

`Promise` 객체를 반환합니다.

##### Error response 

`Promise`가 reject되면 [`LiffError`](https://developers.line.biz/en/reference/liff/#liff-errors)가 전달됩니다.

## Getting environment 

### liff.getOS() 

사용자가 LIFF 앱을 실행하고 있는 환경을 가져옵니다.

<!-- tip start -->

**This method can be used before the LIFF app is initialized**

`liff.init()`에 의한 LIFF 앱 초기화가 끝나기 전에도 이 메서드를 사용할 수 있습니다.

<!-- tip end -->

#### Syntax 

```javascript
liff.getOS();
```

#### Arguments 

없음

#### Return value 

사용자가 LIFF 앱을 실행하고 있는 환경이 문자열로 반환됩니다. 반환 값은 user agent 문자열의 OS 이름을 기준으로 하므로 브라우저 종류([LIFF browser](https://developers.line.biz/en/glossary/#liff-browser), [LINE's in-app browser](https://developers.line.biz/en/glossary/#line-iab), [external browser](https://developers.line.biz/en/glossary/#external-browser))와 관계없이 동일합니다.

예를 들어 사용자가 iOS를 사용하면 LIFF browser를 사용하는지 Safari를 사용하는지와 관계없이 `ios`가 반환됩니다.

| 반환 값 | 설명                 |
| ------- | -------------------- |
| ios     | iOS 또는 iPadOS      |
| android | Android              |
| web     | 위에 해당하지 않는 경우 |

LIFF 앱이 지원하는 운영체제와 브라우저에 대한 자세한 내용은 [Operating environment](https://developers.line.biz/en/docs/liff/overview/#operating-environment)를 참조하십시오.

### liff.getAppLanguage() 

LIFF 앱을 실행하는 LINE 앱의 언어 설정을 가져옵니다.

<!-- tip start -->

**This method can be used before the LIFF app is initialized**

`liff.init()`에 의한 LIFF 앱 초기화가 끝나기 전에도 이 메서드를 사용할 수 있습니다.

<!-- tip end -->

#### Conditions of use 

LIFF SDK v2.24.0 이상

#### Operating conditions 

`liff.getAppLanguage()` 메서드가 올바르게 작동하려면 다음 조건을 모두 충족해야 합니다.

- LIFF 앱이 [LIFF browser](https://developers.line.biz/en/glossary/#liff-browser)에서 실행되고 있어야 합니다.
- LINE 앱 버전이 14.11.0 이상이어야 합니다.

위 조건을 충족하지 않으면 `liff.getAppLanguage()` 메서드는 [`liff.getLanguage()`](https://developers.line.biz/en/reference/liff/#get-language) 메서드와 동일하게 작동합니다.

#### Syntax 

```javascript
liff.getAppLanguage();
```

#### Arguments 

없음

#### Return value 

LIFF 앱을 실행하는 LINE 앱의 언어 설정이 [RFC 5646](https://datatracker.ietf.org/doc/html/rfc5646)을 따르는 문자열로 반환됩니다.

### liff.getLanguage() 

<!-- note start -->

**The liff.getLanguage() method is deprecated**

`liff.getLanguage()` 메서드는 deprecated되었습니다. LIFF 앱이 실행되는 환경의 언어 설정을 가져오려면 [`liff.getAppLanguage()`](https://developers.line.biz/en/reference/liff/#get-app-language) 메서드를 사용하십시오. 자세한 내용은 [2024년 7월 23일](https://developers.line.biz/en/news/2024/07/23/release-liff-2-24-0/) 소식을 참조하십시오.

<!-- note end -->

LIFF 앱이 실행되는 환경의 언어 설정을 가져옵니다.

<!-- tip start -->

**This method can be used before the LIFF app is initialized**

`liff.init()`에 의한 LIFF 앱 초기화가 끝나기 전에도 이 메서드를 사용할 수 있습니다.

<!-- tip end -->

#### Syntax 

```javascript
liff.getLanguage();
```

#### Arguments 

없음

#### Return value 

LIFF 앱의 실행 환경에 있는 `navigator.language`에 지정된 언어 설정을 담은 문자열입니다.

### liff.getVersion() 

LIFF SDK의 버전을 가져옵니다.

<!-- tip start -->

**This method can be used before the LIFF app is initialized**

`liff.init()`에 의한 LIFF 앱 초기화가 끝나기 전에도 이 메서드를 사용할 수 있습니다.

<!-- tip end -->

#### Syntax 

```javascript
liff.getVersion();
```

#### Arguments 

없음

#### Return value 

LIFF SDK의 버전이 문자열로 반환됩니다.

### liff.getLineVersion() 

사용자의 LINE 버전을 가져옵니다.

<!-- tip start -->

**This method can be used before the LIFF app is initialized**

`liff.init()`에 의한 LIFF 앱 초기화가 끝나기 전에도 이 메서드를 사용할 수 있습니다.

<!-- tip end -->

#### Syntax 

```javascript
liff.getLineVersion();
```

#### Arguments 

없음

#### Return value 

사용자가 LIFF browser를 사용하여 LIFF 앱을 열었다면 사용자의 LINE 버전이 문자열로 반환됩니다. 사용자가 외부 브라우저를 사용하여 LIFF 앱을 열었다면 `null`이 반환됩니다.

### liff.getContext() 

LIFF 앱이 실행된 화면 유형(1:1 채팅, 그룹 채팅, 다인 채팅 또는 외부 브라우저)을 가져옵니다.

<!-- warning start -->

**We've discontinued providing company internal identifiers of chat rooms to LIFF apps**

채팅방의 사내 식별자(1:1 채팅 ID, 그룹 ID, 룸 ID)를 LIFF 앱에 제공하는 기능은 중단되었습니다. 자세한 내용은 2023년 2월 6일 소식인 [We've discontinued providing company internal identifiers of chat rooms to LIFF apps as of February 6, 2023](https://developers.line.biz/en/news/2023/02/06/liff-spec-change/)을 참조하십시오.

<!-- warning end -->

_Example_

<!-- tab start `javascript` -->

```javascript
const context = liff.getContext();
console.log(context);
```

<!-- tab end -->

#### Syntax 

```javascript
liff.getContext();
```

#### Arguments 

없음

#### Return value 

다양한 API 호출에 필요한 정보를 담은 데이터 객체입니다.

<!-- parameter start -->

type

String

LIFF 앱이 실행된 화면의 유형입니다. 다음 중 하나입니다.

- `utou`: 1:1 채팅입니다.
- `group`: 그룹 채팅입니다.
- `room`: 다인 채팅입니다.
- `external`: 외부 브라우저입니다.
- `none`: 1:1 채팅, 그룹 채팅, 다인 채팅 또는 외부 브라우저 이외의 화면입니다. 예: 지갑 탭

LIFF 앱 간 전환 후에도 이 속성이 반환됩니다.

<!-- parameter end -->
<!-- parameter start -->

userId

String

사용자 ID입니다. `type` 속성이 `utou`, `room`, `group`, `none` 또는 `external`인 경우에 포함됩니다. 다만 `type`이 `external`인 경우 null이 반환될 수 있습니다.

<!-- parameter end -->
<!-- parameter start -->

liffId

String

LIFF ID입니다.

<!-- parameter end -->
<!-- parameter start -->

viewType

String

LIFF 앱 화면의 크기입니다. `type` 속성이 `external`이 아닌 경우에만 반환됩니다. 다음 중 하나입니다.

- `compact`
- `tall`
- `full`

자세한 내용은 [Adding a LIFF app to your channel](https://developers.line.biz/en/docs/liff/registering-liff-apps/)을 참조하십시오.

<!-- parameter end -->
<!-- parameter start -->

endpointUrl

String

서비스 endpoint의 URL입니다.

<!-- parameter end -->
<!-- parameter start -->

accessTokenHash

String

Access token을 SHA256으로 해시한 값의 앞부분입니다. Access token을 검증하는 데 사용됩니다.

<!-- parameter end -->
<!-- parameter start -->

availability

Object

LIFF 앱이 실행된 환경에서 LIFF 기능을 사용할 수 있는지 여부를 나타내는 [`availability` 객체](https://developers.line.biz/en/reference/liff/#get-context-return-value-availability)를 반환합니다.

<!-- parameter end -->
<!-- parameter start -->

scope

Array of strings

일부 LIFF SDK 메서드를 사용하는 데 필요한 scope 중 LIFF 앱이 가지고 있는 scope를 반환합니다.

- `openid`: [`liff.getIDToken()`](https://developers.line.biz/en/reference/liff/#get-id-token) 및 [`liff.getDecodedIDToken()`](https://developers.line.biz/en/reference/liff/#get-decoded-id-token)을 사용하는 데 필요한 scope입니다.
- `email`: [`liff.getIDToken()`](https://developers.line.biz/en/reference/liff/#get-id-token) 또는 [`liff.getDecodedIDToken()`](https://developers.line.biz/en/reference/liff/#get-decoded-id-token)을 사용하여 사용자의 이메일 주소를 가져오는 데 필요한 scope입니다.
- `profile`: [`liff.getProfile()`](https://developers.line.biz/en/reference/liff/#get-profile) 또는 [`liff.getFriendship()`](https://developers.line.biz/en/reference/liff/#get-friendship)을 사용하는 데 필요한 scope입니다.
- `chat_message.write`: [`liff.sendMessages()`](https://developers.line.biz/en/reference/liff/#send-messages)를 사용하는 데 필요한 scope입니다.

Scope에 대한 자세한 내용은 LIFF 문서의 [Adding the LIFF app to your channel](https://developers.line.biz/en/docs/liff/registering-liff-apps/#registering-liff-app)을 참조하십시오.

<!-- tip start -->

**Difference between liff.getContext() and liff.permission.getGrantedAll()**

`liff.getContext()` 메서드는 LIFF 앱의 scope 목록(\*)을 가져옵니다.

반면 [`liff.permission.getGrantedAll()`](https://developers.line.biz/en/reference/liff/#permission-get-granted-all) 메서드는 LIFF 앱의 scope 중에서 사용자가 권한 부여에 동의한 scope 목록을 가져옵니다.

\* LINE Login 채널의 **LIFF** 탭에 있는 "Scope" 섹션에 지정된 scope입니다.

<!-- tip end -->

<!-- parameter end -->
<!-- parameter start -->

menuColorSetting

Object

LIFF browser 헤더의 색상 설정을 [`menuColorSetting` 객체](https://developers.line.biz/en/reference/liff/#get-context-return-value-menucolorsetting)로 반환합니다.

현재 헤더 색상 설정을 변경하는 기능은 제공하지 않습니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

miniAppId

String

LINE MINI App의 Custom Path 기능으로 설정한 문자열을 반환합니다. Custom Path 기능에 대한 자세한 내용은 LINE MINI App 문서의 [Configuring Custom Path](https://developers.line.biz/en/docs/line-mini-app/develop/custom-path/)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start -->

miniDomainAllowed

Boolean

LINE MINI App을 `miniapp.line.me` 도메인에서 사용할 수 있는지 여부를 반환합니다.

<!-- parameter end -->
<!-- parameter start -->

permanentLinkPattern

String

LIFF URL의 추가 정보를 처리하는 방식입니다. `concat`이 반환됩니다.

자세한 내용은 LIFF 문서의 [Opening a LIFF app](https://developers.line.biz/en/docs/liff/opening-liff-app/)을 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: annotation="Discontinued") -->

utouId

String

이 속성은 중단되었습니다. 자세한 내용은 2023년 2월 6일 소식인 [We've discontinued providing company internal identifiers of chat rooms to LIFF apps as of February 6, 2023](https://developers.line.biz/en/news/2023/02/06/liff-spec-change/)을 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: annotation="Discontinued") -->

groupId

String

이 속성은 중단되었습니다. 자세한 내용은 2023년 2월 6일 소식인 [We've discontinued providing company internal identifiers of chat rooms to LIFF apps as of February 6, 2023](https://developers.line.biz/en/news/2023/02/06/liff-spec-change/)을 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: annotation="Discontinued") -->

roomId

String

이 속성은 중단되었습니다. 자세한 내용은 2023년 2월 6일 소식인 [We've discontinued providing company internal identifiers of chat rooms to LIFF apps as of February 6, 2023](https://developers.line.biz/en/news/2023/02/06/liff-spec-change/)을 참조하십시오.

<!-- parameter end -->

_Example (LIFF browser)_

<!-- tab start `json` -->

```json
{
  "type": "utou",
  "utouId": "e2bff570-...",
  "userId": "U850014438e...",
  "liffId": "123456-abcedfg",
  "viewType": "full",
  "endpointUrl": "https://example.com/",
  "accessTokenHash": "EVWYWo1yYA...",
  "availability": {
    "shareTargetPicker": {
      "permission": true,
      "minVer": "10.3.0"
    },
    "multipleLiffTransition": {
      "permission": true,
      "minVer": "10.18.0"
    },
    "subwindowOpen": {
      "permission": true,
      "minVer": "11.7.0"
    },
    "scanCode": {
      "permission": false,
      "minVer": "9.4.0",
      "unsupportedFromVer": "9.19.0"
    },
    "scanCodeV2": {
      "permission": true,
      "minVer": "11.7.0",
      "minOsVer": "14.3.0"
    },
    "getAdvertisingId": {
      "permission": false,
      "minVer": "7.14.0"
    },
    "addToHomeScreen": {
      "permission": false,
      "minVer": "9.16.0"
    },
    "bluetoothLeFunction": {
      "permission": false,
      "minVer": "9.14.0",
      "unsupportedFromVer": "9.19.0"
    },
    "skipChannelVerificationScreen": {
      "permission": false,
      "minVer": "11.14.0"
    },
    "addToHomeV2": {
      "permission": false,
      "minVer": "13.20.0"
    },
    "addToHomeHideDomain": {
      "permission": false,
      "minVer": "13.20.0"
    },
    "addToHomeLineScheme": {
      "permission": false,
      "minVer": "13.20.0"
    }
  },
  "scope": [
    "chat_message.write",
    "openid",
    "profile"
  ],
  "menuColorSetting": {
    "adaptableColorSchemes": [
      "light"
    ],
    "lightModeColor": {
      "iconColor": "#111111",
      "statusBarColor": "black",
      "titleTextColor": "#111111",
      "titleSubtextColor": "#B7B7B7",
      "titleButtonColor": "#111111",
      "titleBackgroundColor": "#FFFFFF",
      "progressBarColor": "#06C755",
      "progressBackgroundColor": "#FFFFFF"
    },
    "darkModeColor": {
      "iconColor": "#FFFFFF",
      "statusBarColor": "white",
      "titleTextColor": "#FFFFFF",
      "titleSubtextColor": "#949494",
      "titleButtonColor": "#FFFFFF",
      "titleBackgroundColor": "#111111",
      "progressBarColor": "#06C755",
      "progressBackgroundColor": "#111111"
    }
  },
  "miniDomainAllowed": false,
  "permanentLinkPattern": "concat"
}
```

<!-- tab end -->

_Example (external browser)_

<!-- tab start `json` -->

```json
{
  "type": "external",
  "liffId": "123456-abcedfg",
  "endpointUrl": "https://example.com/",
  "accessTokenHash": "EVWYWo1yYA...",
  "availability": {
    "shareTargetPicker": {
      "permission": true,
      "minVer": "10.3.0"
    },
    "multipleLiffTransition": {
      "permission": true,
      "minVer": "10.18.0"
    },
    "subwindowOpen": {
      "permission": true,
      "minVer": "11.7.0"
    },
    "scanCode": {
      "permission": true,
      "minVer": "9.4.0",
      "unsupportedFromVer": "9.19.0"
    },
    "scanCodeV2": {
      "permission": true,
      "minVer": "11.7.0",
      "minOsVer": "14.3.0"
    },
    "getAdvertisingId": {
      "permission": false,
      "minVer": "7.14.0"
    },
    "addToHomeScreen": {
      "permission": false,
      "minVer": "9.16.0"
    },
    "bluetoothLeFunction": {
      "permission": false,
      "minVer": "9.14.0",
      "unsupportedFromVer": "9.19.0"
    },
    "skipChannelVerificationScreen": {
      "permission": false,
      "minVer": "11.14.0"
    },
    "addToHomeV2": {
      "permission": false,
      "minVer": "13.20.0"
    },
    "addToHomeHideDomain": {
      "permission": false,
      "minVer": "13.20.0"
    },
    "addToHomeLineScheme": {
      "permission": false,
      "minVer": "13.20.0"
    }
  },
  "scope": [
    "chat_message.write",
    "openid",
    "profile"
  ],
  "menuColorSetting": {
    "adaptableColorSchemes": [
      "light"
    ],
    "lightModeColor": {
      "iconColor": "#111111",
      "statusBarColor": "black",
      "titleTextColor": "#111111",
      "titleSubtextColor": "#B7B7B7",
      "titleButtonColor": "#111111",
      "titleBackgroundColor": "#FFFFFF",
      "progressBarColor": "#06C755",
      "progressBackgroundColor": "#FFFFFF"
    },
    "darkModeColor": {
      "iconColor": "#FFFFFF",
      "statusBarColor": "white",
      "titleTextColor": "#FFFFFF",
      "titleSubtextColor": "#949494",
      "titleButtonColor": "#FFFFFF",
      "titleBackgroundColor": "#111111",
      "progressBarColor": "#06C755",
      "progressBackgroundColor": "#111111"
    }
  },
  "miniDomainAllowed": false,
  "permanentLinkPattern": "concat"
}
```

<!-- tab end -->

#### `availability` object 

`availability` 객체는 다음 속성을 포함합니다.

<!-- parameter start -->

shareTargetPicker

Object

LIFF 앱이 실행된 환경에서 [`liff.shareTargetPicker()`](https://developers.line.biz/en/reference/liff/#share-target-picker)를 사용할 수 있는지 여부를 나타내는 [객체](https://developers.line.biz/en/reference/liff/#get-context-return-value-availability-common)를 반환합니다.

\* `liff.shareTargetPicker()`의 사용 가능 여부 정보는 [liff.isApiAvailable('shareTargetPicker')](https://developers.line.biz/en/reference/liff/#is-api-available)를 사용하는 것을 강력히 권장합니다.

<!-- parameter end -->
<!-- parameter start -->

multipleLiffTransition

Object

LIFF 앱이 실행된 환경의 LIFF browser에서 LIFF 앱을 닫지 않고 [`liff.openWindow()`](https://developers.line.biz/en/reference/liff/#open-window)를 사용하여 [다른 LIFF 앱으로 전환](https://developers.line.biz/en/docs/liff/opening-liff-app/#move-liff-to-liff)할 수 있는지 여부를 나타내는 [객체](https://developers.line.biz/en/reference/liff/#get-context-return-value-availability-common)를 반환합니다.

\* 여러 LIFF 앱 간 전환의 사용 가능 여부 정보는 [liff.isApiAvailable('multipleLiffTransition')](https://developers.line.biz/en/reference/liff/#is-api-available)를 사용하는 것을 강력히 권장합니다.

<!-- parameter end -->
<!-- parameter start -->

subwindowOpen

Object

LIFF 앱이 실행된 환경에서 subwindow를 사용할 수 있는지 여부를 나타내는 [객체](https://developers.line.biz/en/reference/liff/#get-context-return-value-availability-common)를 반환합니다.

<!-- parameter end -->
<!-- parameter start -->

scanCode

Object

LIFF 앱이 실행된 환경에서 [`liff.scanCode()`](https://developers.line.biz/en/reference/liff/#scan-code)를 사용할 수 있는지 여부를 나타내는 [객체](https://developers.line.biz/en/reference/liff/#get-context-return-value-availability-common)를 반환합니다.

<!-- parameter end -->
<!-- parameter start -->

scanCodeV2

Object

LIFF 앱이 실행된 환경에서 [`liff.scanCodeV2()`](https://developers.line.biz/en/reference/liff/#scan-code-v2)를 사용할 수 있는지 여부를 나타내는 [객체](https://developers.line.biz/en/reference/liff/#get-context-return-value-availability-common)를 반환합니다.

<!-- parameter end -->
<!-- parameter start -->

getAdvertisingId

Object

LIFF 앱이 실행된 환경에서 `liff.getAid()`를 사용할 수 있는지 여부를 나타내는 [객체](https://developers.line.biz/en/reference/liff/#get-context-return-value-availability-common)를 반환합니다.

현재 `liff.getAid()`는 제공하지 않습니다.

<!-- parameter end -->
<!-- parameter start -->

addToHomeScreen

String

LIFF 앱이 실행된 환경에서 `liff.addToHomeScreen()`을 사용할 수 있는지 여부를 나타내는 [객체](https://developers.line.biz/en/reference/liff/#get-context-return-value-availability-common)를 반환합니다.

현재 `liff.addToHomeScreen()`은 제공하지 않습니다.

<!-- parameter end -->
<!-- parameter start -->

bluetoothLeFunction

Object

LIFF 앱이 실행된 환경에서 LINE Things용 Bluetooth® Low Energy를 사용할 수 있는지 여부를 나타내는 [객체](https://developers.line.biz/en/reference/liff/#get-context-return-value-availability-common)를 반환합니다.

현재 이 기능은 제공하지 않습니다.

<!-- parameter end -->
<!-- parameter start -->

skipChannelVerificationScreen

Object

LIFF 앱이 실행된 환경에서 "Channel consent simplification" 기능을 사용할 수 있는지 여부를 나타내는 [객체](https://developers.line.biz/en/reference/liff/#get-context-return-value-availability-common)를 반환합니다. 자세한 내용은 LINE MINI App 문서의 [Skipping the channel consent process](https://developers.line.biz/en/docs/line-mini-app/develop/channel-consent-simplification/)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start -->

addToHomeV2

Object

LIFF 앱이 실행된 환경에서 [`liff.createShortcutOnHomeScreen()`](https://developers.line.biz/en/reference/liff/#create-shortcut-on-home-screen)을 사용할 수 있는지 여부를 나타내는 [객체](https://developers.line.biz/en/reference/liff/#get-context-return-value-availability-common)를 반환합니다.

\* `liff.createShortcutOnHomeScreen()`의 사용 가능 여부 정보는 [liff.isApiAvailable('createShortcutOnHomeScreen')](https://developers.line.biz/en/reference/liff/#is-api-available)를 사용하는 것을 강력히 권장합니다.

<!-- parameter end -->
<!-- parameter start -->

addToHomeHideDomain

Object

사용자 기기의 홈 화면에 바로가기를 추가하는 화면을 표시할 때 Endpoint URL을 숨길 수 있는지 여부를 나타내는 [객체](https://developers.line.biz/en/reference/liff/#get-context-return-value-availability-common)를 반환합니다.

현재 이 기능은 제공하지 않습니다.

<!-- parameter end -->
<!-- parameter start -->

addToHomeLineScheme

Object

[LINE URL scheme](https://developers.line.biz/en/docs/line-login/using-line-url-scheme/)을 지정하여 바로가기를 만들 수 있는지 여부를 나타내는 [객체](https://developers.line.biz/en/reference/liff/#get-context-return-value-availability-common)를 반환합니다.

현재 이 기능은 제공하지 않습니다.

<!-- parameter end -->

_Example_

<!-- tab start `json` -->

```json
{
  "shareTargetPicker": {
    "permission": true,
    "minVer": "10.3.0"
  }
}
```

<!-- tab end -->

#### Common properties of the `availability` object 

<!-- parameter start -->

permission

Boolean

`availability` 객체의 속성 이름으로 지정된 기능을 LIFF 앱이 실행된 환경에서 사용할 수 있는지 여부입니다.

- `true`: 기능을 사용할 수 있습니다.
- `false`: 기능을 사용할 수 없습니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

minVer

String

해당 기능을 지원하는 최소 LINE 버전입니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

maxVer

String

해당 기능을 지원하는 최대 LINE 버전입니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

unsupportedFromVer

String

해당 기능을 더 이상 지원하지 않는 LINE 버전입니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

minOsVer

String

해당 기능을 지원하는 최소 OS 버전입니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

maxOsVer

String

해당 기능을 지원하는 최대 OS 버전입니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

unsupportedFromOsVer

String

해당 기능을 더 이상 지원하지 않는 OS 버전입니다.

<!-- parameter end -->

#### `menuColorSetting` object 

`menuColorSetting` 객체는 다음 속성을 포함합니다.

<!-- parameter start -->

adaptableColorSchemes

Array of strings

항상 `light`를 반환합니다.

<!-- parameter end -->
<!-- parameter start -->

lightModeColor

Object

`adaptableColorSchemes`가 `light`인 경우 헤더 색상 설정을 [객체](https://developers.line.biz/en/reference/liff/#get-context-return-value-menucolorsetting-common)로 반환합니다.

<!-- parameter end -->
<!-- parameter start -->

darkModeColor

Object

`adaptableColorSchemes`가 `dark`인 경우 헤더 색상 설정을 [객체](https://developers.line.biz/en/reference/liff/#get-context-return-value-menucolorsetting-common)로 반환합니다.

현재 헤더 색상 설정은 제공하지 않습니다.

<!-- parameter end -->

_Example_

<!-- tab start `json` -->

```json
{
  "adaptableColorSchemes": [
    "light"
  ],
  "lightModeColor": {
    "iconColor": "#111111",
    "statusBarColor": "black",
    "titleTextColor": "#111111",
    "titleSubtextColor": "#B7B7B7",
    "titleButtonColor": "#111111",
    "titleBackgroundColor": "#FFFFFF",
    "progressBarColor": "#06C755",
    "progressBackgroundColor": "#FFFFFF"
  },
  "darkModeColor": {
    "iconColor": "#FFFFFF",
    "statusBarColor": "white",
    "titleTextColor": "#FFFFFF",
    "titleSubtextColor": "#949494",
    "titleButtonColor": "#FFFFFF",
    "titleBackgroundColor": "#111111",
    "progressBarColor": "#06C755",
    "progressBackgroundColor": "#111111"
  }
}
```

<!-- tab end -->

#### Common properties of the `menuColorSetting` object 

<!-- parameter start -->

iconColor

String

헤더 아이콘의 색상입니다. `#RRGGBB` 형식의 16진수 색상 코드로 표시됩니다.

<!-- parameter end -->
<!-- parameter start -->

statusBarColor

String

항상 `white`를 반환합니다.

<!-- parameter end -->
<!-- parameter start -->

titleTextColor

String

헤더 제목 텍스트의 색상입니다. `#RRGGBB` 형식의 16진수 색상 코드로 표시됩니다.

<!-- parameter end -->
<!-- parameter start -->

titleSubtextColor

String

헤더 부제목 텍스트의 색상입니다. `#RRGGBB` 형식의 16진수 색상 코드로 표시됩니다.

<!-- parameter end -->
<!-- parameter start -->

titleButtonColor

String

헤더 버튼의 색상입니다. `#RRGGBB` 형식의 16진수 색상 코드로 표시됩니다.

<!-- parameter end -->
<!-- parameter start -->

titleBackgroundColor

String

헤더의 배경 색상입니다. `#RRGGBB` 형식의 16진수 색상 코드로 표시됩니다.

<!-- parameter end -->
<!-- parameter start -->

progressBarColor

String

헤더 진행 막대의 색상입니다. `#RRGGBB` 형식의 16진수 색상 코드로 표시됩니다.

<!-- parameter end -->
<!-- parameter start -->

progressBackgroundColor

String

헤더 진행 막대의 배경 색상입니다. `#RRGGBB` 형식의 16진수 색상 코드로 표시됩니다.

<!-- parameter end -->

### liff.isInClient() 

LIFF 앱이 LIFF browser에서 실행되고 있는지 확인합니다.

<!-- tip start -->

**This method can be used before the LIFF app is initialized**

`liff.init()`에 의한 LIFF 앱 초기화가 끝나기 전에도 이 메서드를 사용할 수 있습니다.

<!-- tip end -->

#### Syntax 

```javascript
liff.isInClient();
```

#### Arguments 

없음

#### Return value 

- `true`: [LIFF browser](https://developers.line.biz/en/glossary/#liff-browser)에서 실행 중입니다.
- `false`: [외부 브라우저](https://developers.line.biz/en/glossary/#external-browser) 또는 [LINE's in-app browser](https://developers.line.biz/en/glossary/#line-iab)에서 실행 중입니다.

### liff.isLoggedIn() 

사용자가 로그인했는지 확인합니다.

_Example_

<!-- tab start `javascript` -->

```javascript
if (liff.isLoggedIn()) {
  // The user can use an API that requires an access token, such as liff.getProfile().
}
```

<!-- tab end -->

#### Syntax 

```javascript
liff.isLoggedIn();
```

#### Arguments 

없음

#### Return value 

- `true`: 사용자가 로그인되어 있습니다.
- `false`: 사용자가 로그인되어 있지 않습니다.

### liff.isApiAvailable() 

지정한 API 또는 기능을 LIFF 앱을 시작한 환경에서 사용할 수 있는지 확인합니다. 구체적으로는 현재 LINE 버전이 해당 API를 지원하는지, 그리고 해당 API의 약관에 동의했는지를 확인합니다.

_Example_

<!-- tab start `javascript` -->

```javascript
// Check if shareTargetPicker is available
if (liff.isApiAvailable('shareTargetPicker')) {
  liff.shareTargetPicker([
    {
      type: "text",
      text: "Hello, World!"
    }
  ])
    .then(
      console.log("ShareTargetPicker was launched")
    ).catch(function(res) {
      console.log("Failed to launch ShareTargetPicker")
    })
}

// Check if the LIFF-to-LIFF transition is available
if (liff.isApiAvailable('multipleLiffTransition')) {
  window.location.href = "https://line.me/{liffId}", // URL for another LIFF app
}
```

<!-- tab end -->

#### Syntax 

```javascript
liff.isApiAvailable(apiName);
```

#### Arguments 

<!-- parameter start (props: required) -->

apiName

String

LIFF 클라이언트 API 또는 기능의 이름입니다. 다음 중 하나를 지정할 수 있습니다.

- `createShortcutOnHomeScreen`: [`liff.createShortcutOnHomeScreen()`](https://developers.line.biz/en/reference/liff/#create-shortcut-on-home-screen) 메서드를 사용할 수 있는지 여부
- `scanCodeV2`: [`liff.scanCodeV2()`](https://developers.line.biz/en/reference/liff/#scan-code-v2) 메서드를 사용할 수 있는지 여부
- `scanCode`: [`liff.scanCode()`](https://developers.line.biz/en/reference/liff/#scan-code) 메서드를 사용할 수 있는지 여부
- `shareTargetPicker`: [`liff.shareTargetPicker()`](https://developers.line.biz/en/reference/liff/#share-target-picker) 메서드를 사용할 수 있는지 여부
- `iap`: LINE MINI App의 [인앱 결제](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/overview/) 기능을 사용할 수 있는지 여부
- `multipleLiffTransition`: [LIFF 간 전환](https://developers.line.biz/en/docs/liff/opening-liff-app/#move-liff-to-liff)을 사용할 수 있는지 여부
- `skipChannelVerificationScreen`: LINE MINI App의 [채널 동의 간소화](https://developers.line.biz/en/docs/line-mini-app/develop/channel-consent-simplification/#what-is-channel-consent-simplification) 기능을 사용할 수 있는지 여부

<!-- parameter end -->

#### Return value 

지정한 API 또는 기능을 현재 환경에서 사용할 수 있는지 여부를 반환합니다. 사용할 수 있으면 `true`, 그렇지 않으면 `false`가 반환됩니다. `false`가 반환되는 경우의 예는 다음과 같습니다.

- LIFF 앱이 해당 API를 지원하지 않는 LINE 버전으로 실행된 경우
- 외부 브라우저에서는 해당 API를 사용할 수 없는데 LIFF 앱이 외부 브라우저에서 실행된 경우
- API를 사용하려면 약관에 동의해야 하는데 동의하지 않은 경우
- API를 사용하려면 로그인해야 하는데 로그인하지 않은 경우
- API를 사용하려면 access token이 유효해야 하는데 access token이 만료된 경우

## Authentication 

### liff.login() 

[LINE's in-app browser](https://developers.line.biz/en/glossary/#line-iab) 또는 [외부 브라우저](https://developers.line.biz/en/glossary/#external-browser)에서 로그인 절차를 수행합니다.

<!-- note start -->

**Note**

`liff.init()`을 실행하면 자동으로 실행되므로 LIFF browser에서는 `liff.login()`을 사용할 수 없습니다.

<!-- note end -->

<!-- note start -->

**Authorization requests within LIFF browser**

LIFF browser 내에서 LINE Login 인증 요청의 동작은 보장되지 않습니다. 또한 외부 브라우저나 LINE's in-app browser에서 LIFF 앱을 열 때는 로그인 절차에 [LINE Login 인증 요청](https://developers.line.biz/en/docs/line-login/integrate-line-login/#making-an-authorization-request)이 아니라 이 메서드를 사용하십시오.

<!-- note end -->

_Example_

<!-- tab start `javascript` -->

```javascript
if (!liff.isLoggedIn()) {
  liff.login({ redirectUri: "https://example.com/path" });
}
```

<!-- tab end -->

#### Syntax 

```javascript
liff.login(loginConfig);
```

#### Arguments 

<!-- parameter start (props: optional) -->

loginConfig

Object

로그인 설정

<!-- parameter end -->
<!-- parameter start (props: optional) -->

loginConfig.redirectUri

String

로그인 후 LIFF 앱에서 열 URL입니다. 기본값은 **Endpoint URL**에 설정된 URL입니다. **Endpoint URL**을 설정하는 방법은 LIFF 문서의 [Adding a LIFF app to your channel](https://developers.line.biz/en/docs/liff/registering-liff-apps/#registering-liff-app)을 참조하십시오.

`redirectUri`에 지정한 URL이 **Endpoint URL**에 지정한 URL로 시작하지 않으면 로그인 절차가 실패하고 오류 화면이 표시됩니다.

![](https://developers.line.biz/media/liff/liff_login_error_screen.png)

예를 들어 **Endpoint URL**이 `https://example.com/path1/path2?query1=value1`인 경우 로그인 절차의 성공 또는 실패는 다음과 같습니다. 쿼리 파라미터와 URL 프래그먼트는 로그인 절차의 성공 또는 실패에 영향을 주지 않습니다.

<table>
  <thead>
    <tr>
      <th>redirectUri</th>
      <th>Login process</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <ul>
          <li>https://example.com/path1/path2?query1=value1</li>
          <li>https://example.com/path1/path2?query2=value2</li>
          <li>https://example.com/path1/path2#URL-fragment</li>
          <li>https://example.com/path1/path2</li>
          <li>https://example.com/path1/path2/</li>
          <li>https://example.com/path1/path2/path3</li>
        </ul>
      </td>
      <td>✅ 성공</td>
    </tr>
    <tr>
      <td>
        <ul>
          <li>https://example.com/path1</li>
          <li>https://example.com/</li>
          <li>https://example.com/path2/path1</li>
        </ul>
      </td>
      <td>❌ 실패</td>
    </tr>
  </tbody>
</table>

<!-- parameter end -->

#### Return value 

없음

### liff.logout() 

로그아웃합니다.

_Example_

<!-- tab start `javascript` -->

```javascript
if (liff.isLoggedIn()) {
  liff.logout();
}
```

<!-- tab end -->

#### Syntax 

```javascript
liff.logout();
```

#### Arguments 

없음

#### Return value 

없음

### liff.getAccessToken() 

현재 사용자의 access token을 가져옵니다.

이 API로 얻은 access token을 사용하면 LIFF 앱에서 서버로 사용자 데이터를 전송할 수 있습니다. 자세한 내용은 LIFF 문서의 [Using user data in LIFF apps and servers](https://developers.line.biz/en/docs/liff/using-user-profile/)를 참조하십시오.

#### Access token validity period 

Access token은 발급 후 12시간 동안 유효합니다. 다만 이 유효 기간 안에서도 사용자의 동작에 따라 access token이 취소될 수 있습니다.

- 사용자가 LIFF 앱을 닫으면 access token이 취소될 수 있습니다. 자세한 내용은 LIFF 문서의 [Behavior when closing the LIFF app](https://developers.line.biz/en/docs/liff/developing-liff-apps/#behavior-when-closing-liff-app)을 참조하십시오.
- "[Channel consent simplification](https://developers.line.biz/en/docs/line-mini-app/develop/channel-consent-simplification/#what-is-channel-consent-simplification)" 기능이 활성화된 LINE MINI App에서 검증 화면을 통해 추가 권한을 부여하면 access token이 갱신되고, 이전에 발급된 access token은 취소됩니다. 자세한 내용은 LINE MINI App 문서의 [Request permissions other than the `openid` scope on the verification screen](https://developers.line.biz/en/docs/line-mini-app/develop/channel-consent-simplification/#request-permissions-other-than-openid)을 참조하십시오.

<!-- tip start -->

**Getting an access token**

- 사용자가 LIFF browser에서 LIFF 앱을 시작하면, [`liff.init()`](https://developers.line.biz/en/reference/liff/#initialize-liff-app)을 호출할 때 LIFF SDK가 access token을 가져옵니다.
- 사용자가 외부 브라우저에서 LIFF 앱을 시작하면, 다음 단계를 모두 거쳤을 때 LIFF SDK가 access token을 가져옵니다.
  1. [`liff.login()`](https://developers.line.biz/en/reference/liff/#login)을 호출합니다.
  2. 사용자가 로그인합니다.
  3. [`liff.init()`](https://developers.line.biz/en/reference/liff/#initialize-liff-app)을 호출합니다.

<!-- tip end -->

_Example_

<!-- tab start `javascript` -->

```javascript
const accessToken = liff.getAccessToken();
if (accessToken) {
  fetch("https://api...", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    //...
  });
}
```

<!-- tab end -->

#### Syntax 

```javascript
liff.getAccessToken();
```

#### Arguments 

없음

#### Return value 

현재 사용자의 access token을 문자열로 반환합니다.

### liff.getIDToken() 

LIFF SDK가 가져온 현재 사용자의 ID token을 가져옵니다. ID token은 사용자 데이터를 담은 JSON Web Token(JWT)입니다. ID token은 발급 후 1시간 동안 유효합니다.

이 API로 얻은 ID token을 사용하면 LIFF 앱에서 서버로 사용자 데이터를 전송할 수 있습니다. 자세한 내용은 LIFF 문서의 [Using user data in LIFF apps and servers](https://developers.line.biz/en/docs/liff/using-user-profile/)를 참조하십시오.

<!-- note start -->

**Select a scope**

[LIFF 앱을 채널에 추가](https://developers.line.biz/en/docs/liff/registering-liff-apps/)할 때 `openid` scope를 선택하십시오. Scope를 선택하지 않았거나 사용자가 권한을 부여하지 않으면 ID token을 가져올 수 없습니다. LIFF 앱을 추가한 후에도 [LINE Developers Console](https://developers.line.biz/console/)의 LIFF 탭에서 scope 선택을 변경할 수 있습니다.

<!-- note end -->

<!-- tip start -->

**Getting an ID token**

- 사용자가 LIFF browser에서 LIFF 앱을 시작하면, [`liff.init()`](https://developers.line.biz/en/reference/liff/#initialize-liff-app)을 호출할 때 LIFF SDK가 ID token을 가져옵니다.
- 사용자가 외부 브라우저에서 LIFF 앱을 시작하면, 다음 단계를 모두 거쳤을 때 LIFF SDK가 ID token을 가져옵니다.
  1. [`liff.login()`](https://developers.line.biz/en/reference/liff/#login)을 호출합니다.
  2. 사용자가 로그인합니다.
  3. [`liff.init()`](https://developers.line.biz/en/reference/liff/#initialize-liff-app)을 호출합니다.

<!-- tip end -->

<!-- tip start -->

**You can get the user's email address**

사용자의 이메일 주소를 가져오려면 [LIFF 앱을 채널에 추가](https://developers.line.biz/en/docs/liff/registering-liff-apps/)할 때 `email` scope를 선택하십시오. 사용자가 권한을 부여하면 이메일 주소를 가져올 수 있습니다. LIFF 앱을 추가한 후에도 [LINE Developers Console](https://developers.line.biz/console/)의 LIFF 탭에서 scope 선택을 변경할 수 있습니다.

<!-- tip end -->

_Example_

<!-- tab start `javascript` -->

```javascript
liff
  .init({
    liffId: "123456-abcedfg", // Use own liffId
  })
  .then(() => {
    const idToken = liff.getIDToken();
    console.log(idToken); // print idToken object
  });
```

<!-- tab end -->

#### Syntax 

```javascript
liff.getIDToken();
```

#### Argument 

없음

#### Return value 

ID token을 반환합니다.

### liff.getDecodedIDToken() 

LIFF SDK가 가져온 ID token의 payload를 가져옵니다. Payload에는 사용자의 표시 이름, 프로필 이미지 URL, 이메일 주소 등의 정보가 포함됩니다.

LIFF 앱에서 사용자의 표시 이름을 사용하고 싶을 때 이 메서드를 사용하십시오.

기본 프로필 정보만 가져올 수 있습니다. 사용자의 [subprofile](https://developers.line.biz/en/glossary/#subprofile)은 가져올 수 없습니다.

<!-- warning start -->

**Don't send user info to server**

이 메서드로 얻은 사용자 데이터를 서버로 전송하지 마십시오. 자세한 내용은 LIFF 문서의 [Using user data in LIFF apps and servers](https://developers.line.biz/en/docs/liff/using-user-profile/)를 참조하십시오.

<!-- warning end -->

<!-- note start -->

**Select a scope**

[LIFF 앱을 채널에 추가](https://developers.line.biz/en/docs/liff/registering-liff-apps/)할 때 `openid` scope를 선택하십시오. Scope를 선택하지 않았거나 사용자가 권한을 부여하지 않으면 ID token을 가져올 수 없습니다. LIFF 앱을 추가한 후에도 [LINE Developers Console](https://developers.line.biz/console/)의 LIFF 탭에서 scope 선택을 변경할 수 있습니다.

<!-- note end -->

<!-- tip start -->

**Getting an ID token**

- 사용자가 LIFF browser에서 LIFF 앱을 시작하면, [`liff.init()`](https://developers.line.biz/en/reference/liff/#initialize-liff-app)을 호출할 때 LIFF SDK가 ID token을 가져옵니다.
- 사용자가 외부 브라우저에서 LIFF 앱을 시작하면, 다음 단계를 모두 거쳤을 때 LIFF SDK가 ID token을 가져옵니다.

  1. [`liff.login()`](https://developers.line.biz/en/reference/liff/#login)을 호출합니다.
  2. 사용자가 로그인합니다.
  3. [`liff.init()`](https://developers.line.biz/en/reference/liff/#initialize-liff-app)을 호출합니다.

<!-- tip end -->

<!-- tip start -->

**You can get the user's email address**

사용자의 이메일 주소를 가져오려면 [LIFF 앱을 채널에 추가](https://developers.line.biz/en/docs/liff/registering-liff-apps/)할 때 `email` scope를 선택하십시오. 사용자가 권한을 부여하면 이메일 주소를 가져올 수 있습니다. LIFF 앱을 추가한 후에도 [LINE Developers Console](https://developers.line.biz/console/)의 LIFF 탭에서 scope 선택을 변경할 수 있습니다.

<!-- tip end -->

_Example_

<!-- tab start `javascript` -->

```javascript
liff
  .init({
    liffId: "123456-abcedfg", // Use own liffId
  })
  .then(() => {
    const idToken = liff.getDecodedIDToken();
    console.log(idToken); // print decoded idToken object
  });
```

<!-- tab end -->

#### Syntax 

```javascript
liff.getDecodedIDToken();
```

#### Arguments 

없음

#### Return value 

ID token의 payload를 가져옵니다.

ID token payload에 대한 자세한 내용은 LINE Login 통합 문서의 [Get profile information from ID tokens](https://developers.line.biz/en/docs/line-login/verify-id-token/)에 있는 **Payload** 섹션을 참조하십시오.

_Example_

<!-- tab start `json` -->

```json
{
  "iss": "https://access.line.me",
  "sub": "U1234567890abcdef1234567890abcdef ",
  "aud": "1234567890",
  "exp": 1504169092,
  "iat": 1504263657,
  "amr": ["pwd"],
  "name": "Taro Line",
  "picture": "https://sample_line.me/aBcdefg123456"
}
```

<!-- tab end -->

### liff.permission.getGrantedAll() 

사용자가 권한 부여에 동의한 scope의 목록을 가져옵니다.

이 메서드로 가져올 수 있는 scope는 다음과 같습니다.

- [`profile`](https://developers.line.biz/en/docs/liff/registering-liff-apps/#registering-liff-app)
- [`chat_message.write`](https://developers.line.biz/en/docs/liff/registering-liff-apps/#registering-liff-app)
- [`openid`](https://developers.line.biz/en/docs/liff/registering-liff-apps/#registering-liff-app)
- [`email`](https://developers.line.biz/en/docs/liff/registering-liff-apps/#registering-liff-app)

<!-- tip start -->

**Difference between liff.getContext() and liff.permission.getGrantedAll()**

[`liff.getContext()`](https://developers.line.biz/en/reference/liff/#get-context) 메서드는 LIFF 앱의 scope 목록(\*)을 가져옵니다.

반면 `liff.permission.getGrantedAll()` 메서드는 LIFF 앱의 scope 중에서 사용자가 권한 부여에 동의한 scope 목록을 가져옵니다.

\* LINE Login 채널의 **LIFF** 탭에 있는 "Scope" 섹션에 지정된 scope입니다.

<!-- tip end -->

_Example_

<!-- tab start `javascript` -->

```javascript
liff.permission.getGrantedAll().then((scopes) => {
  // ["profile", "chat_message.write", "openid", "email"]
  console.log(scopes);
});
```

<!-- tab end -->

#### Syntax 

```javascript
liff.permission.getGrantedAll();
```

#### Arguments 

없음

#### Return value 

`Promise`가 resolve되면 사용자가 권한 부여에 동의한 scope의 배열이 전달됩니다.

##### Error response 

`Promise`가 reject되면 [`LiffError`](https://developers.line.biz/en/reference/liff/#liff-errors)가 전달됩니다.

### liff.permission.query() 

사용자가 지정한 권한을 부여하는 데 동의했는지 확인합니다.

_Example_

<!-- tab start `javascript` -->

```javascript
liff.permission.query("profile").then((permissionStatus) => {
  // permissionStatus = { state: 'granted' }
});
```

<!-- tab end -->

#### Syntax 

```javascript
liff.permission.query(permission);
```

#### Arguments 

<!-- parameter start (props: required) -->

permission

String

확인할 권한입니다. 다음 scope 중 하나를 지정하십시오.

- [`profile`](https://developers.line.biz/en/docs/liff/registering-liff-apps/#registering-liff-app)
- [`chat_message.write`](https://developers.line.biz/en/docs/liff/registering-liff-apps/#registering-liff-app)
- [`openid`](https://developers.line.biz/en/docs/liff/registering-liff-apps/#registering-liff-app)
- [`email`](https://developers.line.biz/en/docs/liff/registering-liff-apps/#registering-liff-app)

<!-- parameter end -->

#### Return value 

`Promise` 객체를 반환합니다.

`Promise`가 resolve되면 다음 속성을 포함하는 객체가 반환됩니다.

<!-- parameter start -->

state

String

다음 값 중 하나를 포함합니다.

- `granted`: 사용자가 권한 부여에 동의했습니다.
- `prompt`: 사용자가 권한 부여에 동의하지 않았습니다.
- `unavailable`: 채널에 지정한 scope가 없어 사용할 수 없습니다.

<!-- parameter end -->

### liff.permission.requestAll() 

LINE MINI App이 요청한 권한에 대한 "검증 화면"을 표시합니다.

![verification screen](https://developers.line.biz/media/line-mini-app/verification-screen-en.webp)

<!-- note start -->

**Operating environment of liff.permission.requestAll()**

`liff.permission.requestAll()`은 [LINE MINI App](https://developers.line.biz/en/docs/line-mini-app/)에서만 작동합니다.

이 메서드를 실행하려면 [LINE Developers Console](https://developers.line.biz/console/)에서 미리 **Channel consent simplification**을 켜야 합니다. 채널 동의 간소화 기능의 설정 방법은 LINE MINI App 문서의 [The "Channel consent simplification" feature setup](https://developers.line.biz/en/docs/line-mini-app/develop/channel-consent-simplification/#simplification-feature-setup)을 참조하십시오.

<!-- note end -->

<!-- note start -->

**Make sure that the user has consented to all the permissions before executing this method**

사용자가 이미 모든 권한에 동의한 상태에서 `liff.permission.requestAll()`을 실행하면 `Promise`가 reject되고 [`LiffError`](https://developers.line.biz/en/reference/liff/#liff-errors)가 반환됩니다. 따라서 [`liff.permission.query()`](https://developers.line.biz/en/reference/liff/#permission-query)를 사용하여 사용자가 모든 권한에 동의했는지 확인하고, 동의하지 않은 권한이 있는 경우에만 `liff.permission.requestAll()`을 실행하십시오.

<!-- note end -->

_Example_

<!-- tab start `javascript` -->

```javascript
liff.permission.query("profile").then((permissionStatus) => {
  if (permissionStatus.state === "prompt") {
    liff.permission.requestAll();
  }
});

// When Use multiple accounts is enabled for the LINE MINI App channel
liff.permission.query("profile").then((permissionStatus) => {
  if (permissionStatus.state === "prompt") {
    liff.permission.requestAll({
      officialAccount: {
        id: "@819...",
        fallback: true,
      },
    });
  }
});
```

<!-- tab end -->

#### Syntax 

```javascript
liff.permission.requestAll(params);
```

#### Arguments 

인자는 LINE MINI App에서만 사용할 수 있습니다. LIFF SDK v2.30.0 이상이 필요하며, LINE MINI App 채널에서 **Use multiple accounts**가 활성화되어 있어야 합니다. 자세한 내용은 LINE MINI App 문서의 [Add a LINE Official Account as a friend in a LINE MINI App (add friend option)](https://developers.line.biz/en/docs/line-mini-app/service/add-friend-option/)을 참조하십시오.

<!-- parameter start (props: optional) -->

params

Object

파라미터 객체

<!-- parameter end -->
<!-- parameter start (props: optional) -->

params.officialAccount

Object

Add friend option을 통해 사용자에게 친구 추가 또는 차단 해제를 요청할 LINE Official Account를 지정하는 객체입니다. 생략하면 기본 LINE Official Account가 표시됩니다.

<!-- parameter end -->
<!-- parameter start (props: required) -->

officialAccount.id

String

Add friend option을 통해 사용자에게 친구 추가 또는 차단 해제를 요청할 LINE Official Account의 ID입니다. Basic ID 또는 [premium ID](https://developers.line.biz/en/glossary/#premium-id)를 지정하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

officialAccount.fallback

Boolean

`officialAccount.id` 속성에 지정한 LINE Official Account가 존재하지 않거나, 허용 목록에 등록되어 있지 않거나, 그 밖의 이유로 사용할 수 없는 경우 기본 LINE Official Account를 표시할지 여부입니다. 기본값은 `true`입니다.

- `true`: 기본 LINE Official Account를 표시합니다.
- `false`: LINE Official Account를 표시하지 않습니다.

<!-- parameter end -->

#### Return value 

`Promise` 객체를 반환합니다.

#### Error response 

`Promise`가 reject되면 [`LiffError`](https://developers.line.biz/en/reference/liff/#liff-errors)가 전달됩니다. 다음 오류는 `liff.permission.requestAll()` 메서드에 특정된 오류입니다.

| Error code | Error message | Description |
| --- | --- | --- |
| `FORBIDDEN` | `All permissions have already been approved.` | 사용자가 이미 모든 권한에 동의했습니다. |
| `FORBIDDEN` | `SkipChannelVerificationScreen is unavailable.` | **Channel consent simplification**이 비활성화되어 있습니다. |
| `INVALID_ARGUMENT` | `officialAccount.id must start with "@".` | `officialAccount.id` 속성의 값이 `@`로 시작하지 않습니다. |

## Profile 

### liff.getProfile() 

현재 사용자의 [프로필 정보](https://developers.line.biz/en/glossary/#profile-information)를 가져옵니다.

기본 프로필 정보만 가져올 수 있습니다. 사용자의 [subprofile](https://developers.line.biz/en/glossary/#subprofile)은 가져올 수 없습니다.

<!-- warning start -->

**Don't send user info to server**

이 메서드로 얻은 사용자 데이터를 서버로 전송하지 마십시오. 자세한 내용은 LIFF 문서의 [Using user data in LIFF apps and servers](https://developers.line.biz/en/docs/liff/using-user-profile/)를 참조하십시오.

<!-- warning end -->

<!-- note start -->

**Select a scope**

[LIFF 앱을 채널에 추가](https://developers.line.biz/en/docs/liff/registering-liff-apps/)할 때 `profile` scope를 선택하십시오. Scope를 선택하지 않았거나 사용자가 권한을 부여하지 않으면 사용자 프로필을 가져올 수 없습니다. LIFF 앱을 추가한 후에도 [LINE Developers Console](https://developers.line.biz/console/)의 LIFF 탭에서 scope 선택을 변경할 수 있습니다.

<!-- note end -->

_Example_

<!-- tab start `javascript` -->

```javascript
liff
  .getProfile()
  .then((profile) => {
    const name = profile.displayName;
  })
  .catch((err) => {
    console.log("error", err);
  });
```

<!-- tab end -->

#### Syntax 

```javascript
liff.getProfile();
```

#### Arguments 

없음

#### Return value 

`Promise` 객체를 반환합니다.

`Promise`가 resolve되면 사용자의 프로필 정보를 담은 객체가 전달됩니다.

<!-- parameter start -->

userId

String

사용자 ID

<!-- parameter end -->
<!-- parameter start -->

displayName

String

표시 이름

<!-- parameter end -->
<!-- parameter start -->

pictureUrl

String

이미지 URL입니다. 사용자가 설정하지 않은 경우 이 속성은 반환되지 않습니다.

<!-- parameter end -->
<!-- parameter start -->

statusMessage

String

상태 메시지입니다. 사용자가 설정하지 않은 경우 이 속성은 반환되지 않습니다.

<!-- parameter end -->

##### Error response 

`Promise`가 reject되면 [`LiffError`](https://developers.line.biz/en/reference/liff/#liff-errors)가 전달됩니다.

_Example_

<!-- tab start `json` -->

```json
{
  "userId": "U4af4980629...",
  "displayName": "Brown",
  "pictureUrl": "https://profile.line-scdn.net/abcdefghijklmn",
  "statusMessage": "Hello, LINE!"
}
```

<!-- tab end -->

### liff.getFriendship() 

사용자와 LINE Official Account 간의 친구 상태를 가져옵니다.

다만 LIFF 앱을 추가한 LINE Login 채널에 연결된 LINE Official Account와 사용자 사이의 친구 상태만 가져올 수 있습니다. LINE Official Account를 LINE Login 채널에 연결하는 방법은 LINE Login 문서의 [Add a LINE Official Account as a friend when logged in (add friend option)](https://developers.line.biz/en/docs/line-login/link-a-bot/)을 참조하십시오.

<!-- note start -->

**Select a scope**

[LIFF 앱을 채널에 추가](https://developers.line.biz/en/docs/liff/registering-liff-apps/)할 때 `profile` scope를 선택하십시오. Scope를 선택하지 않았거나 사용자가 권한을 부여하지 않으면 친구 상태를 가져올 수 없습니다. LIFF 앱을 추가한 후에도 [LINE Developers Console](https://developers.line.biz/console/)의 LIFF 탭에서 scope 선택을 변경할 수 있습니다.

<!-- note end -->

_Example_

<!-- tab start `javascript` -->

```javascript
liff.getFriendship().then((data) => {
  if (data.friendFlag) {
    // something you want to do
  }
});

// When Use multiple accounts is enabled for the LINE MINI App channel
liff
  .getFriendship({
    officialAccountId: "@819...",
  })
  .then((data) => {
    if (data.friendFlag) {
      // something you want to do
    }
  });
```

<!-- tab end -->

#### Syntax 

```javascript
liff.getFriendship(params);
```

#### Arguments 

인자는 LINE MINI App에서만 사용할 수 있습니다. LIFF SDK v2.30.0 이상이 필요하며, LINE MINI App 채널에서 **Use multiple accounts**가 활성화되어 있어야 합니다. 자세한 내용은 LINE MINI App 문서의 [Add a LINE Official Account as a friend in a LINE MINI App (add friend option)](https://developers.line.biz/en/docs/line-mini-app/service/add-friend-option/)을 참조하십시오.

<!-- parameter start (props: optional) -->

params

Object

파라미터 객체입니다. 생략하면 기본 LINE Official Account와의 친구 상태를 가져옵니다.

<!-- parameter end -->
<!-- parameter start (props: required) -->

params.officialAccountId

String

친구 상태를 가져올 LINE Official Account의 ID입니다. Basic ID 또는 [premium ID](https://developers.line.biz/en/glossary/#premium-id)를 지정하십시오.

<!-- parameter end -->

#### Return value 

`Promise` 객체를 반환합니다.

친구 상태를 가져오면 `Promise`가 resolve되고 친구 관계에 대한 정보가 전달됩니다.

<!-- parameter start -->

friendFlag

Boolean

- `true`: 사용자가 LINE Official Account를 친구로 추가했고 차단하지 않았습니다.
- 그 외의 경우 `false`입니다.

<!-- parameter end -->

_Example_

<!-- tab start `json` -->

```json
{
  "friendFlag": true
}
```

<!-- tab end -->

#### Error response 

`Promise`가 reject되면 [`LiffError`](https://developers.line.biz/en/reference/liff/#liff-errors)가 전달됩니다. 다음 오류는 `liff.getFriendship()` 메서드에 특정된 오류입니다.

| Error code | Error message | Description |
| --- | --- | --- |
| `400` | `Bot not found` | <p>친구 상태를 가져오려는 LINE Official Account를 찾을 수 없습니다. 가능한 원인은 다음과 같습니다.</p><ul><li>`officialAccountId` 속성에 지정한 LINE Official Account가 존재하지 않습니다.</li><li>`officialAccountId` 속성에 지정한 LINE Official Account가 허용 목록에 등록되어 있지 않습니다.</li><li>`officialAccountId` 속성에 지정한 LINE Official Account가 정지되었거나 삭제되었습니다.</li></ul> |
| `400` | `There is no login bot linked to this channel.` | <p>친구 상태를 가져오려는 LINE Official Account가 존재하지 않습니다. 가능한 원인은 다음과 같습니다.</p><ul><li>LINE Login 채널에 **Linked LINE Official Account**가 설정되어 있지 않습니다.</li><li>LINE MINI App 채널에 **Default LINE Official Account**가 설정되어 있지 않고 `officialAccountId` 속성도 지정하지 않았습니다.</li></ul> |
| `403` | `LOGIN_MULTI_LINKED_BOT_PROMPT feature license is required.` | `officialAccountId` 속성을 지정했지만 LINE MINI App 채널에서 **Use multiple accounts**가 비활성화되어 있습니다. |
| `INVALID_ARGUMENT` | `officialAccountId must start with "@".` | `officialAccountId` 속성의 값이 `@`로 시작하지 않습니다. |

### liff.requestFriendship() 

사용자에게 LINE Official Account를 친구로 추가하거나 차단을 해제하도록 요청하는 subwindow를 표시합니다.

![](https://developers.line.biz/media/liff/request-friendship/request-friendship-add-friend-en.webp)

- 사용자가 LINE Official Account를 친구로 추가하지 않았다면 친구 추가를 요청하는 subwindow가 표시됩니다.
- 사용자가 LINE Official Account를 차단했다면 차단 해제를 요청하는 subwindow가 표시됩니다.
- 사용자가 이미 LINE Official Account와 친구라면 subwindow가 표시된 후 자동으로 닫힙니다.

친구 추가 또는 차단 해제를 요청할 LINE Official Account는 [채널에 LINE Official Account 연결](https://developers.line.biz/en/docs/line-login/link-a-bot/#link-a-line-official-account)을 통해 지정할 수 있습니다. 자세한 내용은 LINE Login 문서의 [Add a LINE Official Account as a friend when logged in (add friend option)](https://developers.line.biz/en/docs/line-login/link-a-bot/)을 참조하십시오.

LIFF browser의 화면 크기가 `Full`인 경우에만 사용할 수 있습니다. 자세한 내용은 LIFF 문서의 [Size of the LIFF browser](https://developers.line.biz/en/docs/liff/overview/#screen-size)를 참조하십시오.

_Example_

<!-- tab start `javascript` -->

```javascript
try {
  await liff.requestFriendship({
    template: { id: "coupon" },
  });
} catch (error) {
  console.log(error);
}

// When Use multiple accounts is enabled for the LINE MINI App channel
try {
  await liff.requestFriendship({
    officialAccount: {
      id: "@819...",
      fallback: true,
    },
    template: { id: "coupon" },
  });
} catch (error) {
  console.log(error);
}
```

<!-- tab end -->

#### Syntax 

```javascript
liff.requestFriendship(params);
```

#### Arguments 

<!-- parameter start (props: optional) -->

params

Object

파라미터 객체

<!-- parameter end -->
<!-- parameter start (props: optional) -->

params.officialAccount

Object

사용자에게 친구 추가 또는 차단 해제를 요청할 LINE Official Account를 지정하는 객체입니다. 생략하면 기본 LINE Official Account가 표시됩니다.

`officialAccount` 속성은 LINE MINI App에서만 사용할 수 있습니다. LIFF SDK v2.30.0 이상이 필요하며, LINE MINI App 채널에서 **Use multiple accounts**가 활성화되어 있어야 합니다. 자세한 내용은 LINE MINI App 문서의 [Add a LINE Official Account as a friend in a LINE MINI App (add friend option)](https://developers.line.biz/en/docs/line-mini-app/service/add-friend-option/)을 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: required) -->

officialAccount.id

String

사용자에게 친구 추가 또는 차단 해제를 요청할 LINE Official Account의 ID입니다. Basic ID 또는 [premium ID](https://developers.line.biz/en/glossary/#premium-id)를 지정하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

officialAccount.fallback

Boolean

`officialAccount.id` 속성에 지정한 LINE Official Account가 존재하지 않거나, 허용 목록에 등록되어 있지 않거나, 그 밖의 이유로 사용할 수 없는 경우 기본 LINE Official Account를 표시할지 여부입니다. 기본값은 `true`입니다.

- `true`: 기본 LINE Official Account를 표시합니다.
- `false`: LINE Official Account를 표시하지 않습니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

params.template

Object

친구 추가 또는 차단 해제를 요청하는 subwindow에 표시되는 메시지의 [template](https://developers.line.biz/en/reference/liff/#request-friendship-template)을 지정하는 객체입니다.

<!-- parameter end -->
<!-- parameter start (props: required) -->

template.id

String

친구 추가 또는 차단 해제를 요청하는 subwindow에 표시되는 메시지의 [template](https://developers.line.biz/en/reference/liff/#request-friendship-template) ID입니다.

<!-- parameter end -->

##### Template 

| ID | Category | Japanese | English |
| --- | --- | --- | --- |
|  | Default | この公式アカウントを友だち追加しますか？ | Add this official account as a friend? |
| `bonusContent` | Bonus content | 公式アカウントから特典コンテンツやお得な情報をお届けします。 | Get bonus content and special offers from this official account. |
| `bonusItem` | Bonuses | 公式アカウントからボーナスやアイテムをお届けします。 | Get bonuses and items from this official account. |
| `campaign` | Campaigns | 公式アカウントからキャンペーンなどのお得な情報をお届けします。 | Get campaign news and special offers from this official account. |
| `coupon` | Coupons | 公式アカウントからクーポンや特典情報をお届けします。 | Get coupons and special offers from this official account. |
| `couponUsefulInfo` | Coupons and useful information | 公式アカウントから定期的にクーポンや有益な情報をお届けします。 | Get regular coupons and useful information from this official account. |
| `eventReward` | Events and rewards | 公式アカウントからイベント情報や限定特典をお届けします。 | Get event info and exclusive rewards from this official account. |
| `exclusiveContent` | Exclusive content | 公式アカウントからここでしか見られない限定コンテンツをお届けします。 | Get exclusive content you won’t find anywhere else from this official account. |
| `exclusiveUpdate` | Exclusive updates | 公式アカウントから特別なお知らせをお届けします。 | Get special updates from this official account. |
| `featureAccess` | Feature access | 公式アカウントの便利な機能をご利用いただけます。 | Get access to useful features from this official account. |
| `gameInfoTips` | Game information | 公式アカウントからゲーム情報やプレイに役立つヒントをお届けします。 | Get game news and helpful gameplay tips from this official account. |
| `gameNotification` | Game information | 公式アカウントでこのゲームからの通知を受け取れます。 | Get notifications from this game through its official account. |
| `importantAnnouncement` | Important announcements | 公式アカウントから重要なお知らせをお届けします。 | Get important updates from this official account. |
| `newReleaseUpdate` | New releases and updates | 公式アカウントから新着・更新情報をお届けします。 | Get the latest news and updates from this official account. |
| `promotionalFlyer` | Flyers | 公式アカウントからお得なチラシ情報をお届けします。 | Get flyers with the latest deals from this official account. |
| `usefulInfo` | Useful information | 公式アカウントから有益な情報をお届けします。 | Get useful information from this official account. |

#### Return value 

`Promise` 객체를 반환합니다.

<!-- note start -->

**The result of the user's action cannot be confirmed from the return value**

반환 값으로는 사용자가 LINE Official Account를 친구로 추가했는지 또는 차단을 해제했는지 확인할 수 없습니다. `liff.requestFriendship()` 메서드를 호출한 후 친구 상태를 확인하려면 [`liff.getFriendship()`](https://developers.line.biz/en/reference/liff/#get-friendship) 메서드를 사용하십시오.

<!-- note end -->

#### Error response 

`Promise`가 reject되면 [`LiffError`](https://developers.line.biz/en/reference/liff/#liff-errors)가 전달됩니다. 다음 오류는 `liff.requestFriendship()` 메서드에 특정된 오류입니다.

| Error code | Error message | Description |
| --- | --- | --- |
| `FORBIDDEN` | `No bot could be resolved for the request.` | <p>표시할 LINE Official Account가 존재하지 않습니다. 가능한 원인은 다음과 같습니다.</p><ul><li>LINE Login 채널에 **Linked LINE Official Account**가 설정되어 있지 않습니다.</li><li>LINE MINI App 채널에 **Default LINE Official Account**가 설정되어 있지 않고 **Use multiple accounts**가 비활성화되어 있습니다.</li><li>LINE MINI App 채널에 **Default LINE Official Account**가 설정되어 있지 않고 `officialAccount.id` 속성도 지정하지 않았습니다.</li><li>`officialAccount.id` 속성에 지정한 LINE Official Account가 존재하지 않고, `officialAccount.fallback` 속성 값이 `false`입니다.</li><li>`officialAccount.id` 속성에 지정한 LINE Official Account가 허용 목록에 등록되어 있지 않고, `officialAccount.fallback` 속성 값이 `false`입니다.</li><li>`officialAccount.id` 속성에 지정한 LINE Official Account가 정지되었거나 삭제되었고, `officialAccount.fallback` 속성 값이 `false`입니다.</li></ul> |
| `FORBIDDEN` | `subwindowOpen is not allowed in this LIFF app` | LIFF 앱의 화면 크기가 `Full`로 설정되어 있지 않습니다. |
| `INVALID_ARGUMENT` | `officialAccount.id must start with "@".` | `officialAccount.id` 속성의 값이 `@`로 시작하지 않습니다. |

## Window 

### liff.openWindow() 

지정한 URL을 LINE's in-app browser 또는 외부 브라우저에서 엽니다.

<!-- note start -->

**Operating environment of liff.openWindow()**

외부 브라우저에서 `liff.openWindow()`를 사용하는 경우 동작이 보장되지 않습니다.

<!-- note end -->

_Example_

<!-- tab start `javascript` -->

```javascript
liff.openWindow({
  url: "https://line.me",
  external: true,
});
```

<!-- tab end -->

#### Behavioral differences by LINE version 

[Universal Links](https://developer.apple.com/documentation/xcode/allowing-apps-and-websites-to-link-to-your-content/) 또는 [App Links](https://developer.android.com/training/app-links)를 지원하는 URL을 열 때 `liff.openWindow()` 메서드의 동작은 LINE 버전과 [`params.external`](https://developers.line.biz/en/reference/liff/#open-window-arguments) 파라미터 설정에 따라 달라집니다. 동작의 차이는 다음과 같습니다.

|  | `params.external = false`<br>(기본값) | `params.external = true` |
| --- | --- | --- |
| LINE 14.20.0 미만 (\*) | <ul><li>iOS: LINE's in-app browser에서 URL을 엽니다.</li><li>Android: 해당 앱으로 전환합니다.</li></ul> | <ul><li>iOS: 해당 앱으로 전환합니다.</li><li>Android: 기본 브라우저에서 URL을 엽니다.</li></ul> |
| LINE 14.20.0 이상,<br>또는 15.20.0 미만| 해당 앱으로 전환합니다. | 해당 앱으로 전환합니다. |
| LINE 15.20.0 이상 | LINE's in-app browser에서 URL을 엽니다. | 해당 앱으로 전환합니다. |

\* LINE 14.20.0 이상에서는 동작이 OS별로 달라지지 않습니다.

#### Syntax 

```javascript
liff.openWindow(params);
```

#### Arguments 

<!-- parameter start (props: required) -->

params

Object

파라미터 객체

<!-- parameter end -->
<!-- parameter start (props: required) -->

params.url

String

URL입니다. 전체 URL을 지정하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

params.external

Boolean

URL을 외부 브라우저에서 열지 여부입니다. 다음 값 중 하나를 지정하십시오. 기본값은 `false`입니다.

- `true`: 외부 브라우저에서 URL을 엽니다.
- `false`: LINE's in-app browser에서 URL을 엽니다.

<!-- parameter end -->

#### Return value 

없음

### liff.closeWindow() 

LIFF 앱을 닫습니다.

LIFF 앱을 닫을 때의 동작은 LINE 앱 버전과 LIFF 앱의 설정에 따라 달라집니다. 자세한 내용은 LIFF 문서의 [Behavior when closing the LIFF app](https://developers.line.biz/en/docs/liff/developing-liff-apps/#behavior-when-closing-liff-app)을 참조하십시오.

<!-- tip start -->

**This method can be used before the LIFF app is initialized**

`liff.init()`에 의한 LIFF 앱 초기화가 끝나기 전에 `liff.closeWindow()` 메서드를 사용하려면 LIFF SDK 버전이 v2.4.0 이상이어야 합니다.

<!-- tip end -->

<!-- note start -->

**Note**

외부 브라우저에서 `liff.closeWindow()`가 작동한다고 보장할 수 없습니다.

<!-- note end -->

_Example_

<!-- tab start `javascript` -->

```javascript
liff.closeWindow();
```

<!-- tab end -->

#### Syntax 

```javascript
liff.closeWindow();
```

#### Arguments 

없음

#### Return value 

없음

## Message 

### liff.sendMessages() 

사용자를 대신하여 LIFF 앱이 열린 채팅방에 메시지를 보냅니다.

이 기능을 사용하려면 다음 조건을 모두 충족해야 합니다.

- 1:1 채팅, [그룹 채팅](https://developers.line.biz/en/glossary/#group) 또는 [다인 채팅](https://developers.line.biz/en/glossary/#room)에서 실행된 LIFF 앱의 LIFF browser 내부여야 합니다.
- [`chat_message.write` scope](https://developers.line.biz/en/docs/liff/registering-liff-apps/#registering-liff-app)가 활성화되어 있어야 합니다.
- LIFF 앱이 [최근 사용한 서비스](https://developers.line.biz/en/docs/liff/overview/#multi-tab-view-recent-service) 섹션에서 다시 로드되지 않았어야 합니다.

조건을 충족하지 않으면 `liff.sendMessages()` 메서드를 사용할 수 없으며, 오류 코드 `403`과 함께 `user doesn't grant required permissions yet` 오류가 발생합니다. 다음은 이 오류가 발생하는 경우의 예입니다.

- [Keep Memo](https://help.line.me/line/smartphone/pc?lang=en&contentId=20017696) 기능을 사용하여 LIFF 앱에 접근한 경우
- 웹사이트 리디렉션 과정 등을 통해 [LIFF 앱을 여는](https://developers.line.biz/en/docs/line-login/using-line-url-scheme/#opening-a-liff-app) URL 스킴에 접근한 경우
- LIFF 간 전환 후 `chat_message.write` scope가 비활성화된 경우. 자세한 내용은 LIFF 문서의 [About the "chat_message.write" scope after transitioning between LIFF apps](https://developers.line.biz/en/docs/liff/opening-liff-app/#about-chat-message-write-scope)를 참조하십시오.
- 사용자가 `chat_message.write` scope에 대한 권한을 부여하지 않은 경우

[`liff.getContext()`](https://developers.line.biz/en/reference/liff/#get-context) 메서드를 사용하면 LIFF 앱이 실행된 화면의 유형을 가져올 수 있습니다.

_Example_

<!-- tab start `javascript` -->

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

<!-- tab end -->

#### Syntax 

```javascript
liff.sendMessages(messages);
```

#### Arguments 

<!-- parameter start (props: required) -->

messages

Array of objects

[Message objects](https://developers.line.biz/en/reference/messaging-api/#message-objects)\
최대: 5\
다음 유형의 Messaging API 메시지를 보낼 수 있습니다.

- [Text message](https://developers.line.biz/en/docs/messaging-api/message-types/#text-messages). 다만 `emojis` 속성과 `quoteToken` 속성은 사용할 수 없습니다.
- [Sticker message](https://developers.line.biz/en/docs/messaging-api/message-types/#sticker-messages). 다만 `quoteToken` 속성은 사용할 수 없습니다.
- [Image message](https://developers.line.biz/en/docs/messaging-api/message-types/#image-messages).
- [Video message](https://developers.line.biz/en/docs/messaging-api/message-types/#video-messages). 다만 `trackingId` 속성은 사용할 수 없습니다.
- [Audio message](https://developers.line.biz/en/docs/messaging-api/message-types/#audio-messages).
- [Location message](https://developers.line.biz/en/docs/messaging-api/message-types/#location-messages).
- [Template message](https://developers.line.biz/en/docs/messaging-api/message-types/#template-messages). 다만 action으로는 [URI action](https://developers.line.biz/en/docs/messaging-api/actions/#uri-action)만 설정할 수 있습니다.
- [Flex Message](https://developers.line.biz/en/docs/messaging-api/message-types/#flex-messages). 다만 action으로는 [URI action](https://developers.line.biz/en/docs/messaging-api/actions/#uri-action)만 설정할 수 있습니다.

<!-- parameter end -->

`liff.sendMessages()` 메서드를 사용하여 사용자가 template message 또는 Flex Message를 보내는 경우 LINE Platform에서 webhook이 전송되지 않습니다. 그 밖의 모든 [메시지 유형](https://developers.line.biz/en/docs/messaging-api/message-types/)에 대해서는 webhook이 전송됩니다. `liff.sendMessages()` 메서드로 이미지, 동영상, 오디오 메시지를 보내면 생성되는 webhook 이벤트에는 값이 `external`인 `contentProvider.type` 속성이 포함됩니다. 자세한 내용은 Messaging API reference의 [Message event](https://developers.line.biz/en/reference/messaging-api/#message-event)를 참조하십시오.

#### Return value 

`Promise` 객체를 반환합니다.

- 메시지를 성공적으로 보내면 `Promise`가 resolve됩니다. 값은 전달되지 않습니다.
- 메시지 전송에 실패하면 `Promise`가 reject되고 [`LiffError`](https://developers.line.biz/en/reference/liff/#liff-errors)가 전달됩니다.

### liff.shareTargetPicker() 

Target picker(수신자를 선택하는 화면)를 표시하고, 개발자가 만든 메시지를 선택한 대상에게 보냅니다. 메시지는 사용자가 직접 보낸 것처럼 선택된 각 수신자에게 표시됩니다.

Target picker에서 사용자는 그룹, 친구, 채팅에서 수신자를 선택할 수 있습니다. OpenChat은 포함되지 않습니다.

선택할 수 있는 수신자에 대한 자세한 내용은 LIFF 문서의 [Recipients that can be selected in the share target picker](https://developers.line.biz/en/docs/liff/developing-liff-apps/#share-target-picker-displayed-targets)를 참조하십시오.

#### Conditions for using the liff.shareTargetPicker() method 

`liff.shareTargetPicker()` 메서드를 사용하려면 다음 조건을 모두 충족해야 합니다.

- 사용자가 로그인되어 있어야 합니다.
- [LINE Developers Console](https://developers.line.biz/console/)에서 share target picker가 활성화되어 있어야 합니다. 자세한 내용은 LIFF 문서의 [Using the share target picker](https://developers.line.biz/en/docs/liff/developing-liff-apps/#using-share-target-picker)를 참조하십시오.

<!-- note start -->

**The email address login screen may be displayed when executing the liff.shareTargetPicker() method in a smartphone's external browser**

스마트폰의 [외부 브라우저](https://developers.line.biz/en/glossary/#external-browser)에서 target picker를 표시하려면 [Single Sign On (SSO) 로그인](https://developers.line.biz/en/docs/line-login/integrate-line-login/#line-sso-login) 세션이 필요합니다.

[자동 로그인](https://developers.line.biz/en/docs/line-login/integrate-line-login/#line-auto-login)을 사용하는 로그인 과정에서는 SSO 로그인 세션이 발급되지 않습니다. 따라서 `liff.shareTargetPicker()` 메서드를 실행하면 target picker가 표시되지 않고 대신 [이메일 주소 로그인](https://developers.line.biz/en/docs/line-login/integrate-line-login/#mail-or-qrcode-login) 화면이 표시될 수 있습니다.

사용자가 이메일 주소와 비밀번호를 입력하여 로그인하면 SSO 로그인 세션이 발급되고 target picker가 올바르게 표시됩니다.

<!-- note end -->

<!-- note start -->

**We don't retrieve the number of people to whom a user has sent a message using the share target picker**

사용자 개인정보를 보호하기 위해 share target picker를 통해 사용자의 메시지를 몇 명이 받았는지에 대한 정보는 수집하거나 제공하지 않습니다.

<!-- note end -->

_Example_

<!-- tab start `javascript` -->

```javascript
liff
  .shareTargetPicker(
    [
      {
        type: "text",
        text: "Hello, World!",
      },
    ],
    {
      isMultiple: true,
    },
  )
  .then(function (res) {
    if (res) {
      // succeeded in sending a message through TargetPicker
      console.log(`[${res.status}] Message sent!`);
    } else {
      // sending message canceled
      console.log("TargetPicker was closed!");
    }
  })
  .catch(function (error) {
    // something went wrong before sending a message
    console.log("something wrong happen");
  });
```

<!-- tab end -->

#### Syntax 

```javascript
liff.shareTargetPicker(messages, options);
```

#### Arguments 

<!-- parameter start (props: required) -->

messages

Array of objects

[Message objects](https://developers.line.biz/en/reference/messaging-api/#message-objects)\
최대: 5\
다음 유형의 Messaging API 메시지를 보낼 수 있습니다.

- [Text message](https://developers.line.biz/en/docs/messaging-api/message-types/#text-messages). 다만 `emojis` 속성과 `quoteToken` 속성은 사용할 수 없습니다.
- [Image message](https://developers.line.biz/en/docs/messaging-api/message-types/#image-messages).
- [Video message](https://developers.line.biz/en/docs/messaging-api/message-types/#video-messages). 다만 `trackingId` 속성은 사용할 수 없습니다.
- [Audio message](https://developers.line.biz/en/docs/messaging-api/message-types/#audio-messages).
- [Location message](https://developers.line.biz/en/docs/messaging-api/message-types/#location-messages).
- [Template message](https://developers.line.biz/en/docs/messaging-api/message-types/#template-messages). 다만 action으로는 [URI action](https://developers.line.biz/en/docs/messaging-api/actions/#uri-action)만 설정할 수 있습니다.
- [Flex Message](https://developers.line.biz/en/docs/messaging-api/message-types/#flex-messages). 다만 action으로는 [URI action](https://developers.line.biz/en/docs/messaging-api/actions/#uri-action)만 설정할 수 있습니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

options

Object

Share target picker 옵션

<!-- parameter end -->
<!-- parameter start (props: optional) -->

options.isMultiple

Boolean

다음 값 중 하나를 사용하여 사용자가 target picker에서 여러 메시지 수신자를 선택할 수 있도록 할지 여부를 지정합니다. 기본값은 `true`입니다.

- `true`: 사용자는 그룹, 친구, 채팅에서 여러 수신자를 선택할 수 있습니다.
- `false`: 사용자는 친구 중 한 명만 수신자로 선택할 수 있습니다.

<!-- parameter end -->

<!-- note start -->

**Setting isMultiple to false doesn't guarantee that the message will be sent to only one friend**

`isMultiple` 속성을 `false`로 설정하더라도 share target picker를 여러 번 호출하거나 같은 메시지를 다른 수신자에게 다시 공유하면 여러 사용자에게 메시지를 보낼 수 있습니다. 사용자가 한 명의 친구에게 메시지를 한 번만 보낼 수 있도록 엄격하게 제한하려면 LIFF 앱을 구현할 때 제한을 추가하십시오.

다음은 URL이 포함된 메시지를 보내고 해당 URL의 접근을 제한하는 예입니다.

1. URL에 고유한 토큰을 부여하고 메시지를 보냅니다.
2. 메시지의 URL에 접근하면 서버에서 토큰을 검증하고 여러 사용자가 접근하는 것을 제한합니다.

<!-- note end -->

#### Return value

`Promise` 객체를 반환합니다.

- 메시지를 올바르게 보내면 `Promise`가 resolve되고 다음 속성을 가진 객체가 전달됩니다.

    <!-- parameter start -->

  status

  String

  `success`

    <!-- parameter end -->

- 사용자가 메시지를 보내기 전에 target picker를 취소하고 닫으면 `Promise`는 resolve되지만 객체는 전달되지 않습니다.

- Target picker가 표시되기 전에 문제가 발생하면 `Promise`가 reject되고 `LiffError`가 전달됩니다. LiffError 객체에 대한 자세한 내용은 [LIFF SDK errors](https://developers.line.biz/en/reference/liff/#liff-errors)를 참조하십시오.

<!-- note start -->

**Note**

`Promise`가 resolve되거나 reject되는 콜백 함수에서 `alert()`를 사용하면 일부 기기에서 LIFF 앱이 작동하지 않을 수 있습니다.

<!-- note end -->

## Camera 

### liff.scanCodeV2() 

2D 코드 리더를 실행하여 문자열을 얻습니다. 2D 코드 리더를 활성화하려면 [LINE Developers Console](https://developers.line.biz/console/)에서 **Scan QR**을 켜십시오.

<!-- note start -->

**Operating environments of liff.scanCodeV2()**

`liff.scanCodeV2()`는 다음 환경에서 작동합니다.

- iOS: iOS 14.3 이상
- Android: 모든 버전
- 외부 브라우저: [WebRTC API](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API)를 지원하는 웹 브라우저

<table>
  <thead>
    <tr>
      <th>OS</th>
      <th>Version</th>
      <th>LIFF browser</th>
      <th>External browser</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">iOS</td>
      <td>11-14.2</td>
      <td>❌</td>
      <td>✅ *1</td>
    </tr>
    <tr>
      <td>14.3 or later</td>
      <td>✅ *2</td>
      <td>✅ *1</td>
    </tr>
    <tr>
      <td>Android</td>
      <td>All versions</td>
      <td>✅ *2</td>
      <td>✅ *1</td>
    </tr>
    <tr>
      <td>PC</td>
      <td>All versions</td>
      <td>❌</td>
      <td>✅ *1</td>
    </tr>
  </tbody>
</table>

\*1 [WebRTC API](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API)를 지원하는 웹 브라우저만 사용할 수 있습니다.

\*2 LIFF browser의 화면 크기가 `Full`인 경우에만 사용할 수 있습니다. 자세한 내용은 LIFF 문서의 [Size of the LIFF browser](https://developers.line.biz/en/docs/liff/overview/#screen-size)를 참조하십시오.

<!-- note end -->

<!-- note start -->

**Turn [Scan QR] on to launch the 2D code reader**

[LIFF 앱을 채널에 추가](https://developers.line.biz/en/docs/liff/registering-liff-apps/)할 때 **Scan QR**을 켜십시오. LIFF 앱을 채널에 추가한 후에도 [LINE Developers Console](https://developers.line.biz/console/)의 LIFF 탭에서 **Scan QR** 설정을 변경할 수 있습니다.

<!-- note end -->

<!-- note start -->

**The operation specification of liff.scanCodeV2()**

`liff.scanCodeV2()`는 내부적으로 [jsQR](https://github.com/cozmo/jsQR)이라는 외부 라이브러리를 사용합니다. 따라서 `liff.scanCodeV2()` 메서드를 실행할 때 실행되는 2D 코드 리더는 [jsQR](https://github.com/cozmo/jsQR)의 동작 사양에 따릅니다. 사용하는 라이브러리는 예고 없이 업데이트되거나 변경될 수 있습니다.

<!-- note end -->

_Example_

<!-- tab start `javascript` -->

```javascript
liff
  .scanCodeV2()
  .then((result) => {
    // result = { value: "" }
  })
  .catch((error) => {
    console.log("error", error);
  });
```

<!-- tab end -->

#### Syntax 

```javascript
liff.scanCodeV2();
```

#### Arguments 

없음

#### Return value 

`Promise` 객체를 반환합니다.

2D 코드 리더가 문자열을 읽으면 `Promise`가 resolve되고 문자열을 담은 객체가 전달됩니다.

<!-- parameter start -->

value

String

2D 코드 리더로 스캔한 문자열

<!-- parameter end -->

##### Error response 

`Promise`가 reject되면 [`LiffError`](https://developers.line.biz/en/reference/liff/#liff-errors)가 전달됩니다.

### liff.scanCode() 

<!-- note start -->

**liff.scanCode() method deprecated**

기존 `liff.scanCode()` 메서드는 [deprecated](https://developers.line.biz/en/glossary/#deprecated)되었습니다. 2D 코드 리더를 구현할 때는 [`liff.scanCodeV2()`](https://developers.line.biz/en/reference/liff/#scan-code-v2) 메서드를 사용하는 것을 권장합니다.

<!-- note end -->

<br>

2D 코드 리더를 시작하고 사용자가 읽은 문자열을 가져옵니다. 2D 코드 리더를 시작하려면 [LINE Developers Console](https://developers.line.biz/console/)에서 `ScanQR`을 켜십시오.

<!-- note start -->

**Not available on LINE for iOS**

`liff.scanCode()`는 다음 환경에서 작동합니다.

<table>
  <thead>
    <tr>
      <th>OS</th>
      <th>Version</th>
      <th>LIFF browser</th>
      <th>External browser</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>iOS</td>
      <td>All versions</td>
      <td>❌</td>
      <td>❌</td>
    </tr>
    <tr>
      <td>Android</td>
      <td>All versions</td>
      <td>✅</td>
      <td>❌</td>
    </tr>
    <tr>
      <td>PC</td>
      <td>All versions</td>
      <td>❌</td>
      <td>❌</td>
    </tr>
  </tbody>
</table>

기술적인 문제로 인해 LINE for iOS에서는 `liff.scanCode`가 `undefined`입니다. 샘플 코드와 같이 함수가 존재하는지 확인한 후 사용하십시오. LINE for iOS 또는 외부 브라우저에서 2D 코드 리더를 사용하려면 [`liff.scanCodeV2()`](https://developers.line.biz/en/reference/liff/#scan-code-v2)를 참조하십시오.

<!-- note end -->

<!-- note start -->

**Turn [Scan QR] on to launch the 2D code reader**

- [LIFF 앱을 채널에 추가](https://developers.line.biz/en/docs/liff/registering-liff-apps/)할 때 **Scan QR**을 켜십시오. LIFF 앱을 채널에 추가한 후에도 [LINE Developers Console](https://developers.line.biz/console/)의 LIFF 탭에서 **Scan QR** 설정을 변경할 수 있습니다.
- 외부 브라우저에서는 `liff.scanCode()`를 사용할 수 없습니다.

<!-- note end -->

_Example_

<!-- tab start `javascript` -->

```javascript
if (liff.scanCode) {
  liff.scanCode().then((result) => {
    // result = { value: "" }
  });
}
```

<!-- tab end -->

#### Syntax 

```javascript
liff.scanCode();
```

#### Arguments 

없음

#### Return value 

`Promise` 객체를 반환합니다.

2D 코드 리더가 문자열을 읽으면 `Promise`가 resolve되고 읽은 문자열을 담은 객체가 전달됩니다.

<!-- parameter start -->

value

String

2D 코드 리더로 읽은 문자열

<!-- parameter end -->

## Permanent link 

### liff.permanentLink.createUrlBy() 

LIFF 앱의 임의의 페이지에 대한 permanent link를 가져옵니다.

Permanent link 형식:

```
https://liff.line.me/{liffId}/{path}?{query}#{URL fragment}
```

_Example_

<!-- tab start `javascript` -->

```javascript
// For example, if the endpoint URL of the LIFF app
// is https://example.com/path1?q1=v1
// and its LIFF ID is 1234567890-AbcdEfgh
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

liff.permanentLink
  .createUrlBy("https://example.com/")
  .catch((error) => {
  // Error: currentPageUrl must start with endpoint URL of LIFF App.
  console.log(error);
});
```

<!-- tab end -->

#### Syntax 

```javascript
liff.permanentLink.createUrlBy(url);
```

#### Arguments 

<!-- parameter start (props: required) -->

url

String

Permanent link를 가져올 URL입니다. 임의의 쿼리 파라미터나 URL 프래그먼트를 추가할 수 있습니다.

<!-- parameter end -->

#### Return value 

`Promise` 객체를 반환합니다.

`Promise`가 resolve되면 permanent link 문자열을 반환합니다.

##### Error responsee 

Permanent link를 가져올 URL이 [LINE Developers Console](https://developers.line.biz/console/)에서 **Endpoint URL**에 지정한 URL로 시작하지 않으면 `Promise`가 reject되고 [`LiffError`](https://developers.line.biz/en/reference/liff/#liff-errors)가 반환됩니다.

예를 들어 permanent link를 가져올 URL(예: `https://example.com/`)이 **Endpoint URL**(예: `https://example.com/path1?q1=v1`)보다 상위 경로이면 `Promise`가 reject됩니다.

### liff.permanentLink.createUrl() 

<!-- note start -->

**liff.permanentLink.createUrl() may be deprecated in the next major version update**

기술적인 문제로 인해 `liff.permanentLink.createUrl()`은 다음 메이저 버전 업데이트에서 deprecated될 수 있습니다. 현재 페이지의 permanent link를 가져오려면 [`liff.permanentLink.createUrlBy()`](https://developers.line.biz/en/reference/liff/#permanent-link-create-url-by)를 사용하는 것을 권장합니다.

<!-- note end -->

현재 페이지의 permanent link를 가져옵니다.

Permanent link 형식:

```
https://liff.line.me/{liffId}/{path}?{query}#{URL fragment}
```

_Example_

<!-- tab start `javascript` -->

```javascript
// For example, if current location is
// /shopping?item_id=99#details
// (LIFF ID = 1234567890-AbcdEfgh)
const myLink = liff.permanentLink.createUrl();

// myLink equals "https://liff.line.me/1234567890-AbcdEfgh/shopping?item_id=99#details"
```

<!-- tab end -->

#### Syntax 

```javascript
liff.permanentLink.createUrl();
```

#### Arguments 

없음

#### Return value 

현재 페이지의 permanent link를 문자열로 반환합니다.

현재 페이지 URL이 LINE Developers console의 **Endpoint URL**에 지정한 URL로 시작하지 않으면 `LiffError` 예외가 발생합니다.

### liff.permanentLink.setExtraQueryParam() 

<!-- note start -->

**liff.permanentLink.setExtraQueryParam() may be deprecated in the next major version update**

기술적인 문제로 인해 `liff.permanentLink.setExtraQueryParam()`은 다음 메이저 버전 업데이트에서 deprecated될 수 있습니다. 현재 페이지의 permanent link에 임의의 쿼리 파라미터를 추가하려면 [`liff.permanentLink.createUrlBy()`](https://developers.line.biz/en/reference/liff/#permanent-link-create-url-by)를 사용하는 것을 권장합니다.

<!-- note end -->

현재 페이지의 permanent link에 임의의 쿼리 파라미터를 추가할 수 있습니다.

`liff.permanentLink.setExtraQueryParam()`을 실행할 때마다 이전에 추가한 쿼리 파라미터는 덮어쓰기됩니다.

<!-- tip start -->

**Delete added query parameters**

- 추가한 쿼리 파라미터를 삭제하려면 `liff.permanentLink.setExtraQueryParam("")`을 실행하십시오.
- 사용자가 다른 페이지로 이동하면 추가한 쿼리 파라미터는 삭제됩니다.

<!-- tip end -->

_Example_

<!-- tab start `javascript` -->

```javascript
// For example, if current location is
// /food?menu=pizza
// (LIFF ID = 1234567890-AbcdEfgh)
liff.permanentLink.setExtraQueryParam("user_tracking_id=8888");
const myLink = liff.permanentLink.createUrl();

// myLink equals "https://liff.line.me/1234567890-AbcdEfgh/food?menu=pizza&user_tracking_id=8888"
```

<!-- tab end -->

#### Syntax 

```javascript
liff.permanentLink.setExtraQueryParam(extraString);
```

#### Arguments 

<!-- parameter start (props: required) -->

extraString

String

추가할 쿼리 파라미터

<!-- parameter end -->

#### Return value 

없음

## LIFF plugin 

### liff.use() 

[Pluggable SDK](https://developers.line.biz/en/docs/liff/pluggable-sdk/) 또는 [LIFF plugin](https://developers.line.biz/en/docs/liff/liff-plugin/)에서 LIFF API를 활성화하고 초기화합니다.

_Example of LIFF API in the pluggable SDK_

<!-- tab start `javascript` -->

```javascript
import liff from "@line/liff/core";
import GetOS from "@line/liff/get-os";

liff.use(new GetOS());

liff.init({
  liffId: "123456-abcedfg", // Use own liffId
});
```

<!-- tab end -->

_Example of LIFF plugin_

<!-- tab start `javascript` -->

```javascript
class greetPlugin {
  constructor() {
    this.name = "greet";
  }

  install() {
    return {
      hello: this.hello,
    };
  }

  hello() {
    console.log("Hello, World!");
  }
}

liff.use(new greetPlugin());
```

<!-- tab end -->

#### Syntax 

```javascript
liff.use(module, option);
```

#### Arguments 

<!-- parameter start (props: required) -->

module

Object

Pluggable SDK의 LIFF API 모듈 또는 LIFF plugin입니다.

LIFF API 모듈을 전달하는 경우 LIFF API 모듈을 인스턴스화해야 합니다. 자세한 내용은 LIFF 문서의 [How to use the pluggable SDK](https://developers.line.biz/en/docs/liff/pluggable-sdk/#how-to-use)를 참조하십시오.

LIFF plugin을 전달하고 해당 LIFF plugin이 클래스인 경우 LIFF plugin을 인스턴스화해야 합니다. 자세한 내용은 LIFF 문서의 [Using a LIFF plugin](https://developers.line.biz/en/docs/liff/liff-plugin/#use-liff-plugin)을 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

option

Any value

`module` 속성으로 지정한 LIFF plugin에 전달할 값입니다. 이 값은 LIFF plugin의 [`install()`](https://developers.line.biz/en/docs/liff/liff-plugin/#install) 메서드의 두 번째 인자로 전달됩니다. 자세한 내용은 LIFF 문서의 [option](https://developers.line.biz/en/docs/liff/liff-plugin/#option)을 참조하십시오.

<!-- parameter end -->

#### Return value 

`liff` 객체를 반환합니다.

## Internationalization 

### liff.i18n.setLang() 

LIFF SDK가 표시하는 텍스트의 언어를 지정합니다.

_Example_

<!-- tab start `javascript` -->

```javascript
liff.i18n.setLang("en");
```

<!-- tab end -->

#### Syntax 

```javascript
liff.i18n.setLang(language);
```

#### Arguments 

<!-- parameter start (props: required) -->

language

String

[RFC 5646 (BCP 47)](https://datatracker.ietf.org/doc/html/rfc5646)에 정의된 언어 태그입니다. 지정한 언어 태그에 대한 번역이 없으면 `en`이 대체로 사용됩니다.

<!-- parameter end -->

#### Return value 

`Promise` 객체를 반환합니다.

##### Error response 

`Promise`가 reject되면 [`LiffError`](https://developers.line.biz/en/reference/liff/#liff-errors)가 전달됩니다.

## Others 

### liff.createShortcutOnHomeScreen() 

<!-- tip start -->

**This feature can only be used for verified MINI Apps**

이 기능은 검증된 MINI App에서만 사용할 수 있습니다. 검증되지 않은 MINI App은 Developing 내부 채널에서 기능을 테스트할 수 있지만, Published 내부 채널에서는 사용할 수 없습니다.

<!-- tip end -->

사용자 기기의 홈 화면에 [LINE MINI App](https://developers.line.biz/en/docs/line-mini-app/)의 바로가기를 추가하는 화면을 표시합니다.

![](https://developers.line.biz/media/line-mini-app/develop/add-to-home-screen/add-shortcut-screen-ios-en.webp)

자세한 내용은 LINE MINI App 문서의 [Add a shortcut to your LINE MINI App to the home screen of the user's device](https://developers.line.biz/en/docs/line-mini-app/develop/add-to-home-screen/)를 참조하십시오.

<!-- note start -->

**When to execute the liff.createShortcutOnHomeScreen() method**

사용자 경험을 해치지 않도록 `liff.createShortcutOnHomeScreen()` 메서드는 LINE MINI App에서 사용자의 동작(예: 탭)에 응답하여 실행하십시오.

<!-- note end -->

_Example_

<!-- tab start `javascript` -->

```javascript
// If the endpoint URL of the LINE MINI App
// is https://example.com/path1/path2
// and its LIFF ID is 1234567890-AbcdEfgh

// Example of specifying the LIFF URL
liff
  .createShortcutOnHomeScreen({
    url: "https://miniapp.line.me/1234567890-AbcdEfgh",
  })
  .then(() => { /* ... */ });

liff
  .createShortcutOnHomeScreen({
    url: "https://liff.line.me/1234567890-AbcdEfgh",
  })
  .then(() => { /* ... */ });

// Example of specifying a permanent link
liff
  .createShortcutOnHomeScreen({
    url: "https://liff.line.me/1234567890-AbcdEfgh/path3",
  })
  .then(() => { /* ... */ });

// Example of specifying the endpoint URL of the LINE MINI App
liff
  .createShortcutOnHomeScreen({
    url: "https://example.com/path1/path2",
  })
  .then(() => { /* ... */ });

// Example of specifying a URL that begins with the endpoint URL of the LINE MINI App
liff
  .createShortcutOnHomeScreen({
    url: "https://example.com/path1/path2/path3",
  })
  .then(() => { /* ... */ });

// Example of specifying a URL that results in an error
liff
  .createShortcutOnHomeScreen({
    url: "https://example.com/invalid-path",
  })
  .then(() => { /* ... */ })
  .catch((error) => {
    // invalid URL.
    console.log(error.message);
  });
```

<!-- tab end -->

#### Conditions of use 

`liff.createShortcutOnHomeScreen()` 메서드를 사용하려면 다음 조건을 모두 충족해야 합니다.

- LINE MINI App이어야 합니다.
- LINE MINI App의 LIFF SDK 버전이 v2.23.0 이상이어야 합니다.
- 사용자 기기의 LINE 앱 버전이 13.20.0 이상이어야 합니다.

#### Operating conditions 

사용자 기기의 OS가 iOS인 경우 `liff.createShortcutOnHomeScreen()` 메서드가 작동하는 조건은 다음과 같습니다. 작동하지 않는 환경에서 이 메서드를 실행하면 오류 페이지가 표시됩니다.

| 기본 브라우저 | iOS 버전 | 작동 여부 |
| --- | --- | --- |
| Safari | All versions | 작동함 |
| Chrome | 16.4 이상 | 작동함 |
| Safari와 Chrome 이외의 브라우저 | 16.4 이상 | 작동을 보장할 수 없음 |
| Safari 이외의 브라우저 | 16.4 미만 | 작동하지 않음 |

예를 들어 iOS 16.4 미만에서 Chrome으로 `liff.createShortcutOnHomeScreen()` 메서드를 실행하면 다음 오류 페이지가 표시됩니다.

![](https://developers.line.biz/media/line-mini-app/develop/add-to-home-screen/add-shortcut-screen-ios-error-en.png)

#### Syntax 

```javascript
liff.createShortcutOnHomeScreen(params);
```

#### Arguments 

<!-- parameter start (props: required) -->

params

Object

파라미터 객체

<!-- parameter end -->
<!-- parameter start (props: required) -->

params.url

String

URL입니다. 다음 URL을 지정할 수 있습니다.

- [LIFF URL](https://developers.line.biz/en/glossary/#liff-url)
- [Permanent link](https://developers.line.biz/en/glossary/#permanent-link-liff)
- LINE MINI App의 Endpoint URL
- LINE MINI App의 Endpoint URL로 시작하는 URL

<!-- parameter end -->

#### Return value 

`Promise` 객체를 반환합니다.

바로가기 추가 화면이 표시되면 `Promise`가 resolve됩니다. 값은 전달되지 않습니다.

사용자가 실제로 LINE MINI App의 바로가기를 기기의 홈 화면에 추가했는지는 확인할 수 없습니다.

##### Error response 

`Promise`가 reject되면 [`LiffError`](https://developers.line.biz/en/reference/liff/#liff-errors)가 전달됩니다.
