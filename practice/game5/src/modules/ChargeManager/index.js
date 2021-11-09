import { ID } from '../../constants/index.js';
import ChargeInput from './ChargeInput.js';
import ChargeList from './ChargeList.js';

class ChargeManager {
  constructor($target) {
    this.$target = $target;
    this.render();
  }

  render() {
    this.addContainer();
    this.dom();
    this.addContents();
  }

  addContainer() {
    this.$target.innerHTML = `
      <h1>자판기 잔돈 충전 페이지</h1>
      <div id=${ID.CHARGE_LIST_CONTAINER}></div>
      <div id=${ID.CHARGE_INPUT_CONTAINER}></div>
    `;
  }

  dom() {
    this.$listContainer = document.querySelector(`#${ID.CHARGE_LIST_CONTAINER}`);
    this.$inputContainer = document.querySelector(`#${ID.CHARGE_INPUT_CONTAINER}`);
  }

  addContents() {
    new ChargeList(this.$listContainer);
    new ChargeInput(this.$inputContainer);
  }
}

export default ChargeManager;
