import React from "react";

//Importing Material UI stuff
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";

import logo from "../../assets/image 25.png";
import { ContainedButton, OutlinedButton } from "../../components/Buttons";
import Card from "../../components/EventsCard";

import style from "./style";
import { Pagination } from "@material-ui/lab";
import EventsPast from "../../components/EventsPast";

const useStyles = makeStyles(style);

function EventsPage() {
  const classes = useStyles();
  return (
    <div className={classes.eventsPage}>
      {/* Header section */}
      <div className={classes.section}>
        <img src={logo} alt="Logo" className={classes.image} />
        <div>
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
      >  
        <Card />
        <Card />
        <Card />
      </Grid>

      {/* Past Events */}
      <Typography variant="h4" className={classes.subtitle}>
        Past Events
      </Typography>
      <Grid
        container
        spacing={5}
        gutterBottom
      >  
        <EventsPast />
        <EventsPast />
        <EventsPast />
        <EventsPast />
        <EventsPast />
        <EventsPast />
      </Grid>

      <Pagination count={10} style={{display:'flex',justifyContent:'center'}} variant="outlined" shape="rounded" />

      {/* Ready to start Journey section */}
      
      

      <Grid
        container
        className={`${classes.section} ${classes.journeySection}`}
      >
        <Typography variant="h3" gutterBottom className={classes.subtitle}>
          Ready to start your journey?
        </Typography>

        <ContainedButton
          size="large"
          href="https://discord.gg/druweDMn3s"
          target="_blank"
        >
          JOIN DISCORD
        </ContainedButton>
      </Grid>
    </div>
  );
}

export default EventsPage;
