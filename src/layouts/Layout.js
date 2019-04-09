import styled from "@emotion/styled"
import { injectGlobal } from "emotion"
import { ThemeProvider } from "emotion-theming"
import React from "react"
import Breakpoint from "react-socks"
import "typeface-roboto"
import "typeface-wellfleet"
import theme from "../../config/theme"
import BottomNavigationBar from "../components/BottomNavigationBar"
import Navbar from "../components/Navbar"
import ContentWrapper from "./ContentWrapper"
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
  @media all and (max-width: 995px) {
    padding-bottom: 60px;
  }
  @media all and (min-width: ${props => props.theme.breakpoints.lg}) {
    padding-top: 56px;
  }
`
const Footer = styled.footer`
  position: relative;
  bottom: 0;
  margin-bottom: 1rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 100%;

  a {
    color: ${props => props.theme.colors.secondary.base};
    font-weight: 700;
    text-decoration: none;
    transition: background-color,
      color 200ms ${props => props.theme.transition.easeInOutBack};
    &:hover,
    &:focus {
      background-color: ${props => props.theme.colors.secondary.base};
      color: ${props => props.theme.colors.white.base};
      padding: 2px 6px;
      border-radius: 5px;
    }
  }
`
const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Navbar />
        <Main>
          {children}
          <ContentWrapper>
            <Footer>
              {" "}
              <small>
                © {new Date().getFullYear()}, Watson Barn Rentals, LLC
              </small>
              <small>
                Designed &amp; built by{" "}
                <a href="https://www.linkedin.com/in/luke-miller-b4951b145/">
                  Luke Miller
                </a>
              </small>
            </Footer>
          </ContentWrapper>
        </Main>
        <Breakpoint medium down>
          <BottomNavigationBar />
        </Breakpoint>
      </>
    </ThemeProvider>
  )
}

export default Layout
