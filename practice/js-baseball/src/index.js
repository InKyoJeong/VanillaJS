import { NUM } from "./constants/index.js";

export default class BaseballGame {
  constructor() {
    this.dom();
    this.getComputerNumber();
  }

  dom() {
    this.userInput = document.querySelector("#user-input");
    this.submitButton = document.querySelector("#submit");
    this.result = document.querySelector("#result");
  }

  getComputerNumber() {
    const numberArray = [];
    while (numberArray.length < NUM.MAX_LENGTH) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(
        NUM.MIN_NUMBER,
        NUM.MAX_NUMBER
      );
      if (!numberArray.includes(randomNumber)) {
        numberArray.push(randomNumber);
      }
    }

    return numberArray;
  }

  play(computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  }
}

new BaseballGame();
