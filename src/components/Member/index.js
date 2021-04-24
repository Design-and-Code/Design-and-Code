import React from "react";

import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//Importing Components

import style from "./style";
import Links from '../Links/index'
const useStyles = makeStyles(style);

function Member({ image, linkedIn, instagram, youtube, website}) {
  const classes = useStyles();

  return (
    <div className={classes.member}>
      <div className={classes.imageHolder}>
        <img className={classes.image} src={image} alt="Member" />
      </div>
      <div className={classes.infoHolder}>
        <Typography variant="h5" className={classes.title}>Devraj Chatribin</Typography>
        <Typography variant="h6" className={classes.role}>FOUNDER & DESIGN LEAD</Typography>
        <Typography variant="subtitle2" className={classes.description}>Web Developer | UI/UX Designer</Typography>
        <div style={{display:'flex'}}>
            <Links linkedIn={linkedIn} instagram={instagram} youtube={youtube} website={website} />
        </div>
      </div>
    </div>
  );
}

export default Member;
