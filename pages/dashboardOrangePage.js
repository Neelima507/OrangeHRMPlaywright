import { DASHBOARD_LOCATORS } from "../locators/dashboardOrangeLocators";

export class DashboardOrangePage {
    constructor(page) {
        this.page = page;
    }
    async clickAdminLink() {
        await DASHBOARD_LOCATORS.adminLink(this.page).click();
    }
} 