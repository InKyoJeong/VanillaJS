import { ID } from '../../constants/index.js';
import PurchaseInput from './PurchaseInput.js';

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
        <div></div>
        <div></div>
    `;
  }
  dom() {
    this.$inputContainer = document.querySelector(`#${ID.PURCHASE_INPUT_CONTAINER}`);
  }

  addContents() {
    new PurchaseInput(this.$inputContainer);
  }
}

export default PurchaseManager;
