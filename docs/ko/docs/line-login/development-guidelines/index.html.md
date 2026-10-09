# LINE Login 개발 가이드라인

LINE Login을 사용하는 웹 앱을 개발할 때는 다음 개발 가이드라인을 따르십시오.

**금지 사항**

- [LINE Platform에 대량 요청 금지](https://developers.line.biz/en/docs/line-login/development-guidelines/#prohibiting-mass-requests-to-line-platform)

**필수 사항**

- [사용자가 앱을 탈퇴하면 앱 권한 해제하기](https://developers.line.biz/en/docs/line-login/development-guidelines/#deauthorize)

**권장 사항**

- [로그 저장하기](https://developers.line.biz/en/docs/line-login/development-guidelines/#save-logs)

<!-- note start -->

**Note**

LINE Login 개발의 기본 규칙은 [Terms and Policies](https://developers.line.biz/en/terms-and-policies/)에 설명된 내용을 기반으로 합니다.

<!-- note end -->

## 금지 사항 

### LINE Platform에 대량 요청 금지 

부하 테스트를 목적으로 LINE Platform에 대량의 [인증 요청](https://developers.line.biz/en/docs/line-login/integrate-line-login/#making-an-authorization-request) 또는 [LINE Login API](https://developers.line.biz/en/reference/line-login/) 요청을 보내지 마십시오. 웹 앱의 부하 테스트를 하려면 LINE Platform에 대량의 요청을 발생시키지 않는 테스트 환경을 준비하십시오.

<!-- note start -->

**Note**

요청 한도(rate limit)를 초과하면 `429 Too Many Requests`가 반환되며 오류가 발생합니다.

<!-- note end -->

## 필수 사항 

### 사용자가 앱을 탈퇴하면 앱 권한 해제하기 

LINE Login을 연동한 앱(웹사이트, 스마트폰 앱 등)에서 사용자가 탈퇴하거나, 사용자가 앱과 LINE 앱의 연결을 해제하는 경우에는 다음 작업을 수행해야 합니다.

1. 사용자를 대신하여 [사용자가 권한을 부여한 앱 권한 해제](https://developers.line.biz/en/reference/line-login/#deauthorize) 엔드포인트를 사용하여 사용자가 승인한 권한을 해제합니다.
1. 사용자가 앱에서 탈퇴하거나 앱과 LINE 앱의 연결을 해제할 때 어떤 일이 일어나는지를 함수 근처나 사용자가 가입 또는 권한 부여 시 동의하는 이용약관에 다음과 같이 명시합니다.
   - 예: 서비스를 해지하면 LY Corporation에 해지 사실이 통보되고, 서비스와 LINE 앱의 연결이 해제됩니다.
   - 예: 이 작업을 수행하면 LY Corporation에 통보되며, 서비스와 LINE 앱의 연결이 해제됩니다.

다음 사용 사례에서는 권한 해제가 필요합니다.

![Steps from linking your account to deauthorize app](https://developers.line.biz/media/line-login/development-guidelines/deauthorize-your-app-en.webp)

사용자가 LINE 계정으로 LINE Login을 연동한 앱에 로그인하고 채널 동의 화면에서 [앱을 승인](https://developers.line.biz/en/docs/line-login/integrate-line-login/#authorization-process)하면, 해당 앱이 LINE 앱의 **Settings** > **Account** > **Authorized apps**에 표시됩니다. 사용자가 앱에서 탈퇴한 후에도 권한이 남아 있지 않도록 앱 권한을 해제하십시오.

사용자가 앱에 부여한 권한을 해제하는 방법에 대한 자세한 내용은 LINE Login 문서의 [Managing authorized apps](https://developers.line.biz/en/docs/line-login/managing-authorized-apps/)를 참고하십시오.

## 권장 사항 

### 로그 저장하기 

문제가 발생했을 때 개발자가 원인과 범위를 원활하게 조사할 수 있도록 [인증 요청](https://developers.line.biz/en/docs/line-login/integrate-line-login/#making-an-authorization-request)과 [LINE Login API](https://developers.line.biz/en/reference/line-login/) 요청에 대한 로그를 일정 기간 저장하는 것을 권장합니다.

#### 인증 요청 로그 

[인증 요청](https://developers.line.biz/en/docs/line-login/integrate-line-login/#making-an-authorization-request)을 할 때 다음 정보를 로그로 저장하는 것을 권장합니다.

- 인증 요청을 보낸 시간
- 인증 요청의 파라미터

구체적으로는 다음 형식으로 로그 파일에 저장하십시오.

| 인증 요청을 보낸 시간 | 인증 요청의 파라미터 |
| --- | --- |
| Mon, 16 Jul 2021 10:20:10 GMT | `https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=xxxxxxxxxx...` |

#### 인증 코드 또는 오류 응답 

[인증 요청](https://developers.line.biz/en/docs/line-login/integrate-line-login/#making-an-authorization-request)을 통해 [인증 코드](https://developers.line.biz/en/docs/line-login/integrate-line-login/#receiving-the-authorization-code) 또는 [오류 응답](https://developers.line.biz/en/docs/line-login/integrate-line-login/#receiving-an-error-response)을 받으면 다음 정보를 로그로 저장하는 것을 권장합니다.

- 인증 코드 또는 오류 응답을 받은 시간
- 요청 메서드
- 인증 코드 또는 오류 응답의 로그

구체적으로는 다음 형식으로 로그 파일에 저장하십시오.

| 응답을 받은 시간 | 요청 메서드 | 인증 코드 또는 오류 응답의 로그 |
| --- | --- | --- |
| Mon, 16 Jul 2021 10:20:20 GMT | GET | `/callback?code=Zfl2WjsWcn2XBBWApcty&state=n5B9b9FR2BWjloDzEskZMmGysITRTYpjLkM6oD5qfmA` |

#### LINE Login API 요청의 시간 로그 

[LINE Login API](https://developers.line.biz/en/reference/line-login/) 요청을 할 때 다음 정보를 로그로 저장하는 것을 권장합니다.

- [응답 헤더](https://developers.line.biz/en/reference/line-login/#response-headers)의 요청 ID(`x-line-request-id`)
- API 요청을 보낸 시간
- 요청 메서드
- API 엔드포인트
- LINE Platform이 반환한 [상태 코드](https://developers.line.biz/en/reference/line-login/#status-codes)

구체적으로는 다음 형식으로 로그 파일에 저장하십시오.

| 요청 ID(`x-line-request-id`) | API 요청을 보낸 시간 | 요청 메서드 | API 엔드포인트 | 상태 코드 |
| --- | --- | --- | --- | --- |
| 8d48c8577e739b9c | Mon, 16 Jul 2021 10:20:22 GMT | POST | `https://api.line.me/oauth2/v2.1/token` | 200 |

<!-- tip start -->

**로그에 보관하면 유용한 추가 정보**

실행 중인 웹 앱의 요구 사항에 따라 위 정보 외에도 다음 정보를 저장해 두면 문제가 발생했을 때 조사하는 데 도움이 됩니다.

- LINE Login API 요청 본문
- API 요청 후 LINE Platform이 반환한 응답 본문

<!-- tip end -->

<!-- note start -->

**로그는 제공하지 않습니다**

문의가 있더라도 인증 요청 로그나 LINE Login API 요청 로그 등은 제공하지 않습니다. 로그는 LINE Login을 사용하여 웹 앱을 개발하는 개발자가 직접 저장해야 합니다.

<!-- note end -->
