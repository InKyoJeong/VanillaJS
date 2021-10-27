import { LOCAL_DB } from "../constants/index.js";

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
export const updateStationStorage = (key, value) => {
  let list = getLocalStorage(key);

  if (typeof value === "string") {
    list = removeLineList(list, value);
  }
  if (typeof value === "object") {
    list = addLineList(list, value);
  }

  saveLocalStorage(key, list);
};

const removeLineList = (list, value) => {
  list.forEach((v) => {
    v.lineList = v.lineList.filter((line) => line !== value);
  });

  return list;
};

const addLineList = (list, value) => {
  const lineName = value.name;
  const [start, end] = value.stationList;

  list.forEach((v) => {
    if (v.name === start || v.name === end) {
      v.lineList.push(lineName);
    }
  });

  return list;
};

export const updateSection = (lineName, stationName, index) => {
  updateSectionStation(lineName, stationName);
  updateSectionLine(lineName, stationName, index);
};

const updateSectionStation = (lineName, stationName) => {
  let station = getLocalStorage(LOCAL_DB.STATION);
  station.find((v) => v.name === stationName).lineList.push(lineName);

  saveLocalStorage(LOCAL_DB.STATION, station);
};

const updateSectionLine = (lineName, stationName, index) => {
  let line = getLocalStorage(LOCAL_DB.LINE);
  line
    .find((v) => v.name === lineName)
    .stationList.splice(index, 0, stationName);

  saveLocalStorage(LOCAL_DB.LINE, line);
};
