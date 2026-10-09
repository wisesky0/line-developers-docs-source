# 봇 만들기

이 가이드에서는 Messaging API를 사용하여 LINE 봇을 만드는 방법을 설명합니다.

## 시작하기 전에 

봇 설정과 개발을 시작하기 전에 다음을 준비해야 합니다.

- 봇 전용 [Messaging API 채널](https://developers.line.biz/en/docs/messaging-api/getting-started/)
- 봇을 호스팅할 서버

## LINE Developers Console 설정 

[채널 액세스 토큰](https://developers.line.biz/en/docs/messaging-api/building-bot/#issue-a-channel-access-token)을 준비하고 [웹훅 URL](https://developers.line.biz/en/docs/messaging-api/building-bot/#setting-webhook-url)을 설정하세요. 토큰은 봇이 Messaging API를 호출하는 데 필요합니다. 웹훅 URL은 봇이 LINE Platform으로부터 웹훅 페이로드를 받는 데 필요합니다. 설정을 마친 후 [LINE 공식 계정을 친구로 추가](https://developers.line.biz/en/docs/messaging-api/building-bot/#add-your-line-official-account-as-friend)하여 [확인](https://developers.line.biz/en/docs/messaging-api/building-bot/#confirm-webhook-behavior)하세요.

### 채널 액세스 토큰 준비 

아직 채널 액세스 토큰이 없다면 발급하세요. 채널 액세스 토큰은 Messaging API에 사용되는 액세스 토큰입니다. 다음 중 어떤 토큰이든 발급할 수 있습니다.

- [사용자가 만료 기간을 지정하는 채널 액세스 토큰(채널 액세스 토큰 v2.1)](https://developers.line.biz/en/docs/basics/channel-access-token/#user-specified-expiration) (권장)
- [무상태 채널 액세스 토큰](https://developers.line.biz/en/docs/basics/channel-access-token/#stateless-channel-access-token)
- [단기 채널 액세스 토큰](https://developers.line.biz/en/docs/basics/channel-access-token/#short-lived-channel-access-token)
- [장기 채널 액세스 토큰](https://developers.line.biz/en/docs/basics/channel-access-token/#long-lived-channel-access-token)

### 웹훅 URL 설정 

웹훅 URL은 LINE Platform이 웹훅 페이로드를 보내는 봇 서버의 엔드포인트입니다. 웹훅 URL에는 봇 서버 엔드포인트를 하나만 설정할 수 있습니다.

다음 단계에 따라 웹훅 URL을 설정하세요.

1. [LINE Developers Console](https://developers.line.biz/console/)에 로그인하고 Messaging API 채널이 속한 제공자를 클릭합니다.
1. Messaging API 채널을 클릭합니다.
1. **Messaging API** 탭을 클릭합니다.
1. **Webhook URL**의 **Edit**를 클릭합니다. LINE Platform이 이벤트를 보낼 대상인 웹훅 URL을 입력한 다음 **Update**를 클릭합니다.

   웹훅 URL은 HTTPS를 사용해야 하며, 일반 웹 브라우저에서 널리 신뢰받는 인증 기관이 발급한 SSL/TLS 인증서를 사용해야 합니다. 자체 서명 인증서는 허용되지 않습니다. SSL/TLS 설정에 문제가 있다면 SSL/TLS 인증서 체인이 완전한지, 그리고 중간 인증서가 서버에 올바르게 설치되어 있는지 확인하세요.

1. **Verify**를 클릭합니다. 웹훅 URL이 요청을 수락하면 **Success**가 표시됩니다.
1. **Use webhook**을 활성화합니다.

![](https://developers.line.biz/media/messaging-api/build-bot/webhook-url-example-com.png)

### LINE 공식 계정을 친구로 추가 

나중에 테스트할 수 있도록, Messaging API 채널과 연결된 LINE 공식 계정을 본인의 LINE 계정에 친구로 추가하세요. 가장 쉬운 방법은 [LINE Developers Console](https://developers.line.biz/console/)의 **Messaging API** 탭에 있는 QR 코드를 스캔하는 것입니다.

### 장기 채널 액세스 토큰 사용 시 API 호출 대상 제한 (선택 사항) 

장기 채널 액세스 토큰을 사용하는 경우, IP 주소로 LINE Platform API를 호출할 수 있는 서버를 제한할 수 있습니다.

IP 주소를 등록하려면 [LINE Developers Console](https://developers.line.biz/console/)에서 채널 설정을 열고 **Security** 탭으로 이동하세요. IP 주소를 하나씩 등록하거나, CIDR(Classless Inter-Domain Routing) 표기법을 사용하여 네트워크 주소를 등록할 수 있습니다.

Messaging API에서는 [사용자가 만료 기간을 지정하는 채널 액세스 토큰(채널 액세스 토큰 v2.1)](https://developers.line.biz/en/docs/basics/channel-access-token/#user-specified-expiration)을 사용할 것을 권장합니다.

![](https://developers.line.biz/media/messaging-api/build-bot/security-settings-input-en.webp)

## 웹훅이 작동하는지 확인 

사용자가 LINE 공식 계정을 친구로 추가하거나 LINE 공식 계정에 메시지를 보내면, LINE Platform이 봇 서버로 HTTP POST 요청을 보냅니다. 이 요청의 대상은 [LINE Developers Console](https://developers.line.biz/console/)의 **Messaging API** 탭에 등록한 **Webhook URL**입니다. 요청에는 헤더에 서명이 포함된 웹훅 이벤트 오브젝트가 담겨 있습니다.

이 섹션에서는 서버가 [웹훅 이벤트를 받을 수 있는지](https://developers.line.biz/en/docs/messaging-api/building-bot/#receive-webhook-events) 확인하는 방법을 설명합니다.

### 웹훅 이벤트 수신 

봇 서버가 웹훅 이벤트를 받는지 확인하려면, 먼저 [앞선 단계](https://developers.line.biz/en/docs/messaging-api/building-bot/#set-up-bot-on-line-developers-console)에서 추가한 LINE 공식 계정을 차단하세요. 그다음 서버 로그에서 봇 서버가 LINE Platform으로부터 [언팔로우 이벤트](https://developers.line.biz/en/reference/messaging-api/#unfollow-event)를 받았는지 확인하세요. 다음은 로그의 예시입니다.

```sh
2017-07-21T09:18:46.755256+00:00 app[web.1]: 2017-07-21 09:18:46.737  INFO 4 --- [io-13386-exec-2] c.e.bot.spring.KitchenSinkController     : unfollowed this bot: UnfollowEvent(source=UserSource(userId=Uxxxxxxxxxx...), timestamp=2017-07-21T09:18:46.031Z)
```

이와 비슷한 로그가 확인되면 봇 서버가 LINE Platform으로부터 웹훅 이벤트를 받은 것입니다. 로그를 확인한 후에는 LINE 공식 계정의 차단을 해제하는 것을 잊지 마세요.

## LINE Official Account Manager 설정 

[LINE Official Account Manager](https://manager.line.biz/)는 LINE 공식 계정을 관리하는 도구입니다. Messaging API가 제공하는 기능 외에도 [비즈니스 프로필을 커스터마이즈](https://developers.line.biz/en/docs/messaging-api/building-bot/#customize-profile)하는 등 다양한 방법으로 사용자 경험을 개선할 수 있습니다.

LINE 공식 계정에서 사용할 수 있는 기능의 전체 목록은 [LY for Business](https://www.lycbiz.jp/en/)를 참고하세요.

<!-- tip start -->

**인사 메시지와 자동 응답 메시지**

채널의 **Messaging API Settings** 탭에서 **Greeting messages**와 **Auto-reply messages** 설정이 **Enabled**로 되어 있으면, 사용자가 LINE 공식 계정을 친구로 추가하거나 메시지를 보낼 때 LINE 공식 계정이 자동으로 응답합니다. 채널을 만들 때 **Greeting Message**와 **Auto-reply messages**의 기본 설정은 **Enabled**입니다.

응답 처리를 Messaging API로 처리하고 있어서 인사 메시지와 응답 메시지가 자동으로 전송되지 않기를 원한다면, [LINE Official Account Manager](https://manager.line.biz/)에서 **Greeting Messages**와 **Auto-reply messages** 설정을 **Disabled**로 바꾸세요.

인사 메시지는 사용자가 LINE 공식 계정을 친구로 추가할 때 응답하는 용도로, 그 밖의 응답은 Messaging API를 사용하는 방식으로 함께 사용할 수도 있습니다. 다만 자동 응답이 인사 메시지에서 온 것인지, 응답 메시지에서 온 것인지, 아니면 Messaging API를 사용하는 봇에서 온 것인지 구분하기 어려울 수 있습니다. 혼동을 피하려면 특히 LINE 봇을 처음 만드는 경우 **Greeting messages**와 **Auto-reply messages** 설정을 **Disabled**로 하는 것을 권장합니다.

<!-- tip end -->

### 비즈니스 프로필 커스터마이즈 

비즈니스 프로필은 LINE 공식 계정의 기본 정보를 입력하고 설정하는 곳으로, 사용자에게 표시됩니다. 프로필 사진, 커버 사진, 버튼, 플러그인을 커스터마이즈할 수 있습니다. 프로필을 설정하려면 LINE Official Account Manager로 이동하세요.

프로필 커스터마이즈에 대한 자세한 내용은 LINE for Business의 [프로필](https://www.lycbiz.com/jp/manual/OfficialAccountManager/profile/)(일본어만 제공)을 참고하세요.

### 인사 메시지 설정 (선택 사항) 

사용자가 LINE 공식 계정을 처음으로 친구 추가할 때 인사 메시지를 보낼 수 있습니다. 인사 메시지를 설정하려면 [LINE Developers Console](https://developers.line.biz/console/)에서 채널 설정을 열고 **Messaging API** 탭을 클릭하세요. **Greeting messages** 아래의 **Edit**를 클릭합니다. LINE Official Account Manager가 열리면 거기서 인사 메시지를 설정하세요. 또는 [친구 추가 이벤트](https://developers.line.biz/en/reference/messaging-api/#follow-event)를 받은 후 프로그래밍 방식으로 사용자에게 응답할 수도 있습니다.

### 자동 응답 메시지 설정 (선택 사항) 

사용자가 LINE 공식 계정에 메시지를 보낼 때 자동 응답 메시지를 보낼 수 있습니다. 자동 응답 메시지를 설정하려면 [LINE Developers Console](https://developers.line.biz/console/)에서 채널 설정을 열고 **Messaging API** 탭을 클릭하세요. **Auto-reply messages** 아래의 **Edit**를 클릭합니다. LINE Official Account Manager가 열리면 거기서 자동 응답 메시지를 설정하세요. 다만 Messaging API를 사용하면 봇이 여러 웹훅 이벤트에 따라 다양한 방식으로 응답하도록 프로그래밍할 수 있으므로 더 많은 기능을 구현할 수 있습니다.

## 다음 단계 

봇을 설정하면 LINE 공식 계정이 사용자의 메시지를 받고 사용자에게 메시지를 보낼 수 있습니다. 리치 메뉴와 퀵 리플라이를 사용하면 개인화된 경험을 만들 수도 있습니다. Messaging API에서 사용할 수 있는 기능에 대한 자세한 내용은 [Messaging API 문서](https://developers.line.biz/en/docs/messaging-api/)를 참고하세요.
