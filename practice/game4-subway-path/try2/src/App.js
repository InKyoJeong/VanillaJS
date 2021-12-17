import SubwayInput from "./components/SubwayInput.js";
import { ID } from "./constants/index.js";
import { $ } from "./utils/selector.js";

class App {
  constructor($target) {
    this.$target = $target;

    this.addTemplate();
    this.selectDom();
    this.mounted();
  }

  addTemplate() {
    this.$target.innerHTML = `
      <h1>지하철 길찾기</h1>
      <div id=${ID.SUBWAY_INPUT_CONTAINER}></div>
    `;
  }

  selectDom() {
    this.$inputContainer = $(`#${ID.SUBWAY_INPUT_CONTAINER}`);
  }

  mounted() {
    new SubwayInput(this.$inputContainer);
  }
}

export default App;
