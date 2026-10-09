# LINE MINI App 채널을 Business Manager 조직에 연결하기

LINE MINI App 채널을 [Business Manager](https://www.lycbiz.com/jp/service/business-manager/) 조직에 연결할 수 있습니다. 연결하면 같은 조직에 연결된 다른 서비스의 계정과 연동할 수 있습니다.

현재 지원하는 연동 대상은 LINE 공식 계정뿐입니다. 향후 연결된 LINE 공식 계정의 [비즈니스 프로필](https://www.lycbiz.com/jp/manual/OfficialAccountManager/profile/)에 LINE MINI App 정보를 표시하는 기능 등을 포함하여 지원 기능을 확대할 계획입니다.

Business Manager에 대한 자세한 내용은 LY for Business의 [Business Manager](https://www.lycbiz.com/jp/service/business-manager/)(일본어만 제공)를 참고하세요.

<!-- table of contents -->

## Business Manager 조직에 연결하기 위한 요구 사항 

LINE MINI App 채널을 Business Manager 조직에 연결하려면 다음 조건을 모두 충족해야 합니다.

- LINE MINI App이 [인증된 MINI App](https://developers.line.biz/en/glossary/#verified-mini-app)입니다.
- LINE MINI App 채널의 **Region to provide the service**가 "Japan"으로 설정되어 있습니다.
- LINE MINI App의 제공 회사(Published 데이터 기준)와 제공자가 일치해야 합니다 (\*).
- Business Manager 조직의 **Region**이 "Japan"으로 설정되어 있습니다.
- LINE MINI App 채널의 **Company or owner's country or region**과 Business Manager 조직의 **Company/business owner's country or region**이 일치해야 합니다.

\* LINE MINI App 채널의 Published 데이터 중 **Business information** 탭에서 다음 조건 중 하나를 충족해야 합니다.

- "Development company information" 섹션의 **Same as the service company**가 활성화되어 있습니다.
- "Development company information" 섹션의 **Same as the service company**가 비활성화되어 있고, "Provider information" 섹션의 **Provider**가 "Service company"로 설정되어 있습니다.

## Business Manager 조직에 연결하는 방법 

<!-- note start -->

**Business Manager 조직 연결은 해제할 수 없습니다**

LINE MINI App 채널을 Business Manager 조직에 연결하면 연결을 해제할 수 없습니다. 다만 Business Manager 내에서 다른 조직으로 LINE MINI App 채널을 이전할 수는 있습니다. 자세한 내용은 LINE for Business의 [연결된 계정이나 채널을 다른 조직으로 이전할 수 있나요?](https://help.linebiz.com/lineadshelp/s/article/L000001731?language=ja)(일본어만 제공)를 참고하세요.

<!-- note end -->

LINE MINI App 채널을 Business Manager 조직에 연결하는 과정은 다음과 같습니다.

1. [개발자가 연결 요청을 보냅니다](https://developers.line.biz/en/docs/line-mini-app/service/business-manager-link/#send-link-request)
1. [개발자가 Business Manager 조직 관리자에게 연결 요청 URL을 보냅니다](https://developers.line.biz/en/docs/line-mini-app/service/business-manager-link/#send-link-request-url)
1. [Business Manager 조직 관리자가 요청을 승인합니다](https://developers.line.biz/en/docs/line-mini-app/service/business-manager-link/#approve-request)

다음 단계에서는 LINE Developers Console과 Business Manager를 모두 사용합니다. LINE Developers Console은 LINE MINI App 채널의 Admin 역할을 가진 [개발자](https://developers.line.biz/en/docs/line-developers-console/overview/#developer)가 조작해야 하며, Business Manager는 조직 관리자가 조작해야 합니다.

### 1. 개발자가 연결 요청을 보냅니다 

LINE MINI App 채널의 **Business Manager link** 탭을 엽니다.

![](https://developers.line.biz/media/line-mini-app/service/business-manager-tab-en.webp)

**Organization ID**에 연결하려는 조직의 ID(BM 뒤에 숫자 11자리)를 입력한 다음 **Send a link request**를 클릭합니다.

<!-- tip start -->

**조직 ID 찾기**

Business Manager 조직의 ID(BM 뒤에 숫자 11자리)는 조직 관리자에게 문의하세요. 해당 조직에 접근 권한이 있다면 Business Manager 헤더에서 조직 ID를 확인할 수 있습니다.

![](https://developers.line.biz/media/line-mini-app/service/business-manager-header-en.png)

<!-- tip end -->

### 2. 개발자가 Business Manager 조직 관리자에게 연결 요청 URL을 보냅니다 

[연결 요청을 보내면](https://developers.line.biz/en/docs/line-mini-app/service/business-manager-link/#send-link-request) **Business Manager link** 탭에 연결 요청 URL이 표시됩니다.

![](https://developers.line.biz/media/line-mini-app/service/send-link-request-en.webp)

연결 요청 URL은 Business Manager의 URL입니다. Business Manager 조직 관리자가 이 URL을 열고 요청을 승인하면 LINE MINI App 채널이 Business Manager 조직에 연결됩니다.

연결 요청 URL을 Business Manager 조직 관리자에게 보내고 요청 승인을 부탁하세요. 개발자가 Business Manager 조직 관리자이기도 한 경우에는 연결 요청 URL이 표시되지 않으며 요청이 자동으로 승인됩니다.

<!-- tip start -->

**연결 요청 URL 유효 기간**

연결 요청 URL은 발급 후 7일(168시간) 동안 유효합니다. URL이 만료되면 **Send a link request**를 클릭하여 요청을 다시 보내세요.

<!-- tip end -->

### 3. Business Manager 조직 관리자가 요청을 승인합니다 

Business Manager 조직 관리자가 연결 요청 URL을 열면 요청 승인 화면이 표시됩니다.

![](https://developers.line.biz/media/line-mini-app/service/approve-send-link-request-en.webp)

LINE MINI App 채널과 조직이 올바른지 확인하고 주의 사항을 검토한 다음 **Approve**를 클릭합니다.

## 계정 연결 심사 

LINE MINI App 채널이 Business Manager 조직에 연결되면 채널과 조직의 소유자가 동일한지 확인하기 위해 계정 연결 심사가 진행됩니다.

계정 연결 심사가 완료되어 [상태](https://developers.line.biz/en/docs/line-mini-app/service/business-manager-link/#account-linking-review-status)가 verified가 되면 같은 조직에 연결된 다른 서비스의 계정과 연동할 수 있습니다.

### 계정 연결 심사를 시작하기 위한 요구 사항 

계정 연결 심사를 시작하려면 다음 조건을 모두 충족해야 합니다.

- LINE MINI App 채널이 Business Manager 조직에 연결되어 있습니다.
- Business Manager 조직이 인증되어 있습니다.

Business Manager 조직 인증 심사에 대한 자세한 내용은 LY for Business의 [03. 조직 인증 심사](https://www.lycbiz.com/jp/manual/BusinessManager/BMshare004/?list=21791)(일본어만 제공) 및 LINE for Business의 [Business Manager 심사는 언제 시작되며, 무엇을 심사하고, 얼마나 걸리나요?](https://help.linebiz.com/lineadshelp/s/article/L000001858?language=ja)(일본어만 제공)를 참고하세요.

LINE MINI App 채널을 Business Manager 조직에 연결할 때 조직 인증 심사의 시작 요건을 이미 충족하고 있다면, 조직 인증 심사와 계정 연결 심사가 동시에 진행됩니다.

#### 계정 연결 심사 시작 요건의 예외 

Business Manager 조직이 인증되지 않았고 조직 인증 심사의 시작 요건도 충족하지 않더라도, 다음 조건 중 하나에 해당하면 계정 연결 심사가 진행되어 거부될 수 있습니다.

- LINE MINI App 채널의 비즈니스 정보가 Business Manager 조직의 비즈니스 정보와 일치하지 않습니다.

자세한 내용은 [계정 연결 심사가 거부된 경우](https://developers.line.biz/en/docs/line-mini-app/service/business-manager-link/#account-linking-review-status-rejected)를 참고하세요.

### 계정 연결 심사 상태 

계정 연결 심사 상태는 다음과 같습니다.

| 상태 | 설명 |
| --- | --- |
| Unverified | [계정 연결 심사를 시작하기 위한 요구 사항](https://developers.line.biz/en/docs/line-mini-app/service/business-manager-link/#account-linking-review-requirements)을 충족하지 않았습니다. 조직 인증 심사가 완료되어 조직이 인증되면 계정 연결 심사가 시작됩니다. |
| Verified | 계정 연결 심사가 완료되었습니다. |
| Rejected | 계정 연결 심사가 거부되었습니다. 자세한 내용은 [계정 연결 심사가 거부된 경우](https://developers.line.biz/en/docs/line-mini-app/service/business-manager-link/#account-linking-review-status-rejected)를 참고하세요. |

#### 계정 연결 심사 상태 확인 방법 

계정 연결 심사 상태는 LINE Developers Console 또는 Business Manager에서 확인할 수 있습니다.

LINE Developers Console에서는 LINE MINI App 채널의 **Business Manager link** 탭에 있는 "Business Manager link" 섹션에서 상태를 확인할 수 있습니다.

![](https://developers.line.biz/media/line-mini-app/service/account-linking-review-status-in-console-en.webp)

Business Manager에서는 "Accounts & channels" 화면의 "Account linking review status"에서 상태를 확인할 수 있습니다.

![](https://developers.line.biz/media/line-mini-app/service/account-linking-review-status-in-bm-en.webp)

### 계정 연결 심사가 거부된 경우 

계정 연결 심사가 거부된 경우 다음과 같은 이유가 있을 수 있습니다.

- LINE MINI App 채널의 비즈니스 정보가 Business Manager 조직의 비즈니스 정보와 일치하지 않습니다.

LINE MINI App 채널의 비즈니스 정보와 Business Manager 조직의 비즈니스 정보를 확인한 다음, 상황에 맞게 조치하세요.

- [LINE MINI App 채널의 비즈니스 정보가 잘못된 경우](https://developers.line.biz/en/docs/line-mini-app/service/business-manager-link/#account-linking-review-status-rejected-line-mini-app)
- [Business Manager 조직의 비즈니스 정보가 잘못된 경우](https://developers.line.biz/en/docs/line-mini-app/service/business-manager-link/#account-linking-review-status-rejected-business-manager)
- [LINE MINI App 채널이 잘못된 Business Manager 조직에 연결된 경우](https://developers.line.biz/en/docs/line-mini-app/service/business-manager-link/#account-linking-review-status-rejected-wrong-organization)

#### LINE MINI App 채널의 비즈니스 정보가 잘못된 경우 

LINE MINI App 채널의 비즈니스 정보를 올바른 정보로 수정하세요. 비즈니스 정보를 수정하려면 LINE MINI App의 재심사가 필요합니다. 자세한 내용은 [인증된 MINI App 업데이트 후 재심사](https://developers.line.biz/en/docs/line-mini-app/service/update-service/)를 참고하세요.

LINE MINI App의 재심사가 완료되고 Published 상태의 LINE MINI App 채널에 수정 사항이 반영되면 [계정 연결 심사 재제출](https://developers.line.biz/en/docs/line-mini-app/service/business-manager-link/#account-linking-review-resubmission)을 요청하세요.

#### Business Manager 조직의 비즈니스 정보가 잘못된 경우 

- [Business Manager 조직이 미인증 상태인 경우](https://developers.line.biz/en/docs/line-mini-app/service/business-manager-link/#account-linking-review-status-rejected-business-manager-unverified)
- [Business Manager 조직이 인증된 상태인 경우](https://developers.line.biz/en/docs/line-mini-app/service/business-manager-link/#account-linking-review-status-rejected-business-manager-verified)

##### Business Manager 조직이 미인증 상태인 경우 

Business Manager 조직이 미인증 상태라면 조직의 비즈니스 정보를 올바른 정보로 수정하고 조직 인증 심사를 완료하세요. Business Manager 조직 인증 심사에 대한 자세한 내용은 LY for Business의 [03. 조직 인증 심사](https://www.lycbiz.com/jp/manual/BusinessManager/BMshare004/?list=21791)(일본어만 제공) 및 LINE for Business의 [Business Manager 심사는 언제 시작되며, 무엇을 심사하고, 얼마나 걸리나요?](https://help.linebiz.com/lineadshelp/s/article/L000001858?language=ja)(일본어만 제공)를 참고하세요.

조직 인증 심사가 완료되면 [계정 연결 심사 재제출](https://developers.line.biz/en/docs/line-mini-app/service/business-manager-link/#account-linking-review-resubmission)을 요청하세요.

##### Business Manager 조직이 인증된 상태인 경우 

Business Manager 조직이 인증된 상태라면 비즈니스 정보를 변경할 수 없습니다. 새 조직을 만들고 LINE MINI App 채널을 그 조직으로 이전하세요. 자세한 내용은 LINE for Business의 [연결된 계정이나 채널을 다른 조직으로 이전할 수 있나요?](https://help.linebiz.com/lineadshelp/s/article/L000001731?language=ja)(일본어만 제공)를 참고하세요.

조직 이전 후, 이전 대상 조직이 [계정 연결 심사의 시작 요건](https://developers.line.biz/en/docs/line-mini-app/service/business-manager-link/#account-linking-review-requirements)을 충족하면 계정 연결 심사가 시작됩니다.

#### LINE MINI App 채널이 잘못된 Business Manager 조직에 연결된 경우 

LINE MINI App 채널을 올바른 Business Manager 조직으로 이전하세요. 자세한 내용은 LINE for Business의 [연결된 계정이나 채널을 다른 조직으로 이전할 수 있나요?](https://help.linebiz.com/lineadshelp/s/article/L000001731?language=ja)(일본어만 제공)를 참고하세요.

조직 이전 후, 이전 대상 조직이 [계정 연결 심사의 시작 요건](https://developers.line.biz/en/docs/line-mini-app/service/business-manager-link/#account-linking-review-requirements)을 충족하면 계정 연결 심사가 시작됩니다.

### 계정 연결 심사 재제출 

#### 계정 연결 심사 재제출의 요구 사항 

계정 연결 심사를 재제출하려면 LINE MINI App 채널에 연결된 Business Manager 조직이 인증되어 있어야 합니다. 계정 연결 심사가 [계정 연결 심사 시작 요건의 예외](https://developers.line.biz/en/docs/line-mini-app/service/business-manager-link/#account-linking-review-requirements-exceptions)에 해당하여 거부되었다면, 계정 연결 심사 재제출을 요청하기 전에 조직 인증 심사를 완료하세요.

#### 계정 연결 심사 재제출 요청 방법 

계정 연결 심사 재제출은 Business Manager 조직 관리자가 요청해야 합니다. 과정은 다음과 같습니다.

1. Business Manager 메뉴에서 **Accounts & channels**를 클릭하여 "Accounts & channels" 화면을 엽니다.

   ![](https://developers.line.biz/media/line-mini-app/service/account-channel-en.webp)

1. 계정 연결 심사 재제출을 요청할 LINE MINI App 채널의 **Details**를 클릭합니다.

   ![](https://developers.line.biz/media/line-mini-app/service/rejected-details-en.webp)

1. **Resubmit request**를 클릭합니다.

   ![](https://developers.line.biz/media/line-mini-app/service/link-review-results-en.webp)

재제출을 요청하면 계정 연결 심사가 다시 시작됩니다.

## LINE MINI App 채널을 LINE 공식 계정에 연결하기 

LINE MINI App 채널을 같은 Business Manager 조직에 연결된 LINE 공식 계정에 연결할 수 있습니다.

현재 지원하는 연동 대상은 LINE 공식 계정뿐입니다. 향후 연결된 LINE 공식 계정의 [비즈니스 프로필](https://www.lycbiz.com/jp/manual/OfficialAccountManager/profile/)에 LINE MINI App 정보를 표시하는 기능 등을 포함하여 지원 기능을 확대할 계획입니다.

### LINE 공식 계정에 연결하기 위한 요구 사항 

LINE MINI App 채널을 LINE 공식 계정에 연결하려면 다음 조건을 모두 충족해야 합니다.

- LINE MINI App 채널이 Business Manager 조직에 연결되어 있고, [계정 연결 심사 상태](https://developers.line.biz/en/docs/line-mini-app/service/business-manager-link/#account-linking-review-status)가 verified입니다.
- LINE 공식 계정이 Business Manager 조직에 연결되어 있고, [계정 연결 심사 상태](https://developers.line.biz/en/docs/line-mini-app/service/business-manager-link/#account-linking-review-status)가 verified입니다 (\*).
- LINE MINI App 채널과 LINE 공식 계정이 같은 Business Manager 조직에 연결되어 있습니다.

\* LINE 공식 계정을 Business Manager 조직에 연결하는 방법은 LY for Business의 [02. 조직에 계정 연결하기](https://www.lycbiz.com/jp/manual/BusinessManager/BMshare003/)(일본어만 제공)를 참고하세요.

### LINE 공식 계정에 연결하는 방법 

<!-- note start -->

**LINE 공식 계정 연결은 해제할 수 없습니다**

LINE MINI App 채널을 LINE 공식 계정에 연결하면 연결을 해제할 수 없습니다.

<!-- note end -->

LINE MINI App 채널을 LINE 공식 계정에 연결하는 과정은 다음과 같습니다.

1. [연결할 LINE 공식 계정을 선택합니다](https://developers.line.biz/en/docs/line-mini-app/service/business-manager-link/#select-line-official-account)
1. [연결할 LINE MINI App 채널을 선택합니다](https://developers.line.biz/en/docs/line-mini-app/service/business-manager-link/#select-line-mini-app-channel)

다음 단계에서는 Business Manager를 사용합니다. 이 단계는 Business Manager 조직 관리자가 수행해야 합니다.

#### 1. 연결할 LINE 공식 계정을 선택합니다 

먼저 연결할 LINE 공식 계정을 선택합니다. Business Manager 메뉴에서 **LINE official account linking**을 클릭하여 "LINE Official account linking" 화면을 엽니다.

![](https://developers.line.biz/media/line-mini-app/service/line-official-account-linking-menu-en.webp)

<!-- tip start -->

**개발자가 Business Manager 조직 관리자이기도 한 경우**

개발자가 Business Manager 조직 관리자이기도 하다면, LINE MINI App 채널의 **Business Manager link** 탭에 있는 "LINE Official Account link" 섹션에서 Business Manager의 "LINE Official account linking" 화면을 열 수 있습니다.

![](https://developers.line.biz/media/line-mini-app/service/line-official-account-linking-from-line-mini-app-channel-en.webp)

<!-- tip end -->

연결할 LINE 공식 계정의 이름을 클릭합니다.

![](https://developers.line.biz/media/line-mini-app/service/line-official-account-linking-oa-name-en.webp)

#### 2. 연결할 LINE MINI App 채널을 선택합니다 

다음으로 선택한 LINE 공식 계정에 연결할 LINE MINI App 채널을 선택합니다. **Select target for linking**을 클릭합니다.

![](https://developers.line.biz/media/line-mini-app/service/select-target-for-linking-en.webp)

선택한 LINE 공식 계정과 같은 조직에 연결된 계정 및 채널의 목록이 표시됩니다. 연결할 LINE MINI App 채널의 **Select**를 클릭합니다.

![](https://developers.line.biz/media/line-mini-app/service/select-en.webp)

확인 화면이 표시됩니다. LINE 공식 계정과 LINE MINI App 채널이 올바른지 확인하고 주의 사항을 검토한 다음 **Link**를 클릭합니다.

![](https://developers.line.biz/media/line-mini-app/service/link-channel-en.webp)

## 관련 페이지 (일본어만 제공) 

- [Business Manager](https://www.lycbiz.com/jp/service/business-manager/)
- [02. 조직에 계정 연결하기](https://www.lycbiz.com/jp/manual/BusinessManager/BMshare003/)
- [03. 조직 인증 심사](https://www.lycbiz.com/jp/manual/BusinessManager/BMshare004/?list=21791)
- [LINE 공식 계정에 다른 서비스 계정 연결하기](https://www.lycbiz.com/jp/manual/BusinessManager/yahoo-display-linkage/)
- [Business Manager 심사는 언제 시작되며, 무엇을 심사하고, 얼마나 걸리나요?](https://help.linebiz.com/lineadshelp/s/article/L000001858?language=ja)
- [연결된 계정이나 채널을 다른 조직으로 이전할 수 있나요?](https://help.linebiz.com/lineadshelp/s/article/L000001731?language=ja)
