class ProductList {
  constructor($target) {
    this.$target = $target;
    this.render();
  }

  render() {
    this.addContents();
  }

  addContents() {
    this.$target.innerHTML = `
        <h3>상품 현황</h3>
    `;
  }
}

export default ProductList;

//형식: 콜라 / 1000원 / 2개
//     사이다 / 1000원 / 2개
