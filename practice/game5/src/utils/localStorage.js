const saveLocalStorage = (key, list) => {
  try {
    localStorage.setItem(key, JSON.stringify(list));
  } catch (err) {
    console.error(err);
  }
};

export const addLocalStorage = (key, value) => {
  let list = getLocalStorage(key);
  list.push(value);

  saveLocalStorage(key, list);
};

export const getLocalStorage = key => {
  let list;

  try {
    list = JSON.parse(localStorage.getItem(key)) || [];
  } catch (error) {
    list = [];
    console.error(error);
  }
  return list;
};
