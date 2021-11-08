import { ID } from '../../constants/index.js';

class ProductManager {
  constructor($target) {
    this.$target = $target;
    this.render();
  }

  render() {
    this.addContainer();
    this.dom();
  }

  addContainer() {
    this.$target.innerHTML = `
        <h1>상품 추가 페이지</h1>
        <div id=${ID.PRODUCT_INPUT_CONTAINER}></div>
        <div id=${ID.PRODUCT_LIST_CONTAINER}></div>
      `;
  }

  dom() {
    this.$inputContainer = document.querySelector(`#${ID.PRODUCT_INPUT_CONTAINER}`);
    console.log('d');
  }
}

export default ProductManager;
