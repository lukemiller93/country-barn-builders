import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import { Layout } from "../layouts"

const productTemplate = ({ data }, props) => {
  const {
    date,
    size,
    style,
    serial,
    price,
    options,
    gallery_image,
  } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <h1>
        {size} {style}
      </h1>

      {gallery_image.map(item => (
        <Image
          key={item.gallery_item.id}
          fluid={item.gallery_item.childImageSharp.fluid}
          alt={item.alt_text}
        />
      ))}
    </Layout>
  )
}

export default productTemplate
export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
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
`
