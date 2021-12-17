import { tableTemplate } from "../utils/template.js";

class Result {
  constructor({ $resultContainer, state }) {
    this.$resultContainer = $resultContainer;
    this.state = state;

    this.addTemplate();
  }

  addTemplate() {
    this.$resultContainer.innerHTML = tableTemplate(this.state);
  }
}

export default Result;
