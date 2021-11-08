<p align="middle" >
  <img width="200px;" src="https://github.com/woowacourse/javascript-vendingmachine-precourse/blob/main/images/beverage_icon.png?raw=true"/>
</p>
<h1 align="middle">자판기</h1>

## 🎯 기능 요구사항

### 1) 공통

상단에 `탭`메뉴가 존재하며 각 탭에 따라 적절한 기능을 수행한다.

- `상품 추가`탭은 자판기가 보유하고 있는 **물품을 추가**하는 기능을 수행한다.
- `잔돈 충전`탭은 **자판기가 보유할 금액을 충전**하는 기능을 수행한다.
- `상품 구매`탭은 사용자가 **금액을 충전**할 수 있으며, 금액에 맞춰 **상품을 구매**하고, 남은 금액에 대해서는 **잔돈을 반환**하는 기능을 수행한다.
- 다른 탭으로 이동했다 돌아와도 기존 탭의 상태가 유지되어야 한다.
- localStorage를 이용하여, 새로고침하더라도 가장 최근에 작업한 정보들을 불러올 수 있도록 한다.

### 2) 상품 추가 탭

`상품 추가`탭에서, 다음과 같은 규칙을 바탕으로 상품을 추가한다.

- 최초 상품 목록은 비워진 상태이다.
- 상품명, 금액, 수량을 입력해 상품을 추가할 수 있다.
  - 상품명, 금액, 수량은 공백이 불가능하다.
  - 상품의 최소 수량은 1개여야 한다.
  - 상품의 최소 가격은 100원이며, 10원으로 나누어 떨어져야 한다.
- 같은 상품명의 데이터를 추가하면 기존의 상품에 해당하는 데이터는 새로운 상품으로 대체된다.
- 사용자는 추가한 상품을 확인할 수 있다.
  - 상품의 이름, 가격, 수량 순으로 상품 목록이 보여진다.

### 3) 잔돈 충전 탭 (자판기 보유 동전)

`잔돈 충전` 탭에서, 다음과 같은 규칙으로 자판기 보유 금액을 충전한다.

- `잔돈 충전` 페이지에서 최초 자판기가 보유한 금액은 0원이며, 각 동전의 개수는 0개이다.
- 관리자는 잔돈 충전 입력 요소에 충전할 금액을 입력한 후, `자판기 동전 충전` 버튼을 눌러 자판기가 보유한 금액을 충전할 수 있다.
  - 최소 충전 금액은 100원이며, 10원으로 나누어 떨어지는 금액만 충전이 가능하다.
  - 자판기가 보유한 금액은 `{금액}원` 형식으로 나타낸다.
- 관리자는 잔돈을 누적하여 충전할 수 있다.
- 자판기가 보유한 금액 만큼의 동전이 무작위로 생성된다.
- 동전의 개수를 나타내는 정보는 `{개수}개` 형식으로 나타낸다.

### 4) 상품 구매 탭

`상품 구매`탭에서, 다음과 같은 규칙을 바탕으로 금액을 충전하고, 상품을 구매하며, 잔돈을 반환한다.

- `상품 구매` 페이지에서 최초 충전 금액은 0원이며, 반환된 각 동전의 개수는 0개이다.
- 사용자는 금액 충전 입력 요소에 충전할 금액을 입력한 후, `구매 금액 충전`버튼을 이용하여 금액을 충전한다.
  - 최소 충전 금액은 10원이다.
  - 금액은 10원으로 나누어 떨어지는 금액만 충전이 가능하다.
  - 자판기가 보유한 금액은 `{금액}원` 형식으로 나타낸다.
- 금액은 누적으로 충전이 가능하다.
- 사용자는 `반환하기` 버튼을 통해 잔돈을 반환 받을 수 있다.

**상품 구매 > 잔돈 계산 모듈**

`상품 구매` 탭에서 잔돈 반환 시 다음과 같은 규칙을 통해 잔돈을 반환한다.

- 잔돈을 돌려줄 때는 최소 개수의 동전으로 잔돈을 돌려준다.
- 지폐를 잔돈으로 반환하는 경우는 없다고 가정한다.
- 모든 금액에 대해 잔돈을 반환할 수 없는 경우 잔돈으로 반환할 수 있는 금액만 반환한다.
- 동전의 개수를 나타내는 정보는 `{개수}개` 형식으로 나타낸다.

<br>

## 💻 프로그램 실행 결과

### 1) 상품 추가

