import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { ThemeProvider } from "emotion-theming"
import { injectGlobal } from "emotion"
import Breakpoint from 'react-socks'
import theme from "../../config/theme"
import 'typeface-wellfleet'
import 'typeface-roboto'
import Navbar from "../components/Navbar"
import BottomNavigationBar from '../components/BottomNavigationBar'
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
          <Navbar />
        {children}
        <Breakpoint small down>
          <BottomNavigationBar />
        </Breakpoint>
      </>
    </ThemeProvider>
  )
}

export default Layout
