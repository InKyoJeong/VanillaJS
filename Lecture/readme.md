- **append vs appendChild**
  - _append_ : 노드 객체나 문자열(DOMString) 사용가능, 여러 자식 요소 설정 가능
  - _appendChild_ : 오직 Node 객체만 받을 수 있음, 한번에 하나의 노드만 추가 가능
- **Element.insertAdjacentHTML(position, text);**
  - _position : beforebegin, afterbegin, beforeend, afterend_
- **Element.closest()**
  - 가깝게 조건에 만족한 부모 요소가 반환. (_querySelector_ 의 반대와 비슷)
- **isFinite()** : 값이 유한수인지 판별

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

#### Infinity Scroll

- _EventTarget.addEventListener('scroll', func)_
- _EventTarget.addEventListener('load', func)_ : load 이벤트는 리소스와 그것에 의존하는 리소스들의 로딩이 완료되면 실행
- **window.innerHeight** : 브라우저 윈도우의 현재 전체 높이
- **window.scrollY** : 페이지 top 에서부터, 유저가 스크롤한 거리
- _HTMLElement.offsetHeight_
  - **document.body.offsetHeight** : body의 모든 높이 (보고있지않은 부분까지 포함)

<br>

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

<br/>

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

<br>

#### Handling Event

- 1. **_addEventListener_**

```js
const h1 = document.querySelector("h1");
h1.addEventListener("mouseenter", function (e) {
  alert("addEvent H1");
});
```

- 2. 이런 방법도 있다. (old)

```js
h1.onmouseenter = alert("onmouseenter H1");
```

##### addEventListener가 더 나은 이유

1.  같은 이벤트에 여러 이벤트리스너를 등록할수 있다. 두번째방법은 다시 등록한다면 첫번째를 덮어쓴다.
2.  addEventListener는 더이상 사용하지 않을때 지울 수 있다.

```js
const alertH1 = function (e) {
  alert("addEvent H1");

  h1.removeEventListener("mouseenter", alertH1); // alert가 한번만 발생하고 끝난다.
};

h1.addEventListener("mouseenter", alertH1);

// 또는 setTimeout
setTimeout(() => h1.removeEventListener("mouseenter", alertH1), 3000);
```

<Br>

<!-- - **new IntersectionObserver(obsCallback, obsOptions);** -->
