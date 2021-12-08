const isProductNameEmpty = (name) => {
  return name.trim() === "";
};

const isValidPrice = (price) => {
  return price >= 100 && price % 10 === 0;
};
const isValidQuantity = (quantity) => {
  return quantity >= 1 && Number.isInteger(quantity);
};

export const isValidProductInput = (name, price, quantity) => {
  if (isProductNameEmpty(name)) {
    return false;
  }
  if (!isValidPrice(price)) {
    return false;
  }
  if (!isValidQuantity(quantity)) {
    return false;
  }

  return true;
};
