// let a = 111;
// const state = {};

// Object.defineProperty(state, "a", {
//   get() {
//     console.log(`현재 a는: ${a} 이다.`);
//     return a;
//   },
//   set(value) {
//     a = value;
//     console.log(`변경된 a는: ${a} 이다.`);
//   },
// });

// console.log(`state.a : ${state.a}`);
// state.a = 999;

let currentObserver = null;

const state = {
  a: 1,
  b: 2,
};

const stateKeys = Object.keys(state);

for (const key of stateKeys) {
  let _value = state[key];
  const observers = new Set();

  Object.defineProperty(state, key, {
    get() {
      if (currentObserver) {
        observers.add(currentObserver);
      }
      return _value;
    },
    set(value) {
      _value = value;
      observers.forEach((observer) => observer());
    },
  });
}

const increase = () => {
  currentObserver = increase;
  console.log(`a+b : ${state.a + state.b}`);
};

const decrease = () => {
  currentObserver = decrease;
  console.log(`a-b : ${state.a - state.b}`);
};

increase();
state.a = 100;

decrease();
state.b = 10;

// get 메소드가 실행될 때 currentObserver를 observers에 등록
// set 메소드가 실행될 때 observers에 등록된 모든 observer를 실행
