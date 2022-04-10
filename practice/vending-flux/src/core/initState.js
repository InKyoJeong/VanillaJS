import { getLocalStorage } from "../utils/localStorage.js";

export const initState = {
  products: getLocalStorage("products") || [],
};
