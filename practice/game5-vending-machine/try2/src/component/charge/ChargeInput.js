import Coin from "../../classes/Coin.js";
import { $ } from "../../utils/selector.js";
import { COIN_LIST, ID, LOCAL_DB } from "../../../constants/index.js";
import { getLocalStorage, saveLocalStorage } from "../../utils/localStorage.js";
import { getRandomCoinArray } from "../../utils/makeCoinArray.js";
import { isValidChargeInput } from "../../utils/valid.js";

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
    const amount = Number(this.$chargeInput.value);

    if (!isValidChargeInput(amount)) {
      return;
    }

    this.updateLocalStorage(amount);
  }

  updateLocalStorage(amount) {
    const charge = getLocalStorage(LOCAL_DB.COIN);
    if (!charge.length) {
      COIN_LIST.forEach((name) => {
        charge.push(new Coin(name));
      });
    }

    const coinArray = getRandomCoinArray(amount);
    coinArray.forEach((v, i) => (charge[i].count += v));
    saveLocalStorage(LOCAL_DB.COIN, charge);
  }
}

export default ChargeInput;
