# Messaging API 시작하기

Messaging API를 사용하려면 채널이 있어야 합니다. 채널을 만들려면 [LINE 공식 계정(LINE Official Account)](https://developers.line.biz/en/glossary/#line-official-account)을 만들고 해당 LINE 공식 계정에서 Messaging API 사용을 활성화하세요.

이 페이지에서는 다음 두 단계로 Messaging API 채널을 만드는 방법을 설명합니다.

1. [LINE 공식 계정 만들기](https://developers.line.biz/en/docs/messaging-api/getting-started/#create-oa)
1. [LINE 공식 계정에서 Messaging API 활성화하기](https://developers.line.biz/en/docs/messaging-api/getting-started/#using-oa-manager)

이미 존재하는 LINE 공식 계정에 Messaging API를 활성화하려면 2단계를 참고하세요.

<!-- tip start -->

**채널이란 무엇인가요?**

**채널(channel)**은 프로바이더가 서비스에서 Messaging API, LINE Login 등 LINE 플랫폼의 기능을 사용하기 위한 통신 경로입니다. LINE 플랫폼을 사용하려면 채널이 있어야 합니다. 그다음 액세스 토큰과 같은 채널 정보를 사용하여 Messaging API의 기능을 사용할 수 있습니다.

![채널](https://developers.line.biz/media/messaging-api/getting-started/channel.png)

<!-- tip end -->

## 1. LINE 공식 계정 만들기 

Messaging API를 사용하려면 먼저 LINE 공식 계정을 만들어야 합니다. 다음 단계에 따라 LINE 공식 계정을 만들 수 있습니다.

- [1-1단계. 비즈니스 ID 등록](https://developers.line.biz/en/docs/messaging-api/getting-started/#create-oa-business-id)
- [1-2단계. 신청서 작성](https://developers.line.biz/en/docs/messaging-api/getting-started/#create-oa-entry-form)
- [1-3단계. LINE 공식 계정 확인](https://developers.line.biz/en/docs/messaging-api/getting-started/#create-oa-check)

### 1-1단계. 비즈니스 ID 등록 

LINE 공식 계정을 만들려면 [비즈니스 ID](https://account.line.biz/signup?redirectUri=https://entry.line.biz/form/entry/unverified)를 등록해야 합니다. LINE 계정 또는 이메일 주소로 비즈니스 ID를 등록할 수 있습니다.

![비즈니스 ID 등록 화면](https://developers.line.biz/media/messaging-api/getting-started/sign-up-business-id-en.png)

### 1-2단계. 신청서 작성 

비즈니스 ID를 등록하면 LINE 공식 계정 [신청서](https://entry.line.biz/form/entry/unverified)가 나타납니다. 이 신청서에 필요한 정보를 입력하세요. 신청서를 모두 작성하면 LINE 공식 계정이 만들어집니다.

![LINE 공식 계정 신청서](https://developers.line.biz/media/messaging-api/getting-started/oa-entry-form-en.webp)

### 1-3단계. LINE 공식 계정 확인 

위 단계를 마치면 LINE 공식 계정이 만들어집니다. 만들어진 LINE 공식 계정은 [LINE 공식 계정 관리자(LINE Official Account Manager)](https://manager.line.biz/)에서 확인할 수 있습니다.

![LINE 공식 계정 관리자의 계정 목록](https://developers.line.biz/media/messaging-api/getting-started/oa-manager-list-en.webp)

LINE 공식 계정이 만들어졌는지 확인했다면 2단계를 진행하세요.

## 2. LINE 공식 계정에서 Messaging API 활성화하기 

만든 LINE 공식 계정에서 Messaging API 사용을 활성화하면 Messaging API 채널이 만들어집니다. [LINE 공식 계정 관리자](https://manager.line.biz/)에서 다음 단계에 따라 Messaging API 사용을 활성화하세요.

- [2-1단계. Messaging API 사용 활성화](https://developers.line.biz/en/docs/messaging-api/getting-started/#step-one-enable-use-of-messaging-api)
- [2-2단계. LINE Developers Console에 로그인](https://developers.line.biz/en/docs/messaging-api/getting-started/#step-two-log-in-to-line-developers-console)
- [2-3단계. 채널 확인](https://developers.line.biz/en/docs/messaging-api/getting-started/#step-three-confirm-channel)

### 2-1단계. Messaging API 사용 활성화 

[LINE 공식 계정 관리자](https://manager.line.biz/)에서 Messaging API 사용을 활성화하면 Messaging API 채널이 만들어집니다. 자세한 내용은 LINE for Business의 [Messaging API](https://www.lycbiz.com/jp/manual/OfficialAccountManager/account-settings_messaging_api/)(일본어만 제공)를 참고하세요.

LINE 공식 계정 관리자에 로그인하는 데 사용한 계정이 [LINE Developers Console](https://developers.line.biz/console/)에서 한 번도 사용된 적이 없다면, 개발자 정보를 등록하는 화면이 나타납니다. 이름과 이메일을 입력하여 개발자 계정을 만드세요.

![개발자 등록 화면](https://developers.line.biz/media/messaging-api/getting-started/developer-registration-en.png)

다음으로 LINE 공식 계정을 관리할 프로바이더를 선택합니다. LINE 공식 계정을 LINE Login 채널과 같은 기존 채널과 연동할 계획이라면, 연동할 채널이 속한 프로바이더를 선택하세요.

<!-- note start -->

**프로바이더를 선택할 때 주의하세요**

- 기존 프로바이더를 선택하려면 사용 중인 계정이 해당 프로바이더의 Admin 역할을 가지고 있어야 합니다. Admin 역할이 없다면 프로바이더가 프로바이더 선택 화면에 표시되지 않습니다.
- LINE 공식 계정을 관리할 프로바이더를 한 번 지정하면, 그 프로바이더를 변경하거나 지정을 해제할 수 없습니다.

<!-- note end -->

<!-- warning start -->

**프로바이더를 선택할 때 특별한 주의가 필요한 경우**

예를 들어 다음과 같은 경우에는 특별한 주의가 필요합니다.

- 채널과 프로바이더를 개인 또는 회사가 관리하는 경우
- 관련 없는 서비스나 회사의 채널을 하나의 프로바이더 아래에 만드는 경우
- 채널 관리 도구 등을 운영하는 서비스(회사)가 관리하는 프로바이더 아래에 채널을 만드는 경우

이러한 경우에는 나중에 채널을 프로바이더 간에 옮길 수 없고, 사용자가 프로바이더마다 다른 사용자 ID를 부여받게 되어 문제가 생길 수 있습니다. 위험을 충분히 검토한 후 적절한 프로바이더를 선택하세요.

<!-- warning end -->

### 2-2단계. LINE Developers Console에 로그인 

만들어진 Messaging API 채널은 LINE Developers Console에서 설정할 수 있습니다. LINE 공식 계정 관리자에 로그인할 때 사용한 계정으로 [LINE Developers Console](https://developers.line.biz/console/)에 로그인하세요.

![로그인 대화상자](https://developers.line.biz/media/messaging-api/getting-started/login-dialog.png)

### 2-3단계. 채널 확인 

[2-1단계](https://developers.line.biz/en/docs/messaging-api/getting-started/#step-one-enable-use-of-messaging-api)에서 선택한 프로바이더를 선택하세요. 해당 프로바이더에 채널이 만들어졌는지 확인하세요.

![콘솔 홈 화면](https://developers.line.biz/media/messaging-api/getting-started/console-home-en.png)

## [지원 종료] LINE Developers Console에서 채널 만들기 

더 이상 LINE Developers Console에서 Messaging API 채널을 직접 만들 수 없습니다. 자세한 내용은 2024년 9월 4일 뉴스 [2024년 9월 4일부터 LINE Developers Console에서 Messaging API 채널을 직접 만들 수 없습니다](https://developers.line.biz/en/news/2024/09/04/no-longer-possible-to-create-messaging-api-channels-from-console/)를 참고하세요.

## 다음 단계 

이제 채널이 준비되었으므로 Messaging API를 사용할 준비가 되었습니다. 다음 페이지에서는 봇을 만들기 위해 채널을 설정합니다.

- [봇 만들기](https://developers.line.biz/en/docs/messaging-api/building-bot/)
