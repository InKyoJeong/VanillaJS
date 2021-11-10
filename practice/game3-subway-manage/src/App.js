import StationManager from "./modules/station/index.js";
import SectionManager from "./modules/section/index.js";
import LineManager from "./modules/line/index.js";
import MapManager from "./modules/map/index.js";
import { ID } from "./constants/index.js";

class App {
  constructor($target) {
    this.$target = $target;
    this.render();
  }

  render() {
    this.addContainer();
    this.dom();
    this.addButtons();
    this.addEvent();
  }

  addContainer() {
    this.$target.innerHTML = `
        <h1>🚇 지하철 노선도 관리</h1>
        <div id=${ID.MANAGER_BUTTON_CONTAINER}></div>
        <div id=${ID.RESULT_CONTAINER}></div>
    `;
  }

  dom() {
    this.$container = document.querySelector(`#${ID.MANAGER_BUTTON_CONTAINER}`);
    this.$result = document.querySelector(`#${ID.RESULT_CONTAINER}`);
  }

  addButtons() {
    this.$container.innerHTML = `
        <button id=${ID.STATION_MANAGER_BUTTON}>1. 역관리</button>
        <button id=${ID.LINE_MANAGER_BUTTON}>2. 노선 관리</button>
        <button id=${ID.SECTION_MANAGER_BUTTON}>3. 구간 관리</button>
        <button id=${ID.MAP_PRINT_MANAGER_BUTTON}>4. 지하철 노선도 출력</button    
    `;
  }

  addEvent() {
    this.$container.addEventListener("click", this.changeManager.bind(this));
  }

  changeManager(e) {
    const { id } = e.target;
    if (id === ID.STATION_MANAGER_BUTTON) {
      new StationManager(this.$result);
    }
    if (id === ID.LINE_MANAGER_BUTTON) {
      new LineManager(this.$result);
    }
    if (id === ID.SECTION_MANAGER_BUTTON) {
      new SectionManager(this.$result);
    }
    if (id === ID.MAP_PRINT_MANAGER_BUTTON) {
      new MapManager(this.$result);
    }
  }
}

export default App;
