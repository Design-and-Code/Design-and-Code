import React from "react";

import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//Importing Components

import style from "./style";

const useStyles = makeStyles(style);

function Guideline({ number, description }) {
  const classes = useStyles();

  return (
    <div className={classes.guideline}>
      <div className={classes.imageHolder}>
        <h1> {number} </h1>
      </div>
      <div className={classes.infoHolder}>
        <Typography variant="h5" className={classes.title}>{description}</Typography>
      </div>
    </div>
  );
}

export default Guideline;
