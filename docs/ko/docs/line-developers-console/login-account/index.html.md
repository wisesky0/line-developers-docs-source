# LINE Developers Console에 로그인하기

[LINE Developers Console](https://developers.line.biz/console/)에 로그인하려면 [비즈니스 ID](https://help2.line.me/business_id/web/?lang=en&contentId=20011264)와 개발자 계정이 필요합니다.

이 페이지에서는 LINE Developers Console에 로그인하는 방법, 개발자 계정을 만드는 방법, 비즈니스 ID와 LINE 계정을 연결하는 방법을 설명합니다.

## LINE Developers Console에 로그인하기 

LINE Developers Console에 로그인하려면 [LINE Developers 사이트](https://developers.line.biz/) 오른쪽 상단의 **[Log in to Console](https://developers.line.biz/console/)** 버튼을 클릭하십시오.

![Click Log in to Console](https://developers.line.biz/media/line-developers-console/login-account-02-en.png)

비즈니스 ID 로그인 화면이 표시됩니다. 로그인 방법을 선택하고 로그인하십시오. 다음 계정 중 하나로 비즈니스 ID에 로그인할 수 있습니다.

- [LINE 계정](https://developers.line.biz/en/docs/line-developers-console/login-account/#line-account)
- [비즈니스 계정](https://developers.line.biz/en/docs/line-developers-console/login-account/#business-account)
- [Yahoo! JAPAN ID](https://developers.line.biz/en/docs/line-developers-console/login-account/#yahoo-japan-id)(일본에서만 이용 가능)

로그인 방법의 차이에 대한 자세한 내용은 헬프 센터의 [비즈니스 ID 로그인 방법](https://help2.line.me/business_id/web/?lang=en&contentId=20011265)을 참조하십시오.

![](https://developers.line.biz/media/line-developers-console/login-account-01-en.png)

### LINE 계정으로 로그인하기 

LINE 계정으로 비즈니스 ID에 로그인할 때는 다음 방법 중 하나를 사용할 수 있습니다.

- **자동 로그인**: LINE이 설치된 스마트폰에서 별도의 조작 없이 로그인합니다.
- **이메일 주소로 로그인**: LINE 계정에 등록된 이메일 주소와 비밀번호를 사용하여 로그인합니다.
- **QR 코드로 로그인**: 스마트폰의 LINE 앱 QR 코드 리더로 화면에 표시된 QR 코드를 스캔하여 로그인합니다.
- **SSO(Single Sign On) 로그인**: "Continue as"가 표시된 확인 화면에서 로그인 버튼을 클릭하여 로그인합니다.

<!-- tip start -->

**LINE 계정으로 로그인할 때는 2단계 인증이 적용됩니다**

LINE 계정으로 로그인하면 2단계 인증이 적용됩니다. 컴퓨터의 브라우저에서 이메일 주소로 로그인하는 경우, LINE 계정의 이메일 주소와 비밀번호를 입력한 다음 스마트폰의 LINE 앱에 표시된 인증 코드를 입력해야 합니다.

![Two-factor authentication flow](https://developers.line.biz/media/news/login-flow-with-2fa-en.png)

2단계 인증을 한 번 완료하면 로그인에 사용한 브라우저에서는 1년 동안 2단계 인증을 다시 요구하지 않습니다. 또한 [LINE Official Account Manager](https://manager.line.biz/)에 2단계 인증을 사용하여 이미 로그인했다면, 같은 계정으로 LINE Developers Console에 다시 로그인할 때 인증을 요구하지 않습니다.

<!-- tip end -->

### 비즈니스 계정으로 로그인하기 

비즈니스 계정으로 비즈니스 ID에 로그인할 때는 비즈니스 ID에 등록된 이메일 주소와 비밀번호를 사용하십시오.

### Yahoo! JAPAN ID로 로그인하기 

Yahoo! JAPAN ID로 비즈니스 ID에 로그인하려면, Yahoo! JAPAN ID를 [Yahoo! JAPAN 비즈니스 ID](https://support.yahoo-net.jp/PccBizmanager/s/article/H000011271)(일본어만 제공)와 연결해야 합니다.

Yahoo! JAPAN ID로 비즈니스 ID에 로그인하는 기능은 일본에서만 이용할 수 있다는 점에 유의하십시오.

Yahoo! JAPAN ID로 로그인하는 방법에 대한 자세한 내용은 Yahoo! JAPAN ID 가이드의 [사용 가능한 로그인 방법은 무엇입니까?](https://id.yahoo.co.jp/login/login_methods.html)(일본어만 제공)를 참조하십시오.

## 개발자 계정 만들기(최초 로그인 시에만) 

LINE 계정 또는 비즈니스 계정으로 [LINE Developers Console](https://developers.line.biz/console/)에 처음 로그인하면 개발자 계정을 만드십시오. **Developer name**과 **Your email**을 입력합니다. [LINE Developers 약관](https://terms2.line.me/LINE_Developers_Agreement?lang=en)을 주의 깊게 읽고 동의한 다음 **Create my account**를 클릭합니다. 이 단계는 최초 로그인 시에만 필요합니다.

![Developer account creation screen](https://developers.line.biz/media/line-developers-console/developer-registration-01-en.webp)

개발자 계정이 만들어지면 개발자 계정이 생성되었다는 화면이 표시됩니다.

![Developer account creation completion screen](https://developers.line.biz/media/line-developers-console/developer-registration-02-en.webp)

## 계정 간의 관계 

LINE Developers Console을 사용하려면 개발자 계정이 필요합니다. 또한 개발자 계정은 항상 비즈니스 ID와 1:1로 연결됩니다. LINE Developers Console에 처음 로그인하여 [개발자 계정을 만들면](https://developers.line.biz/en/docs/line-developers-console/login-account/#register-as-developer), 비즈니스 ID와 개발자 계정이 자동으로 연결됩니다.

<!-- note start -->

**개발자 계정과 비즈니스 ID 연결에 대한 참고 사항**

- 개발자 계정과 연결된 비즈니스 ID를 삭제하면 해당 개발자 계정으로 더 이상 로그인할 수 없습니다.
- 개발자 계정과 연결된 비즈니스 ID는 나중에 변경할 수 없습니다.

<!-- note end -->

개발자 계정과 LINE 계정은 비즈니스 ID를 통해 연결됩니다. 개발자 계정과 연결된 비즈니스 ID에 LINE 계정을 연결하면, 해당 LINE 계정을 개발자 계정에도 연결할 수 있습니다. 계정을 연결하는 방법에 대한 자세한 내용은 [비즈니스 ID와 LINE 계정 연결하기](https://developers.line.biz/en/docs/line-developers-console/login-account/#link-business-account-with-line-account)를 참조하십시오.

개발자 계정, 비즈니스 ID, LINE 계정의 관계는 다음과 같습니다.

|  | 개발자 계정 | 비즈니스 ID | LINE 계정 |
| --- | --- | --- | --- |
| 개발자 계정 | — | 1:1 연결(\*) | 비즈니스 ID를 통해 연결(1:1) |
| 비즈니스 ID | 1:1 연결(\*) | — | 1:1 연결 가능 |
| LINE 계정 | 비즈니스 ID를 통해 연결(1:1) | 1:1 연결 가능 | — |

\* [개발자 계정을 만들면](https://developers.line.biz/en/docs/line-developers-console/login-account/#register-as-developer) 비즈니스 ID가 개발자 계정에 자동으로 연결됩니다.

<!-- tip start -->

**계정별 이메일 주소에 대하여**

개발자 계정, 비즈니스 ID, LINE 계정에 등록된 이름과 이메일 주소는 각각 별도로 관리됩니다. 따라서 각 계정에 등록된 이메일 주소가 서로 다를 수 있습니다.

<!-- tip end -->

### 새 비즈니스 ID를 만들 때의 계정 관계 

LINE Developers Console에 처음 로그인하여 새 비즈니스 ID를 만들 때, LINE 계정을 사용하는지 또는 비즈니스 계정(이메일 주소와 비밀번호)을 사용하는지에 따라 LINE 계정의 연결 방식이 달라집니다. 사용한 계정 유형과 개발자 계정 및 LINE 계정의 연결 관계는 다음과 같습니다.

| 계정 유형 | 개발자 계정에 연결되는 LINE 계정 |
| --- | --- |
| LINE 계정 | 비즈니스 ID를 만들 때 사용한 LINE 계정 |
| 비즈니스 계정<br>(이메일 주소와 비밀번호) | 없음(\*) |

\* 비즈니스 계정으로 만든 비즈니스 ID에는 언제든지 LINE 계정을 연결할 수 있습니다. 자세한 내용은 [비즈니스 ID와 LINE 계정 연결하기](https://developers.line.biz/en/docs/line-developers-console/login-account/#link-business-account-with-line-account)를 참조하십시오.

## 비즈니스 ID와 LINE 계정 연결하기 

LINE 계정 하나당 비즈니스 ID 하나만 연결할 수 있습니다. 하나의 LINE 계정에 여러 비즈니스 ID를 연결할 수는 없습니다.

비즈니스 ID와 LINE 계정을 연결하려면 다음 단계를 따르십시오.

1. [LINE Developers Console](https://developers.line.biz/console/)에 로그인합니다.
1. 화면 오른쪽 상단의 아이콘을 클릭합니다.

   ![Click the icon in the top-right corner of the screen](https://developers.line.biz/media/line-developers-console/linking-line-account-click-user-icon-en.png)

1. 계정 정보를 클릭한 다음 프로필 화면을 엽니다.

   ![Click account information](https://developers.line.biz/media/line-developers-console/linking-line-account-click-account-en.png)

1. **Go to Business ID Profile** 버튼을 클릭하여 비즈니스 ID 프로필로 이동합니다.

   ![Click the Go to Business ID profile](https://developers.line.biz/media/line-developers-console/linking-line-account-click-business-id-en.png)

1. LINE 계정 섹션에서 "Unlinked" 옆의 연결 아이콘을 클릭합니다.

   ![Link to LINE account](https://developers.line.biz/media/line-developers-console/linking-line-account-click-link-icon-en.png)

1. 비즈니스 ID와 연결할 LINE 계정으로 로그인합니다.
1. LINE 계정 로그인이 완료되면 해당 LINE 계정이 비즈니스 ID에 연결됩니다.

<!-- note start -->

**LINE 계정을 연결할 때 &quot;This LINE account is already in use.&quot; 메시지가 표시되는 경우**

비즈니스 ID에 연결하려는 LINE 계정은 다른 비즈니스 ID에 연결되어 있지 않아야 합니다. 이전에 다른 비즈니스 ID에 연결했던 LINE 계정에 비즈니스 ID를 연결하려고 하면 "This LINE account is already in use."라는 메시지가 표시되며 계정을 연결할 수 없습니다.

![Link to LINE account](https://developers.line.biz/media/line-developers-console/login-account-04-en.png)

<!-- note end -->

<!-- tip start -->

**개발자 계정과 LINE 계정 연결하기**

개발자 계정과 LINE 계정은 비즈니스 ID를 통해 연결됩니다. 개발자 계정과 연결된 비즈니스 ID에 LINE 계정을 연결하면, 해당 LINE 계정을 개발자 계정에도 연결할 수 있습니다.

<!-- tip end -->

## 비즈니스 ID에서 LINE 계정 연결 해제하기 

비즈니스 ID에서 LINE 계정의 연결을 해제하려면 비즈니스 ID에 이메일 주소와 비밀번호(비즈니스 계정)를 등록해야 합니다. 비즈니스 ID에서 LINE 계정의 연결을 해제하면 개발자 계정과 LINE 계정의 연결도 무효화됩니다.

비즈니스 ID에서 LINE 계정의 연결을 해제하려면 다음 단계를 따르십시오.

1. 연결을 해제할 LINE 계정이 연결된 비즈니스 ID로 [LINE Developers Console](https://developers.line.biz/console/)에 로그인합니다.
1. 화면 오른쪽 상단의 아이콘을 클릭합니다.

   ![Click the icon in the top-right corner of the screen](https://developers.line.biz/media/line-developers-console/linking-line-account-click-user-icon-en.png)

1. 계정 정보를 클릭한 다음 프로필 화면을 엽니다.

   ![Click account information](https://developers.line.biz/media/line-developers-console/linking-line-account-click-account-en.png)

1. **Go to Business ID Profile** 버튼을 클릭하여 비즈니스 ID 프로필로 이동합니다.

   ![Click the Go to Business ID Profile](https://developers.line.biz/media/line-developers-console/linking-line-account-click-business-id-en.png)

1. LINE 계정 섹션에서 삭제 아이콘을 클릭합니다.
   - 비즈니스 ID에 이메일 주소와 비밀번호(비즈니스 계정)를 등록하지 않았다면 삭제 아이콘이 표시되지 않습니다. 이 경우 이메일 주소 섹션의 편집 아이콘을 클릭하여 이메일 주소와 비밀번호를 등록하십시오.

   ![Unlink LINE account](https://developers.line.biz/media/line-developers-console/unlink-business-account-with-line-account-en.png)

1. 확인 화면에서 **Delete**를 클릭합니다.

   ![Click Delete on the confirmation screen](https://developers.line.biz/media/line-developers-console/unlink-business-account-click-delete-en.png)

1. 비즈니스 ID와 LINE 계정의 연결이 해제됩니다.

## 사용 가능한 기능 

생성할 수 있는 채널 유형은 LINE Developers Console에 로그인한 개발자 계정이 LINE 계정과 연결되어 있는지 여부에 따라 달라집니다.

사용 중인 개발자 계정에 부여된 역할에 따라 사용할 수 있는 기능이 제한될 수 있습니다. 자세한 내용은 [역할 관리하기](https://developers.line.biz/en/docs/line-developers-console/managing-roles/)를 참조하십시오.

개발자 계정의 LINE 계정 연결 상태에 따라 다음 채널 유형을 사용할 수 있습니다.

| 연결 상태 | LINE Login | Blockchain Service | LINE MINI App |
| --- | --- | --- | --- |
| LINE 계정과 연결된 개발자 계정 | ✅ | ✅ | ✅ |
| LINE 계정과 연결되지 않은 개발자 계정 | ✅ | ❌ | ✅ |

Messaging API 채널은 LINE 공식 계정을 만들어 생성할 수 있습니다. 자세한 내용은 Messaging API 문서의 [Messaging API 시작하기](https://developers.line.biz/en/docs/messaging-api/getting-started/)를 참조하십시오.
