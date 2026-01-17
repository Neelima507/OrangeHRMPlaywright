import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage.js';
import { LOGINPAGE_TESTDATA } from '../testData/loginpageTestData.js';


test('Login with valid credentials', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login(LOGINPAGE_TESTDATA)

    expect(await loginPage.verifyLogin()).toBeTruthy();

});