import type * as Preset from '@docusaurus/preset-classic'
import type { Config } from '@docusaurus/types'
import { themes } from 'prism-react-renderer'
import { siteInfo } from './data/site'
import type { GiscusConfig } from './src/components/Comment'

const config: Config = {
  title: '東方夜宴',
  url: siteInfo.url,
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'kuizuo',
  projectName: 'blog',

  customFields: {
    bio: 'Sidere mens eadem mutato', // die to survive.
    description: '這世界不止眼前的苟且，還有詩和遠方。',
  },
  themeConfig: {
    // announcementBar: {
    //   id: 'announcementBar-3',
    //   content: ``,
    // },
    colorMode: {
      defaultMode: 'dark', // 預設為深色模式
      disableSwitch: true, // 設為 true 會隱藏導覽列右上角的日夜切換按鈕，強制全站只能用深色
      respectPrefersColorScheme: false, // 設為 false，避免被使用者的作業系統設定(如白天的淺色模式)覆蓋
    },
    image: 'img/og.png',
    metadata: [
      {
        name: 'author',
        content: '東方',
      },
      {
        name: 'keywords',
        content: 'GCP、Java、javascript、typescript、node、react、vue、web、MySQL、MEMSQL、Kafka、Pub/Sub、Spanner、BigQuery、SRE',
      },
      {
        name: 'keywords',
        content: '解決方案架構師、碼農、秒級/億級資料高可用系統、程序愛好者、AI協作、資料科學、資料分析、SA/SD、QA(單元/組件/終端/自動化)、编程爱好者, 架構逆向工程',
      },
    ],
    navbar: {
      logo: {
        alt: '東方',
        src: 'img/logo.webp',
        srcDark: 'img/logo.webp',
      },
      hideOnScroll: true,
      items: [
        { label: '部落格', position: 'right', to: 'blog' },
        { label: '项目', position: 'right', to: 'project' },
        { label: '朋友鏈結', position: 'right', to: 'friends' },
        { label: '關於', position: 'right', to: 'about' },

        {
          label: '更多',
          position: 'right',
          items: [
            { label: '封存', to: 'blog/archive' },
            { label: '影片', to: 'videos' },
            { label: '主题魔改', to: 'docs/docusaurus-guides' },
          ],
        },
        // {
        //   type: 'localeDropdown',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    /*
    algolia: {
      appId: 'GV6YN1ODMO',
      apiKey: '50303937b0e4630bec4a20a14e3b7872',
      indexName: 'kuizuo',
    },
    */
    prism: {
      theme: themes.oneLight,
      darkTheme: themes.oneDark,
      additionalLanguages: ['bash', 'json', 'java', 'python', 'php', 'graphql', 'rust', 'toml', 'protobuf', 'diff'],
      defaultLanguage: 'javascript',
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: { start: 'highlight-start', end: 'highlight-end' },
        },
        {
          className: 'code-block-error-line',
          line: 'This will error',
        },
      ],
    },
    /*
    giscus: {
      repo: 'kuizuo/blog',
      repoId: 'MDEwOlJlcG9zaXRvcnkzOTc2MjU2MTI=',
      category: 'General',
      categoryId: 'DIC_kwDOF7NJDM4CPK95',
      theme: 'light',
      darkTheme: 'dark_dimmed',
    }
    satisfies Partial<GiscusConfig>,
    */
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    liveCodeBlock: { playgroundPosition: 'top' },
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)',
      },
    },
  } satisfies Preset.ThemeConfig,
  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          sidebarPath: 'sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: ['./src/css/custom.css', './src/css/tweet-theme.css'],
        },
        sitemap: {
          priority: 0.5,
        },
        gtag: {
          trackingID: 'G-S4SD5NXWXF',
          anonymizeIP: true,
        },
        debug: process.env.NODE_ENV === 'development',
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    'docusaurus-plugin-image-zoom',
    '@docusaurus/plugin-ideal-image',
    [
      '@docusaurus/plugin-pwa',
      {
        debug: process.env.NODE_ENV === 'development',
        offlineModeActivationStrategies: ['appInstalled', 'standalone', 'queryString'],
        pwaHead: [
          { tagName: 'link', rel: 'icon', href: '/img/logo.png' },
          { tagName: 'link', rel: 'manifest', href: '/manifest.json' },
          { tagName: 'meta', name: 'theme-color', content: '#12affa' },
        ],
      },
    ],
    [
      'vercel-analytics',
      {
        debug: process.env.NODE_ENV === 'development',
        mode: 'auto',
      },
    ],
    [
      './src/plugin/plugin-content-blog', // 为了实现全局 blog 数据，必须改写 plugin-content-blog 插件
      {
        path: 'blog',
        /*
        editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
          `https://github.com/kuizuo/blog/edit/main/${blogDirPath}/${blogPath}`,
        */
        editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
          `https://github.com/EastLu/eastlu.github.io/tree/main/${blogDirPath}/${blogPath}`,
        editLocalizedFiles: false,
        blogDescription: '這世界不止眼前的苟且，還有詩和遠方。',
        blogSidebarCount: 12,
        blogSidebarTitle: '個人知識庫分享',
        postsPerPage: 18,
        showReadingTime: true,
        readingTime: ({ content, frontMatter, defaultReadingTime }) =>
          defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
        feedOptions: {
          type: 'all',
          title: '東方',
          // description: 'feedId:41215011978385457+userId:41840354283324416',
          description: '',
          copyright: `Copyright © ${new Date().getFullYear()} 東方 Built with Docusaurus.`,
        },
      },
    ],
    async function tailwindcssPlugin() {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require('@tailwindcss/postcss'))
          return postcssOptions
        },
      }
    },
    async function injectMotto() {
      return {
        name: 'docusaurus-motto',
        injectHtmlTags() {
          return {
            headTags: [
              {
                tagName: 'script',
                innerHTML: `
    (${function () {
      console.log(
        `%c Kz Blog %c https://github.com/kuizuo/blog`,
        'color: #fff; margin: 1em 0; padding: 5px 0; background: #12affa;',
        'margin: 1em 0; padding: 5px 0; background: #efefef;',
      )

      const motto = `
This Webisite Powered By Kz Blog.
Written by Docusaurus, Coding with Love.
--------
Love what you do and do what you love.
`

      if (document.firstChild?.nodeType !== Node.COMMENT_NODE) {
        document.prepend(document.createComment(motto))
      }
    }.toString()})();`,
              },
            ],
          }
        },
      }
    },
  ],
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'description',
        content: '東方的個人部落格',
      },
    },
  ],
  storage: {
    type: 'localStorage',
    namespace: true,
  },
  stylesheets: [
    'https://cdn.jsdelivr.net/npm/misans@4.0.0/lib/Normal/MiSans-Normal.min.css',
    'https://cdn.jsdelivr.net/npm/misans@4.0.0/lib/Normal/MiSans-Medium.min.css',
    'https://cdn.jsdelivr.net/npm/misans@4.0.0/lib/Normal/MiSans-Semibold.min.css',
  ],
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN'],
  },
  onBrokenLinks: 'warn',
  future: {
    v4: {
      removeLegacyPostBuildHeadAttribute: true,
      useCssCascadeLayers: false,
      siteStorageNamespacing: true,
      fasterByDefault: true,
      mdx1CompatDisabledByDefault: true,
    },
    faster: {
      ssgWorkerThreads: true,
      rspackBundler: true,
      rspackPersistentCache: true,
      gitEagerVcs: true,
    },
  },
}

export default config
