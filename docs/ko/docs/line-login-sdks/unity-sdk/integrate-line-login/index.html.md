# Unity 게임에 LINE Login 통합하기

[프로젝트를 설정](https://developers.line.biz/en/docs/line-login-sdks/unity-sdk/project-setup/)한 후에는 기존 Unity 게임에 LINE SDK for Unity를 가져와 LINE Login을 활용하여 앱의 사용자 경험을 개선할 수 있습니다.

## SDK 가져오기 

### GitHub에서 다운로드하기 

최신 LINE SDK for Unity를 받으려면 [GitHub Releases 페이지](https://github.com/line/line-sdk-unity/releases)에서 `.unitypackage` 파일을 다운로드하세요.

### 프로젝트로 가져오기 

<!-- note start -->

**참고**

LINE SDK for Unity를 프로젝트로 가져오기 전에 프로젝트를 백업하거나 버전 관리 시스템에 저장해 두세요.

<!-- note end -->

Unity 프로젝트를 연 상태에서 다운로드한 `.unitypackage` 파일을 두 번 클릭합니다. 아래와 같이 패키지의 모든 항목을 가져오세요.

![Unity 패키지 가져오기](https://developers.line.biz/media/unity-sdk/importing.webp)

## 씬에 LineSDK 프리팹 추가하기 

패키지를 가져온 후 **Project** 패널의 `Assets/LineSDK/` 아래에서 **LineSDK** 프리팹을 찾을 수 있습니다. 이를 LINE Login을 추가하려는 씬의 **Hierarchy** 패널로 드래그하세요.

![LineSDK 프리팹 추가하기](https://developers.line.biz/media/unity-sdk/adding-prefab.png)

그런 다음 씬에서 LineSDK GameObject를 클릭하고 **Channel ID** 필드를 LINE Login 채널 ID로 업데이트합니다.

![Channel ID 설정하기](https://developers.line.biz/media/unity-sdk/setting-channel-id.png)

LINE Login 채널 ID는 [LINE Developers Console](https://developers.line.biz/console/)에서 확인할 수 있습니다. 채널이 아직 없다면 LINE Developers Console에서 [채널을 만드세요](https://developers.line.biz/console/register/line-login/channel/). 이때 [프로바이더](https://developers.line.biz/en/glossary/#provider)를 선택하거나 새로 만들어야 합니다.

## 플레이어 설정 업데이트하기 

게임에서 LINE Login을 구현하거나 LINE API를 사용하기 전에, 아래 단계를 따라 프로젝트의 플레이어 설정이 올바른지 확인하세요.

### Android 내보내기 설정 

1. **File > Build Settings**를 선택합니다.
1. **Player Settings**를 클릭합니다.
1. **Company Name**과 **Product Name**을 LINE Developers Console의 채널 설정(**LINE Login** 탭)에 있는 **Package names**와 같은 값으로 설정합니다.
1. ![Android 설정 탭](https://developers.line.biz/media/unity-sdk/android-settings-tab.png) > **Other Settings**를 선택합니다.
1. **Package Name**을 LINE Developer Console에서 채널의 **LINE Login** 탭에 있는 **Package names**와 같은 값으로 설정합니다.
1. **Minimum API Level**을 최소 **API level 19** 이상으로 설정합니다.
1. **Publishing Settings**에서 **Custom Gradle Template**을 활성화합니다.

### iOS 내보내기 설정 

1. **File > Build Settings**를 선택합니다.
1. **Player Settings**를 클릭합니다.
1. ![iPhone, iPod Touch, iPad 설정 탭](https://developers.line.biz/media/unity-sdk/ios-settings-tab.png) > **Other Settings**를 선택합니다.
1. **Bundle Identifier**를 LINE Developers Console에서 채널의 **LINE Login** 탭에 있는 **iOS bundle ID**와 같은 값으로 설정합니다.
1. **Target minimum iOS Version**을 최소 `11.0` 이상으로 설정합니다.

LINE SDK for Unity iOS에서 사용하는 의존성 관리자에 대한 자세한 내용은 [프로젝트 설정하기](https://developers.line.biz/en/docs/line-login-sdks/unity-sdk/project-setup/)를 참고하세요.

## LINE으로 로그인 구현하기 

이제 LineSDK(GameObject)가 있는 씬에서 LINE으로 로그인하는 기능을 구현할 수 있습니다. 예시는 다음과 같습니다.

```csharp
using Line.LineSDK;

public class MyController : MonoBehaviour {
    public void LoginButtonClicked() {
        var scopes = new string[] {"profile", "openid"};
        LineSDK.Instance.Login(scopes, result => {
            result.Match(
                value => {
                    Debug.Log("Login OK. User display name: " + value.UserProfile.DisplayName);
                },
                error => {
                    Debug.Log("Login failed, reason: " + error.Message);
                }
            );
        });
    }
}
```

LINE SDK for Unity는 현재 iOS와 Android만 지원합니다. Unity Editor의 플레이 모드에서 실행하면 항상 오류가 반환됩니다. 테스트하려면 씬을 iOS 또는 Android 기기로 내보내야 합니다.
