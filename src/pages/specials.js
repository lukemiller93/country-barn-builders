import { graphql, Link } from "gatsby"
import React from "react"
import { Layout } from "../layouts"

const specialsPage = ({ data, pageContext }) => {
  const specials = data.allMarkdownRemark.edges
  console.log(data.tags)
  const tags = data.tags.group
  return (
    <Layout>
      <ul>
        {tags.map((tag, index) => {
          const {fieldValue, totalCount} = tag
          return (
            <li key={index}>
              <Link to={`/tags/${fieldValue}/`}>{fieldValue}</Link>
            </li>
          )
        })}
      </ul>
      
      {specials.map(({ node }) => {
        const { size, serial, style } = node.frontmatter
        return (
          <h1 key={node.id}>
            {size} {serial} {style}
          </h1>
        )
      })}
    </Layout>
  )
}

export default specialsPage
export const allSpecialsQuery = graphql`
  query allSpecials {
    tags: allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { template: { eq: "product" } } }
    ) {
      group(field: frontmatter___size) {
        fieldValue
        totalCount
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___size], order: ASC }
      filter: { frontmatter: { template: { eq: "product" } } }
      limit: 1000
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            serial
            size
            style
          }
        }
      }
    }
  }
`
