import {expect, test} from "@playwright/test";
import {AdminPage} from "../pages/adminPage.js";
import {KittyPage} from "../pages/kittyPage.js";

// test.describe('Kitty toggle sync', () => {
//     test.beforeEach(async ({ page }) => {
//         const adminPage = new AdminPage(page);
//
//         await adminPage.open();
//         await adminPage.setToggle('ON');
//
//         await expect(adminPage.checkbox).toBeChecked();
//     });

    test("Admin Page: Turning toggle OFF hides image and syncs with User", async ({ page }) => {
        // const adminPage = new AdminPage(page);
        // const kittyPage = new KittyPage(page);
        //
        // await adminPage.setToggle('OFF');
        // await expect(adminPage.checkbox).not.toBeChecked();
        //
        // console.log(await page.url());
        // await adminPage.memberLink.click();
        // console.log('URL after click:', await page.url());
        // await kittyPage.expectToggleOff();
        const admin = new AdminPage(page);
        const kitty = new KittyPage(page);

        await admin.open();

        await admin.setToggle('ON');
        await admin.setToggle('OFF');

        await admin.expectToggleOff();

        await admin.goToUser();

        await kitty.expectToggleOff();
        await kitty.expectImageHidden();
    });