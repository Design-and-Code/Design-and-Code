import React from "react";

//Importing Material UI stuff
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box,Grid } from "@material-ui/core";

import Banner from "../../assets/Canva Event Thumbnail (3) 1.png";
import { ContainedButton } from "../../components/Buttons";

import style from "./style";
import EventCapsules from "../EventCapsules";

const useStyles = makeStyles(style);

const EventsPast = () => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4} >
    <Box className={`${classes.eventsCard} eventsCard`}>
      <Box className={`${classes.bannerOuter} bannerOuterPast`}>
        <img src={Banner} alt="Image" className={classes.banner} />
      </Box>
    </Box>
    </Grid>
  );
};

export default EventsPast;
