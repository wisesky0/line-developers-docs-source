# LINE MINI App 아이콘 사양 및 가이드라인

LINE MINI App 아이콘은 채널 동의 화면, 홈 탭, LINE 메시지, 서비스 메시지를 포함한 다양한 곳에서 사용됩니다. 이 페이지에서는 아이콘을 만들 때 따라야 할 가이드라인과 아이콘용 이미지를 업로드하는 방법을 안내합니다.

- [LINE MINI App 아이콘의 주요 위치](https://developers.line.biz/en/docs/line-mini-app/design/line-mini-app-icon/#main-locations)
- [가이드라인](https://developers.line.biz/en/docs/line-mini-app/design/line-mini-app-icon/#guidelines)
- [아이콘용 이미지 업로드 방법](https://developers.line.biz/en/docs/line-mini-app/design/line-mini-app-icon/#how-to-upload)

## LINE MINI App 아이콘의 주요 위치 

LINE MINI App 아이콘의 주요 위치는 다음과 같습니다.

- [채널 동의 화면](https://developers.line.biz/en/docs/line-mini-app/develop/configure-console/#consent-screen-settings)
- [홈 탭](https://developers.line.biz/en/docs/line-mini-app/discover/introduction/#home-tab)
- [LINE 메시지](https://developers.line.biz/en/docs/line-mini-app/discover/introduction/#line-message)
- [서비스 메시지](https://developers.line.biz/en/docs/line-mini-app/develop/service-messages/)

![](https://developers.line.biz/media/line-mini-app/line-mini-app-icon/channel-consent-screen-en.webp)
![](https://developers.line.biz/media/line-mini-app/line-mini-app-icon/home-tab-en.webp)
![](https://developers.line.biz/media/line-mini-app/line-mini-app-icon/line-message-en.webp)
![](https://developers.line.biz/media/line-mini-app/line-mini-app-icon/service-messages-en.webp)

## 가이드라인 

다음은 LINE MINI App 아이콘을 디자인할 때 따라야 할 가이드라인입니다. 아이콘은 특히 모바일 기기에서 작게 보일 수 있습니다. 어디에 표시되더라도 사용자가 잘 볼 수 있도록 아이콘을 디자인하세요.

- [금지 사항](https://developers.line.biz/en/docs/line-mini-app/design/line-mini-app-icon/#prohibited-matters)
- [필수 사항](https://developers.line.biz/en/docs/line-mini-app/design/line-mini-app-icon/#required-matters)
- [권장 사항](https://developers.line.biz/en/docs/line-mini-app/design/line-mini-app-icon/#recommended-matters)

### 금지 사항 

#### LINE MINI App 로고 사용 

아래에 나온 LINE MINI App 로고를 여러분의 로고에 포함하지 마세요.

| 일본어 | 영어 |
| --- | --- |
| ![](https://developers.line.biz/media/line-mini-app/line-mini-app-icon/mini-icon-guideline-mini-logo-ja.png) | ![](https://developers.line.biz/media/line-mini-app/line-mini-app-icon/mini-icon-guideline-mini-logo-en.png) |

### 필수 사항 

#### 아이콘 크기 

아이콘의 배경 영역(BG SIZE)은 130x130px이어야 합니다.

![](https://developers.line.biz/media/line-mini-app/mini_icon_background.png)

#### 로고 크기 

로고 크기(LOGO SIZE)는 최소 54x54px, 최대 90x90px이어야 합니다. 권장 크기는 54×54px에서 76×76px 사이입니다.

![](https://developers.line.biz/media/line-mini-app/line-mini-app-icon/mini-icon-guideline-size-en.png)

### 권장 사항 

#### 로고 디자인 

로고의 가시성과 품질을 항상 유지하려면 단독 아이콘이나 워드마크로 디자인하는 것이 좋습니다.

![](https://developers.line.biz/media/line-mini-app/line-mini-app-icon/mini-icon-guideline-design.png)

<!-- tip start -->

**PSD 형식의 템플릿 파일로 아이콘 만들기(선택 사항)**

아이콘을 만들 때 사용할 수 있는 PSD 템플릿 파일을 제공합니다. 템플릿 파일을 사용하면 아이콘의 외곽선을 설정할 수 있습니다. 외곽선을 설정하면 LINE 앱에서 아이콘과 같은 색상의 배경 앞에 놓였을 때 아이콘을 더 쉽게 알아볼 수 있습니다. 아이콘을 만들기 전에 다음 템플릿 파일(PSD 형식)을 다운로드하세요.

[템플릿 파일 다운로드(PSD 형식)](https://vos.line-scdn.net/line-developers/docs/media/line-mini/icon_template_file.psd)

템플릿 파일로 아이콘을 만들 때는 배경색에 맞게 외곽선 색상을 지정하세요. 이때 템플릿 파일에서 배경색 유형을 선택하는 것을 권장합니다. 또한 저장하기 전에 사용하지 않는 레이어는 숨기세요.

![](https://developers.line.biz/media/line-mini-app/mini_icon_guideline_color.png)

| 배경색 | 외곽선 색상 | 외곽선 불투명도 |
| --------------------------------- | --------------- | --------------- |
| 흰색(#FFFFFF) | 검은색(#000000) | 12% |
| 검은색(#000000)<br>어두운 색(#181818) | 흰색(#FFFFFF) | 8% |
| 기타 색상 | 검은색(#000000) | 8% |

<!-- tip end -->

## 아이콘용 이미지 업로드 방법 

[LINE Developers Console](https://developers.line.biz/console/)의 **Basic settings** 탭에 있는 **Channel icon**에서 아이콘용 이미지를 업로드하세요. 아이콘에 사용할 수 있는 파일 형식은 PNG와 JPEG뿐입니다.

업로드한 아이콘 이미지는 자동으로 잘리며, 아이콘 배경은 투명해집니다. 미리보기 이미지의 초록색 사각형 안에 로고가 들어가도록 하세요.

![](https://developers.line.biz/media/line-mini-app/line-mini-app-icon/mini-icon-form-en.png)
