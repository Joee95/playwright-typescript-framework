import { test } from '@playwright/test';
import { RegisterPage } from '../Pages/RegisterPage';
import { testData } from '../data/registrationTestData';

test.describe('Register Feature', () => {

    for (const data of testData) {

        test(`should register successfully for user: ${data.usernameRegister}`,
            async ({ page }) => {

                const registerPage = new RegisterPage(page);

                // Navigate to Register Page
                await registerPage.navigateToRegisterPage();

                // Generate unique valid username
                const uniqueUsername = `${data.usernameRegister}-${Date.now()}`.toLowerCase();

                // Register New User
                const loginPage = await registerPage.register(
                    uniqueUsername,
                    data.passwordRegister,
                    data.passwordConfirmationRegister
                );

                // Verify Registration
                await loginPage.expectSuccessRegistrationMessage();
            }
        );
    }

});