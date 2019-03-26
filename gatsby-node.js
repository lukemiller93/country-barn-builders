const path = require("path")
const { fmImagesToRelative } = require("gatsby-remark-relative-images")

exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node)
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const productTemplate = path.resolve(`src/templates/productTemplate.js`)
  const tagPage = path.resolve(`src/pages/specials.js`)
  const tagPosts = path.resolve(`src/templates/tag.js`)

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
              size
              style
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

    const products = result.data.allMarkdownRemark.edges

    //create tags page
    const productsByTag = {}

    products.forEach(({ node }) => {
      if (node.frontmatter.size) {
        if (!productsByTag[node.frontmatter.size]) {
          productsByTag[node.frontmatter.size] = []
        }
        productsByTag[node.frontmatter.size].push(node)
      }
    })

    const tags = Object.keys(productsByTag)

    createPage({
      path: "/specials",
      component: tagPage,
      context: {
        tags: tags.sort(),
      },
    })

    // create tags
    tags.forEach(tagName => {
      const taggedProducts = productsByTag[tagName]

      createPage({
        path: `/tags/${tagName}/`,
        component: tagPosts,
        context: {
          taggedProducts,
          tagName,
        },
      })
    })

    // create product pages
    products.forEach(({ node }, index) => {
      const prev = index === 0 ? null : products[index - 1].node
      const next =
        index === products.length - 1 ? null : products[index + 1].node
      createPage({
        path: `/specials/${node.frontmatter.serial}/`,
        component: productTemplate,
        context: {
          id: node.id,
          prev,
          next,
        }, // additional data can be passed via context
      })
    })
  })
}
