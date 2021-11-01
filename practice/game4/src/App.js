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

// - [x] 인풋과 테이블 컨테이너로 나누기
// - [x] 역, 노선, 구간 데이터를 초기 설정
// - [x] 역 인풋 템플릿 추가
// - [x] 역 테이블 템플릿 추가
// - [x] 값을 입력하면 테이블로 데이터를 넘기기
// - 값을 입력할 수 없는 경우 판별하기
//   - [x] 두글자 이상이어야함,
//   - [x] 출발=도착불가
//   - [x] 존재하지 않는역 불가
//   - [] 출발-도착이 연결되지않으면 조회 불가 -> 다 연결되는데 어떤경운지 모르겠다,,
// - [x] 다익스트라 이용해서 결과 구하기
// - [x] 총 거리, 총 시간도 같이 넘기기
