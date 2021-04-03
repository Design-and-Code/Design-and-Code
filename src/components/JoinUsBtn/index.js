import React from "react";

import style from "./style";

//Importing Material UI Stuff
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(style);

function JoinUsBtn() {
  const classes = useStyles();
  return (
    <Button
      className={classes.joinUsBtn}
      variant="contained"
      color="primary.mainGradient"
    >
      Join Discord
    </Button>
  );
}

export default JoinUsBtn;
