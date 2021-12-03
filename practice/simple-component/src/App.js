import Component from "./core/Component.js";
import ItemContainer from "./components/ItemContainer.js";
import ItemFilter from "./components/ItemFilter.js";
import ItemInsert from "./components/ItemInsert.js";
import { ID } from "./constants/index.js";

class App extends Component {
  setup() {
    this.$state = {
      isFilter: 0,
      items: [
        {
          id: 1,
          contents: "item1",
          active: false,
        },
        {
          id: 2,
          contents: "item2",
          active: true,
        },
      ],
    };
  }

  template() {
    return `
      <div id=${ID.ITEM_INSERT}></div>
      <div id=${ID.ITEM_CONTAINER}></div>
      <div id=${ID.ITEM_FILTER}></div>
    `;
  }

  selectDom() {
    this.$itemInsert = document.querySelector(`#${ID.ITEM_INSERT}`);
    this.$itemContainer = document.querySelector(`#${ID.ITEM_CONTAINER}`);
    this.$itemFilter = document.querySelector(`#${ID.ITEM_FILTER}`);
  }

  mounted() {
    new ItemInsert(this.$itemInsert, {
      addItem: this.addItem.bind(this),
    });
    new ItemContainer(this.$itemContainer, {
      filteredItems: this.filteredItems,
    });
    new ItemFilter(this.$itemFilter);
  }

  get filteredItems() {
    const { isFilter, items } = this.$state;
    return items.filter(
      ({ active }) =>
        (isFilter === 1 && active) ||
        (isFilter === 2 && !active) ||
        isFilter === 0
    );
  }

  addItem(contents) {
    const id = Math.max(0, ...this.$state.items.map((v) => v.id)) + 1;
    this.setState({
      items: [...this.$state.items, { id, contents, active: false }],
    });
  }
}

export default App;
