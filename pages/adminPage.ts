import {expect, Page} from "@playwright/test";
import {BaseKittyPage} from "./baseKittyPage.js";

export class AdminPage extends BaseKittyPage {
    readonly toggle;
    readonly checkbox;
    readonly memberLink;

    constructor( page: any) {
        super(page);

        this.toggle = page.locator('label.rocker');
        this.checkbox = this.toggle.locator('input');
        this.memberLink = page.getByRole('link', { name: 'Show Member Area' });
    }

    async open() {
        await this.page.goto('./kitty/admin');
    }

    async isToggleOn() {
        return await this.checkbox.isChecked();
    }

    async setToggle(state: 'ON' | 'OFF') {
        const isOn = await this.isToggleOn();

        if (state === 'ON' && !isOn) await this.toggle.click();
        if (state === 'OFF' && isOn) await this.toggle.click();
    }

    async goToUser() {
        await this.memberLink.click();
        await this.page.waitForURL('**/kitty');
    }

    async expectToggleOn() {
        await expect(this.checkbox).toBeChecked();
    }

    async expectToggleOff() {
        await expect(this.checkbox).not.toBeChecked();
    }
}