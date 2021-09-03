const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: 'CS 428 Jacob Diaz ',
    tagline: 'Virtual and Augmented Reality',
    url: 'https://jacobdiaz.github.io/428landing/',
    baseUrl: '/428landing/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'jacobdiaz', // Usually your GitHub org/user name.
    projectName: '428landing', // Usually your repo name.

    presets: [
      [
        '@docusaurus/preset-classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve('./sidebars.js'),
            // Please change this to your repo.
            editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
          },
          blog: {
            showReadingTime: true,
            // Please change this to your repo.
            editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/blog/',
          },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          title: '428 - Jacob Diaz',
          logo: {
            alt: 'My Site Logo',
            src: 'img/uic.png',
          },
          items: [
            {
              type: 'doc',
              docId: 'documentation',
              position: 'left',
              label: 'Documentation',
            },
            {
              href: 'https://github.com/jacobdiaz',
              label: 'GitHub',
              position: 'right',
            },
          ],
        },
        footer: {
          style: 'dark',
          links: [
            {
              title: 'Homework & Projects',
              items: [
                {
                  label: 'Documentation',
                  to: '/docs/documentation',
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} 428 - Jacob Diaz, Inc. Built with Docusaurus.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
  }
);
