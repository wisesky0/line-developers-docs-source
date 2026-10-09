# LIFF CLI

<!-- table of contents -->

## LIFF CLI란 

LIFF CLI는 LIFF 앱 개발을 더 원활하게 할 수 있도록 도와주는 CLI 도구입니다.

- [GitHub](https://github.com/line/liff-cli)
- [npm](https://www.npmjs.com/package/@line/liff-cli)

LIFF CLI로 다음 작업을 할 수 있습니다.

- LIFF 앱 생성, 수정, 목록 조회, 삭제
- LIFF 앱 개발 환경 생성
- [LIFF Inspector](https://developers.line.biz/en/docs/liff/liff-plugin/#liff-inspector)로 LIFF 앱 디버깅
- HTTPS를 사용하는 로컬 개발 서버 실행

[LIFF Mock](https://developers.line.biz/en/docs/liff/liff-plugin/#liff-mock) 기능은 향후 업데이트에서 추가될 예정입니다.

## LIFF CLI 운영 환경 

LIFF CLI는 Node.js에서 실행됩니다. 패키지 관리에는 npm 또는 Yarn을 사용할 수 있지만, 이 페이지의 안내는 npm을 기준으로 합니다. 이 페이지의 내용은 다음 각 버전에서 테스트되었습니다.

| 이름                                                     | 버전    |
| -------------------------------------------------------- | ------- |
| [LIFF CLI](https://www.npmjs.com/package/@line/liff-cli) | 0.4.1   |
| [LIFF SDK](https://www.npmjs.com/package/@line/liff)     | 2.24.0  |
| [Node.js](https://nodejs.org/en)                         | 22.2.0  |
| [npm](https://www.npmjs.com/)                            | 10.7.0  |

## LIFF CLI 설치 

터미널 또는 명령줄 도구(이하 "터미널")를 열고 다음 명령을 실행하세요.

```bash
$ npm install -g @line/liff-cli
```

이 명령은 LIFF CLI를 설치하고 `liff-cli` 명령을 실행할 수 있게 합니다.

## 채널 관리 

`channel` 명령으로 LIFF CLI가 관리할 채널을 추가하거나 기본 채널을 설정할 수 있습니다. 채널은 미리 [LINE Developers Console](https://developers.line.biz/console/)에서 만들어 두어야 한다는 점에 유의하세요.

### 채널 추가 

`add` 하위 명령으로 LIFF CLI가 관리할 채널을 추가할 수 있습니다. 추가할 채널의 채널 ID를 `add` 하위 명령에 전달하면 채널 시크릿을 입력하라는 메시지가 표시됩니다. 채널 시크릿을 입력하면 채널이 추가됩니다.

```bash
$ liff-cli channel add 1234567890
? Channel Secret?: ********************************
Channel 1234567890 is now added.
```

각 LIFF CLI 명령에 채널 ID를 전달할 때는 위와 같이 `add` 하위 명령을 사용하여 해당 채널을 미리 추가해 두어야 합니다.

### 기본 채널 설정 

`use` 하위 명령으로 LIFF CLI의 기본 채널을 설정할 수 있습니다. 설정할 채널의 채널 ID를 `use` 하위 명령에 전달하세요.

```bash
$ liff-cli channel use 1234567890
Channel 1234567890 is now selected.
```

기본 채널은 각 LIFF CLI 명령에서 채널 ID를 생략했을 때 사용됩니다.

## LIFF 앱 관리 

`app` 명령으로 LIFF 앱을 생성, 수정, 조회, 삭제할 수 있습니다.

### LIFF 앱 생성 

`create` 하위 명령으로 LIFF 앱을 생성할 수 있습니다. LIFF 앱이 성공적으로 생성되면 터미널에 LIFF ID가 표시됩니다.

```bash
$ liff-cli app create \
   --channel-id 1234567890 \
   --name "Brown Coffee" \
   --endpoint-url https://example.com \
   --view-type full
Successfully created LIFF app: 1234567890-AbcdEfgh
```

#### 옵션 

`create` 하위 명령에서 사용할 수 있는 옵션은 다음과 같습니다.

| 옵션 | 필수 여부 | 설명 |
| --- | --- | --- |
| `-c`, `--channel-id` |  | LIFF 앱을 생성할 채널의 채널 ID를 지정합니다. 채널 ID를 생략하면 [기본 채널](https://developers.line.biz/en/docs/liff/liff-cli/#manage-channels-use)의 채널 ID가 지정됩니다. |
| `-n`, `--name` | ✅ | LIFF 앱 이름을 지정합니다. LIFF 앱 이름에는 "LINE" 또는 이와 유사한 문자열이나 부적절한 문자열을 포함할 수 없습니다. |
| `-e`, `--endpoint-url` | ✅ | <p>엔드포인트 URL을 지정합니다. LIFF 앱을 구현한 웹 앱의 URL입니다(예: `https://example.com`). LIFF URL로 LIFF 앱을 실행할 때 사용됩니다.</p><p>URL 스킴은 **https**여야 합니다. URL fragment(#URL-fragment)는 지정할 수 없습니다.</p> |
| `-v`, `--view-type` | ✅ | <p>LIFF 앱 뷰의 크기를 지정합니다. 다음 값 중 하나를 지정하세요.</p><ul><li>`full`</li><li>`tall`</li><li>`compact`</li></ul>자세한 내용은 [LIFF 브라우저의 크기](https://developers.line.biz/en/docs/liff/overview/#screen-size)를 참조하세요. |

### LIFF 앱 수정 

`update` 하위 명령으로 LIFF 앱을 수정할 수 있습니다.

```bash
$ liff-cli app update \
   --liff-id 1234567890-AbcdEfgh \
   --channel-id 1234567890 \
   --name "Brown Cafe"
Successfully updated LIFF app: 1234567890-AbcdEfgh
```

#### 옵션 

`update` 하위 명령에서 사용할 수 있는 옵션은 다음과 같습니다.

| 옵션 | 필수 여부 | 설명 |
| --- | --- | --- |
| `--liff-id` | ✅ | 수정할 LIFF ID를 지정합니다. |
| `--channel-id` |  | LIFF 앱이 속한 채널의 채널 ID를 지정합니다. 채널 ID를 생략하면 [기본 채널](https://developers.line.biz/en/docs/liff/liff-cli/#manage-channels-use)의 채널 ID가 지정됩니다. |
| `--name` |  | LIFF 앱 이름을 지정합니다. LIFF 앱 이름에는 "LINE" 또는 이와 유사한 문자열이나 부적절한 문자열을 포함할 수 없습니다. |
| `--endpoint-url` |  | <p>엔드포인트 URL을 지정합니다. LIFF 앱을 구현한 웹 앱의 URL입니다(예: `https://example.com`). LIFF URL로 LIFF 앱을 실행할 때 사용됩니다.</p><p>URL 스킴은 **https**여야 합니다. URL fragment(#URL-fragment)는 지정할 수 없습니다.</p> |
| `--view-type` |  | <p>LIFF 앱 뷰의 크기를 지정합니다. 다음 값 중 하나를 지정하세요.</p><ul><li>`full`</li><li>`tall`</li><li>`compact`</li></ul>자세한 내용은 [LIFF 브라우저의 크기](https://developers.line.biz/en/docs/liff/overview/#screen-size)를 참조하세요. |

### LIFF 앱 목록 조회 

`list` 하위 명령으로 LIFF 앱 목록을 조회할 수 있습니다. LIFF ID와 LIFF 앱 이름이 목록으로 표시됩니다.

```bash
$ liff-cli app list --channel-id 1234567890
LIFF apps:
1234567890-AbcdEfgh: Brown Coffee
1234567890-IjklMnop: Brown Cafe
```

#### 옵션 

`list` 하위 명령에서 사용할 수 있는 옵션은 다음과 같습니다.

| 옵션 | 필수 여부 | 설명 |
| --- | --- | --- |
| `--channel-id` |  | LIFF 앱 목록을 조회할 채널의 채널 ID를 지정합니다. 채널 ID를 생략하면 [기본 채널](https://developers.line.biz/en/docs/liff/liff-cli/#manage-channels-use)의 채널 ID가 지정됩니다. |

### LIFF 앱 삭제 

`delete` 하위 명령으로 LIFF 앱을 삭제할 수 있습니다.

```bash
$ liff-cli app delete \
   --liff-id 1234567890-AbcdEfgh \
   --channel-id 1234567890
Deleting LIFF app...
Successfully deleted LIFF app: 1234567890-AbcdEfgh
```

#### 옵션 

`delete` 하위 명령에서 사용할 수 있는 옵션은 다음과 같습니다.

| 옵션 | 필수 여부 | 설명 |
| --- | --- | --- |
| `--liff-id` | ✅ | 삭제할 LIFF 앱의 LIFF ID를 지정합니다. |
| `--channel-id` |  | LIFF 앱이 속한 채널의 채널 ID를 지정합니다. 채널 ID를 생략하면 [기본 채널](https://developers.line.biz/en/docs/liff/liff-cli/#manage-channels-use)의 채널 ID가 지정됩니다. |

## LIFF 앱 템플릿 생성 

`scaffold` 명령으로 [Create LIFF App](https://developers.line.biz/en/docs/liff/cli-tool-create-liff-app/)을 사용하여 LIFF 앱 템플릿을 생성할 수 있습니다. `scaffold` 명령에 LIFF 앱의 프로젝트 이름을 전달하면 해당 프로젝트 이름으로 Create LIFF App이 실행됩니다.

```bash
$ liff-cli scaffold my-app --liff-id 1234567890-AbcdEfgh
```

Create LIFF App에 대한 자세한 내용은 [Create LIFF App으로 LIFF 앱 개발 환경 구축하기](https://developers.line.biz/en/docs/liff/cli-tool-create-liff-app/)를 참조하세요.

### 옵션 

`scaffold` 명령에서 사용할 수 있는 옵션은 다음과 같습니다.

| 옵션              | 필수 여부 | 설명                               |
| ----------------- | -------- | ---------------------------------- |
| `-l`, `--liff-id` |          | LIFF 앱의 LIFF ID를 지정합니다.     |

## LIFF 앱 개발 환경 생성 

`init` 명령으로 LIFF 앱 개발 환경을 생성할 수 있습니다. `init` 명령은 다음 세 가지 과정을 순서대로 수행합니다.

1. [채널 추가](https://developers.line.biz/en/docs/liff/liff-cli/#manage-channels-add)
1. [LIFF 앱 생성](https://developers.line.biz/en/docs/liff/liff-cli/#manage-liff-apps-create)
1. [LIFF 앱 템플릿 생성](https://developers.line.biz/en/docs/liff/liff-cli/#scaffold)

```bash
$ liff-cli init \
   --channel-id 1234567890 \
   --name "Brown Coffee" \
   --view-type full \
   --endpoint-url https://example.com
```

예를 들어 위 명령은 채널 ID가 "1234567890"인 채널을 추가합니다. 다음으로 해당 채널에 LIFF 앱 이름이 "Brown Coffee", 엔드포인트 URL이 "https://example.com", 뷰 크기가 "Full"인 LIFF 앱을 생성합니다. 마지막으로 생성된 LIFF 앱의 LIFF ID가 설정된 템플릿을 만듭니다.

```bash
liff-cli init \
   --channel-id 1234567890 \
   --name "Brown Coffee" \
   --view-type full \
   --endpoint-url https://example.com

? Channel Secret?: ********************************
Channel 1234567890 is now added.
Welcome to the Create LIFF App
? Which template do you want to use? vanilla
? JavaScript or TypeScript? JavaScript
? Which package manager do you want to use? npm

Installing dependencies:
- @line/liff

removed 10 packages in 944ms

22 packages are looking for funding
  run `npm fund` for details

Installing devDependencies:
- vite

added 10 packages in 7s

25 packages are looking for funding
  run `npm fund` for details

Done! Now run:

  cd Brown Coffee
  npm run dev

App 1234567890-AbcdEfgh successfully created.

Now do the following:
  1. go to app directory: `cd Brown Coffee`
  2. create certificate key files (e.g. `mkcert localhost`, see: https://developers.line.biz/en/docs/liff/liff-cli/#serve-operating-conditions )
  3. run LIFF app template using command above (e.g. `npm run dev` or `yarn dev`)
  4. open new terminal window, navigate to `Brown Coffee` directory
  5. run `liff-cli serve -l 1234567890-AbcdEfgh -u http://localhost:${PORT FROM STEP 3.}/`
  6. open browser and navigate to http://localhost:${PORT FROM STEP 3.}/
```

### 옵션 

`init` 명령에서 사용할 수 있는 옵션은 다음과 같습니다. 옵션을 생략하면 `init` 명령을 실행할 때 해당 옵션에 대한 입력을 요청받습니다.

```bash
$ liff-cli init
? Channel ID? 1234567890
? App name? Brown Coffee
? View type? full
? Endpoint URL? (leave empty for default 'https://localhost:9000') https://example.com
```

| 옵션 | 필수 여부 | 설명 |
| --- | --- | --- |
| `-c`, `--channel-id` | ✅ \*1 | LIFF 앱을 생성할 채널의 채널 ID를 지정합니다. |
| `-n`,`--name` | ✅ \*2 | LIFF 앱 이름을 지정합니다. LIFF 앱 이름에는 "LINE" 또는 이와 유사한 문자열이나 부적절한 문자열을 포함할 수 없습니다. |
| `-v`, `--view-type` | ✅ \*2 | <p>LIFF 앱 뷰의 크기를 지정합니다. 다음 값 중 하나를 지정하세요.</p><ul><li>`full`</li><li>`tall`</li><li>`compact`</li></ul>자세한 내용은 [LIFF 브라우저의 크기](https://developers.line.biz/en/docs/liff/overview/#screen-size)를 참조하세요. |
| `-e`, `--endpoint-url` |  | <p>엔드포인트 URL을 지정합니다. LIFF 앱을 배포할 URL입니다(예: `https://example.com`). LIFF URL로 LIFF 앱을 실행할 때 사용됩니다.</p><p>URL 스킴은 **https**여야 합니다. URL fragment(#URL-fragment)는 지정할 수 없습니다.</p> |

\*1 [기본 채널](https://developers.line.biz/en/docs/liff/liff-cli/#manage-channels-use)을 설정하지 않은 경우 옵션 또는 입력 요청 중 하나를 지정해야 합니다.<br>\*2 옵션 또는 입력 요청 중 하나를 지정해야 합니다.

## HTTPS를 사용하여 로컬 개발 서버 실행 

`serve` 명령으로 HTTPS를 사용하는 로컬 개발 서버를 실행할 수 있습니다.

LIFF 앱이 실행 중인 로컬 개발 서버를 `serve` 명령에 지정하면 HTTPS를 사용하는 로컬 프록시 서버가 실행되고, LIFF 앱의 엔드포인트 URL이 해당 로컬 프록시 서버의 URL로 변경됩니다. 이를 통해 HTTPS를 사용하여 로컬 개발 서버를 더 쉽게 실행할 수 있습니다.

<!-- note start -->

**배포된 LIFF 앱에는 serve 명령을 실행하지 마세요**

`serve` 명령은 LIFF 앱의 엔드포인트 URL을 로컬 프록시 서버의 URL로 변경하므로 사용자가 LIFF 앱에 접근할 수 없게 됩니다. 따라서 배포된 LIFF 앱에는 `serve` 명령을 실행하지 마세요.

![](https://developers.line.biz/media/liff/liff-cli/endpoint-url-en.png)

<!-- note end -->

```bash
# URL로 로컬 개발 서버를 지정하는 경우
$ liff-cli serve \
   --liff-id 1234567890-AbcdEfgh \
   --url http://localhost:3000/

Successfully updated endpoint url for LIFF ID: 1234567890-AbcdEfgh.

→  LIFF URL:     https://liff.line.me/1234567890-AbcdEfgh
→  Proxy server: https://localhost:9000/
```

```bash
# 호스트와 포트 번호로 로컬 개발 서버를 지정하는 경우
$ liff-cli serve \
   --liff-id 1234567890-AbcdEfgh \
   --host localhost \
   --port 3000

Successfully updated endpoint url for LIFF ID: 1234567890-AbcdEfgh.

→  LIFF URL:     https://liff.line.me/1234567890-AbcdEfgh
→  Proxy server: https://localhost:9000/
```

### LIFF Inspector로 LIFF 앱 디버깅하기 

`serve` 명령에 `--inspect` 옵션을 지정하면 [LIFF Inspector](https://developers.line.biz/en/docs/liff/liff-plugin/#liff-inspector)로 LIFF 앱을 디버깅할 수 있습니다.

`--inspect` 옵션은 HTTPS를 사용하는 LIFF Inspector 서버를 실행합니다. 개발자는 LIFF 앱에 LIFF Inspector 플러그인을 설치하기만 하면 LIFF 앱을 디버깅할 수 있습니다. 자세한 내용은 LIFF Inspector의 [README](https://github.com/line/liff-inspector/blob/main/README.md)를 참조하세요.

```bash
$ liff-cli serve \
   --liff-id 1234567890-AbcdEfgh \
   --url http://localhost:3000/ \
   --inspect

Successfully updated endpoint url for LIFF ID: 1234567890-AbcdEfgh.

→  LIFF URL:     https://liff.line.me/1234567890-AbcdEfgh
→  Proxy server: https://localhost:9000/?li.origin=wss%3A%2F%2Flocalhost%3A9222
Debugger listening on wss://192.168.1.6:9222

You need to serve this server over SSL/TLS
For help, see: https://github.com/line/liff-inspector#important-liff-inspector-server-need-to-be-served-over-ssltls
```

LIFF URL에 접속하면 `serve` 명령을 실행한 터미널에 `devtools://devtools/`로 시작하는 URL이 나타납니다. 이 URL을 Google Chrome으로 열면 Google Chrome에서 LIFF 앱을 디버깅할 수 있습니다.

```bash
connection from client, id: 1234567890-AbcdEfgh
DevTools URL: devtools://devtools/bundled/inspector.html?wss=localhost:9222/?hi_id=1234567890-AbcdEfgh
```

### 로컬 개발 서버 외부에 노출하기 

LIFF CLI는 프록시로 [ngrok](https://ngrok.com/)을 지원합니다. ngrok을 사용하려면 `serve` 명령의 `--proxy-type` 옵션에 다음 값 중 하나를 지정하세요.

- [ngrok](https://developers.line.biz/en/docs/liff/liff-cli/#serve-proxy-type-ngrok)
- [ngrok-v1](https://developers.line.biz/en/docs/liff/liff-cli/#serve-proxy-type-ngrok-v1) (지원 종료)

#### 프록시 유형: `ngrok` 

`--proxy-type` 옵션에 `ngrok`을 지정하면 로컬 프록시 서버 대신 [ngrok](https://github.com/ngrok/ngrok-javascript)을 사용할 수 있습니다. 이를 통해 로컬 개발 서버를 외부에 노출할 수 있습니다. ngrok을 사용할 때는 ngrok의 authtoken을 환경 변수 `NGROK_AUTHTOKEN`으로 설정하세요.

```bash
$ NGROK_AUTHTOKEN={Authentication token} liff-cli serve \
   --liff-id 1234567890-AbcdEfgh \
   --url http://localhost:3000/ \
   --proxy-type ngrok

Successfully updated endpoint url for LIFF ID: 1234567890-AbcdEfgh.

→  LIFF URL:     https://liff.line.me/1234567890-AbcdEfgh
→  Proxy server: https://1234abcd.ngrok.example.com/
```

#### 프록시 유형: `ngrok-v1` (지원 종료) 

<!-- note start -->

**ngrok-v1은 지원 종료되었습니다**

ngrok v1은 더 이상 개발 및 유지 관리되지 않으므로 `ngrok-v1`은 지원 종료되었습니다. ngrok을 사용할 때는 프록시 유형으로 [`ngrok`](https://developers.line.biz/en/docs/liff/liff-cli/#serve-proxy-type-ngrok)을 지정하세요.

<!-- note end -->

`--proxy-type` 옵션에 `ngrok-v1`을 지정하면 로컬 프록시 서버 대신 [ngrok v1](https://github.com/inconshreveable/ngrok)을 사용할 수 있습니다. 이를 통해 로컬 개발 서버를 외부에 노출할 수 있습니다. 이 기능을 사용하려면 [ngrok v1](https://github.com/inconshreveable/ngrok)과 [node-pty](https://www.npmjs.com/package/node-pty)를 설치해야 합니다.

```bash
$ liff-cli serve \
  --liff-id 1234567890-AbcdEfgh \
  --url http://127.0.0.1:3000/ \
  --proxy-type ngrok-v1

ngrok-v1 is experimental feature.
Successfully updated endpoint url for LIFF ID: 1234567890-AbcdEfgh.

→  LIFF URL:     https://liff.line.me/1234567890-AbcdEfgh
→  Proxy server: https://1234abcd.ngrok.example.com/
```

### `serve` 명령의 동작 조건 

`serve` 명령이 동작하려면 다음 조건을 모두 충족해야 합니다.

- localhost용 유효한 인증서(`localhost.pem`)와 개인 키(`localhost-key.pem`)를 생성해야 합니다.
- `localhost.pem`과 `localhost-key.pem`을 생성한 위치(예: LIFF 앱 프로젝트의 루트 디렉터리)에서 `serve` 명령을 실행해야 합니다.

localhost용 유효한 인증서(`localhost.pem`)와 개인 키(`localhost-key.pem`)를 생성하려면 다음 단계를 따르세요. 여기서는 [mkcert](https://github.com/FiloSottile/mkcert)를 사용합니다. mkcert에 대한 자세한 내용은 mkcert의 [README](https://github.com/FiloSottile/mkcert/blob/master/README.md)를 참조하세요.

1. 다음 명령을 실행하여 `mkcert`를 설치합니다.

```bash
# macOS의 경우(Homebrew 사용)
$ brew install mkcert

# Windows의 경우(Chocolatey 사용)
$ choco install mkcert
```

2. `mkcert -install`을 실행하여 로컬 인증 기관(CA)을 생성합니다.

```bash
$ mkcert -install
```

3. `mkcert localhost`를 실행하여 localhost용 유효한 인증서(`localhost.pem`)와 개인 키(`localhost-key.pem`)를 생성합니다.

```bash
$ mkcert localhost
Note: the local CA is not installed in the Firefox trust store.
Run "mkcert -install" for certificates to be trusted automatically ⚠️

Created a new certificate valid for the following names 📜
 - "localhost"

The certificate is at "./localhost.pem" and the key at "./localhost-key.pem" ✅
```

### 옵션 

`serve` 명령에서 사용할 수 있는 옵션은 다음과 같습니다.

| 옵션 | 필수 여부 | 설명 |
| --- | --- | --- |
| `-l`、 `--liff-id` | ✅ | 로컬 개발 서버에서 실행할 LIFF 앱의 LIFF ID를 지정합니다. LIFF 앱의 LIFF ID는 [기본 채널](https://developers.line.biz/en/docs/liff/liff-cli/#manage-channels-use)에서만 지정할 수 있습니다. |
| `-u`、 `--url` | ✅ \*1 | 로컬 개발 서버의 URL을 지정합니다. |
| `--host` | ✅ \*2 | 로컬 개발 서버의 호스트를 지정합니다. |
| `--port` | ✅ \*2 | 로컬 개발 서버의 포트 번호를 지정합니다. |
| `-i`、 `--inspect` |  | 지정하면 LIFF Inspector가 실행됩니다. |
| `--proxy-type` |  | <p>사용할 프록시 유형입니다. 다음 값 중 하나를 지정하세요.</p><ul><li>`local-proxy`: 로컬 프록시</li><li>`ngrok`: [ngrok](https://github.com/ngrok/ngrok-javascript)</li><li>`ngrok-v1`: [ngrok v1](https://github.com/inconshreveable/ngrok) (지원 종료)</li></ul>기본값은 `local-proxy`입니다. |
| `--ngrok-command` |  | ngrok v1을 실행할 명령을 지정합니다. 기본값은 `ngrok`입니다. |
| `--local-proxy-port` |  | 로컬 개발 서버를 위한 로컬 프록시 서버가 수신 대기할 포트 번호를 지정합니다. 기본값은 `9000`입니다. |
| `--local-proxy-inspector-port` |  | LIFF Inspector 서버를 위한 로컬 프록시 서버가 수신 대기할 포트 번호를 지정합니다. 기본값은 `9223`입니다. |

\*1 로컬 개발 서버를 URL로 지정하는 경우 필수입니다.<br>\*2 로컬 개발 서버를 호스트와 포트 번호로 지정하는 경우 필수입니다.
