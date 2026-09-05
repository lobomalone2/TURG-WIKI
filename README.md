# TURG Wiki — Acervo Digital

Wiki estática, leve e mobile-first do **Templo de Umbanda Caboclo Rompe Mato e Pai
Guiné (TURG)**, construída com [Astro](https://astro.build) + [Starlight](https://starlight.astro.build)
e busca instantânea via **Pagefind** (nativa no Starlight).

Este projeto implementa integralmente o documento *"Planejamento do Projeto: TURG Wiki"*.

## 🧱 Stack

- **Astro + Starlight** — geração estática (SSG), mobile-first.
- **Markdown / MDX** — todo o conteúdo em `src/content/docs/`.
- **Pagefind** — busca instantânea, embutida na build, sem API externa.
- **CSS custom** — paleta pergaminho/terrosa da identidade visual do TURG.

## 🚀 Como rodar localmente

Pré-requisitos: [Node.js](https://nodejs.org) 18+ instalado.

```bash
# 1. Instalar as dependências
npm install

# 2. Rodar em modo desenvolvimento (http://localhost:4321)
npm run dev

# 3. Gerar o build de produção (site estático em /dist)
npm run build

# 4. Pré-visualizar o build de produção
npm run preview
```

## ✍️ Como adicionar/editar um artigo

Todo artigo é um arquivo `.md` ou `.mdx` dentro de `src/content/docs/`, organizado nas
pastas:

- `orixas/` — artigos de Orixás.
- `entidades/caboclos/` e `entidades/pretos-velhos/` — linhas de entidades.
- `ervas-e-banhos/` — ervas, banhos e seus preparos.
- `rituais-e-doutrina/` — fundamentos da casa.

Cada arquivo deve começar com o frontmatter padrão:

```md
---
title: "Nome do Artigo"
description: "Resumo curto para SEO e busca."
sidebar:
  order: 1
---

# Conteúdo em Markdown normal...
```

Basta salvar o arquivo na pasta correta — o menu lateral e a busca são atualizados
automaticamente no próximo build (`autogenerate` no `astro.config.mjs`).

### Usando os componentes visuais

**Badge** (classificação de ervas quente/morna/fria) — em arquivos `.mdx`:

```mdx
import Badge from '../../../components/Badge.astro';

<Badge tipo="quente" />
```

**Callout** (destaques de fundamento/doutrina) — em arquivos `.mdx`:

```mdx
import Callout from '../../../components/Callout.astro';

<Callout titulo="Fundamento" icone="🕯️">
  Texto do destaque aqui.
</Callout>
```

**Avisos nativos do Starlight** (funcionam em `.md` e `.mdx`, sem import):

```md
:::caution[Aviso Importante]
Texto do aviso.
:::

:::tip[Dica]
Texto da dica.
:::

:::note
Texto da nota.
:::
```

## 🎨 Identidade visual

A paleta de cores e as fontes (Cinzel/Cormorant Garamond para títulos, Inter/Source
Sans 3 para o corpo do texto) estão centralizadas em
`src/assets/styles/custom.css`. Para trocar a logomarca oficial, substitua o arquivo
`src/assets/logo-turg.png` (atualmente um placeholder) pela arte definitiva.

## 🔍 Busca

A busca é feita pelo **Pagefind**, já habilitado por padrão pelo Starlight e indexada
automaticamente a cada `npm run build`. A barra de busca aparece em destaque no topo da
tela (`src/components/Header.astro`), conforme a diretriz de UI/UX do planejamento.

## ☁️ Deploy (custo zero)

O projeto está pronto para deploy em qualquer host de sites estáticos:

- **Vercel:** importe o repositório em [vercel.com/new](https://vercel.com/new) — o
  preset "Astro" é detectado automaticamente.
- **Netlify:** `npm run build`, publish directory `dist/`.
- **GitHub Pages:** ajuste `site` e `base` em `astro.config.mjs` para o domínio do
  GitHub Pages e use a Action oficial `withastro/action`.

Qualquer `git push` no repositório conectado dispara um novo deploy automático.

## 📂 Estrutura de pastas

```
turg-wiki/
├── public/
│   ├── favicon.png
│   └── images/
├── src/
│   ├── assets/
│   │   ├── logo-turg.png
│   │   └── styles/custom.css
│   ├── components/
│   │   ├── Badge.astro
│   │   ├── Callout.astro
│   │   └── Header.astro
│   └── content/
│       └── docs/
│           ├── index.mdx
│           ├── orixas/
│           ├── entidades/
│           ├── ervas-e-banhos/
│           └── rituais-e-doutrina/
├── astro.config.mjs
├── package.json
└── tsconfig.json
```
# TURG-WIKI
