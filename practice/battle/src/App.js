import { ID } from './constants/index.js';
import NameInput from './components/NameInput.js';
import CountInput from './components/CountInput.js';

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
        <h3>이름을 쉼표로 구분하여 입력</h3>
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
  }

  setState = newState => {
    this.state = { ...this.state, ...newState };
    console.log(this.state);
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
    });
  };
}
export default App;
