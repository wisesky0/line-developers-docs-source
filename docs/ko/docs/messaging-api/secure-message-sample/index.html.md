# 보안 메시지 생성을 위한 샘플 코드와 데이터

비콘 기기에 내장하여 보안 메시지를 생성하는 기능을 개발할 때 여기에 제공된 샘플 데이터와 코드를 참고하십시오. 보안 메시지 생성 알고리즘에 대한 정보는 [보안 메시지 생성](https://developers.line.biz/en/docs/messaging-api/beacon-device-spec/#generating-secure-message)을 참고하십시오.

## 샘플 데이터 

아래 표들은 보안 메시지를 생성하는 데 필요한 샘플 데이터와 데이터를 올바르게 계산했을 때의 결과 값을 보여줍니다. 보안 메시지 생성 기능이 올바르게 동작하는지 확인하려면 여기에 제공된 데이터와 비교하십시오.

보안 메시지를 계산하는 데 사용할 매개변수는 다음과 같습니다.

| 필드 | 값 |
| ------------- | ---------------- |
| HWID          | 01deadbeef       |
| 벤더 키       | 5cf2a423         |
| 로트 키       | 8c194fe41d7fe34f |
| 배터리 잔량   | 0x01             |

계산하기 전에 HWID, 벤더 키, 로트 키의 각 값을 바이트 배열로 변환하십시오.

### 타임스탬프가 0인 경우 

타임스탬프 값 `0`은 기기가 처음으로 전원을 켜진 상태임을 의미합니다.

| | |
| --- | --- |
| 입력 값 | 000000000000000001deadbeef5cf2a4238c194fe41d7fe34f01 |
| SHA-256 해시 값 | 72de7eafe33a44f0094283e03c28ff8bf85230825616fa49b73edaa6be88a0a8 |
| 메시지 인증 코드 | 037cf6f1 |
| 보안 메시지 | 037cf6f1000001 |

### 타임스탬프가 1인 경우 

타임스탬프 값 `1`은 처음 전원을 켠 후 15초가 지났음을 의미합니다.

| | |
| --- | --- |
| 입력 값 | 000000000000000101deadbeef5cf2a4238c194fe41d7fe34f01 |
| SHA-256 해시 값 | eba4633c394cf7d913a863f25e930e7b8d9227bd109c2019d9dfbb411366cc4f |
| 메시지 인증 코드 | c86489c6 |
| 보안 메시지 | c86489c6000101 |

### 타임스탬프가 65535인 경우 

타임스탬프 값이 `65535`에서 `65536`으로 증가하면, 보안 메시지에서 마스킹된 타임스탬프가 `0000`으로 초기화됩니다. [타임스탬프가 65536인 경우](https://developers.line.biz/en/docs/messaging-api/secure-message-sample/#timestamp-is-65536) 섹션도 함께 확인하여 마스킹된 타임스탬프가 `ffff`에서 `0000`으로 바뀌는지 확인하십시오.

| | |
| --- | --- |
| 입력 값 | 000000000000ffff01deadbeef5cf2a4238c194fe41d7fe34f01 |
| SHA-256 해시 값 | f435f408d2978130607a8af69da2e6f65b66c260796f03ce2a7daf9b468ae0b5 |
| 메시지 인증 코드 | 958497b8 |
| 보안 메시지 | 958497b8ffff01 |

### 타임스탬프가 65536인 경우 

타임스탬프 값이 `65536`으로 증가하면, 보안 메시지에서 마스킹된 타임스탬프가 `0000`으로 초기화됩니다. [타임스탬프가 65535인 경우](https://developers.line.biz/en/docs/messaging-api/secure-message-sample/#timestamp-is-65535) 섹션도 함께 확인하여 마스킹된 타임스탬프가 `ffff`에서 `0000`으로 바뀌는지 확인하십시오.

| | |
| --- | --- |
| 입력 값 | 000000000001000001deadbeef5cf2a4238c194fe41d7fe34f01 |
| SHA-256 해시 값 | 70b58ab690b63d519caf37359ce3d910e8e1d79a90f095462ee2d56ae0f035e4 |
| 메시지 인증 코드 | 564cfb90 |
| 보안 메시지 | 564cfb90000001 |

### 타임스탬프가 9223372036854775807인 경우 

값 `9223372036854775807`은 부호 있는 64비트 정수의 최댓값입니다.

| | |
| --- | --- |
| 입력 값 | 7fffffffffffffff01deadbeef5cf2a4238c194fe41d7fe34f01 |
| SHA-256 해시 값 | c626232a199b163c53ba70f4d493c8b34891532d9e8fbf2b788e7e1cf3d13dec |
| 메시지 인증 코드 | 05d522a7 |
| 보안 메시지 | 05d522a7ffff01 |

### 타임스탬프가 18446744073709551615인 경우 

값 `18446744073709551615`은 부호 없는 64비트 정수의 최댓값입니다.

| | |
| --- | --- |
| 입력 값 | ffffffffffffffff01deadbeef5cf2a4238c194fe41d7fe34f01 |
| SHA-256 해시 값 | 53ab6c6874fc333398ae2186eb45ce5d5a77d10cd2d3fe3d933a12b33cb13090 |
| 메시지 인증 코드 | 7393bd92 |
| 보안 메시지 | 7393bd92ffff01 |

## 샘플 코드 

다음은 보안 메시지를 생성하는 Java 샘플 코드입니다.

```java
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Arrays;

import javax.xml.bind.DatatypeConverter;

public class LineBeacon {

    private static byte[] sha256(byte[] input) {
        try {
            return MessageDigest.getInstance("SHA-256").digest(input);
        } catch (NoSuchAlgorithmException e) {
            throw new IllegalStateException("SHA-256 is always supported in Java7+", e);
        }
    }

    private static byte[] xor(byte[] input, int xorCount) {
        if (xorCount == 0) {
            return input;
        }

        byte[] latterHalf = Arrays.copyOfRange(input, input.length / 2, input.length);
        for (int i = 0; i < latterHalf.length; i++) {
            latterHalf[i] ^= input[i];
        }
        return xor(latterHalf, xorCount - 1);
    }

    private static byte[] concat(byte[]...inputs) {
        int size = 0;
        for (byte[] in: inputs) {
            size += in .length;
        }
        ByteBuffer bb = ByteBuffer.allocate(size);
        for (byte[] in: inputs) {
            bb.put( in );
        }
        return bb.array();
    }

    public static byte[] createSecureMessage(long timestamp, byte[] hwid, byte[] vendorKey, byte[] lotKey, byte batteryLevel) {
        if (hwid.length != 5) {
            throw new IllegalArgumentException("HWID must be 5 bytes long. " + hwid.length);
        }
        if (vendorKey.length != 4) {
            throw new IllegalArgumentException("Vendor key must be 4 bytes long. " + vendorKey.length);
        }
        if (lotKey.length != 8) {
            throw new IllegalArgumentException("Lot key must be 8 bytes long. " + lotKey.length);
        }
        if (batteryLevel < 0x00 || 0x0b < batteryLevel) {
            throw new IllegalArgumentException("Battery Level must be between 0x00 and 0x0b: " + batteryLevel);
        }

        byte[] rawTimestamp = ByteBuffer
            .allocate(8) // Timestamp of LINE Beacon is always 8 bytes long.
            .order(ByteOrder.BIG_ENDIAN) // LINE Beacon always uses big-endian.
            .putLong(timestamp)
            .array();
        byte[] input = concat(rawTimestamp, hwid, vendorKey, lotKey, new byte[] {
            batteryLevel
        });
        byte[] digest = sha256(input);
        byte[] messageAuthenticationCode = xor(digest, 3);
        byte[] secureMessage = ByteBuffer
            .allocate(7) // Current secureMessage is always 7 bytes long.
            .put(messageAuthenticationCode)
            .put(rawTimestamp, 6, 2) // Mask the upper 6 bytes of the timestamp.
            .put(batteryLevel)
            .array();

        System.out.printf("%20s\t%s\t%s\t%s\t%s\n",
            Long.toUnsignedString(timestamp),
            DatatypeConverter.printHexBinary(secureMessage),
            DatatypeConverter.printHexBinary(input),
            DatatypeConverter.printHexBinary(digest),
            DatatypeConverter.printHexBinary(messageAuthenticationCode)
        );
        return secureMessage;
    }
}
```

이 샘플 코드는 [샘플 데이터](https://developers.line.biz/en/docs/messaging-api/secure-message-sample/#sample-data) 섹션의 데이터를 사용하여, 위에서 보안 메시지를 생성하는 코드를 테스트합니다.

```java
import org.junit.Test;

import static org.junit.Assert.*;

import javax.xml.bind.DatatypeConverter;

public class LineBeaconTest {
    @Test
    public void testSecureMessage() {
        byte[] HWID_01deadbeef = DatatypeConverter.parseHexBinary("01deadbeef");
        byte[] VENDOR_KEY_5cf2a423 = DatatypeConverter.parseHexBinary("5cf2a423");
        byte[] LOTKEY_8c194fe41d7fe34f = DatatypeConverter.parseHexBinary("8c194fe41d7fe34f");
        byte BATTEY_LEVEL_0x01 = 0x01;

        assertArrayEquals(
            "initial timestamp",
            DatatypeConverter.parseHexBinary("037cf6f1000001"),
            LineBeacon.createSecureMessage(
                0,
                HWID_01deadbeef,
                VENDOR_KEY_5cf2a423,
                LOTKEY_8c194fe41d7fe34f,
                BATTEY_LEVEL_0x01

            )
        );
        assertArrayEquals(
            "timestamp after 15 sec",
            DatatypeConverter.parseHexBinary("c86489c6000101"),
            LineBeacon.createSecureMessage(
                1,
                HWID_01deadbeef,
                VENDOR_KEY_5cf2a423,
                LOTKEY_8c194fe41d7fe34f,
                BATTEY_LEVEL_0x01

            )
        );
        assertArrayEquals(
            "timestamp as UNSIGNED_SHORT_MAX_VALUE",
            DatatypeConverter.parseHexBinary("958497b8ffff01"),
            LineBeacon.createSecureMessage(
                0xffff,
                HWID_01deadbeef,
                VENDOR_KEY_5cf2a423,
                LOTKEY_8c194fe41d7fe34f,
                BATTEY_LEVEL_0x01

            )
        );
        assertArrayEquals(
            "carry-over test",
            DatatypeConverter.parseHexBinary("564cfb90000001"),
            LineBeacon.createSecureMessage(
                0x0001 _0000,
                HWID_01deadbeef,
                VENDOR_KEY_5cf2a423,
                LOTKEY_8c194fe41d7fe34f,
                BATTEY_LEVEL_0x01

            )
        );
        assertArrayEquals(
            "timestamp as SIGNED_LONG_MAX_VALUE",
            DatatypeConverter.parseHexBinary("05d522a7ffff01"),
            LineBeacon.createSecureMessage(
                9223372036854775807 L,
                HWID_01deadbeef,
                VENDOR_KEY_5cf2a423,
                LOTKEY_8c194fe41d7fe34f,
                BATTEY_LEVEL_0x01

            )
        );
        assertArrayEquals(
            "timestamp as UNSIGNED_LONG_MAX_VALUE",
            DatatypeConverter.parseHexBinary("7393bd92ffff01"),
            LineBeacon.createSecureMessage(
                Long.parseUnsignedLong("ffffffffffffffff", 16),
                HWID_01deadbeef,
                VENDOR_KEY_5cf2a423,
                LOTKEY_8c194fe41d7fe34f,
                BATTEY_LEVEL_0x01

            )
        );
    }
}
```
