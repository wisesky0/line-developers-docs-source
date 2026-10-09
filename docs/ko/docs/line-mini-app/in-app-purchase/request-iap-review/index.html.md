# 인앱 결제 사용 신청

이 페이지에서는 인앱 결제를 신청하는 방법을 설명합니다.

## 신청 전 확인 사항 

인앱 결제를 신청하기 전에 "[인앱 결제 개요](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/overview/)"와 "[인앱 결제 개발 가이드라인](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/iap-guidelines/)"을 반드시 확인해 주십시오. 또한 다음 사항도 확인해 주십시오.

### 인앱 결제 심사와 검증 심사의 관계 

- 인앱 결제 심사가 완료되더라도 [검증 심사(검증된 MINI App으로 공개하기 위한 심사)](https://developers.line.biz/en/docs/line-mini-app/submit/submission-guide/)가 승인되지 않으면 사용자는 인앱 결제를 이용할 수 없습니다.
- 검증 심사 중에는 인앱 결제를 신청할 수 없습니다.
- 인앱 결제 심사 중에는 검증 심사를 신청할 수 없습니다.

### 인앱 결제 심사 기간 

- LY Corporation이 인앱 결제 심사를 완료하는 데는 약 2주가 소요됩니다. 심사 완료 날짜를 미리 지정할 수는 없습니다. 양해 부탁드립니다.
- 심사 후 신청이 거부된 경우, 다시 신청하고 재심사를 받는 데 며칠이 더 걸립니다.
- 인앱 결제 신청이 승인된 후에는 [검증 심사](https://developers.line.biz/en/docs/line-mini-app/submit/submission-guide/)를 신청해야 합니다. 검증 심사에도 별도의 심사 기간이 있습니다.

## 신청 절차 

인앱 결제를 신청하려면 아래 단계를 따라 주십시오.

### 1. 필수 정보 입력 

[LINE Developers Console](https://developers.line.biz/console/)의 **In-app purchase** 탭에서 필수 정보를 입력합니다.

신청할 때는 회사 이름을 포함하여 모든 정보를 정확하게 입력해 주십시오.

- 사업자 정보 / LINE MINI App 정보 등록
- 정보 보안 정보 등록
- LY Corporation 비즈니스 파트너 정보 신청서 업로드

#### 인앱 결제 계약 주체 

인앱 결제를 사용할 때는 다음 정보가 해당 LINE MINI App 채널의 **Business information** 탭에 있는 "Service company information" 섹션에 설정된 정보와 모두 일치해야 합니다.

- "Business information / LINE MINI App information" 섹션
  - **Company name**
- "Information security" 섹션
  - **Name of the organization performing the operations**
- "LY Corporation business partner information" 섹션의 LY Corporation 비즈니스 파트너 정보 신청서
  - 회사 정보 - 회사 이름
  - 결제 계좌 정보 - 예금주 이름

### 2. 인앱 결제 사용 신청 

필수 정보 입력을 마쳤다면 **Apply to use in-app purchase** 버튼을 클릭합니다.

LY Corporation이 신청 내용을 검토하여 승인 또는 거부를 결정합니다. 승인되면 "Workflow in progress" 섹션의 상태 표시가 "Approved"로 바뀝니다.

<!-- tip start -->

**심사가 시작되기 전까지 신청을 취소할 수 있습니다**

인앱 결제를 신청하면 실제로 심사가 시작되기 전까지 워크플로 상태는 "Applied for review"가 됩니다. "Applied for review" 상태에서는 신청을 취소할 수 있습니다.

<!-- tip end -->

### 3. 승인 후 설정 

인앱 결제 사용 신청이 승인되어 상태가 "Approved"로 바뀌면 **Apply to use in-app purchase** 탭과 **In-app purchase settings** 탭이 표시됩니다.

![](https://developers.line.biz/media/line-mini-app/in-app-purchase/tabs-in-iap-tab-en.png)

**In-app purchase settings** 탭에서 설정할 항목에 대한 자세한 내용은 [인앱 결제 설정](https://developers.line.biz/en/docs/line-mini-app/in-app-purchase/iap-settings/)을 참고해 주십시오.

## 신청 정보 변경 

신청 정보를 수정하려면 **Apply to use in-app purchase** 탭을 선택하고 관련 항목을 편집합니다.

- 인앱 결제 심사를 신청하여 "Workflow in progress" 상태가 "Applied for review" 또는 "Reviewing"인 경우에는 정보를 수정할 수 없습니다.
  - 상태가 "Applied for review"라면 **Cancel the application**을 클릭하여 신청을 취소한 후 수정하십시오.
  - 상태가 "Reviewing"이라면 심사 중에는 취소할 수 없습니다. 심사가 완료된 후에 정보를 업데이트하십시오.
- **Apply to use in-app purchase** 탭의 정보를 변경하면 인앱 결제를 다시 신청해야 합니다.
- **In-app purchase settings** 탭의 정보(웹훅 URL과 테스터 정보)는 재심사가 필요하지 않습니다.
- 회사와 관련된 정보를 변경하는 경우에는 먼저 [검증 심사](https://developers.line.biz/en/docs/line-mini-app/submit/submission-guide/)를 다시 신청하여 완료한 후 인앱 결제 심사를 다시 신청해 주십시오.
