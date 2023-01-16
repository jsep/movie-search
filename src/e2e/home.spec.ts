import { test, expect } from '@playwright/test';

test('should navigate to the home page', async ({ page,baseURL }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  // TODO configure baseURL in playwright.config.ts using env variable
  console.log("baseURL: ",baseURL)
  await page.goto(baseURL);
  await expect(page.locator('h1')).toContainText('Movie Search');
  await expect(page.locator('#search')).toHaveCount(1);
});
