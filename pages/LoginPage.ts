import { Page } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

export class LoginPage {
  constructor(private page: Page) {}

  async open() {
    await this.page.goto('/');
  }

  async login() {
    // Preenche o campo de email
    await this.page.locator('input[placeholder="exemplo@email.com"]').fill(process.env.TEST_EMAIL!);

    // Preenche o campo de senha
    await this.page.locator('input[type="password"]').fill(process.env.TEST_PASSWORD!);

    // Clica no botão com span contendo 'Entrar'
    await this.page.locator('button >> span:text("Entrar")').click();
  }
}
