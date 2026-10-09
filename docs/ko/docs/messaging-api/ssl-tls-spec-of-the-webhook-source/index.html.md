# 웹훅 소스의 SSL/TLS 사양

봇 서버가 LINE 플랫폼에서 보낸 웹훅 이벤트를 받을 때는 HTTPS 통신을 사용해야 합니다. HTTPS 통신에는 공인 인증 기관(CA)에서 발급한 SSL/TLS 인증서를 사용하십시오. SSL 인증서를 구매하거나 [Let's Encrypt](https://letsencrypt.org/)와 같은 무료 인증서를 사용할 수 있습니다.

웹훅을 받는 봇 서버는 다음 사양에 따라 HTTPS 통신을 지원해야 합니다.

<!-- table of contents -->

## 지원되는 암호 스위트 

[Deprecated](https://developers.line.biz/en/glossary/#deprecated) 상태의 암호 스위트는 호환성을 위해 유지되지만, 가까운 시일 내에 예고 없이 지원이 중단될 수 있습니다. 또한 지원되는 SSL/TLS 프로토콜 버전과 HTTP 버전은 암호 스위트에 따라 다릅니다.

<!-- tip start -->

**표는 좌우로 스크롤할 수 있습니다**

표를 오른쪽으로 스크롤하면 각 암호 스위트의 상태, 지원되는 SSL/TLS 프로토콜 버전, 지원되는 HTTP 버전을 확인할 수 있습니다.

<!-- tip end -->

| IANA | OpenSSL | 16진수 코드 | 상태 | 지원되는 SSL/TLS 프로토콜 버전 | 지원되는 HTTP 버전 |
| --- | --- | --- | --- | --- | --- |
| TLS_AES_256_GCM_SHA384 | TLS_AES_256_GCM_SHA384 | 0x13, 0x02 |  | TLS 1.3 | <ul><li>HTTP/1.0</li><li>HTTP/1.1</li><li>HTTP/2</li></ul> |
| TLS_CHACHA20_POLY1305_SHA256 | TLS_CHACHA20_POLY1305_SHA256 | 0x13, 0x03 |  | TLS 1.3 | <ul><li>HTTP/1.0</li><li>HTTP/1.1</li><li>HTTP/2</li></ul> |
| TLS_AES_128_GCM_SHA256 | TLS_AES_128_GCM_SHA256 | 0x13, 0x01 |  | TLS 1.3 | <ul><li>HTTP/1.0</li><li>HTTP/1.1</li><li>HTTP/2</li></ul> |
| TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256 | ECDHE-ECDSA-AES128-GCM-SHA256 | 0xc0, 0x2b |  | TLS 1.2 | <ul><li>HTTP/1.0</li><li>HTTP/1.1</li><li>HTTP/2</li></ul> |
| TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256 | ECDHE-RSA-AES128-GCM-SHA256 | 0xc0,0x2f |  | TLS 1.2 | <ul><li>HTTP/1.0</li><li>HTTP/1.1</li><li>HTTP/2</li></ul> |
| TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384 | ECDHE-ECDSA-AES256-GCM-SHA384 | 0xc0, 0x2c |  | TLS 1.2 | <ul><li>HTTP/1.0</li><li>HTTP/1.1</li><li>HTTP/2</li></ul> |
| TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384 | ECDHE-RSA-AES256-GCM-SHA384 | 0xc0, 0x30 |  | TLS 1.2 | <ul><li>HTTP/1.0</li><li>HTTP/1.1</li><li>HTTP/2</li></ul> |
| TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256 | ECDHE-ECDSA-CHACHA20-POLY1305 | 0xcc, 0xa9 |  | TLS 1.2 | <ul><li>HTTP/1.0</li><li>HTTP/1.1</li><li>HTTP/2</li></ul> |
| TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256 | ECDHE-RSA-CHACHA20-POLY1305 | 0xcc, 0xa8 |  | TLS 1.2 | <ul><li>HTTP/1.0</li><li>HTTP/1.1</li><li>HTTP/2</li></ul> |
| TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA | ECDHE-RSA-AES128-SHA | 0xc0, 0x13 | Deprecated | TLS 1.2 | <ul><li>HTTP/1.0</li><li>HTTP/1.1</li></ul> |
| TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA | ECDHE-RSA-AES256-SHA | 0xc0, 0x14 | Deprecated | TLS 1.2 | <ul><li>HTTP/1.0</li><li>HTTP/1.1</li></ul> |
| TLS_RSA_WITH_AES_128_GCM_SHA256 | AES128-GCM-SHA256 | 0x00, 0x9c | Deprecated | TLS 1.2 | <ul><li>HTTP/1.0</li><li>HTTP/1.1</li></ul> |
| TLS_RSA_WITH_AES_128_CBC_SHA | AES128-SHA | 0x00, 0x2f | Deprecated | TLS 1.2 | <ul><li>HTTP/1.0</li><li>HTTP/1.1</li></ul> |
| TLS_RSA_WITH_AES_256_CBC_SHA | AES256-SHA | 0x00, 0x35 | Deprecated | TLS 1.2 | <ul><li>HTTP/1.0</li><li>HTTP/1.1</li></ul> |

## 지원되는 SSL/TLS 프로토콜 버전 

지원되는 프로토콜 버전은 암호 스위트에 따라 다릅니다. 자세한 내용은 [지원되는 암호 스위트](https://developers.line.biz/en/docs/messaging-api/ssl-tls-spec-of-the-webhook-source/#cipher-suites)에서 "지원되는 SSL/TLS 프로토콜 버전" 열을 참고하십시오.

| 프로토콜 버전 | 지원 여부 |
| ---------------- | --------- |
| TLS 1.3          | ✅        |
| TLS 1.2          | ✅        |
| TLS 1.1 이하     | ❌        |

## 지원되는 HTTP 버전 

지원되는 HTTP 버전은 암호 스위트에 따라 다릅니다. 자세한 내용은 [지원되는 암호 스위트](https://developers.line.biz/en/docs/messaging-api/ssl-tls-spec-of-the-webhook-source/#cipher-suites)에서 "지원되는 HTTP 버전" 열을 참고하십시오.

| HTTP 버전 | 지원 여부 |
| ------------ | --------- |
| HTTP/2       | ✅        |
| HTTP/1.1     | ✅        |
| HTTP/1.0     | ✅        |
