import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { TagLink } from "../styles/TagLink"
const AllTags = () => (
  <StaticQuery
    query={graphql`
      query allTags {
        allMarkdownRemark(
          limit: 2000
          filter: { frontmatter: { template: { eq: "product" } } }
        ) {
          group(field: frontmatter___size) {
            fieldValue
          }
        }
      }
    `}
    render={data => (
      <>
        {data.allMarkdownRemark.group.map((tag, index) => (
          <li key={index} tabIndex={index + 1}>
            <TagLink to={`/tags/${tag.fieldValue}/`}>{tag.fieldValue}</TagLink>
          </li>
        ))}
      </>
    )}
  />
)

export default AllTags
