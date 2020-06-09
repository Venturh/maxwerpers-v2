require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
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
    `gatsby-plugin-netlify`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Portfolio Max Werpers`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg`,
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`de`, `en`, `fr`],
        defaultLanguage: `de`,
        redirect: false,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `navigation`,
        path: `./src/data/navigation.json`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `skills`,
        path: `./src/data/skills.json`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `experience`,
        path: `./src/data/experience.json`,
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
      resolve: `gatsby-source-github-api`,
      options: {
        token: process.env.GATSBY_GITHUB_TOKEN,
        variables: {},
        graphQLQuery: `
          query {
            user(login: "Venturh") {
              pinnedItems(first: 6, types: REPOSITORY) {
                nodes {
                  ... on Repository {
                    url
                    nameWithOwner
                    description
                    homepageUrl
                    primaryLanguage {
                      name
                      color
                    }
                    stargazers{
                      totalCount
                    }
                  }
                }
              }
            }
          }
          `,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Open Sans`,
            variants: [`400`, `700`],
          },
          {
            family: `Poppins`,
            variants: [`100`, `400`, `500`, `600`, `700`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: process.env.GATSBY_GA_TOKEN,
          cookieName: "gatsby-gdpr-google-analytics",
          anonymize: true, // default
        },
      },
    },
  ],
}
