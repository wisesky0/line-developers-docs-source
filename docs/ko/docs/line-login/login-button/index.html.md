# LINE Login 버튼 디자인 가이드라인

[LINE Login](https://developers.line.biz/en/docs/line-login/overview/)을 사용하여 사용자가 애플리케이션에 로그인할 수 있도록 LINE Login 버튼을 추가하십시오.

![LINE Login button image](https://developers.line.biz/media/line-login/login-button/login-button-en.png)

LINE Login 버튼은 LINE 아이콘, LINE 아이콘 말풍선, LINE Login 버튼 텍스트로 구성됩니다.

LINE Login 버튼을 사용하기 전에 [LINE Login 버튼 사용 가이드라인](https://terms2.line.me/LINE_Developers_Guidelines_for_Login_Button)을 읽고 동의했는지 확인하십시오. 다음 LINE Login 버튼 템플릿을 다운로드하면 가이드라인에 동의한 것으로 간주됩니다.

[LINE Login 버튼 템플릿 다운로드](https://vos.line-scdn.net/line-developers/docs/media/line-login/login-button/LINE_Login_Button_Image.zip)

<br>이 파일에는 웹, iOS 또는 Android 애플리케이션에서 사용할 수 있는 여러 해상도의 이미지 세트가 여러 개 포함되어 있습니다. 다른 언어로 된 맞춤 로그인 텍스트를 추가하려면 PSD 파일을 사용하십시오.

## 디자인 가이드라인 

앱에 LINE Login 버튼을 추가할 때 다음 디자인 가이드라인을 사용하십시오.

### 크기 

이미지가 다음 조건을 준수하는 한, 버튼이 표시될 기기에 따라 LINE Login 버튼의 크기를 키우거나 줄일 수 있습니다.

- LINE 아이콘의 가로세로 비율은 변경하지 않습니다.
- LINE 아이콘이 분명하게 보여야 합니다.

### 색상 

LINE Login 버튼에는 다음 색상만 사용할 수 있습니다.

| 항목 | 색상 |
| :--- | :--- |
| 기본 색상 | ![base color](https://developers.line.biz/media/line-login/login-button/06c755.png)#06C755 |
| 호버 | ![base color](https://developers.line.biz/media/line-login/login-button/06c755.png)#06C755 + ![hover color](https://developers.line.biz/media/line-login/login-button/000000-10-per.png)#000000 (불투명도: 10%) |
| 누름 | ![base color](https://developers.line.biz/media/line-login/login-button/06c755.png)#06C755 + ![press color](https://developers.line.biz/media/line-login/login-button/000000-30-per.png)#000000 (불투명도: 30%) |
| 비활성화 | ![white color](https://developers.line.biz/media/line-login/login-button/ffffff.png)#FFFFFF |
| 글꼴/로고 색상(비활성화 제외) | ![logo white color](https://developers.line.biz/media/line-login/login-button/ffffff.png)#FFFFFF |
| 글꼴/로고 색상(비활성화에만 해당) | ![logo grey color](https://developers.line.biz/media/line-login/login-button/1e1e1e-20-per.png)#1E1E1E (불투명도: 20%) |
| 세로선 색상(비활성화 제외) | ![line color for other than disabled](https://developers.line.biz/media/line-login/login-button/000000-8-per.png)#000000 (불투명도: 8%) |
| 세로선 색상(비활성화에만 해당) | ![line color for only disabled](https://developers.line.biz/media/line-login/login-button/e5e5e5-60-per.png)#E5E5E5 (불투명도: 60%) |
| 테두리 색상(비활성화에만 해당) | ![border color](https://developers.line.biz/media/line-login/login-button/e5e5e5-60-per.png)#E5E5E5 (불투명도: 60%) |

<!-- note start -->

**불투명도 색상 레이어에 주의하십시오**

불투명도가 있는 색상은 어떤 레이어 위에 배치하는지 주의해야 합니다. 예를 들어 호버 상태 버튼의 세로선은 호버 색상(`#000000 (opacity: 30%)`)을 기본 색상 레이어(`#06C755`) 위에 배치한 다음, 그 위에 세로선(`#000000 (opacity: 8%)`)과 텍스트/로고(`#FFFFFF`)를 배치합니다.

![Layers of LINE login buttons](https://developers.line.biz/media/line-login/login-button/login-button-color-layer-order-en.png)

각 레이어의 배치에 대한 자세한 내용은 아래 그림을 참고하십시오.

<!-- note end -->

![LINE Login button color](https://developers.line.biz/media/line-login/login-button/login-button-color-en.png)

### 텍스트 

권장하는 LINE Login 버튼 텍스트는 "Log in with LINE"입니다. 여러 언어에 대해 권장하는 문구 목록은 아래 표에서 확인할 수 있습니다.

버튼 텍스트를 직접 맞춤 설정하려면 다음 가이드라인을 따르십시오.

- 줄바꿈을 하지 않습니다.
- 사용자에게 이 버튼이 LINE으로 앱에 로그인하기 위한 것임을 분명하게 알 수 있어야 합니다.

버튼 텍스트 없이 LINE 아이콘만 LINE Login 버튼으로 사용할 수도 있습니다.

|Language|Login button text (long)|Login button text (short)|
|--- |--- |--- |
|en|Log in with LINE|Log in|
|ja|LINEでログイン|ログイン|
|ko|LINE으로 로그인|로그인|
|de|Mit LINE anmelden|Anmelden|
|es|Iniciar sesión con LINE|Iniciar sesión|
|fr|Connexion avec LINE|Se connecter|
|id|Masuk dengan LINE|Masuk|
|it|Login con LINE|Login|
|ms|Log masuk dengan LINE|Log Masuk|
|pt-BR|Login com o LINE|Login|
|pt-PT|Iniciar sessão com o LINE|Iniciar sessão|
|ru|Войти в LINE|Войти|
|th|ล็อกอินด้วย LINE|ล็อกอิน|
|tr|LINE ile oturum açın|Oturum Aç|
|ar|تسجيل دخول باستخدام LINE|تسجيل دخول|
|vi|Đăng nhập với LINE|Đăng nhập|
|zh-CN|用LINE帐号登录|登录|
|zh-TW|與LINE連動|連動|

### 글꼴 

버튼 텍스트의 글꼴은 읽기 쉬워야 합니다. 각 이미지 크기에 권장하는 글꼴 크기는 PSD 파일에 포함되어 있습니다.

### 여백 

로그인 버튼 텍스트의 좌우 여백 너비는 LINE 아이콘 말풍선의 너비와 같거나 커야 합니다. 이 너비는 아래 이미지에서 X로 정의합니다.

로그인 버튼 텍스트의 상하 여백은 X/2를 권장합니다. 이 여백을 유지할 수 있는 글꼴 크기를 사용하십시오.

![LINE Login button padding](https://developers.line.biz/media/line-login/login-button/login-button-padding-en.png)

### 격리 영역 

격리 영역(isolation zone)은 LINE Login 버튼 주변의 공간으로, 어떤 요소도 포함할 수 없습니다. 격리 영역의 너비는 LINE 아이콘 말풍선의 왼쪽 여백과 같거나 커야 합니다. 이 너비는 아래 이미지에서 "A"로 정의합니다. 격리 영역을 유지하는 것 외에도, 격리 영역 근처에 텍스트나 그래픽을 배치하지 마십시오. 그렇게 하면 LINE Login 버튼의 효과가 떨어질 수 있습니다.

![LINE Login button isolation zone](https://developers.line.biz/media/line-login/login-button/login-button-isolation-zone.png)

### 흔한 실수 

- 지정되지 않은 색상 사용
- 오래된 LINE 아이콘 사용
- LINE 아이콘 대신 다른 아이콘이나 수정된 아이콘 사용
