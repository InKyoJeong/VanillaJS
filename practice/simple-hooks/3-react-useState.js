const React = (function () {
  function useState(initialValue) {
    let _val = initialValue;
    const state = () => _val;
    const setState = (newValue) => {
      _val = newValue;
    };

    return [state, setState];
  }

  return { useState };
})();

const [count, setCount] = React.useState(1);
console.log(count());
setCount(2);
console.log(count());
