class CountInput {
  constructor({ $countContainer, $countInput, setState, showResult }) {
    this.$countInput = $countInput;
    this.setState = setState;
    this.showResult = showResult;
    this.$countContainer = $countContainer;
    this.$countContainer.removeAttribute("hidden");

    this.addDom();
    this.addEvent();
  }

  addDom() {
    this.$countForm = this.$countInput.parentElement;
  }

  addEvent() {
    this.$countForm.addEventListener("submit", this.submitCount.bind(this));
  }

  submitCount(e) {
    e.preventDefault();

    const tryCount = Number(this.$countInput.value);
    this.setState({ count: tryCount });
    this.showResult();
  }
}

export default CountInput;
