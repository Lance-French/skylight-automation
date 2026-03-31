import { test, expect } from '@playwright/test';
import { login } from '../utils/login';
import { addProfiles } from '../utils/add_profiles';


test.describe('Add family profiles', () => { 
    test.beforeEach(async ({ page }) => {
        await login(page, 'your-email@example.com', 'your-password');
    });
    test('Add Milo profile (age 4)', async ({ page }) => {
        // Adds Milo's profile to the lance-french calendar.
        await addProfiles(page, 'Milo', '06/12/2021', 'lancedfrench@gmail.com');
        // Verifies that Milo's profile was created successfully.
        await expect(page.getByText('Milo', { exact: true })).toBeVisible();
    });
    test('Add Nora profile (age 8)', async ({ page }) => {
        // Adds Nora's profile to the lance-french calendar.
        await addProfiles(page, 'Nora', '09/23/2017', 'lancedfrench@gmail.com');
        // Verifies that Nora's profile was created successfully.
        await expect(page.getByText('Nora', { exact: true })).toBeVisible();
    });
    test('Add Wolfgang profile (age 12)', async ({ page }) => {
        // Adds Wolfgang's profile to the lance-french calendar.
        await addProfiles(page, 'Wolfgang', '01/07/2014', 'lancedfrench@gmail.com');
        // Verifies that Wolfgang's profile was created successfully.
        await expect(page.getByText('Wolfgang', { exact: true })).toBeVisible();
    });
    test('Add Quinn profile (age 16)', async ({ page }) => {
        // Adds Quinn's profile to the lance-french calendar.
        await addProfiles(page, 'Quinn', '11/30/2009', 'lancedfrench@gmail.com');
        // Verifies that Quinn's profile was created successfully.
        await expect(page.getByText('Quinn', { exact: true })).toBeVisible();
    });
});