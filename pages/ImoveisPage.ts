import { Page } from '@playwright/test';

export class ImoveisPage {
  constructor(private page: Page) {}

  filtroTag = '.filter-tag';
  primeiraPropriedade = '.property-card:first-child';

  async open() {
    await this.page.goto('/imoveis');
  }

  async aplicarFiltro(tipo: string) {
    await this.page.click(`text=${tipo}`);
    await this.page.click(`text=${tipo}`);
    await this.page.click('text=Aplicar');
  }

  async abrirPropriedade() {
    await this.page.click(this.primeiraPropriedade);
  }
}
