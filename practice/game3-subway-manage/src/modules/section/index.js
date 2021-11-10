import { CLASS, ID, LOCAL_DB } from "../../constants/index.js";
import { getLocalStorage } from "../../utils/localStorage.js";
import { sectionButtonList } from "../../utils/template.js";
import SectionContents from "./SectionContents.js";

class SectionManager {
  constructor($target) {
    this.$target = $target;

    this.render();
  }

  render() {
    this.addContainer();
    this.dom();
    this.addButtons();
    this.addEvent();
  }

  addContainer() {
    this.$target.innerHTML = ` 
      <h3>구간을 수정할 노선을 선택해주세요.</h3>
      <div id=${ID.SECTION_BUTTON_CONTAINER}></div>
      <div id=${ID.SECTION_CONTENTS_CONTAINER}></div>
    `;
  }

  dom() {
    this.$buttonContainer = document.querySelector(
      `#${ID.SECTION_BUTTON_CONTAINER}`
    );
    this.$contentsContainer = document.querySelector(
      `#${ID.SECTION_CONTENTS_CONTAINER}`
    );
  }

  addButtons() {
    this.$buttonContainer.innerHTML = `
      ${sectionButtonList(getLocalStorage(LOCAL_DB.LINE))} 
    `;
  }

  addEvent() {
    this.$buttonContainer.addEventListener(
      "click",
      this.addContents.bind(this)
    );
  }

  addContents(e) {
    if (!e.target.classList.contains(`${CLASS.SECTION_LINE_MENU_BUTTON}`)) {
      return;
    }
    const { lineName } = e.target.dataset;
    new SectionContents(this.$contentsContainer, lineName);
  }
}

export default SectionManager;
