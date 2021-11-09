import { LOCAL_DB, MESSAGE, NUM } from '../constants/index.js';
import { displayAlert } from './displayAlert.js';
import { getPurchaseStorage } from './localStorage.js';

const checkPriceAndUnit = value => {
  let isValid = true;

  if (value < NUM.MIN_PRICE || value % NUM.MIN_PRICE_UNIT !== 0) {
    displayAlert(MESSAGE.PRICE_OR_UNIT_IS_LOW);
    isValid = false;
  }

  return isValid;
};

export const isValidProductInput = (name, price, quantity) => {
  let isValid = true;

  if (name === '' || price === '' || quantity === '') {
    displayAlert(MESSAGE.INPUT_CANNOT_BLANK);
    isValid = false;
  }

  if (quantity < NUM.MIN_QUANTITY) {
    displayAlert(MESSAGE.QUANTITY_IS_LOW);
    isValid = false;
  }

  if (!checkPriceAndUnit(price)) {
    isValid = false;
  }

  return isValid;
};

export const isValidChargeInput = charge => {
  let isValid = true;

  if (!checkPriceAndUnit(charge)) {
    isValid = false;
  }

  return isValid;
};

export const isValidPurchaseInput = amount => {
  let isValid = true;

  if (!checkPriceAndUnit(amount)) {
    isValid = false;
  }

  return isValid;
};

export const isValidPurchaseProduct = price => {
  let isValid = true;

  if (price > getPurchaseStorage(LOCAL_DB.PURCHASE)) {
    displayAlert(MESSAGE.CANNOT_PURCHASE);
    isValid = false;
  }

  return isValid;
};
