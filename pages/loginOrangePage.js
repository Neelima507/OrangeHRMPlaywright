import { LOGIN_ORANGE_LOCATORS } from "../locators/loginOrangeLocators";
import { LOGIN_ORANGE_TESTDATA } from "../testData/loginOrangeTestData";
import { CONFIGURL } from "../config/dev.config";

export class LoginOrangePage {
    constructor(page) {
        this.page = page;
    }
    async url() {
        await this.page.goto(CONFIGURL.baseURLSE)
    }
    async userName(username) {
        await LOGIN_ORANGE_LOCATORS.username(this.page).fill(username);

    }
    async passWord(password) {
        await LOGIN_ORANGE_LOCATORS.password(this.page).fill(password);

    }
    async loginBtn() {
        await LOGIN_ORANGE_LOCATORS.loginButton(this.page).click();

    }
    async userNameText() {
        const userLocator = await LOGIN_ORANGE_LOCATORS.usernameText(this.page);
        const userText = await userLocator.textContent();
        console.log(userText)


    }
    async passwordText() {
        const passLocator = await LOGIN_ORANGE_LOCATORS.passwordText(this.page);
        const passText = await passLocator.textContent();
        console.log(passText)

    }
    async getErrorMsg() {
        return await LOGIN_ORANGE_LOCATORS.errorMsg(this.page);

    }
}