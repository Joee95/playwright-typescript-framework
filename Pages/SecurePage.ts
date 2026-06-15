import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class SecurePage extends BasePage {
    private readonly secureAreaText: Locator;

    constructor(page: Page) {
        super(page);

        this.secureAreaText = this.page.getByRole('heading', {
            name: 'Secure Area page for Automation Testing Practice',
        });
    }

    async expectSecureAreaTextVisible(): Promise<void> {
        await expect(this.secureAreaText).toBeVisible();
    }
}