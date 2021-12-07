import { NUM } from "../constants/index.js";

export const isValidStationName = (value) => {
  if (value.length < NUM.MIN_STATION_LENGTH) {
    return false;
  }

  return true;
};
