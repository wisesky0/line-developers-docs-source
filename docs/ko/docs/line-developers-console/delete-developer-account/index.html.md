# 개발자 계정 삭제하기

LINE Developers Console을 더 이상 사용할 필요가 없다면 [개발자 계정](https://developers.line.biz/en/docs/line-developers-console/login-account/#register-as-developer)을 삭제할 수 있습니다. 개발자 계정을 삭제하면 해당 개발자 계정으로 LINE Developers Console에 더 이상 로그인할 수 없습니다.

<!-- warning start -->

**삭제된 개발자 계정은 복구할 수 없습니다**

개발자 계정을 삭제하면 복구할 수 없습니다. 삭제된 개발자 계정이 역할을 가지고 있던 프로바이더나 채널에 다른 개발자 계정이 접근할 수 없다면, 해당 프로바이더나 채널의 정보를 조회하거나 설정을 변경할 수 있는 사람이 아무도 없게 됩니다.

개발자 계정을 삭제하기 전에 활성 서비스에 지장이 가지 않도록 다른 개발자 계정에 필요한 역할을 부여하십시오.

<!-- warning end -->

## 개발자 계정을 삭제하기 위한 조건 

개발자 계정을 삭제하려면 다음 조건을 모두 충족해야 합니다.

- 삭제할 개발자 계정만 관리자(Admin) 역할을 가진 프로바이더가 없어야 합니다.
- 삭제할 개발자 계정만 관리자(Admin) 역할을 가진 채널이 없어야 합니다.

이 조건을 충족하지 않으면 개발자 계정을 삭제할 수 없습니다. 해당 프로바이더나 채널에 대해 다른 개발자 계정에 관리자(Admin) 역할을 부여하십시오. 프로바이더와 채널의 역할을 관리하는 방법은 [역할 관리하기](https://developers.line.biz/en/docs/line-developers-console/managing-roles/)를 참조하십시오.

프로바이더와 채널을 관리하는 방법에 대한 자세한 내용은 [프로바이더 및 채널 관리 모범 사례](https://developers.line.biz/en/docs/line-developers-console/best-practices-for-provider-and-channel-management/)를 참조하십시오.

<!-- note start -->

**관리자(Admin) 역할을 부여할 다른 개발자 계정이 없는 경우**

관리자(Admin) 역할을 부여할 다른 개발자 계정이 없다면 해당 프로바이더나 채널을 삭제하는 것을 고려할 수 있습니다. 다만 프로바이더나 채널을 삭제하면 활성 서비스를 이용할 수 없게 될 수 있습니다. 프로바이더나 채널을 삭제하기 전에 삭제가 서비스에 영향을 주지 않는지 반드시 확인하십시오.

Blockchain Service 채널과 LINE MINI App 채널은 LINE Developers Console에서 삭제할 수 없습니다. 이 채널들에 대해 삭제할 개발자 계정만 관리자(Admin) 역할을 가지고 있다면, 다른 개발자 계정에 관리자(Admin) 역할을 부여하십시오.

<!-- note end -->

## 개발자 계정 삭제하기 

개발자 계정을 삭제하려면 다음 단계를 따르십시오.

1. [LINE Developers Console](https://developers.line.biz/console/)에 로그인합니다.
1. 화면 오른쪽 상단의 프로필 아이콘을 클릭합니다.
1. 계정 정보를 클릭한 다음 [프로필 화면](https://developers.line.biz/console/profile)을 엽니다.
1. "Delete your developer account" 섹션에서 **Delete**를 클릭합니다.
1. 확인 화면의 정보를 검토하고, 표시된 Developer ID를 입력한 다음 **I agree to the above and wish to permanently delete my developer account.** 체크박스를 선택하고 **Delete**를 클릭합니다.

![](https://developers.line.biz/media/line-developers-console/delete-developer-account-confirmation-en.png)

개발자 계정 삭제가 완료되면 LINE Developers 사이트 홈페이지로 이동하며, 등록된 이메일 주소로 삭제 완료 이메일이 발송됩니다.

## 개발자 계정 삭제 후 상태 

개발자 계정을 삭제하면 다음과 같이 적용됩니다.

- 삭제된 개발자 계정으로 LINE Developers Console에 더 이상 로그인할 수 없습니다.
- 삭제된 개발자 계정이 역할을 가지고 있던 프로바이더나 채널에 더 이상 접근할 수 없습니다.

개발자 계정을 삭제하더라도 해당 계정과 연결된 [비즈니스 ID](https://help2.line.me/business_id/web/pc?lang=en&contentId=20011264)나 LINE 계정은 삭제되지 않는다는 점에 유의하십시오.

### LINE Developers Console 다시 사용하기 

같은 비즈니스 ID로 LINE Developers Console을 다시 사용하려면, [처음 로그인](https://developers.line.biz/en/docs/line-developers-console/login-account/#register-as-developer)할 때와 같은 방법으로 새 개발자 계정을 만드십시오. 이 경우 개발자 계정은 삭제된 개발자 계정과는 다른 계정으로 만들어지므로, 삭제된 개발자 계정이 가지고 있던 프로바이더 및 채널의 역할은 이전되지 않습니다. 개발자 계정 생성에 대한 자세한 내용은 [개발자 계정 만들기(최초 로그인 시에만)](https://developers.line.biz/en/docs/line-developers-console/login-account/#register-as-developer)를 참조하십시오.
