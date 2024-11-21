import { expect, test } from "@playwright/test";
import { password, swagLabsURL, usernameList, inventoryURL } from "../Variables";

test.describe('positiveTests', () =>{
    test('validLogin', async ({ page }) =>{
        for(let username of usernameList){
            await page.goto(swagLabsURL); 
            await page.locator("#user-name").fill(username)
            await page.locator("#password").fill(password)
            await page.locator("#login-button").click();
            await expect(page).toHaveURL(inventoryURL);
        }
    })
})
