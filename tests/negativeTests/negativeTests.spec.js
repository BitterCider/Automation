import { expect, test } from "@playwright/test";
import { swagLabsURL, errorElement, userObjects } from "../utils/testData";
import { logIn } from "../utils/testActions";

test.describe("negativeTests", () => {
  for (let user of userObjects) {
    test(`Invalid Userdata logins: ${
      user.userName === "" ? "Empty username" : user.userName
    }, ${user.password === "" ? "Empty password" : user.password}`, async ({
      page,
    }) => {
      logIn(page, swagLabsURL, user.userName, user.password);
      await page.waitForSelector(errorElement) // what is the point to wait for a selector to appear in the DOM if you assert the text appearance of the same locator?
      await expect(page.locator(errorElement)).toContainText(/Epic sadface/);
    });
  }
});