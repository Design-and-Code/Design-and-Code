import React from "react";

import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//Importing Components

import style from "./style";

const useStyles = makeStyles(style);

function Feature({ image, title, description }) {
  const classes = useStyles();

  return (
    <div className={classes.feature}>
      <div className={classes.imageHolder}>
        <img className={classes.image} src={image} alt="feature" />
      </div>
      <div className={classes.infoHolder}>
        <Typography variant="h5" className={classes.title}>{title}</Typography>
        <Typography variant="subtitle1" className={classes.description}>{description}</Typography>
      </div>
    </div>
  );
}

export default Feature;
