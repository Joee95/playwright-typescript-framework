import { Page, Locator, expect } from '@playwright/test';

export class BasePage {
  protected page: Page;
  protected timeout: number;

  constructor(page: Page, timeout: number = 20000) {
    this.page = page;
    this.timeout = timeout;
  }

    
  async open(url: string): Promise<void> {
    await this.page.goto(url);
  }

    
  async waitVisible(locator: Locator | string): Promise<Locator> {
    const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
    await element.waitFor({ state: 'visible', timeout: this.timeout });
    return element;
  }

    
  async waitClickable(locator: Locator | string): Promise<Locator> {
    const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
    await element.waitFor({ state: 'attached', timeout: this.timeout });
    await element.waitFor({ state: 'visible', timeout: this.timeout });
    await expect(element).toBeEnabled();
    return element;
  }

  async waitForTimeout(timeout: number): Promise<void> {
    await this.page.waitForTimeout(timeout);
  }

  async click(locator: Locator | string): Promise<void> {
    const element = await this.waitClickable(locator);
    await element.click();
  }

  async type(locator: Locator | string, text: string, clear: boolean = true): Promise<void> {
    const element = await this.waitVisible(locator);
    if (clear) {
      await element.clear();
    }
    await element.fill(text);
  }

  async getText(locator: Locator | string): Promise<string> {
    const element = await this.waitVisible(locator);
    return await element.textContent() || '';
  }

  async verifyElementVisible(locator: Locator | string): Promise<boolean> {
    try {
      const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
      await element.waitFor({ state: 'visible', timeout: 5000 });
      return true;
    } catch {
      return false;
    }
  }

  async verifyElementHidden(locator: Locator | string): Promise<boolean> {
    try {
      const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
      await element.waitFor({ state: 'hidden', timeout: 5000 });
      return true;
    } catch {
      return false;
    } 
  }

  async takeScreenshot(testName: string, folder: string = 'screenshots'): Promise<string>  {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
    const fileName = `${testName}_${timestamp}.png`;
    const path = `${folder}/${fileName}`;
    await this.page.screenshot({path , fullPage: true});
    return path;
  }

}
