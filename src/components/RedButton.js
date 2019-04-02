import Button from "@material-ui/core/Button"
import { withStyles } from "@material-ui/core/styles"
import { Link } from "gatsby"
import React from "react"
const styles = {
  root: {
    background: "#902822",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 20px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    "&:hover": {
      backgroundColor: `rgba(144, 40, 34, 0.5)`,
    },
  },
  label: {
    textTransform: "uppercase",
  },
}
function RedButton(props) {
  const { classes } = props
  if (props.type === "submit") {
    return (
      <Button
        type={props.type}
        component={"button"}
        classes={{ root: classes.root, label: classes.label }}
      >
        {props.buttonText}
      </Button>
    )
  } else {
    return (
      <Button
        type={props.type}
        to={props.to}
        component={Link}
        classes={{ root: classes.root, label: classes.label }}
      >
        {props.buttonText}
      </Button>
    )
  }
}

export default withStyles(styles)(RedButton)
