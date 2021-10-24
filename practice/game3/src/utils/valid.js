import { ERROR, LOCAL_DB, NUM } from "../constants/index.js";
import { getLocalStorage } from "./localStorage.js";
import { displayAlert } from "./displayAlert.js";

export const isValidStationInput = (value, $input) => {
  let isValid = true;

  if (value.length < NUM.STATION_MIN_LENGTH) {
    displayAlert(ERROR.STATION_LENGTH_IS_SHORT, $input);
    isValid = false;
  }

  if (isDuplicatedStation(value)) {
    displayAlert(ERROR.STATION_ALREADY_ENROLLED, $input);
    isValid = false;
  }

  return isValid;
};

const isDuplicatedStation = (value) => {
  let stationDB = getLocalStorage(LOCAL_DB.STATION);

  return stationDB.map((v) => v.name).includes(value);
};
