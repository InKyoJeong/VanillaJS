import { postMenu } from "../api/index.js";
import { $ } from "../utils/selector.js";

class MenuInput {
  constructor({ paintItems, $inputField }) {
    this.paintItems = paintItems;
    this.$inputField = $inputField;

    $(".input-submit").addEventListener("click", this.addItem);
    $("#espresso-menu-form").addEventListener("submit", this.addItem);
  }

  addItem = async (e) => {
    e.preventDefault();
    const menuName = this.$inputField.value;
    const categoryName = this.$inputField.id.split("-")[0];
    if (menuName.trim() === "") {
      return;
    }

    const newItem = await postMenu(categoryName, menuName);
    if (newItem.message) {
      alert(newItem.message);
      this.$inputField.value = "";
      return;
    }

    this.$inputField.value = "";
    this.paintItems(newItem);
  };
}

export default MenuInput;
