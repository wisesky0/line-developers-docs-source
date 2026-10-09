# 서비스 운영하기

서비스 설계자, 운영자, 마케터는 이 가이드라인을 반드시 읽고 이에 맞춰 준비하시기를 강력히 권장합니다.

<!-- table of contents -->

## LINE MINI App 링크 공유하기 

LINE MINI App 또는 그 페이지를 공유할 때는 [퍼머넌트 링크를 만들어야](https://developers.line.biz/en/docs/line-mini-app/develop/permanent-links/) 합니다. 특히 다음과 같은 방식으로 공유를 고려한다면 퍼머넌트 링크를 사용하세요.

- 웹 페이지, 이메일, 소셜 미디어 등 LINE 외부에서 링크를 공유하는 경우
- [LINE 공식 계정의 리치 메시지 또는 리치 메뉴를 통해 공유하는 경우](https://developers.line.biz/en/docs/line-mini-app/service/line-mini-app-oa/)
- [사용자 지정 액션 버튼을 구현하는 경우](https://developers.line.biz/en/docs/line-mini-app/develop/share-messages/)
- [서비스 메시지](https://developers.line.biz/en/docs/line-mini-app/develop/service-messages/)를 사용하여 공유하는 경우
- QR 코드가 포함된 LINE MINI Apps [POP 템플릿](https://creativelab-tips.line.me/ja/line-miniapp/creative/)(일본어만 제공)을 사용하는 경우

## 서비스 메시지 조건 

[서비스 메시지](https://developers.line.biz/en/docs/line-mini-app/develop/service-messages/)는 LINE MINI App에서 사용자 액션에 대한 확인 또는 응답으로만 보낼 수 있습니다.

### 서비스 메시지로 허용되는 알림 

서비스 메시지로 다음과 같은 알림을 보낼 수 있습니다.

| 유형 | 사용 사례 |
| --- | --- |
| 액션 확인 알림 | <ul><li>음식점 및 숙박 시설 예약 확인 알림</li><li>구매한 티켓 및 상품 확인 알림</li></ul> |
| 액션 결과 알림 | <ul><li>체크인 완료 알림</li><li>주문 발송 완료 알림</li></ul> |
| 리마인더 알림 | <ul><li>음식점 및 숙박 시설 예약 리마인더 알림</li><li>구매한 연극, 영화, 콘서트에 대한 리마인더</li></ul> |

### 서비스 메시지로 허용되지 않는 알림 

서비스 메시지로 다음과 같은 알림은 보낼 수 없습니다.

- LINE MINI App에서의 사용자 액션에 대한 확인 또는 응답이 아닌 알림. 예를 들어 자판기에서 티켓을 구매했을 때의 구매 완료 알림이나 리마인더 알림 등이 여기에 해당합니다.
- 할인, 쇼핑 리워드, 신제품, 할인 쿠폰 또는 프로모션 정보가 포함된 광고 및 이벤트 알림.

허용되지 않는 내용의 서비스 메시지가 전송되면 일정 기간 동안 서비스 메시지 API 사용이 금지됩니다. 이용약관을 반복해서 위반하면 LINE MINI App이 LINE에서 삭제될 수 있습니다.

### 메시지 수 제한 

- 사용자 액션 1회당 최대 5개의 메시지를 보낼 수 있습니다. 이 제한은 액션 확인, 액션 결과, 리마인더 알림 각각의 사용 사례에 적용됩니다.
- 메시지 수 제한은 사용 시나리오에 따라 변경될 수 있습니다. 제한이 변경되면 LY Corporation이 [심사](https://developers.line.biz/en/docs/line-mini-app/submit/submission-guide/) 시점에 알려 드립니다.

### 서비스 메시지 템플릿 

- LINE MINI App 채널에 [서비스 메시지 템플릿을 추가하세요](https://developers.line.biz/en/docs/line-mini-app/develop/service-messages/#service-message-templates).
- LINE MINI App 채널마다 최대 20개의 템플릿을 설정할 수 있습니다.

## 채널 동의 간소화 

LIFF 앱이 사용자 정보를 가져오거나 사용자에게 메시지를 보내려면, 사용자가 LIFF 앱에 처음 접속할 때 채널 동의 화면에서 해당 권한에 동의해야 합니다.

LINE MINI App에서는 "채널 동의 간소화" 기능을 사용하면 사용자가 LINE MINI App에 처음 접속할 때 채널 동의 화면을 건너뛰고 바로 LINE MINI App을 사용할 수 있습니다.

다만 "채널 동의 간소화" 기능은 [사용자 ID](https://developers.line.biz/en/glossary/#user-id)를 가져오는 권한에만 적용됩니다. 사용자 프로필 정보를 가져오거나 메시지를 보내는 데 필요한 권한은 해당 권한이 필요한 시점에 LINE MINI App 내에서 인증 화면이 표시됩니다.

"채널 동의 간소화" 기능을 사용하면 사용자가 LINE MINI App에 더 쉽게 접속할 수 있습니다. 사용자 경험을 개선하려면 "채널 동의 간소화" 기능을 활성화하는 것을 권장합니다.

일본에서 새로 만든 LINE MINI App 채널은 "채널 동의 간소화" 기능이 항상 활성화되어 있습니다.

자세한 내용은 [LINE MINI App 인증 흐름](https://developers.line.biz/en/docs/line-mini-app/develop/channel-consent-simplification/)을 참고하세요.
