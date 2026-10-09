# 프로바이더 및 채널 관리 모범 사례

이 페이지에서는 프로바이더 및 채널 관리에 대한 모범 사례를 설명합니다.

<!-- table of contents -->

## 등장인물 

다음은 가상의 조직과 인물을 예로 든 것입니다.

| 조직, 인물 | 설명 |
| --- | --- |
| Beverage Manufacturer A | 커피 음료 "Brown Coffee"와 차 음료 "Cony Tea"를 판매하는 음료 제조사입니다. LINE 플랫폼을 사용한 서비스 개발을 Development Company C와 Development Company D에 외주로 맡겼습니다. |
| Beverage Manufacturer B | 콜라 음료 "Sally Cola"를 판매하는 음료 제조사입니다. Beverage Manufacturer A의 미국 자회사입니다. |
| Development Company C | Beverage Manufacturer A의 외주를 받아 LINE 플랫폼을 사용한 서비스를 개발하는 개발 회사입니다. LINE Login을 사용하여 커피 음료 "Brown Coffee"의 캠페인 사이트를 개발하고 있습니다. |
| Development Company D | Beverage Manufacturer A의 외주를 받아 LINE 플랫폼을 사용한 서비스를 개발하는 개발 회사입니다. Messaging API를 사용하여 커피 음료 "Brown Coffee"용 LINE Bot과 차 음료 "Cony Tea"용 LINE Bot을 개발하고 있습니다. |
| Brown | Beverage Manufacturer A의 직원입니다. |
| Cony | Beverage Manufacturer A의 직원입니다. |

Beverage Manufacturer A가 프로바이더 "Beverage Manufacturer A"와 그 아래의 채널을 관리한다고 가정합니다. 프로바이더 "Beverage Manufacturer A" 아래의 채널은 다음과 같습니다.

| 채널 유형 | 채널 이름 | 설명 |
| --- | --- | --- |
| LINE Login | Brown Coffee | 커피 음료 "Brown Coffee"의 캠페인 사이트용 채널입니다. |
| Messaging API | Brown Coffee | 커피 음료 "Brown Coffee"용 LINE Bot의 채널입니다. |
| Messaging API | Cony Tea | 차 음료 "Cony Tea"용 LINE Bot의 채널입니다. |

## 프로바이더와 채널마다 여러 명의 개발자에게 관리자 역할 부여하기 

| | |
| --- | --- |
| 좋은 예 | 프로바이더와 채널마다 여러 명의 개발자에게 관리자 역할을 부여합니다. |
| 나쁜 예 | 프로바이더와 채널마다 한 명의 개발자에게만 관리자 역할을 부여합니다. |

프로바이더와 채널의 관리자 역할을 가진 유일한 개발자가 갑작스러운 퇴사 등의 이유로 더 이상 업무를 할 수 없게 되면, 관리자 역할로 프로바이더와 채널에 접근할 수 없습니다. 그 결과 프로바이더와 채널의 운영을 계속하기 어려워질 수 있습니다. 이러한 예기치 않은 상황에 대비하려면 프로바이더와 채널마다 여러 명의 개발자에게 관리자 역할을 부여하십시오.

예를 들어 Brown과 Cony가 프로바이더 "Beverage Manufacturer A"와 LINE Login 채널 "Brown Coffee"의 관리자 역할을 가지고 있다고 가정합니다. Brown이 갑자기 퇴사하더라도 Cony도 관리자 역할을 가지고 있으므로 문제없이 프로바이더와 채널을 계속 운영할 수 있습니다.

