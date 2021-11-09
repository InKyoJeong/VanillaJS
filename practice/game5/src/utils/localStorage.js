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

// 초기 금액이 없을때
export const coinStorage = key => {
  let list = getLocalStorage(key);

  if (!list.length) {
    [500, 100, 50, 10].forEach(coin => {
      list.push({ name: coin, count: 0 });
    });
    saveLocalStorage(key, list);
  }

  return getLocalStorage(key);
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
