# Server API

<!-- tip start -->

**Version number differs from LIFF SDK**

Server API의 버전 번호는 LIFF SDK의 버전 번호와 다릅니다. 현재 출시된 LIFF SDK 버전은 `v2`이지만, Server API 버전은 `v1`입니다.

<!-- tip end -->

## Server API 

### Preparing a channel access token 

LIFF server API는 LINE Login 채널의 LIFF 앱을 운영하는 데 사용됩니다. 따라서 server API를 사용하려면 LINE Login 채널의 channel access token이 필요합니다. 사용할 수 있는 channel access token의 유형은 [short-lived channel access tokens](https://developers.line.biz/en/reference/messaging-api/#issue-shortlived-channel-access-token) 또는 [stateless channel access tokens](https://developers.line.biz/en/reference/messaging-api/#issue-stateless-channel-access-token)입니다.

### Adding the LIFF app to a channel 

LIFF 앱을 채널에 추가합니다. 하나의 채널에는 최대 30개의 LIFF 앱을 추가할 수 있습니다.

<!-- tip start -->

**We recommend creating a LIFF app as a LINE MINI App**

앞으로 LIFF와 LINE MINI App은 하나의 브랜드로 통합될 예정이며, 이 통합에 따라 LIFF는 LINE MINI App에 포함됩니다. 따라서 새로운 LIFF 앱은 LINE MINI App으로 만들 것을 권장합니다. 자세한 내용은 [2025년 2월 12일](https://developers.line.biz/en/news/2025/02/12/line-mini-app/) 소식을 참조하십시오.

<!-- tip end -->

_Example_

<!-- tab start `shell` -->

```sh
curl -X POST https://api.line.me/liff/v1/apps \
-H "Authorization: Bearer {channel access token}" \
-H "Content-Type: application/json" \
-d '{
    "view": {
        "type": "full",
        "url": "https://example.com/myservice"
    },
    "description": "Service Example",
    "features": {
        "qrCode": true
    },
    "permanentLinkPattern": "concat",
    "scope": ["profile", "chat_message.write"],
    "botPrompt": "none"
}'
```

<!-- tab end -->

#### HTTP request 

`POST https://api.line.me/liff/v1/apps`

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`\
자세한 내용은 [Preparing a channel access token](https://developers.line.biz/en/reference/liff-server/#preparing-channel-access-token)을 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: required) -->

Content-Type

application/json

<!-- parameter end -->

#### Request body 

<!-- parameter start (props: required) -->

view.type

String

LIFF 앱 화면의 크기입니다. 다음 값 중 하나를 지정하십시오.

- `compact`
- `tall`
- `full`

자세한 내용은 [Size of the LIFF app view](https://developers.line.biz/en/docs/liff/overview/#screen-size)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: required) -->

view.url

String

Endpoint URL입니다. LIFF 앱을 구현하는 웹 앱의 URL입니다(예: `https://example.com`). LIFF URL을 사용하여 LIFF 앱을 실행할 때 사용됩니다.

URL 스킴은 **https**여야 합니다. URL 프래그먼트(#URL-fragment)는 지정할 수 없습니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

view.moduleMode

Boolean

Modular mode에서 LIFF 앱을 사용하려면 `true`로 설정하십시오. Modular mode에서는 헤더의 action button이 표시되지 않습니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

description

String

LIFF 앱의 이름입니다.

LIFF 앱 이름에는 "LINE" 또는 이와 유사한 문자열이나 부적절한 문자열을 포함할 수 없습니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

features.qrCode

Boolean

LIFF 앱에서 2D 코드 리더를 사용하려면 `true`, 그렇지 않으면 `false`입니다. 기본값은 `false`입니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

permanentLinkPattern

String

LIFF URL의 추가 정보를 처리하는 방식입니다. `concat`을 지정하십시오.

자세한 내용은 LIFF 문서의 [Opening a LIFF app](https://developers.line.biz/en/docs/liff/opening-liff-app/)을 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

scope

Array of strings

일부 LIFF SDK 메서드가 작동하는 데 필요한 scope의 배열입니다.

- `openid`
- `email`
- `profile`
- `chat_message.write`

기본값은 `["profile", "chat_message.write"]`입니다. 각 scope에 대한 자세한 내용은 LIFF 문서의 [Adding the LIFF app to your channel](https://developers.line.biz/en/docs/liff/registering-liff-apps/#registering-liff-app)을 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

botPrompt

String

다음 값 중 하나로 [add friend option](https://developers.line.biz/en/docs/line-login/link-a-bot/) 설정을 지정하십시오.

- `normal`: 채널 동의 화면에 LINE Official Account를 친구로 추가하는 옵션을 표시합니다.
- `aggressive`: 채널 동의 화면 이후에 LINE Official Account를 친구로 추가하는 옵션이 있는 화면을 표시합니다.
- `none`: LINE Official Account를 친구로 추가하는 옵션을 표시하지 않습니다.

기본값은 `none`입니다.

<!-- parameter end -->

#### Response 

상태 코드 `200`과 다음 속성을 가진 JSON 객체를 반환합니다.

<!-- parameter start -->

liffId

String

LIFF 앱 ID

<!-- parameter end -->

_Example_

<!-- tab start `json` -->

```json
{
  "liffId": "{liffId}"
}
```

<!-- tab end -->

#### Error response 

다음 상태 코드 중 하나가 반환됩니다.

| Status code | Description |
| --- | --- |
| 400 | 이 상태 코드는 다음 중 하나를 의미합니다.<ul><li>요청에 잘못된 값이 포함되어 있습니다.</li><li>채널에 추가할 수 있는 LIFF 앱의 최대 개수에 도달했습니다.</li></ul> |
| 401 | 인증에 실패했습니다. |

### Update LIFF app settings 

LIFF 앱 설정을 부분적으로 업데이트합니다.

_Example_

<!-- tab start `shell` -->

```sh
curl -X PUT https://api.line.me/liff/v1/apps/{liffId} \
-H "Authorization: Bearer {channel access token}" \
-H "Content-Type: application/json" \
-d '{
    "view": {
        "url": "https://new.example.com"
    }
}'
```

<!-- tab end -->

#### HTTP request 

`PUT https://api.line.me/liff/v1/apps/{liffId}`

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`\
자세한 내용은 [Preparing a channel access token](https://developers.line.biz/en/reference/liff-server/#preparing-channel-access-token)을 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: required) -->

Content-Type

application/json

<!-- parameter end -->

#### Path parameters 

<!-- parameter start (props: required) -->

liffId

업데이트할 LIFF 앱의 ID

<!-- parameter end -->

#### Request body 

<!-- parameter start (props: optional) -->

view.type

String

LIFF 앱 화면의 크기입니다. 다음 값 중 하나를 지정하십시오.

- `compact`
- `tall`
- `full`

자세한 내용은 [Size of the LIFF app view](https://developers.line.biz/en/docs/liff/overview/#screen-size)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

view.url

String

Endpoint URL입니다. LIFF 앱을 구현하는 웹 앱의 URL입니다(예: `https://example.com`). LIFF URL을 사용하여 LIFF 앱을 실행할 때 사용됩니다.

URL 스킴은 **https**여야 합니다. URL 프래그먼트(#URL-fragment)는 지정할 수 없습니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

view.moduleMode

Boolean

Modular mode에서 LIFF 앱을 사용하려면 `true`로 설정하십시오. Modular mode에서는 헤더의 action button이 표시되지 않습니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

description

String

LIFF 앱의 이름입니다.

LIFF 앱 이름에는 "LINE" 또는 이와 유사한 문자열이나 부적절한 문자열을 포함할 수 없습니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

features.qrCode

Boolean

LIFF 앱에서 2D 코드 리더를 사용하려면 `true`, 그렇지 않으면 `false`입니다.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

permanentLinkPattern

String

LIFF URL의 추가 정보를 처리하는 방식입니다. `concat`을 지정하십시오.

자세한 내용은 LIFF 문서의 [Opening a LIFF app](https://developers.line.biz/en/docs/liff/opening-liff-app/)을 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

scope

Array of strings

일부 LIFF SDK 메서드가 작동하는 데 필요한 scope의 배열입니다.

- `openid`
- `email`
- `profile`
- `chat_message.write`

각 scope에 대한 자세한 내용은 LIFF 문서의 [Adding the LIFF app to your channel](https://developers.line.biz/en/docs/liff/registering-liff-apps/#registering-liff-app)을 참조하십시오.

<!-- parameter end -->
<!-- parameter start (props: optional) -->

botPrompt

String

다음 값 중 하나로 [add friend option](https://developers.line.biz/en/docs/line-login/link-a-bot/) 설정을 지정하십시오.

- `normal`: 채널 동의 화면에 LINE Official Account를 친구로 추가하는 옵션을 표시합니다.
- `aggressive`: 채널 동의 화면 이후에 LINE Official Account를 친구로 추가하는 옵션이 있는 화면을 표시합니다.
- `none`: LINE Official Account를 친구로 추가하는 옵션을 표시하지 않습니다.

<!-- parameter end -->

<!-- note start -->

**Note**

요청 본문에 지정된 속성만 업데이트됩니다.

<!-- note end -->

#### Response 

상태 코드 `200`이 반환됩니다.

#### Error response 

다음 상태 코드 중 하나가 반환됩니다.

| Status code | Description |
| --- | --- |
| 400 | 요청에 잘못된 값이 포함되어 있습니다. |
| 401 | 인증에 실패했습니다. |
| 404 | 이 상태 코드는 다음 중 하나를 의미합니다.<ul><li>지정한 LIFF 앱이 존재하지 않습니다.</li><li>지정한 LIFF 앱이 다른 채널에 추가되어 있습니다.</li></ul> |

### Get all LIFF apps 

채널에 추가된 모든 LIFF 앱의 정보를 가져옵니다.

_Example_

<!-- tab start `shell` -->

```sh
curl -X GET https://api.line.me/liff/v1/apps \
-H "Authorization: Bearer {channel access token}"
```

<!-- tab end -->

#### HTTP request 

`GET https://api.line.me/liff/v1/apps`

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`\
자세한 내용은 [Preparing a channel access token](https://developers.line.biz/en/reference/liff-server/#preparing-channel-access-token)을 참조하십시오.

<!-- parameter end -->

#### Response 

상태 코드 `200`과 다음 속성을 가진 JSON 객체를 반환합니다.

<!-- parameter start -->

apps

Array of objects

LIFF 앱 객체의 배열

<!-- parameter end -->
<!-- parameter start -->

apps\[].liffId

String

LIFF 앱 ID

<!-- parameter end -->
<!-- parameter start -->

apps[].view.type

String

LIFF 앱 화면의 크기입니다. 다음 값 중 하나입니다.

- `compact`
- `tall`
- `full`

자세한 내용은 [Size of the LIFF app view](https://developers.line.biz/en/docs/liff/overview/#screen-size)를 참조하십시오.

<!-- parameter end -->
<!-- parameter start -->

apps[].view.url

String

Endpoint URL입니다. LIFF 앱을 구현하는 웹 앱의 URL입니다(예: `https://example.com`). LIFF URL을 사용하여 LIFF 앱을 실행할 때 사용됩니다.

<!-- parameter end -->
<!-- parameter start -->

apps[].view.moduleMode

Boolean

Modular mode에서 LIFF 앱을 사용하는 경우 `true`입니다. Modular mode에서는 헤더의 action button이 표시되지 않습니다.

<!-- parameter end -->
<!-- parameter start -->

apps\[].description

String

LIFF 앱의 이름

<!-- parameter end -->
<!-- parameter start -->

apps[].features.ble

Boolean

LIFF 앱이 LINE Things용 Bluetooth® Low Energy를 지원하면 `true`, 그렇지 않으면 `false`입니다.

<!-- parameter end -->
<!-- parameter start -->

apps[].features.qrCode

Boolean

LIFF 앱에서 2D 코드 리더를 실행할 수 있으면 `true`, 그렇지 않으면 `false`입니다.

<!-- parameter end -->
<!-- parameter start -->

apps\[].permanentLinkPattern

String

LIFF URL의 추가 정보를 처리하는 방식입니다. `concat`이 반환됩니다.

자세한 내용은 LIFF 문서의 [Opening a LIFF app](https://developers.line.biz/en/docs/liff/opening-liff-app/)을 참조하십시오.

<!-- parameter end -->
<!-- parameter start -->

apps\[].scope

Array of strings

LIFF 앱의 scope입니다.

- `openid`
- `email`
- `profile`
- `chat_message.write`

각 scope에 대한 자세한 내용은 LIFF 문서의 [Adding the LIFF app to your channel](https://developers.line.biz/en/docs/liff/registering-liff-apps/#registering-liff-app)을 참조하십시오.

<!-- parameter end -->
<!-- parameter start -->

apps\[].botPrompt

String

[add friend option](https://developers.line.biz/en/docs/line-login/link-a-bot/) 설정입니다.

- `normal`: 채널 동의 화면에 LINE Official Account를 친구로 추가하는 옵션을 표시합니다.
- `aggressive`: 채널 동의 화면 이후에 LINE Official Account를 친구로 추가하는 옵션이 있는 화면을 표시합니다.
- `none`: LINE Official Account를 친구로 추가하는 옵션을 표시하지 않습니다.

<!-- parameter end -->

_Example_

<!-- tab start `json` -->

```json
{
  "apps": [
    {
      "liffId": "{liffId}",
      "view": {
        "type": "full",
        "url": "https://example.com/myservice"
      },
      "description": "Happy New York",
      "permanentLinkPattern": "concat"
    },
    {
      "liffId": "{liffId}",
      "view": {
        "type": "tall",
        "url": "https://example.com/myservice2"
      },
      "features": {
        "ble": true,
        "qrCode": true
      },
      "permanentLinkPattern": "concat",
      "scope": ["profile", "chat_message.write"],
      "botPrompt": "none"
    }
  ]
}
```

<!-- tab end -->

#### Error response 

다음 상태 코드 중 하나가 반환됩니다.

| Status code | Description                          |
| ----------- | ------------------------------------ |
| 401         | 인증에 실패했습니다.                 |
| 404         | 채널에 LIFF 앱이 없습니다.           |

### Delete LIFF app from a channel 

채널에서 LIFF 앱을 삭제합니다.

_Example_

<!-- tab start `shell` -->

```sh
curl -X DELETE https://api.line.me/liff/v1/apps/{liffId} \
-H "Authorization: Bearer {channel access token}"
```

<!-- tab end -->

#### HTTP request 

`DELETE https://api.line.me/liff/v1/apps/{liffId}`

#### Request headers 

<!-- parameter start (props: required) -->

Authorization

Bearer `{channel access token}`\
자세한 내용은 [Preparing a channel access token](https://developers.line.biz/en/reference/liff-server/#preparing-channel-access-token)을 참조하십시오.

<!-- parameter end -->

#### Path parameters 

<!-- parameter start (props: required) -->

liffId

삭제할 LIFF 앱의 ID

<!-- parameter end -->

#### Response 

상태 코드 `200`이 반환됩니다.

#### Error response 

다음 상태 코드 중 하나가 반환됩니다.

| Status code | Description |
| --- | --- |
| 401 | 인증에 실패했습니다. |
| 404 | 이 상태 코드는 다음 중 하나를 의미합니다.<ul><li>지정한 LIFF 앱이 존재하지 않습니다.</li><li>지정한 LIFF 앱이 다른 채널에 추가되어 있습니다.</li></ul> |
