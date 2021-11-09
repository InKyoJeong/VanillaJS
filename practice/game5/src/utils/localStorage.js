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

export const coinStorage = key => {
  let list = getLocalStorage(key);

  // 초기 저장된 금액이 없을때
  if (!list.length) {
    [500, 100, 50, 10].forEach(coin => {
      list.push({ name: coin, count: 0 });
    });
    saveLocalStorage(key, list);
  }

  return getLocalStorage(key);
};

export const getPurchaseStorage = key => {
  let amount;

  try {
    amount = JSON.parse(localStorage.getItem(key)) || 0;
  } catch (err) {
    amount = 0;
    console.error(err);
  }

  return amount;
};

export const addPurchaseStorage = (key, value) => {
  let list = getLocalStorage(key);
  list = value;

  saveLocalStorage(key, list);
};

export const decresePurchaseStorage = (key, value) => {
  let list = getLocalStorage(key);
  list -= value;

  saveLocalStorage(key, list);
};

export const addLocalStorage = (key, value) => {
  let list = getLocalStorage(key);
  let index = list.findIndex(v => v.name === value.name);

  // 이미 있는 제품일때
  if (key === LOCAL_DB.PRODUCT && index >= 0) {
    list.splice(index, 1, value);
    saveLocalStorage(key, list);
    return;
  }

  list.push(value);
  saveLocalStorage(key, list);
};

export const addCoinStorage = (key, arr) => {
  let list = getLocalStorage(key);
  list.forEach((v, i) => (v.count += arr[i]));

  saveLocalStorage(key, list);
};

export const decreaseCoinStorage = (key, arr) => {
  let list = getLocalStorage(key);

  list.forEach((v, i) => {
    return v.count <= arr[i] ? (v.count = 0) : (v.count -= arr[i]);
  });

  saveLocalStorage(key, list);
};

export const decreaseProductStorage = (key, name) => {
  let list = getLocalStorage(key);
  const index = list.findIndex(v => v.name === name);

  list[index].quantity--;
  if (list[index].quantity === 0) {
    list.splice(index, 1);
  }

  saveLocalStorage(key, list);
};
