# 튜토리얼 - Flex Message Simulator로 디지털 명함 만들기

Flex Message는 [CSS Flexible Box(CSS Flexbox)](https://www.w3.org/TR/css-flexbox-1/)를 기반으로 자유롭게 꾸밀 수 있는 메시지입니다. 필요에 따라 메시지 크기를 조정하고, 텍스트, 이미지, 아이콘을 원하는 위치에 배치하며, 상호작용 버튼을 추가할 수 있습니다.

이 튜토리얼에서는 [Flex Message Simulator](https://developers.line.biz/flex-simulator/)를 사용하여 디지털 명함을 만드는 방법을 배웁니다. Flex Message Simulator는 **코드를 작성하지 않고** Flex Message를 구상하고, 디자인하고, 프로토타입을 만들 수 있도록 도와주는 도구입니다. Flex Message가 처음이라면 먼저 [Flex Message 보내기](https://developers.line.biz/en/docs/messaging-api/using-flex-messages/)를 읽어 보세요.

## 목표 

이 튜토리얼의 결과물은 아래와 같은 디지털 명함입니다. 이 [다운로드 링크](https://developers.line.biz/media/code-samples/flex-message-simulator-example.json)에서 JSON으로 정의된 결과물을 확인할 수 있습니다. 하지만 Flex Message Simulator에 익숙해지기 위해 이 튜토리얼을 직접 따라 해 보기를 권장합니다. 이 도구는 Flex Message의 무한한 활용 사례를 다룰 때 매우 유용할 것입니다.

![최종 결과물](https://developers.line.biz/media/messaging-api/using-flex-message-simulator/en-final-output.png)

## 시작하기 전에 

이 튜토리얼을 따라 하려면 시작하기 전에 [Messaging API 개요](https://developers.line.biz/en/docs/messaging-api/overview/)와 [Flex Message 보내기](https://developers.line.biz/en/docs/messaging-api/using-flex-messages/)를 읽는 것을 권장합니다. 또한 시뮬레이터가 처음이라면 이 섹션을 읽고 Flex Message Simulator에 대해 알아보세요. 이미 시뮬레이터에 익숙하다면 지금 바로 [튜토리얼을 시작](https://developers.line.biz/en/docs/messaging-api/using-flex-message-simulator/#select-flex-message)하세요.

### Flex Message Simulator 알아보기 

Flex Message Simulator는 Flex Message를 작성하고 미리 볼 수 있는 도구입니다. Flex Message를 작성하고 미리 보기로 전송하는 데 개발 환경을 설정하거나 코드를 작성할 필요가 없습니다.

먼저 [Flex Message Simulator](https://developers.line.biz/flex-simulator/)를 엽니다. [LINE Developers Console](https://developers.line.biz/console/)에 로그인되어 있지 않다면 로그인하라는 메시지가 표시됩니다. LINE Developers 계정이 있다면 해당 계정으로 로그인하세요. 계정이 없다면 **Create an account**를 클릭하여 계정을 만드세요.

Flex Message Simulator의 UI는 세 개의 영역으로 구성됩니다.

- **미리 보기 영역**: 트리 보기 영역과 속성 영역에서 지정한 데이터로 생성된 Flex Message를 표시합니다.
- **트리 보기 영역**: Flex Message의 데이터 구조를 표시하고 편집할 수 있습니다.
- **속성 영역**: 트리 보기 영역에서 선택한 항목의 속성을 설정할 수 있습니다. 시뮬레이터는 여기에 입력한 데이터로 Flex Message를 생성합니다.

![Flex Message 영역](https://developers.line.biz/media/messaging-api/using-flex-message-simulator/en-areas.webp)

트리 보기 영역에서 항목 위에 마우스를 올리면 미리 보기 영역에서 해당 영역이 강조 표시됩니다. 동영상에서 이 기능을 직접 확인해 보세요.

<video width="883" height="381" controls>
  <source src="https://vos.line-scdn.net/line-developers/docs/media/video/flex-message-simulator.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

#### Flex Message 레이아웃 프리셋 사용하기 

Flex Message Simulator에서는 미리 정의된 Flex Message 레이아웃을 제공합니다.

미리 정의된 레이아웃을 사용하려면 시뮬레이터 상단의 **Showcase**를 클릭하세요. 레이아웃을 선택한 후 **Create**를 클릭합니다.

<!-- note start -->

**레이아웃에 관하여**

이 튜토리얼에서는 미리 정의된 레이아웃을 사용하지 않습니다. Flex Message를 처음부터 직접 만듭니다.

<!-- note end -->

![Flex Message Simulator Showcase](https://developers.line.biz/media/messaging-api/using-flex-message-simulator/showcase.webp)

#### Flex Message를 JSON으로 복사하기 

JSON으로 생성된 Flex Message를 복사하려면 **</>View as JSON**을 클릭한 후 **Copy** 버튼을 클릭하세요.

![View as JSON](https://developers.line.biz/media/messaging-api/using-flex-message-simulator/view-as-json.png)

## 튜토리얼 바로 가기 

설명을 읽지 않고 바로 결과를 미리 보려면 Flex Message 객체를 JSON으로 [다운로드](https://developers.line.biz/media/code-samples/flex-message-simulator-example.json)하세요. Flex Message Simulator에서 결과를 미리 보려면 다음과 같이 하세요.

1. **</>View as JSON**을 클릭합니다. JSON 데이터가 있는 모달이 표시됩니다.
1. 모달의 내용을 삭제합니다.
1. 다운로드한 JSON 파일의 내용을 복사하여 모달에 붙여 넣습니다.
1. **Apply**를 클릭하여 변경 사항을 저장합니다. 미리 보기 영역에 붙여 넣은 Flex Message가 표시됩니다.

![샘플 JSON 데이터로 만든 Flex Message 미리 보기](https://developers.line.biz/media/messaging-api/using-flex-message-simulator/en-confirm-example-code-output.webp)

## 1. 컨테이너 유형 선택하기 

Flex Message Simulator에 대해 알아보았으니 이제 디지털 명함을 만들어 보겠습니다. 명함에는 버블 하나만 있으면 되므로 Flex Message 컨테이너를 [버블 유형](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#bubble)으로 설정합니다.

버블 컨테이너를 만들려면 **New**를 클릭하고 드롭다운 메뉴에서 **bubble**을 선택하세요.

![버블 유형 컨테이너 선택](https://developers.line.biz/media/messaging-api/using-flex-message-simulator/select-bubble-type.webp)

<!-- tip start -->

**팁**

드롭다운 메뉴에서 **bubble**을 선택하면 미리 보기 영역 하단에 "OK" 메시지가 나타납니다. 이는 변경 사항이 미리 보기 영역에 성공적으로 반영되었다는 뜻입니다.

![메시지 유형 선택](https://developers.line.biz/media/messaging-api/using-flex-message-simulator/type.png)

<!-- tip end -->

컨테이너 유형에 대한 자세한 내용은 [컨테이너](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#container)를 참고하세요.

## 2. 헤더 추가하기 

만든 컨테이너에 회사 이름을 보여 줄 헤더를 추가해 보겠습니다. 헤더는 [블록](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#block)의 한 종류이며, 히어로, 바디, 푸터도 블록입니다. 헤더는 주로 메시지 제목이나 내용의 머리글을 표시할 때 사용합니다.

![블록 스타일 예시](https://developers.line.biz/media/messaging-api/using-flex-message-simulator/elements.png)

1. 헤더를 추가하려면 트리 보기 영역에서 **header** 노드를 선택합니다. 상단의 **+**를 클릭한 후 **box**를 클릭합니다.
1. 헤더의 배경색을 설정합니다. 속성 영역에서 **backgroundColor** 필드에 16진수 색상 코드를 입력합니다. 이 튜토리얼에서는 `#00B900`을 사용하고 Enter 키를 누릅니다. 이제 헤더가 바디 블록과 시각적으로 구분됩니다.

   <!-- tip start -->

   **Enter 키를 눌러 입력 내용 적용하기**

   속성 영역에서 속성을 추가하거나 선택할 때마다 Enter 키를 눌러 입력 내용을 미리 보기 영역에 적용하세요. 그러면 미리 보기 영역에서 결과를 확인할 수 있습니다. 이 튜토리얼에서는 번거로움을 줄이기 위해 이후 이 안내를 생략하겠습니다.

   <!-- tip end -->

   ![헤더 배경색 설정](https://developers.line.biz/media/messaging-api/using-flex-message-simulator/set-header-color.png)

1. 헤더에 텍스트를 추가합니다.
   1. 트리 보기에서 **header** 아래의 **box [vertical]** 노드를 클릭합니다.

      <!-- tip}

      Vertical box is one of the box types for Flex Messages, that determines how the box's child components are placed within the box. For more information, see [Box component orientation](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#box-component-orientation).

      ::

   1. 트리 보기에서 **+**를 클릭한 후 드롭다운 메뉴에서 **text**를 클릭합니다. **box [vertical]** 노드 아래에 **text** 노드가 생성됩니다.
   1. 트리 보기에서 텍스트 노드를 클릭합니다.
   1. 속성 영역의 **text** 필드에서 "hello, world"를 "Flex Message Corp"로 바꿉니다.

새 배경색으로 헤더를 구분할 수 있게 되었지만 헤더 텍스트는 조금 읽기 어렵습니다. 새로운 색상과 스타일로 텍스트를 돋보이게 만들어 보겠습니다. 트리 보기에서 텍스트 노드를 클릭하고 **color** 속성을 `#FFFFFF`로, **weight** 속성을 `bold`로 설정하세요.

이제 아래와 비슷한 화면이 보일 것입니다. 구분이 잘 되는 헤더에 텍스트가 선명하게 보입니다.

![헤더 추가 최종 결과물](https://developers.line.biz/media/messaging-api/using-flex-message-simulator/add-header-final.png)

## 3. 이미지 추가하기 

디지털 명함을 시각적으로 보완하는 방법 중 하나는 이미지를 추가하는 것입니다. Flex Message Simulator를 사용하면 이미지를 추가하고 스타일을 지정하는 작업이 아주 간단합니다. 이미지를 추가하려면 주로 이미지 타입 콘텐츠를 표시할 때 사용하는 [히어로 블록](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#block)을 사용합니다.

1. 트리 보기에서 **hero** 노드를 클릭합니다.
2. **+**를 클릭한 후 드롭다운 목록에서 **image**를 클릭합니다. 미리 보기에 기본 이미지가 표시됩니다.
3. 이미지를 바꾸려면 트리 보기에서 **image** 노드를 클릭합니다. 속성 영역에서 **url** 속성 값을 원하는 이미지의 위치로 바꿉니다. 이미지는 세로 방향이어야 합니다. 튜토리얼에서는 [이 이미지](https://developers.line.biz/media/messaging-api/using-flex-message-simulator/mary.png)를 사용할 수 있습니다. start -->

      **이미지 요구 사항**

   Flex Message Simulator에는 이미지 파일을 업로드할 수 없습니다. 웹에 업로드된 이미지의 URL을 지정하세요. 이미지와 이미지 URL은 다음 조건을 충족해야 합니다.
   - 프로토콜: HTTPS(TLS 1.2 이상)
   - 이미지 형식: JPEG 또는 PNG
   - 최대 이미지 크기: 1024 x 1024px
   - 최대 파일 크기: 10MB

   <!-- tip}

      Vertical box is one of the box types for Flex Messages, that determines how the box's child components are placed within the box. For more information, see [Box component orientation](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#box-component-orientation).

      ::

   1. 트리 보기에서 **+**를 클릭한 후 드롭다운 메뉴에서 **text**를 클릭합니다. **box [vertical]** 노드 아래에 **text** 노드가 생성됩니다.
   1. 트리 보기에서 텍스트 노드를 클릭합니다.
   1. 속성 영역의 **text** 필드에서 "hello, world"를 "Flex Message Corp"로 바꿉니다.

새 배경색으로 헤더를 구분할 수 있게 되었지만 헤더 텍스트는 조금 읽기 어렵습니다. 새로운 색상과 스타일로 텍스트를 돋보이게 만들어 보겠습니다. 트리 보기에서 텍스트 노드를 클릭하고 **color** 속성을 `#FFFFFF`로, **weight** 속성을 `bold`로 설정하세요.

이제 아래와 비슷한 화면이 보일 것입니다. 구분이 잘 되는 헤더에 텍스트가 선명하게 보입니다.

![헤더 추가 최종 결과물](https://developers.line.biz/media/messaging-api/using-flex-message-simulator/add-header-final.png)

## 3. 이미지 추가하기 

디지털 명함을 시각적으로 보완하는 방법 중 하나는 이미지를 추가하는 것입니다. Flex Message Simulator를 사용하면 이미지를 추가하고 스타일을 지정하는 작업이 아주 간단합니다. 이미지를 추가하려면 주로 이미지 타입 콘텐츠를 표시할 때 사용하는 [히어로 블록](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/#block)을 사용합니다.

1. 트리 보기에서 **hero** 노드를 클릭합니다.
2. **+**를 클릭한 후 드롭다운 목록에서 **image**를 클릭합니다. 미리 보기에 기본 이미지가 표시됩니다.
3. 이미지를 바꾸려면 트리 보기에서 **image** 노드를 클릭합니다. 속성 영역에서 **url** 속성 값을 원하는 이미지의 위치로 바꿉니다. 이미지는 세로 방향이어야 합니다. 튜토리얼에서는 [이 이미지](https://developers.line.biz/media/messaging-api/using-flex-message-simulator/mary.png)를 사용할 수 있습니다. end -->

   <!-- tip start -->

   **파일 크기 권장 사항**

   메시지를 지연 없이 표시하려면 각 이미지 파일의 크기를 1MB 이하로 유지하는 것을 권장합니다.

   <!-- tip end -->

이미지가 성공적으로 바뀌었지만 배경에 비해 이미지가 조금 작아 보입니다. 이미지를 더 크게 만들어 보겠습니다.

![이미지 추가](https://developers.line.biz/media/messaging-api/using-flex-message-simulator/add-image.png)

이미지 크기를 바꾸려면 트리 보기에서 **image** 노드를 클릭하고 **size** 속성에서 최대 이미지 너비를 설정합니다. 이 튜토리얼에서는 속성 입력 필드 옆의 버튼을 클릭한 후 드롭다운 목록에서 `xl` 키워드를 선택합니다. 대신 픽셀(px)이나 퍼센트(%) 값을 _직접_ 입력할 수도 있습니다. 자세한 내용은 [Image](https://developers.line.biz/en/reference/messaging-api/#f-image)의 "size" 속성 사양을 참고하세요.

이제 확대된 이미지가 들어간 명함이 완성되었습니다.

![이미지 추가 최종 결과물](https://developers.line.biz/media/messaging-api/using-flex-message-simulator/add-image-final.png)

## 4. 이름 추가하기 

명함에는 이름이 반드시 들어가야 합니다. 이름과 같은 핵심 정보를 눈에 띄는 스타일로 보여 주면 좋습니다. 이미지 아래에 이름을 추가하려면 다음과 같이 하세요.

1. 트리 보기에서 **body** 아래의 **box [vertical]** 노드를 클릭합니다.
1. **+**를 클릭한 후 드롭다운 메뉴에서 **text**를 클릭합니다. box 노드 아래에 text 노드가 생성됩니다.
1. 트리 보기에서 **text** 노드를 클릭합니다.
1. 속성 영역의 **text** 필드에서 "hello, world"를 이름으로 바꿉니다.

[헤더 텍스트](https://developers.line.biz/en/docs/messaging-api/using-flex-message-simulator/#add-header)에 했던 것처럼 이름 텍스트에도 스타일을 지정해 보겠습니다. 글꼴 크기를 키우고, 굵게 만들고, 가운데 정렬하려고 합니다.

- **크기**: **size** 속성을 `xl`로 설정합니다. (기본 크기는 "md"입니다.)
- **굵게**: **weight** 속성을 `bold`로 설정합니다.
- **가운데 정렬**: **align** 속성을 `center`로 설정합니다.

이제 명함의 이미지 아래에 이름이 표시됩니다.

![이름 추가 최종 결과물](https://developers.line.biz/media/messaging-api/using-flex-message-simulator/en-add-name-final.png)

## 5. 직함 추가하기 

명함에서 이름만큼 중요한 정보는 직함입니다. 이름 아래에 직함을 추가해 보겠습니다.

1. 트리 보기에서 **body** 아래의 **box [vertical]** 노드를 클릭합니다.
1. **+**를 클릭한 후 드롭다운 메뉴에서 **text**를 클릭합니다. 새 text 노드가 생성됩니다.
1. 트리 보기에서 새 **text** 노드를 클릭합니다.
1. 속성 영역의 **text** 필드에서 "hello, world"를 직함으로 바꿉니다.

이름을 가운데 정렬했으므로 직함도 가운데 정렬하겠습니다. 텍스트 노드가 선택된 상태에서 **align** 속성을 `center`로 설정하세요.

이제 명함에 직함이 표시됩니다.

![직함 추가 최종 결과물](https://developers.line.biz/media/messaging-api/using-flex-message-simulator/en-add-job-title-final.png)

## 6. 구분선 추가하기 

이후 명함을 상호작용할 수 있도록 버튼을 추가할 것입니다. 그 전에 [구분선(separator)](https://developers.line.biz/en/reference/messaging-api/#separator)을 추가하여 정보 영역과 상호작용 영역을 시각적으로 나누어 보겠습니다.

1. 트리 보기에서 **body** 아래의 **box [vertical]** 노드를 클릭합니다.
1. **+**를 클릭한 후 드롭다운 메뉴에서 **separator**를 클릭합니다. 직함 바로 아래에 구분선이 생성됩니다.

![구분선 추가](https://developers.line.biz/media/messaging-api/using-flex-message-simulator/en-add-separator.png)

구분선과 직함 사이의 간격이 거의 없습니다. 구분선에 [여백(margin)](https://developers.line.biz/en/reference/messaging-api/#separator)을 주어 두 요소 사이에 공간을 만들어 보겠습니다. 여백에 대한 자세한 내용은 Messaging API 레퍼런스의 [Separator](https://developers.line.biz/en/reference/messaging-api/#separator)를 참고하세요.

1. 트리 보기에서 **separator** 노드를 클릭합니다.
1. 속성 영역에서 **margin** 속성을 `md`로 설정합니다.

이제 여백이 있는 구분선이 명함에 추가되었습니다.

![구분선 추가 최종 결과물](https://developers.line.biz/media/messaging-api/using-flex-message-simulator/en-add-separator-final.png)

## 7. 버튼 추가하기 

6단계에서 언급했듯이 명함을 상호작용할 수 있도록 버튼을 추가하려고 합니다. 구분선 아래에 버튼 두 개를 추가하겠습니다. 먼저 버튼을 묶을 컴포넌트가 필요합니다.

1. **body** 아래의 **box [vertical]**를 클릭합니다.
1. **+**를 클릭한 후 드롭다운 메뉴에서 **box**를 클릭합니다. 버튼을 추가할 box 노드가 생성됩니다.

버튼을 누르면 액션이 실행되도록 하려고 합니다. 버튼에 사용할 수 있는 액션 유형은 [URI 액션](https://developers.line.biz/en/reference/messaging-api/#uri-action)과 [포스트백 액션](https://developers.line.biz/en/reference/messaging-api/#postback-action)입니다. 이 튜토리얼에서는 다음 기능을 하는 버튼을 추가합니다.

1. [회사 웹사이트로 이동](https://developers.line.biz/en/docs/messaging-api/using-flex-message-simulator/#add-action-1)
1. [LIFF로 만든 등록 양식 열기](https://developers.line.biz/en/docs/messaging-api/using-flex-message-simulator/#add-action-2)

### 7-1. 회사 웹사이트로 이동하는 버튼 추가하기 

회사 웹사이트를 여는 버튼을 설정하려면 다음과 같이 하세요.

1. 트리 보기에서 버튼용으로 만든 **box [vertical]**를 클릭합니다.
1. **+**를 클릭한 후 드롭다운 메뉴에서 **button**을 클릭합니다.
1. **button [action]** 노드를 클릭합니다.
1. 속성 영역에서 **Action** 섹션까지 아래로 스크롤합니다. 기본적으로 **type** 속성은 `uri`로 설정되어 있습니다. 웹사이트 URL을 열려고 하므로 이 값을 그대로 둡니다.
1. **Action** 섹션에서 **label** 속성을 "Visit our website"로 설정합니다. 이 값이 버튼 레이블이 됩니다.
1. 웹사이트를 열려면 **uri** 속성을 원하는 URL로 설정합니다.

<!-- note start -->

**URI에 퍼센트 인코딩 적용하기**

`uri` 속성의 도메인 이름, 경로, 쿼리 파라미터, 프래그먼트는 UTF-8 인코딩으로 [퍼센트 인코딩](https://en.wikipedia.org/wiki/Percent-encoding)해야 합니다. 예를 들어 다음 설정이면 최종 URL은 `https://example.com/path?q=Good%20morning#Good%20afternoon`이 됩니다.

| 스킴 | 도메인 이름 | 경로 | 쿼리 파라미터 | 프래그먼트 |
| ------ | ----------- | ----- | --------------- | -------------- |
| https  | example.com | /path | q=Good morning  | Good afternoon |

<!-- note end -->

이제 명함에 회사 웹사이트를 여는 버튼이 생겼습니다.

![URI 액션 버튼 추가](https://developers.line.biz/media/messaging-api/using-flex-message-simulator/en-add-uri-button.png)

헤더 텍스트, 이름, 직함에 했던 것처럼 버튼에도 스타일을 지정하겠습니다. 누를 수 있는 영역을 더 잘 보이게 하려면 버튼에 색을 줄 수 있습니다. 색을 적용하려면 세 가지 사전 설정 버튼 스타일 중에서 선택할 수 있습니다.

- **Primary**: 어두운 색 버튼용 스타일
- **Secondary**: 밝은 색 버튼용 스타일
- **Link**: 버튼을 HTML 텍스트 링크처럼 표시합니다

이 튜토리얼처럼 버튼을 세로로 여러 개 쌓는 경우에는 링크 스타일을 사용하는 것을 권장합니다. 배경에 색을 주는 대신 버튼에 링크 스타일을 적용해 보겠습니다.

1. 트리 보기에서 **button** 노드를 클릭합니다.
1. 속성 영역에서 **style** 속성을 `link`로 설정합니다.

버튼이 아래와 비슷하게 보일 것입니다.

![버튼 색 변경](https://developers.line.biz/media/messaging-api/using-flex-message-simulator/en-change-button-color.png)

### 7-2. LIFF로 만든 등록 양식을 여는 버튼 추가하기 

나머지 버튼도 추가해 보겠습니다. 두 번째 버튼에는 사업체의 등록 양식에 대한 [LINE Front-end Framework(LIFF)](https://developers.line.biz/en/docs/liff/overview/) URL을 추가하려고 합니다. LIFF로 등록 양식을 만들고, 양식에서 얻은 정보를 활용하여 나중에 사용자에게 새 메시지를 보낼 수 있습니다. LIFF에 대한 자세한 내용은 [LIFF 앱 개발하기](https://developers.line.biz/en/docs/liff/developing-liff-apps/) 또는 [LIFF 스타터 앱 체험하기](https://developers.line.biz/en/docs/liff/trying-liff-app/)를 참고하세요.

두 번째 버튼을 만들려면 다음과 같이 하세요.

1. 트리 보기에서 첫 번째 버튼용으로 만든 **box [vertical]** 노드를 클릭합니다.
1. **+**를 클릭한 후 드롭다운 메뉴에서 **button**을 클릭합니다. button 노드가 생성됩니다.
1. 속성 영역에서 다음과 같이 설정합니다.
   - **style** 속성을 `link`로 설정합니다.
   - **label** 속성을 "Register with us"로 설정합니다.
   - **type** 속성은 `uri`로 그대로 둡니다.
   - **uri** 속성을 LIFF 앱 URL로 설정합니다.

이제 두 번째 버튼에 LIFF URL이 설정되었습니다.

![LIFF 버튼 추가](https://developers.line.biz/media/messaging-api/using-flex-message-simulator/en-add-liff-button.png)

### 7-3. 버튼 간격 조정하기 

버튼이 서로 아주 촘촘하게 붙어 있습니다. 겉보기에는 그렇지 않아 보이지만, 버튼 스타일을 primary나 secondary로 바꾸면 바로 차이를 알 수 있습니다. 버튼 사이에 여백을 두려면 상위 노드(여기서는 box 컴포넌트)에 [margin](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#margin-property)이나 [padding](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/#padding-property)을 설정할 수 있습니다. 이 튜토리얼에서는 padding을 추가하겠습니다.

1. 트리 보기에서 버튼 두 개가 들어 있는 **box [vertical]**를 클릭합니다.
1. 속성 영역의 **Padding** 섹션에서 **paddingTop** 속성을 `10px`로 설정합니다.

이제 버튼 사이에 더 넓은 간격이 생겼습니다.

![버튼 스타일 지정](https://developers.line.biz/media/messaging-api/using-flex-message-simulator/en-style-buttons.webp)

이것으로 디지털 명함 만들기 튜토리얼을 모두 마쳤습니다.

## 다음 단계 

Flex Message를 작성했다면 [이 튜토리얼의 시작 부분](https://developers.line.biz/en/docs/messaging-api/using-flex-message-simulator/#copy-json)에서 소개한 것처럼 결과를 JSON으로 내보내세요. Messaging API로 Flex Message를 보낼 때 편리합니다. 자세한 내용은 [Messaging API를 호출하여 Flex Message 보내기](https://developers.line.biz/en/docs/messaging-api/using-flex-messages/#sending-messages-with-the-messaging-api)를 참고하세요.

## 결론 

Flex Message Simulator는 코드를 작성하지 않고도 Flex Message를 구상하고, 디자인하고, 프로토타입을 만들 수 있도록 도와주는 간단한 도구입니다. 이 튜토리얼처럼 Flex Message를 활용할 수 있는 사례는 무궁무진합니다. Flex Message Simulator를 사용하여 아이디어를 구체화하고, 프로토타입을 테스트하고, 기술적 장벽 없이 Flex Message 제작 속도를 높이세요. Flex Message Simulator로 독창적인 Flex Message를 만들어 보세요!

## 관련 페이지 

- [Flex Message 보내기](https://developers.line.biz/en/docs/messaging-api/using-flex-messages/)
- [Flex Message 요소](https://developers.line.biz/en/docs/messaging-api/flex-message-elements/)
- [Flex Message 레이아웃](https://developers.line.biz/en/docs/messaging-api/flex-message-layout/)
- [Flex Message](https://developers.line.biz/en/reference/messaging-api/#flex-message) (Messaging API 레퍼런스)
