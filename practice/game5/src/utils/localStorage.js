import { LOCAL_DB } from '../constants/index.js';

const saveLocalStorage = (key, list) => {
  try {
    localStorage.setItem(key, JSON.stringify(list));
  } catch (err) {
    console.error(err);
  }
};

export const getLocalStorage = key => {
  let list;

  try {
    list = JSON.parse(localStorage.getItem(key)) || [];
  } catch (err) {
    list = [];
    console.error(err);
  }

  return list;
};

export const addLocalStorage = (key, value) => {
  let list = getLocalStorage(key);
  let index = list.findIndex(v => v.name === value.name);

  if (key === LOCAL_DB.PRODUCT && index >= 0) {
    list.splice(index, 1, value);
    saveLocalStorage(key, list);
    return;
  }

  list.push(value);
  saveLocalStorage(key, list);
};
