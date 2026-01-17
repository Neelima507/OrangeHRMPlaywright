import { test, expect } from "@playwright/test";
import { RegisterPage } from '../pages/registerPage.js';
import { register_TESTDATA } from '../testData/registerTestData.js';
//import { generateRandomEmail } from '../utils/randomUtils.js';

test('User Registration Test', async ({ page }) => {

    const registerPage = new RegisterPage(page);

    await page.goto('https://parabank.parasoft.com/');
    await registerPage.openRegistration();


    await registerPage.fillRegistrationForm(register_TESTDATA);
    page.pause();
    await registerPage.submit();

    expect(await registerPage.verifyRegistration()).toBeTruthy();

});