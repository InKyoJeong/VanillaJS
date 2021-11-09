import { MESSAGE, NUM } from '../constants/index.js';
import { displayAlert } from './displayAlert.js';

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
  if (price < NUM.MIN_PRICE || price % NUM.MIN_PRICE_UNIT !== 0) {
    displayAlert(MESSAGE.PRICE_OR_UNIT_IS_LOW);
    isValid = false;
  }

  return isValid;
};

export const isValidChargeInput = charge => {
  let isValid = true;

  if (charge < NUM.MIN_PRICE || charge % NUM.MIN_PRICE_UNIT !== 0) {
    displayAlert(MESSAGE.PRICE_OR_UNIT_IS_LOW);
    isValid = false;
  }

  return isValid;
};

export const isValidPurchaseInput = amount => {
  let isValid = true;

  if (amount < NUM.MIN_PRICE || amount % NUM.MIN_PRICE_UNIT !== 0) {
    displayAlert(MESSAGE.PRICE_OR_UNIT_IS_LOW);
    isValid = false;
  }

  return isValid;
};
