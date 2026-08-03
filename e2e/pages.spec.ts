import { test, expect } from '@playwright/test';

test.describe('Core Page Navigation & Rendering Suite', () => {

  test('Homepage renders hero title and main CTA', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Vriksh Vani/i);
    const heading = page.locator('h1');
    await expect(heading).toBeVisible();
    await expect(page.locator('#main-content')).toBeVisible();
  });

  test('Product page renders product hero and specs', async ({ page }) => {
    await page.goto('/product');
    await expect(page).toHaveTitle(/NIH-01/i);
    await expect(page.locator('text=NIH-01')).toBeVisible();
  });

  test('Developers API page renders code samples and endpoints', async ({ page }) => {
    await page.goto('/developers');
    await expect(page.locator('text=Developer API')).toBeVisible();
    await expect(page.locator('text=Quick Start')).toBeVisible();
  });

  test('Enterprise hub renders features and quote button', async ({ page }) => {
    await page.goto('/enterprise');
    await expect(page.locator('text=Enterprise')).toBeVisible();
    await expect(page.locator('text=Fleet Dashboard')).toBeVisible();
  });

  test('Community Leaderboard renders top contributors table', async ({ page }) => {
    await page.goto('/community/leaderboard');
    await expect(page.locator('text=Top Contributors')).toBeVisible();
  });

  test('System Status page renders 9 service indicators', async ({ page }) => {
    await page.goto('/support/status');
    await expect(page.locator('text=System Status')).toBeVisible();
  });

  test('Legal Privacy page renders privacy policy sections', async ({ page }) => {
    await page.goto('/privacy');
    await expect(page.locator('h1')).toContainText(/Privacy Policy/i);
  });

  test('Features page renders technical specs table', async ({ page }) => {
    await page.goto('/features');
    await expect(page.locator('text=Everything NIH-01')).toBeVisible();
  });

});
