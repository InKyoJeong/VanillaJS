import { ID } from "./constants/index.js";
import StationContainer from "./components/station/StationContainer.js";

class App {
  constructor($target) {
    this.$target = $target;
    this.addTemplate();
    this.selectDom();
    this.addEvent();
  }

  addTemplate() {
    this.$target.innerHTML += `  
        <div id=${ID.MANAGER_BUTTON_CONTAINER}>
          <button id=${ID.STATION_MANAGER_BUTTON}>1. 역 관리</button>
          <button id=${ID.LINE_MANAGER_BUTTON}>2. 노선 관리</button>
          <button id=${ID.SECTION_MANAGER_BUTTON}>3. 구간 관리</button>
          <button id=${ID.MAP_PRINT_MANAGER_BUTTON}>4. 지하철 노선도 출력</button>
        </div>
        <div id=${ID.RESULT_CONTAINER}></div>
    `;
  }

  selectDom() {
    this.$buttonContainer = document.querySelector(
      `#${ID.MANAGER_BUTTON_CONTAINER}`
    );
    this.$resultContainer = document.querySelector(`#${ID.RESULT_CONTAINER}`);
  }

  addEvent() {
    this.$buttonContainer.addEventListener("click", this.selectMenu.bind(this));
  }

  selectMenu(e) {
    const { id } = e.target;

    if (id === ID.STATION_MANAGER_BUTTON) {
      new StationContainer(this.$resultContainer);
    }
  }
}

export default App;
