# 인앱 결제 설정

이 페이지에서는 [인앱 결제 사용 신청](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/request-iap-review/)이 승인된 후 설정해야 할 항목을 설명합니다.

LINE MINI App 채널의 **In-app purchase** 탭에서 [웹훅 URL을 등록](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/iap-settings/#register-webhook-url)하고 테스트 결제를 위한 [테스터를 등록](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/iap-settings/#register-testers)할 수 있습니다.

![](https://developers.line.biz/media/line-mini-app/in-app-purchase/iap-settings-tab-en.png)

<!-- tip start -->

**In-app purchase 설정 탭이 표시되지 않는 경우**

**In-app purchase** 탭 안에 **In-app purchase settings** 탭이 표시되지 않는다면 인앱 결제 신청이 아직 승인되지 않은 것입니다.

"Workflow in progress" 섹션의 상태가 "Approved"로 바뀌면 **In-app purchase settings** 탭이 표시됩니다. 신청이 승인될 때까지 기다려 주십시오.

<!-- tip end -->

## 웹훅 URL 등록 

LINE MINI App의 인앱 결제는 웹훅을 사용하여 결제 완료나 환불 등 결제 상태의 변경을 서버 측에서 실시간으로 받습니다.

Developing과 Published에 같은 웹훅 URL을 설정할 수도 있습니다.

### Developing용 웹훅 URL 등록 

아래 단계에 따라 Developing용 웹훅 URL을 등록해 주십시오. 테스터 권한이 있는 계정으로 테스트 결제를 하면 결제 알림이 Developing용 웹훅 URL로 전송됩니다.

1. LINE Developers Console에서 **In-app purchase** 탭을 선택한 후 **In-app purchase settings** 탭을 선택합니다.
1. **Webhook URL for developing** 입력 필드에 알림을 받을 서버의 URL을 입력합니다. URL은 `https://`로 시작해야 합니다.
1. **Update** 버튼을 클릭합니다.

### Published용 웹훅 URL 등록 

다음 단계에 따라 Published용 웹훅 URL을 설정해 주십시오.

1. LINE Developers Console에서 **In-app purchase** 탭을 선택한 후 **In-app purchase settings** 탭을 선택합니다.
1. **Webhook URL for published** 입력 필드에 알림을 받을 서버의 URL을 입력합니다. URL은 `https://`로 시작해야 합니다.
1. **Update** 버튼을 클릭합니다.

## 테스트 결제 기능 사용 

LINE MINI App에 인앱 결제 기능을 연동할 때 테스트 결제 기능을 사용할 수 있습니다. 테스트 결제는 Developing 채널의 LINE MINI App 채널에서 할 수 있습니다.

Developing 채널에서 테스터 권한이 있는 계정이 결제 과정을 진행하면, 시스템은 이를 테스트 결제로 처리합니다. 따라서 실제 청구 없이 결제 흐름을 테스트할 수 있습니다.

테스트 결제 기능을 사용하려면 LINE MINI App 채널의 테스터 권한이 필요합니다.

### 테스트 결제 기능의 테스터 권한 

테스트 결제 기능의 테스터 권한은 LINE MINI App 채널의 Admin 역할 또는 Tester 역할을 가진 계정에 최대 20개까지 부여할 수 있습니다.

테스터 권한의 유효 기간은 30일입니다.

실제 테스트 방법에 대한 자세한 내용은 [테스트 결제 가이드](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/implement-in-app-purchase/#test-payment-guide)를 참고해 주십시오.

#### 테스터 등록 

테스트 결제 기능의 테스터를 등록하는 단계는 다음과 같습니다.

1. LINE Developers Console에서 대상 LINE MINI App 채널을 선택합니다.
1. **In-app purchase** 탭을 선택하고 **In-app purchase settings**를 클릭합니다.
1. "Tester permission for the test payment feature" 섹션의 **Select a tester** 드롭다운 목록에서 등록할 계정을 선택합니다. 드롭다운 목록에는 LINE MINI App 채널의 **Roles** 탭에 이미 추가된 계정이 표시됩니다.
1. **Enable** 버튼을 클릭합니다.

등록이 완료되면 목록에 계정 이름, 이메일 주소, 만료 날짜가 표시됩니다.

#### 테스터 권한 관리 

등록된 테스터에 대해 다음 작업을 할 수 있습니다.

- 권한 연장: 목록의 **Extend** 버튼을 클릭하면 만료 날짜가 그 시점부터 30일 뒤로 갱신됩니다.
- 권한 비활성화: 목록의 **Disable** 버튼을 클릭하면 해당 계정이 즉시 테스트 결제를 할 수 없게 됩니다.

테스터의 권한이 만료되었다면 **Select a tester** 드롭다운 목록에서 해당 테스터를 다시 선택하여 권한을 다시 활성화할 수 있습니다.
