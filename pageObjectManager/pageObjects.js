import { LoginOrangePage } from "../pages/loginOrangePage";
import { DashboardOrangePage } from "../pages/dashboardOrangePage";
export class PageObjectManager {
    constructor(page) {
        this.page = page;
        this._loginPage = null;
        this._dashboardPage = null;
        this._profilePage = null;
    }
    get loginPage() {
        if (!this._loginPage) this._loginPage = new LoginOrangePage(this.page);
        return this._loginPage;
    }
    get dashboardPage() {
        if (!this._dashboardPage) this._dashboardPage = new DashboardOrangePage(this.page);
        return this._dashboardPage;
    }
}