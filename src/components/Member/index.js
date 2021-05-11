import React,{useState, useEffect} from "react";

import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//Importing Components

import style from "./style";
import Links from '../Links/index'
const useStyles = makeStyles(style);

function Member({ image, linkedIn, instagram, youtube, website}) {
  const classes = useStyles();
  const [IsDesktop, setIsDesktop] = useState(window.innerWidth > 900)
  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 900);
  };
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  return (
    <Grid item className={classes.member} xs={12} sm={6} md={4}>

      <div className={ classes.infoHolder}>
        <div className={classes.imageWrapper}>
          <img className={classes.image} src={image} alt="Member" />
        </div>
        <div className={classes.infoBox}>
          <Typography variant="h5" className={classes.title}>Devraj Chatribin</Typography>
          <Typography variant="h6" className={classes.role}>FOUNDER & DESIGN LEAD</Typography>
          <Typography variant="subtitle2" className={classes.description}>Web Developer | UI/UX Designer</Typography>
          <div style={{display:'flex'}}>
              <Links linkedIn={linkedIn} instagram={instagram} youtube={youtube} website={website} />
          </div>
        </div>
      </div>
    </Grid>
  );
}

export default Member;
