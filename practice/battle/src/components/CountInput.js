class CountInput {
  constructor($target) {
    this.$target = $target;
    this.render();
  }

  render() {
    this.addContents();
  }

  addContents() {
    this.$target.innerHTML = `
        <h3>플레이턴 수 입력</h3>
        <input type="number" placeholder="" />
        <button>확인</button>
    `;
  }
}

export default CountInput;
