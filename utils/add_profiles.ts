// Page allows for control over the browser. 
import { Page } from '@playwright/test';

export async function addProfiles(page: Page, name: string, birthday: string, calendar: string) {
    // Selects the lance-french calendar. 
    await page.getByText('lance-french').click();
    // Clicks the Profile icon from lance-french calendar home page. 
    await page.getByText('Profiles').click();
    // Selects the "Add Profile" button. 
    await page.getByRole('button', { name: 'Add a Profile'}).click();
    // Array of all available avatar names.
    const avatarNames = [
        'avatar_unicorn', 'avatar_lab', 'avatar_elephant', 'avatar_cat',
        'avatar_bunny', 'avatar_beagle', 'avatar_bear', 'avatar_raccoon',
        'avatar_husky', 'avatar_dino'
    ];
    // Pick a random avatar from the array.
    const randomAvatar = avatarNames[Math.floor(Math.random() * avatarNames.length)];
    // Click the selected avatar.
    await page.locator(`img[src*="${randomAvatar}"]`).first().dispatchEvent('click');
    // Click the custom color wheel icon to open the color picker.
    await page.locator('img[src*="/radial-color-gradient"]').click({ force: true });
    // Generates a random hex color value.
    const randomColor = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
    // Clears the contents of the hex value and enters the new hex value. 
    await page.locator('input[value^="#"]').fill(randomColor);
    // Confirms the color selection.
    await page.getByRole('button', { name: 'Select Color'}).click();
    // Dismiss the color picker overlay by clicking on the backdrop. 
    await page.getByRole('button', { name: 'Bottom sheet backdrop' }).click();
    // Fills in the profile name.
    await page.getByPlaceholder('Name').fill(name);
    // Fills in the profile birthday.
    await page.getByPlaceholder('Birthday').fill(birthday);
    // Calendar Linking is currently disabled due to a defect 
    // preventing calendars from being linked when creating a new profile. See Defect 005 for more information.
    /*
    // Selects the linked calendar dropdown.
    await page.getByText('Not linked').first().click();
    // Selects a calendar to link the profile to.
    await page.getByText(calendar).last().dispatchEvent('click');
    */
    // Clicks the save button to save the new profile.
    await page.getByRole('button', { name: 'Save'}).click();
}