export const ID = {
  // app
  MANAGER_BUTTON_CONTAINER: "manager-button-container",
  RESULT_CONTAINER: "result-container",
  // menu
  STATION_MANAGER_BUTTON: "station-manager-button",
  LINE_MANAGER_BUTTON: "line-manager-button",
  SECTION_MANAGER_BUTTON: "section-manager-button",
  MAP_PRINT_MANAGER_BUTTON: "map-print-manager-button",
  // station
  STATION_INPUT_CONTAINER: "station-input-container",
  STATION_TABLE_CONTAINER: "station-table-container",
  STATION_NAME_INPUT: "station-name-input",
  STATION_ADD_BUTTON: "station-add-button",
  // line
  LINE_INPUT_CONTAINER: "line-input-container",
  LINE_TABLE_CONTAINER: "line-table-container",
  LINE_NAME_INPUT: "line-name-input",
  LINE_START_STATION_SELECTOR: "line-start-station-selector",
  LINE_END_STATION_SELECTOR: "line-end-station-selector",
  LINE_ADD_BUTTON: "line-add-button",
  // section
  SECTION_BUTTON_CONTAINER: "section-button-container",
  SECTION_CONTENTS_CONTAINER: "section-contents-container",
  SECTION_INPUT_CONTAINER: "section-input-container",
  SECTION_TABLE_CONTAINER: "section-table-container",
  SECTION_STATION_SELECTOR: "section-station-selector",
  SECTION_ORDER_INPUT: "section-order-input",
  SECTON_ADD_BUTTON: "section-add-button",
};

export const CLASS = {
  STATION_DELETE_BUTTON: "station-delete-button",
  LINE_DELETE_BUTTON: "line-delete-button",
  SECTION_DELETE_BUTTON: "section-delete-button",
};

export const NUM = {
  MIN_STATION_LENGTH: 2,
};

export const ERROR = {
  STATION_NAME_IS_DUPLICATED: "중복된 역 이름이 존재합니다.",
  STATION_NAME_IS_SHORT: `역 이름은 ${NUM.MIN_STATION_LENGTH}자 이상으로 입력해주세요.`,
};

export const LOCAL_DB = {
  STATION: "STATION",
  LINE: "LINE",
};
