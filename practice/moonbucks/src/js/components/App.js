import {
  getMenu,
  updateMenuSold,
  updateMenuName,
  deleteMenu,
} from "../api/index.js";
import { makeItem } from "../utils/makeItem.js";
import { $ } from "../utils/selector.js";
import MenuCategory from "./MenuCategory.js";
import MenuInput from "./MenuInput.js";

class App {
  constructor() {
    this.$inputField = $(".input-field");
    this.$menuList = $("#espresso-menu-list");
    this.$menuCount = $(".menu-count");
    this.category = "espresso"; // 초기 카테고리
    this.loadItems();
    this.addEvent();

    new MenuCategory({
      loadItems: this.loadItems,
      setCategory: this.setCategory,
      $inputField: this.$inputField,
    });

    new MenuInput({
      paintItems: this.paintItems,
      $inputField: this.$inputField,
    });
  }

  addEvent() {
    this.$menuList.addEventListener("click", this.clickButton.bind(this));
  }

  clickButton(e) {
    if (e.target.classList.contains("menu-sold-out-button")) {
      this.soldItem(e);
    } else if (e.target.classList.contains("menu-edit-button")) {
      this.editItem(e);
    } else if (e.target.classList.contains("menu-remove-button")) {
      this.deleteItem(e);
    } else return;
  }

  setCategory = (category) => {
    this.category = category;
  };

  updateCount() {
    const count = this.$menuList.childElementCount;
    this.$menuCount.innerText = `총 ${count}개`;
  }

  loadItems = async () => {
    this.$menuList.innerHTML = "";

    const menuList = await getMenu(this.category);
    if (menuList !== null) {
      menuList.forEach((item) => this.paintItems(item));
    }

    this.updateCount();
  };

  paintItems = (item) => {
    const itemBlock = makeItem(item);
    this.$menuList.append(itemBlock);
    this.updateCount();
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
