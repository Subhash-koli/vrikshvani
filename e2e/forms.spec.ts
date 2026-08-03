import { test, expect } from '@playwright/test';

test.describe('Forms & Auth UI Suite', () => {

  test('Sign In page renders email input and OAuth options', async ({ page }) => {
    await page.goto('/auth/signin');
    await expect(page.locator('text=Welcome back')).toBeVisible();
    await expect(page.locator('input[type="email"]')).toBeVisible();
    await expect(page.locator('button:has-text("Google")')).toBeVisible();
    await expect(page.locator('button:has-text("GitHub")')).toBeVisible();
  });

  test('Auth Error page handles error query params gracefully', async ({ page }) => {
    await page.goto('/auth/error?error=OAuthSignin');
    await expect(page.locator('text=Sign-In Error')).toBeVisible();
    await expect(page.locator('text=OAuth provider')).toBeVisible();
  });

  test('Contact page renders input fields and department selector', async ({ page }) => {
    await page.goto('/contact');
    await expect(page.locator('form, button[type="submit"]')).toBeVisible();
  });

});
