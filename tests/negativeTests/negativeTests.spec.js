import { expect, test } from "@playwright/test";
import { swagLabsURL, errorElement, userObjects } from "../Variables";

test.describe.only("negativeTests", () => {
  for (let user of userObjects) {
    test(`Invalid Userdata logins: ${
      user.userName === "" ? "Empty username" : user.userName
    }, ${user.password === "" ? "Empty password" : user.password}`, async ({
      page,
    }) => {
      await page.goto(swagLabsURL);
      await page.locator("#user-name").fill(user.userName);
      await page.locator("#password").fill(user.password);
      await page.locator("#login-button").click();
      await expect(page.locator(errorElement)).toContainText(/Epic sadface/);
    });
  }
});
