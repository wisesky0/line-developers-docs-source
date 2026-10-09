# 리치 메뉴 개요

LINE 공식 계정이 참여하는 채팅방에 표시할 수 있는 리치 메뉴에 대해 알아봅니다.

## 리치 메뉴란 

리치 메뉴는 LINE 공식 계정과의 채팅방 하단에 표시되는 메뉴입니다. 외부 사이트, 예약 페이지, LINE 공식 계정 기능으로 연결되는 링크를 설정하여 사용자 경험을 더욱 풍부하게 만들 수 있습니다. [리치 메뉴 구조](https://developers.line.biz/en/docs/messaging-api/rich-menus-overview/#rich-menu-structure)를 기반으로 [리치 메뉴를 만드는 도구](https://developers.line.biz/en/docs/messaging-api/rich-menus-overview/#choosing-tool-for-creating-rich-menus)를 사용하십시오.

<!-- note start -->

**LINE for PC에서는 리치 메뉴를 사용할 수 없습니다**

리치 메뉴는 LINE for PC(macOS, Windows)에 표시되지 않습니다.

<!-- note end -->

## 리치 메뉴 구조 

리치 메뉴는 메뉴 이미지, 탭 가능한 영역, 채팅바로 구성됩니다.

![](https://developers.line.biz/media/messaging-api/rich-menu/bot-demo-rich-menu-image.webp)

1. 리치 메뉴 이미지: 메뉴 항목이 들어 있는 단일 JPEG 또는 PNG 이미지 파일입니다. 이미지 요구 사항에 대한 자세한 내용은 Messaging API 레퍼런스의 [리치 메뉴 이미지 요구 사항](https://developers.line.biz/en/reference/messaging-api/#upload-rich-menu-image-requirements)을 참고하십시오.
1. 탭 가능한 영역: 메뉴 항목으로 나눈 영역입니다. 각 메뉴 항목에 포스트백 이벤트 수신, URL 열기 등의 [액션](https://developers.line.biz/en/reference/messaging-api/#action-objects)을 지정할 수 있습니다.
1. 채팅바: 리치 메뉴를 열고 닫는 메뉴입니다. 이 메뉴의 텍스트를 변경할 수 있습니다.

## 리치 메뉴를 설정하는 도구 

리치 메뉴를 만들려면 [LINE Official Account Manager](https://developers.line.biz/en/docs/messaging-api/rich-menus-overview/#creating-a-rich-menu-with-the-line-manager) 또는 [Messaging API](https://developers.line.biz/en/docs/messaging-api/rich-menus-overview/#creating-a-rich-menu-using-the-messaging-api)를 사용할 수 있습니다. 필요에 가장 잘 맞는 도구를 선택하십시오.

<!-- note start -->

**리치 메뉴 하나에는 도구 하나만 사용하십시오**

같은 리치 메뉴 인스턴스를 조회하거나 수정하는 데 두 도구를 함께 사용할 수 없습니다. LINE Official Account Manager로 만든 리치 메뉴는 LINE Official Account Manager에서만 조회하고 수정할 수 있습니다. 마찬가지로 Messaging API로 만든 리치 메뉴는 LINE Official Account Manager에서 사용할 수 없습니다.

<!-- note end -->

| 도구 | 장점 |
| --- | --- |
| [LINE Official Account Manager](https://manager.line.biz/) | <ul><li>빠른 개발 기간</li><li>사용하기 쉬운 그래픽 인터페이스</li><li>표시 기간 설정 가능</li><li>노출 횟수, 클릭률 등의 통계 제공</li></ul><p>자세한 내용은 LINE for Business의 [리치 메뉴 사용 방법](https://www.lycbiz.com/jp/column/line-official-account/technique/20180731-01/)(일본어로만 제공)과 [인사이트 - 리치 메뉴](https://www.lycbiz.com/jp/manual/OfficialAccountManager/insight_rich-menus/)(일본어로만 제공)를 참고하십시오.</p> |
| Messaging API | <ul><li>고급 맞춤 설정</li><li>리치 메뉴에 [포스트백 액션](https://developers.line.biz/en/reference/messaging-api/#postback-action)과 [날짜/시간 선택 액션](https://developers.line.biz/en/reference/messaging-api/#datetime-picker-action)을 설정할 수 있습니다.</li><li>[리치 메뉴의 탭을 전환](https://developers.line.biz/en/docs/messaging-api/switch-rich-menus/)할 수 있습니다.</li><li>노출 횟수와 클릭 수([합계](https://developers.line.biz/en/reference/messaging-api/#get-rich-menu-insight-summary), [일별](https://developers.line.biz/en/reference/messaging-api/#get-rich-menu-insight-daily)) 등의 통계를 확인할 수 있습니다.</li></ul><p>리치 메뉴 기능을 직접 사용해 보려면 [리치 메뉴 체험하기](https://developers.line.biz/en/docs/messaging-api/try-rich-menu/)를 참고하십시오.</p> |

### LINE Official Account Manager로 리치 메뉴 설정하기 

LINE Official Account Manager에서 리치 메뉴를 만들고 기본값으로 설정할 수 있습니다. 더 높은 [표시 우선순위](https://developers.line.biz/en/docs/messaging-api/rich-menus-overview/#rich-menu-display)로 다른 리치 메뉴를 설정하지 않는 한, 사용자는 기본 리치 메뉴를 보게 됩니다.

LINE Official Account Manager의 GUI를 사용하면 미리 정의된 템플릿을 바탕으로 리치 메뉴의 탭 가능한 영역을 설정할 수 있습니다. 자세한 내용은 [LINE Official Account Manager 매뉴얼](https://www.lycbiz.com/jp/manual/OfficialAccountManager/rich-menus/)(일본어로만 제공)을 참고하십시오.

### Messaging API로 리치 메뉴 설정하기 

Messaging API로 리치 메뉴를 설정하려면 필요한 엔드포인트를 순서대로 호출해야 합니다. 기본 단계는 다음과 같습니다.

1. 리치 메뉴 이미지를 준비합니다.
1. [리치 메뉴 생성](https://developers.line.biz/en/reference/messaging-api/#create-rich-menu) 엔드포인트를 사용합니다.
1. [리치 메뉴 이미지 업로드](https://developers.line.biz/en/reference/messaging-api/#upload-rich-menu-image) 엔드포인트를 사용합니다.
1. [기본 리치 메뉴 설정](https://developers.line.biz/en/reference/messaging-api/#set-default-rich-menu) 엔드포인트를 사용합니다.

Messaging API로 리치 메뉴를 설정하는 방법에 대한 자세한 내용은 [리치 메뉴 사용하기](https://developers.line.biz/en/docs/messaging-api/using-rich-menus/)를 참고하십시오.

## 리치 메뉴의 적용 범위 

리치 메뉴의 적용 범위는 두 가지이며, 서로 다른 도구를 사용해 설정할 수 있습니다.

| 적용 범위 | 도구 |
| --- | --- |
| LINE 공식 계정의 채팅 화면을 연 모든 사용자(기본 리치 메뉴) | <ul><li>LINE Official Account Manager</li><li>Messaging API</li></ul> |
| 사용자별(사용자별 리치 메뉴) | Messaging API |

적용 범위와 설정 도구에 따라 리치 메뉴의 표시 우선순위와 사용자 채팅 화면에 변경 사항이 반영되는 시점이 달라집니다.

- [리치 메뉴의 표시 우선순위](https://developers.line.biz/en/docs/messaging-api/rich-menus-overview/#rich-menu-display)
- [리치 메뉴 설정 변경이 적용되는 시점](https://developers.line.biz/en/docs/messaging-api/rich-menus-overview/#when-setting-change-takes-effect)

### 리치 메뉴의 표시 우선순위 

설정 방법과 대상에 따라 세 가지 유형의 리치 메뉴를 사용할 수 있습니다. 표시 우선순위는 아래에 나열된 순서대로 높은 순에서 낮은 순입니다.

1. Messaging API로 설정한 사용자별 리치 메뉴
1. Messaging API로 설정한 기본 리치 메뉴
1. [LINE Official Account Manager](https://manager.line.biz)로 설정한 기본 리치 메뉴

### 리치 메뉴 설정 변경이 적용되는 시점 

리치 메뉴 설정을 변경하면, 리치 메뉴의 적용 범위와 설정 도구에 따라 변경 사항이 반영되는 시점이 달라집니다.

| 적용 범위와 설정 도구 | 변경 사항이 적용되는 시점 |
| --- | --- |
| Messaging API로 설정한 사용자별 리치 메뉴 | 즉시 적용됩니다. 단, 사용자와의 [연결을 해제](https://developers.line.biz/en/reference/messaging-api/#unlink-rich-menu-from-user)하지 않고 리치 메뉴를 삭제하면, 사용자가 채팅방을 다시 열 때 삭제가 적용됩니다. |
| Messaging API로 설정한 기본 리치 메뉴 | 사용자가 채팅방을 다시 열 때 적용됩니다. 변경 사항이 적용되기까지 최대 1분이 걸릴 수 있습니다. |
| LINE Official Account Manager로 설정한 기본 리치 메뉴 | 사용자가 채팅방을 다시 열 때 적용됩니다. |

### LINE 공식 계정의 친구가 아닌 사용자가 채팅 화면을 열 때 

LINE 공식 계정의 친구가 아닌 사용자가 채팅 화면을 열면, LINE Official Account Manager 또는 Messaging API로 설정한 기본 리치 메뉴가 표시됩니다.

LINE 공식 계정의 친구가 아닌 사용자에게는 리치 메뉴를 연결할 수 없습니다. 자세한 내용은 Messaging API 레퍼런스의 [리치 메뉴 연결 조건](https://developers.line.biz/en/reference/messaging-api/#link-rich-menu-to-user-conditions)을 참고하십시오.

## 리치 메뉴 인사이트 

Messaging API로 만든 리치 메뉴에 대해서는 리치 메뉴가 표시되고 클릭된 횟수 같은 통계를 조회할 수 있습니다.

- [리치 메뉴 인사이트 합계 조회](https://developers.line.biz/en/reference/messaging-api/#get-rich-menu-insight-summary)
- [일별 리치 메뉴 인사이트 조회](https://developers.line.biz/en/reference/messaging-api/#get-rich-menu-insight-daily)

Messaging API 또는 LINE Official Account Manager로 만든 리치 메뉴의 통계는 해당 리치 메뉴를 만든 도구에서만 확인할 수 있습니다.

| 리치 메뉴를 만든 도구 | Messaging API로 통계 조회 | LINE Official Account Manager에서 통계 확인 |
| --- | --- | --- |
| Messaging API | ✅ | ❌ |
| LINE Official Account Manager | ❌ | ✅ |

## 리치 메뉴 API 레퍼런스 

- [리치 메뉴](https://developers.line.biz/en/reference/messaging-api/#rich-menu)
- [사용자별 리치 메뉴](https://developers.line.biz/en/reference/messaging-api/#per-user-rich-menu)
- [리치 메뉴 별칭](https://developers.line.biz/en/reference/messaging-api/#rich-menu-alias)
