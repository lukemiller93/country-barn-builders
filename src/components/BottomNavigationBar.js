import styled from "@emotion/styled"
import EmailOutlined from "@material-ui/icons/EmailOutlined"
import HomeOutlined from "@material-ui/icons/HomeOutlined"
import LocalOfferOutlined from "@material-ui/icons/LocalOfferOutlined"
import PlaceOutlined from "@material-ui/icons/PlaceOutlined"
import MonetizationOnOutlined from "@material-ui/icons/MonetizationOnOutlined"
import { Link } from "gatsby"
import React from "react"

const Wrapper = styled.section`
  background: ${props => props.theme.colors.primary.light};
  height: 60px;
  width: 100%;
  position: fixed;
  bottom: 0;
  font-size: 0.675rem;
`
const Nav = styled.nav`
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;

  .nav-link__active {
    font-weight: 500;
    color: ${props => props.theme.colors.secondary.base};
    transition: color 150ms ${props => props.theme.transition.easeInOutCubic};
  }
`
const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => props.theme.colors.black.withAlpha};
  text-decoration: none;
  flex-basis: 100%;
  max-width: 168px;

  &:hover,
  &:focus {
    transition: all 150ms ${props => props.theme.transition.easeInOutCubic};
    color: ${props => props.theme.colors.secondary.base};
    font-weight: 500;
  }
`

const BottomNavigationBar = () => {
  return (
    <Wrapper>
      <Nav>
        <StyledLink activeClassName="nav-link__active" to="/">
          <HomeOutlined aria-label="Home" />
          Home
        </StyledLink>
        <StyledLink activeClassName="nav-link__active" to="/locations">
          <PlaceOutlined aria-label="Locations" />
          Locations
        </StyledLink>
        <StyledLink activeClassName="nav-link__active" to="/products">
          <MonetizationOnOutlined aria-label="Products" />
          Products
        </StyledLink>
        <StyledLink activeClassName="nav-link__active" to="/specials">
          <LocalOfferOutlined aria-label="Specials" />
          Specials
        </StyledLink>
        <StyledLink activeClassName="nav-link__active" to="contact">
          <EmailOutlined aria-label="Contact" />
          Contact
        </StyledLink>
      </Nav>
    </Wrapper>
  )
}

export default BottomNavigationBar
