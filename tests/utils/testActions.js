export async function logIn(page, swagLabsURL, userData, password) {
    await page.goto(swagLabsURL);
    await fillInfo(page, '#user-name', userData)
    await fillInfo(page, '#password', password)
    await page.locator("#login-button").click();
  }

export async function mouseClick(page, element){
    await page.locator(element).click()
}

export async function fillInfo(page, element, info){
    await page.locator(element).fill(info)
}

