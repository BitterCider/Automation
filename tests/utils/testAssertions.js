import { expect } from "@playwright/test"

export async function expectText(page, element, text){
    await expect(page.locator(element)).toContainText(text)
}

export async function expectURL(page, Adress){
    await expect(page).toHaveURL(Adress)
}