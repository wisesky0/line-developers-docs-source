# 기본 제공 기능

LINE MINI App에는 다음과 같은 기본 제공 기능이 있습니다.

<!-- table of contents -->

## 액션 버튼 

기본적으로 LINE MINI App의 모든 페이지에 제공되는 공통 [헤더](https://developers.line.biz/en/docs/line-mini-app/discover/ui-components/#header)에 액션 버튼이 표시됩니다.

![](https://developers.line.biz/media/line-mini-app/discover/mini-header-action-button-en.png)

액션 버튼을 탭하면 LINE 앱의 버전에 따라 아래의 기능이 표시됩니다. 액션 버튼의 아이콘은 LINE 앱의 버전에 따라 다릅니다.

| LINE 앱 버전                              | 사용 가능한 기능   |
| ----------------------------------------- | ------------------ |
| 26.7.0 이상                               | 드롭다운 메뉴      |
| 15.12.0 이상, 26.7.0 미만                 | 멀티 탭 보기       |
| 15.12.0 미만                              | 옵션               |

<!-- tip start -->

**팁**

- [커스텀 액션 버튼](https://developers.line.biz/en/docs/line-mini-app/discover/custom-features/#custom-action-button)을 구현하여 원하는 위치에 원하는 형식으로 배치할 수 있습니다.
- LINE MINI App을 닫지 않고 여러 채팅방을 오가며 이동할 수 있는 기능 등 새로운 기능을 개발 중입니다.
- LINE MINI App에서 액션 버튼을 숨길 수는 없습니다. 또한 LINE MINI App 채널에 추가한 LIFF 앱에는 **Module mode**를 설정할 수 없습니다.

<!-- tip end -->

### 드롭다운 메뉴 

LINE 26.7.0 이상에서는 액션 버튼을 탭하면 다음 드롭다운 메뉴가 표시됩니다.

![](https://developers.line.biz/media/line-mini-app/discover/mini-header-action-button-tap-en.webp)

| 항목 | 설명 |
| --- | --- |
| **All tabs** | [멀티 탭 보기](https://developers.line.biz/en/docs/liff/overview/#multi-tab-view)를 표시합니다. |
| **Refresh** | 화면에 표시된 현재 페이지를 새로 고칩니다. |
| **Minimize browser** | LIFF 브라우저를 최소화합니다. 이 기능은 검증된 MINI App에서만 사용할 수 있습니다. 자세한 내용은 LIFF 문서의 [LIFF 브라우저 최소화](https://developers.line.biz/en/docs/liff/minimizing-liff-browser/)를 참고해 주십시오. |
| **Share** | 현재 페이지의 LIFF URL 또는 영구 링크를 LINE 메시지로 공유합니다. 현재 페이지가 LINE MINI App의 엔드포인트 URL로 시작하지 않는 경우에는 LINE MINI App의 LIFF URL이 대신 공유됩니다. 공유 메시지에는 다음 요소가 포함됩니다.<ul><li>URL: 현재 페이지의 영구 링크입니다.</li><li>Title: [LINE Developers Console](https://developers.line.biz/console/)의 **Web app settings** 탭에서 **LIFF app name**에 입력한 LIFF 앱 이름입니다.</li><li>Description: 자동으로 설정되는 텍스트입니다.</li><li>Image: [LINE Developers Console](https://developers.line.biz/console/)의 **Channel Basic settings** 탭에서 **Channel icon**으로 등록한 이미지입니다.</li></ul> |
| **Add to Home** | 현재 페이지를 추가하는 바로 가기 추가 화면이 표시됩니다. 현재 페이지가 LINE MINI App의 엔드포인트 URL로 시작하지 않으면 오류가 발생합니다. LINE 14.3.0 이상의 검증된 MINI App에서 사용할 수 있습니다. 자세한 내용은 [LINE MINI App의 바로 가기를 사용자 기기의 홈 화면에 추가](https://developers.line.biz/en/docs/line-mini-app/develop/add-to-home-screen/)를 참고해 주십시오. |
| **Favorites** | 현재 LINE MINI App을 사용자의 즐겨찾기에 추가합니다. 이 기능은 다음 조건을 모두 충족할 때만 사용할 수 있습니다.<p><ul><li>LINE MINI App이 [검증된 MINI App](https://developers.line.biz/en/docs/line-mini-app/discover/introduction/#verified-mini-app)입니다.</li><li>사용자가 일본에 있습니다.</li><li>사용자의 LINE 버전이 15.18.0 이상입니다.</li></ul></p><p>즐겨찾기에 추가된 LINE MINI App은 LINE 앱의 MINI 탭에서 확인할 수 있습니다.</p> |
| **Permission settings** | <p>권한 설정 화면을 엽니다. 권한 설정 화면에서 사용자는 현재 열려 있는 LINE MINI App의 카메라 및 마이크 권한을 확인하고 변경할 수 있습니다. LINE 14.6.0 이상에서 사용할 수 있습니다.</p><p>사용자가 권한을 변경한 경우, LINE MINI App에서 페이지를 새로 고치지 않으면 변경 내용이 반영되지 않을 수 있습니다.</p> |
| **About the service** | [Provider 페이지](https://developers.line.biz/en/docs/partner-docs/provider-page/)를 표시합니다. 이 기능은 검증된 MINI App에서만 사용할 수 있습니다. |
| **Report** | <p>외부 브라우저에서 LINE 앱 문의 양식을 엽니다. 이 기능은 다음 조건을 모두 충족할 때만 사용할 수 있습니다.</p><ul><li>LINE MINI App 채널의 **Basic settings** 탭에 있는 **Region to provide the service**가 "Japan"으로 설정되어 있습니다.</li><li>사용자의 LINE 버전이 15.6.0 이상입니다.</li></ul> |

<!-- note start -->

**참고**

현재 페이지를 공유하려면 LINE MINI App을 공식적으로 지원하는 LINE 버전에서 사용자가 액션 버튼을 탭해야 합니다. [지원 버전](https://developers.line.biz/en/docs/line-mini-app/discover/specifications/#supported-platforms-and-versions)보다 낮은 LINE 버전에서는 공유하려는 개별 페이지와 관계없이 헤더의 액션 버튼이 항상 LINE MINI App의 최상위 페이지로 연결됩니다.

<!-- note end -->

### 멀티 탭 보기 

멀티 탭 보기에는 최근에 사용한 서비스가 표시됩니다. 최근 사용한 서비스 섹션에는 사용자가 연 LINE MINI App과 LIFF 앱이 최근 사용 순서대로 최대 50개까지 표시됩니다. 사용자는 사용 기록에서 LINE MINI App과 LIFF 앱을 다시 열 수 있습니다.

자세한 내용은 LIFF 문서의 [멀티 탭 보기](https://developers.line.biz/en/docs/liff/overview/#multi-tab-view)를 참고해 주십시오.

![](https://developers.line.biz/media/line-mini-app/discover/mini-multi-tab-view-en.webp)

## 채널 동의 간소화 

LIFF 앱이 사용자 정보를 가져오거나 사용자에게 메시지를 보내려면, 사용자가 LIFF 앱에 처음 접근할 때 채널 동의 화면에서 해당 권한에 동의해야 합니다.

LINE MINI App에서는 "채널 동의 간소화" 기능을 통해 사용자가 LINE MINI App에 처음 접근할 때 채널 동의 화면을 건너뛰고 바로 LINE MINI App을 사용할 수 있습니다.

자세한 내용은 [LINE MINI App 승인 흐름](https://developers.line.biz/en/docs/line-mini-app/develop/channel-consent-simplification/)을 참고해 주십시오.
