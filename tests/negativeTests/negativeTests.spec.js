import { expect, test } from '@playwright/test';
import { errorElement } from '../utils/htmlElements';
import { swagLabsURL, userObjects } from '../utils/testData';
import { logIn } from '../utils/testActions';

test.describe('negativeTests', () => {
  userObjects.forEach((user) => {
    test(`Invalid Userdata logins: ${user.userName === '' ? 'Empty username' : user.userName},
       ${user.password === '' ? 'Empty password' : user.password}`,
       async ({ page }) => {
      logIn(page, swagLabsURL, user.userName, user.password);
      await expect(page.locator(errorElement)).toContainText(/Epic sadface/);
    });
  });
});
