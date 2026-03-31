// Page allows for control over the browser.
import { Page } from "@playwright/test";

// Adds a task to a specified profile. If the task is a routine, the time of day for the routine must also be specified.
export async function addTasks(page: Page, taskName: string, profile: string, type: string, timeOfDay?: string) {
    // Selects the lance-french calendar. 
    await page.getByText('lance-french').click();
    // Clicks the Tasks button from the calendar home page.
    await page.getByText('Tasks', { exact: true }).first().click();
    // Adding a try catch in the event the task welcome page is loaded. 
    try {
        // If the task welcome page is loaded, clicks the "Continue" button to navigate to the Task Box. 
        await page.getByRole('button', { name: 'Continue' }).click();
    } catch {
        // The task welcome page didn't appear, continue normally. 
    }
    // Clicks Task Box to view default tasks. 
    await page.getByText('Task Box').click();
    // Selects the specified task from the list. 
    await page.getByText(taskName).click();
    // Selects the profile to which the task will be added.
    await page.getByText(profile, { exact: true }).last().click();
    // Selects the type of task being added (chore or routine).
    await page.getByText(type, { exact: true }).first().click();
    // If the task being added is a routine, selects the time of day for the routine.
    if (type === 'Routine' && timeOfDay) {
        // Select "Day" to set the routine frequency to daily.
        await page.getByText('Day', { exact: true }).click();
        // Select the desired time of day.
        await page.getByText(timeOfDay, { exact: true }).last().click();
        // Deselect "Afternoon" if it is not the desired time of day, as it is selected by default.
        if (timeOfDay !== 'Afternoon') {
            await page.getByText('Afternoon', { exact: true }).last().click();
        }
    }
    // Clicks the add button to save the task. 
    await page.getByRole('button', { name: 'Add' }).click();
    // Verify the task was created by waiting for the confirmation message. 
    await page.getByText('created', { exact: false }).waitFor({timeout: 3000});
}