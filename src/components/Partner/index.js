import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

//Importing Components

import style from "./style";
const useStyles = makeStyles(style);

function Partner({ image, name }) {
  const classes = useStyles();
  const [IsDesktop, setIsDesktop] = useState(window.innerWidth > 900);
  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 900);
  };
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <Grid
      container
      justify="center"
      className={classes.imageWrapper}
      xs={6}
      sm={4}
      md={3}
    >
      <img className={classes.image} src={image} alt="Partner" />
    </Grid>
  );
}

export default Partner;
