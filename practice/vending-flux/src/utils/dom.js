export const $ = (selector, parentElement = document) =>
  parentElement.querySelector(selector);
