import React from "react"
import PropTypes from "prop-types"
//Components
import { Link, graphql } from "gatsby"
import { Layout } from "../layouts"
const tagTemplate = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} shed${
    totalCount === 1 ? "" : "s"
  } available in ${tag} size`
  return (
    <Layout>
      <div>
        <h1>{tagHeader}</h1>
      </div>
      <div>
        <Link to="/specials">All Sheds</Link>
      </div>
      <ul>
        {edges.map(({node}) => {
          const {size, style, serial} = node.frontmatter
          return (
            <li key={node.id}>
              <Link to={`/specials/${serial}/`}>
                {`${size} ${style}`}
              </Link>
            </li>
          )
        })}
      </ul>
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
  query($tag: String){
    allMarkdownRemark(
      filter: { frontmatter: { size: { eq: $tag } } }
      limit: 2000
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            size
            style
            serial
          }
        }
      }
    }
  }
`
