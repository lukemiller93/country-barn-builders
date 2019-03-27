import { graphql } from "gatsby"
import React from "react"
import { Layout , ContentWrapper} from "../layouts"
const Locations = ({ data }) => {
  return (
    <Layout>
      <ContentWrapper>
        <h1>Locations</h1>
        <h2>Hello</h2>
        <p>this is the locations page</p>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <h3 key={node.id}>{node.frontmatter.title}</h3>
        ))}
      </ContentWrapper>
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
