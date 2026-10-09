# 프로젝트 설정하기

LINE SDK for Unity는 iOS 또는 Android 플랫폼에서 LINE SDK를 사용할 수 있는 인터페이스를 제공합니다. Unity Editor에서 LINE SDK를 사용하고 이를 플랫폼으로 내보내려면 개발 환경에 몇 가지가 필요합니다.

## Unity 요구 사항 

- iOS 및 Android 모듈이 설치된 Unity 2020.3.15 이상
- 유효한 Unity Personal, Unity Plus 또는 Unity Pro 구독

## iOS에 설치하기 

iOS에서 LINE SDK for Unity를 통합하려면 다음이 필요합니다.

- 배포 대상(deployment target)으로 iOS 13.0 이상
- Xcode 14.1 이상

iOS에서 LINE SDK for Unity는 LINE SDK for iOS Swift를 감싸는 래퍼로 동작합니다. 프로젝트를 Xcode로 내보낼 때 필요한 라이브러리를 추가합니다.

## Android에 설치하기 

Unity가 프로젝트를 Android 플랫폼으로 빌드하는 데 Android SDK를 사용하므로 Android SDK가 설치되어 있어야 합니다. 이전에 [Android 개발을 위해 Unity를 설정](https://docs.unity3d.com/Manual/android-sdksetup.html)했다면 이미 Android SDK가 있는 것입니다.
