export const makeElement = (elementName, className, tagName) => {
  const element = document.createElement(tagName);
  element.innerText = elementName;
  element.className = className;

  return element;
};
