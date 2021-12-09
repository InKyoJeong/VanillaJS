import { purchaseTableTemplate } from "../../utils/template/purchaseTemplate.js";
import { addTableStyle } from "../../utils/tableStyle.js";

class PurchaseTable {
  constructor($target) {
    this.$target = $target;

    this.render();
  }

  render() {
    this.addTemplate();
    addTableStyle();
  }

  addTemplate() {
    this.$target.innerHTML = purchaseTableTemplate();
  }
}

export default PurchaseTable;
