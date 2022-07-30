import React from "react";

//Importing Material UI stuff
import { makeStyles } from "@mui/core/styles";
import { Typography, Box,Grid } from "@mui/core";

import Banner from "../../assets/Canva Event Thumbnail (3) 1.png";
import { ContainedButton } from "../Buttons";

import style from "./style";

const useStyles = makeStyles(style);

const EventCapsules = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.capsule}>
        <div className={classes.svg}>
            {props.svg}
        </div>
        {props.text}
    </Box>
  );
};

export default EventCapsules;
