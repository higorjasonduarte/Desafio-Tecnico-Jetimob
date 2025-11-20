import { test, expect } from '@playwright/test';
import { login } from './login.helper';

test.describe('Filtros - Usuário sem filtro favoritado', () => {

  test.beforeEach(async ({ page }) => {
    await login(page);
    await page.goto('/imoveis');
  });

  test('CT-001: Nenhum filtro deve estar aplicado ao acessar /imoveis', async ({ page }) => {
    const filtrosAtivos = await page.locator('.filter-tag').count();
    expect(filtrosAtivos).toBe(0);
  });

  test('CT-002: Filtros persistem na navegação interna', async ({ page }) => {
    await page.click('text=Tipo');
    await page.click('text=Casa');
    await page.click('text=Aplicar');

    await page.click('.property-card:first-child');
    await page.goBack();

    const filtros = await page.locator('.filter-tag:has-text("Casa")').count();
    expect(filtros).toBe(1);
  });

  test('CT-003: Filtros persistem após F5', async ({ page }) => {
    await page.click('text=Tipo');
    await page.click('text=Apartamento');
    await page.click('text=Aplicar');

    await page.reload();

    const filtros = await page.locator('.filter-tag:has-text("Apartamento")').count();
    expect(filtros).toBe(1);
  });

  test('CT-004: Filtros persistem ao sair e voltar ao módulo', async ({ page }) => {
    await page.click('text=Tipo');
    await page.click('text=Casa');
    await page.click('text=Aplicar');

    await page.click('text=Pessoas');
    await page.click('text=Imóveis');

    const filtros = await page.locator('.filter-tag:has-text("Casa")').count();
    expect(filtros).toBe(1);
  });

});
