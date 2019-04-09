import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import { Link } from "gatsby"
import Image from "gatsby-image"
import styled from "@emotion/styled"

const CardTitle = styled.h3`
  font-family: ${props => props.theme.fontFamily.body};
  margin-bottom: 0.5rem;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.black.base};
`
const BuildingInfo = styled.p`
  margin-bottom: 0.25rem;

  span {
    font-weight: 700;
  }
`

const styles = {
  card: {
    width: `100%`,
    maxWidth: 345,
    margin: `0 .25rem 1rem`,
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: "cover",
  },
  cardContent: {
    paddingBottom: `0 !important`,
  },
  buttonColor: {
    color: `#902822 !important`,
  },
}

function ProductCard(props) {
  const { classes, shed } = props
  const { size, style, serial, price, gallery_image } = shed
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <StyledLink to={`/specials/${serial}`}>
          <Image
            fluid={gallery_image[0].gallery_item.childImageSharp.fluid}
            alt={gallery_image[0].alt_text}
          />
          <CardContent className={classes.cardContent}>
            <CardTitle>
              {size} {style}
            </CardTitle>
            <BuildingInfo>
              <span>Serial: </span>
              {serial}
            </BuildingInfo>
            <BuildingInfo>
              <span>Price: </span>
              {`$${price.toFixed(2)} + tax`}
            </BuildingInfo>
          </CardContent>
        </StyledLink>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          component={Link}
          to={`/specials/${serial}`}
          className={classes.buttonColor}
          color="inherit"
        >
          More Info
        </Button>
      </CardActions>
    </Card>
  )
}

ProductCard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ProductCard)
