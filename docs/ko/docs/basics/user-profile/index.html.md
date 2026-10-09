# 사용자 프로필 정보 가져오기

[Messaging API](https://developers.line.biz/en/docs/messaging-api/overview/), [LINE Login](https://developers.line.biz/en/docs/line-login/overview/), [LINE Front-end Framework (LIFF)](https://developers.line.biz/en/docs/liff/overview/), [LINE MINI App](https://developers.line.biz/en/docs/line-mini-app/discover/introduction/)에서 사용자 프로필 정보를 가져올 수 있습니다.

가져올 수 있는 프로필 정보의 종류는 가져오는 방법에 따라 다릅니다. 또한 사용자의 이메일 주소와 주소처럼 별도의 신청이나 계약이 필요한 프로필 정보도 있습니다.

이 페이지에서는 사용자 프로필 정보의 종류와 가져오는 방법을 설명합니다.

<!-- table of contents -->

## 사용자 프로필 정보란 

사용자는 LINE 앱의 **Settings** > **Profile**에서 이름과 프로필 사진 같은 프로필 정보를 설정할 수 있습니다. **Profile**에서 설정할 수 있는 정보에 대한 자세한 내용은 LINE 고객센터의 [Your profile](https://help.line.me/line/smartphone/pc?lang=en&contentId=20000134)을 참조하세요.

![Users can set their profile information in the LINE app](https://developers.line.biz/media/basics/my-profile-en.png)

이 **Profile** 외에도 다음과 같은 종류의 프로필 정보가 있습니다.

- [Common Profile](https://developers.line.biz/en/docs/basics/user-profile/#what-is-common-profile)
- [LINE Profile+](https://developers.line.biz/en/docs/basics/user-profile/#what-is-line-profile-plus)

### Common Profile 

Common Profile은 사용자가 LINE 앱 또는 Yahoo! JAPAN에 등록한 프로필 정보를 조합하여 만든 프로필입니다. 사용자는 Account Center에서 Common Profile을 설정할 수 있습니다.

![Users can set their Common Profile in the Account Center](https://developers.line.biz/media/basics/quick-fill-ja.png)

Common Profile에 대한 정보는 LINE 사용자 가이드의 [Set Common Profile to use Quick-fill](https://guide.line.me/ja/account-and-settings/quick-fill.html)(일본어로만 제공됨)을 참조하세요.

### LINE Profile+ 

사용자는 LINE 앱에서 **Settings** > **Profile** > **LINE Profile+**로 이동하여 일반 프로필 정보 외에도 주소와 전화번호 같은 추가 정보를 등록할 수 있습니다.

![Users can set additional profile information with LINE Profile+.](https://developers.line.biz/media/basics/profile-plus-en.png)

**LINE Profile+**에서 사용자는 다음 정보를 설정할 수 있습니다.

- 이름(성, 이름, 미들 네임, 이름의 발음 등)
- 성별
- 생일(**Settings** > **Profile** > **Birthday**에 등록한 정보도 LINE Profile+에 표시됩니다)
- 전화번호(**Settings** > **Account** > **Phone number**에 등록한 정보도 LINE Profile+에 표시됩니다)
- 이메일 주소(**Settings** > **Account** > **Email address**에 등록한 정보도 LINE Profile+에 표시됩니다)
- 주소(우편번호, 도/주, 시, 상세 주소 등)

이 정보를 LINE Profile+에 등록해 두면 LINE 패밀리 앱이나 외부 서비스를 이용할 때 주소나 전화번호 등을 직접 입력하지 않아도 됩니다. 자세한 내용은 LINE 고객센터의 "Your profile" 섹션에 있는 [LINE Profile+](https://help.line.me/line/smartphone/pc?lang=ja&contentId=20000134)(일본어로만 제공됨)를 참조하세요.

LINE Profile+에 등록된 프로필 정보를 사용하는 방법에 대한 자세한 내용은 법인 고객용 옵션 문서의 [LINE Profile+](https://developers.line.biz/en/docs/partner-docs/line-profile-plus/)를 참조하세요.

## 프로필 정보를 가져오는 방법 

LINE Platform에서는 다음 방법으로 사용자 프로필 정보를 가져올 수 있습니다.

- 방법 1: Messaging API의 [Get profile](https://developers.line.biz/en/reference/messaging-api/#get-profile) 엔드포인트에서 가져오기
- 방법 2: LINE Login의 [Get user information](https://developers.line.biz/en/reference/line-login/#userinfo) 엔드포인트에서 가져오기
- 방법 3: LINE Login의 [Get user profile](https://developers.line.biz/en/reference/line-login/#get-user-profile) 엔드포인트에서 가져오기
- 방법 4: LINE Login ID 토큰의 [payload](https://developers.line.biz/en/docs/line-login/verify-id-token/#payload)에서 가져오기
- 방법 5: LIFF의 [liff.getProfile()](https://developers.line.biz/en/reference/liff/#get-profile) 메서드로 가져오기
- 방법 6: LIFF의 [liff.getDecodedIDToken()](https://developers.line.biz/en/reference/liff/#get-decoded-id-token) 메서드를 사용하여 [payload](https://developers.line.biz/en/docs/line-login/verify-id-token/#payload)에서 가져오기
- 방법 7: LINE MINI App의 [Common Profile Quick-fill](https://developers.line.biz/en/docs/line-mini-app/quick-fill/overview/) 기능을 사용하여 가져오기

방법 1~6은 LINE 프로필과 LINE Profile+의 정보를 가져올 수 있습니다. 방법 7은 Common Profile의 정보를 가져올 수 있습니다.

기본 프로필 정보만 가져올 수 있으며, 사용자의 [subprofile](https://developers.line.biz/en/glossary/#subprofile)은 가져올 수 없습니다.

각 방법으로 가져올 수 있는 프로필 정보의 종류에 대한 자세한 내용은 [가져올 수 있는 프로필 정보의 종류](https://developers.line.biz/en/docs/basics/user-profile/#profile-information-types)를 참조하세요.

## 가져올 수 있는 프로필 정보의 종류 

가져올 수 있는 프로필 정보의 종류는 가져오는 방법에 따라 다릅니다.

아래 표는 [프로필 정보를 가져오는 방법](https://developers.line.biz/en/docs/basics/user-profile/#how-to-get-profile)에서 설명한 방법 1~7로 가져올 수 있는 프로필 정보의 종류를 보여 줍니다.

| 프로필 정보 | 방법 1</br>Messaging API의</br>[Get profile](https://developers.line.biz/en/reference/messaging-api/#get-profile)</br>엔드포인트 | 방법 2</br>LINE Login의</br>[Get user information](https://developers.line.biz/en/reference/line-login/#userinfo)</br>엔드포인트 | 방법 3</br>LINE Login의</br>[Get user profile](https://developers.line.biz/en/reference/line-login/#get-user-profile)</br>엔드포인트 | 방법 4</br>LINE Login ID 토큰의</br>[Payload](https://developers.line.biz/en/docs/line-login/verify-id-token/#payload) | 방법 5</br>[liff.getProfile()](https://developers.line.biz/en/reference/liff/#get-profile) | 방법 6</br>[liff.getDecodedIDToken()](https://developers.line.biz/en/reference/liff/#get-decoded-id-token)의</br>[Payload](https://developers.line.biz/en/docs/line-login/verify-id-token/#payload) | 방법 7</br>LINE MINI App의</br>[Common Profile Quick-fill](https://developers.line.biz/en/docs/line-mini-app/quick-fill/overview/) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 사용자 ID | ✅ (`userId`) | ✅ (`sub`) | ✅ (`userId`) | ✅ (`sub`) | ✅ (`userId`) | ✅ (`sub`) | ❌ |
| 표시 이름 | ✅ (`displayName`) | ✅ (`name`) | ✅ (`displayName`) | ✅ (`name`) | ✅ (`displayName`) | ✅ (`name`) | ❌ |
| 프로필 이미지 | ✅ (`pictureUrl`) | ✅ (`picture`) | ✅ (`pictureUrl`) | ✅ (`picture`) | ✅ (`pictureUrl`) | ✅ (`picture`) | ❌ |
| 상태 메시지 | ✅ (`statusMessage`) | ❌ | ✅ (`statusMessage`) | ❌ | ✅ (`statusMessage`) | ❌ | ❌ |
| 언어 | ✅ (`language`) | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| 이메일 주소 | ❌ | ❌ | ❌ | ✅ (`email`) | ❌ | ✅ (`email`) | ✅ (`email`) |
| 이름 | ❌ | ❌ | ❌ | ✅ (`given_name`, `family_name` 등) | ❌ | ✅ (`given_name`, `family_name` 등) | ✅ (`given-name`, `family-name` 등) |
| 성별 | ❌ | ❌ | ❌ | ✅ (`gender`) | ❌ | ✅ (`gender`) | ✅ (`sex-enum`) |
| 생일 | ❌ | ❌ | ❌ | ✅ (`birthdate`) | ❌ | ✅ (`birthdate`) | ✅ (`bday-year`, `bday-month` 등) |
| 주소 | ❌ | ❌ | ❌ | ✅ (`address`) | ❌ | ✅ (`address`) | ✅ (`address-level1`, `address-level2` 등) |
| 전화번호 | ❌ | ❌ | ❌ | ✅ (`phone_number`) | ❌ | ✅ (`phone_number`) | ✅ (`tel`) |

방법 4와 방법 6으로 이메일 주소를 가져오려면 사용자의 이메일 주소에 접근하는 권한을 요청해야 합니다. 자세한 내용은 LINE Login 문서의 [사용자 이메일 주소 접근 권한 요청](https://developers.line.biz/en/docs/line-login/integrate-line-login/#applying-for-email-permission)을 참조하세요.

또한 방법 4와 방법 6으로 이름, 성별, 생일, 주소, 전화번호를 가져오려면 법인 사용자를 위한 옵션인 LINE Profile+를 신청해야 합니다. LINE Profile+에 대한 자세한 내용은 법인 고객용 옵션 문서의 [LINE Profile+](https://developers.line.biz/en/docs/partner-docs/line-profile-plus/)를 참조하세요.

방법 7로 프로필 정보를 가져오려면 Quick-fill 기능의 사용을 신청해야 합니다. Quick-fill 사용 신청에 대한 자세한 내용은 LINE MINI App 문서의 [Common Profile Quick-fill 개요](https://developers.line.biz/en/docs/line-mini-app/quick-fill/overview/)를 참조하세요.
