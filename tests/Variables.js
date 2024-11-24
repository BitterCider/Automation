//URL Assertions:
export const swagLabsURL = "https://www.saucedemo.com/";
export const inventoryURL = "https://www.saucedemo.com/inventory.html";
export const checkOut1URL = "https://www.saucedemo.com/checkout-step-one.html";
export const checkOut2URL = "https://www.saucedemo.com/checkout-step-two.html";
export const finishURL = "https://www.saucedemo.com/checkout-complete.html";

//Text Assertions
export const checkoutComplete = "Checkout: Complete!";
export const orderDispatch =
  "Your order has been dispatched, and will arrive just as fast as the pony can get there!";
export const thankYouText = "Thank you for your order!";

//HTML elements:
export const errorElement = ".error-message-container";
export const itemTitleLink = [
  { Link: '[data-test="item-4-title-link"]', Title: "Sauce Labs Backpack" },
  {
    Link: '[data-test="item-5-title-link"]',
    Title: "Sauce Labs Fleece Jacket",
  },
];
export const cartBadge = '[data-test="shopping-cart-badge"]';
export const itemsToCart = [
  "#add-to-cart-sauce-labs-backpack",
  "#add-to-cart-sauce-labs-fleece-jacket",
];
export const cartIconLink = '[data-test="shopping-cart-link"]';
export const quantityElement = '[data-test="item-quantity"]';

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
