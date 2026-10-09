# 채널 액세스 토큰

채널 액세스 토큰(channel access token)은 [채널](https://developers.line.biz/en/glossary/#channel)을 사용하려는 애플리케이션이 해당 채널을 사용할 권한이 있는지 확인하는 데 사용되는 불투명 문자열입니다. 채널 액세스 토큰을 사용하면 Messaging API와 같이 [LINE Platform](https://developers.line.biz/en/glossary/#line-platform)이 제공하는 여러 유용한 기능을 이용할 수 있습니다.

이 페이지에서는 채널 액세스 토큰의 개요와 종류 등 기본 사항을 설명합니다. 이 페이지를 읽으면 LINE Platform의 기능을 사용한 개발을 더 쉽게 할 수 있습니다.

<!-- table of contents -->

## 채널이란 

먼저 채널에 대해 간략히 설명합니다. 채널은 LINE Platform이 제공하는 기능에 접근하는 데 사용되는 통신 경로입니다. 예를 들어 다음과 같은 채널이 있습니다.

- Messaging API 채널
- LINE Login 채널
- LINE MINI App 채널

채널 액세스 토큰은 예를 들어 애플리케이션이 Messaging API 채널을 사용할 때 사용자가 해당 채널을 사용할 권한이 있는지 확인하는 데 사용됩니다.

![Channel](https://developers.line.biz/media/basics/channel.png)

## 채널 액세스 토큰을 사용하는 이유 

그렇다면 왜 채널 액세스 토큰을 사용할까요? 일부 시스템에서는 사용자의 권한을 확인하는 가장 일반적인 방법이 ID와 비밀번호를 사용하는 것이며, 이 경우 애플리케이션은 채널을 사용할 때마다 ID와 비밀번호를 입력합니다.

그러나 일반적으로 서비스를 제공하는 과정에서 채널은 여러 번 사용됩니다. 채널 사용자가 애플리케이션이 채널을 사용할 때마다 ID와 비밀번호를 입력하는 것은 현실적이지 않으므로, 대신 채널 액세스 토큰을 사용합니다. 채널 액세스 토큰을 사용하면 채널 사용자는 ID와 비밀번호를 입력하지 않고도 채널을 사용할 수 있습니다.

![Channel access token](https://developers.line.biz/media/basics/channel-access-token.png)

<!-- note start -->

**유출이 의심되는 채널 액세스 토큰은 폐기하세요**

채널 액세스 토큰은 애플리케이션이 채널을 사용할 권한이 있는지 확인하는 데 사용됩니다. 즉, 채널 액세스 토큰이 유출되면 의도하지 않은 제3자가 채널을 사용할 수 있습니다. 따라서 채널 액세스 토큰이 유출되었다고 의심되는 경우 폐기하세요. 자세한 내용은 [유출이 의심되는 채널 액세스 토큰은 폐기하세요](https://developers.line.biz/en/docs/basics/channel-access-token/#revoke-channel-access-token)를 참조하세요.

<!-- note end -->

## 채널 액세스 토큰의 종류 

채널 액세스 토큰에는 네 가지 종류가 있습니다. 이러한 채널 액세스 토큰은 유효 기간과 채널당 발급 가능한 토큰 수가 서로 다릅니다.

| 종류 | 유효 기간 | 채널당 발급 수 |
| --- | --- | --- |
| 사용자가 만료 기간을 지정하는 채널 액세스 토큰 | 최대 30일 | 30 |
| 스테이트리스 채널 액세스 토큰 | 15분 | 제한 없음 |
| 단기 채널 액세스 토큰 | 30일 | 30 |
| 장기 채널 액세스 토큰 | 무기한 | 1 |

발급된 채널 액세스 토큰의 수는 채널 액세스 토큰의 종류별로 집계됩니다. 따라서 사용자가 만료 기간을 지정하는 채널 액세스 토큰을 30개 발급했더라도 단기 채널 액세스 토큰은 30개까지 발급할 수 있습니다. 만료된 채널 액세스 토큰은 발급된 것으로 집계되지 않습니다.

<!-- tip start -->

**유효 기간 내에는 반복해서 사용할 수 있습니다**

같은 채널 액세스 토큰은 해당 채널 액세스 토큰의 유효 기간 내에 여러 번 사용할 수 있습니다. 자세한 내용은 [유효 기간 내에는 반복해서 사용할 수 있습니다](https://developers.line.biz/en/docs/basics/channel-access-token/#use-repeatedly)를 참조하세요.

<!-- tip end -->

또한 사용할 수 있는 채널 액세스 토큰의 종류는 제품과 기능에 따라 다릅니다. 예를 들어 장기 채널 액세스 토큰은 Messaging API 채널에서만 사용할 수 있습니다. 각 제품에서 사용할 수 있는 채널 액세스 토큰은 해당 제품의 문서를 참조하세요.

다음 섹션에서는 각 채널 액세스 토큰에 대해 설명합니다.

- [사용자가 만료 기간을 지정하는 채널 액세스 토큰 (Channel access token v2.1)](https://developers.line.biz/en/docs/basics/channel-access-token/#user-specified-expiration)
- [스테이트리스 채널 액세스 토큰](https://developers.line.biz/en/docs/basics/channel-access-token/#stateless-channel-access-token)
- [단기 채널 액세스 토큰](https://developers.line.biz/en/docs/basics/channel-access-token/#short-lived-channel-access-token)
- [장기 채널 액세스 토큰](https://developers.line.biz/en/docs/basics/channel-access-token/#long-lived-channel-access-token)

### 사용자가 만료 기간을 지정하는 채널 액세스 토큰 (Channel access token v2.1) 

Channel access token v2.1을 사용하면 개발자가 최대 30일의 유효 기간을 설정할 수 있습니다. 또한 채널 액세스 토큰을 생성할 때 JSON Web Token(JWT)을 사용하면 보안을 강화할 수 있습니다.

채널당 최대 30개의 channel access token v2.1을 발급할 수 있습니다. 발급 가능한 수를 초과하여 발급을 요청하면 발급 요청이 거부됩니다. Channel access token v2.1에 대한 자세한 내용은 Messaging API 문서의 [Channel access token v2.1 발급](https://developers.line.biz/en/docs/messaging-api/generate-json-web-token/)을 참조하세요.

### 스테이트리스 채널 액세스 토큰 

스테이트리스 채널 토큰은 15분 동안만 유효한 채널 액세스 토큰입니다. 발급할 수 있는 스테이트리스 채널 액세스 토큰의 수에는 제한이 없습니다. 한 번 발급된 스테이트리스 채널 액세스 토큰은 폐기할 수 없습니다.

스테이트리스 액세스 토큰 발급에 대한 자세한 내용은 Messaging API 레퍼런스의 [스테이트리스 채널 액세스 토큰 발급](https://developers.line.biz/en/reference/messaging-api/#issue-stateless-channel-access-token)을 참조하세요.

### 단기 채널 액세스 토큰 

단기 채널 액세스 토큰은 30일 동안 유효한 채널 액세스 토큰입니다. 채널당 최대 30개의 토큰을 발급할 수 있습니다. 발급 가능한 수를 초과하여 발급하면 가장 오래된 채널 액세스 토큰이 폐기됩니다.

단기 채널 액세스 토큰 발급에 대한 자세한 내용은 Messaging API 레퍼런스의 [단기 채널 액세스 토큰 발급](https://developers.line.biz/en/reference/messaging-api/#issue-shortlived-channel-access-token)을 참조하세요.

### 장기 채널 액세스 토큰 

장기 채널 액세스 토큰은 만료되지 않으며 Messaging API 채널에서만 발급할 수 있는 채널 액세스 토큰입니다. [LINE Developers Console](https://developers.line.biz/console/)의 Messaging API 채널에 있는 **Messaging API** 탭에서 언제든지 발급할 수 있습니다. 이러한 토큰은 언제든지 폐기할 수 있습니다.

장기 채널 액세스 토큰을 재발급하면 현재 활성 상태인 장기 채널 액세스 토큰은 무효화됩니다. 또한 재발급할 때 현재 활성 상태인 장기 채널 액세스 토큰의 유효 기간을 최대 24시간까지 연장할 수 있습니다.

## 채널 액세스 토큰 운영 예시 

채널 액세스 토큰은 개발 팀이나 사용자 그룹별로 발급하는 것을 목적으로 합니다. 예를 들어 개발 팀 A와 개발 팀 B에는 서로 다른 채널 액세스 토큰이 발급됩니다. 이렇게 하면 개발 팀 A의 채널 액세스 토큰이 유출되었다고 의심되거나 개발 팀 A가 자체적인 이유로 채널 액세스 토큰을 재발급해야 하는 경우에도 개발 팀 B는 영향을 받지 않습니다.

또한 아래 그림과 같이 서비스를 중단 없이 제공하기 위해 개발 팀 또는 사용자 그룹마다 최대 두 개의 채널 액세스 토큰을 발급할 수 있습니다.

![Example of channel access token operation](https://developers.line.biz/media/basics/operate-channel-access-token.png)

## 체크리스트 

채널 액세스 토큰을 사용할 때 다음 사항에 유의하세요.

- [유효 기간 내에는 반복해서 사용할 수 있습니다](https://developers.line.biz/en/docs/basics/channel-access-token/#use-repeatedly)
- [유출이 의심되는 채널 액세스 토큰은 폐기하세요](https://developers.line.biz/en/docs/basics/channel-access-token/#revoke-channel-access-token)

### 유효 기간 내에는 반복해서 사용할 수 있습니다 

같은 채널 액세스 토큰은 유효 기간 내에 여러 번 사용할 수 있습니다. 이를 고려하여 channel access token v2.1과 단기 채널 액세스 토큰은 채널을 사용할 때마다 재발급하지 마세요. 짧은 기간에 많은 수의 채널 액세스 토큰이 발급되어 LINE Platform의 운영에 영향을 준다고 판단되는 경우 발급이 일시적으로 제한될 수 있습니다. 한편 스테이트리스 채널 액세스 토큰은 채널을 사용할 때마다 발급하도록 설계되어 있습니다.

또한 유효 기간이 만료된 채널 액세스 토큰을 사용하면 채널 권한을 확인할 수 없으므로 채널을 사용할 수 없습니다. 만료되기 전에 새 채널 액세스 토큰을 자동으로 발급하도록 시스템을 설정하는 것을 권장합니다.

### 유출이 의심되는 채널 액세스 토큰은 폐기하세요 

채널 액세스 토큰은 채널 권한을 확인하는 데 사용됩니다. 즉, 채널 액세스 토큰이 유출되면 의도하지 않은 제3자가 채널을 사용할 가능성이 있습니다.

예를 들어 Messaging API에는 LINE 공식 계정의 친구 전체에게 같은 메시지를 보내는 "Broadcast message" 기능이 있습니다. 채널 액세스 토큰이 유출되면 제3자가 Broadcast message를 보내 모든 친구에게 악의적인 메시지가 전송될 수 있습니다.

따라서 폐기 가능한 채널 액세스 토큰이 유출되었다고 의심되는 경우 해당 토큰을 폐기하세요. 채널 액세스 토큰 폐기에 대한 자세한 내용은 다음 자료를 참조하세요.

- [Channel access token v2.1 폐기](https://developers.line.biz/en/reference/messaging-api/#revoke-channel-access-token-v2-1)
- [단기 또는 장기 채널 액세스 토큰 폐기](https://developers.line.biz/en/reference/messaging-api/#revoke-longlived-or-shortlived-channel-access-token)
