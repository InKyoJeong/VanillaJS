import { ERROR, NUM } from '../constants/index.js';

const isExceedNameLength = names => {
  return names.some(name => name.length > NUM.MAX_NAME_LENGTH);
};

const isNameEmpty = names => {
  return names.some(name => name.trim().length === 0);
};

const isNameDuplicated = names => {
  return new Set([...names]).size !== names.length;
};

export const isValidNameInput = names => {
  if (isNameEmpty(names)) {
    alert(ERROR.NAME_IS_EMPTY);
    return false;
  }
  if (isExceedNameLength(names)) {
    alert(ERROR.NAME_LENGTH_IS_LONG);
    return false;
  }
  if (isNameDuplicated(names)) {
    alert(ERROR.NAME_IS_DUPLICATED);
    return false;
  }

  return true;
};
