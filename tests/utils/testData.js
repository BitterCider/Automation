//URL Assertions:
export const swagLabsURL = "https://www.saucedemo.com/";
export const inventoryURL = "https://www.saucedemo.com/inventory.html";
export const cartURL = "https://www.saucedemo.com/cart.html";
export const checkOut1URL = "https://www.saucedemo.com/checkout-step-one.html";
export const checkOut2URL = "https://www.saucedemo.com/checkout-step-two.html";
export const finishURL = "https://www.saucedemo.com/checkout-complete.html";

//Login parameters:
export const deliveryInfo = [
  { firstName: "tal", lastName: "baruchi", postalCode: "2220325" },
];
export const password = "secret_sauce";

//Positive tests:
export const usernameList = [
  "standard_user",
  "problem_user",
  "performance_glitch_user",
  "error_user",
  "visual_user",
];

// Negative tests:
export const incorrect = "wrong_sauce";
export const userObjects = [
  { userName: "locked_out_user", password: password },
  { userName: "standard_user", password: incorrect },
  { userName: "incorrectUser", password: password },
  { userName: "incorrectUser", password: incorrect },
  { userName: "", password: password },
  { userName: "problem_user", password: "" },
  { userName: "", password: "" },
];
