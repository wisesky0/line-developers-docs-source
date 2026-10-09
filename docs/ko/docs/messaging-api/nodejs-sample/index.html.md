# 튜토리얼 - 응답 봇 만들기

이 튜토리얼에서는 Messaging API와 Node.js를 사용하여 응답 봇으로 메시지를 보내는 방법을 배웁니다.

Messaging API를 사용하면 서비스와 LINE 사용자 간에 양방향 통신이 가능합니다. Messaging API가 제공하는 다양한 기능을 활용하여 사용자와의 상호작용을 높일 수 있습니다. 이러한 기능에는 여러 유형의 메시지 보내기, 사용자 프로필 가져오기, 사용자가 보낸 콘텐츠 가져오기 등 [그 밖에도 많은 기능](https://developers.line.biz/en/docs/messaging-api/overview/#what-you-can-do)이 포함됩니다.

이 튜토리얼의 결과물은 사용자의 메시지에 자동으로 응답하는 앱입니다.

![샘플 봇과의 대화](https://developers.line.biz/media/messaging-api/node-js-sample/sample-bot-test.webp)

## 시작하기 전에 

이 튜토리얼은 JavaScript와 Node.js에 대한 기본 지식이 있다고 가정합니다. 튜토리얼을 진행하기 전에 [Messaging API 개요](https://developers.line.biz/en/docs/messaging-api/overview/)를 읽어 보는 것을 권장합니다.

<!-- tip start -->

**이 튜토리얼은 SDK를 사용하지 않습니다**

Messaging API를 배울 수 있도록, 이 튜토리얼에서는 LY Corporation이 제공하는 SDK 없이 Node.js로 Messaging API를 사용하는 방법을 보여 줍니다. Node.js로 프로젝트를 더 빠르게 만들고 코드 줄 수를 줄이려면 [Node.js용 LINE Messaging API SDK](https://line.github.io/line-bot-sdk-nodejs/)를 사용해 보세요.

<!-- tip end -->

### 준비 

이 튜토리얼에서 응답 봇을 만들려면 먼저 아래와 같이 필요한 시스템에 등록하고 도구를 설치하세요.

다음 계정을 등록하세요.

- [LINE Developers Console](https://developers.line.biz/console/) 계정: LINE 계정 또는 비즈니스 계정으로 LINE Developers Console에 로그인하세요. 개발자 계정이 없다면 [개발자 계정을 만드세요](https://developers.line.biz/en/docs/line-developers-console/login-account/#register-as-developer).
- [Heroku](https://www.heroku.com/) 계정

  <!-- note start -->

  **Heroku의 무료 요금제가 종료되었습니다**

  Heroku의 무료 요금제는 2022년 11월 27일부로 종료되었습니다. 무료로 이 튜토리얼을 진행하려면 다른 플랫폼을 사용하세요. 자세한 내용은 [Heroku의 다음 장(Heroku’s Next Chapter)](https://www.heroku.com/blog/next-chapter/)을 참고하세요.

  <!-- note end -->

다음 도구를 설치하세요.

- [Node.js](https://nodejs.org/en)
- [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
- [Git](https://git-scm.com/install/)

## 1. Heroku 설정하기 

Heroku CLI에 로그인하세요. 터미널 또는 명령줄 도구에서 다음 명령을 실행합니다.

```sh
heroku login
```

튜토리얼용 디렉터리를 만들고 해당 디렉터리로 이동하세요. Git을 초기화하고 Heroku로 앱을 만듭니다. `{Name of your app}`은 `msg-api-tutorial-{YYYYMMDD}`와 같이 고유한 이름으로 바꾸세요.

```sh
mkdir sample-app
cd sample-app
git init
heroku create {Name of your app}
```

앱이 정상적으로 만들어지면 `https://{Name of your app}.herokuapp.com/` 형식의 Heroku URL이 생성됩니다. 이 URL은 튜토리얼 뒷부분에서 필요하므로 보관해 두세요. 브라우저에서 Heroku URL을 열면 환영 페이지가 표시됩니다.

![환영 페이지](https://developers.line.biz/media/messaging-api/node-js-sample/welcome-page.png)

## 2. 프로젝트 설정하기 

npm이 프로젝트를 인식하도록 `package.json` 파일이 필요합니다. 이 파일에는 프로젝트의 메타데이터가 들어 있고 의존성을 정의합니다. `npm init` 명령으로 npm 패키지를 초기화하면서 이 파일을 만드세요. 이 튜토리얼에서는 특별한 설정이 필요하지 않으므로 `-y` 옵션을 지정하여 설정 중 나오는 질문을 모두 건너뜁니다.

```sh
npm init -y
```

그 결과 다음과 비슷한 `package.json` 파일이 만들어집니다.

```json
{
  "name": "sample-app",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

다음으로 start 스크립트를 지정하세요. 이렇게 하면 Heroku와 같은 서버 플랫폼이 서버를 시작할 때 어떤 파일을 사용해야 하는지 알 수 있습니다. 이 튜토리얼에서는 `index.js`를 서버 설정 파일로 사용합니다. 텍스트 편집기에서 `package.json`을 열고 `"start"` 속성에 `"node index.js"`를 지정하세요.

```json
{
  "name": "sample-app",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

아래 명령으로 [Express.js](https://expressjs.com/) 패키지를 설치하세요. Express.js는 이 프로젝트에서 사용할 가벼운 Node.js 웹 서버 프레임워크입니다.

```sh
npm install express
```

Express.js가 설치되면 `package.json`에 패키지 의존성이 추가됩니다. 동시에 `node_modules`라는 디렉터리가 생성됩니다. 이 디렉터리에는 로컬에 설치된 패키지가 들어 있으며, 이 디렉터리의 내용은 Heroku에 푸시하지 않으려고 합니다. 이 디렉터리를 제외하려면 `.gitignore` 파일을 만드세요.

```sh
touch .gitignore
```

텍스트 편집기에서 만든 `.gitignore` 파일을 열고, 아래와 같이 제외할 디렉터리의 이름을 추가하세요.

```
node_modules/
```

이렇게 하면 지정한 디렉터리가 푸시되지 않습니다.

## 3. 봇 구현하기 

설정을 마쳤으므로 응답 봇을 구현해 보겠습니다.

1. [전역 설정](https://developers.line.biz/en/docs/messaging-api/nodejs-sample/#global-config)
2. [미들웨어 설정](https://developers.line.biz/en/docs/messaging-api/nodejs-sample/#middleware-config)
3. [라우팅 설정](https://developers.line.biz/en/docs/messaging-api/nodejs-sample/#routing-config)
4. [응답 보내기](https://developers.line.biz/en/docs/messaging-api/nodejs-sample/#send-reply)

### 3-1. 전역 설정하기 

서버 설정을 위한 기본 JavaScript 파일인 `index.js`를 만들어 봅시다.

```sh
touch index.js
```

만든 `index.js` 파일에 설치한 패키지 `express`를 가져와 인스턴스를 생성하는 코드를 추가하세요. 또한 봇으로 들어오는 HTTP 요청을 처리하기 위해 `https` 패키지도 가져옵니다. 이 패키지는 Node.js에 기본으로 포함되어 있으므로 따로 설치할 필요는 없습니다.

텍스트 편집기에서 `index.js`를 열고 다음 코드 블록을 추가하세요.

```javascript
const https = require("https");
const express = require("express");
const app = express();
```

이제 설정 과정을 간단하게 하고 자격 증명을 안전하게 보관하기 위해 환경 변수를 추가하세요. `process.env.PORT` 변수는 서버가 리슨할 포트를 지정합니다. `process.env.LINE_ACCESS_TOKEN`에는 Messaging API를 호출하는 데 필요한 [채널 액세스 토큰](https://developers.line.biz/en/glossary/#channel-access-token)이 들어 있습니다. `index.js`에서 가져온 패키지 아래에 다음 설정을 추가하세요.

```javascript
const PORT = process.env.PORT || 3000;
const TOKEN = process.env.LINE_ACCESS_TOKEN;
```

### 3-2. 미들웨어 설정하기 

앞서 설치하고 가져온 Express.js는 미들웨어 웹 프레임워크입니다. 미들웨어 함수는 요청-응답 주기의 흐름을 결정합니다.

이 튜토리얼에서는 Express.js 함수 `express.json()`과 `express.urlencoded()`를 사용합니다. 이 함수들은 들어오는 요청 객체를 각각 JSON 및 문자열 또는 배열 형식으로 인식하는 미리 정의된 미들웨어 함수입니다. 미들웨어 함수를 로드하려면 `app.use()`를 호출하세요. `index.js` 파일에 다음 코드 블록을 추가하세요.

```javascript
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
```

### 3-3. 라우팅 설정하기 

이제 봇 서버에 기본 라우팅 로직을 추가해 봅시다. 상태 확인(health check)이 실패하지 않도록, 도메인의 루트(`/`)로 HTTP GET 요청이 오면 상태 코드 `200`을 반환하겠습니다. `index.js` 파일에 다음 코드 블록을 추가하세요.

```javascript
app.get("/", (req, res) => {
  res.sendStatus(200);
});
```

다음으로 `app.listen()` 함수로 서버에 리스너를 설정합니다. 리스너의 포트는 앞에서 설정한 `PORT` 환경 변수로 지정합니다. 다른 포트 번호를 지정하지 않으면 설정된 값인 `3000`에서 리슨합니다. `index.js`에 다음 코드를 추가하세요.

```javascript
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
```

이제 서버가 리슨할 수 있으므로, LINE 플랫폼이 웹훅 URL로 보내는 요청을 처리하는 코드를 추가하겠습니다. 사용자가 봇과 상호작용하면, LINE 플랫폼은 봇 서버가 호스팅하는 웹훅 URL로 요청(웹훅 이벤트)을 보냅니다. 이러한 요청을 처리하려면 `app.post()`로 요청을 라우팅하세요. `index.js` 파일의 `app.get()`과 `app.listen()` 함수 사이에 다음 코드를 추가하세요.

```javascript
app.post("/webhook", function (req, res) {
  res.send("HTTP POST request sent to the webhook URL!");
});
```

이 코드는 `/webhook` 엔드포인트로 HTTP POST 요청이 오면 봇 서버가 `HTTP POST request sent to the webhook URL!`이라는 HTTP 응답을 반환하도록 합니다.

지금까지 작성한 `index.js`는 다음과 비슷할 것입니다.

```javascript
const https = require("https");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const TOKEN = process.env.LINE_ACCESS_TOKEN;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.post("/webhook", function (req, res) {
  res.send("HTTP POST request sent to the webhook URL!");
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
```

### 3-4. 응답 보내기 

이제 응답 봇의 핵심 기능인 사용자 메시지에 대한 응답을 보내는 부분을 구현할 차례입니다. 가장 먼저 해야 할 일은 사용자가 메시지를 보냈을 때를 감지하는 것입니다. 웹훅 URL에서 `type` 속성이 `message`로 설정된 [message 이벤트](https://developers.line.biz/en/reference/messaging-api/#message-event)를 받으면 이를 감지할 수 있습니다.

<!-- warning start -->

**프로덕션 환경에 봇을 공개하려면 서명을 검증하세요**

불특정 다수의 사용자를 대상으로 이 샘플 봇을 프로덕션 환경에 공개한다면 서명 검증이 필요합니다. 요청 헤더 `x-line-signature`의 서명을 검증하여 HTTP 요청이 LINE 플랫폼에서 보낸 것인지 확인하세요.

서명을 검증하는 방법에 대한 자세한 내용은 [서명 검증](https://developers.line.biz/en/docs/messaging-api/receiving-messages/#verify-signature)을 참고하세요.

<!-- warning end -->

사용자에게 응답을 보내려면 [응답 메시지 보내기](https://developers.line.biz/en/reference/messaging-api/#send-reply-message) 엔드포인트를 사용합니다. `index.js` 파일의 `app.post()`에서 응답 메시지 보내기 엔드포인트(`https://api.line.me/v2/bot/message/reply`)를 호출하세요. `app.post`를 아래 코드로 바꾸세요. 자세한 설명은 아래 코드의 주석을 확인하세요.

```javascript
app.post("/webhook", function (req, res) {
  res.send("HTTP POST request sent to the webhook URL!");
  // 사용자가 봇에 메시지를 보내면 응답 메시지를 보냅니다
  if (req.body.events[0].type === "message") {
    // API 서버로 보낼 응답 토큰과 메시지 데이터는 문자열로 변환해야 합니다
    const dataString = JSON.stringify({
      // 응답 토큰 정의
      replyToken: req.body.events[0].replyToken,
      // 응답 메시지 정의
      messages: [
        {
          type: "text",
          text: "Hello, user",
        },
        {
          type: "text",
          text: "May I help you?",
        },
      ],
    });

    // 요청 헤더. 사양은 Messaging API 레퍼런스를 참고하세요
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + TOKEN,
    };

    // Node.js 문서의 http.request 메서드에 정의된 대로, 요청에 전달할 옵션
    const webhookOptions = {
      hostname: "api.line.me",
      path: "/v2/bot/message/reply",
      method: "POST",
      headers: headers,
      body: dataString,
    };

    // message 타입의 HTTP POST 요청이 /webhook 엔드포인트로 오면,
    // webhookOptions 변수에 정의된 https://api.line.me/v2/bot/message/reply로
    // HTTP POST 요청을 보냅니다.

    // 요청 정의
    const request = https.request(webhookOptions, (res) => {
      res.on("data", (d) => {
        process.stdout.write(d);
      });
    });

    // 오류 처리
    // request.on()은 API 서버로 요청을 보내는 동안 오류가 발생하면 호출되는 함수입니다.
    request.on("error", (err) => {
      console.error(err);
    });

    // 마지막으로 요청과 정의한 데이터를 보냅니다
    request.write(dataString);
    request.end();
  }
});
```

## 4. Messaging API 채널 준비하기 

Messaging API를 사용하려면 Messaging API 채널이 있어야 하고 웹훅 URL을 등록해야 합니다. 아직 채널이 없다면 [채널을 만드세요](https://developers.line.biz/en/docs/messaging-api/getting-started/).

LINE Developers Console의 Messaging API 채널 페이지에서 **Messaging API** 탭을 열고 [채널 액세스 토큰](https://developers.line.biz/en/docs/basics/channel-access-token/)을 발급하세요. 이 토큰은 [봇을 Heroku에 배포](https://developers.line.biz/en/docs/messaging-api/nodejs-sample/#deploy-on-heroku)할 때 사용합니다.

![Messaging API 채널의 채널 액세스 토큰 영역](https://developers.line.biz/media/messaging-api/node-js-sample/channel-access-token-en.png)

다음으로 웹훅 URL을 등록하세요. **Messaging API** 탭에서, [Heroku 설정하기](https://developers.line.biz/en/docs/messaging-api/nodejs-sample/#set-up-heroku) 섹션에서 얻은 Heroku URL을 기반으로 서버가 웹훅을 리슨하는 URL을 입력하세요. URL 형식은 `https://{Name of your app}.herokuapp.com/webhook`입니다. **Webhook URL**이 `https://{Name of your app}.herokuapp.com/`이 아니라는 점에 유의하세요.

<!-- tip start -->

**Heroku URL을 잊어버렸나요?**

Heroku URL을 잊어버렸거나 분실했다면 [Heroku 대시보드](https://dashboard.heroku.com/)에서 URL을 확인할 수 있습니다.

<!-- tip end -->

마지막으로 **Use webhook** 설정을 활성화하세요.

!["Enable webhook" setting in Messaging API tab](https://developers.line.biz/media/messaging-api/node-js-sample/enable-webhook-en.png)

봇을 테스트하려면 **Messaging API** 탭에 있는 QR 코드를 스캔하여 봇과 연결된 LINE 공식 계정을 LINE에서 친구로 추가하세요. 테스트할 때는 **Auto-reply messages**와 **Greeting messages** 설정을 비활성화하세요.

이제 Messaging API 채널이 준비되었습니다!

## 5. Heroku에 배포하기 

앞서 [전역 설정](https://developers.line.biz/en/docs/messaging-api/nodejs-sample/#global-config) 섹션에서 채널 액세스 토큰으로 사용할 환경 변수 `LINE_ACCESS_TOKEN`을 설정했습니다. Heroku에 배포한 앱이 올바르게 작동하려면 환경 변수 `LINE_ACCESS_TOKEN`을 설정하고 등록해야 합니다.

채널 액세스 토큰을 환경 변수로 등록하려면 터미널 또는 명령줄 도구에서 이 명령을 실행하세요. [Messaging API 채널 준비하기](https://developers.line.biz/en/docs/messaging-api/nodejs-sample/#prepare-channel) 섹션에서 얻은 채널 액세스 토큰으로 `LINE_ACCESS_TOKEN`을 설정합니다.

```sh
heroku config:set LINE_ACCESS_TOKEN={enter your channel access token here}
```

이제 앱을 배포할 준비가 되었습니다! 코드를 Heroku에 푸시하세요. 터미널 또는 명령줄 도구에서 다음 명령을 실행합니다.

```sh
git add .
git commit -m "First commit"
git push heroku main
```

### 웹훅 URL 확인하기 

봇을 테스트하기 전에 웹훅이 작동하는지 확인하겠습니다. [Messaging API 채널 준비하기](https://developers.line.biz/en/docs/messaging-api/nodejs-sample/#prepare-channel) 섹션에서 만든 채널의 **Messaging API** 탭으로 이동하세요. **Webhook URL**의 **Verify**를 클릭하여 웹훅이 작동하는지 확인하세요. 웹훅 URL에 문제가 없다면 "Success"라는 메시지가 표시됩니다. 작동하는 봇을 만든 것입니다.

### 봇 사용해 보기 

LINE에서 봇에 메시지를 보내 보세요. 모든 것이 올바르게 설정되었다면 아래와 같이 봇으로부터 메시지를 받게 됩니다.

![LINE 채팅방에서 샘플 봇과의 대화](https://developers.line.biz/media/messaging-api/node-js-sample/sample-bot-test.webp)

### 샘플 봇 문제 해결하기 

봇이 작동하지 않는다면 다음 명령으로 Heroku 로그를 확인하세요.

```sh
heroku logs --tail
```

## 다음 단계 

Messaging API로 계속 학습해 보세요. 다음 과제는 봇에 기능을 더 추가하는 것입니다.

- [리치 메뉴](https://developers.line.biz/en/reference/messaging-api/#rich-menu)를 추가하여 사용자에게 탭할 수 있는 옵션을 보여 주세요.
- 사용자가 액션을 트리거할 때 받는 [액션 객체](https://developers.line.biz/en/reference/messaging-api/#action-objects)에 따라 사용자에게 응답하세요.
- [사용자 프로필을 가져오고](https://developers.line.biz/en/reference/messaging-api/#get-profile) 프로필 정보를 기반으로 맞춤 메시지를 보내세요.

이 튜토리얼의 시작 부분에서 소개한 것처럼, [Node.js용 LINE Messaging API SDK](https://line.github.io/line-bot-sdk-nodejs/)를 사용하면 봇을 훨씬 빠르게 만들 수 있습니다. 한번 사용해 보세요!

## 더 알아보기 

- [Messaging API 레퍼런스](https://developers.line.biz/en/reference/messaging-api/)
- [Messaging API 개요](https://developers.line.biz/en/docs/messaging-api/overview/)
- [https.request 사양(Node.js)](https://nodejs.org/api/https.html#https_https_request_options_callback)
