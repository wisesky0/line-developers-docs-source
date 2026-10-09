# LINE Beacon 디바이스 사양

이 LINE Beacon 사양은 LINE Beacon을 사용하기 위해 비콘 디바이스를 배포하려는 법인 사용자를 위한 것입니다. 비콘 디바이스는 이 사양을 준수해야 합니다.

[LINE Simple Beacon](https://github.com/line/line-simple-beacon) 패킷과 달리, LINE Beacon 패킷에는 보안 메커니즘으로 [보안 메시지](https://developers.line.biz/en/docs/messaging-api/beacon-device-spec/#generating-secure-message) 필드가 포함되어 있습니다.

## LINE Beacon 준수 디바이스의 요구 사항 

LINE Beacon 사양을 준수하는 비콘 디바이스는 Bluetooth® Low Energy 버전 4.0과 Apple의 [iBeacon](https://developer.apple.com/ibeacon/)을 지원하며, LINE Beacon 패킷을 광고할 수 있어야 합니다. 구체적으로 디바이스는 다음 요구 사항을 충족해야 합니다.

- [LINE Beacon 패킷](https://developers.line.biz/en/docs/messaging-api/beacon-device-spec/#line-beacon-packet)을 광고합니다.
- SHA-256으로 해시한 데이터와 XOR(배타적 논리합) 연산을 사용하여 [보안 메시지](https://developers.line.biz/en/docs/messaging-api/beacon-device-spec/#generating-secure-message)를 생성합니다.
- 15초마다 보안 메시지를 갱신합니다.
- 디바이스에 기록되어 있고 디바이스 본체에 표시된 고유한 [HWID](https://developers.line.biz/en/docs/messaging-api/beacon-device-spec/#hwid)를 가지고 있습니다.

## LINE Beacon 패킷 

LINE이 비콘 디바이스를 빠르게 감지할 수 있도록, 일반 액세스 프로필(generic access profile)에 명시된 브로드캐스터 역할(BLUETOOTH SPECIFICATION Version 4.0 [Vol 3], Part C Section 2.2.2.1)에 따라 비콘 디바이스를 제어하세요.

### 패킷 전송 간격 

LINE Beacon 패킷은 152.5ms 간격으로 전송할 것을 강력히 권장합니다.

### 광고 패킷 사양 

아래 그림과 같이 세 개의 AD 구조로 광고 패킷을 구성하세요.

![LINE Beacon 패킷](https://developers.line.biz/media/messaging-api/beacon-device-spec/advDataFormat.webp)

광고 패킷 사양은 다음과 같습니다. 값(Value) 열의 16진수 값은 설명(Description) 열의 괄호 안 값과 같습니다.

| Octet | Field | Value | Description |
| --- | --- | --- | --- |
| 00 | Length | 0x02 | 첫 번째 AD 구조의 데이터 길이(2바이트) |
| 01 | AD type | 0x01 | 첫 번째 AD 구조의 AD 유형(Flags) |
| 02 | AD data | 0x06 | 설정된 플래그(LE General Discoverable Mode, BR/EDR Not Supported) |
| 03 | Length | 0x03 | 두 번째 AD 구조의 데이터 길이(3바이트) |
| 04 | AD type | 0x03 | 두 번째 AD 구조의 AD 유형(Complete list of 16-bit UUIDs available) |
| 05 | 16-bit UUID | 0x6F | LINE의 16비트 UUID이며, 다음 바이트와 결합하면 (0xFE6F)가 됩니다. |
| 06 | 16-bit UUID | 0xFE | LINE의 16비트 UUID이며, 이전 바이트와 결합하면 (0xFE6F)가 됩니다. |
| 07 | Length | 0x11 | 세 번째 AD 구조의 데이터 길이(17바이트) |
| 08 | AD type | 0x16 | 세 번째 AD 구조의 AD 유형(Service Data - 16-bit UUID) |
| 09 | 16-bit UUID | 0x6F | LINE의 16비트 UUID이며, 다음 바이트와 결합하면 (0xFE6F)가 됩니다. |
| 10 | 16-bit UUID | 0xFE | LINE의 16비트 UUID이며, 이전 바이트와 결합하면 (0xFE6F)가 됩니다. |
| 11 | Frame type | 0x02 | 프레임 유형(LINE Beacon) |
| 12-16 | HWID | 디바이스별 값 | 비콘 디바이스의 5바이트 고유 ID입니다. 자세한 내용은 [HWID](https://developers.line.biz/en/docs/messaging-api/beacon-device-spec/#hwid)를 참고하세요. |
| 17 | Measured TxPower | 디바이스별 값 | LINE이 설치된 기기와 비콘 디바이스가 1미터 떨어져 있을 때의 RSSI(수신 신호 강도 지표)입니다. iBeacon 패킷과 같은 값을 설정하세요. 자세한 내용은 iBeacon 문서를 참고하세요.<br />RSSI 데이터를 사용하지 않는다면 이 필드를 0x7F로 설정하세요. |
| 18-21 | Message authentication code | 가변 | [메시지 인증](https://developers.line.biz/en/docs/messaging-api/beacon-device-spec/#step-one-generate-message-auth-code)을 위한 4바이트 코드 |
| 22-23 | Masked timestamp | 가변 | 2바이트 [마스킹된 타임스탬프](https://developers.line.biz/en/docs/messaging-api/beacon-device-spec/#step-two-generate-masked-timestamp) |
| 24 | Battery level | 가변 | 남은 [배터리 잔량](https://developers.line.biz/en/docs/messaging-api/beacon-device-spec/#battery-level) |
| 25-30 | Non-significant part | 0x00 | 사용하지 않음. 각 바이트를 0x00으로 설정하세요. |

## 보안 메시지 생성 

LINE Beacon 패킷의 위변조와 재전송 공격(replay attack)을 방지하기 위해 LINE은 보안 메시지를 전송할 것을 요구합니다. 보안 메시지는 메시지 인증 코드, 마스킹된 타임스탬프, 배터리 잔량을 포함하는 7바이트 데이터입니다. LINE은 비콘 디바이스가 전송한 보안 메시지를 검증하기 위해 LINE Platform으로 전달합니다.

보안 메시지를 생성하려면 아래 흐름에 따라 SHA-256으로 계산한 해시 값에 XOR(배타적 논리합) 연산을 세 번 수행합니다. 필요한 매개변수에 대한 자세한 내용은 [보안 메시지의 필수 매개변수](https://developers.line.biz/en/docs/messaging-api/beacon-device-spec/#parameters)를 참고하세요.

![보안 메시지 생성 알고리즘](https://developers.line.biz/media/messaging-api/beacon-device-spec/secureMessageAlgorithm.webp)

아래 지침에 따라 보안 메시지를 생성하세요.

### 1. 메시지 인증 코드 생성 

1. 다음 항목을 나열된 순서대로 연결한 다음, SHA-256으로 32바이트 해시 값을 생성합니다.

   - [타임스탬프](https://developers.line.biz/en/docs/messaging-api/beacon-device-spec/#timestamp)
   - [HWID](https://developers.line.biz/en/docs/messaging-api/beacon-device-spec/#hwid)
   - [벤더 키](https://developers.line.biz/en/docs/messaging-api/beacon-device-spec/#vendor-key)
   - [로트 키](https://developers.line.biz/en/docs/messaging-api/beacon-device-spec/#lot-key)
   - [배터리 잔량](https://developers.line.biz/en/docs/messaging-api/beacon-device-spec/#battery-level)

1. 해시 값의 처음 16바이트와 나머지 16바이트에 XOR 연산을 수행합니다.
1. 이전 단계에서 계산한 값의 처음 8바이트와 나머지 8바이트에 XOR 연산을 수행합니다.
1. 이전 단계에서 계산한 값의 처음 4바이트와 나머지 4바이트에 XOR 연산을 수행합니다.

이렇게 하면 메시지 인증 코드가 완성됩니다.

### 2. 마스킹된 타임스탬프 생성 

타임스탬프의 앞 6바이트를 마스킹하고 마지막 2바이트는 그대로 둡니다. 이것이 마스킹된 타임스탬프입니다.

### 3. 항목 연결 

보안 메시지를 생성하려면 다음 항목을 나열된 순서대로 연결합니다.

- [1단계](https://developers.line.biz/en/docs/messaging-api/beacon-device-spec/#step-one-generate-message-auth-code)에서 생성한 메시지 인증 코드
- [2단계](https://developers.line.biz/en/docs/messaging-api/beacon-device-spec/#step-two-generate-masked-timestamp)에서 생성한 마스킹된 타임스탬프
- [배터리 잔량](https://developers.line.biz/en/docs/messaging-api/beacon-device-spec/#battery-level)

연결한 결과가 보안 메시지입니다. 비콘 디바이스에서 보안 메시지를 생성하도록 개발하고 테스트하려면 [보안 메시지 생성을 위한 샘플 코드와 데이터](https://developers.line.biz/en/docs/messaging-api/secure-message-sample/)를 참고하세요.

### 보안 메시지의 필수 매개변수 

보안 메시지를 생성하려면 다음 매개변수가 필요합니다.

- [배터리 잔량](https://developers.line.biz/en/docs/messaging-api/beacon-device-spec/#battery-level)
- [HWID](https://developers.line.biz/en/docs/messaging-api/beacon-device-spec/#hwid)
- [로트 키](https://developers.line.biz/en/docs/messaging-api/beacon-device-spec/#lot-key)
- [타임스탬프](https://developers.line.biz/en/docs/messaging-api/beacon-device-spec/#timestamp)
- [벤더 키](https://developers.line.biz/en/docs/messaging-api/beacon-device-spec/#vendor-key)

HWID, 로트 키, 벤더 키는 LY Corporation이 생성하고 관리합니다. 이 필수 매개변수를 발급받으려면 소속 기관의 LY Corporation 담당자에게 문의하세요. 법인 사용자가 신청서를 제출하고 승인을 받은 후에만 필수 매개변수가 발급됩니다.

#### 배터리 잔량 

배터리 잔량은 남은 배터리 용량입니다. 아래 안내에 따라 잔량을 지정하세요.

| 10진수 값 | 16진수 값 | 설명 |
| --- | --- | --- |
| 0 | 0x00 | 알 수 없음 또는 외부 전원에 연결됨. |
| 1 | 0x01 | 0% 남음. 배터리가 완전히 방전됨. |
| 2 | 0x02 | 10% 남음 |
| … | … | … |
| 10 | 0x0A | 90% 남음 |
| 11 | 0x0B | 100%. 배터리가 완전히 충전됨. |
| 12–255 | 0x0C–0xFF | 향후 사용을 위해 예약됨. 사용하지 마세요. |

#### HWID 

HWID는 LY Corporation이 발급한 비콘 디바이스의 하드웨어 ID입니다. 이 ID는 16진수 표기법의 10자리 문자열입니다. HWID를 바이트 배열로 변환하고, 그 바이트 배열을 5바이트 이진 데이터로 비콘 디바이스에 기록하세요. 또한 HWID를 비콘 디바이스에 표시하세요.

#### 로트 키 

로트 키는 LY Corporation이 발급하여 각 로트(lot)에 할당되는 키입니다. 키는 16자리 문자열입니다. HWID와 마찬가지로, 키를 바이트 배열로 변환하고 그 바이트 배열을 8바이트 이진 데이터로 비콘 디바이스에 기록하세요.

#### 타임스탬프 

타임스탬프는 부호 없는 64비트 정수입니다.

- 비콘 디바이스의 전원을 처음 켰을 때부터 타임스탬프를 증가시키기 시작합니다.
- 타임스탬프를 0에서 시작하고 15초마다 값을 1씩 증가시킵니다. 예를 들어 비콘을 켠 후 1분이 지난 비콘 디바이스의 타임스탬프는 4입니다.
- 비콘 디바이스를 다시 켜도 타임스탬프를 0으로 재설정하지 마세요. 전원이 꺼진 동안에도 타임스탬프 값을 계속 증가시킵니다.
- 비콘 디바이스의 HWID를 새로 발급받은 HWID로 다시 기록할 때는 타임스탬프를 0부터 다시 시작하도록 재설정하세요.

#### 벤더 키 

벤더 키는 LY Corporation이 발급하여 각 벤더에 할당되는 키입니다. 이 키는 16진수 표기법의 8자리 문자열입니다. HWID와 마찬가지로, 키를 바이트 배열로 변환하고 그 바이트 배열을 4바이트 이진 데이터로 비콘 디바이스에 기록하세요.

## iBeacon 패킷 

iOS 디바이스에 LINE Beacon 디바이스가 근처에 있음을 알리려면 iBeacon 패킷을 전송해야 합니다. iBeacon 패킷에 다음과 같은 LINE Beacon 전용 매개변수를 포함하세요.

| 매개변수 | 값                                   |
| -------- | ------------------------------------ |
| UUID     | D0D2CE24-9EFC-11E5-82C4-1C6A7A17EF38 |
| Major    | 0x4C49                               |
| Minor    | 0x4E45                               |

iBeacon 패킷의 AD 구조와 전송 간격에 대한 자세한 내용은 Apple의 Proximity Beacon Specification 문서를 참고하세요. 이 문서는 [Apple Developer 사이트의 iBeacon 섹션](https://developer.apple.com/ibeacon/)에서 내려받을 수 있습니다.
