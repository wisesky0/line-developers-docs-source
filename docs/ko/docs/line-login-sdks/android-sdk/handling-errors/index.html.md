# 오류 처리

`LineLoginResult` 객체의 `getResponseCode()` 메서드는 다음 응답 코드 중 하나를 반환합니다.

Response code | Description
-------------- | -------------
SUCCESS | 로그인에 성공했습니다.
CANCEL | 사용자가 로그인 과정을 취소하여 로그인에 실패했습니다.
AUTHENTICATION_AGENT_ERROR | 사용자가 동의 화면에서 Cancel 또는 Back 버튼을 눌러 로그인에 실패했습니다.
SERVER_ERROR | 서버 측 오류로 로그인에 실패했습니다.
NETWORK_ERROR | SDK가 LINE 플랫폼에 연결하지 못해 로그인에 실패했습니다.
INTERNAL_ERROR | 알 수 없는 오류로 로그인에 실패했습니다.
