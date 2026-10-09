# LINE Login의 PKCE 지원

## PKCE란 무엇인가요? 

PKCE(Proof Key for Code Exchange)는 인증 코드 가로채기 공격(authorization code interception attack)에 대응하기 위해 [RFC7636](https://datatracker.ietf.org/doc/html/rfc7636)에 정의된 OAuth 2.0 확장 사양입니다.

PKCE를 사용하지 않는 OAuth 2.0 인증 흐름에서는 악성 앱이 인증 코드가 포함된 커스텀 URI를 어떤 방식으로든 얻게 되면 사용자별 액세스 토큰을 탈취당할 수 있습니다. LINE Login을 연동한 웹 앱에 PKCE 인증 흐름을 구현하면 LINE Login v2.1의 보안을 더욱 강화하고 인증 코드 가로채기 공격을 방지할 수 있습니다.

## LINE Login에 PKCE를 구현하는 이점 

LINE Login을 사용하는 웹 앱에 PKCE를 구현했는지 여부에 따라 인증 코드 가로채기 공격에 대한 대응 방식이 달라집니다. 웹 앱을 더 안전하게 만들기 위해 PKCE 구현을 권장합니다.

<table>
  <thead>
    <tr>
      <th>PKCE를 구현하지 않은 경우</th>
      <th>PKCE를 구현한 경우</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>악성 앱이 인증 코드가 포함된 콜백 URL을 어떤 방식으로든 얻게 되면 액세스 토큰을 탈취할 수 있습니다.<br><img style="padding-top:1em; width:1200px" alt="Authorization code interception attack when PKCE isn't implemented" src="/media/line-login/new-user-login-without-pkce-en.svg" class="bg-border mt-3"></img></td>
      <td>악성 앱이 리디렉션 중에 전달되는 정보를 탈취하더라도, 고유한 <code>code_challenge</code>와 대조하여 확인하므로 액세스 토큰을 탈취당하지 않습니다.<br><img style="padding:1em; width:1200px" alt="Authorization code interception attack when PKCE is implemented" src="/media/line-login/new-user-login-with-pkce-en.svg" class="bg-border mt-3"></img></td>
    </tr>
  </tbody>
</table>

<!-- tip start -->

**PKCE 구현의 또 다른 이점**

PKCE가 구현된 LINE 로그인을 연동한 웹 앱에 [Yahoo! JAPAN 앱](https://promo-mobile.yahoo.co.jp/yjapp/)에서 접속하면, 이메일 주소와 비밀번호로 로그인하는 과정을 건너뛸 수 있는 [자동 로그인](https://developers.line.biz/en/docs/line-login/integrate-line-login/#line-auto-login) 기능이 활성화됩니다.

![Auto login from the Yahoo! JAPAN app](https://developers.line.biz/media/line-login/yja-to-line-login-en.webp)

<!-- tip end -->

## LINE Login에 PKCE 구현하기 

LINE Login에 PKCE를 구현하려면 [LINE Login을 웹 앱에 연동하는](https://developers.line.biz/en/docs/line-login/integrate-line-login/) 과정과 함께 다음 네 단계를 따르십시오.

![How to implement PKCE](https://developers.line.biz/media/line-login/new-user-login-pkce-workflow-en.svg)

1. [`code_verifier`를 생성합니다.](https://developers.line.biz/en/docs/line-login/integrate-pkce/#generate-code-verifier)
2. [1단계에서 생성한 `code_verifier`를 기반으로 `code_challenge`를 생성합니다.](https://developers.line.biz/en/docs/line-login/integrate-pkce/#generate-code-challenge)
3. [2단계에서 생성한 `code_challenge`와 `code_challenge_method`를 쿼리 파라미터로 포함하여 사용자를 인증 URL로 리디렉션합니다.](https://developers.line.biz/en/docs/line-login/integrate-pkce/#add-to-authentication-url)
4. [1단계에서 생성한 `code_verifier`를 "Issue access token" API 엔드포인트의 요청 본문에 추가하여 실행합니다.](https://developers.line.biz/en/docs/line-login/integrate-pkce/#execute-issuing-access-token)

<!-- tip start -->

**PKCE 지원을 위한 새 파라미터**

PKCE를 지원하기 위해 LINE Login의 "Authorization URL"과 "Issue access token" API 엔드포인트에 다음 파라미터가 추가되었습니다.

- `code_verifier`
- `code_challenge`
- `code_challenge_method`

각 파라미터에 대한 자세한 내용은 아래 각 단계의 상세 설명을 참고하십시오.

<!-- tip end -->

### 1. `code_verifier` 생성하기 

웹 앱에서 사용자가 LINE Login을 실행할 때 고유한 `code_verifier`를 생성합니다. `code_verifier` 사양은 [RFC7636](https://datatracker.ietf.org/doc/html/rfc7636)을 기반으로 합니다.

**파라미터**

| 파라미터 | 사양 | 예시 |
| --- | --- | --- |
| <code style="word-break: normal">code_verifier</code> | **사용 가능한 문자 유형**: 반각 영숫자(`a`-`z`, `A`-`Z`, `0`-`9`)와 기호(`-._~`)로 구성된 무작위 문자열<br>**문자 수**: 43~128자 | wJKN8qz5t8SSI9lMFhBB6qwNkQBkuPZoCxzRhwLRUo1 |

**샘플 코드**

Node.js로 `code_verifier`를 생성하는 샘플 코드는 다음과 같습니다.

``` js
// randomAlphaNumericString()은 인수로 지정한 정수(43~128)만큼 사용 가능한 문자(반각 영숫자와 기호)로 구성된 무작위 문자열을 생성하여 반환하는 함수라고 가정합니다.
const code_verifier = randomAlphaNumericString(43);
```

### 2. `code_challenge` 생성하기 

생성한 `code_verifier`를 SHA256으로 해시한 다음 Base64URL 형식으로 인코딩하여 `code_challenge`를 생성할 수 있습니다.

**파라미터**

| 파라미터 | 사양 | 예시 |
| --- | --- | --- |
| <code style="word-break: normal">code_challenge</code> | `code_verifier`를 SHA256으로 해시하고 Base64URL 형식으로 인코딩한 값 | BSCQwo_m8Wf0fpjmwkIKmPAJ1A7tiuRSNDnXzODS7QI |

<!-- note start -->

**URL 쿼리 파라미터의 형식**

`code_challenge`의 값은 URL 쿼리 파라미터로 사용할 수 있도록 일반 Base64 형식의 문자열에서 일부 문자를 삭제하거나 대체해야 합니다. 자세한 내용은 RFC 4648의 [5. Base 64 Encoding with URL and Filename Safe Alphabet](https://datatracker.ietf.org/doc/html/rfc4648#section-5)을 참고하십시오.

- 패딩(문자 채우기 `=`)을 제거합니다.
- `+`를 `-`로 바꿉니다.
- `/`를 `_`로 바꿉니다.

| Base64 형식 예시 | `code_challenge`의 삭제 및 대체 예시 |
| --- | --- |
| BSCQwo_m8Wf0fpjmwk<b style="color:red">+</b>KmPAJ1A<b style="color:red">/</b>tiuRSNDnXzODS7<b style="color:red">==</b> | BSCQwo_m8Wf0fpjmwk<b style="color:red">-</b>KmPAJ1A<b style="color:red">_</b>tiuRSNDnXzODS7 |

<!-- note end -->

**샘플 코드**

Node.js로 `code_challenge`를 생성하는 샘플 코드는 다음과 같습니다.

``` js
// 이 샘플 코드는 Node.js의 "crypto" 모듈을 사용합니다.
// 참고: https://nodejs.org/api/crypto.html#crypto_crypto
const crypto = require("crypto");

// BASE64 형식을 BASE64URL 형식으로 인코딩합니다.
function base64UrlEncode(str) {
    return str
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=/g, '');
}

// code_verifier를 SHA256으로 해시한 다음 BASE64URL 형식으로 인코딩하여 code_challenge를 생성합니다.
const code_challenge = base64UrlEncode(crypto
    .createHash('sha256')
    .update(code_verifier)
    .digest('base64'));
```

### 3. 인증 URL의 쿼리 파라미터에 `code_challenge`와 `code_challenge_method` 추가하기 

일반적인 LINE Login 인증 URL의 쿼리 파라미터에 `code_challenge`와 `code_challenge_method`를 포함합니다.

**파라미터**

| 파라미터 | 타입 | 필수 여부 | 설명 |
| --- | --- | --- | --- |
| `code_challenge` | String | 선택 | [2단계](https://developers.line.biz/en/docs/line-login/integrate-pkce/#generate-code-challenge)에서 생성한 `code_challenge`입니다. 기본값은 `null`입니다. 값을 지정하지 않으면 해당 요청은 PKCE를 지원하지 않습니다. |
| <code style="word-break: normal">code_challenge_method</code> | String | 선택 | `S256`(해시 함수 `SHA256`을 나타냅니다.)<br><br>참고: [RFC7636 "Client Creates the Code Challenge"](https://datatracker.ietf.org/doc/html/rfc7636#section-4.2)에서는 `code_challenge`를 생성하는 방식으로 `S256`뿐만 아니라 `plain`(변환 없음)도 정의하고 있습니다. 하지만 LINE Login은 보안상의 이유로 `S256`만 지원합니다. |

**인증 URL 예시**

```sh
https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1234567890&redirect_uri=https%3A%2F%2Fexample.com%2Fauth%3Fkey%3Dvalue&state=12345abcde&scope=profile%20openid&nonce=09876xyz
&code_challenge={2단계에서 계산한 code_challenge 값}&code_challenge_method=S256
```

인증 URL의 다른 쿼리 파라미터에 대한 자세한 내용은 [사용자 인증 및 인증 요청하기](https://developers.line.biz/en/docs/line-login/integrate-line-login/#making-an-authorization-request)를 참고하십시오.

### 4. 요청 본문에 `code_verifier`를 지정하여 액세스 토큰 발급하기 

[Issue access token](https://developers.line.biz/en/reference/line-login/#issue-access-token) API 엔드포인트의 요청 본문에 `code_verifier`를 포함하여 실행합니다.

**요청 본문**

<!-- parameter start (props: optional) -->
code_verifier
String

[1단계](https://developers.line.biz/en/docs/line-login/integrate-pkce/#generate-code-verifier)에서 생성한 `code_verifier`입니다.<br>(예: `wJKN8qz5t8SSI9lMFhBB6qwNkQBkuPZoCxzRhwLRUo1`)

<!-- parameter end -->

**요청 예시**

```sh
curl -v -X POST https://api.line.me/oauth2/v2.1/token \
-H 'Content-Type: application/x-www-form-urlencoded' \
-d 'grant_type=authorization_code' \
-d 'code=1234567890abcde' \
--data-urlencode 'redirect_uri=https://example.com/auth?key=value' \
-d 'client_id=1234567890' \
-d 'client_secret=1234567890abcdefghij1234567890ab' \
-d 'code_verifier={1단계에서 생성한 code_verifier}'
```

"Issue access token" API 엔드포인트에 대한 자세한 내용은 LINE Login v2.1 API 레퍼런스의 [Issue access token](https://developers.line.biz/en/reference/line-login/#issue-access-token)을 참고하십시오.
