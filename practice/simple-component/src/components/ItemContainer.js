import Component from "../core/Component.js";

class ItemContainer extends Component {
  template() {
    const { filteredItems } = this.$props;

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

  setEvent() {
    const { deleteItem, toggleItem } = this.$props;

    this.addEvent("click", ".deleteBtn", ({ target }) => {
      deleteItem(Number(target.closest("[data-id]").dataset.id));
    });

    this.addEvent("click", ".toggleBtn", ({ target }) => {
      toggleItem(Number(target.closest("[data-id]").dataset.id));
    });
  }
}

export default ItemContainer;
