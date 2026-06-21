import {test} from '@playwright/test';
import {LocatorsPage} from '../Pages/LocatorsPage';

test.describe('Locators Feature', () => {

    test('GetByRole Locator', async ({page}) => {

        const locatorsPage = new LocatorsPage(page);

        await locatorsPage.navigateToLoginPage();
        await locatorsPage.GetByRole();
    });

});