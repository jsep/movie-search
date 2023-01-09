import { test, expect } from '@playwright/test';

test('should navigate to the home page', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  // TODO configure baseURL in playwright.config.ts using env variable
  await page.goto('http://localhost:3000/');
  await expect(page.locator('h1')).toContainText('Movie Search');
  await expect(page.locator('#search')).toHaveCount(1);
});
