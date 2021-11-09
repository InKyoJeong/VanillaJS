import { ID } from '../../constants/index.js';

class ChargeInput {
  constructor($target) {
    this.$target = $target;

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

  clickButton(e) {
    const charge = this.$chargeInput.value;
    console.log(e.target, charge, typeof charge);
  }
}

export default ChargeInput;
