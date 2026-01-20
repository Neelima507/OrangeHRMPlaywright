import { test, expect } from "playwright/test"

test('@Drops dynamic', async ({ page }) => {
    await page.goto("https://www.yatra.com/");
    //await page.locator('//div[@role="Combobox"]').first().click();
    const locatorobj = page.locator('.css-j7m7g0').first();
    await locatorobj.click();
    const departFrom = page.locator("#input-with-icon-adornment");
    await departFrom.fill('');                    // clear the input
    await departFrom.type('new', { delay: 100 }); // type with delay
    const dropnames = page.locator('.css-134xwrj');
    await dropnames.locator('ul').waitFor({ state: 'visible' });
    const texts = await dropnames.locator('ul li').allInnerTexts()
    for (const item of texts) {
        console.log(item);
    }
    console.log(`count is`, texts.length)
    await dropnames.locator('ul li div span').filter({ hasText: 'New York' }).click();
    await page.waitForTimeout(200);
    await expect(locatorobj).toHaveText('new york');
    console.log("smoke")
})
