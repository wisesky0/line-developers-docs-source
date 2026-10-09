# LINE Profile+

<!-- note start -->

**선택 기능을 사용하려면 신청이 필요합니다**

필요한 신청서를 제출한 일본의 법인 사용자만 이 문서에 설명된 기능을 사용할 수 있습니다. LINE Login, LIFF 앱 또는 LINE MINI App을 통해 LINE Profile+에 등록된 정보를 이용하려면 영업 담당자 또는 [영업 파트너](https://www.lycbiz.com/jp/partner/sales/)에게 문의해 주십시오. LINE MINI App의 경우 이 기능은 인증된 MINI App에서만 사용할 수 있습니다.

<!-- note end -->

LINE Profile+는 LINE 사용자의 프로필 정보를 관리하는 서비스입니다. 사용자가 LINE Profile+에 등록하는 정보는 일반적인 [프로필 정보](https://developers.line.biz/en/glossary/#profile-information)와 다르며, 신청 절차를 거친 법인 사용자만 가져올 수 있습니다.

<!-- table of contents -->

## 프로필 정보와 LINE Profile+의 차이 

LINE 프로필 정보와 LINE Profile+의 차이에 대한 자세한 내용은 LINE 플랫폼 기본 사항의 [사용자 프로필 가져오기](https://developers.line.biz/en/docs/basics/user-profile/)를 참조해 주십시오.

- [사용자 프로필 정보란](https://developers.line.biz/en/docs/basics/user-profile/#what-is-profile)
- [LINE Profile+](https://developers.line.biz/en/docs/basics/user-profile/#what-is-line-profile-plus)

## LINE Profile+에 등록된 사용자 데이터 가져오기 

LIFF 앱 또는 LINE MINI App을 사용하거나, LINE Login을 자체 웹 앱에 통합하여 LINE Profile+에 등록된 정보를 가져올 수 있습니다.

다음 단계를 따라 가져올 정보의 스코프를 지정하고, LINE Profile+ 정보가 포함된 ID 토큰의 페이로드를 가져옵니다.

| 단계 | [LIFF 앱 또는 LINE MINI App을 통한 방법](https://developers.line.biz/en/docs/partner-docs/line-profile-plus/#liff-mini) | [LINE Login을 통한 방법](https://developers.line.biz/en/docs/partner-docs/line-profile-plus/#line-login) |
| --- | --- | --- |
| 1. 스코프 지정 | [LINE Developers Console에서 스코프 지정](https://developers.line.biz/en/docs/partner-docs/line-profile-plus/#liff-specify-scope) | [인증 URL의 스코프 지정](https://developers.line.biz/en/docs/partner-docs/line-profile-plus/#line-login-specify-scope) |
| 2. ID 토큰 페이로드 가져오기 | [liff.getDecodedIDToken()으로 ID 토큰 페이로드 가져오기](https://developers.line.biz/en/docs/partner-docs/line-profile-plus/#liff-get-id-token) | [액세스 토큰 발급 시 받은 ID 토큰을 검증하여 ID 토큰 페이로드 가져오기](https://developers.line.biz/en/docs/partner-docs/line-profile-plus/#line-login-get-id-token) |
| 3. LINE Profile+ 정보 가져오기 | [ID 토큰 페이로드에서 LINE Profile+ 정보 가져오기](https://developers.line.biz/en/docs/partner-docs/line-profile-plus/#liff-get-profile-plus) | [ID 토큰 페이로드에서 LINE Profile+ 정보 가져오기](https://developers.line.biz/en/docs/partner-docs/line-profile-plus/#line-login-get-profile-plus) |

### LIFF 앱 또는 LINE MINI App을 통한 방법 

LIFF 앱 또는 LINE MINI App을 통해 LINE Profile+에 등록된 정보를 가져오려면, [LINE Developers Console](https://developers.line.biz/console/)에서 가져올 정보의 [스코프](https://developers.line.biz/en/docs/partner-docs/line-profile-plus/#scope)를 설정한 다음 ID 토큰 페이로드를 가져오면, 현재 로그인한 사용자의 LINE Profile+ 정보를 얻을 수 있습니다.

#### 1. LINE Developers Console에서 스코프 지정 

가져올 정보의 스코프를 미리 지정합니다. [LINE Developers Console](https://developers.line.biz/console/)에서 대상 채널을 선택한 다음, LINE MINI App 채널의 **Web app settings** 탭 또는 LINE Login 채널의 **LIFF** 탭에 있는 **Scope** 섹션에서 사용할 스코프를 선택합니다.

LINE Profile+로 가져올 수 있는 스코프에 대한 자세한 내용은 [LINE Profile+ 스코프](https://developers.line.biz/en/docs/partner-docs/line-profile-plus/#scope)를 참조해 주십시오.

![LINE Profile+ 스코프](https://developers.line.biz/media/partner-docs/profile_plus_scopes_en.png)

<!-- note start -->

**openid도 함께 지정해 주십시오**

LINE Profile+에 등록된 정보를 가져오려면 ID 토큰이 필요합니다. ID 토큰 발급 권한을 요청하기 위해 `openid`도 함께 지정해 주십시오.

<!-- note end -->

#### 2. liff.getDecodedIDToken()으로 ID 토큰 페이로드 가져오기 

LIFF SDK의 [`liff.getDecodedIDToken()`](https://developers.line.biz/en/reference/liff/#get-decoded-id-token) 메서드를 실행하면, LIFF 앱 또는 LINE MINI App에 현재 로그인한 사용자의 LINE Profile+ 정보가 포함된 디코딩된 ID 토큰 페이로드를 가져올 수 있습니다.

ID 토큰 페이로드를 가져오는 예시 코드입니다.

```javascript
liff.init(() => {
  const idToken = liff.getDecodedIDToken();
  console.log(idToken); // 디코딩된 idToken 객체를 출력합니다
});
```

#### 3. ID 토큰 페이로드에서 LINE Profile+ 정보 가져오기 

2단계에서 가져온 ID 토큰 페이로드의 LINE Profile+ 정보를 확인합니다.

LINE Profile+ 정보의 예시입니다.

```json
"given_name": "LINE",
"middle_name": "L",
"family_name": "Taro",
"gender": "male",
"birthdate": "1990-01-01",
"phone_number": "+81901111....",
"address": {
    "postal_code": "1028282",
    "region": "Tokyo",
    "locality": "Kioicho, Chiyoda-ku",
    "street_address": "1-3",
    "country": "JP"
}
```

ID 토큰에 포함되는 LINE Profile+ 정보에 대한 자세한 내용은 [ID 토큰에 포함된 LINE Profile+ 정보](https://developers.line.biz/en/docs/partner-docs/line-profile-plus/#id-token)를 참조해 주십시오.

### LINE Login을 통한 방법 

LINE Login v2.1을 웹 앱에 통합하고 [ID 토큰](https://developers.line.biz/en/docs/line-login/verify-id-token/#id-tokens)을 사용하면 LINE Profile+에 등록된 정보를 얻을 수 있습니다.

이 페이지에는 LINE Profile+ 사용에 대한 추가 정보만 포함되어 있습니다. LINE Login v2.1 통합에 대한 자세한 내용은 [LINE Login을 웹 앱에 통합하기](https://developers.line.biz/en/docs/line-login/integrate-line-login/)를 참조해 주십시오.

<!-- note start -->

**참고**

LINE Profile+는 LINE Login v2.0 이하 버전과 호환되지 않습니다.

<!-- note end -->

#### 1. 인증 URL의 스코프 지정 

인증 URL의 `scope` 파라미터에 전용 스코프를 지정합니다.

LINE Profile+로 가져올 수 있는 스코프에 대한 자세한 내용은 [LINE Profile+ 스코프](https://developers.line.biz/en/docs/partner-docs/line-profile-plus/#scope)를 참조해 주십시오.

쿼리 파라미터가 포함된 인증 URL의 예시는 다음과 같습니다.

```sh
https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1234567890&redirect_uri=https%3A%2F%2Fexample.com%2Fauth%3Fkey%3Dvalue&state=123abc&scope=openid%20profile%20real_name%20gender%20birthdate%20phone%20address&bot_prompt=normal&nonce=0987654asd
```

<!-- note start -->

**openid도 함께 지정해 주십시오**

LINE Profile+에 등록된 정보를 가져오려면 ID 토큰이 필요합니다. ID 토큰 발급 권한을 요청하기 위해 `openid`도 함께 지정해 주십시오.

<!-- note end -->

사용자가 인증 URL에 접속한 후의 동작에 대한 자세한 내용은 [인증 프로세스](https://developers.line.biz/en/docs/line-login/integrate-line-login/#authentication-process)를 참조해 주십시오.

#### 2. 액세스 토큰 발급 시 받은 ID 토큰을 검증하여 ID 토큰 페이로드 가져오기 

LINE Profile+에 등록된 정보는 [ID 토큰](https://developers.line.biz/en/docs/line-login/verify-id-token/#id-tokens)에 포함됩니다. ID 토큰은 [액세스 토큰 발급](https://developers.line.biz/en/docs/line-login/integrate-line-login/#get-access-token) 시 응답에 포함됩니다.

요청 예시입니다.

```sh
curl -v -X POST https://api.line.me/oauth2/v2.1/token \
-H 'Content-Type: application/x-www-form-urlencoded' \
-d 'grant_type=authorization_code' \
-d 'code=b5fd32eacc791df' \
--data-urlencode 'redirect_uri=https://example.com/auth?key=value' \
-d 'client_id=12345' \
-d 'client_secret=d6524edacc8742aeedf98f'
```

[액세스 토큰 발급](https://developers.line.biz/en/reference/line-login/#issue-access-token)으로 얻은 ID 토큰은 Base64 형식으로 인코딩되어 있습니다(예: `eyJhbGciOiJIUzI1NiJ9...`). [ID 토큰 검증](https://developers.line.biz/en/reference/line-login/#verify-id-token)을 실행하면 JSON 형식으로 디코딩된 ID 토큰 페이로드를 가져올 수 있습니다.

요청 예시입니다.

```sh
curl -v -X POST 'https://api.line.me/oauth2/v2.1/verify' \
 -d 'id_token=eyJraWQiOiIxNmUwNGQ0ZTU2NzgzYTc5MmRjYjQ2ODRkOD...' \
 -d 'client_id=1234567890'
```

#### 3. ID 토큰 페이로드에서 LINE Profile+ 정보 가져오기 

2단계에서 가져온 ID 토큰 페이로드의 LINE Profile+ 정보를 확인합니다.

LINE Profile+ 정보의 예시입니다.

```json
"given_name": "LINE",
"middle_name": "L",
"family_name": "Taro",
"gender": "male",
"birthdate": "1990-01-01",
"phone_number": "+81901111....",
"address": {
    "postal_code": "1028282",
    "region": "Tokyo",
    "locality": "Kioicho, Chiyoda-ku",
    "street_address": "1-3",
    "country": "JP"
}
```

ID 토큰에 포함되는 LINE Profile+ 정보에 대한 자세한 내용은 [ID 토큰에 포함된 LINE Profile+ 정보](https://developers.line.biz/en/docs/partner-docs/line-profile-plus/#id-token)를 참조해 주십시오.

## LINE Profile+ 스코프 

LINE Profile+를 통해 가져올 수 있는 정보의 스코프는 다음과 같습니다. 사용할 스코프는 미리 신청해야 합니다.

- `real_name`: 사용자가 등록한 "이름"을 가져올 권한
- `gender`: 사용자가 등록한 "성별"을 가져올 권한
- `birthdate`: 사용자가 등록한 "생년월일"을 가져올 권한
- `phone`: 사용자가 등록한 "전화번호"를 가져올 권한
- `address`: 사용자가 등록한 "주소"를 가져올 권한

<!-- note start -->

**phone 스코프를 요청할 때 동의 화면이 다시 표시됩니다**

사용자가 한 번 동의한 후에도 `phone` 스코프를 요청하면, 사용자가 마지막으로 동의한 후 일정 기간이 지났거나 전화번호가 변경된 경우 동의 화면이 다시 표시됩니다.

동의 화면이 다시 표시되는 그 밖의 조건에 대한 자세한 내용은 LINE Login 문서의 [동의 화면이 다시 표시되는 조건](https://developers.line.biz/en/docs/line-login/integrate-line-login/#conditions-for-consent-screen-to-be-redisplayed)을 참조해 주십시오.

<!-- note end -->

## ID 토큰에 포함된 LINE Profile+ 정보 

LIFF 앱, LINE MINI App 또는 LINE Login을 통해 얻은 ID 토큰의 페이로드에는 지정한 스코프에 해당하는 LINE Profile+ 정보가 포함됩니다.

#### 페이로드 

LINE Profile+를 사용하면 ID 토큰에 다음 속성이 추가됩니다.

| 속성 | 타입 | 설명 | 권한이 필요한 스코프 |
| --- | --- | --- | --- |
| `given_name` | String | 이름(first name) | `real_name` |
| `given_name_pronunciation` | String | 이름의 가나 표기 | `real_name` |
| `middle_name` | String | 중간 이름 | `real_name` |
| `family_name` | String | 성(last name) | `real_name` |
| `family_name_pronunciation` | String | 성의 가나 표기. 가타카나로 표기됩니다. | `real_name` |
| `gender` | String | "male", "female" 또는 사용자가 입력한 값 | `gender` |
| `birthdate` | String | 생년월일. 형식은 [RFC3339 프로토콜](https://www.rfc-editor.org/rfc/rfc3339.txt)을 따릅니다. | `birthdate` |
| `phone_number` | String | 전화번호. 형식은 [E.164](https://developers.line.biz/en/glossary/#e164)를 따릅니다. | `phone` |
| `address` | Object | [주소 객체](https://developers.line.biz/en/docs/partner-docs/line-profile-plus/#address-object) | `address` |

##### 주소 객체 

LINE Profile+에는 주소를 최대 10개까지 등록할 수 있습니다. ID 토큰에는 가장 최근에 업데이트되었거나 사용된 주소 하나만 포함됩니다.

| 필드 | 타입 | 설명 |
| --- | --- | --- |
| `postal_code` | String | 우편번호. 하이픈 없이 반각 숫자로 입력합니다. 선택 항목이므로 비어 있을 수 있습니다. |
| `region` | String | 주(state) 또는 도(province) |
| `locality` | String | 시(city) |
| `street_address` | String | "Street"과 "Other"에 입력된 값입니다. "Street"과 "Other"은 줄바꿈 코드(`/n`)로 구분됩니다. 선택 항목이므로 비어 있을 수 있습니다. |
| `country` | String | 국가 이름. ISO 3166-1 alpha-2 표기를 따릅니다. |

#### 페이로드 예시 

```json
{
  "iss": "https://access.line.me",
  "sub": "U272cada9c6f4c0c933b0713bc2f90f68",
  "aud": "1234567890",
  "exp": 1513142487,
  "iat": 1513138887,
  "name": "LINE taro",
  "picture": "https://profile.line-scdn.net/0h8pWWElvzZ19qLk3ywQYYCFZraTIdAGEXEhx9ak56MDxDHiUIVEEsPBspMG1EGSEPAk4uP01t0m5G",
  "given_name": "LINE",
  "middle_name": "L",
  "family_name": "Taro",
  "gender": "male",
  "birthdate": "1990-01-01",
  "phone_number": "+81901111....",
  "address": {
    "postal_code": "1028282",
    "region": "Tokyo",
    "locality": "Kioicho, Chiyoda-ku",
    "street_address": "1-3",
    "country": "JP"
  }
}
```
