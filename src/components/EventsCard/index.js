import React from "react";

//Importing Material UI stuff
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box,Grid } from "@material-ui/core";

import Banner from "../../assets/Canva Event Thumbnail (3) 1.png";
import { ContainedButton } from "../../components/Buttons";

import style from "./style";
import EventCapsules from "../EventCapsules";

const useStyles = makeStyles(style);

const Card = (props) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4} >
    <Box className={`${classes.eventsCard} eventsCard`}>
      <Box className={`${classes.bannerOuter} bannerOuter`}>
        <img src={props.img} alt="Image" className={classes.banner} />
      </Box>
      <Box className={classes.eventContent}>
        <Typography className={classes.eventName} variant="h5">{props.name}</Typography>
        <Box className={classes.eventBox}>

          <EventCapsules 
            svg={
              <svg className={classes.svg} width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.66667 7.25H3.11111V8.75H4.66667V7.25ZM7.77778 7.25H6.22222V8.75H7.77778V7.25ZM10.8889 7.25H9.33333V8.75H10.8889V7.25ZM12.4444 2H11.6667V0.5H10.1111V2H3.88889V0.5H2.33333V2H1.55556C0.692222 2 0.00777777 2.675 0.00777777 3.5L0 14C0 14.825 0.692222 15.5 1.55556 15.5H12.4444C13.3 15.5 14 14.825 14 14V3.5C14 2.675 13.3 2 12.4444 2ZM12.4444 14H1.55556V5.75H12.4444V14Z" fill="white"/>
              </svg>
            }
            text={props.date}
          />

          <EventCapsules 
            svg={
              <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 17C13.1421 17 16.5 13.6421 16.5 9.5C16.5 5.35786 13.1421 2 9 2C4.85786 2 1.5 5.35786 1.5 9.5C1.5 13.6421 4.85786 17 9 17Z" stroke="white" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9 5V9.5L12 11" stroke="white" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            }
            text={props.time}
          />

          <EventCapsules 
            svg={
              <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.3306 2.79159C21.0826 1.85789 20.3519 1.12247 19.4242 0.872856C17.7427 0.419434 11 0.419434 11 0.419434C11 0.419434 4.25722 0.419434 2.57562 0.872903C1.64792 1.12251 0.917281 1.85789 0.669312 2.79164C0.21875 4.48406 0.21875 8.0153 0.21875 8.0153C0.21875 8.0153 0.21875 11.5466 0.669312 13.239C0.917281 14.1727 1.64792 14.8775 2.57562 15.1271C4.25722 15.5806 11 15.5806 11 15.5806C11 15.5806 17.7427 15.5806 19.4242 15.1271C20.3519 14.8774 21.0826 14.1727 21.3306 13.2389C21.7812 11.5465 21.7812 8.01525 21.7812 8.01525C21.7812 8.01525 21.7812 4.48406 21.3306 2.79159Z" fill="#FF0000"/>
              <path d="M8.79468 11.2214V4.8092L14.4303 8.01536L8.79468 11.2214Z" fill="white"/>
              </svg>
            }
            text={"Youtube LIVE"}
          />


        </Box>
           
              <div className="rsvp-outer">
              <ContainedButton
                href={props.link}
                target="_blank"
                className={classes.rvspButton}
              >
                  RSVP
              </ContainedButton>
              </div>
            
      </Box>
    </Box>
    </Grid>
  );
};

export default Card;
