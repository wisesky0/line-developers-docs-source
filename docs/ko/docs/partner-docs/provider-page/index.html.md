# Provider page

<!-- note start -->

**Use of optional functions requires an application**

이 문서에 설명된 기능은 필요한 신청서를 제출한 법인 사용자만 사용할 수 있습니다. LINE Official Account에서 이 기능을 사용하려면 담당 영업 대표에게 문의하거나 [영업 파트너](https://www.lycbiz.com/jp/partner/sales/)에게 문의하십시오.

<!-- note end -->

## Overview 

Provider page는 [Provider](https://developers.line.biz/en/glossary/#provider)가 LINE Platform에서 제공하는 다양한 서비스의 목록입니다. Provider는 provider page에 LINE Official Account (Messaging API), LINE MINI App, LINE Login 등 제공하는 서비스를 표시할 수 있습니다.

![provider page sample](https://developers.line.biz/media/partner-docs/provider-page-en.webp)

## Provider page settings 

인증된 provider만 provider page를 설정하고 게시할 수 있습니다. 인증된 provider에 대한 자세한 내용은 [Certified provider](https://developers.line.biz/en/docs/line-developers-console/overview/#certified-provider)를 참조하십시오.

[LINE Developers console](https://developers.line.biz/console/)의 **Provider page** 탭에서 provider page를 설정할 수 있습니다. **Provider page** 탭은 provider page 기능을 사용할 권한이 있는 경우에만 표시됩니다.

**Provider Page** 탭에서 개인정보 처리방침 URL을 등록하고 provider page에 표시할 서비스를 추가하십시오. Provider page에는 최대 100개의 서비스를 추가할 수 있습니다. 개인정보 처리방침 URL이 아직 등록되지 않은 경우 등록된 서비스는 Provider page에 표시되지 않습니다.

<!-- tip start -->

**About LINE Official Account that can be added to your provider page**

Provider page에 추가할 수 있는 LINE Official Account는 인증 계정 또는 [premium accounts](https://developers.line.biz/en/glossary/#premium-account)뿐입니다. 계정 유형에 대한 자세한 내용은 LINE for Business의 [Account Types of LINE Official Account](https://www.linebiz.com/jp-en/service/line-official-account/account-type/) 페이지를 참조하십시오.

<!-- tip end -->

![provider page settings screen](https://developers.line.biz/media/partner-docs/provider-page-settings-en.webp)

### Set the order in which services are displayed on the provider page 

[LINE Developers Console](https://developers.line.biz/console/)의 **Provider page** 탭에서 각 서비스를 위아래로 드래그 앤 드롭하여 provider page에 표시되는 순서를 설정하십시오.

서비스 카테고리인 LINE Official Account, LINE MINI App, LINE Login의 순서는 변경할 수 없습니다. 각 카테고리 안에 있는 서비스의 표시 순서만 변경할 수 있습니다.

### Provider page URL 

Provider page의 URL(`https://provider.line.me/{ProviderID}`)은 [LINE Developers Console](https://developers.line.biz/console/)의 **Provider page** 탭에서 확인할 수 있습니다.

## Sharing the your provider page URL with users 

Provider page의 URL을 사용자에게 공유하면 사용자에게 제공되는 provider 서비스 목록이 표시됩니다.

- **LINE Official Account**: 리치 메뉴 또는 친구로 추가된 후 보내는 첫 메시지에 provider page 링크를 공유하십시오.
- **LINE MINI App**: 사용자가 LINE MINI App의 [action button](https://developers.line.biz/en/docs/line-mini-app/discover/builtin-features/#action-button)을 탭하면 **About the service**라는 항목이 표시되어 provider page를 볼 수 있습니다.
- **LINE Login**: LINE Login 버튼을 설정한 페이지에 provider page 링크를 공유하십시오.

## Cautions on the common use of user IDs 

[LINE user data policy](https://terms2.line.me/LINE_Developers_user_data_policy?lang=ja)에 따라 LINE Platform에서 여러 서비스를 제공하는 provider는 각 서비스에서 얻은 LINE 사용자 데이터를 서로 연결하거나 공유하는 것이 원칙적으로 금지됩니다. 다만 provider page를 게시한 후 다음 [Terms and conditions of use](https://developers.line.biz/en/docs/partner-docs/provider-page/#terms-and-conditions-of-use)를 충족하면 provider는 LINE 사용자 데이터를 연결하여 공동으로 사용할 수 있습니다.

LINE 사용자 데이터를 취득한 주체인 provider는 관련 법령을 준수하고 사용자에게 부정적인 영향을 주지 않는 방식으로, 자기 책임 하에 해당 정보를 이용해야 합니다.

### Terms and conditions of use 

Provider는 LINE 사용자 데이터를 공동으로 사용하는 각 서비스에 대해, 사용자에게 provider page 링크를 제공하고 각 서비스가 동일한 provider에 의해 제공된다는 사실을 사용자에게 알려야 합니다.

Messaging API 채널의 경우 다음 사항을 준수하십시오.

- LINE Official Account의 계약 회사와 provider는 동일해야 하며, 두 회사의 관계가 사용자에게 오해를 주어서는 안 됩니다.

위 규칙을 준수하지 않거나 LINE 계정을 부적절하게 운영하는 것으로 확인되면, LY Corporation이 시정 조치를 권고하거나 LINE 사용자 데이터 사용을 금지할 수 있습니다.
