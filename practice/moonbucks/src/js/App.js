import {
  getMenu,
  postMenu,
  updateMenuSold,
  updateMenuName,
  deleteMenu,
} from "./api/index.js";
import MenuCategory from "./MenuCategory.js";
import { makeElement } from "./utils/makeElement.js";

class App {
  constructor() {
    this.dom();
    this.addEvents();
    this.state = "espresso"; // 초기 카테고리
    this.loadItems();

    new MenuCategory({
      loadItems: this.loadItems,
      setState: this.setState,
      $inputField: this.$inputField,
    });
  }

  dom() {
    this.$menuForm = document.querySelector("#espresso-menu-form");
    this.$inputField = document.querySelector(".input-field");
    this.$submitButton = document.querySelector(".input-submit");
    this.$menuList = document.querySelector("#espresso-menu-list");
    this.$menuCount = document.querySelector(".menu-count");
  }

  addEvents() {
    this.$submitButton.addEventListener("click", this.addItem.bind(this));
    this.$menuForm.addEventListener("submit", this.addItem.bind(this));
  }

  setState = (state) => {
    this.state = state;
  };

  loadItems = async () => {
    this.$menuList.innerHTML = "";

    const menuList = await getMenu(this.state);
    if (menuList !== null) {
      menuList.forEach((item) => this.paintItems(item));
    }

    this.updateCount();
  };

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

  updateCount() {
    const count = this.$menuList.childElementCount;
    this.$menuCount.innerText = `총 ${count}개`;
  }

  async addItem(e) {
    e.preventDefault();
    const name = this.$inputField.value;
    if (name.trim() === "") {
      return;
    }

    const newItem = await postMenu(this.state, name);
    if (newItem.message) {
      alert(newItem.message);
      this.$inputField.value = "";
      return;
    }
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
    await updateMenuName(this.state, index, message);
  }

  async deleteItem(e) {
    const { parentElement } = e.target;
    if (confirm("삭제하시겠어요?")) {
      parentElement.remove();
    }
    this.updateCount();

    const { index } = parentElement.dataset;
    await deleteMenu(this.state, index);
  }

  async soldItem(e) {
    const span = e.target.parentElement.children[0];
    span.classList.toggle("sold-out");

    const { index } = e.target.parentElement.dataset;
    await updateMenuSold(this.state, index);
  }
}

export default App;
