//URL Assertions:
export const swagLabsURL = "https://www.saucedemo.com/";
export const inventoryURL = "https://www.saucedemo.com/inventory.html";
export const stepOneURL = 'https://www.saucedemo.com/checkout-step-one.html'
export const stepTwoURL = 'https://www.saucedemo.com/checkout-step-two.html'
export const finishURL = 'https://www.saucedemo.com/checkout-complete.html'

//Text Assertions
export const orderDispatch = "Your order has been dispatched, and will arrive just as fast as the pony can get there!"
export const thankYouText = "Thank you for your order!"

//HTML elements:
export const errorElement = '.error-message-container';
export const bagLink = '[data-test="item-4-title-link"] [data-test="inventory-item-name"]';
export const jacketLink = '[data-test="item-5-title-link"] [data-test="inventory-item-name"]';
export const cartBadge = '[data-test="shopping-cart-badge"]';
export const bagToCart = "#add-to-cart-sauce-labs-backpack"
export const jacketToCart = "#add-to-cart-sauce-labs-fleece-jacket"
export const cartIconLink = '[data-test="shopping-cart-link"]'
export const itemQuantity = '[data-test="item-quantity"]'

//Login paramaters:

export const password = "secret_sauce";

  // Positive tests:
  export const usernameList = [
    "standard_user",
    "problem_user",
    "performance_glitch_user",
    "error_user",
    "visual_user",
  ];

  // Negative tests:
  export const incorrect = "wrong_sauce";
  export const userDict = [
    { userName: "standard_user", password: incorrect },
    { userName: "locked_out_user", password: password },
    { userName: "locked_out_user", password: incorrect },
    { userName: "", password: password },
    { userName: "problem_user", password: "" },
    { userName: "", password: "" },
  ];


