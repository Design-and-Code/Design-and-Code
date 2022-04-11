import React from "react";

import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//Importing Components

import style from "./style";

const useStyles = makeStyles(style);

function Guideline({ number, description }) {
  const classes = useStyles();

  return (         
    <Grid item xs={12} sm={6} className={classes.guideline}>
      <div className={classes.imageHolder}>
        <h1> {number} </h1>
      </div>
      <div className={classes.infoHolder}>
        <Typography variant="h6" className={classes.title}>{description}</Typography>
      </div>
    </Grid>
  );
}

export default Guideline;
