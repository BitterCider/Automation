import { expect, test } from "@playwright/test";
import { password, swagLabsURL, usernameList, inventoryURL } from "../Variables";

test.describe('positiveTests', () =>{
    for(let username of usernameList){
        test(`Validiate userdata logins:${username}, ${password}`, async ({ page }) =>{
            await page.goto(swagLabsURL); 
            await page.locator("#user-name").fill(username)
            await page.locator("#password").fill(password)
            await page.locator("#login-button").click();
            await expect(page).toHaveURL(inventoryURL);    
    })
}})

