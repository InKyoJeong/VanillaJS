import Path from "../classes/Path.js";
import { ID, NAME } from "../constants/index.js";
import { sections } from "../data/index.js";
import { dijkstraDistance, dijkstraTime } from "../utils/findShort.js";
import { $ } from "../utils/selector.js";
import { inputTemplate } from "../utils/template.js";

class SubwayInput {
  constructor({ $inputContainer, setState, showResult }) {
    this.$inputContainer = $inputContainer;
    this.setState = setState;
    this.showResult = showResult;

    this.render();
  }

  render() {
    this.addTemplate();
    this.selectDom();
    this.addEvent();
  }

  addTemplate() {
    this.$inputContainer.innerHTML = inputTemplate();
  }

  selectDom() {
    this.$departInput = $(`#${ID.DEPARTURE_STATION_NAME_INPUT}`);
    this.$arrivalInput = $(`#${ID.ARRIVAL_STATION_NAME_INPUT}`);
    this.$searchContainer = $(`#${ID.SEARCH_OPTION_CONTAINER}`);
    this.$searchButton = $(`#${ID.SEARCH_BUTTON}`);
  }

  addEvent() {
    this.$searchButton.addEventListener("click", this.clickButton.bind(this));
  }

  clickButton() {
    const departValue = this.$departInput.value;
    const arriveValue = this.$arrivalInput.value;
    const searchType = this.$searchContainer.querySelector(
      `input[name=${NAME.SEARCH_TYPE}]:checked`
    ).value;

    const path = new Path(departValue, arriveValue, searchType);

    this.setState({
      path: path.getPath(),
      distance: path.getTotalDistance(),
      time: path.getTotalTime(),
    });
    this.showResult();
  }
}

export default SubwayInput;
