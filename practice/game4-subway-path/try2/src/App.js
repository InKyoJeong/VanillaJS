import Result from "./components/Result.js";
import SubwayInput from "./components/SubwayInput.js";
import { ID } from "./constants/index.js";
import { $ } from "./utils/selector.js";

class App {
  constructor($target) {
    this.$target = $target;
    this.state = {
      path: [],
      distance: 0,
      time: 0,
    };

    this.render();
  }

  render() {
    this.addTemplate();
    this.selectDom();
    this.mounted();
  }

  setState = (newState) => {
    this.state = { ...this.state, ...newState };
  };

  addTemplate() {
    this.$target.innerHTML = `
      <h1>지하철 길찾기</h1>
      <div id=${ID.SUBWAY_INPUT_CONTAINER}></div>
      <div id=${ID.SUBWAY_RESULT_CONTAINER}></div>
    `;
  }

  selectDom() {
    this.$inputContainer = $(`#${ID.SUBWAY_INPUT_CONTAINER}`);
    this.$resultContainer = $(`#${ID.SUBWAY_RESULT_CONTAINER}`);
  }

  mounted() {
    new SubwayInput({
      $inputContainer: this.$inputContainer,
      setState: this.setState,
      showResult: this.showResult,
    });
  }

  showResult = () => {
    new Result({
      $resultContainer: this.$resultContainer,
      state: this.state,
    });
  };
}

export default App;
