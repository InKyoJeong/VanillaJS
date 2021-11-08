import { ID } from '../../constants/index.js';
import State from '../../observer/State.js';
import ProductInput from './ProductInput.js';
import ProductList from './ProductList.js';

class ProductManager {
  constructor($target) {
    this.$target = $target;
    this.state = new State();
    this.render();
  }

  render() {
    this.addContainer();
    this.dom();
    this.addContents();
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
    this.$listContainer = document.querySelector(`#${ID.PRODUCT_LIST_CONTAINER}`);
  }

  addContents() {
    new ProductInput(this.$inputContainer, this.state);
    new ProductList(this.$listContainer, this.state);
  }
}

export default ProductManager;
