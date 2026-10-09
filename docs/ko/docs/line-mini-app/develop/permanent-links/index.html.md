# 영구 링크 만들기

사용자는 LIFF URL뿐만 아니라 영구 링크(permanent link)를 통해서도 LINE MINI App에 접근할 수 있습니다. 다만 LINE MINI App 페이지를 공유할 때는 LIFF URL 대신 영구 링크를 사용해야 합니다.

[헤더](https://developers.line.biz/en/docs/line-mini-app/discover/ui-components/#header)에 표시되는 액션 버튼으로 LINE MINI App 페이지를 공유하면, LINE 앱이 해당 페이지의 영구 링크를 자동으로 생성합니다.

그 밖의 경우에는 다음 공식에 따라 직접 영구 링크를 만들어야 합니다.

`LIFF URL + (LINE MINI App 페이지 URL - 엔드포인트 URL) = 영구 링크`

예시:

| 항목 | 설정 |
| --- | --- |
| LIFF URL\* | `https://miniapp.line.me/123456-abcedfg` |
| LINE MINI App 페이지 URL | `https://example.com/shop?search=shoes#item10` |
| 엔드포인트 URL\* | `https://example.com` |

\* [LINE Developers Console](https://developers.line.biz/console/)의 **Web app settings** 탭에서 확인할 수 있습니다.

이 경우 LINE MINI App 페이지 URL에 해당하는 영구 링크는 다음과 같습니다.

```
https://miniapp.line.me/123456-abcedfg/shop?search=shoes#item10
```

<!-- tip start -->

**팁**

LINE MINI App 페이지 URL에는 페이지의 원시 경로(raw path), 쿼리 파라미터, 해시 프래그먼트를 사용할 수 있습니다.

<!-- tip end -->

<!-- note start -->

**LINE MINI App의 LIFF URL이 변경되었습니다**

[2023년 12월 13일](https://developers.line.biz/en/news/2023/12/13/change-of-liff-url-for-line-mini-app/)부터 LINE MINI App의 LIFF URL이 `https://miniapp.line.me/{liffId}`로 변경되었습니다.

사용자가 기존 `https://liff.line.me/{liffId}`에 접근해도 LINE MINI App이 열립니다. 따라서 이미 발급한 QR 코드를 계속 사용할 수 있습니다.

<!-- note end -->

## LINE 앱 버전에 따른 도메인 이름의 차이 

헤더에 표시되는 [액션 버튼](https://developers.line.biz/en/docs/line-mini-app/discover/builtin-features/#action-button)으로 LINE MINI App 페이지를 공유하면, 생성되는 영구 링크의 도메인 이름은 LINE 앱 버전에 따라 다릅니다.

| LINE 앱 버전 | 생성되는 URL 예시 |
| ------------------ | ---------------------------------- |
| 13.20 이상 | `https://miniapp.line.me/{liffId}` |
| 13.20 미만 | `https://liff.line.me/{liffId}` |

## 사용자의 기기에 LINE이 설치되어 있지 않은 경우 

LINE이 설치된 사용자가 영구 링크를 클릭하면, LINE이 링크가 가리키는 정확한 페이지로 이동합니다. LINE이 설치되어 있지 않은 사용자의 경우에는 웹 브라우저가 열리고, LINE에서 LINE MINI App을 열도록 안내합니다. 이 안내 화면에서 사용자는 웹 브라우저로 LIFF 엔드포인트 URL 페이지를 열 수도 있습니다.
