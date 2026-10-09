# Flex Message 레이아웃

Flex Message의 복잡한 레이아웃은 [CSS Flexible Box(CSS flexbox)](https://www.w3.org/TR/css-flexbox-1/) 사양을 기반으로 구성할 수 있습니다. CSS flexbox의 flex 컨테이너와 flex 아이템은 각각 [box 컴포넌트](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#box)와 Flex Message의 컴포넌트에 대응합니다.

Flex Message의 레이아웃을 구성하는 방법을 알아보세요. JSON 스키마에 대한 자세한 내용은 Messaging API 레퍼런스의 [Flex Message](https://developers.line.biz/en/reference/messaging-api/#flex-message)를 참고하세요.

## Box 컴포넌트의 방향 

[Box 컴포넌트](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#box)에는 가로 방향과 세로 방향이 있습니다. 가로 방향의 box를 가로 box(horizontal box), 세로 방향의 box를 세로 box(vertical box)라고 합니다. 방향은 box의 주축(main axis)과 교차축(cross axis)을 결정합니다. 주축은 방향과 평행하며, 가로 box의 주축은 가로 방향이고 세로 box의 주축은 세로 방향입니다. 교차축은 주축과 수직입니다. 주축은 box의 하위 컴포넌트가 배치되는 방식을 결정합니다. 자세한 내용은 [남는 공간이 있을 때 하위 컴포넌트 배치](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#justify-property)를 참고하세요.

box 컴포넌트의 `layout` 속성에 방향을 지정해야 합니다. 가로 box와 세로 box 외에 baseline box도 사용할 수 있습니다.

| Box | `layout` 속성 | 주축 | 교차축 | 하위 컴포넌트 배치 |
| --- | --- | --- | --- | --- |
| 가로 box | `horizontal` | 가로 | 세로 | 가로로 배치 |
| 세로 box | `vertical` | 세로 | 가로 | 세로로 배치 |
| Baseline box | `baseline` | 가로 | 세로 | 가로로 배치<br />자세한 내용은 [baseline box의 하위 컴포넌트](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#baseline-box)를 참고하세요. |

### Baseline box의 하위 컴포넌트 

Baseline box는 가로 box와 같은 방식으로 동작합니다. 다만 다음과 같은 점에서 가로 box와 다르게 동작합니다.

#### 세로 정렬 위치 

Baseline box 안의 컴포넌트들은 같은 baseline을 기준으로 세로 정렬됩니다. 즉, 글꼴 크기와 관계없이 모든 하위 컴포넌트가 같은 baseline을 사용합니다. [icon 컴포넌트](https://developers.line.biz/en/reference/messaging-api/#icon)의 baseline은 아이콘 이미지의 아래쪽입니다.

![Baseline 설명](https://developers.line.biz/media/messaging-api/flex-message-layout/baseline.png)

#### 사용할 수 없는 속성 

Baseline box 컴포넌트의 하위 컴포넌트에서는 `gravity` 및 `offsetBottom` 속성을 사용할 수 없습니다.

## 사용 가능한 하위 컴포넌트 

box의 `layout` 속성에 따라 box 컴포넌트의 하위 컴포넌트로 사용할 수 있는 컴포넌트가 결정됩니다.

| &nbsp; | Baseline box | 가로 box<br >세로 box |
| --- | :-: | :-: |
| [Box](https://developers.line.biz/en/reference/messaging-api/#box) | ❌ | ✅ |
| [Button](https://developers.line.biz/en/reference/messaging-api/#button) | ❌ | ✅ |
| [Image](https://developers.line.biz/en/reference/messaging-api/#f-image) | ❌ | ✅ |
| [Icon](https://developers.line.biz/en/reference/messaging-api/#icon) | ✅ | ❌ |
| [Text](https://developers.line.biz/en/reference/messaging-api/#f-text) | ✅ | ✅ |
| [Span](https://developers.line.biz/en/reference/messaging-api/#span)<br />(text 컴포넌트의 하위 컴포넌트로 사용하는 것은 가능) | ❌ | ❌ |
| [Separator](https://developers.line.biz/en/reference/messaging-api/#separator) | ❌ | ✅ |
| [Filler](https://developers.line.biz/en/reference/messaging-api/#filler) (사용 중단됨) | ✅ | ✅ |

✅: box에서 이 컴포넌트를 사용할 수 있음 ❌: box에서 이 컴포넌트를 사용할 수 없음

## 컴포넌트 크기 

컴포넌트의 `position` 속성이 `relative`로 설정되어 있으면, 컴포넌트의 너비와 높이는 컴포넌트의 `flex` 속성에 따라 결정됩니다.

- [가로 box에서의 너비 할당](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#horizontal-box)
- [세로 box에서의 높이 할당](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#vertical-box)
- [Box 너비](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#box-width)
- [Box의 최대 너비](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#box-max-width)
- [Box 높이](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#box-height)
- [Box의 최대 높이](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#box-max-height)
- [이미지 크기](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#image-size)
- [Icon, text, span 크기](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#other-component-size)
- [기타 컴포넌트의 크기](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#other-component)
- [글꼴 크기에 맞춰 자동 축소](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#adjusts-fontsize-to-fit)
- [글꼴 크기 설정에 따른 크기 조정](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#size-scaling)

### 가로 box에서의 너비 할당 

가로 box에서 `flex` 속성이 `1` 이상인 하위 컴포넌트는 형제 컴포넌트와 상위 box의 너비를 나눠 가집니다. `flex` 속성의 기본값은 `1`입니다. 각 하위 컴포넌트가 가지는 너비의 비율은 해당 컴포넌트의 `flex` 속성 값을 `flex` 속성 값들의 합으로 나눈 값으로 결정됩니다.

가로 box에 `flex` 속성이 각각 `2`와 `3`인 컴포넌트 두 개가 있다고 가정해 봅시다. 이 경우 사용 가능한 너비(가로 box의 너비)는 2 대 3의 비율로 나뉘어 각 컴포넌트에 할당됩니다.

![Flex 예제 1](https://developers.line.biz/media/messaging-api/flex-message-layout/flexSample1.png)

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
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "wrap": true,
        "color": "#ff0000",
        "flex": 2
      },
      {
        "type": "text",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "wrap": true,
        "color": "#0000ff",
        "flex": 3
      }
    ]
  }
}
```

컴포넌트의 `flex` 속성이 `0`이면, 상위 box의 너비 안에서 컴포넌트의 모든 내용을 표시하는 데 필요한 너비를 차지합니다. 다만 box의 너비를 벗어나는 부분은 표시되지 않습니다.

예를 들어 가로 box에 `flex` 속성이 각각 `0`, `2`, `3`인 하위 컴포넌트 세 개가 있다고 가정해 봅시다. 첫 번째 컴포넌트는 `flex` 속성이 `0`이므로 텍스트 "Hello"에 맞는 너비를 차지합니다. 그다음 남은 너비를 2 대 3의 비율로 나머지 두 컴포넌트가 나눠 가집니다. 아래 그림과 같습니다.

![Flex 예제 2](https://developers.line.biz/media/messaging-api/flex-message-layout/flexSample2.png)

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
        "text": "Hello",
        "color": "#00ff00",
        "flex": 0
      },
      {
        "type": "text",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "wrap": true,
        "color": "#ff0000",
        "flex": 2
      },
      {
        "type": "text",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "wrap": true,
        "color": "#0000ff",
        "flex": 3
      }
    ]
  }
}
```

<!-- tip start -->

**flex 속성과 CSS flexbox**

가로 box 하위 컴포넌트의 `flex` 속성은 다음과 같이 CSS flexbox의 `flex` 속성과 대응합니다.

| Flex Message 하위 컴포넌트의 `flex` 속성 값 | 대응하는 CSS flexbox 스타일 |
| :-: | --- |
| `0` | `flex: 0 0 auto;` |
| `0` 이상 | `flex: X 0 0;` (X는 하위 컴포넌트의 `flex` 값) |

<!-- tip end -->

### 세로 box에서의 높이 할당 

세로 box에서 `flex` 속성이 `1` 이상인 하위 컴포넌트는 형제 컴포넌트와 상위 box의 높이를 나눠 가집니다. `flex` 속성의 기본값은 `0`입니다. 각 하위 컴포넌트가 가지는 높이의 비율은 해당 컴포넌트의 `flex` 속성 값을 `flex` 속성 값들의 합으로 나눈 값으로 결정됩니다.

아래 예제에서 가로 box에는 세로 box가 두 개 있습니다. 첫 번째 세로 box에는 다섯 줄을 차지하는 텍스트가 있고, 두 번째 세로 box에는 텍스트 두 개와 구분선 세 개가 있습니다.

![Flex 예제 5](https://developers.line.biz/media/messaging-api/flex-message-layout/flexSample5.png)

각 컴포넌트는 다음 규칙에 따라 배치됩니다.

1. 왼쪽 세로 box의 높이는 다섯 줄 높이입니다. 이에 따라 오른쪽 세로 box의 높이도 같아집니다.
1. 오른쪽 세로 box의 하위 컴포넌트가 전체 높이를 모두 차지할 필요는 없으므로 여백이 생깁니다.
1. 이 여백은 두 텍스트 컴포넌트에 `flex` 속성 값(각각 `2`와 `3`)에 따라 2:3 비율로 나뉘어 할당됩니다.

이 Flex Message 예제의 JSON 정의는 다음과 같습니다.

```json
{
  "type": "bubble",
  "body": {
    "type": "box",
    "layout": "horizontal",
    "contents": [
      {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "wrap": true,
            "text": "TEXT\nTEXT\nTEXT\nTEXT\nTEXT"
          }
        ],
        "backgroundColor": "#c0c0c0"
      },
      {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "separator",
            "color": "#ff0000"
          },
          {
            "type": "text",
            "text": "flex=2",
            "flex": 2
          },
          {
            "type": "separator",
            "color": "#ff0000"
          },
          {
            "type": "text",
            "text": "flex=3",
            "flex": 3
          },
          {
            "type": "separator",
            "color": "#ff0000"
          }
        ]
      }
    ]
  }
}
```

<!-- tip start -->

**flex 속성과 CSS flexbox**

세로 box 하위 컴포넌트의 `flex` 속성은 다음과 같이 CSS flexbox의 `flex`와 대응합니다.

| Flex Message 하위 컴포넌트의 `flex` 속성 값 | 대응하는 CSS flexbox 스타일 |
| :-: | --- |
| `0` | `flex: 0 0 auto;` |
| `0` 이상 | `flex: X 0 auto;` (X는 하위 컴포넌트의 `flex` 값) |

<!-- tip end -->

### Box 너비 

`width` 속성으로 box의 너비를 픽셀 단위 또는 상위 컴포넌트 너비에 대한 백분율로 지정할 수 있습니다. 가로 box 안의 하위 box에 너비를 지정하면, 그 하위 box의 `flex` 속성은 `0`으로 설정됩니다.

<!-- note start -->

**픽셀 단위 width 속성**

bubble의 너비는 기기 화면 크기에 따라 달라집니다. bubble 전체 레이아웃을 조정하려고 `width` 속성을 픽셀 단위로 지정하면 예상과 다른 레이아웃이 나타날 수 있습니다. 기기 화면 크기의 영향을 덜 받으려면 `flex` 속성을 사용하는 것을 권장합니다.

<!-- note end -->

### Box의 최대 너비 

`maxWidth` 속성으로 box의 최대 너비를 픽셀 단위 또는 상위 컴포넌트 너비에 대한 백분율로 지정할 수 있습니다. `maxWidth`는 `width` 속성보다 우선합니다. `width` 속성으로 계산한 너비가 최대 너비보다 크면 box 너비는 `maxWidth` 속성 값으로 설정됩니다.

### Box 높이 

`height` 속성으로 box의 높이를 픽셀 단위 또는 상위 컴포넌트 높이에 대한 백분율로 지정할 수 있습니다. 가로 box 안의 하위 box에 높이를 지정하면, 그 하위 box의 `flex` 속성은 `0`으로 설정됩니다.

### Box의 최대 높이 

`maxHeight` 속성으로 box의 최대 높이를 픽셀 단위 또는 상위 컴포넌트 높이에 대한 백분율로 지정할 수 있습니다. `maxHeight`는 `height` 속성보다 우선합니다. `height` 속성으로 계산한 높이가 최대 높이보다 크면 box 높이는 `maxHeight` 속성 값으로 설정됩니다.

### 이미지 크기 

`size` 속성으로 [image 컴포넌트](https://developers.line.biz/en/reference/messaging-api/#f-image)의 너비를 픽셀 단위, 백분율 또는 키워드로 지정할 수 있습니다. 높이는 가로세로 비율(`aspectRatio` 속성에 지정된 값)을 유지하도록 자동으로 조정됩니다.

| 단위 | 허용되는 값 | 예시 |
| --- | --- | :-: |
| 백분율 | 원본 이미지 너비에 대한 백분율로, 양의 정수 또는 소수에 `%`를 붙입니다. | `50%` `23.5%` |
| 픽셀 | 양의 정수 또는 소수에 `px`를 붙입니다. | `50px` `23.5px` |
| 키워드 | 크기가 커지는 순서대로 나열된 다음 값 중 하나: `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl`, `3xl`, `4xl`, `5xl`, `full` | `md` (기본값) |

### Icon, text, span 크기 

`size` 속성으로 [icon](https://developers.line.biz/en/reference/messaging-api/#icon), [text](https://developers.line.biz/en/reference/messaging-api/#f-text), [span](https://developers.line.biz/en/reference/messaging-api/#span) 컴포넌트의 크기를 픽셀 단위 또는 키워드로 지정할 수 있습니다. 백분율은 지정할 수 없습니다.

| 단위 | 허용되는 값 | 예시 |
| --- | --- | :-: |
| 픽셀 | 양의 정수 또는 소수에 `px`를 붙입니다. | `50px` `23.5px` |
| 키워드 | 크기가 커지는 순서대로 나열된 다음 값 중 하나: `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl`, `3xl`, `4xl`, `5xl` | `md` (기본값) |

### 기타 컴포넌트의 크기 

button과 같은 컴포넌트는 `flex` 이외의 속성으로 컴포넌트 크기를 지정할 수 있습니다. JSON 스키마에 대한 자세한 내용은 Messaging API 레퍼런스의 [Flex Message](https://developers.line.biz/en/reference/messaging-api/#flex-message)를 참고하세요.

### 글꼴 크기에 맞춰 자동 축소 

[button](https://developers.line.biz/en/reference/messaging-api/#button) 및 [text](https://developers.line.biz/en/reference/messaging-api/#f-text) 컴포넌트의 `adjustMode` 속성에 `shrink-to-fit` 값을 지정하면, 텍스트의 글꼴 크기가 자동으로 줄어들어 맞춰집니다. `adjustMode` 속성은 '최선 노력(best-effort)' 방식으로 동작하므로, 플랫폼에 따라 다르게 동작하거나 동작하지 않을 수도 있습니다.

![글꼴 자동 축소 예제](https://developers.line.biz/media/messaging-api/flex-message-layout/adjusts-fontsize-to-fit.png)

### 글꼴 크기 설정에 따른 크기 조정 

Flex Message의 [button](https://developers.line.biz/en/reference/messaging-api/#button), [text](https://developers.line.biz/en/reference/messaging-api/#f-text), [icon](https://developers.line.biz/en/reference/messaging-api/#icon) 컴포넌트의 `scaling` 속성을 `true`로 설정하면, LINE 앱의 글꼴 크기 설정에 따라 글꼴 크기와 아이콘 크기가 자동으로 조정됩니다. 이를 통해 접근성을 고려한 메시지를 보낼 수 있습니다.

| 글꼴 크기 **작게**의 예 | 글꼴 크기 **매우 크게**의 예 |
| --- | --- |
| ![작은 글꼴 크기 예제](https://developers.line.biz/media/messaging-api/flex-message-layout/scaling-sample-small-en.jpg) | ![매우 큰 글꼴 크기 예제](https://developers.line.biz/media/messaging-api/flex-message-layout/scaling-sample-extra-large-en.jpg) |

이 Flex Message 예제의 JSON 정의는 다음과 같습니다.

```json
{
  "type": "bubble",
  "body": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "text",
        "text": "hello, world",
        "size": "30px"
      },
      {
        "type": "text",
        "text": "hello, world",
        "margin": "10px",
        "size": "30px",
        "scaling": true
      }
    ]
  }
}
```

<!-- tip start -->

**글꼴 자동 축소와 함께 사용하기**

button과 text에서 `scaling` 속성을 `true`로, `adjustMode` 속성을 `shrink-to-fit`으로 함께 설정할 수 있습니다. 이 경우 자동 글꼴 크기 조정으로 텍스트 너비가 컴포넌트 너비를 넘으면, 컴포넌트 너비에 맞게 글꼴 크기가 줄어듭니다.

다음은 LINE 앱의 **매우 크게** 글꼴 크기 설정을 적용한 예입니다.

| | |
| --- | --- |
| ![기본 설정 예제](https://developers.line.biz/media/messaging-api/flex-message-layout/scaling-sample-small-tip.png) | <ol><li>기본값</li><li>`scaling` 속성을 `true`로 설정한 경우</li><li>`scaling` 속성을 `true`로, `adjustMode` 속성을 `shrink-to-fit`으로 설정한 경우</li></ol> |

<!-- tip end -->

## 컴포넌트 위치 

하위 컴포넌트가 있는 box에 남은 공간이 있으면, 각 하위 컴포넌트를 [가로](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#align-property) 또는 [세로](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#gravity-property)로 정렬할 수 있습니다.

하위 컴포넌트의 위치를 지정하려면 상위 컴포넌트의 [padding](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#padding-property) 또는 하위 컴포넌트의 [`margin` 속성](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#margin-property)을 사용할 수 있습니다. [주축](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#justify-content)과 [교차축](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#align-items)에서 하위 컴포넌트를 분산 배치할 수도 있습니다. 또한 [offset](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#component-offset)을 사용하여 하위 컴포넌트의 위치를 지정할 수도 있습니다.

### 텍스트 또는 이미지 가로 정렬 

[text](https://developers.line.biz/en/reference/messaging-api/#f-text) 또는 [image](https://developers.line.biz/en/reference/messaging-api/#f-image) 컴포넌트를 가로로 정렬하려면 `align` 속성을 사용합니다. 이 속성은 상위 컴포넌트의 방향과 관계없이 적용됩니다. 사용할 수 있는 정렬 옵션은 다음과 같습니다.

- 왼쪽 정렬: `start`
- 오른쪽 정렬: `end`
- 가운데 정렬: `center` (기본값)

![align 예제](https://developers.line.biz/media/messaging-api/flex-message-layout/alignSample.png)

이 Flex Message 예제의 JSON 정의는 다음과 같습니다.

```json
{
  "type": "bubble",
  "body": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "text",
        "text": "align=start",
        "align": "start"
      },
      {
        "type": "separator",
        "color": "#ff0000"
      },
      {
        "type": "text",
        "text": "align=center",
        "align": "center"
      },
      {
        "type": "separator",
        "color": "#ff0000"
      },
      {
        "type": "text",
        "text": "align=end",
        "align": "end"
      }
    ]
  }
}
```

### 텍스트, 이미지 또는 버튼 세로 정렬 

[text](https://developers.line.biz/en/reference/messaging-api/#f-text), [image](https://developers.line.biz/en/reference/messaging-api/#f-image), [button](https://developers.line.biz/en/reference/messaging-api/#button) 컴포넌트를 세로로 정렬하려면 `gravity` 속성을 사용합니다. 이 속성은 상위 컴포넌트의 방향과 관계없이 적용됩니다. 사용할 수 있는 정렬 옵션은 다음과 같습니다.

- 위쪽 정렬: `top` (기본값)
- 아래쪽 정렬: `bottom`
- 가운데 정렬: `center`

<!-- note start -->

**참고**

컴포넌트가 [baseline box](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#baseline-box)의 하위 컴포넌트이면 `gravity` 속성은 무시됩니다.

<!-- note end -->

![gravity 예제](https://developers.line.biz/media/messaging-api/flex-message-layout/gravitySample.png)

이 Flex Message 예제의 JSON 정의는 다음과 같습니다.

```json
{
  "type": "bubble",
  "body": {
    "type": "box",
    "layout": "horizontal",
    "contents": [
      {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "wrap": true,
            "text": "TEXT\nTEXT\nTEXT\nTEXT\nTEXT"
          }
        ],
        "backgroundColor": "#c0c0c0"
      },
      {
        "type": "text",
        "text": "top",
        "gravity": "top"
      },
      {
        "type": "separator",
        "color": "#ff0000"
      },
      {
        "type": "text",
        "text": "center",
        "gravity": "center"
      },
      {
        "type": "separator",
        "color": "#ff0000"
      },
      {
        "type": "text",
        "text": "bottom",
        "gravity": "bottom"
      },
      {
        "type": "separator",
        "color": "#ff0000"
      }
    ]
  }
}
```

### Box padding으로 하위 컴포넌트 위치 지정 

box 컴포넌트의 padding으로 box 안의 하위 컴포넌트 위치를 지정할 수 있습니다. Padding은 상위 컴포넌트의 테두리와 하위 컴포넌트 사이에 공간을 만듭니다. 사용할 수 있는 padding 속성은 `paddingAll`, `paddingTop`, `paddingBottom`, `paddingStart`, `paddingEnd`입니다. Padding은 픽셀 단위, 백분율(상위 box 너비 기준) 또는 키워드로 지정할 수 있습니다.

| 단위 | 허용되는 값 | 예시 |
| --- | --- | :-: |
| 백분율 | 상위 box 너비에 대한 백분율로, 양의 정수 또는 소수에 `%`를 붙입니다. | `50%` `23.5%` |
| 픽셀 | 양의 정수 또는 소수에 `px`를 붙입니다. | `50px` `23.5px` |
| 키워드 | 크기가 커지는 순서대로 나열된 다음 값 중 하나: `none`(padding 없음), `xs`, `sm`, `md`, `lg`, `xl`, `xxl` | `md` (기본값) |

`paddingTop`, `paddingBottom`, `paddingStart`, `paddingEnd` 속성은 `paddingAll` 속성보다 우선합니다. `paddingTop`, `paddingBottom`, `paddingStart`, `paddingEnd` 중 하나라도 지정되면 `paddingAll` 속성은 무시됩니다.

![padding 예제](https://developers.line.biz/media/messaging-api/flex-message-layout/paddingSample.png)

이 Flex Message 예제의 JSON 정의는 다음과 같습니다.

```json
{
  "type": "bubble",
  "body": {
    "type": "box",
    "layout": "horizontal",
    "contents": [
      {
        "type": "box",
        "layout": "horizontal",
        "contents": [
          {
            "type": "text",
            "text": "hello, world"
          }
        ],
        "backgroundColor": "#ffffff"
      }
    ],
    "backgroundColor": "#ffd2d2",
    "paddingTop": "20px",
    "paddingAll": "80px",
    "paddingStart": "40px"
  }
}
```

같은 padding을 적용했을 때 더 긴 텍스트는 아래와 같이 표시됩니다.

![긴 텍스트의 padding 예제](https://developers.line.biz/media/messaging-api/flex-message-layout/paddingSample2.png)

### 남는 공간이 있을 때 하위 컴포넌트 배치 

[box](https://developers.line.biz/en/reference/messaging-api/#box)에 남는 공간이 있으면, 축을 기준으로 하위 컴포넌트를 배치할 수 있습니다. [주축](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#justify-content)과 [교차축](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#align-items)을 기준으로 하위 컴포넌트를 분산하는 방법을 알아보세요.

<!-- tip start -->

**주축과 교차축의 방향은 상위 box 컴포넌트가 결정합니다**

`justifyContent`와 `alignItems` 속성은 각각 주축과 교차축을 따라 하위 컴포넌트를 어떻게 배치할지 설정합니다. 주축과 교차축의 방향은 상위 box 컴포넌트가 결정합니다.

![가로 및 세로 축 방향](https://developers.line.biz/media/messaging-api/flex-message-layout/horizontal_vertical_axis_en.png)

텍스트 방향(`LTR` 또는 `RTL`)은 상위 box 컴포넌트의 방향과 관계없이 항상 가로 방향으로 적용됩니다.

<!-- tip end -->

#### 주축을 따라 하위 컴포넌트 분산 

box 안의 하위 컴포넌트를 주축을 따라 분산하려면 `justifyContent` 속성을 사용합니다. 주축의 방향은 가로 box에서는 가로, 세로 box에서는 세로입니다. 이 속성이 적용되려면 모든 하위 컴포넌트의 `flex` 속성이 `0`이어야 합니다. 하위 컴포넌트 중 하나라도 `flex` 속성이 `1` 이상이면 하위 컴포넌트가 상위 box를 채우도록 확장되므로, 분산할 공간이 남지 않습니다. 가로 box의 하위 컴포넌트는 기본적으로 `flex` 속성 값이 `1`이라는 점에 유의하세요.

LTR 텍스트 방향의 가로 box에서 `justifyContent` 속성 값에 따라 하위 컴포넌트가 어떻게 분산되는지 확인해 보세요.

![justify-content 예제 1](https://developers.line.biz/media/messaging-api/flex-message-layout/justify-content-01.svg)
![justify-content 예제 2](https://developers.line.biz/media/messaging-api/flex-message-layout/justify-content-02.svg)
![justify-content 예제 3](https://developers.line.biz/media/messaging-api/flex-message-layout/justify-content-03.svg)
![justify-content 예제 4](https://developers.line.biz/media/messaging-api/flex-message-layout/justify-content-04.svg)
![justify-content 예제 5](https://developers.line.biz/media/messaging-api/flex-message-layout/justify-content-05.svg)
![justify-content 예제 6](https://developers.line.biz/media/messaging-api/flex-message-layout/justify-content-06.svg)

| 속성 값 | 하위 컴포넌트 분산 방식 |
| --- | --- |
| `flex-start` | 가로 box: 텍스트가 시작하는 위치에 모임<br />세로 box: 상위 컴포넌트의 위쪽에 모임 |
| `center` | 상위 컴포넌트의 가운데에 모임 |
| `flex-end` | 가로 box: 텍스트가 끝나는 위치에 모임<br />세로 box: 상위 컴포넌트의 아래쪽에 모임 |
| `space-between` | 상위 컴포넌트 안에 고르게 분산되며, 첫 번째와 마지막 하위 컴포넌트가 상위 컴포넌트의 각 가장자리에 붙습니다. 하위 컴포넌트 사이의 간격은 동일합니다. |
| `space-around` | 상위 컴포넌트 안에 고르게 분산됩니다. 남은 공간을 2 x 컴포넌트 개수로 나누며, 각 하위 컴포넌트는 왼쪽과 오른쪽에 나뉜 공간을 받습니다. |
| `space-evenly` | 상위 box 안에 고르게 분산됩니다. 남은 공간을 각 하위 컴포넌트의 양쪽에 고르게 나눕니다. |

`flex-start`로 설정한 Flex Message의 JSON 정의는 다음과 같습니다.

```json
{
  "type": "bubble",
  "direction": "ltr",
  "body": {
    "type": "box",
    "layout": "horizontal",
    "contents": [
      {
        "type": "box",
        "layout": "vertical",
        "contents": [],
        "width": "40px",
        "height": "30px",
        "backgroundColor": "#00aaff",
        "flex": 0
      },
      {
        "type": "box",
        "layout": "vertical",
        "contents": [],
        "width": "20px",
        "height": "30px",
        "backgroundColor": "#00aaff",
        "flex": 0
      },
      {
        "type": "box",
        "layout": "vertical",
        "contents": [],
        "height": "30px",
        "width": "50px",
        "backgroundColor": "#00aaff",
        "flex": 0
      }
    ],
    "justifyContent": "flex-start",
    "spacing": "5px"
  }
}
```

#### `alignItems` 속성으로 교차축을 따라 하위 컴포넌트 배치 

box 안의 하위 컴포넌트를 교차축을 따라 분산하려면 `alignItems` 속성을 사용합니다. 교차축의 방향은 가로 box에서는 세로, 세로 box에서는 가로입니다.

LTR 텍스트 방향의 가로 box에서 `alignItems` 속성 값에 따라 하위 컴포넌트가 어떻게 분산되는지 확인해 보세요.

![alignItems 예제 1](https://developers.line.biz/media/messaging-api/flex-message-layout/alignItems-01.svg)
![alignItems 예제 2](https://developers.line.biz/media/messaging-api/flex-message-layout/alignItems-02.svg)
![alignItems 예제 3](https://developers.line.biz/media/messaging-api/flex-message-layout/alignItems-03.svg)

| 속성 값 | 하위 컴포넌트 분산 방식 |
| --- | --- |
| `flex-start` | 가로 box: 상위 컴포넌트의 위쪽에 정렬<br />세로 box: 상위 컴포넌트에서 텍스트가 시작하는 위치에 모임 |
| `center` | 상위 컴포넌트의 가운데에 위치 |
| `flex-end` | 가로 box: 상위 컴포넌트의 아래쪽에 모임<br />세로 box: 상위 컴포넌트에서 텍스트가 끝나는 위치에 모임 |

`flex-start`로 설정한 Flex Message의 JSON 정의는 다음과 같습니다.

```json
{
  "type": "bubble",
  "direction": "ltr",
  "body": {
    "type": "box",
    "layout": "horizontal",
    "contents": [
      {
        "type": "box",
        "layout": "vertical",
        "contents": [],
        "height": "100px",
        "backgroundColor": "#00aaff",
        "flex": 0,
        "width": "85px"
      },
      {
        "type": "box",
        "layout": "vertical",
        "contents": [],
        "height": "30px",
        "backgroundColor": "#00aaff",
        "flex": 0,
        "width": "85px"
      },
      {
        "type": "box",
        "layout": "vertical",
        "contents": [],
        "height": "60px",
        "backgroundColor": "#00aaff",
        "flex": 0,
        "width": "85px"
      }
    ],
    "spacing": "5px",
    "alignItems": "flex-start",
    "height": "200px"
  }
}
```

### Box의 `spacing` 속성 

상위 box 컴포넌트의 `spacing` 속성으로 두 컴포넌트 사이의 최소 간격을 픽셀 단위 또는 키워드로 지정할 수 있습니다. 백분율은 지정할 수 없습니다.

| 단위 | 허용되는 값 | 예시 |
| --- | --- | :-: |
| 픽셀 | 양의 정수 또는 소수에 `px`를 붙입니다. | `50px` `23.5px` |
| 키워드 | 크기가 커지는 순서대로 나열된 다음 값 중 하나: `none`(간격 없음), `xs`, `sm`, `md`, `lg`, `xl`, `xxl` | `md` |

이 예제 Flex Message에는 가로 box 안에 세로 box 세 개가 있으며, `md` 간격으로 고르게 배치되어 있습니다.

![spacing 예제](https://developers.line.biz/media/messaging-api/flex-message-layout/spacingSample.png)

이 Flex Message 예제의 JSON 정의는 다음과 같습니다.

```json
{
  "type": "bubble",
  "body": {
    "type": "box",
    "layout": "horizontal",
    "spacing": "md",
    "contents": [
      {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "TEXT1"
          }
        ],
        "backgroundColor": "#80ffff"
      },
      {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "TEXT2"
          }
        ],
        "backgroundColor": "#80ffff"
      },
      {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "TEXT3"
          }
        ],
        "backgroundColor": "#80ffff"
      }
    ]
  }
}
```

특정 컴포넌트에만 이 설정을 덮어쓰려면 해당 컴포넌트의 `margin` 속성을 설정하세요.

### 컴포넌트의 `margin` 속성 

하위 컴포넌트의 `margin` 속성으로 하위 컴포넌트 앞의 최소 간격을 픽셀 단위 또는 키워드로 지정할 수 있습니다. 백분율은 지정할 수 없습니다.

| 단위 | 허용되는 값 | 예시 |
| --- | --- | :-: |
| 픽셀 | 양의 정수 또는 소수에 `px`를 붙입니다. | `50px` `23.5px` |
| 키워드 | 크기가 커지는 순서대로 나열된 다음 값 중 하나: `none`(여백 없음), `xs`, `sm`, `md`, `lg`, `xl`, `xxl` | `md` |

`margin` 속성은 상위 box의 [`spacing` 속성](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#spacing-property)보다 우선합니다. 또한 box의 첫 번째 하위 컴포넌트에 `margin` 속성을 지정하면, 그 공간은 컴포넌트 앞에 할당됩니다.

이 예제 Flex Message에는 가로 box 안에 세로 box 세 개가 있습니다. 상위 가로 box에는 `spacing` 속성이 `md`로 설정되어 있고, 세 번째 세로 box에는 `margin` 속성이 `xxl`로 설정되어 있습니다.

![margin 예제](https://developers.line.biz/media/messaging-api/flex-message-layout/marginSample.png)

이 Flex Message 예제의 JSON 정의는 다음과 같습니다.

```json
{
  "type": "bubble",
  "body": {
    "type": "box",
    "layout": "horizontal",
    "spacing": "md",
    "contents": [
      {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "TEXT1"
          }
        ],
        "backgroundColor": "#80ffff"
      },
      {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "TEXT2"
          }
        ],
        "backgroundColor": "#80ffff"
      },
      {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "TEXT3"
          }
        ],
        "backgroundColor": "#80ffff",
        "margin": "xxl"
      }
    ]
  }
}
```

### Offset 

컴포넌트 위치를 지정하는 다른 방법은 offset을 사용하는 것입니다. offset 속성의 동작은 상위 컴포넌트의 `position` 속성 값(`relative` 또는 `absolute`)에 따라 달라집니다. 다만 [블록](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#block)의 첫 번째 하위 컴포넌트는 `absolute`로 설정할 수 없습니다.

사용할 수 있는 offset 속성은 `offsetTop`, `offsetBottom`, `offsetStart`, `offsetEnd`입니다. 속성 값은 픽셀 단위 또는 키워드(`none`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl`)로 지정할 수 있습니다. `offsetStart`와 `offsetEnd`는 box 너비에 대한 백분율로, `offsetTop`과 `offsetBottom`은 box 높이에 대한 백분율로도 지정할 수 있습니다.

아래에서 "TARGET"으로 표시된 box의 위치가 offset에 따라 어떻게 바뀌는지 확인해 보세요.

![offset 예제 1](https://developers.line.biz/media/messaging-api/flex-message-layout/offsetSample1.png)

이 Flex Message 예제의 JSON 정의는 다음과 같습니다.

```json
{
  "type": "bubble",
  "direction": "ltr",
  "body": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "box",
        "layout": "horizontal",
        "contents": [
          {
            "type": "text",
            "text": "REFERENCE BOX\n1\n2\n3",
            "align": "center",
            "wrap": true
          }
        ],
        "backgroundColor": "#80ffff"
      },
      {
        "type": "box",
        "layout": "horizontal",
        "contents": [
          {
            "type": "text",
            "text": "TARGET"
          }
        ],
        "backgroundColor": "#ff8080"
      }
    ]
  }
}
```

#### position이 relative일 때의 offset 

컴포넌트를 원래 위치에서 이동하려면 `position` 속성을 `relative`로 설정합니다. 자세한 내용은 CSS Positioned Layout Module Level 3의 [상대 위치 지정(Relative positioning)](https://www.w3.org/TR/css-position-3/#relpos-insets)을 참고하세요.

| 속성 | 설명 |
| --- | --- |
| `offsetTop` | 컴포넌트의 원래 위치에서 위쪽 가장자리를 기준으로 아래로 이동합니다. |
| `offsetBottom` | 컴포넌트의 원래 위치에서 아래쪽 가장자리를 기준으로 위로 이동합니다. |
| `offsetStart` | 텍스트가 시작하는 방향에서 멀어지도록 이동합니다. [bubble](https://developers.line.biz/en/reference/messaging-api/#bubble)의 텍스트 방향이 LTR이면 오른쪽으로, RTL이면 왼쪽으로 이동합니다. |
| `offsetEnd` | 텍스트가 끝나는 방향에서 멀어지도록 이동합니다. [bubble](https://developers.line.biz/en/reference/messaging-api/#bubble)의 텍스트 방향이 LTR이면 왼쪽으로, RTL이면 오른쪽으로 이동합니다. |

원래 위치에 있는 "TARGET" 컴포넌트는 첫 번째 이미지에 표시되어 있습니다. `position` 및 offset 속성으로 이동된 컴포넌트는 두 번째 이미지에 표시되어 있습니다.

![offset 예제 1](https://developers.line.biz/media/messaging-api/flex-message-layout/offsetSample1.png)
![offset 예제 2](https://developers.line.biz/media/messaging-api/flex-message-layout/offsetSample2.png)

예제와 같이 컴포넌트를 이동하려면 다음과 같이 속성을 설정하세요.

| 속성       | 값      |
| -------------- | ---------- |
| `position`     | `relative` |
| `offsetTop`    | `10px`     |
| `offsetBottom` | -          |
| `offsetStart`  | `40px`     |
| `offsetEnd`    | -          |

이 Flex Message 예제의 JSON 정의는 다음과 같습니다.

```json
{
  "type": "bubble",
  "direction": "ltr",
  "body": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "box",
        "layout": "horizontal",
        "contents": [
          {
            "type": "text",
            "text": "REFERENCE BOX\n1\n2\n3",
            "align": "center",
            "wrap": true
          }
        ],
        "backgroundColor": "#80ffff"
      },
      {
        "type": "box",
        "layout": "horizontal",
        "contents": [
          {
            "type": "text",
            "text": "TARGET"
          }
        ],
        "backgroundColor": "#ff8080",
        "offsetTop": "10px",
        "offsetStart": "40px",
        "position": "relative"
      }
    ]
  }
}
```

#### position이 absolute일 때의 offset 

컴포넌트를 상위 컴포넌트의 가장자리에서 떨어뜨리려면 `position` 속성을 `absolute`로 설정합니다. 자세한 내용은 CSS Positioned Layout Module Level 3의 [절대 위치 지정(Absolute positioning)](https://www.w3.org/TR/css-position-3/#abs-pos)을 참고하세요.

<table>
  <thead>
    <tr>
      <th>속성</th>
      <th colspan="2">설명</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>offsetTop</code></td>
      <td colspan="2">상위 컴포넌트의 위쪽 끝에서 컴포넌트의 위쪽 끝까지의 상대 위치를 지정합니다.</td>
    </tr>
    <tr>
      <td><code>offsetBottom</code></td>
      <td colspan="2">상위 컴포넌트의 아래쪽 끝에서 컴포넌트의 아래쪽 끝까지의 상대 위치를 지정합니다.</td>
    </tr>
    <tr>
      <td rowspan="2"><code>offsetStart</code></td>
      <td>[bubble](https://developers.line.biz/en/reference/messaging-api/#bubble)의 텍스트 방향이 LTR인 경우</td>
      <td>상위 컴포넌트의 왼쪽 끝에서 컴포넌트의 왼쪽 끝까지의 상대 위치를 지정합니다.</td>
    </tr>
    <tr>
      <td>[bubble](https://developers.line.biz/en/reference/messaging-api/#bubble)의 텍스트 방향이 RTL인 경우</td>
      <td>상위 컴포넌트의 오른쪽 끝에서 컴포넌트의 오른쪽 끝까지의 상대 위치를 지정합니다.</td>
    </tr>
    <tr>
      <td rowspan="2"><code>offsetEnd</code></td>
      <td>[bubble](https://developers.line.biz/en/reference/messaging-api/#bubble)의 텍스트 방향이 LTR인 경우</td>
      <td>상위 컴포넌트의 오른쪽 끝에서 컴포넌트의 오른쪽 끝까지의 상대 위치를 지정합니다.</td>
    </tr>
    <tr>
      <td>[bubble](https://developers.line.biz/en/reference/messaging-api/#bubble)의 텍스트 방향이 RTL인 경우</td>
      <td>상위 컴포넌트의 왼쪽 끝에서 컴포넌트의 왼쪽 끝까지의 상대 위치를 지정합니다.</td>
    </tr>
  </tbody>
</table>

<!-- note start -->

**참고**

offset 속성을 지정하지 않으면 기기에 따라 컴포넌트 위치가 달라질 수 있습니다. 세로(`offsetTop` 또는 `offsetBottom`)와 가로(`offsetStart` 또는 `offsetEnd`) 모두 offset을 지정하는 것을 권장합니다.

<!-- note end -->

원래 위치에 있는 "TARGET" 컴포넌트는 첫 번째 이미지에 표시되어 있습니다. `position` 및 offset 속성으로 이동된 컴포넌트는 두 번째 이미지에 표시되어 있습니다.

![offset 예제 1](https://developers.line.biz/media/messaging-api/flex-message-layout/offsetSample1.png)
![offset 예제 3](https://developers.line.biz/media/messaging-api/flex-message-layout/offsetSample3.png)

예제와 같이 컴포넌트를 이동하려면 다음과 같이 속성을 설정하세요.

| 속성       | 값      |
| -------------- | ---------- |
| `position`     | `absolute` |
| `offsetTop`    | `10px`     |
| `offsetBottom` | `20px`     |
| `offsetStart`  | `40px`     |
| `offsetEnd`    | `80px`     |

이 Flex Message 예제의 JSON 정의는 다음과 같습니다.

```json
{
  "type": "bubble",
  "direction": "ltr",
  "body": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "box",
        "layout": "horizontal",
        "contents": [
          {
            "type": "text",
            "text": "REFERENCE BOX\n1\n2\n3",
            "align": "center",
            "wrap": true
          }
        ],
        "backgroundColor": "#80ffff"
      },
      {
        "type": "box",
        "layout": "horizontal",
        "contents": [
          {
            "type": "text",
            "text": "TARGET"
          }
        ],
        "backgroundColor": "#ff8080",
        "position": "absolute",
        "offsetStart": "40px",
        "offsetEnd": "80px",
        "offsetTop": "10px",
        "offsetBottom": "20px"
      }
    ]
  }
}
```

##### position이 absolute인 자식 컴포넌트와 부모 컴포넌트의 크기 

`position` 속성이 `absolute`로 설정된 자식 box 컴포넌트는 상위 컴포넌트의 크기를 바꾸지 않습니다. 마찬가지로 이 컴포넌트도 상위 컴포넌트에 의해 크기가 조정되지 않습니다. 컴포넌트가 상위 컴포넌트보다 크면, 상위 컴포넌트 밖으로 나가는 부분은 표시되지 않습니다.

`position`이 relative인 경우와 absolute인 경우의 효과를 비교해 봅시다. 첫 번째 이미지에서 "REFERENCE BOX"는 가로 box이며 `position`이 relative로 설정되어 있습니다. 같은 컴포넌트를 `position`을 absolute로 설정한 경우가 두 번째 이미지에 표시되어 있습니다.

![offset 예제 1](https://developers.line.biz/media/messaging-api/flex-message-layout/offsetSample1.png)
![offset 예제 4](https://developers.line.biz/media/messaging-api/flex-message-layout/offsetSample4.png)

두 번째 이미지의 예에서 볼 수 있듯이, "REFERENCE BOX"의 크기는 상위 컴포넌트(세로 box)의 크기에 영향을 주지 않으며, 상위 컴포넌트의 영향도 받지 않습니다. 따라서 상위 컴포넌트보다 큰 부분(2행과 3행)은 표시되지 않습니다. 또한 상위 컴포넌트의 영향으로 커졌던 좌우의 여백(남는 공간)은 원래 크기(텍스트 "REFERENCE BOX"의 너비)로 돌아갑니다.

## 선형 그라데이션 배경 

[box](https://developers.line.biz/en/reference/messaging-api/#box) 컴포넌트의 배경을 선형 그라데이션으로 설정할 수 있습니다. `background.type` 속성에 `linearGradient`를 지정하세요. 그라데이션의 [각도](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#linear-gradient-bg-angle)와 [색상 정지점(color stop)](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#linear-gradient-bg-center-color)을 설정하는 방법을 알아보세요.

<!-- note start -->

**상위 컴포넌트의 텍스트 방향은 그라데이션 방향에 영향을 주지 않습니다**

상위 컴포넌트의 텍스트 방향(`LTR` 또는 `RTL`)은 그라데이션의 방향에 영향을 주지 않습니다.

<!-- note end -->

### 선형 그라데이션의 각도 

선형 그라데이션의 각도는 0도 이상 360도 미만의 정수 또는 소수로 지정할 수 있습니다. 각도를 90도로 설정하려면 `90deg`, 23.5도로 설정하려면 `23.5deg`로 지정합니다. 각도에 따라 그라데이션 방향이 달라집니다.

- 0도: 아래에서 위로
- 45도: 왼쪽 아래에서 오른쪽 위로
- 90도: 왼쪽에서 오른쪽으로
- 180도: 위에서 아래로

각도가 커질수록 방향은 시계 방향으로 회전합니다.

**0도 선형 그라데이션(아래에서 위로)**

![0도 선형 그라데이션](https://developers.line.biz/media/messaging-api/flex-message-layout/linear-gradient-bg-deg-0.png)

이 Flex Message 예제의 JSON 정의는 다음과 같습니다.

```json
{
  "type": "bubble",
  "body": {
    "type": "box",
    "layout": "vertical",
    "contents": [],
    "background": {
      "type": "linearGradient",
      "angle": "0deg",
      "startColor": "#ff0000",
      "endColor": "#0000ff"
    },
    "height": "200px"
  }
}
```

**45도 선형 그라데이션(왼쪽 아래에서 오른쪽 위로)**

![45도 선형 그라데이션](https://developers.line.biz/media/messaging-api/flex-message-layout/linear-gradient-bg-deg-45.png)

**90도 선형 그라데이션(왼쪽에서 오른쪽으로)**

![90도 선형 그라데이션](https://developers.line.biz/media/messaging-api/flex-message-layout/linear-gradient-bg-deg-90.png)

**180도 선형 그라데이션(위에서 아래로)**

![180도 선형 그라데이션](https://developers.line.biz/media/messaging-api/flex-message-layout/linear-gradient-bg-deg-180.png)

자세한 내용은 Messaging API 레퍼런스의 [Box](https://developers.line.biz/en/reference/messaging-api/#box)를 참고하세요.

### 그라데이션 색상 정지점 

그라데이션에 색상 정지점을 추가하려면, 즉 그라데이션을 세 가지 색으로 만들려면 `centerColor` 속성을 지정합니다. 색상 정지점의 위치는 `centerPosition` 속성으로 지정할 수 있습니다.

**10% 지점의 색상 정지점**

![시작점에서 10% 지점에 중간 색상 정지점이 있는 3색 그라데이션](https://developers.line.biz/media/messaging-api/flex-message-layout/linear-gradient-bg-percent-10.png)

이 Flex Message 예제의 JSON 정의는 다음과 같습니다.

```json
{
  "type": "bubble",
  "body": {
    "type": "box",
    "layout": "vertical",
    "contents": [],
    "background": {
      "type": "linearGradient",
      "angle": "0deg",
      "startColor": "#ff0000",
      "centerColor": "#0000ff",
      "endColor": "#00ff00",
      "centerPosition": "10%"
    },
    "height": "200px"
  }
}
```

**50% 지점의 색상 정지점**

![시작점에서 50% 지점에 중간 색상 정지점이 있는 3색 그라데이션](https://developers.line.biz/media/messaging-api/flex-message-layout/linear-gradient-bg-percent-50.png)

**90% 지점의 색상 정지점**

![시작점에서 90% 지점에 중간 색상 정지점이 있는 3색 그라데이션](https://developers.line.biz/media/messaging-api/flex-message-layout/linear-gradient-bg-percent-90.png)

## 렌더링 순서 

컴포넌트는 JSON에 지정된 순서대로 렌더링됩니다. JSON 정의의 앞쪽에 있는 컴포넌트가 먼저 렌더링되고, 그다음 컴포넌트가 이전 컴포넌트 위에 렌더링됩니다. 따라서 마지막 컴포넌트가 bubble의 가장 위 레이어에 렌더링됩니다.

렌더링 순서를 바꾸려면 JSON 정의에서 컴포넌트의 순서를 바꾸세요.

## 더 알아보기 

- [Flex Message 보내기](https://developers.line.biz/en/docs/messaging-api/using-flex-messages/)
- [Flex Message 요소](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/)
- [Flex Message](https://developers.line.biz/en/reference/messaging-api/#flex-message) (Messaging API 레퍼런스)
