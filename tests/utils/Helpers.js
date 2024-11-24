import { expect } from "@playwright/test";
import { itemsToCart } from "./testData"
import { mouseClick, fillInfo } from "./testActions";
import { expectText, expectURL } from "./testAssertions";

export async function assertInventoryURL(page, inventoryURL) {
  await expectURL(page, inventoryURL);
  await expectText(page, ".app_logo", "Swag Labs");
}

export async function verifyProductName(page, items) {
  for (let item of items) {
    await expectText(page, item.Link, item.Title);
  }
}

export async function addItemsToCart(page, itemsToCart) {
  for (let item of itemsToCart) {
    await mouseClick(page, item);
  }
}

export async function assertCartBadge(page, cartBadge) {
  await expectText(page, cartBadge, itemsToCart.length.toString());
}

export async function assertCartQuantity(
  page,
  cartIcon,
  itemLocator,
  itemList
) {
  await mouseClick(page, cartIcon);
  await expect(page.locator(itemLocator)).toHaveCount(itemList.length);
}

export async function assertCheckoutTitle(page, URL) {
  await mouseClick(page, "#checkout");
  await expectURL(page, URL);
  await expectText(page, ".title", "Checkout: Your Information");
}

export async function fillDeliveryInfo(page, deliveryInfo) {
  for (let info of deliveryInfo) {
    await fillInfo(page, "#first-name", info.firstName);
    await fillInfo(page, "#last-name", info.lastName);
    await fillInfo(page, "#postal-code", info.postalCode);
  }
}

export async function assertOverviewPage(page, URL) {
  await mouseClick(page, "#continue");
  await expectURL(page, URL);
  await expectText(page, ".title", "Checkout: Overview");
}

export async function assertFinalPage(page, URL, finishText) {
  await mouseClick(page, "#finish");
  await expectURL(page, URL);
  for (let text of finishText) {
    await expectText(page, text.element, text.message);
  }
}
