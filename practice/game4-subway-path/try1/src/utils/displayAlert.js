import { clearInput } from "./clearInput.js";

export const displayAlert = (message, $input1, $input2) => {
  alert(message);

  clearInput($input1, $input2);
};
