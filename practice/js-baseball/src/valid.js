import { ERROR, NUM } from "./constants.js";

export const isValidUserInput = (input) => {
  let isValid = true;

  if (
    input.length !== NUM.MAX_LENGTH ||
    input.includes(NUM.ZERO) ||
    input.includes(NaN)
  ) {
    alert(ERROR.NUMBER_ISNOT_CORRECT);
    isValid = false;
  }

  if (new Set([...input]).size !== NUM.MAX_LENGTH) {
    alert(ERROR.NUMBER_IS_DUPLICATED);
    isValid = false;
  }

  return isValid;
};
