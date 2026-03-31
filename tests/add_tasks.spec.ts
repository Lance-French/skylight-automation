import { test, expect } from '@playwright/test';
import { login } from '../utils/login';
import { addTasks } from '../utils/add_tasks';

test.describe('Add tasks to profiles', () => {
    test.beforeEach(async ({ page }) => {
        await login(page, 'your-email@example.com', 'your-password');
    });
    test('Add Put away toys task to Milo', async ({ page }) => {
        await addTasks(page, 'Put away toys', 'Milo', 'Chore');
    });
    test('Add Brush teeth task to Milo', async ({ page }) => {
        await addTasks(page, 'Brush teeth', 'Milo', 'Routine', 'Morning');
    });
    test('Add Set the table task to Nora', async ({ page }) => {
        await addTasks(page, 'Set the table', 'Nora', 'Chore');
    });
    test('Add Do hair task to Nora', async ({ page }) => {
        await addTasks(page, 'Do hair', 'Nora', 'Routine', 'Morning');
    });
    test('Add Take out trash task to Wolfgang', async ({ page }) => {
        await addTasks(page, 'Take out trash', 'Wolfgang', 'Chore');
    });
    test('Add Shower task to Wolfgang', async ({ page }) => {
        await addTasks(page, 'Shower', 'Wolfgang', 'Routine', 'Evening');
    });
    test('Add Laundry task to Quinn', async ({ page }) => {
        await addTasks(page, 'Laundry', 'Quinn', 'Chore');
    });
    test('Add Skincare task to Quinn', async ({ page }) => {
        await addTasks(page, 'Skincare', 'Quinn', 'Routine', 'Evening');
    });
});
