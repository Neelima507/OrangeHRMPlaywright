import { LOGIN_ORANGE_TESTDATA } from "../testData/loginOrangeTestData";
import { test } from "../fixtures/pageFixture";
import { expect } from "playwright/test"
import { PageObjectManager } from "../pageObjectManager/pageObjects";
import { DashboardOrangePage } from "../pages/dashboardOrangePage";

test.skip('@Orange login with invalid credentials', async ({ pom }) => {
    await pom.loginPage.url();
    await pom.loginPage.userName(LOGIN_ORANGE_TESTDATA.invalid.username);
    await pom.loginPage.passWord(LOGIN_ORANGE_TESTDATA.invalid.password);
    await pom.loginPage.loginBtn();
    const errorLocator = await pom.loginPage.getErrorMsg();
    const errorText = await errorLocator.textContent();
    console.log("Error message is:", errorText);
    await expect(errorLocator).toHaveText('Invalid credentials')
})
test('@Orange login with valid credentials', async ({ pom }) => {
    await pom.loginPage.url();
    await pom.loginPage.userName(LOGIN_ORANGE_TESTDATA.valid.username);
    await pom.loginPage.passWord(LOGIN_ORANGE_TESTDATA.valid.password);
    await pom.loginPage.loginBtn();
    await expect(pom.loginPage.page).toHaveURL(/dashboard/);
    await pom.dashboardPage.clickAdminLink();

})