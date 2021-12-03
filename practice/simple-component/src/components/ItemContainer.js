import Component from "../core/Component.js";

class ItemContainer extends Component {
  template() {
    const { filteredItems } = this.$props;
    console.log(filteredItems);
    return `
      <ul>
        ${filteredItems
          .map(
            ({ contents, active, id }) => `
          <li data-id="${id}">
            ${contents}
            <button class="toggleBtn" style="color: ${
              active ? "#09F" : "#F09"
            }">
              ${active ? "활성" : "비활성"}
            </button>
            <button class="deleteBtn">삭제</button>
          </li>
        `
          )
          .join("")}
      </ul>
    `;
  }
}

export default ItemContainer;
