import { $, $$ } from "../../utils/selector.js";
import { productTableTemplate } from "../../utils/template/productTemplate.js";

class ProductTable {
  constructor($target, state) {
    this.$target = $target;
    this.state = state;
    this.state.event.subscribe(this.render.bind(this));

    this.render();
  }

  render() {
    this.addTemplate();
    this.addTableStyle();
  }

  addTemplate() {
    this.$target.innerHTML = productTableTemplate();
  }

  addTableStyle() {
    $("table").style.borderCollapse = "collapse";
    $("table").style.textAlign = "center";
    $$("td").forEach((e) => (e.style.padding = "0.5em 2em"));
  }
}

export default ProductTable;
