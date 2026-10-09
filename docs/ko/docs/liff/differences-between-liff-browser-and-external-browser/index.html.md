# LIFF 브라우저와 외부 브라우저의 차이

<!-- tip start -->

**LIFF 브라우저 사양**

자세한 내용은 [LIFF 브라우저 사양](https://developers.line.biz/en/docs/liff/overview/#liff-browser-spec)을 참조하세요.

<!-- tip end -->

[LIFF 브라우저](https://developers.line.biz/en/glossary/#liff-browser)는 [외부 브라우저](https://developers.line.biz/en/glossary/#external-browser)가 지원하는 일부 웹 기술을 지원하지 않습니다. LIFF 브라우저가 지원하지 않는 웹 기술은 다음과 같습니다.

| 웹 기술 | 설명 |
| --- | --- |
| [theme-color Meta Tag](https://caniuse.com/meta-theme-color) | 사용자 인터페이스의 색상을 지정하는 기능 |
| [Download attribute](https://caniuse.com/download) | 리소스로 이동하는 대신 리소스를 다운로드하는 하이퍼링크를 사용하는 기능 |
| [Add to home screen (A2HS)](https://caniuse.com/sr-web-app-manifest) | <p>사용자가 기기의 홈 화면에 웹 애플리케이션을 추가할 수 있는 기능입니다.</p><p>LINE MINI App에서는 멀티 탭 뷰의 **Add to Home** 또는 [`liff.createShortcutOnHomeScreen()`](https://developers.line.biz/en/reference/liff/#create-shortcut-on-home-screen) 메서드를 사용하여 LINE MINI App의 바로가기를 사용자 기기의 홈 화면에 추가할 수 있습니다. 자세한 내용은 LINE MINI App 문서의 [LINE MINI App의 바로가기를 사용자 기기의 홈 화면에 추가하기](https://developers.line.biz/en/docs/line-mini-app/develop/add-to-home-screen/)를 참조하세요.</p> |
| [Service Workers](https://caniuse.com/serviceworkers) | 웹 애플리케이션에서 오프라인 지원, 백그라운드 동기화, 푸시 알림 등을 가능하게 하는 기능 |

위에 나열된 웹 기술은 향후 LIFF 브라우저에서 지원될 수 있습니다.

위에 나열되지 않은 웹 기술을 LIFF 브라우저가 지원하는지 여부는 [WKWebView](https://developer.apple.com/documentation/webkit/wkwebview) 및 [Android WebView](https://developer.android.com/reference/android/webkit/WebView)의 사양을 따릅니다. 자세한 내용은 [Can I use...](https://caniuse.com/)를 참조하세요.
