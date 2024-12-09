import { Page } from '@playwright/test';
import HomePage from './HomePage';

export default class LoginPage {
  //make a class so you can pass any username or password
  private readonly usernameSelector = '#username';
  private readonly passwordSelector = '#password';
  private readonly loginButtonSelector = '#Login';

  constructor(private page: Page) {} //allows to pass different login info to instance

  async navigateToLoginPage() {
    await this.page.goto('https://login.salesforce.com/');
  }

  async fillUsername(username: string) {
    await this.page.locator(this.usernameSelector).fill(username);
  }

  async fillPassword(password: string) {
    await this.page.locator(this.passwordSelector).fill(password);
  }

  async clickLogin() {
    await this.page
      .locator(this.loginButtonSelector)
      .click()
      .catch((error) => {
        console.error(`Error when logging in: ${error}`);
        throw error;
      });

    const homePage = new HomePage(this.page);
    return homePage;
  }
}
