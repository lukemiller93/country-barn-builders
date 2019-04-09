import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Chip from "./Chip"

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
        {data.allMarkdownRemark.group.map((tag, index) => {
          return (
            <Chip
              key={index}
              to={`tags/${tag.fieldValue}/`}
              label={tag.fieldValue}
            />
          )
        })}
      </>
    )}
  />
)

export default AllTags
