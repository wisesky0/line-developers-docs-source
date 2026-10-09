# 텍스트의 글자 수 세기

Messaging API는 텍스트의 글자 수를 UTF-16 코드 단위(16비트)로 셉니다. 여러 코드 단위로 이루어진 문자(예: 일부 한자, 유니코드 이모지)는 글자 수가 두 개 이상으로 계산됩니다. 예를 들어 유니코드 이모지 🍎는 두 개의 코드 단위로 표현됩니다. 따라서 🍎는 한 글자가 아니라 두 글자로 계산됩니다.

Messaging API가 [LINE 이모지](https://developers.line.biz/en/docs/messaging-api/emoji-list/)가 포함된 텍스트의 글자 수를 셀 때는 이모지 자리 표시자(`$`)가 이모지의 대체 텍스트로 바뀝니다. 대체 텍스트는 LINE 이모지를 표시할 수 없는 기기에서 이모지 대신 표시되는 텍스트입니다. 따라서 LINE 이모지가 포함된 텍스트 메시지를 보낼 때는 글자 수가 최대 길이를 의도치 않게 초과하여 메시지 전송이 실패할 수 있습니다. LINE은 LINE 이모지의 대체 텍스트를 공개하지 않습니다.

다만 아래에 나열된 속성은 UTF-16 코드 단위가 아니라 [그래핌 클러스터(grapheme cluster)](https://unicode.org/reports/tr29/) 단위로 계산됩니다.

| 유형 | 속성 |
| --- | --- |
| 모든 [액션 객체](https://developers.line.biz/en/reference/messaging-api/#action-objects) | <ul><li>`label`</li></ul> |
| [포스트백 액션 객체](https://developers.line.biz/en/reference/messaging-api/#postback-action) | <ul><li>`displayText`</li><li>`fillInText`</li><li>`label`</li><li>`text`</li></ul> |
| [메시지 액션 객체](https://developers.line.biz/en/reference/messaging-api/#message-action) | <ul><li>`label`</li><li>`text`</li></ul> |
| [버튼 템플릿 메시지](https://developers.line.biz/en/reference/messaging-api/#buttons) | <ul><li>`text`</li><li>`title`</li></ul> |
| [확인 템플릿 메시지](https://developers.line.biz/en/reference/messaging-api/#confirm) | <ul><li>`text`</li></ul> |
| [캐러셀 템플릿 메시지](https://developers.line.biz/en/reference/messaging-api/#carousel) | <ul><li>`text`</li><li>`title`</li></ul> |
| [리치 메뉴 객체](https://developers.line.biz/en/reference/messaging-api/#rich-menu-object) | <ul><li>`chatBarText`</li><li>`name`</li></ul> |
