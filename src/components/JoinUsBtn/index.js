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
      href="https://discord.gg/druweDMn3s"
      target="_blank"
    >
      Join Discord
    </Button>
  );
}

export default JoinUsBtn;
