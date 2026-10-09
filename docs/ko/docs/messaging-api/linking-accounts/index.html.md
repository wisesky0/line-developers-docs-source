# 사용자 계정 연동

서비스 제공자로서 서비스 사용자가 LINE 계정을 서비스 계정과 **안전하게** 연동하도록 할 수 있습니다. 계정을 연동하려면 사용자가 LINE 공식 계정을 친구로 추가해 두어야 합니다. 사용자가 LINE 계정을 서비스 계정에 연동하면 서비스의 사용자 데이터를 LINE에서 활용할 수 있습니다. 이 사용자 데이터를 활용하면 LINE 공식 계정에서 사용자 경험을 더 풍부하게 만들 수 있습니다.

사용자가 LINE 계정을 서비스 계정에 연동하면 LINE 공식 계정을 사용자에게 유용하게 활용할 수 있습니다. 예를 들어 서비스가 쇼핑 사이트라면 다음과 같이 활용할 수 있습니다.

- 사용자가 쇼핑 사이트에서 구매하면 LINE 공식 계정에서 해당 사용자에게 LINE 메시지를 보냅니다.
- 사용자가 LINE 공식 계정과의 채팅에서 주문할 수 있도록 합니다.

LINE Login을 통해 계정을 연동할 수도 있지만, 이 경우 LINE Login 채널이 있어야 합니다. Messaging API를 사용하면 LINE Login 채널 없이 계정을 연동할 수 있습니다.

## 계정 연동 순서 

사용자의 LINE 계정을 서비스 계정에 연동하는 순서는 다음과 같습니다.

