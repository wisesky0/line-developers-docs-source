# LIFF 플러그인

<!-- table of contents -->

## LIFF 플러그인이란 

LIFF 플러그인은 LIFF SDK를 확장하는 기능입니다. LIFF 플러그인을 사용하면 자체 API를 LIFF SDK에 추가하거나 LIFF API의 동작을 변경할 수 있습니다.

LIFF 플러그인은 특정 속성과 특정 메서드를 가진 객체 또는 클래스입니다.

## LIFF 플러그인의 운영 환경 

LIFF 플러그인은 LIFF v2.19.0 이상에서 사용할 수 있습니다.

## LIFF 플러그인 사용하기 

[`liff.use()`](https://developers.line.biz/en/reference/liff/#use) 메서드를 사용하여 LIFF 플러그인을 활성화합니다. LIFF 플러그인을 [`liff.use()`](https://developers.line.biz/en/reference/liff/#use) 메서드에 전달하면 LIFF 플러그인이 활성화됩니다. LIFF 플러그인이 활성화되면 `liff` 객체가 확장되고 LIFF 플러그인의 API를 사용할 수 있게 됩니다.

다음은 `GreetPlugin`이라는 LIFF 플러그인을 활성화하고 `liff.$greet.hello()` 메서드를 실행하는 예시입니다.

### LIFF 플러그인이 클래스인 경우 

LIFF 플러그인이 클래스인 경우 인스턴스를 [`liff.use()`](https://developers.line.biz/en/reference/liff/#use) 메서드에 전달해야 합니다.

```js
class GreetPlugin {
  constructor() {
    this.name = "greet";
  }

  install() {
    return {
      hello: this.hello,
    };
  }

  hello() {
    console.log("Hello, World!");
  }
}

liff.use(new GreetPlugin());

liff.$greet.hello(); // Hello, World!

liff
  .init({
    liffId: "123456-abcedfg", // 자신의 liffId를 사용하세요
  })
  .then(() => {
    // ...
  });
```

### LIFF 플러그인이 객체인 경우 

```js
const hello = () => {
  console.log("Hello, World!");
};

const greetPlugin = {
  name: "greet",
  install() {
    return {
      hello,
    };
  },
};

liff.use(greetPlugin);

liff.$greet.hello(); // Hello, World!

liff
  .init({
    liffId: "123456-abcedfg", // 자신의 liffId를 사용하세요
  })
  .then(() => {
    // ...
  });
```

위 예시에서 보듯이 LIFF 플러그인이 활성화되면 `name` 속성의 값 앞에 `$`가 붙은 속성이 `liff` 객체에 추가됩니다. 이를 통해 `liff.${LIFF 플러그인의 name 속성 값}.{속성 이름}` 및 `liff.${LIFF 플러그인의 name 속성 값}.{메서드 이름}()` 형식으로 LIFF 플러그인의 API를 사용할 수 있습니다.

## LIFF 플러그인 만들기 

[`name`](https://developers.line.biz/en/docs/liff/liff-plugin/#name) 속성과 [`install()`](https://developers.line.biz/en/docs/liff/liff-plugin/#install) 메서드를 가진 객체 또는 클래스로 LIFF 플러그인을 만들 수 있습니다.

다음은 API로 `hello` 메서드와 `goodbye()` 메서드를 제공하는 `GreetPlugin`이라는 LIFF 플러그인의 예시입니다.

### LIFF 플러그인이 클래스인 경우 

```js
class GreetPlugin {
  constructor() {
    this.name = "greet";
  }

  install() {
    return {
      hello: this.hello,
      goodbye: this.goodbye,
    };
  }

  hello() {
    console.log("Hello, World!");
  }

  goodbye() {
    console.log("Goodbye, World!");
  }
}

liff.use(new GreetPlugin());

liff.$greet.hello(); // Hello, World!
liff.$greet.goodbye(); // Goodbye, World!
```

### LIFF 플러그인이 객체인 경우 

```js
const hello = () => {
  console.log("Hello, World!");
};

const goodbye = () => {
  console.log("Goodbye, World!");
};

const greetPlugin = {
  name: "greet",
  install() {
    return {
      hello,
      goodbye,
    };
  },
};

liff.use(greetPlugin);

liff.$greet.hello(); // Hello, World!
liff.$greet.goodbye(); // Goodbye, World!
```

### name 속성 

`name` 속성의 값은 LIFF 플러그인의 이름입니다. `name` 속성에는 문자열을 지정하세요.

지정한 값은 `liff.${LIFF 플러그인의 name 속성 값}`과 같이 `liff` 객체의 속성 이름이 됩니다.

### install() 메서드 

`install()` 메서드는 다음 작업을 수행하는 함수입니다.

- [LIFF 플러그인의 초기화 과정 기술하기](https://developers.line.biz/en/docs/liff/liff-plugin/#describe-initialization-process-for-liff-plugin)
- [LIFF 플러그인의 API 정의하기](https://developers.line.biz/en/docs/liff/liff-plugin/#define-liff-plugin-api)

#### LIFF 플러그인의 초기화 과정 기술하기 

`install()` 메서드는 LIFF 플러그인이 활성화될 때 [`liff.use()`](https://developers.line.biz/en/reference/liff/#use) 메서드에 의해 실행됩니다. 따라서 `install()` 메서드 안에 LIFF 플러그인의 초기화 과정을 기술할 수 있습니다.

#### LIFF 플러그인의 API 정의하기 

LIFF 플러그인의 API는 `install()` 메서드의 반환값으로 정의합니다. 객체를 반환하면 여러 API를 정의할 수 있습니다.

LIFF 플러그인에 API가 하나뿐이라면 해당 API를 반환값으로 사용할 수도 있습니다. 다음은 객체 대신 함수를 반환하는 `install()` 메서드의 예시입니다.

```js
class GreetPlugin {
  constructor() {
    this.name = "greet";
  }

  install() {
    return this.hello;
  }

  hello() {
    console.log("Hello, World!");
  }
}

liff.use(new GreetPlugin());

liff.$greet(); // Hello, World!
```

#### `install()` 메서드의 인자 

`install()` 메서드는 첫 번째 인자로 [`context`](https://developers.line.biz/en/docs/liff/liff-plugin/#context) 객체를, 두 번째 인자로 [`option`](https://developers.line.biz/en/docs/liff/liff-plugin/#option)을 받습니다.

```js
class GreetPlugin {
  constructor() {
    this.name = "greet";
  }

  install(context, option) {}
}
```

##### `context` 객체 

`install()` 메서드의 첫 번째 인자입니다. `context` 객체에는 다음 두 가지 속성이 있습니다.

| 속성 | 값 |
| --- | --- |
| `liff` | `liff` 객체 |
| `hooks` | [훅에 콜백을 등록](https://developers.line.biz/en/docs/liff/liff-plugin/#register-callback-with-hook)하는 메서드를 제공하는 객체 |

##### `option` 

`install()` 메서드의 두 번째 인자입니다. [`liff.use()`](https://developers.line.biz/en/reference/liff/#use) 메서드의 두 번째 인자로 지정한 값이 전달됩니다. [`liff.use()`](https://developers.line.biz/en/reference/liff/#use) 메서드의 두 번째 인자를 지정하지 않으면 `option`의 값은 `undefined`가 됩니다.

[`liff.use()`](https://developers.line.biz/en/reference/liff/#use) 메서드에 인자를 전달하여 `option`을 사용하면 LIFF 플러그인의 동작을 커스터마이징할 수 있습니다.

## 훅에 대하여 

훅은 LIFF 플러그인에서 LIFF API를 처리하는 도중 특정 시점에 미리 등록된 콜백을 실행할 수 있게 하는 메커니즘입니다. 훅은 JavaScript의 이벤트 처리와 비슷하게 생각할 수 있습니다. 훅에 콜백이 등록되어 있으면 훅이 실행되는 시점에 콜백이 실행됩니다.

LIFF 플러그인은 LIFF API가 제공하는 훅을 사용하는 것 외에도 자체 훅을 제공할 수 있습니다.

### LIFF API의 훅 

현재 LIFF API가 제공하는 훅은 [`liff.init()`](https://developers.line.biz/en/reference/liff/#initialize-liff-app) 메서드에 대한 것뿐입니다.

<table>
  <thead>
    <tr>
      <th>LIFF API</th>
      <th>훅</th>
      <th>훅 유형</th>
      <th>훅이 실행되는 시점</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2"><code>liff.init()</code> 메서드</td>
      <td><code>before</code> 훅</td>
      <td><a href="#async-hook">비동기 훅</a></td>
      <td><code>liff.init()</code>을 호출한 직후(LIFF 앱을 초기화하기 전)</td>
    </tr>
    <tr>
      <td><code>after</code> 훅</td>
      <td><a href="#async-hook">비동기 훅</a></td>
      <td><code>successCallback</code>을 호출하기 직전(LIFF 앱을 초기화한 후)</td>
    </tr>
  </tbody>
</table>

### 훅 유형 

훅에는 [동기 훅](https://developers.line.biz/en/docs/liff/liff-plugin/#sync-hook)과 [비동기 훅](https://developers.line.biz/en/docs/liff/liff-plugin/#async-hook)의 두 가지 유형이 있습니다.

#### 동기 훅 

동기 훅은 등록된 콜백을 동기적으로 처리합니다. 등록된 콜백은 등록된 순서대로 처리됩니다. 등록된 콜백의 반환값은 무시됩니다.

#### 비동기 훅 

비동기 훅은 등록된 콜백을 비동기적으로 처리합니다. 등록된 콜백은 `Promise.all()` 메서드를 사용하여 병렬로 처리됩니다. 등록된 콜백의 반환값은 반드시 `Promise` 객체여야 합니다.

### 훅에 콜백 등록하기 

훅에 콜백을 등록하려면 [`install()`](https://developers.line.biz/en/docs/liff/liff-plugin/#install) 메서드의 [`context.hooks`](https://developers.line.biz/en/docs/liff/liff-plugin/#context) 속성을 사용하세요.

다음은 [`liff.init()`](https://developers.line.biz/en/reference/liff/#initialize-liff-app) 메서드의 `before` 훅과 `after` 훅에 콜백을 등록하는 예시입니다. [`liff.init()`](https://developers.line.biz/en/reference/liff/#initialize-liff-app) 메서드가 실행되면 `before` 훅과 `after` 훅이 실행되고 등록된 콜백이 실행됩니다.

`before` 훅과 `after` 훅은 비동기 훅이므로 등록된 콜백은 반드시 `Promise` 객체를 반환해야 합니다.

```js
class GreetPlugin {
  constructor() {
    this.name = "greet";
  }

  install(context) {
    context.hooks.init.before(this.initBefore);
    context.hooks.init.after(this.initAfter);
    return {
      hello: this.hello,
      goodbye: this.goodbye,
    };
  }

  hello() {
    console.log("Hello, World!");
  }

  goodbye() {
    console.log("Goodbye, World!");
  }

  initBefore() {
    console.log("before hook is called");
    return Promise.resolve();
  }

  initAfter() {
    console.log("after hook is called");
    return Promise.resolve();
  }
}

liff.use(new GreetPlugin());

liff
  .init({
    liffId: "123456-abcedfg", // 자신의 liffId를 사용하세요
  })
  .then(() => {
    // ...
  });
```

### 훅 만들기 

훅은 `SyncHook` 클래스 또는 `AsyncHook` 클래스의 인스턴스로 만들 수 있습니다.

| 훅 유형                              | 클래스      |
| ------------------------------------ | ----------- |
| <a href="#sync-hook">동기 훅</a>     | `SyncHook`  |
| <a href="#async-hook">비동기 훅</a>  | `AsyncHook` |

다음은 `helloBefore`와 `helloAfter`라는 훅을 만드는 예시입니다. `SyncHook` 클래스와 `AsyncHook` 클래스는 `@liff/hooks` 패키지에서 가져와야 한다는 점에 유의하세요.

만든 훅을 실행하려면 `SyncHook` 클래스와 `AsyncHook` 클래스의 인스턴스에서 [`call()`](https://developers.line.biz/en/docs/liff/liff-plugin/#call) 메서드를 실행하세요.

```js
import { SyncHook, AsyncHook } from "@liff/hooks";

class GreetPlugin {
  constructor() {
    this.name = "greet";
    this.hooks = {
      helloBefore: new SyncHook(),
      helloAfter: new AsyncHook(),
    };
  }

  install(context) {
    return {
      hello: this.hello.bind(this),
      goodbye: this.goodbye,
    };
  }

  hello() {
    this.hooks.helloBefore.call();
    console.log("Hello, World!");
    this.hooks.helloAfter.call();
  }

  goodbye() {
    console.log("Goodbye, World!");
  }
}
```

만든 훅은 다른 LIFF 플러그인이 콜백을 등록하는 데 사용할 수 있습니다. 다음은 `GreetPlugin`이라는 LIFF 플러그인의 `helloBefore` 훅과 `helloAfter` 훅에 콜백을 등록하는 예시입니다.

```js
import { SyncHook, AsyncHook } from "@liff/hooks";

class GreetPlugin {
  constructor() {
    this.name = "greet";
    this.hooks = {
      helloBefore: new SyncHook(),
      helloAfter: new AsyncHook(),
    };
  }

  install(context) {
    return {
      hello: this.hello.bind(this),
      goodbye: this.goodbye,
    };
  }

  hello() {
    this.hooks.helloBefore.call();
    console.log("Hello, World!");
    this.hooks.helloAfter.call();
  }

  goodbye() {
    console.log("Goodbye, World!");
  }
}

class OtherPlugin {
  constructor() {
    this.name = "other";
  }

  install(context) {
    context.hooks.$greet.helloBefore(this.greetBefore);
    context.hooks.$greet.helloAfter(this.greetAfter);
  }

  greetBefore() {
    console.log("helloBefore hook is called");
  }

  greetAfter() {
    console.log("helloAfter hook is called");
    return Promise.resolve();
  }
}

liff.use(new GreetPlugin());
liff.use(new OtherPlugin());
liff.$greet.hello();
// helloBefore hook is called
// Hello, World!
// helloAfter hook is called
```

#### `call()` 메서드 

`call()` 메서드는 훅을 실행하는 함수입니다. `call()` 메서드에는 원하는 개수의 인자를 전달할 수 있습니다. `call()` 메서드에 전달된 인자는 훅에 등록된 콜백에서 인자로 받을 수 있습니다.

다음은 훅의 `call()` 메서드에 인자를 전달하고 콜백이 이를 받도록 하는 예시입니다.

```js
import { SyncHook, AsyncHook } from "@liff/hooks";

class GreetPlugin {
  constructor() {
    this.name = "greet";
    this.hooks = {
      helloBefore: new SyncHook(),
      helloAfter: new AsyncHook(),
    };
  }

  install(context) {
    return {
      hello: this.hello.bind(this),
      goodbye: this.goodbye,
    };
  }

  hello() {
    this.hooks.helloBefore.call("foo");
    console.log("Hello, World!");
    this.hooks.helloAfter.call("foo", 0);
  }

  goodbye() {
    console.log("Goodbye, World!");
  }
}

class OtherPlugin {
  constructor() {
    this.name = "other";
  }

  install(context) {
    context.hooks.$greet.helloBefore(this.greetBefore);
    context.hooks.$greet.helloAfter(this.greetAfter);
  }

  greetBefore(foo) {
    console.log(foo); // foo
  }

  greetAfter(foo, bar) {
    console.log(foo, bar); // foo 0
    return Promise.resolve();
  }
}

liff.use(new GreetPlugin());
liff.use(new OtherPlugin());
liff.$greet.hello(); // Hello, World!
```

## 공식 LIFF 플러그인 

LY Corporation은 다음 공식 LIFF 플러그인을 제공합니다.

- [LIFF Inspector](https://developers.line.biz/en/docs/liff/liff-plugin/#liff-inspector)
- [LIFF Mock](https://developers.line.biz/en/docs/liff/liff-plugin/#liff-mock)

### LIFF Inspector 

LIFF Inspector는 LIFF 앱을 디버깅하기 위한 LIFF 플러그인입니다. LIFF Inspector를 사용하면 LIFF 앱을 실행하는 기기와 다른 PC에서 [Chrome DevTools](https://developer.chrome.com/docs/devtools/)로 LIFF 앱을 디버깅할 수 있습니다.

LIFF Inspector에 대한 자세한 내용은 GitHub의 [README](https://github.com/line/liff-inspector/blob/main/README.md) 또는 [npm](https://www.npmjs.com/package/@line/liff-inspector)의 **Readme** 탭을 참조하세요.

- [GitHub](https://github.com/line/liff-inspector)
- [npm](https://www.npmjs.com/package/@line/liff-inspector)

### LIFF Mock 

LIFF Mock은 LIFF 앱의 테스트를 쉽게 할 수 있도록 하는 LIFF 플러그인입니다. LIFF Mock을 사용하면 LIFF SDK에 모의(mock) 모드를 추가할 수 있습니다. 모의 모드에서는 LIFF 앱이 LIFF 서버와 독립적으로 동작하며 LIFF API는 모의 데이터를 반환합니다. 따라서 단위 테스트나 부하 테스트를 더 쉽게 수행할 수 있습니다.

LIFF Mock에 대한 자세한 내용은 GitHub의 [README](https://github.com/line/liff-mock/blob/main/README.md) 또는 [npm](https://www.npmjs.com/package/@line/liff-mock)의 **Readme** 탭을 참조하세요.

- [GitHub](https://github.com/line/liff-mock)
- [npm](https://www.npmjs.com/package/@line/liff-mock)
