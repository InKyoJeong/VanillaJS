## Vanilla JS

- Guess Number
- To Do List
- Candy Crush Game
- Bankisk

<br>

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
