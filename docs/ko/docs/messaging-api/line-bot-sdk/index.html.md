# LINE Messaging API SDK

LINE Messaging API SDK에는 Messaging API로 봇 앱 개발을 쉽게 시작할 수 있도록 라이브러리, 도구, 샘플이 포함되어 있습니다. [공식 SDK](https://developers.line.biz/en/docs/messaging-api/line-bot-sdk/#official-sdks)와 [커뮤니티 SDK](https://developers.line.biz/en/docs/messaging-api/line-bot-sdk/#community-sdks) 모두 오픈 소스로 공개되어 있으며, 다양한 프로그래밍 언어로 제공됩니다.

### 공식 SDK 

공식 SDK는 다음 언어를 지원합니다.

- [Java](https://github.com/line/line-bot-sdk-java) ([릴리스 노트](https://github.com/line/line-bot-sdk-java/releases))
- [PHP](https://github.com/line/line-bot-sdk-php) ([릴리스 노트](https://github.com/line/line-bot-sdk-php/releases))
- [Python](https://github.com/line/line-bot-sdk-python) ([릴리스 노트](https://github.com/line/line-bot-sdk-python/releases))
- [Node.js](https://github.com/line/line-bot-sdk-nodejs) ([릴리스 노트](https://github.com/line/line-bot-sdk-nodejs/releases))
- [Go](https://github.com/line/line-bot-sdk-go) ([릴리스 노트](https://github.com/line/line-bot-sdk-go/releases))
- [Ruby](https://github.com/line/line-bot-sdk-ruby) ([릴리스 노트](https://github.com/line/line-bot-sdk-ruby/releases))

#### 보관 

다음 언어의 공식 SDK는 더 이상 업데이트되지 않습니다. 각 SDK는 계속 사용할 수 있지만, 새로운 기능 추가, 버그 수정, 보안 개선 등 추가 변경은 이루어지지 않습니다.

- [Perl](https://github.com/line/line-bot-sdk-perl) ([릴리스 노트](https://github.com/line/line-bot-sdk-perl/releases))

### LINE OpenAPI 

LINE OpenAPI는 Messaging API, LIFF 서버 API 등 LINE 플랫폼이 제공하는 API 인터페이스 모음으로, OpenAPI 사양에 따라 정의되어 있습니다. [OpenAPI Generator](https://github.com/OpenAPITools/openapi-generator) 및 [Swagger Codegen](https://github.com/swagger-api/swagger-codegen)과 같은 코드 생성기를 사용하면, SDK가 제공되지 않는 프로그래밍 언어에서도 LINE 플랫폼의 기능을 쉽게 사용할 수 있습니다.

- [LINE OpenAPI](https://github.com/line/line-openapi)

### 커뮤니티 SDK 및 라이브러리 

커뮤니티 SDK 및 라이브러리는 제3자 개발자가 개발하며, 일반적인 오픈 소스 라이선스로 제공됩니다. LY Corporation은 커뮤니티 SDK를 제한적으로 검토하지만, 공식 지원이나 보증은 제공하지 않습니다. 각 커뮤니티 SDK의 라이선스와 면책 조항을 확인하세요.

| 라이브러리 | 언어/<br />기술 | 설명 | 게시자 | 라이선스 | 스타 |
| --- | --- | --- | --- | --- | --- |
| [fireliff-cli](https://github.com/micksatana/fireliff-cli) | N/A | LIFF용 CLI | [intocode](https://github.com/intocode-dev) | MIT | [![GitHub stars](https://img.shields.io/github/stars/intocode-io/fireliff-cli.svg){:zoom="false" .mb-0-important .w-max-inherit}](https://github.com/micksatana/fireliff-cli) |
| [LINEChannelConnector](https://github.com/kenakamu/LINEChannelConnector) | N/A | BotBuilder용 LINE 채널 커넥터 | [kenakamu](https://github.com/kenakamu) | MIT | [![GitHub stars](https://img.shields.io/github/stars/kenakamu/LINEChannelConnector.svg){:zoom="false" .mb-0-important .w-max-inherit}](https://github.com/kenakamu/LINEChannelConnector) |
| [line_bot_framework](https://github.com/shidec/line_bot_framework) | PHP | 봇 개발용 프레임워크 | [shidec](https://github.com/shidec) | MIT | [![GitHub stars](https://img.shields.io/github/stars/shidec/line_bot_framework.svg){:zoom="false" .mb-0-important .w-max-inherit}](https://github.com/shidec/line_bot_framework) |
| [line-chatbot-boilerplate](https://github.com/mgilangjanuar/line-chatbot-boilerplate) | Python | 봇 개발용 템플릿 | [mgilangjanuar](https://github.com/mgilangjanuar) | MIT | [![GitHub stars](https://img.shields.io/github/stars/mgilangjanuar/line-chatbot-boilerplate.svg){:zoom="false" .mb-0-important .w-max-inherit}](https://github.com/mgilangjanuar/line-chatbot-boilerplate) |
| [LINESimulator](https://github.com/kenakamu/linesimulator) | N/A | 봇 디버깅용 LINE 시뮬레이터 | [kenakamu](https://github.com/kenakamu) | MIT | [![GitHub stars](https://img.shields.io/github/stars/kenakamu/linesimulator.svg){:zoom="false" .mb-0-important .w-max-inherit}](https://github.com/kenakamu/linesimulator) |
| [line-richmenus-manager](https://github.com/kenakamu/line-richmenus-manager) | N/A | 리치 메뉴를 만들고 관리하는 GUI 도구 | [kenakamu](https://github.com/kenakamu) | MIT | [![GitHub stars](https://img.shields.io/github/stars/kenakamu/line-richmenus-manager.svg){:zoom="false" .mb-0-important .w-max-inherit}](https://github.com/kenakamu/line-richmenus-manager) |
| [linebot](https://github.com/boybundit/linebot) | Node.js | Node.js용 LINE Messaging API SDK | [boybundit](https://github.com/boybundit) | MIT | [![GitHub stars](https://img.shields.io/github/stars/boybundit/linebot.svg){:zoom="false" .mb-0-important .w-max-inherit}](https://github.com/boybundit/linebot) |
| [botbuilder-linebot-connector](https://github.com/Wolke/botbuilder-linebot-connector) | Node.js | LINE Messaging API용 Microsoft Bot Framework v3 커넥터 | [Wolke](https://github.com/Wolke) | MIT | [![GitHub stars](https://img.shields.io/github/stars/Wolke/botbuilder-linebot-connector.svg){:zoom="false" .mb-0-important .w-max-inherit}](https://github.com/Wolke/botbuilder-linebot-connector) |
| [bottender](https://github.com/Yoctol/bottender) | Node.js | 여러 플랫폼에서 실행할 수 있는 봇을 빠르게 만들 수 있는 프레임워크 | [Yoctol](https://github.com/Yoctol) | MIT | [![GitHub stars](https://img.shields.io/github/stars/Yoctol/bottender.svg){:zoom="false" .mb-0-important .w-max-inherit}](https://github.com/Yoctol/bottender) |
| [messaging-api-line](https://github.com/bottenderjs/messaging-apis/tree/master/packages/messaging-api-line) | Node.js | Node.js용 LINE Messaging API SDK | [Yoctol](https://github.com/Yoctol) | MIT | [![GitHub stars](https://img.shields.io/github/stars/Yoctol/messaging-apis.svg){:zoom="false" .mb-0-important .w-max-inherit}](https://github.com/bottenderjs/messaging-apis/tree/master/packages/messaging-api-line) |
| [line-bot-sdk-dotnet](https://github.com/dlemstra/line-bot-sdk-dotnet) | C# | .NET Standard용 LINE Messaging API SDK | [dlemstra](https://github.com/dlemstra) | Apache-2.0 | [![GitHub stars](https://img.shields.io/github/stars/dlemstra/line-bot-sdk-dotnet.svg){:zoom="false" .mb-0-important .w-max-inherit}](https://github.com/dlemstra/line-bot-sdk-dotnet) |
| [LineMessagingApi](https://github.com/pierre3/LineMessagingApi) | C# | C#용 LINE Messaging API SDK | [pierre3](https://github.com/pierre3) | MIT | [![GitHub stars](https://img.shields.io/github/stars/pierre3/LineMessagingApi.svg){:zoom="false" .mb-0-important .w-max-inherit}](https://github.com/pierre3/LineMessagingApi) |
| [line-bot-sdk](https://github.com/moleike/line-bot-sdk) | Haskell | Haskell용 LINE Messaging API SDK | [moleike](https://github.com/moleike) | BSD | [![GitHub stars](https://img.shields.io/github/stars/moleike/line-bot-sdk.svg){:zoom="false" .mb-0-important .w-max-inherit}](https://github.com/moleike/line-bot-sdk) |
