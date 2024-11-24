import { expect } from "@playwright/test";
import {
  checkoutComplete,
  itemsToCart,
  itemTitleLink,
  thankYouText,
  orderDispatch,
} from "./Variables";

export async function firstLogin(page, swagLabsURL) {
  await page.goto(swagLabsURL);
  await page.locator("#user-name").fill("standard_user");
  await page.locator("#password").fill("secret_sauce");
  await page.locator("#login-button").click();
}

export async function assertInventoryURL(page, inventoryURL) {
  await expect(page).toHaveURL(inventoryURL);
  await expect(page.locator(".app_logo")).toHaveText("Swag Labs");
}

export async function verifyProductName(page, items) {
  for (let item of items) {
    await expect(page.locator(item.Link)).toContainText(item.Title);
  }
}

export async function addItemsToCart(page, itemsToCart) {
  for (let item of itemsToCart) {
    await page.locator(item).click();
  }
}

export async function assertCartBadge(page, cartBadge) {
  await expect(page.locator(cartBadge)).toContainText(
    itemsToCart.length.toString()
  );
}

export async function assertCartQuantity(
  page,
  cartIcon,
  itemLocator,
  itemList
) {
  await page.locator(cartIcon).click();
  await expect(page.locator(itemLocator)).toHaveCount(itemList.length);
}

export async function assertCheckoutTitle(page, URL) {
  await page.locator("#checkout").click();
  await expect(page).toHaveURL(URL);
  await expect(page.locator(".title")).toHaveText("Checkout: Your Information");
}

export async function fillDeliveryInfo(page, deliveryInfo) {
  for (let info of deliveryInfo) {
    await page.locator("#first-name").fill(info.firstName);
    await page.locator("#last-name").fill(info.lastName);
    await page.locator("#postal-code").fill(info.postalCode);
  }
}

export async function assertOverviewPage(page, URL) {
  await page.locator("#continue").click();
  await expect(page).toHaveURL(URL);
  await expect(page.locator(".title")).toHaveText("Checkout: Overview");
}

export async function assertFinalPage(page, URL) {
  await page.locator("#finish").click();
  await expect(page).toHaveURL(URL);
  await expect(page.locator(".title")).toHaveText(checkoutComplete);
  await expect(page.locator(".complete-header")).toHaveText(thankYouText);
  await expect(page.locator(".complete-text")).toHaveText(orderDispatch);
}
