const React = (function () {
  let hooks = [];
  let idx = 0;

  function useState(initialValue) {
    const state = hooks[idx] || initialValue;
    const _idx = idx;

    const setState = (newValue) => {
      hooks[_idx] = newValue;
      console.log(hooks);
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

  return { useState, render };
})();

function Component() {
  const [count, setCount] = React.useState(1);
  const [text, setText] = React.useState("apple");

  return {
    render: () => console.log({ count, text }),
    click: () => setCount(count + 1),
    type: (word) => setText(word),
  };
}

var App = React.render(Component);
App.click();
var App = React.render(Component);
App.click();
var App = React.render(Component);
App.type("banana");
var App = React.render(Component);
App.type("peach");
var App = React.render(Component);
