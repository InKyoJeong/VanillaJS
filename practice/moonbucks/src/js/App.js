import { CATEGORY } from "./constants/index.js";
import {
  deleteLocalStorage,
  editLocalStorage,
  getLocalStorage,
  saveLocalStorage,
} from "./utils/localStorage.js";
import { makeElement } from "./utils/makeElement.js";

class App {
  constructor() {
    this.list = [];
    this.currentCategory = "espresso"; // 초기 카테고리
    this.dom();
    this.addEvents();
    this.loadItems();
    this.itemIndex = Date.now() + "";
  }

  dom() {
    this.$nav = document.querySelector("nav");
    this.$h2 = document.querySelector("h2");
    this.$menuForm = document.querySelector("#espresso-menu-form");
    this.$inputField = document.querySelector(".input-field");
    this.$submitButton = document.querySelector(".input-submit");
    this.$menuList = document.querySelector("#espresso-menu-list");
    this.$menuCount = document.querySelector(".menu-count");
  }

  addEvents() {
    this.$nav.addEventListener("click", this.clickCategory.bind(this));
    this.$submitButton.addEventListener("click", this.submitForm.bind(this));
    this.$menuForm.addEventListener("submit", this.submitForm.bind(this));
  }

  loadItems() {
    // LS
    const list = getLocalStorage(this.currentCategory);

    if (list !== null) {
      list.forEach((item) => this.paintItems(item));
    }
  }

  clickCategory(e) {
    if (!e.target.classList.contains("cafe-category-name")) {
      return;
    }

    const { categoryName } = e.target.dataset;
    this.currentCategory = categoryName;
    this.changeCategory(this.currentCategory);
  }

  changeCategory(name) {
    // repaint
    this.$menuList.innerHTML = "";
    this.list = [];
    this.loadItems();

    // changeTitle
    this.$h2.innerText = `${CATEGORY[name]} 메뉴 관리`;

    // change Input
    this.$inputField.setAttribute(
      "placeholder",
      `${CATEGORY[name].slice(2)} 메뉴 이름`
    );
    this.$inputField.setAttribute("id", `${name}-menu-name`);
    this.$submitButton.setAttribute("id", `${name}-menu-submit-button`);
  }

  submitForm(e) {
    e.preventDefault();
    const text = this.$inputField.value;
    if (text === "") {
      return;
    }
    const id = this.itemIndex++;

    this.paintItems({ text, id });
    this.$inputField.value = "";
  }

  makeItemBlock(obj) {
    const editButton = makeElement(
      "수정",
      "bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button",
      "button"
    );
    editButton.addEventListener("click", this.editItem.bind(this));

    const deleteButton = makeElement(
      "삭제",
      "bg-gray-50 text-gray-500 text-sm menu-remove-button",
      "button"
    );
    deleteButton.addEventListener("click", this.deleteItem.bind(this));

    const soldButton = makeElement(
      "품절",
      "bg-gray-50 text-gray-500 text-sm mr-1 menu-sold-out-button",
      "button"
    );
    soldButton.addEventListener("click", this.soldItem.bind(this));

    const span = makeElement(obj.text, "w-100 pl-2 menu-name", "span");

    const li = document.createElement("li");
    li.className = "menu-list-item d-flex items-center py-2";
    li.dataset.index = obj.id;
    li.append(span, soldButton, editButton, deleteButton);

    return li;
  }

  paintItems(obj) {
    const itemBlock = this.makeItemBlock(obj);
    this.$menuList.append(itemBlock);

    const item = { text: obj.text, id: obj.id };
    this.list.push(item);
    this.updateCount();

    // LS
    saveLocalStorage(this.currentCategory, this.list);
  }

  editItem(e) {
    const { parentElement } = e.target;
    const message = prompt("수정하시겠어요?");
    parentElement.children[0].innerText = message;

    // LS
    const { index } = parentElement.dataset;
    editLocalStorage(this.currentCategory, index, message);
  }

  deleteItem(e) {
    const { parentElement } = e.target;
    if (confirm("삭제하시겠어요?")) {
      parentElement.remove();
    }
    this.updateCount();

    // LS
    const { index } = parentElement.dataset;
    deleteLocalStorage(this.currentCategory, index);
  }

  soldItem(e) {
    const span = e.target.parentElement.children[0];
    span.classList.toggle("sold-out");
  }

  updateCount() {
    const count = this.$menuList.childElementCount;
    this.$menuCount.innerText = `총 ${count}개`;
  }
}

export default App;
