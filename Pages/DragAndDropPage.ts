import {Page, expect, Locator} from "@playwright/test";
import {BasePage} from "./BasePage";

export class DragAndDropPage extends BasePage {

    private readonly box_A: Locator;
    private readonly box_B: Locator;


    constructor(page: Page) {
        super(page);
        this.box_A = this.page.locator("#column-a");
        this.box_B = this.page.locator("#column-b");
    }

    async navigateToDDPage(): Promise<void> {
        await this.page.goto("https://practice.expandtesting.com/drag-and-drop", {
            waitUntil: "commit",
            timeout: 60000
        });

        await this.page.waitForLoadState("domcontentloaded");
    }

    async DragAtoB(): Promise<void> {
        await this.box_A.dragTo(this.box_B);
        await expect(this.box_A).toContainText("B")
    }
}