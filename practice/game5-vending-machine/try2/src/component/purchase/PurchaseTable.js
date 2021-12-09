import { purchaseTableTemplate } from "../../utils/template/purchaseTemplate.js";
import { addTableStyle } from "../../utils/tableStyle.js";
import { CLASS } from "../../../constants/index.js";
import { isPurchaseAvailable } from "../../utils/valid.js";

class PurchaseTable {
  constructor($target) {
    this.$target = $target;

    this.render();
  }

  render() {
    this.addTemplate();
    this.addEvent();
    addTableStyle();
  }

  addTemplate() {
    this.$target.innerHTML = purchaseTableTemplate();
  }

  addEvent() {
    this.$target.addEventListener("click", this.clickButton.bind(this));
  }

  clickButton(e) {
    if (!e.target.classList.contains(CLASS.PURCHASE_BUTTON)) {
      return;
    }

    const tr = e.target.closest("tr");
    const { productName } = tr.children[0].dataset;
    const { productPrice } = tr.children[1].dataset;
    const { productQuantity } = tr.children[2].dataset;
    console.log(tr, productName, productPrice, productQuantity);

    if (!isPurchaseAvailable(productPrice)) {
      return;
    }
  }
}

export default PurchaseTable;
