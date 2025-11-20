import * as dotenv from 'dotenv';
dotenv.config();

import { test, expect } from '../../helpers/test-fixtures';

test.describe('Filtros - Sem Favorito', () => {

  test.beforeEach(async ({ auth, imoveisPage }) => {
    await imoveisPage.open();
  });

  test('CT-001: Nenhum filtro aplicado ao entrar', async ({ page, imoveisPage }) => {
    expect(await page.locator(imoveisPage.filtroTag).count()).toBe(0);
  });

  test('CT-002: Persistência em navegação interna', async ({ page, imoveisPage }) => {
    await imoveisPage.aplicarFiltro("Casa");

    await imoveisPage.abrirPropriedade();
    await page.goBack();

    await expect(page.locator('.filter-tag:has-text("Casa")')).toBeVisible();
  });

});
