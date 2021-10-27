import { ERROR, LOCAL_DB, NUM } from "../constants/index.js";
import { getLocalStorage } from "./localStorage.js";
import { displayAlert } from "./displayAlert.js";

const isDuplicatedStation = (value) => {
  let stationDB = getLocalStorage(LOCAL_DB.STATION);

  return stationDB.map((v) => v.name).includes(value);
};

const isDuplicatedLine = (value) => {
  let lineDB = getLocalStorage(LOCAL_DB.LINE);

  return lineDB.map((v) => v.name).includes(value);
};

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

export const isValidLineInput = (value, start, end, $input) => {
  let isValid = true;

  if (value.length === 0) {
    displayAlert(ERROR.LINE_LENGTH_IS_SHORT, $input);
    isValid = false;
  }
  if (isDuplicatedLine(value)) {
    displayAlert(ERROR.LINE_ALREADY_ENROLLED, $input);
    isValid = false;
  }
  if (start === end) {
    displayAlert(ERROR.SELECTED_SAME_SELECTOR, $input);
    isValid = false;
  }

  return isValid;
};

export const isValidStationDelete = (name) => {
  let isValid = true;
  let stationDB = getLocalStorage(LOCAL_DB.STATION);
  let idx = stationDB.findIndex((v) => v.name === name);

  if (stationDB[idx].lineList.length !== 0) {
    displayAlert(ERROR.CANNOT_DELETE_STATION);
    isValid = false;
  }

  return isValid;
};

const findLastStationIndex = (lineName) => {
  let lineDB = getLocalStorage(LOCAL_DB.LINE);
  return lineDB.find((v) => v.name === lineName).stationList.length - 1;
};

const findEnrolledStation = (lineName, stationName) => {
  let lineDB = getLocalStorage(LOCAL_DB.LINE);
  return lineDB
    .find((v) => v.name === lineName)
    .stationList.includes(stationName);
};

export const isValidSectionInput = (index, stationName, lineName, $input) => {
  let isValid = true;

  if (index <= 0 || findLastStationIndex(lineName) < index) {
    displayAlert(ERROR.ONLY_AVAILABLE_BETWEEN_STATION, $input);
    isValid = false;
  }
  if (findEnrolledStation(lineName, stationName)) {
    displayAlert(ERROR.STATION_ALREADY_ENROLLED, $input);
    isValid = false;
  }

  return isValid;
};
