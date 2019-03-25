const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const productTemplate = path.resolve(`src/templates/productTemplate.js`)

  return graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { template: { eq: "product" } } }
        limit: 1000
      ) {
        edges {
          node {
            id
            frontmatter {
              serial
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: `/specials/${node.frontmatter.serial}/`,
        component: productTemplate,
        context: {
          id: node.id,
        }, // additional data can be passed via context
      })
    })
  })
}
