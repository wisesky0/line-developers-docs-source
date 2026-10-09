# LINE MINI App API reference

## Service Messages 

<!-- tip start -->

**This feature can only be used for verified MINI Apps**

이 기능은 검증된 MINI App에서만 사용할 수 있습니다. 검증되지 않은 MINI App은 Developing 내부 채널에서 기능을 테스트할 수 있지만, Published 내부 채널에서는 사용할 수 없습니다.

<!-- tip end -->

Service Message API를 사용하면 서비스에서 LINE MINI App 사용자에게 서비스 메시지를 보낼 수 있습니다.

서비스 메시지를 보내려면 service notification token과 [template](https://developers.line.biz/en/docs/line-mini-app/develop/service-messages/#service-message-templates)이 필요합니다.

- [Issue a service notification token](https://developers.line.biz/en/reference/line-mini-app/#issue-notification-token)
- [Send a service message](https://developers.line.biz/en/reference/line-mini-app/#send-service-message)

### Issuing a service notification token 

Service notification token을 발급합니다. Service notification token은 연결된 사용자에게 서비스 메시지를 보내는 데 사용됩니다.

Service notification token의 특징은 다음과 같습니다.

- Service notification token은 발급 후 1년(31,536,000초) 뒤에 만료됩니다. 유효한 동안에는 최대 5개의 서비스 메시지를 보낼 수 있습니다.
- Service notification token을 사용할 때마다 만료되었거나 남은 메시지 횟수가 없는 경우를 제외하고 토큰 값이 갱신됩니다. 사용자에게 연속해서 서비스 메시지를 보낼 계획이라면 갱신된 service notification token을 보관하십시오.

<!-- warning start -->

**Don't issue more than one service notification token with a single access token**

[`liff.getAccessToken()`](https://developers.line.biz/en/reference/liff/#get-access-token)으로 얻은 access token(LIFF access token)을 재사용하여 여러 개의 service notification token을 발급할 수 없습니다.

LIFF access token 하나당 service notification token은 하나만 발급할 수 있습니다.

<!-- warning end -->

<!-- note start -->

**Note**

각 service notification token은 한 명의 사용자와 연결됩니다. 한 사용자와 연결된 service notification token으로 다른 사용자에게 서비스 메시지를 보낼 수 없습니다.

<!-- note end -->

_Example request_

<!-- tab start `shell` -->

```sh
curl -X POST https://api.line.me/message/v3/notifier/token \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer W1TeHCgfH2Liwa...' \
-d '{
    "liffAccessToken": "eyJhbGciOiJIUzI1NiJ9..."
}'
```

<!-- tab end -->

#### HTTP request 

`POST https://api.line.me/message/v3/notifier/token`

#### Request headers 

<!-- parameter start (props: required) -->

Content-Type

application/json

<!-- parameter end -->
<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`\
자세한 내용은 LINE Platform 기본 문서의 [Channel access token](https://developers.line.biz/en/docs/basics/channel-access-token/)을 참조하십시오.

<!-- parameter end -->

<!-- note start -->

**Use of stateless channel access tokens is recommended**

[Long-lived channel access tokens](https://developers.line.biz/en/docs/basics/channel-access-token/#long-lived-channel-access-token)와 [channel access token with a user-specified expiration (Channel Access Token v2.1)](https://developers.line.biz/en/docs/basics/channel-access-token/#user-specified-expiration)은 LINE MINI App 채널에 사용할 수 없습니다.

LINE MINI App을 개발할 때는 [stateless channel access tokens](https://developers.line.biz/en/docs/basics/channel-access-token/#stateless-channel-access-token) 또는 [short-lived channel access tokens](https://developers.line.biz/en/docs/basics/channel-access-token/#short-lived-channel-access-token)을 사용할 수 있습니다. 이 둘 중에서는 stateless channel access token을 권장합니다. Stateless channel access token은 발급 횟수에 제한이 없으므로 앱에서 토큰의 수명 주기를 관리할 필요가 없습니다.

<!-- note end -->

#### Request body 

<!-- parameter start (props: required) -->

liffAccessToken

String

[`liff.getAccessToken()`](https://developers.line.biz/en/reference/liff/#get-access-token)으로 얻은 사용자 access token(LIFF access token)입니다.

<!-- parameter end -->

#### Response 

`200` 상태 코드와 다음 정보를 담은 JSON 객체가 반환됩니다.

<!-- parameter start -->

notificationToken

String

Service notification token

<!-- parameter end -->
<!-- parameter start -->

expiresIn

Number

Service notification token이 만료되기까지 남은 시간(초)입니다. Service notification token은 발급 후 1년(31,536,000초) 뒤에 만료됩니다.

<!-- parameter end -->
<!-- parameter start -->

remainingCount

Number

발급된 service notification token으로 서비스 메시지를 보낼 수 있는 횟수입니다.

<!-- parameter end -->
<!-- parameter start -->

sessionId

String

세션 ID입니다. 자세한 내용은 [Sending service messages](https://developers.line.biz/en/docs/line-mini-app/develop/service-messages/)를 참조하십시오.

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

```json
{
  "notificationToken": "34c11a03-b726-49e3-8ce0-949387a9..",
  "expiresIn": 31536000,
  "remainingCount": 5,
  "sessionId": "xD06...."
}
```

<!-- tab end -->

#### Error response 

다음 상태 코드와 오류 메시지 중 하나가 반환됩니다.

| Status code | Description |
| --- | --- |
| 400 Bad request | 이 상태 코드는 다음 중 하나를 의미합니다. <ul><li>요청 본문에 문제가 있습니다.</li><li>`liffAccessToken` 속성에 지정한 LIFF access token이 짧은 시간 안에 여러 번 service notification token 발급 요청에 사용되었습니다.</li></ul> |
| 401 Unauthorized | 이 상태 코드는 다음 중 하나 또는 둘 모두를 의미합니다. <ul><li>유효한 channel access token이 지정되지 않았습니다.</li><li>유효한 LIFF access token이 지정되지 않았습니다.</li><ul><li>[사용자가 LIFF 앱을 닫으면](https://developers.line.biz/en/docs/liff/developing-liff-apps/#behavior-when-closing-liff-app), 만료되지 않았더라도 LIFF access token이 취소됩니다.</li></ul></ul> |
| 403 Forbidden | 이 채널은 서비스 메시지를 발급할 권한이 없습니다. |
| 500 Internal Server Error | 내부 서버 오류 |

_Example of an empty LIFF access token_

<!-- tab start `json` -->

```json
{
  "message": "[liffAccessToken] must not be blank"
}
```

<!-- tab end -->

_Example of an expired access token_

<!-- tab start `json` -->

```json
{
  "message": "The access token expired"
}
```

<!-- tab end -->

_Example of an invalidated access token (e.g., due to the user closing the LIFF app)_

<!-- tab start `json` -->

```json
{
  "message": "The access token revoked"
}
```

<!-- tab end -->

### Sending service messages 

Service notification token에 지정된 사용자에게 서비스 메시지를 보냅니다.

서비스 메시지를 보내면, 토큰이 만료되었거나 남은 메시지 횟수가 없는 경우를 제외하고 토큰 값이 갱신됩니다. 사용자에게 연속해서 서비스 메시지를 보낼 계획이라면 갱신된 service notification token을 보관하십시오.

_Example request_

<!-- tab start `shell` -->

```sh
curl -X POST https://api.line.me/message/v3/notifier/send?target=service \
-H 'Authorization: Bearer W1TeHCgfH2Liwa...' \
-H 'Content-Type: application/json' \
-d '{
    "templateName": "thankyou_msg_en",
    "params": {
        "date": "2020-04-23",
        "username": "Brown & Cony"
    },
    "notificationToken": "34c11a03-b726-49e3-8ce0-949387a9.."
}'
```

<!-- tab end -->

#### HTTP request 

`POST https://api.line.me/message/v3/notifier/send`

#### Request headers 

<!-- parameter start (props: required) -->

Content-Type

application/json

<!-- parameter end -->
<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`\
자세한 내용은 LINE Platform 기본 문서의 [Channel access token](https://developers.line.biz/en/docs/basics/channel-access-token/)을 참조하십시오.

<!-- parameter end -->

<!-- note start -->

**Use of stateless channel access tokens is recommended**

[Long-lived channel access tokens](https://developers.line.biz/en/docs/basics/channel-access-token/#long-lived-channel-access-token)와 [channel access token with a user-specified expiration (Channel Access Token v2.1)](https://developers.line.biz/en/docs/basics/channel-access-token/#user-specified-expiration)은 LINE MINI App 채널에 사용할 수 없습니다.

LINE MINI App을 개발할 때는 [stateless channel access tokens](https://developers.line.biz/en/docs/basics/channel-access-token/#stateless-channel-access-token) 또는 [short-lived channel access tokens](https://developers.line.biz/en/docs/basics/channel-access-token/#short-lived-channel-access-token)을 사용할 수 있습니다. 이 둘 중에서는 stateless channel access token을 권장합니다. Stateless channel access token은 발급 횟수에 제한이 없으므로 앱에서 토큰의 수명 주기를 관리할 필요가 없습니다.

<!-- note end -->

#### Query parameters 

<!-- parameter start (props: required) -->

target

`service`

<!-- parameter end -->

#### Request body 

<!-- parameter start (props: required) -->

templateName

String

추가되어 서비스 메시지에 사용될 템플릿의 이름입니다. LINE Developers Console에서 템플릿 이름을 확인할 수 있습니다. 자세한 내용은 [Types of service messages that can be sent](https://developers.line.biz/en/docs/line-mini-app/develop/service-messages/#types-of-service-messages-that-can-be-sent)를 참조하십시오.\
BCP 47 언어 태그 접미사와 함께 사용합니다.\
형식: `{template name}_{BCP 47 language tag}`\
최대 문자 수: 30

<!-- note start -->

**Note**

서비스 메시지가 지원하는 언어와 언어 태그는 다음과 같습니다.

- 일본어: `ja`
- 영어: `en`
- 중국어(번체): `zh-TW`
- 태국어: `th`
- 인도네시아어: `id`
- 한국어: `ko`

<!-- note end -->

<!-- parameter end -->
<!-- parameter start (props: required) -->

params

object

각 템플릿 변수와 값의 쌍을 지정하는 JSON 객체입니다. \
템플릿에 템플릿 변수가 없는 경우 빈 JSON 객체(`{ }`)를 지정하십시오. \
템플릿 변수는 템플릿마다 정의됩니다. 템플릿 변수가 필수 요소에 포함되어 있다면 반드시 템플릿 변수와 값의 쌍을 지정하십시오. \
자세한 내용은 [Adding service message templates to the channel](https://developers.line.biz/en/docs/line-mini-app/develop/service-messages/#service-message-templates)을 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: required) -->

notificationToken

String

Service notification token

<!-- parameter end -->

#### Response 

`200` 상태 코드와 다음 정보를 담은 JSON 객체가 반환됩니다.

<!-- parameter start -->

notificationToken

String

갱신된 service notification token입니다. 연속해서 서비스 메시지를 보낼 때 이 service notification token을 사용하십시오.

<!-- parameter end -->
<!-- parameter start -->

expiresIn

Number

갱신된 service notification token이 만료되기까지 남은 시간(초)입니다.

<!-- parameter end -->
<!-- parameter start -->

remainingCount

Number

갱신된 service notification token으로 연속해서 서비스 메시지를 보낼 수 있는 횟수입니다.

<!-- parameter end -->
<!-- parameter start -->

sessionId

String

세션 ID입니다. 자세한 내용은 [Sending service messages](https://developers.line.biz/en/docs/line-mini-app/develop/service-messages/)를 참조하십시오.

<!-- parameter end -->

<!-- note start -->

**Note**

`expiresIn`과 `remainingCount`의 값이 `0`이면 서비스 메시지는 전송되었지만 service notification token은 갱신되지 못했다는 의미입니다.

<!-- note end -->

_Example response_

<!-- tab start `json` -->

```json
// Request was successful,
// renewed service notification
// token issued
{
  "notificationToken": "c9884874-bf6a-4241-8999-2767241c...",
  "expiresIn": 31535906,
  "remainingCount": 3,
  "sessionId": "xD06...."
}

// Request was successful,
// the service message
// was sent, but the LINE Platform
// cannot renew the token
{
  "expiresIn": 0,
  "remainingCount": 0
}
```

<!-- tab end -->

#### Error response 

다음 상태 코드와 오류 메시지 중 하나가 반환됩니다.

| Status code | Description |
| --- | --- |
| 400 Bad request | 이 상태 코드는 다음 중 하나를 의미합니다. <ul><li>요청 본문에 문제가 있습니다. </li><li>서비스 메시지의 대상 수신자가 존재하지 않습니다. </li></ul> |
| 401 Unauthorized | 이 상태 코드는 다음 중 하나 또는 둘 모두를 의미합니다. <ul><li>유효한 channel access token이 지정되지 않았습니다.</li><li>유효한 service notification token이 지정되지 않았습니다. </li></ul> |
| 403 Forbidden | 이 상태 코드는 다음 중 하나를 의미합니다. <ul><li>이 채널은 서비스 메시지를 보낼 권한이 없습니다. </li><li>지정한 템플릿을 찾을 수 없습니다.</li></ul> |

_Example error response_

<!-- tab start `json` -->

```json
{
  "message": "Invalid notifier token"
}
```

<!-- tab end -->

## Common Profile Quick-fill 

<!-- tip start -->

**Available only in verified MINI Apps**

Common Profile Quick-fill을 사용하려면 LINE MINI App이 검증되어 있어야 하며, Quick-fill 사용을 신청해야 합니다. 자세한 내용은 [Steps for using Quick-fill](https://developers.line.biz/en/docs/line-mini-app/quick-fill/overview/#process)을 참조하십시오.

<!-- tip end -->

Quick-fill은 LINE MINI App에서 **Auto-fill** 버튼을 탭하면 필요한 프로필 정보를 자동으로 입력해 주는 기능입니다. LINE MINI App에서 사용자가 Account Center에 설정한 Common Profile 정보를 간편하게 사용할 수 있습니다. 자세한 내용은 [Overview of Common Profile Quick-fill](https://developers.line.biz/en/docs/line-mini-app/quick-fill/overview/)을 참조하십시오.

### liff.$commonProfile.get() 

사용자가 Account Center에 설정한 Common Profile 정보를 가져옵니다.

`liff.$commonProfile.get()` 메서드를 실행하면 사용자의 프로필을 확인하는 모달이 나타납니다. 표시된 모달에서 프로필을 확인한 후 사용자가 **Auto-fill**을 탭하면 프로필 정보가 자동으로 입력됩니다.

모달 표시 예:

![](https://developers.line.biz/media/line-mini-app/quick-fill/quick-fill-modal-screen.webp)

_Example_

<!-- tab start `javascript` -->

```javascript
const { data, error } = await liff.$commonProfile.get(
  ["family-name", "given-name", "email", "tel", "postal-code"],
  {
    formatOptions: {
      givenName: {
        excludeEmojis: false,
      },
      tel: {
        excludeNonJp: false,
      },
      postalCode: {
        digitsOnly: false,
      },
    },
  },
);
console.log(data);
console.log(error);
```

<!-- tab end -->

#### Syntax 

```javascript
liff.$commonProfile.get(scopes, options);
```

#### Arguments 

<!-- parameter start (props: required) -->

scopes

Array of strings

가져올 Common Profile의 scope를 지정합니다.

`scopes`에 지정할 수 있는 값은 [The `scopes` parameters that can be specified and its return value](https://developers.line.biz/en/docs/line-mini-app/quick-fill/overview/#common-profile-scope)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

options

Object

Common Profile 정보를 가져오기 위한 옵션입니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

options.formatOptions

Object

정보 형식과 관련된 옵션입니다. `scopes` 속성에 지정한 각 scope에 대해 [`formatOptions` object](https://developers.line.biz/en/reference/line-mini-app/#get-common-profile-format-options)를 지정하십시오.

옵션을 설정할 scope를 카멜 케이스 형식으로 키에 지정하십시오. 예를 들어 scope가 `given-name`이면 키는 `givenName`입니다.

<!-- parameter end -->

#### `formatOptions` object 

<!-- parameter start (props: optional) -->

excludeEmojis

Boolean

문자열에서 이모지를 제거할지 여부입니다. 기본값은 `true`입니다. 다음 scope에만 지정할 수 있습니다.

- givenName
- familyName

<!-- parameter end -->
<!-- parameter start (props: optional) -->

excludeNonJp

Boolean

12자리 이상인 전화번호를 제외할지 여부입니다. 기본값은 `true`입니다. `true`이면 전화번호가 12자리 이상일 때 빈 문자열과 오류 정보가 반환됩니다. 다음 scope에만 지정할 수 있습니다.

- tel

<!-- parameter end -->
<!-- parameter start (props: optional) -->

digitsOnly

Boolean

숫자가 아닌 문자를 포함하는 우편번호를 제외할지 여부입니다. 기본값은 `true`입니다. `true`이면 우편번호에 숫자 이외의 문자가 포함되어 있을 때 빈 문자열과 오류 정보가 반환됩니다. 다음 scope에만 지정할 수 있습니다.

- postalCode

<!-- parameter end -->

_Example_

<!-- tab start `javascript` -->

```javascript
{
  givenName: {
    excludeEmojis: false,
  },
  tel: {
    excludeNonJp: false,
  },
  postalCode: {
    digitsOnly: false,
  },
}
```

<!-- tab end -->

#### Return value 

`{ data: Partial<CommonProfile>, error: Partial<CommonProfileError>}` 타입의 `Promise` 객체를 반환합니다.

`Promise`가 resolve되면 사용자의 Common Profile 정보를 담은 `Partial<CommonProfile>` 타입 객체는 `data` 속성으로, 오류 정보를 담은 `Partial<CommonProfileError>` 타입 객체는 `error` 속성으로 전달됩니다.

다음과 같은 경우 `data`의 속성 값이 `undefined` 또는 `null`이 됩니다.

- 속성 값이 `undefined`가 되는 경우
  - 대상 항목이 `scopes` 파라미터에 지정되지 않은 경우
  - 대상 항목이 `scopes` 파라미터에 지정되었지만 사용자가 해당 항목의 권한을 승인하지 않은 경우
- 속성 값이 `null`이 되는 경우
  - 사용자가 Common Profile에서 대상 항목의 값을 설정하지 않은 경우
  - Common Profile에서 대상 항목을 가져오는 중 오류가 발생한 경우

지정한 `scopes`에 따라 가져올 수 있는 속성 값에 대한 정보는 [The `scopes` parameters that can be specified and its return value](https://developers.line.biz/en/docs/line-mini-app/quick-fill/overview/#common-profile-scope)를 참조하십시오.

_Example of an object of type `Partial<CommonProfile>`_

<!-- tab start `json` -->

```javascript
{
  "family-name": "Yamada",
  "given-name": "Taro",
  "email": "sample@example.com",
  "tel": "09001234567",
  "postal-code": "1020094"
}
```

<!-- tab end -->

_Example of an object of type `Partial<CommonProfileError>`_

<!-- tab start `json` -->

```javascript
{
  "tel": ["Phone number has 12 or more digits"],
  "postal-code": ["Postal code contains non-numeric characters"]
}
```

<!-- tab end -->

#### Error response 

`Promise`가 reject되면 [`LiffError`](https://developers.line.biz/en/reference/liff/#liff-errors)가 전달됩니다.

_Example of calling the API without installing the plugin correctly_

<!-- tab start `javascript` -->

```javascript
new Error(
  "LiffCommonProfilePlugin isn't installed properly. Did you call liff.use(new LiffCommonProfilePlugin()) before using it?"
);
```

<!-- tab end -->

_Example of API being called in a browser other than LIFF browser_

<!-- tab start `javascript` -->

```javascript
new Error("liff.$commonProfile API is available only in LIFF browser.");
```

<!-- tab end -->

### liff.$commonProfile.getDummy() 

Common Profile의 더미 데이터를 가져옵니다. 사용 가능한 더미 데이터는 10가지 유형이며, `caseId`를 사용하여 가져올 더미 데이터를 지정할 수 있습니다.

`liff.$commonProfile.getDummy()` 메서드를 실행하면 더미 프로필을 확인하는 모달이 나타납니다. 사용자가 **Auto-fill**을 탭하면 Common Profile의 더미 데이터를 가져올 수 있습니다.

모달 표시 예:

![](https://developers.line.biz/media/line-mini-app/quick-fill/quick-fill-dummy-modal-screen.webp)

_Example_

<!-- tab start `javascript` -->

```javascript
const { data, error } = await liff.$commonProfile.getDummy(
  ["family-name", "given-name", "email", "tel", "postal-code"],
  {
    formatOptions: {
      givenName: {
        excludeEmojis: false,
      },
      tel: {
        excludeNonJp: false,
      },
      postalCode: {
        digitsOnly: false,
      },
    },
  },
  1,
);
console.log(data);
console.log(error);
```

<!-- tab end -->

#### Syntax 

```javascript
liff.$commonProfile.getDummy(scopes, options, caseId);
```

#### Arguments 

<!-- parameter start (props: required) -->

scopes

Array of strings

가져올 Common Profile의 scope를 지정합니다.

`scopes`에 지정할 수 있는 값은 [The `scopes` parameters that can be specified and its return value](https://developers.line.biz/en/docs/line-mini-app/quick-fill/overview/#common-profile-scope)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

options

Object

Common Profile 정보를 가져오기 위한 옵션입니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

options.formatOptions

Object

정보 형식과 관련된 옵션입니다. `scopes` 속성에 지정한 각 scope에 대해 [`formatOptions` object](https://developers.line.biz/en/reference/line-mini-app/#get-common-profile-format-options)를 지정하십시오.

옵션을 설정할 scope를 카멜 케이스 형식으로 키에 지정하십시오. 예를 들어 scope가 `given-name`이면 키는 `givenName`입니다.

<!-- parameter end -->
<!-- parameter start (props: required) -->

caseId

number

가져올 더미 데이터의 ID를 지정합니다. ID `1`부터 `10`까지의 더미 데이터를 사용할 수 있습니다.

각 `caseId`의 더미 데이터에 대한 정보는 [Dummy data for Common Profile that can be obtained](https://developers.line.biz/en/docs/line-mini-app/quick-fill/overview/#get-dummy-common-profile)를 참조하십시오.

<!-- parameter end -->

#### Return value 

`{ data: Partial<CommonProfile>, error: Partial<CommonProfileError>}` 타입의 `Promise` 객체를 반환합니다.

`Promise`가 resolve되면 Common Profile의 더미 데이터를 담은 `Partial<CommonProfile>` 타입 객체는 `data` 속성으로, 오류 정보를 담은 `Partial<CommonProfileError>` 타입 객체는 `error` 속성으로 전달됩니다.

다음과 같은 경우 `data`의 속성 값이 `undefined` 또는 `null`이 됩니다.

- 속성 값이 `undefined`가 되는 경우
  - 대상 항목이 `scopes` 파라미터에 지정되지 않은 경우
- 속성 값이 `null`이 되는 경우
  - 더미 데이터에 대상 항목의 값이 없는 경우

지정한 ID로 가져올 수 있는 더미 데이터에 대한 정보는 [Dummy data for Common Profile that can be obtained](https://developers.line.biz/en/docs/line-mini-app/quick-fill/overview/#get-dummy-common-profile)를 참조하십시오.

_Example of an object of type `Partial<CommonProfile>`_

<!-- tab start `json` -->

```javascript
{
  "family-name": "見本田",
  "given-name": "見本夫",
  "family-name-kana": "ダミータ",
  "given-name-kana": "ダミーオ",
  "sex-enum": 0,
  "bday-day": 12,
  "bday-month": 3,
  "bday-year": 1998,
  "tel": "09001234567",
  "email": "dummy_39@yahoo.co.jp",
  "postal-code": "1020094",
  "address-level1": "東京都",
  "address-level2": "千代田区",
  "address-level3": "紀尾井町1-2",
  "address-level4": "東京ガーデンテラス紀尾井町"
}
```

<!-- tab end -->

_Example of an object of type `Partial<CommonProfileError>`_

<!-- tab start `json` -->

```javascript
{
  "tel": ["Phone number has 12 or more digits"],
  "postal-code": ["Postal code contains non-numeric characters"]
}
```

<!-- tab end -->

##### Error response 

`Promise`가 reject되면 [`LiffError`](https://developers.line.biz/en/reference/liff/#liff-errors)가 전달됩니다.

_Example of calling the API without installing the plugin correctly_

<!-- tab start `javascript` -->

```javascript
new Error(
  "LiffCommonProfilePlugin isn't installed properly. Did you call liff.use(new LiffCommonProfilePlugin()) before using it?"
);
```

<!-- tab end -->

_Example of API being called in a browser other than LIFF browser_

<!-- tab start `javascript` -->

```javascript
new Error("liff.$commonProfile API is available only in LIFF browser.");
```

<!-- tab end -->

### liff.$commonProfile.fill() 

가져온 Common Profile 정보로 양식을 자동으로 채웁니다. 각 프로필 정보를 양식에 연결하려면 `data-liff-autocomplete` 속성을 사용합니다.

<!-- tip start -->

**Automatically filling that doesn't match the scope**

`liff.$commonProfile.fill()`을 사용한 자동 입력은 양식의 `data-liff-autocomplete` 속성을 기준으로 수행됩니다. 이때 양식의 `data-liff-autocomplete` 속성에 지정된 값은 가져온 프로필 정보의 scope(`family-name`, `tel`, `bday-year` 등)와 일치해야 합니다.

예를 들어 생년(`bday-year`), 생월(`bday-month`), 생일(`bday-day`) 정보를 가져온 후 `20110623`과 같은 형식으로 가공하여 양식을 자동으로 채우려면, `liff.$commonProfile.fill()` 대신 `document.getElementById().value` 또는 `document.querySelector().value`를 사용할 수 있습니다.

<!-- tip end -->

_Example of automatically filling the family name, phone number, and gender as they were obtained_

<!-- tab start `javascript` -->

```javascript
// HTML
<input type="text" data-liff-autocomplete="family-name" />
<input type="tel" data-liff-autocomplete="tel" />
<select data-liff-autocomplete="sex-enum">
  <option value="0">男性</option>
  <option value="1">女性</option>
  <option value="2">回答なし</option>
  <option value="3">その他</option>
</select>

// JavaScript
const { data, error } = await liff.$commonProfile.get([
  "family-name",
  "tel",
  "sex-enum",
]);

liff.$commonProfile.fill(data);
```

<!-- tab end -->

_Example of automatically filling some of the common profile information that has been obtained in a slightly different format_

<!-- tab start `javascript` -->

```javascript
// HTML
<input type="text" data-liff-autocomplete="bday-year" />
<input type="text" data-liff-autocomplete="bday-month" />
<input type="text" data-liff-autocomplete="bday-day" />

// JavaScript
const { data, error } = await liff.$commonProfile.get([
  "bday-year",
  "bday-month",
  "bday-day",
]);

const year = data["bday-year"];
const month = data["bday-month"];
const day = data["bday-day"];

// If the month or day is one digit, pad with 0s to
const formattedMonth = month.toString().padStart(2, '0');
const formattedDay = day.toString().padStart(2, '0');

// Automatically fills the value after processing
liff.$commonProfile.fill({
  "bday-year": year,
  "bday-month": formattedMonth,
  "bday-day": formattedDay,
});
```

<!-- tab end -->

#### Syntax 

```javascript
liff.$commonProfile.fill(profile);
```

#### Arguments 

<!-- parameter start (props: required) -->

profile

Partial\<CommonProfile\>

양식에 자동으로 입력할 프로필 정보를 `Partial<CommonProfile>` 타입으로 지정합니다.

지정할 수 있는 `scopes`에 대한 정보는 [The `scopes` parameters that can be specified and its return value](https://developers.line.biz/en/docs/line-mini-app/quick-fill/overview/#common-profile-scope)를 참조하십시오.

<!-- parameter end -->

#### Return value 

없음

## In-app purchase (Client) 

<!-- tip start -->

**Application required to use the in-app purchase feature**

인앱 결제 기능을 사용하려면 사용 신청을 해야 합니다. 자세한 내용은 LINE MINI App 문서의 [In-app purchase overview](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/overview/)를 참조하십시오.

<!-- tip end -->

### liff.iap.getPlatformProducts() 

인앱 결제로 구매할 수 있는 상품 목록을 가져옵니다.

_Example_

<!-- tab start `javascript` -->

```javascript
const productIds = ["iap_ln_002", "iap_ln_003"];
liff.iap
  .getPlatformProducts({ productIds })
  .then((products) => {
    console.log(products);
  })
  .catch((err) => {
    console.error(err);
  });
```

<!-- tab end -->

#### Syntax 

```javascript
liff.iap.getPlatformProducts({ productIds });
```

#### Arguments 

<!-- parameter start (props: required) -->

productIds

Array of strings

가져올 상품의 [product IDs](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/iap-product-id/) 배열

<!-- parameter end -->

#### Return value 

`Promise` 객체가 반환됩니다. `Promise` 객체가 resolve되면 상품 ID를 키로 하고 다음 속성을 가진 객체가 전달됩니다.

<!-- parameter start -->

currency

String

ISO 4217 형식의 통화 코드입니다. 사용자가 이용하는 앱 스토어의 지역에 맞게 현지화된 통화로 반환됩니다.

<!-- parameter end -->
<!-- parameter start -->

price

Number

상품의 가격입니다. 사용자가 이용하는 앱 스토어의 지역에 맞게 현지화된 통화로 반환됩니다.

<!-- parameter end -->
<!-- parameter start -->

productName

String

상품의 이름입니다. 사용자가 이용하는 앱 스토어의 지역에 맞게 현지화된 표현으로 반환됩니다.

<!-- parameter end -->

_Example return value_

<!-- tab start `json` -->

```json
{
  "iap_ln_002": {
    "currency": "JPY",
    "price": 100,
    "productName": "LINE Purchase 100"
  }
}
```

<!-- tab end -->

#### Error response 

`Promise`가 reject되면 [`LiffError`](https://developers.line.biz/en/reference/liff/#liff-error-object)가 전달됩니다.

발생할 수 있는 오류는 다음과 같습니다.

| Error message | Description |
| --- | --- |
| Need access_token for api call, Please login first | 사용자가 로그인하지 않았습니다. |
| In-App Purchase is not allowed in external browser | 외부 브라우저에서 메서드가 실행되었습니다. |
| In-App Purchase is not allowed in this LIFF app | 사용자가 실행한 LINE MINI App이 인앱 결제를 지원하지 않습니다. |

### liff.iap.requestConsentAgreement() 

[Terms of Use: LINE In-App Purchase System](https://terms.line.me/line_iap_tou_1?lang=en)에 대한 사용자 동의를 요청합니다.

사용자가 "Terms of Use: LINE In-App Purchase System"에 아직 동의하지 않았거나 새로운 동의가 필요한 경우 동의 화면이 표시됩니다.

<!-- tip start -->

**Always check the latest consent status**

[Terms of Use: LINE In-App Purchase System](https://terms.line.me/line_iap_tou_1?lang=en)이 업데이트되면 다시 동의해야 합니다. 인앱 결제를 시작하기 전에 반드시 이 메서드를 호출하여 최신 동의 상태를 확인하십시오.

<!-- tip end -->

#### Syntax 

```javascript
await liff.iap.requestConsentAgreement();
```

#### Arguments 

없음

#### Return value 

`Promise` 객체가 반환됩니다.

- 사용자가 동의하면 resolve됩니다.
- 사용자가 동의하지 않거나 네트워크 문제, 사용자 기기의 문제, LINE Platform의 내부 오류로 작업이 실패하면 오류 객체와 함께 reject됩니다.

#### Error response 

`Promise`가 reject되면 [`LiffError`](https://developers.line.biz/en/reference/liff/#liff-error-object)가 전달됩니다.

발생할 수 있는 오류는 다음과 같습니다.

| Error message | Description |
| --- | --- |
| The user did not agree to the terms. | 사용자가 [Terms of Use: LINE In-App Purchase System](https://terms.line.me/line_iap_tou_1?lang=en)에 동의하지 않았습니다. |
| Need access_token for api call, Please login first | 사용자가 로그인하지 않았습니다. |
| In-App Purchase is not allowed in external browser | 외부 브라우저에서 메서드가 실행되었습니다. |
| In-App Purchase is not allowed in this LIFF app | 사용자가 실행한 LINE MINI App이 인앱 결제를 지원하지 않습니다. |

_Error response example_

<!-- tab start `json` -->

```json
{
  "code": "TERMS_AGREEMENT_ERROR",
  "message": "The user did not agree to the terms."
}
```

<!-- tab end -->

### liff.iap.createPayment() 

앱 스토어(App Store, Google Play) 결제 확인 화면을 실행하고 구매 거래를 시작합니다.

#### Syntax 

```javascript
liff.iap.createPayment({ productId, orderId });
```

#### Arguments 

<!-- parameter start (props: required) -->

productId

String

미리 정의된 [product ID](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/iap-product-id/)

<!-- parameter end -->

<!-- parameter start (props: required) -->

orderId

String

["Reserve purchase"](https://developers.line.biz/en/reference/line-mini-app/#reserve-purchase) endpoint에서 얻은 주문 ID

<!-- parameter end -->

#### Return value 

`Promise<void>` 객체가 반환됩니다.

- 구매가 성공적으로 완료되면 resolve됩니다.
- 구매가 취소되거나 네트워크 문제, 사용자 기기의 문제, LINE Platform의 내부 오류로 작업이 실패하면 오류 객체와 함께 reject됩니다.

#### Error response 

`Promise`가 reject되면 [`LiffError`](https://developers.line.biz/en/reference/liff/#liff-error-object)가 전달됩니다.

발생할 수 있는 오류는 다음과 같습니다.

| Error message | Description |
| --- | --- |
| Need access_token for api call, Please login first | 사용자가 로그인하지 않았습니다. |
| In-App Purchase is not allowed in external browser | 외부 브라우저에서 메서드가 실행되었습니다. |
| In-App Purchase is not allowed in this LIFF app | 사용자가 실행한 LINE MINI App이 인앱 결제를 지원하지 않습니다. |

## In-app purchase (Server) 

<!-- tip start -->

**Application required to use the in-app purchase feature**

인앱 결제 기능을 사용하려면 사용 신청을 해야 합니다. 자세한 내용은 LINE MINI App 문서의 [In-app purchase overview](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/overview/)를 참조하십시오.

<!-- tip end -->

### Response headers 

인앱 결제 응답에는 다음 HTTP 헤더가 포함됩니다. 향후 LY Corporation에 문의할 때 참조할 수 있도록 로그에 저장하십시오.

| Response header   | Description                                        |
| ----------------- | -------------------------------------------------- |
| x-line-request-id | 요청 ID입니다. 요청마다 발급되는 ID입니다. |

### Error response 

HTTP 상태 코드가 4xx 또는 5xx인 경우 다음 JSON 데이터를 포함한 응답 본문이 반환됩니다.

<!-- parameter start (props: required) -->

errorCode

String

오류 코드

<!-- parameter end -->
<!-- parameter start (props: required) -->

message

String

오류 메시지

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

details

array

오류 세부 정보

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

details\[].message

String

상세 메시지

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

details\[].property

String

오류가 발생한 위치

<!-- parameter end -->

_Error response example_

HTTP 상태 코드가 4xx인 경우

<!-- tab start `json` -->

```json
{
  "errorCode": "VALIDATION_ERROR",
  "message": "Request validation failed.",
  "details": [
    {
      "message": "'clientOs' must be 'android' or 'ios'. Actually received: 'INVALID'",
      "property": "clientOs"
    }
  ]
}
```

<!-- tab end -->

HTTP 상태 코드가 5xx인 경우

<!-- tab start `json` -->

```json
{
  "errorCode": "INTERNAL_SERVER_ERROR",
  "message": "An internal server error occurred."
}
```

<!-- tab end -->

### Reserve purchase 

앱 스토어 결제를 시작하기 전에 구매를 예약합니다.

[응답](https://developers.line.biz/en/reference/line-mini-app/#reserve-purchase-response)에 포함된 주문 ID(`orderId`)는 [구매 완료 이벤트](https://developers.line.biz/en/reference/line-mini-app/#purchase-complete-event)에도 포함됩니다. 주문 ID는 LY Corporation에 문의하거나 조사할 때 필요하므로 반드시 저장하십시오.

또한 예약이 성공했다고 해서 구매가 완료된다는 것을 보장하지는 않으므로, 아이템은 구매 완료 이벤트를 기준으로 지급하십시오.

_Request example_

<!-- tab start `shell` -->

```sh
curl -X POST https://api.line.me/iap/v1/product/reserve \
-H "Authorization: Bearer {UserAccessToken}" \
-H "Content-Type: application/json" \
-d '{
"clientIp": "192.168.1.1",
"clientOs": "android",
"productId": "iap_ln_002",
"shopProductName": "Premium Package"
}'

```

<!-- tab end -->

#### HTTP request 

`POST https://api.line.me/iap/v1/product/reserve`

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{user access token}`

현재 사용자의 access token입니다. [`liff.getAccessToken()`](https://developers.line.biz/en/reference/liff/#get-access-token) 메서드로 얻을 수 있습니다.

<!-- parameter end -->
<!-- parameter start (props: required) -->

Content-Type

application/json

<!-- parameter end -->

#### Request body 

<!-- parameter start (props: required) -->

clientIp

String

서버에서 얻은 사용자 기기의 IP 주소입니다. IPv4 또는 IPv6 형식으로 지정하십시오.

<!-- parameter end -->
<!-- parameter start (props: required) -->

clientOs

String

[`liff.getOS()`](https://developers.line.biz/en/reference/liff/#get-os) 메서드에서 얻은 값입니다. `ios` 또는 `android`입니다.

<!-- parameter end -->
<!-- parameter start (props: required) -->

productId

String

구매할 아이템의 [product ID](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/iap-product-id/)입니다.

<!-- parameter end -->
<!-- parameter start (props: required) -->

shopProductName

String

구매 내역에 표시되는 아이템 이름입니다.

이모지와 기호는 사용할 수 없습니다. 사용자가 구매한 아이템을 알아볼 수 있도록 적절한 값을 설정하십시오.

최대 문자 수: 20(UTF-16)

<!-- parameter end -->

#### Response 

상태 코드 `200`과 다음 정보를 담은 JSON 객체가 반환됩니다.

<!-- parameter start -->

orderId

String

주문 ID입니다.

<!-- parameter end -->

_Response example_

<!-- tab start `json` -->

```json
{ "orderId": "T2025020710000002126002" }
```

<!-- tab end -->

#### Error response 

오류 응답 형식에 대한 자세한 내용은 [Error response](https://developers.line.biz/en/reference/line-mini-app/#iap-error-responses)를 참조하십시오.

일반적인 오류 외에 발생할 수 있는 오류는 다음과 같습니다.

| Error code | Description |
| --- | --- |
| VALIDATION_ERROR | 요청 제약 조건을 충족하지 않습니다. 예를 들어 `clientOs`에 `ios` 또는 `android` 이외의 값을 전달한 경우입니다. |
| WEBHOOK_URL_IS_NOT_SET | 결제 완료 알림을 받을 webhook URL이 설정되어 있지 않습니다. |
| PRODUCT_ID_NOT_FOUND | 요청한 [product ID](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/iap-product-id/)가 존재하지 않습니다. |
| BLOCKED_USER | LINE Platform에서 이 사용자를 부정 사용자로 판단했습니다. 이 사용자와 관련된 요청은 처리할 수 없습니다. |
| INTERNAL_SERVER_ERROR | LINE Platform에서 일시적인 문제가 발생했습니다. 재시도가 가능한 endpoint의 경우 exponential backoff 등의 방식으로 다시 시도하십시오. |
| TERMS_AGREEMENT_ERROR | 이 사용자가 ["Obtain user consent for in-app purchase"](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/implement-in-app-purchase/#get-user-consent)에서 최신 약관에 동의하지 않은 경우 발생합니다. |

_Error response example_

<!-- tab start `json` -->

```json
{
  "errorCode": "VALIDATION_ERROR",
  "message": "Request validation failed.",
  "details": [
    {
      "message": "'clientOs' must be 'android' or 'ios'. Actually received: 'INVALID'",
      "property": "clientOs"
    }
  ]
}
```

<!-- tab end -->

### Get webhook event history 

LINE Platform이 보낸 webhook 이벤트의 기록을 가져옵니다. Cursor 기반 페이지네이션을 사용하여 한 번에 최대 100개의 이벤트를 가져올 수 있습니다.

정렬 순서는 LINE Platform이 webhook 이벤트를 보내기 시작한 날짜와 시간의 오름차순입니다.

지난 7일 동안 전송된 webhook 이벤트만 가져올 수 있습니다. 현재는 [구매 완료 이벤트](https://developers.line.biz/en/reference/line-mini-app/#purchase-complete-event)만 사용할 수 있으며, [환불 이벤트](https://developers.line.biz/en/reference/line-mini-app/#refund-event)는 향후 지원될 예정입니다.

_Example request_

<!-- tab start `shell` -->

```sh
curl "https://api.line.me/iap/v1/webhook/events?startEpochSeconds=1747330438&endEpochSeconds=1747708454&pageSize=10" \
  -H "Authorization: Bearer {ChannelAccessToken}"

```

<!-- tab end -->

#### HTTP request 

`GET https://api.line.me/iap/v1/webhook/events`

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`\
자세한 내용은 LINE Platform Basics의 [Channel access token](https://developers.line.biz/en/docs/basics/channel-access-token/)을 참조하십시오.

<!-- parameter end -->

#### Query parameters 

<!-- parameter start (props: required) -->

startEpochSeconds

Number

가져올 webhook 이벤트 기록 기간의 시작 날짜와 시간을 지정합니다. 지정한 날짜와 시간은 검색 대상에 포함됩니다. 지난 7일 이내의 UNIX time(초 단위)을 지정하십시오.

<!-- parameter end -->
<!-- parameter start (props: required) -->

endEpochSeconds

Number

가져올 webhook 이벤트 기록 기간의 종료 날짜와 시간을 지정합니다. 지정한 날짜와 시간은 검색 대상에 포함됩니다. 지난 7일 이내의 UNIX time(초 단위)을 지정하십시오.

<!-- parameter end -->
<!-- parameter start -->

cursor

String

Webhook 이벤트 페이지의 cursor입니다.\
첫 번째 요청에는 지정하지 마십시오. 두 번째 이후의 요청에는 이전 요청의 응답에 포함된 `nextCursor` 값을 지정하여 다음 webhook 이벤트를 가져올 수 있습니다.

<!-- parameter end -->
<!-- parameter start (props: required) -->

pageSize

Number

페이지당 webhook 이벤트 수입니다.<br> <ul><li>최소값: 1</li><li>최대값: 100</li></ul>

<!-- parameter end -->
<!-- parameter start -->

status

String

가져올 webhook 이벤트의 상태입니다. 다음 중 하나를 지정하십시오.

- `SUCCESS`: 성공적으로 수신된 webhook 이벤트의 기록을 가져옵니다.
- `FAILED`: 수신에 실패한 webhook 이벤트의 기록을 가져옵니다.

지정하지 않으면 수신 성공 또는 실패와 관계없이 모든 webhook 이벤트의 기록을 가져옵니다.

<!-- parameter end -->

<!-- note start -->

**Do not change parameters other than cursor during pagination**

페이지네이션 중에는 `cursor` 이외의 파라미터를 변경하지 않고 요청하십시오. 파라미터를 변경하려면 첫 페이지부터 다시 시작하십시오.

<!-- note end -->

#### Response 

성공하면 상태 코드 `200`과 아래 정보를 담은 JSON 객체가 반환됩니다.

<!-- parameter start -->

events

Array

Webhook 이벤트의 목록입니다.

<!-- parameter end -->
<!-- parameter start -->

events\[].transactionType

String

항상 `PRODUCT`가 반환됩니다.

<!-- parameter end -->
<!-- parameter start -->

events[].event

Object

[Webhook event object](https://developers.line.biz/en/reference/line-mini-app/#purchase-complete-payload)입니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

nextCursor

String

다음 페이지의 cursor입니다.\
다음 페이지가 없으면 값은 `null`입니다.

<!-- parameter end -->

_Example response_

<!-- tab start `json` -->

```json
{
  "events": [
    {
      "transactionType": "PRODUCT",
      "event": {
        "type": "purchaseComplete",
        "orderId": "T2025020710000002126002",
        "productId": "iap_ln_002",
        "userId": "U91FC5A...",
        "purchaseTimestamp": 1738672496,
        "channelId": "12345...",
        "paymentBenefitProgram": "APPLE_MINI_APPS_PARTNER_PROGRAM"
      }
    }
  ],
  "nextCursor": "MTY3NjU0"
}
```

<!-- tab end -->

#### Error responses 

오류 응답 형식에 대한 자세한 내용은 [Error response](https://developers.line.biz/en/reference/line-mini-app/#iap-error-responses)를 참조하십시오.

일반적인 오류 외에 발생할 수 있는 오류는 다음과 같습니다.

| Error code | Description |
| --- | --- |
| VALIDATION_ERROR | 요청 제약 조건을 충족하지 않습니다. 예를 들어 `status`에 `SUCCESS` 또는 `FAILED` 이외의 값을 전달한 경우입니다. |
| INTERNAL_SERVER_ERROR | LINE Platform에서 일시적인 문제가 발생했습니다. 재시도가 허용되는 endpoint의 경우 exponential backoff 등의 방식으로 다시 시도하십시오. |

## In-app purchase webhook event object 

<!-- tip start -->

**Application required to use the in-app purchase feature**

인앱 결제 기능을 사용하려면 사용 신청을 해야 합니다. 자세한 내용은 LINE MINI App 문서의 [In-app purchase overview](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/overview/)를 참조하십시오.

<!-- tip end -->

### Verify signature 

LINE MINI App 서버가 webhook 요청을 받으면, webhook 이벤트를 처리하기 전에 요청 헤더에 포함된 서명을 검증하십시오. 이 검증 단계는 webhook이 LINE Platform에서 보낸 것이며 전송 중에 변조되지 않았음을 확인하는 데 중요합니다.

자세한 내용은 Messaging API 문서의 [Verify webhook signature](https://developers.line.biz/en/docs/messaging-api/verify-webhook-signature/)를 참조하십시오.

### Purchase complete event 

사용자가 예약된 아이템을 앱 스토어(App Store, Google Play)에서 구매하고 LY Corporation이 결제를 확정하면 이 이벤트가 발생합니다. Webhook payload에는 구매한 아이템에 대한 정보가 포함됩니다.

#### Webhook payload 

<!-- parameter start -->

type

String

Webhook 이벤트의 유형입니다. \
`purchaseComplete`가 지정됩니다.

<!-- parameter end -->
<!-- parameter start -->

orderId

String

사용자가 구매한 주문의 ID입니다. ["Reserve purchase"](https://developers.line.biz/en/reference/line-mini-app/#reserve-purchase) endpoint의 응답에 포함됩니다.

<!-- parameter end -->
<!-- parameter start -->

productId

String

사용자가 구매한 아이템의 product ID([`productId`](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/iap-product-id/))입니다.

<!-- parameter end -->
<!-- parameter start -->

userId

String

구매한 사용자의 사용자 ID입니다.

<!-- parameter end -->
<!-- parameter start -->

purchaseTimestamp

number

LINE Platform에서 결제가 완료된 시간입니다. 단위는 UNIX time(초 단위)입니다.

이 시간은 사용자가 실제로 결제를 완료한 시간이 아닙니다.

<!-- parameter end -->
<!-- parameter start -->

channelId

String

LINE MINI App 채널의 channel ID입니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

paymentBenefitProgram

String

결제에 적용된 수수료 감면 프로그램을 나타냅니다. Apple Inc.가 제공하는 [Mini Apps Partner Program](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/apple-mini-apps-partner-program/)을 통해 수수료가 감면된 경우 `APPLE_MINI_APPS_PARTNER_PROGRAM`이 반환됩니다.\
수수료 감면이 적용되지 않은 경우 이 속성은 포함되지 않습니다.

<!-- parameter end -->

_Example_

<!-- tab start `json` -->

```json
{
  "type": "purchaseComplete",
  "orderId": "T2025020710000002126002",
  "productId": "iap_ln_002",
  "userId": "U91FC5A...",
  "purchaseTimestamp": 1738672496,
  "channelId": "12345...",
  "paymentBenefitProgram": "APPLE_MINI_APPS_PARTNER_PROGRAM"
}
```

<!-- tab end -->

### Refund event 

사용자가 앱 스토어(App Store, Google Play)에서 구매한 아이템에 대해 환불이 발생하면 이 이벤트가 발생합니다. 이벤트에는 환불된 아이템에 대한 정보가 포함됩니다.

#### Webhook payload 

<!-- parameter start -->

type

String

Webhook 이벤트의 유형입니다. \
`refundComplete`가 지정됩니다.

<!-- parameter end -->
<!-- parameter start -->

orderId

String

사용자가 환불한 주문의 ID입니다. [Reserve purchase](https://developers.line.biz/en/reference/line-mini-app/#reserve-purchase) endpoint의 응답에 포함됩니다.

<!-- parameter end -->
<!-- parameter start -->

productId

String

사용자가 환불한 아이템의 product ID([`productId`](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/iap-product-id/))입니다.

<!-- parameter end -->
<!-- parameter start -->

userId

String

환불을 요청한 사용자의 사용자 ID입니다.

<!-- parameter end -->
<!-- parameter start -->

purchaseTimestamp

number

환불된 아이템을 구매한 시간입니다. 단위는 UNIX time(초 단위)입니다.

[구매 완료 이벤트](https://developers.line.biz/en/reference/line-mini-app/#purchase-complete-event)의 `purchaseTimestamp`와 일치합니다. 이 시간은 사용자가 실제로 환불을 완료한 시간이 아닙니다.

<!-- parameter end -->
<!-- parameter start -->

channelId

String

LINE MINI App 채널의 channel ID입니다.

<!-- parameter end -->
<!-- parameter start (props: annotation="Not always included") -->

paymentBenefitProgram

String

원래 결제에 적용된 수수료 감면 프로그램을 나타냅니다. Apple Inc.가 제공하는 [Mini Apps Partner Program](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/apple-mini-apps-partner-program/)을 통해 수수료가 감면된 경우 `APPLE_MINI_APPS_PARTNER_PROGRAM`이 반환됩니다.\
수수료 감면이 적용되지 않은 경우 이 속성은 포함되지 않습니다.

<!-- parameter end -->

_Example_

<!-- tab start `json` -->

```json
{
  "type": "refundComplete",
  "orderId": "T2025020710000002126002",
  "productId": "iap_ln_002",
  "userId": "U91FC5A...",
  "purchaseTimestamp": 1738672496,
  "channelId": "12345...",
  "paymentBenefitProgram": "APPLE_MINI_APPS_PARTNER_PROGRAM"
}
```

<!-- tab end -->
