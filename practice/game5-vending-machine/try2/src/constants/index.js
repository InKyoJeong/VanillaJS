export const ID = {
  // menu
  MENU_BUTTON_CONTAINER: "menu-button-container",
  RESULT_CONTAINER: "result-container",
  PRODUCT_ADD_MENU: "product-add-menu",
  PRODUCT_PURCHASE_MENU: "product-purchase-menu",
  VENDING_MACHINE_MANAGE_MENU: "vending-machine-manage-menu",
  // product
  PRODUCT_INPUT_CONTAINER: "prodduct-input-container",
  PRODUCT_TABLE_CONTAINER: "prodduct-table-container",
  PRODUCT_NAME_INPUT: "product-name-input",
  PRODUCT_PRICE_INPUT: "product-price-input",
  PRODUCT_QUANTITY_INPUT: "product-quantity-input",
  PRODUCT_ADD_BUTTON: "product-add-button",
  // charge
  CHARGE_INPUT_CONTAINER: "charge-input-container",
  CHARGE_TOTAL_CONTAINER: "charge-total-container",
  CHARGE_TABLE_CONTAINER: "charge-table-container",
  VENDING_MACHINE_CHARGE_INPUT: "vending-machine-charge-input",
  VENDING_MACHINE_CHARGE_BUTTON: "vending-machine-charge-button",
  VENDING_MACHINE_CHARGE_AMOUNT: "vending-machine-charge-amount",
  // purchase
  PURCHASE_INPUT_CONTAINER: "purchase-input-container",
  PURCHASE_TOTAL_CONTAINER: "purchase-total-container",
  PURCHASE_TABLE_CONTAINER: "purchase-table-container",
  RETURN_COIN_TABLE_CONTAINER: "return-coin-table-container",
  CHARGE_INPUT: "charge-input",
  CHARGE_BUTTON: "charge-button",
  CHARGE_AMOUNT: "charge-amount",
  COIN_RETURN_BUTTON: "coin-return-button",
};

export const COIN_QUANTITY_ID = [
  "vending-machine-coin-500-quantity",
  "vending-machine-coin-100-quantity",
  "vending-machine-coin-50-quantity",
  "vending-machine-coin-10-quantity",
];

export const RETURN_COIN_QUANTITY_ID = [
  "coin-500-quantity",
  "coin-100-quantity",
  "coin-50-quantity",
  "coin-10-quantity",
];

export const CLASS = {
  // product
  PRODUCT_MANAGE_ITEM: "product-manage-item",
  PRODUCT_MANAGE_NAME: "product-manage-name",
  PRODUCT_MANAGE_PRICE: "product-manage-price",
  PRODUCT_MANAGE_QUANTITY: "product-manage-quantity",
  // purchase
  PRODUCT_PURCHASE_ITEM: "product-purchase-item",
  PURCHASE_BUTTON: "purchase-button",
  PRODUCT_PURCHASE_NAME: "product-purchase-name",
  PRODUCT_PURCHASE_PRICE: "product-purchase-price",
  PRODUCT_PURCHASE_QUANTITY: "product-purchase-quantity",
};

export const NUM = {
  PRICE_MIN_UNIT: 10,
  PRICE_MIN_COUNT: 100,
  QUANTITY_MIN_COUNT: 1,
};

export const ERROR = {
  PRODUCT_IS_DUPLICATED: "중복된 상품 이름이 존재합니다.",
  PRODUCT_NAME_IS_BLANK: "상품 이름이 빈값입니다.",
  PRICE_IS_NOT_CORRECT: `금액은 ${NUM.PRICE_MIN_COUNT}원 이상이고, ${NUM.PRICE_MIN_UNIT}원 단위로 입력해주세요.`,
  QUANTITY_IS_NOT_CORRECT: `상품 개수를 ${NUM.QUANTITY_MIN_COUNT}이상의 정수로 입력해주세요.`,
  CHARGE_AMOUNT_IS_NOT_CORRECT: `투입 금액은 ${NUM.PRICE_MIN_UNIT}원 단위로 입력해주세요.`,
  CANNOT_PURCHASE: "금액이 부족하여 구매할 수 없습니다.",
  CANNOT_RETURN_COIN: "더이상 반환 가능한 동전이 없습니다.",
};

export const LOCAL_DB = {
  PRODUCT: "PRODUCT",
  COIN: "COIN",
  PURCHASE: "PURCHASE",
};

export const COIN_LIST = [500, 100, 50, 10];
