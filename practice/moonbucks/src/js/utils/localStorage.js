export const saveLocalStorage = (key, list) => {
  console.log("저장됨");
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
