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
      <div data-component="item-insert"></div>
      <div data-component="items"></div>
      <div data-component="item-filter"></div>
    `;
  }
}

export default App;
