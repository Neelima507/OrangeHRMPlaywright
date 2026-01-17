import { test as base } from '@playwright/test';
import { PageObjectManager } from '../pageObjectManager/pageObjects';
export const test = base.extend({
    // Fixture for Login Page in main context
    pom: async ({ page }, use) => {
        const pageObjectManager = new PageObjectManager(page);
        await use(pageObjectManager);
    },

    // Fixture for creating a new isolated tab/window
    newPage: async ({ browser }, use) => {
        const context = await browser.newContext(); // new session
        const page = await context.newPage();
        await use(page);

        // cleanup after test
        await context.close();
    },
});