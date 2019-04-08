import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { TagLink } from "../styles/TagLink"
import { css } from "@emotion/core"
import Chip from "./Chip"

const activeStyle = css`
  background: ${props => props.theme.colors.secondary.light};
`
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
          const trimmedValue = tag.fieldValue.trim()
          return (
            <Chip
              key={index}
              to={`tags/${trimmedValue}/`}
              label={trimmedValue}
            />
          )
        })}
      </>
    )}
  />
)

export default AllTags
//   < TagLink
// activeClassName = "tag__active"
// to = {`/tags/${tag.fieldValue}/`}
//             >
//   { tag.fieldValue }
//             </TagLink >
