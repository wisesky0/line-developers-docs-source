# Flex Message 요소

Flex Message는 블록을 3단계의 계층 구조로 구성합니다. 최상위는 [컨테이너(container)](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#container)이고, 그다음은 [블록(헤더, 히어로, 바디, 푸터)](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#block)이며, 마지막으로 [컴포넌트(component)](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#component)가 있습니다. 이 페이지에서는 예제를 통해 Flex Message를 구성하는 요소를 설명합니다.

![Flex Message의 구조](https://developers.line.biz/media/messaging-api/using-flex-messages/overviewSample.png)

## 컨테이너 

컨테이너는 Flex Message의 최상위 빌딩 블록입니다. 사용할 수 있는 컨테이너 타입은 다음과 같습니다.

| 타입 | 설명 |
| --- | --- |
| [Bubble](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#bubble) | 하나의 메시지 버블을 표시하는 컨테이너 |
| [Carousel](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#carousel) | 여러 메시지 버블을 가로로 나란히 배치하여 표시하는 컨테이너 |

### Bubble 

Bubble은 하나의 메시지 버블 인스턴스만 포함하는 컨테이너입니다. JSON 스키마에 대한 자세한 내용은 Messaging API 레퍼런스의 [Bubble](https://developers.line.biz/en/reference/messaging-api/#bubble)을 참고하세요.

![Bubble 예제](https://developers.line.biz/media/messaging-api/flex-message-elements/bubbleSample.png)

### Carousel 

Carousel은 여러 개의 bubble을 포함하는 컨테이너입니다. 사용자는 좌우로 스크롤하여 carousel 안의 bubble들을 살펴볼 수 있습니다.

![Carousel 예제](https://developers.line.biz/media/messaging-api/flex-message-elements/carouselSample.png)

이 Flex Message 예제의 JSON 정의는 다음과 같습니다. JSON 스키마에 대한 자세한 내용은 Messaging API 레퍼런스의 [Carousel](https://developers.line.biz/en/reference/messaging-api/#f-carousel)을 참고하세요.

```json
{
  "type": "carousel",
  "contents": [
    {
      "type": "bubble",
      "body": {
        "type": "box",
        "layout": "horizontal",
        "contents": [
          {
            "type": "text",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "wrap": true
          }
        ]
      },
      "footer": {
        "type": "box",
        "layout": "horizontal",
        "contents": [
          {
            "type": "button",
            "style": "primary",
            "action": {
              "type": "uri",
              "label": "Go",
              "uri": "https://example.com"
            }
          }
        ]
      }
    },
    {
      "type": "bubble",
      "body": {
        "type": "box",
        "layout": "horizontal",
        "contents": [
          {
            "type": "text",
            "text": "Hello, World!",
            "wrap": true
          }
        ]
      },
      "footer": {
        "type": "box",
        "layout": "horizontal",
        "contents": [
          {
            "type": "button",
            "style": "primary",
            "action": {
              "type": "uri",
              "label": "Go",
              "uri": "https://example.com"
            }
          }
        ]
      }
    }
  ]
}
```

## 블록 

블록은 bubble을 구성하는 단위입니다. 사용할 수 있는 블록 타입은 다음과 같습니다.

| 타입   | 설명                                               |
| ------ | --------------------------------------------------------- |
| Header | 메시지의 주제 또는 헤더를 표시하는 블록         |
| Hero   | 메인 이미지를 표시하는 블록                        |
| Body   | 메인 메시지를 표시하는 블록                        |
| Footer | 버튼과 부가 정보를 표시하는 블록 |

배치 순서는 header, hero, body, footer입니다. 하나의 메시지 bubble에 모든 블록 타입을 사용할 필요는 없습니다. 다만 사용하는 경우 각 블록 타입은 메시지 bubble에서 한 번만 사용할 수 있습니다. JSON 스키마에 대한 자세한 내용은 Messaging API 레퍼런스의 [Bubble](https://developers.line.biz/en/reference/messaging-api/#bubble)에 있는 `header`, `hero`, `body`, `footer` 속성을 참고하세요.

![블록 스타일 예제](https://developers.line.biz/media/messaging-api/flex-message-elements/blockStylesSample.png)

이 Flex Message 예제의 JSON 정의는 다음과 같습니다.

```json
{
  "type": "bubble",
  "styles": {
    "header": {
      "backgroundColor": "#ffaaaa"
    },
    "body": {
      "backgroundColor": "#aaffaa"
    },
    "footer": {
      "backgroundColor": "#aaaaff"
    }
  },
  "header": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "text",
        "text": "header"
      }
    ]
  },
  "hero": {
    "type": "image",
    "url": "https://example.com/flex/images/image.jpg",
    "size": "full",
    "aspectRatio": "2:1"
  },
  "body": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "text",
        "text": "body"
      }
    ]
  },
  "footer": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "text",
        "text": "footer"
      }
    ]
  }
}
```

## 컴포넌트 

컴포넌트는 [블록](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#block)을 구성하는 단위입니다. 사용할 수 있는 컴포넌트는 다음과 같습니다.

| 컴포넌트 | 설명 |
| --- | --- |
| [Box](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#box) | 가로 또는 세로 레이아웃 방향을 정의하고 컴포넌트들을 함께 담는 컴포넌트입니다. |
| [Button](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#button) | 버튼을 렌더링하는 컴포넌트입니다. 사용자가 버튼을 탭하면 지정된 액션이 실행됩니다. |
| [Image](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#image) | 이미지를 렌더링하는 컴포넌트입니다. |
| [Video](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#video) | 동영상을 렌더링하는 컴포넌트입니다. |
| [Icon](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#icon) | 아이콘을 렌더링하는 컴포넌트입니다. |
| [Text](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#text) | 텍스트 문자열을 렌더링하는 컴포넌트입니다. 글꼴 색상, 크기, 굵기를 지정할 수 있습니다. |
| [Span](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#span) | 서로 다른 스타일의 여러 텍스트 문자열을 렌더링하는 컴포넌트입니다. 글꼴 색상, 크기, 굵기, 장식을 지정할 수 있습니다. |
| [Separator](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#separator) | 구분선을 렌더링하는 컴포넌트입니다. |
| [Filler](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#filler) (사용 중단됨) | 빈 공간을 렌더링하는 컴포넌트입니다. |

### Box 

이 컴포넌트는 가로 또는 세로 레이아웃 방향을 정의하고 컴포넌트들을 함께 담습니다. box를 포함하여 어떤 컴포넌트든 담을 수 있습니다. 레이아웃 정보에 대한 자세한 내용은 [Flex Message 레이아웃](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/)을 참고하세요. JSON 스키마에 대한 자세한 내용은 Messaging API 레퍼런스의 [Box](https://developers.line.biz/en/reference/messaging-api/#box)를 참고하세요.

### Button 

이 컴포넌트는 버튼을 렌더링합니다. 사용자가 버튼을 탭할 때 실행할 [액션](https://developers.line.biz/en/docs/messaging-api/actions/)을 설정할 수 있습니다. 아래와 같이 세 가지 버튼 스타일 중에서 선택할 수 있습니다. 모든 버튼 스타일에서 버튼 색상을 변경할 수 있습니다.

![Button 예제](https://developers.line.biz/media/messaging-api/flex-message-elements/buttonSample.png)

이 Flex Message 예제의 JSON 정의는 다음과 같습니다. JSON 스키마에 대한 자세한 내용은 Messaging API 레퍼런스의 [Button](https://developers.line.biz/en/reference/messaging-api/#button)을 참고하세요.

```json
{
  "type": "bubble",
  "body": {
    "type": "box",
    "layout": "vertical",
    "spacing": "md",
    "contents": [
      {
        "type": "button",
        "style": "primary",
        "action": {
          "type": "uri",
          "label": "Primary style button",
          "uri": "https://example.com"
        }
      },
      {
        "type": "button",
        "style": "secondary",
        "action": {
          "type": "uri",
          "label": "Secondary style button",
          "uri": "https://example.com"
        }
      },
      {
        "type": "button",
        "style": "link",
        "action": {
          "type": "uri",
          "label": "Link style button",
          "uri": "https://example.com"
        }
      }
    ]
  }
}
```

### Image 

이 컴포넌트는 이미지를 렌더링합니다.

![Image 예제](https://developers.line.biz/media/messaging-api/flex-message-elements/imageSample.png)

이 Flex Message 예제의 JSON 정의는 다음과 같습니다. JSON 스키마에 대한 자세한 내용은 Messaging API 레퍼런스의 [Image](https://developers.line.biz/en/reference/messaging-api/#f-image)를 참고하세요.

```json
{
  "type": "bubble",
  "body": {
    "type": "box",
    "layout": "horizontal",
    "contents": [
      {
        "type": "image",
        "url": "https://example.com/flex/images/image.jpg",
        "size": "md"
      }
    ]
  }
}
```

### Video 

이 컴포넌트는 동영상을 렌더링합니다. 동영상 사용에 대한 자세한 내용은 [동영상을 포함한 Flex Message 만들기](https://developers.line.biz/en/docs/messaging-api/create-flex-message-including-video/)를 참고하세요.

![Video 예제](https://developers.line.biz/media/messaging-api/flex-message-elements/video-sample.png)

이 Flex Message 예제의 JSON 정의는 다음과 같습니다. JSON 스키마에 대한 자세한 내용은 Messaging API 레퍼런스의 [Video](https://developers.line.biz/en/reference/messaging-api/#f-video)를 참고하세요.

```json
{
  "type": "bubble",
  "size": "mega",
  "hero": {
    "type": "video",
    "url": "https://example.com/video.mp4",
    "previewUrl": "https://example.com/video_preview.jpg",
    "altContent": {
      "type": "image",
      "size": "full",
      "aspectRatio": "20:13",
      "aspectMode": "cover",
      "url": "https://example.com/image.jpg"
    },
    "aspectRatio": "20:13"
  }
}
```

### Icon 

이 컴포넌트는 인접한 텍스트를 꾸미기 위한 아이콘을 렌더링합니다. 이 컴포넌트는 [baseline box](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#baseline-box) 안에서만 사용할 수 있습니다.

![Icon 예제](https://developers.line.biz/media/messaging-api/flex-message-elements/iconSample.png)

이 Flex Message 예제의 JSON 정의는 다음과 같습니다. JSON 스키마에 대한 자세한 내용은 Messaging API 레퍼런스의 [Icon](https://developers.line.biz/en/reference/messaging-api/#icon)을 참고하세요.

```json
{
  "type": "bubble",
  "body": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "box",
        "layout": "baseline",
        "contents": [
          {
            "type": "icon",
            "url": "https://example.com/flex/images/icon.png",
            "size": "md"
          },
          {
            "type": "text",
            "text": "The quick brown fox jumps over the lazy dog",
            "size": "md"
          }
        ]
      },
      {
        "type": "box",
        "layout": "baseline",
        "contents": [
          {
            "type": "icon",
            "url": "https://example.com/flex/images/icon.png",
            "size": "lg"
          },
          {
            "type": "text",
            "text": "The quick brown fox jumps over the lazy dog",
            "size": "lg"
          }
        ]
      },
      {
        "type": "box",
        "layout": "baseline",
        "contents": [
          {
            "type": "icon",
            "url": "https://example.com/flex/images/icon.png",
            "size": "xl"
          },
          {
            "type": "text",
            "text": "The quick brown fox jumps over the lazy dog",
            "size": "xl"
          }
        ]
      },
      {
        "type": "box",
        "layout": "baseline",
        "contents": [
          {
            "type": "icon",
            "url": "https://example.com/flex/images/icon.png",
            "size": "xxl"
          },
          {
            "type": "text",
            "text": "The quick brown fox jumps over the lazy dog",
            "size": "xxl"
          }
        ]
      },
      {
        "type": "box",
        "layout": "baseline",
        "contents": [
          {
            "type": "icon",
            "url": "https://example.com/flex/images/icon.png",
            "size": "3xl"
          },
          {
            "type": "text",
            "text": "The quick brown fox jumps over the lazy dog",
            "size": "3xl"
          }
        ]
      }
    ]
  }
}
```

### Text 

이 컴포넌트는 텍스트 문자열을 렌더링합니다. 텍스트의 색상, 크기, 굵기를 지정할 수 있습니다. 긴 텍스트를 [줄바꿈(wrap)](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#text-wrap)하고 줄바꿈된 텍스트의 줄 간격을 조정할 수 있습니다.

![Text 예제](https://developers.line.biz/media/messaging-api/flex-message-elements/textSample.png)

이 Flex Message 예제의 JSON 정의는 다음과 같습니다. JSON 스키마에 대한 자세한 내용은 Messaging API 레퍼런스의 [Text](https://developers.line.biz/en/reference/messaging-api/#f-text)를 참고하세요.

```json
{
  "type": "bubble",
  "body": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "text",
        "text": "Closing the distance",
        "size": "md",
        "align": "center",
        "color": "#ff0000"
      },
      {
        "type": "text",
        "text": "Closing the distance",
        "size": "lg",
        "align": "center",
        "color": "#00ff00"
      },
      {
        "type": "text",
        "text": "Closing the distance",
        "size": "xl",
        "align": "center",
        "weight": "bold",
        "color": "#0000ff"
      }
    ]
  }
}
```

#### 텍스트 줄바꿈 

기본적으로 넘치는 텍스트는 말줄임표(...)로 잘립니다. 다음은 긴 텍스트가 표시되는 예입니다.

![줄바꿈하지 않은 예제](https://developers.line.biz/media/messaging-api/flex-message-elements/nowrapSample.png)

이 Flex Message 예제의 JSON 정의는 다음과 같습니다.

```json
{
  "type": "bubble",
  "body": {
    "type": "box",
    "layout": "horizontal",
    "contents": [
      {
        "type": "text",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }
    ]
  }
}
```

잘림을 피하려면 긴 텍스트를 줄바꿈할 수 있습니다. 텍스트를 줄바꿈하려면 `wrap` 속성을 `true`로 설정하세요. 줄바꿈 문자(`\n`)를 사용하여 텍스트의 일부를 새 줄에서 시작하게 할 수도 있습니다. 다음은 텍스트 줄바꿈과 줄바꿈 문자를 적용한 Flex Message 예제입니다.

![줄바꿈한 예제](https://developers.line.biz/media/messaging-api/flex-message-elements/wrap-sample.png)

<!-- note start -->

**참고**

텍스트 끝에 있는 줄바꿈 문자(`\n`)는 기기 환경에 따라 다르게 렌더링될 수 있습니다.

<!-- note end -->

텍스트 줄바꿈 예제의 JSON 정의는 다음과 같습니다. `wrap` 속성이 값 `true`와 함께 추가되었습니다.

```json
{
  "type": "bubble",
  "body": {
    "type": "box",
    "layout": "horizontal",
    "contents": [
      {
        "type": "text",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n tempor incididunt ut labore et dolore magna aliqua.",
        "wrap": true
      }
    ]
  }
}
```

##### 텍스트의 줄 간격 

텍스트를 줄바꿈할 때 `lineSpacing` 속성으로 줄바꿈된 텍스트의 줄 간격을 지정할 수 있습니다.

<!-- note start -->

**줄 간격 적용 범위**

줄 간격은 첫 번째 줄의 위쪽과 마지막 줄의 아래쪽에는 적용되지 않습니다.

<!-- note end -->

![텍스트 줄 간격을 늘린 예제](https://developers.line.biz/media/messaging-api/flex-message-elements/line-spacing-sample.png)

이 Flex Message 예제의 JSON 정의는 다음과 같습니다. `lineSpacing` 속성이 값 `20px`와 함께 추가되었습니다.

```json
{
  "type": "bubble",
  "body": {
    "type": "box",
    "layout": "horizontal",
    "contents": [
      {
        "type": "text",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n tempor incididunt ut labore et dolore magna aliqua.",
        "wrap": true,
        "lineSpacing": "20px"
      }
    ]
  }
}
```

### Span 

이 컴포넌트는 서로 다른 스타일의 여러 텍스트 문자열을 렌더링합니다. 각 텍스트의 색상, 크기, 굵기, 장식을 지정할 수 있습니다. Span은 [text](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#text)의 `contents` 속성에 설정합니다.

![Span 예제](https://developers.line.biz/media/messaging-api/flex-message-elements/spanSample.png)

이 Flex Message 예제의 JSON 정의는 다음과 같습니다. JSON 스키마에 대한 자세한 내용은 Messaging API 레퍼런스의 [Span](https://developers.line.biz/en/reference/messaging-api/#span)을 참고하세요.

```json
{
  "type": "bubble",
  "body": {
    "type": "box",
    "layout": "horizontal",
    "contents": [
      {
        "type": "text",
        "text": "hello, world",
        "contents": [
          {
            "type": "span",
            "text": "Hello, world!",
            "decoration": "line-through"
          },
          {
            "type": "span",
            "text": "\nClosing",
            "color": "#ff0000",
            "size": "sm",
            "weight": "bold",
            "decoration": "none"
          },
          {
            "type": "span",
            "text": " "
          },
          {
            "type": "span",
            "text": "the",
            "size": "lg",
            "color": "#00ff00",
            "decoration": "underline",
            "weight": "bold"
          },
          {
            "type": "span",
            "text": " "
          },
          {
            "type": "span",
            "text": "distance",
            "color": "#0000ff",
            "weight": "bold",
            "size": "xxl"
          }
        ],
        "wrap": true,
        "align": "center"
      }
    ]
  }
}
```

### Separator 

이 컴포넌트는 [box](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#box) 안에 구분선을 렌더링합니다. 가로 레이아웃의 box에 포함되면 세로선이 그려지고, 마찬가지로 세로 레이아웃의 box에 포함되면 가로선이 그려집니다.

![Separator 예제](https://developers.line.biz/media/messaging-api/flex-message-elements/separatorSample.png)

이 Flex Message 예제의 JSON 정의는 다음과 같습니다. JSON 스키마에 대한 자세한 내용은 Messaging API 레퍼런스의 [Separator](https://developers.line.biz/en/reference/messaging-api/#separator)를 참고하세요.

```json
{
  "type": "bubble",
  "body": {
    "type": "box",
    "layout": "vertical",
    "spacing": "md",
    "contents": [
      {
        "type": "box",
        "layout": "horizontal",
        "spacing": "md",
        "contents": [
          {
            "type": "text",
            "text": "orange"
          },
          {
            "type": "separator"
          },
          {
            "type": "text",
            "text": "apple"
          }
        ]
      },
      {
        "type": "separator"
      },
      {
        "type": "box",
        "layout": "horizontal",
        "spacing": "md",
        "contents": [
          {
            "type": "text",
            "text": "grape"
          },
          {
            "type": "separator"
          },
          {
            "type": "text",
            "text": "lemon"
          }
        ]
      }
    ]
  }
}
```

### Filler 

<!-- warning start -->

**Filler는 사용 중단되었습니다**

공간을 추가하려면 filler를 추가하는 대신 각 컴포넌트의 속성을 사용하세요. 자세한 내용은 [컴포넌트 위치](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#component-position)를 참고하세요.

<!-- warning end -->

이 컴포넌트는 빈 공간을 렌더링합니다. [box](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#box) 안에서 컴포넌트 사이, 앞, 또는 뒤에 공간을 둘 수 있습니다. 아래 예제는 두 [이미지](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#image) 사이에 filler를 둔 box를 보여줍니다.

![Filler 예제](https://developers.line.biz/media/messaging-api/flex-message-elements/fillerSample.png)

이 Flex Message 예제의 JSON 정의는 다음과 같습니다. JSON 스키마에 대한 자세한 내용은 Messaging API 레퍼런스의 [Filler](https://developers.line.biz/en/reference/messaging-api/#filler)를 참고하세요.

```json
{
  "type": "bubble",
  "body": {
    "type": "box",
    "layout": "horizontal",
    "contents": [
      {
        "type": "image",
        "url": "https://example.com/flex/images/image.jpg"
      },
      {
        "type": "filler"
      },
      {
        "type": "image",
        "url": "https://example.com/flex/images/image.jpg"
      }
    ]
  }
}
```

## 더 알아보기 

- [Flex Message 보내기](https://developers.line.biz/en/docs/messaging-api/using-flex-messages/)
- [Flex Message 레이아웃](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/)
- [Flex Message](https://developers.line.biz/en/reference/messaging-api/#flex-message) (Messaging API 레퍼런스)
