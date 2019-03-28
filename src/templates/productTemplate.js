import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import React from "react"
import { Layout } from "../layouts"

const productTemplate = ({ data, pageContext }, props) => {
  const { next, prev } = pageContext
  const {
    // date,
    size,
    style,
    // serial,
    // price,
    // options,
    gallery_image,
  } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <h1>
        {size} {style}
      </h1>

      <section>
        {gallery_image.map(item => (
          <Image
            key={item.gallery_item.id}
            fluid={item.gallery_item.childImageSharp.fluid}
            alt={item.alt_text}
          />
        ))}
      </section>
      <div>
        {prev && (
          <Link to={`/specials/${prev.frontmatter.serial}/`}>{`${
            prev.frontmatter.size
          } ${prev.frontmatter.style}`}</Link>
        )}
      </div>
      <div>
        {next && (
          <Link to={`/specials/${next.frontmatter.serial}/`}>{`${
            next.frontmatter.size
          } ${next.frontmatter.style}`}</Link>
        )}
      </div>
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
