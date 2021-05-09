## Vanilla JS

- Guess Number
- To Do List
- To Do List2 (pending)
- Candy Crush Game
- Bankisk
- Event Propagation
- Mapty

<br>

#### To Do List

- **append vs appendChild**
  - _append_ : 노드 객체나 문자열(DOMString) 사용가능, 여러 자식 요소 설정 가능
  - _appendChild_ : 오직 Node 객체만 받을 수 있음, 한번에 하나의 노드만 추가 가능

#### Candy Crush Game

- **Element.setAttribute(name, value)**
  - 선택한 요소의 속성 이름, 값을 넣음
- **Array.prototype.every()**
  - 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트
  - 반환값 _true, false_

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

#### Mapty App: OOP, Geolocation

> Map Library : [https://leafletjs.com/](https://leafletjs.com/)

- navigator.geolocation
- **Element.closest()**
  - 가깝게 조건에 만족한 부모 요소가 반환. (querySelector의 반대와 비슷)
- **isFinite()** : 값이 유한수인지 판별

#### Forkify

- **polyfill** 이란?
  - 특정 기능이 지원되지 않는 브라우저를 위해, 사용할 수 있는 코드 조각이나 플러그인
  - 과거에는 _@babel/polyfill_ 패키지를 직접 전역 스코프에 가져오는(import) 방식으로 바벨 폴리필을 추가했지만 _deprecated_ 됨
  - 현재는 **_core-js/stable_** 과 **_regenerator-runtime/runtime_** 패키지를 직접 전역 스코프에 삽입하는 방식
