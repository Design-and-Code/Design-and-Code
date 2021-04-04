import React from "react";
import style from "./style";

//Importing Material UI Stuff
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(style);

function BackgroundBlur() {
  const classes = useStyles();

  return (
    <div className={classes.backgroundBlur}>
      <div
        className={classes.blurredCircle1}
        style={{
          height: window.innerWidth / 6,
          width: window.innerWidth / 6,
        }}
      ></div>
      <div
        className={classes.blurredCircle2}
        style={{
          height: window.innerWidth / 6,
          width: window.innerWidth / 6,
        }}
      ></div>
    </div>
  );
}

export default BackgroundBlur;
