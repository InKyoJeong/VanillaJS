const makeElement = (tagName, elementName, className) => {
  const element = document.createElement(tagName);
  element.innerText = elementName;
  element.className = className;

  return element;
};

export const makeItem = (item, editItem, deleteItem, soldItem) => {
  const editButton = makeElement(
    "button",
    "수정",
    "bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"
  );
  editButton.addEventListener("click", editItem);

  const deleteButton = makeElement(
    "button",
    "삭제",
    "bg-gray-50 text-gray-500 text-sm menu-remove-button"
  );
  deleteButton.addEventListener("click", deleteItem);

  const soldButton = makeElement(
    "button",
    "품절",
    "bg-gray-50 text-gray-500 text-sm mr-1 menu-sold-out-button"
  );
  soldButton.addEventListener("click", soldItem);

  const span =
    item.isSoldOut === true
      ? makeElement("span", item.name, "w-100 pl-2 menu-name sold-out")
      : makeElement("span", item.name, "w-100 pl-2 menu-name");

  const li = document.createElement("li");
  li.className = "menu-list-item d-flex items-center py-2";
  li.dataset.index = item.id;
  li.append(span, soldButton, editButton, deleteButton);
  return li;
};
