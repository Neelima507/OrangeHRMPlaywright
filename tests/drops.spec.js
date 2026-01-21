import { test, expect } from "playwright/test"
test('@Drops dynamic', async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.locator('#login-button').click();
    await page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept(); // or dialog.dismiss()
        const locator = page.getByText('Swag Labs')
        console.log('text ', locator.innerText());

    });
})