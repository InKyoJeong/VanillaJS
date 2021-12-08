import { ID } from "../../../constants/index.js";
import { $ } from "../../utils/selector.js";
import ProductInput from "./ProductInput.js";
import ProductTable from "./ProductTable.js";

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
    this.$inputContainer = $(`#${ID.PRODUCT_INPUT_CONTAINER}`);
    this.$tableContainer = $(`#${ID.PRODUCT_TABLE_CONTAINER}`);
  }

  mounted() {
    new ProductInput(this.$inputContainer);
    new ProductTable(this.$tableContainer);
  }
}

export default ProductContainer;