![](https://developers.line.biz/media/line-developers-console/best-practices-for-provider-and-channel-management/grant-admin-role-to-several-developers-en.webp)

프로바이더와 채널의 역할은 서로 독립적이라는 점에 유의하십시오. 따라서 프로바이더에 대한 관리자 역할을 부여했다고 해서 프로바이더 아래 채널에 대한 관리자 역할이 부여된 것은 아닙니다.

역할에 대한 자세한 내용은 [역할 관리하기](https://developers.line.biz/en/docs/line-developers-console/managing-roles/)를 참조하십시오.

<!-- note start -->

**프로바이더에서 개발자를 삭제할 때의 참고 사항**

[LINE Developers Console](https://developers.line.biz/console/)에서 프로바이더의 개발자를 삭제할 때 **Also delete the selected developer(s) from the channels that belong to this provider.**를 선택하고 **OK**를 클릭하면, 선택한 개발자가 프로바이더 아래의 채널에서도 삭제됩니다.

그러나 프로바이더 아래 채널에서 선택한 개발자를 삭제한 결과, 채널에 관리자 역할을 가진 개발자가 0명이 될 수 있습니다. 따라서 **Also delete the selected developer(s) from the channels that belong to this provider.**를 선택하는 경우, 채널에 관리자 역할을 가진 다른 개발자가 있는지 반드시 확인하십시오.

![](https://developers.line.biz/media/line-developers-console/best-practices-for-provider-and-channel-management/delete-developer-from-provider-en.webp)

<!-- note end -->

## 서비스 제공자마다 프로바이더 만들기 

| | |
| --- | --- |
| 좋은 예 | Beverage Manufacturer A와 Beverage Manufacturer B 각각에 대해 프로바이더를 만듭니다. |
| 나쁜 예 | Beverage Manufacturer A와 Beverage Manufacturer B를 위해 프로바이더를 하나만 만듭니다. |

서비스 제공자(LINE MINI App에서는 서비스 회사)는 서비스를 제공하고 사용자 정보를 얻는 개인 개발자, 회사 또는 조직입니다. 서비스 제공자는 [LINE Developers Console](https://developers.line.biz/console/)에 프로바이더로 등록됩니다. 따라서 서비스 제공자마다 프로바이더를 만드십시오.

예를 들어 Beverage Manufacturer A의 미국 자회사인 Beverage Manufacturer B가 "Sally Cola"용 LINE Bot을 개발하려고 한다고 가정합니다. 이 경우 Beverage Manufacturer B는 프로바이더 "Beverage Manufacturer A" 아래에 Messaging API 채널을 만드는 대신, 자사를 위한 프로바이더를 만들고 그 아래에 Messaging API 채널을 만듭니다.

![](https://developers.line.biz/media/line-developers-console/best-practices-for-provider-and-channel-management/create-provider-for-each-service-provider-1-en.webp)

회사(외주를 맡긴 회사)가 LINE 플랫폼을 사용한 서비스 개발을 다른 회사에 외주로 맡기는 경우, 외주를 맡긴 회사를 주요 서비스 제공자로 하여 프로바이더를 만들어야 합니다.

예를 들어 Beverage Manufacturer A가 LINE 플랫폼을 사용한 서비스 개발을 Development Company C와 Development Company D에 각각 외주로 맡긴다고 가정합니다. 이 경우 외주를 맡긴 Beverage Manufacturer A가 주요 서비스 제공자입니다. 따라서 Development Company C나 Development Company D를 위한 프로바이더를 만드는 대신, Beverage Manufacturer A를 위한 프로바이더를 만들고 그 아래에 채널을 만들어야 합니다.

![](https://developers.line.biz/media/line-developers-console/best-practices-for-provider-and-channel-management/create-provider-for-each-service-provider-2-en.png)

## 서로 연결할 채널은 같은 프로바이더 아래에 만들기 

| | |
| --- | --- |
| 좋은 예 | 서로 연결할 채널은 같은 프로바이더 아래에 만듭니다. |
| 나쁜 예 | 서로 연결할 채널을 서로 다른 프로바이더 아래에 만듭니다. |

여러 채널을 연결하는 서비스를 개발하는 경우, 서로 연결할 채널은 같은 프로바이더 아래에 만드십시오. 같은 프로바이더 아래에 채널을 만들면 각 채널에서 같은 사용자에게 같은 [사용자 ID](https://developers.line.biz/en/glossary/#user-id)가 할당됩니다. 채널은 나중에 다른 프로바이더로 옮길 수 없으므로, 서로 연결할 채널을 서로 다른 프로바이더 아래에 만들지 않도록 주의하십시오.

예를 들어 "Brown Coffee" 캠페인 사이트에 로그인한 사용자가 [친구 추가 옵션](https://developers.line.biz/en/docs/line-login/link-a-bot/)을 사용하여 "Cony Tea"용 LINE Bot을 친구로 추가하도록 유도하려면, 프로바이더 "Beverage Manufacturer A" 아래에 "Brown Coffee"용 LINE Login 채널과 "Cony Tea"용 Messaging API 채널을 만드십시오.

![](https://developers.line.biz/media/line-developers-console/best-practices-for-provider-and-channel-management/create-channels-under-the-same-provider-en.png)

LINE 플랫폼을 여러 서비스에 사용하는 경우, 각 서비스에서 얻은 LINE 사용자 데이터를 연결하려면 프로바이더 페이지를 게시하고 이용 약관을 준수해야 한다는 점에 유의하십시오. 자세한 내용은 법인 고객용 옵션 문서의 [사용자 ID 공통 사용 시 주의 사항](https://developers.line.biz/en/docs/partner-docs/provider-page/#cautions-on-the-common-use-of-user-ids)을 참조하십시오.

## 서비스를 제공하는 지역별로 채널 만들기 

| | |
| --- | --- |
| 좋은 예 | 서비스를 제공하는 지역별로 채널을 만듭니다. |
| 나쁜 예 | 하나의 채널로 여러 지역에 서비스를 제공합니다. |

같은 브랜드로 여러 국가 또는 지역에 서비스를 제공하는 경우, 하나의 채널을 공유하는 대신 지역마다 별도의 채널을 만드십시오.

예를 들어 Beverage Manufacturer A가 커피 음료 "Brown Coffee"의 캠페인 웹사이트를 일본에서 운영하고 있으며, 같은 제품의 캠페인 웹사이트를 대만과 태국에서도 출시하기로 했다고 가정합니다. 이 경우 프로바이더 "Beverage Manufacturer A" 아래에 지역별로 별도의 LINE Login 채널을 만드십시오.

![](https://developers.line.biz/media/line-developers-console/best-practices-for-provider-and-channel-management/create-channels-by-region-en.png)

## 기본 설정 탭의 이메일 주소에 메일링 리스트 이메일 주소 등록하기 

| | |
| --- | --- |
| 좋은 예 | **기본 설정** 탭의 **이메일 주소**에 메일링 리스트 이메일 주소를 등록합니다. |
| 나쁜 예 | **기본 설정** 탭의 **이메일 주소**에 개인 이메일 주소를 등록합니다. |

각 채널의 **기본 설정** 탭에 등록된 **이메일 주소**로 중요한 공지를 받게 됩니다. 따라서 이 **이메일 주소**에는 개인 이메일 주소가 아닌 메일링 리스트 이메일 주소를 등록하십시오.

예를 들어 LINE Login 채널 "Brown Coffee"의 **기본 설정** 탭에서 Brown과 Cony가 속한 부서의 메일링 리스트 이메일 주소를 **이메일 주소**에 등록합니다. 이렇게 하면 Brown과 Cony가 자리를 비운 경우에도 부서에서 채널에 대한 중요한 공지를 받을 수 있습니다.

채널에 대한 중요한 공지는 채널 역할을 가진 개발자의 이메일 주소나 알림 센터로도 받을 수 있습니다. 자세한 내용은 [이메일 또는 알림 센터로 알림 받기](https://developers.line.biz/en/docs/line-developers-console/notification/)를 참조하십시오.
