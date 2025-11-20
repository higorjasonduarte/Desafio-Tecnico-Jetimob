import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './tests',

  // Tempo máximo por teste
  timeout: 60000,

  // Tenta 1 vez extra caso falhe
  retries: 1,

  // Executa apenas 1 teste por vez para evitar múltiplas abas
  workers: 1,
  fullyParallel: false,

  use: {
    // 👉 Agora a URL base é exatamente https://app.jetimob.com
    baseURL: process.env.BASE_URL,

    headless: false,

    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry'
  },

  reporter: [
    ['list'],
    ['allure-playwright']
  ],

  // 👉 Navegadores rodam SEQUENCIALMENTE (um por vez)
  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] }
    },
    {
      name: 'Firefox',
      use: { ...devices['Desktop Firefox'] }
    },
    {
      name: 'Webkit',
      use: { ...devices['Desktop Safari'] }
    }
  ]
});
