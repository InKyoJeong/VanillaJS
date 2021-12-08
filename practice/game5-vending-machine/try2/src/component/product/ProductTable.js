import { LOCAL_DB } from "../../../constants/index.js";
import { getLocalStorage } from "../../utils/localStorage.js";
import {
  productTableHeader,
  productTableContents,
} from "../../utils/template.js";

class ProductTable {
  constructor($target) {
    this.$target = $target;
    this.addTemplate();
    this.addTableStyle();
  }

  addTemplate() {
    this.$target.innerHTML = `
      <h3>상품 현황</h3>
      <table border="1">
        ${productTableHeader}
        ${productTableContents(getLocalStorage(LOCAL_DB.PRODUCT))}
      </table>
    `;
  }

  addTableStyle() {
    document.querySelector("table").style.borderCollapse = "collapse";
    document.querySelector("table").style.textAlign = "center";
    document
      .querySelectorAll("td")
      .forEach((e) => (e.style.padding = "0.5em 2em"));
  }
}

export default ProductTable;
