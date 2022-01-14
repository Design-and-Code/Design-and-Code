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
    <div className="container-btns">
      <Button
        {...props}
        style={{
          padding: size === "large" ? "12px 50px" : "8px 22px",
          margin: "0rem",
        }}
        className={`${classes.containedBtn} ${props.className}`}
        variant="contained"
      >
        {props.children}
      </Button>
      <div class="shine"></div>
    </div>
  );
}

function OutlinedButton(props) {
  const classes = useStyles();
  const { size } = props;

  return (
    <div className="container-btns">
      <Button
        {...props}
        style={{
          padding: size === "large" ? "12px 50px" : "8px 22px",
          margin: "0rem",
        }}
        className={`${classes.outlinedBtn} ${props.className}`}
        variant="outlined"
      >
        {props.children}
      </Button>
      <div class="shine2"></div>
    </div>
  );
}

export { ContainedButton, OutlinedButton };
