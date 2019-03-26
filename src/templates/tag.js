import { Link } from "gatsby"
import React from "react"
import { Layout } from "../layouts"
const tagTemplate = ({ pageContext }) => {
  const { taggedProducts, tagName } = pageContext
  return (
    <Layout>
      <div>{`${tagName} sheds`}</div>
      <div>
        <Link to="/specials">All Sheds</Link>
      </div>
      <ul>
        {taggedProducts.map((product, index) => {
          return (
            <li key={index}>
              <Link to={`/specials/${product.frontmatter.serial}/`}>
                {product.frontmatter.size}
              </Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default tagTemplate
