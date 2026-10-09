# 성능 가이드라인

사용자에게 최상의 LINE MINI App 경험을 제공하려면 LINE MINI App의 성능을 고려하세요.

HTML5 성능의 중요성에 대한 좋은 참고 자료로 web.dev의 [속도가 왜 중요한가?](https://web.dev/learn/performance/why-speed-matters)를 확인할 수 있습니다.

성능을 측정하려면 Google이 제공하는 [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) 및 [PageSpeed Insights](https://pagespeed.web.dev/)와 같은 성능 측정 도구를 사용하는 것을 권장합니다.

LY Corporation은 다음 점수를 권장합니다.

성능 측정 도구 | 점수
-|-
[Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) | Performance: 50 이상

<!-- note start -->

**참고**

- LINE 로그인을 실행하지 않은 상태에서 측정하세요. LINE 로그인을 동시에 실행하면 LINE 로그인 페이지의 성능이 측정되어 LINE MINI App의 성능을 측정할 수 없습니다.
- 반드시 프로덕션 환경(실제 환경)에서 측정하세요. 네트워크 환경에 따라 성능 점수가 달라질 수 있습니다.

<!-- note end -->
