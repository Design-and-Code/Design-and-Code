import React from "react";

import { makeStyles } from "@material-ui/core/styles";

//Importing Components

import style from "./style";

const useStyles = makeStyles(style);

function Feature({ image, title, description }) {
  const classes = useStyles();

  return (
    <div className={classes.feature}>
      <div className={classes.imageHolder}>
        <img src={image} alt="feature" />
      </div>
      <div className={classes.infoHolder}>
        <div className={classes.title}>{title}</div>
        <div className={classes.description}>{description}</div>
      </div>
    </div>
  );
}

export default Feature;
