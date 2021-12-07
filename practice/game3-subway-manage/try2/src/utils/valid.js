import { LOCAL_DB, NUM, ERROR } from "../constants/index.js";
import { getLocalStorage } from "./localStorage.js";

const isDuplicatedStation = (value) => {
  const stationDB = getLocalStorage(LOCAL_DB.STATION);

  return stationDB.map(({ name }) => name).includes(value);
};

export const isValidStationName = (value) => {
  if (value.length < NUM.MIN_STATION_LENGTH) {
    alert(ERROR.STATION_NAME_IS_SHORT);
    return false;
  }

  if (isDuplicatedStation(value)) {
    alert(ERROR.STATION_NAME_IS_DUPLICATED);
    return false;
  }

  return true;
};
