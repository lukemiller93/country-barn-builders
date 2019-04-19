import React from "react"
import Image from "gatsby-image"
import styled from "@emotion/styled"
import { graphql } from "gatsby"
//components
import { Layout, ContentWrapper } from "../layouts"
import Seo from "../components/Seo"

// emotion styles
const H1 = styled.h1`
  padding: 1rem 0;
  margin: 0;
`
const StylesHeader = styled.section`
  background: ${props => props.theme.colors.primary.dark};
  padding: 2rem 0;
`
const Container = styled.div`
  max-width: ${props => props.theme.breakpoints.maxWidth};
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  p {
    width: 100%;
    margin: 1rem 1rem;
  }

  @media all and (min-width: ${props => props.theme.breakpoints.md}) {
    p {
      align-self: flex-start;
      max-width: 45%;
      margin: 0;
    }
  }
`
const StylesCardContainer = styled.div`
  margin: 1rem auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`

const StyleCard = styled.article`
  width: ${props => props.theme.breakpoints.sm};
  margin: 0.5rem;
  background: ${props => props.theme.colors.primary.light};
  border-radius: 10px;
  box-shadow: 2px 4px 10px 4px ${props => props.theme.colors.black.withAlpha};

  .gatsby-image-wrapper {
    border-radius: 10px 10px 0 0;
  }

  h2 {
    padding: 0.5rem;
    text-align: center;
    margin-bottom: 0;
  }
  p {
    padding: 0.5rem 1rem 0;
    font-weight: 700;
  }

  p:not(:last-child) {
    margin-bottom: 0;
  }

  span {
    font-weight: normal;
    color: ${props => props.theme.colors.secondary.dark};
  }
`

const StyledPhone = styled.a`
  color: ${props => props.theme.colors.secondary.base};
  font-weight: 700;
`
const products = ({ location, data }) => {
  const { edges } = data.allMarkdownRemark
  return (
    <Layout>
      <Seo
        title={`Products`}
        desc={`We specialize in portable storage buildings and can create standard as well as highly customizable custom solutions for your needs. For information on building styles and pricing, please contact our sales office at (606) 877-1216 or stop by one of our lots today.`}
        pathname={location.pathname}
      />
      <ContentWrapper>
        <H1>Shed Styles</H1>
      </ContentWrapper>
      <StylesHeader>
        <Container>
          <p>
            Checkout some of the many styles of buildings we offer below! In
            addition to painted wood sheds, we also offer treated wood sheds,
            premium metal sheds, premium vinyl sheds, custom playhouses, animal
            shelters, gazebos, and more!
          </p>
          <p>
            Call us today at{" "}
            <StyledPhone href="tel:+1-877-606-1216">(877) 606-1216</StyledPhone>{" "}
            for more information about specific building prices and available
            options. Free delivery, blocks, and setup within 50 miles! Sales tax
            added to all sales. Prices subject to change without notice.
          </p>
        </Container>
      </StylesHeader>
      <ContentWrapper>
        <StylesCardContainer>
          {edges.length < 1 ? (
            <div
              style={{
                height: `75vh`,
                display: `flex`,
                justifyContent: `center`,
                alignItems: `center`,
                width: `100%`,
              }}
            >
              <p>Page still under construction</p>
            </div>
          ) : (
            edges.map(({ node }) => {
              const {
                sizes,
                title,
                starting_price,
                featured_image,
                alt_text,
              } = node.frontmatter

              return (
                <StyleCard key={node.id}>
                  <Image
                    fluid={featured_image.childImageSharp.fluid}
                    alt={alt_text}
                  />
                  <h2>{title}</h2>
                  <p>
                    Sizes available: <span>{sizes}</span>
                  </p>
                  <p>
                    Starting at:{" "}
                    <span>{`$${Number(starting_price).toFixed(2)} + tax`}</span>
                  </p>
                </StyleCard>
              )
            })
          )}
        </StylesCardContainer>
      </ContentWrapper>
    </Layout>
  )
}

export default products

export const buildingStyleQuery = graphql`
  query productStyles {
    allMarkdownRemark(
      sort: { fields: [frontmatter___title], order: ASC }
      filter: { frontmatter: { template: { eq: "shed-styles" } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            template
            sizes
            starting_price
            featured_image {
              id
              childImageSharp {
                id
                fluid(maxWidth: 620) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
            alt_text
          }
          id
        }
      }
    }
  }
`
