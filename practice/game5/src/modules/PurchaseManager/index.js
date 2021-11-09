import { ID } from '../../constants/index.js';
import ChangeReturn from './ChargeReturn.js';
import PurchaseInput from './PurchaseInput.js';
import PurchaseList from './PurchaseList.js';

class PurchaseManager {
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
        <h1>상품 구매 페이지</h1>
        <div id=${ID.PURCHASE_INPUT_CONTAINER}></div>
        <div id=${ID.PURCHASE_LIST_CONTAINER}></div>
        <div id=${ID.CHANGE_RETURN_CONTAINER}></div>
    `;
  }
  dom() {
    this.$inputContainer = document.querySelector(`#${ID.PURCHASE_INPUT_CONTAINER}`);
    this.$listContainer = document.querySelector(`#${ID.PURCHASE_LIST_CONTAINER}`);
    this.$changeContainer = document.querySelector(`#${ID.CHANGE_RETURN_CONTAINER}`);
  }

  addContents() {
    new PurchaseInput(this.$inputContainer);
    new PurchaseList(this.$listContainer);
    new ChangeReturn(this.$changeContainer);
  }
}

export default PurchaseManager;
