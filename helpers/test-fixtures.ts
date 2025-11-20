import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ImoveisPage } from '../pages/ImoveisPage';

// 🔥 Extendendo apenas o test
export const test = base.extend<{
  loginPage: LoginPage;
  imoveisPage: ImoveisPage;
  auth: boolean;
}>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  imoveisPage: async ({ page }, use) => {
    await use(new ImoveisPage(page));
  },

  auth: async ({ loginPage, page }, use) => {
    await loginPage.open();
    await loginPage.login();

    // Espera até que algum elemento da página logada esteja visível
    // Substitua '.imoveis-list' pelo seletor real que aparece após login
    await page.waitForSelector('.imoveis-list', { timeout: 15000 });

    // Alternativamente, você pode esperar a página inteira carregar
    // await page.waitForLoadState('networkidle');

    await use(true);
  }
});

// 🔥 Exportamos também o expect
export { expect };
