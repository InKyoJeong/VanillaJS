import { clearInput } from "../utils/clearInput.js";
import { isValidCount } from "../utils/valid.js";

class CountInput {
  constructor({ $countContainer, $countInput, setState, showResult }) {
    $countContainer.removeAttribute("hidden");
    this.$countInput = $countInput;
    this.$countInput.focus();
    this.setState = setState;
    this.showResult = showResult;
    this.selectDom();
    this.addEvent();
  }

  selectDom() {
    this.$countForm = this.$countInput.parentElement;
  }

  addEvent() {
    this.$countForm.addEventListener("submit", this.submitCount.bind(this));
  }

  submitCount(e) {
    e.preventDefault();

    const count = Number(this.$countInput.value);
    if (!isValidCount(count)) {
      clearInput(this.$countInput);
      return;
    }
    this.setState({ count });
    this.showResult();
  }
}

export default CountInput;
