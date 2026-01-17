
import { LOGIN_LOCATORS } from '../locators/loginLocators.js';
import { LOGINPAGE_TESTDATA } from '../testData/loginpageTestData.js';

export class LoginPage {
    constructor(page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto('https://parabank.parasoft.com/');
    }

    async login(LOGINPAGE_TESTDATA) {
        await this.page.fill(LOGIN_LOCATORS.usernameInput, LOGINPAGE_TESTDATA.LoginUsername);
        await this.page.fill(LOGIN_LOCATORS.passwordInput, LOGINPAGE_TESTDATA.LoginPassword);
        await this.page.click(LOGIN_LOCATORS.loginButton);
    }

    async verifyLogin() {
        await this.page.waitForSelector(LOGIN_LOCATORS.welcomeMsg, { timeout: 5000 });
        return await this.page.isVisible(LOGIN_LOCATORS.welcomeMsg);

    }
}
