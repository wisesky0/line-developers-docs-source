# LINE Beacon

<!-- note start -->

**선택 기능을 사용하려면 신청이 필요합니다**

이 문서의 기능은 필요한 신청서를 제출한 법인 사용자만 이용할 수 있습니다. 회사의 LINE 공식 계정에서 이 서비스를 사용하려면 영업 담당자 또는 [영업 파트너](https://www.lycbiz.com/jp/partner/sales/)에게 문의해 주십시오.

<!-- note end -->

## 사용자 설정에 대하여 

사용자가 LINE Beacon을 수신하려면 다음 조건을 충족해야 합니다.

- LINE을 사용하는 OS 버전이 요구 사항을 충족해야 합니다.
- 스마트폰의 Bluetooth 설정이 켜져 있어야 합니다.
- LINE에서 LINE Beacon 사용에 동의해야 합니다. ("Settings" > **Privacy** > **Provide usage data** > **LINE Beacon**)

OS 버전 요구 사항을 포함한 자세한 내용은 고객센터의 [LINE Beacon 사용하기](https://help.line.me/line/?contentId=50001493)를 참조해 주십시오.

## LINE Beacon 수신 조건에 대하여 

LINE Beacon의 수신 조건은 OS 종류와 LINE 앱의 실행 상태에 따라 다릅니다.

수신 조건에서 사용하는 "포그라운드"와 "백그라운드"의 의미는 다음과 같습니다.

| 용어 | 설명 |
| ---------- | ------------------------------ |
| 포그라운드 | LINE이 실행 중이며 사용 중인 상태 |
| 백그라운드 | LINE이 실행 중이지만 사용하지 않는 상태 |

<!-- note start -->

**LINE이 실행되지 않을 때의 동작**

LINE이 실행되지 않을 때의 동작은 정의되어 있지 않습니다. 이 경우는 "백그라운드"에 포함되지 않습니다.

<!-- note end -->

### LINE Beacon 수신 조건(iOS) 

iOS에서 LINE 앱의 실행 상태별 수신 조건은 다음과 같습니다.

| LINE 앱 실행 상태 | 수신 조건 |
| --- | --- |
| 포그라운드 | [사용자 설정](https://developers.line.biz/en/docs/partner-docs/line-beacon/#about-user-settings-for-line-beacon)이 조건을 충족해야 합니다. |
| 백그라운드 | 다음 조건을 모두 충족해야 합니다.<ul><li>[사용자 설정](https://developers.line.biz/en/docs/partner-docs/line-beacon/#about-user-settings-for-line-beacon)이 조건을 충족해야 합니다.</li><li>**Location Services** (\*1)가 ON이어야 합니다.</li><li>LINE 앱의 **ALLOW LOCATION ACCESS** (\*2)가 "Always"로 설정되어 있어야 합니다.</li><li>LINE 앱의 **Precise location** (\*2\*3)이 ON이어야 합니다.</li></ul> |

\*1 **Settings** > **Privacy & Security** > **Location Services**\
\*2 **Settings** > **LINE** > **Location**\
\*3 **ALLOW LOCATION ACCESS**가 ON인 경우에만 표시됩니다.

### LINE Beacon 수신 조건(Android) 

Android에서 LINE 앱의 실행 상태별 수신 조건은 다음과 같습니다.

| LINE 앱 실행 상태 | 수신 조건 |
| --- | --- |
| 포그라운드 | 다음 조건을 모두 충족해야 합니다.<ul><li>[사용자 설정](https://developers.line.biz/en/docs/partner-docs/line-beacon/#about-user-settings-for-line-beacon)이 조건을 충족해야 합니다.</li><li>**Use location** (\*1)이 ON이어야 합니다.</li><li>LINE 앱의 **Location permission** (\*2)이 "Allow only while using the app"으로 설정되어 있어야 합니다.</li><li>LINE 앱의 **Use precise location** (\*2)이 ON이어야 합니다.</li><li>LINE 앱의 **Nearby devices permission** (\*3)이 "Allow"로 설정되어 있어야 합니다.</li></ul> |
| 백그라운드 | Android에서는 백그라운드 수신을 사용할 수 없습니다. |

\*1 **Settings** > **Location** > **Use location**\
\*2 **Settings** > **Apps** > **LINE** > **Permissions** > **Location**\
\*3 **Settings** > **Apps** > **LINE**

### 비콘 배너 표시 조건 

<!-- note start -->

**참고**

이 조건은 테스트 계정에도 적용됩니다.

<!-- note end -->

#### LINE 공식 계정을 검색할 수 있는 경우 

| LINE 공식 계정과 친구 관계 | LINE Beacon 이용약관 동의 | 비콘 배너 표시 |
| --- | --- | --- |
| 친구 추가됨 | 동의 | 숨김 |
| 친구 추가됨 | 미동의 | 숨김 |
| 친구 추가되지 않음 | 동의 | 표시 |
| 친구 추가되지 않음 | 미동의 | 숨김 |

#### LINE 공식 계정을 검색할 수 없는 경우 

LINE 공식 계정과의 친구 관계나 LINE Beacon 이용약관 동의 여부와 관계없이 비콘 배너는 표시되지 않습니다.