![계정 연동 순서도](https://developers.line.biz/media/messaging-api/linking-accounts/sequence.png)

1. 봇 서버가 사용자의 LINE 사용자 ID로 링크 토큰을 발급하는 API를 호출합니다.
1. LINE 플랫폼이 링크 토큰을 발급하여 봇 서버에 반환합니다.
1. 봇 서버가 Messaging API를 호출하여 사용자에게 연동 URL을 보냅니다.
1. LINE 플랫폼이 사용자에게 연동 URL을 보냅니다.
1. 사용자가 연동 URL에 접속합니다.
1. 웹 서버가 서비스의 로그인 페이지를 보여 줍니다.
1. 사용자가 서비스의 로그인 정보를 입력합니다.
1. 웹 서버가 서비스의 사용자 ID를 가져와 이를 사용해 nonce(한 번만 사용하는 숫자)를 생성합니다.
1. 웹 서버가 사용자를 계정 연동 엔드포인트로 리디렉션합니다.
1. 사용자가 계정 연동 엔드포인트에 접속합니다.
1. LINE 플랫폼이 LINE 사용자 ID와 nonce를 포함한 웹훅 이벤트를 봇 서버로 보냅니다.
1. 봇 서버가 nonce를 사용하여 서비스의 사용자 ID를 가져옵니다.

Messaging API 없이 직접 구현하여 계정을 연동할 수도 있습니다. 하지만 직접 구현하면 계정 연동 과정에서 사용자가 보안 문제에 노출될 수 있으므로 주의해야 합니다. 예를 들어 공격자가 사용자에게 URL을 보내, 공격자의 LINE 계정을 사용자의 서비스 계정에 연동하도록 유도할 수 있습니다. Messaging API는 이러한 공격으로부터 사용자를 보호합니다. Messaging API는 연동 URL을 발급하도록 요청한 사용자가 연동할 LINE 계정의 실제 소유자인지 확인합니다.

## 계정 연동하기 

서비스의 사용자 계정과 LINE 사용자 계정을 연동하려면 다음 지침을 따르세요.

### 1. 링크 토큰 발급 

사용자의 LINE 계정과 서비스 계정을 연동하려면 링크 토큰이 필요합니다. [링크 토큰을 발급](https://developers.line.biz/en/reference/messaging-api/#issue-link-token)하려면 `/bot/user/{userId}/linkToken` 엔드포인트로 HTTP POST 요청을 보내세요.

```sh
curl -X POST https://api.line.me/v2/bot/user/{userId}/linkToken \
-H 'Authorization: Bearer {channel access token}'
```

요청이 성공하면 엔드포인트는 상태 코드 `200`과 함께 링크 토큰을 반환합니다. 이 토큰은 한 번만 사용할 수 있으며 10분 동안 유효합니다.

```sh
{
  "linkToken": "NMZTNuVrPTqlr2IF8Bnymkb7rXfYv5EY"
}
```

### 2. 사용자에게 연동 URL 보내기 

봇 서버는 사용자가 계정을 연동할 수 있도록 URL을 보냅니다. 예를 들어 연동 URL은 [템플릿 메시지](https://developers.line.biz/en/docs/messaging-api/message-types/#template-messages)의 [URI 액션](https://developers.line.biz/en/docs/messaging-api/actions/#uri-action) 객체에 지정할 수 있습니다. 연동 URL에는 1단계에서 받은 링크 토큰을 쿼리 파라미터로 추가합니다.

사용자에게 연동 URL이 포함된 메시지를 보내는 요청 예제는 다음과 같습니다.

```sh
curl -v -X POST https://api.line.me/v2/bot/message/push \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer {channel access token}' \
-d '{
    "to": "{user id}",
    "messages": [{
        "type": "template",
        "altText": "Account Link",
        "template": {
            "type": "buttons",
            "text": "Account Link",
            "actions": [{
                "type": "uri",
                "label": "Account Link",
                "uri": "http://example.com/link?linkToken=xxx"
            }]
        }
    }]
}'
```

### 3. 서비스의 사용자 ID 가져오기 

사용자가 URL에 접속하면 서비스의 로그인 페이지를 보여 줍니다. 사용자가 서비스에 로그인하면 서비스에서 사용하는 사용자 ID를 가져올 수 있습니다.

### 4. nonce 생성 및 LINE 플랫폼으로 사용자 리디렉션 

3단계에서 얻은 사용자 ID로 nonce를 생성합니다. nonce는 다음 조건을 충족해야 합니다.

- 한 번만 사용할 수 있고 예측하기 어려운 문자열이어야 합니다. 보안을 위해 서비스에서 사용하는 사용자 ID와 같이 예측 가능한 값을 사용하지 마세요.
- 길이가 10자 이상 255자 이하여야 합니다.

nonce로 사용할 난수를 생성할 때는 다음 권장 사항을 고려하세요.

- nonce를 생성할 때 보안 난수 생성기를 사용하세요.
- nonce는 최소 128비트(16바이트) 이상이어야 합니다.
- nonce는 Base64로 인코딩하세요.

nonce를 생성한 후에는 nonce를 서비스의 사용자 ID와 연결하여 정보를 저장하세요. 그다음 사용자를 아래 URL로 리디렉션합니다.

```sh
https://access.line.me/dialog/bot/accountLink?linkToken={link token}&nonce={nonce}
```

사용자가 이 엔드포인트에 접속하면 LINE 플랫폼은 링크 토큰이 발급된 사용자와 현재 사용자가 같은지 확인합니다. 검증 결과에 따라 LINE 플랫폼은 다음과 같이 다르게 동작합니다.

- 사용자 검증 성공: LINE 플랫폼은 [계정 연동 이벤트](https://developers.line.biz/en/reference/messaging-api/#account-link-event)를 봇 서버로 보냅니다. 이벤트의 `result` 속성 값은 `ok`입니다.
- 사용자 검증 실패: LINE 플랫폼은 [계정 연동 이벤트](https://developers.line.biz/en/reference/messaging-api/#account-link-event)를 봇 서버로 보냅니다. 이벤트의 `result` 속성 값은 `failed`입니다.
- 링크 토큰이 유효하지 않음: 링크 토큰이 만료되었거나 이미 사용된 경우, LINE 플랫폼은 웹훅 이벤트를 보내지 않고 사용자에게 오류를 표시합니다.

### 5. 계정 연동 

4단계의 사용자 검증이 성공하면 사용자의 계정을 연동합니다. 계정 연동 이벤트 객체에는 사용자의 LINE 사용자 ID와 nonce가 포함되어 있습니다. 이 nonce를 사용하여 앞에서 연결하여 저장해 둔 서비스의 사용자 ID를 가져옵니다. 서비스의 사용자 ID를 사용자의 LINE 사용자 ID에 연결하면 계정 연동이 완료됩니다.

## 계정 연동 해제 

사용자가 LINE 계정을 서비스 계정에 연동했다면, 사용자가 연동을 해제할 수 있도록 해야 합니다.

- 사용자가 언제든지 계정 연동을 해제할 수 있도록 해야 합니다.
- 계정을 연동할 때 사용자에게 연동을 해제할 수 있다는 사실을 알려야 합니다.

예를 들어 Messaging API를 사용하면 사용자별로 [리치 메뉴](https://developers.line.biz/en/docs/messaging-api/rich-menus-overview/)를 맞춤 설정할 수 있습니다. 아직 계정을 연동하지 않은 사용자에게는 계정 연동 메뉴를, 계정을 연동한 사용자에게는 연동 해제 메뉴를 표시할 수 있습니다.

## 더 알아보기 

- [Messaging API 레퍼런스](https://developers.line.biz/en/reference/messaging-api/)
