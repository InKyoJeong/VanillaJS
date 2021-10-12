const MIN_NUM = 1;
const MAX_NUM = 9;
const NUM_LENGTH = 3;

export default class BaseballGame {
  constructor() {
    this.inputValue = document.querySelector("#user-input");
    this.result = document.querySelector("#result");
    this.submit = document.querySelector("#submit");
    this.computerInput = "";
    this.submit.addEventListener("click", () => {
      this.userInput = this.generateUserNum();
      let hint = this.play(this.computerInput, this.userInput);
      this.displayResult(hint);
    });
    this.init();
  }

  init() {
    this.computerInput = this.generateComputerNum();
    this.clearResult();
  }

  generateComputerNum() {
    let selectNumber = [];
    while (selectNumber.length < NUM_LENGTH) {
      const number = getRandomNumber(MIN_NUM, MAX_NUM);
      if (!selectNumber.includes(number)) {
        selectNumber.push(number);
      }
    }

    return selectNumber;
  }

  generateUserNum() {
    let input = this.inputValue.value.split("");
    if (this.checkValidNum(input)) {
      return input.map((v) => parseInt(v));
    } else {
      this.displayAlert();
    }
  }

  checkValidNum(input) {
    let isValid = true;
    let set = new Set([...input]);
    if (set.size !== NUM_LENGTH || input.length !== NUM_LENGTH) {
      isValid = false;
    }
    input.forEach((v) => {
      if (isNaN(parseInt(v))) {
        isValid = false;
      }
    });

    return isValid;
  }

  displayAlert() {
    this.clearInput();
    this.clearResult();
    return alert("올바른 세자리 숫자를 중복없이 입력해주세요.");
  }

  displayResult(text) {
    if (text === "정답") {
      this.clearResult();
      return this.displayRestartButton();
    }
    this.result.innerHTML = text;
  }

  play(computerInputNumbers, userInputNumbers) {
    console.log(computerInputNumbers, userInputNumbers);
    let strike = 0;
    let ball = 0;
    let resultText = "";
    for (let i = 0; i < NUM_LENGTH; i++) {
      if (i === computerInputNumbers.indexOf(userInputNumbers[i])) {
        strike++;
      } else if (computerInputNumbers.includes(userInputNumbers[i])) {
        ball++;
      }
    }

    if (strike === 0 && ball === 0) {
      resultText = "낫싱";
    }
    if (ball > 0) {
      resultText += `${ball}볼 `;
    }
    if (strike > 0) {
      resultText += `${strike}스트라이크`;
    }
    if (strike === NUM_LENGTH) {
      resultText = "정답";
    }
    this.clearInput();
    return resultText;
  }

  displayRestartButton() {
    const divCorrect = document.createElement("div");
    const divRestart = document.createElement("div");
    const button = document.createElement("button");
    const span = document.createElement("span");
    span.innerHTML = "🎉 정답을 맞추셨습니다! 🎉";
    button.innerText = "재시작";
    button.id = "game-restart-button";
    button.addEventListener("click", this.init.bind(this));
    divCorrect.appendChild(span);
    divRestart.innerHTML = "게임을 새로 시작하시겠습니까?";
    divRestart.appendChild(button);
    this.result.append(divCorrect, divRestart);
  }

  clearInput() {
    this.inputValue.value = "";
  }
  clearResult() {
    this.result.innerHTML = "";
  }
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

new BaseballGame();

// - [v] 먼저 컴퓨터 랜덤 세자리수 생성
// - [v] 세자리 수를 입력받기 // 세자리 수 중복검사하기 // 숫자가 아닌지 검사하기
// - [v] play함수에서 컴퓨터랑 나의 숫자 비교하기 리턴값은 string
// - [v] 자릿수가 다른데 수만 맞추면 1볼, // 자릿수가 같은자리면 스트라이크 // 전혀다르면 볼
// - [v] 모두 맞추면 게임 끝 정답.
// - [v] 재시작 가능
