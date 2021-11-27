class NameInput {
  constructor({ $nameInput, setState, showCountInput }) {
    this.$nameInput = $nameInput;
    this.setState = setState;
    this.showCountInput = showCountInput;

    this.addDom();
    this.addEvent();
  }

  addDom() {
    this.$carNameForm = this.$nameInput.parentElement;
  }

  addEvent() {
    this.$carNameForm.addEventListener("submit", this.submitName.bind(this));
  }

  submitName(e) {
    e.preventDefault();

    const carNames = this.$nameInput.value.split(",");
    this.setState({ names: carNames });
    this.showCountInput();
  }
}

export default NameInput;
