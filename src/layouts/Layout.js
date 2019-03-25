import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div>
      <header>
        <Link to="/">
          <h1>{data.site.siteMetadata.title}</h1>
        </Link>
        <Link to="/locations">
          <h3>Locations</h3>
        </Link>
        <Link to="/specials">
          <h3>Specials</h3>
        </Link>
        <Link to="/contact">
          <h3>Contact</h3>
        </Link>
      </header>
      {children}
    </div>
  )
}

export default Layout
