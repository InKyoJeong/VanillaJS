import { ADD_PRODUCT } from "./actions.js";
import { initState } from "./initState.js";

const reducer = (state = initState, action = {}) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload.product],
      };
    default:
      return state;
  }
};

export default reducer;
