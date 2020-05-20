module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`de`, `en`],
        defaultLanguage: `de`,
        redirect: false,
      },
    },
    {
      resolve: `gatsby-source-prismic-graphql`,
      options: {
        repositoryName: "mwportfolio",
        omitPrismicScript: true,
        accessToken:
          "MC5Yck1jR3hBQUFDRUFsczd4.I3Lvv73vv71MaO-_ve-_ve-_vXXvv70077-9I0U3M1vvv70O77-977-9Q--_ve-_ve-_vW95UO-_vXwR",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /icons/,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-smoothscroll`,
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
      resolve: `gatsby-source-github-api`,
      options: {
        token: "69c9cd01b3b0f99871a770939ef2ec8b5dba6b4d",
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
  ],
}
