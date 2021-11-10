export const ID = {
  // Main Button
  STATION_MANAGER_BUTTON: "station-manager-button",
  LINE_MANAGER_BUTTON: "line-manager-button",
  SECTION_MANAGER_BUTTON: "section-manager-button",
  MAP_PRINT_MANAGER_BUTTON: "map-print-manager-button",
  // App
  MANAGER_BUTTON_CONTAINER: "manager-button-container",
  RESULT_CONTAINER: "result-container",
  // Station
  STATION_INPUT_CONTAINER: "station-input-container",
  STATION_TABLE_CONTAINER: "station-table-contianer",
  STATION_NAME_INPUT: "station-name-input",
  STATION_ADD_BUTTON: "station-add-button",
  // Line
  LINE_INPUT_CONTAINER: "line-input-container",
  LINE_TABLE_CONTAINER: "line-table-container",
  LINE_NAME_INPUT: "line-name-input",
  LINE_START_STATION_SELECTOR: "line-start-station-selector",
  LINE_END_STATION_SELECTOR: "line-end-station-selector",
  LINE_ADD_BUTTON: "line-add-button",
  // Section
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
  SECTION_LINE_MENU_BUTTON: "section-line-menu-button",
  LINE_DELETE_BUTTON: "line-delete-button",
  SECTON_DELETE_BUTTON: "section-delete-button",
  MAP: "map",
};

export const NUM = {
  STATION_INPUT_MIN_LENGTH: 2,
  STATION_LIST_MIN_LENGTH: 2,
};

export const LOCAL_DB = {
  STATION: "STATION",
  LINE: "LINE",
};

export const ERROR = {
  STATION_LENGTH_IS_SHORT: "지하철 역은 2글자 이상이어야 합니다.",
  STATION_ALREADY_ENROLLED: "이미 등록된 지하철 역 입니다.",
  LINE_ALREADY_ENROLLED: "이미 등록된 노선 입니다.",
  SELECTED_SAME_SELECTOR: "상행 종점역과 하행 종점역을 다르게 입력해주세요.",
  CANNOT_DELETE_STATION: "노선에 등록된 역을 제거할 수 없습니다.",
  LINE_LENGTH_IS_SHORT: "노선을 1글자 이상 입력해주세요.",
  ONLY_AVAILABLE_BETWEEN_STATION:
    "역과 역 사이에만 새로운 역을 추가할 수 있어요.",
};
