import {expect, test} from "@playwright/test";
//import {KittyPage} from "../pages/kittyPage.js";
import {AdminPage} from "../pages/adminPage.js";
import {openKittyWithToggle} from "../fixtures/kittySetup.js";

    test('User Page: Turning toggle OFF hides image and syncs with Admin', async ({page}) => {
        const kitty = await openKittyWithToggle(page, 'ON');
        const admin = new AdminPage(page);

        await kitty.setToggle('OFF');
        await kitty.expectImageHidden();

        await kitty.goToAdmin();
        await admin.expectToggleOff();
    });
//});