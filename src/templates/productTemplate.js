import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import React, { useState } from "react"
import { Layout, ContentWrapper } from "../layouts"
import Seo from "../components/Seo"
import styled from "@emotion/styled"

const StyledLink = styled(Link)`
  margin: 1rem auto;
  flex-basis: 100%;
  color: ${props => props.theme.colors.secondary.base};
  font-weight: 700;
`
const ProductInfo = styled.section`
  height: 100%;
  width: 100%;
  margin: 1rem auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
`
const ProductGallery = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  @media all and (min-width: ${props => props.theme.breakpoints.lg}) {
    width: 50%;
  }
`

const FullSizeImage = styled.div``
const ImageThumbnails = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 100%;

  @media all and (min-width: ${props => props.theme.breakpoints.md}) {
    justify-content: flex-start;
  }
`
const ClickableDiv = styled.div`
  cursor: pointer;
  transition: transform 150ms,
    border 150ms ${props => props.theme.transition.easeInOutBack};
  height: 104px;
  border-radius: 3px;
  margin-right: 1rem;
  &:hover,
  &:focus {
    border: 2px solid ${props => props.theme.colors.secondary.base};
    outline: none;
  }
  &:focus {
    transform: scale(1.12);
  }
`
const ProductDetails = styled.aside`
  background: ${props => props.theme.colors.primary.light};
  margin-top: 1rem;
  box-shadow: 0 2px 4px ${props => props.theme.colors.black.withAlpha},
    0 4px 8px ${props => props.theme.colors.black.withAlpha};

  > div p:last-child {
    text-align: center;
  }
  @media all and (min-width: ${props => props.theme.breakpoints.md}) {
    width: 48%;
    max-width: 450px;
  }
`
const H1 = styled.h1`
  margin: 0;
  padding: 1rem 0;
  text-align: center;
  font-size: 2rem;
`

const ProductInfoP = styled.p`
  margin-bottom: 0.5rem;

  span {
    font-weight: 700;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.secondary.base};
  }
`

const productTemplate = ({ data, location }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const {
    size,
    style,
    serial,
    price,
    options,
    gallery_image,
  } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <Seo
        title={`${size} ${style} - ${serial}`}
        desc={`${size} ${style}. ${options}. ${price.toFixed(2)} + tax.`}
        pathname={location.pathname}
        banner={gallery_image[0].publicURL}
        article
      />
      <ContentWrapper>
        {size && size !== null ? (
          <>
            <ProductInfo>
              <StyledLink
                onClick={e => {
                  e.preventDefault()
                  window.history.back()
                }}
              >
                Go back to all sheds
              </StyledLink>
              <ProductGallery>
                <FullSizeImage>
                  <Image
                    key={gallery_image[activeIndex].gallery_item.id}
                    fluid={
                      gallery_image[activeIndex].gallery_item.childImageSharp
                        .fluid
                    }
                    alt={gallery_image[activeIndex].alt_text}
                  />
                </FullSizeImage>

                <ImageThumbnails>
                  {gallery_image.map((item, index) => {
                    const { gallery_item, alt_text } = item
                    return (
                      <ClickableDiv
                        tabIndex="0"
                        key={index}
                        onClick={e => {
                          setActiveIndex(index)
                        }}
                        onKeyDown={e => {
                          if (e.keyCode === 13) {
                            setActiveIndex(index)
                          }
                        }}
                      >
                        <Image
                          fixed={gallery_item.childImageSharp.fixed}
                          alt={alt_text}
                        />
                      </ClickableDiv>
                    )
                  })}
                </ImageThumbnails>
              </ProductGallery>
              <ProductDetails>
                <ContentWrapper>
                  <H1>
                    {size} {style}
                  </H1>
                  <ProductInfoP>
                    <span>Serial:</span> {serial}
                  </ProductInfoP>
                  <ProductInfoP>
                    <span>Price:</span> {`$${price.toFixed(2)} + tax`}
                  </ProductInfoP>
                  <ProductInfoP>
                    <span>Description:</span> {options}
                  </ProductInfoP>
                  <ProductInfoP>
                    <span>Call now for more info!</span>{" "}
                    <a href={`tel:+1-606-877-1216`}>606-877-1216</a>
                  </ProductInfoP>
                  <ProductInfoP>
                    <small>
                      <em>Free delivery, blocks, and setup within 50 miles.</em>
                    </small>
                  </ProductInfoP>
                </ContentWrapper>
              </ProductDetails>
            </ProductInfo>
          </>
        ) : (
          <h5>No specials currently available...</h5>
        )}
      </ContentWrapper>
    </Layout>
  )
}

export default productTemplate
export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        size
        style
        serial
        price
        options
        gallery_image {
          gallery_item {
            publicURL
            id
            childImageSharp {
              fluid(maxWidth: 840) {
                ...GatsbyImageSharpFluid
              }
              fixed(width: 100, height: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          alt_text
        }
      }
    }
  }
`
