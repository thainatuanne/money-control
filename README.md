# 💸 Controle Financeiro com Redux

Este projeto é uma aplicação de controle de finanças pessoais desenvolvida com **React**, **TypeScript** e **Redux Toolkit**. A proposta é permitir que o usuário registre suas entradas e saídas financeiras, visualize o histórico e acompanhe o saldo atualizado em tempo real.

---

## 📌 Objetivo da Aplicação

Oferecer uma forma simples e prática para o controle de transações financeiras pessoais, com foco em usabilidade e organização de estado utilizando Redux.

---

## ✅ Funcionalidades

- **📥 Registro de Transações:**  
  O usuário pode cadastrar transações de entrada ou saída, informando descrição e valor.

- **📋 Listagem de Transações:**  
  As transações são exibidas em listas separadas (entradas e saídas), com detalhes de cada uma.

- **💰 Cálculo Automático de Saldo:**  
  O sistema calcula e exibe o saldo atual com base nas transações cadastradas.

- **🔁 Gerenciamento Global de Estado:**  
  Redux Toolkit é utilizado para centralizar e controlar as transações e o saldo em tempo real.

---

## ⚙️ Tecnologias Utilizadas

- React
- TypeScript
- Redux Toolkit
- Vite
- Styled Components

---

## 📁 Estrutura do Projeto

```bash
controle-financeiro-redux/
├── public/
├── src/
│   ├── features/
│   │   ├── TransactionForm.tsx
│   │   ├── TransactionForm.styles.ts
│   │   ├── TransactionList.tsx
│   │   ├── TransactionList.styles.ts
│   │   └── transactionsSlice.ts
│   ├── pages/
│   │   ├── Home.tsx
│   │   └── styles.ts
│   ├── routes/
│   │   └── AppRoutes.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── store.ts
├── package.json
└── vite.config.ts
```
## ▶️ Como Rodar o Projeto

Siga os passos abaixo para instalar e executar a aplicação localmente:

---

## ▶️ Como Rodar o Projeto

Siga os passos abaixo para instalar e executar a aplicação localmente:

### 1. Clone o repositório

```bash
git clone https://github.com/thainatuanne/money-control.git
```

### 2. Acesse a pasta do projeto

```bash
cd money-control
```

### 3. Instale as dependências

```bash
npm install
```

Ou, se estiver usando yarn:

```bash
yarn
```

### 4. Inicie a aplicação

```bash
npm run dev
```

---
