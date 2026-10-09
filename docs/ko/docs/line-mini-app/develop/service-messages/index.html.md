# 서비스 메시지 보내기

<!-- tip start -->

**이 기능은 인증된 MINI App에서만 사용할 수 있습니다**

이 기능은 인증된 MINI App에서만 사용할 수 있습니다. 인증되지 않은 MINI App은 Developing 내부 채널에서 기능을 테스트할 수 있지만, Published 내부 채널에서는 사용할 수 없습니다.

<!-- tip end -->

서비스 메시지(Service messages)는 LINE MINI App에서 특정 사용자 행동에 대한 응답이나 확인으로, 사용자가 알아야 할 정보를 알려 줄 수 있는 LINE MINI App의 기능입니다. 예를 들어 사용자가 LINE MINI App에서 식당이나 숙박 시설을 예약하면, 한 번의 예약 행동에 대해 예약 완료 메시지나 전날 리마인더 같은 서비스 메시지를 최대 5개까지 사용자에게 보낼 수 있습니다.

![LINE MINI App Notice](https://developers.line.biz/media/line-mini-app/mini-service-messages-en.webp)

<!-- note start -->

**서비스 메시지를 보내는 조건**

서비스 메시지는 LINE MINI App에서 사용자 행동에 대한 확인이나 응답으로만 보낼 수 있습니다. 할인, 쇼핑 리워드, 신제품, 할인 쿠폰, 프로모션 정보 등 광고와 이벤트 알림은 금지됩니다. 서비스 메시지 조건에 대한 자세한 내용은 [서비스 메시지 조건](https://developers.line.biz/en/docs/line-mini-app/service/service-operation/#conditions-for-service-messages)을 참고하세요.

<!-- note end -->

## 서비스 메시지가 표시되는 채팅방 

LINE MINI App에서 보낸 서비스 메시지는 LINE MINI App의 유형과 관계없이, LINE MINI App을 제공하는 지역별로 정해진 채팅방에 표시됩니다.

| 일본 | 태국 | 대만 |
| :-: | :-: | :-: |
| LINEミニアプリ お知らせ | LINE MINI App Notice | LINE MINI App 通知 |
| ![LINEミニアプリ お知らせ](https://developers.line.biz/media/line-mini-app/mini_service_notifier_jp.webp) | ![LINE MINI App Notice](https://developers.line.biz/media/line-mini-app/mini_service_notifier_th.webp) | ![LINE MINI App 通知](https://developers.line.biz/media/line-mini-app/mini_service_notifier_tw.webp) |

## 보낼 수 있는 서비스 메시지의 유형 

제공되는 템플릿을 사용하여 서비스 메시지를 보낼 수 있습니다. 이 템플릿은 매장 예약, 대기열 관리, 배송 알림 등 카테고리별로 구성되어 있으며, 일본어, 영어, 중국어 번체, 태국어, 인도네시아어, 한국어 여섯 개 언어로 제공됩니다. [LINE Developers Console](https://developers.line.biz/console/)에서 템플릿을 확인할 수 있습니다.

![You can check service message templates in the console](https://developers.line.biz/media/line-mini-app/service-message-template-en.webp)

## 서비스 메시지 미리보기 

[LINE Developers Console](https://developers.line.biz/console/)에서 LINE MINI App 채널을 선택한 다음, **Service message template** 탭에서 **Add**를 클릭하면 "Add service message template" 화면이 표시됩니다.

이 화면에서 템플릿을 선택하고 JSON을 편집하여 메시지를 미리 보고 테스트 메시지를 보낼 수 있습니다. 테스트 메시지는 현재 LINE Developers Console에 로그인한 LINE 개발자 계정과 연결된 LINE 계정으로 전송됩니다.

![Changes to JSON are reflected in the preview](https://developers.line.biz/media/line-mini-app/preview-service-message-en.webp)

## 서비스 메시지 전송 흐름 

서비스 메시지를 보내려면 서비스 메시지 템플릿과 서비스 알림 토큰(service notification token)이 필요합니다. 다음 단계에 따라 보내세요.

1. LINE Developers Console에서 LINE MINI App 채널에 [서비스 메시지 템플릿을 추가](https://developers.line.biz/en/docs/line-mini-app/develop/service-messages/#service-message-templates)합니다.
2. LINE MINI App에서 사용자 행동에 따라 [서비스 알림 토큰을 발급하고 서비스 메시지를 보냅니다](https://developers.line.biz/en/docs/line-mini-app/develop/service-messages/#sending-service-messages-for-the-first-time).
3. 2단계에서 발급받은 새 서비스 알림 토큰을 사용하여 리마인더 같은 [후속 서비스 메시지를 보냅니다](https://developers.line.biz/en/docs/line-mini-app/develop/service-messages/#sending-subsequent-service-messages).

<!-- note start -->

**심사를 통과해야 합니다**

1단계에서 LINE MINI App 채널에 추가한 서비스 메시지 템플릿은 [서비스 메시지 전송 API](https://developers.line.biz/en/reference/line-mini-app/#send-service-message)에서 사용하려면 LY Corporation의 심사를 통과해야 합니다.

<!-- note end -->

## 채널에 서비스 메시지 템플릿 추가하기 

LY Corporation이 제공하는 템플릿 중에서 [Service Message API](https://developers.line.biz/en/reference/line-mini-app/#service-messages)에 사용할 템플릿을 선택하여 LINE MINI App 채널에 추가합니다. LINE MINI App 채널당 최대 20개의 서비스 메시지 템플릿을 설정할 수 있습니다.

템플릿은 카테고리별로 제공되며 [LINE Developers Console](https://developers.line.biz/console/)에서 찾을 수 있습니다. 또한 자신의 LINE 계정으로 테스트 메시지를 보내 서비스 메시지 미리보기를 확인할 수 있습니다. 템플릿을 채널에 추가하려면 다음 단계를 따르세요.

1. [LINE Developers Console](https://developers.line.biz/console/)에서 템플릿을 추가할 LINE MINI App 채널을 선택하고 **Service message template** 탭을 클릭합니다.

<!-- note start -->

**참고**

1. 채널을 개발하는 동안 공식 템플릿을 준비할 수 있습니다.

- **이 기간에는 다음 작업을 할 수 있습니다:**
  - 새 템플릿 추가
  - 모든 템플릿 목록 보기
  - 템플릿 상세 보기
  - 템플릿의 `use case` 수정
  - 템플릿 삭제
  - 시뮬레이터에서 사용할 수 있는 테스트 메시지 보내기

2. 심사가 진행 중일 때는 공식 템플릿 사용에 일부 제한이 적용됩니다.

- **이 기간에도 다음 작업은 할 수 있습니다:**
  - 모든 템플릿 목록 보기
  - 시뮬레이터에서 사용할 수 있는 테스트 메시지 보내기
  - 템플릿 상세 보기
- **하지만 이 단계에서는 다음 작업을 할 수 없습니다:**
  - 새 템플릿 추가
  - 템플릿의 `use case` 수정
  - 템플릿 삭제

3. 채널이 게시된 후에는 게시된 채널에서 공식 템플릿을 사용할 수 있습니다(1번의 준비 단계와 동일한 조건이 적용됩니다).

채널이 심사 중일 때는 새 템플릿을 추가할 수 없습니다. 채널이 심사를 통과할 때까지는 시뮬레이터에서 사용할 수 있는 테스트 메시지만 보낼 수 있습니다. 다만 심사 과정은 과거에 성공적으로 추가된 기존 템플릿에는 영향을 주지 않습니다.

<!-- note end -->

2. [**Add**]를 클릭합니다.

3. 다음 설정을 구성합니다.

   | 항목 | 설명 |
   | --- | --- |
   | Select template | Service Message API에서 사용할 템플릿을 선택합니다. |
   | Template detail | 선택한 템플릿의 상세 정보가 표시됩니다. [서비스 메시지 전송 API](https://developers.line.biz/en/reference/line-mini-app/#send-service-message)를 실행할 때는 [**Template name for API use**]에 표시된 문자열(`{template name}_{BCP 47 language tag}`)을 `templateName`으로 지정합니다. |
   | Preview | 테스트 메시지의 미리보기가 표시됩니다. [**Send test message**]에서 [**Send**]를 클릭하면, LINE Developers Console에 로그인한 LINE 계정으로 테스트 메시지가 전송됩니다. |
   | Send test message | 템플릿 변수와 값의 쌍을 지정하는 JSON 객체를 입력합니다. 입력한 내용에 따라 [**Preview**]가 업데이트됩니다. <ul><li>[**Copy**]: JSON 객체를 클립보드에 복사합니다.</li><li>[**Reset**]: JSON 객체의 수정 내용을 취소합니다.</li><li>[**Send**]: LINE Developers Console에 로그인한 LINE 계정으로 테스트 메시지를 보냅니다.</li></ul> |
   | Use Case | 템플릿의 정확한 사용 목적을 입력합니다. |

   <!-- note start -->

   **참고**

   [**Use Case**]에 입력한 설명과 다르게 템플릿을 사용하는 경우, 템플릿 사용이 제한될 수 있습니다.

   <!-- note end -->

4. [**Add**]를 클릭합니다.

   서비스 메시지 템플릿 목록으로 돌아갑니다.

   추가한 템플릿의 [**Published status**]에 심사 상태가 표시됩니다.

   | Published status | 설명 |
   | --- | --- |
   | DEVELOPING | 개발 중(심사 요청 전). 이 기능은 게시 준비가 된 채널에서, LINE MINI App 채널의 Admin 또는 Tester 권한이 있는 개발자에게 [서비스 메시지를 보내는](https://developers.line.biz/en/reference/line-mini-app/#send-service-message) 경우에만 사용할 수 있습니다. |
   | PUBLISHING | 심사 통과. 실서비스 채널에서 LINE MINI App 채널의 사용자에게 [서비스 메시지를 보내는](https://developers.line.biz/en/reference/line-mini-app/#send-service-message) 데 사용됩니다. |

### 템플릿 요소 

서비스 메시지는 (A) 제목, (B) 상세, (C) 버튼, (D) 푸터로 구성됩니다. 사용 목적에 따라 이 섹션들을 조합하여 템플릿을 만드세요. 서비스 메시지의 목적에 가장 잘 맞는 템플릿을 선택하세요.

![](https://developers.line.biz/media/line-mini-app/mini_servicenotifier_layout.png)

| 라벨 | 섹션 | 설명 |
| --- | --- | --- |
| A | 제목 | 제목 섹션은 다음 요소로 구성됩니다.<ul><li>제목(A-1)</li><li>부제목(A-2)</li></ul> |
| B | 상세 | 상세 섹션은 템플릿 유형에 따라 두 가지 레이아웃이 있습니다. <ul><li>"detailed": 키가 하나 이상 필요합니다. 최대 키 개수는 선택한 템플릿에 따라 다릅니다. 글자 수 세는 방법에 대한 자세한 내용은 [요소별 최대 글자 수](https://developers.line.biz/en/docs/line-mini-app/develop/service-messages/#maximum-number-of-characters)를 참고하세요.<br />![](https://developers.line.biz/media/line-mini-app/mini_detail_detailed.webp)</li><li>"simple": 최대 키 하나를 선택할 수 있습니다. 글자 수 세는 방법에 대한 자세한 내용은 [요소별 최대 글자 수](https://developers.line.biz/en/docs/line-mini-app/develop/service-messages/#maximum-number-of-characters)를 참고하세요.<br />![](https://developers.line.biz/media/line-mini-app/mini_detail_simple.webp)</li></ul> |
| C | 버튼 | 사용할 수 있는 버튼 개수는 템플릿에 따라 다릅니다. 또한 URL이 설정된 버튼만 표시됩니다. URL에는 LINE MINI App 페이지의 [영구 링크](https://developers.line.biz/en/docs/line-mini-app/develop/permanent-links/)를 지정하세요.<ul><li>첫 번째 버튼은 필수이며, 메시지에서 첫 번째 링크로 표시됩니다.</li><li>두 번째 버튼부터는 선택 사항이며, 선택한 템플릿에 따라 미리 정해집니다.</li></ul> |
| D | 푸터 | **Basic settings** 탭의 **Channel icon**에 설정한 아이콘과 **Channel Name**에 설정한 채널 이름이 표시됩니다. 사용자가 푸터를 탭하면 LINE MINI App의 상단 페이지가 표시됩니다. |

<!-- note start -->

**LINE MINI App 상태가 &quot;Reflected&quot;가 아닐 때의 푸터**

LINE MINI App의 상태가 "Not yet reviewed" 또는 "Reviewing"이면, 설정한 푸터 대신 LINE 아이콘과 "Service Message"라는 텍스트가 표시됩니다. 상태가 "Reflected"로 바뀌면 설정한 LINE MINI App 아이콘과 LINE MINI App 이름이 표시됩니다.

<!-- note end -->

### 요소별 최대 글자 수 

상세 섹션의 "detailed"와 "simple"에는 각 키 값에 대해 권장 글자 수와 최대 글자 수(소프트 제한과 하드 제한)가 있습니다.

| 항목 | 권장 글자 수 | 소프트 제한 | 하드 제한 |
| ------------ | -------------------------------- | ---------- | ---------- |
| **detailed** | 10 | 36 | 50 |
| **simple** | 32 | 100 | 150 |

각 키 값은 권장 글자 수 이내로 제한하는 것을 권장합니다. 권장 글자 수를 초과하면 표시 영역을 넘는 글자는 줄임표(`...`)로 대체되거나, 서비스 메시지를 보낼 수 없습니다.

| 글자 수 | 텍스트 표시 방식 |
| --- | --- |
| 권장 글자 수 이하 | 모든 텍스트가 표시됩니다 |
| 권장 글자 수 초과, 소프트 제한 이하 | 표시 영역을 넘는 글자는 줄임표(`...`)로 대체될 수 있습니다 |
| 소프트 제한 초과, 하드 제한 이하 | 표시 영역을 넘는 글자는 줄임표(`...`)로 대체됩니다 |
| 하드 제한 초과 | 오류가 발생하여 서비스 메시지를 보낼 수 없습니다 |

키 값의 글자 수는 UTF-16 코드 유닛이 아니라 [그래핌 클러스터(grapheme cluster)](https://unicode.org/reports/tr29/) 단위로 셉니다. 텍스트 글자 수 세기에 대한 자세한 내용은 Messaging API 문서의 [텍스트의 글자 수 세기](https://developers.line.biz/en/docs/messaging-api/text-character-count/)를 참고하세요.

## 처음으로 서비스 메시지 보내기 

사용자 행동 후 LINE MINI App에서 처음으로 서비스 메시지를 보내는 단계는 다음과 같습니다.

이 이미지는 채널 액세스 토큰과 [liff.getAccessToken()](https://developers.line.biz/en/reference/liff/#get-access-token)으로 얻은 액세스 토큰("이하 LIFF 액세스 토큰")을 사용하여 서비스 알림 토큰을 발급하고 서비스 메시지를 보내는 과정을 보여 주는 그림입니다. 이 그림에서는 채널 액세스 토큰으로 [상태 비저장 채널 액세스 토큰(stateless channel access token)](https://developers.line.biz/en/docs/basics/channel-access-token/#stateless-channel-access-token)을 사용합니다.

<!-- note start -->

**상태 비저장 채널 액세스 토큰 사용을 권장합니다**

[장기 채널 액세스 토큰](https://developers.line.biz/en/docs/basics/channel-access-token/#long-lived-channel-access-token)과 [사용자가 만료 기간을 지정하는 채널 액세스 토큰(Channel Access Token v2.1)](https://developers.line.biz/en/docs/basics/channel-access-token/#user-specified-expiration)은 LINE MINI App 채널에서 사용할 수 없습니다.

LINE MINI App을 개발할 때는 [상태 비저장 채널 액세스 토큰](https://developers.line.biz/en/docs/basics/channel-access-token/#stateless-channel-access-token) 또는 [단기 채널 액세스 토큰](https://developers.line.biz/en/docs/basics/channel-access-token/#short-lived-channel-access-token)을 사용할 수 있습니다. 이 두 가지 중에서는 상태 비저장 채널 액세스 토큰을 권장합니다. 상태 비저장 채널 액세스 토큰은 발급 횟수에 제한이 없으므로, 애플리케이션이 토큰의 수명 주기를 관리할 필요가 없습니다.

<!-- note end -->

![relationship of tokens](https://developers.line.biz/media/line-mini-app/mini-illust-01-en.png)

1. 알림을 보낼 때 LINE MINI App에서 [liff.getAccessToken()](https://developers.line.biz/en/reference/liff/#get-access-token)을 호출하여 LIFF 액세스 토큰을 가져옵니다.

1. 1단계에서 얻은 LIFF 액세스 토큰을 서버로 보냅니다.

1. [채널 액세스 토큰](https://developers.line.biz/en/docs/basics/channel-access-token/)을 가져옵니다.

1. [서비스 알림 토큰을 발급합니다](https://developers.line.biz/en/reference/line-mini-app/#issue-notification-token).

   3단계에서 얻은 채널 액세스 토큰과 1단계에서 얻은 LIFF 액세스 토큰을 사용합니다.

   ```java
   final OkHttpClient notifierApiClient = new OkHttpClient().newBuilder().build();
   final MediaType mediaType = MediaType.parse("application/json");
   final RequestBody notificationTokenRequestBody = RequestBody.create(mediaType, "{'liffAccessToken': 'eyJhbGciOiJIUzI1NiJ9…​'");
   final Request notificationTokenRequest = new Request.Builder()
     .url(BASE_URL + "/notifier/token")
     .method("POST", notificationTokenRequestBody)
     .addHeader("Content-Type", "application/json")
     .addHeader("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9...")
     .build();
   final NotificationTokenResponse response = notifierApiClient.newCall(request).execute();
   String notificationToken = notificationTokenResponse.getNotificationToken();
   int tokenRemainingCount = notificationTokenResponse.getRemainingCount();
   ```

   <!-- note start -->

   **LIFF 액세스 토큰의 유효 기간**

   LIFF 액세스 토큰은 발급 후 12시간 동안 유효합니다. 하지만 이 유효 기간 안에서도 사용자 행동으로 인해 LIFF 액세스 토큰이 취소될 수 있습니다. 따라서 LIFF 액세스 토큰을 가져오는 시점에 주의하세요.
   - 사용자가 LINE MINI App을 닫으면 LIFF 액세스 토큰이 취소될 수 있습니다. 자세한 내용은 LIFF 문서의 [LIFF 앱을 닫을 때의 동작](https://developers.line.biz/en/docs/liff/developing-liff-apps/#behavior-when-closing-liff-app)을 참고하세요.
   - "[Channel consent simplification](https://developers.line.biz/en/docs/line-mini-app/develop/channel-consent-simplification/#what-is-channel-consent-simplification)" 기능이 활성화된 경우, 검증 화면에서 추가 권한을 부여하면 LIFF 액세스 토큰이 새로 고쳐지고 이전에 발급된 LIFF 액세스 토큰은 취소됩니다. 자세한 내용은 [검증 화면에서 `openid` 스코프 이외의 권한 요청하기](https://developers.line.biz/en/docs/line-mini-app/develop/channel-consent-simplification/#request-permissions-other-than-openid)를 참고하세요.

   <!-- note end -->

1. 처음으로 [서비스 메시지를 보냅니다](https://developers.line.biz/en/reference/line-mini-app/#send-service-message).

   4단계에서 얻은 서비스 알림 토큰을 사용합니다. 서비스 메시지를 보낸 후에는 [응답에 포함된 서비스 알림 토큰을 저장하세요](https://developers.line.biz/en/docs/line-mini-app/develop/service-messages/#save-service-notification-token).

   사용하는 템플릿에 템플릿 변수가 있다면 `params`에 키-값 쌍을 지정합니다. 필수 요소의 템플릿 변수를 지정하지 않으면 오류가 반환됩니다.

   `params` 예시:

   ```json
   {
     ...
     "params": {
       // params sample to be updated
       "variable-name": "value",
       "button_uri_1": "detailView?userId=1234&purchaseID=5678"
     }
     ...
   }
   ```

   ```java
   final RequestBody notificationRequestBody = RequestBody.create(mediaType,"{
     'templateName': 'reservation_confirmation_en',
     'notificationToken': '34c11a03-b726-49e3-8ce0-949387a9…​',
     'params': {
       'template-field-name': 'field-value',
       'template-field-name': 'field-value',
     }}");
   final Request notificationRequest = new Request.Builder()
     .url(BASE_URL + "/notifier/send?target=service")
     .method("POST", notificationRequestBody)
     .addHeader("Content-Type", "application/json")
     .addHeader("Authorization", "Bearer W1TeHCgfH2Liwa...")
     .build();
   final NotificationResponse notificationResponse = notifierApiClient.newCall(request).execute();
   notificationToken = notificationResponse.getNotificationToken();
   tokenRemainingCount = notificationResponse.getRemainingCount();
   ```

서비스 알림 토큰은 발급 후 1년(31,536,000초)이 지나면 만료됩니다. 예를 들어 유효 기간 동안 사용자의 한 번의 예약 행동에 대해 LINE MINI App에서 최대 5개의 서비스 메시지를 보낼 수 있습니다. 후속 서비스 메시지를 보내는 방법은 [후속 서비스 메시지 보내기](https://developers.line.biz/en/docs/line-mini-app/develop/service-messages/#sending-subsequent-service-messages)를 참고하세요.

![AOA flow 2](https://developers.line.biz/media/line-mini-app/mini-illust-03-en.png)

## 후속 서비스 메시지 보내기 

같은 사용자 행동에 대해 후속 서비스 메시지를 보낼 때는 마지막으로 [서비스 메시지를 보냈을 때](https://developers.line.biz/en/reference/line-mini-app/#send-service-message) 응답에 포함된 서비스 알림 토큰을 사용하세요. 후속 서비스 메시지를 보낼 때도 [응답에 포함된 서비스 알림 토큰을 저장하세요](https://developers.line.biz/en/docs/line-mini-app/develop/service-messages/#save-service-notification-token).

후속 서비스 메시지를 보낼 때는 처음 서비스 메시지를 보낼 때 사용한 채널 액세스 토큰과 LIFF 액세스 토큰을 재사용하여 서비스 알림 토큰을 새로 발급하지 마세요.

```java
...
JsonObject subsequentMessage = Json.createObjectBuilder()
  .add("notificationToken", notificationToken)
  .add("templateName", templateName)
  .add("params", templateData)
  .build();
...

if (tokenRemainingCount < 0)
{
  notificationRequestBody = RequestBody.create(mediaType, subsequentMessage.toString());
  notificationRequest = new Request.Builder()
        .url(BASE_URL + "/notifier/send?target=service")
        .method("POST", notificationRequestBody)
        .addHeader("Content-Type", mediaType.toString())
        .addHeader("Authorization", "Bearer W1TeHCgfH2Liwa...")
        .build();
  notificationResponse =
        notifierApiClient.newCall(notificationRequest).execute();
  notificationToken = notificationResponse.getNotificationToken();
  tokenRemainingCount = notificationResponse.getRemainingCount();
}
```

## 응답에 포함된 서비스 알림 토큰 저장하기 

서비스 메시지를 보낸 후에는 응답에 포함된 업데이트된 서비스 알림 토큰(`notificationToken`)을 보관하세요. 이 서비스 알림 토큰은 같은 사용자 행동에 대한 후속 서비스 메시지를 보낼 때 사용됩니다.

토큰이 만료되지 않은 동안에는 응답에 포함된 `remainingCount` 수만큼 같은 사용자 행동에 대해 서비스 메시지를 보낼 수 있습니다. 각 사용자 행동은 응답에 포함된 세션 ID(`sessionId`)로 구분할 수 있습니다.
