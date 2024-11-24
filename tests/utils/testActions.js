export async function logIn(page, swagLabsURL, userData, passWord) {
    await page.goto(swagLabsURL);
    await fillInfo(page, '#user-name', userData)
    await fillInfo(page, '#password', passWord)
    await page.locator("#login-button").click();
  }

export async function mouseClick(page, element){
    await page.locator(element).click()
}

export async function fillInfo(page, element, info){
    await page.locator(element).fill(info)
}

