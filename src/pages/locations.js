import { graphql } from "gatsby"
import React from "react"
import { Layout } from "../layouts"
const Locations = ({ data }) => {
  return (
    <Layout>
      <h1>Locations</h1>
      <p>this is the locations page</p>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <h3 key={node.id}>{node.frontmatter.title}</h3>
      ))}
    </Layout>
  )
}

export default Locations

export const locationsQuery = graphql`
  query locations {
    allMarkdownRemark(
      filter: { frontmatter: { template: { eq: "location" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            cover {
              alt_text
              feature_image {
                id
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            address {
              city
              post_code
              state
              street
            }
            phone
            business_hours {
              day
              hours
            }
          }
        }
      }
    }
  }
`
