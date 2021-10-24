export const addLocalStorage = (key, value) => {
  let list = getLocalStorage(key);
  list.push(value);

  try {
    localStorage.setItem(key, JSON.stringify(list));
  } catch (err) {
    console.error(err);
  }
};

export const getLocalStorage = (key) => {
  let list;

  try {
    list = JSON.parse(localStorage.getItem(key)) || [];
  } catch (err) {
    list = [];
    console.error(err);
  }

  return list;
};

export const removeLocalStorage = (key, name) => {
  let list = getLocalStorage(key);
  list = list.filter((v) => v.name !== name);

  try {
    localStorage.setItem(key, JSON.stringify(list));
  } catch (err) {
    console.error(err);
  }
};
