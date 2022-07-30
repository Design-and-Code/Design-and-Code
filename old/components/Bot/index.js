import React from "react";

import { Typography, Grid } from "@mui/core";
import { makeStyles } from "@mui/core/styles";

//Importing Components

import style from "./style";

const useStyles = makeStyles(style);

function Bot({ number, description }) {
  const classes = useStyles();

  return (
    <Grid xs={12} sm={6} item className={classes.guideline}>
      <div style={{display:'flex',alignItems:'center'}}>
        <img src={'https://www.freepnglogos.com/uploads/discord-logo-png/discord-logo-logodownload-download-logotipos-1.png'} alt="bot-dp" className={classes.botImage}/>
        <Typography variant="h5" className={classes.botName}>BOT NAME</Typography>
      </div>
      <Typography variant="subtitle1" gutterBottom className={classes.botDesc}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</Typography>
      <Typography variant="h5" gutterBottom className={classes.prefix}>Prefix: !</Typography>
      <Typography variant="h6" gutterBottom className={classes.command}>Server Commands:</Typography>
    
      <Typography variant="subtitle2"  className={classes.command}>!about = <span className={classes.commandInfo}>About Design & Code.</span></Typography>
      <Typography variant="subtitle2"  className={classes.command}>!rules = <span className={classes.commandInfo}>Displays server rules.</span></Typography>
      <Typography variant="subtitle2"  className={classes.command}>!commands = <span className={classes.commandInfo}>Displays all commands.</span></Typography>

    </Grid>
  );
}

export default Bot;