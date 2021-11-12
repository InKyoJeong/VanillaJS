export const saveLocalStorage = (key, list) => {
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

export const editLocalStorage = (key, id, message) => {
  let list = getLocalStorage(key);
  const index = list.findIndex((item) => item.id === Number(id));
  list[index].text = message;

  saveLocalStorage(key, list);
};

export const deleteLocalStorage = (key, id) => {
  let list = getLocalStorage(key);
  list = list.filter((item) => item.id !== Number(id));

  saveLocalStorage(key, list);
};
