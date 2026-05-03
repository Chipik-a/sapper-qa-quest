import { Page } from "@playwright/test";
import {KittyPage} from "../pages/kittyPage.js";
import {stat} from "node:fs";

export async function openKittyWithToggle(page: Page, state: 'ON' | 'OFF') {
    const kitty = new KittyPage(page);

    await kitty.open();
    await kitty.setToggle(state);

    if (state === 'ON') {
        await kitty.expectImageVisible();
    } else {
        await kitty.expectImageHidden();
    }
    return kitty;
}