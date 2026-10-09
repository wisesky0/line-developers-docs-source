# Create LIFF App로 LIFF 앱 개발 환경 구축하기

## Create LIFF App이란 

Create LIFF App은 React의 [Create React App](https://github.com/react/create-react-app)이나 Next.js의 [Create Next App](https://nextjs.org/docs/pages/api-reference/cli/create-next-app)처럼 명령어 하나로 LIFF 앱 개발 환경을 구축할 수 있는 CLI 도구입니다. Create LIFF App의 질문에 답하면 LIFF 앱 템플릿을 포함한 환경이 생성되므로 바로 개발을 시작할 수 있습니다.

- [GitHub](https://github.com/line/create-liff-app)
- [npm](https://www.npmjs.com/package/@line/create-liff-app)

LIFF 스타터 앱, LIFF Playground, Create LIFF App의 차이에 대한 자세한 내용은 [LIFF 앱 개발을 지원하는 도구](https://developers.line.biz/en/docs/liff/overview/#support-tool)를 참조하세요.

## 언어 및 프레임워크 

Create LIFF App에서 현재 사용할 수 있는 언어와 프레임워크는 다음과 같습니다. 예를 들어 TypeScript로 작성된 Next.js 소스 코드를 생성할 수 있습니다.

### Create LIFF App으로 생성할 수 있는 언어 

- JavaScript
- TypeScript

### Create LIFF App으로 생성할 수 있는 프레임워크 

- [Next.js](https://nextjs.org/)
- [Nuxt](https://nuxt.com/)
- [React](https://react.dev/)
- [Vue.js](https://vuejs.org/)
- [Svelte](https://svelte.dev/)

## 운영 환경 

Create LIFF App은 Node.js에서 실행됩니다. 패키지 관리에는 Yarn 또는 npm을 사용할 수 있지만, 이 페이지의 안내는 Yarn을 기준으로 합니다. 이 페이지의 내용은 다음 각 버전에서 테스트되었습니다.

| 이름                                                       | 버전    |
| ---------------------------------------------------------- | ------- |
| [Create LIFF App](https://github.com/line/create-liff-app) | 1.1.0   |
| [Node.js](https://nodejs.org/en)                           | 18.17.1 |
| [Yarn](https://yarnpkg.com/)                               | 1.22.19 |

## 사전 준비 

Create LIFF App을 실행하려면 LIFF ID가 필요합니다. LIFF ID를 얻으려면 먼저 [채널 생성](https://developers.line.biz/en/docs/liff/getting-started/)과 [채널에 LIFF 앱 추가하기](https://developers.line.biz/en/docs/liff/registering-liff-apps/)를 읽어 보세요.

<!-- tip start -->

**엔드포인트 URL 입력하기**

Create LIFF App을 실행할 때 **Endpoint URL**을 입력해야 합니다. 엔드포인트 URL은 나중에 수정할 수 있으므로, 이 단계에서는 `https://example.com/`과 같은 임시 URL을 입력해도 됩니다.

<!-- tip end -->

## Create LIFF App 사용하기 

다음 두 단계에서 Create LIFF App을 사용하여 LIFF 앱의 개발 환경을 만들고 로컬에서 동작하는지 확인합니다.

1. [Create LIFF App으로 개발 환경 만들기](https://developers.line.biz/en/docs/liff/cli-tool-create-liff-app/#create-a-dev-env-using-liff-app)
1. [localhost에서 LIFF 앱 시작하기](https://developers.line.biz/en/docs/liff/cli-tool-create-liff-app/#start-the-liff-app-on-the-localhost)

### Create LIFF App으로 개발 환경 만들기 

1. Create LIFF App을 실행합니다. 터미널 또는 명령줄 도구(이하 "터미널")를 엽니다. 원하는 디렉터리에서 다음 명령을 실행합니다.

   ```bash
   $ npx @line/create-liff-app
   ```

   명령을 실행할 때 [옵션](https://developers.line.biz/en/docs/liff/cli-tool-create-liff-app/#options)을 지정할 수 있다는 점에 유의하세요.

1. 이제부터 Create LIFF App의 질문에 답하면 됩니다. 질문 도중에 중단하려면 Windows에서는 Ctrl+c, macOS에서는 control+c를 누르세요.

1. 프로젝트 이름을 입력합니다. 아무것도 입력하지 않으면 프로젝트 이름은 기본값인 `my-app`이 됩니다. 프로젝트 이름은 Create LIFF App이 생성하는 디렉터리 이름 등에 사용됩니다.

   ```bash
   ? Enter your project name:  (my-app)
   ```

   이후 단계는 프로젝트 이름으로 `my-app`을 입력했다고 가정하고 진행합니다.

1. 사용할 라이브러리 또는 프레임워크를 선택합니다.

   ```bash
   ? Which template do you want to use? (Use arrow keys)
   ❯ vanilla
     react
     vue
     svelte
     nextjs
     nuxtjs
   ```

1. 사용할 언어를 선택합니다.

   ```bash
   ? JavaScript or TypeScript? (Use arrow keys)
   ❯ JavaScript
     TypeScript
   ```

1. LIFF ID를 입력합니다. LIFF ID를 입력하지 않고 진행할 수도 있습니다. 나중에 LIFF ID를 입력하거나 변경하려면 생성된 `my-app` 디렉터리의 `.env` 파일을 편집하세요.

   ```bash
   ? Please enter your LIFF ID:
   Don't you have LIFF ID? Check out https://developers.line.biz/ja/docs/liff/getting-started/ (liffId)
   ```

1. 사용할 패키지 관리자를 선택합니다. 패키지 관리에는 Yarn 또는 npm을 사용할 수 있지만, 여기서는 Yarn을 사용합니다.

   ```bash
   ? Which package manager do you want to use? (Use arrow keys)
   ❯ yarn
   npm
   ```

1. 모든 질문에 답하면 `my-app` 디렉터리 아래에 LIFF 앱 템플릿을 포함한 개발 환경이 생성됩니다.

   ```bash
   yarn install v1.22.19
   warning package.json: No license field
   info No lockfile found.
   warning my-app@0.0.0: No license field
   [1/4] 🔍  Resolving packages...
   [2/4] 🚚  Fetching packages...
   [3/4] 🔗  Linking dependencies...
   [4/4] 🔨  Building fresh packages...
   success Saved lockfile.
   ✨  Done in 25.06s.

   Done! Now run:

     cd my-app
     yarn dev
   ```

   #### 옵션 {#options}

   Create LIFF App은 아래 표에 나열된 옵션을 받습니다. 예를 들어 TypeScript로 작성된 Next.js 소스 코드를 생성하려면 다음 명령을 실행합니다. 명령 옵션으로 지정한 항목은 Create LIFF App의 질문에서 생략된다는 점에 유의하세요.

   ```bash
   $ npx @line/create-liff-app -t nextjs --ts
   ```

   | 짧은 옵션 | 긴 옵션 | 인자 | 동작 |
   | --- | --- | --- | --- |
   | -v | --version |  | 버전 번호를 표시합니다 |
   | -t | --template | &lt;template&gt; | 템플릿을 지정합니다<br>인자 선택지: `vanilla`, `react`, `vue`, `svelte`, `nextjs`, `nuxtjs` |
   | -l | --liffid | &lt;liff id&gt; | LIFF ID를 지정합니다 |
   | --js | --javascript |  | JavaScript로 작성된 소스 코드를 생성합니다 |
   | --ts | --typescript |  | TypeScript로 작성된 소스 코드를 생성합니다 |
   | --npm | --use-npm |  | 패키지 관리자로 npm을 사용합니다 |
   | --yarn | --use-yarn |  | 패키지 관리자로 Yarn을 사용합니다 |
   | -h | --help |  | 명령의 도움말을 표시합니다 |

### localhost에서 LIFF 앱 시작하기 

1. 생성된 LIFF 앱을 localhost에서 시작해 봅시다. LIFF 앱을 시작하려면 `yarn dev` 명령을 실행합니다. 다음 메시지가 나타나고 터미널 화면 출력이 멈추면 LIFF 앱이 로컬 서버에서 실행 중인 것입니다.

   ```bash
   $ yarn dev
   yarn run v1.22.19
   warning package.json: No license field
   $ vite

     vite v2.9.13 dev server running at:

     > Local: http://localhost:3000/
     > Network: use `--host` to expose

     ready in 170ms.
   ```

1. 터미널에 표시된 URL(바닐라 JavaScript의 경우 `http://localhost:3000`)에 브라우저로 접속하면 다음과 같이 `LIFF init succeeded.` 메시지가 표시된 화면을 볼 수 있습니다.

   ![Success](https://developers.line.biz/media/liff/cli-tool-create-liff-app/create-liff-app-success.png)

   LIFF ID를 설정하지 않았다면 다음과 같이 `LIFF init failed.` 메시지가 표시된 화면이 나타납니다. 생성된 `my-app` 디렉터리의 `.env` 파일에 LIFF ID를 입력한 다음 로컬 서버를 다시 시작하세요.

   ![Failure](https://developers.line.biz/media/liff/cli-tool-create-liff-app/create-liff-app-failed.png)

1. 브라우저에서 LIFF 앱이 실행되고 있는 것을 확인했으면 Windows에서는 Ctrl+c, macOS에서는 control+c를 눌러 로컬 서버를 중지합니다.

## 다음 단계 

이제 LIFF 앱을 개발할 준비가 되었습니다.

LINE에서 LIFF 앱의 동작을 확인하려면 생성된 LIFF 앱을 Netlify 같은 서버에 배포하고 그 URL을 **Endpoint URL**로 설정하세요. 이 페이지에서는 Netlify 배포 방법이나 LINE에서 LIFF 앱의 동작을 확인하는 방법은 설명하지 않습니다. [LIFF 스타터 앱을 서버에 배포하기](https://developers.line.biz/en/docs/liff/trying-liff-app/#deploy-to-server)를 참조하세요.

실제 개발에 대한 자세한 내용은 [LIFF 앱 개발하기](https://developers.line.biz/en/docs/liff/developing-liff-apps/)를 참조하세요.
