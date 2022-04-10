import store from "../core/index.js";
import { observe } from "../core/observer.js";
import { $ } from "../utils/dom.js";
import View from "./View.js";

export default class ProductTable extends View {
  init() {
    observe(() => {
      this.renderProducts();
    });
  }

  renderProducts() {
    const $productBody = $("#product-table-body");
    const { products } = store.getState();

    const template = `
        ${products
          .map(
            ({ name, price, quantity }) => `
        <tr>
        <td>${name}</td>
        <td>${price}</td>
        <td>${quantity}</td>
      </tr> `
          )
          .join("")}
    `;

    $productBody.replaceChildren();
    $productBody.insertAdjacentHTML("afterbegin", template);
  }

  render() {
    return `
    <table class="product-table">
      <thead>
        <tr>
          <th>상품명</th>
          <th>가격</th>
          <th>수량</th>
        </tr>
      </thead>
      <tbody id="product-table-body">
      </tbody>
    </table>
    `;
  }
}

customElements.define("product-table", ProductTable);
