import styled from "@emotion/styled"
import { injectGlobal } from "emotion"
import { ThemeProvider } from "emotion-theming"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Breakpoint from "react-socks"
import "typeface-roboto"
import "typeface-wellfleet"
import theme from "../../config/theme"
import BottomNavigationBar from "../components/BottomNavigationBar"
import Navbar from "../components/Navbar"
injectGlobal`
  *,*:before, *:after {
    box-sizing: inherit;
  }
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background:#F9F5E3 ;
  }
`
const Main = styled.main`
  @media all and (max-width: 991px) {
    padding-bottom: 60px;
  }
  @media all and (min-width: 992px) {
    padding-top: 56px;
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
        <Main>{children}</Main>
        <Breakpoint small down>
          <BottomNavigationBar />
        </Breakpoint>
      </>
    </ThemeProvider>
  )
}

export default Layout
