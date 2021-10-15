import { MAX_CAR_LENGTH, ERROR, TRY_MIN_NUM } from "./constants.js";

export const randomNumber = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const checkValidNames = (carNames) => {
  let errorMessage = "";
  if (carNames.some((car) => car.length > MAX_CAR_LENGTH)) {
    errorMessage = ERROR.CAR_NAME_EXCEED;
  }
  if (!checkDuplicate(carNames)) {
    errorMessage = ERROR.CAR_NAME_DUPLICATED;
  }
  if (carNames.some((car) => car.trim() === "")) {
    errorMessage = ERROR.CAR_NAME_EMPTY;
  }

  return errorMessage;
};

const checkDuplicate = (carNames) => {
  let isValid = true;
  const removeDuplicateLength = new Set([...carNames]).size;
  if (removeDuplicateLength !== carNames.length) {
    isValid = false;
  }

  return isValid;
};

export const checkValidCount = (count, nameInput) => {
  let errorMessage = "";
  if (count < TRY_MIN_NUM) {
    errorMessage = ERROR.COUNT_IS_NOT_NATURAL;
  }

  if (nameInput === "") {
    errorMessage = ERROR.CAR_INPUT_EMPTY;
  }

  return errorMessage;
};
