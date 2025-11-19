import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Sales Wiki',
  tagline: 'The canonical, open-source glossary for Sales Capacity & Performance',
  favicon: 'img/Modus-icon-logo-wiki.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://wiki.himodus.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'your-org', // Usually your GitHub org/user name.
  projectName: 'sales-wiki', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/mod-us/Wiki/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        docsRouteBasePath: '/docs',
        // Show full words in search results, not just matched characters
        searchResultLimits: 8,
        searchResultContextMaxLength: 50,
        // Improves relevance - shows complete terms
        ignoreFiles: [],
        // Removes the highlight from search bar input
        removeDefaultStemmer: false,
      },
    ],
  ],

  headTags: [
    {
      tagName: 'script',
      attributes: {
        async: 'true',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-VBTXZT2QJ9',
      },
    },
  ],

  scripts: [
    '/js/gtag.js',
  ],

  themeConfig: {
    // Social card for link previews (Twitter, Slack, etc.)
    image: 'img/Modus-logo-for-wiki.png',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Sales Knowledge Base HQ',
      logo: {
        alt: 'Modus Logo',
        src: 'img/Modus Logo Final.png',
        height: 32,
      },
      items: [
        {
          to: '/docs/intro',
          label: 'Glossary',
          position: 'left'
        },
        // {
        //   to: '/benchmark-qa',
        //   label: 'Benchmark Q&A',
        //   position: 'left'
        // },
        // {
        //   href: '#contribute',
        //   label: 'Contribute',
        //   position: 'left'
        // },
      ],
    },
    footer: {
      style: 'light',
      links: [],
      copyright: `© ${new Date().getFullYear()} People OS, Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
