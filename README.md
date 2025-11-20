# 📘 **Automação QA – Módulo Imóveis | Jetimob**

Automação desenvolvida como parte do **Desafio Técnico de QA da Jetimob**, para validar **persistência e comportamento de filtros** no módulo **/imoveis**.

---

## 🧭 Objetivo

Garantir que o módulo **/imoveis**:

* Carrega corretamente filtros favoritados
* Mantém persistência de filtros aplicados em navegação interna
* Mantém filtros após recarregar a página (F5)
* Mantém filtros após sair e voltar ao módulo
* Funciona corretamente para usuários com e sem filtros favoritados

---

## 🛠️ Tecnologias

| Tecnologia         | Descrição                      |
| ------------------ | ------------------------------ |
| **Playwright**     | Framework de testes end-to-end |
| **TypeScript**     | Linguagem principal            |
| **Node.js**        | Ambiente de execução           |
| **Allure**         | Relatórios de testes           |
| **GitHub Actions** | CI/CD pipeline                 |

---

## 📁 Estrutura do Projeto

```
playwright-imoveis-qa/
│
├── package.json
├── playwright.config.ts
├── .env
├── .gitignore
├── README.md
│
├── configs/
│   └── environment.ts
│
├── helpers/
│   └── test-fixtures.ts
│
├── pages/
│   ├── login.page.ts
│   └── imoveis.page.ts
│
└── tests/
    ├── filtros/
    │   ├── filtros-sem-favorito.spec.ts
    │   └── filtros-com-favorito.spec.ts
    └── smoke/
        └── login-smoke.spec.ts
```

---

## 🔑 Variáveis de Ambiente (.env)

```
TEST_EMAIL=XXXXXXXX
TEST_PASSWORD=XXXXXXXX
ENVIRONMENT=prod
BASE_URL=https://app.jetimob.com
```

> Essas variáveis permitem rodar testes sem expor credenciais no código.

---

## 🚀 Como Executar

### Instalar dependências

```bash
npm install
npx playwright install
```

### Rodar testes

* Todos os testes:

```bash
npm test
```

* Modo UI:

```bash
npm run test:ui
```

* Headless (CI/CD):

```bash
npm run test:headless
```

* Gerar relatório Allure:

```bash
npm run report
```

---

## 🧪 Cobertura de Testes

### Usuário sem filtro favoritado

* CT-001: Nenhum filtro aplicado ao entrar
* CT-002: Persistência na navegação interna
* CT-003: Persistência após F5
* CT-004: Persistência ao sair e voltar ao módulo

### Usuário com filtro favoritado

* CT-005: Filtro favoritado aplicado automaticamente
* CT-006: Persistência na navegação interna
* CT-007: Persistência após F5
* CT-008: Filtros temporários adicionados ao favorito persistem em todos os cenários

---

## 🏗️ Arquitetura do Projeto

* **POM (Page Object Model)**: `pages/`
* **Fixtures customizadas**: `helpers/test-fixtures.ts`
* **Configuração multi-browser**: Chromium, Firefox e Webkit
* **Relatórios**: Allure
* **CI/CD**: GitHub Actions (`.github/workflows/playwright.yml`)

---

## 🔄 Git Branching

Branch principal do projeto:

```
feat/automacao-playwright-imoveis
```

Seguindo **Conventional Commits**.

---

## 📂 CI/CD – GitHub Actions

* Rodar testes headless em múltiplos navegadores
* Carregar credenciais via secrets (`TEST_EMAIL` e `TEST_PASSWORD`)
* Gerar relatórios Allure automaticamente

---

## 👤 Autor

**Higor Jason** – QA Engineer | Automação & Testes Funcionais

---
