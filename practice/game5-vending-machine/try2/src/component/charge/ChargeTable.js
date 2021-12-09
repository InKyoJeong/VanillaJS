import { $, $$ } from "../../utils/selector.js";
import { chargeTableTemplate } from "../../utils/template/chargeTemplate.js";

class ChargeTable {
  constructor($target) {
    this.$target = $target;
    this.render();
  }

  render() {
    this.addTemplate();
    this.addTableStyle();
  }

  addTemplate() {
    this.$target.innerHTML = chargeTableTemplate();
  }

  addTableStyle() {
    $("table").style.borderCollapse = "collapse";
    $("table").style.textAlign = "center";
    $$("td").forEach((e) => (e.style.padding = "0.5em 2em"));
  }
}

export default ChargeTable;
