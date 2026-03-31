// Page allows for control over the browser. 
import { Page } from '@playwright/test';

export async function login(page: Page, email: string, password: string) {
    // Navigate to the skylight homepage. 
    await page.goto('https://ourskylight.com');
    // Clicks the "Sign In" button to open the login pop up window.
    const popup = await Promise.all([
        page.waitForEvent('popup'),
        page.getByRole('button', { name: 'Sign In'}).click()
    ]);
    // Stores the popup window as a separate page reference.
    const loginPage = popup[0];
    // Fills in the user's email address. 
    await loginPage.getByLabel('Email address').fill(email);
    // Fills in the user's password.
    await loginPage.getByLabel('Password').fill(password);
    // Submit the login form. 
    await loginPage.getByRole('button', { name: 'Log In' }).click();
}  