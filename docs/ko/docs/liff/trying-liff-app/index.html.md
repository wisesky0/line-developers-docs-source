# LIFF 스타터 앱 체험하기

LIFF를 처음 배우는 경우 LIFF 앱 개발을 어떻게 시작해야 할지 모를 수 있습니다. 이런 경우 [LIFF 스타터 앱](https://github.com/line/line-liff-v2-starter)이 도움이 될 수 있습니다.

LIFF 스타터 앱은 LIFF 앱 개발에 필요한 최소한의 기능을 갖춘 템플릿입니다. LIFF 스타터 앱을 기반으로 커스터마이징하여 자신만의 LIFF 앱을 개발할 수 있습니다. 이 페이지에서는 다음 단계에 따라 LIFF 스타터 앱을 설명합니다.

<!-- table of contents -->

이 페이지를 읽으면 서버에 LIFF 앱을 배포하고 LINE에서 LIFF 앱을 여는 과정을 체험할 수 있으며, 이를 통해 LIFF를 사용한 앱 구축 방법에 대한 감을 잡을 수 있습니다.

<!-- tip start -->

**LIFF 스타터 앱을 체험하기 전에**

- LIFF에 대한 자세한 내용은 [LIFF 개요](https://developers.line.biz/en/docs/liff/overview/)를 참조하세요.
- 온라인에서 LIFF 기능을 체험하려면 [LIFF Playground](https://liff-playground.netlify.app/)를 사용하여 LIFF로 무엇을 할 수 있는지 확인해 보세요. [LIFF Playground의 소스 코드](https://github.com/line/liff-playground)는 GitHub에서 확인할 수 있으므로, 개발자는 자신의 LIFF ID를 설정하고 자신만의 LIFF Playground를 실행할 수 있습니다. 예를 들어 [`liff.login()`](https://developers.line.biz/en/reference/liff/#login)이나 [`liff.getProfile()`](https://developers.line.biz/en/reference/liff/#get-profile) 같은 각 클라이언트 API를 개발자의 LIFF ID를 기반으로 웹에서 실행할 수 있습니다.

<!-- tip end -->

## LIFF 스타터 앱이란? 

LIFF 스타터 앱은 LIFF 앱의 템플릿입니다. 처음부터 LIFF 앱을 만들 수도 있지만, LIFF 스타터 앱을 사용하면 더 빠르게 개발할 수 있습니다.

LIFF 스타터 앱은 바닐라 JavaScript뿐만 아니라 Next.js와 Nuxt로도 구현되어 있습니다. 각 저장소는 다음과 같습니다.

- [바닐라 JavaScript로 구현한 예제](https://github.com/line/line-liff-v2-starter/tree/master/src/vanilla)
- [Next.js로 구현한 예제](https://github.com/line/line-liff-v2-starter/tree/master/src/nextjs)
- [Nuxt로 구현한 예제](https://github.com/line/line-liff-v2-starter/tree/master/src/nuxtjs)

각 저장소의 README를 따라 LIFF 앱 개발을 시작할 수 있습니다. 이 페이지에서는 바닐라 JavaScript로 LIFF 앱 개발을 시작하는 방법을 설명합니다.

## LIFF 스타터 앱 시작하기 

이 섹션의 목표는 LIFF 스타터 앱을 서버에 배포하고 LINE의 [LIFF 브라우저](https://developers.line.biz/en/glossary/#liff-browser)에서 여는 것입니다. 첫 번째 단계는 로컬 환경에서 LIFF 앱을 확인하는 것입니다. 그다음 LIFF 앱을 서버에 배포하고, 마지막으로 LIFF ID라는 값을 서버 측에 설정합니다.

### 환경 

LIFF 스타터 앱은 Node.js에서 실행됩니다. 또한 패키지 관리에는 Yarn을 사용합니다. 아래에서 설명하는 Netlify CLI를 포함한 이 페이지의 내용은 다음 각 버전에서 테스트되었습니다.

| 이름                                    | 버전    |
| --------------------------------------- | ------- |
| [Node.js](https://nodejs.org/en)        | 16.13.1 |
| [Yarn](https://yarnpkg.com/)            | 1.22.17 |
| [Netlify CLI](https://cli.netlify.com/) | 9.16.3  |

### 소스 코드 다운로드 및 실행 

1. 먼저 LIFF 스타터 앱의 소스 코드를 다운로드합니다. 터미널 또는 명령줄 도구(이하 "터미널")를 엽니다. 원하는 디렉터리에서 다음 명령을 실행합니다.

   ```bash
   $ git clone https://github.com/line/line-liff-v2-starter.git
   ```

1. 다운로드한 소스 코드(`line-liff-v2-starter` 디렉터리)의 `src` 디렉터리에는 바닐라 JavaScript, Next.js, Nuxt로 구현된 LIFF 앱이 있습니다. 사용하려는 구현의 디렉터리로 이동하세요. 여기서는 바닐라 JavaScript를 사용합니다.

   ```bash
   $ cd line-liff-v2-starter/src/vanilla
   ```

   <!-- tip start -->

   **Next.js 또는 Nuxt를 사용하려는 경우**

   Next.js를 사용하려면 `cd line-liff-v2-starter/src/nextjs/`를, Nuxt를 사용하려면 `cd line-liff-v2-starter/src/nuxtjs/`를 실행하여 각 디렉터리로 이동하세요.

   <!-- tip end -->

1. 다음 단계는 종속성 패키지를 설치한 후 LIFF 앱을 실행하는 것입니다. `yarn install` 명령으로 설치하고 `yarn dev` 명령으로 LIFF 앱을 실행합니다. 컴파일 성공 메시지(`compiled successfully`)가 나타나고 터미널 화면 출력이 멈추면 LIFF 앱이 로컬 서버에서 실행 중인 것입니다.

   ```bash
   $ yarn install
   $ yarn dev
   ```

1. 터미널에 표시된 URL(바닐라 JavaScript의 경우 `http://localhost:3000`)에 브라우저로 접속하면 다음과 같은 화면이 표시됩니다.

   ![LIFF app](https://developers.line.biz/media/liff/trying-liff-app/screenshot-pc.png)

   <!-- note start -->

   **LIFF ID를 설정해야 합니다**

   LIFF ID를 환경 변수로 설정해야 하지만 아직 설정하지 않았습니다. LIFF ID는 [LIFF ID 가져오기 및 설정하기](https://developers.line.biz/en/docs/liff/trying-liff-app/#get-and-set-liff-id)에서 설정할 수 있습니다.

   <!-- note end -->

1. 브라우저에서 LIFF 앱이 실행되고 있는 것을 확인했으면 Windows에서는 ctrl+c, macOS에서는 command+c를 눌러 로컬 서버를 중지합니다.

### 서버에 배포하기 

지금까지의 단계로 로컬 서버에서 LIFF 스타터 앱을 실행할 수 있었습니다. 다음 단계는 Netlify를 사용하여 LIFF 앱을 서버에 배포하는 것입니다.

<!-- tip start -->

**Netlify 계정이 필요합니다**

[Netlify](https://www.netlify.com/)는 정적 사이트를 위한 호스팅 서비스입니다. Netlify에 배포하기 전에 계정을 만드세요. 이 페이지의 내용은 Netlify의 무료 플랜에서 실행할 수 있습니다.

<!-- tip end -->

1. 첫 번째 단계는 Netlify CLI를 설치하는 것입니다. Netlify에 로그인하고 웹 사이트를 배포할 수 있는 명령줄 도구입니다.

   ```bash
   $ npm install -g netlify-cli
   ```

1. 이제 `netlify` 명령을 사용할 수 있습니다. 다음으로 `netlify login` 명령으로 Netlify 계정에 로그인합니다. 명령을 실행하면 브라우저에서 Netlify 로그인 화면이 열리므로 로그인하세요.

   <!-- tip start -->

   **netlify login 명령을 실행하기 전에**

   먼저 [Netlify](https://www.netlify.com/) 사이트에서 계정을 만든 다음 `netlify login` 명령을 실행하세요.

   <!-- tip end -->

   ```bash
   $ netlify login
   ```

1. 로그인한 후 Netlify 권한 부여 화면이 나타나면 **Authorize**를 클릭합니다.

   ![Netlify authorization screen](https://developers.line.biz/media/liff/trying-liff-app/netlify-authorized.png)

1. 다음 단계는 배포용 파일을 생성하는 것입니다. `src/vanilla` 디렉터리에서 다음 명령을 실행하면 됩니다. LIFF 스타터 앱은 [webpack](https://webpack.js.org/)을 사용하여 빌드된다는 점에 유의하세요.

   ```bash
   $ yarn build
   ```

1. 이제 `src/vanilla/dist` 아래에 HTML 및 JavaScript 파일이 생성되었습니다. 이 파일들을 Netlify에 배포해야 합니다.

   Netlify에 배포하려면 저장소의 루트 디렉터리(`line-liff-v2-starter`)에서 `netlify deploy` 명령을 실행하세요. 옵션을 지정하지 않으면 `netlify deploy` 명령은 초안(draft) 상태로 배포됩니다. 먼저 초안 상태로 배포해 보세요.

   ```bash
   $ cd ../../      # 저장소의 루트 디렉터리로 이동
   $ netlify deploy # 초안 상태로 배포
   ```

   `netlify deploy` 명령을 실행한 후 다음과 같이 배포할 사이트를 묻는 메시지가 나오면 `Create & configure a new site`를 선택하세요. 화살표 키의 위아래 키로 선택지를 이동할 수 있습니다.

   ```bash
   This folder isn't linked to a site yet
   ? What would you like to do?
   Link this directory to an existing site
   ❯ +  Create & configure a new site # 새 사이트를 생성하고 구성
   ```

   사이트를 만들 팀을 묻는 메시지가 나오면 기본 팀을 그대로 사용하세요.

   ```bash
   ? Team: (Use arrow keys)
   ❯ testlinedevelopers's team # 기본 팀을 그대로 사용
   ```

   사이트 이름을 묻는 메시지가 나오면 고유한 이름을 입력하세요.

   ```bash
   ? Site name (optional): # 고유한 이름 입력
   ```

   초안 상태의 배포가 완료되었습니다. 터미널에 표시된 `Website Draft URL`에 브라우저로 접속하면 페이지를 볼 수 있습니다.

1. 초안 상태에서 문제가 없으면 `netlify deploy` 명령에 `--prod` 옵션을 추가하여 프로덕션 환경에 배포하세요.

   ```bash
   $ netlify deploy --prod # 프로덕션 환경에 배포
   ```

이제 LIFF 앱을 Netlify에 배포했습니다. 배포 중에 터미널에 표시된 `Website URL`에 웹 브라우저로 접속하면 페이지를 볼 수 있습니다.

### LIFF ID 가져오기 및 설정하기 

이제 LIFF 스타터 앱을 서버에 배포했습니다.

이 시점에서 Netlify의 `Website URL`을 [외부 브라우저](https://developers.line.biz/en/glossary/#external-browser) 또는 [인앱 브라우저](https://developers.line.biz/en/glossary/#line-iab)에서 열면 배포된 LIFF 스타터 앱이 페이지로 표시됩니다. 그러나 LIFF 스타터 앱은 LINE의 [LIFF 브라우저](https://developers.line.biz/en/glossary/#liff-browser)에서 LIFF 앱으로 열 수는 없습니다.

LIFF 스타터 앱을 LIFF 앱으로 열려면 LIFF ID가 필요합니다. LIFF ID를 얻으려면 먼저 [채널 생성](https://developers.line.biz/en/docs/liff/getting-started/)과 [채널에 LIFF 앱 추가하기](https://developers.line.biz/en/docs/liff/registering-liff-apps/)를 읽어 보세요.

<!-- tip start -->

**엔드포인트 URL 입력하기**

채널에 LIFF 앱을 추가할 때 **Endpoint URL**을 입력해야 합니다. 여기에는 이전 단계에서 프로덕션 환경에 배포했을 때 얻은 `Website URL`을 입력하세요.

<!-- tip end -->

위 절차를 따르면 LIFF ID를 얻을 수 있습니다. 이를 서버 측 환경 변수 `LIFF_ID`로 설정하세요.

1. Netlify에서 환경 변수를 설정하려면 `netlify env:set` 명령을 사용합니다. 즉, `LIFF_ID`를 설정하려면 다음 명령을 실행합니다.

   ```bash
   $ netlify env:set LIFF_ID "Your LIFF ID"
   ```

1. 환경 변수를 설정했으면 Netlify에 다시 배포하세요. Netlify는 배포 시점에 환경 변수를 설정하기 때문입니다.

   ```bash
   $ netlify build
   $ netlify deploy --prod
   ```

   <!-- tip start -->

   **환경 변수를 확인하는 방법**

   Netlify의 사이트 설정에서 환경 변수를 확인할 수 있습니다. 자세한 내용은 Netlify Docs의 [빌드 환경 변수](https://docs.netlify.com/build/configure-builds/environment-variables/)를 참조하세요.

   ![Netlify's site settings](https://developers.line.biz/media/liff/trying-liff-app/netlify-environment.png)

   <!-- tip end -->

1. 이제 LINE에서 LIFF 앱을 열 수 있으며, LIFF 앱 URL은 [LINE Developers Console](https://developers.line.biz/console/)에서 생성한 채널의 **LIFF** 탭에 LIFF URL로 표시됩니다.

   LIFF URL을 LINE 채팅방으로 보내고 채팅방에서 LIFF URL을 탭하면 LINE의 [LIFF 브라우저](https://developers.line.biz/en/glossary/#liff-browser)에서 LIFF 앱이 열립니다.

   ![LIFF app](https://developers.line.biz/media/liff/trying-liff-app/screenshot-mobile.webp)

<!-- tip start -->

**LIFF ID를 설정하지 않고 LIFF 앱을 열면**

`LIFF_ID` 환경 변수를 설정하지 않고 LIFF 앱을 열면 [`liff.init()`](https://developers.line.biz/en/reference/liff/#initialize-liff-app)으로 LIFF 앱을 초기화하는 데 실패하지만, LIFF 스타터 앱의 화면은 달라지지 않습니다.

<!-- tip end -->

<!-- tip start -->

**로컬 서버에서 LIFF_ID를 설정하는 경우**

로컬 서버에서 `LIFF_ID`를 설정하려면 다음 명령을 실행하세요.

```bash
$ LIFF_ID="Your LIFF ID" yarn dev
```

<!-- tip end -->

## 다음 단계 

이제 LIFF 앱을 개발할 준비가 되었습니다. 실제 개발에 대한 자세한 내용은 [LIFF 앱 개발하기](https://developers.line.biz/en/docs/liff/developing-liff-apps/)를 참조하세요.
