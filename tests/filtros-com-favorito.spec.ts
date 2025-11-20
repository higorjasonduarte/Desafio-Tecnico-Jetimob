import { test, expect } from '@playwright/test';
import { login } from './login.helper';

test.describe('Filtros - Usuário com filtro favoritado', () => {

  test.beforeEach(async ({ page }) => {
    await login(page);
    await page.goto('/imoveis');
  });

  test('CT-005: Filtro favoritado aplicado automaticamente', async ({ page }) => {
    const favorito = await page.locator('.filter-tag').first().textContent();
    expect(favorito?.length).toBeGreaterThan(0);
  });

  test('CT-006: Favorito persiste na navegação interna', async ({ page }) => {
    const favoritoInicial = await page.locator('.filter-tag').first().textContent();

    await page.click('.property-card:first-child');
    await page.goBack();

    const favoritoDepois = await page.locator('.filter-tag').first().textContent();
    expect(favoritoDepois).toBe(favoritoInicial);
  });

  test('CT-007: Favorito persiste após F5', async ({ page }) => {
    const favoritoInicial = await page.locator('.filter-tag').first().textContent();
    
    await page.reload();

    const favoritoDepois = await page.locator('.filter-tag').first().textContent();
    expect(favoritoDepois).toBe(favoritoInicial);
  });

  test('CT-008: Filtros adicionais ao favorito persistem (navegação, F5, sair/voltar)', async ({ page }) => {
    await page.click('text=Cidade');
    await page.click('text=Porto Alegre');
    await page.click('text=Aplicar');

    await page.reload();
    const temporario = page.locator('.filter-tag:has-text("Porto Alegre")');
    await expect(temporario).toBeVisible();

    await page.click('text=Pessoas');
    await page.click('text=Imóveis');

    await expect(temporario).toBeVisible();
  });

});
