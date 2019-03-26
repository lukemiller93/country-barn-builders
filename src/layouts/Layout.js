import { graphql, Link, useStaticQuery } from "gatsby"
import React, { Fragment } from "react"
import { ThemeProvider } from "emotion-theming"
import { injectGlobal } from "react-emotion"
import theme from "../../config/theme"
import logo from "../images/company-logo.svg"
import Image from "gatsby-image"

injectGlobal`
  *,*:before, *:after {
    box-sizing: inherit;
  }
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
`

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
    <ThemeProvider theme={theme}>
      <>
        <header>
          <Link to="/">
            <img src={logo} alt="logo for Country Barn Builders" />
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
      </>
    </ThemeProvider>
  )
}

export default Layout
