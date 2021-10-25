import { clearInput } from "./clearInput.js";

export const displayAlert = (message, $input) => {
  alert(message);
  if (!$input) {
    return;
  }
  clearInput($input);
};
