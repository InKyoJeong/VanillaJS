import Component from "./core/Component.js";
import { setA, setB, store } from "./store.js";

class App extends Component {
  template() {
    return `
        <input id="stateA" value="${store.getState().a}" />  
        <input id="stateB" value="${store.getState().b}" />  
        <p>a+b = ${store.getState().a + store.getState().b}</p>
    `;
  }

  setEvent() {
    this.$target
      .querySelector("#stateA")
      .addEventListener("change", ({ target }) => {
        store.dispatch(setA(Number(target.value)));
      });

    this.$target
      .querySelector("#stateB")
      .addEventListener("change", ({ target }) => {
        store.dispatch(setB(Number(target.value)));
      });
  }
}

export default App;
