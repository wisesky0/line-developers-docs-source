# LIFF 브라우저 최소화

이 페이지에서는 LIFF 브라우저 최소화에 대해 설명합니다.

<!-- table of contents -->

## LIFF 브라우저 최소화란 

[LIFF 브라우저](https://developers.line.biz/en/glossary/#liff-browser) 최소화는 다른 작업을 수행하기 위해 LIFF 브라우저 보기를 일시 중지할 수 있는 기능입니다.

채팅방에서 LIFF 브라우저를 보고 있는 사용자는 채팅방에 메시지를 보내는 등 다른 작업을 하고 싶을 수 있습니다. 이 경우 LIFF 브라우저를 최소화하면 LIFF 브라우저 보기가 일시 중지되고 사용자는 다른 작업을 수행할 수 있습니다. 작업을 마친 후 사용자는 LIFF 브라우저를 최대화하여 LIFF 브라우저 보기를 다시 시작할 수 있습니다.

LIFF 브라우저는 최소화되면 아이콘으로 표시됩니다.

![LIFF browser minimization](https://developers.line.biz/media/liff/minimizing-liff-app/liff-minimize-en.webp)

<!-- tip start -->

**LINE 인앱 브라우저 최소화**

LIFF 브라우저와 마찬가지로 [LINE 인앱 브라우저](https://developers.line.biz/en/glossary/#line-iab)도 최소화를 지원합니다. 자세한 내용은 LINE 사용자 가이드의 [웹 페이지 탐색 최소화](https://guide.line.me/ja/services/minimizebrowser.html)(일본어로만 제공됨)를 참조하세요.

<!-- tip end -->

## LIFF 브라우저 최소화의 사용 조건 

LIFF 브라우저를 최소화하려면 다음 조건을 충족해야 합니다.

- LINE for iOS 12.18.0 이상 또는 LINE for Android 15.0.0 이상
- 사용자 기기에서 **Settings** > **Apps** > **LINE** > **Display over other apps**가 켜져 있어야 합니다(LINE for Android에서만 필요함)
- LIFF 앱의 [화면 크기](https://developers.line.biz/en/docs/liff/overview/#screen-size)로 `Full`이 지정되어 있어야 합니다.
- LIFF 앱의 [`chat_message.write` 스코프](https://developers.line.biz/en/docs/liff/registering-liff-apps/#registering-liff-app)가 꺼져 있어야 합니다.
- LIFF 브라우저가 다른 모달과 겹치지 않아야 합니다.

<!-- note start -->

**LIFF 간 전환 후의 LIFF 앱도 사용 조건을 충족해야 합니다**

[LIFF 간 전환](https://developers.line.biz/en/docs/liff/opening-liff-app/#move-liff-to-liff) 후에 LIFF 브라우저를 최소화하려면 전환 후의 LIFF 앱이 사용 조건을 충족해야 합니다.

예를 들어 LIFF 문서의 [LIFF 앱 화면 크기에 따른 동작](https://developers.line.biz/en/docs/liff/opening-liff-app/#behavior-by-screen-size)에서 설명한 것처럼, 전환 후의 LIFF 앱은 지정된 화면 크기와 관계없이 `Full`로 표시됩니다. 하지만 전환 후의 LIFF 앱 화면 크기로 `Tall` 또는 `Compact`가 지정되어 있다면 전환 후의 LIFF 앱은 LIFF 브라우저 최소화의 사용 조건을 충족하지 않습니다.

<!-- note end -->

LIFF 브라우저 최소화는 LINE for iPadOS에서도 제공될 예정이지만, 시기는 아직 정해지지 않았습니다.

## LIFF 브라우저 최소화하기 

LIFF 브라우저를 최소화하는 방법은 세 가지입니다.

- [액션 버튼에서 옵션 탭하기](https://developers.line.biz/en/docs/liff/minimizing-liff-browser/#tap-action-button-option)
- [인앱 알림 탭하기](https://developers.line.biz/en/docs/liff/minimizing-liff-browser/#tap-in-app-alert)
- [LIFF 브라우저 스와이프하기](https://developers.line.biz/en/docs/liff/minimizing-liff-browser/#swipe-liff-browser)

### 액션 버튼에서 옵션 탭하기 

[액션 버튼](https://developers.line.biz/en/docs/liff/overview/#action-button)에서 드롭다운 메뉴를 연 다음 **Minimize browser** 옵션을 탭합니다.

![](https://developers.line.biz/media/liff/minimizing-liff-app/tap-action-button-en.webp)

### 인앱 알림 탭하기 

인앱 알림을 탭합니다.

![LIFF browser minimization (tapping an in-app alert)](https://developers.line.biz/media/liff/minimizing-liff-app/tap-in-app-alert.webp)

### LIFF 브라우저 스와이프하기 

LIFF 브라우저를 아래로 스와이프합니다.

![LIFF browser minimization (swiping a LIFF browser)](https://developers.line.biz/media/liff/minimizing-liff-app/swipe-liff-browser-en.webp)

### 액션 버튼에서 옵션 탭하기 (LINE 26.7.0 이전 버전) 

[액션 버튼](https://developers.line.biz/en/docs/liff/overview/#action-button)에서 [멀티 탭 뷰](https://developers.line.biz/en/docs/liff/overview/#multi-tab-view)를 연 다음 **Minimize browser** 옵션을 탭합니다.

![LIFF browser minimization (tapping the action button option)](https://developers.line.biz/media/liff/minimizing-liff-app/tap-action-button-option-en.webp)

## LIFF 브라우저 최대화하기 

LIFF 브라우저를 최대화하려면 최소화된 LIFF 브라우저를 탭합니다.

![LIFF browser maximization](https://developers.line.biz/media/liff/minimizing-liff-app/maximize-liff-browser-en.webp)

## 최소화된 LIFF 브라우저 이동하기 

최소화된 LIFF 브라우저를 이동하려면 LIFF 브라우저를 드래그합니다.

![Moving a minimized LIFF browser](https://developers.line.biz/media/liff/minimizing-liff-app/move-minimized-liff-browser-en.webp)

## 최소화된 LIFF 브라우저 닫기 (LINE 15.20.0 이전 버전) 

LINE 15.20.0 이전 버전에서는 최소화된 LIFF 브라우저를 닫는 방법이 두 가지 있습니다.

- [LIFF 브라우저를 화면 밖으로 스와이프하기(LINE for iOS에서만 가능)](https://developers.line.biz/en/docs/liff/minimizing-liff-browser/#close-minimized-liff-browser-1)
- [최소화된 LIFF 브라우저를 닫기 아이콘으로 드래그하기](https://developers.line.biz/en/docs/liff/minimizing-liff-browser/#close-minimized-liff-browser-2)

### LIFF 브라우저를 화면 밖으로 스와이프하기 (LINE for iOS에서만 가능) 

최소화된 LIFF 브라우저를 화면 밖으로 스와이프합니다.

![Closing a minimized LIFF browser](https://developers.line.biz/media/liff/minimizing-liff-app/close-minimized-liff-browser-en.webp)

### 최소화된 LIFF 브라우저를 닫기 아이콘으로 드래그하기 

최소화된 LIFF 브라우저를 드래그하면 화면 하단에 닫기 아이콘이 나타납니다. 최소화된 LIFF 브라우저를 닫기 아이콘까지 드래그한 다음 손가락을 떼세요.

![Closing a minimized LIFF browser](https://developers.line.biz/media/liff/minimizing-liff-app/close-minimized-liff-browser-ios-12-12-0-or-later-en.webp)

## 최소화된 LIFF 브라우저 닫기 (LINE 15.20.0 이상 버전) 

LINE 15.20.0 이상 버전에서는 최소화된 LIFF 브라우저의 오른쪽 상단 모서리에 표시된 닫기 버튼을 탭하여 최소화된 LIFF 브라우저를 닫을 수 있습니다.

![Close minimized liff browser](https://developers.line.biz/media/liff/minimizing-liff-app/close-minimized-liff-browser-line-15-20-0-or-later-en.webp)

## LIFF 브라우저 아이콘 표시 우선순위 

LIFF 브라우저는 최소화되면 아이콘으로 표시됩니다. LIFF 브라우저 아이콘의 표시 우선순위는 다음과 같습니다.

1. 채널 아이콘: LINE Login 채널의 채널 아이콘
1. 파비콘: LIFF 앱의 파비콘
1. 공통 아이콘: 링크 아이콘
