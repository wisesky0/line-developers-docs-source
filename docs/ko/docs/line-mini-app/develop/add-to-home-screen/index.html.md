# LINE MINI App의 바로가기를 사용자 기기의 홈 화면에 추가하기

<!-- tip start -->

**이 기능은 인증된 MINI App에서만 사용할 수 있습니다**

이 기능은 인증된 MINI App에서만 사용할 수 있습니다. 인증되지 않은 MINI App은 Developing 내부 채널에서 기능을 테스트할 수 있지만, Published 내부 채널에서는 사용할 수 없습니다.

<!-- tip end -->

사용자는 LINE MINI App의 바로가기를 사용자 기기의 홈 화면에 추가할 수 있습니다.

[액션 버튼](https://developers.line.biz/en/docs/line-mini-app/discover/builtin-features/#action-button)의 드롭다운 메뉴를 연 다음 **Add to Home** 옵션을 탭하거나 [`liff.createShortcutOnHomeScreen()`](https://developers.line.biz/en/reference/liff/#create-shortcut-on-home-screen) 메서드를 사용하면 바로가기 추가 화면이 표시됩니다. 사용자는 화면의 안내에 따라 LINE MINI App의 바로가기를 기기의 홈 화면에 추가할 수 있습니다. 이렇게 하면 사용자가 기기의 홈 화면에서 LINE MINI App에 바로 접근할 수 있습니다.

**Android 기기에서의 표시**

<!-- note start -->

**일부 Android 기기에서는 기존 바로가기가 삭제될 수 있습니다**

일부 Android 기기에서는 사용자가 LINE 앱의 **Settings** > **App icon**에서 아이콘을 변경하면 기존 바로가기가 삭제될 수 있습니다. 자세한 내용은 LINE 고객센터의 [\[Android\] LINE 앱 아이콘 변경 후 LINE 바로가기에 문제가 있는 경우](https://help.line.me/line/smartphone/pc?lang=ja&contentId=200000315)(일본어로만 제공)를 참고하세요.

<!-- note end -->

![](https://developers.line.biz/media/line-mini-app/develop/add-to-home-screen/add-shortcut-screen-android-en.png)
![](https://developers.line.biz/media/line-mini-app/develop/add-to-home-screen/shortcut-android.webp)

**iOS 기기에서의 표시**

![](https://developers.line.biz/media/line-mini-app/develop/add-to-home-screen/add-shortcut-screen-ios-en.webp)
![](https://developers.line.biz/media/line-mini-app/develop/add-to-home-screen/shortcut-ios-en.webp)

멤버십 카드나 모바일 주문처럼 사용자가 자주 사용하는 서비스에 이 기능을 사용하면 사용자 경험을 개선할 수 있습니다.

## 동작 조건 

사용자 기기의 OS가 iOS인 경우, **Add to Home** 및 `liff.createShortcutOnHomeScreen()` 메서드가 동작하는 조건은 다음과 같습니다. 동작하지 않는 환경에서 **Add to Home**을 탭하거나 `liff.createShortcutOnHomeScreen()` 메서드를 실행하면 오류 페이지가 표시됩니다.

| 기본 브라우저 | iOS 버전 | 동작 여부 |
| --- | --- | --- |
| Safari | 모든 버전 | 동작함 |
| Chrome | 16.4 이상 | 동작함 |
| Safari와 Chrome 이외의 브라우저 | 16.4 이상 | 동작을 보장하지 않음 |
| Safari 이외의 브라우저 | 16.4 미만 | 동작하지 않음 |

예를 들어 iOS 16.4 미만에서 Chrome으로 `liff.createShortcutOnHomeScreen()` 메서드를 실행하면 다음과 같은 오류 페이지가 표시됩니다.

![](https://developers.line.biz/media/line-mini-app/develop/add-to-home-screen/add-shortcut-screen-ios-error-en.png)
