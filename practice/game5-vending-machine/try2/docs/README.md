## 자판기

> 우아한테크코스 / 프리코스 3주차 미션 / 정인교

#### 📌Contents

- [폴더 구조](#folder)
- [구현 과정](#process)
- [구현할 기능 목록](#feature)

<br>

## <a name="folder"></a>폴더 구조

```sh
├── docs/README.md
├── src
│ ├── classes
│ │   ├── Coin.js                      # 이름에 따라 개수가 0개인 동전을 생성
│ │   └── Product.js                   # 이름/가격/개수에 따라 상품을 생성
│ ├── components
│ │   ├── charge
│ │   │    ├── ChargeContainer.js      # 잔돈 충전 컨테이너
│ │   │    ├── ChargeInput.js          # 잔돈 충전 입력하는 부분
│ │   │    └── ChargeTable.js          # 보유한 잔돈 현황 테이블 부분
│ │   ├── product
│ │   │    ├── ProductContainer.js     # 상품 관리 컨테이너
│ │   │    ├── ProductInput.js         # 상품 등록하는 부분
│ │   │    └── ProductTable.js         # 등록된 상품 현황 테이블 부분
│ │   └── purchase
│ │        ├── PurchaseContainer.js    # 상품 구매 컨테이너
│ │        ├── PurchaseInput.js        # 구매 금액을 입력하는 부분
│ │        ├── PurchaseTable.js        # 구매 가능한 상품 현황 테이블 부분
│ │        └── ReturnCoinTable.js      # 잔돈 반환과 결과를 나타내는 테이블 부분
│ ├── constants/index.js
│ ├── observer
│ │   ├── Event.js
│ │   └── State.js
│ ├── utils
│ │   ├── template
│ │   │    ├── chargeTemplate.js       # 잔돈 충전과 관련된 템플릿
│ │   │    ├── mainTemplate.js         # 초기 화면과 관련된 템플릿
│ │   │    ├── productTemplate.js      # 상품 관리와 관련된 템플릿
│ │   │    └── purchaseTemplate.js     # 상품 구매와 관련된 템플릿
│ │   ├── clearInput.js
│ │   ├── localStorage.js              # 로컬스토리지값을 얻거나 저장하는 함수
│ │   ├── makeCoinArray.js             # 동전을 배열로 반환하는 함수 모음
│ │   ├── selector.js                  # querySelector 단축 함수 모음
│ │   ├── tableStyle.js                # 테이블 스타일과 관련된 함수 모음
│ │   └── valid.js                     # 입력값을 검증하는 함수 모음
│ ├── App.js
│ └── index.js
└── index.html
```

<br>

## <a name="process"></a>구현 과정

- components 폴더를 만들고 기능에 따라 `product`(상품관리) /`charge`(잔돈충전) / `purchase`(상품구매)로 나누었습니다.
- 각 폴더 내부에 **Container(컨테이너)** 를 만들고 내부를 **Input(입력)** / **Table(테이블)** 로 나누었습니다.
- 컴포넌트에서 변경이 일어나면 다른 부분이 업데이트 되도록 이벤트 옵저버를 만들어서 추가하였습니다.
  - 잔돈 충전 후 Input(충전금액) -> Table로 알림
  - 상품 구매 후 Table -> Input(투입금액)으로 알림
  - 잔돈 반환 후 Table -> Input(투입금액)으로 알림

<br>

## <a name="feature"></a>구현할 기능 목록

#### 초기 설정

- [x] 세가지 메뉴 탭을 생성하기

#### 상품 관리

- [x] 상품명, 가격, 수량을 입력받는 기능 추가하기
- [x] 상품 입력을 검증하기
  - [x] 상품 가격이 100원부터 시작하고, 10원으로 나누어 떨어지는지 확인하기
  - [x] 이름이 공백이 되지 않도록 확인하기
  - [x] 상품의 수량이 1이상이고 정수인지 확인하기
  - [x] 💥 같은 상품이 존재한다면??
- [x] 상품 등록이 불가능하면 alert 경고창을 표시하기
- [x] 올바르게 입력하면 입력창을 초기화하기
- [x] 저장된 상품을 조회하는 테이블 추가
- [x] 추가한 상품을 localStorage에 저장하기
- [x] 추가한 상품을 테이블에 표시하기

#### 잔돈 충전

- [x] 잔돈 금액을 입력받는 기능 추가하기
- [x] 잔돈 입력을 검증하기
  - [x] 금액이 10원으로 나누어 떨어지는지 확인하기
- [x] 충전이 불가능하면 alert 경고창을 표시하기
- [x] 충전을 누르면 잔돈 금액에 맞게 무작위로 동전을 생성하기
- [x] 충전을 누르면 생성한 동전을 localStorage에 저장하기
- [x] 현재 자판기가 보유한 총 금액을 표시하기 (최초에는 빈값 표시)
- [x] 저장된 동전을 조회하는 테이블 추가
- [x] 충전을 누르면 자판기가 보유한 동전을 테이블에 표시하기

#### 상품 구매

- [x] 구매 금액을 입력받는 기능 추가하기
- [x] 구매 금액을 검증하기
  - [x] 금액이 10원으로 나누어 떨어지는지 확인하기
- [x] 투입하기를 누르면 금액을 localStorage에 저장하기
- [x] 투입 금액을 표시하기
- [x] 구매할 수 있는 상품 현황을 표시하기
- [x] 구매 가능한 제품인지 검증하기
  - [x] 남은 금액이 부족한지 확인하기
- [x] 구매 불가능하면 alert 경고창을 표시하기
- [x] 구매 버튼을 누르면 상품의 개수를 차감하기
  - [x] 💥 남은 개수가 0개가 된다면? -> 로컬스토리지에서 삭제
- [x] 구매 버튼을 누르면 가격에 따라 투입 금액을 차감하기
- [x] 차감한 결과를 화면에 표시하기

#### 잔돈 반환

- [x] 잔돈 테이블을 추가하기 (최초에는 빈값 표시)
- [x] 반환 버튼을 누르면 보유한 동전의 최소 개수의 동전을 구하기
- [x] 최소 개수 동전을 잔돈 테이블에 표시하기
- [x] 반환한 금액만큼 투입 금액에서 차감하기
- [x] 반환한 동전에 맞게 자판기 보유 동전에서 차감하기
- [x] 차감한 금액을 화면에 표시하기

<br>

## 과제 진행 소감

안녕하세요! 벌써 마지막 미션이네요. 온전히 자바스크립트에만 몰입할 수 있었던 3주였습니다.
미션을 진행하며 느낀점, 알게된 점을 공유합니다.

<br>

<details>
<summary>느낀점</summary>
<div markdown="1">

<hr />

- **학습 방식**

자바스크립트 기본기가 부족한 상태에서 프레임워크를 학습하기 급급했던 점을 반성하게 되었습니다. 사실 부끄럽지만 기존에는 자바스크립트만으로 간단한 투두리스트를 만들수 있을 정도였습니다. 그래서 새로운 미션들을 볼때마다 내가 이걸 구현할 수 있을까 라는 생각이 들었습니다. 그래서 프리코스 기간동안은 다른것은 신경쓰지않고 바닐라자바스크립트 자체에 몰입하기로 하였습니다.

각 미션을 2~3회씩 만들어보았는데, 다시 만들때마다 이전보다 더 좋은 방법이 없을지 고민하였습니다. 그리고 다른 지원자분들의 코드를 자주 읽었는데 이렇게 학습하는 과정에서 실력이 늘고있다고 느꼈습니다. 엄청난 성장은 아닐지라도 기존에는 구현하지 못했을 미션들을 구현할 수 있게 되었고, 그동안 학습했던 방식이 잘못됐음을 느낀것만으로도 성장했다고 생각합니다.

<br>

- **다른사람의 코드읽기**

프리코스에 참여하며 다른분들의 코드를 많이 읽게 되었고 이것이 정말 많은 도움이 되었습니다. 다른 분들의 코드를 통해 기능은 같지만 다양한 시각에서 구현하는 방법을 볼 수 있었고, 몰랐던 기능이나 개념 등을 알게되었습니다.

<br>

- **고민하기**

다른 사람이 내 코드를 본다고 생각하고 작성하는것과 그렇게 생각하지 않고 작성하는 것은 많은 차이가 있다고 느꼈습니다. 그래서 어떻게하면 읽기 편한 코드를 짤 수 있을지 고민하게 되었습니다. 평소에는 함수명이나 기능을 구현하는데 깊게 생각하지 않았는데 프리코스를 진행하며 함수명 하나에도 많은 고민을 하게 되었습니다. 또한 기능을 구현할때도 더 좋은 방법은 없을지, 어떻게 하면 더 깔끔하게 코드를 개선할 수 있을지 계속 생각하게 된다는 점이 좋았습니다.

<br>

</div>
</details>

<details>
<summary>알게된 내용 정리</summary>
<div markdown="1">

<hr />

#### table

- `table`태그에 `border='1'`을 지정하면 테두리가 생기긴 하지만 간격이 생기는데, 이를 없애기 위한 css 속성을 알게 되었습니다.
  - `border-collapse` : 표(table)의 테두리와 셀(td)의 테두리
    사이의 간격을 어떻게 처리할지 정함
  - `collapse` 옵션은 테두리 사이 간격을
    없애줌
- **collapse** 옵션과 **padding** 을 이용하여 미션 예시와 비슷하게 테이블을 만들 수 있었습니다.

```js
document.querySelector("table").style.borderCollapse = "collapse";
document.querySelectorAll("td").style.padding = "0.5em 2em";
```

<br>

#### 로컬스토리지와 세션스토리지

- 웹 스토리지에 대해 좀더 자세히 알게 되었는데 잘 정리되어있는 글이 있어서 공유합니다.
  - [https://ko.javascript.info/localstorage](https://ko.javascript.info/localstorage)

<br>

#### 키값이 숫자인 객체

잘 몰랐던 점인데, 객체의 키가 숫자일때 다시 콘솔을 찍어보면 오름차순으로 출력된다는 것을 알았습니다.

```js
// 키가 문자 일때
const stringKeyObj = { b: 0, a: 10 };
console.log(stringKeyObj); //{b: 0, a: 10}

// 키가 숫자 일때
const numberKeyObj = { 500: 11, 100: 22 };
console.log(numberKeyObj); // {100: 22, 500: 11}
```

따라서 만약 순서대로 객체 _value_ 를 배열로 얻는다면,

```js
Object.values(numberKeyObj); // [22, 11]

Object.values(numberKeyObj).reverse(); // [11, 22]
```

의도와 다르게 반대로 나오는것을 알 수 있었습니다. 따라서 객체 키 크기대로 배열을 얻으려면 `reverse()`를 써야했는데, 더 좋은 방법은 뭘까 고민해봐야겠습니다.

<br>

#### 옵저버 패턴

- 처음에 파일을 구성할때 입력부분과 테이블 부분으로 클래스를 나누었습니다.
- 그러나 순차적으로 이름을 입력하고, 숫자를 입력하고, 결과를 표시했던 자동차 경주 게임과 달리 자판기 미션에서는 모든 부분이 처음에 보여지기 때문에, 변경된 부분이 바로 보이지 않는 문제가 있었습니다.
- 따라서 이를 해결하는 과정에서 옵저버 패턴에 대해 알게 되었고, 이것을 사용해 보았습니다.
  - _Event_ 클래스를 만들어서 핸들러를 등록하고, 구독, 등록된 함수를 실행하는 기능 추가
  - _State_ 클래스를 이용하여 상태가 업데이트되면 등록된 핸들러를 실행

```js
class Event {
  constructor() {
    this.handlers = new Map();
    this.count = 0;
  }

  subscribe(handler) {
    this.handlers.set(++this.count, handler);
    return this.count;
  }

  fire() {
    this.handlers.forEach((v) => v());
  }
}

export default Event;
```

```js
import Event from "./Event.js";

class State {
  constructor() {
    this.event = new Event();
  }

  updateState() {
    this.event.fire();
  }
}

export default State;
```

<br>

- 이 방법을 이용해서 투입 금액에 따라 테이블을 다시 그리거나, 구매 또는 반환으로 인한 보유 금액을 업데이트할 수 있었습니다.

```js
// 이벤트 옵저버를 생성하는 예시
class Container {
  constructor($target) {
    this.$target = $target;
    this.state = new State();

    new Input(this.state);
    new Table(this.state);
  }
}
```

```js
// 이벤트를 등록하는 예시
class Table {
  constructor($target, state) {
    this.$target;
    this.state = state;
    this.state.event.subscribe(this.render.bind(this));

    this.render(); // 테이블을 그리기
  }

  // ...생략
}
```

```js
// 상태 변경을 알리는 예시
class Input {
  constructor($target, state) {
    this.$target = $target;
    this.state = state;
  }

  // ...생략

  change() {
    this.state.updateState(); // 테이블 데이터를 변경할 경우 등록한 이벤트 실행
  }
}
```

</div>
</details>
