import { LOCAL_DB, NUM } from "../constants/index.js";
import { getLocalStorage } from "./localStorage.js";

const isDuplicatedStation = (value) => {
  const stationDB = getLocalStorage(LOCAL_DB.STATION);

  return stationDB.map(({ name }) => name).includes(value);
};

export const isValidStationName = (value) => {
  if (value.length < NUM.MIN_STATION_LENGTH) {
    return false;
  }

  if (isDuplicatedStation(value)) {
    return false;
  }

  return true;
};
