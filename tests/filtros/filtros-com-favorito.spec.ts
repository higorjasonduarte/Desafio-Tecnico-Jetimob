import * as dotenv from 'dotenv';
dotenv.config();

import { test, expect } from '../../helpers/test-fixtures';

test.describe('Filtros - Com Favorito', () => {

  test.beforeEach(async ({ auth, imoveisPage }) => {
    await imoveisPage.open();
  });

  test('CT-005: Favorito aplicado automaticamente', async ({ page, imoveisPage }) => {
    await expect(page.locator(imoveisPage.filtroTag).first()).toBeVisible();
  });

  test('CT-008: Filtro extra persiste em todos cenários', async ({ page }) => {
    // Clica no menu Imóveis
    await page.click('div.router-link-active span');

    // Espera até o input de cidade aparecer
    await page.waitForSelector('input[placeholder="Digite a cidade"]', { timeout: 20000 });

    // Preenche a cidade
    await page.fill('input[placeholder="Digite a cidade"]', 'Porto Alegre');

    // Clica no botão Filtrar
    await page.click('a.primary');

    // Verifica se o filtro foi aplicado (exemplo de verificação)
    await expect(page.locator('.filter-tag')).toContainText('Porto Alegre');
  });
});