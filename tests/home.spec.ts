import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://patzsl.github.io/hello-world/', { waitUntil: 'networkidle' });
  await expect(page).toHaveTitle(/Home/);
});

test('should go to about page', async ({ page }) => {
  await page.goto('https://patzsl.github.io/hello-world/', { timeout: 30000 }); // Aumenta o timeout para 30 segundos
 
  await page.locator('[data-test="btn-primary"]').click({ timeout: 10000 }); // Aumenta o timeout para 10 segundos
  await expect(page).toHaveURL(/.*about/);
  await page.pause();
 });
 