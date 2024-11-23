// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer").themes.github;
const darkCodeTheme = require("prism-react-renderer").themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  future: {
    experimental_faster: true,
  },
  title: "Technical KB",
  tagline: "Internal technical knowledge base for Enfinity",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://enfinity-solutions.pages.internal.enfinity.com.hk/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/internal/technical-kb/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://gitlab.internal.enfinity.com.hk/enfinity-solutions/internal/technical-kb/-/tree/main/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Technical KB",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          { to: "/docs/category/gitlab", label: "GitLab", position: "left" },
          { to: "/docs/category/cloud", label: "Cloud", position: "left" },
          {
            to: "/docs/category/kubernetes",
            label: "Kubernetes",
            position: "left",
          },
          {
            to: "/docs/category/openshift",
            label: "OpenShift",
            position: "left",
          },
          {
            to: "/docs/category/rancher",
            label: "Rancher",
            position: "left",
          },
          {
            to: "/docs/category/daocloud",
            label: "DaoCloud",
            position: "left",
          },
          {
            to: "/docs/category/on-premises-infra",
            label: "On-Premises Infra",
            position: "left",
          },
          { to: "/docs/category/veeam", label: "Veeam", position: "left" },
          { to: "/docs/category/netapp", label: "NetApp", position: "left" },
          { to: "/docs/category/aiml", label: "AI/ML", position: "left" },
          { to: "/docs/category/proxmox", label: "Proxmox", position: "left" },
          {
            href: "https://gitlab.internal.enfinity.com.hk/enfinity-solutions/internal/technical-kb",
            label: "GitLab",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "GitLab",
                to: "/docs/category/gitlab",
              },
              {
                label: "Cloud",
                to: "/docs/category/cloud",
              },
              {
                label: "Kubernetes",
                to: "/docs/category/kubernetes",
              },
              {
                label: "OpenShift",
                to: "/docs/category/openshift",
              },
              {
                label: "Rancher",
                to: "/docs/category/rancher",
              },
              {
                label: "DaoCloud",
                to: "/docs/category/daocloud",
              },
              {
                label: "On-Premises Infra",
                to: "/docs/category/on-premises-infra",
              },
              {
                label: "Veeam",
                to: "/docs/category/veeam",
              },
              {
                label: "NetApp",
                to: "/docs/category/netapp",
              },
              {
                label: "AI/ML",
                to: "/docs/category/aiml",
              },
              {
                label: "Proxmox",
                to: "/docs/category/proxmox",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitLab",
                href: "https://gitlab.internal.enfinity.com.hk/enfinity-solutions/internal/technical-kb",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Enfinity Solutions Limited. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
