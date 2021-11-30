import { ID } from './constants/index.js';
import NameInput from './components/NameInput.js';
import CountInput from './components/CountInput.js';
import Result from './components/Result.js';

class App {
  constructor($target) {
    this.$target = $target;
    this.render();
    this.state = {
      names: [],
      count: 0,
    };
  }

  render() {
    this.addContainer();
    this.selectDom();
    this.renderNameInput();
  }

  addContainer() {
    this.$target.innerHTML = ` 
        <div id=${ID.NAME_INPUT_CONTAINER}></div>
        <div id=${ID.COUNT_INPUT_CONTAINER}></div>
        <div id=${ID.RESULT_CONTAINER}></div>
    `;
  }

  selectDom() {
    this.$nameContainer = document.querySelector(`#${ID.NAME_INPUT_CONTAINER}`);
    this.$countContainer = document.querySelector(
      `#${ID.COUNT_INPUT_CONTAINER}`
    );
    this.$resultContainer = document.querySelector(`#${ID.RESULT_CONTAINER}`);
  }

  setState = newState => {
    this.state = { ...this.state, ...newState };
  };

  renderNameInput() {
    new NameInput({
      $nameContainer: this.$nameContainer,
      setState: this.setState,
      showCountInput: this.showCountInput,
    });
  }

  showCountInput = () => {
    new CountInput({
      $countContainer: this.$countContainer,
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
