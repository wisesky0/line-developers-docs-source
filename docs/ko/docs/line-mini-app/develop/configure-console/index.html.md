# LINE MINI App 사용자에게 표시되는 설정

[LINE Developers Console](https://developers.line.biz/console/)에 등록한 일부 정보가 LINE MINI App 사용자에게 표시됩니다.

## 프로바이더 설정 

LINE MINI App 채널 프로바이더의 다음 설정 정보가 사용자에게 표시됩니다.

### **Settings** 탭 

| 항목 | 표시 |
| --- | --- |
| **Provider name** | <ul><li>[검증 화면](https://developers.line.biz/en/docs/line-mini-app/develop/configure-console/#verification-screen)</li><li>[채널 동의 화면](https://developers.line.biz/en/docs/line-mini-app/develop/configure-console/#consent-screen-settings)</li></ul> |

## 채널 설정 

LINE MINI App 채널 설정의 다음 정보가 사용자에게 표시됩니다.

### **Basic settings** 탭 

| 항목 | 표시 화면 |
| --- | --- |
| **Channel icon** | <ul><li>[액션 버튼](https://developers.line.biz/en/docs/line-mini-app/develop/configure-console/#built-in-share-settings)에서 공유할 때</li><li>[멀티 탭 보기](https://developers.line.biz/en/docs/line-mini-app/develop/configure-console/#multi-tab-view-settings)</li><li>[검증 화면](https://developers.line.biz/en/docs/line-mini-app/develop/configure-console/#verification-screen)</li><li>[채널 동의 화면](https://developers.line.biz/en/docs/line-mini-app/develop/configure-console/#consent-screen-settings)</li><li>[서비스 메시지의 푸터 영역](https://developers.line.biz/en/docs/line-mini-app/develop/configure-console/#footer-section-of-service-message)</li><li>[바로가기 추가 화면](https://developers.line.biz/en/docs/line-mini-app/develop/configure-console/#add-shortcut-screen)</li></ul><p>사용자는 이 이미지를 LINE MINI App의 채널 아이콘으로 인식합니다.</p> |
| **Channel name** | <ul><li>[인증된 MINI App 헤더](https://developers.line.biz/en/docs/line-mini-app/discover/ui-components/#header)</li><li>[액션 버튼](https://developers.line.biz/en/docs/line-mini-app/develop/configure-console/#built-in-share-settings)에서 공유할 때</li><li>[멀티 탭 보기](https://developers.line.biz/en/docs/line-mini-app/develop/configure-console/#multi-tab-view-settings)</li><li>[검증 화면](https://developers.line.biz/en/docs/line-mini-app/develop/configure-console/#verification-screen)</li><li>[채널 동의 화면](https://developers.line.biz/en/docs/line-mini-app/develop/configure-console/#consent-screen-settings)</li><li>[서비스 메시지의 푸터 영역](https://developers.line.biz/en/docs/line-mini-app/develop/configure-console/#footer-section-of-service-message)</li><li>[바로가기 추가 화면](https://developers.line.biz/en/docs/line-mini-app/develop/configure-console/#add-shortcut-screen)</li></ul><p>사용자는 이 텍스트를 LINE MINI App 이름으로 인식합니다. **Channel name**은 **Web app settings** 탭의 **LIFF app name**에 복사됩니다.</p><p>영어로 입력하세요. 일본어 등 다른 언어로 채널 이름을 입력하려면 [채널 동의 화면의 다국어 지원](https://developers.line.biz/en/docs/line-mini-app/develop/configure-console/#localization)을 참고하세요.</p> |
| **Channel description** | <ul><li>[검증 화면](https://developers.line.biz/en/docs/line-mini-app/develop/configure-console/#verification-screen)</li><li>[채널 동의 화면](https://developers.line.biz/en/docs/line-mini-app/develop/configure-console/#consent-screen-settings)</li></ul>영어로 입력하세요. 일본어 등 다른 언어로 채널 설명을 입력하려면 [채널 동의 화면의 다국어 지원](https://developers.line.biz/en/docs/line-mini-app/develop/configure-console/#localization)을 참고하세요. |
| **Privacy policy URL** | [채널 동의 화면](https://developers.line.biz/en/docs/line-mini-app/develop/configure-console/#consent-screen-settings) |
| **Localization (multi-language support)** | [채널 동의 화면](https://developers.line.biz/en/docs/line-mini-app/develop/configure-console/#consent-screen-settings) |
| **Linked LINE Official Account** | <ul><li>[검증 화면](https://developers.line.biz/en/docs/line-mini-app/develop/configure-console/#verification-screen)</li><li>[채널 동의 화면](https://developers.line.biz/en/docs/line-mini-app/develop/configure-console/#consent-screen-settings)</li></ul> |

### **Web app settings** 탭 

| 항목            | 표시 화면                              |
| ---------------- | ------------------------------------------- |
| **Endpoint URL** | [바로가기 추가 화면](https://developers.line.biz/en/docs/line-mini-app/develop/configure-console/#add-shortcut-screen) |

## 액션 버튼 

사용자가 [액션 버튼](https://developers.line.biz/en/docs/line-mini-app/discover/builtin-features/#action-button)으로 LINE MINI App 페이지를 공유하면, [LINE Developers Console](https://developers.line.biz/console/)에 등록된 다음 정보가 페이지를 공유한 채팅방에 표시됩니다.

![Action button](https://developers.line.biz/media/line-mini-app/mini_share_builtin_share.webp)

| 정보 | 설정 |
| ------------------ | ----------------------------------------- |
| LINE MINI App 이름 | **Basic settings** 탭 > **Channel name** |
| LINE MINI App 아이콘 | **Basic settings** 탭 > **Channel icon** |

## 멀티 탭 보기 

사용자가 [액션 버튼](https://developers.line.biz/en/docs/line-mini-app/discover/builtin-features/#action-button)을 탭하면, [LINE Developers Console](https://developers.line.biz/console/)에 등록된 다음 정보가 [멀티 탭 보기](https://developers.line.biz/en/docs/line-mini-app/discover/builtin-features/#multi-tab-view)에 표시됩니다.

![](https://developers.line.biz/media/line-mini-app/discover/mini-multi-tab-view-en.webp)

| 정보 | 설정 |
| ------------------ | ----------------------------------------- |
| LINE MINI App 이름 | **Basic settings** 탭 > **Channel name** |
| LINE MINI App 아이콘 | **Basic settings** 탭 > **Channel icon** |

## 검증 화면 

[LINE Developers Console](https://developers.line.biz/console/)에 등록된 다음 정보가 [검증 화면](https://developers.line.biz/en/docs/line-mini-app/develop/channel-consent-simplification/#request-permissions-other-than-openid)에 표시됩니다.

![](https://developers.line.biz/media/line-mini-app/line-mini-app-playground-verification-screen-en.webp)

| 정보 | 설정 |
| --- | --- |
| LINE MINI App 아이콘 | **Basic settings** 탭 > **Channel icon** |
| LINE MINI App 이름 | **Basic settings** 탭 > **Channel name** |
| 프로바이더 이름 | LINE MINI App 채널이 속한 프로바이더의 **Settings** 탭 > **Provider name** |
| 설명 | **Basic settings** 탭 > **Channel description** |
| LINE 공식 계정 | **Basic settings** 탭 > **Linked LINE Official Account** |

## 채널 동의 화면 

[LINE Developers Console](https://developers.line.biz/console/)에 등록된 다음 정보가 [채널 동의 화면](https://developers.line.biz/en/docs/line-mini-app/develop/channel-consent-simplification/#authorization-flow-disabled)에 표시됩니다.

![Channel consent screen](https://developers.line.biz/media/line-mini-app/mini-permission-request-en.webp)

| 정보 | 설정 |
| --- | --- |
| LINE MINI App 아이콘 | **Basic settings** 탭 > **Channel icon** |
| LINE MINI App 이름 | **Basic settings** 탭 > **Channel name** |
| 프로바이더 이름 | LINE MINI App 채널이 속한 프로바이더의 **Settings** 탭 > **Provider name** |
| 설명 | **Basic settings** 탭 > **Channel description** |
| 개인정보 처리방침 URL | **Basic settings** 탭 > **Privacy policy URL** |
| LINE 공식 계정 | **Basic settings** 탭 > **Linked LINE Official Account** |

LINE MINI App이 인증된 MINI App이면 LINE MINI App 이름 옆에 인증 배지가 표시됩니다. LINE MINI App의 프로바이더가 인증된 프로바이더가 아니면 "LY Corporation hasn't verified this service provider."라는 안내 문구가 표시됩니다.

### 채널 동의 화면의 다국어 지원 

채널 동의 화면에 표시되는 LINE MINI App 이름과 설명은 사용자의 LINE 설정에 지정된 언어로 표시됩니다. 예를 들어 사용자의 LINE 언어가 일본어로 설정되어 있다면 일본어 채널 이름과 채널 설명이 표시됩니다.

| 정보 | 설정 |
| --- | --- |
| LINE MINI App 이름 | **Channel basic settings** 탭 > **Localization (multi-language support)** > **Channel name** |
| 설명 | **Basic settings** 탭 > **Localization (multi-language support)** > **Channel description** |

<!-- note start -->

**참고**

- LINE MINI App을 제공하는 국가에서 사용되는 주요 언어로 반드시 현지화하세요.
- **Localization (multi-language support)**를 활성화하여 사용자의 LINE 설정 언어를 지원하지 않는 한, **Channel name** 및 **Channel description**과 관련된 모든 정보는 영어로 표시됩니다.

<!-- note end -->

## 서비스 메시지의 푸터 영역 

서비스 메시지의 푸터 영역에는 [LINE Developers Console](https://developers.line.biz/console/)에 등록된 다음 정보가 사용됩니다. 서비스 메시지에 대한 자세한 내용은 [서비스 메시지 보내기](https://developers.line.biz/en/docs/line-mini-app/develop/service-messages/)를 참고하세요.

![Service messages](https://developers.line.biz/media/line-mini-app/mini_service_notifier.webp)

| 정보 | 설정 |
| ------------------ | ----------------------------------------- |
| LINE MINI App 이름 | **Basic settings** 탭 > **Channel name** |
| 이미지 | **Basic settings** 탭 > **Channel icon** |

## 바로가기 추가 화면 

[LINE Developers Console](https://developers.line.biz/console/)에 등록된 다음 정보가 바로가기 추가 화면에 표시됩니다. 바로가기 추가 화면에 대한 자세한 내용은 [LINE MINI App의 바로가기를 사용자 기기의 홈 화면에 추가하기](https://developers.line.biz/en/docs/line-mini-app/develop/add-to-home-screen/)를 참고하세요.

![](https://developers.line.biz/media/line-mini-app/develop/add-to-home-screen/add-shortcut-screen-ios-en.webp)

| 정보 | 설정 |
| -------------------------- | ------------------------------------------- |
| LINE MINI App 이름 | **Basic settings** 탭 > **Channel name** |
| LINE MINI App 아이콘 | **Basic settings** 탭 > **Channel icon** |
| LINE MINI App 엔드포인트 URL | **Web app settings** 탭 > **Endpoint URL** |
