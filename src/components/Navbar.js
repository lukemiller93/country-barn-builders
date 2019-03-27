import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import React from "react"
import Breakpoint from 'react-socks'
import logo from "../images/company-logo.svg"
import PlaceOutlined from "@material-ui/icons/PlaceOutlined"
import LocalOfferOutlined from "@material-ui/icons/LocalOfferOutlined"
import EmailOutlined from "@material-ui/icons/EmailOutlined"

const Wrapper = styled.section`
  width: 100%;
  background: ${props => props.theme.colors.primary.dark};
  height: 56px;
`

const StyledLink = styled(Link)`
  display: flex;
  width: 100%;
  align-items: center;

  img {
    height: 48px;
    display: block;
    margin-bottom: 0;
  }
`

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  font-weight: 400;
  font-size: 1rem;
  align-items: center;
  width: 100%;

  .nav-link__active {
    font-weight: 500;
    color: ${props => props.theme.colors.secondary.base};
    border-bottom: 3px solid ${props => props.theme.colors.secondary.base};
    position: relative;
    bottom: -1px;
    transition: color, border 100ms ease-in;
  }

  @media all and (max-width: 767px) {
    display: none;
  }
`
const NavLink = styled(Link)`
  color: ${props => props.theme.colors.black.base};
  text-decoration: none;
  margin-left: 2rem;
  display: flex;
  align-items: center;
  padding: 0 0.5rem 0.25rem;

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.secondary.base};
    border-bottom: 3px solid ${props => props.theme.colors.secondary.base};
    transition: color, border 100ms ease-in;
  }

  svg {
    margin-right: 0.75rem;
  }
`
const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  height: 100%;
  max-width: 1680px;
`

const NavBar = () => {
  return (
    <Wrapper>
      <Header>
        <StyledLink to="/">
          <img src={logo} alt="Country Barn Builders logo" />
        </StyledLink>
          <Nav>
            <NavLink activeClassName="nav-link__active" to="/locations">
              <PlaceOutlined aria-label="Locations" /> Locations
            </NavLink>
            <NavLink activeClassName="nav-link__active" to="/specials">
              <LocalOfferOutlined aria-label="Specials" /> Specials
            </NavLink>
            <NavLink activeClassName="nav-link__active" to="/contact">
              <EmailOutlined aria-label="Contact" /> Contact
            </NavLink>
          </Nav>
      </Header>
    </Wrapper>
  )
}

export default NavBar