![상품추가](https://github.com/woowacourse/javascript-vendingmachine-precourse/blob/main/images/result1.gif?raw=true)

### 2) 잔돈 충전

![잔돈충전](https://github.com/woowacourse/javascript-vendingmachine-precourse/blob/main/images/result2.gif?raw=true)

### 3) 상품 구매

![상품구매-구매](https://github.com/woowacourse/javascript-vendingmachine-precourse/blob/main/images/result3.gif?raw=true)

### 4) 잔돈 계산

![상품구매-반환](https://github.com/woowacourse/javascript-vendingmachine-precourse/blob/main/images/result4.gif?raw=true)

<br>

## ✅ 프로그래밍 요구사항

### DOM 선택자
각 요소에 아래와 같은 선택자를 반드시 지정한다.

**메뉴**

- `금액 충전` 및 `상품 구매`, `잔돈 반환`을 하기 위한 메뉴 id는 `product-purchase-menu`이다.
- 자판기에 `잔돈 충전`을 위한 메뉴 id는 `vending-machine-manage-menu`이다.
- 자판기에 `상품 추가`를 위한 메뉴 id는 `product-add-menu`이다.

**상품 추가 메뉴**

- 상품 추가 입력 폼의 상품명 입력 요소의 id는 `product-name-input`이다.
- 상품 추가 입력 폼의 상품 가격 입력 요소의 id는 `product-price-input`이다.
- 상품 추가 입력 폼의 수량 입력 요소의 id는 `product-quantity-input`이다.
- 상품 추가를 위한 추가 버튼 요소의 id는 `product-add-button`이다.
- 추가한 상품 목록의 이름에 해당하는 요소의 class명은 `product-manage-name`이다.
- 추가한 상품 목록의 가격에 해당하는 요소의 class명은 `product-manage-price`이다.
- 추가한 상품 목록의 수량에 해당하는 요소의 class명은 `product-manage-quantity`이다.

**자판기 잔돈(보유 금액) 충전 메뉴**

- 자판기가 보유할 금액을 충전할 요소의 id는 `vending-machine-charge-input`이다.
- `충전하기` 버튼에 해당하는 요소의 id는 `vending-machine-charge-button`이다.
- 충전된 금액을 확인하는 요소의 id는 `vending-machine-charge-amount` 이다.
- 보유한 동전의 개수는 테이블 형태이다.
  - 각 동전의 개수에 해당하는 요소의 id는 다음과 같다.
  - 500원: `vending-machine-coin-500-quantity`
  - 100원: `vending-machine-coin-100-quantity`
  - 50원: `vending-machine-coin-50-quantity`
  - 10원: `vending-machine-coin-10-quantity`

**상품 구매 및 금액 충전 메뉴**

- 금액 충전 입력 요소의 id는 `charge-input`이다.
- 충전 버튼 요소의 id는 `charge-button`이다.
- 충전된 금액을 확인하는 요소의 id는 `charge-amount`이다.
- 반환하기 버튼 요소의 id는 `coin-return-button`이다.
- 반환된 동전의 개수는 테이블 형태이다.
  - 각 동전의 개수에 해당하는 요소의 id는 다음과 같다.
  - 500원: `coin-500-quantity`
  - 100원: `coin-100-quantity`
  - 50원: `coin-50-quantity`
  - 10원: `coin-10-quantity`
- 각 상품의 구매 버튼에 해당하는 요소의 class명은 `purchase-button`이다.
- 각 상품 목록의 이름에 해당하는 요소의 class명은 `product-purchase-name`이다.
- 각 상품 목록의 가격에 해당하는 요소의 class명은 `product-purchase-price`이다.
- 각 상품 목록의 수량에 해당하는 요소의 class명은 `product-purchase-quantity`이다.
- 각 상품 목록의 이름은 `dataset` 속성을 사용하고 `data-product-name` 형식으로 저장한다.
- 각 상품 목록의 가격은 `dataset` 속성을 사용하고 `data-product-price` 형식으로 저장한다.
- 각 상품 목록의 수량은 `dataset` 속성을 사용하고 `data-product-quantity` 형식으로 저장한다.

### 라이브러리

- 랜덤으로 잔돈을 생성하는 기능은 WoowaUtil 라이브러리의 Random.pickNumberInList 메서드를 활용하여 구현한다. (WoowaUtil은 window객체 내에 포함되어 있음)

### 공통 요구사항

- 주어진 `index.html`파일은 수정할 수 없다.
- 모든 예외 발생 상황은 `alert`메서드를 이용하여 처리한다.
- 외부 라이브러리(jQuery, Lodash 등)를 사용하지 않고, 순수 Vanilla JS로만 구현한다.
- **자바스크립트 코드 컨벤션을 지키면서 프로그래밍** 한다
  - [https://google.github.io/styleguide/jsguide.html](https://google.github.io/styleguide/jsguide.html)
  - [https://ui.toast.com/fe-guide/ko_CODING-CONVENSION/](https://ui.toast.com/fe-guide/ko_CODING-CONVENTION)
- indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다.
  - 예를 들어 while문 안에 if문이 있으면 들여쓰기는 2이다.  
    힌트: indent(인덴트, 들여쓰기) depth를 줄이는 좋은 방법은 함수(또는 메소드)를 분리하면 된다.
- 함수(또는 메소드)가 한 가지 일만 하도록 최대한 작게 만들어라.

<br>

## 📝 미션 저장소 및 진행 요구사항

- 미션은 [https://github.com/woowacourse/javascript-vendingmachine-precourse](https://github.com/woowacourse/javascript-vendingmachine-precourse) 저장소를 fork/clone해 시작한다.
- **기능을 구현하기 전에 javascript-vendingmachine-precourse/docs/README.md 파일에 구현할 기능 목록**을 정리해 추가한다.
- **git의 commit 단위는 앞 단계에서 README.md 파일에 정리한 기능 목록 단위로 추가**한다.
- [프리코스 과제 제출](https://github.com/woowacourse/woowacourse-docs/tree/master/precourse) 문서 절차를 따라 미션을 제출한다.
