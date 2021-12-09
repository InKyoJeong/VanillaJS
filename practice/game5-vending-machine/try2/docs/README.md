## 자판기

> 우아한테크코스 / 프리코스 3주차 미션 / 정인교

#### 📌Contents

- [폴더 구조](#folder)
- [구현 과정](#process)
- [구현할 기능 목록](#feature)
- [알게된점](#study)
- [과제 진행 소감](#review)

<br>

## <a name="folder"></a>폴더 구조

```sh
├── docs/README.md
├── src
│ ├── classes
│ │   ├── Coin.js                      # 이름에 따라 동전을 생성
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
│ │   ├── selector.js                  # querySelector를 단축하는 함수
│ │   ├── tableStyle.js                # 테이블 스타일과 관련된 함수 모음
│ │   └── valid.js                     # 입력값을 검증하는 함수 모음
│ ├── App.js
│ └── index.js
└── index.html
```

<br>

## <a name="process"></a>구현 과정

- components 폴더를 만들고 기능에 따라 product(상품관리) /charge(잔돈충전) / purchase(상품구매)로 나누었습니다.
- 각 폴더 내부에 Container(컨테이너)를 만들고 내부를 Input(입력) / Table(테이블)을 담당하는
  부분으로 나누었습니다.
- 컴포넌트에서 변경이 일어나면 다른 부분이 업데이트 되도록 이벤트 옵저버를 만들어서 추가하였습니다.
  - 잔돈 충전에서는 인풋(충전금액) -> 테이블로 알림
  - 상품 구매에서는 테이블 -> 인풋(투입금액)으로 알림
  - 잔돈 반환에서도 테이블 -> 인풋(투입금액)으로 알림

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

## <a name="study"></a>알게된점

#### HTML table

- 아래와 같이 `border='1'`을 지정하면, 테두리가 생기긴 하지만 간격이 생기는데 이를 없애기 위한 css 속성을 알게 되었습니다.
  - `border-collapse` : 표(table)의 테두리와 셀(td)의 테두리
    사이의 간격을 어떻게 처리할지 정함
  - `collapse` 옵션은 테두리 사이 간격을
    없애줌

```html
<table border="1">
  <tr>
    <td>상품명</td>
    <td>가격</td>
    <td>수량</td>
  </tr>
  <tr>
    <td>사이다</td>
    <td>1000</td>
    <td>46</td>
  </tr>
</table>
```

- **collapse** 옵션과 **padding** 을 추가하여 아래와 같이 문제 예시처럼 만들 수 있었습니다.

| before                                                                                                                                | after                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| <img width="130" alt="1" src="https://user-images.githubusercontent.com/48676844/145426124-039080c8-9758-47ff-abf2-741b8cf92bd7.png"> | <img width="309" alt="2" src="https://user-images.githubusercontent.com/48676844/145426179-ce10bba6-c696-42fb-ad9a-2f45501eda92.png"> |

<br>

#### 로컬스토리지와 세션스토리지

- 웹 스토리지에 대해 좀더 자세히 알게 되었는데 잘 정리되어있는 글이 있어서 공유합니다!
  - [https://ko.javascript.info/localstorage](https://ko.javascript.info/localstorage)

<br>

#### 객체 키

잘 몰랐던 점인데, 객체의 키가 숫자일때 다시 콘솔을 찍어보면 오름차순으로 출력된다는 것을 알았습니다. 자바스크립트 객체에 대한 이해가 부족했음을 느꼈습니다.

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
  - Event클래스를 만들어서 Map에 핸들러를 등록하는 이벤트를 추가하고, 이벤트를 구독하는 기능과 실행하는 기능을 추가
  - State클래스를 이용하여 상태가 업데이트되면 `fire()` 를 실행하여 등록된 핸들러가 동작하도록 추가
- 이 방법을 이용해서 투입 금액에 따라 테이블을 다시 그리거나, 구매 또는 반환으로 인한 보유 금액을 업데이트 할 수 있었습니다.

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

<br >

## <a name="review"></a>과제 진행 소감
