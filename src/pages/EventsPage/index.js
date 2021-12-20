import React, { useState } from "react";

//Importing Material UI stuff
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";

import logo from "../../assets/Group 181.png";
import { ContainedButton } from "../../components/Buttons";
import Card from "../../components/EventsCard";

import style from "./style";
// import { Pagination } from "@material-ui/lab";
import EventsPast from "../../components/EventsPast";

import events from "../../events.json"
import ReadyToStart from "../../components/ReadyToStart";

const useStyles = makeStyles(style);

function EventsPage() {
  const [Events, setEvents] = useState(events)

  const classes = useStyles();
  return (
    <div className={classes.eventsPage}>
      {/* Header section */}
      <div className={classes.section}>
        <img src={logo} alt="Logo" className={classes.image} />
        <div className="event-header">
          <Typography variant="h2" gutterBottom className={classes.title}>
            Our Events
          </Typography>
          <Typography variant="h6" gutterBottom className={classes.description}>
            We host workshops, work/study sessions, community hangouts and more!
          </Typography>
          <ContainedButton
            className={classes.button}
            href=""
            target="_blank"
            size="large"
          >
            Host With Us
          </ContainedButton>
        </div>
      </div>

      {/* Upcoming Events */}
      <Typography variant="h4" className={classes.subtitle}>
        Upcoming Events
      </Typography>
      <Grid
        container
        spacing={5}
        style={{marginBottom:'1rem'}}
      >  
        {
          Events.upcoming.map((event)=>{
            return(
              <Card img={event.thumbnail} name={event.name} date={event.date} time={event.time} link={event.rsvpLink}/>
            )
          })
        }
      </Grid>

      {/* Past Events */}
      <Typography variant="h4" className={classes.subtitle}>
        Past Events
      </Typography>
      <Grid
        container
        spacing={3}
        className={classes.pastEventBox}
      >  
 
        {
          Events.past.map((event)=>{
            return(
              <EventsPast img={event.thumbnail} name={event.name} link={event.link}/>
            )
          })
        }
      </Grid>

      {/*<Pagination count={10} style={{display:'flex',justifyContent:'center'}} variant="outlined" shape="rounded" {}/>*/}
      <ReadyToStart/>
    </div>
  );
}

export default EventsPage;
