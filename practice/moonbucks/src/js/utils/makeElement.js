export const makeElement = (tagName, elementName, className) => {
  const element = document.createElement(tagName);
  element.innerText = elementName;
  element.className = className;

  return element;
};
