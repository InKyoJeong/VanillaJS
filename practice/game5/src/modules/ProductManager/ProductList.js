import { LOCAL_DB } from '../../constants/index.js';
import { getLocalStorage } from '../../utils/localStorage.js';
import { productContents } from '../../utils/template.js';

class ProductList {
  constructor($target, state) {
    this.$target = $target;
    this.state = state;
    this.state.event.subscribe(this.render.bind(this));
    this.render();
  }

  render() {
    this.addContents();
  }

  addContents() {
    this.$target.innerHTML = `
        <h3>상품 현황</h3>
        ${productContents(getLocalStorage(LOCAL_DB.PRODUCT))}
    `;
  }
}

export default ProductList;
