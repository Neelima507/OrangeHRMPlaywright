import { expect } from '@playwright/test';
import { REGISTER_LOCATORS } from '../locators/registerLocators.js';
import { register_TESTDATA } from '../testData/registerTestData.js';
export class RegisterPage {

    constructor(page) {
        this.page = page;
    }

    async openRegistration() {
        await this.page.click(REGISTER_LOCATORS.registerLink);
    }
    async fillRegistrationForm(register_TESTDATA) {
        await this.page.fill(REGISTER_LOCATORS.firstName, register_TESTDATA.firstName);
        await this.page.fill(REGISTER_LOCATORS.lastName, register_TESTDATA.lastName);
        await this.page.fill(REGISTER_LOCATORS.address, register_TESTDATA.address);
        await this.page.fill(REGISTER_LOCATORS.city, register_TESTDATA.city);
        await this.page.fill(REGISTER_LOCATORS.state, register_TESTDATA.state);
        await this.page.fill(REGISTER_LOCATORS.zip, register_TESTDATA.zip);
        await this.page.fill(REGISTER_LOCATORS.phone, register_TESTDATA.phone);
        await this.page.fill(REGISTER_LOCATORS.ssn, register_TESTDATA.ssn);
        await this.page.fill(REGISTER_LOCATORS.username, register_TESTDATA.username);
        await this.page.fill(REGISTER_LOCATORS.password, register_TESTDATA.password);
        await this.page.fill(REGISTER_LOCATORS.confirmPassword, register_TESTDATA.password);
    }
    async submit() {
        await this.page.click(REGISTER_LOCATORS.registerButton);
    }

    async verifyRegistration() {
        const successMessage = await this.page.locator(REGISTER_LOCATORS.successMsg);
        await successMessage.waitFor({ state: 'visible', timeout: 10000 });
        console.log("success msg is visible:", await successMessage.textContent());
        return await successMessage.isVisible();
    }
}