export const clearInput = (...$inputs) => {
  for (let input of $inputs) {
    input.value = '';
  }
};
