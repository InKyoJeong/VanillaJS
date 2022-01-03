import Component from "./core/Component.js";
import { store } from "./store.js";

class App extends Component {
  template() {
    return `
        <input id="stateA" value="${store.state.a}" />  
        <input id="stateB" value="${store.state.b}" />  
        <p>a+b = ${store.state.a + store.state.b}</p>
    `;
  }

  setEvent() {
    this.$target
      .querySelector("#stateA")
      .addEventListener("change", ({ target }) => {
        store.setState({ a: Number(target.value) });
      });

    this.$target
      .querySelector("#stateB")
      .addEventListener("change", ({ target }) => {
        store.setState({ b: Number(target.value) });
      });
  }
}

export default App;
