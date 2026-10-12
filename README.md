# Econverse Front-End Test

Projeto em Next.js com TypeScript e Sass para montar uma vitrine de produtos seguindo o desafio da Econverse.

## Requisitos

Tenha o Node.js e o npm instalados.

## Como rodar localmente

Os comandos devem ser executados na pasta `teste-front-end-ramon`, onde está o `package.json`:

```bash
cd teste-front-end-ramon
```

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

3. Abra no navegador:
   ```bash
   http://localhost:3000
   ```

## Scripts disponíveis

- `npm run dev` — inicia em modo de desenvolvimento
- `npm run build` — compila a aplicação para produção
- `npm run start` — inicia a aplicação compilada (execute `npm run build` antes)
- `npm run lint` — verifica o código com ESLint

## Observações

- A página busca os produtos no [JSON da Econverse](https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json). Se a consulta falhar ou não retornar produtos, exibe uma lista local de produtos de exemplo.
- Clicar em um produto abre um modal com seus detalhes; ele pode ser fechado pelo botão, clicando fora ou pressionando `Esc`.
- A estilização foi feita com módulos Sass (`.module.scss`).
- O layout se adapta a telas menores, reorganizando as categorias e permitindo rolagem horizontal nos menus e na vitrine de produtos.
