# LIFF 앱 및 서버에서 사용자 데이터 사용하기

사용자가 LIFF 브라우저에서 LIFF 앱을 실행하거나, `liff.init()` 메서드를 통해 로그인하여 외부 브라우저에서 LIFF 앱을 실행하면, LIFF 앱은 사용자의 프로필(사용자 ID, 표시 이름, 프로필 이미지, 이메일 주소)을 가져올 수 있습니다.

LIFF 앱이 이 사용자 데이터를 올바르게 처리하지 않으면 스푸핑(spoofing) 및 기타 공격에 취약해집니다.

이 페이지에서는 LIFF 앱을 연 사용자의 정보를 LIFF 앱이나 서버에서 안전하게 사용하는 방법을 설명합니다.

## 서버에서 사용자 데이터 사용하기 

서버에서 사용자 데이터를 사용하려면 LIFF 앱에서 ID 토큰 또는 액세스 토큰을 서버로 전송합니다. 서버는 LIFF 앱에서 전달받은 토큰을 LINE 플랫폼에 전송하여 사용자의 프로필을 안전하게 가져올 수 있습니다.

- [사용자 ID 토큰을 보내 사용자 데이터 가져오기](https://developers.line.biz/en/docs/liff/using-user-profile/#sending-id-token)
- [액세스 토큰을 보내 사용자 데이터 가져오기](https://developers.line.biz/en/docs/liff/using-user-profile/#sending-access-token)

<!-- warning start -->

**서버에 사용자 정보를 보내지 마십시오**

LIFF 앱에서 `liff.getDecodedIDToken()` 및 `liff.getProfile()`으로 얻은 사용자 프로필의 상세 정보를 서버로 보내지 마십시오.

<!-- warning end -->

<!-- tip start -->

**팁**

LIFF SDK는 LINE 플랫폼에서 받은 ID 토큰과 액세스 토큰을 검증합니다. `liff.getIDToken()` 및 `liff.getAccessToken()`으로 얻은 토큰은 신뢰할 수 있습니다.

<!-- tip end -->

### 사용자 ID 토큰을 보내 사용자 데이터 가져오기 

[`liff.getIDToken()`](https://developers.line.biz/en/reference/liff/#get-id-token)으로 얻은 ID 토큰을 서버로 보내면, 서버는 ID 토큰을 검증하고 [POST /oauth2/v2.1/verify](https://developers.line.biz/en/reference/line-login/#verify-id-token)를 사용하여 사용자의 프로필 정보를 안전하게 가져올 수 있습니다.

![Interactive SVG](https://developers.line.biz/media/liff/send-user-profile-via-id-token.svg)

### 액세스 토큰을 보내 사용자 데이터 가져오기 

[`liff.getAccessToken()`](https://developers.line.biz/en/reference/liff/#get-access-token)으로 얻은 액세스 토큰을 서버로 보내면, 서버는 토큰의 유효성([GET /oauth2/v2.1/verify](https://developers.line.biz/en/reference/line-login/#verify-access-token))을 검증하고, 채널 ID와 액세스 토큰의 유효 기간도 확인한 후 사용자의 프로필 정보([GET /v2/profile](https://developers.line.biz/en/reference/line-login/#get-user-profile))를 안전하게 가져올 수 있습니다.

[사용자가 LIFF 앱을 닫으면](https://developers.line.biz/en/docs/liff/developing-liff-apps/#behavior-when-closing-liff-app), 만료되지 않았더라도 액세스 토큰은 취소됩니다.

![Interactive SVG](https://developers.line.biz/media/liff/send-user-profile-via-access-token.svg)

## LIFF 앱에서 사용자 데이터 사용하기 

[`liff.getDecodedIDToken()`](https://developers.line.biz/en/reference/liff/#get-decoded-id-token) 또는 [`liff.getProfile()`](https://developers.line.biz/en/reference/liff/#get-profile)으로 얻은 사용자의 프로필 정보를 사용합니다.

![Interactive SVG](https://developers.line.biz/media/liff/use-user-profile-on-liff-app.svg)

<!-- warning start -->

**서버에 사용자 정보를 보내지 마십시오**

LIFF 앱에서 `liff.getDecodedIDToken()` 및 `liff.getProfile()`으로 얻은 사용자 프로필의 상세 정보를 서버로 보내지 마십시오.

<!-- warning end -->
