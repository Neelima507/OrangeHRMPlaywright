import { OPEN_ACCOUNT_LOCATORS } from '../locators/openAccountLocators.js';

export class OpenAccountPage {

    constructor(page) {
        this.page = page;
    }

    async clickOpenAccount() {
        await this.page.click(OPEN_ACCOUNT_LOCATORS.openAccountLink);
    }

    async selectAccountType(type) {
        await this.page.selectOption(OPEN_ACCOUNT_LOCATORS.accountTypeDropdown, type);
    }

    async selectExistingAccount(accountNumber) {
        await this.page.selectOption(OPEN_ACCOUNT_LOCATORS.fromAccountDropdown, accountNumber);
    }

    async submitOpenAccount() {
        await this.page.click(OPEN_ACCOUNT_LOCATORS.openNewAccountButton);
    }
    async getNewAccountId() {
        await this.page.waitForSelector(OPEN_ACCOUNT_LOCATORS.newAccountIdText);
        return this.page.locator(OPEN_ACCOUNT_LOCATORS.newAccountIdText).textContent();
    }
    async getNewAccountIdtext() {
        await this.page.waitForSelector(OPEN_ACCOUNT_LOCATORS.newAccountText);
        return this.page.locator(OPEN_ACCOUNT_LOCATORS.newAccountText).innerText();
    }
}