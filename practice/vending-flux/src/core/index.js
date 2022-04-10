import { createStore } from "../store/store.js";
import reducer from "./reducer.js";

const store = createStore(reducer);

export default store;
