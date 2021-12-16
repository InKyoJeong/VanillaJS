const React = (function () {
  let hooks = [];
  let idx = 0;

  function useState(initialValue) {
    const state = hooks[idx] || initialValue;
    const _idx = idx;

    const setState = (newValue) => {
      hooks[_idx] = newValue;
    };

    idx++;
    return [state, setState];
  }

  function render(Component) {
    idx = 0;
    const C = Component();
    C.render();
    return C;
  }

  function useEffect(cb, depArray) {
    const oldDeps = hooks[idx];
    let hasChanged = true;

    if (oldDeps) {
      hasChanged = depArray.some((dep, i) => !Object.is(dep, oldDeps[i]));
    }

    if (hasChanged) {
      cb();
    }

    hooks[idx] = depArray;
    idx++;
  }

  return { useState, render, useEffect };
})();

function Component() {
  const [count, setCount] = React.useState(1);
  const [text, setText] = React.useState("apple");

  React.useEffect(() => {
    console.log("--- 실행됨! ---");
  }, []);

  return {
    render: () => console.log({ count, text }),
    click: () => setCount(count + 1),
    type: (word) => setText(word),
  };
}

var App = React.render(Component);
App.click();
var App = React.render(Component);
App.type("banana");
var App = React.render(Component);
