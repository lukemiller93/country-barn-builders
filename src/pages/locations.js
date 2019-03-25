import React from "react"
import { Layout } from "../layouts"
import { graphql } from "gatsby"
import Image from "gatsby-image"

const Locations = ({ data }) => {
  return (
    <Layout>
      <h1>Locations</h1>
      <p>this is the locations page</p>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <h3>{node.frontmatter.title}</h3>
      ))}
    </Layout>
  )
}

export default Locations

export const locationsQuery = graphql`
  query locations {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            cover {
              alt_text
              feature_image
            }
            locationTemplate
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
