import React,{useState, useEffect} from "react";

import { Typography } from "@material-ui/core";
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
    <div className={classes.member}>

      <div className={ IsDesktop ? classes.infoHolder : classes.infoHolder2}>
        <div className={classes.imageWrapper}>
          <img className={IsDesktop ? classes.image : classes.image2 } src={image} alt="Member" />
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
    </div>
  );
}

export default Member;
