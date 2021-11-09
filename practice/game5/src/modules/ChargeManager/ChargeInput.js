class ChargeInput {
  constructor($target) {
    this.$target = $target;

    this.render();
  }

  render() {
    this.addContents();
  }

  addContents() {
    this.$target.innerHTML = `
        <h3>자판기가 보유할 금액 입력</h3>
        <input type="number" placeholder='자판기가 보유할 금액 입력' />
        <button>자판기 동전 충전</button>
    `;
  }
}

export default ChargeInput;
