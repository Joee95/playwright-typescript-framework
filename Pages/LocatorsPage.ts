import {expect, Locator, Page} from '@playwright/test'
import {BasePage} from "./BasePage";


export class LocatorsPage extends BasePage {

    // Locators
    private readonly roleLocator: Locator;
    private readonly textLocator: Locator;
    private readonly labelLocator: Locator;
    private readonly placeholderLocator: Locator;
    private readonly altTextLocator: Locator;
    private readonly titleLocator: Locator;
    private readonly testIDLocator: Locator;
    private readonly CSSLocator: Locator;
    private readonly ListXpathLocator: Locator;
    private readonly tableXpathLocator: Locator;

    constructor(page: Page) {
        super(page);
        this.roleLocator = this.page.getByRole('link', {name: 'Contact'});
        this.textLocator = this.page.getByText(/Hot Deal: Buy 1 Get 1 Free/);
        this.labelLocator = this.page.getByLabel('Email for newsletter');
        this.placeholderLocator = this.page.getByPlaceholder('Search the site');
        this.altTextLocator = this.page.getByAltText('User avatar');
        this.titleLocator = this.page.getByTitle('Refresh content');
        this.testIDLocator = this.page.getByTestId('status-message');
        this.CSSLocator = this.page.locator('.legacy-css.text-primary');
        this.ListXpathLocator = this.page.locator('//li[@class=\'list-group-item\']');
        this.tableXpathLocator = this.page.locator('//table[@class="table legacy-table"]');

    }

    async navigateToLoginPage() {
        await this.page.goto("https://practice.expandtesting.com/locators")
    }

    async GetByRole(): Promise<void> {
        await this.click(this.roleLocator);
        await expect(this.page).toHaveURL(/contact/);
        await expect(this.page).toHaveTitle('Contact form page for Automation Testing Practice');
    }

    async GetByText(): Promise<void> {
        await expect(this.textLocator).toContainText("Deal: Buy 1 Get 1 Free");
    }

    async GetByLabel(): Promise<void> {
        await this.type(this.labelLocator, 'yousef.kenawyy@gmail.com');
        await expect(this.labelLocator).toHaveValue('yousef.kenawyy@gmail.com');
    }

    async TableXpath(): Promise<void> {
        await expect(this.tableXpathLocator).toContainText("Headphones");
    }
}
