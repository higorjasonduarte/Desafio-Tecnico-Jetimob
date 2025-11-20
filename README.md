# 📘 **Desafio Técnico – Automação de Testes | Jetimob – Módulo Imóveis**

Automação desenvolvida como parte do **Desafio Técnico de QA** da Jetimob.
O objetivo é validar o comportamento de **persistência de filtros** no módulo **/imoveis**, garantindo previsibilidade e consistência na experiência do usuário.

---

# 🧭 **Objetivo do Projeto**

Validar, por meio de testes automatizados em **Playwright**, as regras de:

* Carregamento inicial de filtros
* Persistência de filtros aplicados
* Persistência após recarregar a página
* Persistência ao navegar internamente
* Persistência ao sair e retornar ao módulo
* Comportamento com e sem filtros favoritados

---

# 🚀 **Tecnologias Utilizadas**

| Tecnologia     | Descrição                                       |
| -------------- | ----------------------------------------------- |
| **Playwright** | Framework de testes end-to-end rápido e moderno |
| **TypeScript** | Linguagem principal dos testes                  |
| **Node.js**    | Ambiente de execução                            |
| **GitHub**     | Versionamento e documentação                    |

---

# 📁 **Estrutura do Projeto**

```
playwright-imoveis-qa/
│
├── package.json
├── playwright.config.ts
├── README.md
│
└── tests/
    ├── login.helper.ts
    ├── filtros-sem-favorito.spec.ts
    └── filtros-com-favorito.spec.ts
```

---

# 🧪 **Escopo e Cobertura de Testes**

### 🔹 **Usuário sem filtro favoritado**

✔ Acesso inicial sem filtros
✔ Persistência em navegação interna
✔ Persistência após F5
✔ Persistência ao sair e retornar ao módulo

### 🔹 **Usuário com filtro favoritado**

✔ Favorito carregado automaticamente
✔ Persistência na navegação interna
✔ Persistência após F5
✔ Manutenção de filtros temporários adicionados ao favorito
✔ Persistência ao sair e retornar ao módulo

---

# 🔑 **Credenciais de Teste**

> Apenas para fins do desafio técnico:

```
Usuário:  usuario-teste-qa2@gmail.com
Senha:    desafiotecnico
```

---

# 🛠️ **Como Executar o Ambiente**

### 1️⃣ Instalar dependências

```bash
npm install
```

### 2️⃣ Instalar navegadores

```bash
npx playwright install
```

### 3️⃣ Rodar todos os testes

```bash
npm test
```

### 4️⃣ Rodar em modo UI (recomendado)

```bash
npx playwright test --ui
```

---

# 📂 **Principais Arquivos**

### 🔸 **playwright.config.ts**

* Configuração principal do Playwright
* Define browser, baseURL, vídeos e screenshots
* Timeout global e paralelismo

### 🔸 **login.helper.ts**

Função auxiliar que executa o login antes dos testes.

### 🔸 **filtros-sem-favorito.spec.ts**

Cobertura completa de um usuário sem filtro favoritado.

### 🔸 **filtros-com-favorito.spec.ts**

Validação do uso de filtro favoritado e seus estados derivados.

---

# 🚦 **Padronização de Branches**

Este projeto segue o padrão **Conventional Commits**.

Branch principal utilizada neste desafio:

```
feat/automacao-playwright-imoveis
```

---

# 🐞 **Erros Conhecidos / Observações**

* Dependendo da instabilidade do sistema, alguns elementos podem carregar lentamente — por isso foram incluídos `waitForURL` e seletores robustos.
* Caso o filtro favoritado não exista, o CT-005 poderá falhar. Ajuste conforme necessário.

---

# 📄 **Casos de Teste Manuais**

Os casos manuais utilizados estão disponíveis na documentação enviada no desafio, incluindo:

* CT-001 até CT-008
* Fluxos com usuário com e sem filtros favoritados
* Regras de persistência em diversos cenários

Se desejar, posso gerar um **PDF profissional desses casos**.

---

# 🤝 **Autor**

**Higor Jason**
QA Engineer – Automação | Testes Funcionais

---

Só pedir!
