- vanilla js를 연습하는 레포지토리

## Vanilla JS

- Guess Number
- To Do List
- To Do List2 (+pending)
- Candy Crush Game
- Bankist
- Event Propagation
- Mapty
- Forkify
- Quote Generator
- Infinity Scroll
- BankistWeb

<br>

#### To Do List

- **append vs appendChild**
  - _append_ : 노드 객체나 문자열(DOMString) 사용가능, 여러 자식 요소 설정 가능
  - _appendChild_ : 오직 Node 객체만 받을 수 있음, 한번에 하나의 노드만 추가 가능

<br>

#### Candy Crush Game

- **Element.setAttribute(name, value)**
  - 선택한 요소의 속성 이름, 값을 넣음
- **Array.prototype.every()**
  - 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트
  - 반환값 _true, false_

<br>

#### Bankisk

- **Element.insertAdjacentHTML(position, text);**
  - _position : beforebegin, afterbegin, beforeend, afterend_
- **Math.abs()** : 주어진 숫자의 절대값
- **Array.prototype.reduce()**
  - 리듀서 함수실행하고 **하나의 결과값을 반환**
- **Array.prototype.find()**
  - 판별 함수를 만족하는 **첫 번째 요소의 값**을 반환. 없으면 **_undefined_**
- **HTMLElement.blur()** : lose focus
- **Array.prototype.some()**
  - every랑 차이점은, 함수의 반환값이 _true_ 일 때까지만 원소를 계속 확인
- **Array.prototype.flat()**
  - 하위 배열 요소를 지정한 깊이까지 재귀적으로 이어붙인 새로운 배열을 생성
  - _arr.flat([depth])_ 기본값은 1
- **Array.prototype.sort()**
  - arr.sort([compareFunction])
    - return < 0 이면, A,B
    - return > 0 이면, B,A
- **String.prototype.padStart()**
  - _str.padStart(targetLength [, padString])_
    - _targetLength_ :목표 문자열 길이. 현재 문자열의 길이보다 작다면 채워넣지 않고 그대로 반환
    - _padString_ : 현재 문자열에 채워넣을 다른 문자열

<br>

#### Event Propagation

- **이벤트 버블링(Event Bubbling)** : 특정 화면 요소에서 이벤트가 발생했을 때 해당 이벤트가 더 상위의 화면 요소들로 전달되어 가는 특성
  - 상위의 화면 요소란? HTML 요소는 기본적으로 트리 구조
  - 트리 구조상으로 한 단계 위에 있는 요소 = 상위 요소, body 태그 = 최상위 요소
- **이벤트 캡쳐링(Event Capturing)** : 이벤트 버블링과 반대 방향으로 진행되는 이벤트 전파 방식
- 이벤트핸들러에서 _currentTarget_ 은 _this_ 와 같다
- **e.stopPropagation()** 으로 이벤트 전파를 막을수 있다.
- **addEventListener** 의 **세번째 파라미터**
  - 디폴트는 _false_
  - _true_ 로 설정하면 이벤트 버블링과 반대 방향으로 탐색
- **이벤트 위임(Event Delegation)** : 하위 요소에 각각 이벤트를 붙이지 않고 상위 요소에서 하위 요소의 이벤트들을 제어하는 방식

<br>

#### Mapty App: OOP, Geolocation

> Map Library : [https://leafletjs.com/](https://leafletjs.com/)

- navigator.geolocation
- **Element.closest()**
  - 가깝게 조건에 만족한 부모 요소가 반환. (_querySelector_ 의 반대와 비슷)
- **isFinite()** : 값이 유한수인지 판별

<br>

#### Forkify

- **polyfill** 이란?
  - 특정 기능이 지원되지 않는 브라우저를 위해, 사용할 수 있는 코드 조각이나 플러그인
  - 과거에는 _@babel/polyfill_ 패키지를 직접 전역 스코프에 가져오는(import) 방식으로 바벨 폴리필을 추가했지만 _deprecated_ 됨
  - 현재는 **_core-js/stable_** 과 **_regenerator-runtime/runtime_** 패키지를 직접 전역 스코프에 삽입하는 방식
- **window.location.hash**
- **addEventListener('hashchange', ...)**
- **addEventListener('load', ...)**
- **Promise.race()**
  - Promise 객체를 반환
  - iterable 안에 있는 프로미스 중에 **가장 먼저 완료된 것**의 결과값으로 그대로 **이행하거나 거부**
- **document.createRange().createContextualFragment(tagString)**
- **Element.attributes** : 요소의 속성 모음 반환
- **Element.setAttribute(name, value);** : 요소의 속성 값 설정

<br>

#### Quote Generator

- **_window.open(url, windowName, [windowFeatures])_**
- **_HTMLElement.hidden = true | false;_**

<br>

#### Infinity Scroll

- _EventTarget.addEventListener('scroll', func)_
- _EventTarget.addEventListener('load', func)_ : load 이벤트는 리소스와 그것에 의존하는 리소스들의 로딩이 완료되면 실행
- **window.innerHeight** : 브라우저 윈도우의 현재 전체 높이
- **window.scrollY** : 페이지 top 에서부터, 유저가 스크롤한 거리
- _HTMLElement.offsetHeight_
  - **document.body.offsetHeight** : body의 모든 높이 (보고있지않은 부분까지 포함)

<br>

#### Bankist Web

- **Data attributes**
  - `dataset`은 읽을때 camelCase로

```html
<img src="./logo.png" id="logo" data-version-number="1.0" />
```

```js
console.log(logo.dataset.versionNumber); // 1.0
```

- classList
  - logo.**classList.add**('c','d');
  - logo.**classList.remove**('c','d');
  - logo.**classList.toggle**('c');
  - logo.**classList.contains**('c'); : 지정한 클래스 값이 엘리먼트의 class 속성에 존재하는지 확인
- **append, prepend, after, before**
  - _prepend_ : 선택 요소 내부의 시작 부분에 삽입 (_append_ 는 끝에)
  - _after()_ : 선택한 요소 뒤에 삽입
  - _before()_ : 선택한 요소 앞에 삽입

```html
<!-- prepend -->
<div>
  <div>insert</div>
  <div>child</div>
</div>

<!-- before -->
<div>insert</div>
<div>
  <div>child</div>
</div>
```

- Delete Element
  - 기존에는 부모요소 선택후 _removeChild_ 했지만 (_Element.parentElement.removeChild(element)_)
  - **_Element.remove()_** 이렇게 가능
    - 차이점: remove() 는 노드를 메모리에서 삭제하고 종료하지만 removeChild는 관계끊은 노드의 참조를 반환함. 따라서 반환된 노드 참조를 변수에 담아 다른 DOM에 붙이기 가능
- **_getBoundingClientRect()_** : 요소의 위치 값을 얻기
  - top , y : 화면 **상단 부터 대상의 처음** 위치 값
  - bottom : 화면 **상단 부터 대상의 끝** 위치 값
  - left , x : 화면 **좌측 부터 대상의 처음** 위치 값
  - right : 화면 **좌측 부터 대상의 끝** 위치 값
  - width : 대상의 길이
  - height : 대상의 높이
- **window.pageYOffset** : 수직 방향으로 스크롤된 거리
- **window.scrollTo(x,y)** : 지정된 위치로 스크롤
- **element.scrollIntoView** : 호출된 요소가 사용자에게 표시되도록 스크롤. 계산없이 이동 가능
  - _element.scrollIntoView({ behavior: "smooth" })_
