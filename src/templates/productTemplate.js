import React from "react"
import { graphql } from "gatsby"
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
      <h1>{size}</h1>
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
          gallery_item
        }
      }
    }
  }
`
