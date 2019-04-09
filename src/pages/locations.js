//core
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import React from "react"
import styled from "@emotion/styled"

//icons
import AccessTimeOutlined from "@material-ui/icons/AccessTimeOutlined"
import PhoneInTalk from "@material-ui/icons/PhoneInTalk"
import PlaceOutlined from "@material-ui/icons/PlaceOutlined"

//components
import { Layout, ContentWrapper } from "../layouts"
import Seo from "../components/Seo"

const H1 = styled.h1`
  padding: 1rem 0;
  margin: 0;
`

const TextSection = styled.section`
  padding: 1rem 0 3rem;
  background: ${props => props.theme.colors.primary.dark};
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 94%;
  max-width: 1680px;
  margin: 0 auto;

  @media all and (min-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    p {
      margin-bottom: 0;
      max-width: 48%;
    }
  }
  @media all and (min-width: ${props => props.theme.breakpoints.lg}) {
    justify-content: space-around;
    p {
      max-width: 40%;
    }
  }
`
const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.secondary.base};
  font-weight: 700;
`
const StyledPhone = StyledLink.withComponent("a")

const LocationCardSection = styled.section`
  width: 94%;
  margin: 0 auto;
  max-width: 1680px;
  display: flex;
  flex-direction: column;
  margin-top: -2rem;

  @media all and (min-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: row;
    justify-content: space-around;
  }
`

const LocationCard = styled.article`
  width: 100%;
  background: white;
  margin-bottom: 1rem;
  box-shadow: 0 4px 10px ${props => props.theme.colors.black.withAlpha};

  @media all and (min-width: ${props => props.theme.breakpoints.md}) {
    width: 48%;
  }
  @media all and (min-width: ${props => props.theme.breakpoints.lg}) {
    width: 40%;
  }
  @media all and (min-width: ${props => props.theme.breakpoints.xl}) {
    width: 30%;
  }
`
const CardTitle = styled.h3`
  font-family: ${props => props.theme.fontFamily.body};
  background: ${props => props.theme.colors.secondary.dark};
  color: ${props => props.theme.colors.white.base};
  padding: 1rem;
  margin: 0;
`

const CardBody = styled.div`
  padding: 1rem 0.75rem;

  > div:last-of-type {
    margin-bottom: 0;
  }
`

const CardContact = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
  align-items: flex-start;

  > span:first-of-type {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 38%;
    color: ${props => props.theme.colors.secondary.base};

    svg {
      margin-right: 0.25rem;
    }
  }

  > *:last-child {
    width: 62%;
  }

  a {
    color: ${props => props.theme.colors.black.base};
    text-decoration: none;
  }

  table {
    margin-bottom: 0;
    td {
      border-bottom: none;
      padding: 0;
      padding-bottom: 0.5rem;
    }
  }
`

const CardButton = styled.a`
  position: relative;
  display: flex;
  margin: 1rem 0 0;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: 100%;
  overflow: hidden;

  border-width: 0;
  outline: none;
  border-radius: 2px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);

  background-color: ${props => props.theme.colors.secondary.base};
  color: ${props => props.theme.colors.white.base};

  transition: background-color 0.3s;

  font-size: 0.8rem;
  font-weight: 500;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.025rem;

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.secondary.light};
  }

  > * {
    position: relative;
  }

  span {
    display: block;
    padding: 12px 24px;
  }

  &:before {
    content: "";

    position: absolute;
    top: 50%;
    left: 50%;

    display: block;
    width: 0;
    padding-top: 0;

    border-radius: 100%;

    background-color: rgba(236, 240, 241, 0.3);

    transform: translate(-50%, -50%);
  }

  &:active:before {
    width: 120%;
    padding-top: 120%;
    transition: width 0.2s ease-out, padding-top 0.2s ease-out;
  }

  @media all and (min-width: ${props => props.theme.breakpoints.md}) {
    width: 9.25rem;
  }
`

const Locations = ({ data, location }) => {
  return (
    <Layout>
      <Seo
        title={`Sales Locations`}
        desc={`We specialize in portable storage buildings and can create standard as well as highly customizable custom solutions for your needs. For information on building styles and pricing, please contact our sales office at (606) 877-1216 or stop by one of our lots today.`}
        pathname={location.pathname}
      />

      <ContentWrapper>
        <H1>Locations</H1>
      </ContentWrapper>
      <TextSection>
        <Container>
          <p>
            We specialize in portable storage buildings and can create standard
            as well as highly customizable custom solutions for your needs. For
            information on building styles and pricing, please contact our sales
            office at{" "}
            <StyledPhone href="tel:+1-606-877-1216">(606) 877-1216</StyledPhone>{" "}
            or stop by one of our lots today.
          </p>
          <p>
            Be sure to ask about our{" "}
            <StyledLink to="/specials">special sale</StyledLink> through Watson
            Barn Rentals, LLC on a recent buyout of a large stock of pre-owned
            sheds. You’ll be sure to find a great deal on a perfect shed for
            you!
          </p>
        </Container>
      </TextSection>
      <LocationCardSection>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          const {
            title,
            cover,
            address,
            phone,
            business_hours,
          } = node.frontmatter
          const { city, post_code, state, street } = address
          return (
            <LocationCard key={node.id}>
              <CardTitle>{title}</CardTitle>
              {cover.feature_image && (
                <Image
                  fluid={cover.feature_image.childImageSharp.fluid}
                  alt={cover.alt_text}
                />
              )}
              <CardBody>
                <CardContact>
                  <span>
                    <PlaceOutlined />
                    Address:
                  </span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: `${street} <br /> ${city}, ${state} ${post_code}`,
                    }}
                  />
                </CardContact>
                <CardContact>
                  <span>
                    <PhoneInTalk /> Phone:
                  </span>
                  <a href={`tel:+1-${phone}`}>{phone}</a>
                </CardContact>
                <CardContact>
                  <span>
                    <AccessTimeOutlined /> Hours:
                  </span>
                  <table>
                    <tbody>
                      {business_hours.map(item => {
                        const { day, hours } = item
                        return (
                          <tr key={item.day}>
                            <td>{day}</td>
                            <td>{hours}</td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </CardContact>
                <CardButton
                  href={`https://www.google.com/maps/dir/?api=1&destination=${street}%20${city}%2c%20${state}%20${post_code}&dir_action=navigate`}
                  target="_BLANK"
                  rel="noopener noreferrer"
                >
                  <span>Get Directions</span>
                </CardButton>
              </CardBody>
            </LocationCard>
          )
        })}
      </LocationCardSection>
    </Layout>
  )
}

export default Locations

export const locationsQuery = graphql`
  query locations {
    allMarkdownRemark(
      filter: { frontmatter: { template: { eq: "location" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            cover {
              alt_text
              feature_image {
                id
                childImageSharp {
                  fluid(maxWidth: 620, quality: 60) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            address {
              city
              post_code
              state
              street
            }
            phone
            business_hours {
              day
              hours
            }
          }
        }
      }
    }
  }
`
