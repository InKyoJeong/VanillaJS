import { ERROR, NUM } from "../constants/index.js";

const isExceedNameLength = (names) => {
  return names.some((name) => name.length > NUM.MAX_NAME_LENGTH);
};

export const isValidNames = (names) => {
  if (isExceedNameLength(names)) {
    alert(ERROR.NAME_LENGTH_IS_LONG);
    return false;
  }

  return true;
};
