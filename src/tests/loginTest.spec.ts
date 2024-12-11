import { test } from '@playwright/test';
import LoginPage from '../pages/LoginPage';

test('log in and assert Setup title', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigateToLoginPage();
  await loginPage.fillUsername(process.env.userid!);
  await loginPage.fillPassword(process.env.password!);

  const homePage = await loginPage.clickLogin(); // === homePage instance
  await homePage.expectSetupTitleToBeVisible();
});


//validate that .env file is integrated correctly
test('sample env test', async ({ page }) => {
  console.log(process.env.NODE_ENV);
  console.log(process.env.userid);
  console.log(process.env.password);
});
