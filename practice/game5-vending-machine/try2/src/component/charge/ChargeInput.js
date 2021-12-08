import { ID } from "../../../constants/index.js";
import { $ } from "../../utils/selector.js";

class ChargeInput {
  constructor($target) {
    this.$target = $target;

    this.addTemplate();
    this.selectDom();
    this.addEvent();
  }

  addTemplate() {
    this.$target.innerHTML = `
      <h3>자판기 동전 충전하기</h3>
      <input id=${ID.VENDING_MACHINE_CHARGE_INPUT} type="number" placeholder="자판기가 보유할 금액" />
      <button id=${ID.VENDING_MACHINE_CHARGE_BUTTON}>충전하기</button>
      <p id=${ID.VENDING_MACHINE_CHARGE_AMOUNT}>보유 금액: </p>
    `;
  }

  selectDom() {
    this.$chargeInput = $(`#${ID.VENDING_MACHINE_CHARGE_INPUT}`);
    this.$chargeButton = $(`#${ID.VENDING_MACHINE_CHARGE_BUTTON}`);
  }

  addEvent() {
    this.$chargeButton.addEventListener("click", this.clickButton.bind(this));
  }

  clickButton() {
    console.log(this.$chargeInput.value);
  }
}

export default ChargeInput;
