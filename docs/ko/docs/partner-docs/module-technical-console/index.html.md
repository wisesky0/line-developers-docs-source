# 모듈 채널 설정 구성

<!-- note start -->

**선택 기능을 사용하려면 절차가 필요합니다**

이 문서에 설명된 기능은 소정의 신청을 완료한 법인 고객만 사용할 수 있습니다. 모듈을 사용하여 확장 기능을 게시하려면 영업 담당자에게 문의하거나 [LINE Marketplace 문의](https://line-marketplace.com/jp/inquiry)(일본어만 제공)를 통해 문의해 주십시오.

<!-- note end -->

모듈 채널에서는 [LINE Developers Console](https://developers.line.biz/console/)에 전용 **module** 탭이 표시됩니다.

**module** 탭에서는 모듈 채널의 웹훅 URL, 웹훅 수신 여부, 그리고 [LINE 공식 계정 관리자에게 승인을 요청](https://developers.line.biz/en/docs/partner-docs/module-technical-attach-channel/#request-auth-from-line-oa-admin)할 때 지정하는 `redirect_uri`를 설정할 수 있습니다.

![LINE Developers Console의 Module 탭](https://developers.line.biz/media/partner-docs/module-technical/module-tab-in-console-en.png)

## 1. module 탭 

**module** 탭은 모듈 채널에만 있는 전용 설정 항목입니다.

## 2. 웹훅 설정 

### 웹훅 URL 

모듈 채널에는 웹훅 URL을 하나 설정할 수 있습니다. 자세한 내용은 [웹훅 수신](https://developers.line.biz/en/docs/partner-docs/module-technical-using-messaging-api/#get-webhook)도 참조해 주십시오.

### 웹훅 사용 

모듈 채널이 웹훅 이벤트를 수신할지 여부를 설정할 수 있습니다.

### 웹훅 재전송 

모듈 채널의 웹훅 URL에서 웹훅 이벤트 수신에 실패했을 때, LINE 플랫폼이 웹훅 이벤트를 다시 보낼지 여부를 설정할 수 있습니다.

### 오류 통계 

웹훅 이벤트 수신 실패에 대한 통계를 **Webhook errors** 탭에 표시할지 여부를 설정할 수 있습니다.

## 3. 리다이렉트 설정 

### 리다이렉트 URL 

리다이렉트 URL에는 [LINE 공식 계정 관리자에게 승인을 요청](https://developers.line.biz/en/docs/partner-docs/module-technical-attach-channel/#request-auth-from-line-oa-admin)할 때 사용하는 `redirect_uri` 파라미터의 값을 지정합니다. 리다이렉트 URL의 스킴은 반드시 `https`여야 합니다.

하나의 채널에 여러 리다이렉트 URL을 지정할 수 있습니다.
