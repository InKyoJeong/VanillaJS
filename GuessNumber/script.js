"use strict";

const check = document.querySelector(".check");
const again = document.querySelector(".again");
const guessInput = document.querySelector(".guess");
const message = document.querySelector(".message");
const body = document.querySelector("body");
const correctNumber = document.querySelector(".number");

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

function makeSecretNum() {
  secretNumber = Math.floor(Math.random() * 20 + 1);
}

function checkHandler() {
  const guessInputValue = Number(guessInput.value);
  if (!guessInputValue) {
    return;
  }
  if (secretNumber === guessInputValue) {
    message.innerText = "👍 Correct!";
    body.style.backgroundColor = "blue";
    correctNumber.innerText = secretNumber;
  } else {
    if (secretNumber < guessInputValue) {
      message.innerText = "TOO HIGH!";
    } else if (secretNumber > guessInputValue) {
      message.innerText = "TOO LOW!";
    }
  }
}
function againHandler() {
  guessInput.value = "";
  body.style.backgroundColor = "black";
  message.innerText = "Start guessing...";
  correctNumber.innerText = "?";
  makeSecretNum();
}

function init() {
  makeSecretNum();
  check.addEventListener("click", checkHandler);
  again.addEventListener("click", againHandler);
}

init();
