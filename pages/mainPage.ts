import {Locator, Page} from "@playwright/test";
import {BaseKittyPage} from "./baseKittyPage.js";

export class MainPage extends BaseKittyPage {
    readonly kittyLink: Locator;

    constructor(page: any) {
        super(page);

        this.kittyLink = page.getByRole('link', {
            name: 'Show me a Kitty!'
        });
    }

    async open() {
        await this.page.goto('./');
        console.log(this.page.url());
    }

    async goToKittyPage() {
        await this.kittyLink.click();
        await this.page.waitForURL('**/kitty');
    }
}