# 이메일 또는 알림 센터로 알림 받기

[LINE Developers Console](https://developers.line.biz/console/)의 알림 센터에서 다양한 업데이트를 실시간으로 받을 수 있습니다. 이 페이지에서는 받을 수 있는 알림의 종류와 알림 수신을 설정하는 방법을 설명합니다.

## 받을 수 있는 알림의 종류 

다음 종류의 알림을 받을 수 있습니다.

| 알림 종류 | 개요 |
| --- | --- |
| [중요 공지](https://developers.line.biz/en/docs/line-developers-console/notification/#notification-important-announcements) | LINE 플랫폼에 관한 중요 공지 |
| [활동](https://developers.line.biz/en/docs/line-developers-console/notification/#notification-activity) | LINE Developers Console에서 수행한 활동 |
| [뉴스](https://developers.line.biz/en/docs/line-developers-console/notification/#notification-news) | LINE Developers 사이트의 공지 |
| [채널 활동](https://developers.line.biz/en/docs/line-developers-console/notification/#notification-channel-activity) | 관리자(Admin) 역할을 가진 채널과 관련된 활동 |
| [프로바이더 활동](https://developers.line.biz/en/docs/line-developers-console/notification/#notification-provider-activity) | 관리자(Admin) 역할을 가진 프로바이더와 관련된 활동 |

### 중요 공지 

LINE 플랫폼에 관한 중요 공지를 알려 줍니다.

예: [그룹 재편에 따른 정보 이용에 관한 안내(share target picker)](https://developers.line.biz/en/news/2023/09/21/notice-concerning-use-of-information-for-liff/)

### 활동 

LINE Developers Console에서 수행한 활동을 알려 줍니다. 다음 활동에 대해 알림이 제공됩니다.

| 작업 유형 | 활동 상세 |
| --- | --- |
| 프로바이더 관련 작업 | <ul><li>프로바이더 만들기</li><li>프로바이더 삭제</li><li>프로바이더 참여 초대 이메일 보내기</li><li>개발자 계정에 프로바이더 역할 부여하기</li></ul> |
| 채널 관련 작업 | <ul><li>채널 만들기</li><li>채널 삭제</li><li>채널 참여 초대 이메일 보내기</li><li>개발자 계정에 채널 역할 부여하기</li></ul> |

### 뉴스 

LINE Developers 사이트의 공지를 알려 줍니다. [뉴스](https://developers.line.biz/en/news/)가 게시되면 뉴스 제목이 알림으로 전달됩니다.

### 채널 활동 

관리자(Admin) 역할을 가진 채널과 관련된 활동을 알려 줍니다. 다음 활동에 대해 알림이 제공됩니다.

| 채널 유형 | 활동 상세 |
| --- | --- |
| 일반 채널 | <ul><li>채널 삭제</li><li>채널에 새 멤버 추가</li></ul> |
| LINE MINI App 채널 | <ul><li>심사 결과에 따른 채널 상태 업데이트</li><li>LINE MINI App 검색 활성화</li><li>채널에 첨부된 심사 파일 자동 삭제(심사가 완료된 경우 또는 업로드 후 30일이 지나도 심사를 요청하지 않은 경우)</li></ul> |

### 프로바이더 활동 

관리자(Admin) 역할을 가진 프로바이더와 관련된 활동을 알려 줍니다. 다음 활동에 대해 알림이 제공됩니다.

- 프로바이더 삭제
- 프로바이더에 새 멤버 추가

## 알림 유형과 수신 방법 설정하기 

알림의 유형과 수신 방법을 설정할 수 있습니다. LINE Developers Console에서 프로필로 이동한 후 **Settings** 섹션에서 알림 옵션 옆의 슬라이더를 오른쪽(켜짐) 또는 왼쪽(꺼짐)으로 전환하여 해당 설정을 활성화하거나 비활성화합니다. **Important announcements**는 끌 수 없다는 점에 유의하십시오.

![Settings section of the profile of the LINE Developers console](https://developers.line.biz/media/line-developers-console/console-notification-center-settings-en.png)

<!-- note start -->

**알림 이메일**

이메일 알림을 받으려면 LINE Developers Console 프로필에 등록된 이메일 주소가 인증되어 있어야 합니다. 프로필의 이메일 주소에 **Your email is not yet verified**라고 표시되어 있다면 **Get Verification Link**를 클릭하여 이메일 주소를 인증하십시오.

활성화한 알림 설정에 대해서만 이메일 알림을 받게 됩니다.

<!-- note end -->

## 알림 확인하기 

알림 센터를 표시하려면 LINE Developers Console 오른쪽 상단의 벨 아이콘을 클릭하십시오. 읽지 않은 알림이 있으면 아이콘 옆에 녹색 점이 표시됩니다.

![Notification center icon of the LINE Developers Console](https://developers.line.biz/media/news/console-notification-center-icon.png)

이 아이콘을 클릭하면 알림 센터가 표시됩니다. 여기에서 최근 업데이트와 활동을 확인할 수 있습니다.

![The dropdown menu of the notification center of the LINE Developers Console](https://developers.line.biz/media/line-developers-console/notification-01-en.webp)
