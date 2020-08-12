exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  deletePage(page)
  createPage({
    ...page,
    context: {
      ...page.context,
      locale: page.context.intl.language,
    },
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    query {
      allProjectsYaml {
        edges {
          node {
            slug
            gitName
          }
        }
      }
    }
  `)

  data.allProjectsYaml.edges.forEach(edge => {
    const slug = edge.node.slug
    const gitName = edge.node.gitName

    createPage({
      path: `/projects/${slug}`,
      component: require.resolve(
        "./src/components/templates/ProjectPost/index.js"
      ),
      context: { slug, gitName },
    })
  })
}

const path = require("path")
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@": path.resolve(__dirname, "src/"),
        components: path.resolve(__dirname, "src/components"),
        theme: path.resolve(__dirname, "src/theme"),
        icons: path.resolve(__dirname, "src/icons"),
        utils: path.resolve(__dirname, "src/utils"),
        atoms: path.resolve(__dirname, "src/components/atoms"),
        molecules: path.resolve(__dirname, "src/components/molecules"),
        organisms: path.resolve(__dirname, "src/components/organisms"),
        templates: path.resolve(__dirname, "src/components/templates"),
      },
    },
  })
}
