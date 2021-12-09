import { addTableStyle } from "../../utils/tableStyle.js";
import { chargeTableTemplate } from "../../utils/template/chargeTemplate.js";

class ChargeTable {
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
    this.$target.innerHTML = chargeTableTemplate();
  }
}

export default ChargeTable;
