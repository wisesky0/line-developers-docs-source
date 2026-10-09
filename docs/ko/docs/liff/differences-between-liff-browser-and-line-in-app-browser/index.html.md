# LIFF 브라우저와 LINE 인앱 브라우저의 차이

LINE 앱 안에서 LIFF 앱을 열면 LIFF 앱은 [LIFF 브라우저](https://developers.line.biz/en/glossary/#liff-browser) 또는 [LINE 인앱 브라우저](https://developers.line.biz/en/glossary/#line-iab) 중 하나에서 열립니다. LIFF 브라우저와 LINE 인앱 브라우저는 서로 다른 브라우저이며, 일부 LIFF 앱 기능은 LIFF 브라우저에서만 사용할 수 있습니다.

이 페이지에서는 실행 중인 브라우저가 LIFF 브라우저인지 LINE 인앱 브라우저인지 확인하는 방법과 사용할 수 있는 기능의 차이를 설명합니다.

<!-- table of contents -->

## LIFF 브라우저 

LIFF 앱 전용 브라우저입니다. 다음 방법으로 LIFF 앱을 열면 LIFF 앱은 LIFF 브라우저에서 열립니다.

- LINE 앱의 채팅방에서 [LIFF URL](https://developers.line.biz/en/glossary/#liff-url)을 탭합니다.
- 외부 브라우저에서 LIFF URL을 탭합니다.

## LINE 인앱 브라우저 

LINE 앱 내에서 사용하기 위한 전용 브라우저입니다. 다음 방법으로 LIFF 앱을 열면 LIFF 앱은 LINE 인앱 브라우저에서 열립니다.

- LINE 앱의 채팅방에서 LIFF 앱의 엔드포인트 URL을 탭합니다.

참고로 LIFF에서 LINE 인앱 브라우저는 외부 브라우저의 한 종류로 취급됩니다. 예를 들어 LINE 인앱 브라우저에서 [`liff.getContext()`](https://developers.line.biz/en/reference/liff/#get-context) 메서드를 실행하면 반환값의 `type` 속성 값은 `external`(외부 브라우저)이 됩니다.

## 실행 중인 브라우저가 LIFF 브라우저인지 LINE 인앱 브라우저인지 확인하기 

LIFF 앱을 실행하는 브라우저가 LIFF 브라우저인지 LINE 인앱 브라우저인지 확인하는 방법은 두 가지가 있습니다.

- [사용자 인터페이스로 확인](https://developers.line.biz/en/docs/liff/differences-between-liff-browser-and-line-in-app-browser/#identify-from-ui)
- [`liff.isInClient()` 메서드를 사용하여 확인](https://developers.line.biz/en/docs/liff/differences-between-liff-browser-and-line-in-app-browser/#identify-using-liff-is-in-client)

### 사용자 인터페이스로 확인 

LIFF 브라우저와 LINE 인앱 브라우저는 헤더와 푸터의 인터페이스가 다릅니다. 따라서 LIFF 앱이 열려 있는 브라우저의 사용자 인터페이스를 확인하여 LIFF 브라우저인지 LINE 인앱 브라우저인지 식별할 수 있습니다.

| LIFF 브라우저 | LINE 인앱 브라우저 |
| --- | --- |
| ![](https://developers.line.biz/media/liff/differences-between-liff-browser-and-line-in-app-browser/liff-browser.webp)<ul><li>헤더<ul><li>최소화 버튼이 <b>없습니다</b></li><li>액션 버튼이 <b>있습니다</b> (\*)</li></ul></li><li>푸터가 <b>없습니다</b></li></ul> | ![](https://developers.line.biz/media/liff/differences-between-liff-browser-and-line-in-app-browser/line-in-app-browser.webp)<ul><li>헤더<ul><li>최소화 버튼이 <b>있습니다</b></li><li>액션 버튼이 <b>없습니다</b></li></ul></li><li>푸터가 <b>있습니다</b></li></ul> |

\* 모듈 모드에서는 액션 버튼이 표시되지 않습니다. 자세한 내용은 [채널에 LIFF 앱 추가하기](https://developers.line.biz/en/docs/liff/registering-liff-apps/#registering-liff-app)를 참조하세요.

### `liff.isInClient()` 메서드를 사용하여 확인 

`liff.isInClient()` 메서드를 사용하여 브라우저가 LIFF 브라우저인지 확인할 수 있습니다. 자세한 내용은 LIFF API 레퍼런스의 [liff.isInClient()](https://developers.line.biz/en/reference/liff/#is-in-client)를 참조하세요.

## LIFF 브라우저와 LINE 인앱 브라우저에서 사용할 수 있는 기능의 차이 

LIFF 브라우저와 LINE 인앱 브라우저에서 사용할 수 있는 기능의 차이는 다음과 같습니다.

| 기능 | LIFF 브라우저 | LINE 인앱 브라우저 |
| --- | --- | --- |
| [뷰 크기 지정](https://developers.line.biz/en/docs/liff/overview/#screen-size) | ✅ | ❌ |
| [액션 버튼](https://developers.line.biz/en/docs/liff/overview/#action-button) | ✅ | ❌ |
| [멀티 탭 뷰](https://developers.line.biz/en/docs/liff/overview/#multi-tab-view) | ✅ | ❌ |
| [2D 코드 리더](https://developers.line.biz/en/docs/liff/developing-liff-apps/#opening-two-dimensional-code-reader) | ✅ | ❌ |
| [채팅방에 메시지 보내기](https://developers.line.biz/en/docs/liff/developing-liff-apps/#sending-messages) | ✅ | ❌ |
| [Share target picker](https://developers.line.biz/en/docs/liff/developing-liff-apps/#share-target-picker) | ✅ | ❌ |
| [LIFF 앱이 아닌 외부 사이트로 이동할 때의 팝업 표시](https://developers.line.biz/en/docs/liff/developing-liff-apps/#transition-to-external-site) | ✅ | ❌ |
| [LIFF에서 LIFF로 이동](https://developers.line.biz/en/docs/liff/opening-liff-app/#move-liff-to-liff) | ✅ | ❌ |

✅: 사용 가능<br>❌: 사용 불가
