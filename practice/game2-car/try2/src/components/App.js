import { ID } from "../constants/index.js";
import CountInput from "./CountInput.js";
import NameInput from "./NameInput.js";
import Result from "./Result.js";
class App {
  constructor($target) {
    this.$target = $target;
    this.state = {
      names: "",
      count: 0,
    };
    this.addDom();
    this.hideContainer();
    this.mounted();
  }

  addDom() {
    [, this.$countContainer, this.$resultContainer] = this.$target.children;
    this.$nameInput = document.getElementById(`${ID.CAR_NAMES_INPUT}`);
    this.$countInput = document.getElementById(`${ID.RACING_COUNT_INPUT}`);
  }

  hideContainer() {
    this.$countContainer.setAttribute("hidden", true);
    this.$resultContainer.setAttribute("hidden", true);
  }

  mounted() {
    new NameInput({
      $nameInput: this.$nameInput,
      setState: this.setState,
      showCountInput: this.showCountInput,
    });
  }

  setState = (newState) => {
    this.state = { ...this.state, ...newState };
    console.log("state: ", this.state);
  };

  showCountInput = () => {
    new CountInput({
      $countContainer: this.$countContainer,
      $countInput: this.$countInput,
      setState: this.setState,
      showResult: this.showResult,
    });
  };

  showResult = () => {
    new Result({
      $resultContainer: this.$resultContainer,
      state: this.state,
    });
  };
}

export default App;
