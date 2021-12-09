import { addTableStyle } from "../../utils/tableStyle.js";
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
    addTableStyle();
  }

  addTemplate() {
    this.$target.innerHTML = productTableTemplate();
  }
}

export default ProductTable;
