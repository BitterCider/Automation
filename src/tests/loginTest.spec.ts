import { test } from '@playwright/test';
import LoginPage from "../pages/LoginPage";

test("log in and assert Setup title", async ({page}) => {
    const loginPage = new LoginPage(page)

    await loginPage.navigateToLoginPage()
    await loginPage.fillUsername("skillet459@gmail.com")
    await loginPage.fillPassword("Unb1P3ek")

    const homePage = await loginPage.clickLogin() // === homePage instance
    await homePage.expectSetupTitleToBeVisible()
})