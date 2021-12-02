import Component from "./core/Component.js";

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
      <div id="item-insert"></div>
      <div id="item-container"></div>
      <div id="item-filter"></div>
    `;
  }

  selectDom() {
    this.$itemInsert = document.querySelector("#item-insert");
    this.$itemContainer = document.querySelector("#item-container");
    this.$itemFilter = document.querySelector("#item-filter");
  }
}

export default App;
