import { CLASS, LOCAL_DB } from '../../constants/index.js';
import { decreaseProductStorage, decresePurchaseStorage, getLocalStorage } from '../../utils/localStorage.js';
import { purchaseContents } from '../../utils/template.js';

class PurchaseList {
  constructor($target, state) {
    this.$target = $target;
    this.state = state;
    this.render();
    this.$target.addEventListener('click', this.clickButton.bind(this));
  }

  render() {
    this.addContents();
  }

  addContents() {
    this.$target.innerHTML = `
        <h3>상품 현황</h3>
        ${purchaseContents(getLocalStorage(LOCAL_DB.PRODUCT))}
    `;
  }

  clickButton(e) {
    if (!e.target.classList.contains(CLASS.PURCHASE_BUTTON)) {
      return;
    }
    const div = e.target.closest('div');
    const { productName } = div.children[0].dataset;
    const { productPrice } = div.children[1].dataset;
    decreaseProductStorage(LOCAL_DB.PRODUCT, productName);
    decresePurchaseStorage(LOCAL_DB.PURCHASE, productPrice);

    // 투입 금액과 상품현황 뷰 업데이트
    this.state.updateState();
    this.addContents();
  }
}

export default PurchaseList;
