import { graphql } from "gatsby"
import React from "react"
import styled from "@emotion/styled"
import { Layout, ContentWrapper } from "../layouts"
import ProductCard from "../components/ProductCard"
import { ProductSection } from "../styles/ProductSection"
import { TagWrapper } from "../styles/TagWrapper"
import AllTags from "../components/AllTags"

const Header = styled.section`
  margin: 1rem 0;
`
const specialsPage = ({ data, location }) => {
  const specials = data.allMarkdownRemark.edges
  return (
    <Layout>
      <Header>
        <ContentWrapper>
          <h1>Specials</h1>
        </ContentWrapper>
        <TagWrapper>
          <ContentWrapper>
            <h3>Filter by Size</h3>
            <div className="tags__container">
              <AllTags />
            </div>
          </ContentWrapper>
        </TagWrapper>
      </Header>
      <ContentWrapper>
        {data.allMarkdownRemark.totalCount > 0 ? (
          <ProductSection>
            {specials.map(({ node }) => {
              return (
                <ProductCard
                  backNavigationPath={location.pathname}
                  shed={{ ...node.frontmatter }}
                  key={node.id}
                />
              )
            })}
          </ProductSection>
        ) : (
          <h5>No specials currently available...</h5>
        )}
      </ContentWrapper>
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
            title
            gallery_image {
              alt_text
              gallery_item {
                childImageSharp {
                  id
                  fluid {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
            price
            size
            style
            serial
          }
        }
      }
    }
  }
`
