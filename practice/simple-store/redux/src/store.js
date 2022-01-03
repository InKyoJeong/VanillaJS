import { createStore } from "./core/Store.js";

const initialState = {
  a: 1,
  b: 2,
};

export const SET_A = "SET_A";
export const SET_B = "SET_B";

// reducer 넘기기
export const store = createStore((state = initialState, action = {}) => {
  switch (action.type) {
    case "SET_A":
      return { ...state, a: action.payload };
    case "SET_B":
      return { ...state, b: action.payload };
    default:
      return state;
  }
});

export const setA = (payload) => ({ type: SET_A, payload });
export const setB = (payload) => ({ type: SET_B, payload });
