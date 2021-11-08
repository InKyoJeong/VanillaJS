import { ID } from '../../constants/index.js';

class ProductInput {
  constructor($target) {
    this.$target = $target;
    this.render();
  }

  render() {
    this.addContents();
    this.dom();
  }

  addContents() {
    this.$target.innerHTML = `
        <h3>상품 추가</h3>
        <input id="${ID.PRODUCT_NAME_INPUT}" type="text" placeholder="상품 이름"/>
        <input id="${ID.PRODUCT_PRICE_INPUT}" type="number" placeholder="상품 가격"/>
        <input id="${ID.PRODUCT_QUANTITY_INPUT}" type="number" placeholder="상품 수량" />
        <button id="${ID.PRODUCT_ADD_BUTTON}">상품 추가</button>
    `;
  }

  dom() {
    this.$nameInput = document.querySelector(`#${ID.PRODUCT_NAME_INPUT}`);
    this.$priceInput = document.querySelector(`#${ID.PRODUCT_PRICE_INPUT}`);
    this.$quantityInput = document.querySelector(`#${ID.PRODUCT_QUANTITY_INPUT}`);
    this.$addButton = document.querySelector(`#${ID.PRODUCT_ADD_BUTTON}`);
  }

  addEvent() {
    this.$addButton.addEventListener('click', this.clickButton.bind(this));
  }

  clickButton() {
    //
  }
}

export default ProductInput;
