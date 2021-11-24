import { NUM } from "./constants/index.js";

export default class BaseballGame {
  constructor() {
    this.dom();
    this.addEvents();
    this.getComputerNumber();
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
    const userNumbers = this.userInput.value;

    return userNumbers;
  }

  play(computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  }
}

new BaseballGame();
