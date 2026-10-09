# 액세스 토큰 관리(LINE Login v2.0)

<!-- warning start -->

**LINE Login v2.0은 더 이상 권장되지 않습니다(deprecated)**

이 페이지는 이전 버전인 LINE Login v2.0의 문서입니다. LINE Login v2.0은 [deprecated](https://developers.line.biz/en/glossary/#deprecated) 상태이며, [end-of-life](https://developers.line.biz/en/glossary/#end-of-life) 날짜는 아직 정해지지 않았습니다. 따라서 현재 버전인 LINE Login v2.1을 사용하는 것을 권장합니다. 종료(end-of-life)가 공지된 후 실제 종료되기까지는 일정한 유예 기간이 있습니다. 자세한 내용은 [LINE Login 버전](https://developers.line.biz/en/docs/line-login/overview/#versions)을 참고하십시오.

<!-- warning end -->

LINE Login API로 관리하는 액세스 토큰은 앱이 LINE Platform에 저장된 사용자 데이터(사용자 ID, 표시 이름, 프로필 이미지, 상태 메시지 등)에 접근할 수 있는 권한을 부여받았는지 확인하는 역할을 합니다.

이 주제에서는 [LINE Login v2.0](https://developers.line.biz/en/docs/line-login/overview/#versions) 엔드포인트를 사용하여 액세스 토큰을 관리하는 방법을 설명합니다.

## 사용자의 액세스 토큰 가져오기 

사용자 인증이 완료되면 LINE Platform이 액세스 토큰을 반환합니다.

이 시점에서 앱이 사용자 데이터에 접근할 수 있는 권한을 가지고 있다고 간주할 수 있습니다.

자세한 내용은 다음을 참고하십시오.

**LINE Login:**

- [웹 앱에 LINE Login(v2.0) 연동하기](https://developers.line.biz/en/docs/line-login/integrate-line-login-v2/)

<!-- note start -->

**액세스 토큰의 유효 기간**

액세스 토큰은 발급된 후 30일 동안 유효합니다. 액세스 토큰이 포함된 모든 응답에는 `expires_in` 속성에 토큰이 만료되기까지 남은 시간(초)도 포함됩니다.

<!-- note end -->

### 리프레시 토큰 

사용자 인증이 완료되면 액세스 토큰과 함께 리프레시 토큰이 반환됩니다.

액세스 토큰이 만료되면 리프레시 토큰을 사용하여 새 액세스 토큰을 가져올 수 있습니다. 자세한 내용은 LINE Login v2.0 API 레퍼런스의 [액세스 토큰 갱신](https://developers.line.biz/en/reference/line-login-v2/#refresh-access-token)을 참고하십시오.

<!-- note start -->

**리프레시 토큰의 유효 기간**

리프레시 토큰은 해당 액세스 토큰이 발급된 후 최대 90일 동안 유효합니다.

리프레시 토큰이 만료되면 사용자에게 다시 로그인하도록 안내하여 새 액세스 토큰을 발급받아야 합니다.

<!-- note end -->

## 액세스 토큰 검증하기 

앱이나 외부 서버에서 받은 액세스 토큰은 자체 서버에서 사용하기 전에 반드시 검증하십시오.

자세한 내용은 LINE Login v2.0 API 레퍼런스의 [액세스 토큰 유효성 검증](https://developers.line.biz/en/reference/line-login-v2/#verify-access-token)을 참고하십시오.

<!-- note start -->

**액세스 토큰을 검증한 후 추가로 확인해야 하는 조건**

LINE Login API가 액세스 토큰을 성공적으로 검증하면 응답에는 `client_id` 속성(채널 ID)과 `expires_in` 속성(토큰이 만료되기까지 남은 시간)이 포함됩니다. 액세스 토큰을 사용하기 전에 이 속성들이 다음 조건을 충족하는지 확인하십시오.

| 속성 | 조건 |
| ------------ | ------------------------------------------------------- |
| `client_id`  | 앱에 연결된 LINE Login 채널의 채널 ID |
| `expires_in` | 양수 값 |

<!-- note end -->
