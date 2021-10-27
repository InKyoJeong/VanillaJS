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

// - [x] 먼저 버튼을 렌더링 하고 id 값을 추가
//  - id 값은 상수로 추가
//  - 각 버튼에 리스너 추가
// - [] 각 버튼에 따라 container를 생성하기
//  - [x] 역은 역추가인풋, 목록테이블이 필요
//  - [] 노선은 노선입력인풋, 상행/하행 선택, 목록테이블이 필요
//  - [] 구간은 구간 수정 버튼창, 구간등록 인풋, 목록테이블이 필요
//  - [] 노선도는 모든 노선 한번에 출력

// - [x] **역 관리**
//  - [x] 중복된 역 불가, 지하철 역은 2글자 이상
//    - [x] 불가능하면 인풋초기화 - 경고메세지를 띄우면 인풋도 초기화되게
//  - [x] 체크하는 utils, alert 추가
//  - [x] 역을 로컬스토리지에 추가
//  - [x] 로컬스토리지에 저장되면 뷰를 업데이트
//    - [x] 이벤트를 감지하는 옵저버 추가해서 다시그려주게 하기
//  - [x] 역을 삭제 - target.classList.contains로 이벤트위임
//    - [x] 노선에 등록된 역은 삭제 불가 - lineList가 빈값이아니면 삭제불가

// - [x] **노선 관리**
// - [x] 노선입력 인풋, 목록테이블 컨텐츠 생성
// - [x] 노선 하행 상행에 저장된 역을 표시
// - [x] 노선 클래스 생성
// - 상행/하행 선택하고 노선을 입력하면 추가 - 로컬스토리지와 화면에추가
//   - [x] 역을 저장하면 Line의 Station정보에 추가
//   - [x] Station의 Line정보에도 추가
//   - [x] 중복된 노선 불가
//   - [x] 상행,하행 같게 불가
//   - [x] 로컬스토리지 저장
//   - [x] 뷰 업데이트
// - 노선을 삭제
//   - [x] 노선 로컬스토리지 제거
//   - [x] 뷰에서도 제거
//   - [x] 역의 노선 정보도 없애기

// - [] **구간 관리**
// - [x] 구간 기능 ID,CLASS 상수 추가
// - [x] 구간 수정 버튼창, 구간등록 인풋, 목록테이블 클래스생성
// - [x] 버튼을 누르면 등록인풋과 테이블이 생성
// - 구간 추가
// - [x] 노선을 선택하고 인덱스번호에 맞게 구간을 추가
//   - [x] 인덱스 뒤로 밀고 추가: splice(index, 0, 'newStation')
//   - [x] 사이가 아닌 번호에는 추가 불가능. ex) 상행보다 작거나 하행보다 크거나.
//   - [x] 이미 등록한 역이면 추가불가
//   - [x] 구간을 추가하면 노선스토리지의 역정보 업데이트
//   - [x] 구간을 추가하면 역스토리지의 노선 업데이트
// - 구간 삭제
// - [] 종점을 제거시 다음역이 종점
// - [] 노선의 역이 두개이하면 역 제거 불가

// **노선도 출력 관리**
// - [] 지하철 노선도 출력 버튼을 누르면 <div class="map"></div> 태그를 만들고
// 해당 태그 내부에 노선도를 출력한다.
