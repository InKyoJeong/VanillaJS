import Product from '../../classes/Product.js';
import { ID, LOCAL_DB } from '../../constants/index.js';
import { clearInput } from '../../utils/clearInput.js';
import { addLocalStorage } from '../../utils/localStorage.js';
import { isValidProductInput } from '../../utils/valid.js';

class ProductInput {
  constructor($target) {
    this.$target = $target;
    this.render();
  }

  render() {
    this.addContents();
    this.dom();
    this.addEvent();
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
    const name = this.$nameInput.value;
    const price = this.$priceInput.value;
    const quantity = this.$quantityInput.value;
    const product = new Product(name, price, quantity);

    if (!isValidProductInput(name, price, quantity)) {
      return;
    }

    addLocalStorage(LOCAL_DB.PRODUCT, product);
    clearInput(this.$nameInput, this.$priceInput, this.$quantityInput);
  }
}

export default ProductInput;
