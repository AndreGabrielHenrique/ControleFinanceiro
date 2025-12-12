# Documentação do Projeto - Controle Financeiro

## Visão Geral

Aplicação front-end em React para gerenciamento de finanças pessoais/empresariais. Fornece uma grade de lançamentos, formulário para entrada de dados e um resumo dos valores.

## Tecnologias

- React
- JavaScript (ES6+)
- Yarn (gerenciador de pacotes)

## Estrutura de Pastas (resumo)

- `build/` - arquivos gerados pelo processo de build/produção.
- `public/` - arquivos estáticos servidos diretamente (index.html, icons, pictures).
- `src/` - código fonte da aplicação.
  - `App.js` - componente raiz.
  - `index.js` - ponto de entrada.
  - `components/` - componentes reutilizáveis:
    - `Form/` - formulário de entrada de transações.
    - `Grid/` - grid/listagem de registros.
    - `GridItem/` - item individual do grid.
    - `Header/` - cabeçalho da aplicação.
    - `Resume/` - área de resumo (saldos, totais).
    - `ResumeItem/` - item de resumo individual.
  - `styles/` - estilos globais (`global.js`).

## Componentes principais

- `Form` — gerencia a coleta de dados do usuário (valor, categoria, descrição, tipo).
- `Grid` e `GridItem` — exibem lançamentos em uma tabela/lista e permitem ações como remoção.
- `Resume` e `ResumeItem` — mostram totais e saldos calculados.
- `Header` — navegação superior/identificação do app.

## Scripts disponíveis

Instalação das dependências:

```bash
yarn
```

Executar em modo de desenvolvimento:

```bash
yarn start
```

Gerar build de produção:

```bash
yarn build
```

OBS: estes comandos assumem que o `package.json` está configurado com os scripts padrão (`start`, `build`).

## Como executar localmente

1. Clone o repositório.
2. Instale dependências com `yarn`.
3. Rode `yarn start` e acesse `http://localhost:3000` (configuração padrão do Create React App).

## Build e Deploy

- O comando `yarn build` produz os artefatos em `build/` prontos para deploy estático.
- Faça deploy dos arquivos de `build/` em um servidor estático (Netlify, Vercel, GitHub Pages, ou servidor próprio).

## Contribuição

- Abra issues para reportar bugs ou sugerir melhorias.
- Para contributions: fork, crie uma branch com sua feature/bugfix, e abra um pull request.

## Observações sobre commits

As alterações de documentação foram escritas em português conforme solicitado. Quando for commitar essas mudanças, use uma mensagem de commit em inglês (ex.: "docs: add Portuguese project documentation").

## Licença

Verifique se há um arquivo `LICENSE` no repositório; caso não exista, adicione a licença apropriada antes de distribuição.
