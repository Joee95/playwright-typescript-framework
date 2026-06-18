import {Page, Locator, expect} from '@playwright/test';
import {BasePage} from "./BasePage";
import {LoginPage} from "./LoginPage";

export class RegisterPage extends BasePage {

    private readonly userName: Locator;
    private readonly password: Locator;
    private readonly passwordConfirmation: Locator;
    private readonly registerBtn: Locator;

    constructor(page: Page) {
        super(page);
        this.userName = page.locator('//input[@id=\'username\']')
        this.password = page.locator('//input[@id=\'password\']')
        this.passwordConfirmation = page.locator('//input[@id=\'confirmPassword\']')
        this.registerBtn = page.locator('//button[@type=\'submit\']')
    }

    async navigateToRegisterPage(): Promise<void> {
        await this.page.goto("https://practice.expandtesting.com/register");
        await this.page.setViewportSize({width: 1920, height: 1080});
    }

    async register(userName:string, password:string, passwordConfirmation:string): Promise<LoginPage> {
        await this.userName.fill(userName);
        await this.password.fill(password);
        await this.passwordConfirmation.fill(passwordConfirmation);
        await this.registerBtn.click();
        return new LoginPage(this.page);
    }
}


