# 채널 액세스 토큰 v2.1 발급

LINE 플랫폼에는 [네 가지 유형의 채널 액세스 토큰](https://developers.line.biz/en/docs/basics/channel-access-token/#channel-access-token-types)이 있습니다. 이 중 채널 액세스 토큰 v2.1과 stateless 채널 액세스 토큰은 JSON Web Token(JWT)을 사용하여 생성할 수 있습니다.

이 페이지에서는 채널 액세스 토큰 v2.1을 대상으로, 어설션 서명 키를 지정하는 방법, 서명 키로 JWT를 생성하는 방법, 생성한 JWT로 채널 액세스 토큰을 발급하는 방법을 설명합니다.

## 채널 액세스 토큰 v2.1 발급 과정 

채널 액세스 토큰 v2.1을 발급하는 과정은 아래 다이어그램과 같습니다. 이 다이어그램은 다음 세 단계를 보여 줍니다.

- [어설션 서명 키 생성](https://developers.line.biz/en/docs/messaging-api/generate-json-web-token/#create-an-assertion-signing-key) (다이어그램의 1단계)
- [JWT 생성](https://developers.line.biz/en/docs/messaging-api/generate-json-web-token/#generate-jwt) (다이어그램의 6단계)
- [채널 액세스 토큰 v2.1 발급](https://developers.line.biz/en/docs/messaging-api/generate-json-web-token/#issue_a_channel_access_token_v2_1) (다이어그램의 7단계)

![채널 액세스 토큰 발급 흐름](https://developers.line.biz/media/messaging-api/channel-access-token/channel-access-token-issue-flow-en.svg)

<!-- tip start -->

**채널 액세스 토큰 v2.1 사양**

채널 액세스 토큰 v2.1을 발급하기 위한 인증 방식은 [JWT를 인가 승인(Authorization Grant)으로 사용하기(RFC 7523)](https://datatracker.ietf.org/doc/html/rfc7523#section-2.1)를 따릅니다. 이는 [JSON Web Token(RFC 7519)](https://datatracker.ietf.org/doc/html/rfc7519)을 사용하는 [OAuth Assertion Framework(RFC 7521)](https://datatracker.ietf.org/doc/html/rfc7521#section-4.1)의 Assertion Framework입니다.

<!-- tip end -->

## 어설션 서명 키 생성 

어설션 서명 키는 다음 두 단계로 발급합니다.

- [1. 어설션 서명 키의 키 쌍 생성](https://developers.line.biz/en/docs/messaging-api/generate-json-web-token/#generate-a-key-pair-for-the-assertion-signing-key)
- [2. 공개 키 등록 및 `kid` 획득](https://developers.line.biz/en/docs/messaging-api/generate-json-web-token/#register-public-key-and-get-kid)

### 1. 어설션 서명 키의 키 쌍 생성 

JWT를 만들려면 먼저 어설션 서명 키 쌍(개인 키, 공개 키)을 만들어야 합니다.

#### 어설션 서명 키 사양 

다음 기준을 충족하는 [JSON Web Key(RFC7517)](https://datatracker.ietf.org/doc/html/rfc7517)를 JWT의 어설션 서명 키로 사용할 수 있습니다.

- 키는 RSA 공개 키여야 합니다. (`kty` 속성을 `RSA`로 설정)
- RSA 키는 2048비트 길이여야 합니다.
- 서명 알고리즘으로 RS256(RSASSA-PKCS1-v1_5 with SHA256)을 사용합니다. (`alg` 속성을 `RS256`으로 설정)
- 공개 키가 서명용임을 명시해야 합니다. (아래 표에 따라 `use` 또는 `key_ops`를 설정)

따라서 어설션 서명 키의 공개 키에는 다음 속성이 포함되어야 합니다.

| 속성 | 설명 |
| --- | --- |
| `kty` | 키에 사용되는 암호 알고리즘 계열입니다. `RSA`로 설정합니다. |
| `alg` | 키에 사용되는 알고리즘입니다. `RS256`으로 설정합니다. |
| `use`<sup>\*1</sup> | 키의 용도입니다. `sig`로 설정합니다. |
| `key_ops`<sup>\*1</sup> | 키를 사용할 연산입니다. `["verify"]`로만 설정합니다. |
| `e` | 공개 키를 복원하기 위한 지수 값입니다. |
| `n` | 공개 키를 복원하기 위한 계수(modulus) 값입니다. |

\*1 `use` 또는 `key_ops` 중 하나만 지정하세요.

<!-- note start -->

**공개 키를 등록하기 전에 확인하세요**

등록할 공개 키에 `kid` 속성이 없는지 확인하세요. 어설션 서명 키의 공개 키에 `kid` 속성이 있으면 오류가 발생합니다. `kid`는 LINE Developers Console에서 공개 키를 등록할 때만 발급되기 때문입니다.

<!-- note end -->

공개된 사양에 따라 직접 프로그램을 작성하여 어설션 서명 키 쌍을 생성할 수도 있지만, 사양을 충족하는 라이브러리를 사용하면 더 쉽게 키를 생성할 수 있습니다.

다음은 어설션 서명 키를 생성하는 방법의 예입니다.

- [jwx(Go 언어 라이브러리)로 키 쌍 생성](https://developers.line.biz/en/docs/messaging-api/generate-json-web-token/#use-go-lang)
- [JWCrypto(Python 라이브러리)로 키 쌍 생성](https://developers.line.biz/en/docs/messaging-api/generate-json-web-token/#use-python)
- [브라우저로 키 쌍 생성](https://developers.line.biz/en/docs/messaging-api/generate-json-web-token/#use-browser)

#### jwx(Go 언어 라이브러리)로 키 쌍 생성 

[jwx 명령줄 도구](https://github.com/lestrrat-go/jwx/tree/develop/v2/cmd/jwx)로 키 쌍을 생성할 수 있습니다. 이 명령줄 도구는 JWT 구현에 사용되는 오픈 소스 Go 언어 라이브러리 [jwx](https://github.com/lestrrat-go/jwx)에 포함되어 있습니다. Go 언어 개발 환경이 없다면 [Go 언어 공식 사이트](https://go.dev/doc/install)에서 Go를 다운로드하세요.

어설션 서명 키를 발급하려면 다음을 수행하세요.

##### 1. jwx 명령줄 도구 설치 

다음 명령으로 jwx 명령줄 도구를 설치합니다.

```sh
$ git clone https://github.com/lestrrat-go/jwx.git
$ cd jwx
$ make jwx
```

설치가 완료되면 jwx 명령줄 도구가 설치된 경로가 표시됩니다.

```
// 설치 경로 표시 예시
Installed jwx in {installed path}
```

이후 단계의 명령을 실행할 수 있도록 해당 경로를 설정해야 합니다.

##### 2. 개인 키와 공개 키 생성 

다음 명령으로 개인 키를 생성합니다.

```sh
$ jwx jwk generate --type RSA --keysize 2048 --template '{"alg":"RS256","use":"sig"}' > private.key
```

개인 키로 공개 키를 생성합니다.

```sh
$ jwx jwk format --public-key private.key > public.key
```

성공하면 개인 키와 공개 키가 생성됩니다.

**개인 키 예시**

```json
{
  "alg": "RS256",
  "d": "JeSJWnvZ......",
  "dp": "gBDRXGg7......",
  "dq": "MjFJ4xM9......",
  "e": "AQ......",
  "kty": "RSA",
  "n": "pTS2jGso......",
  "p": "xQibzkW6......",
  "q": "1qWtyQ9s......",
  "qi": "sdVGblc......",
  "use": "sig"
}
```

**공개 키 예시**

```json
{
  "alg": "RS256",
  "e": "AQ......",
  "kty": "RSA",
  "n": "pTS2jGso......",
  "use": "sig"
}
```

#### JWCrypto(Python 라이브러리)로 키 쌍 생성 

JWT 구현에 사용되는 오픈 소스 Python 라이브러리 [JWCrypto](https://github.com/latchset/jwcrypto)로 키 쌍을 만들 수 있습니다. JWCrypto를 사용하려면 컴퓨터에 Python 3와 pip가 설치되어 있어야 합니다. Python 3가 없다면 [Python 공식 사이트](https://www.python.org/downloads/)에서 운영체제에 맞는 설치 프로그램을 내려받아 설치하세요. Python 3를 설치하면 pip도 함께 설치됩니다. Python 3는 있지만 pip가 없다면 [pip 문서](https://pip.pypa.io/en/stable/installation/)에서 설치 방법을 확인하세요.

어설션 서명 키를 발급하려면 다음을 수행하세요.

##### 1. JWCrypto 설치 

다음 명령으로 JWCrypto를 설치합니다.

```python
$ pip install jwcrypto
```

##### 2. 개인 키와 공개 키를 만드는 코드 작성 

아래와 같이 `kty`를 `RSA`로, `alg`를 `RS256`으로, `use`를 `sig`로, `size`를 `2048`로 지정하여 개인 키와 공개 키를 생성하는 Python 파일을 만듭니다.

```python
from jwcrypto import jwk
import json
key = jwk.JWK.generate(kty='RSA', alg='RS256', use='sig', size=2048)

private_key = key.export_private()
public_key = key.export_public()

print("=== private key ===\n"+json.dumps(json.loads(private_key),indent=2))
print("=== public key ===\n"+json.dumps(json.loads(public_key),indent=2))
```

Python 파일은 원하는 이름으로 저장하면 됩니다. 이 예에서는 파일 이름을 `app.py`로 하겠습니다.

Python 파일을 저장한 디렉터리에서 다음 명령으로 프로그램을 실행합니다.

```sh
$ python app.py
```

성공하면 표준 출력에 개인 키와 공개 키가 생성됩니다.

**개인 키 예시**

```json
{
  "alg": "RS256",
  "d": "zKh7iwIIPXXFKYQS...",
  "dp": "u1qKg_43UeuGpZFI...",
  "dq": "69AzYgpcg0ckypUrv...",
  "e": "AQ..",
  "kty": "RSA",
  "n": "_RzHf7cgG_i6Pdo_...",
  "p": "_20iRavoSrMIwWuRPxo...",
  "q": "_a5QodMBbEriAgztXvHi...",
  "qi": "JozdjTtK57IFLeVAB...",
  "use": "sig"
}
```

**공개 키 예시**

```json
{
  "alg": "RS256",
  "e": "AQAB",
  "kty": "RSA",
  "n": "_RzHf7cgG_i6Pdo...",
  "use": "sig"
}
```

#### 브라우저로 키 쌍 생성 

브라우저가 [Web Crypto API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API)를 지원한다면 [`SubtleCrypto.generateKey()`](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/generateKey) 메서드로 개인 키와 공개 키를 생성할 수 있습니다. Google Chrome이 있다면 Chrome 개발자 도구의 콘솔에 아래 코드를 입력하고 실행하세요.

```javascript
(async () => {
  const pair = await crypto.subtle.generateKey(
    {
      name: "RSASSA-PKCS1-v1_5",
      modulusLength: 2048,
      publicExponent: new Uint8Array([1, 0, 1]),
      hash: "SHA-256",
    },
    true,
    ["sign", "verify"],
  );

  console.log("=== private key ===");
  console.log(
    JSON.stringify(
      await crypto.subtle.exportKey("jwk", pair.privateKey),
      null,
      "  ",
    ),
  );

  console.log("=== public key ===");
  console.log(
    JSON.stringify(
      await crypto.subtle.exportKey("jwk", pair.publicKey),
      null,
      "  ",
    ),
  );
})();
```

성공하면 개인 키와 공개 키가 생성됩니다.

**개인 키 예시**

```json
{
  "alg": "RS256",
  "d": "GaDzOmc4......",
  "dp": "WAByrYmh......",
  "dq": "WLwjYun0......",
  "e": "AQ......",
  "ext": true,
  "key_ops": [
    "sign"
  ],
  "kty": "RSA",
  "n": "vsbOUoFA......",
  "p": "5QJitCu9......",
  "q": "1ULfGui5......",
  "qi": "2cK4apee......"
}
```

**공개 키 예시**

```json
{
  "alg": "RS256",
  "e": "AQ......",
  "ext": true,
  "key_ops": [
    "verify"
  ],
  "kty": "RSA",
  "n": "vsbOUoFA......"
}
```

### 2. 공개 키 등록 및 `kid` 획득 

키 쌍을 생성한 후 [LINE Developers Console](https://developers.line.biz/console/)에 공개 키를 등록하면 `kid`를 받을 수 있습니다. 공개 키를 등록하려면 콘솔에서 채널의 채널 설정을 엽니다. **Basic settings** 탭을 클릭한 다음, 어설션 서명 키 옆의 **Register a public key** 버튼을 클릭하세요. 공개 키를 입력하고 **Register** 버튼으로 등록을 완료합니다.

공개 키가 정상적으로 등록되면 `kid`를 받게 됩니다.

## JWT 생성 

JWT는 헤더, 페이로드, 서명으로 구성된 문자열이며, 세 가지 모두 필수입니다. JWT를 생성하려면 어설션 서명 키로 [JWT 라이브러리](https://www.jwt.io/libraries)를 사용하거나 직접 코드를 작성할 수 있습니다.

### 헤더 

헤더에는 다음 속성이 포함되어야 합니다.

| 속성 | 타입 | 설명 |
| --- | --- | --- |
| `alg` | String | JWT 생성에 사용하는 알고리즘입니다. 값을 `"RS256"`으로 설정합니다. |
| `typ` | String | 토큰의 타입입니다. 값을 `"JWT"`로 설정합니다. |
| `kid` | String | 키 ID입니다. [2. 공개 키 등록 및 `kid` 획득](https://developers.line.biz/en/docs/messaging-api/generate-json-web-token/#register-public-key-and-get-kid)에서 반환된 `kid` 속성 값으로 설정합니다. |

디코딩된 헤더의 예는 다음과 같습니다.

```json
{
  "alg": "RS256",
  "typ": "JWT",
  "kid": "536e453c-aa93-4449-8e90-add2608783c6"
}
```

### 페이로드 

페이로드에는 다음 속성이 포함되어야 합니다.

| 속성 | 타입 | 설명 |
| --- | --- | --- |
| `iss` | String | 채널 ID입니다. 채널 ID는 [LINE Developers Console](https://developers.line.biz/console/)에서 확인할 수 있습니다. 이 속성의 값과 `sub`의 값은 같아야 합니다. |
| `sub` | String | 채널 ID입니다. 채널 ID는 [LINE Developers Console](https://developers.line.biz/console/)에서 확인할 수 있습니다. 이 속성의 값과 `iss`의 값은 같아야 합니다. |
| `aud` | String | 값을 `https://api.line.me/`로 설정합니다. |
| `exp` | Number | JWT의 만료 시간으로, UNIX 시간(초 단위)입니다. JWT 어설션의 최대 유효 기간은 30분입니다. |
| `token_exp` | Number | 채널 액세스 토큰의 유효 기간(초 단위)입니다. 채널 액세스 토큰의 최대 유효 기간은 30일입니다. |

디코딩된 페이로드의 예는 다음과 같습니다.

```json
{
  "iss": "1234567890",
  "sub": "1234567890",
  "aud": "https://api.line.me/",
  "exp": 1559702522,
  "token_exp": 86400
}
```

### 서명 

헤더와 페이로드에 서명하여 JWT를 생성해야 합니다. 서명을 만들고 그 결과로 JWT를 생성하는 방법은 [node-jose](https://developers.line.biz/en/docs/messaging-api/generate-json-web-token/#jwt-use-nodejs)(Node.js 라이브러리) 또는 [PyJWT](https://developers.line.biz/en/docs/messaging-api/generate-json-web-token/#jwt-use-python)(Python 라이브러리)를 사용하여 알아볼 수 있습니다.

#### node-jose(Node.js 라이브러리)로 JWT 생성 

Node.js 라이브러리인 node-jose로 서명을 만들고 JWT를 생성하려면 [Node.js](https://nodejs.org/en)와 [node-jose](https://github.com/cisco/node-jose#installing)가 설치되어 있어야 합니다.

아래 예제 코드는 node-jose를 사용하여 **개인 키**로 서명하고 JWT를 생성합니다. 이 코드로 자신만의 JWT를 생성하려면, 먼저 `privateKey`의 값을 어설션 서명 키의 개인 키로 바꾸세요. 또한 `header`와 `payload`를 자신의 값으로 바꾼 뒤 코드를 실행하세요. 내용이 변조되지 않았음을 증명하려면 반드시 **개인 키**로 서명해야 합니다. 사용법에 대한 자세한 내용은 [node-jose](https://github.com/cisco/node-jose#installing)를 참고하세요.

```javascript
let jose = require("node-jose");

let privateKey = `
{
    "p": "4h8yEw4q9VkzhXMgXZsIZVkEuZ49EmtWYk9zs0hPTa24ejjRMA6KTYh_va0GlaChO9t0MVQVuduznt-OFZyRAinr4svU4MKD2A3gTHJJCxs0xICva8rkHXqxfPwXngpb5L_xFURbXcSTzMcKckWuOpyPznAgY4XsZxw0t7ewj9E",
    "kty": "RSA",
    "q": "pVhBdRN5K3MEiZzU4__TsrtSBJDD_stu60m73iIvsHIrvK3Dmfl-J1zhsyOvi3NH9mVXpUimBwP8nTe-BlVM71G7_EotFHeKH1zTmBlx6AOngmrc40W2Hd__OZW0NfC_xOTvI_Ea2BNGoGtcrIGVFLTivJ4y9wAVOKA058zJ0ls",
    "d": "ObzE_-TROJazDm-ry-8TKRBMGzwcwTK6lMFSk7n-Xp6h7cDauSdRRYnZivC1lh5plVG3I9aUmPTRbVk7nrPqOlp4WWKQ27lyLd5IogbArpXgnBSkp9Zy0lWzvOsI3gHNnYuehyksHB53FIK93t838JfDQoXUUzalNoNwAGfkTNZxT4GIXGMGzNck2Z_urOATMf8-wdad-u4a5IB2KfHugwH2kw-Zig7fbdcN4_DeKWpuigdesa48Yj_hRJRws-mVFp-xHlGJehumnM_v8FLD85ap8L1hwvBqdJQeurcLXYzZbtdp9a5GpJI7gzOTMoEdxIKlEIIbaOKv4rkkztdhoQ",
    "e": "AQAB",
    "use": "sig",
    "kid": "536e453c-aa93-4449-8e90-add2608783c6",
    "qi": "XQ2puK9LT5yimyJXlXb4nHEBzPGe3sYbaZW_gMK4iHuM8cseImwLNP8ZIeGaNx5X_hZ6ZOzkjtYJjY85fvaWa2UDGdGlEw3ZO-Nk0Qu_exBrqZgZAsua75TjpJRw01Yd1TNBx5MYuvhltJLsjW-uSjcE-rZoO74FEe9pYYeQjI4",
    "dp": "Qq_wlK4Y_ULRbwoFAZY3Y6xdOGDyofwF_fhwpu8sdDxHq8QV7ZZcM4GOKuJcjsRQyNZv7hxeS_H_h1tnC_igy4KRjtGOdrrnJ1DwVZte72eWqF1LXv73R7pnnfS7AmELuOriruL6Dy1qaXpKGmlyeNazkq5-3tsgXUh0Q7po2AE",
    "alg": "RS256",
    "dq": "Wj1ovDT8lLIZb-Ggby9YotuJT-SSk6UDzHZZikquLGajaD6N2qNILsOKivKXBEzOobN9uj-EHaAXZtbdZyd27cZ2CqORJvJ299b5xLFecXpNGeio1YFee7-c1BjYWfgjMZqgycT1GairizINSjkO3FY8ySSuPBBXhKgrN7eVDrE",
    "n": "kgwP0NPaoAwhSh9iLlRaT7FSRbNsl6T5-j-bB3xAT1UbsxOJ9v06S3_54bpYlEAkjlrO-i1vmSzfSVnqFXnjWThWRvPmBDth3Ka7hQm9UXjiAvTzYxXGFjyhALqa_-DQCtdrqIhi8E4hAuSu--kGgnFKg3G-21KJuqnVzsXrClGkxbmVufx0MJjJxr1YGfkTMG8i0dovS9tnkioDAkt1knupiYk5ir_WiNy4T-70T5s3ktC5_4Uz10hS-rWeUxiihzG8G7ceg84-Kt5jKP_AgUnel-ksRyfgSJCYC9nHyz913a3ALj3Dzt7TBaxwAjlxESrdNz5RE9DNDZfPmNWRSw"
  }
`;

let header = {
  alg: "RS256",
  typ: "JWT",
  kid: "536e453c-aa93-4449-8e90-add2608783c6",
};

let payload = {
  iss: "1234567890",
  sub: "1234567890",
  aud: "https://api.line.me/",
  exp: Math.floor(new Date().getTime() / 1000) + 60 * 30,
  token_exp: 60 * 60 * 24 * 30,
};

jose.JWS.createSign(
  { format: "compact", fields: header },
  JSON.parse(privateKey),
)
  .update(JSON.stringify(payload))
  .final()
  .then((result) => {
    console.log(result);
  });
```

Base64url로 인코딩된 헤더, Base64url로 인코딩된 클레임 집합, 그리고 개인 키(예: rsa_private.pem 파일)를 헤더에 지정한 알고리즘으로 서명하세요. Base64url로 인코딩된 결과가 JWT입니다. 다음은 JWT의 예입니다.

```sh
eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjJjNjU4NWYzLThkZGQtNDZjNC05YmUyLWI1NGE3MGFhOTRlYSJ9.eyJpc3MiOiIxNjUzOTQ3MTcyIiwic3ViIjoiMTY1Mzk0NzE3MiIsImF1ZCI6Imh0dHBzOi8vYXBpLmxpbmUubWUvIiwiZXhwIjoiMTU4NTIwMDA2MiIsInRva2VuX2V4cCI6IjI1OTIwMDAifQ.UVG6PAEub-OPbZ3nJuVxRRPjY6Sz_eIHJV9DTTAHCR79YsG4yWvoa9AeIctibb6IJQKgTEV7mF7LsUDmXldEDqYwyEmKs38zj_995Ntc9SYBFphHpr09NqfMoqMphwKqms2NOnqgcHreFs27d9Q0Qv8Rtv2t7SB2cVO__KrsjzYNs3miTvDdkqYLXFo5fXwuzNtHOCAJomd6bhMR8Yd1-vJmtMCBPK4hmA98w8fG_NhcyLbw-B9AuxQ6z92zXiRhNyPlK_3ce2T7HtgUluJ4xJl4xdLJ_C6hvTAqtQxmSiJKzbjUiANF6hVBTomU8vkaIjEKjnlT1uPMihfrsA3pzQ
```

#### PyJWT(Python 라이브러리)로 JWT 생성 

PyJWT로 서명을 만들고 JWT를 생성하려면 [Python](https://www.python.org/downloads/)과 [PyJWT](https://github.com/jpadilla/pyjwt)가 설치되어 있어야 합니다.

아래 예제 코드는 PyJWT를 사용하여 **개인 키**로 서명하고 JWT를 생성합니다. 이 코드로 자신만의 JWT를 생성하려면, 먼저 `privateKey`의 값을 어설션 서명 키의 개인 키로 바꾸세요. 또한 `headers`와 `payload`의 `kid`를 자신의 값으로 바꾼 뒤 코드를 실행하세요. 내용이 변조되지 않았음을 증명하려면 반드시 **개인 키**로 서명해야 합니다. 사용법에 대한 자세한 내용은 [PyJWT](https://github.com/jpadilla/pyjwt#installing)를 참고하세요.

```python
import jwt
from jwt.algorithms import RSAAlgorithm
import time

privateKey = {
  "alg": "RS256",
  "d": "dcA-LXLBRecBQbW7a8LKAriFJhnpXzwu2uNoVF_8-QmGVzI5682FWh_CWhl_B6J0fpmA-d7_EP0WCB3AGhxlyTP6ROoYJo7nygb_KMLREM7n64LFGbvNtw4jk7dmISXl_JuEX6CG09BBx4GLh9AGHSaK4v9B-dDvrNZlAo2mIjISHNcAPENbOl_XIOmZpJd56znjjc1gGKaYGbIm8unxHnPhL66IVYGRu8gxKfG6JUP7o370-VDfFOeaAR0HshTycP6M41jcDSjL6z9-J-Sh0zSZXqGS4u82TNtmwtRTzVwd0w30KQ0TTROTiNsz5apVHjpMvmAxRlbvcW41xIq8sQ",
  "dp": "PAWBMzwnwgc-yixarV30gemH6Wk15HfSUYpR4wJZUHemGx_LE5GXdnKoyy8G9DAl6XMpm7YVH8cPXgXYNh-JlAggvzUeH5A7KAV4ZPTNak4CI844GSbYIu_dPBcVAg0O6sxQWugYpPbPnMDpE7qf4KilSSVG3JKqEMxkYySjZZE",
  "dq": "LBA_q2YYnglCL41-1b3BmzCm-hs7Q-N__otDWO01I03VYnzU-vEQmxy6Fzrh2Y4Fgwp6D8iScu42AOyhE-T-qDNbAsCB0iZeFqm84g6VQAfDbknjIUZtcGvQgzy-zlrl253_QdyJvl2b44KT1hfoF0tDNA1rhOy7WlBM__rH0Pc",
  "e": "AQAB",
  "kty": "RSA",
  "n": "x2glWJ7baQV4vdElnAXA5yu8yFk4LpszkHW3Ey-BKGT3kGVLy3Jk3OvkwjBFOglXWeyTWe_rJkMYkBKuon5syZVjrjb24CmViAXGr6d6IvrYWj8IGZ6ElVABfnjGgZMVywmBb7hIh2p8QR0L8UJEuWjBU5nlwkMBpvnY2HXAVhvir8CN7WRj_GBMxxgg7wSuW1tV-7Qf44grMqJ0Je7zjflS4-TpI8Ox3nhamn0d7NIdQ3jNdTP7IZF61IvETgb_6NdFnfsN-aifJC-Ea3ZwhVcEGJ5z3MMoKSoChJmkJMiV9CldqGRnEDWwBugZHeEtn71eGVE3DAXAzrf525YHYQ",
  "p": "7eH8LAzNkITH6t7CWU5tPAmQlGQPkby66Yfq52tSZ43pQRz0CdtDYCQnGoBXvHzAHhzH4MjmNLOSGVimZK_dIRg5lJaPvVe6hgQ3pYud5WzPWsnQTsC7agQ2rfQglyFUtjwd1gWBIY4gwHj4BYG6Up3g0TlX1sf_juZxcLhkOsc",
  "q": "1pf-Pj2ZPL1nGqVcMVH_hfziIOBtjxc5vMGyHwTaLAA9y2xKfe_SRU8kUK2q5ZykJ8wMckR9Pduuyn-vp4q2FANVSN69G01pUKM2ppkgXuil2S3REmzniGdajZjkpWKaZ6z1tJ_xSv9ghx06Dbro8n___KnpBq6afb022anRxJc",
  "qi": "6L6SgH_pkyqq1Tb6QXPAGmtqVZT58Ljf3QTw6Tx5OdZ9NNvDReHHb64MgbUMLhLzGMeXGqDI5j0WLhtXv4ddCKWkF7OeKLUNuRP7yLpyYMazn8TEOjKHsgLAklenxcSgYaoO_wULh1mze1_ZO2PJNgvkIx_Xzr0XDUAqUp4W0jk",
  "use": "sig"
}

headers = {
    "alg": "RS256",
    "typ": "JWT",
    "kid": "9869e446-3489-4516-a83f-ec9214ad94d0"
}

payload = {
  "iss": "1234567890",
  "sub": "1234567890",
  "aud": "https://api.line.me/",
  "exp":int(time.time())+(60 * 30),
  "token_exp": 60 * 60 * 24 * 30
}

key = RSAAlgorithm.from_jwk(privateKey)

JWT = jwt.encode(payload, key, algorithm="RS256", headers=headers, json_encoder=None)
print(JWT)
```

헤더에 지정한 알고리즘으로 Base64url로 인코딩된 헤더, Base64url로 인코딩된 클레임 집합, 그리고 개인 키를 서명하세요. Base64url로 인코딩된 결과가 JWT입니다. 다음은 JWT의 예입니다.

```sh
eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ijk4NjllNDQ2LTM0ODktNDUxNi1hODNmLWVjOTIxNGFkOTRkMCJ9.eyJpc3MiOiIxMjM0NTY3ODkwIiwic3ViIjoiMTIzNDU2Nzg5MCIsImF1ZCI6Imh0dHBzOi8vYXBpLmxpbmUubWUvIiwiZXhwIjoxNjIzOTk1NTk5LCJ0b2tlbl9leHAiOjI1OTIwMDB9.Zf32xTqgUHSYw2C2Mlmunqz_AtkaqvGh0msx9XJMX6QYLPT4m4QYF3PsER-zfbhbByNT4rH09JEMRP7bzcNMQ8l4n_WXwTyLkNciZYzF-sTiVHiZu4ucJm4_l8ni5NaqOVEntsCp1wQi8-VLjaMpQlQ7crCdouEMFFeyVwgERfH8ui6UZaJeIlJKRZTnO6iYvKYuLyUsqzowfwZo0hcnnZIXKnjZ81ukjH3_78EHXOD5ivovAT7CtmBoglm3Bvsi0N6PlEONLhHqpCleaYTXRmCykxDLP600JRvi5TYApaN-8n2Bo3FskXJLuxquWLP-LTfMDlkakmfEfcQCiz7daQ
```

## 채널 액세스 토큰 v2.1 발급 

[생성한 JWT 어설션](https://developers.line.biz/en/docs/messaging-api/generate-json-web-token/#generate-jwt)으로 [채널 액세스 토큰 v2.1을 발급](https://developers.line.biz/en/reference/messaging-api/#issue-channel-access-token-v2-1)할 수 있습니다.

<!-- note start -->

**키 ID를 사용하여 채널 액세스 토큰 v2.1 관리하기**

- 채널 액세스 토큰 v2.1을 요청하면 채널 액세스 토큰과 고유한 키 ID(`key_id`) 쌍을 응답으로 받습니다. 채널 액세스 토큰을 올바르게 관리하려면 채널 액세스 토큰과 키 ID 쌍을 안전하게 보관하세요.
- 키 ID는 2020년 6월 22일에 Messaging API에 추가된 식별자입니다. 앱이 키 ID 없이 채널 액세스 토큰 v2.1을 사용하고 있다면, 채널 액세스 토큰 v2.1을 다시 발급하고 토큰과 키 ID 쌍을 안전하게 보관하는 것을 권장합니다. 채널 액세스 토큰을 다시 발급하는 경우, 새 토큰을 사용하도록 봇을 반드시 업데이트하세요.

<!-- note end -->

채널 액세스 토큰 v2.1을 가져오는 과정은 다음과 같습니다.

![키 ID 사용 절차 1](https://developers.line.biz/media/messaging-api/channel-access-token/using_keyID_procedure_01.png)

1. 생성한 JWT로 [채널 액세스 토큰 v2.1 발급](https://developers.line.biz/en/reference/messaging-api/#issue-channel-access-token-v2-1) 엔드포인트를 실행하여 채널 액세스 토큰을 발급받습니다.
2. LINE 플랫폼이 채널 액세스 토큰과 키 ID를 보내 줍니다.
3. 채널 액세스 토큰과 키 ID 쌍을 데이터베이스 등에 저장합니다.

### 채널 액세스 토큰 v2.1 폐기 

채널 액세스 토큰이 유효한 경우 [채널 액세스 토큰 v2.1을 폐기](https://developers.line.biz/en/reference/messaging-api/#revoke-channel-access-token-v2-1)할 수 있습니다.

<!-- note start -->

**채널 액세스 토큰의 유효성 확인하기**

유효하지 않은 채널 액세스 토큰으로도 [채널 액세스 토큰 v2.1 폐기](https://developers.line.biz/en/reference/messaging-api/#revoke-channel-access-token-v2-1) 엔드포인트를 실행할 수 있으며, 이때 오류가 발생하지 않습니다. 유효한 채널 액세스 토큰의 키 ID는 [모든 유효한 채널 액세스 토큰 키 ID 조회 v2.1](https://developers.line.biz/en/reference/messaging-api/#get-all-valid-channel-access-token-key-ids-v2-1) 엔드포인트로 가져올 수 있습니다. 가져온 키 ID를 데이터베이스 등에 저장된 채널 액세스 토큰과 키 ID 쌍과 대조하면 유효한 액세스 토큰을 식별할 수 있습니다.

<!-- note end -->

채널 액세스 토큰 v2.1을 폐기하는 과정은 다음과 같습니다.

![키 ID 사용 절차 2](https://developers.line.biz/media/messaging-api/channel-access-token/using_keyID_procedure_02.png)

1. 저장해 둔 어설션 서명 키로 JWT를 다시 생성합니다.
2. JWT로 [모든 유효한 채널 액세스 토큰 키 ID 조회 v2.1](https://developers.line.biz/en/reference/messaging-api/#get-all-valid-channel-access-token-key-ids-v2-1) 엔드포인트를 실행합니다.
3. LINE 플랫폼이 유효한 채널 액세스 토큰의 키 ID를 반환합니다.
4. 반환된 키 ID를 데이터베이스와 대조합니다.
5. 반환된 키 ID 중 일치하는 채널 액세스 토큰과 키 ID 쌍이 있는지 확인합니다.
6. 검증된 채널 액세스 토큰을 가져옵니다.
7. 채널 액세스 토큰으로 [채널 액세스 토큰 v2.1 폐기](https://developers.line.biz/en/reference/messaging-api/#revoke-channel-access-token-v2-1) 엔드포인트를 실행합니다.
8. LINE 플랫폼이 채널 액세스 토큰을 폐기합니다.
