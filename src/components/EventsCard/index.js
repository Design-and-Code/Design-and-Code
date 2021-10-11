import React from "react";

//Importing Material UI stuff
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";

import Banner from "../../assets/Canva Event Thumbnail (3) 1.png";
import { ContainedButton } from "../../components/Buttons";

import style from "./style";

const useStyles = makeStyles(style);

const Card = () => {
  const classes = useStyles();
  return (
    <Box className={classes.eventsCard}>
      <img src={Banner} alt="Image" className={classes.banner} />
      <Typography className={classes.eventName} variant="h5">Canva Workshop</Typography>
      <Box className="time">
          <Typography variant="h6">
              8:00pm - 10:00pm IST
          </Typography>
      </Box>
    </Box>
  );
};

export default Card;
