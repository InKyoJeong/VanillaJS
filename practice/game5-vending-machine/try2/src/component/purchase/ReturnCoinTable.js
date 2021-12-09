import { returnCoinTableTemplate } from "../../utils/template/purchaseTemplate.js";
import { addTableStyle } from "../../utils/tableStyle.js";

class ReturnCoinTable {
  constructor($target) {
    this.$target = $target;

    this.render();
  }

  render() {
    this.addTemplate();
    // this.addEvent();
  }

  addTemplate() {
    this.$target.innerHTML = returnCoinTableTemplate();
    addTableStyle();
  }

  //   addEvent() {
  //     this.$target.addEventListener("click", this.clickButton.bind(this));
  //   }

  //   clickButton(e) {
  //     console.log(e.target);
  //   }
}

export default ReturnCoinTable;
