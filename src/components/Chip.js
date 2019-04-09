import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Chip from "@material-ui/core/Chip"
import { Link, navigate } from "gatsby"

const styles = theme => ({
  root: {},
  colorPrimary: {
    background: `white`,
    color: `#222526`,
    margin: `.5rem .25rem`,
    "&:hover": {
      background: `#C6574A`,
    },
    "&:focus": {
      background: `#C6574A`,
    },
  },
})

function CustomChip(props) {
  const { classes } = props
  return (
    <>
      <Chip
        clickable
        component={Link}
        activeStyle={{ background: `#902822 `, color: `white` }}
        to={props.to}
        className={classes.colorPrimary}
        color="primary"
        label={props.label}
        onClick={e => {
          navigate(props.to)
        }}
      />
    </>
  )
}

CustomChip.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(CustomChip)
