import React from "react";

import { Typography } from "@mui/core";
import { makeStyles } from "@mui/core/styles";

//Importing Components

import style from "./style";

const useStyles = makeStyles(style);

function Feature({ image, title, description }) {
  const classes = useStyles();

  return (
    <div className={classes.feature} data-aos="fade-up" data-aos-delay="200">
      <div className={classes.imageHolder}  data-aos="fade-up" data-aos-delay="400">
        <img className={classes.image} src={image} alt="feature" />
      </div>
      <div className={classes.infoHolder}>
        <div data-aos="fade-up" data-aos-delay="300"> <Typography variant="h5" className={classes.title}>{title}</Typography> </div>
        <div data-aos="fade-up" data-aos-delay="400"> <Typography variant="subtitle1" className={classes.description}>{description}</Typography> </div>
      </div>
    </div>
  );
}

export default Feature;
