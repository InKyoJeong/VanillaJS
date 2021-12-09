import { returnCoinTableTemplate } from "../../utils/template/purchaseTemplate.js";
import { addTableStyle } from "../../utils/tableStyle.js";
import { $ } from "../../utils/selector.js";
import { COIN_LIST, ID, LOCAL_DB } from "../../constants/index.js";
import { getLocalStorage, saveLocalStorage } from "../../utils/localStorage.js";

class ReturnCoinTable {
  constructor($target, state) {
    this.$target = $target;
    this.state = state;
    this.returnCoin = [];

    this.render();
  }

  render() {
    this.addTemplate();
    this.selectDom();
    this.addEvent();
  }

  addTemplate() {
    this.$target.innerHTML = returnCoinTableTemplate(this.returnCoin);
    addTableStyle();
  }

  selectDom() {
    this.$returnButton = $(`#${ID.COIN_RETURN_BUTTON}`);
  }

  addEvent() {
    this.$returnButton.addEventListener("click", this.clickButton.bind(this));
  }

  clickButton() {
    let remain = getLocalStorage(LOCAL_DB.PURCHASE);
    const machineCoins = getLocalStorage(LOCAL_DB.COIN);

    let usedCoinArray = [];
    machineCoins.forEach((coin) => {
      let needCoinCount = Math.floor(remain / coin.name);
      if (needCoinCount > coin.count) {
        needCoinCount = coin.count;
      }
      coin.count -= needCoinCount;
      remain -= coin.name * needCoinCount;

      usedCoinArray.push([coin.name, needCoinCount]);
    });

    this.returnCoin = usedCoinArray;
    this.updateLocalStorage(machineCoins, remain);
    this.updateView();
  }

  updateLocalStorage(machineCoins, remain) {
    saveLocalStorage(LOCAL_DB.COIN, machineCoins);
    saveLocalStorage(LOCAL_DB.PURCHASE, remain);
  }

  updateView() {
    this.addTemplate();
    this.state.updateState();
  }
}

export default ReturnCoinTable;
