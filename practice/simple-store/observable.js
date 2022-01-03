let currentObserver = null;

const observe = (fn) => {
  currentObserver = fn;
  fn();
  currentObserver = null;
};

const observable = (obj) => {
  Object.keys(obj).forEach((key) => {
    let _value = obj[key];
    const observers = new Set();

    Object.defineProperty(obj, key, {
      get() {
        if (currentObserver) {
          observers.add(currentObserver);
        }
        return _value;
      },

      set(value) {
        _value = value;
        observers.forEach((fn) => fn());
      },
    });
  });

  return obj;
};

const state = observable({ a: 1, b: 2 });

observe(() => console.log(`a: ${state.a}`));
state.a = 777;

observe(() => console.log(`b: ${state.b}`));
state.b = 999;

observe(() => console.log(`a+b: ${state.a}+${state.b}`));
