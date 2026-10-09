# LIFF 개요

LINE Front-end Framework(LIFF)는 LY Corporation이 제공하는 웹 앱 플랫폼입니다. 이 플랫폼에서 실행되는 웹 앱을 LIFF 앱이라고 합니다.

LIFF 앱은 LINE 사용자 ID와 같은 데이터를 LINE Platform에서 가져올 수 있습니다. LIFF 앱은 이러한 데이터를 사용하여 사용자 데이터를 활용하는 기능을 제공하고 사용자를 대신하여 메시지를 보낼 수 있습니다.

LIFF v2에 추가된 기능에 대한 자세한 내용은 [릴리스 노트](https://developers.line.biz/en/docs/liff/release-notes/)를 참조하세요.

<!-- tip start -->

**웹에서 LIFF 기능 체험하기**

LY Corporation은 개발자를 위해 [LIFF Playground](https://liff-playground.netlify.app/)라는 웹 애플리케이션(LIFF 앱)을 제공합니다. LIFF Playground에서는 웹에서 LIFF의 기본 기능을 체험할 수 있습니다. [LIFF Playground의 소스 코드](https://github.com/line/liff-playground)는 GitHub에서 확인할 수 있습니다.

<!-- tip end -->

<!-- note start -->

**OpenChat과 호환되지 않는 LIFF 앱**

현재 LIFF 앱은 OpenChat에서 공식적으로 지원되지 않으므로 일부 기능이 동작하지 않습니다. 예를 들어 LIFF 앱을 통해 사용자의 프로필 정보를 가져오는 것은 대부분의 경우 불가능합니다.

<!-- note end -->

## 권장 실행 환경 

LIFF에 권장되는 운영체제와 LINE 버전은 다음과 같습니다.

사용할 수 있는 기능은 LIFF 앱이 [LIFF 브라우저](https://developers.line.biz/en/docs/liff/overview/#liff-browser)에서 열리는지 [외부 브라우저](https://developers.line.biz/en/glossary/#external-browser)에서 열리는지에 따라 다릅니다. 예를 들어 외부 브라우저에서는 `liff.scanCode()`를 사용할 수 없습니다. 자세한 내용은 [LIFF API 레퍼런스](https://developers.line.biz/en/reference/liff/)를 참조하세요.

### LIFF 앱이 LIFF 브라우저에서 열린 경우 

| 항목 | 권장 환경 | 최소 운영 환경 |
| --- | --- | --- |
| iOS | 최신 버전. [WKWebView](https://developer.apple.com/documentation/webkit/wkwebview)가 사용됩니다. | LINE의 권장 시스템 사양에 따릅니다. \* |
| Android | 최신 버전. [Android WebView](https://developer.android.com/reference/android/webkit/WebView)가 사용됩니다. | LINE의 권장 시스템 사양에 따릅니다. \* |
| LINE | 최신 버전 | LINE의 권장 시스템 사양에 따릅니다. \* |

<!-- note start -->

**LIFF 앱에는 OS와 LINE의 최신 버전을 사용하는 것을 권장합니다**

LIFF 앱에는 OS와 LINE의 최신 버전을 사용하는 것을 권장합니다. 위에 나열된 "최소 운영 환경"보다 높은 버전에서도 설정에 따라 일부 기능이 동작하지 않거나 화면이 제대로 표시되지 않을 수 있습니다.

<!-- note end -->

\* LINE의 권장 시스템 사양에 대한 자세한 내용은 고객센터의 [LINE 권장 시스템 사양](https://help.line.me/line/ios/pc?lang=en&contentId=10002433)을 참조하세요.

### LIFF 앱이 외부 브라우저에서 열린 경우 

LIFF 앱은 다음 브라우저의 최신 버전에서 실행됩니다.

Microsoft Edge, Google Chrome, Firefox, Safari

## LIFF 브라우저 

LIFF 브라우저는 LIFF 앱 전용 브라우저입니다. 사용자가 LINE에서 LIFF URL을 열면 LIFF 앱은 LIFF 브라우저에서 열립니다.

![LIFF browser](https://developers.line.biz/media/liff/overview/liffBrowser.png)

LIFF 브라우저는 LINE 안에서 실행되므로 LIFF 앱은 사용자에게 로그인을 요구하지 않고도 사용자 데이터에 접근할 수 있습니다. 또한 LIFF 브라우저는 LIFF 앱을 공유하거나 친구에게 메시지를 보내는 것처럼 LINE 고유의 기능도 제공합니다.

## LIFF 브라우저 사양 

LIFF 브라우저는 iOS에서는 [WKWebView](https://developer.apple.com/documentation/webkit/wkwebview)를, Android에서는 [Android WebView](https://developer.android.com/reference/android/webkit/WebView)를 사용합니다. 따라서 LIFF 브라우저의 사양과 동작도 이들의 사양을 따릅니다.

LIFF 브라우저는 외부 브라우저가 지원하는 일부 웹 기술을 지원하지 않습니다. 자세한 내용은 [LIFF 브라우저와 외부 브라우저의 차이](https://developers.line.biz/en/docs/liff/differences-between-liff-browser-and-external-browser/)를 참조하세요.

## LIFF 브라우저 캐시 

LIFF 브라우저가 사용하는 [WKWebView](https://developer.apple.com/documentation/webkit/wkwebview)와 [Android WebView](https://developer.android.com/reference/android/webkit/WebView)는 [Cache-Control](https://developer.mozilla.org/ja/docs/Web/HTTP/Reference/Headers/Cache-Control)과 같은 HTTP 헤더의 지시에 따라 표시된 콘텐츠를 캐시로 저장하고 사용할 수 있습니다.

[Cache-Control](https://developer.mozilla.org/ja/docs/Web/HTTP/Reference/Headers/Cache-Control)과 같은 HTTP 헤더를 사용하여 LIFF 브라우저의 캐싱을 제어하세요.

<!-- note start -->

**캐시 삭제에 대하여**

LIFF 브라우저에 저장된 캐시를 명시적으로 삭제하는 방법은 없습니다.

<!-- note end -->

## LIFF 브라우저의 크기 

LIFF 브라우저는 다음 세 가지 크기 중 하나로 표시할 수 있습니다.

![View size](https://developers.line.biz/media/liff/overview/viewTypes.png)

LIFF 앱을 LINE Login 채널에 추가할 때 뷰 크기를 설정하세요. 자세한 내용은 [채널에 LIFF 앱 추가하기](https://developers.line.biz/en/docs/liff/registering-liff-apps/#registering-liff-app)를 참조하세요.

## 액션 버튼 

LIFF 앱 뷰의 크기가 `Full`로 설정된 LIFF 앱은 기본적으로 헤더에 액션 버튼을 표시합니다.

![](https://developers.line.biz/media/liff/overview/liff-header.png)

<!-- tip start -->

**액션 버튼 숨기기**

LINE Developers Console에서 LIFF 앱의 **Module mode**를 활성화하면 액션 버튼이 숨겨집니다. 자세한 내용은 [채널에 LIFF 앱 추가하기](https://developers.line.biz/en/docs/liff/registering-liff-apps/)를 참조하세요.

<!-- tip end -->

액션 버튼을 탭하면 LINE 앱의 버전에 따라 아래에 나타나는 기능이 표시됩니다. 액션 버튼의 아이콘은 LINE 앱의 버전에 따라 다릅니다.

| LINE 앱 버전                              | 사용 가능한 기능   |
| ----------------------------------------- | ----------------- |
| 26.7.0 이상                               | 드롭다운 메뉴      |
| 15.12.0 이상, 26.7.0 미만                 | 멀티 탭 뷰        |
| 15.12.0 미만                              | 옵션              |

### 드롭다운 메뉴 

LINE 26.7.0 이상 버전에서 액션 버튼을 탭하면 다음 드롭다운 메뉴가 표시됩니다.

| 항목 | 설명 |
| --- | --- |
| **All tabs** | [멀티 탭 뷰](https://developers.line.biz/en/docs/liff/overview/#multi-tab-view)를 표시합니다. |
| **Refresh** | 현재 페이지를 다시 로드합니다. |
| **Minimize browser** | LIFF 브라우저를 최소화합니다. 자세한 내용은 [LIFF 브라우저 최소화](https://developers.line.biz/en/docs/liff/minimizing-liff-browser/)를 참조하세요. |
| **Share** | 현재 페이지의 [영구 링크](https://developers.line.biz/en/glossary/#permanent-link-liff)를 LINE 메시지로 공유합니다. |
| **Permission settings** | 권한 설정 화면을 엽니다. 권한 설정 화면에서 사용자는 현재 열려 있는 LIFF 앱의 카메라 및 마이크 권한을 확인할 수 있습니다. 변경은 할 수 없습니다. LINE 14.6.0 이상 버전에서 사용할 수 있습니다. |

<!-- note start -->

**영구 링크 공유가 실패할 수 있습니다**

현재 페이지의 URL이 LINE Developers Console의 **Endpoint URL**에 지정된 URL로 시작하지 않으면 영구 링크를 가져올 수 없어 공유가 실패합니다.

<!-- note end -->

### 멀티 탭 뷰 

멀티 탭 뷰에는 최근에 사용한 서비스가 표시됩니다.

#### 최근 사용한 서비스 

최근 사용한 서비스 섹션에는 사용자가 연 LIFF 앱이 최근에 사용한 순서대로 최대 50개까지 표시됩니다.

사용자가 LIFF 앱을 닫거나 새 LIFF 앱을 열면 그 시점에 찍힌 스크린샷이 사용 기록으로 표시됩니다. 사용자는 사용 기록을 통해 LIFF 앱을 다시 열 수 있습니다.

사용 기록에서 LIFF 앱을 다시 열면 LIFF 앱은 재개되거나 다시 로드됩니다. 재개와 다시 로드의 사양은 다음과 같습니다.

| 다시 열 때의 동작 | 조건 | 사양 |
| --- | --- | --- |
| LIFF 앱 재개 | 다음 두 조건을 모두 충족하는 LIFF 앱입니다.<ul><li>최근 12시간 이내에 사용한 LIFF 앱</li><li>가장 최근 사용 항목 10개에 포함된 LIFF 앱</li></ul> | 사용자가 마지막으로 보던 화면에서 LIFF 앱이 재개됩니다. 액세스 토큰, 탐색 기록, 화면 스크롤 위치가 유지됩니다. |
| LIFF 앱 다시 로드 | 재개 조건을 충족하지 않는 경우 | 사용자가 마지막으로 보던 URL에서 LIFF 앱이 초기화됩니다. 액세스 토큰, 탐색 기록, 화면 스크롤 위치가 삭제됩니다. |

#### 최근 사용한 서비스에 표시되는 조건 

LIFF 앱을 최근 사용한 서비스에 표시하려면 다음 조건을 모두 충족해야 합니다.

- LINE 앱 버전이 15.12.0 이상이어야 합니다.
- LIFF 앱의 [화면 크기](https://developers.line.biz/en/docs/liff/overview/#screen-size)로 `Full`이 지정되어 있어야 합니다.
- LIFF 앱의 모듈 모드가 꺼져 있어야 합니다.

#### 최근 사용한 서비스에 표시되는 단위 

최근 사용한 서비스에서 LIFF 앱은 LIFF ID 단위로 표시됩니다. 사용자가 최근 사용한 서비스 섹션이 아닌 다른 곳에서 같은 LIFF 앱을 다시 열면 새 LIFF 앱이 열리고 이전 LIFF 앱은 삭제됩니다.

LIFF 간 전환 중에 사용자가 다른 LIFF 앱을 열면, LIFF ID가 다르더라도 LIFF 앱들이 그룹화되어 하나의 LIFF 앱으로 표시됩니다.

#### 다시 로드된 LIFF 앱에서는 `liff.sendMessages()` 메서드를 사용할 수 없습니다 

최근 사용한 서비스 섹션에서 다시 로드된 LIFF 앱에서 [`liff.sendMessages()`](https://developers.line.biz/en/reference/liff/#send-messages) 메서드를 사용하면 오류가 발생합니다. 따라서 LIFF 앱이 다시 로드된 경우에는 `liff.sendMessages()` 메서드를 사용할 수 없습니다.

LIFF 앱을 다시 로드한 후 `liff.sendMessages()` 메서드를 사용하려면 채팅방의 LIFF URL 등을 탭하여 LIFF 앱을 다시 여세요.

## 개발 가이드라인 

LIFF를 사용하여 웹 앱을 개발할 때는 [LIFF 앱 개발 가이드라인](https://developers.line.biz/en/docs/liff/development-guidelines/)을 따르세요.

## LIFF 앱 개발을 지원하는 도구 

LY Corporation은 개발자가 LIFF 앱을 더 원활하게 개발할 수 있도록 다음 도구를 제공합니다.

| 도구 이름 | 이 도구로 할 수 있는 일 |
| --- | --- |
| [LIFF 스타터 앱](https://developers.line.biz/en/docs/liff/trying-liff-app/) | LIFF를 처음 배우는 사용자를 위한 스타터 앱입니다. LIFF 스타터 앱은 LIFF 앱 초기화를 시연하는 데모일 뿐이며, LIFF 앱 개발을 시작하는 방법을 이해하는 데 도움을 줍니다. 먼저 동작하는 것을 만들어 보고 LIFF가 무엇인지 대략적으로 파악하고 싶은 사용자에게 권장합니다. |
| [Create LIFF App](https://developers.line.biz/en/docs/liff/cli-tool-create-liff-app/) | 이 CLI 도구는 명령어 하나로 LIFF 앱 개발 환경을 구축할 수 있게 해 줍니다. React의 [Create React App](https://github.com/react/create-react-app)이나 Next.js의 [Create Next App](https://nextjs.org/docs/pages/api-reference/cli/create-next-app)처럼 Create LIFF App의 질문에 답하면 LIFF 앱 템플릿이 포함된 개발 환경이 생성되어 바로 개발을 시작할 수 있습니다. |
| [LIFF CLI](https://developers.line.biz/en/docs/liff/liff-cli/) | <p>LIFF 앱 개발을 더 원활하게 할 수 있도록 도와주는 CLI 도구입니다. LIFF CLI로 다음 작업을 할 수 있습니다.</p><ul><li>LIFF 앱 생성, 수정, 목록 조회, 삭제</li><li>LIFF 앱 개발 환경 생성</li><li>[LIFF Inspector](https://developers.line.biz/en/docs/liff/liff-plugin/#liff-inspector)로 LIFF 앱 디버깅</li><li>HTTPS를 사용하는 로컬 개발 서버 실행</li></ul>[LIFF Mock](https://developers.line.biz/en/docs/liff/liff-plugin/#liff-mock) 기능은 향후 업데이트에서 추가될 예정입니다. |
| [LIFF Playground](https://liff-playground.netlify.app/) | 온라인에서 LIFF의 기능을 체험할 수 있습니다. [LIFF Playground의 소스 코드](https://github.com/line/liff-playground)는 GitHub에서 확인할 수 있으므로, 개발자는 자신의 LIFF ID를 설정하고 서버에 자신만의 LIFF Playground를 배포할 수 있습니다. |

## 작업 순서 

최종 사용자가 LIFF 앱을 사용할 수 있도록 하려면 다음 단계를 따르세요.

1. LIFF 앱을 추가할 [채널을 생성](https://developers.line.biz/en/docs/liff/getting-started/)하세요.
1. [LIFF 스타터 앱을 체험](https://developers.line.biz/en/docs/liff/trying-liff-app/)하거나 [LIFF 앱을 개발](https://developers.line.biz/en/docs/liff/developing-liff-apps/)하세요.
