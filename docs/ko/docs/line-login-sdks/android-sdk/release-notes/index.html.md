# LINE SDK for Android 릴리스 노트

<!-- note start -->

**버전 5.0.0 이상의 릴리스 노트는 GitHub 저장소에서 확인할 수 있습니다**

LINE SDK for Android 버전 5.0.0 이상의 릴리스 노트는 GitHub 저장소에서 확인할 수 있습니다. 자세한 내용은 [Releases](https://github.com/line/line-sdk-android/releases)를 참조하십시오.

<!-- note end -->

2018년 11월 30일

## LINE SDK 4.0.10 for Android 출시 

LINE SDK 4.0.10 for Android가 출시되었습니다. LINE SDK 다운로드에 대한 자세한 내용은 아래를 참조하십시오.

- [LINE SDK 다운로드](https://developers.line.biz/en/docs/downloads/)

변경 사항:

- 기기에서 LINE이 무효화된 후 LINE Login으로 인증할 때 액티비티를 찾을 수 없는 문제를 수정했습니다.

더 쉽게 코딩할 수 있도록 계속 개선하겠습니다.

2018년 11월 20일

## LINE SDK 5.0.0 for Android 출시 

LINE SDK 5.0.0 for Android가 출시되었습니다. 설치 및 사용 방법은 [LINE SDK for Android 가이드](https://developers.line.biz/en/docs/line-login-sdks/android-sdk/)를 참조하십시오.

#### 변경 사항

##### LINE Login v2.1 및 Social API v2.1 지원

사용자가 LINE Login으로 앱에 로그인할 때 앱에 부여할 권한을 스코프로 설정할 수 있습니다. 스코프를 설정하면 액세스 토큰을 가져올 때 ID 토큰도 받을 수 있습니다. 이 토큰에는 로그인 요청에서 설정한 스코프에 따른 사용자 데이터가 포함됩니다.

앱에 로그인하는 사용자에게 봇을 친구로 추가하는 옵션을 표시할 수 있습니다. 로그인 응답과 Social API를 통해 사용자와 봇 간의 친구 관계 상태를 가져올 수 있습니다.

##### 오픈 소스 SDK

버전 5.0.0부터 LINE SDK for Android는 오픈 소스로 공개되었습니다. 제공되는 코드와 샘플을 확인하려면 [저장소](https://github.com/line/line-sdk-android)를 방문하십시오.

##### 상세 레퍼런스

이제 소스 코드를 기반으로 한 상세 레퍼런스에 접근할 수 있습니다. 자세한 내용은 [LINE SDK for Android 레퍼런스](https://developers.line.biz/en/reference/android-sdk/)를 참조하십시오.

2018년 3월 12일

## LINE SDK 4.0.8 for Android 출시 

LINE SDK 4.0.8 for Android가 출시되었습니다. LINE SDK 다운로드에 대한 자세한 내용은 아래를 참조하십시오.

- [LINE SDK 다운로드](https://developers.line.biz/en/docs/downloads/)

변경 사항:

- 사용자가 LINE을 처음 열기 전에 로그인을 시도할 때 발생하던 무한 로딩 표시 문제를 수정했습니다.

더 쉽게 코딩할 수 있도록 계속 개선하겠습니다.

2018년 2월 6일

## LINE SDK 4.0.7 for Android 출시 

LINE SDK 4.0.7 for Android가 출시되었습니다. LINE SDK 다운로드에 대한 자세한 내용은 아래를 참조하십시오.

- [LINE SDK 다운로드](https://developers.line.biz/en/docs/downloads/)

변경 사항:

- LINE이 인증 과정을 완료하기 전에 사용자가 홈 버튼으로 LINE을 종료한 후 SDK 앱을 열 때 발생하던 충돌을 수정했습니다.

더 쉽게 코딩할 수 있도록 계속 개선하겠습니다.

2017년 9월 29일

## LINE SDK 4.0.6 for Android 출시 

LINE SDK 4.0.6 for Android가 출시되었습니다. LINE SDK 다운로드에 대한 자세한 내용은 아래를 참조하십시오.

- [LINE SDK 다운로드](https://developers.line.biz/en/docs/downloads/)

변경 사항:

- LINE의 비밀번호 입력 화면이 표시된 상태에서 사용자가 뒤로 가기 버튼을 누를 때 발생하던 무한 로딩 표시 문제를 수정했습니다.

더 쉽게 코딩할 수 있도록 계속 개선하겠습니다.

2017년 6월 2일

## LINE SDK 4.0.5 for Android 출시 

LINE SDK 4.0.5 for Android가 출시되었습니다. LINE SDK 다운로드에 대한 자세한 내용은 아래를 참조하십시오.

- [LINE SDK 다운로드](https://developers.line.biz/en/docs/downloads/)

변경 사항:

- appcompat 25.0.0 이상을 사용할 때 로그인 인텐트로 `startActivityForActivity`를 호출하면 런타임 오류가 발생하던 문제를 수정했습니다.

2017년 4월 26일

## LINE SDK 4.0.4 for Android 출시 

LINE SDK 4.0.4 for Android가 출시되었습니다. LINE SDK 다운로드에 대한 자세한 내용은 아래를 참조하십시오.

- [LINE SDK 다운로드](https://developers.line.biz/en/docs/downloads/)

변경 사항:

- 앱 간 로그인 중 `onActivityResult`가 실행되지 않던 문제를 해결하기 위해 SDK의 인증 로직을 약간 변경했습니다.
- 4.0.2에서 사용자가 앱 간 로그인으로 처음 로그인할 때 `onActivityResult`가 "CANCEL" 결과를 반환하던 알려진 문제를 수정했습니다.

2017년 4월 10일

## LINE SDK 4.0.2 for Android 출시 

LINE SDK 4.0.2 for Android가 출시되었습니다. 다음 페이지에서 SDK를 다운로드할 수 있습니다.

- [LINE SDK 다운로드](https://developers.line.biz/en/docs/downloads/)

변경 사항:

- Android 4.x 기기에서 브라우저 로그인이 INTERNAL_ERROR와 함께 실패하던 문제를 수정했습니다.

알려진 문제:

- Android 4.x 기기에서는 사용자가 앱 간 로그인으로 처음 로그인할 때 `onActivityResult`가 "CANCEL" 결과를 반환합니다. 다만 두 번째 시도부터는 로그인에 성공할 수 있습니다. 이 문제는 LINE의 문제로 인해 발생하며, 향후 업데이트에서 해결될 예정입니다.

2016년 10월 14일

## LINE SDK 3.1.21 for Android 출시 

LINE SDK for Android가 버전 3.1.21로 업데이트되었습니다. 다음 페이지의 LINE SDK 아카이브에서 다운로드할 수 있습니다.

- [LINE SDK 다운로드](https://developers.line.biz/en/docs/downloads/)

변경 사항:

- 빌드 경고를 방지하도록 업데이트했습니다.

2016년 10월 11일

## LINE SDK 3.1.20 for Android 출시 

LINE SDK for Android가 버전 3.1.20으로 업데이트되었습니다. 다음 페이지의 LINE SDK 아카이브에서 다운로드할 수 있습니다.

- [LINE SDK 다운로드](https://developers.line.biz/en/docs/downloads/)

변경 사항:

- 호환성을 위해 Java 1.7로 빌드하도록 업데이트했습니다.

2016년 3월 15일

## LINE SDK 3.1.19 for Android 출시 

LINE SDK for Android가 버전 3.1.19로 업데이트되었습니다. 다음 페이지의 LINE SDK 아카이브에서 다운로드할 수 있습니다.

- [LINE SDK 다운로드](https://developers.line.biz/en/docs/downloads/)

변경 사항:

- 사용자가 다시 로그인을 시도할 때 로그인 오류가 발생하던 문제를 수정했습니다.

2016년 3월 9일

## LINE SDK 3.1.18 for Android 출시 

LINE SDK for Android가 버전 3.1.18로 업데이트되었습니다. 다음 페이지의 LINE SDK 아카이브에서 다운로드할 수 있습니다.

- [LINE SDK 다운로드](https://developers.line.biz/en/docs/downloads/)

변경 사항:

- 64비트 아키텍처 지원을 추가했습니다.
- 로그인 메서드에 locale 속성을 추가했습니다.
- 여러 버그를 수정했습니다.
