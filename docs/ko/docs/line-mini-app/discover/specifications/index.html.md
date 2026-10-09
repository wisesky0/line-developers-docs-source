# LINE MINI App 사양

이 페이지에서는 LINE MINI App을 개발하기 위한 사양을 설명합니다.

<!-- table of contents -->

## HTML5 지원 

LINE MINI App을 개발할 때는 거의 모든 [HTML5](https://html.spec.whatwg.org/) 사양을 사용할 수 있습니다. 예를 들어 [Geolocation API](https://www.w3.org/TR/geolocation/)를 사용하여 사용자의 위치 정보를 가져오고, 주변 가게 정보를 제공할 수 있습니다. Google Maps API를 포함하여 HTML5와 호환되는 대부분의 지도 API를 사용할 수 있습니다.

![](https://developers.line.biz/media/line-mini-app/mini_map_api.webp)

### 지원되는 미디어 형식 

HTML5에서 지원되는 미디어 형식은 LINE MINI App에서도 지원됩니다. 다음 HTML5 사양을 참고해 주십시오.

- [img 요소](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element)
- [Media 요소](https://html.spec.whatwg.org/multipage/media.html)

### 외부 브라우저에서의 HTML5 지원 

외부 브라우저에서 HTML5가 어떻게 지원되는지 확인하는 데 다음 사이트가 도움이 됩니다.

- [https://caniuse.com](https://caniuse.com/)

## 지원되는 플랫폼 및 버전 

LINE MINI App은 [LIFF](https://developers.line.biz/en/docs/liff/overview/)를 사용하여 개발됩니다. 따라서 LINE MINI App이 지원하는 OS 버전과 LINE 버전은 LIFF의 [권장 운영 환경](https://developers.line.biz/en/docs/liff/overview/#operating-environment)을 따릅니다.

<!-- note start -->

**참고**

지원 버전은 사전 공지 없이 변경될 수 있습니다.

<!-- note end -->

### 외부 브라우저에서 LINE MINI App 열기 

<!-- tip start -->

**2025년 10월부터 LINE MINI App을 외부 브라우저에서 사용할 수 있습니다**

사용자가 외부 브라우저에서 LINE MINI App을 열 때 표시되는 화면이 변경되었습니다. 자세한 내용은 2025년 9월 26일자 뉴스 [2025년 10월 1일부터 모든 LINE MINI App 사용자가 웹 브라우저에서 서비스를 이용할 수 있습니다](https://developers.line.biz/en/news/2025/09/26/mini-app-browser/)를 참고해 주십시오.

<!-- tip end -->

LINE 앱을 사용하지 않는 사용자나 [딥링크](https://en.wikipedia.org/wiki/Mobile_deep_linking)가 작동하지 않는 상황의 LINE 사용자가 [외부 브라우저](https://developers.line.biz/en/glossary/#external-browser)에서 LINE MINI App을 열면, 아래와 같은 페이지가 표시되며 사용자는 LINE 스마트폰 앱([LIFF 브라우저](https://developers.line.biz/en/glossary/#liff-browser))에서 LINE MINI App을 열도록 안내받습니다. 페이지의 [**Open in web browser**]를 탭하면 웹 브라우저에서 LIFF 엔드포인트 URL 페이지가 표시됩니다.

![](https://developers.line.biz/media/line-mini-app/landing-page-en.png)

## 지원되는 LIFF 버전 

LINE MINI App은 [LIFF](https://developers.line.biz/en/docs/liff/overview/)를 사용하여 개발됩니다. LINE MINI App에서 사용할 수 있는 LIFF SDK의 최소 버전은 v2.1입니다.

LINE MINI App에서는 LIFF v2.1.x에서 제공하는 모든 LIFF API를 사용할 수 있습니다.
