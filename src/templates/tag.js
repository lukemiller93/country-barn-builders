import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
//Components
import { Link, graphql } from "gatsby"
import { Layout, ContentWrapper } from "../layouts"
import ProductCard from "../components/ProductCard"
import { ProductSection } from "../styles/ProductSection"
import { TagWrapper } from "../styles/TagWrapper"
import { TagLink } from "../styles/TagLink"
import AllTags from "../components/AllTags"
import Chip from "../components/Chip"

const tagTemplate = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} ${
    totalCount === 1 ? tag : `${tag}'s`
  } available`
  return (
    <Layout>
      <TagWrapper>
        <ContentWrapper>
          <h2>{tagHeader}</h2>
          <div className="tags__container">
            <Chip to="/specials" label="All Sheds" />
            <AllTags />
          </div>
        </ContentWrapper>
      </TagWrapper>
      <ContentWrapper>
        <ProductSection
          css={css`
            margin: 1rem auto;
          `}
        >
          {edges.map(({ node }) => {
            return <ProductCard key={node.id} shed={{ ...node.frontmatter }} />
          })}
        </ProductSection>
      </ContentWrapper>
    </Layout>
  )
}

tagTemplate.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              size: PropTypes.string.isRequired,
              style: PropTypes.string.isRequired,
              serial: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default tagTemplate
export const tagQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      filter: { frontmatter: { size: { eq: $tag } } }
      limit: 2000
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            date
            size
            style
            serial
            price
            options
            gallery_image {
              gallery_item {
                id
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              alt_text
            }
          }
        }
      }
    }
  }
`
