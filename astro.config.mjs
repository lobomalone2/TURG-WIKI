import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://turg-wiki.example.com',
  integrations: [
    starlight({
      title: 'TURG Wiki',
      description:
        'Acervo digital do Templo de Umbanda Caboclo Rompe Mato e Pai Guiné — Orixás, Entidades, Ervas, Banhos, Rituais e Doutrina.',
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'Português',
          lang: 'pt-BR',
        },
      },
      logo: {
        src: './src/assets/logo-turg.png',
        replacesTitle: false,
      },
      favicon: '/favicon.png',
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
        // Sobrescreve o cabeçalho padrão do Starlight pelo Header customizado do TURG
        Header: './src/components/Header.astro',
      },
    }),
  ],
});