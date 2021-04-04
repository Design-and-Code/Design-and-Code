import React from "react";

import style from "./style";

//Importing Material UI Stuff
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(style);

function ContainedButton(props) {
  const classes = useStyles();
  const { size } = props;

  return (
    <Button
      {...props}
      style={{ padding: size === "large" ? "12px 50px" : "8px 22px" }}
      className={classes.containedBtn}
      variant="contained"
    >
      {props.children}
    </Button>
  );
}

function OutlinedButton(props) {
  const classes = useStyles();
  const { size } = props;

  return (
    <Button
      {...props}
      style={{ padding: size === "large" ? "12px 50px" : "8px 22px" }}
      className={classes.outlinedBtn}
      variant="outlined"
    >
      {props.children}
    </Button>
  );
}

export { ContainedButton, OutlinedButton };
