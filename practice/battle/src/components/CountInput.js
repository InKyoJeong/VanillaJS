class CountInput {
  constructor({ $countContainer, setState }) {
    this.$countContainer = $countContainer;
    this.setState = setState;
    this.render();
  }

  render() {
    this.addContents();
  }

  addContents() {
    this.$countContainer.innerHTML = `
        <h3>플레이턴 수 입력</h3>
        <input type="number" placeholder="" />
        <button>확인</button>
    `;
  }
}

export default CountInput;
