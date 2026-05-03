import {expect, test} from "@playwright/test";
import {KittyPage} from "../pages/kittyPage.js";
import {AdminPage} from "../pages/adminPage.js";

    test('Admin Page: Turning toggle ON displays image and syncs with User', async ({page}) => {
        const admin = new AdminPage(page);
        const kitty = new KittyPage(page);

        await admin.open();

        await admin.setToggle('OFF');
        await admin.setToggle('ON');

        await admin.expectToggleOn();

        await admin.goToUser();

        await kitty.expectToggleOn();
        await kitty.expectImageVisible();
})