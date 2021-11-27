import React from "react";

//Importing Material UI stuff
import { makeStyles } from "@material-ui/core/styles";
import { Typography,Box,Grid } from "@material-ui/core";

import Banner from "../../assets/Canva Event Thumbnail (3) 1.png";
import Play from "../../assets/play.png";
import EventCapsules from "../EventCapsules";

import style from "./style";


const useStyles = makeStyles(style);

const EventsPast = (props) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4} >
    <a href={props.link}>
    <Box className={`${classes.eventsCard} eventsCard`}>
      <Box className={`${classes.bannerOuter} bannerOuterPast`}>
        <img src={props.img} alt="Image" className={`${classes.banner} bannerPastImage`} />
        <Typography className={classes.eventName} variant="h6">{props.name}</Typography>
    
        <div className={`${classes.play} play`} >
          
            <EventCapsules 
                svg={
                  <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.3306 2.79159C21.0826 1.85789 20.3519 1.12247 19.4242 0.872856C17.7427 0.419434 11 0.419434 11 0.419434C11 0.419434 4.25722 0.419434 2.57562 0.872903C1.64792 1.12251 0.917281 1.85789 0.669312 2.79164C0.21875 4.48406 0.21875 8.0153 0.21875 8.0153C0.21875 8.0153 0.21875 11.5466 0.669312 13.239C0.917281 14.1727 1.64792 14.8775 2.57562 15.1271C4.25722 15.5806 11 15.5806 11 15.5806C11 15.5806 17.7427 15.5806 19.4242 15.1271C20.3519 14.8774 21.0826 14.1727 21.3306 13.2389C21.7812 11.5465 21.7812 8.01525 21.7812 8.01525C21.7812 8.01525 21.7812 4.48406 21.3306 2.79159Z" fill="#FF0000"/>
                  <path d="M8.79468 11.2214V4.8092L14.4303 8.01536L8.79468 11.2214Z" fill="white"/>
                  </svg>
                }
                text={"View on Youtube"}
              />
          
        </div>
       
      </Box>
    </Box>
    </a>
    </Grid>
  );
};

export default EventsPast;
