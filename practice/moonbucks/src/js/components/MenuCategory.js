import { CATEGORY } from "../constants/index.js";
import { $ } from "../utils/selector.js";

class MenuCategory {
  constructor({ loadItems, setCategory, $inputField }) {
    this.loadItems = loadItems;
    this.setCategory = setCategory;
    this.$inputField = $inputField;

    $("nav").addEventListener("click", this.clickCategory.bind(this));
  }

  clickCategory(e) {
    if (!e.target.classList.contains("cafe-category-name")) {
      return;
    }

    const { categoryName } = e.target.dataset;
    this.changeCategory(categoryName);
  }

  changeCategory(categoryName) {
    this.$inputField.setAttribute("id", `${categoryName}-menu-name`);
    this.$inputField.setAttribute(
      "placeholder",
      `${CATEGORY[categoryName].slice(2)} 메뉴 이름`
    );
    $("h2").innerText = `${CATEGORY[categoryName]} 메뉴 관리`;

    this.setCategory(categoryName);
    this.loadItems();
  }
}

export default MenuCategory;
