# LINE MINI App 제출하기

LINE MINI App 채널을 만들면 LINE MINI App은 미인증 MINI App이 되며, 일부 기능이 제한됩니다. 개발한 LINE MINI App을 인증된 MINI App으로 만들려면 LY Corporation의 심사를 받아야 합니다. 이 페이지에서는 심사를 신청하는 방법을 설명합니다.

<!-- tip start -->

**대만 또는 태국의 LINE MINI App 인증 심사에 대하여**

서비스를 제공하는 국가 또는 지역이 대만 또는 태국인 경우, [인증된 제공자](https://developers.line.biz/en/docs/line-developers-console/overview/#certified-provider)에 속한 LINE MINI App 채널만 인증 심사를 신청할 수 있습니다. 인증된 제공자가 되는 방법은 다음을 참고하세요.

- 대만: [LINE Biz-Solutions](https://tw.linebiz.com/service/other-solutions/line-mini-app/)
- 태국: [LINE for Business](https://lineforbusiness.com/th/service/mini-app)

<!-- tip end -->

## LINE MINI App 심사를 요청하기 전에 확인할 사항 

심사를 요청하기 전에 다음 사항을 확인하세요.

- LINE MINI App이 모든 가이드라인과 규칙을 준수하는지 확인합니다. <br>특히 다음 가이드라인과 규칙을 확인하세요.
  - [LINE MINI App 아이콘 사양 및 가이드라인](https://developers.line.biz/en/docs/line-mini-app/design/line-mini-app-icon/)
  - [가로 모드의 안전 영역](https://developers.line.biz/en/docs/line-mini-app/design/landscape/)
  - [로딩 아이콘](https://developers.line.biz/en/docs/line-mini-app/design/loading-icon/)
  - [사용자 지정 액션 버튼 구현하기](https://developers.line.biz/en/docs/line-mini-app/develop/share-messages/)
  - [성능 가이드라인](https://developers.line.biz/en/docs/line-mini-app/develop/performance-guidelines/)
- LINE MINI App이 [LINE MINI App 정책](https://terms2.line.me/LINE_MINI_App?lang=en)을 준수하는지 확인합니다.
- [LINE Developers Console](https://developers.line.biz/console/)에 등록한 LINE MINI App 채널 정보가 정확하고 최신 상태인지 확인합니다.
  - 제공자 이름은 "서비스 제공자"와 같아야 합니다.
  - [채널 설명](https://developers.line.biz/en/docs/line-mini-app/discover/console-guide/#channel-description)에 올바른 서비스 설명을 입력해야 합니다.
  - 개인정보 처리방침에 사용자 데이터를 수집하는 회사가 제공자 이름과 같은 회사로 설정되어 있어야 합니다.
- Published 채널의 LIFF URL과 Review 채널의 LIFF URL이 같은 서비스를 가리키는지 확인합니다.
  - 심사 중 LY Corporation은 Review 채널의 LIFF URL을 확인합니다. 채널과 LIFF의 다양한 설정은 자동으로 Review 채널에 복사되어 반영됩니다. 다만 Review 채널의 LIFF URL이 Published 채널의 LIFF URL과 같은 서비스를 가리키는지 미리 확인하세요.

### 심사 기간 

LY Corporation의 심사 절차는 약 1~2주가 걸립니다. 신청이 거부되면 다시 신청하고 재심사를 받는 데 며칠이 더 걸릴 수 있습니다. 심사 완료일을 지정할 수는 없으므로, 심사 요청에 충분한 시간을 두고 진행하세요.

### 여러 LINE MINI App의 심사를 요청할 때 

여러 LINE MINI App(같은 패키지의 여러 앱, 같은 브랜드의 여러 앱 등)의 심사를 동시에 요청하는 경우, 중복 작업을 피하고 심사 기간을 줄이기 위해 다음 절차를 따르는 것을 권장합니다.

1. 먼저 LINE MINI App 하나의 심사를 요청합니다.
2. 해당 LINE MINI App이 승인되면 일괄 심사를 요청합니다.

## 심사 절차 

일반적인 심사 절차는 다음과 같습니다.

### 1. LINE Developers Console에서 심사 신청하기 

[LINE Developers Console](https://developers.line.biz/console/)의 **Review request** 탭에서 필요한 정보를 입력하고 심사를 요청합니다.

LY Corporation이 심사를 완료하면 심사 결과가 [LINE Developers Console](https://developers.line.biz/console/)에 표시되며, LINE Developers Console에 등록된 이메일 주소로도 발송됩니다.

심사 대상 LINE MINI App에 기본 인증(basic authentication)으로 접근을 제한한 경우에는 심사를 요청할 때 **Review request** 탭의 **Reference materials for the review**에 사용자 이름과 비밀번호를 알려 주세요. 자세한 내용은 [공개 전 기본 인증으로 LINE MINI App 접근 제한하기](https://developers.line.biz/en/docs/line-mini-app/develop/develop-overview/#use-basic-authentication)를 참고하세요.

#### 심사 관련 주요 사항 

- 심사를 요청한 후에도 심사 절차가 시작되기 전이라면 **Review request** 탭의 **Cancel review request** 버튼을 눌러 심사 요청을 취소할 수 있습니다.
- LY Corporation이 심사 절차를 시작하면 요청을 취소하거나 입력한 정보를 변경할 수 없습니다.
- 심사가 시작되어 상태가 "Reviewing"이 되면 Review 채널의 LIFF URL에 접속할 수 있습니다.

#### 예약, 결제, 주문 등의 액션이 포함된 서비스 

예약, 결제, 주문 등의 액션이 포함된 서비스는 심사를 신청할 때 **Reference materials for the review**에 테스트 시나리오(계정, 상품, 매장 등)를 입력해야 합니다.

#### LINE MINI App이 게임인 경우 

심사 대상 LINE MINI App이 게임이라면 **Reference materials for the review**에 게임을 설명하는 자료를 첨부해야 합니다. 원칙적으로 [게임 심사 신고서](https://workers-hub.ent.box.com/s/fqd8gfw2kwadj0yuvgxg965qc252xawn/file/2373127350923)(일본어만 제공)를 내려받아 필요한 정보를 작성한 다음, 작성된 신고서를 설명 자료로 첨부하세요.

#### 채널 설명 

LY Corporation의 심사는 [LINE Developers Console](https://developers.line.biz/console/)의 **Basic settings** 탭에 있는 **Channel description**의 내용을 기준으로 진행됩니다. 따라서 아래 예시를 참고하여 정확한 서비스 내용을 입력하세요.

|  | 채널 이름 | 채널 설명 |
| --- | --- | --- |
| 나쁜 예 | LINE FRIENDS STORE | LINE FRIENDS STORE is a store for LINE character goods. |
| 좋은 예 | LINE FRIENDS STORE | This is a mobile ordering service at the LINE FRIENDS STORE. You can order and pay in advance and receive your merchandise at the store. |

**Channel description**에 대한 자세한 내용은 [채널 설명](https://developers.line.biz/en/docs/line-mini-app/discover/console-guide/#channel-description)을 참고하세요.

#### 인앱 구매를 사용하는 경우 

[인앱 구매](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/overview/)를 사용한다면 먼저 [인앱 구매 사용을 신청](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/request-iap-review/)해야 합니다.

인앱 구매 신청이 승인되면 **Review request** 탭에서 **Apply to publish in-app purchase** 토글 버튼을 켜고 심사를 신청하세요. 인앱 구매 신청이 아직 승인되지 않았다면 토글 버튼을 켜더라도 인증된 MINI App 심사를 신청할 수 없습니다.

![](https://developers.line.biz/media/line-mini-app/in-app-purchase/in-app-purchase-toggle-en.png)

인앱 구매 신청이 심사 중인 동안에는 인증 심사를 신청할 수 없습니다.

또한 인증 심사가 진행되는 동안에는 인앱 구매 기능의 사용을 신청할 수 없습니다.

##### Mini Apps Partner Program 신청하기 

LINE MINI App의 인증 심사를 신청할 때, 인앱 구매 사용이 승인된 LINE MINI App이라면 Apple Inc.가 제공하는 [Mini Apps Partner Program](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/apple-mini-apps-partner-program/)을 신청할 수 있습니다. Mini Apps Partner Program 신청은 LINE MINI App별로 선택 사항입니다.

Mini Apps Partner Program을 신청하려면 다음 단계를 따르세요.

1. **Review request** 탭에서 **Apply to publish in-app purchase** 토글 버튼이 켜져 있는지 확인합니다.
2. "Apply for the Mini Apps Partner Program" 아래에 표시된 안내 사항을 확인합니다.
3. **I agree to the important notices above and apply for the Apple Mini Apps Partner Program.**을 선택합니다.
4. 심사를 신청합니다.

신청할 때 LINE Developers Console에 표시되는 신청 요건과 주의 사항을 확인하세요.

이미 인증된 MINI App이 공개되어 있더라도, Mini Apps Partner Program을 신청하려면 다시 인증 심사를 신청해야 합니다.

### 2. LINE MINI App이 승인된 후 

심사 승인 후의 절차는 [LINE MINI App이 처음 제출된 경우](https://developers.line.biz/en/docs/line-mini-app/submit/submission-guide/#first-time)인지, [이미 인증된 MINI App으로 공개된 경우](https://developers.line.biz/en/docs/line-mini-app/submit/submission-guide/#verified-mini-app)인지에 따라 다릅니다.

#### LINE MINI App을 처음 제출하는 경우 

LINE MINI App이 승인되면 채널 상태가 자동으로 "Approved"로 바뀌고, 곧바로 "Reflected"로 바뀝니다. [LINE Developers Console](https://developers.line.biz/console/)의 **Review request** 탭에 있는 **Search enable** 버튼을 사용하면 사용자가 LINE 내에서 LINE MINI App을 검색할 수 있습니다.

상태가 "Reflected"가 되더라도 LINE 내에서 검색이 활성화되지 않았으므로 사용자는 아직 서비스를 검색할 수 없습니다.

서비스를 검색 가능하게 만들려면 **Search enable** 버튼을 클릭하세요. 그러면 사용자가 LINE에서 LINE MINI App을 바로 검색할 수 있습니다. 다만 상태가 "Reflected"가 된 후 30일(주말과 공휴일 포함) 이내에 **Search enable**을 활성화하지 않으면, 31일째 되는 날 오전 9시(JST)에 검색이 자동으로 활성화됩니다.

예를 들어 LINE MINI App의 상태가 8월 1일에 "Reflected"가 되었다면, "Search enable" 기능은 8월 31일 오전 9시에 자동으로 활성화됩니다.

LINE MINI App의 검색이 활성화되면 LINE MINI App 채널의 상태는 "Not yet reviewed"로 돌아가며, 설정을 변경하고 다시 심사를 신청할 수 있습니다. 이때 설정을 변경하더라도 다시 심사를 통과하고 **Publish changes** 버튼을 클릭하기 전까지는 현재 공개된 LINE MINI App에 영향을 주지 않습니다.

<!-- note start -->

**상태 변경이 약간 지연될 수 있습니다**

상태는 31일째 되는 날 오전 9시(JST)에 자동으로 변경되어야 하지만, 1~2시간 정도 지연될 수 있습니다.

<!-- note end -->

#### 이미 인증된 MINI App으로 공개된 LINE MINI App의 경우 

LINE MINI App이 이미 공개된 상태라면 절차가 약간 다릅니다.

LINE MINI App이 승인되면 채널 상태가 "Approved"로 바뀝니다. [LINE Developers Console](https://developers.line.biz/console/)의 **Review request** 탭에 있는 **Publish changes** 버튼을 사용하여 채널 상태를 "Reflected"로 수동 변경해야 합니다.

상태가 "Reflected"가 되면 심사 요청 시 변경한 내용(LINE MINI App 이름, 채널 설정, LIFF 설정 등)이 Published 채널과 Published 채널의 LIFF에 반영됩니다.

LINE MINI App을 공개하려면 **Publish changes** 버튼을 클릭하세요. 그러면 상태가 즉시 "Reflected"로 바뀝니다. 다만 상태가 "Approved"가 된 후 30일(주말과 공휴일 포함) 이내에 **Publish changes**를 활성화하지 않으면, 31일째 되는 날 오전 9시(JST)에 변경 사항이 자동으로 반영됩니다.

예를 들어 LINE MINI App의 상태가 8월 1일에 "Approved"가 되었다면, 새 변경 사항은 8월 31일 오전 9시에 자동으로 활성화됩니다.

새 변경 사항이 활성화되면 LINE MINI App 채널의 상태는 "Not yet reviewed"로 돌아가며, 설정을 변경하고 다시 심사를 신청할 수 있습니다. 이때 설정을 변경하더라도 다시 심사를 통과하고 **Publish changes** 버튼을 클릭하기 전까지는 현재 공개된 LINE MINI App에 영향을 주지 않습니다.

<!-- note start -->

**상태 변경이 약간 지연될 수 있습니다**

상태는 31일째 되는 날 오전 9시(JST)에 자동으로 변경되어야 하지만, 1~2시간 정도 지연될 수 있습니다.

<!-- note end -->

## 심사를 통과한 LINE MINI App 채널의 제공자 

[LINE Developers Console](https://developers.line.biz/console/)의 **Basic settings** 탭에서 **Region to provide the service**가 "Japan"으로 설정되어 있다면, LINE MINI App 채널이 심사를 통과할 때 제공자는 [인증된 제공자](https://developers.line.biz/en/docs/line-developers-console/overview/#certified-provider)가 됩니다.
