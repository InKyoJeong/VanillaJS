import View from "./View.js";

export default class App extends View {
  //

  render() {
    return `
      <h1>VendingStore</h1>
      <product-manage></product-manage>
    `;
  }
}

customElements.define("vending-app", App);
