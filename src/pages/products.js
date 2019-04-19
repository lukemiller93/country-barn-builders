import React from "react"
import Image from "gatsby-image"
import styled from "@emotion/styled"
//components
import { Layout, ContentWrapper } from "../layouts"
import Seo from "../components/Seo"

// emotion styles
const H1 = styled.h1`
  padding: 1rem 0;
  margin: 0;
`
const StylesHeader = styled.section`
  background: ${props => props.theme.colors.primary.dark};
  padding: 2rem 0;
`
const Container = styled.div`
  max-width: ${props => props.theme.breakpoints.maxWidth};
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  p {
    width: 100%;
    margin: 1rem 1rem;
  }

  @media all and (min-width: ${props => props.theme.breakpoints.md}) {
    p {
      align-self: flex-start;
      max-width: 45%;
      margin: 0;
    }
  }
`

const StyledPhone = styled.a`
  color: ${props => props.theme.colors.secondary.base};
  font-weight: 700;
`
const products = ({ location }) => {
  return (
    <Layout>
      <Seo
        title={`Products`}
        desc={`We specialize in portable storage buildings and can create standard as well as highly customizable custom solutions for your needs. For information on building styles and pricing, please contact our sales office at (606) 877-1216 or stop by one of our lots today.`}
        pathname={location.pathname}
      />
      <ContentWrapper>
        <H1>Shed Styles</H1>
      </ContentWrapper>
      <StylesHeader>
        <Container>
          <p>
            Checkout some of the many styles of buildings we offer below! In
            addition to painted wood sheds, we also offer treated wood sheds,
            premium metal sheds, premium vinyl sheds, custom playhouses, animal
            shelters, gazebos, and more!
          </p>
          <p>
            Call us today at{" "}
            <StyledPhone href="tel:+1-877-606-1216">(877) 606-1216</StyledPhone>{" "}
            for more information about specific building prices and available
            options. Free delivery, blocks, and setup within 50 miles! Sales tax
            added to all sales. Prices subject to change without notice.
          </p>
        </Container>
      </StylesHeader>
    </Layout>
  )
}

export default products
