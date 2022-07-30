import React from "react";
import style from "./style";

//Importing Material UI Stuff
import { makeStyles } from "@mui/core/styles";

const useStyles = makeStyles(style);

function BackgroundBlur() {
  const classes = useStyles();

  return (
    <div className={classes.backgroundBlur}>
      <div className={classes.blurredCircle1}></div>
      <div className={classes.blurredCircle2}></div>
    </div>
  );
}

export default BackgroundBlur;
