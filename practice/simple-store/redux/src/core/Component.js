import { observable, observe } from "./observer.js";

class Component {
  constructor($target, props) {
    this.$target = $target;
    this.props = props;
    this.setUp();
  }

  setUp() {
    // this.state = observable(this.initState());
    observe(() => {
      this.render();
      this.setEvent();
      this.mounted();
    });
  }

  //   initState() {
  //     return {};
  //   }

  template() {
    return "";
  }

  render() {
    this.$target.innerHTML = this.template();
  }

  setEvent() {}

  mounted() {}
}

export default Component;
