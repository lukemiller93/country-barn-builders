import styled from "@emotion/styled"
import EmailOutlined from "@material-ui/icons/EmailOutlined"
import LocalOfferOutlined from "@material-ui/icons/LocalOfferOutlined"
import PlaceOutlined from "@material-ui/icons/PlaceOutlined"
import MonetizationOnOutlined from "@material-ui/icons/MonetizationOnOutlined"
import { Link } from "gatsby"
import React from "react"
import logo from "../images/company-logo.svg"

const Wrapper = styled.section`
  width: 100%;
  background: ${props => props.theme.colors.primary.light};
  height: 56px;
  z-index: 1000;

  @media all and (min-width: ${props => props.theme.breakpoints.lg}) {
    position: fixed;
    top: 0;
  }
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
    position: relative;
    bottom: -1px;
    transition: color,
      border 150ms ${props => props.theme.transition.easeInOutCubic};

    &::after {
      display: block;
      position: absolute;
      bottom: -3px;
      content: "";
      left: 20%;
      width: 70%;
      margin: 0 auto;
      border-bottom: 3px solid ${props => props.theme.colors.secondary.base};
    }
  }

  @media all and (max-width: 995px) {
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
    font-weight: 500;
    color: ${props => props.theme.colors.secondary.base};
    transition: color 150ms ${props => props.theme.transition.easeInOutCubic};
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
          <NavLink activeClassName="nav-link__active" to="/products">
            <MonetizationOnOutlined aria-label="Products" /> Products
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
