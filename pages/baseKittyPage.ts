import {expect, Page} from "@playwright/test";

export class BaseKittyPage {
    // readonly toggle;
    // readonly checkbox;

    constructor(protected page: Page) {
        // this.toggle = page.locator('label.rocker');
        // this.checkbox = this.toggle.locator('input');
    }

    // async isToggleOn(): Promise<boolean> {
    //     return await this.checkbox.isChecked();
    // }
    //
    // async setToggle(state: 'ON' | 'OFF') {
    //     const isOn = await this.isToggleOn();
    //
    //     if (state === 'ON' && !isOn) {
    //         await this.toggle.click();
    //     }
    //     if (state === 'OFF' && isOn) {
    //         await this.toggle.click();
    //     }
    // }
}