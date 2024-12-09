import { expect, Page } from '@playwright/test';

export default class HomePage {
  private readonly homePageSelector = '[title="Setup"]';

  constructor(private page: Page) {}

  async expectSetupTitleToBeVisible() {
    await expect(this.page.locator(this.homePageSelector)).toBeVisible({ timeout: 15000 });
  }
}
