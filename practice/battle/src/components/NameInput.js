class NameInput {
  constructor($target) {
    this.$target = $target;
    this.render();
  }

  render() {
    this.addContents();
  }

  addContents() {
    this.$target.innerHTML = `
        <h3>이름을 5자 이하, 쉼표로 구분</h3>
        <input type="text" placeholder="" />
        <button>확인</button>
    `;
  }
}

export default NameInput;
