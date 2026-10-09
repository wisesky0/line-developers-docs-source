# LIFF 앱 열기

LIFF 앱은 [LIFF 브라우저](https://developers.line.biz/en/glossary/#liff-browser) 또는 [외부 브라우저](https://developers.line.biz/en/glossary/#external-browser)에서 열 수 있습니다.

이 페이지에서는 사용자가 LIFF 앱을 여는 방법과 열렸을 때 LIFF 앱이 동작하는 방식을 설명합니다.

<!-- table of contents -->

## LIFF 앱을 열 때의 사용자 동작 

이 섹션에서는 LIFF 앱을 열 때의 사용자 동작을 설명합니다.

1. 사용자가 [LIFF URL](https://developers.line.biz/en/glossary/#liff-url)에 접속합니다.

   LIFF URL은 [채널에 LIFF 앱을 추가](https://developers.line.biz/en/docs/liff/registering-liff-apps/)할 때 발급됩니다.\
   예를 들어 LIFF URL을 LINE 앱의 채팅에 보내고 말풍선에 표시된 LIFF URL을 탭합니다.

   ![](https://developers.line.biz/media/liff/open-liff-app.png)

1. 사용자의 권한 승인이 필요한 경우 채널 동의 화면이 나타납니다. 사용자는 동의 화면에서 LIFF 앱에 필요한 권한을 부여하는 데 동의합니다.

   ![Consent screen](https://developers.line.biz/media/liff/opening-liff-app/channel-consent-screen-en.webp)

1. LIFF 앱이 열립니다.

   ![LIFF browser](https://developers.line.biz/media/liff/overview/liffBrowser.png)

### 사용자가 LIFF URL에 접속할 때 LIFF 앱이 열리는 환경 

사용자가 LIFF URL에 접속하면 LIFF 앱은 LINE 앱의 [LIFF 브라우저](https://developers.line.biz/en/glossary/#liff-browser) 또는 [외부 브라우저](https://developers.line.biz/en/glossary/#external-browser)에서 열립니다.

LIFF URL은 iOS의 [유니버설 링크](https://developer.apple.com/documentation/xcode/allowing-apps-and-websites-to-link-to-your-content/)와 Android의 [앱 링크](https://developer.android.com/training/app-links)를 지원합니다. 따라서 LINE 앱 외부에서 LIFF URL을 열면 LINE 앱에서 LIFF 브라우저가 열립니다.

하지만 사용자 OS의 사양에 따라 Safari나 Chrome 같은 외부 브라우저에서도 유니버설 링크나 앱 링크가 동작하지 않아 LINE 앱에서 LIFF 브라우저가 열리지 않을 수 있습니다. 또한 LINE 앱이 아닌 다른 네이티브 앱에서 LIFF URL에 접속하는 경우에는 네이티브 앱의 WebView 사양에 따라 LIFF 앱이 외부 브라우저에서 열릴지 LIFF 브라우저에서 열릴지가 달라집니다.

이러한 이유로 LIFF URL에 접속했을 때 LIFF 앱이 어떤 환경에서 열릴지는 보장할 수 없습니다. 사용자가 LIFF URL에 접속하더라도 LINE 앱에서 LIFF 브라우저가 열리지 않을 수 있다는 점에 유의하세요.

## LIFF URL에 접속하여 LIFF 앱을 열기까지의 동작 

다음은 사용자가 LIFF URL에 접속했을 때 LIFF 앱이 올바르게 열리도록 두 개의 리디렉션 대상을 설정하는 방법과, 사용자가 LIFF URL에 접속했을 때 `liff.init()` 메서드를 실행하는 시점을 설명합니다.

| 리디렉션 대상 | 설명 |
| --- | --- |
| 기본 리디렉션 URL(Primary redirect URL) | 사용자가 처음 LIFF URL에 접속하면 LIFF 서버에서 이 URL로 리디렉션됩니다. 사용자가 이 URL로 리디렉션되면 `liff.init()` 메서드를 실행합니다. |
| 보조 리디렉션 URL(Secondary redirect URL) | `liff.init()` 메서드를 실행하면 사용자가 이 URL로 리디렉션됩니다. 사용자가 이 URL로 리디렉션되면 LIFF 앱 페이지가 표시됩니다. |

![Redirect flow](https://developers.line.biz/media/liff/redirect-flow-en.png)

### LIFF URL 생성 

LIFF URL은 LY Corporation이 제공하는 LIFF 서버를 나타내는 URL입니다. LIFF URL은 [채널에 LIFF 앱을 추가](https://developers.line.biz/en/docs/liff/registering-liff-apps/)하면 발급됩니다.

LIFF URL 예시: `https://liff.line.me/1234567890-AbcdEfgh`

#### 지원되는 LIFF URL 

다음 LIFF URL이 지원됩니다.

- `https://liff.line.me/{liffId}`&nbsp;
- `https://miniapp.line.me/{liffId}` (LINE MINI App에서만 사용 가능)

<!-- note start -->

**&quot;https://line.me/R/app/{liffId}&quot; 및 &quot;line://app/{liffId}&quot;는 지원 종료되었습니다**

[LIFF v1](https://developers.line.biz/en/docs/liff/versioning-policy/#life-cycle-schedule)에서 사용된 다음 LIFF URL 형식은 [지원 종료](https://developers.line.biz/en/glossary/#deprecated)되었습니다.

- `https://line.me/R/app/{liffId}`&nbsp;
- `line://app/{liffId}`&nbsp;

<!-- note end -->

### 기본 리디렉션 URL 생성 

기본 리디렉션 URL은 항상 LINE Developers Console의 **Endpoint URL**에 지정된 URL입니다.

<!-- note start -->

**LIFF URL에 지정된 추가 정보**

기본 리디렉션 URL에 지정된 모든 추가 정보(예: `path_A/?key1=value1#URL-fragment`)는 `liff.state` 쿼리 파라미터에 포함됩니다.

예: `https://example.com/2020campaign/?key=value&liff.state=urlencoded(path_A/?key1=value1#URL-fragment)`

LIFF URL에 추가 정보를 지정하지 않으면 `liff.state` 쿼리 파라미터는 생략됩니다.

<!-- note end -->

### 보조 리디렉션 URL 생성 

보조 리디렉션 URL은 사용자가 접속한 URL에 따라 달라집니다.

LINE Developers Console의 **Endpoint URL**에 지정된 경로와 쿼리 파라미터(`/2020campaign/?key=value`)는 보조 리디렉션 URL에 포함됩니다.

| 사용자가 접속한 URL | 보조 리디렉션 URL |
| --- | --- |
| LIFF URL (1)<br>예: `https://liff.line.me/{liffId}` | LINE Developers Console의 **Endpoint URL**에 지정된 URL<br>예: `https://example.com/2020campaign/?key=value` |
| 추가 정보가 포함된 LIFF URL (2)<br>예: `https://liff.line.me/{liffId}/path_A/?key1=value1#URL-fragment` | 아래 그림의 (2)와 같이 다음 세 가지 정보가 조합된 URL입니다.<ul><li>**Endpoint URL**에 지정된 도메인 이름(`https://example.com`)</li><li>**Endpoint URL**에 지정된 경로와 쿼리 파라미터(`/2020campaign/?key=value`)</li><li>LIFF URL에 지정된 추가 정보(`/path_A/?key1=value1#URL-fragment`)</li></ul>예: `https://example.com/2020campaign/path_A/?key=value&key1=value1#URL-fragment` |

![Endpoint URL](https://developers.line.biz/media/liff/endpoint-url.png)

## LIFF 앱에서 다른 LIFF 앱 열기 (LIFF 간 전환) 

LIFF 앱이 LIFF 브라우저에서 열려 있을 때 다른 LIFF 앱으로 연결되는 링크를 클릭하면 LIFF 브라우저를 열어 둔 채로 다른 앱을 표시할 수 있습니다. LIFF 간 전환 중에는 LIFF 브라우저가 닫히지 않으므로, LIFF 브라우저의 되돌아가기 버튼을 클릭하여 전환하기 전의 LIFF 앱으로 돌아갈 수 있습니다.

- [LIFF 간 전환이 가능한 조건](https://developers.line.biz/en/docs/liff/opening-liff-app/#conditions-liff-to-liff)
- [LIFF 앱의 화면 크기에 따른 동작](https://developers.line.biz/en/docs/liff/opening-liff-app/#behavior-by-screen-size)
- [LIFF 앱 간 전환 후 "chat_message.write" 스코프에 대해](https://developers.line.biz/en/docs/liff/opening-liff-app/#about-chat-message-write-scope)
- [LIFF 간 전환 이전의 URL 가져오기](https://developers.line.biz/en/docs/liff/opening-liff-app/#using-liff-referrer)
- [다른 LIFF 앱이 열릴 때 표시되는 메시지](https://developers.line.biz/en/docs/liff/opening-liff-app/#messages-liff-to-liff)

![LIFF-apps-transition](https://developers.line.biz/media/liff/liff_transition.png)

<!-- note start -->

**예상되지 않은 동작**

이전 버전의 LIFF SDK를 사용하는 경우 다음과 같은 예상되지 않은 동작이 발생할 수 있습니다.

- Path(`/path`)로 지정된 LIFF URL에서 다른 LIFF 앱으로 이동했음에도 LINE Developers Console의 **Endpoint URL**에 지정된 URL에 머무르게 됩니다.
- 사용자 권한을 요청하는 [동의 화면](https://developers.line.biz/en/docs/line-login/link-a-bot/)에서 **Cancel**을 클릭하면 LIFF 브라우저를 한 번 닫아야 합니다.
- 이동 대상이 LINE MINI App인 경우 LIFF 브라우저 헤더의 디자인이 자동으로 변경되지 않습니다.

여러 LIFF 앱 간 전환을 지원하도록 설계하는 경우 최신 버전의 LIFF SDK를 사용하는 것을 권장합니다.

<!-- note end -->

### LIFF 간 전환이 가능한 조건 

다음 조건을 모두 충족하면 LIFF 간 전환이 가능합니다.

- LIFF SDK v2.4.1 이상
- 원래 LIFF 앱 화면이 `Full`로 표시되도록 설정되어 있을 것
- 이동하려는 LIFF 앱이 `liff.init()`으로 올바르게 초기화되어 있을 것

### LIFF 앱의 화면 크기에 따른 동작 

- 원래 LIFF 앱의 화면 크기가 `Tall` 또는 `Compact`로 설정되어 있으면, 이동 대상 LIFF 앱의 화면 크기와 관계없이 대상 LIFF 앱이 표시되기 전에 브라우저가 먼저 닫힙니다.
- 원래 LIFF 앱의 화면 크기가 `Full`로 설정되어 있으면, 이동 대상 LIFF 앱의 화면 크기 지정과 관계없이 대상 LIFF 앱은 `Full`로 표시됩니다.
- 원래 LIFF 앱의 화면 크기가 `Full`이고 전환 대상 LIFF 앱의 화면 크기가 `Tall` 또는 `Compact`이면, 전환 후 LIFF 앱에는 [액션 버튼](https://developers.line.biz/en/docs/liff/overview/#action-button)이 표시되지 않습니다.

### LIFF 앱 간 전환 후 "chat_message.write" 스코프에 대해 

LIFF 앱 간 전환 후의 `chat_message.write` 스코프는 전환 대상 URL에 따라 활성화되거나 비활성화됩니다.

| 전환 대상 URL | 예시 URL | 전환 후 `chat_message.write` 스코프 |
| --- | --- | --- |
| LIFF URL | `https://liff.line.me/{liffId}` | **활성화** |
| 추가 정보가 포함된 LIFF URL | `https://liff.line.me/{liffId}/path_A/?key1=value1#URL-fragment` | **활성화** |
| Endpoint URL | `https://example.com` | **비활성화** |

`chat_message.write` 스코프가 활성화되어 있으면 전환 대상 LIFF 앱에서 [`liff.sendMessages()`](https://developers.line.biz/en/reference/liff/#send-messages) 메서드를 사용할 수 있습니다.

### LIFF 간 전환 이전의 URL 가져오기 

LIFF 간 전환 중에 LIFF 앱을 열면 전환 후 LIFF 앱 URL에 `liff.referrer` 쿼리 파라미터가 추가됩니다. `liff.referrer`의 값은 LIFF 간 전환 중에 LIFF 서버가 받은 `Referer` 요청 헤더 주소를 [퍼센트 인코딩](https://en.wikipedia.org/wiki/Percent-encoding)한 URL로 설정됩니다. `liff.referrer` 값을 확인하면 전환 이전의 URL을 가져올 수 있습니다.

<!-- note start -->

**LINE 12.13.0 ~ 13.19.x 버전에서는 LIFF 간 전환 후 LIFF 앱 URL에 liff.referrer가 추가되지 않습니다**

자세한 내용은 2023년 11월 30일 뉴스 [LINE 12.13.0 이상 버전에서 LIFF 간 전환 후 liff.referrer가 추가되지 않던 버그를 수정했습니다](https://developers.line.biz/en/news/2023/11/30/liff-update-line-13-20-0/)를 참조하세요.

<!-- note end -->

다음은 LIFF 간 전환 중에 `liff.referrer`가 제공되는 예시입니다.

|  | 전환 전 LIFF 앱 URL | 링크 URL | 전환 후 LIFF 앱 URL(`liff.init()` 메서드 실행 후) |
| --- | --- | --- | --- |
| **제공됨** | `https://first.example.com/` | `https://liff.line.me/{LIFF ID}`<br> (LIFF URL) | `✅ https://second.example.com/?liff.referrer=https%3A%2F%2Ffirst.example.com%2F` \*1 |
| **제공되지 않음** | `https://first.example.com/` | `https://second.example.com/`<br> (Endpoint URL) | `❌ https://second.example.com/` \*2 |

\*1 `liff.referrer` 외에도 다른 `liff.*` 쿼리 파라미터가 전환 후 LIFF 앱 URL에 추가될 수 있습니다.<br>\*2 LIFF 앱의 Endpoint URL을 직접 열면 `liff.referrer`는 추가되지 않습니다.

### 다른 LIFF 앱이 열릴 때 표시되는 메시지 

LIFF 앱에서 다른 URL에 접속하면 "{LIFF 앱 이름} 앱으로 전환되었습니다."라는 메시지가 표시될 수 있습니다.

이 메시지는 먼저 열린 LIFF 앱(전환을 시작한 LIFF 앱)과 다른 LIFF ID를 가진 LIFF 앱을 열 때 표시됩니다. 이 메시지의 표시 여부는 LIFF 간 전환의 성공 여부와 관계가 없습니다.

![](https://developers.line.biz/media/liff/switched-to-another-app-en.png)
