import {expect, test} from '@playwright/test';
//import { KittyPage } from "../pages/kittyPage.js";
import { AdminPage } from "../pages/adminPage.js";
import {openKittyWithToggle} from "../fixtures/kittySetup.js";

  test('User Page: Turning toggle ON displays image and syncs with Admin', async ({page}) => {
    const kitty = await openKittyWithToggle(page, 'OFF');
    const admin = new AdminPage(page);

    await kitty.setToggle('ON');
    await kitty.expectImageVisible();

    await kitty.goToAdmin();
    await admin.expectToggleOn();
  });


