const React = (function () {
  let _val;
  function useState(initialValue) {
    const state = _val || initialValue;
    const setState = (newValue) => {
      _val = newValue;
    };

    return [state, setState];
  }

  function render(Component) {
    const C = Component();
    C.render();
    return C;
  }

  return { useState, render };
})();

function Component() {
  const [count, setCount] = React.useState(1);

  return {
    render: () => console.log(count),
    click: () => setCount(count + 1),
  };
}

var App = React.render(Component); // 1
App.click();
var App = React.render(Component); // 2
