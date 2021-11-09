import { ID, LOCAL_DB } from '../../constants/index.js';
import { isValidChargeInput } from '../../utils/valid.js';
import Random from '../../classes/Random.js';
import { addCoinStorage } from '../../utils/localStorage.js';
import { clearInput } from '../../utils/clearInput.js';

class ChargeInput {
  constructor($target, state) {
    this.$target = $target;
    this.state = state;
    this.render();
  }

  render() {
    this.addContents();
    this.dom();
    this.addEvents();
  }

  addContents() {
    this.$target.innerHTML = `
        <h3>자판기가 보유할 금액 입력</h3>
        <input id=${ID.VENDING_MACHINE_CHARGE_INPUT} type="number" placeholder='자판기가 보유할 금액 입력' />
        <button id=${ID.VENDING_MACHINE_CHARGE_BUTTON}>자판기 동전 충전</button>
    `;
  }

  dom() {
    this.$chargeInput = document.querySelector(`#${ID.VENDING_MACHINE_CHARGE_INPUT}`);
    this.$chargeButton = document.querySelector(`#${ID.VENDING_MACHINE_CHARGE_BUTTON}`);
  }

  addEvents() {
    this.$chargeButton.addEventListener('click', this.clickButton.bind(this));
  }

  clickButton() {
    const charge = this.$chargeInput.value;
    if (!isValidChargeInput(charge)) {
      return;
    }
    clearInput(this.$chargeInput);

    let coinArray = new Random().countCharge([500, 100, 50, 10], Number(charge));
    addCoinStorage(LOCAL_DB.COIN, coinArray);
    this.state.updateState();
  }
}

export default ChargeInput;
