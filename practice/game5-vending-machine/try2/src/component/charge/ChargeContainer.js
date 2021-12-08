class ChargeContainer {
  constructor($target) {
    this.$target = $target;
    this.render();
  }

  render() {
    this.addContainer();
    // this.selectDom();
    // this.mounted();
  }

  addContainer() {
    this.$target.innerHTML = `
      <div></div>
      <div></div>
    `;
  }

  selectDom() {
    //
  }

  //   mounted() {
  //     new ChargeInput(this.$inputContainer, this.state);
  //   }
}

export default ChargeContainer;
