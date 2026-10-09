# ID 토큰에서 프로필 정보 가져오기

LINE 플랫폼은 [OpenID Connect](https://openid.net/developers/how-connect-works/) 사양을 따르는 ID 토큰을 발급하므로, LINE 플랫폼에서 사용자의 [프로필 정보](https://developers.line.biz/en/glossary/#profile-information)(사용자 ID, 표시 이름, 프로필 사진, 이메일 주소)를 안전하게 가져올 수 있습니다.

LINE Profile+ 권한이 있다면 [LINE Profile+](https://developers.line.biz/en/glossary/#line-profile-plus)에 등록된 데이터(이름, 성별, 생년월일, 전화번호, 주소)도 안전하게 가져올 수 있습니다. 자세한 내용은 [LINE Profile+에 등록된 사용자 데이터 가져오기](https://developers.line.biz/en/docs/partner-docs/line-profile-plus/#getting-profile-plus)를 참고하세요.

<!-- table of contents -->

## ID 토큰 가져오기 

[액세스 토큰을 가져올 때](https://developers.line.biz/en/docs/line-login/integrate-line-login/#get-access-token) ID 토큰도 함께 가져올 수 있습니다.

<!-- tip start -->

**LIFF 앱에서도 ID 토큰을 가져올 수 있습니다.**

[liff.getIDToken()](https://developers.line.biz/en/reference/liff/#get-id-token)을 사용하여 ID 토큰을 가져올 수도 있습니다.

<!-- tip end -->

## ID 토큰에 대하여 

ID 토큰은 사용자 정보가 담긴 JSON 웹 토큰(JWT)입니다. ID 토큰은 마침표(.) 문자로 구분된 [헤더](https://developers.line.biz/en/docs/line-login/verify-id-token/#header), [페이로드](https://developers.line.biz/en/docs/line-login/verify-id-token/#payload), [서명](https://developers.line.biz/en/docs/line-login/verify-id-token/#signature)으로 구성되며, 각 부분은 base64url로 인코딩된 값입니다. 자세한 내용은 [JWT](https://datatracker.ietf.org/doc/html/rfc7519) 사양을 참고하세요.

앱의 보안을 위해 ID 토큰은 항상 서명을 사용하여 검증해야 합니다. ID 토큰을 LINE 플랫폼에서 직접 가져온 경우가 아니라면 서버에서 ID 토큰을 검증하세요.

ID 토큰을 검증하려면 검증 코드를 직접 작성하거나 [ID 토큰 검증](https://developers.line.biz/en/reference/line-login/#verify-id-token) 엔드포인트를 사용합니다. 엔드포인트를 사용하여 ID 토큰을 검증하는 방법은 [ID 토큰에서 프로필 정보 가져오기](https://developers.line.biz/en/docs/line-login/verify-id-token/#get-profile-info-from-id-token)를 참고하세요.

### 헤더 

헤더에 포함된 값은 다음과 같습니다.

| 속성 | 타입 | 설명 |
| --- | --- | --- |
| `alg` | String | ID 토큰 서명 알고리즘. 네이티브 앱, LINE SDK 또는 LIFF 앱에서는 `ES256`(P-256 및 SHA-256을 사용한 ECDSA)이 반환되고, 웹 로그인에서는 `HS256`(SHA-256을 사용한 HMAC)이 반환됩니다. |
| `type` | String | 페이로드 형식. `JWT`가 반환됩니다. |
| `kid` | String | 공개 키 ID. `alg` 값이 `ES256`인 경우에만 헤더에 포함됩니다. `kid` 속성에 대한 자세한 내용은 [JSON Web Key(JWK) 문서](https://datatracker.ietf.org/doc/html/rfc7517#section-4.5)를 참고하세요. |

다음은 디코딩된 헤더 부분의 예시입니다.

`alg`가 `HS256`인 경우:

```json
{
  "typ": "JWT",
  "alg": "HS256"
}
```

`alg`가 `ES256`인 경우:

```json
{
  "typ": "JWT",
  "alg": "ES256",
  "kid": "a2a459aec5b65fa..."
}
```

### 페이로드 

사용자 정보는 페이로드 부분에 있습니다. 주요 프로필 정보만 가져올 수 있으며, 사용자의 [서브프로필](https://developers.line.biz/en/glossary/#subprofile)은 가져올 수 없습니다.

| 속성 | 타입 | 설명 |
| --- | --- | --- |
| `iss` | String | `https://access.line.me`. ID 토큰을 생성한 URL입니다. |
| `sub` | String | ID 토큰이 생성된 사용자의 사용자 ID |
| `aud` | String | 채널 ID |
| `exp` | Number | ID 토큰의 만료 시간(UNIX 시간, 초 단위)입니다. |
| `iat` | Number | ID 토큰이 생성된 시간(UNIX 시간, 초 단위)입니다. |
| `auth_time` | Number | 사용자가 인증된 시간(UNIX 시간, 초 단위)입니다. 인증 요청에 `max_age` 파라미터를 지정하지 않은 경우에는 포함되지 않습니다. |
| `nonce` | String | 인증 URL에 지정된 `nonce` 값입니다. 인증 요청에 `nonce` 값을 지정하지 않은 경우에는 포함되지 않습니다. |
| `amr` | Array of strings | 사용자가 사용한 인증 방법의 목록입니다. 특정 조건에서는 페이로드에 포함되지 않습니다.<br />다음 값 중 하나 이상이 포함됩니다:<ul><li>`pwd`: 이메일과 비밀번호로 로그인</li><li>`lineautologin`: LINE 자동 로그인(LINE SDK를 통한 로그인 포함)</li><li>`lineqr`: QR 코드로 로그인</li><li>`linesso`: 싱글 사인온으로 로그인</li><li>`mfa`: 2단계 인증으로 로그인</li></ul> 사용자 인증에 대한 자세한 내용은 [사용자 인증](https://developers.line.biz/en/docs/line-login/integrate-line-login/#authentication-process)을 참고하세요. 또한 2단계 인증에 대한 자세한 내용은 [2단계 인증 요구](https://developers.line.biz/en/docs/line-login/overview/#two-factor-authentication)를 참고하세요. |
| `name` | String | 사용자의 표시 이름입니다. 인증 요청에 `profile` 스코프를 지정하지 않은 경우에는 포함되지 않습니다. |
| `picture` | String | 사용자의 프로필 이미지 URL입니다. 인증 요청에 `profile` 스코프를 지정하지 않은 경우에는 포함되지 않습니다. |
| `email` | String | 사용자의 이메일 주소입니다. 인증 요청에 `email` 스코프를 지정하지 않은 경우에는 포함되지 않습니다. |

다음은 디코딩된 페이로드 부분의 예시입니다.

```json
{
  "iss": "https://access.line.me",
  "sub": "U1234567890abcdef1234567890abcdef ",
  "aud": "1234567890",
  "exp": 1504169092,
  "iat": 1504263657,
  "nonce": "0987654asdf",
  "amr": ["pwd"],
  "name": "Taro Line",
  "picture": "https://sample_line.me/aBcdefg123456"
}
```

### 서명 

서명은 마침표 문자로 구분된 base64url 인코딩 헤더와 페이로드 문자열을 해시한 값입니다. ID 토큰이 변조되지 않았는지 확인하는 데 사용됩니다.

해시 알고리즘은 헤더의 `alg` 속성으로 지정됩니다. ID 토큰을 검증하는 데 필요한 키는 서명 해시에 사용된 알고리즘마다 다릅니다.

| 알고리즘 | 검증용 키 |
| --- | --- |
| `ES256`(P-256 및 SHA-256을 사용한 ECDSA) | [JSON Web Key(JWK) 문서 URL](https://api.line.me/oauth2/v2.1/certs)에 있는 요소 중 헤더의 `kid` 속성을 포함한 요소 |
| `HS256`(SHA-256을 사용한 HMAC) | [채널 시크릿](https://developers.line.biz/en/glossary/#channel-secret) |

ID 토큰 검증에 대한 자세한 내용은 OpenID Connect Core 1.0의 [ID Token Validation](https://openid.net/specs/openid-connect-core-1_0.html#IDTokenValidation)을 참고하세요.

OpenID 제공자에 대한 정보는 [OpenID Provider Configuration Document](https://access.line.me/.well-known/openid-configuration)를 참고하세요.

## ID 토큰에서 프로필 정보 가져오기 

ID 토큰에 포함된 정보를 사용할 때는 검증 코드를 직접 작성하거나, LINE Login의 [ID 토큰 검증](https://developers.line.biz/en/reference/line-login/#verify-id-token) 엔드포인트를 사용하여 ID 토큰을 검증하세요.

ID 토큰 검증 엔드포인트를 사용하면, 액세스 토큰과 LINE Login 채널 ID와 함께 가져온 ID 토큰을 전용 API 엔드포인트로 보내는 것만으로 ID 토큰을 검증하고 해당 사용자의 프로필 정보와 이메일 주소를 가져올 수 있습니다.

요청 예시:

```sh
curl -v -X POST 'https://api.line.me/oauth2/v2.1/verify' \
 -d 'id_token=eyJraWQiOiIxNmUwNGQ0ZTU2NzgzYTc5MmRjYjQ2ODRkOD...' \
 -d 'client_id=1234567890'
```

응답 예시:

```json
{
  "iss": "https://access.line.me",
  "sub": "U1234567890abcdef1234567890abcdef",
  "aud": "1234567890",
  "exp": 1504169092,
  "iat": 1504263657,
  "nonce": "0987654asdf",
  "amr": ["pwd"],
  "name": "Taro Line",
  "picture": "https://sample_line.me/aBcdefg123456",
  "email": "taro.line@example.com"
}
```

자세한 내용은 LINE Login API 레퍼런스의 [ID 토큰 검증](https://developers.line.biz/en/reference/line-login/#verify-id-token)을 참고하세요.
