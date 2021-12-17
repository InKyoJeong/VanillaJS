import { ERROR, NUM } from "../constants/index.js";
import { displayAlert } from "./displayAlert.js";
import { stations } from "../data/index.js";

const checkExistStation = (start, end) => {
  const stationName = stations.map((v) => v.name);

  return stationName.includes(start) && stationName.includes(end);
};

export const isValidInput = (start, end, searchType, $input1, $input2) => {
  let isValid = true;
  if (start === end) {
    displayAlert(ERROR.CANNOT_INPUT_SAME_STATION, $input1, $input2);
    isValid = false;
  }
  if (
    start.length < NUM.INPUT_MIN_LENGTH ||
    end.length < NUM.INPUT_MIN_LENGTH
  ) {
    displayAlert(ERROR.INPUT_LENGTH_IS_SHORT, $input1, $input2);
    isValid = false;
  }
  if (!checkExistStation(start, end)) {
    displayAlert(ERROR.NOT_EXIST_STATION, $input1, $input2);
    isValid = false;
  }

  return isValid;
};
