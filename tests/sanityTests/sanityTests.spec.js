import {test} from '@playwright/test'
import {
    swagLabsURL,
    inventoryURL,
    itemTitleLink,
    cartBadge,
    cartIconLink,
    checkOut2URL,
    finishURL,
    itemsToCart,
    quantityElement,
    checkOut1URL,
    deliveryInfo,
    usernameList,
    password,
    finishedOrder,
} from '../utils/testData'

import {
    assertInventoryURL,
    verifyProductName,
    addItemsToCart,
    assertCartBadge,
    assertCartQuantity,
    assertCheckoutTitle,
    fillDeliveryInfo,
    assertOverviewPage,
    assertFinalPage,
} from '../utils/Helpers'

import {logIn} from '../utils/testActions'

test.describe('sanityTest', () => {
    test.beforeEach('login', async ({page}) => {
        await logIn(page, swagLabsURL, usernameList[0], password)
    })

    test('End to end purchasing process', async ({page}) => {
        //Assert site URL after log in
        await assertInventoryURL(page, inventoryURL)

        //Assert products name
        await verifyProductName(page, itemTitleLink)

        // Add backpack and jacket to shopping cart and assert their names
        await addItemsToCart(page, itemsToCart)

        // Assert cart badge represents number of items added
        await assertCartBadge(page, cartBadge)

        // Navigate to shopping cart page and assert 2 items in list
        await assertCartQuantity(
            page,
            cartIconLink,
            quantityElement,
            itemsToCart,
        )

        // Proceed to checkout and assert site URL and title
        await assertCheckoutTitle(page, checkOut1URL)
        // You missed the cart item assertion in the checkout page - check project assignment presentation - page 13
        // //Fill required details
        await fillDeliveryInfo(page, deliveryInfo)

        // //Proceed to overview page and assert site URL and title
        await assertOverviewPage(page, checkOut2URL)
        //     // //Proceed to final page, assert URL, title, header and text

        await assertFinalPage(page, finishURL, finishedOrder)
    })
})
