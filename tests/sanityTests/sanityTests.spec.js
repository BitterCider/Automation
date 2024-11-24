import { expect, test } from "@playwright/test";
import {
  swagLabsURL,
  inventoryURL,
  itemTitleLink,
  cartBadge,
  bagToCart,
  jacketToCart,
  cartIconLink,
  itemQuantity,
  checkOut2URL,
  finishURL,
  thankYouText,
  orderDispatch,
  itemsToCart,
  quantityElement,
  checkOut1URL,
  deliveryInfo,
} from "../Variables";

import { firstLogin, assertInventoryURL, verifyProductName, addItemsToCart, assertCartBadge, assertCartQuantity, assertCheckoutTitle, fillDeliveryInfo, assertOverviewPage, assertFinalPage } from "../Helpers";

test.describe("sanityTest", () => {

  test("End to end purchasing process", async ({ page }) => {

  //Navigate to site and log in using valid credentials
    await firstLogin(page, swagLabsURL)

  //Assert site URL after log in
    await assertInventoryURL(page, inventoryURL)

  //Assert products name
    await verifyProductName(page, itemTitleLink)

  // Add backpack and jacket to shopping cart and assert their names
    await addItemsToCart(page, itemsToCart)

  // Assert cart badge represents number of items added
    await assertCartBadge(page, cartBadge)

  // Navigate to shopping cart page and assert 2 items in list
    await assertCartQuantity(page, cartIconLink, quantityElement, itemsToCart)

  // Proceed to checkout and assert site URL and title
    await assertCheckoutTitle(page, checkOut1URL)


  // //Fill required details
    await fillDeliveryInfo(page, deliveryInfo)

  // //Proceed to overview page and assert site URL and title
    await assertOverviewPage(page, checkOut2URL)
  // //Proceed to final page, assert URL, title, header and text
    await assertFinalPage(page, finishURL)
  });
});