import {Page, Locator, expect} from '@playwright/test';
import {BasePage} from './BasePage';
import {SecurePage} from './SecurePage';

export class LoginPage extends BasePage {

    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;
    private readonly SuccessRegisterMessage: Locator;

    constructor(page: Page) {
        super(page);
        this.usernameInput = page.getByRole('textbox', {name: 'Username'});
        this.passwordInput = page.getByRole('textbox', {name: 'Password'});
        this.loginButton = page.getByRole('button', {name: 'Login'});
        this.SuccessRegisterMessage = page.locator('//*[@id="flash"]/b')
    }

    async navigateToLoginPage(): Promise<void> {
        await this.page.goto(
            'https://practice.expandtesting.com/login'
        );
    }

    async login(username: string, password: string): Promise<SecurePage> {

        await this.type(this.usernameInput, username);
        await this.type(this.passwordInput, password);
        await this.click(this.loginButton);
        return new SecurePage(this.page);
    }

    async expectSuccessRegistrationMessage(): Promise<void> {
        await expect(this.SuccessRegisterMessage)
            .toContainText('Successfully registered, you can log in now');
    }
}