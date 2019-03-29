import { graphql, Link } from "gatsby"
import React from "react"
import { Layout } from "../layouts"

const specialsPage = ({ data, pageContext }) => {
  const  {tags}  = pageContext
  const specials = data.allMarkdownRemark.edges
  console.log(tags)
  return (
    <Layout>
      <ul>
        {tags.map((tagName, index) => {
          console.table(tagName, index)
          return (
            <li key={index}>
              <Link to={`/tags/${tagName}`}>{tagName}</Link>
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
