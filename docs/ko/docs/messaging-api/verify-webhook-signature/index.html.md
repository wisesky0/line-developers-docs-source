# 웹훅 서명 검증하기

봇 서버가 웹훅 이벤트를 받으면 [웹훅 이벤트 객체](https://developers.line.biz/en/reference/messaging-api/#webhook-event-objects)를 처리하기 전에 요청 헤더에 포함된 서명을 검증하세요. 이 검증 단계는 웹훅이 LINE 플랫폼에서 보낸 것이며 전송 중에 변조되지 않았는지 확인하는 데 중요합니다.

![서명 검증](https://developers.line.biz/media/partner-docs/webbhook-signature-verification-en.webp)

<!-- tip start -->

**웹훅 서명을 검증할 것을 권장합니다**

웹훅 서명 검증은 중요한 보안 조치입니다. [Messaging API 개발 가이드라인](https://developers.line.biz/en/docs/messaging-api/development-guidelines/#verify-webhook-signature)에서도 웹훅 서명 검증을 권장합니다.

<!-- tip end -->

<!-- tip start -->

**LINE 플랫폼은 IP 주소를 공개하지 않습니다**

웹훅을 보내는 LINE 플랫폼의 IP 주소는 공개되지 않습니다. IP 주소로 접근을 제어하기보다 서명을 검증하여 보안을 확보하세요.

<!-- tip end -->

## 서명 검증에 필요한 준비 

웹훅 서명을 검증하려면 Messaging API 채널의 채널 시크릿이 필요합니다.

### 채널 시크릿 확인하기 

[LINE Developers Console](https://developers.line.biz/console/)에서 채널의 **Basic settings** 탭을 열고 채널 시크릿을 확인하세요. 채널 시크릿을 확인하려면 채널의 관리자(Admin) 권한이 필요합니다.

![](https://developers.line.biz/media/messaging-api/verify-webhook-signature/channel-secret-en.png)

채널 시크릿은 LINE 플랫폼과 개발자만 알고 있는 비밀 키입니다. 이 채널 시크릿은 서명 검증에 사용하는 해시 키이므로 봇 서버에서 안전하게 관리해야 합니다.

#### 채널 시크릿 재발급하기 

채널 시크릿을 재발급하려면 [LINE Developers Console](https://developers.line.biz/console/)의 **Basic Settings** 탭에서 **Issue**를 클릭하세요. 채널 시크릿이 유출되었다고 우려되면 채널 시크릿을 재발급하세요. 채널 시크릿을 재발급하려면 채널의 관리자(Admin) 권한이 필요합니다.

새 채널 시크릿을 발급하면 현재 채널 시크릿은 무효화됩니다. 채널 시크릿을 재발급하기 전에 기존 채널 시크릿을 사용하던 서비스에 미칠 영향을 충분히 검토하세요.

LINE 플랫폼은 개발자의 동의 없이 채널 시크릿을 재발급하지 않습니다.

## 서명 검증의 작동 방식 

서명 검증은 웹훅 발신자(LINE 플랫폼)와 수신자(개발자가 운영하는 봇 서버)가 같은 해시 키를 사용하여 계산을 수행하고, 그 결과로 나온 서명이 일치하는지 확인하여 웹훅의 정당성을 검증하는 방식입니다.

![](https://developers.line.biz/media/messaging-api/verify-webhook-signature/webhook-validation-flow.webp)

서명 검증이 작동하는 방식을 단계별로 설명하면 다음과 같습니다.

1. [LINE 플랫폼이 봇 서버로 웹훅을 보냅니다](https://developers.line.biz/en/docs/messaging-api/verify-webhook-signature/#line-platform-sends-webhook-request)
1. [봇 서버가 웹훅을 받습니다](https://developers.line.biz/en/docs/messaging-api/verify-webhook-signature/#receiving-webhook-request)
1. [봇 서버에서 웹훅 서명을 검증합니다](https://developers.line.biz/en/docs/messaging-api/verify-webhook-signature/#signature-validation)

### LINE 플랫폼이 봇 서버로 웹훅을 보냅니다 

LINE 플랫폼은 웹훅을 보낼 때 다음 단계로 서명을 만듭니다.

1. [웹훅 이벤트](https://developers.line.biz/en/reference/messaging-api/#webhook-event-objects)를 입력 데이터로, 채널 시크릿을 해시 키로 사용하여 HMAC-SHA256으로 서명을 생성합니다.
2. 생성된 서명을 `x-line-signature` 헤더에 설정합니다.
3. 웹훅 이벤트와 서명(`x-line-signature`)을 봇 서버로 보냅니다.

![](https://developers.line.biz/media/messaging-api/verify-webhook-signature/line-platform-sends-webhook-request.webp)

### 봇 서버가 웹훅을 받습니다 

봇 서버는 LINE 플랫폼에서 웹훅을 받습니다.

받은 웹훅의 [요청 헤더](https://developers.line.biz/en/reference/messaging-api/#request-headers)에 있는 서명(`x-line-signature`)과 요청 본문 문자열을 수정하지 말고, 메모리나 데이터베이스에 있는 그대로 저장하세요.

<!-- note start -->

**서명을 검증하기 전에 데이터를 수정하지 마세요**

서명 검증 전에 서명이나 요청 본문 문자열을 수정(문자열 치환, 역직렬화, 이스케이프 처리 등)하면 제3자가 변조한 요청과 구별할 수 없게 되어 서명 검증이 실패합니다. 요청 본문 문자열에 백슬래시(`\`)나 줄 바꿈(`\n`) 같은 특수 이스케이프 문자가 포함되어 있는지는 중요하지 않습니다. 모든 요청에서 서명을 검증하기 전에는 데이터를 수정하지 마세요.

<!-- note end -->

### 봇 서버에서 웹훅 서명을 검증합니다 

봇 서버는 LINE 플랫폼에서 보낸 웹훅을 다음과 같이 검증합니다.

1. 받은 웹훅 요청 본문의 문자열을 입력 데이터로, 봇 서버가 관리하는 채널 시크릿을 해시 키로 사용하여 HMAC-SHA256으로 서명을 생성합니다.
2. 받은 서명(`x-line-signature`)과 생성된 서명을 비교합니다.
3. 두 서명이 일치하면 받은 웹훅이 LINE 플랫폼에서 보내졌고 변조 없이 봇 서버에 도달했다는 것이 보장됩니다.
4. 두 서명이 일치하면 웹훅 이벤트의 내용에 따라 조치합니다.

![](https://developers.line.biz/media/messaging-api/verify-webhook-signature/signature-validation.webp)

두 서명이 일치하지 않거나 웹훅 요청 헤더에 서명이 없으면 웹훅 이벤트를 처리하지 말고 오류와 함께 처리를 종료하세요. 서명이 일치하지 않는 이유는 다음과 같을 수 있습니다.

- 봇 서버가 받은 요청이 LINE 플랫폼이 아닌 곳에서 보내졌음
- 봇 서버가 받은 웹훅이 제3자에 의해 변조되었음
- 봇 서버의 서명 검증 방식에 오류가 있음

웹훅이 LINE 플랫폼에서 보내졌다면 LINE Developers Console의 **Statistics**에서 웹훅 전송 기록을 확인할 수 있습니다. 오류 통계를 확인하는 방법은 [웹훅 오류 원인 및 통계 확인하기](https://developers.line.biz/en/docs/messaging-api/check-webhook-error-statistics/)를 참고하세요.

웹훅이 LINE 플랫폼에서 보내졌는데도 서명이 일치하지 않는다면 봇 서버의 서명 검증 방식에 오류가 있을 수 있습니다. 자세한 내용은 [자주 발생하는 서명 검증 실패 원인과 해결 방법](https://developers.line.biz/en/docs/messaging-api/verify-webhook-signature/#common-signature-verification-failures-and-their-solutions)을 참고하세요.

## 서명 검증 절차 

`openssl` 명령어를 사용하여 서명 검증 절차를 확인해 보세요.

먼저 [LINE Developers Console](https://developers.line.biz/console/)에서 채널의 **Messaging API** 탭을 열고 웹훅 URL의 **Verify**를 클릭하여 LINE 플랫폼에서 확인용 웹훅을 보내세요.

![Verify를 클릭하여 통신을 확인하는 웹훅을 보냅니다.](https://developers.line.biz/media/news/webhook-url-verify-button.png)

1. 봇 서버로 보낸 웹훅 요청 본문
   ```json
   {"destination":"U8e742f61d673b39c7fff3cecb7536ef0","events":[]}
   ```
1. 봇 서버로 보낸 웹훅의 서명(`x-line-signature`)
   ```
   GhRKmvmHys4Pi8DxkF4+EayaH0OqtJtaZxgTD9fMDLs=
   ```
1. 해당 채널의 채널 시크릿
   ```
   8c570fa6dd201bb328f1c1eac23a96d8
   ```
1. 봇 서버에서 서명을 검증하는 명령어
   ```sh
   echo -n '{"destination":"U8e742f61d673b39c7fff3cecb7536ef0","events":[]}' | openssl dgst -sha256 -hmac '8c570fa6dd201bb328f1c1eac23a96d8' -binary | openssl base64
   ```
1. 봇 서버가 생성한 서명
   ```
   GhRKmvmHys4Pi8DxkF4+EayaH0OqtJtaZxgTD9fMDLs=
   ```

LINE 플랫폼에서 받은 서명 2와 봇 서버가 생성한 서명 5가 일치하므로 봇 서버가 받은 웹훅이 LINE 플랫폼에서 보내졌고 변조되지 않았다는 것을 확인했습니다.

실제 개발에서는 [LINE Messaging API SDK](https://developers.line.biz/en/docs/messaging-api/line-bot-sdk/)를 사용하면 서명을 쉽게 검증할 수 있습니다. 언어별 구현 예시는 Messaging API 레퍼런스의 [서명 검증](https://developers.line.biz/en/reference/messaging-api/#signature-validation)을 참고하세요.

## 자주 발생하는 서명 검증 실패 원인과 해결 방법 

웹훅이 LINE 플랫폼에서 보내졌는데도 서명이 일치하지 않는다면 봇 서버의 서명 검증 방식에 오류가 있을 수 있습니다.

다음은 서명 검증이 실패하는 일반적인 원인과 해결 방법입니다.

- [봇 서버에 도달하기 전에 웹훅이 변경됨](https://developers.line.biz/en/docs/messaging-api/verify-webhook-signature/#modified-webhook-request-before-it-reaches-the-bot-server)
- [웹훅을 파싱하고 역직렬화함](https://developers.line.biz/en/docs/messaging-api/verify-webhook-signature/#parsing-or-deserializing-webhook-request)
- [웹훅 요청 본문 문자열(JSON)의 형식이 잘못됨](https://developers.line.biz/en/docs/messaging-api/verify-webhook-signature/#formatted-webhook-event)
- [서명 검증에 HMAC-SHA256 이외의 알고리즘을 사용함](https://developers.line.biz/en/docs/messaging-api/verify-webhook-signature/#used-incorrect-algorithm-for-signature-validation)
- [다른 채널의 채널 시크릿을 사용함](https://developers.line.biz/en/docs/messaging-api/verify-webhook-signature/#used-wrong-channel-secret)
- [다른 개발자가 채널 시크릿을 재발급함](https://developers.line.biz/en/docs/messaging-api/verify-webhook-signature/#reissued-channel-secret)
- [이스케이프 문자를 해석함](https://developers.line.biz/en/docs/messaging-api/verify-webhook-signature/#interpreted-escape-characters)
- [웹훅을 처리할 때 사용한 문자 인코딩이 UTF-8이 아님](https://developers.line.biz/en/docs/messaging-api/verify-webhook-signature/#non-utf8-encoding-for-webhook-processing)

### 봇 서버에 도달하기 전에 웹훅이 변경됨 

서명 검증 전에 웹훅의 `x-line-signature` 또는 요청 본문 문자열을 변경하면 서명 검증이 실패합니다.

웹훅이 봇 서버에 도달하기 전에 프록시나 로드 밸런서가 요청 헤더나 본문을 수정하지 않는지 확인하세요.

### 웹훅을 파싱하고 역직렬화함 

서명을 검증하기 전에 받은 웹훅 요청 본문 문자열을 파싱하거나 역직렬화하여 객체나 배열로 변환하면 서명 검증이 실패합니다.

1. 봇 서버가 받은 웹훅 요청 본문
   ```json
   {"destination":"U8e742f61d673b39c7fff3cecb7536ef0","events":[]}
   ```
1. 웹훅 요청 본문을 역직렬화하여 출력
   ```python
   decoded_data = json.loads('{"destination":"U8e742f61d673b39c7fff3cecb7536ef0","events":[]}')
   print(decoded_data)
   ```
1. 역직렬화 과정에서 큰따옴표가 작은따옴표로 바뀌고/바뀌거나 공백이 추가됨
   ```python
   {'destination': 'U8e742f61d673b39c7fff3cecb7536ef0', 'events': []}
   ```

서명을 검증할 때는 받은 웹훅 요청 본문의 정확한 문자열을 사용하세요.

### 웹훅 요청 본문 문자열(JSON)의 형식이 잘못됨 

서명을 검증하기 전에 받은 웹훅의 JSON 요청 본문을 개발자가 보기 쉽도록 포맷팅하면 서명 검증이 실패합니다.

1. 봇 서버가 받은 웹훅 요청 본문
   ```json
   {"destination":"U8e742f61d673b39c7fff3cecb7536ef0","events":[]}
   ```
1. 웹훅 요청 본문 문자열(JSON)을 포맷팅하면 서명 검증이 실패함
   ```json
   {
     "destination": "U8e742f61d673b39c7fff3cecb7536ef0",
     "events": []
   }
   ```

서명을 검증할 때는 받은 웹훅 요청 본문의 정확한 문자열을 사용하세요.

### 서명 검증에 HMAC-SHA256 이외의 알고리즘을 사용함 

서명 검증에 HMAC-SHA256 이외의 알고리즘을 사용하면 서명 검증이 실패합니다.

HMAC-SHA1 같은 HMAC-SHA256 이외의 알고리즘으로 실수로 서명을 생성하지 않았는지 확인하세요.

### 다른 채널의 채널 시크릿을 사용함 

받은 웹훅의 `destination`에 지정된 봇 이외의 채널에 대한 채널 시크릿을 사용하면 서명 검증이 실패합니다.

서명을 검증하려면 웹훅 발신자(LINE 플랫폼)와 수신자(개발자가 운영하는 봇 서버)가 같은 해시 키로 계산해야 합니다. 채널 시크릿이 이 해시 키에 해당하며, 채널마다 다릅니다.

[LINE Developers Console](https://developers.line.biz/console/)의 **Basic settings** 탭에서 채널 시크릿 값을 확인하세요.

### 다른 개발자가 채널 시크릿을 재발급함 

[LINE Developers Console](https://developers.line.biz/console/)의 **Basic settings** 탭에서 새 채널 시크릿을 발급하면 이전 채널 시크릿은 무효화됩니다.

이전에 잘 동작하던 서명 검증이 갑자기 실패하기 시작했다면, 같은 채널의 관리자 권한을 가진 다른 개발자가 채널 시크릿을 재발급했을 수 있습니다.

[LINE Developers Console](https://developers.line.biz/console/)의 **Basic settings** 탭에서 현재 채널 시크릿 값을 확인하세요. 채널 시크릿이 재발급되었다면 봇 서버에서 서명 검증에 사용하는 채널 시크릿을 새 값으로 교체해야 합니다.

### 이스케이프 문자를 해석함 

받은 웹훅의 요청 본문에는 백슬래시(`\`)나 줄 바꿈(`\n`) 같은 특수 이스케이프 문자가 포함될 수 있습니다. 이스케이프 문자를 처리하여 그대로 해석하면 서명 검증이 실패합니다.

예를 들어 로컬 환경에서 서명 검증 동작을 확인하기 위해 `echo` 명령어를 사용할 때는 이스케이프 문자가 그대로 처리되도록 큰따옴표 대신 작은따옴표로 감싸세요.

```sh
echo -n '{"destination":"U8e742f61d673b39c7fff3cecb7536ef0","events":[]}' | openssl dgst -sha256 -hmac '8c570fa6dd201bb328f1c1eac23a96d8' -binary | openssl base64
```

Python에서는 원시 문자열 리터럴(`r"..."`)을 사용하여 이스케이프 문자를 그대로 처리할 수 있습니다.

```python
body = r'{"destination":"U8e742f61d673b39c7fff3cecb7536ef0","events":[{"type":"message","text":"hello\ntest1\ntest2"}]}'
```

서명을 검증할 때는 이스케이프 문자를 해석하지 말고, 받은 웹훅 요청 본문의 문자열을 그대로 사용하세요.

### 웹훅을 처리할 때 사용한 문자 인코딩이 UTF-8이 아님 

LINE 플랫폼에서 보내는 웹훅은 UTF-8 인코딩(`Content-Type: application/json; charset=utf-8`)으로 전송됩니다.

받은 웹훅 요청 본문으로 서명을 검증할 때 UTF-8이 아닌 인코딩으로 데이터를 처리하면 줄 바꿈 코드가 LF(`\n`)에서 CRLF(`\r\n`)로 바뀌거나, 이모지와 특수 문자(탭, 제어 문자 등)가 잘못 해석되어 서명 검증이 실패할 수 있습니다.

서명을 검증할 때는 문자 인코딩이 UTF-8인지 확인하세요.
