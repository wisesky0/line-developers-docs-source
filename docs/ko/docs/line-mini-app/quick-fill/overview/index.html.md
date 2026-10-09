# 공통 프로필 Quick-fill 개요

<!-- tip start -->

**검증된 MINI App에서만 사용할 수 있습니다**

공통 프로필 Quick-fill을 사용하려면 LINE MINI App이 검증되어 있어야 하며, Quick-fill 사용을 신청해야 합니다. 자세한 내용은 [Quick-fill 사용 단계](https://developers.line.biz/en/docs/line-mini-app/quick-fill/overview/#process)를 참고해 주십시오.

<!-- tip end -->

## 공통 프로필 Quick-fill이란 

Quick-fill은 LINE MINI App에서 **Auto-fill** 버튼을 탭하면 필요한 프로필 정보를 자동으로 입력해 주는 기능입니다. 사용자가 계정 센터에서 설정한 공통 프로필 정보를 LINE MINI App에서 간편하게 사용할 수 있습니다.

![](https://developers.line.biz/media/line-mini-app/quick-fill/quick-fill-3-steps.webp)

LINE MINI App에 Quick-fill을 연동하면 사용자는 한 번의 탭으로 주소나 전화번호를 자동으로 입력할 수 있습니다. 예를 들어 식당을 예약하거나 온라인 스토어에서 주문할 때 정보를 직접 입력하는 번거로움을 줄일 수 있습니다.

이 페이지에서는 LINE MINI App에 Quick-fill을 연동하는 방법을 설명합니다.

LINE MINI App에서 Quick-fill을 사용하는 방법은 LINE 사용자 가이드의 [Quick-fill에 사용할 공통 프로필 설정](https://guide.line.me/ja/account-and-settings/quick-fill.html)(일본어만 제공)을 참고해 주십시오.

### Quick-fill을 지원하는 언어 

Quick-fill은 현재 일본어만 지원합니다. 따라서 LINE 앱의 언어 설정과 관계없이 Quick-fill 화면은 일본어로 표시됩니다.

## Quick-fill 사용 단계 

Quick-fill을 사용하려면 LINE MINI App이 검증되어 있어야 하며, Quick-fill 사용을 신청해야 합니다. 다음 단계를 따라 주십시오.

- [1단계. 검증된 MINI App 준비](https://developers.line.biz/en/docs/line-mini-app/quick-fill/overview/#process-step-1)
- [2단계. Quick-fill 사용 신청 및 개발](https://developers.line.biz/en/docs/line-mini-app/quick-fill/overview/#process-step-2)

### 1단계. 검증된 MINI App 준비 

Quick-fill은 검증된 MINI App에서만 사용할 수 있습니다. 따라서 Quick-fill을 연동하려면 먼저 검증된 MINI App을 준비해야 합니다. 자세한 내용은 [LINE MINI App 개발부터 출시까지의 과정](https://developers.line.biz/en/docs/line-mini-app/quickstart/#overall-process)을 참고해 주십시오.

### 2단계. Quick-fill 사용 신청 및 개발 

검증된 MINI App을 준비한 후에는 Quick-fill을 신청하고 개발합니다. 다음 단계를 따라 주십시오.

- [2-1단계. Quick-fill 신청 및 승인 받기](https://developers.line.biz/en/docs/line-mini-app/quick-fill/overview/#process-step-2-1)
- [2-2단계. LINE Developers Console에서 Quick-fill 스코프 지정](https://developers.line.biz/en/docs/line-mini-app/quick-fill/overview/#process-step-2-2)
- [2-3단계. Quick-fill 연동](https://developers.line.biz/en/docs/line-mini-app/quick-fill/overview/#process-step-2-3)
- [2-4단계. LINE MINI App 심사 요청](https://developers.line.biz/en/docs/line-mini-app/quick-fill/overview/#process-step-2-4)

#### 2-1단계. Quick-fill 신청 및 승인 받기 

Quick-fill을 사용하려면 먼저 사용 신청서를 작성하고 신청 양식을 통해 제출합니다. 같은 서비스 제공자가 여러 LINE MINI App을 한꺼번에 신청하는 경우에는 여러 건 신청용 양식을 사용할 수 있습니다.

- [[단일 신청] 사용 신청서(Excel 파일)](https://workers-hub.ent.box.com/s/06w8vzqxfwx2e031oq2q9ztj7ca8p7h8) (일본어만 제공)
- [[복수 신청] 사용 신청서(Excel 파일)](https://workers-hub.ent.box.com/s/xrwjm892d1uxsiblptfgoj07r0v5zwbp) (일본어만 제공)

사용 신청서를 작성한 후에는 다음 양식을 통해 신청을 제출해 주십시오. 신청 접수와 심사 결과는 이메일로 안내해 드립니다.

[신청 양식](https://form-business.yahoo.co.jp/claris/enqueteForm?inquiry_type=miniapp-quick-fill) (일본어만 제공)

#### 2-2단계. LINE Developers Console에서 Quick-fill 스코프 지정 

Quick-fill 사용 신청이 수락되면 사용할 정보의 스코프를 지정합니다. [LINE Developers Console](https://developers.line.biz/console/)에서 대상 LINE MINI App 채널을 선택한 후, **Web app settings** 탭의 **Scope** 섹션에서 사용할 스코프의 체크박스를 선택합니다.

검증된 MINI App의 스코프를 지정하려면 **Review request** 탭에서 **Search enable** 버튼을 클릭하여 LINE MINI App의 검색을 활성화해야 합니다.

![](https://developers.line.biz/media/line-mini-app/quick-fill/quick-fill-scope-en.png)

Quick-fill에서 사용할 수 있는 스코프 유형에 대한 자세한 내용은 [LINE Developers Console에서 선택할 수 있는 스코프 유형](https://developers.line.biz/en/docs/line-mini-app/quick-fill/overview/#scope)을 참고해 주십시오.

<!-- tip start -->

**Quick-fill과 채널 동의 간소화를 동시에 활성화한 경우의 동작**

Quick-fill과 [채널 동의 간소화](https://developers.line.biz/en/docs/line-mini-app/develop/channel-consent-simplification/)를 동시에 활성화하면, 사용자는 검증 화면에서 공통 프로필의 토글 버튼을 끌 수 없습니다. 이 동작은 향후 수정할 예정입니다. 검증 화면에 대한 자세한 내용은 [검증 화면에서 `openid` 스코프 이외의 권한 요청](https://developers.line.biz/en/docs/line-mini-app/develop/channel-consent-simplification/#request-permissions-other-than-openid)을 참고해 주십시오.

<!-- tip end -->

#### 2-3단계. Quick-fill 연동 

스코프를 지정한 후에는 LINE MINI App에 Quick-fill을 연동합니다. 개발에 대한 자세한 내용은 [LIFF 플러그인으로 Quick-fill 연동](https://developers.line.biz/en/docs/line-mini-app/quick-fill/overview/#use-liff-plugin)을 참고해 주십시오.

Quick-fill을 연동하는 LINE MINI App을 개발할 때는 다음 문서를 따라 주십시오.

- [공통 프로필 Quick-fill 디자인 규정](https://developers.line.biz/en/docs/line-mini-app/quick-fill/design-regulations/)
- [LINE MINI App 개발 가이드라인](https://developers.line.biz/en/docs/line-mini-app/development-guidelines/)
- [LIFF 앱 개발 가이드라인](https://developers.line.biz/en/docs/liff/development-guidelines/)
- [LINE 로그인 개발 가이드라인](https://developers.line.biz/en/docs/line-login/development-guidelines/)

#### 2-4단계. LINE MINI App 심사 요청 

Quick-fill을 연동한 후에는 LINE MINI App 채널의 **Review request** 탭에서 LINE MINI App의 심사를 요청합니다. LINE MINI App이 심사를 통과하면 변경 사항을 공개된 LINE MINI App에 적용할 수 있습니다.

## LIFF 플러그인으로 Quick-fill 연동 

Quick-fill을 개발하려면 LIFF SDK와 [LIFF 플러그인](https://developers.line.biz/en/docs/liff/liff-plugin/)을 사용해야 합니다. LIFF 플러그인과 호환되는 LIFF SDK 버전에 대한 정보는 [LIFF SDK 버전](https://developers.line.biz/en/docs/line-mini-app/quick-fill/overview/#liff-sdk-version)을 참고해 주십시오.

LINE MINI App에 LIFF SDK를 연동하는 방법은 다음 두 가지 중 하나입니다.

- [CDN 경로를 지정하여 Quick-fill 연동](https://developers.line.biz/en/docs/line-mini-app/quick-fill/overview/#specify-cdn-path)
- [npm 패키지를 사용하여 Quick-fill 연동](https://developers.line.biz/en/docs/line-mini-app/quick-fill/overview/#use-npm-package)

LINE MINI App에 LIFF SDK를 연동한 후에는 아래와 같이 Quick-fill LIFF 플러그인을 [`liff.use()`](https://developers.line.biz/en/reference/liff/#use) 메서드에 전달하여 Quick-fill을 활성화할 수 있습니다.

```javascript
liff.use(new LiffCommonProfilePlugin());
await liff.init({ liffId: "xxx" });

const { data, error } = await liff.$commonProfile.get();
liff.$commonProfile.fill(data);
```

`liff` 객체에 `$commonProfile` 속성이 추가되며, 다음 Quick-fill 클라이언트 API를 사용할 수 있습니다.

- [`liff.$commonProfile.get()`](https://developers.line.biz/en/reference/line-mini-app/#get-common-profile)
- [`liff.$commonProfile.getDummy()`](https://developers.line.biz/en/reference/line-mini-app/#get-dummy-common-profile)
- [`liff.$commonProfile.fill()`](https://developers.line.biz/en/reference/line-mini-app/#fill-common-profile)

### CDN 경로를 지정하여 Quick-fill 연동 

CDN 경로를 지정할 때 `script` 태그로 패키지를 불러오면 window 객체에 `liffCommonProfile` 속성이 추가됩니다. `liffCommonProfile` 안에 있는 `LiffCommonProfilePlugin` 클래스의 인스턴스를 `liff.use()`의 인수로 전달합니다.

```html
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://static.line-scdn.net/liff/edge/2/sdk.js"></script>
    <script src="https://static.line-scdn.net/5/liff-common-profile/edge/production/1.0.0/index.umd.cjs"></script>
    <title>LIFF App</title>
  </head>
  <body>

    <script type="module" src="/index.js"></script>
  </body>
</html>
```

```js
liff.use(new liffCommonProfile.LiffCommonProfilePlugin());

const { data, error } = await liff.$commonProfile.get();
liff.$commonProfile.fill(data);
```

자세한 내용은 LIFF 문서의 [CDN 경로 지정](https://developers.line.biz/en/docs/liff/developing-liff-apps/#specify-cdn-path)을 참고해 주십시오.

### npm 패키지를 사용하여 Quick-fill 연동 

npm 패키지를 사용할 때는 패키지에서 `LiffCommonProfilePlugin` 클래스를 가져와 인스턴스를 `liff.use()`의 인수로 전달합니다.

```sh
$ npm install @line/liff-common-profile-plugin
```

```js
import liff from "@line/liff";
import { LiffCommonProfilePlugin } from "@line/liff-common-profile-plugin";
liff.use(new LiffCommonProfilePlugin());

const { data, error } = await liff.$commonProfile.get();
liff.$commonProfile.fill(data);
```

자세한 내용은 LIFF 문서의 [npm 패키지 사용](https://developers.line.biz/en/docs/liff/developing-liff-apps/#use-npm-package)을 참고해 주십시오.

## Quick-fill 운영 환경 

Quick-fill은 사용자가 LINE for iOS 또는 LINE for Android를 사용하는 경우에만 동작합니다.

시스템에서 Quick-fill의 운영 환경은 다음과 같습니다.

- [LIFF SDK 버전](https://developers.line.biz/en/docs/line-mini-app/quick-fill/overview/#liff-sdk-version)
- [Node.js 버전](https://developers.line.biz/en/docs/line-mini-app/quick-fill/overview/#nodejs-version)

LINE MINI App은 [LINE Front-end Framework (LIFF)](https://developers.line.biz/en/docs/liff/overview/)를 사용합니다. Quick-fill에 권장되는 환경에 대한 자세한 내용은 LIFF 문서의 [권장 운영 환경](https://developers.line.biz/en/docs/liff/overview/#operating-environment) 섹션을 참고해 주십시오.

<!-- note start -->

**LIFF 앱이 정상 동작하는 것이 보장되는 전환 대상**

LIFF 앱은 URL이 엔드포인트 URL(예: `https://example.com/path`)과 완전히 같거나, 엔드포인트 URL보다 하위 레벨인 경우(예: `https://example.com/path/to/lower?key1=value1#URL-fragment`)에만 동작합니다. 위 조건 이외의 URL로 LIFF 앱을 전환하면 LIFF 앱의 동작이 보장되지 않습니다.

<!-- note end -->

### LIFF SDK 버전 

Quick-fill 개발에는 LIFF 플러그인이 사용되므로 LIFF SDK v2.19.0 이상을 사용해 주십시오. LIFF 플러그인에 대한 자세한 내용은 LIFF 문서의 [LIFF 플러그인](https://developers.line.biz/en/docs/liff/liff-plugin/)을 참고해 주십시오.

### Node.js 버전 

npm을 사용하여 LIFF SDK를 설치할 때는 Node.js 18.15.0 이상을 사용해 주십시오. 지정된 CDN 경로로 LIFF SDK를 사용하는 경우에는 Node.js가 필요하지 않습니다.

LIFF 앱에 LIFF SDK를 연동하는 방법에 대한 자세한 내용은 LIFF 문서의 [LIFF 앱에 LIFF SDK 연동](https://developers.line.biz/en/docs/liff/developing-liff-apps/#integrating-sdk)을 참고해 주십시오.

## LINE Developers Console에서 선택할 수 있는 스코프 유형 

LINE Developers Console에서 다음 유형의 Quick-fill 스코프를 선택할 수 있습니다.

| 스코프 | 설명 |
| --- | --- |
| `commonprofile.name` | 사용자가 등록한 이름을 가져오는 권한 |
| `commonprofile.email` | 사용자가 등록한 이메일 주소를 가져오는 권한 |
| `commonprofile.address` | 사용자가 등록한 주소를 가져오는 권한 |
| `commonprofile.gender` | 사용자가 등록한 성별을 가져오는 권한 |
| `commonprofile.birthday` | 사용자가 등록한 생년월일을 가져오는 권한 |
| `commonprofile.phone` | 사용자가 등록한 전화번호를 가져오는 권한 |

LINE Developers Console에 이 스코프가 표시되지 않으면 [2-1단계. Quick-fill 신청 및 승인 받기](https://developers.line.biz/en/docs/line-mini-app/quick-fill/overview/#process-step-2-1)를 참고해 주십시오.

일부 스코프는 [채널 동의 화면](https://developers.line.biz/en/docs/line-mini-app/develop/configure-console/#consent-screen-settings)에서 사용자가 개별적으로 선택하여 허용할 수 없습니다. 이러한 스코프는 계정 센터의 "Management Information (Common Profile)"로 일괄 허용하거나 허용하지 않을 수 있습니다.

## `liff.$commonProfile.get()`에 지정할 수 있는 `scopes` 매개변수와 반환 값 

[`liff.$commonProfile.get()`](https://developers.line.biz/en/reference/line-mini-app/#get-common-profile)과 [`liff.$commonProfile.getDummy()`](https://developers.line.biz/en/reference/line-mini-app/#get-dummy-common-profile)에 지정할 수 있는 `scopes` 매개변수와 각각의 반환 값은 다음과 같습니다.

| 번호 | `scopes` | 설명 | 데이터 타입 | 최대 글자 수<br/>(반각) | 최대 글자 수<br/>(히라가나 및 한자) | 반환 값 설명 |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | `family-name` | 성 | string | 100 | 50 |  |
| 2 | `given-name` | 이름 | string | 100 | 50 |  |
| 3 | `family-name-kana` | 성(발음) | string | 100 | 50 |  |
| 4 | `given-name-kana` | 이름(발음) | string | 100 | 50 |  |
| 5 | `sex-enum` | 성별 | number | 1(고정 길이) | 해당 없음 | <ul><li>`0`: 남성</li><li>`1`: 여성</li><li>`2`: 기타</li><li>`3`: 응답 안 함</li></ul> |
| 6 | `bday-day` | 생일(일) | number | 2 | 해당 없음 |  |
| 7 | `bday-month` | 생일(월) | number | 2 | 해당 없음 |  |
| 8 | `bday-year` | 생일(년) | number | 4 | 해당 없음 |  |
| 9 | `tel` | 전화번호 | string | 200 | 해당 없음 |  |
| 10 | `email` | 이메일 주소 | string | 200 | 해당 없음 |  |
| 11 | `postal-code` | 우편번호 | string | 47 | 해당 없음 |  |
| 12 | `address-level1` | 주소 1 | string | 53 | 53 |  |
| 13 | `address-level2` | 주소 2 | string | 53 | 53 |  |
| 14 | `address-level3` | 주소 3 | string | 100 | 69 |  |
| 15 | `address-level4` | 주소 4 | string | 100 | 69 |  |

계정 센터의 공통 프로필은 LINE과 Yahoo! JAPAN에 등록된 프로필을 조합하여 만들어집니다. 사용자가 계정 센터를 사용하지 않는 경우에는 LINE의 프로필 정보가 자동으로 입력됩니다.

## 가져올 수 있는 공통 프로필 더미 데이터 

[`liff.$commonProfile.getDummy()`](https://developers.line.biz/en/reference/line-mini-app/#get-dummy-common-profile)를 사용하면 공통 프로필의 더미 데이터를 가져올 수 있습니다. 제공되는 10가지 유형 중 `caseId`로 가져올 더미 데이터를 지정할 수 있습니다.

| `caseId` | `family-name`  | `given-name`  | `family-name-kana`  | `given-name-kana`  | `sex-enum` | `bday-day` | `bday-month` | `bday-year` | `tel`  | `email`  | `postal-code`  | `address-level1`  | `address-level2`  | `address-level3`  | `address-level4` |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 見本田 | 見本夫 | ダミータ | ダミーオ | 0 | 12 | 3 | 1998 | 09001234567 | dummy_39@yahoo.co.jp | 1020094 | 東京都 | 千代田区 | 紀尾井町1-2 | 東京ガーデンテラス紀尾井町 |
| 2 |  |  |  |  | 1 | 12 | 3 | 1998 | 09001234567 | dummy_39@yahoo.co.jp | N5X 1N7 | 東京都 |  | 紀尾井町1-2 | 東京ガーデンテラス紀尾井町 |
| 3 | 見本田 |  | ダミータ |  | 2 |  |  |  | 09001234567 | dummy_39dummy_39dummy_39dummy_39dummy_39dummy_39dummy_39dummy_39dummy_39dummy_39dummy_39dummy_39dummy_39dummy_39dummy_39dummy_39dummy_39dummy_39dummy_39dummy_39dummy_39dummy_39dummy_39dumm@yahoo.co.jp | 102-0094 | 東京都 | 千代田区 |  | 東京ガーデンテラス紀尾井町 |
| 4 |  | 見本夫 |  | ダミーオ | 3 | 12 | 3 | 1998 | 0901234567 | dummy_39@yahoo.co.jp | 1077 AA2 15000N5X 1N7107715000X 1077 AA2 15000N5X 1N71 | 東京都 | 千代田区 | 紀尾井町1-2 |  |
| 5 | Daimta | Damio | ダミータ | ダミーオ | 0 | 12 | 3 | 1998 | 09001234567 |  | 1020094 | Tokyo | Chiyoda-ku | Kioi-cho,1-2 | Tokyo Garden terrace Kioi-cho, |
| 6 | 1234 | 4321 | ダミータ | ダミーオ | 1 |  |  | 1998 | 090-1234-5678 | dummy_39@yahoo.co.jp |  | ﾄｳｷｮｳﾄ | ﾁﾖﾀﾞｸ | ｷｵｲﾁｮｳ1-2 | ﾄｳｷｮｳｶﾞｰﾃﾞﾝﾃﾗｽｷｵｲﾁｮｳ |
| 7 | ﾀﾞﾐｰﾀ | ﾀﾞﾐｵ | ダミータ | ダミーオ | 2 |  | 3 |  | 09001234567090012345670900123456709001234567090012345670900123456709001234567090012345670900123456709001234567090012345670900123456709001234567090012345670900123456709001234567090012345670900123456709 | dummy_39@yahoo.co.jp | 1020094 |  |  |  |  |
| 8 | ダミ！？ | ダミ夫@ | ダミータ | ダミーオ | 3 | 12 |  | 1998 | 09001234567 | dummy_39@yahoo.co.jp | 1020094 | 🍀 | 🍀🍀 | 🍀🍀🍀 | 🍀🍀🍀🍀 |
| 9 | 🐶🐶🐶 | ダミ💚 | ダミータ | ダミーオ | 0 | 12 | 3 | 1998 |  | dummy_39@yahoo.co.jp | 102-0094 | 東京都東京都東京都東京都東京都東京都東京都東京都東京都東京都東京都東京都東京都東京都東京都東京都東京都東京都東京都東京都東京都東京都東京都東京都東京都 | 千代田区千代田区千代田区千代田区千代田区千代田区千代田区千代田区千代田区千代田区千代田区千代田区千代田区千 | 紀尾井町1-2紀尾井町1-2紀尾井町1-2紀尾井町1-2紀尾井町1-2紀尾井町1-2紀尾井町1-2紀尾井町1-2紀尾井町1-2紀尾井町1-2紀尾井町1-2紀尾井町1-2紀尾井町1-2紀尾井町1-2紀尾井町1-2紀尾井町1-2紀尾井町1-2紀尾井町1-2紀尾井町1-2 | 東京ガーデンテラス紀尾井町東京ガーデンテラス紀尾井町東京ガーデンテラス紀尾井町東京ガーデンテラス紀尾井町東京ガーデンテラス紀尾井町東京ガーデンテラス紀尾井町東京ガーデンテラス紀尾井町 |
| 10 | ダミー田ダミー田ダミー田ダミー田ダミー田ダミー田ダミー田ダミー田ダミー田ダミー田ダミー田ダミー田ダミー田ダミー田ダミー田ダミー田ダミー田ダミー田ダミー田ダミー田ダミー田ダミー田ダミー田ダミー田ダミー田 | ダミー夫ダミー夫ダミー夫ダミー夫ダミー夫ダミー夫ダミー夫ダミー夫ダミー夫ダミー夫ダミー夫ダミー夫ダミー夫ダミー夫ダミー夫ダミー夫ダミー夫ダミー夫ダミー夫ダミー夫ダミー夫ダミー夫ダミー夫ダミー夫ダミー夫 | ダミータダミータダミータダミータダミータダミータダミータダミータダミータダミータダミータダミータダミータダミータダミータダミータダミータダミータダミータダミータダミータダミータダミータダミータダミータ | ダミーオダミーオダミーオダミーオダミーオダミーオダミーオダミーオダミーオダミーオダミーオダミーオダミーオダミーオダミーオダミーオダミーオダミーオダミーオダミーオダミーオダミーオダミーオ | 1 | 12 | 3 | 1998 | 09001234567 | dummy_39@yahoo.co.jp | N5X 1N7 |  | 千代田区 | 紀尾井町1-2 | 東京ガーデンテラス紀尾井町 |

## `liff.$commonProfile.get()`의 옵션 

[`liff.$commonProfile.get()`](https://developers.line.biz/en/reference/line-mini-app/#get-common-profile)으로 공통 프로필 정보를 가져올 때 스코프별로 다음 옵션을 지정할 수 있습니다. 이 옵션들은 기본적으로 모두 `true`로 설정되어 있으므로, 비활성화하려면 `false`를 지정해 주십시오.

| 속성 | 기본값 | 설명 | 지정 가능한 스코프 |
| --- | --- | --- | --- |
| `excludeEmojis` | true | 문자열에서 이모지를 제거할지 여부입니다. | <ul><li>`given-name`</li><li>`family-name`</li></ul> |
| `excludeNonJp` | true | 12자리 이상인 전화번호를 제외할지 여부입니다. `true`이면 전화번호가 12자리 이상인 경우 빈 문자열과 오류 정보가 반환됩니다. | <ul><li>`tel`</li></ul> |
| `digitsOnly` | true | 숫자가 아닌 우편번호를 제외할지 여부입니다. `true`이면 우편번호에 숫자 이외의 문자가 포함된 경우 빈 문자열과 오류 정보가 반환됩니다. | <ul><li>`postal-code`</li></ul> |

## API 레퍼런스 

Quick-fill에 사용하는 클라이언트 API에 대한 자세한 내용은 LINE MINI App API 레퍼런스의 [공통 프로필 Quick-fill](https://developers.line.biz/en/reference/line-mini-app/#quick-fill)을 참고해 주십시오.
