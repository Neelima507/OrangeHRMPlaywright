import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage.js';
import { OpenAccountPage } from '../pages/openAccountPage.js';
import { LOGINPAGE_TESTDATA } from '../testData/loginpageTestData.js';
test('Open New Savings Account Test', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const openAccountPage = new OpenAccountPage(page);

    // Step 1: Login
    await loginPage.navigate();
    await loginPage.login(LOGINPAGE_TESTDATA)
    expect(await loginPage.verifyLogin()).toBeTruthy();

    // Step 2: Open Account Page
    await openAccountPage.clickOpenAccount();

    // Step 3: Select account type
    await openAccountPage.selectAccountType('1');   // 1 = Savings, 0 = Checking
    // Step 4: Choose existing account as funding source
    await openAccountPage.selectExistingAccount('18450'); // use actual account number shown

    // Step 5: Submit
    await openAccountPage.submitOpenAccount();

    // Step 6: Capture the newly generated account number
    const newAccountId = await openAccountPage.getNewAccountId();
    const textmsg = await openAccountPage.getNewAccountIdtext();
    console.log("New Account Created:", newAccountId);
    console.log(textmsg);

    // Step 7: Validate account ID
    expect(newAccountId).not.toBeNull();
});