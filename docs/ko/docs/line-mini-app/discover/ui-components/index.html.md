# LINE MINI App UI 컴포넌트

LINE MINI App 페이지는 (A) 헤더와 (B) 본문으로 구성됩니다.

![](https://developers.line.biz/media/line-mini-app/mini_concept.webp)

## 헤더 

검증된 MINI App의 헤더에는 제목, LINE MINI App 이름, 검증 배지가 표시됩니다. 검증되지 않은 MINI App의 경우에는 제목과 엔드포인트 URL의 도메인 이름이 표시됩니다.

![](https://developers.line.biz/media/line-mini-app/line-mini-app-header-en.png)

헤더는 다음 컴포넌트로 구성됩니다. 헤더 또는 헤더의 특정 컴포넌트를 숨기도록 설정할 수는 없습니다.

![](https://developers.line.biz/media/line-mini-app/discover/mini_uicomp_header.webp)

| 번호 | 컴포넌트 | 설명 |
| --- | --- | --- |
| 1 | 제목 | LINE MINI App 페이지의 `<title>` 요소가 표시됩니다. 글꼴은 설정할 수 없습니다. |
| - | 부제목 | 검증된 MINI App의 경우 제목 아래에 LINE MINI App 이름과 검증 배지가 표시됩니다. 검증되지 않은 MINI App의 경우 엔드포인트 URL의 도메인 이름이 표시됩니다. |
| 2 | 액션 버튼 | 액션 버튼을 탭하면 사용 중인 LINE 앱 버전에서 사용할 수 있는 기능이 표시됩니다. 자세한 내용은 [액션 버튼](https://developers.line.biz/en/docs/line-mini-app/discover/builtin-features/#action-button)을 참고해 주십시오. |
| 3 | 최소화 버튼 / 닫기 버튼 | LINE MINI App의 유형과 LINE 버전에 따라 최소화 버튼 또는 닫기 버튼 중 하나가 표시됩니다.<table><thead><tr><th>LINE MINI App 유형</th><th>LINE 버전</th><th>표시되는 버튼</th></tr></thead><tbody><tr><td rowspan="2">검증된 MINI App</td><td><ul><li>iOS용 LINE 14.15.1 - 26.6.x</li><li>Android용 LINE 15.0.0 - 26.6.x</li></ul></td><td>최소화 버튼</td></tr><tr><td>위 버전 이외의 버전</td><td>닫기 버튼</td></tr><tr><td>검증되지 않은 MINI App</td><td>모든 버전</td><td>닫기 버튼</td></tr></tbody></table>닫기 버튼을 탭하면 LINE MINI App이 닫힙니다. 최소화 버튼을 탭하면 LINE MINI App이 최소화됩니다. 최소화에 대한 자세한 내용은 LIFF 문서의 [LIFF 브라우저 최소화](https://developers.line.biz/en/docs/liff/minimizing-liff-browser/)를 참고해 주십시오. |
| 4 | 뒤로 가기 버튼 | 이전 페이지를 표시합니다. |
| 5 | 로딩 바 | 현재 페이지의 로딩 상태를 표시합니다. |

## 본문 

본문에는 WebView가 사용됩니다. 서비스를 개발할 때 HTML5와 LIFF를 활용해 주십시오.

LINE MINI App 개발 사양에 대한 자세한 내용은 [LINE MINI App 사양](https://developers.line.biz/en/docs/line-mini-app/discover/specifications/)을 참고해 주십시오.
