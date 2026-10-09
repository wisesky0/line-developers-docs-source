# LINE Developers Console 개요

LY Corporation은 **LINE Platform**을 통해 서드파티 개발자에게 다음 기능을 제공합니다.

- LINE 계정의 자격 증명으로 사용자를 인증하는 기능(LINE Login)
- 사용자와 LINE 메시지를 주고받을 수 있는 기능(Messaging API)

**LINE Developers Console**과 같은 관리 도구에서 **채널**을 만들면, 개발자는 LINE 플랫폼을 통해 제공되는 기능을 사용할 수 있는 권한을 얻습니다.

[LINE Developers Console 로그인](https://developers.line.biz/console/)

LINE Developers Console에서는 **Developer**, **Provider**, **Channel**을 관리할 수 있습니다.

![Overview](https://developers.line.biz/media/line-developers-console/overview-01.png)

## Developer 

LINE Developers 사이트에서 LINE Developers Console에 접근하는 사람을 **Developer**(개발자)라고 합니다.

개발자를 프로바이더와 채널에 등록하면, 각 개발자가 LINE Developers Console에서 조회하거나 편집할 수 있는 정보를 제어할 수 있습니다.

예를 들어 한 개발자가 만든 채널의 역할을 다른 개발자에게 부여할 수 있습니다. 역할 부여에 대한 자세한 내용은 [역할 관리하기](https://developers.line.biz/en/docs/line-developers-console/managing-roles/)를 참조하십시오.

## Provider 

LINE Developers 사이트에서 서비스를 제공하고 이를 위해 사용자 정보를 얻는 개인 개발자, 회사 또는 조직을 **Service provider**(서비스 제공자)(LINE MINI App에서는 **Service company**(서비스 회사))라고 합니다.

서비스 제공자는 LINE Developers Console에 **Provider**(프로바이더)로 등록됩니다.

### 프로바이더 만들기 

1. 콘솔 홈의 Providers 페이지에서 **Create** 버튼을 클릭합니다.

1. **Create a new provider** 화면에서 원하는 **Provider name**을 입력하고 **Create**를 클릭하여 확인합니다.

<!-- tip start -->

**팁**

- 프로바이더 이름은 사용자 동의 화면에 표시됩니다. 사용자는 프로바이더 이름을 보고 서비스 제공자를 식별합니다. 따라서 프로바이더 이름은 임시 이름(예: 조직 내부에서만 사용하는 브랜드명, 프로젝트명 등)이어서는 안 됩니다.

  ![Sample Provider](https://developers.line.biz/media/line-developers-console/consent-screen-sample-provider.png)

- 회사나 조직으로서 서비스를 제공하는 경우 회사 또는 조직의 이름으로 프로바이더를 만드십시오.
- 서비스 제공자가 사용하는 채널은 같은 프로바이더 안에서 만들어야 합니다.

<!-- tip end -->

### 프로바이더 삭제하기 

프로바이더 역할에 따라 **Settings** 탭 하단의 **Delete** 버튼을 클릭하여 프로바이더를 삭제할 수 있습니다. 프로바이더 역할에 대한 자세한 내용은 [프로바이더 역할](https://developers.line.biz/en/docs/line-developers-console/managing-roles/#roles-for-provider)을 참조하십시오.

### 만들 수 있는 프로바이더 수 

다음 제한이 프로바이더 생성 수에 적용됩니다.

| 채널 생성 시 제한 | 설명 |
| --- | --- |
| LINE Developers Console 제한 | 각 개발자는 최대 10개의 프로바이더를 만들 수 있습니다. 11번째 프로바이더는 만들 수 없습니다. |

### 인증된 프로바이더 

인증된 프로바이더가 되면 사용자가 확인하는 채널 동의 화면에 "Certified"라는 텍스트가 표시됩니다. 또한 [프로바이더 페이지](https://developers.line.biz/en/docs/partner-docs/provider-page/)를 구성하고 게시할 수 있습니다.

![](https://developers.line.biz/media/line-developers-console/consent-screen-certified-provider-en.webp)

인증된 프로바이더는 프로바이더를 만든 서비스 제공자의 진위를 LY Corporation이 확인했음을 의미합니다. LY Corporation은 다음 사항을 확인합니다.

- 실제로 존재하는 조직인지 여부
- 해당 조직에 소속된 사람(또는 대표자)이 신청했는지 여부
- 공개된 개인정보 처리방침이 마련되어 있는지 여부

<!-- note start -->

**인증된 프로바이더가 되기 위한 필수 절차**

원칙적으로 법인 사용자만 프로바이더 인증 대상이 될 수 있습니다. 인증된 프로바이더가 되고자 하는 경우 별도의 신청이 필요합니다. 영업 담당자에게 문의하거나 [영업 파트너](https://www.lycbiz.com/jp/partner/sales/)에게 문의를 제출하십시오.

<!-- note end -->

<!-- note start -->

**참고**

- "Certified" 텍스트 표시는 서비스 제공자가 제공하는 서비스에 대해 LY Corporation이 지원하거나 보증한다는 의미가 아닙니다.
- 인증된 프로바이더의 이름을 변경하려면 LY Corporation에 심사를 신청해야 합니다.

<!-- note end -->

## Channel 

**Channel**(채널)을 사용하면 서비스 제공자가 LINE 플랫폼이 제공하는 기능을 사용할 수 있습니다.

LINE 플랫폼을 사용하는 서비스를 개발하려면 채널을 만들어야 합니다.

![Channel](https://developers.line.biz/media/messaging-api/getting-started/channel.png)

LINE 플랫폼은 채널과 연결된 자격 증명을 사용하여 개발자가 LINE 플랫폼을 사용할 권한이 있는지 확인합니다.

<!-- warning start -->

**사용자 데이터 보호를 위한 금지 사항**

LINE 플랫폼을 여러 서비스에 사용하는 경우, 각 서비스에서 얻은 LINE 사용자 데이터를 서로 연결하지 마십시오.

<!-- warning end -->

### 채널 만들기 

LINE 공식 계정을 만들면 Messaging API 채널을 만들 수 있습니다. 자세한 내용은 Messaging API 문서의 [Messaging API 시작하기](https://developers.line.biz/en/docs/messaging-api/getting-started/)를 참조하십시오.

그 밖의 채널을 만들려면 다음 단계를 따르십시오.

1. 프로바이더 페이지의 **Channels** 탭에서 만들려는 채널 유형을 선택합니다. LINE Developers Console에서 만들 수 있는 채널 유형은 다음과 같습니다.

   | 유형 | 설명 |
   | --- | --- |
   | [LINE Login](https://developers.line.biz/en/docs/line-login/) | LINE 계정의 자격 증명을 사용하여 개발하는 서비스의 사용자를 인증할 수 있습니다. |
   | Blockchain Service | 블록체인 서비스를 사용하는 서비스를 제공할 수 있습니다. |
   | LINE MINI App  | 네이티브 앱을 개발하지 않고 [LINE MINI App](https://developers.line.biz/en/docs/line-mini-app/quickstart/)을 통해 서비스를 제공할 수 있습니다. |

1. 채널 이름과 필수/선택 정보를 입력한 다음 **Create**를 클릭합니다.

   <!-- note start -->

   **채널 이름 제한**

   채널 이름에는 "LINE" 또는 이와 유사한 문자열을 포함할 수 없습니다.

   <!-- note end -->

   <!-- note start -->

   **LINE Login 채널 사용 시 주의 사항**

   - LINE Login 채널을 만들면 채널은 즉시 **Developing** 모드로 설정됩니다.
   - 채널이 **Developing** 상태이면 채널의 관리자(Admin) 또는 테스터(Tester)로 등록된 개발자만 LINE Login을 사용할 수 있습니다.
   - 최종 사용자가 LINE Login을 사용하도록 하려면 LINE Login 채널을 **Published**로 설정하십시오.

   <!-- note end -->

#### 채널과 프로바이더 연결에 대한 주의 사항 

채널을 만든 후에는 나중에 다른 프로바이더로 옮길 수 없습니다.

[LINE Official Account Manager](https://manager.line.biz/)에서 만든 기존 [LINE 공식 계정으로 Messaging API를 사용](https://developers.line.biz/en/docs/messaging-api/getting-started/#using-oa-manager)하는 경우, 초기 설정 중에 새 프로바이더를 만들거나 채널이 속할 기존 프로바이더를 선택해야 합니다. 이 경우에도 나중에 채널을 다른 프로바이더로 옮길 수 없습니다.

Messaging API 채널과 LINE Login 채널을 연결하는 서비스를 개발하는 경우, 두 채널을 같은 프로바이더 안에 만드십시오.

개발자가 제공하는 서비스를 사용하는 LINE 사용자에게는 프로바이더마다 서로 다른 사용자 ID가 부여됩니다. 서로 다른 프로바이더 아래의 채널에서는 사용자 ID로 같은 사용자를 식별할 수 없습니다.

![](https://developers.line.biz/media/line-developers-console/different-user-ids.png)

<!-- warning start -->

**채널을 만들 때 특별한 주의가 필요한 경우**

예를 들어 다음 경우에는 특별한 주의가 필요합니다.

- 채널과 프로바이더를 개인 또는 회사가 관리하는 경우
- 관련 없는 서비스나 회사의 채널을 하나의 프로바이더 아래에 만드는 경우
- 채널 관리 도구 등을 운영하는 서비스(회사)가 관리하는 프로바이더 아래에 채널을 만드는 경우

이러한 경우에는 나중에 채널을 프로바이더 간에 옮길 수 없고, 사용자에게 프로바이더마다 다른 사용자 ID가 부여되기 때문에 향후 문제가 생길 수 있습니다. 위험을 충분히 고려한 후 적절한 프로바이더 아래에 채널을 만드십시오.

<!-- warning end -->

### 채널 삭제하기 

채널 역할에 따라 **Basic Settings** 탭 하단의 **Delete** 버튼을 클릭하여 채널을 삭제할 수 있습니다.

채널 역할에 대한 자세한 내용은 [채널 역할](https://developers.line.biz/en/docs/line-developers-console/managing-roles/#roles-for-channel)을 참조하십시오.

### 만들 수 있는 채널 수 

다음 제한과 사양이 만들 수 있는 채널 수에 적용됩니다.

| 채널 생성 시 제한 또는 사양 | 설명 |
| --- | --- |
| LINE Developers Console 제한 | 개발자는 채널 유형과 관계없이 하나의 프로바이더 아래에서 관리자(Admin) 역할을 가진 채널을 최대 100개까지 소유할 수 있습니다. |
| LINE Official Account Manager 제한 | LINE Official Account Manager에 로그인한 각 계정은 LINE 공식 계정을 최대 100개까지 소유할 수 있습니다. |

<!-- tip start -->

**LINE Official Account Manager에 대하여**

LINE Developers Console에서 사용하는 것과 같은 계정으로 [LINE Official Account Manager](https://manager.line.biz/)에 로그인하여 LINE 공식 계정을 확인하고 설정할 수 있습니다.

<!-- tip end -->
