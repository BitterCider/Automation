import { test } from '@playwright/test';
import { swagLabsURL, inventoryURL, cartURL, checkOut2URL, finishURL, checkOut1URL, deliveryInfo, usernameList, password } from '../utils/testData';
import { itemTitleLink, finishedOrder, cartTitle, cartBadge, itemsToCart, cartIconLink, quantityElement } from '../utils/htmlElements';
import { assertInventoryURL, verifyProductName, addItemsToCart, assertCartBadge, assertCartQuantity, assertCheckoutTitle, fillDeliveryInfo, assertOverviewPage, assertFinalPage, assertCartPage } from '../utils/Helpers';

import { logIn } from '../utils/testActions';

test.describe('sanityTest', () => {
  test.beforeEach('login', async ({ page }) => {
    await logIn(page, swagLabsURL, usernameList[0], password);
  });

  test('End to end purchasing process', async ({ page }) => {
    await assertInventoryURL(page, inventoryURL);

    await verifyProductName(page, itemTitleLink);

    await addItemsToCart(page, itemsToCart);

    await assertCartBadge(page, cartBadge);

    await assertCartPage(page, cartURL, cartTitle, cartIconLink);

    await assertCartQuantity(page, quantityElement, itemsToCart);

    await assertCheckoutTitle(page, checkOut1URL);

    await fillDeliveryInfo(page, deliveryInfo);

    await assertOverviewPage(page, checkOut2URL);

    await assertFinalPage(page, finishURL, finishedOrder);
  });
});
