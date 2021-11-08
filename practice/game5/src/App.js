import { ID } from "./constants/index.js";
import ProductManager from "./modules/ProductManager/index.js";
import ChargeManager from "./modules/ChargeManager/index.js";
import PurchaseManager from "./modules/PurchaseManager/index.js";

class App {
  constructor($target) {
    this.$target = $target;
    this.render();
  }

  render() {
    this.addContainer();
    this.dom();
    this.addButtons();
    this.addEvents();
  }

  addContainer() {
    this.$target.innerHTML = `
      <h1>자판기 미션</h1>
      <div id=${ID.MENU_BUTTON_CONTAINER}></div>
      <div id=${ID.RESULT_CONTAINER}></div>
    `;
  }

  dom() {
    this.$container = document.querySelector(`#${ID.MENU_BUTTON_CONTAINER}`);
    this.$result = document.querySelector(`#${ID.RESULT_CONTAINER}`);
  }

  addButtons() {
    this.$container.innerHTML = `
      <h3>메뉴</h3>
      <button id=${ID.PRODUCT_ADD_MENU}>상품 추가</button>
      <button id=${ID.VENDING_MACHINE_MANANGE_MENU}>잔돈 충전</button>
      <button id=${ID.PRODUCT_PURCHASE_MENU}>상품 구매</button>
    `;
  }

  addEvents() {
    this.$container.addEventListener("click", this.changeManager.bind(this));
  }

  changeManager(e) {
    const { id } = e.target;

    if (id === ID.PRODUCT_ADD_MENU) {
      new ProductManager(this.$result);
    }
    if (id === ID.VENDING_MACHINE_MANANGE_MENU) {
      new ChargeManager(this.$result);
    }
    if (id === ID.PRODUCT_PURCHASE_MENU) {
      new PurchaseManager(this.$result);
    }
  }
}

export default App;
