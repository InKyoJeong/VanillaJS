export const ID = {
  // 메인 메뉴
  MENU_BUTTON_CONTAINER: 'menu-button-container',
  RESULT_CONTAINER: 'result-container',
  PRODUCT_ADD_MENU: 'product-add-menu',
  VENDING_MACHINE_MANANGE_MENU: 'vending-machine-manage-menu',
  PRODUCT_PURCHASE_MENU: 'product-purchase-menu',
  // 상품추가
  PRODUCT_INPUT_CONTAINER: 'product-input-container',
  PRODUCT_LIST_CONTAINER: 'product-list-container',
  PRODUCT_NAME_INPUT: 'product-name-input',
  PRODUCT_PRICE_INPUT: 'product-price-input',
  PRODUCT_QUANTITY_INPUT: 'product-quantity-input',
  PRODUCT_ADD_BUTTON: 'product-add-button',
  // 잔돈 충전
  CHARGE_LIST_CONTAINER: 'charge-list-container',
  CHARGE_INPUT_CONTAINER: 'charge-input-container',
  VENDING_MACHINE_CHARGE_INPUT: 'vending-machine-charge-input',
  VENDING_MACHINE_CHARGE_BUTTON: 'vending-machine-charge-button',
  VENDING_MACHINE_CHARGE_AMOUNT: 'vending-machine-charge-button',
  VENDING_MACHINE_COINT_500_QUANTITY: 'vending-machine-coin-500-quantity',
  VENDING_MACHINE_COINT_100_QUANTITY: 'vending-machine-coin-100-quantity',
  VENDING_MACHINE_COINT_50_QUANTITY: 'vending-machine-coin-50-quantity',
  VENDING_MACHINE_COINT_10_QUANTITY: 'vending-machine-coin-10-quantity',
};

export const CLASS = {
  // 상품추가 메뉴
  PRODUCT_MANAGE_NAME: 'product-manage-name',
  PRODUCT_MANAGE_PRICE: 'product-manage-price',
  PRODUCT_MANAGE_QUANTITY: 'product-manage-quantity',
};

export const NUM = {
  MIN_QUANTITY: 1,
  MIN_PRICE: 100,
  MIN_PRICE_UNIT: 10,
};

export const MESSAGE = {
  INPUT_CANNOT_BLANK: '공백없이 입력해주세요.',
  PRICE_OR_UNIT_IS_LOW: `금액은 ${NUM.MIN_PRICE}원 이상이고, 최소 단위를 ${NUM.MIN_PRICE_UNIT}원으로 입력해주세요.`,
  QUANTITY_IS_LOW: `수량은 ${NUM.MIN_QUANTITY}개 이상으로 입력해주세요.`,
};

export const LOCAL_DB = {
  PRODUCT: 'PRODUCT',
  COIN: 'COIN',
};
