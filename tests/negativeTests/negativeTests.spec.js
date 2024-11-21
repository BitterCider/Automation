import { expect, test } from "@playwright/test";
import { swagLabsURL, userDict, errorElement } from "../Variables";

test.describe.only("negativeTests", () => {
  test("Invalid Error", async ({ page }) => {
    for (let user of userDict) {
      await page.goto(swagLabsURL);
      await page.locator("#user-name").fill(user.userName);
      await page.locator("#password").fill(user.password);
      await page.locator("#login-button").click();
      await expect(page.locator(errorElement)).toContainText(/Epic sadface/);
    }
  });
});
