import { expect, test } from "@playwright/test";
import {
  password,
  swagLabsURL,
  usernameList,
  inventoryURL,
} from "../utils/testData";
import { logIn } from "../utils/testActions";

test.describe("positiveTests", () => {
  usernameList.forEach((username) => {
    test(`Validate userdata logins:${username}, ${password}`, async ({
      page,
    }) => {
      await logIn(page, swagLabsURL, username, password);
      await expect(page).toHaveURL(inventoryURL);
    });
  });
});
