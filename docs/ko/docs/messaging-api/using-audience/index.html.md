# 오디언스 사용하기

오디언스를 사용하면 고급 타겟팅을 적용할 수 있습니다. 예를 들어 메시지를 읽었거나 메시지 안의 URL을 클릭한 사용자 그룹을 대상으로 지정할 수 있습니다.

<!-- note} start -->

**IFA(Identifiers for Advertisers) 사용하기**

IFA를 사용하여 수신자를 지정할 수 있지만, 신청서를 제출한 법인 사용자만 이용할 수 있습니다. LINE 공식 계정에서 IFA를 사용하려면 영업 담당자에게 문의하거나 [영업 파트너](https://www.lycbiz.com/jp/partner/sales/)에게 문의하세요.

<!-- note} end -->

## 오디언스 만들기 

Messaging API를 사용하여 오디언스를 만들 수 있습니다. 지원되는 오디언스 유형은 다음과 같습니다.

| 오디언스 | 설명 |
| --- | --- |
| [사용자 ID 업로드용 오디언스](https://developers.line.biz/en/reference/messaging-api/#create-upload-audience-group) | [사용자 ID](https://developers.line.biz/en/glossary/#user-id) 또는 IFA(Identifier For Advertisers)로 지정한 사용자 집합 |
| [메시지 클릭 오디언스](https://developers.line.biz/en/reference/messaging-api/#create-click-audience-group) | 발송한 메시지의 URL을 클릭한 사용자 집합 |
| [메시지 열람 오디언스](https://developers.line.biz/en/reference/messaging-api/#create-imp-audience-group)  | 발송한 메시지를 읽은 사용자 집합 |

다음 유형의 오디언스는 Messaging API로 만들 수 없습니다.

- 채팅 태그 오디언스
- 친구 경로 오디언스
- 예약 오디언스
- 리치 메뉴 노출 오디언스
- 리치 메뉴 클릭 오디언스
- 웹 트래픽 오디언스(LINE Tag)
- 웹 트래픽 오디언스(Tracking Tag)
- 앱 이벤트 오디언스
- 동영상 조회 오디언스
- 이미지 클릭 오디언스
- LINE Beacon Network 광고 노출 오디언스

<!-- note start -->

**동시 작업 제한**

사용자 ID 기반 오디언스의 경우, 엔드포인트의 동시 작업 횟수는 오디언스 ID(`audienceGroupId`)별로 제한됩니다. 이 제한은 사용자 ID 업로드용 오디언스를 만들 때와 오디언스에 사용자 ID를 추가할 때 적용됩니다. 자세한 내용은 [동시 작업 횟수 제한](https://developers.line.biz/en/reference/messaging-api/#limit-on-the-number-of-concurrent-operations)을 참고하세요.

<!-- note end -->

## 오디언스 사용하기 

오디언스를 사용하여 나로우캐스트 메시지를 보낼 수 있습니다. 자세한 내용은 [나로우캐스트 메시지 보내기](https://developers.line.biz/en/docs/messaging-api/sending-messages/#send-narrowcast-message)를 참고하세요.

## 오디언스 공유하기 

Messaging API와 [LINE 공식 계정 관리자](https://manager.line.biz/)는 같은 LINE 공식 계정에서 만든 오디언스를 서로 사용할 수 있습니다. 두 도구 간에 오디언스를 사용하기 위해 별도로 필요한 초기 설정은 없습니다.

Messaging API와 LINE 공식 계정 관리자 이외의 도구(예: [LINE Ads Manager](https://admanager.line.biz/))에서 오디언스를 사용하려면 오디언스 공유를 설정해야 합니다. 오디언스를 공유하는 방법은 [비즈니스 매니저에서 오디언스 공유하기](https://developers.line.biz/en/docs/messaging-api/using-audience/#audience-sharing-business-manager)를 참고하세요.

| 오디언스를 만드는 도구 | 오디언스를 사용하는 도구 | 오디언스 사용 가능 여부 |
| --- | --- | --- |
| Messaging API | LINE 공식 계정 관리자 | ✅ |
| LINE 공식 계정 관리자 | Messaging API | ✅ |
| Messaging API | LINE 공식 계정 관리자 이외의 도구 | ✅ \*1 |
| LINE 공식 계정 관리자 이외의 도구 | Messaging API | ✅ \*1 |

\*1 비즈니스 매니저에서 오디언스를 공유하는 경우 사용할 수 있습니다.

### 비즈니스 매니저에서 오디언스 공유하기 

[비즈니스 매니저](https://www.lycbiz.com/jp/service/business-manager/)를 사용하면 특정 오디언스를 여러 서비스(예: LINE Ads Manager)에서 공유하고 서로 사용할 수 있습니다.

비즈니스 매니저의 오디언스 공유 기능을 사용하면 같은 프로바이더 아래에 있는 Messaging API 채널 간에 오디언스를 공유할 수 있습니다. 단, 인증된 계정과 [프리미엄 계정](https://developers.line.biz/en/glossary/#premium-account)만 비즈니스 매니저에서 오디언스 공유를 설정할 수 있습니다.

다음 엔드포인트를 사용하면 비즈니스 매니저에서 공유된 오디언스의 데이터를 가져올 수 있습니다.

- [비즈니스 매니저에서 공유된 오디언스 목록 조회](https://developers.line.biz/en/reference/messaging-api/#get-shared-audience-list)
- [비즈니스 매니저에서 공유된 오디언스 데이터 조회](https://developers.line.biz/en/reference/messaging-api/#get-shared-audience)

오디언스 공유 방법에 대한 자세한 내용은 비즈니스 매니저 매뉴얼의 [리소스 공유하기](https://www.lycbiz.com/jp/manual/BusinessManager/BMmaniyuarushare003/)(일본어로만 제공됩니다)를 참고하세요.

## 오디언스 사양 

오디언스의 사양은 다음과 같습니다.

| 속성 | 사양 |
| --- | --- |
| 채널당 오디언스 수 | 최대 1,000개 |
| 보관 기간 | 최대 180일(15,552,000초) |
| 오디언스를 만들 때 요청당 업로드할 수 있는 사용자 ID 또는 IFA 수 | <ul><li>JSON: 최대 10,000개</li><li>파일: 최대 1,500,000개</li></ul> |
| 오디언스당 사용자 수 | <ul><li>사용자 ID 업로드용 오디언스: 제한 없음</li><li>메시지 클릭 오디언스: 최소 50명</li><li>메시지 열람 오디언스: 최소 50명</li></ul> |
| 메시지를 보낸 후 리타깃팅 오디언스를 만들 수 있는 기간[^retargeting-audiences]<br />메시지 발송 후 | 최대 60일(5,184,000초) |

[^retargeting-audiences]: 이 내용은 메시지 클릭 오디언스와 메시지 열람 오디언스에만 적용됩니다.

나로우캐스트 메시지 제한에 대한 자세한 내용은 Messaging API 레퍼런스의 [속성과 오디언스를 사용한 메시지 발송 제한](https://developers.line.biz/en/reference/messaging-api/#send-narrowcast-message-restrictions)을 참고하세요.
