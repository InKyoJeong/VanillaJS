import { ID } from "../../../constants/index.js";
import ProductInput from "./ProductInput.js";

class ProductContainer {
  constructor($target) {
    this.$target = $target;

    this.addTemplate();
    this.selectDom();
    this.mounted();
  }

  addTemplate() {
    this.$target.innerHTML = `
      <div id=${ID.PRODUCT_INPUT_CONTAINER}></div>
      <div id=${ID.PRODUCT_TABLE_CONTAINER}></div>
    `;
  }

  selectDom() {
    this.$inputContainer = document.querySelector(
      `#${ID.PRODUCT_INPUT_CONTAINER}`
    );
    this.$tableContainer = document.querySelector(
      `#${ID.PRODUCT_TABLE_CONTAINER}`
    );
  }

  mounted() {
    new ProductInput(this.$inputContainer);
  }
}

export default ProductContainer;
