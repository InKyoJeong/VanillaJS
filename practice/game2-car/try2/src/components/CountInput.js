import { isValidCount } from "../utils/valid.js";

class CountInput {
  constructor({ $countContainer, $countInput, setState, showResult }) {
    $countContainer.removeAttribute("hidden");
    this.$countInput = $countInput;
    this.setState = setState;
    this.showResult = showResult;
    this.$countInput.focus();
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

    const count = Number(this.$countInput.value);
    if (!isValidCount(count)) {
      return;
    }
    this.setState({ count });
    this.showResult();
  }
}

export default CountInput;
