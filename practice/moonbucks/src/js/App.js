import {
  getMenu,
  postMenu,
  updateMenuSold,
  updateMenuName,
  deleteMenu,
} from "./api/index.js";
import Category from "./Category.js";
import { makeItem } from "./utils/makeItem.js";
import { $ } from "./utils/selector.js";

class App {
  constructor() {
    this.dom();
    this.addEvents();
    this.category = "espresso"; // 초기 카테고리
    this.loadItems();

    new Category({
      loadItems: this.loadItems,
      setCategory: this.setCategory,
      $inputField: this.$inputField,
    });
  }

  dom() {
    this.$menuForm = $("#espresso-menu-form");
    this.$inputField = $(".input-field");
    this.$submitButton = $(".input-submit");
    this.$menuList = $("#espresso-menu-list");
    this.$menuCount = $(".menu-count");
  }

  addEvents() {
    this.$submitButton.addEventListener("click", this.addItem);
    this.$menuForm.addEventListener("submit", this.addItem);
  }

  setCategory = (category) => {
    this.category = category;
  };

  loadItems = async () => {
    this.$menuList.innerHTML = "";

    const menuList = await getMenu(this.category);
    if (menuList !== null) {
      menuList.forEach((item) => this.paintItems(item));
    }

    this.updateCount();
  };

  paintItems(item) {
    const itemBlock = makeItem(
      item,
      this.editItem,
      this.deleteItem,
      this.soldItem
    );
    this.$menuList.append(itemBlock);
    this.updateCount();
  }

  updateCount() {
    const count = this.$menuList.childElementCount;
    this.$menuCount.innerText = `총 ${count}개`;
  }

  addItem = async (e) => {
    e.preventDefault();
    const name = this.$inputField.value;
    if (name.trim() === "") {
      return;
    }

    const newItem = await postMenu(this.category, name);
    if (newItem.message) {
      alert(newItem.message);
      this.$inputField.value = "";
      return;
    }
    this.paintItems(newItem);

    this.$inputField.value = "";
  };

  editItem = async (e) => {
    const { parentElement } = e.target;
    const message = prompt("수정하시겠어요?");
    if (message === null) {
      return;
    }
    parentElement.children[0].innerText = message;

    const { index } = parentElement.dataset;
    await updateMenuName(this.category, index, message);
  };

  deleteItem = async (e) => {
    const { parentElement } = e.target;
    if (confirm("삭제하시겠어요?")) {
      parentElement.remove();
    }
    this.updateCount();

    const { index } = parentElement.dataset;
    await deleteMenu(this.category, index);
  };

  soldItem = async (e) => {
    const span = e.target.parentElement.children[0];
    span.classList.toggle("sold-out");

    const { index } = e.target.parentElement.dataset;
    await updateMenuSold(this.category, index);
  };
}

export default App;
