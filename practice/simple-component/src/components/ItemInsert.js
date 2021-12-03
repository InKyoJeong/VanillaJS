import { CLASS } from "../constants/index.js";
import Component from "../core/Component.js";

class ItemInsert extends Component {
  template() {
    return `<input type="text" placeholder="내용 입력" class=${CLASS.ITEM_INPUT} />`;
  }

  setEvent() {
    const { addItem } = this.$props;
    this.addEvent("keyup", `.${CLASS.ITEM_INPUT}`, ({ key, target }) => {
      if (key !== "Enter") {
        return;
      }
      addItem(target.value);
      console.log(target.value);
    });
  }
}

export default ItemInsert;
