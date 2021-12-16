function getAdd() {
  let foo = 1;
  return function () {
    foo += 1;
    return foo;
  };
}
const add = getAdd();

console.log(add());
console.log(add());

// 모듈 패턴
const add = (function getAdd() {
  let foo = 1;
  return function () {
    foo += 1;
    return foo;
  };
})();

console.log(add());
console.log(add());
