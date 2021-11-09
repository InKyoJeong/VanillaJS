class ChargeList {
  constructor($target) {
    this.$target = $target;

    this.render();
  }

  render() {
    this.addContents();
  }

  addContents() {
    this.$target.innerHTML = `
        <h3>자판기가 보유한 금액 현황</h3>
        <h3>자판기가 보유한 동전 현황</h3>
    `;
  }
}

export default ChargeList;
