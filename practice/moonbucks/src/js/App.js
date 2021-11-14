import {
  getMenu,
  postMenu,
  updateMenuSold,
  updateMenuName,
  deleteMenu,
} from "./api/index.js";
import { CATEGORY } from "./constants/index.js";
import { makeElement } from "./utils/makeElement.js";

class App {
  constructor() {
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
    this.$submitButton.addEventListener("click", this.addItem.bind(this));
    this.$menuForm.addEventListener("submit", this.addItem.bind(this));
  }

  async loadItems() {
    const menuList = await getMenu(this.currentCategory);

    if (menuList !== null) {
      menuList.forEach((item) => this.paintItems(item));
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
    this.loadItems();
    this.updateCount();

    // changeTitle
    this.$h2.innerText = `${CATEGORY[name]} 메뉴 관리`;
  }

  makeItemBlock(obj) {
    const editButton = makeElement(
      "button",
      "수정",
      "bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"
    );
    editButton.addEventListener("click", this.editItem.bind(this));

    const deleteButton = makeElement(
      "button",
      "삭제",
      "bg-gray-50 text-gray-500 text-sm menu-remove-button"
    );
    deleteButton.addEventListener("click", this.deleteItem.bind(this));

    const soldButton = makeElement(
      "button",
      "품절",
      "bg-gray-50 text-gray-500 text-sm mr-1 menu-sold-out-button"
    );
    soldButton.addEventListener("click", this.soldItem.bind(this));

    const span =
      obj.isSoldOut === true
        ? makeElement("span", obj.name, "w-100 pl-2 menu-name sold-out")
        : makeElement("span", obj.name, "w-100 pl-2 menu-name");

    const li = document.createElement("li");
    li.className = "menu-list-item d-flex items-center py-2";
    li.dataset.index = obj.id;
    li.append(span, soldButton, editButton, deleteButton);

    return li;
  }

  paintItems(obj) {
    const itemBlock = this.makeItemBlock(obj);
    this.$menuList.append(itemBlock);
    this.updateCount();
  }

  async addItem(e) {
    e.preventDefault();
    const name = this.$inputField.value;
    if (name.trim() === "") {
      return;
    }
    const newItem = await postMenu(this.currentCategory, name);
    this.paintItems(newItem);
    this.$inputField.value = "";
  }

  async editItem(e) {
    const { parentElement } = e.target;
    const message = prompt("수정하시겠어요?");
    if (message === null) {
      return;
    }
    parentElement.children[0].innerText = message;

    const { index } = parentElement.dataset;
    await updateMenuName(this.currentCategory, index, message);
  }

  async deleteItem(e) {
    const { parentElement } = e.target;
    if (confirm("삭제하시겠어요?")) {
      parentElement.remove();
    }
    this.updateCount();

    const { index } = parentElement.dataset;
    await deleteMenu(this.currentCategory, index);
  }

  async soldItem(e) {
    const span = e.target.parentElement.children[0];
    span.classList.toggle("sold-out");

    const { index } = e.target.parentElement.dataset;
    await updateMenuSold(this.currentCategory, index);
  }

  updateCount() {
    const count = this.$menuList.childElementCount;
    this.$menuCount.innerText = `총 ${count}개`;
  }
}

export default App;
