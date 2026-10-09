# LINE URL scheme을 사용하여 LINE 기능 이용하기

LINE URL scheme을 사용하면 스티커 샵, LIFF 앱 또는 카메라를 열 수 있습니다. LINE URL scheme은 LINE 공식 계정에서도 사용할 수 있습니다. [리치 메뉴](https://developers.line.biz/en/docs/messaging-api/using-rich-menus/)의 [액션](https://developers.line.biz/en/reference/messaging-api/#uri-action)을 LINE URL scheme을 여는 용도로 설정하면, 사용자가 리치 메뉴에서 LINE 콘텐츠를 볼 수 있습니다.

## 지원되는 LINE URL scheme 

다음 LINE URL scheme이 지원됩니다.

| URL scheme | 설명 |
| --- | --- |
| `https://line.me/R/`로 시작하는 URL scheme | LINE 앱 기능을 사용하기 위한 URL scheme |
| `https://liff.line.me/`로 시작하는 URL scheme | [LIFF 앱](https://developers.line.biz/en/docs/liff/overview/)을 여는 URL scheme |
| `https://miniapp.line.me/`로 시작하는 URL scheme | [LINE MINI App](https://developers.line.biz/en/docs/line-mini-app/discover/introduction/)을 여는 URL scheme |

<!-- warning start -->

**&quot;line://&quot;는 지원 중단되었습니다**

`line://` scheme은 URL을 클릭했을 때 LY Corporation 또는 사용자의 의도와 달리 LINE이 아닌 앱을 실행하는 탈취 공격을 막기 위해 지원 중단되었습니다. 이 공격은 특정 조건에서 발생할 수 있습니다.

`line://` URL scheme이 제공 종료되는 정확한 날짜는 정해지지 않았습니다.

<!-- warning end -->

<!-- note start -->

**LY Corporation은 LINE 이외의 네이티브 앱을 실행하는 URL scheme을 제공하지 않습니다**

LY Corporation은 LINE 이외의 네이티브 앱을 실행하는 URL scheme을 제공하지 않습니다. 다만, 다른 회사의 네이티브 앱이 해당 앱을 실행하는 URL scheme을 제공하는 경우, [리치 메뉴](https://developers.line.biz/en/docs/messaging-api/using-rich-menus/)나 [Flex Message](https://developers.line.biz/en/docs/messaging-api/using-flex-messages/)의 URI 액션 객체에서 해당 URL scheme을 사용할 수 있습니다.

<!-- note end -->

## LINE URL scheme을 클릭했을 때의 동작 

LINE이 설치된 기기에서 사용자가 LINE URL scheme을 사용하는 URL을 클릭하면, LINE이 자동으로 실행되어 URL에서 지정한 콘텐츠를 보여줍니다. LINE이 설치되어 있지 않은 경우의 동작은 scheme에 따라 다릅니다.

| LINE URL scheme | LINE이 설치되어 있지 않을 때의 동작 |
| --- | --- |
| `https://line.me/R/` | 웹 브라우저가 실행되고 사용자에게 LINE 다운로드를 안내합니다. |
| `line://` (지원 중단) | 아무 동작도 하지 않거나 오류 페이지로 이동합니다. |

## 지원 플랫폼 

LINE URL scheme은 iOS용 LINE과 Android용 LINE에서 지원됩니다.

<!-- note start -->

**참고**

LINE URL scheme은 PC용 LINE(macOS, Windows)에서 지원되지 않습니다.

<!-- note end -->

## 사용 가능한 LINE URL scheme 

LINE URL scheme으로 할 수 있는 작업은 다음과 같습니다. 특정 플랫폼에서만 지원되는 LINE URL scheme은 각 섹션에 명시되어 있습니다.

- [카메라 및 카메라 롤 열기](https://developers.line.biz/en/docs/line-login/using-line-url-scheme/#opening-the-camera-and-camera-roll)
- [위치 정보 보내기](https://developers.line.biz/en/docs/line-login/using-line-url-scheme/#sending-the-location-screen)
- [LINE 공식 계정 공유하기](https://developers.line.biz/en/docs/line-login/using-line-url-scheme/#sharing-line-official-account)
- [LINE 공식 계정의 비즈니스 프로필 열기](https://developers.line.biz/en/docs/line-login/using-line-url-scheme/#opening-profile)
- [LINE 공식 계정과의 채팅 화면 열기](https://developers.line.biz/en/docs/line-login/using-line-url-scheme/#opening-chat-screen)
- [텍스트 메시지 보내기](https://developers.line.biz/en/docs/line-login/using-line-url-scheme/#sending-text-messages)
- [프로필 정보 열기](https://developers.line.biz/en/docs/line-login/using-line-url-scheme/#opening-profile-information)
- [공통 LINE 화면 열기](https://developers.line.biz/en/docs/line-login/using-line-url-scheme/#opening-common-line-app-screens)
- [LINE 설정 열기](https://developers.line.biz/en/docs/line-login/using-line-url-scheme/#opening-line-app-settings-screens)
- [스티커 샵 열기](https://developers.line.biz/en/docs/line-login/using-line-url-scheme/#opening-the-sticker-shop)
- [테마 샵 열기](https://developers.line.biz/en/docs/line-login/using-line-url-scheme/#opening-the-theme-shop)
- [LIFF 앱 열기](https://developers.line.biz/en/docs/line-login/using-line-url-scheme/#opening-a-liff-app)
- [외부 브라우저에서 URL 열기](https://developers.line.biz/en/docs/line-login/using-line-url-scheme/#opening-url-in-external-browser)

### 카메라 및 카메라 롤 열기 

LINE URL scheme을 사용하면 사용자가 카메라 또는 카메라 롤을 열 수 있습니다. 카메라 롤은 사용자가 채팅에 공유할 이미지를 선택하는 곳입니다.

<!-- note start -->

**카메라 또는 카메라 롤 열기 제한**

LINE OpenChat을 포함한 LINE 채팅에서만 URL scheme으로 카메라 또는 카메라 롤을 열 수 있습니다. 채팅 이외의 LINE 기능, LIFF 앱 또는 LINE 이외의 앱에서는 이 URL scheme이 지원되지 않습니다.

<!-- note end -->

![](https://developers.line.biz/media/messaging-api/using-line-url-scheme/camera-screen.webp)

![](https://developers.line.biz/media/messaging-api/using-line-url-scheme/camera-roll.webp)

| LINE URL scheme | 설명 |
| --- | --- |
| `https://line.me/R/nv/camera/` | 카메라를 엽니다. 전면(인카메라)과 후면(아웃카메라)처럼 카메라가 여러 개인 스마트폰에서는 어느 카메라를 열지 지정할 수 없습니다. |
| `https://line.me/R/nv/cameraRoll/single` | 카메라 롤을 엽니다. 사용자는 채팅에 공유할 이미지를 하나 선택할 수 있습니다. |
| `https://line.me/R/nv/cameraRoll/multi` | 카메라 롤을 엽니다. 사용자는 채팅에 공유할 이미지를 여러 개 선택할 수 있습니다. |

### 위치 정보 보내기 

LINE URL scheme을 사용하면 위치 정보 화면을 열고, 사용자가 자신의 위치 정보를 LINE 공식 계정으로 보낼 수 있도록 할 수 있습니다.

<!-- note start -->

**위치 정보 화면 열기 제한**

이 URL scheme으로 위치 정보를 보게 할 수 있는 것은 사용자와 LINE 공식 계정 간의 1:1 채팅에서만입니다. 그 밖의 채팅 유형, LIFF 앱 또는 LINE 이외의 앱에서는 이 URL scheme이 지원되지 않습니다.

<!-- note end -->

![](https://developers.line.biz/media/messaging-api/using-line-url-scheme/location.webp)

| LINE URL scheme | 설명 |
| --- | --- |
| `https://line.me/R/nv/location/` | 위치 화면을 엽니다. 사용자는 지도에 핀을 놓아 공유할 위치를 선택할 수 있습니다. |

### LINE 공식 계정 공유하기 

LINE URL scheme을 사용하면 사용자와 친구들에게 LINE 공식 계정을 추가하도록 추천하고 권유할 수 있습니다.

![](https://developers.line.biz/media/messaging-api/using-line-url-scheme/bot-add-friend-en.webp)

| LINE URL scheme | 설명 |
| --- | --- |
| https://line.me/R/ti/p/`{Percent-encoded LINE ID}` | LINE 공식 계정의 프로필 페이지를 엽니다. 사용자가 해당 LINE 공식 계정의 친구라면 대신 1:1 채팅이 표시됩니다. |
| https://line.me/R/nv/recommendOA/`{Percent-encoded LINE ID}` | "Share with" 화면을 엽니다. 사용자는 친구, 그룹 채팅 또는 다인 채팅을 선택하여 LINE 공식 계정을 공유할 수 있습니다. |

<!-- note start -->

**&quot;Percent-encoded LINE ID&quot;는 퍼센트 인코딩되어야 합니다**

`{Percent-encoded LINE ID}`는 UTF-8로 [퍼센트 인코딩](https://developer.mozilla.org/en-US/docs/Glossary/Percent-encoding)되어 있어야 합니다. 예를 들어 LINE ID가 `@linedevelopers`라면 `https://line.me/R/ti/p/%40linedevelopers` 및 `https://line.me/R/nv/recommendOA/%40linedevelopers`를 사용합니다. 퍼센트 인코딩되지 않은 LINE ID를 사용해도 동작하지만, 이 방식은 지원 중단되었습니다.

다만, "Share with" 화면을 여는 URL scheme(`https://line.me/R/nv/recommendOA/%40linedevelopers`)에서 LINE ID를 퍼센트 인코딩하면, Android에서 LINE 13.8.0 이전 버전에서는 동작하지 않습니다.

LINE 공식 계정의 LINE ID로 [Basic ID 또는 Premium ID](https://help.linebiz.com/lineadshelp/s/article/L000001191?language=ja)(일본어로만 제공) 중 하나를 지정할 수 있습니다.

<!-- note end -->

<!-- tip start -->

**LINE 공식 계정의 LINE ID 확인하기**

LINE 공식 계정의 LINE ID는 [LINE Official Account Manager](https://manager.line.biz/)에서 확인할 수 있습니다. 자세한 내용은 [LINE 공식 계정의 LINE ID 공유하기](https://developers.line.biz/en/docs/messaging-api/sharing-bot/#share-the-line-id-of-your-line-official-account)를 참고하세요.

<!-- tip end -->

<!-- tip start -->

**PC 브라우저에서의 LINE URL scheme**

PC에서 `https://line.me/R/ti/p/{Percent-encoded LINE ID}`를 열면, 사용자에게 LINE 공식 계정 비즈니스 프로필의 공개 URL(예: [LINE FRIENDS 프로필 페이지](https://line.me/R/ti/p/@linecharacter))이 표시되거나 QR 코드만 표시됩니다. 표시되는 내용은 다음 조건에 따라 달라집니다.

- LINE 공식 계정이 인증된 계정임
- LINE 공식 계정 프로필의 공개 URL이 공개로 설정되어 있음

두 조건을 모두 충족하면 사용자에게 LINE 공식 계정의 공개 URL과 QR 코드가 표시됩니다. 충족하지 않으면 사용자에게 LINE 공식 계정의 QR 코드만 표시됩니다. 인증되지 않은 계정을 인증된 계정으로 바꾸거나 프로필의 공개 URL을 사용하려면 [LINE Official Account Manager](https://manager.line.biz/)에서 설정을 변경할 수 있습니다.

<!-- tip end -->

### LINE 공식 계정의 비즈니스 프로필 열기 

LINE URL scheme을 사용하면 사용자가 LINE 공식 계정의 비즈니스 프로필 페이지를 열 수 있습니다.

| LINE URL scheme | 설명 |
| --- | --- |
| https://line.me/R/home/public/profile?id=`{LINE ID without @}` | LINE 공식 계정의 비즈니스 프로필을 엽니다. |

<!-- note start -->

**URL scheme에서 골뱅이(@) 접두사를 제외하세요**

URL scheme의 `{LINE ID without @}`는 LINE 공식 계정의 LINE ID로 바꿉니다. Basic ID 또는 [Premium ID](https://developers.line.biz/en/glossary/#premium-id) 중 하나를 지정할 수 있습니다. LINE 공식 계정의 LINE ID에서 골뱅이(`@`) 접두사는 제외하세요. 예를 들어 LINE ID가 `@linedevelopers`라면 `https://line.me/R/home/public/profile?id=linedevelopers`를 사용합니다.

<!-- note end -->

<!-- tip start -->

**LINE 공식 계정의 LINE ID 확인하기**

LINE 공식 계정의 LINE ID는 [LINE Official Account Manager](https://manager.line.biz/)에서 확인할 수 있습니다. 자세한 내용은 [LINE 공식 계정의 LINE ID 공유하기](https://developers.line.biz/en/docs/messaging-api/sharing-bot/#share-the-line-id-of-your-line-official-account)를 참고하세요.

<!-- tip end -->

<!-- tip start -->

**비즈니스 프로필 맞춤 설정**

LINE 공식 계정의 비즈니스 프로필을 맞춤 설정하려면 [LINE Official Account Manager](https://manager.line.biz/)를 사용하세요.

<!-- tip end -->

### LINE 공식 계정과의 채팅 화면 열기 

LINE URL scheme을 사용하면 사용자가 LINE 공식 계정과의 채팅 화면을 열 수 있습니다.

| LINE URL scheme | 설명 |
| --- | --- |
| https://line.me/R/oaMessage/`{Percent-encoded LINE ID}` | LINE 공식 계정과의 채팅 화면을 엽니다. |
| https://line.me/R/oaMessage/`{Percent-encoded LINE ID}`/?`{text_message}` | LINE 공식 계정과의 채팅 화면을 열고, `{text_message}`에 설정한 텍스트 메시지를 메시지 입력란에 입력합니다. |

<!-- note start -->

**&quot;Percent-encoded LINE ID&quot;와 &quot;text_message&quot;는 퍼센트 인코딩되어야 합니다**

`{Percent-encoded LINE ID}`와 `{text_message}`는 UTF-8로 [퍼센트 인코딩](https://developer.mozilla.org/en-US/docs/Glossary/Percent-encoding)되어 있어야 합니다. 예를 들어 LINE ID `@linedevelopers`인 LINE 공식 계정에 "Hi there!"라는 텍스트 메시지를 보내려면 `https://line.me/R/oaMessage/%40linedevelopers/?Hi%20there%21`를 사용합니다. 퍼센트 인코딩되지 않은 LINE ID를 사용해도 동작하지만, 이 방식은 지원 중단되었습니다.

LINE 공식 계정의 LINE ID로 [Basic ID 또는 Premium ID](https://help.linebiz.com/lineadshelp/s/article/L000001191?language=ja)(일본어로만 제공) 중 하나를 지정할 수 있습니다.

<!-- note end -->

<!-- tip start -->

**LINE 공식 계정의 LINE ID 확인하기**

LINE 공식 계정의 LINE ID는 [LINE Official Account Manager](https://manager.line.biz/)에서 확인할 수 있습니다. 자세한 내용은 [LINE 공식 계정의 LINE ID 공유하기](https://developers.line.biz/en/docs/messaging-api/sharing-bot/#share-the-line-id-of-your-line-official-account)를 참고하세요.

<!-- tip end -->

### 텍스트 메시지 보내기 

LINE URL scheme을 사용하면 사용자가 친구 또는 LINE 공식 계정에 보낼 텍스트 메시지를 설정할 수 있습니다.

| LINE URL scheme | 설명 |
| --- | --- |
| https://line.me/R/share?text=`{text_message}` | "Share with" 화면을 엽니다. 사용자는 친구, 그룹 채팅 또는 다인 채팅을 선택하여 `{text_message}`로 지정한 텍스트 메시지를 보낼 수 있습니다. 사용자는 Keep Memo 등 다른 앱에도 텍스트를 보낼 수 있습니다. |

<!-- note start -->

**&quot;text_message&quot;는 퍼센트 인코딩되어야 합니다**

`{text_message}`는 UTF-8로 [퍼센트 인코딩](https://developer.mozilla.org/en-US/docs/Glossary/Percent-encoding)되어 있어야 합니다. 예를 들어 "Hi there!"라는 텍스트 메시지를 보내려면 `https://line.me/R/share?text=Hi%20there%21`를 사용합니다.

<!-- note end -->

### 프로필 정보 열기 

LINE URL scheme을 사용하면 사용자가 "My profile" 화면을 열 수 있습니다. 이 화면에서 사용자는 표시 이름과 상태 메시지를 수정하고, LINE ID를 설정하고, 프로필 설정을 확인할 수 있습니다.

![](https://developers.line.biz/media/messaging-api/using-line-url-scheme/my-profile.webp)

| LINE URL scheme | 설명 |
| --- | --- |
| `https://line.me/R/nv/profile` | 사용자의 "My profile" 화면을 엽니다. |
| `https://line.me/R/nv/profileSetId` | 사용자의 "LINE ID" 화면을 엽니다. 이 URL scheme을 사용하면 아직 LINE ID를 설정하지 않은 사용자가 LINE ID를 설정할 수 있습니다. |

### 공통 LINE 화면 열기 

LINE URL scheme을 사용하면 채팅 탭을 포함한 여러 LINE 화면을 사용자가 열 수 있습니다.

![](https://developers.line.biz/media/messaging-api/using-line-url-scheme/shopping-tab-en.webp)

| LINE URL scheme | 설명 |
| --- | --- |
| `https://line.me/R/nv/chat` | 채팅 탭을 엽니다. |
| `https://line.me/R/nv/commerce` | 쇼핑 탭을 엽니다. |
| `https://line.me/R/nv/wallet` | 지갑 탭 또는 MINI Apps 탭을 엽니다. MINI Apps 탭은 일본 사용자에게만 제공됩니다. |
| `https://line.me/R/nv/addFriends` | "Add friends" 화면을 엽니다. |
| `https://line.me/R/nv/officialAccounts` | "LINE Official Accounts" 화면을 엽니다. |

### LINE 설정 열기 

LINE URL scheme을 사용하면 다양한 설정 메뉴를 열 수 있습니다.

![](https://developers.line.biz/media/messaging-api/using-line-url-scheme/settings.png)

| LINE URL scheme | 설명 |
| --- | --- |
| `https://line.me/R/nv/settings` | 설정을 엽니다. |
| `https://line.me/R/nv/settings/account` | 계정 설정을 엽니다. 사용자의 LINE 계정 정보를 표시합니다. |
| `https://line.me/R/nv/connectedApps` | Account > Authorized apps를 엽니다. 승인된 앱의 권한을 보여주고, 사용자가 앱 연결을 해제할 수 있도록 합니다. |
| `https://line.me/R/nv/connectedDevices` | Account > Connected devices를 엽니다. |
| `https://line.me/R/nv/settings/privacy` | 개인정보 보호 설정을 엽니다. |
| `https://line.me/R/nv/settings/sticker` | 스티커 설정을 엽니다. |
| `https://line.me/R/nv/stickerShop/mySticker` | Stickers > My Stickers를 엽니다. |
| `https://line.me/R/nv/settings/themeSettingsMenu` (iOS), `https://line.me/R/nv/settings/theme` (Android) | 테마 설정을 엽니다.<br />iOS와 Android에서 scheme이 다릅니다. |
| `https://line.me/R/nv/themeSettings` | Themes > My Themes를 엽니다. |
| `https://line.me/R/nv/notificationServiceDetail` | Notification > Authorized apps를 엽니다. 사용자가 승인된 앱의 알림을 설정할 수 있습니다. |
| `https://line.me/R/nv/settings/chatSettings` | 채팅 설정을 엽니다. |
| `https://line.me/R/nv/suggestSettings` | Chats > Display suggestions를 엽니다. |
| `https://line.me/R/nv/settings/callSettings` | 통화 설정을 엽니다. |
| `https://line.me/R/nv/settings/addressBookSync` | 친구 설정을 엽니다. |

### 스티커 샵 열기 

LINE URL scheme을 사용하면 사용자가 LINE의 스티커 샵을 열어 공식 스티커 세트와 크리에이터의 스티커 세트 구매를 유도할 수 있습니다.

![](https://developers.line.biz/media/messaging-api/using-line-url-scheme/sticker-shop-categories.webp)

| LINE URL scheme | 설명 |
| --- | --- |
| https://line.me/R/shop/sticker/detail/`{package_id}` | 스티커 세트 정보 화면을 엽니다. `{package_id}`에는 [LINE STORE](https://store.line.me/)에서 스티커 페이지 URL에 지정된 숫자를 입력합니다. |
| https://line.me/R/shop/category/`{category_id}` | 지정한 카테고리의 인기 순위를 엽니다. `{category_id}`에는 [LINE STORE](https://store.line.me/) > Official stickers에서 카테고리 페이지 URL에 지정된 숫자를 입력합니다. |
| https://line.me/R/shop/sticker/author/`{author_id}` | 지정한 작성자의 스티커 세트 목록을 엽니다. `{author_id}`에는 [LINE STORE](https://store.line.me/)에서 크리에이터 페이지 URL에 지정된 숫자를 입력합니다. |
| `https://line.me/R/nv/stickerShop` | 스티커 샵 > HOME 탭을 엽니다. |
| `https://line.me/R/shop/sticker/hot` | 스티커 샵 > RANK 탭을 엽니다. |
| `https://line.me/R/shop/sticker/new` | 스티커 샵 > NEW 탭을 엽니다. |
| `https://line.me/R/shop/sticker/event` | 스티커 샵 > FREE 탭을 엽니다. |
| `https://line.me/R/shop/sticker/category` | 스티커 샵 > CATEGORIES 탭을 엽니다. |

<!-- tip start -->

**나만의 스티커 세트 만들기**

사용자를 위한 스티커 세트를 직접 만들려면 [LINE Creators Market](https://creator.line.me/en/)을 방문하여 [LINE Sticker Maker](https://creator.line.me/en/stickermaker/) 앱을 사용하세요.

<!-- tip end -->

### 테마 샵 열기 

LINE URL scheme을 사용하면 사용자가 LINE의 테마 샵을 열어 공식 테마와 크리에이터의 테마 구매를 유도할 수 있습니다.

![](https://developers.line.biz/media/messaging-api/using-line-url-scheme/theme-shop.webp)

| LINE URL scheme | 설명 |
| --- | --- |
| https://line.me/R/shop/theme/detail?id=`{product_id}` | 테마 정보 화면을 엽니다. `{product_id}`에는 [LINE STORE](https://store.line.me/)에서 테마 페이지 URL에 지정된 ID를 입력합니다. 예를 들어 [Matte White](https://store.line.me/themeshop/product/0bac8fed-4c75-40c5-9982-e9ecc3b9d191/en)`https://store.line.me/themeshop/product/0bac8fed-4c75-40c5-9982-e9ecc3b9d191/en`를 열려면 `0bac8fed-4c75-40c5-9982-e9ecc3b9d191`를 지정합니다. |

### LIFF 앱 열기 

LINE URL scheme을 사용하면 사용자가 LIFF 앱을 열 수 있습니다. LIFF 앱은 [LINE Front-end Framework(LIFF)](https://developers.line.biz/en/docs/liff/overview/)로 만든 웹 앱입니다.

![](https://developers.line.biz/media/messaging-api/using-line-url-scheme/liff-app.png)

| LINE URL scheme | 설명 |
| --- | --- |
| https://liff.line.me/`{liffId}` | 지정한 LIFF ID의 LIFF 앱을 엽니다. 이 URL scheme을 LIFF URL이라고 합니다. |
| https://liff.line.me/`{liffId}`/path_A/path_B/?key1=value1&key2=value2 | 지정한 LIFF ID의 LIFF 앱을 엽니다. 추가 정보로 `/path_A/path_B/?key1=value1&key2=value2`를 전달할 수 있습니다. |

LIFF 앱을 여는 과정에 대한 자세한 내용은 LIFF 문서의 [LIFF 앱 열기](https://developers.line.biz/en/docs/liff/opening-liff-app/)를 참고하세요.

<!-- note start -->

**&quot;https://line.me/R/app/{liffId}&quot;와 &quot;line://app/{liffId}&quot;는 지원 중단되었습니다**

[LIFF v1](https://developers.line.biz/en/docs/liff/versioning-policy/#life-cycle-schedule)에서 사용하던 다음 LIFF URL 형식은 [지원 중단](https://developers.line.biz/en/glossary/#deprecated)되었습니다.

- `https://line.me/R/app/{liffId}`&nbsp;
- `line://app/{liffId}`&nbsp;

<!-- note end -->

### 외부 브라우저에서 URL 열기 

쿼리 파라미터를 사용하면 사용자가 [LINE의 인앱 브라우저](https://developers.line.biz/en/glossary/#line-iab) 대신 [외부 브라우저](https://developers.line.biz/en/glossary/#external-browser)에서 URL을 열 수 있습니다.

<!-- note start -->

**이 쿼리 파라미터는 LIFF 앱에서 지원되지 않습니다**

이 쿼리 파라미터는 LIFF 앱을 제외하고, LINE 앱에서 접근하는 모든 URL에서 동작합니다. LIFF URL에 이 쿼리 파라미터를 추가해도 외부 브라우저에서 열리지 않습니다.

<!-- note end -->

| 쿼리 파라미터가 포함된 URL | 설명 |
| --- | --- |
| https://example.com/?`openExternalBrowser=1` | 대상 URL을 외부 브라우저에서 엽니다. |
| https://example.com/?`openInAppBrowser=0` | 대상 URL을 Chrome 커스텀 탭에서 엽니다(Android용 LINE에서만 사용 가능). |
