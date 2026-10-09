# 역할 관리하기

프로바이더와 채널의 역할을 관리하면 개발자가 [LINE Developers Console](https://developers.line.biz/console/)에서 조회하고 편집할 수 있는 정보를 제어할 수 있습니다. 이 페이지에서는 프로바이더와 채널에 등록된 개발자에게 부여할 수 있는 역할의 종류를 설명합니다.

프로바이더와 채널에는 각각 별도의 역할이 있습니다.

- [프로바이더 역할](https://developers.line.biz/en/docs/line-developers-console/managing-roles/#roles-for-provider)
- [채널 역할](https://developers.line.biz/en/docs/line-developers-console/managing-roles/#roles-for-channel)

## 프로바이더 역할 

프로바이더에 등록된 개발자에게는 관리자(Admin) 역할 또는 멤버(Member) 역할을 부여할 수 있습니다.

프로바이더 접근 권한을 부여하지 않고 채널 접근 권한만 부여할 수도 있습니다. 이 경우 해당 개발자의 프로바이더 역할은 "No role"이 됩니다.

|                                          | Admin | Member | No role \*1 |
| ---------------------------------------- | ----- | ------ | ----------- |
| 프로바이더 이름 조회                       | ✅    | ✅     | ✅          |
| 프로바이더 ID 조회                         | ✅    | ✅ \*2 | ✅ \*2      |
| 프로바이더 이름 편집                       | ✅    | ❌     | ❌          |
| 프로바이더 삭제 \*3                        | ✅    | ❌     | ❌          |
| 프로바이더에 연결된 채널 목록 조회          | ✅    | ❌     | ❌          |
| 프로바이더 아래에 채널 만들기              | ✅    | ❌     | ❌          |
| 프로바이더에 개발자 추가 또는 삭제          | ✅    | ❌     | ❌          |
| 프로바이더 역할 설정 조회 또는 편집         | ✅    | ❌     | ❌          |

\*1 프로바이더에 연결된 채널에 대한 접근 권한이 있는 경우에만 해당합니다.

\*2 **Provider settings** 화면은 조회할 수 없지만, 개발자가 프로바이더를 선택하면 URL에 프로바이더 ID가 포함됩니다.

\*3 기존 채널이 있는 프로바이더는 삭제할 수 없습니다.

<!-- note start -->

**프로바이더 역할과 채널 역할에 대하여**

프로바이더 역할과 채널 역할에 대해 다음 사항에 유의하십시오.

- 프로바이더에서 관리자(Admin) 역할을 가지고 있더라도 채널 접근 권한이 없으면 프로바이더에 연결된 채널의 상세 정보를 볼 수 없습니다.
- 개발자에게 프로바이더 접근 권한을 부여하더라도 프로바이더에 연결된 채널에 대한 접근 권한이 자동으로 부여되지는 않습니다.
- 프로바이더에서 개발자를 삭제할 때 **Also delete the selected developer(s) from the channels that belong to this provider.**를 선택하더라도, 상태가 "Pending"인 채널에서는 해당 개발자가 삭제되지 않습니다.

<!-- note end -->

<!-- tip start -->

**프로바이더의 "Member"와 "No role"의 차이는 무엇입니까?**

프로바이더의 "Member"와 "No role"은 모두 프로바이더 이름만 조회할 수 있습니다.

개발자에게 프로바이더의 멤버(Member) 역할을 부여하면, 채널의 **Roles** 탭에서 **Import from provider**를 클릭하는 것만으로 해당 개발자를 프로바이더에 연결된 채널에 추가할 수 있습니다.

**Import from provider**는 채널과 프로바이더 모두에서 관리자(Admin) 역할을 가진 개발자 계정만 사용할 수 있습니다.

![Import from provider](https://developers.line.biz/media/line-developers-console/managing-roles-en.webp)

<!-- tip end -->

### 프로바이더에서 개발자 추가, 역할 편집, 개발자 삭제하기 

**Roles** 탭을 열려면 다음 단계를 따르십시오.

1. [LINE Developers Console](https://developers.line.biz/console/) 사이드바에서 프로바이더를 선택합니다.
1. **Roles** 탭을 클릭합니다.

   | 작업 | 단계 |
   | --- | --- |
   | 추가 | **Invite by email**을 클릭하고 이메일 주소를 등록한 다음 개발자의 역할을 설정하고 **Send invitation**을 클릭합니다. 개발자는 "You have received an invitation to join a provider"라는 제목의 이메일을 받게 됩니다. 개발자가 초대를 수락하면 프로바이더에 추가됩니다. |
   | 편집 | **Edit**를 클릭한 다음 드롭다운 목록에서 역할을 선택합니다. |
   | 삭제 | 멤버 이름 옆의 체크박스를 선택하고 **Delete selected**를 클릭합니다. |

## 채널 역할 

개발자에게 채널의 관리자(Admin), 멤버(Member), 테스터(Tester) 역할을 부여할 수 있습니다. 각 채널 유형에서 이 역할들이 수행할 수 있는 작업은 다음과 같습니다.

- [모든 채널 유형 공통](https://developers.line.biz/en/docs/line-developers-console/managing-roles/#roles-for-channel-common)
- [LINE Login 채널](https://developers.line.biz/en/docs/line-developers-console/managing-roles/#roles-for-channel-line-login)
- [Messaging API 채널](https://developers.line.biz/en/docs/line-developers-console/managing-roles/#roles-for-channel-messaging-api)
- [LINE MINI App 채널](https://developers.line.biz/en/docs/line-developers-console/managing-roles/#roles-for-channel-line-mini-app)

### 모든 채널 유형 공통 

#### **Basic settings** 탭 

|  | Admin | Member | Tester | No role |
| --- | --- | --- | --- | --- |
| **Channel ID** 조회 | ✅ | ✅ | ✅ | ❌ |
| **Region to provide the service** 조회 \*1 | ✅ | ❌ | ❌ | ❌ |
| **Company or owner's country or region** 조회 또는 편집 \*1 | ✅ | ❌ | ❌ | ❌ |
| **Channel icon** 조회 | ✅ | ✅ | ✅ | ❌ |
| **Channel icon** 편집 | ✅ | ❌ | ❌ | ❌ |
| **Channel name** 조회 | ✅ | ✅ | ✅ | ❌ |
| **Channel name** 편집 | ✅ | ❌ | ❌ | ❌ |
| **Channel description** 조회 | ✅ | ✅ | ❌ | ❌ |
| **Channel description** 편집 | ✅ | ❌ | ❌ | ❌ |
| **Email address** 조회 또는 편집 | ✅ | ❌ | ❌ | ❌ |
| **Privacy policy URL** 조회 | ✅ | ✅ | ❌ | ❌ |
| **Privacy policy URL** 편집 | ✅ | ❌ | ❌ | ❌ |
| **Terms of use URL** 조회 | ✅ | ✅ | ❌ | ❌ |
| **Terms of use URL** 편집 | ✅ | ❌ | ❌ | ❌ |
| **App types** 조회 | ✅ | ❌ | ❌ | ❌ |
| **Permissions** 조회 | ✅ | ❌ | ❌ | ❌ |
| **Channel secret** 조회 | ✅ | ❌ | ❌ | ❌ |
| **Assertion Signing Key** 조회 또는 편집 | ✅ | ❌ | ❌ | ❌ |
| **Your user ID** 조회 \*2 | ✅ | ✅ | ✅ | ❌ |
| **Require two-factor authentication** 조회 또는 편집 \*3 | ✅ | ❌ | ❌ | ❌ |
| **Localization (multi-language support)** 조회 또는 편집 \*1 | ✅ | ❌ | ❌ | ❌ |
| **Linked LINE Official Account** 조회 또는 편집 \*1 | ✅ | ❌ | ❌ | ❌ |
| **Email address permission** 조회 또는 편집 \*1 | ✅ | ❌ | ❌ | ❌ |
| **Delete this channel** 실행 \*4 | ✅ | ❌ | ❌ | ❌ |
| **Leave channel** 실행 | ❌ | ✅ | ✅ | ❌ |

\*1 LINE Login 채널 또는 LINE MINI App 채널에서만 표시됩니다.<br>\*2 LINE Login 채널 또는 Messaging API 채널에서만 표시됩니다. 두 역할 모두에서, LINE 계정과 연결되지 않은 비즈니스 ID를 사용하는 경우 **Your user ID**가 표시되지 않습니다. 자세한 내용은 [사용 가능한 기능](https://developers.line.biz/en/docs/line-developers-console/login-account/#available-features)을 참조하십시오.<br>\*3 LINE MINI App 채널에서만 표시됩니다.<br>\*4 Blockchain Service 채널과 LINE MINI App 채널은 삭제할 수 없습니다.

#### **Roles** 탭 

|                            | Admin | Member | Tester | No role |
| -------------------------- | ----- | ------ | ------ | ------- |
| **Roles** 탭 조회 또는 편집 | ✅    | ❌     | ❌     | ❌      |

#### "Developing" 상태의 채널에서 테스트하기 

| Admin | Member | Tester | No role |
| ----- | ------ | ------ | ------- |
| ✅    | ❌     | ✅     | ❌      |

LINE Login 채널, LINE MINI App 채널, Blockchain Service 채널에만 상태가 있습니다. LINE Login 채널에서 개발자 계정에 테스터(Tester) 역할을 부여한 후의 테스트 방법은 ["Developing" 상태의 LINE Login 채널로 테스트하는 방법](https://developers.line.biz/en/docs/line-login/getting-started/#how-to-test-login-channel)을 참조하십시오.

### LINE Login 채널 

|                                 | Admin | Member | Tester | No role |
| ------------------------------- | ----- | ------ | ------ | ------- |
| **LINE Login** 탭 조회 또는 편집 | ✅    | ❌     | ❌     | ❌      |
| **LIFF** 탭 조회 또는 편집       | ✅    | ❌     | ❌     | ❌      |

### Messaging API 채널 

|                                    | Admin | Member | Tester | No role |
| ---------------------------------- | ----- | ------ | ------ | ------- |
| **Messaging API** 탭 조회 또는 편집 | ✅    | ❌     | ❌     | ❌      |
| **LIFF** 탭 조회                    | ✅    | ❌     | ❌     | ❌      |
| **Security** 탭 조회 또는 편집      | ✅    | ❌     | ❌     | ❌      |
| **Webhook errors** 탭 조회 \*1      | ✅    | ✅     | ❌     | ❌      |
| **QR code** 조회 \*2               | ✅    | ✅     | ✅     | ❌      |

\*1 **Webhook errors** 탭은 **Messaging API** 탭에서 **Error statistics aggregation**이 활성화된 채널에서만 표시됩니다.

\*2 관리자(Admin) 역할을 가진 개발자에게는 **Messaging API** 탭 아래에 표시됩니다. 멤버(Member) 역할 또는 테스터(Tester) 역할을 가진 개발자에게는 **Basic settings** 탭 아래에 표시됩니다.

### LINE MINI App 채널 

|                                               | Admin | Tester | No role |
| --------------------------------------------- | ----- | ------ | ------- |
| **Web app settings** 탭 조회 또는 편집         | ✅    | ❌     | ❌      |
| **Review request** 탭 조회 또는 편집           | ✅    | ❌     | ❌      |
| **Business information** 탭 조회 또는 편집     | ✅    | ❌     | ❌      |
| **Contact information** 탭 조회 또는 편집      | ✅    | ❌     | ❌      |
| **Service message template** 탭 조회 또는 편집 | ✅    | ❌     | ❌      |
| **Business Manager link** 탭 조회 또는 편집    | ✅    | ❌     | ❌      |
| **In-app purchase** 탭 조회 또는 편집          | ✅    | ❌     | ❌      |
| **LIFF URL** 조회 \*                          | ✅    | ✅     | ❌      |

\* 관리자(Admin) 역할을 가진 개발자에게는 **Web app settings** 탭 아래에 표시됩니다. 테스터(Tester) 역할을 가진 개발자에게는 **Basic settings** 탭 아래에 표시됩니다. 테스터(Tester) 역할을 가진 개발자는 "Developing" 상태의 LIFF URL만 조회할 수 있습니다.

### 채널에서 개발자 추가, 역할 편집, 개발자 삭제하기 

[LINE Developers Console](https://developers.line.biz/console/)에서 채널의 **Roles** 탭을 여십시오.

| 작업 | 단계 |
| --- | --- |
| 추가 | <ul><li>**Invite by email**을 클릭하고 이메일 주소를 등록한 다음 개발자의 역할을 설정하고 **Send inivitaion**을 클릭합니다. 개발자는 "You have received an invitation to join a channel"이라는 제목의 이메일을 받게 됩니다. 개발자가 초대를 수락하면 채널에 추가됩니다.</li><li>**Import from provider**를 클릭하고 같은 프로바이더 아래에 이미 등록된 멤버를 선택합니다. **Import**를 클릭하면 즉시 개발자에게 역할이 부여됩니다. 이 경우 개발자가 초대를 수락할 필요는 없습니다.</li></ul> |
| 편집 | **Edit**를 클릭하고 드롭다운 목록에서 역할을 선택합니다. |
| 삭제 | 멤버 이름 옆의 체크박스를 선택하고 **Delete selected**를 클릭합니다. |

<!-- note start -->

**Messaging API 채널에 관리자(Admin) 역할을 가진 개발자를 추가할 때의 제한 사항**

개발자 A가 Messaging API 채널 100개에서 관리자(Admin)로 등록되어 있다면, 개발자 B가 만든 Messaging API 채널에는 개발자 A를 관리자(Admin)로 추가할 수 없습니다. 다만 멤버(Member) 또는 테스터(Tester)로는 추가할 수 있습니다.

이는 [만들 수 있는 채널 수](https://developers.line.biz/en/docs/line-developers-console/overview/#number-of-channels)에 설명된 "LINE Official Account Manager 제한 사항"과 충돌하기 때문입니다.

<!-- note end -->

#### "초대 시 입력한 이메일 주소"는 초대에만 사용됩니다 

**Invite by email**을 클릭할 때 입력한 이메일 주소는 채널 초대에만 사용됩니다. 초대 시 지정한 역할은 이메일에서 **Accept the invitation**을 클릭한 후 LINE Developers Console에 로그인하는 개발자 계정에 부여됩니다.

"초대 시 입력한 이메일 주소"와 "역할이 부여되는 개발자 계정의 이메일 주소"는 같을 필요가 없습니다. 따라서 초대에 사용한 이메일 주소와 다른 이메일 주소로 등록된 개발자 계정에 역할이 의도치 않게 부여될 수 있다는 점에 유의하십시오.

<!-- note start -->

**초대를 받았을 때 주의 사항**

초대를 받아 개발자 계정에 역할을 부여받을 때는 다음 사항에 유의하십시오.

- LINE Developers Console에 로그인한 적이 없다면, 역할을 부여받아야 하는 개발자 계정으로 LINE Developers Console에 로그인하십시오.
- 이미 LINE Developers Console에 로그인한 상태라면, 현재 로그인한 개발자 계정이 역할을 부여받아야 하는 계정인지 확인하십시오.

<!-- note end -->
