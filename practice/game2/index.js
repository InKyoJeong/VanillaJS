import Car from "./Car.js";
import { checkValidCount, checkValidNames } from "./utils.js";

export default class RacingCarGame {
  constructor() {
    this.carsArr = [];
    this.app = document.querySelector("#app");
    this.carInput = document.getElementById("#car-names-input");
    this.carSubmit = document.getElementById("#car-names-submit");
    this.countInput = document.getElementById("#racing-count-input");
    this.countSubmit = document.getElementById("#racing-count-submit");
    this.result = document.getElementById("#racing-result");
    this.carSubmit.addEventListener("click", this.getInputCar.bind(this));
    this.countSubmit.addEventListener("click", this.getInputCount.bind(this));
  }

  getInputCar() {
    const carNames = this.carInput.value.split(",");
    const message = checkValidNames(carNames);
    if (message) {
      this.displayAlertMessage(message);
      this.clearNameInput();
      return this.carInput.focus();
    }
    this.countInput.focus();
    this.makeCar(carNames);
  }

  getInputCount() {
    const count = this.countInput.value;
    let message = checkValidCount(count, this.carInput.value);
    if (message) {
      this.displayAlertMessage(message);
      this.clearCountInput();
      return this.countInput.focus();
    }

    this.advanceCar(count);
  }

  makeCar(carNames) {
    carNames.forEach((car) => {
      this.carsArr.push(new Car(car));
    });
  }

  advanceCar(count) {
    for (let i = 0; i < count; i++) {
      this.carsArr.forEach((car) => {
        car.advance();
      });
      this.paintResult();
    }
    this.paintWinner();
  }

  paintResult() {
    const container = document.createElement("div");
    const br = document.createElement("br");

    this.carsArr.forEach((car) => {
      const div = document.createElement("div");
      div.innerHTML = `${car.name}: ${car.distance}`;
      container.appendChild(div);
    });

    this.result.append(container, br);
  }

  paintWinner() {
    let winner = this.getWinner();
    winner = winner.reduce((acc, cur) => {
      return acc.concat(cur.name);
    }, []);

    const div = document.createElement("div");
    div.innerHTML = `최종 우승자: ${[...winner]}`;
    this.result.appendChild(div);
  }

  getWinner() {
    const maxDistance = this.getMaxDistance();
    const winnerArr = this.carsArr.filter((car) => {
      return car.distance.length === maxDistance;
    });

    return winnerArr;
  }

  getMaxDistance() {
    let max = 0;
    this.carsArr.forEach((car) => {
      max = Math.max(car.distance.length, max);
    });
    return max;
  }

  displayAlertMessage(message) {
    alert(message);
  }

  clearNameInput() {
    this.carInput.value = "";
  }

  clearCountInput() {
    this.countInput.value = "";
  }
}

new RacingCarGame();

// - [v] id값 추가
// - [v] 차 클래스 구성 // 전진 조건은 0~9중 4이상일때
// - [v] 5개 이하로 콤마로 구분해서 차 입력받기
// - [v] 입력값 검증
//   -  1) 5자 이하인지, 2)중복있는지, 3)빈값있는지(공백포함불가)
//   -  하나라도 5개 초과했으면 1)위반, 원래길이와 중복제거길이 다르면 2)위반
// - [v] 시도할 횟수 입력
// - [v] 잘못입력은 alert로 메시지후 재입력
//   - 1) 0이나 빈값입력했을때, 숫자가아닐때 2) 차를 입력하지않았을때
// - [v] 차를 생성
// - [v] 차 배열의 전진값을 시도 횟수에 따라 하나씩 증가
// - [v] 시도 횟수별로 전진 출력
// - [v] 최종 우승자 판별
//   - reduce로 하나의 배열로 우승자 출력
//   - 우승자 그리기
