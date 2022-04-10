import { $$ } from "../utils/dom.js";
import { addProduct } from "../core/actions.js";
import store from "../core/index.js";
import View from "./View.js";
import "./ProductTable.js";

export default class ProductManage extends View {
  $inputs;
  productInfo = {};

  init() {
    this.$inputs = $$("input");
    this.bindEvent();
  }

  bindEvent() {
    this.on("submit", this.handleAdd);
  }

  handleAdd = (e) => {
    e.preventDefault();
    this.setStates();
    this.addProduct();
  };

  setStates() {
    this.$inputs.forEach(({ dataset: { key }, value }) => {
      this.setProductInfo(key, value);
    });
  }

  setProductInfo(key, value) {
    this.productInfo = { ...this.productInfo, [key]: value };
  }

  addProduct() {
    store.dispatch(addProduct({ product: this.productInfo }));
  }

  render() {
    return `
    <h3>추가</h3>
    <div class="product-container">
    <form id="product-add-form">
        <fieldset class="fieldset">
          <label for="product-name-input">
            <input type="text" id="product-name-input" data-key="name" placeholder="상품명" />
          </label>
          <label for="product-price-input">
            <input type="number" id="product-price-input" data-key="price" placeholder="가격" />
          </label>
          <label for="product-quantity-input">
            <input type="number" id="product-quantity-input" data-key="quantity" placeholder="수량" />
          </label>
        </fieldset>
        <button class="product-add__button" type="submit">추가하기</button>
      </form>
    </div>
    <h3>현황</h3>
    <product-table></product-table>
    `;
  }
}

customElements.define("product-manage", ProductManage);
