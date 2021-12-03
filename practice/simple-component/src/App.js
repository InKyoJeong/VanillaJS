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
    new ItemInsert(this.$itemInsert);
    new ItemContainer(this.$itemContainer);
    new ItemFilter(this.$itemFilter);
  }
}

export default App;
