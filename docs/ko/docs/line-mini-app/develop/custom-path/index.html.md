# 커스텀 경로 설정하기

<!-- tip start -->

**이 기능은 인증된 MINI App에서만 사용할 수 있습니다**

이 기능은 인증된 MINI App에서만 사용할 수 있습니다.

<!-- tip end -->

커스텀 경로(Custom Path)는 게시된 채널의 LIFF URL에 설정하는 고유한 문자열입니다. 커스텀 경로 기능을 사용하면 다음과 같이 LIFF URL에 원하는 문자열을 설정할 수 있습니다.

| LIFF ID가 포함된 예시 URL | 커스텀 경로 설정 예시 |
| --- | --- |
| `https://miniapp.line.me/123456-abcdefg` | `https://miniapp.line.me/cony_coffee` |

예를 들어 고유한 이름을 커스텀 경로로 설정하면, 사용자는 URL만 보고도 어느 브랜드나 가게의 LINE MINI App인지 알 수 있습니다. 커스텀 경로를 설정한 후에도 LIFF ID로 된 URL은 이전과 같이 계속 접근할 수 있습니다.

## 신청 방법 

LINE MINI App에서 커스텀 경로 기능을 사용하려면 신청이 필요합니다. 신청 방법은 서비스 제공 지역에 따라 다릅니다.

- [서비스 지역이 일본인 경우](https://developers.line.biz/en/docs/line-mini-app/develop/custom-path/#area-is-japan)
- [서비스 지역이 대만 또는 태국인 경우](https://developers.line.biz/en/docs/line-mini-app/develop/custom-path/#area-is-taiwan-or-thailand)

### 서비스 지역이 일본인 경우 

서비스 지역이 일본이라면, 커스텀 경로 기능을 사용하기 위해 아래 양식으로 신청하세요. 여러 LINE MINI App의 커스텀 경로를 한 번에 신청하는 방법도 아래 양식에서 확인할 수 있습니다(일본어로만 제공).

[신청 양식](https://form-business.yahoo.co.jp/claris/enqueteForm?inquiry_type=lmini-custompath)

신청 확인과 심사 결과는 이메일로 안내됩니다. 신청한 시점부터 커스텀 경로 URL을 사용할 수 있게 되기까지 1~2주가 걸립니다.

### 서비스 지역이 대만 또는 태국인 경우 

대만 또는 태국에서 서비스를 제공하며 커스텀 경로 기능을 사용하고 싶다면, 담당 영업 담당자에게 문의하세요.

## 커스텀 경로 신청 시 참고 사항 

커스텀 경로를 설정하더라도, 커스텀 경로가 설정된 LIFF URL은 [LINE Developers Console](https://developers.line.biz/console/)에 표시되지 않습니다.

LINE MINI App의 심사를 받기 전에 커스텀 경로를 신청할 수 있습니다. 다만 커스텀 경로는 LINE MINI App이 심사를 통과한 후에 설정됩니다.

원칙적으로 한 번 설정된 커스텀 경로는 변경할 수 없습니다.

### 커스텀 경로로 사용할 수 있는 문자열 

커스텀 경로를 신청할 때 입력하는 문자열에는 다음 제한이 적용됩니다. 문자열을 입력할 때 이러한 제한을 고려하세요.

- 최소 4자, 최대 29자여야 합니다.
- 반각 영숫자(`a-z`, `0-9`)와 밑줄(`_`)만 사용할 수 있습니다.
- 밑줄(`_`)은 마지막 문자로 사용할 수 없습니다.
- 숫자만으로 구성할 수 없습니다.
- 공백은 사용할 수 없습니다.
- 브랜드 또는 서비스를 식별할 수 있는 고유명사를 포함해야 합니다.
- LY Corporation이 제공하는 서비스와 같은 문자열은 사용할 수 없습니다.
- 다른 사람을 포함하여 이미 사용 중인 문자열은 사용할 수 없습니다.
- 부적절하다고 판단되는 문자열은 사용할 수 없을 수 있습니다.
