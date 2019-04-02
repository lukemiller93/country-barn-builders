import { graphql, Link } from "gatsby"
import React from "react"
import styled from "@emotion/styled"
import { Layout, ContentWrapper } from "../layouts"
import ProductCard from "../components/ProductCard"

const Header = styled.section`
  padding: 1rem 0;
`
const TagWrapper = styled.section`
  background: ${props => props.theme.colors.primary.dark};
  padding: 1rem 0;

  h3 {
    text-align: center;
  }

  ul {
    list-style: none;
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    max-width: 768px;
  }

  li {
    position: relative;
    background: ${props => props.theme.colors.primary.light};
    border-radius: 2rem;
    padding: 0.25rem 0;
    transition: background 150ms
      ${props => props.theme.transition.easeInOutCubic};
    &:hover,
    &:focus {
      background: ${props => props.theme.colors.secondary.light};
    }
  }
`
const TagLink = styled(Link)`
  border-radius: 2rem;
  padding: 0.5rem 0.5rem;
  height: 100%;
  position: relative;
  text-decoration: none;
  color: ${props => props.theme.colors.black.base};
  transition: background 150ms ${props => props.theme.transition.easeInOutCubic};
  &:hover,
  &:focus {
    background: ${props => props.theme.colors.secondary.light};
  }
  &:before {
    content: "";

    position: absolute;
    top: 50%;
    left: 50%;

    display: block;
    width: 0;
    padding-top: 0;

    border-radius: 100%;

    background-color: rgba(236, 240, 241, 0.3);

    transform: translate(-50%, -50%);
  }

  &:active:before {
    width: 120%;
    padding-top: 120%;
    transition: width 0.2s ease-out, padding-top 0.2s ease-out;
  }
`

const ProductSection = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`
const specialsPage = ({ data, pageContext }) => {
  const specials = data.allMarkdownRemark.edges
  const tags = data.tags.group
  return (
    <Layout>
      <Header>
        <ContentWrapper>
          <h1>Specials</h1>
        </ContentWrapper>
        <TagWrapper>
          <ContentWrapper>
            <h3>Filter by Size</h3>
            <ul>
              {tags.map((tag, index) => {
                const { fieldValue, totalCount } = tag
                return (
                  <li key={index} tabIndex={index + 1}>
                    <TagLink to={`/tags/${fieldValue}/`}>{fieldValue}</TagLink>
                  </li>
                )
              })}
            </ul>
          </ContentWrapper>
        </TagWrapper>
      </Header>
      <ContentWrapper>
        <ProductSection>
          {specials.map(({ node }) => {
            const { size, serial, style } = node.frontmatter
            return <ProductCard shed={{ ...node.frontmatter }} key={node.id} />
          })}
        </ProductSection>
      </ContentWrapper>
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
