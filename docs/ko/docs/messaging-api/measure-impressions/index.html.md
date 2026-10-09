# 노출 수 측정하기

Messaging API에서 통계에는 다양한 사용자 행동에 대한 정보가 포함됩니다. 이 페이지에서는 그중 노출 수(impression)에 중점을 둡니다.

- [집계 환경](https://developers.line.biz/en/docs/messaging-api/measure-impressions/#environment-for-aggregation)
- [통계를 가져오는 엔드포인트](https://developers.line.biz/en/docs/messaging-api/measure-impressions/#endpoints-for-statistics)
- [노출 수란 무엇인가요?](https://developers.line.biz/en/docs/messaging-api/measure-impressions/#what-is-impression)
- [노출 수 측정 방식](https://developers.line.biz/en/docs/messaging-api/measure-impressions/#impression-logic)
- [사용 시 주의 사항](https://developers.line.biz/en/docs/messaging-api/measure-impressions/#precautions)

## 집계 환경 

노출 수를 포함한 통계는 iOS 및 Android용 LINE 앱을 기준으로 집계됩니다.

PC 버전 또는 Chrome 버전의 LINE에서 본 메시지는 통계에 포함되지 않습니다.

## 통계를 가져오는 엔드포인트 

사용자가 보낸 메시지에 대한 상호작용 통계를 가져오려면 다음 엔드포인트를 사용할 수 있습니다.

- [사용자 상호작용 통계 가져오기](https://developers.line.biz/en/reference/messaging-api/#get-message-event)
- [단위별 통계 가져오기](https://developers.line.biz/en/reference/messaging-api/#get-statistics-per-unit)

## 노출 수란 무엇인가요? 

Messaging API에서 노출 수는 사용자가 채팅방에 들어가서 LINE 공식 계정이 보낸 메시지를 보는 경우를 의미합니다. 노출 수는 메시지 열람(message open)이라고도 합니다.

### 노출 수 유형 

노출 수에는 고유 노출 수(unique impression)와 노출 수(impression) 두 가지 유형이 있습니다. 이 문서에서 설명하는 [노출 수 측정 방식](https://developers.line.biz/en/docs/messaging-api/measure-impressions/#impression-logic)은 두 유형 모두에 적용됩니다. 다만 측정되는 횟수가 다르다는 점에 유의하세요.

[통계를 가져오는 엔드포인트](https://developers.line.biz/en/docs/messaging-api/measure-impressions/#endpoints-for-statistics)로 가져올 수 있는 노출 수는 다음과 같습니다.

| 속성 | 노출 수 유형 | 설명 |
| --- | --- | --- |
| `overview.uniqueImpression` \*1 | 고유 노출 수 | 메시지를 연 사용자 수입니다. 말풍선을 최소 한 개 이상 표시한 사람의 수입니다.<br>각 메시지는 사용자당 한 번만 집계됩니다. |
| `messages[].uniqueImpression` \*2 | 고유 노출 수 | 말풍선을 표시한 사용자 수입니다.<br>각 말풍선은 사용자당 한 번만 집계됩니다. |
| `messages[].impression` \*1 | 노출 수 | 말풍선이 표시된 횟수입니다.<br>조건을 충족하면 각 말풍선은 사용자당 여러 번 집계될 수 있습니다. |

\*1 [사용자 상호작용 통계 가져오기](https://developers.line.biz/en/reference/messaging-api/#get-message-event) 및 [단위별 통계 가져오기](https://developers.line.biz/en/reference/messaging-api/#get-statistics-per-unit) 엔드포인트 응답에서 노출 수 값이 들어 있는 속성입니다.

\*2 [단위별 통계 가져오기](https://developers.line.biz/en/reference/messaging-api/#get-statistics-per-unit) 엔드포인트 응답에서 노출 수 값이 들어 있는 속성입니다.

#### 메시지와 말풍선의 개념 

[메시지](https://developers.line.biz/en/docs/messaging-api/sending-messages/)는 하나 이상의 [메시지 객체](https://developers.line.biz/en/reference/messaging-api/#message-objects)로 구성됩니다. 하나의 요청으로 최대 다섯 개의 메시지 객체를 보낼 수 있습니다.

Messaging API에서 말풍선(bubble)은 하나의 메시지 객체를 가리킵니다. 메시지 객체에는 스티커 메시지 객체, 이미지 메시지 객체 등 다양한 유형이 있습니다. 시각적으로 말풍선 모양인지 여부는 중요하지 않습니다.

이 그림은 말풍선 세 개로 구성된 메시지의 예를 보여 줍니다. 말풍선 2와 3은 말풍선 1의 텍스트 메시지 객체와 같은 말풍선 모양이 아니지만, 각각 노출 수 측정을 위한 말풍선으로 취급됩니다.

![메시지와 말풍선](https://developers.line.biz/media/messaging-api/measure-impressions/message-and-bubbles-en.webp)

이 메시지를 보내고 사용자가 채팅을 열어 확인하면, 표시된 말풍선 하나에 대해 `overview.uniqueImpression`이 집계됩니다. `messages[].uniqueImpression`과 `messages[].impression`은 각 말풍선마다 별도로 집계됩니다.

자세한 내용은 Messaging API 레퍼런스의 [사용자 상호작용 통계 가져오기](https://developers.line.biz/en/reference/messaging-api/#get-message-event) 및 [단위별 통계 가져오기](https://developers.line.biz/en/reference/messaging-api/#get-statistics-per-unit)를 참고하세요.

### 노출 수로 집계되지 않는 동작 

노출 수는 사용자가 채팅방에 들어가서 LINE 공식 계정이 보낸 메시지를 볼 때만 집계됩니다.

다만 사용자가 채팅방에 들어가지 않고 다음 동작으로 메시지를 읽음 처리하면, 노출 수로 집계되지 않습니다.

| OS | 동작 |
| --- | --- |
| Android | <ul><li>채팅 목록에서 읽음으로 표시할 채팅방을 길게 누른 다음, 나타나는 메뉴에서 <b>읽음으로 표시</b>를 선택하면 여러 채팅방을 한꺼번에 읽음으로 표시합니다.</li><li>채팅 목록 상단의 옵션 메뉴에서 <b>모두 읽음으로 표시</b>를 선택하면 모든 채팅을 읽음으로 표시합니다.</li></ul> |
| iOS | <ul><li>채팅 목록에서 채팅을 왼쪽으로 밀고 메뉴에서 <b>읽음</b>을 선택하면 한꺼번에 읽음으로 표시합니다.</li><li>햄버거 메뉴를 열고 채팅 목록 편집 화면에서 채팅을 선택한 다음 <b>읽음</b>을 누르면 여러 채팅을 한 번에 읽음으로 표시합니다.</li></ul> |

## 노출 수 측정 방식 

이 섹션에서는 노출 수의 구체적인 측정 방식을 설명합니다.

- [메시지 말풍선을 100% 표시](https://developers.line.biz/en/docs/messaging-api/measure-impressions/#must-show-all-messages)
- [스크롤 시 중복 집계되지 않음](https://developers.line.biz/en/docs/messaging-api/measure-impressions/#no-duplicate-by-scrolling)
- [캐러셀 메시지에 대하여](https://developers.line.biz/en/docs/messaging-api/measure-impressions/#carousel-message)

### 메시지 말풍선을 100% 표시 

노출 수는 사용자가 채팅방에 들어가 LINE 공식 계정이 보낸 메시지를 볼 때 집계됩니다. 이때 메시지 말풍선이 화면에 100% 보여야 합니다.

다음은 100% 보이는 말풍선과 그렇지 않은 말풍선의 예입니다.

| 설명 | 이미지 |
| --- | --- |
| 이 영역의 말풍선은 100% 보입니다. | ![초록색](https://developers.line.biz/media/messaging-api/measure-impressions/100per-area.png) |
| 이 영역의 말풍선은 100% 보이지 않습니다. | ![빨간색](https://developers.line.biz/media/messaging-api/measure-impressions/not-100per-area.png) |

| 표시 | 설명 | 이미지 |
| --- | --- | --- |
| ✅️ 100% 보임 | 초록색 영역에 표시된 말풍선이 완전히 보이므로 노출 수로 집계됩니다. | ![말풍선 전체가 표시됨](https://developers.line.biz/media/messaging-api/measure-impressions/impression-100per.webp) |
| ❌️ 100% 보이지 않음 | 빨간색 영역의 말풍선이 리치 메뉴와 겹쳐 완전히 보이지 않으므로 노출 수로 집계되지 않습니다. | ![리치 메뉴와 겹쳐 말풍선 전체가 표시되지 않음](https://developers.line.biz/media/messaging-api/measure-impressions/impression-not-100per-richmenu.webp) |
| ❌️ 100% 보이지 않음 | 빨간색 영역의 말풍선이 [서비스 메뉴 바](https://www.lycbiz.com/jp/manual/OfficialAccountManager/servicemenubar/)와 겹쳐 완전히 보이지 않으므로 노출 수로 집계되지 않습니다. | ![서비스 메뉴 바와 겹쳐 말풍선 전체가 표시되지 않음](https://developers.line.biz/media/messaging-api/measure-impressions/impression-not-100per-service-menu-ber.webp) |
| ❌️ 100% 보이지 않음 | 빨간색 영역의 말풍선이 채팅 창에 들어가기에는 너무 높아 완전히 보이지 않으므로 노출 수로 집계되지 않습니다. | ![메시지가 말풍선 안에 모두 들어가기에 너무 높음](https://developers.line.biz/media/messaging-api/measure-impressions/impression-not-100per-too-long.webp) |

<!-- tip start -->

**말풍선 전체를 한 번에 표시할 수 없는 경우의 노출 수 집계**

"100% 표시"란 채팅방을 나가기 전에 대상 말풍선의 위쪽 가장자리와 아래쪽 가장자리가 모두 사용자 화면 안에 한 번이라도 보였다는 의미입니다.

앞의 예처럼 말풍선 전체를 한 번에 표시할 수 없더라도, 스크롤하거나 리치 메뉴를 닫아서 숨겨진 말풍선의 위쪽과 아래쪽 가장자리가 모두 보이게 되면 100% 표시된 것으로 집계되고 노출 수가 기록됩니다.

<!-- tip end -->

### 스크롤 시 중복 집계되지 않음 

노출 수가 한 번 기록되면, 사용자가 같은 채팅방에 머무는 동안에는 같은 메시지를 다시 보기 위해 스크롤해서 되돌아오더라도 다시 집계되지 않습니다.

다만 사용자가 채팅 목록으로 돌아갔다가 채팅방에 다시 들어가 메시지 100%를 보면, 새로운 노출 수로 집계됩니다.

고유 노출 수는 사용자당 한 번만 측정되므로, 사용자가 채팅방에 다시 들어가도 증가하지 않습니다.

### 캐러셀 메시지에 대하여 

Flex Message를 사용하여 [캐러셀](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#carousel)을 사용하는 메시지를 보내면, 사용자가 캐러셀을 좌우로 스크롤하여 보더라도 노출 수는 여러 번 집계되지 않습니다.

캐러셀을 사용하는 메시지의 경우, 말풍선의 모든 가장자리(위, 아래, 왼쪽, 오른쪽)가 표시되면 노출 수가 한 번 집계됩니다.

![캐러셀 100% 스크롤 예제](https://developers.line.biz/media/messaging-api/measure-impressions/carousel-100per-scroll.webp)

## 사용 시 주의 사항 

노출 수를 측정할 때 다음 사항을 유의하세요.

- [측정 기간 내에 있는지 확인](https://developers.line.biz/en/docs/messaging-api/measure-impressions/#ensure-measurement-period)
- [메시지를 지나치게 길게 만들지 않기](https://developers.line.biz/en/docs/messaging-api/measure-impressions/#avoid-too-tall-messages)
- [리치 메뉴 또는 서비스 메뉴 바를 방해하지 않기](https://developers.line.biz/en/docs/messaging-api/measure-impressions/#avoid-interference)

### 측정 기간 내에 있는지 확인 

노출 수를 포함한 통계는 메시지를 보낸 시점부터 14일(1,209,600초) 동안만 수집됩니다. 그 이후에는 업데이트되지 않습니다. [단위별 통계 가져오기](https://developers.line.biz/en/reference/messaging-api/#get-statistics-per-unit) 엔드포인트를 사용할 때는 집계 기간을 지정할 수 있으므로, 지정한 날짜가 측정 기간 내에 있는지 확인하세요.

### 메시지를 지나치게 길게 만들지 않기 

지나치게 긴 메시지를 보내면 채팅방에 메시지 전체가 표시되지 않을 수 있으며, 이 경우 노출 수가 예상대로 집계되지 않을 수 있습니다. 메시지 길이를 적절하게 조정하세요.

### 리치 메뉴 또는 서비스 메뉴 바를 방해하지 않기 

LINE 공식 계정에서 [리치 메뉴](https://developers.line.biz/en/docs/messaging-api/rich-menus-overview/)를 사용하면, 채팅방에서 말풍선이 리치 메뉴와 겹쳐 말풍선 전체가 보이지 않을 수 있습니다. 그 결과 노출 수가 예상대로 집계되지 않을 수 있습니다.

또한 채팅방 상단에 표시되는 [서비스 메뉴 바](https://www.lycbiz.com/jp/manual/OfficialAccountManager/servicemenubar/)를 사용하는 경우에도 비슷한 문제가 발생할 수 있습니다.

이러한 문제를 방지하려면 메시지의 길이와 리치 메뉴의 크기를 조정하세요.
