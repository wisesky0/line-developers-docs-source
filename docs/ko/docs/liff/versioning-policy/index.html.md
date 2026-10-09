# 버전 정책

LIFF 앱에 적절한 LIFF SDK를 통합하려면 LIFF 버전 정책을 반드시 이해해야 합니다.

- [LIFF MAJOR 버전 상태](https://developers.line.biz/en/docs/liff/versioning-policy/#version-support-status)
- [LIFF 버전 정책](https://developers.line.biz/en/docs/liff/versioning-policy/#versioning-policy)
- [LIFF SDK(sdk.js) 업데이트 정책](https://developers.line.biz/en/docs/liff/versioning-policy/#update-policy)
- [LIFF SDK 수명 주기](https://developers.line.biz/en/docs/liff/versioning-policy/#life-cycle)

<!-- note start -->

**참고**

LIFF SDK가 업데이트되면 LIFF 앱에 통합된 LIFF SDK가 지원 중단될 수 있습니다. 지원 중단된 LIFF SDK를 사용하는 LIFF 앱은 열 수 없습니다.

LIFF 앱을 장기간 운영하는 경우 이 페이지를 정기적으로 확인하고 적절한 LIFF SDK를 통합하십시오.

<!-- note end -->

## LIFF MAJOR 버전 상태 

[LIFF SDK 수명 주기](https://developers.line.biz/en/docs/liff/versioning-policy/#life-cycle)는 MAJOR 버전별로 정의되어 있습니다. 현재 지원되는 LIFF SDK의 MAJOR 버전과 각 버전의 상태는 다음과 같습니다.

| LIFF 버전<br>(출시일) | 상태<br>(현재 상태의 기간) | 사용 가능 여부 및 설명 |
| --- | --- | --- |
| LIFF v1<br>(2018년 6월 6일) | 지원 종료<br>(2021년 10월 1일) | ❌ 사전 공지 없이 모든 CDN 엣지 경로와 CDN 고정 경로가 비활성화되며, LIFF 앱을 열 수 없습니다. |
| LIFF v2<br>(2019년 10월 16일) | 활성<br>(LIFF v3 출시일까지) | ✅ LIFF SDK의 현재 버전입니다. 새로운 기능이 자주 추가되고 기존 기능이 개선됩니다. |
| LIFF v3<br>(미정) |  |  |

## LIFF 버전 정책 

LIFF v2.2.0부터 LIFF 버전 번호는 [시맨틱 버저닝](https://semver.org/)(SemVer) 규칙을 따릅니다.

SemVer는 다음과 같은 버전 형식을 정의합니다.

`MAJOR.MINOR.PATCH`

예를 들어 `v1.2.3`에서 `1`은 MAJOR 버전, `2`는 MINOR 버전, `3`은 PATCH 버전입니다.

각 버전의 의미는 다음과 같습니다.

| 버전 | 설명 |
| --- | --- |
| MAJOR | 공개 API에 하위 호환이 되지 않는 변경이 도입되면 증가합니다.<br>예: v1.1.12 -> **v2.0.0** |
| MINOR | 공개 API에 새로운 하위 호환 기능이 도입되면 증가합니다.<br>예: v1.1.12 -> **v1.2.0** |
| PATCH | 하위 호환이 되는 버그 수정만 도입되면 증가합니다. 버그 수정은 잘못된 동작을 수정하는 내부 변경으로 정의됩니다.<br>예: v1.1.12 -> **v1.1.13** |

## LIFF SDK(sdk.js) 업데이트 정책 

LIFF v2.1.13 출시 이후 두 가지 유형의 CDN 경로를 제공합니다. [LIFF 앱에 LIFF SDK 통합하기](https://developers.line.biz/en/docs/liff/developing-liff-apps/#integrating-sdk)에서 목적에 맞는 CDN 경로를 지정하십시오.

| CDN 경로 | 설명 |
| --- | --- |
| CDN 엣지 경로 | MAJOR 버전만 포함하는 CDN 경로입니다. 최신 LIFF 기능을 항상 최신 상태로 사용하려면 이 CDN 경로를 사용하십시오. 새로운 MAJOR 버전이 출시될 때만 URL을 업데이트하면 됩니다.<br>예: https://static.line-scdn.net/liff/edge/**2**/sdk.js |
| CDN 고정 경로 | PATCH 버전까지 포함하는 CDN 경로입니다. 특정 버전의 LIFF 기능을 사용하려면 이 CDN 경로를 사용하십시오. LIFF 앱을 업데이트하지 않는 한 지정된 PATCH 버전을 계속 사용할 수 있습니다. 새로운 기능, 보안 업데이트, 버그 수정을 적용하려는 경우에만 URL을 업데이트하십시오. 자동으로 업데이트되지 않으며 LIFF SDK 업데이트의 영향을 받지 않습니다.<br>예: https://static.line-scdn.net/liff/edge/**versions/2.31.1**/sdk.js |

<!-- note start -->

**어떤 버전을 사용해야 합니까?**

CDN 고정 경로를 사용하는 개발자는 LIFF 앱을 언제 업데이트할지 직접 결정해야 합니다. LIFF 문서의 [릴리스 노트](https://developers.line.biz/en/docs/liff/release-notes/)를 자주 확인하여 각 업데이트를 평가하고, 업데이트가 적합한지 판단할 수 있습니다.

<!-- note end -->

CDN 고정 경로를 지정하는 예시는 다음과 같습니다.

```html
<script charset="utf-8" src="https://static.line-scdn.net/liff/edge/versions/2.31.1/sdk.js"></script>
```

<!-- tip start -->

**하위 호환성을 유지하기 위한 CDN 경로**

생성한 LIFF 앱의 동작을 보장하기 위해 다음 CDN 경로로 LIFF SDK를 계속 제공합니다.

이 CDN 경로에서 제공되는 LIFF SDK는 CDN 엣지 경로에서 제공되는 LIFF SDK와 같은 버전입니다.

하위 호환성을 위한 CDN 경로: <br> https://static.line-scdn.net/liff/edge/**2.1**/sdk.js

<!-- tip end -->

<!-- note start -->

**하위 호환 CDN 경로 중단**

하위 호환성을 유지하기 위한 CDN 경로는 [LIFF SDK 수명 주기 일정](https://developers.line.biz/en/docs/liff/versioning-policy/#life-cycle-schedule)과 관계없이 중단될 수 있습니다.

LIFF 앱에 지정된 CDN 경로를 CDN 엣지 경로로 변경할 것을 권장합니다.

정책이 결정되면 즉시 알려 드리겠습니다.

<!-- note end -->

## LIFF SDK 수명 주기 

LIFF SDK의 수명 주기는 MAJOR 버전별로 다음과 같이 정의됩니다.

MAJOR 버전이 출시되면 상태는 "Active"가 됩니다. 다음 MAJOR 버전이 출시되면 현재 MAJOR 버전의 상태는 "active"에서 "maintenance"로 바뀌고, 일정 기간이 지나면 "deprecated", 그다음 "obsolete"로 바뀝니다.

| 상태 | 사용 가능 여부 및 설명 | 지원 기간 |
| --- | --- | --- |
| Active | ✅ LIFF SDK의 현재 버전입니다. 새로운 기능이 자주 추가되고 기존 기능이 개선됩니다. | 해당 MAJOR 버전의 출시일부터 다음 MAJOR 버전의 출시일까지 |
| Maintaining | ✅ 기존 기능을 유지하는 데 필요한 버그 수정과 보안 개선이 제공됩니다. | "Active" 기간 이후 12개월 |
| Deprecated | ✅ LIFF SDK가 더 이상 업데이트되지 않습니다. | "Maintaining" 기간 이후 6개월 |
| End-of-life | ❌ 지원 종료일 이후에는 모든 CDN 엣지 경로와 CDN 고정 경로가 사전 공지 없이 무효화되며, LIFF 앱을 더 이상 사용할 수 없습니다. | - |

### LIFF SDK 수명 주기 일정 

LIFF SDK MAJOR 버전의 수명 주기를 숙지하고 적절히 준비하십시오.

| LIFF 버전<br>(출시일) | Active 기간 | Maintenance 기간 | Deprecation 기간 | 지원 종료일 |
| --- | --- | --- | --- | --- |
| LIFF v1<br>(2018년 6월 6일) | ~ 2019년 10월 15일<br>`✅ LIFF v1` | ~ 2021년 4월 1일<br>` ✅ LIFF v1` | ~ 2021년 9월 30일<br>`✅ LIFF v1` | 2021년 10월 1일<br>`❌ LIFF v1` |
| LIFF v2<br>(2019년 10월 16일) | ~ LIFF v3 출시일<br>`✅ LIFF v2` | ~ 미정<br>`✅ LIFF v2` | ~ 미정<br>`✅ LIFF v2` | 미정<br>`❌ LIFF v2` |
| LIFF v3<br>(미정) |  |  |  |

`✅ LIFF v1`/`❌ LIFF v1`: https://**d.line-scdn.net/liff/1.0**/sdk.js 사용 가능 여부

`✅ LIFF v2`/`❌ LIFF v2`: https://static.line-scdn.net/liff/edge/**2**/sdk.js, https://static.line-scdn.net/liff/edge/**versions/2.x.x**/sdk.js, https://static.line-scdn.net/liff/edge/**2.1**/sdk.js 사용 가능 여부
