# 🧪 Projeto de Testes Automatizados com Cypress - Alura

Este repositório contém os testes automatizados desenvolvidos durante o curso **"Cypress: automação de testes E2E"** da [Alura](https://www.alura.com.br/), plataforma de ensino de tecnologia.

## 🚀 Sobre o Projeto

O objetivo do projeto é aplicar testes automatizados de ponta a ponta (E2E) utilizando o framework **Cypress**, com foco em aplicações web. Durante o curso, foram abordados desde os primeiros passos com a ferramenta até a criação de cenários de teste mais completos e robustos.

A aplicação testada simula um ambiente realista e dinâmico, com funcionalidades interativas, validações de formulários e navegação entre páginas — ideal para consolidar o aprendizado prático de automação de testes.

## 🛠️ Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/) (v10 ou superior)
- JavaScript
- Node.js
- Mocha (estruturas de testes e hooks)
- Chai (assertions)
- Visual Studio Code

## 📚 Habilidades Desenvolvidas

- Configuração do ambiente com Cypress
- Escrita de testes automatizados para aplicações web
- Interação com elementos da DOM
- Uso de seletores (CSS, data-* attributes)
- Utilização de comandos como `cy.get()`, `cy.contains()`, `cy.visit()` e `cy.intercept()`
- Criação de testes com pré-condições e verificação de comportamentos esperados
- Práticas de organização e manutenção de código de testes

## 📂 Estrutura do Projeto

│ ├── cypress/ 
│ ├── downloads/ # Arquivos baixados durante os testes 
│ ├── e2e/ # Casos de teste E2E 
│ ├── fixtures/ # Arquivos de dados mockados para testes 
│ ├── results/ # Relatórios de execução (pode variar por ferramenta usada) 
│ ├── screenshots/ # Capturas de tela em caso de falha nos testes 
│ ├── support/ # Comandos customizados e configuração global 
│ └── videos/ # Gravações em vídeo dos testes (modo headless) 
├── elements/ # (Opcional) Elementos ou seletores reutilizáveis 
├── cypress.config.js # Arquivo principal de configuração do Cypress 
├── cypress.env.json # Variáveis de ambiente (como URLs e credenciais) 
├── package.json # Dependências e scripts do projeto 
├── package-lock.json # Controle de versões das dependências 
├── .gitignore # Arquivos e pastas ignoradas pelo Git 
├── venv # Ambiente virtual para isolar as dependências do projeto
└── README.md # Documentação do projeto


## ▶️ Como Executar

1. Clone o repositório:

```bash
git clone https://github.com/JessyLeal/cypress-course.git
cd cypress-course
```

2. Instalar as dependências:
```bash
npm install
```

3. Execute os testes em modo interativo (UI):
```bash
npx cypress open
```

3. Execute os testes em modo headless:
```bash
npx cypress run
```