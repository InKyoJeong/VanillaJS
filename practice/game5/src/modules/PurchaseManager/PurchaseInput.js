import { ID, LOCAL_DB } from '../../constants/index.js';
import { clearInput } from '../../utils/clearInput.js';
import { addPurchaseStorage, getPurchaseStorage } from '../../utils/localStorage.js';
import { isValidPurchaseInput } from '../../utils/valid.js';

class PurchaseInput {
  constructor($target) {
    this.$target = $target;
    this.render();
    this.amount = getPurchaseStorage(LOCAL_DB.PURCHASE);
  }

  render() {
    this.addContents();
    this.dom();
    this.addEvents();
  }

  addContents() {
    this.$target.innerHTML = `
        <h3>투입한 금액</h3>
        <span id=${ID.CHARGE_AMOUNT}>${getPurchaseStorage(LOCAL_DB.PURCHASE)}원</span>
        <h3>투입할 금액 입력</h3>
        <input id=${ID.CHARGE_INPUT} type="number" placeholder="투입할 금액 입력" />
        <button id=${ID.CHARGE_BUTTON}>구매 금액 충전</button>
    `;
  }

  dom() {
    this.$chargeAmount = document.querySelector(`#${ID.CHARGE_AMOUNT}`);
    this.$chargeInput = document.querySelector(`#${ID.CHARGE_INPUT}`);
    this.$chargeButton = document.querySelector(`#${ID.CHARGE_BUTTON}`);
  }

  addEvents() {
    this.$chargeButton.addEventListener('click', this.clickButton.bind(this));
  }

  clickButton() {
    const charge = this.$chargeInput.value;
    if (!isValidPurchaseInput(charge)) {
      return;
    }
    clearInput(this.$chargeInput);

    this.amount += Number(charge);
    this.$chargeAmount.innerText = this.amount + '원';
    addPurchaseStorage(LOCAL_DB.PURCHASE, this.amount);
  }
}

export default PurchaseInput;
