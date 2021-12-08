import { ID, LOCAL_DB } from "../../constants/index.js";
import { getLocalStorage } from "../../utils/localStorage.js";
import { stationLists } from "../../utils/template.js";

class LineInput {
  constructor($target, state) {
    this.$target = $target;
    this.state = state;

    this.addTemplate();
    this.selectDom();
  }

  addTemplate() {
    this.$target.innerHTML = ` 
      <p>노선 이름</p>
      <input id=${ID.LINE_NAME_INPUT} placeholder="노선 이름을 입력해주세요."/>
      <div>
        <span>상행 종점</span>
        <select id="${ID.LINE_START_STATION_SELECTOR}">
        ${stationLists(getLocalStorage(LOCAL_DB.STATION))} 
        </select>
      </div>
      <div>
        <span>하행 종점</span>
        <select id="${ID.LINE_END_STATION_SELECTOR}">
        ${stationLists(getLocalStorage(LOCAL_DB.STATION))} 
        </select>
      </div>
      <button id="${ID.LINE_ADD_BUTTON}">노선 추가</button>
    `;
  }

  selectDom() {
    this.$nameInput = document.querySelector(`#${ID.LINE_NAME_INPUT}`);
    this.$addButton = document.querySelector(`#${ID.LINE_ADD_BUTTON}`);
  }
}

export default LineInput;
