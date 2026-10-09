# Messaging API 사용 중단하기

<!-- tip start -->

**LINE 공식 계정 사용 중단하기**

Messaging API 채널에 연결된 LINE 공식 계정의 사용을 중단하려면 [LINE 공식 계정 사용 중단하기](https://developers.line.biz/en/docs/messaging-api/stop-using-line-official-account/)를 참고하십시오.

<!-- tip end -->

Messaging API 채널에 연결된 LINE 공식 계정은 계속 사용하면서 Messaging API만 중단하려면 아래 작업을 수행하는 것을 권장합니다. 참고로, LINE 공식 계정을 Messaging API 채널에 연결된 상태로 두고 Messaging API 채널만 삭제할 수는 없습니다.

<!-- table of contents -->

## 웹훅 사용 중단하기 

1. [LINE Developers Console](https://developers.line.biz/console/)에서 사용을 중단할 Messaging API 채널을 선택하십시오.
1. **Messaging API** 탭을 클릭하십시오.
1. **Webhook settings** 섹션에서 **Use webhook**을 비활성화하십시오.

![Webhook settings 섹션의 Use webhook](https://developers.line.biz/media/messaging-api/stop-using-messaging-api/disable-use-webhook-en.webp)

## 채널 액세스 토큰 폐기하기 

채널 액세스 토큰의 종류에 따라 채널 액세스 토큰을 폐기하는 엔드포인트가 다릅니다. 사용 중인 채널 액세스 토큰에 해당하는 엔드포인트를 사용하여 채널 액세스 토큰을 폐기하십시오. 참고로, [상태 비저장 채널 액세스 토큰](https://developers.line.biz/en/docs/basics/channel-access-token/#stateless-channel-access-token)은 폐기할 수 없습니다.

- [채널 액세스 토큰 v2.1 폐기](https://developers.line.biz/en/reference/messaging-api/#revoke-channel-access-token-v2-1) 엔드포인트
- [단기 또는 장기 채널 액세스 토큰 폐기](https://developers.line.biz/en/reference/messaging-api/#revoke-longlived-or-shortlived-channel-access-token) 엔드포인트

## Messaging API 사용 중단 후 표시 

위 단계에 따라 웹훅을 비활성화하고 채널 액세스 토큰을 폐기하면 Messaging API 사용을 중단할 수 있습니다.

다만 이 단계들로 Messaging API 사용을 중단하더라도 Messaging API 채널 자체는 그대로 남아 있습니다. 따라서 LINE Developers Console의 채널 목록에서는 사용을 중단한 채널과 사용 중인 다른 Messaging API 채널을 시각적으로 구분할 수 없습니다.

또한 LINE Official Account Manager의 설정 화면에서 **Messaging API**를 선택하면 상태가 계속 **Enabled**로 표시됩니다.
