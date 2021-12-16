function useState(initialVal) {
  let _val = initialVal;
  const state = () => _val;
  const setState = (newVal) => {
    _val = newVal;
  };

  return [state, setState];
}

const [count, setCount] = useState(1);

console.log(count());
setCount(2);
console.log(count());
