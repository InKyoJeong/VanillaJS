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

const displayMessage = (msg) => {
  message.innerText = msg;
};

const makeSecretNum = () => {
  secretNumber = Math.floor(Math.random() * 20 + 1);
};

const checkHandler = () => {
  const guessInputValue = Number(guessInput.value);
  if (!guessInputValue) {
    return;
  }
  if (secretNumber === guessInputValue) {
    displayMessage("👍 Correct!");
    body.style.backgroundColor = "blue";
    correctNumber.innerText = secretNumber;
  } else {
    if (secretNumber < guessInputValue) {
      displayMessage("TOO HIGH!");
    } else if (secretNumber > guessInputValue) {
      displayMessage("TOO LOW!");
    }
  }
};
const againHandler = () => {
  displayMessage("Start guessing...");
  guessInput.value = "";
  body.style.backgroundColor = "black";
  correctNumber.innerText = "?";
  makeSecretNum();
};

const init = () => {
  makeSecretNum();
  check.addEventListener("click", checkHandler);
  again.addEventListener("click", againHandler);
};

init();
