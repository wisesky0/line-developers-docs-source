# 외부 브라우저에서 LINE MINI App 열기

<!-- tip start -->

**2025년 10월부터 LINE MINI App을 외부 브라우저에서 사용할 수 있습니다**

자세한 내용은 2025년 9월 26일 뉴스 [2025년 10월 1일부터 모든 LINE MINI App 사용자가 웹 브라우저에서 서비스를 이용할 수 있습니다](https://developers.line.biz/en/news/2025/09/26/mini-app-browser/)를 참고하세요.

<!-- tip end -->

LINE MINI App을 개발할 때는 사용자가 [외부 브라우저](https://developers.line.biz/en/glossary/#external-browser)로 엔드포인트 URL에 접근하더라도 LINE MINI App 서비스를 이용할 수 있도록 해야 합니다.

외부 브라우저에서 LINE MINI App을 사용할 때는 다음 사항에 유의하세요.

<!-- table of contents -->

## LINE 로그인이 필요한 서비스의 로그인 명시적으로 처리하기 

외부 브라우저에서 LINE MINI App을 열면, LIFF 브라우저와 달리 [`liff.init()`](https://developers.line.biz/en/reference/liff/#initialize-liff-app) 메서드를 실행하는 것만으로는 LINE 로그인이 실행되지 않습니다.

따라서 서비스를 이용하는 데 LINE 로그인이 필요하다면, 다음 방법 중 하나를 사용하여 LINE 로그인을 명시적으로 실행하세요.

### 1. 초기화 시 LINE 로그인 자동 실행 

[`liff.init()`](https://developers.line.biz/en/reference/liff/#initialize-liff-app) 메서드의 `config` 객체에 있는 `withLoginOnExternalBrowser` 속성에 `true`를 지정하면, 외부 브라우저에서 LIFF 앱을 초기화할 때 [`liff.login()`](https://developers.line.biz/en/reference/liff/#login) 메서드가 자동으로 실행됩니다.

예시:

```js
liff
  .init({
    liffId: "1234567890-AbcdEfgh", // Use own liffId
    withLoginOnExternalBrowser: true, // Enable automatic login process
  })
  .then(() => {
    // Start to use liff's api
  });
```

### 2. 사용자가 로그인하지 않은 경우 LINE 로그인 실행 

LINE 로그인을 하지 않은 사용자에게 서비스에 LINE 로그인이 필요하다면, LINE 로그인을 실행하기만 하면 됩니다.

[`liff.isLoggedIn()`](https://developers.line.biz/en/reference/liff/#is-logged-in) 메서드로 사용자의 로그인 상태를 확인하고, 로그인하지 않았다면 [`liff.login()`](https://developers.line.biz/en/reference/liff/#login) 메서드를 실행하세요.

예시:

```js
if (!liff.isLoggedIn()) {
  liff.login();
}
```

자세한 내용은 LIFF 문서의 [외부 브라우저에서 LINE 로그인 사용하기](https://developers.line.biz/en/docs/liff/developing-liff-apps/#to-use-line-login-in-external-browser)를 참고하세요.

## 외부 브라우저에서 사용할 수 없는 기능을 사용할 때 LINE 앱으로 안내하기 

LINE MINI App에서 외부 브라우저에서는 사용할 수 없는 기능을 사용해야 한다면, 사용자가 LINE 앱에서 LINE MINI App을 열어야 합니다.

외부 브라우저에서 사용할 수 없으며 동작을 보장하지 않는 기능은 다음과 같습니다.

- [liff.sendMessages()](https://developers.line.biz/en/reference/liff/#send-messages)
- [liff.openWindow()](https://developers.line.biz/en/reference/liff/#open-window)
- [liff.closeWindow()](https://developers.line.biz/en/reference/liff/#close-window)
- [liff.scanCode()](https://developers.line.biz/en/reference/liff/#scan-code) (지원 중단)
- [liff.iap.\* (인앱 결제)](https://developers.line.biz/en/reference/line-mini-app/#in-app-purchase)

이러한 기능을 사용하는 LINE MINI App을 외부 브라우저에서 열면, "이 기능을 사용하려면 LINE 앱에서 LINE MINI App을 열어야 합니다"라는 문구와 함께 화면에 LINE MINI App으로 이동하는 링크를 배치하는 것을 권장합니다.

LINE MINI App의 환경을 확인하려면 [`liff.getContext()`](https://developers.line.biz/en/reference/liff/#get-context) 및 [`liff.isInClient()`](https://developers.line.biz/en/reference/liff/#is-in-client) 메서드를 사용할 수 있습니다. LINE MINI App의 환경에 따라 화면 표시를 바꾸고 싶다면 이 메서드들을 사용하는 것을 권장합니다.

## LINE 사용자가 아닌 사용자가 LINE MINI App을 열 것을 가정하기 

LINE을 사용하지 않는 사용자도 LINE MINI App을 이용할 수 있도록, 외부 브라우저에서 LINE MINI App을 연 후 LINE 로그인 없이도 서비스가 동작하도록 하세요.

외부 브라우저에서 LINE 로그인 없이 사용할 수 있는 LIFF API 속성과 메서드는 다음과 같습니다.

- [liff.id](https://developers.line.biz/en/reference/liff/#id)
- [liff.ready](https://developers.line.biz/en/reference/liff/#ready)
- [liff.init()](https://developers.line.biz/en/reference/liff/#initialize-liff-app)
- [liff.getOS()](https://developers.line.biz/en/reference/liff/#get-os)
- [liff.getAppLanguage()](https://developers.line.biz/en/reference/liff/#get-app-language)
- [liff.getLanguage()](https://developers.line.biz/en/reference/liff/#get-language) (지원 중단)
- [liff.getVersion()](https://developers.line.biz/en/reference/liff/#get-version)
- [liff.getLineVersion()](https://developers.line.biz/en/reference/liff/#get-line-version)
- [liff.isInClient()](https://developers.line.biz/en/reference/liff/#is-in-client)
- [liff.isLoggedIn()](https://developers.line.biz/en/reference/liff/#is-logged-in)
- [liff.permanentLink.createUrlBy()](https://developers.line.biz/en/reference/liff/#permanent-link-create-url-by)
- [liff.use()](https://developers.line.biz/en/reference/liff/#use)
