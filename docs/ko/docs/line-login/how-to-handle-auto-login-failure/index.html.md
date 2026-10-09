# 자동 로그인 실패 처리 방법

## 개요 

LINE Login을 연동한 웹 앱에서는 시크릿 브라우징(private browsing)이 활성화되어 있으면 [자동 로그인](https://developers.line.biz/en/docs/line-login/integrate-line-login/#line-auto-login)이 실패할 수 있습니다. 또한 사용자 OS의 사양에 따라 자동 로그인이 실패할 수도 있습니다.

- [LINE 앱에서 자동 로그인이 실패하는 경우](https://developers.line.biz/en/docs/line-login/how-to-handle-auto-login-failure/#case-auto-login-on-line-app-fails)
- [Universal Links 또는 App Links가 동작하지 않아 LINE 앱이 실행되지 않는 경우](https://developers.line.biz/en/docs/line-login/how-to-handle-auto-login-failure/#case-line-app-will-not-launch)

## LINE 앱에서 자동 로그인이 실패하는 경우 

시크릿 브라우징이 활성화되어 있으면 LINE 앱에서의 자동 로그인이 실패할 수 있습니다. 로그인에 실패해도 사용자는 `code` 및 `state` 파라미터와 함께 콜백 URL로 리디렉션됩니다.

이 경우 `code` 파라미터는 유효하지 않은 값이므로 액세스 토큰을 발급할 수 없습니다. 또한 `state` 파라미터가 로그인 세션에 연결된 값과 일치하지 않습니다.

![](https://developers.line.biz/media/line-login/handle-auto-login-failure/auto-login-failure-case-1-en.png)

이 섹션에서는 자동 로그인 실패를 감지하는 방법과 로그인이 실패했을 때 사용자에게 보여 주어야 할 응답 예시를 설명합니다.

### 자동 로그인 실패 감지하기 

[사용자 인증 및 인증 요청](https://developers.line.biz/en/docs/line-login/integrate-line-login/#making-an-authorization-request)에서 설명한 `state` 파라미터를 사용하여 자동 로그인 실패를 감지할 수 있습니다.

LINE 앱에서 로그인이 실패하면 콜백 URL로 전달된 `state` 파라미터의 값과 인증 URL에 설정된 `state` 파라미터의 값이 일치하지 않게 됩니다. 웹 앱을 설계할 때는 `state` 파라미터 값이 일치하지 않는 경우 자동 로그인이 실패했을 수 있다는 점을 고려해야 합니다.

<!-- tip start -->

**"state" 파라미터가 일치하지 않는 경우**

LINE Login에서는 [Cross site request forgery(CSRF)](https://datatracker.ietf.org/doc/html/rfc6749#section-10.12)와 같은 제3자의 공격으로 인해 `state` 파라미터가 일치하지 않을 수도 있습니다. 따라서 `state` 파라미터가 일치하지 않는 원인이 자동 로그인 실패인지, 아니면 CSRF와 같은 제3자의 공격인지 판단할 수 없습니다.

그러므로 `state` 파라미터가 일치하지 않는 경우에는 사용자가 의도치 않게 자동 로그인에 실패한 상황을 어떻게 처리할지 고려하십시오.

<!-- tip end -->

### 자동 로그인이 실패했을 때 

자동 로그인이 실패하는 환경에서 로그인에 실패한 사용자에게 자동 로그인이 활성화된 인증 URL로 다시 시도하도록 안내하면, 사용자는 LINE 로그인에 계속 실패하게 됩니다. 계속해서 로그인에 실패하는 것을 방지하려면 자동 로그인이 실패한 후 `disable_auto_login` 파라미터를 사용하여 자동 로그인이 비활성화된 인증 URL로 다시 로그인하도록 안내할 수 있습니다.

권장하는 응답은 다음 두 가지입니다.

- [사용자에게 오류 메시지를 표시하고 다시 로그인하도록 안내하기](https://developers.line.biz/en/docs/line-login/how-to-handle-auto-login-failure/#recommended-to-log-in-again)
- [자동 로그인을 사용하지 않는 인증 URL로 사용자 리디렉션하기](https://developers.line.biz/en/docs/line-login/how-to-handle-auto-login-failure/#redirect-to-authorization-url)

#### 사용자에게 오류 메시지를 표시하고 다시 로그인하도록 안내하기 

사용자에게 로그인 실패 메시지를 표시하고 다시 로그인하도록 안내합니다.

이 화면은 [자동 로그인이 실패했을 때](https://developers.line.biz/en/docs/line-login/how-to-handle-auto-login-failure/#when-automatic-login-fails) 표시되므로, 사용자에게 다시 로그인하도록 안내할 때는 자동 로그인을 비활성화해야 합니다. 자동 로그인을 비활성화하려면 인증 URL의 쿼리 파라미터에 `disable_auto_login` 파라미터를 `true`로 설정하고 다음과 같이 사용자를 리디렉션하십시오.

<pre class="language-text">
<code>https://access.line.me/oauth2/v2.1/authorize?<b style="color:#06C755;">disable_auto_login=true</b>&response_type=code&client_id=1234567890&redirect_uri=https%3A%2F%2Fexample.com%2Fauth%3Fkey%3Dvalue&state=12345abcde&scope=profile%20openid&nonce=09876xyz</code>
</pre>

이 화면에는 LINE Help center의 [I can't automatically log in to a website with LINE](https://help.line.me/line/ios/sp?lang=en&contentId=20020693) 페이지(`https://help.line.me/line/ios/sp?lang=en&contentId=20020693`)로 이동하는 링크를 포함하는 것을 권장합니다.

다음은 사용자에게 다시 로그인하도록 안내하는 화면의 예시입니다.

![Example of a screen that displays error messages to the user](https://developers.line.biz/media/line-login/handle-auto-login-failure/auto-login-failure-message-en.png)

#### 자동 로그인을 사용하지 않는 인증 URL로 사용자 리디렉션하기 

자동 로그인에 실패한 사용자를 자동 로그인이 비활성화된 인증 URL로 바로 리디렉션합니다. 사용자를 바로 리디렉션하면 자동 로그인이 실패했다는 사실을 사용자에게 알리지 않고 로그인 화면을 표시할 수 있습니다. 자동 로그인을 비활성화하려면 인증 URL의 쿼리 파라미터에 `disable_auto_login` 파라미터를 `true`로 설정하고 다음과 같이 사용자를 리디렉션하십시오.

<pre class="language-text">
<code>https://access.line.me/oauth2/v2.1/authorize?<b style="color:#06C755;">disable_auto_login=true</b>&response_type=code&client_id=1234567890&redirect_uri=https%3A%2F%2Fexample.com%2Fauth%3Fkey%3Dvalue&state=12345abcde&scope=profile%20openid&nonce=09876xyz</code>
</pre>

리디렉션이 발생한다는 사실을 사용자에게 미리 알리고 싶다면 리디렉션 메시지를 표시할 수 있습니다.

다음은 리디렉션 메시지를 표시하는 화면의 예시입니다.

![Redirect users to an authorization URL without auto login](https://developers.line.biz/media/line-login/handle-auto-login-failure/auto-login-redirect-to-login-en.png)

## Universal Links 또는 App Links가 동작하지 않아 LINE 앱이 실행되지 않는 경우 

[외부 브라우저](https://developers.line.biz/en/glossary/#external-browser)에서 자동 로그인을 수행하기 위해 [Universal Links](https://developer.apple.com/documentation/xcode/allowing-apps-and-websites-to-link-to-your-content/) 및 [App Links](https://developer.android.com/training/app-links) 기능을 사용합니다.

Universal Links 또는 App Links는 외부 브라우저나 일부 인앱 브라우저에서 동작하지 않을 수 있으며, 이 경우 자동 로그인도 동작하지 않을 수 있습니다. 이때는 LINE 앱이 실행되지 않고 외부 브라우저 또는 인앱 브라우저에 [이메일 주소 로그인](https://developers.line.biz/en/docs/line-login/integrate-line-login/#mail-or-qrcode-login) 화면이 표시됩니다. 이는 사용자 OS의 사양에 따라 발생할 수 있습니다. OS의 사양이 완전히 공개되어 있지 않으므로, LINE Platform이 자동 로그인이 실패하는 조건을 완전히 피하기는 어려울 수 있습니다.

![](https://developers.line.biz/media/line-login/handle-auto-login-failure/auto-login-failure-case-2-en.png)

### iOS에서 Universal Links를 동작하게 하기 위한 참고 사항 

다음과 같은 경우에는 Universal Links가 동작하지 않을 수 있습니다.

- JavaScript로 사용자를 인증 URL로 리디렉션하는 경우
- 사용자가 URL을 직접 입력하여 인증 URL로 이동하는 경우

위 사항에 유의하면 Universal Links가 동작하지 않는 문제를 해결할 수 있습니다. 예를 들어 사용자가 버튼을 탭하여 인증 URL로 이동하고 로그인 과정을 시작하도록 할 수 있습니다.
