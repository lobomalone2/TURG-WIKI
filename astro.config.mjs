import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://ludi-de-nana.example.com',
  integrations: [
    starlight({
      title: 'Ludi de Nanã',
      description:
        'Acervo digital de Ludi de Nanã — Orixás, Entidades, Ervas, Banhos, Rituais e Doutrina.',
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'Português',
          lang: 'pt-BR',
        },
      },
      logo: {
        src: './src/assets/logo-ludi.svg',
        replacesTitle: false,
      },
      favicon: '/favicon.svg',
      customCss: ['./src/assets/styles/custom.css'],
      // Pagefind já vem habilitado nativamente pelo Starlight (pesquisa=true por padrão)
      pagefind: true,
      social: {
        // Ex: github: 'https://github.com/seu-usuario/turg-wiki',
      },
      sidebar: [
        {
          label: 'Início',
          link: '/',
        },
        {
          label: 'Orixás',
          autogenerate: { directory: 'orixas' },
        },
        {
          label: 'Entidades',
          items: [
            {
              label: 'Caboclos',
              autogenerate: { directory: 'entidades/caboclos' },
            },
            {
              label: 'Pretos-Velhos',
              autogenerate: { directory: 'entidades/pretos-velhos' },
            },
          ],
        },
        {
          label: 'Ervas e Banhos',
          autogenerate: { directory: 'ervas-e-banhos' },
        },
        {
          label: 'Rituais e Doutrina',
          autogenerate: { directory: 'rituais-e-doutrina' },
        },
        {
          label: 'Pontos Cantados',
          autogenerate: { directory: 'pontos' },
        },
      ],
      components: {
        // Sobrescreve o cabeçalho padrão pelo Header customizado de Ludi de Nanã
        Header: './src/components/Header.astro',
        // Desativa o seletor de tema e força o modo escuro permanente
        ThemeSelect: './src/components/ThemeSelect.astro',
        ThemeProvider: './src/components/ThemeProvider.astro',
      },
    }),
  ],
});