function getAdd() {
  let foo = 1;
  return function () {
    foo += 1;
    return foo;
  };
}
const add = getAdd();

console.log(add()); //2
console.log(add()); //3

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
//2
//3
