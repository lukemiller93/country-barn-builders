import React from "react"
import styled from "@emotion/styled"
import Phone from "@material-ui/icons/Phone"
import PlaceOutlined from "@material-ui/icons/PlaceOutlined"

import { Layout, ContentWrapper } from "../layouts"
import ContactForm from "../components/ContactForm"
import Seo from "../components/Seo"
const ContactHeading = styled.div`
  height: 100%;
  width: 100%;
  background: ${props => props.theme.colors.primary.dark};
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1,
  p {
    width: 90%;
    margin: 1rem auto;
  }

  h1 {
    padding-bottom: 1rem;
    border-bottom: 2px solid ${props => props.theme.colors.secondary.base};
  }

  p {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    svg {
      margin-right: 1rem;
    }
    a {
      color: inherit;
      text-decoration: none;
      font-weight: 700;
    }
  }
  @media all and (min-width: ${props => props.theme.breakpoints.lg}) {
    height: calc(100vh - 56px);
    width: 40%;
    background: ${props => props.theme.colors.primary.dark};
    position: fixed;
    left: 0;
    bottom: 0;
  }
`
const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media all and (min-width: ${props => props.theme.breakpoints.lg}) {
    flex-direction: row;
  }
`
const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 1rem auto 0;
  @media all and (min-width: ${props => props.theme.breakpoints.lg}) {
    position: relative;
    margin-right: 5%;
    width: 50%;
    margin-top: 10rem;
  }
`
const contactPage = props => {
  return (
    <Layout>
      <Seo
        title={`Contact Us`}
        pathname={props.location.pathname}
        desc={`Send us a message today! We'd love to hear from you!`}
      />
      <ContactSection>
        <ContactHeading>
          <ContentWrapper>
            <h1>Contact Us!</h1>
            <p>
              Send us a message, or give us a call and we'll be in touch as soon
              as possible!
            </p>
            <p>
              <Phone />
              <a href="tel:+1-606-877-1216">606-877-1216</a>
            </p>
            <p>
              <PlaceOutlined />
              <a
                href="https://goo.gl/maps/eqwYnemWWJv"
                target="_BLANK"
                rel="noopener noreferrer"
              >
                7885 E. Laurel Road <br />
                London, KY 40741
              </a>
            </p>
          </ContentWrapper>
        </ContactHeading>
        <FormContainer>
          <ContactForm location={props.location.pathname} />
        </FormContainer>
      </ContactSection>
    </Layout>
  )
}

export default contactPage
