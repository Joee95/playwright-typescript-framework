import {test} from '@playwright/test';
import {LocatorsPage} from '../Pages/LocatorsPage';

test.describe('Locators Feature', () => {

    test('GetByRole Locator', async ({page}) => {

        const locatorsPage = new LocatorsPage(page);
        await locatorsPage.navigateToLoginPage();
        await locatorsPage.GetByRole();
    });

    test('GetByText Locator', async ({page}) => {

        const locatorsPage = new LocatorsPage(page);
        await locatorsPage.navigateToLoginPage();
        await locatorsPage.GetByText();
    });

    test('GetByLabel Locator', async ({page}) => {

        const locatorsPage = new LocatorsPage(page);
        await locatorsPage.navigateToLoginPage();
        await locatorsPage.GetByLabel();
    });

    test('Xpath_Table Locator', async ({page}) => {
        const locatorsPage = new LocatorsPage(page);
        await locatorsPage.navigateToLoginPage();
        await locatorsPage.TableXpath();
    })

});