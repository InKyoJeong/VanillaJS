export const ID = {
  SUBWAY_INPUT_CONTAINER: "subway-input-container",
  SUBWAY_TABLE_CONTAINER: "subway-table-container",
  SEARCH_RADIO_CONTAINER: "search-radio-container",
  DEPARTURE_STATION_NAME_INPUT: "departure-station-name-input",
  ARRIVAL_STATION_NAME_INPUT: "arrival-station-name-input",
  SEARCH_BUTTON: "search-button",
};

export const NAME = {
  SEARCH_TYPE: "search-type",
};

export const NUM = {
  INPUT_MIN_LENGTH: 2,
};

export const ERROR = {
  CANNOT_INPUT_SAME_STATION: "출발역과 도착역이 같을 수 없습니다.",
  INPUT_LENGTH_IS_SHORT: `역 이름을 ${NUM.INPUT_MIN_LENGTH}글자 이상으로 입력해주세요.`,
  NOT_EXIST_STATION: `존재하지 않는 역을 출발역 또는 도착역으로 입력할 수 없습니다.`,
};
