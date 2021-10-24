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

  changeManager(event) {
    const { id } = event.target;
    if (id === ID.STATION_MANAGER_BUTTON) {
      new StationManager(this.$result);
    }
    if (id === ID.SECTION_MANAGER_BUTTON) {
      new SectionManager(this.$result);
    }
    if (id === ID.LINE_MANAGER_BUTTON) {
      new LineManager(this.$result);
    }
    if (id === ID.MAP_PRINT_MANAGER_BUTTON) {
      new MapManager(this.$result);
    }
  }
}

export default App;

// - [x] 먼저 버튼을 렌더링 하고 id 값을 추가
//  - id 값은 상수로 추가
//  - 각 버튼에 리스너 추가
// - [] 각 버튼에 따라 container를 생성하기
//  - [x] 역은 역추가인풋, 목록테이블이 필요
//  - [] 노선은 노선입력인풋, 상행/하행 선택, 목록테이블이 필요
//  - [] 구간은 구간수정 버튼창, 구간등록 인풋, 목록테이블이 필요
//  - [] 노선도는 모든 노선 한번에 출력

// - [] **역 관리**
//  - [x] 중복된 역 불가, 지하철 역은 2글자 이상
//    - [x] 불가능하면 인풋초기화 - 경고메세지를 띄우면 인풋도 초기화되게
//  - [x] 체크하는 utils, alert 추가
//  - [x] 역을 로컬스토리지에 추가
//  - [x] 로컬스토리지에 저장되면 뷰를 업데이트
//    - [x] 이벤트를 감지하는 옵저버 추가해서 다시그려주게 하기
//  - [x] 역을 삭제 - target.classList.contains로 이벤트위임
//    - [] 노선에 등록된 역은 삭제 불가

// - [] **노선 관리**
