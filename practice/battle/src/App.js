import { ID } from './constants/index.js';
import NameInput from './components/NameInput.js';

class App {
  constructor($target) {
    this.$target = $target;
    this.render();
  }

  render() {
    this.addContainer();
  }

  addContainer() {
    this.$target.innerHTML = `
        <h3>이름을 쉼표로 구분하여 입력</h3>
        <div id=${ID.NAME_INPUT_CONTAINER}></div>
        <div id=${ID.COUNT_INPUT_CONTAINER}></div>
        <div id=${ID.RESULT_CONTAINER}></div>
    `;
  }
}
export default App;
