import { clearInput } from "../utils/clearInput.js";
import { isValidNames } from "../utils/valid.js";

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

    const names = this.$nameInput.value.split(",");
    if (!isValidNames(names)) {
      clearInput(this.$nameInput);
      return;
    }
    this.setState({ names });
    this.showCountInput();
  }
}

export default NameInput;
