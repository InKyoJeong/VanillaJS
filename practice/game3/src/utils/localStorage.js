// Common
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

  saveLocalStorage(key, list);
};

// Station
// 노선이름만 들어올때는 remove, line 객체일땐 add
export const updateStationStorage = (key, newLine) => {
  let list = getLocalStorage(key);

  if (typeof newLine === "string") {
    list = removeLineList(list, newLine);
  }
  if (typeof newLine === "object") {
    list = addLineList(list, newLine);
  }

  saveLocalStorage(key, list);
};

const removeLineList = (list, newLine) => {
  list.forEach((v) => {
    v.lineList = v.lineList.filter((line) => line !== newLine);
  });

  return list;
};

const addLineList = (list, newLine) => {
  const lineName = newLine.name;
  const [start, end] = newLine.stationList;

  list.forEach((v) => {
    if (v.name === start || v.name === end) {
      v.lineList.push(lineName);
    }
  });

  return list;
};
