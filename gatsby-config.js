require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const fetch = require(`node-fetch`)
const { createHttpLink } = require(`apollo-link-http`)
module.exports = {
  siteMetadata: {
    title: `Portfolio Max Werpers`,
    description: `Wilkommen auf meinem persönlichen Portfolio. Hier stelle ich meine aktuellsten Projekte und Erfahrungen aus.`,
    author: `@venturh`,
    keywords: "Werpers",
    lan: "de",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-yaml`,
    `gatsby-plugin-netlify`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Portfolio Max Werpers`,
        start_url: `/`,
        background_color: "#292929",
        theme_color: "#85EEA7",
        icon: `src/images/logo.png`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`de`, `en`, `fr`],
        defaultLanguage: `de`,
        redirect: true,
      },
    },

    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Open Sans`,
            variants: [`100`, `400`, `500`, `600`, `700`],
          },
          {
            family: `Quicksand`,
            variants: [`100`, `400`, `500`, `600`, `700`],
          },
        ],
      },
    },

    {
      resolve: `gatsby-source-graphql`,
      options: {
        fieldName: `github`,
        typeName: `GitHub`,
        createLink: () =>
          createHttpLink({
            uri: `https://api.github.com/graphql`,
            headers: {
              Authorization: `bearer ${process.env.GATSBY_GITHUB_TOKEN}`,
            },
            fetch,
          }),
      },
    },
  ],
}
