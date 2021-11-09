import { CLASS, LOCAL_DB } from '../../constants/index.js';
import { decreaseProductStorage, decresePurchaseStorage, getLocalStorage } from '../../utils/localStorage.js';
import { purchaseContents } from '../../utils/template.js';

class PurchaseList {
  constructor($target) {
    this.$target = $target;
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

    const { productName } = e.target.closest('div').children[0].dataset;
    const { productPrice } = e.target.closest('div').children[1].dataset;

    // 상품 로컬스토리지에서 제품 찾아서 개수 차감
    decreaseProductStorage(LOCAL_DB.PRODUCT, productName);
    // 투입금액에서 차감
    decresePurchaseStorage(LOCAL_DB.PURCHASE, productPrice);

    // 상품현황 개수 업데이트
    // 투입 금액 업데이트
  }
}

export default PurchaseList;
