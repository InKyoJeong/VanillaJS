import { ID } from "../constants/index.js";
import { $ } from "./utils/selector.js";
import { mainTemplate } from "./utils/template/mainTemplate.js";
import ProductContainer from "./component/product/ProductContainer.js";
import ChargeContainer from "./component/charge/ChargeContainer.js";
import PurchaseContainer from "./component/purchase/PurchaseContainer.js";

class App {
  constructor($target) {
    this.$target = $target;

    this.render();
  }

  render() {
    this.addTemplate();
    this.selectDom();
    this.addEvent();
  }

  addTemplate() {
    this.$target.innerHTML = mainTemplate();
  }

  selectDom() {
    this.$buttonContainer = $(`#${ID.MENU_BUTTON_CONTAINER}`);
    this.$resultContainer = $(`#${ID.RESULT_CONTAINER}`);
  }

  addEvent() {
    this.$buttonContainer.addEventListener(
      "click",
      this.clickButton.bind(this)
    );
  }

  clickButton(e) {
    const { id } = e.target;

    if (id === ID.PRODUCT_ADD_MENU) {
      new ProductContainer(this.$resultContainer);
    }
    if (id === ID.VENDING_MACHINE_MANAGE_MENU) {
      new ChargeContainer(this.$resultContainer);
    }
    if (id === ID.PRODUCT_PURCHASE_MENU) {
      new PurchaseContainer(this.$resultContainer);
    }
  }
}

export default App;
