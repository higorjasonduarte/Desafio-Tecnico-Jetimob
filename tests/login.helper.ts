import { Page } from '@playwright/test';

export async function login(page: Page) {
  await page.goto('/login');

  await page.fill('input[name="email"]', 'usuario-teste-qa2@gmail.com');
  await page.fill('input[name="password"]', 'desafiotecnico');

  await page.click('button[type="submit"]');

  await page.waitForURL('**/dashboard');
}
