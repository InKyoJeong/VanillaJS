import { NUM } from '../constants/index.js';

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
    return false;
  }
  if (isExceedNameLength(names)) {
    return false;
  }
  if (isNameDuplicated(names)) {
    return false;
  }

  return true;
};
