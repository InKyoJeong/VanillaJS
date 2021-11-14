import { CATEGORY } from "./constants/index.js";

class MenuCategory {
  constructor({ loadItems, setState, $inputField }) {
    this.render();
    this.setState = setState;
    this.loadItems = loadItems;
    this.$inputField = $inputField;
  }
  render() {
    this.dom();
    this.addEvent();
  }

  dom() {
    this.$nav = document.querySelector("nav");
    this.$h2 = document.querySelector("h2");
  }

  addEvent() {
    this.$nav.addEventListener("click", this.clickCategory.bind(this));
  }

  clickCategory(e) {
    if (!e.target.classList.contains("cafe-category-name")) {
      return;
    }

    const { categoryName } = e.target.dataset;
    this.changeCategory(categoryName);
  }

  changeCategory(categoryName) {
    // change Input
    this.$inputField.setAttribute(
      "placeholder",
      `${CATEGORY[categoryName].slice(2)} 메뉴 이름`
    );
    this.$inputField.setAttribute("id", `${categoryName}-menu-name`);

    this.$h2.innerText = `${CATEGORY[categoryName]} 메뉴 관리`;
    this.setState(categoryName);
    this.loadItems();
  }
}

export default MenuCategory;
