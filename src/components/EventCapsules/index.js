import React from "react";

//Importing Material UI stuff
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
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
