# LINE MINI App의 안전 영역

노치가 있는 기기에서도 LINE MINI App의 모든 요소가 보이도록 CSS를 사용하여 LINE MINI App을 안전 영역 안에 배치하는 것을 권장합니다.
LINE MINI App은 일반 모드와 가로 모드를 모두 지원합니다. 일반 모드와 가로 모드는 서로 다른 안전 영역이 필요합니다.

LINE MINI App 페이지의 padding을 다음과 같이 설정하세요.

<!-- table of contents -->

## 일반 모드의 경우 

- 하단: 34px

padding 예시:
```
{
  padding-bottom: 34px;
}
```

![](https://developers.line.biz/media/line-mini-app/mini_design_safearea_normal.png)

## 가로 모드의 경우 

- 좌우: 44px
- 하단: 21px

padding 예시:
```
{
  padding-right: 44px;
  padding-bottom: 21px;
  padding-left: 44px;
}
```

![](https://developers.line.biz/media/line-mini-app/mini_design_safearea_landscape.png)
