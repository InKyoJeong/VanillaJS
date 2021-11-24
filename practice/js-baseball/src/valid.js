import { ERROR, NUM } from "./constants.js";

export const isValidUser = (input) => {
  let isValid = true;

  if (input.length !== NUM.MAX_LENGTH) {
    alert(ERROR.NUMBER_LENGTH_ISNOT_CORRECT);
    isValid = false;
  }

  if (new Set([...input]).size !== NUM.MAX_LENGTH) {
    alert(ERROR.NUMBER_IS_DUPLICATED);
    isValid = false;
  }

  return isValid;
};
