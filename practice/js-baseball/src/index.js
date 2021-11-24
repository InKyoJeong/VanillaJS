import { NUM } from "./constants.js";
import { isValidUserInput } from "./valid.js";

export default class BaseballGame {
  constructor() {
    this.dom();
    this.addEvents();
    this.result.innerHTML = "";
    this.computerInput = this.getComputerNumber();
  }

  dom() {
    this.userForm = document.querySelector("form");
    this.userInput = document.querySelector("#user-input");
    this.result = document.querySelector("#result");
  }

  addEvents() {
    this.userForm.addEventListener("submit", this.getUserNumber.bind(this));
  }

  getComputerNumber() {
    const computerNumbers = [];
    while (computerNumbers.length < NUM.MAX_LENGTH) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(
        NUM.MIN_NUMBER,
        NUM.MAX_NUMBER
      );
      if (!computerNumbers.includes(randomNumber)) {
        computerNumbers.push(randomNumber);
      }
    }

    return computerNumbers;
  }

  getUserNumber(e) {
    e.preventDefault();
    const userNumbers = this.userInput.value
      .split("")
      .map((num) => Number(num));

    if (!isValidUserInput(userNumbers)) {
      this.clearInput();
      return;
    }

    const playResult = this.play(this.computerInput, userNumbers);
    this.displayResult(playResult);
  }

  clearInput() {
    this.userInput.value = "";
  }

  play(computerInputNumbers, userInputNumbers) {
    console.log(computerInputNumbers, userInputNumbers);
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < NUM.MAX_LENGTH; i++) {
      if (computerInputNumbers.indexOf(userInputNumbers[i]) === i) {
        strike++;
        continue;
      }
      if (computerInputNumbers.includes(userInputNumbers[i])) {
        ball++;
      }
    }

    return this.getResultText(strike, ball);
  }

  getResultText(strike, ball) {
    let text = "";
    if (strike === 0 && ball === 0) {
      text = "낫싱";
    }
    if (ball > 0) {
      text += `${ball}볼 `;
    }
    if (strike > 0) {
      text += `${strike}스트라이크`;
    }
    if (strike === NUM.MAX_LENGTH) {
      text = "정답";
    }

    return text;
  }

  displayResult(text) {
    if (text === "정답") {
      return this.displayRestartButton();
    }
    this.result.innerHTML = text;
  }

  displayRestartButton() {
    this.result.innerHTML = "";
    const guide = document.createElement("span");
    guide.innerText = "🎉 정답을 맞추셨습니다! 🎉";
    const restartButton = document.createElement("button");
    restartButton.innerText = "재시작";
    const restartSpan = document.createElement("span");
    restartSpan.innerText = "게임을 새로 시작하시겠습니까?";

    const restartContainer = document.createElement("div");
    restartContainer.append(restartSpan, restartButton);
    this.result.append(guide, restartContainer);
  }
}

new BaseballGame();
