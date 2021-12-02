class Component {
  constructor($target, $props) {
    this.$target = $target;
    this.$props = $props;
    this.setup();
    this.setEvent();
    this.render();
  }

  setup() {
    //
  }
  setEvent() {
    //
  }
  selectDom() {
    //
  }
  mounted() {
    //
  }
  template() {
    return "";
  }

  render() {
    this.$target.innerHTML = this.template();
    this.selectDom();
    this.mounted();
  }

  setState(newState) {
    this.$state = { ...this.$state, ...newState };
    this.render;
  }
}

export default Component;
