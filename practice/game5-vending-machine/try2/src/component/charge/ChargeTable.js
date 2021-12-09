import { addTableStyle } from "../../utils/tableStyle.js";
import { chargeTableTemplate } from "../../utils/template/chargeTemplate.js";

class ChargeTable {
  constructor($target) {
    this.$target = $target;
    this.render();
  }

  render() {
    this.addTemplate();
  }

  addTemplate() {
    this.$target.innerHTML = chargeTableTemplate();
    addTableStyle();
  }
}

export default ChargeTable;
