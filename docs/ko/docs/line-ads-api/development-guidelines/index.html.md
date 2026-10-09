# LINE Ads API 개발 가이드라인

LINE Ads API를 사용하여 개발할 때 다음 개발 가이드라인을 따르십시오.

<!-- table of contents -->

## LINE 플랫폼에 대량 요청 금지 

부하 테스트나 운영 테스트를 목적으로 LINE 플랫폼에 많은 수의 요청을 보내지 마십시오.

어떤 목적으로든 지정된 요청 속도 제한(rate limit)을 초과하여 요청을 보내지 마십시오. 요청 속도 제한에 대한 자세한 내용은 [Ad Tech API 문서](https://ads.line.me/public-docs/certificated-ad-tech-general-partner)와 [Data Provider API 문서](https://ads.line.me/public-docs/data-general-partner)를 참조하십시오.

<!-- note start -->

**참고**

요청 속도 제한을 초과하여 요청을 보내면 `429 Too Many Requests` 오류 메시지가 반환됩니다.

<!-- note end -->

## 존재하지 않는 ID에 대한 요청 금지 

요청을 보낼 때 존재하지 않는 ID(`Ad account ID`, `Ad ID` 등)를 지정하지 마십시오.

## 로그 저장 

문제가 발생했을 때 개발자가 원인과 범위를 원활하게 조사할 수 있도록 API 요청 로그를 일정 기간 저장할 것을 권장합니다.

### LINE Ads API 요청 로그 

LINE Ads API에 요청할 때 다음 정보를 로그로 저장할 것을 권장합니다.

- API 요청 시각
- 요청 메서드
- API 엔드포인트
- LINE 플랫폼이 응답으로 반환한 상태 코드

보다 구체적으로는 다음 형식으로 로그 파일에 저장하십시오.

| API 요청 시각 | 요청 메서드 | API 엔드포인트 | 상태 코드 |
| --- | --- | --- | --- |
| Mon, 05 Jul 2022 08:14:35 GMT | GET | `https://ads.line.me/api/v3/codes/ssps` | 200 |
