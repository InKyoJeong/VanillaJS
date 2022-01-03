import Component from "./core/Component.js";

class App extends Component {
  initState() {
    return {
      a: 1,
      b: 2,
    };
  }

  template() {
    const { a, b } = this.state;

    return `
        <input id="stateA" value="${a}" />  
        <input id="stateB" value="${b}" />  
        <p>a+b = ${a + b}</p>
    `;
  }

  setEvent() {
    this.$target
      .querySelector("#stateA")
      .addEventListener("change", ({ target }) => {
        this.state.a = Number(target.value);
      });

    this.$target
      .querySelector("#stateB")
      .addEventListener("change", ({ target }) => {
        this.state.b = Number(target.value);
      });
  }
}

export default App;
