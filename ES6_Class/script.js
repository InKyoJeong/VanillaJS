// private class field

// class 의 속성(property)들은 기본적으로 public 하며 class 외부에서 읽히고 수정될 수 있다.
// 하지만, ES2019 에서는 해쉬 # prefix 를 추가해 private class 필드를 선언할 수 있게 되었다.

class Account {
  #movements = [];

  constructor(owner, currency) {
    this.owner = owner;
    this.currency = currency;
  }
  deposit(val) {
    this.#movements.push(val);
  }
}
const acc1 = new Account("Jonas", "EUR");

console.log(acc1.#movements); //Uncaught SyntaxError: Private field '#movements' must be declared in an enclosing class
