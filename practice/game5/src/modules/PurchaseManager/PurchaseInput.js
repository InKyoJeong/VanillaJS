import { ID, LOCAL_DB } from '../../constants/index.js';
import { addPurchaseStorage, getLocalStorage } from '../../utils/localStorage.js';

class PurchaseInput {
  constructor($target) {
    this.$target = $target;
    this.render();
    this.amount = getLocalStorage(LOCAL_DB.PURCHASE);
  }

  render() {
    this.addContents();
    this.dom();
    this.addEvents();
  }

  addContents() {
    this.$target.innerHTML = `
        <h3>투입한 금액</h3>
        <span id=${ID.CHARGE_AMOUNT}>${getLocalStorage(LOCAL_DB.PURCHASE)}원</span>
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
    this.amount += Number(charge);

    addPurchaseStorage(LOCAL_DB.PURCHASE, this.amount);
    this.$chargeAmount.innerText = this.amount + '원';

    // 충전 못하는 경우 체크, 인풋초기화
  }
}

export default PurchaseInput;
