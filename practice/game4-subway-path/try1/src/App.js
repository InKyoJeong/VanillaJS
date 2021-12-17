import { ID } from "./constants/index.js";
import SubwayInput from "./modules/subway/SubwayInput.js";

class App {
  constructor($target) {
    this.$target = $target;
    this.render();
  }

  render() {
    this.addContainer();
    this.dom();
    this.addContents();
  }

  addContainer() {
    this.$target.innerHTML = `
        <h1>지하철 길찾기</h1>
        <div id=${ID.SUBWAY_INPUT_CONTAINER}></div>
    `;
  }
  dom() {
    this.$inputContainer = document.querySelector(
      `#${ID.SUBWAY_INPUT_CONTAINER}`
    );
  }
  addContents() {
    new SubwayInput(this.$inputContainer);
  }
}

export default App;
