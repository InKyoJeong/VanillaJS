import { postMenu } from "./api/index.js";
import { $ } from "./utils/selector.js";

class MenuInput {
  constructor({ paintItems, $inputField }) {
    this.render();
    this.paintItems = paintItems;
    this.$inputField = $inputField;
  }

  render() {
    this.dom();
    this.addEvents();
  }

  dom() {
    this.$menuForm = $("#espresso-menu-form");
    this.$submitButton = $(".input-submit");
  }

  addEvents() {
    this.$submitButton.addEventListener("click", this.addItem);
    this.$menuForm.addEventListener("submit", this.addItem);
  }

  addItem = async (e) => {
    e.preventDefault();
    const menuName = this.$inputField.value;
    if (menuName.trim() === "") {
      return;
    }

    const categoryName = this.$inputField.id.split("-")[0];
    const newItem = await postMenu(categoryName, menuName);
    if (newItem.message) {
      alert(newItem.message);
      this.$inputField.value = "";
      return;
    }
    this.paintItems(newItem);

    this.$inputField.value = "";
  };
}

export default MenuInput;
