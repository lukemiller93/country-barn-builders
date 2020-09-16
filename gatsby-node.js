const path = require("path")
const _ = require("lodash")
const { fmImagesToRelative } = require("gatsby-remark-relative-images")

exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node)
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      template: String
      date: Date
      size: String
      style: String
      serial: String
      price: Int
      options: String
      gallery_image: [ImageGallery]
    }
    type ImageGallery {
      alt_text: String
      gallery_item: File
    }
  `
  createTypes(typeDefs)
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const productTemplate = path.resolve(`src/templates/productTemplate.js`)
  const tagPage = path.resolve(`src/templates/specials.js`)
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
              serial
              style
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

    if (products.length >= 1) {
      // create product pages
      products.forEach(({ node }, index) => {
        const prev =
          index === 0
            ? products[products.length - 1].node
            : products[index - 1].node
        const next =
          index === products.length - 1
            ? products[0].node
            : products[index + 1].node
        createPage({
          path: `/specials/${node.frontmatter.serial}`,
          component: productTemplate,
          context: {
            id: node.id,
            prev,
            next,
          }, // additional data can be passed via context
        })
      })

      // Tag pages:
      let tags = []
      // Iterate through each product, putting all found sizes into `tags`
      _.each(products, edge => {
        if (_.get(edge, "node.frontmatter.size")) {
          tags = tags.concat(edge.node.frontmatter.size)
        }
      })
      // Eliminate duplicate tags
      tags = _.uniq(tags)
      // Make tag pages
      tags.forEach(tag => {
        createPage({
          path: `/tags/${tag}`,
          component: tagPosts,
          context: {
            tag,
          },
        })
      })
    }
  })
}
