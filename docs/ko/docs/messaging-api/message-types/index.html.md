# 메시지 타입

Messaging API를 사용하면 봇이 다음 유형의 메시지를 보내도록 할 수 있습니다. 메시지를 대화형으로 만들려면 사용자가 트리거할 수 있는 액션을 메시지에 지정할 수 있습니다. 각 메시지 유형의 사양은 Messaging API 레퍼런스의 [메시지 객체](https://developers.line.biz/en/reference/messaging-api/#message-objects)를 참고하세요.

- [텍스트 메시지](https://developers.line.biz/en/docs/messaging-api/message-types/#text-messages)
- [텍스트 메시지(v2)](https://developers.line.biz/en/docs/messaging-api/message-types/#text-messages-v2)
- [스티커 메시지](https://developers.line.biz/en/docs/messaging-api/message-types/#sticker-messages)
- [이미지 메시지](https://developers.line.biz/en/docs/messaging-api/message-types/#image-messages)
- [동영상 메시지](https://developers.line.biz/en/docs/messaging-api/message-types/#video-messages)
- [오디오 메시지](https://developers.line.biz/en/docs/messaging-api/message-types/#audio-messages)
- [위치 메시지](https://developers.line.biz/en/docs/messaging-api/message-types/#location-messages)
- [쿠폰 메시지](https://developers.line.biz/en/docs/messaging-api/message-types/#coupon-messages)
- [이미지맵 메시지](https://developers.line.biz/en/docs/messaging-api/message-types/#imagemap-messages)
- [템플릿 메시지](https://developers.line.biz/en/docs/messaging-api/message-types/#template-messages)
- [Flex Message](https://developers.line.biz/en/docs/messaging-api/message-types/#flex-messages)

## 텍스트 메시지 

텍스트 메시지에는 이모지를 포함한 텍스트가 들어갑니다. 텍스트 메시지를 보내려면 Messaging API로 보내는 [메시지 객체](https://developers.line.biz/en/reference/messaging-api/#message-objects)에 텍스트를 추가하세요. 자세한 내용은 Messaging API 레퍼런스의 [텍스트 메시지](https://developers.line.biz/en/reference/messaging-api/#text-message)를 참고하세요.

![텍스트 메시지](https://developers.line.biz/media/messaging-api/messages/text.png)

텍스트 메시지에는 LINE 이모지와 유니코드 이모지를 사용할 수 있습니다. Messaging API로 보낼 수 있는 [LINE 이모지](https://developers.line.biz/en/docs/messaging-api/emoji-list/) 목록을 확인하세요.

![이모지](https://developers.line.biz/media/messaging-api/messages/emoji.png)

<!-- tip start -->

**텍스트 꾸미기 및 크기 조정**

텍스트를 꾸미거나 크기를 조정하려면 [Flex Message](https://developers.line.biz/en/reference/messaging-api/#flex-message)를 사용하세요.

<!-- tip end -->

## 텍스트 메시지(v2) 

텍스트 메시지(v2)를 사용하여 텍스트를 보낼 수 있습니다. [텍스트 메시지](https://developers.line.biz/en/docs/messaging-api/message-types/#text-messages)와 달리, `{`와 `}`로 둘러싸인 문자열을 멘션과 이모지로 바꿀 수 있습니다. 자세한 내용은 Messaging API 레퍼런스의 [텍스트 메시지(v2)](https://developers.line.biz/en/reference/messaging-api/#text-message-v2)를 참고하세요.

![텍스트 메시지(v2)](https://developers.line.biz/media/messaging-api/messages/text-v2.png)

지금까지 제공해 온 텍스트 메시지는 계속 사용할 수 있습니다. 하지만 앞으로 텍스트 메시지(v2)에만 새로운 기능을 추가할 수 있습니다.

## 스티커 메시지 

스티커는 봇을 사용자에게 더 매력적이고 재미있게 만들어 줍니다. Messaging API로 스티커를 보내려면 [메시지 객체](https://developers.line.biz/en/reference/messaging-api/#message-objects)에 스티커의 패키지 ID와 스티커 ID를 지정하세요. 보낼 수 있는 [스티커](https://developers.line.biz/en/docs/messaging-api/sticker-list/) 목록을 확인하세요. 자세한 내용은 Messaging API 레퍼런스의 [스티커 메시지](https://developers.line.biz/en/reference/messaging-api/#sticker-message)를 참고하세요.

![스티커 메시지](https://developers.line.biz/media/messaging-api/messages/sticker.webp)

## 이미지 메시지 

이미지 메시지는 이미지 파일 하나를 사용자에게 전달합니다. 이미지를 보낼 때는 [메시지 객체](https://developers.line.biz/en/reference/messaging-api/#message-objects)에 URL 두 개를 지정합니다. 하나는 원본 이미지용이고 다른 하나는 미리보기용입니다. 미리보기 이미지는 채팅에 표시되는 이미지이므로 원본 이미지보다 작은 이미지를 지정하세요.

사용자가 미리보기 이미지를 탭하면 아래와 같이 원본 이미지가 표시됩니다. URL은 반드시 HTTPS(TLS 1.2 이상) 프로토콜을 사용해야 합니다. 자세한 내용은 Messaging API 레퍼런스의 [이미지 메시지](https://developers.line.biz/en/reference/messaging-api/#image-message)를 참고하세요.

![이미지 메시지](https://developers.line.biz/media/messaging-api/messages/image.png) ![원본 이미지 메시지](https://developers.line.biz/media/messaging-api/messages/image-full.webp)

## 동영상 메시지 

동영상 메시지는 동영상 파일 하나를 사용자에게 전달합니다. 동영상 메시지를 보낼 때는 [메시지 객체](https://developers.line.biz/en/reference/messaging-api/#message-objects)에 URL 두 개를 지정합니다. 하나는 동영상 파일용이고 다른 하나는 미리보기용입니다.

사용자가 미리보기를 탭하면 LINE이 동영상을 재생합니다. URL은 반드시 HTTPS(TLS 1.2 이상) 프로토콜을 사용해야 합니다. 자세한 내용은 Messaging API 레퍼런스의 [동영상 메시지](https://developers.line.biz/en/reference/messaging-api/#video-message)를 참고하세요.

![동영상 메시지](https://developers.line.biz/media/messaging-api/messages/video.png)

## 오디오 메시지 

오디오 메시지는 오디오 파일 하나를 사용자에게 전달합니다. 오디오 파일을 보내려면 [메시지 객체](https://developers.line.biz/en/reference/messaging-api/#message-objects)에 파일의 URL과 재생 시간을 지정하세요.

URL은 반드시 HTTPS(TLS 1.2 이상) 프로토콜을 사용해야 합니다. 자세한 내용은 Messaging API 레퍼런스의 [오디오 메시지](https://developers.line.biz/en/reference/messaging-api/#audio-message)를 참고하세요.

![오디오 메시지](https://developers.line.biz/media/messaging-api/messages/audio.png)

## 위치 메시지 

위치 메시지는 사용자에게 위치 정보를 전달합니다. [메시지 객체](https://developers.line.biz/en/reference/messaging-api/#message-objects)에 제목, 주소, 위도, 경도를 지정하세요. 자세한 내용은 Messaging API 레퍼런스의 [위치 메시지](https://developers.line.biz/en/reference/messaging-api/#location-message)를 참고하세요.

![위치 메시지](https://developers.line.biz/media/messaging-api/messages/location-en.webp)

## 쿠폰 메시지 

쿠폰 메시지는 쿠폰 ID를 지정하여 사용자에게 쿠폰을 전달합니다.

![쿠폰 메시지 예제](https://developers.line.biz/media/messaging-api/coupon/several-coupons.webp)

자세한 내용은 Messaging API 레퍼런스의 [쿠폰 메시지](https://developers.line.biz/en/reference/messaging-api/#coupon-message)를 참고하세요.

## 이미지맵 메시지 

이미지맵 메시지는 탭할 수 있는 영역이 여러 개 있는 이미지가 포함된 메시지입니다. 탭 영역을 설정하여 웹페이지를 열거나 사용자를 대신하여 메시지를 보낼 수 있습니다. 또한 이미지 위에서 동영상을 재생하고, 재생이 끝나면 링크 텍스트를 표시하도록 설정할 수도 있습니다. 자세한 내용은 Messaging API 레퍼런스의 [이미지맵 메시지](https://developers.line.biz/en/reference/messaging-api/#imagemap-message)를 참고하세요.

![이미지맵 메시지](https://developers.line.biz/media/messaging-api/messages/imagemap.webp)

## 템플릿 메시지 

템플릿 메시지는 미리 정의된 레이아웃을 제공하여 사용자에게 더 풍부한 경험을 만들 수 있도록 도와줍니다. [액션](https://developers.line.biz/en/docs/messaging-api/actions/)을 사용하여 사용자가 봇과 상호작용하도록 할 수 있습니다. 사용자는 한 번 탭하기만 하면 액션을 트리거할 수 있으므로, 메시지를 직접 입력하는 것보다 훨씬 간단합니다.

사용할 수 있는 템플릿은 다음과 같습니다.

- [버튼](https://developers.line.biz/en/docs/messaging-api/message-types/#buttons-template)
- [확인](https://developers.line.biz/en/docs/messaging-api/message-types/#confirm-template)
- [캐러셀](https://developers.line.biz/en/docs/messaging-api/message-types/#carousel-template)
- [이미지 캐러셀](https://developers.line.biz/en/docs/messaging-api/message-types/#image-carousel-template)

템플릿 메시지에 대한 자세한 내용은 Messaging API 레퍼런스의 [템플릿 메시지](https://developers.line.biz/en/reference/messaging-api/#template-messages)를 참고하세요. 또한 더 유연한 레이아웃의 메시지를 보내려면 [Flex Message](https://developers.line.biz/en/docs/messaging-api/message-types/#flex-messages)를 사용하세요.

### 버튼 템플릿 

버튼 템플릿에는 이미지, 제목, 텍스트, [액션](https://developers.line.biz/en/docs/messaging-api/actions/) 버튼을 넣을 수 있는 영역이 있습니다. 버튼뿐 아니라 이미지, 제목, 텍스트 영역에도 액션을 설정할 수 있습니다. 액션이 설정된 항목을 사용자가 탭하면 액션이 트리거됩니다. 자세한 내용은 Messaging API 레퍼런스의 [버튼 템플릿](https://developers.line.biz/en/reference/messaging-api/#buttons)을 참고하세요.

![버튼 템플릿 메시지](https://developers.line.biz/media/messaging-api/messages/buttons.webp)

### 확인 템플릿 

확인 템플릿에는 텍스트와 버튼 두 개를 넣을 수 있는 영역이 있습니다. 자세한 내용은 Messaging API 레퍼런스의 [확인 템플릿](https://developers.line.biz/en/reference/messaging-api/#confirm)을 참고하세요.

![확인 템플릿 메시지](https://developers.line.biz/media/messaging-api/messages/confirm.png)

### 캐러셀 템플릿 

캐러셀 템플릿에는 사용자가 넘겨 볼 수 있는 여러 개의 열(column)이 있습니다. 버튼뿐 아니라 각 열 객체에도 [액션](https://developers.line.biz/en/docs/messaging-api/actions/)을 설정할 수 있습니다.

사용자가 열 객체의 이미지, 제목, 텍스트 영역 어디든 탭하면 액션이 트리거됩니다. 자세한 내용은 Messaging API 레퍼런스의 [캐러셀 템플릿](https://developers.line.biz/en/reference/messaging-api/#carousel)을 참고하세요.

![캐러셀 템플릿 메시지](https://developers.line.biz/media/messaging-api/messages/carousel.webp)

### 이미지 캐러셀 템플릿 

이미지 캐러셀 템플릿에는 사용자가 넘겨 볼 수 있는 여러 개의 이미지가 있습니다. 자세한 내용은 Messaging API 레퍼런스의 [이미지 캐러셀 템플릿](https://developers.line.biz/en/reference/messaging-api/#image-carousel)을 참고하세요.

![이미지 캐러셀 템플릿 메시지](https://developers.line.biz/media/messaging-api/messages/image-carousel.webp)

## Flex Message 

Flex Message는 레이아웃을 맞춤 설정할 수 있는 메시지입니다. [CSS Flexible Box(CSS Flexbox)](https://www.w3.org/TR/css-flexbox-1/) 사양의 범위 안에서 레이아웃을 맞춤 설정할 수 있습니다. 자세한 내용은 [Flex Message 보내기](https://developers.line.biz/en/docs/messaging-api/using-flex-messages/)와 Messaging API 레퍼런스의 [Flex Message](https://developers.line.biz/en/reference/messaging-api/#flex-message)를 참고하세요.

![Flex Message 예제](https://developers.line.biz/media/messaging-api/using-flex-messages/bubbleSamples-Update1.webp)

## 공통 기능 

이 기능은 모든 메시지 유형에 적용할 수 있습니다.

### 빠른 답장 

빠른 답장 버튼은 모든 메시지 유형에서 사용할 수 있으며, 채팅 하단에 표시됩니다. 사용자는 버튼 중 하나를 탭하여 봇에 응답할 수 있습니다. 자세한 내용은 [빠른 답장 사용하기](https://developers.line.biz/en/docs/messaging-api/using-quick-reply/) 및 Messaging API 레퍼런스의 [빠른 답장](https://developers.line.biz/en/reference/messaging-api/#quick-reply)을 참고하세요.

![빠른 답장 예제](https://developers.line.biz/media/messaging-api/using-quick-reply/quickReplySample.png)

## 관련 페이지 

Messaging API에 대해 더 알아보세요.

- [메시지 보내기](https://developers.line.biz/en/docs/messaging-api/sending-messages/)
- [메시지 객체](https://developers.line.biz/en/reference/messaging-api/#message-objects)
- [액션](https://developers.line.biz/en/docs/messaging-api/actions/)
