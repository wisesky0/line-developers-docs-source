# 플러거블 SDK

<!-- table of contents -->

## 플러거블 SDK란 

플러거블 SDK는 LIFF SDK에 포함할 LIFF API를 선택할 수 있는 기능입니다.

LIFF 앱에서 사용하는 LIFF API만 포함하면 LIFF SDK 파일 크기를 최대 약 34%까지 줄일 수 있습니다. 그 결과 LIFF 앱의 표시 속도를 개선할 수 있습니다.

## 플러거블 SDK의 사용 조건 

플러거블 SDK는 LIFF v2.22.0 이상의 npm 버전에서만 사용할 수 있습니다. CDN 버전에서는 사용할 수 없습니다. npm 패키지 사용에 대한 자세한 내용은 [npm 패키지 사용하기](https://developers.line.biz/en/docs/liff/developing-liff-apps/#use-npm-package)를 참조하세요.

## 플러거블 SDK 사용 방법 

플러거블 SDK는 다음과 같이 사용할 수 있습니다.

- [liff 객체 가져오기](https://developers.line.biz/en/docs/liff/pluggable-sdk/#import-liff-object)
- [LIFF API 활성화하기](https://developers.line.biz/en/docs/liff/pluggable-sdk/#activate-liff-api)

### liff 객체 가져오기 

먼저 `@line/liff/core`에서 `liff` 객체를 가져옵니다.

```js
import liff from "@line/liff/core";
```

이 `liff` 객체에는 다음 속성과 메서드만 포함됩니다.

- [`liff.id`](https://developers.line.biz/en/reference/liff/#id) 속성
- [`liff.ready`](https://developers.line.biz/en/reference/liff/#ready) 속성
- [`liff.init()`](https://developers.line.biz/en/reference/liff/#initialize-liff-app) 메서드
- [`liff.getVersion()`](https://developers.line.biz/en/reference/liff/#get-version) 메서드
- [`liff.use()`](https://developers.line.biz/en/reference/liff/#use) 메서드

위에 나열된 것 이외의 LIFF API를 사용하려면 해당 모듈을 가져오세요. 다음 예시에서는 [`liff.getOS()`](https://developers.line.biz/en/reference/liff/#get-os) 메서드와 [`liff.getAppLanguage()`](https://developers.line.biz/en/reference/liff/#get-app-language) 메서드에 해당하는 모듈을 가져옵니다.

```js
import liff from "@line/liff/core";
import GetOS from "@line/liff/get-os";
import GetAppLanguage from "@line/liff/get-app-language";
```

각 LIFF API에 해당하는 모듈에 대한 자세한 내용은 [LIFF API와 해당 모듈 목록](https://developers.line.biz/en/docs/liff/pluggable-sdk/#liff-api-and-module-list)을 참조하세요.

### LIFF API 활성화하기 

다음으로 가져온 LIFF API 모듈을 `liff.use()` 메서드에 전달하여 LIFF API를 활성화합니다. LIFF API 모듈은 클래스로 정의되어 있으므로 인스턴스를 `liff.use()` 메서드에 전달해야 합니다.

```js
import liff from "@line/liff/core";
import GetOS from "@line/liff/get-os";
import GetAppLanguage from "@line/liff/get-app-language";

liff.use(new GetOS());
liff.use(new GetAppLanguage());
```

LIFF API가 활성화되면 해당 LIFF API를 사용할 수 있습니다.

아래 예시에서는 활성화된 `liff.getOS()` 메서드와 `liff.getAppLanguage()` 메서드는 사용할 수 있지만, 활성화되지 않은 `liff.login()` 메서드는 사용할 수 없습니다.

```js
import liff from "@line/liff/core";
import GetOS from "@line/liff/get-os";
import GetAppLanguage from "@line/liff/get-app-language";

liff.use(new GetOS());
liff.use(new GetAppLanguage());

liff.init({
  liffId: "123456-abcedfg",
});

liff.getOS(); // Available
liff.getAppLanguage(); // Available
liff.login(); // Not available
```

## 플러거블 SDK의 주요 사항 

기술적인 제약 때문에 `liff.use()` 메서드는 `liff.init()` 메서드보다 먼저 실행해야 합니다. `liff.init()` 메서드 이후에 `liff.use()` 메서드를 실행하면 정상적으로 동작하지 않을 수 있습니다.

### liff.use() 메서드를 올바르게 실행하는 예시 

```js
import liff from "@line/liff/core";
import GetOS from "@line/liff/get-os";

// liff.use() 메서드는 liff.init() 메서드보다 먼저 실행됩니다
liff.use(new GetOS());

liff.init({
  liffId: "123456-abcedfg",
});
```

### liff.use() 메서드를 잘못 실행하는 예시 

```js
import liff from "@line/liff/core";
import GetOS from "@line/liff/get-os";

liff.init({
  liffId: "123456-abcedfg",
});

// liff.use() 메서드는 liff.init() 메서드 이후에 실행됩니다
liff.use(new GetOS());
```

## LIFF API와 해당 모듈 목록 

| LIFF API | 모듈 |
| --- | --- |
| [`liff.getOS()`](https://developers.line.biz/en/reference/liff/#get-os) | `@line/liff/get-os` |
| [`liff.getAppLanguage()`](https://developers.line.biz/en/reference/liff/#get-app-language) | `@line/liff/get-app-language` |
| [`liff.getLanguage()`](https://developers.line.biz/en/reference/liff/#get-language) (지원 종료) | `@line/liff/get-language` |
| [`liff.getLineVersion()`](https://developers.line.biz/en/reference/liff/#get-line-version) | `@line/liff/get-line-version` |
| [`liff.getContext()`](https://developers.line.biz/en/reference/liff/#get-context) | `@line/liff/get-context` |
| [`liff.isInClient()`](https://developers.line.biz/en/reference/liff/#is-in-client) | `@line/liff/is-in-client` |
| [`liff.isLoggedIn()`](https://developers.line.biz/en/reference/liff/#is-logged-in) | `@line/liff/is-logged-in` |
| [`liff.isApiAvailable()`](https://developers.line.biz/en/reference/liff/#is-api-available) | `@line/liff/is-api-available` |
| [`liff.login()`](https://developers.line.biz/en/reference/liff/#login) | `@line/liff/login` |
| [`liff.logout()`](https://developers.line.biz/en/reference/liff/#logout) | `@line/liff/logout` |
| [`liff.getAccessToken()`](https://developers.line.biz/en/reference/liff/#get-access-token) | `@line/liff/get-access-token` |
| [`liff.getIDToken()`](https://developers.line.biz/en/reference/liff/#get-id-token) | `@line/liff/get-id-token` |
| [`liff.getDecodedIDToken()`](https://developers.line.biz/en/reference/liff/#get-decoded-id-token) | `@line/liff/get-decoded-id-token` |
| [`liff.permission.getGrantedAll()`](https://developers.line.biz/en/reference/liff/#permission-get-granted-all)<br><br>[`liff.permission.query()`](https://developers.line.biz/en/reference/liff/#permission-query)<br><br>[`liff.permission.requestAll()`](https://developers.line.biz/en/reference/liff/#permission-request-all) | `@line/liff/permission` |
| [`liff.getProfile()`](https://developers.line.biz/en/reference/liff/#get-profile) | `@line/liff/get-profile` |
| [`liff.getFriendship()`](https://developers.line.biz/en/reference/liff/#get-friendship) | `@line/liff/get-friendship` |
| [`liff.openWindow()`](https://developers.line.biz/en/reference/liff/#open-window) | `@line/liff/open-window` |
| [`liff.closeWindow()`](https://developers.line.biz/en/reference/liff/#close-window) | `@line/liff/close-window` |
| [`liff.sendMessages()`](https://developers.line.biz/en/reference/liff/#send-messages) | `@line/liff/send-messages` |
| [`liff.shareTargetPicker()`](https://developers.line.biz/en/reference/liff/#share-target-picker) | `@line/liff/share-target-picker` |
| [`liff.scanCodeV2()`](https://developers.line.biz/en/reference/liff/#scan-code-v2) | `@line/liff/scan-code-v2` |
| [`liff.scanCode()`](https://developers.line.biz/en/reference/liff/#scan-code) (지원 종료) | `@line/liff/scan-code` |
| [`liff.permanentLink.createUrlBy()`](https://developers.line.biz/en/reference/liff/#permanent-link-create-url-by)<br><br>[`liff.permanentLink.createUrl()`](https://developers.line.biz/en/reference/liff/#permanent-link-create-url)<br><br>[`liff.permanentLink.setExtraQueryParam()`](https://developers.line.biz/en/reference/liff/#permanent-linke-set-extra-query-param) | `@line/liff/permanent-link` |
| [`liff.i18n.setLang()`](https://developers.line.biz/en/reference/liff/#i18n-set-lang) | `@line/liff/i18n` |
| [`liff.createShortcutOnHomeScreen()`](https://developers.line.biz/en/reference/liff/#create-shortcut-on-home-screen) | `@line/liff/create-shortcut-on-home-screen` |
