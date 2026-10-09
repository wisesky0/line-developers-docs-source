# 공통 프로필 Quick-fill 디자인 규정

<!-- tip start -->

**검증된 MINI App에서만 사용할 수 있습니다**

공통 프로필 Quick-fill을 사용하려면 LINE MINI App이 검증되어 있어야 하며, Quick-fill 사용을 신청해야 합니다. 자세한 내용은 [Quick-fill 사용 단계](https://developers.line.biz/en/docs/line-mini-app/quick-fill/overview/#process)를 참고해 주십시오.

<!-- tip end -->

## Quick-fill의 사용자 경험 

LINE MINI App의 Quick-fill에서 최종 사용자가 [Auto-fill 버튼](https://developers.line.biz/en/docs/line-mini-app/quick-fill/design-regulations/#what-is-auto-fill-button)을 탭하면 사용자의 프로필을 확인하는 모달이 표시됩니다. 표시된 모달에서 프로필을 확인한 후 사용자가 **Auto-fill**을 탭하면 프로필 정보가 자동으로 입력됩니다.

[`liff.$commonProfile.get()`](https://developers.line.biz/en/reference/line-mini-app/#get-common-profile) 메서드를 호출하면 모달을 표시할 수 있습니다. 따라서 회사에서 모달을 직접 개발할 필요가 없습니다.

모달을 표시하는 시점은 LINE MINI App의 구성에 따라 자유롭게 설정할 수 있지만, 아래의 권장 패턴과 금지 패턴을 따를 것을 권장합니다.

- [권장 화면 전환](https://developers.line.biz/en/docs/line-mini-app/quick-fill/design-regulations/#recommended-screen-transition)
- [금지된 화면 전환](https://developers.line.biz/en/docs/line-mini-app/quick-fill/design-regulations/#prohibited-screen-transition)

### 권장 화면 전환 

LINE MINI App에 Quick-fill을 연동할 때는 다음 화면 전환을 권장합니다.

- [회원 가입 화면으로 이동한 직후 모달 표시](https://developers.line.biz/en/docs/line-mini-app/quick-fill/design-regulations/#show-modal-immediately-after-transition)
- [사용자가 입력 양식을 선택할 때 모달 표시](https://developers.line.biz/en/docs/line-mini-app/quick-fill/design-regulations/#show-modal-when-selecting-input-form)
- [사용자가 Auto-fill 버튼을 탭한 후 모달 표시](https://developers.line.biz/en/docs/line-mini-app/quick-fill/design-regulations/#show-modal-when-tapping-auto-fill-button)
- [채널 동의 화면에서 사용자가 동의한 후 이동한 화면에서 모달 표시](https://developers.line.biz/en/docs/line-mini-app/quick-fill/design-regulations/#show-modal-after-consent-screen)

#### 회원 가입 화면으로 이동한 직후 모달 표시 

사용자가 회원 가입 화면으로 이동하면 [`liff.$commonProfile.get()`](https://developers.line.biz/en/reference/line-mini-app/#get-common-profile) 메서드를 호출하여 즉시 모달을 표시합니다. 이 경우 사용자가 모달을 한 번 닫더라도 다시 표시할 수 있도록 회원 가입 화면에 Auto-fill 버튼을 배치해 주십시오.

![](https://developers.line.biz/media/line-mini-app/quick-fill/recommended-screen-transition-02.webp)

#### 사용자가 입력 양식을 선택할 때 모달 표시 

회원 가입 화면에서 사용자가 입력 양식을 선택하면 [`liff.$commonProfile.get()`](https://developers.line.biz/en/reference/line-mini-app/#get-common-profile) 메서드를 호출하여 모달을 표시합니다.

![](https://developers.line.biz/media/line-mini-app/quick-fill/recommended-screen-transition-04.webp)

#### 사용자가 Auto-fill 버튼을 탭한 후 모달 표시 

회원 가입 화면에서 사용자가 Auto-fill 버튼을 탭하면 [`liff.$commonProfile.get()`](https://developers.line.biz/en/reference/line-mini-app/#get-common-profile) 메서드를 호출하여 모달을 표시합니다.

![](https://developers.line.biz/media/line-mini-app/quick-fill/recommended-screen-transition-01.webp)

#### 채널 동의 화면에서 사용자가 동의한 후 이동한 화면에서 모달 표시 

사용자가 LINE MINI App의 [채널 동의 화면](https://developers.line.biz/en/docs/line-mini-app/develop/configure-console/#consent-screen-settings)에서 **Allow**를 탭하면 사용자를 회원 가입 화면으로 바로 이동시킵니다. 회원 가입 화면으로 이동한 후 [`liff.$commonProfile.get()`](https://developers.line.biz/en/reference/line-mini-app/#get-common-profile) 메서드를 호출하여 즉시 모달을 표시합니다. 이 경우 사용자가 모달을 한 번 닫더라도 다시 표시할 수 있도록 회원 가입 화면에 Auto-fill 버튼을 배치해 주십시오.

![](https://developers.line.biz/media/line-mini-app/quick-fill/recommended-screen-transition-03.webp)

### 금지된 화면 전환 

LINE MINI App에 Quick-fill을 연동할 때 다음 유형의 화면 전환은 금지됩니다. 금지된 화면 전환을 하는 앱이 발견되면 Quick-fill 사용 권한을 취소할 수 있으며, 이는 Quick-fill 신청 시 동의한 이용약관에 따릅니다.

- [자동으로 입력할 양식이 없는 화면에서 모달 표시](https://developers.line.biz/en/docs/line-mini-app/quick-fill/design-regulations/#show-modal-on-non-auto-fill-form)
- [양식에 없는 항목 가져오기](https://developers.line.biz/en/docs/line-mini-app/quick-fill/design-regulations/#get-non-existent-item)
- [양식을 자동으로 입력하지 않고 확인 화면으로 이동](https://developers.line.biz/en/docs/line-mini-app/quick-fill/design-regulations/#skip-input-form)

#### 자동으로 입력할 양식이 없는 화면에서 모달 표시 

필드를 자동으로 입력하는 양식이 없는 화면에서 모달을 표시하는 것은 금지됩니다.

![](https://developers.line.biz/media/line-mini-app/quick-fill/prohibited-screen-transition-01.webp)

#### 양식에 없는 항목 가져오기 

양식에 존재하지 않는 항목을 가져오는 것은 금지됩니다. 예를 들어 등록 양식에 발음 입력 필드가 없다면 발음 정보를 가져와서는 안 됩니다.

![](https://developers.line.biz/media/line-mini-app/quick-fill/prohibited-screen-transition-02.webp)

#### 양식을 자동으로 입력하지 않고 확인 화면으로 이동 

모달에서 사용자가 **Auto-fill** 버튼을 탭한 후 양식을 자동으로 입력하지 않고 바로 다음 화면으로 이동하는 것은 금지됩니다. 예를 들어 양식을 자동으로 입력하지 않고 등록 확인 화면으로 이동하거나, 가져온 프로필 정보를 표시하지 않은 채 등록을 완료하고 등록 완료 화면으로 이동해서는 안 됩니다.

![](https://developers.line.biz/media/line-mini-app/quick-fill/prohibited-screen-transition-03.webp)

## Auto-fill 버튼 가이드라인 

LINE MINI App에 Quick-fill을 연동할 때는 다음 항목을 준수해야 합니다.

### Auto-fill 버튼이란 

Auto-fill 버튼은 4가지 유형, 총 13종이 있습니다. LINE MINI App에 맞게 원하는 버튼을 사용하십시오. 버튼의 목록은 [Auto-fill 버튼 유형](https://developers.line.biz/en/docs/line-mini-app/quick-fill/design-regulations/#auto-fill-button)에서 확인할 수 있습니다.

![](https://developers.line.biz/media/line-mini-app/quick-fill/auto-fill-button-guideline-01.png)

### Auto-fill 버튼 사용 예시 

버튼은 수정하거나 편집하지 말고, 애니메이션이나 효과(확대, 회전, 장식 등)를 추가하지 않은 상태 그대로 사용하십시오. 금지 항목의 자세한 내용은 [Auto-fill 버튼의 금지 항목](https://developers.line.biz/en/docs/line-mini-app/quick-fill/design-regulations/#auto-fill-button-prohibition)을 참고해 주십시오.

![](https://developers.line.biz/media/line-mini-app/quick-fill/auto-fill-button-guideline-02.webp)

### Auto-fill 버튼의 위치 

사용자가 쉽게 볼 수 있도록 Auto-fill 버튼은 입력 필드의 왼쪽 또는 가운데에 맞추십시오.

#### 왼쪽 정렬 예시 

![](https://developers.line.biz/media/line-mini-app/quick-fill/auto-fill-button-guideline-03.webp)

#### 가운데 정렬 예시 

![](https://developers.line.biz/media/line-mini-app/quick-fill/auto-fill-button-guideline-04.webp)

#### 배치 시 주의 사항 

버튼을 탭한 후 채워질 양식을 사용자가 볼 수 있는 적절한 위치에 Auto-fill 버튼을 배치하십시오.

![](https://developers.line.biz/media/line-mini-app/quick-fill/auto-fill-button-guideline-05.webp)

#### 버튼 주변에 여백 두기 

버튼의 가시성과 독립성을 확보하려면 버튼의 위, 아래, 왼쪽, 오른쪽에 10px의 여백을 두십시오.

![](https://developers.line.biz/media/line-mini-app/quick-fill/auto-fill-button-guideline-06.png)

### Auto-fill 버튼의 금지 항목 

Auto-fill 버튼에 대해 다음 동작은 금지됩니다.

| ❌ 확대 및 축소 | ❌ 변형(기울이기, 회전, 기울임꼴, 정규화) |
| --- | --- |
| ![](https://developers.line.biz/media/line-mini-app/quick-fill/auto-fill-button-guideline-07.png) | ![](https://developers.line.biz/media/line-mini-app/quick-fill/auto-fill-button-guideline-08.png) |

| ❌ 장식(그림자, 테두리, 3D 표시) | ❌ 요소를 겹쳐서 표시 |
| --- | --- |
| ![](https://developers.line.biz/media/line-mini-app/quick-fill/auto-fill-button-guideline-09.png) | ![](https://developers.line.biz/media/line-mini-app/quick-fill/auto-fill-button-guideline-10.png) |

다음과 같은 Auto-fill 버튼의 표시 및 사용 방식도 금지됩니다.

| ❌ 자체 제작 버튼 사용 | ❌ Auto-fill 버튼 아래에 텍스트 추가 |
| --- | --- |
| ![](https://developers.line.biz/media/line-mini-app/quick-fill/auto-fill-button-prohibition-01.png) | ![](https://developers.line.biz/media/line-mini-app/quick-fill/auto-fill-button-prohibition-02.png) |

| ❌ Auto-fill 버튼 확대 및 축소 | ❌ Auto-fill 버튼 숨기기 |
| --- | --- |
| ![](https://developers.line.biz/media/line-mini-app/quick-fill/auto-fill-button-prohibition-03.png) | ![](https://developers.line.biz/media/line-mini-app/quick-fill/auto-fill-button-prohibition-04.png) |

## Auto-fill 버튼 유형 

Auto-fill 버튼은 4가지 유형, 총 13종이 있습니다. LINE MINI App에 맞게 원하는 버튼을 사용하십시오.

- [유형 A](https://developers.line.biz/en/docs/line-mini-app/quick-fill/design-regulations/#type-a)
- [유형 B](https://developers.line.biz/en/docs/line-mini-app/quick-fill/design-regulations/#type-b)
- [유형 C](https://developers.line.biz/en/docs/line-mini-app/quick-fill/design-regulations/#type-c)
- [유형 D](https://developers.line.biz/en/docs/line-mini-app/quick-fill/design-regulations/#type-d)

<!-- tip start -->

**지정된 크기로 Auto-fill 버튼 표시**

각 유형에 지정된 크기로 Auto-fill 버튼을 표시해 주십시오. Auto-fill 버튼 이미지는 지정 크기의 두 배입니다. 따라서 원본 크기로 표시하지 않도록 주의해 주십시오.

<!-- tip end -->

<!-- note start -->

**URL을 지정하여 Auto-fill 버튼 이미지 사용**

자동 입력 버튼의 이미지는 예고 없이 변경될 수 있습니다. 이미지를 다운로드하여 사용하지 말고, 반드시 이 페이지에 명시된 URL을 직접 사용해 주십시오. 또한 사전 공지 후 특정 이미지를 삭제하거나 URL을 변경할 수 있습니다. 양해 부탁드립니다.

<!-- note end -->

### 유형 A 

유형 A에서 번호 1이 기본 형태입니다. 번호 2~4는 색상 변형입니다. 크기는 가로 264px, 세로 73px입니다. ALT 속성에는 `ユーザー情報を自動入力。LINEやYahoo! JAPANに登録した情報を利用できます`를 지정합니다.

|  | 자동 입력 버튼 | URL |
| --- | --- | --- |
| 1 | ![](https://account-center-fe.line-scdn.net/images/quick_fill_button_AC_black.png) | `https://account-center-fe.line-scdn.net/images/quick_fill_button_AC_black.png` |
| 2 | ![](https://account-center-fe.line-scdn.net/images/quick_fill_button_AC_white.png) | `https://account-center-fe.line-scdn.net/images/quick_fill_button_AC_white.png` |
| 3 | ![](https://account-center-fe.line-scdn.net/images/quick_fill_button_AC_gray.png) | `https://account-center-fe.line-scdn.net/images/quick_fill_button_AC_gray.png` |
| 4 | ![](https://account-center-fe.line-scdn.net/images/quick_fill_button_AC_blue.png) | `https://account-center-fe.line-scdn.net/images/quick_fill_button_AC_blue.png` |

### 유형 B 

유형 B에서 번호 1이 기본 형태입니다. 번호 2~4는 색상 변형입니다. 크기는 가로 264px, 세로 73px입니다. ALT 속성에는 `ユーザー情報を自動入力。LINEやYahoo! JAPANに登録した情報を利用できます`를 지정합니다.

|  | 자동 입력 버튼 | URL |
| --- | --- | --- |
| 1 | ![](https://account-center-fe.line-scdn.net/images/quick_fill_button_simple_black.png) | `https://account-center-fe.line-scdn.net/images/quick_fill_button_simple_black.png` |
| 2 | ![](https://account-center-fe.line-scdn.net/images/quick_fill_button_simple_white.png) | `https://account-center-fe.line-scdn.net/images/quick_fill_button_simple_white.png` |
| 3 | ![](https://account-center-fe.line-scdn.net/images/quick_fill_button_simple_gray.png) | `https://account-center-fe.line-scdn.net/images/quick_fill_button_simple_gray.png` |
| 4 | ![](https://account-center-fe.line-scdn.net/images/quick_fill_button_simple_blue.png) | `https://account-center-fe.line-scdn.net/images/quick_fill_button_simple_blue.png` |

### 유형 C 

유형 C는 기본 형태만 있습니다. 크기는 가로 264px, 세로 73px입니다. ALT 속성에는 `ユーザー情報を自動入力。LINEやYahoo! JAPANに登録した情報を利用できます`를 지정합니다.

|  | 자동 입력 버튼 | URL |
| --- | --- | --- |
| 1 | ![](https://account-center-fe.line-scdn.net/images/quick_fill_button_LY_white.png) | `https://account-center-fe.line-scdn.net/images/quick_fill_button_LY_white.png` |

### 유형 D 

유형 D에서 번호 1이 기본 형태입니다. 번호 2~4는 색상 변형입니다. 크기는 가로 288px, 세로 66px입니다. ALT 속성에는 `LINEで自動入力しますか？氏名、電話番号、メールアドレス、住所など。自動入力`를 지정합니다.

|  | 자동 입력 버튼 | URL |
| --- | --- | --- |
| 1 | ![](https://account-center-fe.line-scdn.net/images/quick_fill_button_LINE_white.png) | `https://account-center-fe.line-scdn.net/images/quick_fill_button_LINE_white.png` |
| 2 | ![](https://account-center-fe.line-scdn.net/images/quick_fill_button_LINE_black.png) | `https://account-center-fe.line-scdn.net/images/quick_fill_button_LINE_black.png` |
| 3 | ![](https://account-center-fe.line-scdn.net/images/quick_fill_button_LINE_gray.png) | `https://account-center-fe.line-scdn.net/images/quick_fill_button_LINE_gray.png` |
| 4 | ![](https://account-center-fe.line-scdn.net/images/quick_fill_button_LINE_blue.png) | `https://account-center-fe.line-scdn.net/images/quick_fill_button_LINE_blue.png` |
