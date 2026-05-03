import {expect, Locator, Page} from "@playwright/test";
import {BaseKittyPage} from "./baseKittyPage.js";

export class KittyPage extends BaseKittyPage {
    readonly toggle: Locator;
    readonly checkbox: Locator;

    readonly imageKitty;
    readonly adminLink;

    constructor( page: any) {
       super(page);

        this.toggle = page.locator('label.rocker');
        this.checkbox = this.toggle.locator('input');
        this.imageKitty = page.locator('.object-contain');
        this.adminLink = page.getByRole('link', { name: 'Show Admin Area' });
    }

    async open() {
        await this.page.goto('./kitty');
    }

    async isToggleOn() {
        return await this.checkbox.isChecked();
    }

    async setToggle(state: 'ON' | 'OFF') {
        const isOn = await this.isToggleOn();

        if (state === 'ON' && !isOn) await this.toggle.click();
        if (state === 'OFF' && isOn) await this.toggle.click();
    }

    async goToAdmin() {
        await this.adminLink.click();
        await this.page.waitForURL('**/kitty/admin');
    }

    async expectImageVisible() {
        await expect(this.imageKitty).toBeVisible();
    }

    async expectImageHidden() {
        await expect(this.imageKitty).toBeHidden();
    }

    async expectToggleOn() {
        await expect(this.checkbox).toBeChecked();
    }

    async expectToggleOff() {
        await expect(this.checkbox).not.toBeChecked();
    }

}