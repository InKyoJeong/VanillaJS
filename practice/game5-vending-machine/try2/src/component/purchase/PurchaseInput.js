import { ID, LOCAL_DB } from "../../../constants/index.js";
import { getLocalStorage, saveLocalStorage } from "../../utils/localStorage.js";
import { $ } from "../../utils/selector.js";
import { isValidChargeInput } from "../../utils/valid.js";

class PurchaseInput {
  constructor($target) {
    this.$target = $target;

    this.render();
  }

  render() {
    this.addContainer();
    this.selectDom();
    this.addEvent();
  }

  addContainer() {
    this.$target.innerHTML = `
      <h3>금액 투입</h3>
      <input id=${ID.CHARGE_INPUT} type="number" placeholder="투입할 금액" />
      <button id=${ID.CHARGE_BUTTON}>투입하기</button>
    `;
  }

  selectDom() {
    this.$chargeInput = $(`#${ID.CHARGE_INPUT}`);
    this.$chargeButton = $(`#${ID.CHARGE_BUTTON}`);
  }

  addEvent() {
    this.$chargeButton.addEventListener("click", this.clickButton.bind(this));
  }

  clickButton() {
    const amount = Number(this.$chargeInput.value);
    if (!isValidChargeInput(amount)) {
      return;
    }

    this.updateLocalStorage(amount);
  }

  updateLocalStorage(amount) {
    const purchase = getLocalStorage(LOCAL_DB.PURCHASE);
    purchase.push(amount);
    const totalPurchase = purchase.reduce((a, b) => a + b, 0);
    saveLocalStorage(LOCAL_DB.PURCHASE, [totalPurchase]);
  }
}

export default PurchaseInput;
