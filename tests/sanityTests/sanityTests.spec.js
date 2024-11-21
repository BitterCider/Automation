import { expect, test } from "@playwright/test";
import {
  swagLabsURL,
  inventoryURL,
  bagLink,
  jacketLink,
  cartBadge,
  bagToCart,
  jacketToCart,
  cartIconLink,
  itemQuantity,
  stepOneURL,
  stepTwoURL,
  finishURL,
  thankYouText,
  orderDispatch,
} from "../Variables";

test.describe("sanityTest", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(swagLabsURL);
    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    await page.locator("#login-button").click();
  });

  test("login&verify", async ({ page }) => {
    await expect(page).toHaveURL(inventoryURL);
    await expect(page.locator(".app_logo")).toHaveText("Swag Labs");
  });

  test("addToCart", async ({ page }) => {
    await page.locator(bagToCart).click();
    await expect(page.locator(bagLink)).toContainText("Sauce Labs Backpack");
    await page.locator(jacketToCart).click();
    await expect(page.locator(jacketLink)).toContainText(
      "Sauce Labs Fleece Jacket"
    );
    await expect(page.locator(cartBadge)).toContainText("2");

    await page.locator(cartIconLink).click();
    await expect(page.locator(itemQuantity)).toHaveCount(2);
    await page.locator("#checkout").click();

    await expect(page).toHaveURL(stepOneURL);
    await expect(page.locator(".title")).toHaveText(
      "Checkout: Your Information"
    );
    await page.locator("#first-name").fill("tal");
    await page.locator("#last-name").fill("baruchi");
    await page.locator("#postal-code").fill("2220325");
    await page.locator("#continue").click();

    await expect(page).toHaveURL(stepTwoURL);
    await expect(page.locator(".title")).toHaveText("Checkout: Overview");
    await page.locator("#finish").click();
    await expect(page).toHaveURL(finishURL);
    await expect(page.locator(".title")).toHaveText("Checkout: Complete!");
    await expect(page.locator(".complete-header")).toHaveText(thankYouText);
    await expect(page.locator(".complete-text")).toHaveText(orderDispatch);
  });
});