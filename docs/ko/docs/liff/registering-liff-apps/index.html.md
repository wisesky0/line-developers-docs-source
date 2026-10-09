# 채널에 LIFF 앱 추가하기

[LINE Developers Console](https://developers.line.biz/console/)에서 LINE Login 채널에 LIFF 앱을 추가하면 LIFF 앱을 LINE 안에서 또는 외부 브라우저에서 실행할 수 있습니다.

<!-- tip start -->

**LIFF 앱은 LINE MINI App으로 만드는 것을 권장합니다**

앞으로 LIFF와 LINE MINI App은 하나의 브랜드로 통합될 예정입니다. 이 통합에 따라 LIFF는 LINE MINI App에 통합됩니다. 따라서 새 LIFF 앱은 LINE MINI App으로 만들 것을 권장합니다. 자세한 내용은 [2025년 2월 12일](https://developers.line.biz/en/news/2025/02/12/line-mini-app/)의 뉴스를 참조하세요.

<!-- tip end -->

## 시작하기 전에 

다음 작업을 완료했는지 확인하세요.

- 앱을 위한 [채널을 생성](https://developers.line.biz/en/docs/liff/getting-started/)했습니다.
- [LIFF 스타터 앱 체험하기](https://developers.line.biz/en/docs/liff/trying-liff-app/) 또는 [LIFF 앱 개발하기](https://developers.line.biz/en/docs/liff/developing-liff-apps/)의 안내에 따라 LIFF 앱을 원하는 서버에 배포했습니다.

## 채널에 LIFF 앱 추가하기 

각 채널에는 최대 30개의 LIFF 앱을 추가할 수 있습니다.

1. [LINE Developers Console](https://developers.line.biz/console/)에서 LIFF 앱을 추가할 LINE Login 채널을 선택한 다음 **LIFF** 탭을 클릭합니다.

1. **Add**를 클릭합니다.

1. 아래에 나열된 항목을 순서대로 입력합니다. 설정은 나중에 언제든지 변경할 수 있습니다.

   **기본 정보**

   | 항목 | 설명 | 사용자에게 표시되는 위치 |
   | --- | --- | --- |
   | LIFF app name | LIFF 앱의 이름입니다. LIFF 앱 이름에는 "LINE" 또는 이와 유사한 문자열이나 부적절한 문자열을 포함할 수 없습니다. | <ul><li>[다른 LIFF 앱이 열릴 때 표시되는 메시지](https://developers.line.biz/en/docs/liff/opening-liff-app/#messages-liff-to-liff)</li><li>[멀티 탭 뷰](https://developers.line.biz/en/docs/liff/overview/#multi-tab-view)</li></ul> |
   | Size | LIFF 앱 뷰의 크기입니다. 다음 중 하나를 선택합니다.<ul><li>`Compact`</li><li>`Tall`</li><li>`Full`</li></ul><br/><img src="/media/liff/overview/viewTypes.png" width="375px"> | - |
   | Endpoint URL | LIFF 웹 앱의 URL입니다(예: `https://example.com`). 이 URL은 LIFF URL로 LIFF 앱을 실행할 때 사용됩니다.<br />URL 스킴은 **https**여야 합니다. URL fragment(#URL-fragment)는 지정할 수 없습니다. | [LIFF 브라우저](https://developers.line.biz/en/docs/liff/overview/#liff-browser)의 헤더(도메인 이름만 표시) |
   | Scopes \*1 | 일부 LIFF SDK 메서드가 동작하는 데 필요한 스코프입니다.<ul><li>`openid`: [`liff.getIDToken()`](https://developers.line.biz/en/reference/liff/#get-id-token) 및 [`liff.getDecodedIDToken()`](https://developers.line.biz/en/reference/liff/#get-decoded-id-token)을 사용하는 데 필요한 스코프입니다.</li><li>`email`: [`liff.getIDToken()`](https://developers.line.biz/en/reference/liff/#get-id-token) 또는 [`liff.getDecodedIDToken()`](https://developers.line.biz/en/reference/liff/#get-decoded-id-token)을 사용하여 사용자의 이메일 주소를 가져오는 데 필요한 스코프입니다. \*2 <li>`profile`: [`liff.getProfile()`](https://developers.line.biz/en/reference/liff/#get-profile) 또는 [`liff.getFriendship()`](https://developers.line.biz/en/reference/liff/#get-friendship)을 사용하는 데 필요한 스코프입니다.</li><li>`chat_message.write`: [`liff.sendMessages()`](https://developers.line.biz/en/reference/liff/#send-messages)를 사용하는 데 필요한 스코프입니다. 계정 유형에 따라 이 옵션은 **View all** 아래에 나타날 수 있습니다. \*3</li></ul> | LIFF 앱 실행 시 권한 동의 화면 |
   | Add friend option \*4 | [친구 추가 옵션](https://developers.line.biz/en/docs/line-login/link-a-bot/)의 설정입니다.<ul><li>`On (normal)`: LIFF 앱의 권한 동의 화면에 LINE 공식 계정을 친구로 추가하는 옵션을 표시합니다.</li><li>`On (aggressive)`: LIFF 앱의 권한 동의 화면 다음에 사용자가 LINE 공식 계정을 친구로 추가할지 확인하는 화면을 표시합니다.</li><li>`Off`: LINE 공식 계정을 친구로 추가하는 옵션을 표시하지 않습니다.</li></ul> | LIFF 앱 실행 시 권한 동의 화면 |

   **옵션**

   | 항목 | 설명 |
   | --- | --- |
   | Scan QR | 이 채널에 추가한 LIFF 앱에서 [`liff.scanCodeV2()`](https://developers.line.biz/en/reference/liff/#scan-code-v2)를 사용하는 경우 이 설정을 활성화하세요. |
   | Module mode  | LIFF 앱을 모듈 모드로 사용하는 경우 이 설정을 활성화하세요. **Module mode**를 활성화하면 헤더의 액션 버튼이 숨겨집니다. 이 옵션은 LIFF 앱 뷰의 크기로 **Full**을 선택한 경우에만 표시됩니다. |

   \*1 스코프 사용을 등록한 법인 고객에게 표시되는 스코프에 대한 자세한 내용은 법인 고객용 옵션 문서의 [LINE Profile+](https://developers.line.biz/en/docs/partner-docs/line-profile-plus/)를 참조하세요.</br> \*2 LINE Login 채널에서 OpenId Connect 이메일 권한을 신청한 경우에만 표시됩니다.<br> \*3 LIFF 간 전환 후에는 LIFF 앱에서 `chat_message.write` 스코프가 비활성화될 수 있습니다. 자세한 내용은 [LIFF 앱 간 전환 후 "chat_message.write" 스코프에 대해](https://developers.line.biz/en/docs/liff/opening-liff-app/#about-chat-message-write-scope)를 참조하세요.<br> \*4 LINE Login 채널에만 표시됩니다.

1. **Add**를 클릭합니다.

   LIFF 앱을 추가하면 LIFF ID와 LIFF URL이 생성됩니다.

   | 항목 | 설명 |
   | --- | --- |
   | LIFF ID | LIFF 앱의 ID입니다.<br>예: `1234567890-AbcdEfgh` |
   | LIFF URL | LIFF 앱에 접근하는 URL입니다. 사용자가 LIFF URL에 접근하면 LY Corporation이 제공하는 LIFF 서버를 거쳐 개발자가 제공하는 LIFF 앱 서버(엔드포인트 URL)로 리디렉션됩니다.<br>예: `https://liff.line.me/1234567890-AbcdEfgh` |

## LIFF 탭에서 LIFF 앱의 표시 순서 

LINE Login 채널의 **LIFF** 탭에서 LIFF 앱은 다음 순서로 표시됩니다.

1. 2023년 5월 23일 이후에 LINE Login 채널에 추가된 LIFF 앱은 추가한 날짜의 내림차순으로 표시됩니다.
1. 2023년 5월 23일 이전에 LINE Login 채널에 추가된 LIFF 앱은 특정 순서 없이 표시됩니다.

![Examples of LIFF apps displayed on the LIFF tab](https://developers.line.biz/media/liff/order-of-liff-apps-en.webp)

## 기타 작업 

LINE Developers Console의 **LIFF** 탭에서 다음 작업도 수행할 수 있습니다.

- LIFF 앱 설정 편집
- 채널에서 LIFF 앱 삭제

## 다음 단계 

채널에 LIFF 앱을 추가한 후에는 LIFF 앱을 열어 보세요.

- [LIFF 앱 열기](https://developers.line.biz/en/docs/liff/opening-liff-app/)
