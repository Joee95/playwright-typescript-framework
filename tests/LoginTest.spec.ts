import {test} from "@playwright/test";
import {testData} from "../data/loginTestData";
import {LoginPage} from "../Pages/LoginPage";

test.describe('Login Feature', () => {

    for (const data of testData) {

        test(`should login successfully for user: ${data.username}`,
            async ({ page }) => {

                const loginPage = new LoginPage(page);

                await loginPage.navigateToLoginPage();

                const securePage = await loginPage.login(
                    data.username,
                    data.password
                );

                await securePage.expectSecureAreaTextVisible();
            });
    }
});