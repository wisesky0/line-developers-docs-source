# Mark as read API(이전 버전)

<!-- tip start -->

**읽음 처리에는 새 엔드포인트를 사용해 주십시오**

Mark as read API(이전 버전)는 계속 사용할 수 있습니다. 하지만 앞으로 사용자의 메시지를 읽음 처리하는 기능을 구현한다면, Messaging API의 [Mark messages as read](https://developers.line.biz/en/reference/messaging-api/#mark-as-read) 엔드포인트를 사용해 주십시오. "Mark messages as read" 엔드포인트는 별도의 신청이 필요 없으며 채팅 기능과 함께 사용할 수 있습니다.

<!-- tip end -->

<!-- note start -->

**선택 기능을 사용하려면 신청이 필요합니다**

필요한 신청서를 제출한 법인 사용자만 이 문서에 설명된 기능을 사용할 수 있습니다. LINE 공식 계정에서 이러한 기능을 사용하려면 영업 담당자 또는 [영업 파트너](https://www.lycbiz.com/jp/partner/sales/)에게 문의해 주십시오.

2026년 10월 말에 Mark as read API(이전 버전)의 신규 신청 접수를 종료합니다. 현재 Mark as read API(이전 버전)를 사용 중인 LINE 공식 계정은 신규 신청 접수가 종료된 이후에도 계속 사용할 수 있습니다.

<!-- note end -->

## 개요 

Mark as read API(이전 버전)를 사용하면 특정 사용자가 보낸 모든 메시지에 "읽음"을 표시할 수 있습니다.

## 자동 읽음 설정 기능 비활성화 

LINE 공식 계정은 사용자로부터 메시지를 받으면 자동으로 "읽음"을 표시하도록 설정되어 있습니다(자동 읽음 설정 기능). 하지만 Mark as read API(이전 버전)를 사용하면 이 설정이 비활성화됩니다.

따라서 Mark as read API(이전 버전)를 사용하는 LINE 공식 계정에서는 Mark as read API(이전 버전) 요청을 보내지 않는 한 사용자의 메시지에 "읽음"이 표시되지 않습니다.

<!-- note start -->

**"읽음" 표시 타이밍**

사용자로부터 새 메시지를 받을 때마다 Mark as read API(이전 버전) 요청을 보내는 것을 권장합니다. 요청을 보내기 전에 사용자에게 메시지를 보내면, 사용자 화면에는 "읽음"이 표시되지 않은 상태로 공식 LINE 계정에서 보낸 메시지처럼 보이게 됩니다.

<!-- note end -->

## 채팅 기능과 함께 사용하기 

LINE 공식 계정 관리자([LINE Official Account Manager](https://manager.line.biz/)) 또는 LINE Official Account Manager 앱에서 LINE 공식 계정의 채팅 기능을 통해 사용자에게 응답할 수 있습니다.

채팅 기능과 Mark as read API(이전 버전)는 함께 사용할 수 없습니다. Mark as read API(이전 버전)를 사용하기 시작하면 채팅 기능을 사용할 수 없게 되므로 유의해 주십시오.

## Mark as read API(이전 버전) 요청 재시도 

Mark as read API(이전 버전) 요청을 보냈을 때 상태 코드 5xx 오류가 발생하거나 요청이 시간 초과되면 요청을 재시도해 주십시오.

요청이 성공적으로 재시도되기 전에 사용자로부터 새 메시지를 받으면, 새 메시지를 포함한 모든 메시지에 "읽음"이 표시되니 유의해 주십시오.

## 참고 자료 

API 사양에 대한 자세한 내용은 법인 고객용 API 레퍼런스의 [Mark as read API(이전 버전)](https://developers.line.biz/en/reference/partner-docs/#mark-as-read)를 참조해 주십시오.
